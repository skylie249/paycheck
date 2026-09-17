import type { FilingStatus, StateTaxTable, TaxBracket } from "@/types/paycheck";

/**
 * ⚠️ PLACEHOLDER DATA — verify against each state's Dept. of Revenue before launch.
 * True flat-tax states: the same single rate applies to all taxable income,
 * regardless of filing status, so these are accurate as long as the rate
 * and standard deduction are current. Sourced from Tax Foundation's 2025
 * state income tax rates summary: https://taxfoundation.org/data/all/state/state-income-tax-rates/
 * Some of these states use a personal exemption instead of (or alongside) a
 * standard deduction, or a nonrefundable credit (e.g. Utah) rather than a
 * deduction — those nuances are simplified here as an equivalent standard
 * deduction and should be revisited before launch.
 */

interface FlatStateDef {
  code: string;
  name: string;
  rate: number;
  standardDeductionSingle: number;
  standardDeductionMarried: number;
  notes?: string;
}

const flatStateDefs: FlatStateDef[] = [
  { code: "IL", name: "Illinois", rate: 0.0495, standardDeductionSingle: 2850, standardDeductionMarried: 5700, notes: "Uses a personal exemption, not a standard deduction; approximated here." },
  { code: "PA", name: "Pennsylvania", rate: 0.0307, standardDeductionSingle: 0, standardDeductionMarried: 0, notes: "No standard deduction or personal exemption." },
  { code: "GA", name: "Georgia", rate: 0.0539, standardDeductionSingle: 12000, standardDeductionMarried: 24000 },
  { code: "NC", name: "North Carolina", rate: 0.0425, standardDeductionSingle: 12750, standardDeductionMarried: 25500 },
  { code: "MI", name: "Michigan", rate: 0.0425, standardDeductionSingle: 5800, standardDeductionMarried: 11600, notes: "Uses a personal exemption, not a standard deduction; approximated here." },
  { code: "AZ", name: "Arizona", rate: 0.025, standardDeductionSingle: 15000, standardDeductionMarried: 30000 },
  { code: "CO", name: "Colorado", rate: 0.044, standardDeductionSingle: 15000, standardDeductionMarried: 30000 },
  { code: "IN", name: "Indiana", rate: 0.03, standardDeductionSingle: 0, standardDeductionMarried: 0, notes: "County-level income taxes also apply and are not modeled." },
  { code: "IA", name: "Iowa", rate: 0.038, standardDeductionSingle: 0, standardDeductionMarried: 0 },
  { code: "KY", name: "Kentucky", rate: 0.04, standardDeductionSingle: 3270, standardDeductionMarried: 6540 },
  { code: "LA", name: "Louisiana", rate: 0.03, standardDeductionSingle: 12500, standardDeductionMarried: 25000 },
  { code: "MS", name: "Mississippi", rate: 0.044, standardDeductionSingle: 2300, standardDeductionMarried: 4600 },
  { code: "UT", name: "Utah", rate: 0.0455, standardDeductionSingle: 0, standardDeductionMarried: 0, notes: "Uses a nonrefundable taxpayer credit instead of a standard deduction; not modeled." },
];

function buildFlatBrackets(rate: number): TaxBracket[] {
  return [{ upTo: null, rate }];
}

function toFilingStatusBrackets(rate: number): Record<FilingStatus, TaxBracket[]> {
  const brackets = buildFlatBrackets(rate);
  return {
    single: brackets,
    marriedJoint: brackets,
    marriedSeparate: brackets,
    headOfHousehold: brackets,
  };
}

export const flatRateStates: Record<string, StateTaxTable> = Object.fromEntries(
  flatStateDefs.map((def) => [
    def.code,
    {
      code: def.code,
      name: def.name,
      brackets: toFilingStatusBrackets(def.rate),
      standardDeduction: {
        single: def.standardDeductionSingle,
        marriedJoint: def.standardDeductionMarried,
        marriedSeparate: def.standardDeductionSingle,
        headOfHousehold: def.standardDeductionSingle,
      },
      notes: def.notes,
    } satisfies StateTaxTable,
  ])
);
