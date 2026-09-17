import type { StateTaxTable } from "@/types/paycheck";

/**
 * ⚠️ PLACEHOLDER DATA — verify against Hawaii Dept. of Taxation before launch.
 * Source: https://taxfoundation.org/data/all/state/state-income-tax-rates/
 * (cross-checked against tax-brackets.org; reflects Hawaii's 2024 tax
 * reform law that significantly raised bracket thresholds starting 2025.)
 * Official tables: https://tax.hawaii.gov/forms/d_25table-on/
 *
 * Married-separate/head-of-household brackets reuse the single schedule —
 * HI publishes distinct schedules for those not modeled here (the
 * head-of-household standard deduction below is the real HI figure).
 */
const singleBrackets = [
  { upTo: 9600, rate: 0.014 },
  { upTo: 14400, rate: 0.032 },
  { upTo: 19200, rate: 0.055 },
  { upTo: 24000, rate: 0.064 },
  { upTo: 36000, rate: 0.068 },
  { upTo: 48000, rate: 0.072 },
  { upTo: 125000, rate: 0.076 },
  { upTo: 175000, rate: 0.079 },
  { upTo: 225000, rate: 0.0825 },
  { upTo: 275000, rate: 0.09 },
  { upTo: 325000, rate: 0.1 },
  { upTo: null, rate: 0.11 },
];

const marriedJointBrackets = [
  { upTo: 19200, rate: 0.014 },
  { upTo: 28800, rate: 0.032 },
  { upTo: 38400, rate: 0.055 },
  { upTo: 48000, rate: 0.064 },
  { upTo: 72000, rate: 0.068 },
  { upTo: 96000, rate: 0.072 },
  { upTo: 250000, rate: 0.076 },
  { upTo: 350000, rate: 0.079 },
  { upTo: 450000, rate: 0.0825 },
  { upTo: 550000, rate: 0.09 },
  { upTo: 650000, rate: 0.1 },
  { upTo: null, rate: 0.11 },
];

export const hawaii: StateTaxTable = {
  code: "HI",
  name: "Hawaii",
  standardDeduction: {
    single: 4400,
    marriedJoint: 8800,
    marriedSeparate: 4400,
    headOfHousehold: 6424,
  },
  brackets: {
    single: singleBrackets,
    marriedJoint: marriedJointBrackets,
    marriedSeparate: singleBrackets,
    headOfHousehold: singleBrackets,
  },
};
