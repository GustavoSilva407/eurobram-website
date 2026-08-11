import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { company } from "@/lib/constants";
import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { interpolate } from "@/lib/utils";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  return { title: getDictionary(rawLocale).legal.cookies.title };
}

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const dict = getDictionary(rawLocale);
  const t = dict.legal;

  const vars = { name: company.name, email: company.email };

  const sections = t.cookies.sections.map((s) => ({
    heading: s.heading,
    paragraphs: s.paragraphs.map((p) => interpolate(p, vars)),
  }));

  return (
    <LegalLayout eyebrow={dict.footer.legalCol} title={t.cookies.title} updatedLabel={t.updatedLabel} updated={t.updated} sections={sections} />
  );
}
