'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function DesignExperience() {
  const { t } = useTranslation();

  return (
    <main className="bg-white min-h-screen font-sans text-[#003366] overflow-x-hidden text-left">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-[85vh] flex items-center justify-start px-8 md:px-24 border-b-[16px] border-orange-500">
        <Image 
          src="/monde-du-voyage.webp" 
          fill 
          className="object-cover brightness-[0.8]" 
          alt={t("Concevez votre voyage")} 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="relative z-10 text-white max-w-4xl">
          <p className="uppercase tracking-[0.6em] text-sm font-black mb-8 italic opacity-90">
            {t("PAS UN FORFAIT.")}
          </p>
          <h1 className="text-6xl md:text-[9rem] font-black leading-[0.85] mb-12 tracking-tighter uppercase">
            {t("Un voyage")} <br /> 
            <span className="text-orange-500 italic">{t("conçu")}</span> <br />
            {t("pour vous.")}
          </h1>
          <p className="text-xl md:text-2xl font-light italic mb-12 opacity-80 border-l-4 border-orange-500 pl-8">
            {t("Chaque détail de votre voyage au Maroc est conçu à partir de zéro - selon vos dates, vos intérêts, votre budget et votre style de voyage. Pas de groupes partagés. Pas de programmes fixes.")}
          </p>
        </div>
      </section>

      {/* SECTION 2: CARACTÉRISTIQUES */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-6">
            <span className="text-4xl text-orange-500">✦</span>
            <h3 className="text-2xl font-black uppercase italic tracking-tighter">{t("100% Privé")}</h3>
            <p className="text-sm text-gray-500 italic leading-relaxed">{t("Votre voyage, votre groupe, votre rythme. Jamais partagé avec des inconnus.")}</p>
          </div>
          <div className="space-y-6">
            <span className="text-4xl text-orange-500">◎</span>
            <h3 className="text-2xl font-black uppercase italic tracking-tighter">{t("Construit à partir de zéro")}</h3>
            <p className="text-sm text-gray-500 italic leading-relaxed">{t("Nous partons d'une page blanche et construisons selon vos souhaits.")}</p>
          </div>
          <div className="space-y-6">
            <span className="text-4xl text-orange-500">▲</span>
            <h3 className="text-2xl font-black uppercase italic tracking-tighter">{t("Expert sur le terrain")}</h3>
            <p className="text-sm text-gray-500 italic leading-relaxed">{t("Des guides locaux qui vivent et respirent chaque destination.")}</p>
          </div>
          <div className="space-y-6">
            <span className="text-4xl text-orange-500">◈</span>
            <h3 className="text-2xl font-black uppercase italic tracking-tighter">{t("Flexibilité totale")}</h3>
            <p className="text-sm text-gray-500 italic leading-relaxed">{t("Changez d'avis en cours de route. Nous nous adaptons en temps réel.")}</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: LE PROCESSUS */}
      <section className="py-32 bg-[#003366] text-white px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">{t("LE PROCESSUS")}</h2>
            <p className="text-orange-500 font-bold uppercase tracking-widest text-xs italic">{t("De votre premier message à votre dernier souvenir")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
            <div className="group border-l border-white/10 pl-8 pt-4 hover:border-orange-500 transition-all duration-500">
              <span className="text-xs font-black text-orange-500 italic mb-8 block">{t("01")}</span>
              <h3 className="text-2xl font-black uppercase mb-6 italic leading-tight tracking-tighter">{t("Dites-nous votre rêve")}</h3>
              <p className="text-sm font-light italic opacity-60 leading-relaxed">{t("Remplissez notre court formulaire de conception. Dites-nous qui vous êtes, quand vous voyagez et ce qui vous passionne. Cela prend 3 minutes.")}</p>
            </div>
            <div className="group border-l border-white/10 pl-8 pt-4 hover:border-orange-500 transition-all duration-500">
              <span className="text-xs font-black text-orange-500 italic mb-8 block">{t("02")}</span>
              <h3 className="text-2xl font-black uppercase mb-6 italic leading-tight tracking-tighter">{t("Rencontrez votre Designer")}</h3>
              <p className="text-sm font-light italic opacity-60 leading-relaxed">{t("Un designer de voyage dédié au Maroc vous appelle dans les 24 heures pour approfondir votre vision.")}</p>
            </div>
            <div className="group border-l border-white/10 pl-8 pt-4 hover:border-orange-500 transition-all duration-500">
              <span className="text-xs font-black text-orange-500 italic mb-8 block">{t("03")}</span>
              <h3 className="text-2xl font-black uppercase mb-6 italic leading-tight tracking-tighter">{t("Recevez votre proposition")}</h3>
              <p className="text-sm font-light italic opacity-60 leading-relaxed">{t("En 3 à 5 jours, vous recevez un itinéraire personnalisé complet : hôtels, expériences, logistique, prix.")}</p>
            </div>
            <div className="group border-l border-white/10 pl-8 pt-4 hover:border-orange-500 transition-all duration-500">
              <span className="text-xs font-black text-orange-500 italic mb-8 block">{t("04")}</span>
              <h3 className="text-2xl font-black uppercase mb-6 italic leading-tight tracking-tighter">{t("Affiner et confirmer")}</h3>
              <p className="text-sm font-light italic opacity-60 leading-relaxed">{t("Nous ajustons jusqu'à ce que ce soit parfait. Ensuite, vous confirmez et nous gérons tout. Vous n'avez plus qu'à arriver.")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FORMULAIRE */}
      <section className="py-32 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5 space-y-12">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9]">
            {t("CONCEVEZ VOTRE")} <br /> <span className="text-orange-500">{t("VOYAGE AU MAROC.")}</span>
          </h2>
          <p className="text-2xl font-light italic text-gray-400">{t("Un seul formulaire. Votre designer personnel vous appelle sous 24 heures.")}</p>
          
          <div className="bg-gray-50 p-10 border-l-8 border-[#003366] shadow-xl mt-12">
            <h4 className="text-xl font-black uppercase italic mb-6 tracking-tighter text-[#003366]">{t("Que se passe-t-il ensuite ?")}</h4>
            <ul className="space-y-6 text-sm italic text-gray-500">
              <li>{t("1. Appel de conception gratuit sous 24h.")}</li>
              <li>{t("2. Proposition personnalisée sous 3 à 5 jours.")}</li>
              <li>{t("3. Affinement ensemble jusqu'à satisfaction.")}</li>
              <li>{t("4. Confirmation et voyage. Nous gérons tout.")}</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white p-10 md:p-20 border-t-[20px] border-orange-500 shadow-3xl">
            <form className="space-y-12">
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-500 italic">{t("NOM COMPLET *")}</label>
                <input type="text" placeholder={t("ex. Sofia & Marc Laurent")} className="w-full border-b-2 border-gray-100 py-4 focus:border-orange-500 outline-none font-bold italic transition-all text-xl" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                <div className="space-y-2 text-left">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-500 italic">{t("ADRESSE E-MAIL *")}</label>
                  <input type="email" placeholder={t("sofia@example.com")} className="w-full border-b-2 border-gray-100 py-4 focus:border-orange-500 outline-none font-bold italic transition-all" />
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-500 italic">{t("NATIONALITÉ")}</label>
                  <input type="text" placeholder={t("ex. Française")} className="w-full border-b-2 border-gray-100 py-4 focus:border-orange-500 outline-none font-bold italic transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                <div className="space-y-2 text-left">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-500 italic">{t("TÉLÉPHONE (WhatsApp)")}</label>
                  <input type="tel" placeholder={t("+33 6 ...")} className="w-full border-b-2 border-gray-100 py-4 focus:border-orange-500 outline-none font-bold italic transition-all" />
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-500 italic">{t("VOYAGE EN TANT QUE")}</label>
                  <div className="flex gap-4 pt-4">
                    {["Couple", "Famille", "Solo", "Groupe"].map(type => (
                      <label key={type} className="flex items-center gap-2 text-xs font-black uppercase cursor-pointer hover:text-orange-500">
                        <input type="radio" name="travellerType" className="accent-orange-500" /> {t(type)}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-500 italic">{t("FOURCHETTE BUDGÉTAIRE *")}</label>
                <select className="w-full border-b-2 border-gray-100 py-4 focus:border-orange-500 outline-none font-bold italic transition-all bg-transparent">
                  <option>{t("3 000 € – 6 000 € par personne")}</option>
                  <option>{t("6 000 € – 10 000 € par personne")}</option>
                  <option>{t("Plus de 10 000 € par personne")}</option>
                </select>
              </div>

              <div className="pt-8 text-center">
                <button className="w-full bg-orange-500 text-white py-10 font-black uppercase tracking-[0.5em] text-xs hover:bg-[#003366] transition-all shadow-3xl active:scale-95">
                  {t("DEMANDER MON APPEL DE CONCEPTION GRATUIT")}
                </button>
                <p className="mt-8 text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest italic opacity-60">
                  {t("Sans engagement · Réponse sous 24h")}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 5: APPEL FINAL */}
      <section className="py-40 bg-[#003366] text-white text-center px-8 border-t-[20px] border-orange-500 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-4xl text-orange-500 mb-8 block">✦</span>
          <h2 className="text-6xl md:text-[10rem] font-black italic mb-12 uppercase text-white leading-none tracking-tighter">
            {t("Votre Maroc")} <br /> {t("vous attend.")}
          </h2>
          <p className="text-2xl text-white/50 mb-20 italic font-light">{t("Concevez votre voyage sur mesure dès aujourd'hui.")}</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <Link href="/form" className="bg-orange-500 text-white px-16 py-8 font-black uppercase text-xs tracking-[0.5em] hover:bg-white hover:text-[#003366] transition-all shadow-3xl w-full md:w-auto">
              {t("CONCEVOIR MON VOYAGE")}
            </Link>
          </div>
          <div className="mt-40 pt-16 border-t border-white/10 opacity-40 italic font-black uppercase text-[10px] tracking-[0.6em]">
              <p>{t("welivemorocco.com | hello@welivemorocco.com | +212 (0) 537 000 000")}</p>
          </div>
        </div>
      </section>

    </main>
  );
}