export const languages = {
  en: "English",
  fr: "Français",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang = "en" satisfies Lang;

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.twitter": "Twitter",
    "blog.by": "by",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "blog.by": "par",
  },
} as const;

export const routes = {
  home: {
    en: "",
    fr: "",
  },
  about: {
    en: "about",
    fr: "a-propos",
  },
  blog: {
    en: "blog",
    fr: "blog",
  },
} as const satisfies Record<string, Record<Lang, string>>;

export type Route = keyof typeof routes;
