'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { FadeIn, StaggerContainer, FadeInStagger } from '@/components/motion';

//  1. DONNÉES DES VILLES AU MAROC 
const TOUTES_DESTINATIONS = [
  {
    id: "casablanca",
    title: "Casablanca",
    subtitle: "La Ville Blanche",
    price: "1 200 DH",
    duration: "Week-end",
    img: "/casablanca.jpg",
    tag: "Business & Culture"
  },
  {
    id: "marrakech",
    title: "Marrakech",
    subtitle: "La Ville Ocre",
    price: "2 500 DH",
    duration: "3 Nuits",
    img: "/marrakech.jpg",
    tag: "Luxe & Tradition"
  },
  {
    id: "tanger",
    title: "Tanger",
    subtitle: "La Perle du Nord",
    price: "1 800 DH",
    duration: "2 Nuits",
    img: "/tanger.jpg",
    tag: "Bord de Mer"
  },
  {
    id: "fes",
    title: "Fès",
    subtitle: "Capitale Spirituelle",
    price: "1 500 DH",
    duration: "2 Nuits",
    img: "/fes.jpg",
    tag: "Histoire"
  },
  {
    id: "chefchaouen",
    title: "Chefchaouen",
    subtitle: "La Perle Bleue",
    price: "1 400 DH",
    duration: "2 Nuits",
    img: "/chefchaouen.jpg",
    tag: "Photogénique"
  },
  {
    id: "agadir",
    title: "Agadir",
    subtitle: "Le Soleil du Souss",
    price: "2 200 DH",
    duration: "4 Nuits",
    img: "/agadir.jpg",
    tag: "Détente"
  }
];

export default function DestinationsCataloguePage() {
  const { t } = useTranslation();
  return (
    <main className="min-h-screen bg-[#fcfbf8] font-sans text-[#003366]">
      
      {/*  HEADER SECTION */}
      <section className="relative overflow-hidden bg-[#003366] px-5 pb-14 pt-24 text-center sm:px-6 sm:pb-16 sm:pt-28 md:pt-32 md:pb-20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <div className="relative z-10">
          <FadeIn>
            <span className="mb-4 block text-[12px] font-black uppercase tracking-[0.32em] italic text-orange-500 sm:text-sm sm:tracking-[0.4em]">
              {t("WELIVE MOROCCO")}
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="mb-5 text-[clamp(3.3rem,13vw,6.9rem)] font-black uppercase italic leading-none tracking-tighter text-white sm:mb-6">
              {t("Nos Destinations")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="mx-auto max-w-[38rem] text-base italic leading-relaxed text-blue-100/60 sm:text-lg md:text-xl">
              {t("Découvrez le Maroc comme vous ne l&apos;avez jamais vu. Des circuits authentiques pour une immersion totale.")}
            </p>
          </FadeIn>
        </div>
      </section>

      
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 md:py-20 lg:py-24">
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          
          {TOUTES_DESTINATIONS.map((dest) => (
            <FadeInStagger key={dest.id} className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl md:rounded-[2.5rem]">
              
              <div className="relative h-64 overflow-hidden sm:h-72 md:h-80">
                <Image 
                  src={dest.img} 
                  alt={dest.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6">
                  <span className="rounded-full bg-white/90 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-[#003366] shadow-lg backdrop-blur-sm sm:px-4 sm:text-sm sm:tracking-widest">
                    {dest.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="flex flex-grow flex-col p-6 sm:p-8 md:p-10">
                <div className="mb-5 sm:mb-6">
                  <p className="mb-2 text-[11px] font-black uppercase italic tracking-[0.2em] text-orange-500 sm:text-sm sm:tracking-widest">
                    {t("Maroc")} — {dest.duration}
                  </p>
                  <h3 className="mb-3 text-[2.2rem] font-black uppercase italic leading-none tracking-tighter text-[#003366] transition-colors group-hover:text-orange-500 sm:mb-4 sm:text-[2.6rem] md:text-4xl">
                    {dest.title}
                  </h3>
                  <p className="text-[15px] italic text-gray-400 sm:text-base">{dest.subtitle}</p>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-6 sm:pt-8">
                  <div>
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 sm:text-sm sm:tracking-widest">{t("À partir de")}</p>
                    <p className="text-2xl font-black tracking-tight text-[#003366] sm:text-3xl">{dest.price}</p>
                  </div>
                  
                  <Link 
                    href={`/destinations/${dest.id}`}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#003366] text-white shadow-lg transition-all hover:bg-orange-500 active:scale-90 sm:h-14 sm:w-14 sm:rounded-2xl"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeInStagger>
          ))}

        </StaggerContainer>
      </section>

      <FadeIn className="mx-4 mb-10 rounded-[2rem] border border-gray-100 bg-gray-50 px-5 py-14 text-center sm:mx-6 sm:mb-12 sm:px-6 sm:py-16 md:rounded-[3rem] md:py-20">
        <h2 className="mb-5 text-3xl font-black uppercase italic text-[#003366] sm:text-4xl md:mb-6 md:text-5xl">{t("Un voyage sur mesure ?")}</h2>
        <p className="mb-8 text-base italic text-gray-500 sm:text-lg md:mb-10">{t("Nos experts basés au Maroc créent votre itinéraire idéal.")}</p>
        <a 
          href="https://wa.me/212636784401" 
          className="inline-block rounded-2xl bg-orange-500 px-8 py-4 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-xl transition-all hover:bg-[#003366] sm:px-12 sm:py-5 sm:text-sm md:text-base md:tracking-[0.2em]"
        >
          {t("Contactez-nous sur WhatsApp")}
        </a>
      </FadeIn>

    </main>
  );
}
