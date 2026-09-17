import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-surface-border bg-surface">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 px-4 py-8 text-sm text-foreground/60 sm:px-6">
        <nav className="flex flex-wrap gap-x-5 gap-y-1">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs leading-relaxed text-foreground/50">
          &copy; {new Date().getFullYear()} Paycheck Calculator, a project by
          nexalab.app. Estimates only — not tax, legal, or financial advice.
        </p>
      </div>
    </footer>
  );
}
