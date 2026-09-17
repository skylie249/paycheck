import type { StateTaxTable } from "@/types/paycheck";

/**
 * ⚠️ PLACEHOLDER DATA — verify against MA Dept. of Revenue before launch.
 * Source: https://taxfoundation.org/data/all/state/state-income-tax-rates/
 * MA has a flat 5% rate plus a 4% "millionaire's tax" surtax above ~$1.08M.
 */
const brackets = [
  { upTo: 1083150, rate: 0.05 },
  { upTo: null, rate: 0.09 },
];

export const massachusetts: StateTaxTable = {
  code: "MA",
  name: "Massachusetts",
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
  notes: "No standard deduction; MA uses a personal exemption instead (not modeled).",
};
