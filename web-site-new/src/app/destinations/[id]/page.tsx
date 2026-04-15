'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// --- 1. BASE DE DONNÉES COMPLÈTE (9 DESTINATIONS) ---
const DATA_MAP: any = {
  "marrakech": {
    title: "Marrakech Prestige", sub: "La Ville Rouge",
    description: "Une culture envoûtante, des paysages à couper le souffle et une cuisine délicieuse. Un mélange parfait pour des expériences exclusives.",
    highlights: [
      "Plongez-vous dans la culture envoûtante de Marrakech et découvrez ses secrets ancestraux lors d’une visite historique en compagnie de votre guide privé expert.",
      "Acquérez des compétences culinaires uniques et savourez une cuisine qui ravira vos papilles lors d’un cours de cuisine marocaine traditionnelle.",
      "Admirez les horizons infinis des montagnes de l'Atlas lors d'une randonnée en montagne captivante.",
      "Aventurez-vous dans le village d'une communauté berbère locale et découvrez le mode de vie traditionnel tout en participant aux activités quotidiennes.",
      "Itinéraire ultime : Alliant harmonieusement authenticité et luxe exceptionnel, nos voyages « Ultimate Journeys » sont conçus pour les voyageurs exigeants. Ils offrent un accès privilégié sans pareil et des expériences privées de luxe exclusives."
    ],
    heroImg: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80",
    duration: "7 NUITS", price: "4 400 MAD", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.1234!2d28.9744!3d41.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzI5LjUiTiAyOMKwNTgnMjcuOCJF!5e0!3m2!1sen!2sma!4v123456789",
    itinerary: [
      { day: "1 - 4", location: "Marrakech", title: "Médina & Palais", stay: "The Oberoi Marrakech", desc: "Visite privée des palais historiques et dîners sous les étoiles.", 
        hotelImgs: ["https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80", "https://images.unsplash.com/photo-1590073235997-86dbae1746f3?q=80", "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80"] },
      { day: "4 - 8", location: "Atlas", title: "Sommets", stay: "Kasbah Tamadot", desc: "Détente face aux montagnes de l'Atlas.", 
        hotelImgs: ["https://images.unsplash.com/photo-1580674239581-39bd1b7b0dc0?q=80", "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80", "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80"] }
    ],
    prices: [
      { month: "Avril 2026", price: 7500 }, { month: "Mai 2026", price: 6000 }, { month: "Juin 2026", price: 5500 },
      { month: "Juillet 2026", price: 5800 }, { month: "Août 2026", price: 6200 }, { month: "Septembre 2026", price: 6800 }
    ]
  },
  "omra": {
    title: "Omra Ramadan", sub: "Voyage Spirituel",
    description: "Vivez une expérience spirituelle unique au cœur des lieux saints durant le mois sacré.",
    highlights: ["Accès privilégié aux lieux saints.", "Accompagnement expert.", "Hébergement de luxe face au Haram."],
    heroImg: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80",
    duration: "10 NUITS", price: "14 500 MAD", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108704.1481132626!2d-8.0778939!3d31.6346761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d9611f67b%3A0x2cb2e2033a207e85!2sMarrakesh!5e0!3m2!1sen!2sma!4v1700000000000",
    itinerary: [
      { day: "1 - 5", location: "Médine", title: "Sérénité", stay: "Pullman ZamZam", desc: "Prière à Al-Masjid an-Nabawi.", 
        hotelImgs: ["https://images.unsplash.com/photo-1551041777-ed371f690898?q=80", "https://images.unsplash.com/photo-1564767609342-620cb19b2357?q=80"] }
    ],
    prices: [{ month: "Mars 2026", price: 14500 }, { month: "Avril 2026", price: 15500 }]
  },
  "dubai": {
    title: "Dubaï Expérience", sub: "Cœur du Futur",
    description: "Découvrez le luxe démesuré et l'architecture futuriste des Émirats.",
    highlights: ["Montée au Burj Khalifa.", "Safari privé dans le désert.", "Dîner sur la marina."],
    heroImg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80",
    duration: "8 NUITS", price: "9 990 MAD", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192635.03378904797!2d28.8174488!3d41.0055005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab1d024067341%3A0x82105e60166d4ca!2sIstanbul!5e0!3m2!1sen!2sma!4v1700000000000",
    itinerary: [{ day: "1 - 8", location: "Dubaï", title: "Modernité", stay: "Address Downtown", desc: "Burj Khalifa.", hotelImgs: ["https://images.unsplash.com/photo-1549918838-3c677db44f90?q=80"] }],
    prices: [{ month: "Mai 2026", price: 9990 }, { month: "Juin 2026", price: 8500 }]
  },
  "istanbul": {
    title: "Istanbul Magic", sub: "Cœur Ottoman",
    description: "Explorez la ville aux deux continents entre minarets et rives du Bosphore.",
    highlights: ["Croisière privée sur le Bosphore.", "Visite privée de Sainte-Sophie.", "Secrets du Grand Bazar."],
    heroImg: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80",
    duration: "6 NUITS", price: "6 500 MAD", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108704.08830113853!2d-8.077894!3d31.622522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96116295%3A0x2aba66063462886f!2sMarrakech!5e0!3m2!1sen!2sma!4v1712345678901",
    itinerary: [{ day: "1 - 6", location: "Sultanahmet", title: "Histoire", stay: "Legacy Ottoman", desc: "Sainte-Sophie.", hotelImgs: ["https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80"] }],
    prices: [{ month: "Juin 2026", price: 6500 }, { month: "Juillet 2026", price: 7000 }]
  },
  "andalousie": {
    title: "Andalousie & Séville", sub: "L'Âme Flamenco",
    description: "Un voyage passionnant à travers l'histoire d'Al-Andalus.",
    highlights: ["Accès coupe-file à l'Alhambra.", "Spectacle de Flamenco privé.", "Dégustation gastronomique."],
    heroImg: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80",
    duration: "7 NUITS", price: "7 200 MAD", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108703.409470503!2d-8.077894!3d31.634602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d9611f67b%3A0x2cbca66516654e9!2sMarrakech!5e0!3m2!1sfr!2sma!4v1715432000000!5m2!1sfr!2sma",
    itinerary: [{ day: "1 - 7", location: "Séville", title: "Al-Andalus", stay: "Alfonso XIII", desc: "L'Alhambra.", hotelImgs: ["https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80"] }],
    prices: [{ month: "Mai 2026", price: 7200 }]
  },
  "malaga": {
    title: "Costa Del Sol", sub: "Méditerranée",
    description: "Profitez du soleil toute l'année et des villages blancs pittoresques.",
    highlights: ["Escapade à Marbella.", "Villages blancs.", "Luxe balnéaire."],
    heroImg: "https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?q=80",
    duration: "5 NUITS", price: "3 990 MAD", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108704.101297592!2d-8.077891!3d31.63416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x595967c2d7424182!2sMarrakech!5e0!3m2!1sfr!2sma!4v1710000000000",
    itinerary: [{ day: "1 - 5", location: "Malaga", title: "Soleil", stay: "Gran Miramar", desc: "Tapas et plage.", hotelImgs: ["https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80"] }],
    prices: [{ month: "Juillet 2026", price: 3990 }]
  },
  "le-caire": {
    title: "Mystères d'Égypte", sub: "Pharaons",
    description: "Plongez dans l'éternité face aux Pyramides de Gizeh.",
    highlights: ["Privatisation partielle à Gizeh.", "Croisière sur le Nil.", "Visite du Grand Musée."],
    heroImg: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80",
    duration: "7 NUITS", price: "8 800 MAD", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108703.40939316744!2d-8.077894!3d31.634602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d961417a5%3A0x447c16915e988c5!2sMarrakech!5e0!3m2!1sfr!2sma!4v1712345678901",
    itinerary: [{ day: "1 - 7", location: "Le Caire", title: "Nil", stay: "Mena House", desc: "Pyramides.", hotelImgs: ["https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80"] }],
    prices: [{ month: "Novembre 2026", price: 8800 }]
  },
  "bali": {
    title: "Bali Zen", sub: "L'Île des Dieux",
    description: "Une évasion totale entre rizières en terrasses et plages paradisiaques.",
    highlights: ["Retraite spirituelle à Ubud.", "Coucher de soleil à Uluwatu.", "Rizières sacrées."],
    heroImg: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80",
    duration: "12 NUITS", price: "12 200 MAD", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108704.10232431612!2d-8.077893963471016!3d31.634676461944885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d961415e5%3A0xad51090c2ebc3251!2sMarrakech!5e0!3m2!1sfr!2sma!4v1711545000000",
    itinerary: [{ day: "1 - 12", location: "Ubud", title: "Zen", stay: "Four Seasons Sayan", desc: "Nature.", hotelImgs: ["https://images.unsplash.com/photo-1536704689284-4648797f1f0e?q=80"] }],
    prices: [{ month: "Mars 2026", price: 12200 }]
  },
  "maldives": {
    title: "Évasion Maldives", sub: "Luxe Absolu",
    description: "Le summum de la déconnexion dans des villas sur pilotis.",
    highlights: ["Villa sur pilotis privée.", "Plongée privée.", "Dîner sur un banc de sable."],
    heroImg: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80",
    duration: "6 NUITS", price: "19 500 MAD", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237684.7507304561!2d39.70701049581907!3d21.436034105263157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15cbb01ce331d107%3A0x6290291f09564a2!2sMecque%20Arabie%20saoudite!5e0!3m2!1sfr!2sma!4v1711545000001",
    itinerary: [{ day: "1 - 6", location: "Malé", title: "Pilotis", stay: "Soneva Jani", desc: "Lagon.", hotelImgs: ["https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80"] }],
    prices: [{ month: "Décembre 2025", price: 19500 }]
  }
};

