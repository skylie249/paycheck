import type { StateTaxTable } from "@/types/paycheck";
import { noIncomeTaxStates } from "./no-income-tax";
import { california } from "./california";
import { newYork } from "./new-york";

/**
 * ⚠️ SCAFFOLDING STATE — only a handful of states are filled in so the app
 * runs end-to-end. Before launch, add the remaining ~45 states/DC.
 * Each state's brackets should be sourced from that state's Dept. of
 * Revenue / Taxation for the current year.
 * TX is already covered by `noIncomeTaxStates` (no state income tax).
 */
export const stateTaxTables: Record<string, StateTaxTable> = {
  ...noIncomeTaxStates,
  CA: california,
  NY: newYork,
};

export function getStateTaxTable(stateCode: string): StateTaxTable | undefined {
  return stateTaxTables[stateCode.toUpperCase()];
}

export const availableStateCodes = Object.keys(stateTaxTables).sort();
