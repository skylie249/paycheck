import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use and disclaimer for Paycheck Calculator (paycheck.nexalab.app).",
};

const lastUpdated = "September 17, 2026";

export default function TermsPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-12 sm:px-6 sm:py-16">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Terms of Use
        </h1>
        <p className="text-sm text-foreground/50">Last updated: {lastUpdated}</p>
      </header>

      <div className="flex flex-col gap-6 text-sm leading-relaxed text-foreground/70 sm:text-base">
        <p>
          By using Paycheck Calculator (paycheck.nexalab.app, &ldquo;this
          site&rdquo;), you agree to the terms below. If you don&rsquo;t
          agree with them, please don&rsquo;t use the site.
        </p>

        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-foreground">
            Not tax, legal, or financial advice
          </h2>
          <p>
            This site provides an estimate of take-home pay for general,
            informational purposes only. It is not tax, legal, accounting,
            or financial advice, and it is not a substitute for guidance
            from a qualified tax professional, accountant, or your
            employer&rsquo;s payroll provider. Actual withholding depends on
            factors this calculator does not account for (see
            &ldquo;Limitations&rdquo; below), and tax laws change. Do not
            rely on the figures produced here when making financial
            decisions without independent verification.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-foreground">
            Limitations of the calculations
          </h2>
          <p>
            Estimates are based on simplified federal and state tax
            brackets, standard deductions, and FICA rates, and may not
            reflect every credit, additional withholding election, local
            tax (e.g. city or school-district taxes), or unique
            circumstance that applies to you. Some state tax figures are
            approximated. We make no guarantee of accuracy, completeness, or
            timeliness, and we are not liable for any decisions made based
            on this site&rsquo;s output.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-foreground">
            &ldquo;As is&rdquo; service
          </h2>
          <p>
            This site is provided &ldquo;as is&rdquo; and &ldquo;as
            available,&rdquo; without warranties of any kind, express or
            implied. We do not guarantee the site will be uninterrupted,
            error-free, or available at all times.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-foreground">
            Limitation of liability
          </h2>
          <p>
            To the fullest extent permitted by law, we are not liable for
            any direct, indirect, incidental, or consequential damages
            arising from your use of, or inability to use, this site.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-foreground">
            Third-party links and ads
          </h2>
          <p>
            This site may display advertisements and links to third-party
            sites. We do not control and are not responsible for the
            content, policies, or practices of any third-party sites. See
            our{" "}
            <a
              href="/privacy"
              className="font-medium text-brand underline underline-offset-2"
            >
              Privacy Policy
            </a>{" "}
            for details on third-party advertising and cookies.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-foreground">
            Changes to these terms
          </h2>
          <p>
            We may update these Terms from time to time. Continued use of
            the site after changes are posted constitutes acceptance of the
            updated Terms.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-foreground">Contact</h2>
          <p>
            Questions about these Terms can be sent to the address listed on
            our{" "}
            <a
              href="/contact"
              className="font-medium text-brand underline underline-offset-2"
            >
              Contact page
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