export default function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const router = useRouter();
  
  const info = DATA_MAP[id] || DATA_MAP["marrakech"];
  const [mainImage, setMainImage] = useState(info.heroImg);
  const [openDay, setOpenDay] = useState(0);

  useEffect(() => { setMainImage(info.heroImg); }, [id, info.heroImg]);

  useEffect(() => {
    const updateNavOffset = () => {
      const pageNav = document.querySelector('nav[data-page-nav]') as HTMLElement | null;
      const siteNav = document.querySelector('nav.sticky:not([data-page-nav])') as HTMLElement | null;
      const siteNavHeight = siteNav?.offsetHeight || 0;
      if (pageNav) pageNav.style.top = `${siteNavHeight}px`;
      // set CSS variable used as fallback for scroll-margin
      document.documentElement.style.setProperty('--site-nav-offset', `${siteNavHeight}px`);
    };
    updateNavOffset();
    window.addEventListener('resize', updateNavOffset);
    return () => window.removeEventListener('resize', updateNavOffset);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    // compute total height of sticky navbars (site nav + this page nav)
    const stickyNavs = Array.from(document.querySelectorAll('nav.sticky')) as HTMLElement[];
    const totalStickyHeight = stickyNavs.reduce((sum, el) => sum + (el?.offsetHeight || 0), 0);
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const scrollTo = Math.max(0, elementTop - totalStickyHeight - 8);
    window.scrollTo({ top: scrollTo, behavior: 'smooth' });
  };

  return (
    <main className="bg-white min-h-screen font-sans text-[#003366]">
      
      {/* --- HERO SECTION --- */}
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        <div className="w-full lg:w-[45%] bg-[#003366] text-white p-12 md:p-20 flex flex-col justify-center">
          <nav className="text-xs uppercase tracking-[0.3em] text-orange-500 mb-10 flex gap-2 font-black italic">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link> 
            <span className="text-gray-500">/</span> <span className="text-white capitalize">{id}</span>
          </nav>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase italic mb-8 leading-[0.9] tracking-tighter">
            {info.title} <br /> <span className="text-orange-500">{info.sub}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed border-l-4 border-orange-500 pl-8 max-w-xl italic">
            {info.description}
          </p>
          <div className="flex items-center gap-5 text-sm font-black italic tracking-[0.2em] border-t border-white/10 pt-10">
            <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg font-bold">✓</div>
            {info.duration} — À PARTIR DE {info.price}
          </div>
        </div>
        <div className="w-full lg:w-[55%] relative group min-h-[400px]">
          <Image src={mainImage} alt={info.title} fill className="object-cover" priority />
        </div>
      </div>

      {/* --- STICKY NAV --- */}
      <nav data-page-nav className="sticky top-0 bg-white border-b border-gray-200 z-40 shadow-sm">
        <div className="max-w-[1440px] mx-auto flex gap-10 px-8 py-5 overflow-x-auto no-scrollbar">
          {['Aperçu', 'Itinéraire', 'Quand Partir', 'Tarifs'].map((tab) => (
            <button key={tab} onClick={() => scrollToSection(tab.toLowerCase().replace(/ /g, '-'))} className="text-[#003366] text-xs font-black uppercase tracking-widest hover:text-orange-500 transition-colors whitespace-nowrap italic">{tab}</button>
          ))}
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <section className="max-w-[1440px] mx-auto py-20 px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-2/3 space-y-24">
            
            {/* --- APERÇU (TEMPS FORTS) --- */}
            <div id="aperçu" className="scroll-mt-24">
               <h2 className="text-[#003366] text-4xl font-black uppercase italic mb-12 border-l-8 border-orange-500 pl-6">Les temps forts du voyage</h2>
               <div className="grid gap-8">
                  {info.highlights.map((text: string, i: number) => (
                    <div key={i} className="flex gap-6 group">
                       <div className="flex-none w-10 h-10 border-2 border-orange-500 flex items-center justify-center text-orange-500 font-black italic text-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
                          {i + 1}
                       </div>
                       <p className={`text-xl leading-relaxed italic ${text.startsWith('Itinéraire ultime') ? 'font-black text-[#003366] border-t-2 border-orange-500/20 pt-6' : 'text-gray-600'}`}>
                          {text}
                       </p>
                    </div>
                  ))}
               </div>
            </div>

            {/* --- ITINERARY SECTION --- */}
            <div id="itinéraire" className="scroll-mt-24 pt-10 border-t border-gray-100">
              <h2 className="text-[#003366] text-3xl font-bold mb-10 italic uppercase">Itinéraire</h2>
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-[#003366] z-10" />
                  <span className="text-[#003366] font-bold text-lg italic uppercase">Départ Voyage</span>
                </div>
                {info.itinerary.map((item: any, i: number) => (
                  <div key={i} className="relative">
                    <div className="ml-[7px] w-[2px] h-8 border-l-2 border-dashed border-[#003366]/40" />
                    <div className="flex">
                      <div className="flex-1 ml-[5px] relative border border-gray-200 rounded-none bg-white shadow-sm text-[#003366]">
                        <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#003366]" />
                        <div className="pl-4">
                          <div className="px-4 py-2 border-b border-gray-100 flex justify-between uppercase font-black text-[10px] italic">
                            <span>JOUR {item.day}</span><span>{item.location}</span>
                          </div>
                          <button onClick={() => setOpenDay(openDay === i ? -1 : i)} className="w-full text-left px-4 py-6 flex justify-between items-center transition-colors">
                            <h3 className="text-xl font-bold italic uppercase">{item.title}</h3>
                            <span className={`transform transition-transform ${openDay === i ? 'rotate-180' : ''}`}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg></span>
                          </button>
                          {openDay === i && (
                            <div className="p-8 border-t border-gray-50 flex flex-col gap-8">
                               <div className="space-y-6">
                                  <p className="text-gray-600 italic leading-relaxed">{item.desc}</p>
                                  <div className="bg-gray-50 p-4 border-l-4 border-orange-500">
                                    <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Hébergement</p>
                                    <p className="font-bold italic text-lg">{item.stay}</p>
                                  </div>
                               </div>
                               <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                  {item.hotelImgs?.map((img: string, idx: number) => (
                                    <div key={idx} className={`relative aspect-[4/3] border border-gray-100 ${idx === 0 ? 'col-span-2 md:col-span-2 row-span-2' : ''}`}>
                                      <Image src={img} fill className="object-cover" alt="hotel" />
                                    </div>
                                  ))}
                               </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="ml-[7px] w-[2px] h-8 border-l-2 border-dashed border-[#003366]/40" />
                  </div>
                ))}
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-[#003366] z-10" />
                  <span className="text-[#003366] font-bold text-lg italic uppercase">Fin du Séjour</span>
                </div>
              </div>
            </div>

            {/* --- QUAND PARTIR --- */}
            <div id="quand-partir" className="scroll-mt-24 pt-10 border-t border-gray-100">
              <h2 className="text-[#003366] text-4xl font-black uppercase italic mb-10 border-l-8 border-orange-500 pl-6">Quand Partir ?</h2>
              <div className="p-10 border border-gray-100 bg-white">
                <div className="flex justify-between text-center font-black text-[11px] mb-6 italic text-[#003366]">
                  {['J','F','M','A','M','J','J','A','S','O','N','D'].map((m, i) => (
                    <div key={i} className="flex flex-col gap-5">
                      <span>{m}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${i >= 3 && i <= 7 ? 'bg-orange-500 text-white scale-110 shadow-lg' : 'bg-gray-100 text-gray-300'}`}>•</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex gap-6 text-[9px] uppercase font-black tracking-widest italic border-t border-gray-50 pt-6">
                  <div className="flex items-center gap-2 text-orange-500"><div className="w-3 h-3 rounded-full bg-orange-500"></div> Meilleure période</div>
                  <div className="flex items-center gap-2 text-gray-300"><div className="w-3 h-3 rounded-full bg-gray-100"></div> Moins conseillé</div>
                </div>
              </div>
            </div>

            {/* --- TARIFS AVEC SCROLL --- */}
            <div id="tarifs" className="scroll-mt-24 pt-10 border-t border-gray-100">
              <div className="flex justify-between items-end mb-8">
                 <h2 className="text-[#003366] text-4xl font-black uppercase italic border-l-8 border-orange-500 pl-6">Tarifs 2026</h2>
                 <div className="bg-orange-100 text-orange-600 px-4 py-2 text-[10px] font-bold uppercase italic">Acompte de 30%</div>
              </div>
              <div className="border-2 border-[#003366] overflow-hidden bg-white shadow-2xl">
                <table className="w-full text-left bg-[#003366] text-white table-fixed">
                  <thead className="uppercase text-[10px] font-black italic">
                    <tr>
                      <th className="p-4 w-[35%] border-r border-white/10">Période</th>
                      <th className="p-4 w-[20%] border-r border-white/10 text-orange-400">Acompte dès</th>
                      <th className="p-4 w-[20%] border-r border-white/10">Total</th>
                      <th className="p-4 text-center w-[25%]">Action</th>
                    </tr>
                  </thead>
                </table>
                <div className="max-h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#003366] scrollbar-track-gray-100">
                  <table className="w-full text-left bg-white table-fixed">
                    <tbody className="divide-y divide-gray-100">
                      {info.prices.map((p: any, i: number) => (
                        <tr key={i} className="hover:bg-orange-50 transition-colors italic font-bold">
                          <td className="p-4 text-[#003366] text-sm border-r w-[35%]">{p.month}</td>
                          <td className="p-4 text-gray-400 text-xs border-r w-[20%]">{(p.price * 0.3).toLocaleString()} MAD</td>
                          <td className="p-4 text-orange-500 text-lg font-black border-r w-[20%]">{p.price.toLocaleString()} MAD</td>
                          <td className="p-4 text-center w-[25%]"><button onClick={()=>router.push("/reservation")} className="bg-[#003366] text-white px-4 py-3 w-full text-[9px] font-black uppercase hover:bg-orange-500 transition-all shadow-md">Réserver</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="w-full lg:w-1/3 relative">
            <div className="sticky top-28 space-y-10">
              <div className="bg-[#003366] p-10 text-white border-t-[12px] border-orange-500 text-center shadow-2xl">
                  <h3 className="text-3xl font-black italic uppercase mb-6 tracking-tight">Expert Voyage</h3>
                  <p className="text-white/60 text-sm italic mb-10 leading-relaxed">Spécialistes à Rabat & Témara.</p>
                  <a href="https://wa.me/212682838530" className="block bg-orange-500 text-white text-center py-5 font-black uppercase hover:scale-105 transition-all text-xs mb-8 shadow-xl">WhatsApp Direct</a>
                  <p className="text-2xl font-black italic">+212 6 82 83 85 30</p>
              </div>
              <div className="h-[450px] border-8 border-gray-50 bg-gray-100 shadow-xl overflow-hidden">
                <iframe src={info.mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .scrollbar-thin::-webkit-scrollbar { width: 5px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: #f1f1f1; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: #003366; }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: #f97316; }
      `}</style>
    </main>
  );
}