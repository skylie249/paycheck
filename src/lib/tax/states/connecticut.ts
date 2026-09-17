import type { StateTaxTable } from "@/types/paycheck";

/**
 * ⚠️ PLACEHOLDER DATA — verify against CT Dept. of Revenue Services before launch.
 * Source: https://taxfoundation.org/data/all/state/state-income-tax-rates/
 * (cross-checked against ustax.tools 2025 summary)
 *
 * CT has no standard deduction — only a personal exemption that phases out
 * with income, plus a "recapture" provision that claws back the benefit of
 * lower brackets for high earners. Neither is modeled here, so this will
 * understate tax for high-income CT filers. Married-separate/head-of-
 * household reuse the single bracket schedule — CT publishes a distinct
 * schedule for those not modeled here.
 */
const singleBrackets = [
  { upTo: 10000, rate: 0.02 },
  { upTo: 50000, rate: 0.045 },
  { upTo: 100000, rate: 0.055 },
  { upTo: 200000, rate: 0.06 },
  { upTo: 250000, rate: 0.065 },
  { upTo: 500000, rate: 0.069 },
  { upTo: null, rate: 0.0699 },
];

const marriedJointBrackets = [
  { upTo: 20000, rate: 0.02 },
  { upTo: 100000, rate: 0.045 },
  { upTo: 200000, rate: 0.055 },
  { upTo: 400000, rate: 0.06 },
  { upTo: 500000, rate: 0.065 },
  { upTo: 1000000, rate: 0.069 },
  { upTo: null, rate: 0.0699 },
];

export const connecticut: StateTaxTable = {
  code: "CT",
  name: "Connecticut",
  standardDeduction: {
    single: 0,
    marriedJoint: 0,
    marriedSeparate: 0,
    headOfHousehold: 0,
  },
  brackets: {
    single: singleBrackets,
    marriedJoint: marriedJointBrackets,
    marriedSeparate: singleBrackets,
    headOfHousehold: singleBrackets,
  },
  notes:
    "No standard deduction modeled (CT uses a phasing-out personal exemption instead); high-earner recapture provision also not modeled.",
};
