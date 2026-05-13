"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const isBrowser = typeof window !== "undefined";

if (isBrowser) {
  i18n.use(Backend).use(LanguageDetector);
}

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  supportedLngs: ["en", "es"],
  debug: process.env.NODE_ENV === "development",
  interpolation: { escapeValue: false },
  backend: { loadPath: "/locales/{{lng}}/common.json" },
  detection: {
    order: ["cookie", "localStorage", "navigator", "htmlTag"],
    caches: ["cookie", "localStorage"],
  },
  react: { useSuspense: false },
});

export default i18n;
