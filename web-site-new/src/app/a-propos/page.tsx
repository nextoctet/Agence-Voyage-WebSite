'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();
  
  // DATA: COMMENT NOUS TRAVAILLONS
  const expertMethods = [
    { 
      id: t("01"), 
      tKey: t("Chaque voyage est conçu pour vous"), 
      dKey: t("Pas de forfaits, seulement des conversations. Vous nous dites ce qui vous passionne et nous construisons un itinéraire sur mesure. Pas de modèles, pas de copier-coller.") 
    },
    { 
      id: t("02"), 
      tKey: t("Un accès gagné au fil des années"), 
      dKey: t("Nos 10+ ans dans l'industrie ont permis de tisser des liens avec des familles locales et des artisans qui offrent à nos clients un accès que l'argent seul ne peut acheter.") 
    },
    { 
      id: t("03"), 
      tKey: t("Nous ne vous pressons pas"), 
      dKey: t("Le Maroc récompense ceux qui ralentissent. Nous concevons des voyages avec des moments de respiration pour flâner, savourer un thé ou faire un détour imprévu.") 
    },
    { 
      id: t("04"), 
      tKey: t("Responsable dès le départ"), 
      dKey: t("Maisons d'hôtes locales, guides et chauffeurs marocains, coopératives d'artisans. Nous gardons l'argent dans les communautés que nous visitons car nous en faisons partie.") 
    },
    { 
      id: t("05"), 
      tKey: t("Toujours joignables"), 
      dKey: t("Notre équipe est basée au Maroc, sur votre fuseau horaire. Avant, pendant, et si l'imprévu survient — nous répondons présent. Pas de centres d'appels.") 
    },
    { 
      id: t("06"), 
      tKey: t("Aucun frais caché, jamais"), 
      dKey: t("Des devis clairs et complets dès le premier jour. Ce que vous voyez est ce que vous payez. Pas de coûts surprises, pas de pression pour monter en gamme.") 
    }
  ];

  // DATA: OÙ NOUS VOUS EMMENONS
  const destinations = [
    { nameKey: t("Marrakech"), descKey: t("Notre ville d'origine. Nous la connaissons rue par rue — les bons souks, les restaurants où les locaux mangent vraiment, et quand y aller pour éviter la foule.") },
    { nameKey: t("Fès"), descKey: t("La médina la plus complexe au monde. Nos guides y ont grandi et connaissent chaque raccourci, cour cachée et atelier familial fermé aux touristes ordinaires.") },
    { nameKey: t("Montagnes du Haut Atlas"), descKey: t("Villages berbères, forêts de cèdres, paysages saisissants. Randonnées de tous niveaux, séjours culturels chez l'habitant et expéditions en 4×4.") },
    { nameKey: t("Le Sahara — Merzouga & Zagora"), descKey: t("Bien au-delà du bivouac standard. De vraies expériences désertiques construites autour du calme, de l'immensité et d'un lever de soleil unique.") },
    { nameKey: t("Essaouira & Côte Atlantique"), descKey: t("Le vent, la mer et une énergie créative complètement différente de l'intérieur des terres. Idéal pour les surfeurs, les familles et ceux qui cherchent un autre Maroc.") },
    { nameKey: t("Le Circuit des Villes Impériales"), descKey: t("Casablanca, Rabat, Meknès, Fès et Marrakech reliées par une route qui raconte toute l'histoire de la royauté marocaine.") }
  ];

  return (
    <main className="bg-white min-h-screen font-sans text-[#003366] overflow-x-hidden text-left">
      
      {/* --- SLIDE 1: HERO --- */}
      <section className="relative h-[80vh] flex items-center justify-center text-center bg-[#003366] border-b-8 border-orange-500">
        <Image 
          src="/images/about-hero.jpg" 
          fill 
          className="object-cover opacity-30" 
          alt={t("WeLiveMorocco")} 
          priority 
        />
        <div className="relative z-10 px-6 max-w-5xl">
          <h1 className="text-6xl md:text-[7rem] font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-12">
            {t("NOUS NE PLANIFIONS PAS")} <br/> 
            <span className="text-orange-500 italic uppercase">{t("JUSTE DES VOYAGES.")}</span>
          </h1>
          <p className="text-2xl md:text-4xl text-white font-light italic leading-tight">
            {t("Nous sommes d'ici. Nous connaissons le pays par cœur.")}
          </p>
          <div className="mt-12 text-[10px] font-black uppercase tracking-[0.6em] text-white/50">
            {t("welivemorocco.com | Marrakech, Maroc")}
          </div>
        </div>
      </section>

      {/* --- SLIDE 2: NOTRE HISTOIRE --- */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-10">
            <h2 className="text-orange-500 font-black uppercase text-sm tracking-[0.4em]">{t("NOTRE HISTOIRE")}</h2>
            <p className="text-5xl md:text-7xl font-black uppercase italic leading-[1.1] tracking-tighter">
              {t("Conçu par des Marocains.")} <br/>
              <span className="text-orange-500 underline decoration-8 underline-offset-8">{t("Pour le monde.")}</span>
            </p>
            <div className="space-y-8 text-xl text-gray-600 leading-relaxed italic font-light">
              <p>{t("WeLiveMorocco a été fondé par une équipe de professionnels du voyage marocains qui ont grandi ici, y ont fait carrière et connaissent ce pays comme seuls les locaux le peuvent.")}</p>
              <p className="mt-12 text-lg italic max-w-4xl border-l-2 border-gray-200 pl-6 font-black text-orange-500 uppercase tracking-widest">
                {t("Équipe native. 10+ ans d'expérience. Chaque voyage est écrit de zéro.")}
              </p>
            </div>
          </div>
          <div className="bg-[#003366] text-white p-14 border-l-[15px] border-orange-500 shadow-3xl">
            <p className='text-2xl font-light italic mb-10 leading-relaxed'>
              {t("Nous n'avons pas découvert le Maroc — nous y sommes nés. Nous avons passé plus d'une décennie sur le terrain à guider les voyageurs et à apprendre chaque recoin du royaume de l'intérieur.")}
            </p>
            <p className="text-2xl font-light italic mb-10 leading-relaxed">
              {t("\"Cette expérience — réelle, vécue, accumulée sur 10 ans — est ce que nous mettons dans chaque voyage. Avec nous, vous ne recevez pas des infos d'un guide papier, mais de personnes qui ont dédié leur carrière à rendre le Maroc mémorable.\"")}
            </p>
          </div>
        </div>
      </section>

      {/* --- SLIDE 3: EN CHIFFRES --- */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 px-8 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-orange-500 font-black uppercase text-xs tracking-[0.5em] mb-16 italic">{t("En chiffres")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-6xl md:text-8xl font-black text-[#003366] mb-4 italic tracking-tighter">{t("10+")}</p>
              <p className="text-[11px] md:text-xs uppercase font-black tracking-widest opacity-60 leading-relaxed">{t("Années d'expérience professionnelle")}</p>
            </div>
            <div>
              <p className="text-6xl md:text-8xl font-black text-[#003366] mb-4 italic tracking-tighter">{t("40+")}</p>
              <p className="text-[11px] md:text-xs uppercase font-black tracking-widest opacity-60 leading-relaxed">{t("Destinations couvertes")}</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-6xl md:text-8xl font-black text-[#003366] mb-4 italic tracking-tighter">{t("98%")}</p>
              <p className="text-[11px] md:text-xs uppercase font-black tracking-widest opacity-60 leading-relaxed">{t("Taux de satisfaction client")}</p>
            </div>
          </div>
          <p className="mt-16 text-lg text-gray-400 italic">{t("Une décennie de travail. Des milliers de voyages. Un pays que nous connaissons mieux que quiconque.")}</p>
        </div>
      </section>

      {/* --- SLIDE 4: QUI SOMMES-NOUS --- */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <h2 className="text-orange-500 font-black uppercase text-sm tracking-[0.4em] mb-4">{t("QUI SOMMES-NOUS")}</h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase italic leading-tight text-[#003366] tracking-tighter">
              {t("Professionnels Marocains.")} <br/> <span className="text-orange-500">{t("Pas des observateurs extérieurs.")}</span>
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 text-[11px] font-black uppercase tracking-widest text-[#003366]">
            {[t("Anglais"), t("Français"), t("Espagnol"), t("Arabe"), t("Tamazight")].map((lang) => (
              <span key={lang} className="px-6 py-2 border-2 border-gray-100 rounded-full">{lang}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <p className="text-2xl font-light italic leading-relaxed text-gray-600">
            {t("Nés et élevés au Maroc. Nous avons grandi dans ces médinas, parcouru ces montagnes et traversé ces déserts bien avant que le tourisme n'existe. Faire découvrir cela au monde est une fierté sincère.")}
          </p>
          <div className="space-y-8">
            <p className="text-lg text-gray-500 leading-relaxed italic border-l-4 border-orange-500 pl-8">
              {t("Avec plus de 10 ans d'expérience pratique, notre équipe a bâti un réseau de partenaires locaux de confiance qui fait une réelle différence dans la qualité de chaque voyage que nous organisons.")}
            </p>
          </div>
        </div>
      </section>

      {/* --- SLIDE 5 & 6: COMMENT NOUS TRAVAILLONS --- */}
      <section className="py-32 bg-[#003366] text-white px-8">
        <div className="max-w-7xl mx-auto mb-24">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-6 tracking-tighter">{t("NOTRE MÉTHODE")}</h2>
          <p className="text-orange-500 font-bold uppercase tracking-widest text-xs">{t("Six engagements sur lesquels nous ne transigeons jamais.")}</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {expertMethods.map((method) => (
            <div key={method.id} className="p-12 bg-white/5 border-t-8 border-orange-500 hover:bg-orange-500 transition-all duration-700 group">
              <span className="text-orange-500 font-black text-3xl italic block mb-6 group-hover:text-white transition-colors">{method.id}</span>
              <h4 className="text-2xl font-black uppercase mb-6 italic group-hover:text-white transition-colors leading-none">{method.tKey}</h4>
              <p className="text-sm font-light italic opacity-70 group-hover:opacity-100 transition-opacity leading-relaxed">{method.dKey}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SLIDE 7: OÙ NOUS VOUS EMMENONS --- */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-[8rem] font-black uppercase italic text-center mb-24 text-[#003366] tracking-tighter">
          {t("DESTINATIONS")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {destinations.map((dest, i) => (
            <div key={i} className="group border-b border-gray-100 pb-12 hover:translate-y-[-8px] transition-transform duration-500">
              <h4 className="text-3xl font-black uppercase italic mb-6 text-[#003366] tracking-tight">{dest.nameKey}</h4>
              <p className="text-[14px] text-gray-500 italic leading-relaxed font-light">{dest.descKey}</p>
            </div>
          ))}
        </div>
        <p className="mt-16 text-center text-orange-500 font-black uppercase text-xs tracking-[0.4em] italic">{t("De la côte Atlantique aux portes du Sahara.")}</p>
      </section>

      {/* --- SLIDE 8: L'ÉQUIPE --- */}
      <section className="py-32 bg-gray-50 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-orange-500 font-black uppercase text-sm tracking-[0.4em] mb-12">{t("LES MAINS DERRIÈRE VOTRE VOYAGE")}</h2>
          <p className="text-3xl md:text-5xl font-black uppercase italic text-[#003366] leading-tight mb-12 tracking-tighter">
            {t("Des professionnels natifs du Maroc avec plus d'une décennie d'expertise spécialisée.")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left italic text-gray-600 leading-relaxed font-light">
            <p>{t("Notre équipe combine une maîtrise géographique de première main — des raccourcis cachés des médinas aux routes reculées du désert — avec une exécution logistique sans faille soutenue par un vaste réseau de fournisseurs.")}</p>
            <p>{t("Formés à l'hôtellerie de luxe et parlant couramment plusieurs langues, nos experts allient l'hospitalité marocaine authentique à un service professionnel rigoureux.")}</p>
          </div>
        </div>
      </section>

      {/* --- SLIDE 9: POURQUOI NOUS CHOISIR --- */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic text-[#003366] tracking-tighter">{t("POURQUOI NOUS CHOISIR")}</h2>
            <p className="text-orange-500 font-black text-sm mt-6 italic">★★★★★ {t("98% de satisfaction sur plus de 3 200 voyages")}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { id: t("01"), tKey: t("Fondateurs marocains, expertise réelle"), dKey: t("Notre équipe n'a pas étudié le Maroc dans les livres — nous y avons grandi. C'est un savoir différent qui se voit dans chaque détail.") },
            { id: t("02"), tKey: t("10+ ans dans l'industrie"), dKey: t("Une décennie de relations privilégiées avec les meilleurs hôtels, guides et fournisseurs. Ce réseau fait la différence entre un bon et un grand voyage.") },
            { id: t("03"), tKey: t("Rien n'est copié-collé"), dKey: t("Chaque itinéraire part d'une page blanche. Votre groupe, votre rythme, votre budget — nous construisons autour de vous.") },
            { id: t("04"), tKey: t("Toujours joignables, sur place"), dKey: t("Notre équipe est sur le terrain, sur votre fuseau horaire. Si besoin, nous décrochons immédiatement.") },
            { id: t("05"), tKey: t("Prix transparents, sans surprise"), dKey: t("Ce que nous devisons est ce que vous payez. Pas d'extras cachés, pas de pressions, juste de l'honnêteté.") }
          ].map((item) => (
            <div key={item.id} className="border-l-4 border-orange-500 pl-8 py-4">
              <span className="text-orange-500 font-black text-lg mb-2 block">{item.id}</span>
              <h4 className="text-xl font-black uppercase mb-4 italic text-[#003366] leading-tight">{item.tKey}</h4>
              <p className="text-sm text-gray-500 italic leading-relaxed">{item.dKey}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SLIDE 10: PARTENAIRES & CONTACT --- */}
      <section className="py-40 bg-[#003366] text-white px-8 border-t-[16px] border-orange-500">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-32">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic mb-8">{t("AGENCES DE VOYAGES & TOUR OPÉRATEURS")}</h2>
            <p className="text-xl md:text-2xl font-light italic mb-12 opacity-80 max-w-4xl mx-auto">
              {t("WeLiveMorocco travaille comme partenaire réceptif pour les agences, DMC et designers de voyages de luxe ayant besoin d'un partenaire de confiance sur le terrain au Maroc.")}
            </p>
            
            <div className="mb-16 text-left bg-white p-12 shadow-2xl">
              <p className="text-[#BF5A31] font-black uppercase tracking-[0.4em] text-[12px] mb-6">{t("SERVICES B2B")}</p>
              <h2 className="text-4xl md:text-5xl font-serif text-[#333333] mb-10 leading-[1.1]">{t("Besoin d'un partenaire local fiable au Maroc ?")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border-t-[6px] border-[#BF5A31] pt-6">
                  <h3 className="text-2xl font-serif text-[#333333] mb-4">{t("FIT & Groupes Privés")}</h3>
                  <p className="text-[#666666] text-sm italic">{t("Itinéraires personnalisés, chauffeurs dédiés et support 24/7.")}</p>
                </div>
                <div className="border-t-[6px] border-[#BF5A31] pt-6">
                  <h3 className="text-2xl font-serif text-[#333333] mb-4">{t("MICE & Incentive")}</h3>
                  <p className="text-[#666666] text-sm italic">{t("Programmes entreprises, team-building et productions Sahara.")}</p>
                </div>
                <div className="border-t-[6px] border-[#BF5A31] pt-6">
                  <h3 className="text-2xl font-serif text-[#333333] mb-4">{t("Tarifs Net & Support")}</h3>
                  <p className="text-[#666666] text-sm italic">{t("Prix B2B compétitifs et gestionnaire de compte dédié.")}</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-6xl md:text-[9rem] font-black italic mb-12 uppercase leading-none tracking-tighter">{t("COMMENÇONS L'AVENTURE")}</h2>
          <p className="text-2xl md:text-3xl text-white/70 mb-16 leading-relaxed italic font-light">
            {t("Que vous ayez un itinéraire complet ou juste une date de voyage et une idée vague, contactez-nous.")}
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <Link href="/start" className="bg-orange-500 text-white px-16 py-8 font-black uppercase text-xs tracking-[0.5em] hover:bg-white hover:text-[#003366] transition-all shadow-3xl w-full md:w-auto">
              {t("Planifier mon voyage")}
            </Link>
            <Link href="mailto:hello@welivemorocco.com" className="border-4 border-white text-white px-16 py-8 font-black uppercase text-xs tracking-[0.5em] hover:bg-orange-500 transition-all w-full md:w-auto">
              {t("Contacter l'équipe")}
            </Link>
          </div>
          <div className="mt-32 pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 italic font-black uppercase text-[10px] tracking-[0.6em]">
              <p>{t("hello@welivemorocco.com")}</p>
              <p>{t("+212 (0) 537 000 000")}</p>
              <p>{t("Marrakech, Maroc")}</p>
          </div>
        </div>
      </section>

    </main>
  );
}