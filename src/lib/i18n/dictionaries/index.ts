import type { Locale } from "../config";
import { en } from "./en";
import { de } from "./de";
import { pt } from "./pt";
import type { Dictionary } from "./en";

const dictionaries: Record<Locale, Dictionary> = { en, de, pt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
