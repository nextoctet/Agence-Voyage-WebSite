'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();
  
  // DATA: HOW WE WORK
  const expertMethods = [
    { id: "01", tKey: t("Each trip is designed for you"), dKey: t("No packages, only conversations. You tell us what you're passionate about and we build a tailor-made itinerary. No templates, no copy-pasting.") },
    { id: "02", tKey: t("Access earned over the years"), dKey: t("Our 10+ years in the industry have allowed us to build links with local families and artisans who offer our clients access that money alone cannot buy.") },
    { id: "03", tKey: t("We don't rush you"), dKey: t("Morocco rewards those who slow down. We design trips with moments to breathe, to stroll, savor a tea, or take an unexpected detour.") },
    { id: "04", tKey: t("Responsible from the start"), dKey: t("Local guesthouses, Moroccan guides and drivers, artisan cooperatives. We keep the money in the communities we visit because we are part of them.") },
    { id: "05", tKey: t("Always reachable"), dKey: t("Our team is based in Morocco, on your time zone. Before, during, and if the unexpected arises — we are there. No call centers.") },
    { id: "06", tKey: t("No hidden fees, ever"), dKey: t("Clear and complete quotes from day one. What you see is what you pay. No surprise costs, no pressure to upsell.") }
  ];

  // DATA: WHERE WE TAKE YOU
  const destinations = [
    { nameKey: t("Marrakech"), img: "/pictures/marakechh.webp", descKey: t("Our home city. We know it street by street — the good souks, the restaurants where locals actually eat, and when to go to avoid the crowds.") },
    { nameKey: t("Fez"), img: "/pictures/fez.jpg", descKey: t("The most complex medina in the world. Our guides grew up there and know every shortcut, hidden courtyard, and family workshop closed to ordinary tourists.") },
    { nameKey: t("High Atlas Mountains"), img: "/pictures/atlas.jpg", descKey: t("Berber villages, cedar forests, striking landscapes. Hikes of all levels, cultural homestays, and 4x4 expeditions.") },
    { nameKey: t("The Sahara — Merzouga & Zagora"), img: "/pictures/agfay.jpg", descKey: t("Well beyond the standard bivouac. Real desert experiences built around calm, immensity, and a unique sunrise.") },
    { nameKey: t("Essaouira & Atlantic Coast"), img: "/pictures/essaouira.jpeg", descKey: t("The wind, the sea, and a creative energy completely different from the interior. Ideal for surfers, families, and those seeking another Morocco.") },
    { nameKey: t("The Imperial Cities Circuit"), img: "/pictures/hasan2.jpg", descKey: t("Casablanca, Rabat, Meknes, Fez, and Marrakech linked by a route that tells the whole story of Moroccan royalty.") }
  ];

  return (
    <main className="bg-[#F9F7F2] min-h-screen font-sans text-[#2D2926] overflow-x-hidden text-left">
      
      {/* SECTION 1: HERO  */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <Image 
          src="/pictures/chaf.webp" 
          fill 
          className="object-cover scale-105" 
          alt="About WeLiveMorocco" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>
        
        <div className="relative z-10 text-white max-w-5xl space-y-6 px-6">
          <p className="uppercase tracking-[0.8em] text-[10px] md:text-xs font-bold mb-4 text-[#C07652] drop-shadow-md">
            {t("Your Morocco. Designed around you.")}
          </p>
          <h1 className="text-5xl md:text-8xl font-serif leading-[1.1] mb-8 tracking-tight">
            <span className="font-light italic">{t("WE DON'T PLAN")}</span> <br/> 
            <span className="text-[#C07652] uppercase font-bold text-4xl md:text-7xl block mt-2">
              {t("JUST TRIPS.")}
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light italic opacity-90">
            {t("We are from here. We know the country by heart.")}
          </p>
        </div>
      </section>

      {/* SECTION 2*/}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-block border-l-4 border-[#C07652] pl-6">
               <h2 className="text-[#C07652] font-bold uppercase text-[10px] tracking-[0.3em]">{t("OUR STORY")}</h2>
            </div>
            <p className="text-4xl md:text-5xl font-serif italic leading-tight text-[#2D2926]">
              {t("Designed by Moroccans.")} <br/>
              <span className="text-[#C07652] not-italic font-sans font-black uppercase text-3xl md:text-4xl block mt-4 tracking-tighter">
                {t("For the world.")}
              </span>
            </p>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              {t("WeLiveMorocco was founded by a team of Moroccan travel professionals who grew up here, made their careers here, and know this country as only locals can.")}
            </p>
          </div>
          <div className="bg-[#2D2926] text-[#F9F7F2] p-12 md:p-20 relative shadow-2xl overflow-hidden group rounded-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C07652]/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
            <p className='text-xl md:text-2xl font-light italic mb-8 leading-relaxed relative z-10 border-b border-[#C07652]/20 pb-8 text-white'>
              {t("We didn't discover Morocco — we were born here. We have spent over a decade on the ground learning every corner of the kingdom from the inside.")}
            </p>
            <p className="text-xl md:text-2xl font-light italic leading-relaxed relative z-10 text-white/80">
              {t("This experience — real, lived, accumulated over 10 years — is what we put into every journey.")}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-24 bg-[#2D2926] text-white px-8 mx-4 rounded-3xl">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-16">
          <div className="text-center space-y-4">
            <p className="text-5xl md:text-8xl font-serif italic text-[#C07652]">{t("10+")}</p>
            <p className="text-[9px] uppercase font-bold tracking-[0.3em] opacity-40">{t("Years of professional experience")}</p>
          </div>
          <div className="text-center space-y-4">
            <p className="text-5xl md:text-8xl font-serif italic text-[#C07652]">{t("40+")}</p>
            <p className="text-[9px] uppercase font-bold tracking-[0.3em] opacity-40">{t("Destinations covered")}</p>
          </div>
          <div className="text-center space-y-4 col-span-2 md:col-span-1">
            <p className="text-5xl md:text-8xl font-serif italic text-[#C07652]">{t("98%")}</p>
            <p className="text-[9px] uppercase font-bold tracking-[0.3em] opacity-40">{t("Client satisfaction rate")}</p>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-serif italic mb-4 text-[#2D2926]">{t("OUR METHOD")}</h2>
          <p className="text-[#C07652] font-bold uppercase tracking-[0.5em] text-[9px] italic border-l-2 border-[#C07652] pl-4">
            {t("Six commitments on which we never compromise.")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertMethods.map((method) => (
            <div key={method.id} className="group bg-white p-12 relative border border-gray-100 hover:border-[#C07652]/50 transition-all duration-500">
              <span className="text-6xl font-serif italic text-[#C07652]/10 absolute top-4 right-6 group-hover:text-[#C07652]/20 transition-colors">{method.id}</span>
              <h3 className="text-lg font-bold uppercase mb-6 relative z-10 leading-tight tracking-widest text-[#2D2926]">{method.tKey}</h3>
              <p className="text-[11px] font-light italic opacity-60 leading-[1.8] text-gray-500">{method.dKey}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="py-32 bg-white px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif italic text-center mb-24 text-[#2D2926] uppercase">{t("Where we take you")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            {destinations.map((dest, i) => (
              <div key={i} className="bg-[#F9F7F2] group cursor-pointer border border-transparent hover:border-[#C07652]/20 transition-all duration-500 rounded-2xl overflow-hidden">
                <div className="h-64 relative overflow-hidden">
                  <Image 
                    src={dest.img} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={dest.nameKey} 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                </div>
                <div className="p-10">
                  <span className="text-[#C07652] font-serif italic text-xl mb-4 block">{(i + 1).toString().padStart(2, '0')}</span>
                  <h3 className="text-xl font-bold uppercase mb-4 tracking-tighter text-[#2D2926]">{dest.nameKey}</h3>
                  <p className="text-xs text-gray-500 italic leading-relaxed">{dest.descKey}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}