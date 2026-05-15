"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export default function CookiesPolicyPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-[#1B1713] px-4 pb-14 pt-24 font-sans text-[#F6E8D6] sm:px-6 md:px-10 md:pb-20 lg:px-16">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-12 border-b border-[#C07652]/30 pb-8 text-center md:mb-16 md:pb-10 md:text-left">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.32em] text-[#C07652] sm:text-[12px] sm:tracking-[0.5em]">
            {t("WeLiveMorocco — Tours & Travel Across Morocco")}
          </p>
          <h1 className="mb-4 text-[clamp(3.1rem,12vw,6.5rem)] font-serif tracking-tighter text-white sm:mb-6">
            {t("Cookies Policy")}
          </h1>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#D8C4B0] sm:text-sm sm:tracking-widest">
            {t("Transparence & Protection des Données")}
          </p>
        </div>

        <section className="mb-14 sm:mb-16 md:mb-20">
          <h2 className="mb-6 text-xl font-serif text-white sm:mb-8 sm:text-2xl">{t("Introduction")}</h2>
          <div className="space-y-4 text-base leading-relaxed text-[#D8C4B0]/90 sm:space-y-6 sm:text-[17px] md:text-lg">
            <p>
              {t("This Cookies Policy explains how WeLiveMorocco uses cookies and similar tracking technologies on our website www.welivemorocco.com.")}
            </p>
            <p>
              {t("By using our website, you consent to our use of cookies in accordance with this policy.")}
            </p>
            <p>
              {t("This policy applies to all visitors, whether based in Morocco or abroad.")}
            </p>
          </div>
        </section>

        <section className="mb-14 sm:mb-16 md:mb-20">
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-12 md:border-l md:border-[#C07652]/20 md:pl-8">
            <h2 className="text-2xl font-serif leading-tight text-white md:text-3xl">
              1. {t("What Are Cookies?")}
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[#D8C4B0] sm:text-[17px] md:text-lg">
              <p>
                {t("Cookies are small text files placed on your device when you visit a website.")}
              </p>
              <p>
                {t("They allow our website to recognise your device, remember your preferences, and deliver a more personalised experience.")}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14 sm:mb-16 md:mb-20">
          <h2 className="mb-8 text-center text-xl font-serif text-white sm:mb-10 sm:text-2xl">2. {t("Types of Cookies We Use")}</h2>
          <div className="overflow-x-auto rounded-[24px] border border-[#C07652]/20 bg-white/5 backdrop-blur-sm md:rounded-3xl">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-[#C07652]/10 text-[10px] uppercase tracking-[0.22em] text-[#E8C6A5] sm:tracking-[0.3em]">
                  <th className="border-b border-[#C07652]/20 p-4 sm:p-6 md:p-8">{t("Type")}</th>
                  <th className="border-b border-[#C07652]/20 p-4 sm:p-6 md:p-8">{t("Purpose")}</th>
                  <th className="border-b border-[#C07652]/20 p-4 sm:p-6 md:p-8">{t("Consent")}</th>
                </tr>
              </thead>
              <tbody className="text-[#D8C4B0]">
                {[
                  { type: "Strictly Essential", purpose: "Required for the website to function. Enables booking forms, secure payments, and user sessions.", consent: "Not required" },
                  { type: "Functional", purpose: "Remembers your preferences (language, currency) for a personalised experience.", consent: "Required" },
                  { type: "Analytics", purpose: "Collects anonymised data on how visitors interact with our website to improve content.", consent: "Required" },
                  { type: "Marketing", purpose: "Tracks browsing to display relevant travel adverts based on your interests.", consent: "Required" },
                  { type: "Third-Party", purpose: "Set by integrated external services (Google Maps, social media, payment providers).", consent: "Required" }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition duration-500">
                    <td className="p-4 font-bold uppercase tracking-tighter text-white sm:p-6 md:p-8">{t(row.type)}</td>
                    <td className="p-4 text-[11px] leading-relaxed sm:p-6 sm:text-xs md:p-8 md:text-sm">{t(row.purpose)}</td>
                    <td className={`p-4 text-[10px] font-bold sm:p-6 md:p-8 ${row.consent === "Not required" ? "text-[#C07652]" : ""}`}>{t(row.consent)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14 sm:mb-16 md:mb-20">
          <h2 className="mb-8 text-xl font-serif text-white sm:mb-10 sm:text-2xl">3. {t("Detailed List of Specific Cookies")}</h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {[
              { name: "_session_id", cat: "Essential", purp: "Maintains booking cart and active session", dur: "Session" },
              { name: "user_currency", cat: "Functional", purp: "Remembers preferred currency (MAD, EUR, USD)", dur: "1 year" },
              { name: "user_language", cat: "Functional", purp: "Stores language preference (Arabic, French, English)", dur: "1 year" },
              { name: "_ga", cat: "Analytics", purp: "Google Analytics — aggregated site usage tracking", dur: "2 years" },
              { name: "_fbp", cat: "Marketing", purp: "Facebook Pixel — ad effectiveness measurement", dur: "90 days" },
              { name: "cookie_consent", cat: "Essential", purp: "Stores your cookie consent preferences", dur: "1 year" }
            ].map((cookie, idx) => (
              <div key={idx} className="group rounded-[24px] border border-white/10 bg-white/5 p-5 transition duration-500 hover:border-[#C07652]/40 sm:p-6 md:rounded-3xl md:p-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C07652]">{t(cookie.cat)}</span>
                <h3 className="mb-4 mt-3 text-lg font-mono text-white transition group-hover:text-[#E8C6A5] sm:text-xl">{cookie.name}</h3>
                <p className="mb-6 text-[11px] leading-relaxed text-[#D8C4B0] sm:text-xs md:text-sm">{t(cookie.purp)}</p>
                <div className="border-t border-white/5 pt-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#D8C4B0]/40 sm:pt-6 sm:tracking-widest">
                  {t("Duration")}: {t(cookie.dur)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 sm:mb-16 md:mb-20">
          <h2 className="mb-6 text-xl font-serif text-white sm:mb-8 sm:text-2xl">4. {t("Third-Party Partners")}</h2>
          <div className="grid grid-cols-1 gap-4 text-[13px] font-light text-[#D8C4B0]/80 sm:text-sm md:grid-cols-2">
            <p className="col-span-full mb-4">{t("We work with the following trusted third-party providers:")}</p>
            <li className="list-none bg-white/5 p-4 rounded-xl border border-white/5">Google Analytics & Google Maps</li>
            <li className="list-none bg-white/5 p-4 rounded-xl border border-white/5">Stripe Payment Processing</li>
            <li className="list-none bg-white/5 p-4 rounded-xl border border-white/5">Facebook / Meta Pixel</li>
            <li className="list-none bg-white/5 p-4 rounded-xl border border-white/5">LiveChat / YouTube</li>
          </div>
        </section>

        <section className="mb-14 grid grid-cols-1 gap-10 border-t border-white/10 pt-12 sm:mb-16 sm:pt-14 md:mb-20 md:gap-16 md:pt-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-serif text-white sm:mb-8 sm:text-2xl">5. {t("Managing Your Cookies")}</h2>
            <p className="mb-6 text-[13px] leading-relaxed text-[#D8C4B0] sm:mb-8 sm:text-sm">
              {t("You can control or delete cookies directly through your browser settings. Note that disabling them may affect website functionality.")}
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {["Chrome", "Firefox", "Safari", "Edge"].map((b, i) => (
                <div key={i} className="py-4 px-2 border border-white/5 rounded-2xl text-[9px] uppercase tracking-widest text-[#D8C4B0] text-center hover:bg-[#C07652]/20 transition">
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-xl font-serif text-white sm:mb-8 sm:text-2xl">6. {t("Legal Compliance")}</h2>
            <div className="space-y-4 border-l-2 border-[#C07652] bg-[#C07652]/5 p-6 text-[13px] italic text-[#D8C4B0] sm:space-y-6 sm:p-8 sm:text-sm md:p-10">
              <p>
                <strong>{t("Moroccan Law 09-08")}</strong>: {t("Morocco's primary data protection law. We are registered with the CNDP.")}
              </p>
              <p>
                <strong>{t("GDPR (European Union)")}</strong>: {t("Applies to all visitors from the European Union or EEA.")}
              </p>
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-start justify-between gap-8 border-t border-white/10 pt-12 sm:gap-10 sm:pt-16 md:flex-row md:items-end md:pt-20">
          <div className="text-left max-w-md">
            <h3 className="mb-4 text-2xl font-serif text-white">{t("Contact Us")}</h3>
            <p className="mb-6 text-xs leading-relaxed text-[#D8C4B0]">
              {t("If you have questions about this cookies policy, please contact our Data Privacy Officer.")}
            </p>
            <a href="mailto:contact@welivemorocco.com" className="text-xl font-serif text-[#E8C6A5] underline decoration-[#C07652] underline-offset-8 transition hover:text-white sm:text-2xl">
              contact@welivemorocco.com
            </a>
          </div>
          <div className="space-y-3 text-left md:text-right md:space-y-4">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#D8C4B0]/40">
              © 2026 WeLiveMorocco.
            </div>
            <div className="text-[9px] text-[#C07652] uppercase font-bold tracking-widest">
              {t("Last Updated")}: 29 April 2026
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}
