'use client';
import { useState, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import Link from 'next/link';

export default function Footer() {
  const { t } = useTranslation();
  const [subscribed, setSubscribed] = useState(false);

  const phoneNumber = "2126XXXXXXXX";
  const email = "contact@welivemorocco.com";

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#C07652] text-white pt-24 pb-12 px-8 font-sans relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#F9F7F2 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* CTA */}
        <div className="text-center mb-32">
          <p className="uppercase tracking-[0.6em] text-[10px] md:text-xs font-bold mb-8 opacity-90">
            {t("COMMENÇONS L'AVENTURE")}
          </p>
          <h2 className="text-4xl md:text-7xl font-serif italic leading-tight mb-10">
            {t("La seule chose qu'il reste à faire est de nous parler de vous.")}
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Link
              href="/personnaliser-experience"
              className="bg-white text-[#C07652] rounded-2xl px-10 py-5 uppercase font-bold text-[10px] tracking-[0.2em] shadow-2xl hover:bg-[#F9F7F2] transition-all"
            >
              {t("Commencer mon voyage sur mesure")}
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-10 py-5 rounded-2xl uppercase font-bold text-[10px] tracking-[0.2em] hover:bg-white hover:text-[#C07652] transition-all"
            >
              {t("Parler à l'équipe")}
            </Link>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="border-y border-white/20 py-24 mb-24">
          {!subscribed ? (
            <div className="max-w-3xl mx-auto flex flex-col items-start text-left">
              <h3 className="text-4xl md:text-5xl font-serif mb-4">
                {t("Newsletter")}
              </h3>
              <p className="text-sm md:text-base opacity-90 mb-8 max-w-xl leading-relaxed">
                {t("Sign up below to receive travel inspiration, news, offers and expert tips.")}
              </p>

              <form onSubmit={handleSubscribe} className="w-full flex flex-col sm:flex-row shadow-2xl overflow-hidden">
                <div className="flex-1 bg-white flex items-center px-6 py-5 text-[#C07652]">
                  <svg className="w-5 h-5 opacity-50 mr-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <input
                    type="email"
                    placeholder={t("Email Address")}
                    className="w-full bg-transparent text-sm focus:outline-none placeholder:text-[#C07652]/40"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#C07652] text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#a86343] transition-all whitespace-nowrap border-l border-white/10"
                >
                  {t("SIGN UP")}
                </button>
              </form>

              <p className="mt-6 text-[10px] italic opacity-70 leading-relaxed max-w-2xl">
                {t("I consent to receive promotional emails and understand that my data will be used in accordance with the Privacy Notice.")}
              </p>
            </div>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-4xl md:text-5xl font-serif italic mb-2">
                {t("Thank you for subscribing!")}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-80">
                {t("Our stories are on their way to you.")}
              </p>
            </div>
          )}
        </div>

        {/* LINKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-left">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-serif italic tracking-tighter leading-tight">
              WELIVE <br />
              <span className="not-italic font-bold tracking-widest text-2xl">MOROCCO</span>
            </h2>
          </div>

          {/* L'Agence */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 opacity-80">
              {t("L'Agence")}
            </h3>
            <ul className="flex flex-col gap-4 text-xs font-medium italic">
              {[
                { label: "Notre Vision", href: "/a-propos" },
                { label: "L'Équipe", href: "/a-propos" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label} className="hover:translate-x-2 transition-all opacity-90">
                  <Link href={href} className="block w-full">{t(label)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 opacity-80">
              {t("Destinations")}
            </h3>
            <ul className="flex flex-col gap-4 text-xs font-medium italic">
              {[
                { label: "Casablanca", href: "/destinations/casablanca" },
                { label: "Marrakech", href: "/destinations/marrakech" },
                { label: "Tanger", href: "/destinations/tanger" },
              ].map(({ label, href }) => (
                <li key={label} className="hover:translate-x-2 transition-all opacity-90">
                  <Link href={href} className="block w-full">{t(label)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 opacity-80">
                {t("Connect")}
              </h3>
              <div className="flex gap-5">
                <a href="https://www.instagram.com/welivemorocco" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/share/1BEzpnY6RU/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>

              <div className="flex flex-col gap-2 text-[9px] uppercase tracking-[0.2em] opacity-60 italic mt-6">
                <Link href="/cookies-policy" className="hover:text-white transition-colors">{t("Privacy Policy")}</Link>
                <Link href="/cookies-policy" className="hover:text-white transition-colors">{t("Terms of Service")}</Link>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold uppercase tracking-[0.5em]">
          <p className="opacity-80">Marrakech, Morocco</p>
          <a href={`mailto:${email}`} className="hover:underline opacity-90 lowercase tracking-normal font-sans">
            {email}
          </a>
          <p className="opacity-60">© 2026 WELIVE MOROCCO</p>
        </div>

      </div>
    </footer>
  );
}