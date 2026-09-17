import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Paycheck Calculator, a free US take-home pay estimator built by nexalab.app.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-12 sm:px-6 sm:py-16">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          About
        </h1>
      </header>

      <div className="flex flex-col gap-4 text-sm leading-relaxed text-foreground/70 sm:text-base">
        <p>
          Paycheck Calculator is a free tool for estimating US take-home pay
          after federal income tax, state income tax, Social Security, and
          Medicare. Enter a gross salary, pick a filing status, state, and
          pay frequency, and it breaks down where each dollar goes — so you
          can see net pay per paycheck instead of just an annual salary
          figure.
        </p>
        <p>
          The calculator is entirely client-side: every calculation runs in
          your browser, and the numbers you enter are never sent to a
          server. That also means the tool works instantly, with no signup
          or account required.
        </p>
        <p>
          This site is a project by{" "}
          <a
            href="https://nexalab.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand underline underline-offset-2"
          >
            nexalab.app
          </a>
          , built to make it easier to understand where a paycheck actually
          goes without digging through IRS tables by hand. It&rsquo;s a work
          in progress — tax tables and state coverage are being refined over
          time (see the tax-year notes on the calculator page).
        </p>
        <p>
          Results are estimates for general informational purposes and are
          not tax advice — see our{" "}
          <a
            href="/terms"
            className="font-medium text-brand underline underline-offset-2"
          >
            Terms of Use
          </a>{" "}
          for details. Questions, feedback, or corrections are welcome on
          the{" "}
          <a
            href="/contact"
            className="font-medium text-brand underline underline-offset-2"
          >
            Contact page
          </a>
          .
        </p>
      </div>
    </div>
  );
}
