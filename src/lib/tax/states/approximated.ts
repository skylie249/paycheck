import type { FilingStatus, StateTaxTable, TaxBracket } from "@/types/paycheck";

/**
 * ⚠️ SIMPLIFIED PLACEHOLDER DATA — approximate top marginal rate applied
 * as a flat rate, NOT the true progressive bracket structure.
 *
 * These states have genuinely progressive brackets, but to get the
 * calculator running end-to-end quickly, each is approximated here as a
 * single flat-equivalent rate applied after the standard deduction. This
 * will OVERSTATE tax for most incomes below the top bracket.
 *
 * Before launch, replace each of these with real bracket data (see
 * california.ts / new-jersey.ts / virginia.ts for the pattern to follow).
 * Rates and standard deductions sourced from Tax Foundation's 2025 summary:
 * https://taxfoundation.org/data/all/state/state-income-tax-rates/
 */

interface ApproxStateDef {
  code: string;
  name: string;
  approxRate: number; // top marginal rate, used as a flat approximation
  standardDeductionSingle: number;
  standardDeductionMarried: number;
}

const approxStateDefs: ApproxStateDef[] = [
  { code: "AL", name: "Alabama", approxRate: 0.05, standardDeductionSingle: 3000, standardDeductionMarried: 8500 },
  { code: "AR", name: "Arkansas", approxRate: 0.039, standardDeductionSingle: 2410, standardDeductionMarried: 4820 },
  { code: "CT", name: "Connecticut", approxRate: 0.0699, standardDeductionSingle: 0, standardDeductionMarried: 0 },
  { code: "DE", name: "Delaware", approxRate: 0.066, standardDeductionSingle: 3250, standardDeductionMarried: 6500 },
  { code: "DC", name: "District of Columbia", approxRate: 0.1075, standardDeductionSingle: 15000, standardDeductionMarried: 30000 },
  { code: "HI", name: "Hawaii", approxRate: 0.11, standardDeductionSingle: 4400, standardDeductionMarried: 8800 },
  { code: "ID", name: "Idaho", approxRate: 0.05695, standardDeductionSingle: 15000, standardDeductionMarried: 30000 },
  { code: "KS", name: "Kansas", approxRate: 0.0558, standardDeductionSingle: 3605, standardDeductionMarried: 8240 },
  { code: "ME", name: "Maine", approxRate: 0.0715, standardDeductionSingle: 15000, standardDeductionMarried: 30000 },
  { code: "MD", name: "Maryland", approxRate: 0.0575, standardDeductionSingle: 2700, standardDeductionMarried: 5400 },
  { code: "MN", name: "Minnesota", approxRate: 0.0985, standardDeductionSingle: 14950, standardDeductionMarried: 29900 },
  { code: "MO", name: "Missouri", approxRate: 0.047, standardDeductionSingle: 15000, standardDeductionMarried: 30000 },
  { code: "MT", name: "Montana", approxRate: 0.059, standardDeductionSingle: 15000, standardDeductionMarried: 30000 },
  { code: "NE", name: "Nebraska", approxRate: 0.052, standardDeductionSingle: 8600, standardDeductionMarried: 17200 },
  { code: "NM", name: "New Mexico", approxRate: 0.059, standardDeductionSingle: 15000, standardDeductionMarried: 30000 },
  { code: "ND", name: "North Dakota", approxRate: 0.025, standardDeductionSingle: 15000, standardDeductionMarried: 30000 },
  { code: "OK", name: "Oklahoma", approxRate: 0.0475, standardDeductionSingle: 6350, standardDeductionMarried: 12700 },
  { code: "OR", name: "Oregon", approxRate: 0.099, standardDeductionSingle: 2800, standardDeductionMarried: 5600 },
  { code: "RI", name: "Rhode Island", approxRate: 0.0599, standardDeductionSingle: 10900, standardDeductionMarried: 21800 },
  { code: "SC", name: "South Carolina", approxRate: 0.062, standardDeductionSingle: 15000, standardDeductionMarried: 30000 },
  { code: "VT", name: "Vermont", approxRate: 0.0875, standardDeductionSingle: 7400, standardDeductionMarried: 14800 },
  { code: "WV", name: "West Virginia", approxRate: 0.0482, standardDeductionSingle: 0, standardDeductionMarried: 0 },
  { code: "WI", name: "Wisconsin", approxRate: 0.0765, standardDeductionSingle: 13560, standardDeductionMarried: 25110 },
];

function toFilingStatusBrackets(rate: number): Record<FilingStatus, TaxBracket[]> {
  const brackets: TaxBracket[] = [{ upTo: null, rate }];
  return {
    single: brackets,
    marriedJoint: brackets,
    marriedSeparate: brackets,
    headOfHousehold: brackets,
  };
}

export const approximatedStates: Record<string, StateTaxTable> = Object.fromEntries(
  approxStateDefs.map((def) => [
    def.code,
    {
      code: def.code,
      name: def.name,
      brackets: toFilingStatusBrackets(def.approxRate),
      standardDeduction: {
        single: def.standardDeductionSingle,
        marriedJoint: def.standardDeductionMarried,
        marriedSeparate: def.standardDeductionSingle,
        headOfHousehold: def.standardDeductionSingle,
      },
      notes:
        "Approximated using the top marginal rate as a flat rate — overstates tax below the top bracket. Replace with real progressive brackets before launch.",
    } satisfies StateTaxTable,
  ])
);
