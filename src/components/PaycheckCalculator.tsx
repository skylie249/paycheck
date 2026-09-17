"use client";

import { useMemo, useState } from "react";
import { calculatePaycheck } from "@/lib/paycheck/calculate";
import { availableStateCodes, stateTaxTables } from "@/lib/tax/states";
import type { FilingStatus, PayFrequency } from "@/types/paycheck";
import AdSlot from "@/components/AdSlot";

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

const percent = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 1,
});

const inputClass =
  "rounded-lg border border-surface-border bg-surface px-3 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20 dark:[color-scheme:dark]";
const labelClass = "flex flex-col gap-1.5 text-sm font-medium text-foreground/80";

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

  const totalDeductions =
    result.federalTaxPerPeriod +
    result.stateTaxPerPeriod +
    result.socialSecurityPerPeriod +
    result.medicarePerPeriod;

  const takeHomeRate = result.grossPerPeriod > 0 ? result.netPerPeriod / result.grossPerPeriod : 0;

  const breakdown = [
    { label: "Federal tax", value: result.federalTaxPerPeriod, color: "bg-rose-400" },
    { label: "State tax", value: result.stateTaxPerPeriod, color: "bg-amber-400" },
    { label: "Social Security", value: result.socialSecurityPerPeriod, color: "bg-sky-400" },
    { label: "Medicare", value: result.medicarePerPeriod, color: "bg-violet-400" },
  ];

  const periodLabel = payFrequency === "annually" ? "year" : "pay period";

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-10 sm:px-6 sm:py-16">
      <header className="flex flex-col gap-2">
        <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
          Free tool
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          US Paycheck Calculator
        </h1>
        <p className="max-w-xl text-sm text-foreground/60 sm:text-base">
          Estimate your take-home pay after federal tax, state tax, Social
          Security, and Medicare — updated for the {new Date().getFullYear()}{" "}
          tax year.
        </p>
      </header>

      <AdSlot slot="top-banner" minHeight={90} />

      {/* Hero result */}
      <section className="overflow-hidden rounded-2xl border border-surface-border bg-gradient-to-br from-brand to-brand-light p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wide text-white/80">
          Estimated take-home pay per {periodLabel}
        </p>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          {currency.format(result.netPerPeriod)}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-white/90">
          <span>
            Gross: <strong className="font-semibold">{currency.format(result.grossPerPeriod)}</strong>
          </span>
          <span>
            Take-home rate:{" "}
            <strong className="font-semibold">{percent.format(takeHomeRate)}</strong>
          </span>
          <span>
            Annual net: <strong className="font-semibold">{currency.format(result.annual.net)}</strong>
          </span>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Inputs + breakdown */}
        <div className="grid grid-cols-1 gap-6 lg:col-span-3 lg:grid-cols-5">
        {/* Inputs */}
        <section className="flex flex-col gap-5 rounded-2xl border border-surface-border bg-surface p-6 shadow-sm lg:col-span-3">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand">Income</h2>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className={labelClass}>
                Gross annual salary
                <input
                  type="number"
                  min={0}
                  step={1000}
                  value={grossAnnualSalary}
                  onChange={(e) => setGrossAnnualSalary(Number(e.target.value))}
                  className={inputClass}
                />
              </label>

              <label className={labelClass}>
                Pay frequency
                <select
                  value={payFrequency}
                  onChange={(e) => setPayFrequency(e.target.value as PayFrequency)}
                  className={inputClass}
                >
                  {Object.entries(payFrequencyLabels).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="h-px bg-surface-border" />

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand">Filing details</h2>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className={labelClass}>
                Filing status
                <select
                  value={filingStatus}
                  onChange={(e) => setFilingStatus(e.target.value as FilingStatus)}
                  className={inputClass}
                >
                  {Object.entries(filingStatusLabels).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>

              <label className={labelClass}>
                State
                <select
                  value={stateCode}
                  onChange={(e) => setStateCode(e.target.value)}
                  className={inputClass}
                >
                  {availableStateCodes.map((code) => (
                    <option key={code} value={code}>
                      {stateTaxTables[code].name} ({code})
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="h-px bg-surface-border" />

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand">Deductions</h2>
            <label className={`${labelClass} mt-3`}>
              Pre-tax deductions (annual — 401k, health insurance, etc.)
              <input
                type="number"
                min={0}
                step={100}
                value={preTaxDeductions}
                onChange={(e) => setPreTaxDeductions(Number(e.target.value))}
                className={inputClass}
              />
            </label>
          </div>
        </section>

        {/* Breakdown */}
        <section className="flex flex-col gap-5 rounded-2xl border border-surface-border bg-surface p-6 shadow-sm lg:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand">
            Where your paycheck goes
          </h2>

          <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            {breakdown.map((item) => {
              const widthPct = result.grossPerPeriod > 0 ? (item.value / result.grossPerPeriod) * 100 : 0;
              return (
                <div
                  key={item.label}
                  className={`${item.color} h-full transition-all`}
                  style={{ width: `${widthPct}%` }}
                  title={`${item.label}: ${currency.format(item.value)}`}
                />
              );
            })}
            <div
              className="h-full bg-emerald-400"
              style={{
                width: `${result.grossPerPeriod > 0 ? (result.netPerPeriod / result.grossPerPeriod) * 100 : 0}%`,
              }}
              title={`Take-home: ${currency.format(result.netPerPeriod)}`}
            />
          </div>

          <dl className="flex flex-col gap-2.5 text-sm">
            {breakdown.map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <dt className="flex items-center gap-2 text-foreground/70">
                  <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                  {item.label}
                </dt>
                <dd className="font-medium text-foreground">- {currency.format(item.value)}</dd>
              </div>
            ))}
            <div className="flex items-center justify-between border-t border-surface-border pt-2.5 text-foreground/70">
              <dt className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Take-home pay
              </dt>
              <dd className="font-semibold text-foreground">{currency.format(result.netPerPeriod)}</dd>
            </div>
            <div className="flex items-center justify-between text-xs text-foreground/50">
              <dt>Total deductions</dt>
              <dd>{currency.format(totalDeductions)}</dd>
            </div>
          </dl>
        </section>
        </div>

        {/* Sidebar ad — desktop only */}
        <div className="hidden lg:col-span-1 lg:block">
          <AdSlot slot="sidebar" minHeight={600} className="sticky top-6 h-[600px]" />
        </div>
      </div>

      <AdSlot slot="bottom-banner" minHeight={90} />

      <p className="rounded-xl bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
        Estimates only, based on {new Date().getFullYear()} placeholder tax
        tables for illustration. Not tax advice — consult a tax professional
        or your payroll provider for your actual withholding and liability.
      </p>
    </div>
  );
}
