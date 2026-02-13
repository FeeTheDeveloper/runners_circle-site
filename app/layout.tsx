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

export const metadata: Metadata = {
  title: "Runners Circle Branding & Marketing",
  description:
    "Elite brand systems, AI infrastructure, and scalable digital ecosystems for modern businesses. Veteran-owned. Texas-built.",
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
