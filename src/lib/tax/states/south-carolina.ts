import type { StateTaxTable } from "@/types/paycheck";

/**
 * ⚠️ PLACEHOLDER DATA — verify against SC Dept. of Revenue before launch.
 * Source: https://dor.sc.gov/iit (official SCDOR page confirms the tax
 * year 2025 top marginal rate is 6%, down from 6.2% in 2024 — some
 * secondary aggregators still show the old 6.2% figure).
 * Full table: https://dor.sc.gov/sites/dor/files/forms/SC1040TT_2025.pdf
 *
 * SC applies the same bracket schedule to every filing status. Standard
 * deduction conforms to the federal amount (see federal.ts).
 */
const brackets = [
  { upTo: 3560, rate: 0 },
  { upTo: 17830, rate: 0.03 },
  { upTo: null, rate: 0.06 },
];

export const southCarolina: StateTaxTable = {
  code: "SC",
  name: "South Carolina",
  standardDeduction: {
    single: 15000,
    marriedJoint: 30000,
    marriedSeparate: 15000,
    headOfHousehold: 22500,
  },
  brackets: {
    single: brackets,
    marriedJoint: brackets,
    marriedSeparate: brackets,
    headOfHousehold: brackets,
  },
};
