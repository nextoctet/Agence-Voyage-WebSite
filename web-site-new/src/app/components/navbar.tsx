"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LanguageMenu from '../../components/NavBarAndSideBar/LanguageMenu';

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
    <nav id="site-navbar" className="flex justify-between items-center py-2 px-6 md:px-10 bg-[#F9F7F2] border-b border-[#C07652]/10 sticky top-0 z-50">
      
      <Link href="/" className="transition transform hover:opacity-80 flex items-center h-20">
        <img src="/pictures/logo-welivee.png" alt="WeLiveMorocco" className="h-16 md:h-24 w-auto object-contain mix-blend-multiply" />
      </Link>

      <div className="hidden md:flex items-center space-x-8 font-bold text-[#2D2926] uppercase text-[10px] tracking-[0.15em]">
        <Link href="/" className="hover:text-[#C07652] transition-colors">{t('Accueil')}</Link>
        <Link href="/a-propos" className="hover:text-[#C07652] transition-colors">{t('À Propos')}</Link>
        
        {/* Dropdown Destinations */}
        <div 
          className="relative group cursor-pointer h-full py-5"
          onMouseEnter={() => setIsDestOpen(true)}
          onMouseLeave={() => setIsDestOpen(false)}
        >
          <div className="flex items-center gap-1 hover:text-[#C07652] transition-colors uppercase text-[10px] tracking-[0.15em]">
            {t('destinations')} <span className="text-[8px] text-[#C07652]">▼</span>
          </div>
          
          {isDestOpen && (
            <div className="absolute top-[100%] left-0 w-60 bg-white shadow-2xl border border-[#F9F7F2] py-4 rounded-sm mt-0 overflow-hidden">
              <Link href="/destinations/casablanca" className="block px-6 py-2.5 text-[9px] text-[#2D2926] hover:bg-[#F9F7F2] hover:text-[#C07652] transition-colors font-bold uppercase tracking-widest">{t('de casablanca')}</Link>
              <Link href="/destinations/marrakech" className="block px-6 py-2.5 text-[9px] text-[#2D2926] hover:bg-[#F9F7F2] hover:text-[#C07652] transition-colors font-bold uppercase tracking-widest">{t('de marrakech')}</Link>
              <Link href="/destinations/tanger" className="block px-6 py-2.5 text-[9px] text-[#2D2926] hover:bg-[#F9F7F2] hover:text-[#C07652] transition-colors font-bold uppercase tracking-widest">{t('de tanger')}</Link>
              <Link href="/destinations/fes" className="block px-6 py-2.5 text-[9px] text-[#2D2926] hover:bg-[#F9F7F2] hover:text-[#C07652] transition-colors font-bold uppercase tracking-widest">{t('de fes')}</Link>
            </div>
          )}
        </div>

        <Link href="/guide-voyage" className="hover:text-[#C07652] transition-colors">{t('Guide de voyage')}</Link>
        <Link href="/contact" className="hover:text-[#C07652] transition-colors">{t('CONTACTEZ-NOUS')}</Link>
      </div>

      <div className="flex items-center gap-6">
        <button
          aria-label="Open menu"
          className="md:hidden p-2 rounded-md text-[#C07652]"
          onClick={() => setIsDrawerOpen(true)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="language-selector-wrapper text-[#C07652] font-bold text-[10px] uppercase tracking-widest">
           <LanguageMenu />
        </div>
        
        <Link
          href="/personnaliser-experience"
          className="hidden lg:block px-5 py-2.5 border-2 border-[#C07652] text-[#C07652] text-[9px] font-black tracking-[0.1em] rounded-sm hover:bg-[#C07652] hover:text-white transition-all duration-300"
        >
          {t('PERSONALISER VOTRE EXPERIENCE')}
        </Link>

        
      </div>
    </nav>

    {isDrawerOpen && (
      <div className="fixed inset-0 z-50 flex">
        <div className="absolute inset-0 bg-[#2D2926]/60 backdrop-blur-sm" onClick={() => setIsDrawerOpen(false)} />
        <aside className="relative ml-auto w-80 max-w-full bg-[#F9F7F2] shadow-2xl p-10 flex flex-col h-full overflow-y-auto font-bold uppercase text-[11px] tracking-[0.2em]">
          <button aria-label="Close menu" className="absolute top-8 right-8 p-2 text-[#C07652]" onClick={() => setIsDrawerOpen(false)}>
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="mb-8 pt-6">
              <img src="/pictures/logo-welivee.png" alt="Logo" className="h-14 w-auto mix-blend-multiply" />
          </div>
    
        </aside>
      </div>
    )}
    </>
  );
}