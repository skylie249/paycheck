import type { StateTaxTable } from "@/types/paycheck";

/**
 * ⚠️ PLACEHOLDER DATA — verify against Wisconsin Dept. of Revenue before launch.
 * Source: https://taxfoundation.org/data/all/state/state-income-tax-rates/
 * (cross-checked against SmartAsset and tax-brackets.org 2025 summaries)
 *
 * Wisconsin's real standard deduction is a sliding scale that phases down to
 * $0 as income rises — the values below are the maximum (at low incomes)
 * only. WI also publishes separate bracket schedules for married-filing-
 * separately and head-of-household; the single schedule is reused here for
 * both, which will be inexact for those filers.
 */
const singleBrackets = [
  { upTo: 14680, rate: 0.035 },
  { upTo: 29370, rate: 0.044 },
  { upTo: 323290, rate: 0.053 },
  { upTo: null, rate: 0.0765 },
];

const marriedJointBrackets = [
  { upTo: 19580, rate: 0.035 },
  { upTo: 39150, rate: 0.044 },
  { upTo: 431060, rate: 0.053 },
  { upTo: null, rate: 0.0765 },
];

export const wisconsin: StateTaxTable = {
  code: "WI",
  name: "Wisconsin",
  standardDeduction: {
    single: 13560,
    marriedJoint: 25110,
    marriedSeparate: 13560,
    headOfHousehold: 13560,
  },
  brackets: {
    single: singleBrackets,
    marriedJoint: marriedJointBrackets,
    marriedSeparate: singleBrackets,
    headOfHousehold: singleBrackets,
  },
  notes:
    "Standard deduction shown is the maximum (phases down with income, not modeled). Married-separate/head-of-household reuse the single bracket schedule — WI publishes distinct schedules for those not modeled here.",
};
