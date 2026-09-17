import type { StateTaxTable } from "@/types/paycheck";

/**
 * ⚠️ PLACEHOLDER DATA — verify against Ohio Dept. of Taxation before launch.
 * Source: https://taxfoundation.org/data/all/state/state-income-tax-rates/
 * Ohio also has municipal/school-district income taxes layered on top,
 * which are not modeled here.
 */
const brackets = [
  { upTo: 26050, rate: 0 },
  { upTo: 100000, rate: 0.0275 },
  { upTo: null, rate: 0.035 },
];

export const ohio: StateTaxTable = {
  code: "OH",
  name: "Ohio",
  standardDeduction: {
    single: 0,
    marriedJoint: 0,
    marriedSeparate: 0,
    headOfHousehold: 0,
  },
  brackets: {
    single: brackets,
    marriedJoint: brackets,
    marriedSeparate: brackets,
    headOfHousehold: brackets,
  },
  notes: "Excludes municipal and school-district income taxes.",
};
