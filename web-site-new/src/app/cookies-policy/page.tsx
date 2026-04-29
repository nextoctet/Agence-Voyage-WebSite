"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export default function CookiesPolicyPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-[#1B1713] text-[#F6E8D6] pt-32 pb-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-5xl mx-auto">
        
        <div className="border-b border-[#C07652]/30 pb-10 mb-16 text-center md:text-left">
          <p className="text-[12px] font-bold uppercase tracking-[0.5em] text-[#C07652] mb-4">
            {t("WeLiveMorocco — Tours & Travel Across Morocco")}
          </p>
          <h1 className="text-5xl md:text-8xl font-serif mb-6 text-white tracking-tighter">
            {t("Cookies Policy")}
          </h1>
          <p className="text-[#D8C4B0] text-sm tracking-widest uppercase">
            {t("Transparence & Protection des Données")}
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-2xl font-serif text-white mb-8">{t("Introduction")}</h2>
          <div className="space-y-6 text-lg leading-relaxed text-[#D8C4B0]/90">
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

        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start border-l border-[#C07652]/20 pl-8">
            <h2 className="text-3xl font-serif text-white leading-tight">
              1. {t("What Are Cookies?")}
            </h2>
            <div className="text-[#D8C4B0] leading-relaxed space-y-4">
              <p>
                {t("Cookies are small text files placed on your device when you visit a website.")}
              </p>
              <p>
                {t("They allow our website to recognise your device, remember your preferences, and deliver a more personalised experience.")}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-serif text-white mb-10 text-center">2. {t("Types of Cookies We Use")}</h2>
          <div className="overflow-x-auto rounded-3xl border border-[#C07652]/20 bg-white/5 backdrop-blur-sm">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-[#C07652]/10 text-[#E8C6A5] uppercase text-[10px] tracking-[0.3em]">
                  <th className="p-8 border-b border-[#C07652]/20">{t("Type")}</th>
                  <th className="p-8 border-b border-[#C07652]/20">{t("Purpose")}</th>
                  <th className="p-8 border-b border-[#C07652]/20">{t("Consent")}</th>
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
                    <td className="p-8 font-bold text-white uppercase tracking-tighter">{t(row.type)}</td>
                    <td className="p-8 text-xs leading-relaxed">{t(row.purpose)}</td>
                    <td className={`p-8 font-bold text-[10px] ${row.consent === "Not required" ? "text-[#C07652]" : ""}`}>{t(row.consent)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-serif text-white mb-10">3. {t("Detailed List of Specific Cookies")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "_session_id", cat: "Essential", purp: "Maintains booking cart and active session", dur: "Session" },
              { name: "user_currency", cat: "Functional", purp: "Remembers preferred currency (MAD, EUR, USD)", dur: "1 year" },
              { name: "user_language", cat: "Functional", purp: "Stores language preference (Arabic, French, English)", dur: "1 year" },
              { name: "_ga", cat: "Analytics", purp: "Google Analytics — aggregated site usage tracking", dur: "2 years" },
              { name: "_fbp", cat: "Marketing", purp: "Facebook Pixel — ad effectiveness measurement", dur: "90 days" },
              { name: "cookie_consent", cat: "Essential", purp: "Stores your cookie consent preferences", dur: "1 year" }
            ].map((cookie, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#C07652]/40 transition duration-500 group">
                <span className="text-[10px] text-[#C07652] uppercase font-bold tracking-[0.2em]">{t(cookie.cat)}</span>
                <h3 className="text-xl font-mono text-white mt-3 mb-4 group-hover:text-[#E8C6A5] transition">{cookie.name}</h3>
                <p className="text-xs text-[#D8C4B0] leading-relaxed mb-6">{t(cookie.purp)}</p>
                <div className="pt-6 border-t border-white/5 text-[10px] uppercase text-[#D8C4B0]/40 tracking-widest font-medium">
                  {t("Duration")}: {t(cookie.dur)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-serif text-white mb-8">4. {t("Third-Party Partners")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#D8C4B0]/80 font-light">
            <p className="col-span-full mb-4">{t("We work with the following trusted third-party providers:")}</p>
            <li className="list-none bg-white/5 p-4 rounded-xl border border-white/5">Google Analytics & Google Maps</li>
            <li className="list-none bg-white/5 p-4 rounded-xl border border-white/5">Stripe Payment Processing</li>
            <li className="list-none bg-white/5 p-4 rounded-xl border border-white/5">Facebook / Meta Pixel</li>
            <li className="list-none bg-white/5 p-4 rounded-xl border border-white/5">LiveChat / YouTube</li>
          </div>
        </section>

        <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-white/10 pt-16">
          <div>
            <h2 className="text-2xl font-serif text-white mb-8">5. {t("Managing Your Cookies")}</h2>
            <p className="text-[#D8C4B0] text-sm leading-relaxed mb-8">
              {t("You can control or delete cookies directly through your browser settings. Note that disabling them may affect website functionality.")}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["Chrome", "Firefox", "Safari", "Edge"].map((b, i) => (
                <div key={i} className="py-4 px-2 border border-white/5 rounded-2xl text-[9px] uppercase tracking-widest text-[#D8C4B0] text-center hover:bg-[#C07652]/20 transition">
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-white mb-8">6. {t("Legal Compliance")}</h2>
            <div className="bg-[#C07652]/5 border-l-2 border-[#C07652] p-10 space-y-6 text-sm text-[#D8C4B0] italic">
              <p>
                <strong>{t("Moroccan Law 09-08")}</strong>: {t("Morocco's primary data protection law. We are registered with the CNDP.")}
              </p>
              <p>
                <strong>{t("GDPR (European Union)")}</strong>: {t("Applies to all visitors from the European Union or EEA.")}
              </p>
            </div>
          </div>
        </section>

        <footer className="pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="text-left max-w-md">
            <h3 className="text-white font-serif text-2xl mb-4">{t("Contact Us")}</h3>
            <p className="text-xs text-[#D8C4B0] leading-relaxed mb-6">
              {t("If you have questions about this cookies policy, please contact our Data Privacy Officer.")}
            </p>
            <a href="mailto:contact@welivemorocco.com" className="text-2xl font-serif text-[#E8C6A5] hover:text-white transition decoration-[#C07652] underline underline-offset-8">
              contact@welivemorocco.com
            </a>
          </div>
          <div className="text-right space-y-4">
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