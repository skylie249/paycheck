import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about Paycheck Calculator.",
};

const contactEmail = "kimhg249@gmail.com";

export default function ContactPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-12 sm:px-6 sm:py-16">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Contact
        </h1>
      </header>

      <div className="flex flex-col gap-4 text-sm leading-relaxed text-foreground/70 sm:text-base">
        <p>
          Have a question, spotted an inaccurate tax figure, or want to
          suggest a feature? Reach out by email:
        </p>
        <a
          href={`mailto:${contactEmail}`}
          className="inline-block w-fit rounded-lg border border-surface-border bg-surface px-4 py-2.5 text-sm font-semibold text-brand shadow-sm transition-colors hover:border-brand"
        >
          {contactEmail}
        </a>
        <p>
          This tool is maintained as part of the{" "}
          <a
            href="https://nexalab.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand underline underline-offset-2"
          >
            nexalab.app
          </a>{" "}
          project. We read every message but can&rsquo;t guarantee a
          response to every email.
        </p>
      </div>
    </div>
  );
}
