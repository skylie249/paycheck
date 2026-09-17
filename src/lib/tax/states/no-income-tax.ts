import type { StateTaxTable } from "@/types/paycheck";

/**
 * States with no state income tax on wages.
 * NH and WA tax only certain investment income, not wages, so they're
 * included here for payroll purposes.
 */
const codes = ["AK", "FL", "NV", "SD", "TN", "TX", "WY", "WA", "NH"] as const;

const names: Record<(typeof codes)[number], string> = {
  AK: "Alaska",
  FL: "Florida",
  NV: "Nevada",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  WY: "Wyoming",
  WA: "Washington",
  NH: "New Hampshire",
};

export const noIncomeTaxStates: Record<string, StateTaxTable> = Object.fromEntries(
  codes.map((code) => [
    code,
    {
      code,
      name: names[code],
      brackets: null,
      notes: "No state income tax on wages.",
    } satisfies StateTaxTable,
  ])
);
