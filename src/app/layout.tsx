import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { SearchModal } from "@/components/layout/SearchModal";
import { themeInitScript } from "@/components/layout/ThemeToggle";
import { company } from "@/lib/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} — Laboratory Materials Procurement, Germany ⇄ Brazil`,
    template: `%s — ${company.name}`,
  },
  description:
    "EUROBRAM helps pharmaceutical and agrochemical companies source laboratory materials — HPLC columns, consumables and specialty equipment — from qualified suppliers across Europe.",
  keywords: [
    "laboratory materials Brazil",
    "HPLC columns Brazil",
    "laboratory consumables import Brazil",
    "chromatography consumables Brazil",
    "specialty laboratory equipment Brazil",
  ],
  metadataBase: new URL("https://www.eurobram.de"),
  openGraph: {
    title: `${company.name} — Laboratory Materials Procurement`,
    description:
      "Laboratory materials sourcing connecting Europe and the Brazilian pharmaceutical market.",
    url: "https://www.eurobram.de",
    siteName: company.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-white font-sans text-charcoal-800 antialiased dark:bg-ink-900 dark:text-white/90">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: company.name,
              url: "https://www.eurobram.de",
              email: company.email,
              telephone: company.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: company.address.street,
                postalCode: company.address.postal,
                addressLocality: company.address.city,
                addressCountry: "DE",
              },
              areaServed: ["DE", "BR", "EU"],
              industry: "Laboratory Materials Supply for Pharmaceutical and Agrochemical Companies",
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <SearchModal />
      </body>
    </html>
  );
}
