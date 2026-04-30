"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { useTranslation } from "react-i18next";
import LanguageMenu from '../../components/NavBarAndSideBar/LanguageMenu';
import { Montserrat } from 'next/font/google';

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
        className={`${montserrat.className} flex flex-nowrap justify-between items-center py-3 md:py-4 px-4 md:px-8 lg:px-10 bg-[#F9F7F2] border-b border-[#C07652]/10 sticky top-0 z-50 w-full`}>
        
        <Link href="/" className="transition transform hover:scale-105 active:scale-95 flex items-center h-12 md:h-16 lg:h-20 shrink-0">
          <Image 
            src="/pictures/logo-welivee.png" 
            alt="WeLiveMorocco" 
            width={240} 
            height={110} 
            className="h-10 md:h-14 lg:h-18 w-auto object-contain mix-blend-multiply" />
        </Link>

        <div className="hidden lg:flex items-center justify-center flex-1 gap-x-3 xl:gap-x-8 font-bold text-[#2D2926] uppercase text-[10px] xl:text-[12px] tracking-[0.1em] xl:tracking-[0.2em] whitespace-nowrap px-2">
          <Link href="/" className="relative group overflow-hidden">
            {t('Accueil')}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C07652] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/a-propos" className="relative group overflow-hidden">
            {t('À Propos')}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C07652] transition-all duration-300 group-hover:w-full"></span>
          </Link>

                                                                                                                                                                                                                                                                    
          <div 
            className="relative group cursor-pointer h-full py-5"
            onMouseEnter={() => setIsDestOpen(true)}
            onMouseLeave={() => setIsDestOpen(false)}
            >
            <div className="flex items-center gap-1 hover:text-[#C07652] transition-colors">
              {t("destinations")} <span className="text-[10px] text-[#C07652] ml-1 transition-transform group-hover:rotate-180">▼</span>
            </div>
            
            {isDestOpen && (
              <div className="absolute top-[100%] left-0 w-64 bg-white shadow-2xl border-t-2 border-[#C07652] py-6 rounded-b-sm mt-0 animate-in fade-in slide-in-from-top-2 duration-300">
                <Link href="/destinations/casablanca" className="block px-8 py-3 text-[11px] text-[#2D2926] hover:bg-[#F9F7F2] hover:text-[#C07652] transition-all font-bold uppercase tracking-[0.15em] hover:pl-10">{t('de casablanca')}</Link>
                <Link href="/destinations/marrakech" className="block px-8 py-3 text-[11px] text-[#2D2926] hover:bg-[#F9F7F2] hover:text-[#C07652] transition-all font-bold uppercase tracking-[0.15em] hover:pl-10">{t('de marrakech')}</Link>
                <Link href="/destinations/tanger" className="block px-8 py-3 text-[11px] text-[#2D2926] hover:bg-[#F9F7F2] hover:text-[#C07652] transition-all font-bold uppercase tracking-[0.15em] hover:pl-10">{t('de tanger')}</Link>
                <Link href="/destinations/fes" className="block px-8 py-3 text-[11px] text-[#2D2926] hover:bg-[#F9F7F2] hover:text-[#C07652] transition-all font-bold uppercase tracking-[0.15em] hover:pl-10">{t('de fes')}</Link>
              </div>
            )}
          </div>

          <Link href="/guide-voyage" className="relative group overflow-hidden">
            {t('Guide de voyage')}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C07652] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="relative group overflow-hidden">
            {t('CONTACTEZ-NOUS')}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C07652] transition-all duration-300 group-hover:w-full"></span>
          </Link>                              
        </div>

                                      <div className="flex items-center gap-x-2 xl:gap-x-5 shrink-0 ml-auto whitespace-nowrap">
          <div className="language-selector-wrapper flex items-center">
              <LanguageMenu />
          </div>
          
          <Link
            href="/personnaliser-experience"
            className="hidden lg:block px-3 xl:px-6 py-3 border-2 border-[#C07652] text-[#C07652] text-[9px] xl:text-[11px] font-black tracking-[0.1em] xl:tracking-[0.15em] rounded-sm hover:bg-[#C07652] hover:text-white transition-all duration-500 shadow-sm active:scale-95"
          >
            {t('PERSONALISER VOTRE EXPERIENCE')}
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

    
      {isDrawerOpen && (
        <div className={`fixed inset-0 z-[100] flex justify-end ${montserrat.className}`}>
          <div 
            className="absolute inset-0 bg-[#2D2926]/70 backdrop-blur-md transition-opacity" 
            onClick={() => setIsDrawerOpen(false)} 
          />
          <aside className="relative w-[85vw] max-w-sm bg-[#F9F7F2] shadow-2xl p-6 flex flex-col h-full overflow-y-auto font-sans">
            <button className="absolute top-5 right-5 p-2 text-[#C07652]" onClick={() => setIsDrawerOpen(false)}>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="mt-16 flex flex-col gap-5 uppercase font-bold text-[#2D2926] tracking-[0.1em]">
              <Link href="/" onClick={() => setIsDrawerOpen(false)} className="text-[16px] border-b border-[#C07652]/10 pb-3">{t('Accueil')}</Link>
              <Link href="/a-propos" onClick={() => setIsDrawerOpen(false)} className="text-[16px] border-b border-[#C07652]/10 pb-3">{t('À Propos')}</Link>
              <div className="flex flex-col gap-3">
                <span className="text-[13px] text-[#C07652] font-black tracking-[0.2em]">{t("Destinations")}</span>
                <div className="flex flex-col gap-3 pl-4 border-l border-[#C07652]/30">
                  <Link href="/destinations/casablanca" onClick={() => setIsDrawerOpen(false)} className="text-[14px]">{t("de casablanca")}</Link>
                  <Link href="/destinations/marrakech" onClick={() => setIsDrawerOpen(false)} className="text-[14px]">{t("de marrakech")}</Link>
                  <Link href="/destinations/tanger" onClick={() => setIsDrawerOpen(false)} className="text-[14px]">{t("de tanger")}</Link>
                  <Link href="/destinations/fes" onClick={() => setIsDrawerOpen(false)} className="text-[14px]">{t("de fes")}</Link>
                </div>
              </div>
              <Link href="/guide-voyage" onClick={() => setIsDrawerOpen(false)} className="text-[16px]">{t('Guide de voyage')}</Link>
              <Link href="/contact" onClick={() => setIsDrawerOpen(false)} className="text-[16px]">{t('CONTACTEZ-NOUS')}</Link>
              <Link href="/cookies-policy" onClick={() => setIsDrawerOpen(false)} className="text-[16px]">{t('Privacy Policy')}</Link>
              <Link 
                href="/personnaliser-experience" 
                onClick={() => setIsDrawerOpen(false)} 
                className="mt-6 inline-block px-4 py-4 bg-[#C07652] text-white text-center rounded-sm text-[12px] font-black tracking-[0.1em] shadow-lg active:scale-95 transition-transform">
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