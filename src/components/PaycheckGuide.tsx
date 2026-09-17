const faqs = [
  {
    q: "Why is my take-home pay lower than my salary?",
    a: "Your gross salary is reduced by several mandatory and elective deductions before it reaches your bank account: federal income tax, state income tax (in most states), Social Security, Medicare, and any pre-tax benefits you've elected such as a 401(k) contribution or health insurance premium. What's left after all of that is your net, or take-home, pay.",
  },
  {
    q: "What's the difference between gross and net pay?",
    a: "Gross pay is your total earnings for a pay period before anything is withheld. Net pay — also called take-home pay — is what you actually receive after taxes and deductions are subtracted. Job offers and salary figures almost always refer to gross pay, which is why it's useful to estimate net pay separately when budgeting.",
  },
  {
    q: "Why do pre-tax deductions lower my tax bill?",
    a: "Contributions to a traditional 401(k), a Health Savings Account, or employer health insurance are typically deducted from your paycheck before taxes are calculated. That lowers your taxable income, which can reduce both your federal and state tax withholding — not just the amount you contributed.",
  },
  {
    q: "Does this calculator account for local or city taxes?",
    a: "Not yet. This calculator currently estimates federal income tax, state income tax, Social Security, and Medicare only. Some cities and counties (for example New York City, or school-district taxes in Ohio) levy their own additional income tax that isn't reflected here — check your local tax authority for those amounts.",
  },
];

export default function PaycheckGuide() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 pb-16 sm:px-6">
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          How federal income tax is calculated
        </h2>
        <div className="flex flex-col gap-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
          <p>
            The United States uses a progressive federal income tax system,
            meaning your income is taxed in layers, or &ldquo;brackets,&rdquo;
            rather than at a single flat rate. As your income rises, only the
            portion that falls inside a higher bracket is taxed at that
            bracket&rsquo;s rate — the rest is still taxed at the lower rates
            that apply to it. This is why someone&rsquo;s effective tax rate
            (the average rate they actually pay across all their income) is
            almost always lower than their top marginal bracket.
          </p>
          <p>
            Before brackets are applied, most filers reduce their taxable
            income with the standard deduction, a fixed amount set each year
            by the IRS that varies by filing status (single, married filing
            jointly, married filing separately, or head of household).
            Pre-tax deductions — like traditional 401(k) contributions or
            employer health insurance premiums — reduce taxable income
            further, before the deduction is even applied.
          </p>
          <p>
            In addition to federal tax, most states levy their own income
            tax, using either a flat rate, their own progressive brackets, or
            no income tax at all. On top of income tax, employees also pay
            FICA taxes — Social Security and Medicare — which fund federal
            insurance programs and are calculated as a fixed percentage of
            wages (Social Security up to an annual wage cap, Medicare with no
            cap). This calculator combines all of these layers to estimate
            what actually lands in your bank account each pay period.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          How to read your paycheck
        </h2>
        <p className="text-sm leading-relaxed text-foreground/70 sm:text-base">
          A typical pay stub lists your gross pay for the period, followed by
          each deduction taken out of it — federal tax, state tax, Social
          Security, Medicare, and any elective benefits — and ends with your
          net pay, the amount actually deposited. Comparing your own pay stub
          against the breakdown above can help you spot whether your
          withholding looks roughly in line with expectations, or whether
          it's worth revisiting your W-4 with your employer.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Frequently asked questions
        </h2>
        <div className="flex flex-col divide-y divide-surface-border rounded-2xl border border-surface-border bg-surface">
          {faqs.map((item) => (
            <details key={item.q} className="group p-4 sm:p-5">
              <summary className="cursor-pointer list-none text-sm font-semibold text-foreground marker:content-none sm:text-base">
                {item.q}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
