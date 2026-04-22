'use client';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="bg-[#F9F7F2] min-h-screen font-sans text-[#2D2926] overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <Image 
          src="/monde-du-voyage.webp" 
          fill 
          className="object-cover scale-105 animate-slow-zoom" 
          alt={t("hero_alt")} 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
        
        <div className="relative z-10 text-white max-w-5xl space-y-8">
          <p className="uppercase tracking-[0.8em] text-[10px] md:text-xs font-bold mb-6 drop-shadow-md">
            {t("Votre Maroc. Conçu autour de vous.")}
          </p>
          <h1 className="text-5xl md:text-8xl font-serif leading-[1.1] mb-10 tracking-tight">
            <span className="font-light italic uppercase">{t("Pas un forfait.")}</span> <br/> 
            <span className="text-[#C07652] uppercase font-bold text-4xl md:text-7xl block mt-4">
              {t("Un voyage conçu pour vous.")}
            </span>
          </h1>
        
        </div>
      </section>

      {/* SECTION 2: POURQUOI LE SUR MESURE */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-block border-l-4 border-[#C07652] pl-6">
               <h2 className="text-[#C07652] font-bold uppercase text-[10px] tracking-[0.3em]">{t("Pourquoi le sur mesure")}</h2>
            </div>
            <p className="text-4xl md:text-5xl font-serif italic leading-tight text-[#2D2926]">
              {t("Les voyages organisés amènent les gens au Maroc. Les voyages sur mesure leur permettent de s'y plonger.")} <br/>
              <span className="text-[#C07652] not-italic font-sans font-black uppercase text-3xl md:text-4xl block mt-4 tracking-tighter">
                {t("Le sur-mesure les emmène au cœur du pays.")}
              </span>
            </p>
            <p className="text-gray-500 text-lg leading-relaxed font-light max-w-lg">
              {t("La différence est le point de départ : que le voyage commence par un catalogue ou qu'il commence par vous. Chez WeLiveMorocco, il commence toujours par vous.")}
            </p>
          </div>
          <div className="bg-[#2D2926] text-[#F9F7F2] p-12 md:p-20 relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C07652]/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
            
            <p className="text-xl md:text-2xl font-light italic mb-8 leading-relaxed relative z-10 border-b border-[#C07652]/20 pb-8">
              {t("Notre équipe de professionnels du voyage nés au Maroc a passé plus d'une décennie à bâtir une connaissance réelle du pays.")}
            </p>
            <p className="text-xl md:text-2xl font-light italic leading-relaxed relative z-10">
              {t("Votre rythme, vos intérêts, votre budget, votre groupe — chaque élément est pensé avec soin.")}
            </p>
          </div>
        </div>
        <div className="mt-20 flex items-center gap-6">
           <div className="h-[1px] bg-[#C07652]/30 flex-1"></div>
           <p className="text-[10px] md:text-xs font-bold text-[#C07652] uppercase tracking-[0.4em] whitespace-nowrap">
            {t("Équipe native du Maroc. 10+ ans d'expérience. Chaque voyage est écrit de zéro.")}
           </p>
           <div className="h-[1px] bg-[#C07652]/30 flex-1"></div>
        </div>
      </section>

      {/* SECTION 3: LES CARACTÉRISTIQUES */}
      <section className="py-24 bg-white/50 border-y border-[#C07652]/10 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {[
            { icon: "✦", title: t("100% Privé"), desc: t("Votre voyage, votre groupe, votre rythme. Jamais partagé avec des inconnus.") },
            { icon: "◎", title: t("Partir de zéro"), desc: t("Nous commençons par une page blanche et construisons selon vos souhaits.") },
            { icon: "▲", title: t("Experts sur place"), desc: t("Des guides locaux qui vivent et respirent chaque destination.") },
            { icon: "◈", title: t("Flexibilité totale"), desc: t("Changez d'avis en cours de route. Nous nous adaptons en temps réel.") }
          ].map((item, i) => (
            <div key={i} className="text-center md:text-left space-y-4 group">
              <span className="text-4xl text-[#C07652] block transition-transform group-hover:scale-125 duration-300">{item.icon}</span>
              <h3 className="text-sm font-bold uppercase text-[#2D2926] tracking-widest leading-none">{item.title}</h3>
              <p className="text-xs text-gray-400 italic leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: LE PROCESSUS */}
      <section className="py-32 bg-[#2D2926] text-[#F9F7F2] px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-5xl md:text-7xl font-serif italic mb-4 opacity-90 uppercase">{t("Le Processus")}</h2>
          <p className="text-[#C07652] font-bold uppercase tracking-[0.5em] text-[9px] italic border-l-2 border-[#C07652] pl-4">
            {t("De votre premier message à votre dernier souvenir.")}
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {[
            { id: "01", t: t("Parlez-nous de vos rêves"), d: t("Remplissez notre formulaire. Dites-nous qui vous êtes et ce qui vous passionne.") },
            { id: "02", t: t("Rencontrez votre designer"), d: t("Un designer dédié vous contacte sous 24h pour approfondir votre vision.") },
            { id: "03", t: t("Recevez votre proposition"), d: t("En 3 à 5 jours, recevez un itinéraire complet : hôtels, logistique et prix.") },
            { id: "04", t: t("Affinez et confirmez"), d: t("Nous ajustons jusqu'à ce que ce soit parfait. Ensuite, vous n'avez plus qu'à arriver.") }
          ].map((step) => (
            <div key={step.id} className="group bg-white/5 p-12 relative border border-white/10 hover:border-[#C07652]/50 transition-all duration-500">
              <span className="text-8xl font-black text-white/[0.03] absolute top-2 right-4 pointer-events-none group-hover:text-[#C07652]/10 transition-colors">{step.id}</span>
              <h3 className="text-lg font-bold uppercase mb-6 relative z-10 leading-tight tracking-widest">{step.t}</h3>
              <p className="text-[11px] font-light italic opacity-60 leading-[1.8]">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CE QUE NOUS PERSONNALISONS */}
      <section className="py-32 px-8 max-w-7xl mx-auto text-left">
        <h2 className="text-4xl md:text-6xl font-serif italic text-center mb-24 text-[#2D2926] uppercase">
          {t("Ce que nous personnalisons")}
          <div className="w-24 h-1 bg-[#C07652] mx-auto mt-6"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {[
            { l: "A", t: t("Itinéraire & Routes"), d: t("Quelles villes, dans quel ordre, pour combien de temps : nous en décidons avec vous.") },
            { l: "B", t: t("Style d'hébergement"), d: t("Des riads à Médina, des camps dans le désert, des gîtes de montagne ou des hôtels design.") },
            { l: "C", t: t("Rythme & Flexibilité"), d: t("À un rythme effréné ou tranquille, nous organisons le voyage selon le rythme qui vous convient.") },
            { l: "D", t: t("Besoins de groupe"), d: t("Jeunes enfants, adolescents ou parents âgés, nous adaptons tout pour chaque membre.") },
            { l: "E", t: t("Langue & Guides"), d: t("Anglais, français, espagnol, arabe, tamazight : un guide dont le style correspond à votre groupe.") },
            { l: "F", t: t("Budget & Valeur"), d: t("Du confort au luxe absolu : vous fixez le budget, nous en tirons le meilleur parti.") }
          ].map((item) => (
            <div key={item.l} className="group">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-serif italic text-[#C07652]">{item.l}</span>
                <div className="h-[1px] bg-gray-200 flex-1 group-hover:bg-[#C07652]/50 transition-colors"></div>
              </div>
              <h4 className="font-bold uppercase text-xs mb-4 tracking-[0.2em] text-[#2D2926]">{item.t}</h4>
              <p className="text-[11px] text-gray-500 italic leading-[1.8]">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: STYLES DE VOYAGE */}
      <section className="py-32 bg-white px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif italic text-center mb-24 text-[#2D2926] uppercase">{t("Styles de Voyage")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            {[
              { n: "01", t: t("Immersion Culturelle"), s: t("Médinas et histoire vivante"), d: t("Marches privées, visites d'ateliers et dîners chez l'habitant.") },
              { n: "02", t: t("Désert & Paysages"), s: t("Le Sahara et son immensité"), d: t("Dunes de Merzouga, bivouacs de luxe et levers de soleil.") },
              { n: "03", t: t("Aventure & Actif"), s: t("Montagnes et routes ouvertes"), d: t("Treks dans le Haut Atlas et expéditions en 4x4.") },
              { n: "04", t: t("Luxe & Privé"), s: t("La plus belle version du Maroc"), d: t("Les plus beaux riads et un service fluide sans friction.") },
              { n: "05", t: t("Voyage en Famille"), s: t("Le Maroc au bon rythme"), d: t("Expériences variées pour enfants et adolescents.") },
              { n: "06", t: t("Gastronomie"), s: t("Le Maroc à table"), d: t("Découverte des marchés aux épices et dîners privés.") }
            ].map((style) => (
              <div key={style.n} className="bg-[#F9F7F2] group cursor-pointer border border-transparent hover:border-[#C07652]/20 transition-all duration-500">
                <div className="h-80 relative overflow-hidden">
                  <Image 
                    src={`/style-${style.n}.jpg`} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-all duration-1000 grayscale-[30%] group-hover:grayscale-0" 
                    alt={style.t} 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                </div>
                <div className="p-10">
                  <span className="text-[#C07652] font-serif italic text-xl mb-4 block">{style.n}</span>
                  <h3 className="text-xl font-bold uppercase mb-2 tracking-tighter text-[#2D2926]">{style.t}</h3>
                  <p className="text-[9px] font-bold text-gray-400 uppercase mb-6 tracking-widest">{style.s}</p>
                  <p className="text-xs text-gray-500 italic leading-relaxed">{style.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: NOTRE ENGAGEMENT */}
      <section className="py-32 px-8 max-w-7xl mx-auto text-left">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div className="max-w-2xl">
              <h2 className="text-5xl font-serif italic mb-8 text-[#2D2926] uppercase">{t("Notre Engagement")}</h2>
              <p className="text-gray-400 italic text-lg font-light border-l-2 border-[#C07652] pl-6">
                {t("Le standard minimum que nous nous imposons pour chaque voyage.")}
              </p>
           </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {[
            { n: "01", t: t("Réponse sous 24h"), d: t("Chaque demande reçoit une response personnelle qui reflète vos besoins.") },
            { n: "02", t: t("Proposition sur mesure"), d: t("Votre itinéraire est construit de zéro spécifiquement pour vous.") },
            { n: "03", t: t("Transparence totale"), d: t("Devis clairs. Pas de frais cachés ni de surprises à l'arrivée.") },
            { n: "04", t: t("Support permanent"), d: t("Notre équipe est joignable 24h/24 par WhatsApp sur place.") },
            { n: "05", t: t("Conseils honnêtes"), d: t("Nous recommandons des lieux car ils sont excellents.") }
          ].map((c) => (
            <div key={c.n} className="bg-white p-8 border-b border-gray-100 hover:bg-[#F9F7F2] transition-colors group">
              <span className="text-[#C07652] font-bold mb-6 block text-sm tracking-widest">{c.n}</span>
              <h4 className="font-bold uppercase mb-4 text-[#2D2926] tracking-tighter text-sm leading-tight group-hover:text-[#C07652] transition-colors">{c.t}</h4>
              <p className="text-[10px] text-gray-400 italic leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: EN CHIFFRES */}
      <section className="py-32 bg-[#2D2926] text-white px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-16">
          <div className="text-center space-y-4">
            <p className="text-5xl md:text-7xl font-serif italic text-[#C07652]">10+</p>
            <p className="text-[9px] uppercase font-bold tracking-[0.3em] opacity-40">{t("Années d'expérience")}</p>
          </div>
          <div className="text-center space-y-4">
            <p className="text-5xl md:text-7xl font-serif italic text-[#C07652]">3 200+</p>
            <p className="text-[9px] uppercase font-bold tracking-[0.3em] opacity-40">{t("Voyageurs accueillis")}</p>
          </div>
          <div className="text-center space-y-4">
            <p className="text-5xl md:text-7xl font-serif italic text-[#C07652]">40+</p>
            <p className="text-[9px] uppercase font-bold tracking-[0.3em] opacity-40">{t("Régions couvertes")}</p>
          </div>
          <div className="text-center space-y-4">
            <p className="text-5xl md:text-7xl font-serif italic text-[#C07652]">98%</p>
            <p className="text-[9px] uppercase font-bold tracking-[0.3em] opacity-40">{t("Satisfaction")}</p>
          </div>
        </div>
      </section>

      {/* SECTION 9: QUESTIONS FRÉQUENTES (FAQ) */}
      <section className="py-32 px-8 max-w-5xl mx-auto text-left border-t border-[#C07652]/10">
        <h2 className="text-4xl font-serif italic text-center mb-16 text-[#2D2926] uppercase">{t("Questions Fréquentes")}</h2>
        <div className="space-y-10">
          <div className="border-b border-[#C07652]/10 pb-8">
            <h4 className="text-lg font-bold text-[#2D2926] mb-4 font-serif italic">{t("Combien de temps à l'avance dois-je vous contacter ?")}</h4>
            <p className="text-sm text-gray-500 leading-relaxed italic">{t("4 à 6 semaines minimum, plus tôt pour la haute saison (Mars-Mai et Septembre-Novembre).")}</p>
          </div>
          <div className="border-b border-[#C07652]/10 pb-8">
            <h4 className="text-lg font-bold text-[#2D2926] mb-4 font-serif italic">{t("Y a-t-il un nombre minimum de jours ou de personnes ?")}</h4>
            <p className="text-sm text-gray-500 leading-relaxed italic">{t("Aucun minimum. Des voyageurs en solo aux groupes de 20. De 3 nuits à 3 semaines.")}</p>
          </div>
          <div className="border-b border-[#C07652]/10 pb-8">
            <h4 className="text-lg font-bold text-[#2D2926] mb-4 font-serif italic">{t("Quel est le coût d'un voyage sur mesure ?")}</h4>
            <p className="text-sm text-gray-500 leading-relaxed italic">{t("Il n'y a pas de prix fixe. Dites-nous votre budget et nous le maximiserons avec transparence.")}</p>
          </div>
          <div className="border-b border-[#C07652]/10 pb-8">
            <h4 className="text-lg font-bold text-[#2D2926] mb-4 font-serif italic">{t("Et si quelque chose ne va pas pendant le voyage ?")}</h4>
            <p className="text-sm text-gray-500 leading-relaxed italic">{t("Notre équipe est au Maroc et joignable sur WhatsApp 24h/24. Nous réglons tout immédiatement.")}</p>
          </div>
        </div>
      </section>

    </main>
  );
}