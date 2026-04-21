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
    <nav id="site-navbar" className="flex justify-between items-center py-4 px-8 md:px-12 bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      
      {/* Section Logo */}
      <Link href="/" className="text-2xl font-black tracking-tighter text-[#003366] hover:opacity-90 transition">
        {t('WELIVE MOROCCO')}
      </Link>

      {/* Liens de Navigation */}
      <div className="hidden md:flex items-center space-x-8 font-semibold text-[#003366] uppercase text-[10px] tracking-widest">
        <Link href="/" className="hover:text-orange-500 transition-colors">{t('Accueil')}</Link>
        <Link href="/a-propos" className="hover:text-orange-500 transition-colors">{t('À Propos')}</Link>
        
        {/* Dropdown Destinations */}
        <div 
          className="relative group cursor-pointer h-full py-2"
          onMouseEnter={() => setIsDestOpen(true)}
          onMouseLeave={() => setIsDestOpen(false)}
        >
          <div className="flex items-center gap-1 hover:text-orange-500 transition-colors">
            {t('destinations')} <span className="text-[8px]">▼</span>
          </div>
          
          {isDestOpen && (
            <div className="absolute top-[100%] left-0 w-56 bg-white shadow-xl border border-gray-100 py-3 rounded-lg mt-0">
              <Link href="/destinations/casablanca" className="block px-6 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors">{t('de casablanca')}</Link>
              <Link href="/destinations/marrakech" className="block px-6 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors">{t('de marrakech')}</Link>
              <Link href="/destinations/tanger" className="block px-6 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors">{t('de tanger')}</Link>
              <Link href="/destinations/fes" className="block px-6 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors">{t('de fes')}</Link>
            </div>
          )}
        </div>

        <Link href="/guide-voyage" className="hover:text-orange-500 transition-colors">{t('Guide de voyage')}</Link>
        <Link href="/contact" className="hover:text-orange-500 transition-colors">{t('CONTACTEZ-NOUS')}</Link>
      </div>

      {/* Boutons d'Action */}
      <div className="flex items-center gap-4">
        {/* Hamburger for small screens */}
        <button
          aria-label="Open menu"
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsDrawerOpen(true)}
        >
          <svg className="w-5 h-5 text-[#003366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <LanguageMenu />
        <Link
          href="/personnaliser-experience"
          className="hidden lg:block px-4 py-2 border-2 border-[#003366] text-[#003366] text-[9px] font-black rounded-full hover:bg-[#003366] hover:text-white transition-all duration-300"
        >
          {t('PERSONALISER VOTRE EXPERIENCE')}
        </Link>

        <Link
          href="/reservation"
          className="px-5 py-2.5 bg-orange-500 text-white text-[10px] font-black rounded-full shadow-lg shadow-orange-500/20 hover:scale-105 transition-all duration-300"
        >
          {t('RÉSERVER MAINTENANT')}
        </Link>
      </div>
    </nav>

    {isDrawerOpen && (
      <div className="fixed inset-0 z-50 flex">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/40" onClick={() => setIsDrawerOpen(false)} />

        {/* Drawer panel */}
        <aside className="relative ml-auto w-72 max-w-full bg-white shadow-2xl p-6">
          <button aria-label="Close menu" className="absolute top-4 right-4 p-2" onClick={() => setIsDrawerOpen(false)}>
            <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="flex flex-col gap-4 pt-6">
            <Link href="/" onClick={() => setIsDrawerOpen(false)} className="font-bold text-[#003366]">{t('Accueil')}</Link>
            <Link href="/a-propos" onClick={() => setIsDrawerOpen(false)} className="font-bold text-[#003366]">{t('À Propos')}</Link>

            <div className="border-t border-gray-100 mt-2 pt-3">
              <div className="font-semibold text-sm text-gray-700 mb-2">{t('destinations')}</div>
              <Link href="/destinations/casablanca" onClick={() => setIsDrawerOpen(false)} className="block py-1">{t('de casablanca')}</Link>
              <Link href="/destinations/marrakech" onClick={() => setIsDrawerOpen(false)} className="block py-1">{t('de marrakech')}</Link>
              <Link href="/destinations/tanger" onClick={() => setIsDrawerOpen(false)} className="block py-1">{t('de tanger')}</Link>
              <Link href="/destinations/fes" onClick={() => setIsDrawerOpen(false)} className="block py-1">{t('de fes')}</Link>
            </div>

            <Link href="/guide-voyage" onClick={() => setIsDrawerOpen(false)} className="pt-2">{t('Guide de voyage')}</Link>
            <Link href="/contact" onClick={() => setIsDrawerOpen(false)} className="pt-2">{t('CONTACTEZ-NOUS')}</Link>

            <div className="mt-4">
              <LanguageMenu />
            </div>

            <div className="mt-6">
              <Link href="/personnaliser-experience" onClick={() => setIsDrawerOpen(false)} className="block px-4 py-2 border-2 border-[#003366] text-[#003366] text-[12px] font-black rounded-full text-center mb-3">{t('PERSONALISER VOTRE EXPERIENCE')}</Link>
              <Link href="/reservation" onClick={() => setIsDrawerOpen(false)} className="block px-4 py-2 bg-orange-500 text-white text-center font-black rounded-full">{t('RÉSERVER MAINTENANT')}</Link>
            </div>
          </nav>
        </aside>
      </div>
    )}
    </>
  );
}