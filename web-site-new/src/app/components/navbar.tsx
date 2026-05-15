"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageMenu from "../../components/NavBarAndSideBar/LanguageMenu";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "CONTACTEZ-NOUS" },
];

const DRAWER_LINKS = [
  ...NAV_LINKS,
  { href: "/cookies-policy", label: "Privacy Policy" },
];

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopNavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  const { t } = useTranslation();

  return (
    <Link
      href={href}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full px-4 py-3 transition-colors duration-300 ${
        isActive ? "text-[#C07652]" : "hover:text-[#C07652]"
      }`}
    >
      {isActive && (
        <motion.span
          layoutId="desktop-nav-active-pill"
          className="absolute inset-0 rounded-full bg-[#C07652]/10 ring-1 ring-[#C07652]/20"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}

      <span className="relative z-10">{t(label)}</span>

      {isActive ? (
        <motion.span
          layoutId="desktop-nav-active-line"
          className="absolute bottom-[8px] left-4 right-4 h-[2px] rounded-full bg-[#C07652]"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      ) : (
        <motion.span
          className="absolute bottom-[8px] left-4 h-[2px] rounded-full bg-[#C07652]"
          initial={{ width: 0 }}
          whileHover={{ width: "calc(100% - 2rem)" }}
          transition={{ duration: 0.25 }}
        />
      )}
    </Link>
  );
}

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { t } = useTranslation();
  const pathname = usePathname();

  useEffect(() => {
    if (!isDrawerOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDrawerOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isDrawerOpen]);

  const closeDrawer = () => setIsDrawerOpen(false);
  const isExperienceActive = isActiveRoute(pathname, "/personnaliser-experience");

  return (
    <>
      <nav
        id="site-navbar"
        className={`${montserrat.className} sticky top-0 z-50 flex w-full flex-nowrap items-center justify-between border-b border-[#C07652]/10 bg-[#F9F7F2] px-4 py-3 md:px-8 md:py-4 lg:px-10`}
      >
        <Link
          href="/"
          className="flex h-12 shrink-0 items-center transition hover:scale-105 active:scale-95 md:h-16 lg:h-20"
        >
          <Image
            src="/pictures/logo-welivee.png"
            alt="WeLiveMorocco"
            width={240}
            height={110}
            className="h-10 w-auto object-contain mix-blend-multiply md:h-14 lg:h-18"
          />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-x-3 whitespace-nowrap px-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#2D2926] xl:gap-x-8 xl:text-[12px] xl:tracking-[0.2em] lg:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <DesktopNavLink
              key={href}
              href={href}
              label={label}
              isActive={isActiveRoute(pathname, href)}
            />
          ))}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-x-2 whitespace-nowrap xl:gap-x-5">
          <LanguageMenu />

          <Link
            href="/personnaliser-experience"
            className={`hidden rounded-2xl border-2 px-3 py-3 text-[9px] font-black tracking-[0.1em] shadow-sm transition-all duration-500 active:scale-95 xl:px-6 xl:text-[11px] xl:tracking-[0.15em] lg:block ${
              isExperienceActive
                ? "border-[#C07652] bg-[#C07652] text-white shadow-[0_10px_24px_rgba(192,118,82,0.28)]"
                : "border-[#C07652] text-[#C07652] hover:bg-[#C07652] hover:text-white"
            }`}
          >
            {t("PERSONALISER VOTRE EXPERIENCE")}
          </Link>

          <button
            aria-label="Open menu"
            className="p-2 text-[#C07652] transition-transform active:scale-90 lg:hidden"
            onClick={() => setIsDrawerOpen(true)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

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
              className="relative flex h-full w-[85vw] max-w-sm flex-col overflow-y-auto bg-[#F9F7F2] p-6 shadow-2xl"
            >
              <button
                aria-label="Close menu"
                className="absolute right-5 top-5 p-2 text-[#C07652]"
                onClick={closeDrawer}
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <nav className="mt-16 flex flex-col gap-5 uppercase font-bold tracking-[0.1em] text-[#2D2926]">
                {DRAWER_LINKS.map(({ href, label }, idx) => {
                  const isActive = isActiveRoute(pathname, href);

                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <Link
                        href={href}
                        onClick={closeDrawer}
                        className={`relative block overflow-hidden rounded-xl border-b px-4 pb-3 pt-3 text-[16px] transition-colors ${
                          isActive
                            ? "border-[#C07652]/20 text-[#C07652]"
                            : "border-[#C07652]/10 hover:text-[#C07652]"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="drawer-nav-active"
                            className="absolute inset-0 rounded-xl bg-[#C07652]/10 ring-1 ring-[#C07652]/15"
                            transition={{ type: "spring", stiffness: 320, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10">{t(label)}</span>
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="/personnaliser-experience"
                    onClick={closeDrawer}
                    className={`mt-6 inline-block w-full rounded-sm px-4 py-4 text-center text-[14px] font-black tracking-[0.1em] shadow-lg transition-all active:scale-95 ${
                      isExperienceActive ? "bg-[#2D2926] text-white" : "bg-[#C07652] text-white"
                    }`}
                  >
                    {t("PERSONALISER VOTRE EXPERIENCE")}
                  </Link>
                </motion.div>

                <div className="mt-auto flex justify-center pt-10">
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
