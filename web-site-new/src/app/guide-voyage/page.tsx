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
      img: "/pictures/table.webp" 
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
      img: "/pictures/cuir.jpg"
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
      img: "/pictures/vivre.jpg"
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F9F7F2] font-sans text-[#2D2926]">
      

      <section className="relative mx-3 mt-3 flex min-h-[calc(100svh-80px)] items-end justify-center overflow-hidden rounded-[28px] bg-[#2D2926] px-5 text-center shadow-2xl sm:mx-4 sm:mt-4 sm:min-h-[560px] sm:items-center sm:px-6 md:min-h-[70vh] md:px-8 md:rounded-3xl">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/pictures/casablancaa.jpg" 
            fill 
            className="object-cover scale-105 animate-slow-zoom" 
            alt={t("Culture Maroc")} 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>
        
        <div className="relative z-10 mx-auto w-full max-w-5xl pb-10 pt-24 sm:py-0">
          <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.34em] text-[#C07652] sm:text-[13px] sm:tracking-[0.5em] md:text-sm">
            {t("Héritage Millénaire")}
          </span>
          <h1 className="text-[clamp(3.2rem,13vw,7rem)] font-serif italic leading-none tracking-tight text-white">
            {t("L'ÂME DU")} <br /> 
            <span className="mt-3 block text-[clamp(3.2rem,13vw,7rem)] font-sans font-black uppercase not-italic tracking-tighter text-[#C07652] sm:mt-4">
              {t("MAROC")}
            </span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:py-32">
        <div className="space-y-20 sm:space-y-24 md:space-y-32 lg:space-y-40">
          {CULTURE_SECTIONS.map((sec, idx) => (
            <div key={idx} className={`flex flex-col items-center gap-12 sm:gap-16 lg:flex-row lg:gap-20 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              <div className="space-y-6 text-left sm:space-y-8 md:space-y-10 lg:w-1/2">
                <div className="inline-block border-l-4 border-[#C07652] pl-4 sm:pl-6">
                  <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#C07652] sm:text-[13px] sm:tracking-[0.3em] md:text-sm">{sec.sub}</span>
                </div>
                <h2 className="text-3xl font-serif italic leading-tight text-[#2D2926] sm:text-4xl md:text-5xl lg:text-6xl">{sec.title}</h2>
                <p className="max-w-xl text-lg italic font-light leading-relaxed text-gray-500 sm:text-xl md:text-2xl">
                  {sec.desc}
                </p>
                <ul className="grid grid-cols-1 gap-x-10 gap-y-3 border-t border-gray-100 pt-6 sm:gap-y-4 sm:pt-8 md:grid-cols-2 md:gap-x-12">
                  {sec.items.map((item, i) => (
                    <li key={i} className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#2D2926]/80 sm:text-sm sm:tracking-widest md:text-base">
                      <span className="w-1.5 h-1.5 bg-[#C07652] rounded-full transition-transform group-hover:scale-150"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="group relative h-[320px] w-full overflow-hidden rounded-[24px] shadow-2xl sm:h-[420px] md:h-[520px] lg:h-[550px] lg:w-1/2">
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

      <section className="relative mx-3 mb-3 overflow-hidden rounded-[28px] bg-[#2D2926] px-5 py-16 text-center sm:mx-4 sm:mb-4 sm:px-8 sm:py-20 md:rounded-3xl md:py-24 lg:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-serif uppercase italic text-[#C07652]/5 md:text-[15vw]">
           Héritage
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
           <h3 className="text-3xl font-serif italic leading-snug text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {t("Au Maroc, chaque porte fermée cache un")} <span className="text-[#C07652] not-italic font-sans font-black uppercase tracking-tighter">{t("trésor")}</span>{t(", et chaque invité est un")} <span className="text-[#C07652] not-italic font-sans font-black uppercase tracking-tighter">{t("roi.")}</span>
           </h3>
           <div className="mx-auto mt-10 h-1 w-14 bg-[#C07652] sm:mt-12 sm:w-16"></div>
        </div>
      </section>

    </main>
  );
}
