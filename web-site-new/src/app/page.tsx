'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="bg-white min-h-screen font-sans text-[#003366] overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 border-b-8 border-[#FF8C00]">
        <Image src="/monde-du-voyage.webp" fill className="object-cover" alt={t("Héros")} priority />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white max-w-6xl">
          <p className="uppercase tracking-[0.6em] text-sm font-black mb-6">
            {t("Votre Maroc. Conçu autour de vous.")}
          </p>
          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-10">
            {t("PAS UN FORFAIT.")} <br/> 
            <span className="text-[#FF8C00] italic uppercase font-black">{t("UN VOYAGE CONÇU POUR VOUS.")}</span>
          </h1>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
            <Link href="/reservation" className="bg-[#FF8C00] text-white px-12 py-5 uppercase font-black text-xs tracking-widest hover:bg-white hover:text-[#003366] transition-all shadow-xl">
              {t("Commencer mon voyage sur mesure")}
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: POURQUOI LE SUR MESURE */}
      <section className="py-24 px-8 max-w-7xl mx-auto border-b border-gray-100">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-[#FF8C00] font-black uppercase text-sm tracking-widest text-left">{t("POURQUOI LE SUR MESURE")}</h2>
            <p className="text-4xl md:text-5xl font-black uppercase italic leading-tight text-[#003366] text-left">
              {t("Les circuits organisés emmènent les gens au Maroc.")} <br/>
              <span className="text-[#FF8C00]">{t("Le sur-mesure les emmène au cœur du pays.")}</span>
            </p>
            <p className="text-gray-600 text-lg italic leading-relaxed text-left">
              {t("La différence est le point de départ : que le voyage commence par un catalogue ou qu'il commence par vous. Chez WeLiveMorocco, il commence toujours par vous.")}
            </p>
          </div>
          <div className="bg-[#003366] text-white p-12 border-l-[12px] border-[#FF8C00] shadow-2xl text-left">
            <p className="text-xl md:text-2xl font-light italic mb-8 leading-relaxed">
              {t("Notre équipe de professionnels du voyage nés au Maroc a passé plus d'une décennie à bâtir une connaissance réelle du pays, non pas à partir de recherches, mais en y vivant et en y guidant.")}
            </p>
            <p className="text-xl md:text-2xl font-light italic mb-8 leading-relaxed">
              {t("Nous utilisons ce savoir pour concevoir des voyages personnels. Votre rythme, vos intérêts, votre budget — chaque élément est pensé avec soin.")}
            </p>
          </div>
        </div>
        <p className="mt-12 text-lg italic max-w-4xl border-l-2 border-gray-200 pl-6 font-black text-[#FF8C00] uppercase tracking-widest text-left">
          {t("Équipe native du Maroc. 10+ ans d'expérience. Chaque voyage est écrit de zéro.")}
        </p>
      </section>

      {/* SECTION 3: LES CARACTÉRISTIQUES */}
      <section className="py-20 bg-gray-50 px-8 text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <span className="text-4xl text-[#FF8C00]">✦</span>
            <h3 className="text-xl font-black uppercase text-[#003366]">{t("100% Privé")}</h3>
            <p className="text-sm text-gray-500 italic">{t("Votre voyage, votre groupe, votre rythme. Jamais partagé avec des inconnus.")}</p>
          </div>
          <div className="space-y-4">
            <span className="text-4xl text-[#FF8C00]">◎</span>
            <h3 className="text-xl font-black uppercase text-[#003366]">{t("Partir de zéro")}</h3>
            <p className="text-sm text-gray-500 italic">{t("Nous commençons par une page blanche et construisons selon vos souhaits.")}</p>
          </div>
          <div className="space-y-4">
            <span className="text-4xl text-[#FF8C00]">▲</span>
            <h3 className="text-xl font-black uppercase text-[#003366]">{t("Experts sur place")}</h3>
            <p className="text-sm text-gray-500 italic">{t("Des guides locaux qui vivent et respirent chaque destination.")}</p>
          </div>
          <div className="space-y-4">
            <span className="text-4xl text-[#FF8C00]">◈</span>
            <h3 className="text-xl font-black uppercase text-[#003366]">{t("Flexibilité totale")}</h3>
            <p className="text-sm text-gray-500 italic">{t("Changez d'avis en cours de route. Nous nous adaptons en temps réel.")}</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: LE PROCESSUS */}
      <section className="py-24 bg-[#003366] text-white px-8 text-left">
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-4">{t("LE PROCESSUS")}</h2>
          <p className="text-[#FF8C00] font-bold uppercase tracking-widest text-xs italic text-left">{t("De votre premier message à votre dernier souvenir.")}</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { id: t("01"), t: t("Parlez-nous de vos rêves"), d: t("Remplissez notre formulaire. Dites-nous qui vous êtes et ce qui vous passionne.") },
            { id: t("02"), t: t("Rencontrez votre designer"), d: t("Un designer dédié vous contacte sous 24h pour approfondir votre vision.") },
            { id: t("03"), t: t("Recevez votre proposition"), d: t("En 3 à 5 jours, recevez un itinéraire complet : hôtels, logistique et prix.") },
            { id: t("04"), t: t("Affinez et confirmez"), d: t("Nous ajustons jusqu'à ce que ce soit parfait. Ensuite, vous n'avez plus qu'à arriver.") }
          ].map((step) => (
            <div key={step.id} className="bg-white/5 p-10 relative border-t-4 border-[#FF8C00]">
              <span className="text-6xl font-black text-white/10 absolute top-4 right-4">{step.id}</span>
              <h3 className="text-xl font-black uppercase mb-6 relative z-10 leading-tight italic">{step.t}</h3>
              <p className="text-sm font-light italic opacity-80 leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CE QUE NOUS PERSONNALISONS */}
      <section className="py-24 px-8 max-w-7xl mx-auto text-left">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic text-center mb-16 text-[#003366] underline decoration-[#FF8C00] decoration-8 underline-offset-8">
          {t("CE QUE NOUS PERSONNALISONS")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { l: t("A"), t: t("Itinéraire & Routes"), d: t("Quelles villes, dans quel ordre — nous savons quelles routes valent votre temps.") },
            { l: t("B"), t: t("Style d'hébergement"), d: t("Riads, camps de désert ou hôtels design adaptés à vos goûts.") },
            { l: t("C"), t: t("Rythme & Flexibilité"), d: t("Voyage rapide ou lent — nous construisons le rythme qui vous convient.") },
            { l: t("D"), t: t("Besoins de groupe"), d: t("Enfants, adolescents, parents âgés — nous adaptons le voyage pour chaque personne.") },
            { l: t("E"), t: t("Langue & Guides"), d: t("Nous vous jumelons avec un guide dont la langue et le style correspondent au groupe.") },
            { l: t("F"), t: t("Budget & Valeur"), d: t("Chaque devis est détaillé pour que vous sachiez exactement ce que vous payez.") }
          ].map((item) => (
            <div key={item.l} className="flex gap-6 border-b border-gray-100 pb-8">
              <span className="text-4xl font-black text-[#FF8C00] italic">{item.l}</span>
              <div>
                <h4 className="font-black uppercase text-sm mb-3 tracking-widest text-[#003366]">{item.t}</h4>
                <p className="text-xs text-gray-500 italic leading-relaxed">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: STYLES DE VOYAGE */}
      <section className="py-24 bg-gray-50 px-8 text-left">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic text-center mb-16 text-[#003366]">{t("STYLES DE VOYAGE")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { n: t("01"), t: t("Immersion Culturelle"), s: t("Médinas et histoire vivante"), d: t("Marches privées, visites d'ateliers et dîners chez l'habitant.") },
              { n: t("02"), t: t("Désert & Paysages"), s: t("Le Sahara et son immensité"), d: t("Dunes de Merzouga, bivouacs de luxe et levers de soleil.") },
              { n: t("03"), t: t("Aventure & Actif"), s: t("Montagnes et routes ouvertes"), d: t("Treks dans le Haut Atlas et expéditions en 4x4.") },
              { n: t("04"), t: t("Luxe & Privé"), s: t("La plus belle version du Maroc"), d: t("Les plus beaux riads et un service fluide sans friction.") },
              { n: t("05"), t: t("Voyage en Famille"), s: t("Le Maroc au bon rythme"), d: t("Expériences variées pour enfants et adolescents.") },
              { n: t("06"), t: t("Gastronomie"), s: t("Le Maroc à table"), d: t("Découverte des marchés aux épices et dîners privés.") }
            ].map((style) => (
              <div key={style.n} className="bg-white shadow-xl group overflow-hidden border-b-8 border-[#FF8C00] flex flex-col text-left">
                <div className="h-60 relative bg-gray-200">
                  <Image src={`/style-${style.n}.jpg`} fill className="object-cover group-hover:scale-110 transition-all duration-700" alt={style.t} />
                </div>
                <div className="p-8 flex-1">
                  <span className="text-[#FF8C00] font-black text-lg mb-2 block">{style.n}</span>
                  <h3 className="text-xl font-black uppercase mb-2 italic text-[#003366] leading-none">{style.t}</h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-4 tracking-widest">{style.s}</p>
                  <p className="text-sm text-gray-500 italic leading-relaxed mb-6">{style.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: NOTRE ENGAGEMENT */}
      <section className="py-24 px-8 max-w-7xl mx-auto text-left">
        <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-8 text-[#003366]">{t("NOTRE ENGAGEMENT")}</h2>
        <p className="text-gray-500 italic mb-12 max-w-2xl text-lg font-light">{t("Le standard minimum que nous nous imposons pour chaque voyage.")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { n: t("01"), t: t("Réponse sous 24h"), d: t("Chaque demande reçoit une réponse personnelle qui reflète vos besoins.") },
            { n: t("02"), t: t("Proposition sur mesure"), d: t("Votre itinéraire est construit de zéro spécifiquement pour vous.") },
            { n: t("03"), t: t("Transparence totale"), d: t("Devis clairs. Pas de frais cachés ni de surprises à l'arrivée.") },
            { n: t("04"), t: t("Support permanent"), d: t("Notre équipe est joignable 24h/24 par WhatsApp sur place.") },
            { n: t("05"), t: t("Conseils honnêtes"), d: t("Nous recommandons des lieux car ils sont excellents.") }
          ].map((c) => (
            <div key={c.n} className="border-t border-gray-100 pt-8">
              <span className="text-[#FF8C00] font-black mb-4 block text-2xl">{c.n}</span>
              <h4 className="font-black uppercase mb-4 text-[#003366] tracking-tighter text-lg">{c.t}</h4>
              <p className="text-sm text-gray-500 italic leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: EN CHIFFRES */}
      <section className="py-20 bg-[#003366] text-white px-8 text-center">
        <h2 className="text-3xl font-black uppercase italic mb-16 tracking-widest text-center">{t("EN CHIFFRES")}</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          <div><p className="text-5xl md:text-6xl font-black text-[#FF8C00] mb-4 text-center italic">{t("10+")}</p><p className="text-[10px] uppercase font-bold tracking-widest opacity-80 leading-relaxed text-center">{t("Années d'expérience")}</p></div>
          <div><p className="text-5xl md:text-6xl font-black text-[#FF8C00] mb-4 text-center italic">{t("3 200+")}</p><p className="text-[10px] uppercase font-bold tracking-widest opacity-80 leading-relaxed text-center">{t("Voyageurs accueillis")}</p></div>
          <div><p className="text-5xl md:text-6xl font-black text-[#FF8C00] mb-4 text-center italic">{t("40+")}</p><p className="text-[10px] uppercase font-bold tracking-widest opacity-80 leading-relaxed text-center">{t("Régions couvertes")}</p></div>
          <div><p className="text-5xl md:text-6xl font-black text-[#FF8C00] mb-4 text-center italic">{t("98%")}</p><p className="text-[10px] uppercase font-bold tracking-widest opacity-80 leading-relaxed text-center">{t("Satisfaction")}</p></div>
        </div>
      </section>

      {/* SECTION 9: COMMENCEZ */}
      <section className="py-24 bg-white text-center px-8 border-t-8 border-[#FF8C00]">
        <h2 className="text-5xl md:text-7xl font-black italic mb-8 uppercase text-[#003366] text-center tracking-tighter leading-none">{t("COMMENÇONS")}</h2>
        <p className="text-xl text-gray-500 mb-12 leading-relaxed italic font-light max-w-3xl mx-auto text-center">
          {t("Dites-nous ce que vous imaginez. Nous nous occupons du reste")}. <span className="font-bold text-[#003366]">{t("Vous n'avez qu'à être présent.")}</span>
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <Link href="/contact" className="bg-[#FF8C00] text-white px-12 py-5 font-black uppercase text-xs tracking-widest hover:bg-[#003366] transition-all shadow-xl">
            {t("Concevoir mon voyage")}
          </Link>
          <Link href="mailto:hello@welivemorocco.com" className="border-2 border-[#003366] text-[#003366] px-12 py-5 font-black uppercase text-xs tracking-widest hover:bg-[#003366] hover:text-white transition-all">
            {t("Parler à l'équipe")}
          </Link>
        </div>
        <p className="mt-16 text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 text-center">{t("hello@welivemorocco.com | Marrakech, Maroc")}</p>
      </section>

    </main>
  );
}