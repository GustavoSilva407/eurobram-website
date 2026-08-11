export const locales = ["en", "de", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  pt: "PT",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  pt: "Português",
};

/** Localized name for "Germany", used when interpolating the company's country into translated text. */
export const countryNames: Record<Locale, string> = {
  en: "Germany",
  de: "Deutschland",
  pt: "Alemanha",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Swap the locale segment of a path (e.g. "/de/about" + "pt" -> "/pt/about"). */
export function swapLocale(pathname: string, nextLocale: Locale): string {
  const parts = pathname.split("/");
  if (parts.length > 1 && isLocale(parts[1])) {
    parts[1] = nextLocale;
    return parts.join("/") || "/";
  }
  return `/${nextLocale}${pathname}`;
}

/** Prefix an app-relative path with the given locale. */
export function href(locale: Locale, path: string): string {
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}
