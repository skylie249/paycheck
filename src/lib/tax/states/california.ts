import type { StateTaxTable } from "@/types/paycheck";

/**
 * ⚠️ PLACEHOLDER DATA — verify against California FTB before launch.
 * CA also has a 1% Mental Health Services Tax on income over $1M, and
 * SDI (State Disability Insurance) withholding, both omitted here.
 * Source: https://www.ftb.ca.gov/forms/2025/2025-california-tax-rates-and-exemptions.html
 */
export const california: StateTaxTable = {
  code: "CA",
  name: "California",
  standardDeduction: {
    single: 5540,
    marriedJoint: 11080,
    marriedSeparate: 5540,
    headOfHousehold: 11080,
  },
  brackets: {
    single: [
      { upTo: 10756, rate: 0.01 },
      { upTo: 25499, rate: 0.02 },
      { upTo: 40245, rate: 0.04 },
      { upTo: 55866, rate: 0.06 },
      { upTo: 70606, rate: 0.08 },
      { upTo: 360659, rate: 0.093 },
      { upTo: 432787, rate: 0.103 },
      { upTo: 721314, rate: 0.113 },
      { upTo: null, rate: 0.123 },
    ],
    marriedJoint: [
      { upTo: 21512, rate: 0.01 },
      { upTo: 50998, rate: 0.02 },
      { upTo: 80490, rate: 0.04 },
      { upTo: 111732, rate: 0.06 },
      { upTo: 141212, rate: 0.08 },
      { upTo: 721318, rate: 0.093 },
      { upTo: 865574, rate: 0.103 },
      { upTo: 1442628, rate: 0.113 },
      { upTo: null, rate: 0.123 },
    ],
    marriedSeparate: [
      { upTo: 10756, rate: 0.01 },
      { upTo: 25499, rate: 0.02 },
      { upTo: 40245, rate: 0.04 },
      { upTo: 55866, rate: 0.06 },
      { upTo: 70606, rate: 0.08 },
      { upTo: 360659, rate: 0.093 },
      { upTo: 432787, rate: 0.103 },
      { upTo: 721314, rate: 0.113 },
      { upTo: null, rate: 0.123 },
    ],
    headOfHousehold: [
      { upTo: 21527, rate: 0.01 },
      { upTo: 51000, rate: 0.02 },
      { upTo: 65744, rate: 0.04 },
      { upTo: 81364, rate: 0.06 },
      { upTo: 96107, rate: 0.08 },
      { upTo: 490493, rate: 0.093 },
      { upTo: 588593, rate: 0.103 },
      { upTo: 980987, rate: 0.113 },
      { upTo: null, rate: 0.123 },
    ],
  },
  notes: "Excludes 1% Mental Health Services Tax (income > $1M) and SDI withholding.",
};
