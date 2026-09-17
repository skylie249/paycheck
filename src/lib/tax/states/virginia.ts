import type { StateTaxTable } from "@/types/paycheck";

/**
 * ⚠️ PLACEHOLDER DATA — verify against Virginia Dept. of Taxation before launch.
 * Source: https://taxfoundation.org/data/all/state/state-income-tax-rates/
 */
const brackets = [
  { upTo: 3000, rate: 0.02 },
  { upTo: 5000, rate: 0.03 },
  { upTo: 17000, rate: 0.05 },
  { upTo: null, rate: 0.0575 },
];

export const virginia: StateTaxTable = {
  code: "VA",
  name: "Virginia",
  standardDeduction: {
    single: 8500,
    marriedJoint: 17000,
    marriedSeparate: 8500,
    headOfHousehold: 8500,
  },
  brackets: {
    single: brackets,
    marriedJoint: brackets,
    marriedSeparate: brackets,
    headOfHousehold: brackets,
  },
  notes: "Excludes personal exemption ($930 single / $1,860 married).",
};
