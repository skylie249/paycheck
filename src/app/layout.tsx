import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "US Paycheck Calculator";
const description =
  "Estimate your US take-home pay after federal tax, state tax, Social Security, and Medicare.";

export const metadata: Metadata = {
  metadataBase: new URL("https://paycheck.nexalab.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://paycheck.nexalab.app",
    siteName: "US Paycheck Calculator",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
