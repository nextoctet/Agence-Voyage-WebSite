'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function DesignExperience() {
  const { t } = useTranslation();

  return (
    <main className="bg-white min-h-screen font-sans text-[#003366]">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] flex items-center bg-[#003366] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src="/monde-du-voyage.webp" 
            fill 
            className="object-cover" 
            alt={t("Design Experience")} 
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <span className="text-orange-500 font-black uppercase tracking-[0.5em] text-xs italic mb-4 block">
            {t("Sur Mesure")}
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none">
            {t("PERSONNALISEZ")} <br /> <span className="text-orange-500">{t("VOTRE EXPÉRIENCE")}</span>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
      </section>

      {/* --- FORMULAIRE SECTION --- */}
      <section className="py-24 max-w-4xl mx-auto px-8">
        <div className="bg-gray-50 p-8 md:p-16 border-t-[12px] border-[#003366] shadow-2xl">
          
          <div className="mb-12">
            <h2 className="text-3xl font-black uppercase italic mb-4">
              {t("Dites-nous tout")}
            </h2>
            <p className="text-gray-500 italic">
              {t("Nos experts à Rabat créent votre itinéraire idéal en moins de 24h.")}
            </p>
          </div>

          <form className="space-y-10">
            
            {/* 1. DESTINATION & STYLE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-orange-500 italic">
                  {t("Destination souhaitée")}
                </label>
                <select className="bg-white border-2 border-gray-100 p-4 font-bold italic outline-none focus:border-orange-500 transition-all text-[#003366]">
                  <option>{t("Marrakech")}</option>
                  <option>{t("Tanger")}</option>
                  <option>{t("Fès")}</option>
                  <option>{t("Casablanca")}</option>
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-orange-500 italic">
                  {t("Style de voyage")}
                </label>
                <select className="bg-white border-2 border-gray-100 p-4 font-bold italic outline-none focus:border-orange-500 transition-all text-[#003366]">
                  <option>{t("Luxe & Palais")}</option>
                  <option>{t("Aventure & Nature")}</option>
                  <option>{t("Culture & Histoire")}</option>
                </select>
              </div>
            </div>

            {/* 2. DÉTAILS VOYAGEURS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-orange-500 italic">
                  {t("Nombre de personnes")}
                </label>
                <input type="number" min="1" className="bg-white border-2 border-gray-100 p-4 font-bold outline-none focus:border-orange-500" placeholder="2" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-orange-500 italic">
                  {t("Date de départ")}
                </label>
                <input type="date" className="bg-white border-2 border-gray-100 p-4 font-bold outline-none focus:border-orange-500" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-orange-500 italic">
                  {t("Budget estimé")}
                </label>
                <input type="text" className="bg-white border-2 border-gray-100 p-4 font-bold outline-none focus:border-orange-500" placeholder="Ex: 15 000 MAD" />
              </div>
            </div>

            {/* 3. MESSAGE LIBRE */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-orange-500 italic">
                {t("Vos envies particulières")}
              </label>
              <textarea 
                rows={4} 
                className="bg-white border-2 border-gray-100 p-4 font-bold italic outline-none focus:border-orange-500"
                placeholder={t("Ex: Dîner privé dans le désert, Guide parlant Espagnol...")}
              ></textarea>
            </div>

            {/* 4. CONTACT INFOS */}
            <div className="pt-8 border-t border-gray-200">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#003366] italic font-bold">
                      {t("Votre Nom Complet")}
                    </label>
                    <input type="text" className="bg-white border-2 border-gray-100 p-4 font-bold outline-none focus:border-[#003366]" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#003366] italic font-bold">
                      {t("WhatsApp / Téléphone")}
                    </label>
                    <input type="tel" className="bg-white border-2 border-gray-100 p-4 font-bold outline-none focus:border-[#003366]" />
                  </div>
               </div>
            </div>

            {/* BOUTON ENVOYER */}
            <button className="w-full bg-orange-500 text-white py-6 font-black uppercase tracking-[0.3em] text-sm hover:bg-[#003366] transition-all shadow-xl active:scale-95">
              {t("Envoyer ma demande")}
            </button>

            <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              {"Aucun paiement requis pour le devis"}
            </p>

          </form>
        </div>
      </section>

      {/* --- INFO CONTACT DIRECT --- */}
      <section className="pb-24 px-8 text-center">
        <p className="text-[#003366] font-black italic mb-4">
          {t("Besoin d'aide immédiate ?")}
        </p>
        <a href="https://wa.me/212682838530" className="text-2xl font-black text-orange-500 hover:underline">
          +212 6 82 83 85 30
        </a>
      </section>

    </main>
  );
}