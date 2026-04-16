"use client";
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LanguageMenu from '../../components/NavBarAndSideBar/LanguageMenu';

export default function Navbar() {
  const [isDestOpen, setIsDestOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav id="site-navbar" className="flex justify-between items-center py-4 px-8 md:px-12 bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      
      {/* Section Logo */}
      <Link href="/" className="text-2xl font-black tracking-tighter text-[#003366] hover:opacity-90 transition">
        WELIVE<span className="text-orange-500 underline decoration-2">MOROCCO</span>
      </Link>

      {/* Liens de Navigation */}
      <div className="hidden md:flex items-center space-x-8 font-semibold text-[#003366] uppercase text-[10px] tracking-widest">
        <Link href="/" className="hover:text-orange-500 transition-colors">{t('nav.home')}</Link>
        <Link href="/a-propos" className="hover:text-orange-500 transition-colors">{t('nav.about')}</Link>
        
        {/* Dropdown Destinations */}
        <div 
          className="relative group cursor-pointer h-full py-2"
          onMouseEnter={() => setIsDestOpen(true)}
          onMouseLeave={() => setIsDestOpen(false)}
        >
          <div className="flex items-center gap-1 hover:text-orange-500 transition-colors">
            {t('nav.destinations')} <span className="text-[8px]">▼</span>
          </div>
          
          {isDestOpen && (
            <div className="absolute top-[100%] left-0 w-56 bg-white shadow-xl border border-gray-100 py-3 rounded-lg mt-0">
              <Link href="/destinations/casablanca" className="block px-6 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors">Au départ de Casablanca</Link>
              <Link href="/destinations/marrakech" className="block px-6 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors">Au départ de Marrakech</Link>
              <Link href="/destinations/tanger" className="block px-6 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors">Au départ de Tanger</Link>
              <Link href="/destinations/fes" className="block px-6 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors">Au départ de Fès</Link>
            </div>
          )}
        </div>

        <Link href="/guide-voyage" className="hover:text-orange-500 transition-colors">{t('nav.guide')}</Link>
        <Link href="/contact" className="hover:text-orange-500 transition-colors">{t('nav.contact')}</Link>
      </div>

      {/* Boutons d'Action */}
      <div className="flex items-center gap-4">
        <LanguageMenu />
        <Link
          href="/personnaliser-experience"
          className="hidden lg:block px-4 py-2 border-2 border-[#003366] text-[#003366] text-[9px] font-black rounded-full hover:bg-[#003366] hover:text-white transition-all duration-300"
        >
          {t('cta.customize')}
        </Link>

        <Link
          href="/reservation"
          className="px-5 py-2.5 bg-orange-500 text-white text-[10px] font-black rounded-full shadow-lg shadow-orange-500/20 hover:scale-105 transition-all duration-300"
        >
          {t('cta.reserve')}
        </Link>
      </div>
    </nav>
  );
}