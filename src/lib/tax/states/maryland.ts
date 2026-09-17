import type { StateTaxTable } from "@/types/paycheck";

/**
 * ⚠️ PLACEHOLDER DATA — verify against Comptroller of Maryland before launch.
 * Source: https://taxfoundation.org/data/all/state/state-income-tax-rates/
 * (cross-checked against ustax.tools; standard deduction reflects the 2025
 * legislative overhaul that replaced the old 15%-of-AGI formula with flat
 * amounts — see https://www.marylandcomptroller.gov tax alert on 2025
 * standard/itemized deduction changes.)
 *
 * Maryland pairs Single with Married-Filing-Separately, and Head-of-
 * Household with Married-Filing-Jointly, for both brackets and the standard
 * deduction. Excludes county "piggyback" income tax (2.25%–3.20% on top of
 * state tax, varies by county) — not modeled.
 */
const singleBrackets = [
  { upTo: 1000, rate: 0.02 },
  { upTo: 2000, rate: 0.03 },
  { upTo: 3000, rate: 0.04 },
  { upTo: 100000, rate: 0.0475 },
  { upTo: 125000, rate: 0.05 },
  { upTo: 150000, rate: 0.0525 },
  { upTo: 250000, rate: 0.055 },
  { upTo: 500000, rate: 0.0575 },
  { upTo: 1000000, rate: 0.0625 },
  { upTo: null, rate: 0.065 },
];

const marriedJointBrackets = [
  { upTo: 1000, rate: 0.02 },
  { upTo: 2000, rate: 0.03 },
  { upTo: 3000, rate: 0.04 },
  { upTo: 150000, rate: 0.0475 },
  { upTo: 175000, rate: 0.05 },
  { upTo: 225000, rate: 0.0525 },
  { upTo: 300000, rate: 0.055 },
  { upTo: 600000, rate: 0.0575 },
  { upTo: 1200000, rate: 0.0625 },
  { upTo: null, rate: 0.065 },
];

export const maryland: StateTaxTable = {
  code: "MD",
  name: "Maryland",
  standardDeduction: {
    single: 3350,
    marriedJoint: 6700,
    marriedSeparate: 3350,
    headOfHousehold: 6700,
  },
  brackets: {
    single: singleBrackets,
    marriedJoint: marriedJointBrackets,
    marriedSeparate: singleBrackets,
    headOfHousehold: marriedJointBrackets,
  },
  notes: "Excludes county piggyback income tax (2.25%–3.20%, varies by county).",
};
