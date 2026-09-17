import { federalTaxTable } from "@/lib/tax/federal";
import { ficaTable } from "@/lib/tax/fica";
import { getStateTaxTable } from "@/lib/tax/states";
import type { PaycheckInput, PaycheckResult, PayFrequency, TaxBracket } from "@/types/paycheck";

const PAY_PERIODS_PER_YEAR: Record<PayFrequency, number> = {
  weekly: 52,
  biweekly: 26,
  semimonthly: 24,
  monthly: 12,
  annually: 1,
};

/**
 * Applies a progressive bracket table to taxable income.
 * Brackets must be sorted ascending with the last bracket's `upTo` as null.
 */
function applyBrackets(taxableIncome: number, brackets: TaxBracket[]): number {
  if (taxableIncome <= 0) return 0;

  let tax = 0;
  let lowerBound = 0;

  for (const bracket of brackets) {
    const upperBound = bracket.upTo ?? Infinity;
    if (taxableIncome <= lowerBound) break;

    const amountInBracket = Math.min(taxableIncome, upperBound) - lowerBound;
    if (amountInBracket > 0) {
      tax += amountInBracket * bracket.rate;
    }
    lowerBound = upperBound;
  }

  return tax;
}

function calculateFederalTax(taxableIncome: number, filingStatus: PaycheckInput["filingStatus"]): number {
  const brackets = federalTaxTable.brackets[filingStatus];
  return applyBrackets(taxableIncome, brackets);
}

function calculateStateTax(
  grossIncome: number,
  filingStatus: PaycheckInput["filingStatus"],
  stateCode: string
): number {
  const table = getStateTaxTable(stateCode);
  if (!table || !table.brackets) return 0; // unknown or no-income-tax state

  const standardDeduction = table.standardDeduction?.[filingStatus] ?? 0;
  const taxableIncome = Math.max(0, grossIncome - standardDeduction);
  return applyBrackets(taxableIncome, table.brackets[filingStatus]);
}

function calculateFica(grossIncome: number, filingStatus: PaycheckInput["filingStatus"]) {
  const socialSecurityWages = Math.min(grossIncome, ficaTable.socialSecurityWageCap);
  const socialSecurity = socialSecurityWages * ficaTable.socialSecurityRate;

  const medicareBase = grossIncome * ficaTable.medicareRate;
  const additionalThreshold = ficaTable.additionalMedicareThreshold[filingStatus];
  const additionalMedicare =
    grossIncome > additionalThreshold
      ? (grossIncome - additionalThreshold) * ficaTable.additionalMedicareRate
      : 0;

  return {
    socialSecurity,
    medicare: medicareBase + additionalMedicare,
  };
}

export function calculatePaycheck(input: PaycheckInput): PaycheckResult {
  const periodsPerYear = PAY_PERIODS_PER_YEAR[input.payFrequency];
  const preTaxDeductions = input.preTaxDeductions ?? 0;

  // Federal/state taxable income after pre-tax deductions and the standard deduction.
  const incomeAfterPreTax = Math.max(0, input.grossAnnualSalary - preTaxDeductions);
  const federalStandardDeduction = federalTaxTable.standardDeduction[input.filingStatus];
  const federalTaxableIncome = Math.max(0, incomeAfterPreTax - federalStandardDeduction);

  const federalTax = calculateFederalTax(federalTaxableIncome, input.filingStatus);
  const stateTax = calculateStateTax(incomeAfterPreTax, input.filingStatus, input.stateCode);

  // FICA is calculated on gross wages before pre-tax deductions like 401k
  // traditional contributions are still subject to FICA (unlike income tax).
  const { socialSecurity, medicare } = calculateFica(input.grossAnnualSalary, input.filingStatus);

  const annualNet = input.grossAnnualSalary - federalTax - stateTax - socialSecurity - medicare - preTaxDeductions;

  return {
    grossPerPeriod: input.grossAnnualSalary / periodsPerYear,
    federalTaxPerPeriod: federalTax / periodsPerYear,
    stateTaxPerPeriod: stateTax / periodsPerYear,
    socialSecurityPerPeriod: socialSecurity / periodsPerYear,
    medicarePerPeriod: medicare / periodsPerYear,
    netPerPeriod: annualNet / periodsPerYear,
    annual: {
      gross: input.grossAnnualSalary,
      federalTax,
      stateTax,
      socialSecurity,
      medicare,
      net: annualNet,
    },
  };
}
