import type { StateTaxTable } from "@/types/paycheck";

/**
 * ⚠️ PLACEHOLDER DATA — verify against Oregon Dept. of Revenue before launch.
 * Source: https://taxfoundation.org/data/all/state/state-income-tax-rates/
 * (cross-checked against ustax.tools; standard deduction from the 2025
 * USDA/NFC payroll bulletin summarizing OR DOR withholding formulas:
 * https://help.nfc.usda.gov/bulletins/2025/1743009231.htm)
 *
 * Excludes the Portland-area Metro Supportive Housing Services (1%) and
 * Multnomah County Preschool for All (1.5%–3%) income taxes layered on top
 * for residents/workers in that area — not modeled. Married-separate/
 * head-of-household reuse the single bracket schedule and deduction — OR
 * publishes distinct schedules for those not modeled here.
 */
const singleBrackets = [
  { upTo: 4400, rate: 0.0475 },
  { upTo: 11100, rate: 0.0675 },
  { upTo: 125000, rate: 0.0875 },
  { upTo: null, rate: 0.099 },
];

const marriedJointBrackets = [
  { upTo: 8800, rate: 0.0475 },
  { upTo: 22200, rate: 0.0675 },
  { upTo: 250000, rate: 0.0875 },
  { upTo: null, rate: 0.099 },
];

export const oregon: StateTaxTable = {
  code: "OR",
  name: "Oregon",
  standardDeduction: {
    single: 2835,
    marriedJoint: 5670,
    marriedSeparate: 2835,
    headOfHousehold: 2835,
  },
  brackets: {
    single: singleBrackets,
    marriedJoint: marriedJointBrackets,
    marriedSeparate: singleBrackets,
    headOfHousehold: singleBrackets,
  },
  notes:
    "Excludes Portland-area Metro/Multnomah County local income taxes. Married-separate/head-of-household reuse the single schedule.",
};
