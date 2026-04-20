'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
const CULTURE_SECTIONS = [
  {
    title: "L'Art de la Table",
    sub: "Gastronomie",
    desc: "Plus qu'un repas, c'est une cérémonie. Du Couscous du vendredi au Tajine mijoté sur le charbon (Majmar), la cuisine marocaine est classée parmi les meilleures au monde.",
    items: ["Le Thé à la menthe (Le Whisky Berbère)", "La Pastilla (Sucré-Salé)", "Tanjia Marrakchia", "Le Pain traditionnel (Tafarnout)"],
    img: "/table.webp" 
  },
  {
    title: "Savoir-faire Ancestral",
    sub: "Artisanat",
    desc: "Chaque ville a son secret. Le cuir à Fès, le tapis à Rabat, la poterie à Safi et le bois de thuya à Essaouira. Nos artisans sont les gardiens d'une histoire millénaire.",
    items: ["Zellige & Mosaïque", "Tissage de Tapis", "Travail du Cuir", "Ferronnerie d'art"],
    img: "/cuir.jpg"
  },
  {
    title: "L'Art de Vivre",
    sub: "Traditions",
    desc: "L'hospitalité (Diyafa) est le pilier de notre culture. Le rituel du Hammam, les moussems colorés et la musique Gnaoua créent une atmosphère mystique unique.",
    items: ["Le Rituel du Hammam", "L'Hospitalité Légendaire", "Musique Gnaoua & Andalouse", "Fantasia (Tbourida)"],
    img: "/vivre.jpg"
  }
];

export default function CultureMarocaine() {
  const { t } = useTranslation();
  return (
    <main className="bg-white min-h-screen font-sans text-[#003366]">
      
      {/* --- HERO CULTURE --- */}
      <section className="relative h-[60vh] flex items-center bg-[#003366] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image src="/images/destinations/marrakech.jpg" fill className="object-cover" alt="Culture Maroc" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <span className="text-orange-500 font-black uppercase tracking-[0.5em] text-xs italic mb-4 block">{t("Héritage Millénaire")}</span>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none">
            {t("L'ÂME DU")} <br /> <span className="text-orange-500">{t("MAROC")}</span>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
      </section>

      {/* --- CONTENT --- */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="space-y-32">
          {CULTURE_SECTIONS.map((sec, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Texte */}
              <div className="lg:w-1/2 space-y-6">
                <span className="text-orange-500 font-black uppercase tracking-widest text-sm italic">{sec.sub}</span>
                <h2 className="text-5xl font-black uppercase italic leading-none">{sec.title}</h2>
                <p className="text-xl text-gray-500 italic leading-relaxed">
                  {sec.desc}
                </p>
                <ul className="grid grid-cols-2 gap-4 pt-6">
                  {sec.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold italic text-[#003366]">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image avec style "Frame" WELIVE */}
              <div className="lg:w-1/2 relative h-[450px] w-full border-[10px] border-gray-50 shadow-2xl overflow-hidden group">
                 <div className="absolute inset-0 bg-orange-500/10 group-hover:bg-transparent transition-all z-10"></div>
                 <Image src={sec.img} fill className="object-cover group-hover:scale-105 transition-transform duration-700" alt={sec.title} />
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* --- QUOTE SECTION --- */}
      <section className="bg-[#003366] py-24 px-8 text-center relative">
        <div className="max-w-4xl mx-auto">
           <h3 className="text-3xl md:text-5xl font-black text-white italic uppercase leading-tight">
            {t("Au Maroc, chaque porte fermée cache un")} <span className="text-orange-500">{t("trésor")}</span>{t(",et chaque invité est un")} <span className="text-orange-500">{t("roi.")}</span>
           </h3>
        </div>
      </section>

    </main>
  );
}