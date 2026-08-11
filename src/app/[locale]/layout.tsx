import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { SearchModal } from "@/components/layout/SearchModal";
import { LangSetter } from "@/components/layout/LangSetter";
import { locales, isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { company } from "@/lib/constants";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = getDictionary(locale);

  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `/${l}`;

  return {
    title: { default: dict.meta.titleDefault, template: dict.meta.titleTemplate },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    metadataBase: new URL("https://www.eurobram.de"),
    alternates: { languages },
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      url: `https://www.eurobram.de/${locale}`,
      siteName: company.name,
      locale: locale === "en" ? "en_US" : locale === "de" ? "de_DE" : "pt_BR",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <LangSetter locale={locale} />
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
            industry: dict.meta.schemaIndustry,
          }),
        }}
      />
      <Header locale={locale} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} dict={dict} />
      <CookieBanner dict={dict} />
      <SearchModal locale={locale} dict={dict} />
    </>
  );
}
