import type { StateTaxTable } from "@/types/paycheck";

/**
 * ⚠️ PLACEHOLDER DATA — verify against NJ Division of Taxation before launch.
 * Source: https://taxfoundation.org/data/all/state/state-income-tax-rates/
 * NJ brackets differ meaningfully between single and married filers (not a
 * simple doubling), so both are entered explicitly.
 */
export const newJersey: StateTaxTable = {
  code: "NJ",
  name: "New Jersey",
  standardDeduction: {
    single: 0,
    marriedJoint: 0,
    marriedSeparate: 0,
    headOfHousehold: 0,
  },
  brackets: {
    single: [
      { upTo: 20000, rate: 0.014 },
      { upTo: 35000, rate: 0.0175 },
      { upTo: 40000, rate: 0.035 },
      { upTo: 75000, rate: 0.05525 },
      { upTo: 500000, rate: 0.0637 },
      { upTo: 1000000, rate: 0.0897 },
      { upTo: null, rate: 0.1075 },
    ],
    marriedJoint: [
      { upTo: 20000, rate: 0.014 },
      { upTo: 50000, rate: 0.0175 },
      { upTo: 70000, rate: 0.0245 },
      { upTo: 80000, rate: 0.035 },
      { upTo: 150000, rate: 0.05525 },
      { upTo: 500000, rate: 0.0637 },
      { upTo: 1000000, rate: 0.0897 },
      { upTo: null, rate: 0.1075 },
    ],
    marriedSeparate: [
      { upTo: 20000, rate: 0.014 },
      { upTo: 35000, rate: 0.0175 },
      { upTo: 40000, rate: 0.035 },
      { upTo: 75000, rate: 0.05525 },
      { upTo: 500000, rate: 0.0637 },
      { upTo: 1000000, rate: 0.0897 },
      { upTo: null, rate: 0.1075 },
    ],
    headOfHousehold: [
      { upTo: 20000, rate: 0.014 },
      { upTo: 50000, rate: 0.0175 },
      { upTo: 70000, rate: 0.0245 },
      { upTo: 80000, rate: 0.035 },
      { upTo: 150000, rate: 0.05525 },
      { upTo: 500000, rate: 0.0637 },
      { upTo: 1000000, rate: 0.0897 },
      { upTo: null, rate: 0.1075 },
    ],
  },
  notes: "No standard deduction; NJ uses personal exemptions instead (not modeled).",
};
