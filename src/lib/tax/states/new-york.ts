import type { StateTaxTable } from "@/types/paycheck";

/**
 * ⚠️ PLACEHOLDER DATA — verify against NY Dept. of Taxation and Finance.
 * NYC and Yonkers add their own local income tax on top of this state
 * table; not modeled yet.
 * Source: https://www.tax.ny.gov/pdf/current_forms/it/it201i.pdf
 */
export const newYork: StateTaxTable = {
  code: "NY",
  name: "New York",
  standardDeduction: {
    single: 8000,
    marriedJoint: 16050,
    marriedSeparate: 8000,
    headOfHousehold: 11200,
  },
  brackets: {
    single: [
      { upTo: 8500, rate: 0.04 },
      { upTo: 11700, rate: 0.045 },
      { upTo: 13900, rate: 0.0525 },
      { upTo: 80650, rate: 0.055 },
      { upTo: 215400, rate: 0.06 },
      { upTo: 1077550, rate: 0.0685 },
      { upTo: null, rate: 0.0965 },
    ],
    marriedJoint: [
      { upTo: 17150, rate: 0.04 },
      { upTo: 23600, rate: 0.045 },
      { upTo: 27900, rate: 0.0525 },
      { upTo: 161550, rate: 0.055 },
      { upTo: 323200, rate: 0.06 },
      { upTo: 2155350, rate: 0.0685 },
      { upTo: null, rate: 0.0965 },
    ],
    marriedSeparate: [
      { upTo: 8500, rate: 0.04 },
      { upTo: 11700, rate: 0.045 },
      { upTo: 13900, rate: 0.0525 },
      { upTo: 80650, rate: 0.055 },
      { upTo: 215400, rate: 0.06 },
      { upTo: 1077550, rate: 0.0685 },
      { upTo: null, rate: 0.0965 },
    ],
    headOfHousehold: [
      { upTo: 12800, rate: 0.04 },
      { upTo: 17650, rate: 0.045 },
      { upTo: 20900, rate: 0.0525 },
      { upTo: 107650, rate: 0.055 },
      { upTo: 269300, rate: 0.06 },
      { upTo: 1616450, rate: 0.0685 },
      { upTo: null, rate: 0.0965 },
    ],
  },
  notes: "Excludes NYC/Yonkers local income tax.",
};
