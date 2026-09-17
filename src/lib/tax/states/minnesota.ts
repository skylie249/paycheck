import type { StateTaxTable } from "@/types/paycheck";

/**
 * ⚠️ PLACEHOLDER DATA — verify against Minnesota Dept. of Revenue before launch.
 * Source: https://www.revenue.state.mn.us/minnesota-income-tax-rates-and-brackets
 * (official MN DOR page; standard deduction figures confirmed via MN DOR
 * press release on 2025 brackets/deduction/exemption amounts.)
 */
export const minnesota: StateTaxTable = {
  code: "MN",
  name: "Minnesota",
  standardDeduction: {
    single: 14950,
    marriedJoint: 29900,
    marriedSeparate: 14950,
    headOfHousehold: 22500,
  },
  brackets: {
    single: [
      { upTo: 32570, rate: 0.0535 },
      { upTo: 106990, rate: 0.068 },
      { upTo: 198630, rate: 0.0785 },
      { upTo: null, rate: 0.0985 },
    ],
    marriedJoint: [
      { upTo: 47620, rate: 0.0535 },
      { upTo: 189180, rate: 0.068 },
      { upTo: 330410, rate: 0.0785 },
      { upTo: null, rate: 0.0985 },
    ],
    marriedSeparate: [
      { upTo: 23810, rate: 0.0535 },
      { upTo: 94590, rate: 0.068 },
      { upTo: 165205, rate: 0.0785 },
      { upTo: null, rate: 0.0985 },
    ],
    headOfHousehold: [
      { upTo: 40100, rate: 0.0535 },
      { upTo: 161130, rate: 0.068 },
      { upTo: 264050, rate: 0.0785 },
      { upTo: null, rate: 0.0985 },
    ],
  },
};
