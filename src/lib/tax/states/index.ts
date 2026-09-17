import type { StateTaxTable } from "@/types/paycheck";
import { noIncomeTaxStates } from "./no-income-tax";
import { california } from "./california";
import { newYork } from "./new-york";
import { newJersey } from "./new-jersey";
import { massachusetts } from "./massachusetts";
import { ohio } from "./ohio";
import { virginia } from "./virginia";
import { flatRateStates } from "./flat-rate";
import { approximatedStates } from "./approximated";

/**
 * All 50 states + DC. Coverage tiers:
 * - Real progressive brackets (highest accuracy): CA, NY, NJ, MA, OH, VA
 * - True flat-tax states (accurate as long as rate/deduction are current): flat-rate.ts
 * - No state income tax on wages: no-income-tax.ts
 * - Approximated as a flat top-marginal rate (least accurate, overstates
 *   tax below the top bracket — replace with real brackets before launch):
 *   approximated.ts
 *
 * TX is covered by `noIncomeTaxStates`.
 */
export const stateTaxTables: Record<string, StateTaxTable> = {
  ...noIncomeTaxStates,
  ...flatRateStates,
  ...approximatedStates,
  CA: california,
  NY: newYork,
  NJ: newJersey,
  MA: massachusetts,
  OH: ohio,
  VA: virginia,
};

export function getStateTaxTable(stateCode: string): StateTaxTable | undefined {
  return stateTaxTables[stateCode.toUpperCase()];
}

export const availableStateCodes = Object.keys(stateTaxTables).sort();
