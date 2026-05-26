"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Libre_Baskerville } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageMenu from "../../components/NavBarAndSideBar/LanguageMenu";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
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
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full px-3 py-3 transition-colors duration-300 ${
        isActive ? "text-[#4B5563]" : "hover:text-[#4B5563]"
      }`}
    >
      {isActive && (
        <motion.span
          layoutId="desktop-nav-active-pill"
          className="absolute inset-0 rounded-full bg-[#4B5563]/10 ring-1 ring-[#4B5563]/20"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}

      <span className="relative z-10">{t(label)}</span>

      {isActive ? (
        <motion.span
          layoutId="desktop-nav-active-line"
          className="absolute bottom-[8px] left-3 right-3 h-[2px] rounded-full bg-[#4B5563]"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      ) : (
        <motion.span
          className="absolute bottom-[8px] left-3 h-[2px] rounded-full bg-[#4B5563]"
          initial={{ width: 0 }}
          whileHover={{ width: "calc(100% - 1.5rem)" }}
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
        className={`${libreBaskerville.className} sticky top-0 z-50 flex w-full flex-nowrap items-center justify-between border-b border-[#4B5563]/10 bg-[#F9F7F2] px-4 py-3 md:px-8 md:py-4 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:px-10`}
      >
        <Link
          href="/"
          className="flex h-16 shrink-0 items-center transition hover:scale-105 active:scale-95 md:h-20 lg:h-24"
        >
          <Image
            src="/pictures/full-logo.png"
            alt="WeLiveMorocco"
            width={500}
            height={200}
            className="h-14 w-auto object-contain md:h-18 lg:h-22"
          />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-x-1 whitespace-nowrap px-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#2D2926] lg:flex lg:justify-self-center xl:gap-x-2 xl:text-[12px] xl:tracking-[0.18em]">
          {NAV_LINKS.map(({ href, label }) => (
            <DesktopNavLink
              key={href}
              href={href}
              label={label}
              isActive={isActiveRoute(pathname, href)}
            />
          ))}

          <Link
            href="/personnaliser-experience"
            className={`ml-2 inline-flex rounded-2xl border-2 px-4 py-3 text-[10px] font-black tracking-[0.12em] shadow-sm transition-all duration-500 active:scale-95 xl:ml-3 xl:px-5 xl:text-[11px] xl:tracking-[0.14em] ${
              isExperienceActive
                ? "border-[#4B5563] bg-[#4B5563] text-white shadow-[0_10px_24px_rgba(75,85,99,0.28)]"
                : "border-[#4B5563] text-[#4B5563] hover:bg-[#4B5563] hover:text-white"
            }`}
          >
            {t("PERSONALISER VOTRE EXPERIENCE")}
          </Link>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-x-2 whitespace-nowrap lg:ml-0 lg:justify-self-end">
          <LanguageMenu />

          <button
            aria-label="Open menu"
            className="p-2 text-[#4B5563] transition-transform active:scale-90 lg:hidden"
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
          <div className={`fixed inset-0 z-[100] flex justify-end ${libreBaskerville.className}`}>
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
                className="absolute right-5 top-5 p-2 text-[#4B5563]"
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
                            ? "border-[#4B5563]/20 text-[#4B5563]"
                            : "border-[#4B5563]/10 hover:text-[#4B5563]"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="drawer-nav-active"
                            className="absolute inset-0 rounded-xl bg-[#4B5563]/10 ring-1 ring-[#4B5563]/15"
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
                      isExperienceActive ? "bg-[#2D2926] text-white" : "bg-[#4B5563] text-white"
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
