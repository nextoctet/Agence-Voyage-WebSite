'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from "react-i18next";

export default function AProposPage() {
  const { t } = useTranslation();

  return (
    <main className="bg-white min-h-screen font-sans text-[#003366]">
      
      {/* --- 1. HERO - L'ESSENCE DE LA MARQUE --- */}
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-[#003366]">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/images/hero-morocco.jpg" fill className="object-cover" alt={t("Morocco")} />
        </div>
        <div className="relative z-10 px-6">
          <span className="text-orange-500 font-black uppercase tracking-[0.5em] text-xs italic mb-4 block">{t("Manifeste")}</span>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none">
            {t("WE LIVE MOROCCO")}
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
      </section>

      {/* --- 2. QUI SOMMES-NOUS ? (LA VISION) --- */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-black uppercase italic leading-none border-l-[10px] border-orange-500 pl-8">
              {t("L'ÂME DU")} <br/><span className="text-orange-500">{t("Voyageurs")}</span>
            </h2>
            <div className="space-y-6 text-xl text-gray-600 italic leading-relaxed">
              <p>
                <strong className="text-[#003366]">{t("WELIVE MOROCCO")}</strong> {t("n'est pas une simple agence de voyage. C'est le fruit d'une ambition : transformer chaque séjour en une immersion totale.")}
              </p>
              <p>
                {t("WELIVE MOROCCO est l'évolution naturelle d'Expert Voyages. Plus qu'une agence, nous sommes aujourd'hui un créateur d'expériences dédié à ceux qui veulent vivre le Maroc, pas juste le visiter.")} 
              </p>
              <p className="text-base text-gray-400">
                {t("Basés sur l'axe stratégique Rabat-Témara, nous opérons avec une connaissance millimétrée du terrain pour offrir ce que le Maroc a de plus précieux : sa vérité.")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-80 rounded-br-[5rem] overflow-hidden shadow-2xl">
              <Image src="/marrrr.jfif" fill className="object-cover" alt={t("Artisanat")} />
            </div>
            <div className="relative h-80 rounded-tl-[5rem] overflow-hidden shadow-2xl mt-12">
              <Image src="/images/destinations/tanger.jpg" fill className="object-cover" alt={t("Culture")} />
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. POURQUOI NOUS ? (VALEURS) --- */}
      <section className="bg-gray-50 py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: t("Expertise Locale"), 
                desc: t("Notre équipe vit ici. De Tamesna à Tanger, nous maîtrisons les routes, les secrets et les meilleures tables."),
                color: "border-[#003366]"
              },
              { 
                title: t("Zéro Compromis"), 
                desc: t("Le luxe pour nous, c'est la qualité. Chaque Riad, chaque chauffeur et chaque guide est testé et validé par nos soins."),
                color: "border-orange-500"
              },
              { 
                title: t("Disponibilité"), 
                desc: t("Parce qu'un voyage ne s'arrête jamais, notre assistance à Rabat est disponible 24h/24 pour nos voyageurs."),
                color: "border-[#003366]" 
              }
            ].map((val, i) => (
              <div key={i} className={`bg-white p-12 shadow-sm border-t-[10px] ${val.color} group hover:shadow-2xl transition-all`}>
                <h3 className="text-2xl font-black uppercase italic mb-4 group-hover:text-orange-500 transition-colors">{val.title}</h3>
                <p className="text-gray-500 italic leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. LE MOT DE L'ÉQUIPE --- */}
      <section className="py-32 px-8 text-center max-w-4xl mx-auto">
        <div className="inline-block p-4 bg-orange-500 text-white font-black text-xs uppercase tracking-widest mb-8">
          {t("Notre Engagement")}
        </div>
        <blockquote className="text-3xl md:text-5xl font-black italic text-[#003366] leading-tight tracking-tighter uppercase">
         {t("Nous ne vendons pas des billets, nous créons des")} <span className="text-orange-500">{t("souvenirs")}</span> {t("qui ne s'effacent jamais.")}
        </blockquote>
        <p className="mt-12 text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]">
          {t("L'équipe WELIVE MOROCCO — Rabat, Maroc")}
        </p>
      </section>

      {/* --- 5. CTA FINAL --- */}
      <section className="py-24 bg-[#003366] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <h2 className="text-4xl font-black text-white uppercase italic text-center md:text-left">
            {t("Envie de faire connaissance ?")} <br/>
            <span className="text-orange-500">{t("Passons au bureau ou sur WhatsApp.")}</span>
          </h2>
          <div className="flex gap-4">
            <Link href="https://wa.me/212682838530" className="bg-orange-500 text-white px-10 py-5 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-[#003366] transition-all">
              {t("WhatsApp")}
            </Link>
          </div>
        </div>
        {/* Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/5 pointer-events-none uppercase">
          {t("Morocco")}
        </div>
      </section>

    </main>
  );
}