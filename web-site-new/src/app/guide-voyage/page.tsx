'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function CultureMarocaine() {
  const { t } = useTranslation();

  const CULTURE_SECTIONS = [
    {
      title: t("L'Art de la Table"),
      sub: t("Gastronomie"),
      desc: t("Plus qu'un repas, c'est une cérémonie. Du Couscous du vendredi au Tajine mijoté sur le charbon (Majmar), la cuisine marocaine est classée parmi les meilleures au monde."),
      items: [
        t("Le Thé à la menthe (Le Whisky Berbère)"),
        t("La Pastilla (Sucré-Salé)"),
        t("Tanjia Marrakchia"),
        t("Le Pain traditionnel (Tafarnout)")
      ],
      img: "/table.webp" 
    },
    {
      title: t("Savoir-faire Ancestral"),
      sub: t("Artisanat"),
      desc: t("Chaque ville a son secret. Le cuir à Fès, le tapis à Rabat, la poterie à Safi et le bois de thuya à Essaouira. Nos artisans sont les gardiens d'une histoire millénaire."),
      items: [
        t("Zellige & Mosaïque"),
        t("Tissage de Tapis"),
        t("Travail du Cuir"),
        t("Ferronnerie d'art")
      ],
      img: "/cuir.jpg"
    },
    {
      title: t("L'Art de Vivre"),
      sub: t("Traditions"),
      desc: t("L'hospitalité (Diyafa) est le pilier de notre culture. Le rituel du Hammam, les moussems colorés et la musique Gnaoua créent une atmosphère mystique unique."),
      items: [
        t("Le Rituel du Hammam"),
        t("L'Hospitalité Légendaire"),
        t("Musique Gnaoua & Andalouse"),
        t("Fantasia (Tbourida)")
      ],
      img: "/vivre.jpg"
    }
  ];

  return (
    <main className="bg-[#F9F7F2] min-h-screen font-sans text-[#2D2926] overflow-x-hidden">
      
      {/*  HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-center px-6 overflow-hidden mx-4 mt-4 rounded-3xl shadow-2xl bg-[#2D2926]">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/pictures/casablanca.jpg" 
            fill 
            className="object-cover scale-105 animate-slow-zoom" 
            alt={t("Culture Maroc")} 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <span className="text-[#C07652] font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs mb-6 block">
            {t("Héritage Millénaire")}
          </span>
          <h1 className="text-5xl md:text-8xl font-serif italic text-white leading-none tracking-tight">
            {t("L'ÂME DU")} <br /> 
            <span className="text-[#C07652] uppercase font-sans font-black not-italic text-4xl md:text-7xl block mt-4 tracking-tighter">
              {t("MAROC")}
            </span>
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-32 max-w-7xl mx-auto px-8">
        <div className="space-y-48">
          {CULTURE_SECTIONS.map((sec, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Côté Texte */}
              <div className="lg:w-1/2 space-y-10 text-left">
                <div className="inline-block border-l-4 border-[#C07652] pl-6">
                  <span className="text-[#C07652] font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">{sec.sub}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif italic text-[#2D2926] leading-tight">{sec.title}</h2>
                <p className="text-xl text-gray-500 italic font-light leading-relaxed max-w-xl">
                  {sec.desc}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 pt-8 border-t border-gray-100">
                  {sec.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-[#2D2926]/80 group">
                      <span className="w-1.5 h-1.5 bg-[#C07652] rounded-full transition-transform group-hover:scale-150"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Côté Image */}
              <div className="lg:w-1/2 relative h-[550px] w-full rounded-sm overflow-hidden shadow-2xl group">
                 <div className="absolute inset-0 bg-[#C07652]/5 group-hover:bg-transparent transition-all z-10"></div>
                 <Image 
                    src={sec.img} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0" 
                    alt={sec.title} 
                 />
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* SECTION CITATION */}
      <section className="bg-[#2D2926] py-32 px-8 text-center relative mx-4 mb-4 rounded-3xl overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif italic text-[#C07652]/5 pointer-events-none uppercase">
           Héritage
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
           <h3 className="text-3xl md:text-5xl font-serif italic text-white leading-snug">
            {t("Au Maroc, chaque porte fermée cache un")} <span className="text-[#C07652] not-italic font-sans font-black uppercase tracking-tighter">{t("trésor")}</span>{t(", et chaque invité est un")} <span className="text-[#C07652] not-italic font-sans font-black uppercase tracking-tighter">{t("roi.")}</span>
           </h3>
           <div className="w-16 h-1 bg-[#C07652] mx-auto mt-12"></div>
        </div>
      </section>

    </main>
  );
}