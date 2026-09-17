import type { FederalTaxTable } from "@/types/paycheck";

/**
 * ⚠️ PLACEHOLDER DATA — DO NOT SHIP AS-IS.
 * These figures are rough stand-ins so the calculator runs end-to-end during
 * scaffolding. Before launch, replace every number below with the current
 * IRS Publication 15-T / Rev. Proc. figures for the target tax year, and add
 * a process to refresh this file annually (IRS typically publishes updated
 * brackets in Nov/Dec for the following year).
 * Source to use when filling in real numbers: https://www.irs.gov/pub/irs-pdf/p15t.pdf
 */
export const federalTaxTable: FederalTaxTable = {
  year: 2025,
  standardDeduction: {
    single: 15000,
    marriedJoint: 30000,
    marriedSeparate: 15000,
    headOfHousehold: 22500,
  },
  brackets: {
    single: [
      { upTo: 11925, rate: 0.1 },
      { upTo: 48475, rate: 0.12 },
      { upTo: 103350, rate: 0.22 },
      { upTo: 197300, rate: 0.24 },
      { upTo: 250525, rate: 0.32 },
      { upTo: 626350, rate: 0.35 },
      { upTo: null, rate: 0.37 },
    ],
    marriedJoint: [
      { upTo: 23850, rate: 0.1 },
      { upTo: 96950, rate: 0.12 },
      { upTo: 206700, rate: 0.22 },
      { upTo: 394600, rate: 0.24 },
      { upTo: 501050, rate: 0.32 },
      { upTo: 751600, rate: 0.35 },
      { upTo: null, rate: 0.37 },
    ],
    marriedSeparate: [
      { upTo: 11925, rate: 0.1 },
      { upTo: 48475, rate: 0.12 },
      { upTo: 103350, rate: 0.22 },
      { upTo: 197300, rate: 0.24 },
      { upTo: 250525, rate: 0.32 },
      { upTo: 375800, rate: 0.35 },
      { upTo: null, rate: 0.37 },
    ],
    headOfHousehold: [
      { upTo: 17000, rate: 0.1 },
      { upTo: 64850, rate: 0.12 },
      { upTo: 103350, rate: 0.22 },
      { upTo: 197300, rate: 0.24 },
      { upTo: 250500, rate: 0.32 },
      { upTo: 626350, rate: 0.35 },
      { upTo: null, rate: 0.37 },
    ],
  },
};
