import type { StateTaxTable } from "@/types/paycheck";

/**
 * ⚠️ PLACEHOLDER DATA — verify against Oklahoma Tax Commission before launch.
 * Source: https://taxfoundation.org/data/all/state/state-income-tax-rates/
 * (standard deduction cross-checked against Oklahoma Form 511 instructions
 * summary, which also gives the head-of-household amount.)
 *
 * Married-separate/head-of-household reuse the single bracket schedule —
 * OK publishes the same six-bracket schedule for single and HOH filers, but
 * head-of-household uses its own standard deduction.
 */
const singleBrackets = [
  { upTo: 1000, rate: 0.0025 },
  { upTo: 2500, rate: 0.0075 },
  { upTo: 3750, rate: 0.0175 },
  { upTo: 4900, rate: 0.0275 },
  { upTo: 7200, rate: 0.0375 },
  { upTo: null, rate: 0.0475 },
];

export const oklahoma: StateTaxTable = {
  code: "OK",
  name: "Oklahoma",
  standardDeduction: {
    single: 6350,
    marriedJoint: 12700,
    marriedSeparate: 6350,
    headOfHousehold: 9350,
  },
  brackets: {
    single: singleBrackets,
    marriedJoint: [
      { upTo: 2000, rate: 0.0025 },
      { upTo: 5000, rate: 0.0075 },
      { upTo: 7500, rate: 0.0175 },
      { upTo: 9800, rate: 0.0275 },
      { upTo: 14400, rate: 0.0375 },
      { upTo: null, rate: 0.0475 },
    ],
    marriedSeparate: singleBrackets,
    headOfHousehold: singleBrackets,
  },
};
