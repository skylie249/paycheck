export type FilingStatus = "single" | "marriedJoint" | "marriedSeparate" | "headOfHousehold";

export type PayFrequency = "weekly" | "biweekly" | "semimonthly" | "monthly" | "annually";

export interface TaxBracket {
  /** Taxable income up to this amount (exclusive) is taxed at `rate`. Use null for the top bracket. */
  upTo: number | null;
  rate: number; // e.g. 0.10 for 10%
}

export interface FederalTaxTable {
  year: number;
  standardDeduction: Record<FilingStatus, number>;
  brackets: Record<FilingStatus, TaxBracket[]>;
}

export interface StateTaxTable {
  code: string; // e.g. "CA"
  name: string;
  /** Flat rate states can set a single bracket with upTo: null. No-income-tax states use an empty array. */
  brackets: Record<FilingStatus, TaxBracket[]> | null;
  standardDeduction?: Record<FilingStatus, number>;
  notes?: string;
}

export interface FicaTable {
  year: number;
  socialSecurityRate: number;
  socialSecurityWageCap: number;
  medicareRate: number;
  additionalMedicareRate: number;
  additionalMedicareThreshold: Record<FilingStatus, number>;
}

export interface PaycheckInput {
  grossAnnualSalary: number;
  filingStatus: FilingStatus;
  stateCode: string;
  payFrequency: PayFrequency;
  preTaxDeductions?: number; // 401k, health insurance premiums, etc. (annual)
}

export interface PaycheckResult {
  grossPerPeriod: number;
  federalTaxPerPeriod: number;
  stateTaxPerPeriod: number;
  socialSecurityPerPeriod: number;
  medicarePerPeriod: number;
  netPerPeriod: number;
  annual: {
    gross: number;
    federalTax: number;
    stateTax: number;
    socialSecurity: number;
    medicare: number;
    net: number;
  };
}
