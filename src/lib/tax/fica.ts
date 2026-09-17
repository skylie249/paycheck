import type { FicaTable } from "@/types/paycheck";

/**
 * ⚠️ PLACEHOLDER DATA — verify against SSA.gov before launch.
 * Social Security wage cap changes every year; Medicare rates are stable
 * but the Additional Medicare Tax thresholds are NOT indexed for inflation
 * (fixed by statute), so double-check those separately.
 * Source: https://www.ssa.gov/oact/cola/cbb.html
 */
export const ficaTable: FicaTable = {
  year: 2025,
  socialSecurityRate: 0.062,
  socialSecurityWageCap: 176100,
  medicareRate: 0.0145,
  additionalMedicareRate: 0.009,
  additionalMedicareThreshold: {
    single: 200000,
    marriedJoint: 250000,
    marriedSeparate: 125000,
    headOfHousehold: 200000,
  },
};
