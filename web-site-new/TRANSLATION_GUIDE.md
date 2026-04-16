# Frontend-Only Translation Structure Guide (Reusable Template)

This document explains how translation is implemented in this project and how to reuse the same logic in another Next.js project.

**This setup is 100% frontend-only.**

There is no backend or server-side translation logic required. All translations are loaded from static JSON files in the public/locales directory, and all language switching and key management is handled in the frontend using i18next and react-i18next.

## 1) Stack Used (Frontend Only)

- next + react + typescript
- i18next
- react-i18next
- i18next-http-backend (for loading static JSON files from public/locales)
- i18next-browser-languagedetector

## 2) Folder Structure

Use this same structure:

```text
public/
  locales/
    fr/common.json
    en/common.json
    es/common.json
src/
  utils/i18n.ts
  hooks/useDirection.tsx
  components/NavBarAndSideBar/LanguageMenu.tsx
  components/ClientRoot.tsx
  components/ClientLayout.tsx
```

## 3) i18n Initialization Logic (No Backend)

File: src/utils/i18n.ts

Key behavior:

- Loads translation files from `/public/locales/{{lng}}/common.json` (static frontend assets)
- No backend or API required—everything is fetched from the frontend
- Default fallback language: fr
- Supports languages: fr, en, es (expandable)
- Detects user language in this order:
  1. cookie
  2. localStorage
  3. browser navigator
  4. html tag
- Caches selected language in cookie and localStorage
- Uses react without suspense

See `src/utils/i18n.ts` in this project for the reference implementation.

## 4) Root Layout Language/Direction Sync

### ClientRoot responsibilities

File: src/components/ClientRoot.tsx

- Reads current language from i18n or localStorage
- Sets html attributes:
  - document.documentElement.lang
  - document.documentElement.dir
- Uses rtl only for ar

### ClientLayout responsibilities

File: src/components/ClientLayout.tsx

- Reads i18next cookie on initial load
- Calls i18n.changeLanguage(lang)
- Waits for init before rendering full layout

This prevents flash of wrong language during hydration.

## 5) Language Switcher Logic

File: src/components/NavBarAndSideBar/LanguageMenu.tsx

Current project behavior:

- Read saved language from localStorage (default fr)
- Change i18n language
- Save language to localStorage
- Update UI flag
- Force reload after language change for full consistency

Note: The reload is intentional in this project to ensure all UI fragments are fully refreshed.

## 6) RTL Support

File: src/hooks/useDirection.tsx

- RTL languages list: ar, he, fa, ur
- Returns:
  - dir: rtl or ltr
  - isRTL
  - language

Use this hook where alignment or UI positioning depends on direction.

## 7) Translation Key Design (Important)

This project uses one namespace file per language: common.json.

Key pattern is feature-based and nested:

- nav.home
- home.hero.intro
- about.services.service1.title
- contact.form.validation.nameRequired
- validation.required.email

Rules to keep the same logic:

- Group by page or feature first
- Keep the same key path in all languages
- Never change key names per language
- Keep object/array-like groups consistent in shape
- For lists, current project uses numeric object keys:
  - technologies.0
  - technologies.1

## 8) How Components Consume Translations

Typical usage:

```tsx
import { useTranslation } from "react-i18next";

const { t } = useTranslation();

<h1>{t("about.header.title")}</h1>
<p>{t("about.header.intro")}</p>
```

For object collections:

```tsx
const features = Object.values(
  t("about.services.service1.features", { returnObjects: true }) as Record<string, string>
);
```

## 9) Full Page Migration Workflow (No Missing Strings)

Use this exact process each time you translate a page.

1. Scan target page and list every visible hardcoded string.
2. Create structured keys under one section in common.json (fr first recommended).
3. Replace ALL literals in the component with t("...") calls.
4. Add the same keys to en/common.json and es/common.json.
5. Verify key parity between all locale files.
6. Run app and switch languages to confirm all texts render.
7. Check direction-sensitive UI for arabic if added.

## 10) Key Parity Checklist

Before finishing, verify:

- Every new fr key exists in en and es
- Nesting is identical across all languages
- No missing key warnings in console
- No remaining hardcoded UI text in the translated page
- Direction/alignment still valid in rtl

## 11) Copy This Setup to Another Project (Frontend Only)

1. Install dependencies (no backend needed):

```bash
npm install i18next react-i18next i18next-http-backend i18next-browser-languagedetector
```

2. Copy i18n init file logic (src/utils/i18n.ts).
3. Create locale files in public/locales/<lang>/common.json.
4. Add root-level language + dir sync in a client root wrapper.
5. Add a language switcher that updates i18n + persistence.
6. Replace hardcoded strings page-by-page with stable keys.
7. Keep strict key parity across all languages.

## 12) Recommended Conventions for New Projects

- Keep one source language as base (fr in this project)
- Use feature prefixes for all keys
- Avoid dynamic key names when possible
- Keep validations and alerts inside translation files
- Add a translation review checklist in pull requests

## 13) Optional Improvements (If You Want)

These are optional and not required to keep current behavior:

- Remove full page reload on language change and rely only on state updates
- Split large common.json into namespaces later (home.json, about.json, etc.)
- Add an automated script to verify locale key parity in CI

---

If you want, I can also generate a second file named TRANSLATION_MIGRATION_CHECKLIST.md that is shorter and optimized for daily use while translating each new page.
