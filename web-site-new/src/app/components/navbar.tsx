"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { useTranslation } from "react-i18next";
import LanguageMenu from '../../components/NavBarAndSideBar/LanguageMenu';
import { Montserrat } from 'next/font/google';

// Configuration dial l-font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
});

export default function Navbar() {
  const [isDestOpen, setIsDestOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsDrawerOpen(false); };
    if (isDrawerOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isDrawerOpen]);

  return (
    <>
      <nav 
        id="site-navbar" 
        className={`${montserrat.className} flex justify-between items-center py-4 px-6 md:px-12 bg-[#F9F7F2] border-b border-[#C07652]/10 sticky top-0 z-50`}
      >
        
        <Link href="/" className="transition transform hover:opacity-80 flex items-center h-20">
          <Image 
            src="/pictures/logo-welivee.png" 
            alt="WeLiveMorocco" 
            width={240} 
            height={110} 
            className="h-16 md:h-24 w-auto object-contain mix-blend-multiply" 
          />
        </Link>

        <div className="hidden md:flex items-center space-x-10 font-bold text-[#2D2926] uppercase text-[12px] tracking-[0.2em]">
          <Link href="/" className="hover:text-[#C07652] transition-colors duration-300">
            {t('Accueil')}
          </Link>
          <Link href="/a-propos" className="hover:text-[#C07652] transition-colors duration-300">
            {t('À Propos')}
          </Link>
          
          {/* Dropdown Destinations */}
          <div 
            className="relative group cursor-pointer h-full py-5"
            onMouseEnter={() => setIsDestOpen(true)}
            onMouseLeave={() => setIsDestOpen(false)}
          >
            <div className="flex items-center gap-1 hover:text-[#C07652] transition-colors">
              {t("destinations")} <span className="text-[10px] text-[#C07652] ml-1">▼</span>
            </div>
            
            {isDestOpen && (
              <div className="absolute top-[100%] left-0 w-64 bg-white shadow-2xl border-t-2 border-[#C07652] py-6 rounded-b-sm mt-0 overflow-hidden">
                <Link href="/destinations/casablanca" className="block px-8 py-3 text-[11px] text-[#2D2926] hover:bg-[#F9F7F2] hover:text-[#C07652] transition-all font-bold uppercase tracking-[0.15em]">{t('de casablanca')}</Link>
                <Link href="/destinations/marrakech" className="block px-8 py-3 text-[11px] text-[#2D2926] hover:bg-[#F9F7F2] hover:text-[#C07652] transition-all font-bold uppercase tracking-[0.15em]">{t('de marrakech')}</Link>
                <Link href="/destinations/tanger" className="block px-8 py-3 text-[11px] text-[#2D2926] hover:bg-[#F9F7F2] hover:text-[#C07652] transition-all font-bold uppercase tracking-[0.15em]">{t('de tanger')}</Link>
                <Link href="/destinations/fes" className="block px-8 py-3 text-[11px] text-[#2D2926] hover:bg-[#F9F7F2] hover:text-[#C07652] transition-all font-bold uppercase tracking-[0.15em]">{t('de fes')}</Link>
              </div>
            )}
          </div>

          <Link href="/guide-voyage" className="hover:text-[#C07652] transition-colors duration-300">
            {t('Guide de voyage')}
          </Link>
          <Link href="/contact" className="hover:text-[#C07652] transition-colors duration-300">
            {t('CONTACTEZ-NOUS')}
          </Link>
        </div>

        {/* RIGHT SIDE TOOLS */}
        <div className="flex items-center gap-6">
          <div className="language-selector-wrapper text-[#C07652] font-black text-[12px] uppercase tracking-widest">
             <LanguageMenu />
          </div>
          
          <Link
            href="/personnaliser-experience"
            className="hidden lg:block px-6 py-3.5 border-2 border-[#C07652] text-[#C07652] text-[11px] font-black tracking-[0.15em] rounded-sm hover:bg-[#C07652] hover:text-white transition-all duration-500"
          >
            {t('PERSONALISER VOTRE EXPERIENCE')}
          </Link>

          {/* Hamburger Icon Mobile */}
          <button
            aria-label="Open menu"
            className="md:hidden p-2 text-[#C07652] transition-transform active:scale-90"
            onClick={() => setIsDrawerOpen(true)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {isDrawerOpen && (
        <div className={`fixed inset-0 z-[100] flex ${montserrat.className}`}>
          {/* Overlay avec Blur */}
          <div 
            className="absolute inset-0 bg-[#2D2926]/70 backdrop-blur-md transition-opacity" 
            onClick={() => setIsDrawerOpen(false)} 
          />
          
          <aside className="relative ml-auto w-80 max-w-[85%] bg-[#F9F7F2] shadow-2xl p-10 flex flex-col h-full overflow-y-auto">
            {/* Close Button */}
            <button 
              className="absolute top-8 right-8 p-2 text-[#C07652]" 
              onClick={() => setIsDrawerOpen(false)}
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav className="mt-16 flex flex-col gap-8 uppercase font-bold text-[#2D2926] tracking-[0.1em]">
              <Link href="/" onClick={() => setIsDrawerOpen(false)} className="text-[18px] border-b border-[#C07652]/10 pb-2">{t('Accueil')}</Link>
              <Link href="/a-propos" onClick={() => setIsDrawerOpen(false)} className="text-[18px] border-b border-[#C07652]/10 pb-2">{t('À Propos')}</Link>

              <div className="flex flex-col gap-4">
                <span className="text-[13px] text-[#C07652] font-black tracking-[0.2em]">{t("Destinations")}</span>
                <div className="flex flex-col gap-5 pl-4 border-l border-[#C07652]/30">
                  <Link href="/destinations/casablanca" onClick={() => setIsDrawerOpen(false)} className="text-[15px]">{t("de casablanca")}</Link>
                  <Link href="/destinations/marrakech" onClick={() => setIsDrawerOpen(false)} className="text-[15px]">{t("de marrakech")}</Link>
                  <Link href="/destinations/tanger" onClick={() => setIsDrawerOpen(false)} className="text-[15px]">{t("de tanger")}</Link>
                  <Link href="/destinations/fes" onClick={() => setIsDrawerOpen(false)} className="text-[15px]">{t("de fes")}</Link>
                </div>
              </div>

              <Link href="/guide-voyage" onClick={() => setIsDrawerOpen(false)} className="text-[18px]">{t('Guide de voyage')}</Link>
              <Link href="/contact" onClick={() => setIsDrawerOpen(false)} className="text-[18px]">{t('CONTACTEZ-NOUS')}</Link>
              <Link href="/terms" onClick={() => setIsDrawerOpen(false)} className="text-[18px]">{t('Terms of Service')}</Link>
              <Link href="/privacy" onClick={() => setIsDrawerOpen(false)} className="text-[18px]">{t('Privacy Policy')}</Link>

              <Link 
                href="/personnaliser-experience" 
                onClick={() => setIsDrawerOpen(false)} 
                className="mt-6 inline-block px-4 py-4 bg-[#C07652] text-white text-center rounded-sm text-[12px] font-black tracking-[0.1em] shadow-lg active:scale-95 transition-transform"
              >
                {t('PERSONALISER VOTRE EXPERIENCE')}
              </Link>

              <div className="mt-auto pt-10 flex justify-center">
                <LanguageMenu />
              </div>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}