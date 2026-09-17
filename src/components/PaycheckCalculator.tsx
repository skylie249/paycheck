"use client";

import { useMemo, useState } from "react";
import { calculatePaycheck } from "@/lib/paycheck/calculate";
import { availableStateCodes, stateTaxTables } from "@/lib/tax/states";
import type { FilingStatus, PayFrequency } from "@/types/paycheck";

const filingStatusLabels: Record<FilingStatus, string> = {
  single: "Single",
  marriedJoint: "Married Filing Jointly",
  marriedSeparate: "Married Filing Separately",
  headOfHousehold: "Head of Household",
};

const payFrequencyLabels: Record<PayFrequency, string> = {
  weekly: "Weekly (52/yr)",
  biweekly: "Bi-weekly (26/yr)",
  semimonthly: "Semi-monthly (24/yr)",
  monthly: "Monthly (12/yr)",
  annually: "Annually (1/yr)",
};

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function PaycheckCalculator() {
  const [grossAnnualSalary, setGrossAnnualSalary] = useState(75000);
  const [filingStatus, setFilingStatus] = useState<FilingStatus>("single");
  const [stateCode, setStateCode] = useState("CA");
  const [payFrequency, setPayFrequency] = useState<PayFrequency>("biweekly");
  const [preTaxDeductions, setPreTaxDeductions] = useState(0);

  const result = useMemo(
    () =>
      calculatePaycheck({
        grossAnnualSalary,
        filingStatus,
        stateCode,
        payFrequency,
        preTaxDeductions,
      }),
    [grossAnnualSalary, filingStatus, stateCode, payFrequency, preTaxDeductions]
  );

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-16">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          US Paycheck Calculator
        </h1>
        <p className="text-sm text-zinc-500">
          Estimate your take-home pay after federal tax, state tax, Social
          Security, and Medicare.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm">
          Gross annual salary
          <input
            type="number"
            min={0}
            step={1000}
            value={grossAnnualSalary}
            onChange={(e) => setGrossAnnualSalary(Number(e.target.value))}
            className="rounded border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm">
          Filing status
          <select
            value={filingStatus}
            onChange={(e) => setFilingStatus(e.target.value as FilingStatus)}
            className="rounded border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
          >
            {Object.entries(filingStatusLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-sm">
          State
          <select
            value={stateCode}
            onChange={(e) => setStateCode(e.target.value)}
            className="rounded border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
          >
            {availableStateCodes.map((code) => (
              <option key={code} value={code}>
                {stateTaxTables[code].name} ({code})
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-sm">
          Pay frequency
          <select
            value={payFrequency}
            onChange={(e) => setPayFrequency(e.target.value as PayFrequency)}
            className="rounded border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
          >
            {Object.entries(payFrequencyLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-sm sm:col-span-2">
          Pre-tax deductions (annual, e.g. 401k, health insurance)
          <input
            type="number"
            min={0}
            step={100}
            value={preTaxDeductions}
            onChange={(e) => setPreTaxDeductions(Number(e.target.value))}
            className="rounded border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
          />
        </label>
      </section>

      <section className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
        <h2 className="mb-4 text-sm font-medium text-zinc-500">
          Estimated results — per {payFrequency === "annually" ? "year" : "pay period"}
        </h2>
        <dl className="grid grid-cols-2 gap-y-3 text-sm">
          <dt className="text-zinc-500">Gross pay</dt>
          <dd className="text-right font-medium">{currency.format(result.grossPerPeriod)}</dd>

          <dt className="text-zinc-500">Federal tax</dt>
          <dd className="text-right">- {currency.format(result.federalTaxPerPeriod)}</dd>

          <dt className="text-zinc-500">State tax</dt>
          <dd className="text-right">- {currency.format(result.stateTaxPerPeriod)}</dd>

          <dt className="text-zinc-500">Social Security</dt>
          <dd className="text-right">- {currency.format(result.socialSecurityPerPeriod)}</dd>

          <dt className="text-zinc-500">Medicare</dt>
          <dd className="text-right">- {currency.format(result.medicarePerPeriod)}</dd>

          <dt className="border-t border-zinc-200 pt-3 font-semibold dark:border-zinc-800">
            Net (take-home) pay
          </dt>
          <dd className="border-t border-zinc-200 pt-3 text-right font-semibold dark:border-zinc-800">
            {currency.format(result.netPerPeriod)}
          </dd>
        </dl>
      </section>

      <p className="text-xs text-zinc-400">
        Estimates only, based on {new Date().getFullYear()} placeholder tax
        tables. Not tax advice — consult a tax professional for your actual
        withholding and liability.
      </p>
    </div>
  );
}
