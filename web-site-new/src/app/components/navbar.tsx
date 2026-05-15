"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import LanguageMenu from "../../components/NavBarAndSideBar/LanguageMenu";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const DRAWER_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "CONTACTEZ-NOUS" },
  { href: "/cookies-policy", label: "Privacy Policy" },
];

import { motion, AnimatePresence } from "framer-motion";

function UnderlineLink({ href, label }: { href: string; label: string }) {
  const { t } = useTranslation();
  return (
    <Link href={href} className="relative group overflow-hidden">
      {t(label)}
      <motion.span 
        className="absolute bottom-0 left-0 h-[2px] bg-[#C07652]"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
}

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (!isDrawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isDrawerOpen]);

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <nav
        id="site-navbar"
        className={`${montserrat.className} flex flex-nowrap justify-between items-center py-3 md:py-4 px-4 md:px-8 lg:px-10 bg-[#F9F7F2] border-b border-[#C07652]/10 sticky top-0 z-50 w-full`}
      >
        {/* Logo */}
        <Link href="/" className="transition transform hover:scale-105 active:scale-95 flex items-center h-12 md:h-16 lg:h-20 shrink-0">
          <Image
            src="/pictures/logo-welivee.png"
            alt="WeLiveMorocco"
            width={240}
            height={110}
            className="h-10 md:h-14 lg:h-18 w-auto object-contain mix-blend-multiply"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-x-3 xl:gap-x-8 font-bold text-[#2D2926] uppercase text-[10px] xl:text-[12px] tracking-[0.1em] xl:tracking-[0.2em] whitespace-nowrap px-2">
          <UnderlineLink href="/" label="Accueil" />
          <UnderlineLink href="/a-propos" label="À Propos" />
          <UnderlineLink href="/contact" label="CONTACTEZ-NOUS" />
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-x-2 xl:gap-x-5 shrink-0 ml-auto whitespace-nowrap">
          <LanguageMenu />

          <Link
            href="/personnaliser-experience"
            className="hidden lg:block px-3 xl:px-6 py-3 border-2 border-[#C07652] text-[#C07652] text-[9px] xl:text-[11px] font-black tracking-[0.1em] xl:tracking-[0.15em] rounded-2xl hover:bg-[#C07652] hover:text-white transition-all duration-500 shadow-sm active:scale-95"
          >
            {t("PERSONALISER VOTRE EXPERIENCE")}
          </Link>

          <button
            aria-label="Open menu"
            className="lg:hidden p-2 text-[#C07652] transition-transform active:scale-90"
            onClick={() => setIsDrawerOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <div className={`fixed inset-0 z-[100] flex justify-end ${montserrat.className}`}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#2D2926]/70 backdrop-blur-md"
              onClick={closeDrawer}
            />
            <motion.aside 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-[85vw] max-w-sm bg-[#F9F7F2] shadow-2xl p-6 flex flex-col h-full overflow-y-auto"
            >
              <button
                aria-label="Close menu"
                className="absolute top-5 right-5 p-2 text-[#C07652]"
                onClick={closeDrawer}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <nav className="mt-16 flex flex-col gap-5 uppercase font-bold text-[#2D2926] tracking-[0.1em]">
                {DRAWER_LINKS.map(({ href, label }, idx) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      href={href}
                      onClick={closeDrawer}
                      className="block text-[16px] border-b border-[#C07652]/10 pb-3"
                    >
                      {t(label)}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="/personnaliser-experience"
                    onClick={closeDrawer}
                    className="mt-6 inline-block w-full px-4 py-4 bg-[#C07652] text-white text-center rounded-sm text-[14px] font-black tracking-[0.1em] shadow-lg active:scale-95 transition-transform"
                  >
                    {t("PERSONALISER VOTRE EXPERIENCE")}
                  </Link>
                </motion.div>

                <div className="mt-auto pt-10 flex justify-center">
                  <LanguageMenu />
                </div>
              </nav>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
