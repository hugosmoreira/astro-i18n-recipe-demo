import { getRelativeLocaleUrl } from "astro:i18n";
import {
  defaultLang,
  languages,
  routes,
  ui,
  type Lang,
  type Route,
} from "./ui";

export function getLang(locale: string | undefined): Lang {
  return locale && locale in languages ? (locale as Lang) : defaultLang;
}

export function useTranslations(lang: string | undefined) {
  const currentLang = getLang(lang);
  const localizedUI: Record<string, string> = ui[currentLang];
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return key in localizedUI ? localizedUI[key] : ui[defaultLang][key];
  };
}

export function getLocalizedPath(
  route: Route,
  lang: Lang,
  path?: string,
) {
  const segments = [routes[route][lang], path].filter(Boolean);
  return getRelativeLocaleUrl(lang, segments.join("/"));
}
