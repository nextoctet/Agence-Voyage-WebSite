'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function DesignExperience() {
  const { t } = useTranslation();

  return (
    <main className="bg-[#F9F7F2] min-h-screen font-sans text-[#2D2926] overflow-x-hidden text-left">
      
      {/* SECTION 1: HERO - Style Accueil */}
      <section className="relative h-[85vh] flex items-center justify-start px-8 md:px-24 mx-4 mt-4 rounded-3xl overflow-hidden shadow-2xl bg-[#2D2926]">
        <Image 
          src="/monde-du-voyage.webp" 
          fill 
          className="object-cover scale-105 animate-slow-zoom opacity-60" 
          alt={t("Concevez votre voyage")} 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
        <div className="relative z-10 text-white max-w-4xl">
          <p className="uppercase tracking-[0.8em] text-[10px] md:text-xs font-bold mb-8 text-[#C07652]">
            {t("PAS UN FORFAIT.")}
          </p>
          <h1 className="text-6xl md:text-[8rem] font-serif italic leading-[0.9] mb-12 tracking-tighter uppercase">
            {t("Un voyage")} <br /> 
            <span className="text-[#C07652] not-italic font-sans font-black uppercase text-4xl md:text-7xl block mt-2">{t("conçu")}</span>
            {t("pour vous.")}
          </h1>
          <p className="text-xl md:text-2xl font-light italic mb-12 opacity-90 border-l-2 border-[#C07652] pl-8 max-w-2xl leading-relaxed">
            {t("Chaque détail de votre voyage au Maroc est conçu à partir de zéro - selon vos dates, vos intérêts, votre budget et votre style de voyage. Pas de groupes partagés. Pas de programmes fixes.")}
          </p>
        </div>
      </section>

      {/* SECTION 2: CARACTÉRISTIQUES - Style Minimaliste */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {[
            { icon: "✦", title: t("100% Privé"), desc: t("Votre voyage, votre groupe, votre rythme. Jamais partagé avec des inconnus.") },
            { icon: "◎", title: t("Sur mesure"), desc: t("Nous partons d'une page blanche et construisons selon vos souhaits.") },
            { icon: "▲", title: t("Experts locaux"), desc: t("Des guides natifs qui vivent et respirent chaque destination.") },
            { icon: "◈", title: t("Flexibilité"), desc: t("Changez d'avis en cours de route. Nous nous adaptons en temps réel.") }
          ].map((item, i) => (
            <div key={i} className="space-y-6 group">
              <span className="text-4xl text-[#C07652] block transition-transform group-hover:scale-125 duration-300">{item.icon}</span>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#2D2926]">{item.title}</h3>
              <p className="text-xs text-gray-500 italic leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: LE PROCESSUS - Style Editorial */}
      <section className="py-32 bg-[#2D2926] text-white px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-5xl md:text-7xl font-serif italic tracking-tighter mb-4 opacity-90 uppercase">{t("Le Processus")}</h2>
            <p className="text-[#C07652] font-bold uppercase tracking-[0.5em] text-[9px] italic border-l-2 border-[#C07652] pl-4">{t("De votre premier message à votre dernier souvenir")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {[
              { id: "01", t: t("Dites-nous votre rêve"), d: t("Remplissez notre formulaire. Dites-nous qui vous êtes et ce qui vous passionne.") },
              { id: "02", t: t("Rencontre Designer"), d: t("Un designer de voyage dédié au Maroc vous appelle sous 24h pour approfondir votre vision.") },
              { id: "03", t: t("Votre proposition"), d: t("En 3 à 5 jours, recevez un itinéraire complet : hôtels, logistique et prix.") },
              { id: "04", t: t("Affinage final"), d: t("Nous ajustons jusqu'à ce que ce soit parfait. Vous n'avez plus qu'à arriver.") }
            ].map((step) => (
              <div key={step.id} className="group bg-white/5 p-12 relative border border-white/10 hover:border-[#C07652]/50 transition-all duration-500">
                <span className="text-7xl font-serif italic text-white/[0.03] absolute top-2 right-4 pointer-events-none group-hover:text-[#C07652]/10 transition-colors">{step.id}</span>
                <h3 className="text-lg font-bold uppercase mb-6 relative z-10 leading-tight tracking-widest">{step.t}</h3>
                <p className="text-[11px] font-light italic opacity-60 leading-[1.8]">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FORMULAIRE - Style Moderne Clean */}
      <section className="py-32 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
        <div className="lg:col-span-5 space-y-12">
          <h2 className="text-5xl md:text-7xl font-serif italic tracking-tighter leading-[1] text-[#2D2926] uppercase">
            {t("Concevez votre")} <br /> <span className="text-[#C07652] not-italic font-sans font-black uppercase text-3xl md:text-5xl block mt-4">{t("voyage au Maroc.")}</span>
          </h2>
          <p className="text-xl font-light italic text-gray-400 leading-relaxed">{t("Un seul formulaire. Votre designer personnel vous appelle sous 24 heures.")}</p>
          
          <div className="bg-white p-10 border-l-2 border-[#C07652] shadow-sm mt-12">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-[#2D2926]">{t("Prochaines étapes")}</h4>
            <ul className="space-y-6 text-xs italic text-gray-500 font-medium">
              <li className="flex gap-4"><span className="text-[#C07652]">01</span> {t("Appel de conception gratuit sous 24h.")}</li>
              <li className="flex gap-4"><span className="text-[#C07652]">02</span> {t("Proposition personnalisée sous 3 à 5 jours.")}</li>
              <li className="flex gap-4"><span className="text-[#C07652]">03</span> {t("Affinement ensemble jusqu'à satisfaction.")}</li>
              <li className="flex gap-4"><span className="text-[#C07652]">04</span> {t("Confirmation et voyage. Nous gérons tout.")}</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white p-10 md:p-16 shadow-2xl rounded-sm border border-gray-100">
            <form className="space-y-12">
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C07652]">{t("NOM COMPLET *")}</label>
                <input type="text" placeholder={t("Entrer votre nome")} className="w-full border-b border-gray-200 py-4 focus:border-[#C07652] outline-none font-serif italic transition-all text-xl bg-transparent placeholder:text-gray-200" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C07652]">{t("ADRESSE E-MAIL *")}</label>
                  <input type="email" placeholder={t("sofia@example.com")} className="w-full border-b border-gray-200 py-4 focus:border-[#C07652] outline-none font-serif italic transition-all bg-transparent placeholder:text-gray-200" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C07652]">{t("NATIONALITÉ")}</label>
                  <input type="text" placeholder={t("ex. Marocaine")} className="w-full border-b border-gray-200 py-4 focus:border-[#C07652] outline-none font-serif italic transition-all bg-transparent placeholder:text-gray-200" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C07652]">{t("TÉLÉPHONE (WhatsApp)")}</label>
                  <input type="tel" placeholder={t("06XXXXXXXX")} className="w-full border-b border-gray-200 py-4 focus:border-[#C07652] outline-none font-serif italic transition-all bg-transparent placeholder:text-gray-200" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C07652]">{t("VOYAGE EN TANT QUE")}</label>
                  <div className="flex flex-wrap gap-4 pt-4">
                    {["Couple", "Famille", "Solo", "Groupe"].map(type => (
                      <label key={type} className="flex items-center gap-2 text-[10px] font-bold uppercase cursor-pointer hover:text-[#C07652] transition-colors">
                        <input type="radio" name="travellerType" className="accent-[#C07652]" /> {t(type)}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C07652]">{t("FOURCHETTE BUDGÉTAIRE *")}</label>
                <select className="w-full border-b border-gray-200 py-4 focus:border-[#C07652] outline-none font-serif italic transition-all bg-transparent text-lg">
                  <option className="bg-[#F9F7F2]">{t("3 000 DHs – 6 000 DHs par personne")}</option>
                  <option className="bg-[#F9F7F2]">{t("6 000 DHs – 10 000 DHs par personne")}</option>
                  <option className="bg-[#F9F7F2]">{t("Plus de 10 000 DHs par personne")}</option>
                </select>
              </div>

              <div className="pt-8 text-center">
                <button className="w-full bg-[#C07652] text-white py-8 font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-[#2D2926] transition-all shadow-xl">
                  {t("DEMANDER MON APPEL DE CONCEPTION")}
                </button>
                <p className="mt-8 text-[9px] text-gray-400 font-bold uppercase tracking-widest italic opacity-60">
                  {t("Sans engagement · Réponse sous 24h")}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

   
    </main>
  );
}