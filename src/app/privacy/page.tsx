import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Paycheck Calculator (paycheck.nexalab.app) handles data, cookies, and third-party advertising.",
};

const lastUpdated = "September 17, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-12 sm:px-6 sm:py-16">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="text-sm text-foreground/50">Last updated: {lastUpdated}</p>
      </header>

      <div className="flex flex-col gap-6 text-sm leading-relaxed text-foreground/70 sm:text-base">
        <p>
          This Privacy Policy explains how Paycheck Calculator
          (&ldquo;this site,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;),
          available at paycheck.nexalab.app, handles information when you
          use it. This site is a project of nexalab.app.
        </p>

        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-foreground">
            Information you enter into the calculator
          </h2>
          <p>
            The paycheck calculator runs entirely in your browser. The
            salary, filing status, state, and deduction figures you type in
            are used only to compute an estimate on your own device and are
            never transmitted to, or stored on, our servers — we don&rsquo;t
            operate a backend that receives this data at all.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-foreground">
            Cookies and advertising
          </h2>
          <p>
            This site displays advertisements served by Google AdSense.
            Google and its advertising partners, as third-party vendors, use
            cookies and similar technologies to serve ads based on your
            prior visits to this site and other sites on the internet. This
            allows Google and its partners to show you ads that may be more
            relevant to your interests.
          </p>
          <p>
            You can opt out of personalized advertising by visiting{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand underline underline-offset-2"
            >
              Google Ads Settings
            </a>
            . Alternatively, you can visit{" "}
            <a
              href="https://www.aboutads.info/choices"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand underline underline-offset-2"
            >
              www.aboutads.info/choices
            </a>{" "}
            to opt out of participating vendors&rsquo; use of cookies for
            personalized advertising. Third-party vendors, including Google,
            may combine data from this site with data from other sites to
            provide ads about goods and services that may interest you.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-foreground">
            Analytics
          </h2>
          <p>
            We may use privacy-respecting analytics tools (such as Google
            Analytics) to understand aggregate traffic patterns — for
            example, how many people visit the site and which pages they
            view. Any such analytics data is anonymized/aggregated and is
            not linked to the salary or financial figures you enter into the
            calculator.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-foreground">
            Children&rsquo;s privacy
          </h2>
          <p>
            This site is not directed at children under 13, and we do not
            knowingly collect personal information from children.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-foreground">
            Changes to this policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Changes
            will be posted on this page with an updated &ldquo;Last
            updated&rdquo; date above.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-foreground">
            Contact
          </h2>
          <p>
            Questions about this policy can be sent to the address listed on
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
