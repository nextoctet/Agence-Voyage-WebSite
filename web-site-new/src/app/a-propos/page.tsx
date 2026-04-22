'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();
  
  // DONNÉES : COMMENT NOUS TRAVAILLONS
  const expertMethods = [
    { id: "01", tKey: t("Chaque voyage est conçu pour vous"), dKey: t("Pas de forfaits, seulement des conversations. Vous nous dites ce qui vous passionne et nous construisons un itinéraire sur mesure. Pas de modèles, pas de copier-coller.") },
    { id: "02", tKey: t("Un accès gagné au fil des années"), dKey: t("Nos 10+ ans dans l'industrie ont permis de tisser des liens avec des familles locales et des artisans qui offrent à nos clients un accès que l'argent seul ne peut acheter.") },
    { id: "03", tKey: t("Nous ne vous pressons pas"), dKey: t("Le Maroc récompense ceux qui ralentissent. Nous concevons des voyages avec des moments de respiration pour flâner, savourer un thé ou faire un détour imprévu.") },
    { id: "04", tKey: t("Responsable dès le départ"), dKey: t("Maisons d'hôtes locales, guides et chauffeurs marocains, coopératives d'artisans. Nous gardons l'argent dans les communautés que nous visitons car nous en faisons partie.") },
    { id: "05", tKey: t("Toujours joignables"), dKey: t("Notre équipe est basée au Maroc, sur votre fuseau horaire. Avant, pendant, et si l'imprévu survient — nous répondons présent. Pas de centres d'appels.") },
    { id: "06", tKey: t("Aucun frais caché, jamais"), dKey: t("Des devis clairs et complets dès le premier jour. Ce que vous voyez est ce que vous payez. Pas de coûts surprises, pas de pression pour monter en gamme.") }
  ];

  // DONNÉES : OÙ NOUS VOUS EMMENONS
  const destinations = [
    { nameKey: t("Marrakech"), descKey: t("Notre ville d'origine. Nous la connaissons rue par rue — les bons souks, les restaurants où les locaux mangent vraiment, et quand y aller pour éviter la foule.") },
    { nameKey: t("Fès"), descKey: t("La médina la plus complexe au monde. Nos guides y ont grandi et connaissent chaque raccourci, cour cachée et atelier familial fermé aux touristes ordinaires.") },
    { nameKey: t("Montagnes du Haut Atlas"), descKey: t("Villages berbères, forêts de cèdres, paysages saisissants. Randonnées de tous niveaux, séjours culturels chez l'habitant et expéditions en 4×4.") },
    { nameKey: t("Le Sahara — Merzouga & Zagora"), descKey: t("Bien au-delà du bivouac standard. De vraies expériences désertiques construites autour du calme, de l'immensité et d'un lever de soleil unique.") },
    { nameKey: t("Essaouira & Côte Atlantique"), descKey: t("Le vent, la mer et une énergie créative complètement différente de l'intérieur des terres. Idéal pour les surfeurs, les familles et ceux qui cherchent un autre Maroc.") },
    { nameKey: t("Le Circuit des Villes Impériales"), descKey: t("Casablanca, Rabat, Meknès, Fès et Marrakech reliées par une route qui raconte toute l'histoire de la royauté marocaine.") }
  ];

  return (
    <main className="bg-[#F9F7F2] min-h-screen font-sans text-[#2D2926] overflow-x-hidden text-left">
      
      {/* --- SECTION 1: HERO (Style Accueil) --- */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden mx-4 mt-4 rounded-3xl shadow-2xl">
        <Image 
          src="/images/about-hero.jpg" 
          fill 
          className="object-cover scale-105 animate-slow-zoom" 
          alt="About WeLiveMorocco" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>
        
        <div className="relative z-10 text-white max-w-5xl space-y-6">
          <p className="uppercase tracking-[0.8em] text-[10px] md:text-xs font-bold mb-4 text-[#C07652] drop-shadow-md">
            {t("Votre Maroc. Conçu autour de vous.")}
          </p>
          <h1 className="text-5xl md:text-8xl font-serif leading-[1.1] mb-8 tracking-tight">
            <span className="font-light italic">{t("NOUS NE PLANIFIONS PAS")}</span> <br/> 
            <span className="text-[#C07652] uppercase font-bold text-4xl md:text-7xl block mt-2">
              {t("JUSTE DES VOYAGES.")}
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light italic opacity-90">
            {t("Nous sommes d'ici. Nous connaissons le pays par cœur.")}
          </p>
        </div>
      </section>

      {/* --- SECTION 2: NOTRE HISTOIRE (Style Accueil) --- */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-block border-l-4 border-[#C07652] pl-6">
               <h2 className="text-[#C07652] font-bold uppercase text-[10px] tracking-[0.3em]">{t("NOTRE HISTOIRE")}</h2>
            </div>
            <p className="text-4xl md:text-5xl font-serif italic leading-tight text-[#2D2926]">
              {t("Conçu par des Marocains.")} <br/>
              <span className="text-[#C07652] not-italic font-sans font-black uppercase text-3xl md:text-4xl block mt-4 tracking-tighter">
                {t("Pour le monde.")}
              </span>
            </p>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              {t("WeLiveMorocco a été fondé par une équipe de professionnels du voyage marocains qui ont grandi ici, y ont fait carrière et connaissent ce pays comme seuls les locaux le peuvent.")}
            </p>
          </div>
          <div className="bg-[#2D2926] text-[#F9F7F2] p-12 md:p-20 relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C07652]/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
            <p className='text-xl md:text-2xl font-light italic mb-8 leading-relaxed relative z-10 border-b border-[#C07652]/20 pb-8 text-white'>
              {t("Nous n'avons pas découvert le Maroc — nous y sommes nés. Nous avons passé plus d'une décennie sur le terrain à apprendre chaque recoin du royaume de l'intérieur.")}
            </p>
            <p className="text-xl md:text-2xl font-light italic leading-relaxed relative z-10 text-white/80">
              {t("Cette expérience — réelle, vécue, accumulée sur 10 ans — est ce que nous mettons dans chaque voyage.")}
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: EN CHIFFRES (Style Accueil) --- */}
      <section className="py-24 bg-[#2D2926] text-white px-8 mx-4 rounded-3xl">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-16">
          <div className="text-center space-y-4">
            <p className="text-5xl md:text-8xl font-serif italic text-[#C07652]">{t("10+")}</p>
            <p className="text-[9px] uppercase font-bold tracking-[0.3em] opacity-40">{t("Années d'expérience professionnelle")}</p>
          </div>
          <div className="text-center space-y-4">
            <p className="text-5xl md:text-8xl font-serif italic text-[#C07652]">{t("40+")}</p>
            <p className="text-[9px] uppercase font-bold tracking-[0.3em] opacity-40">{t("Destinations couvertes")}</p>
          </div>
          <div className="text-center space-y-4 col-span-2 md:col-span-1">
            <p className="text-5xl md:text-8xl font-serif italic text-[#C07652]">{t("98%")}</p>
            <p className="text-[9px] uppercase font-bold tracking-[0.3em] opacity-40">{t("Taux de satisfaction client")}</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: NOTRE MÉTHODE (Style Processus Accueil) --- */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-serif italic mb-4 text-[#2D2926]">{t("NOTRE MÉTHODE")}</h2>
          <p className="text-[#C07652] font-bold uppercase tracking-[0.5em] text-[9px] italic border-l-2 border-[#C07652] pl-4">
            {t("Six engagements sur lesquels nous ne transigeons jamais.")}
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

      {/* --- SECTION 5: DESTINATIONS (Style Styles de Voyage Accueil) --- */}
      <section className="py-32 bg-white px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif italic text-center mb-24 text-[#2D2926] uppercase">{t("Où nous vous emmenons")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            {destinations.map((dest, i) => (
              <div key={i} className="bg-[#F9F7F2] group cursor-pointer border border-transparent hover:border-[#C07652]/20 transition-all duration-500 p-10">
                <span className="text-[#C07652] font-serif italic text-xl mb-4 block">{(i + 1).toString().padStart(2, '0')}</span>
                <h3 className="text-xl font-bold uppercase mb-4 tracking-tighter text-[#2D2926]">{dest.nameKey}</h3>
                <p className="text-xs text-gray-500 italic leading-relaxed">{dest.descKey}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}