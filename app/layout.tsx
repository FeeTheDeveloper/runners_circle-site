import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConciergeChat from "@/components/ConciergeChat";
import "../styles/globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://runnerscirclebranding.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Runners Circle OS",
    template: "%s | Runners Circle",
  },
  description:
    "AI CRM and marketing systems that capture leads, automate follow-up, and grow revenue. Built for Vet Gang companies first.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Runners Circle OS",
    title: "Runners Circle OS",
    description:
      "AI CRM and marketing systems that capture leads, automate follow-up, and grow revenue. Built for Vet Gang companies first.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Runners Circle OS",
    description:
      "AI CRM and marketing systems for lead capture, automated follow-up, and measurable growth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-brand-black text-brand-sand font-body antialiased">
        <Header />
        <main className="pt-16 md:pt-[72px]">{children}</main>
        <Footer />
        <ConciergeChat />
      </body>
    </html>
  );
}
