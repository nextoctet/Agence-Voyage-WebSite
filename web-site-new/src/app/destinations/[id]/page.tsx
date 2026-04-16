'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// --- 1. BASE DE DONNÉES MISE À JOUR (VILLES DU MAROC) ---
const DATA_MAP: any = {
  "casablanca": {
    title: "Casablanca", sub: "La Ville Blanche",
    description: "Le centre névralgique du Maroc moderne. Entre architecture Art Déco et la majestueuse Mosquée Hassan II.",
    highlights: [
      "Visite privée de la Mosquée Hassan II, véritable chef-d'œuvre architectural au-dessus de l'océan.",
      "Découvrez le quartier des Habous et son artisanat traditionnel raffiné.",
      "Dîner exclusif sur la Corniche avec vue panoramique sur l'Atlantique.",
      "Exploration de l'architecture Art Déco du centre-ville avec un expert en patrimoine."
    ],
    heroImg: "/casaa.jpg",
    duration: "2 NUITS", price: "1 200 MAD", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106362.45034638363!2d-7.669394!3d33.572268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1625000000000",
    itinerary: [
      { day: "1", location: "Casablanca", title: "Arrivée & Corniche", stay: "Four Seasons Casablanca", desc: "Accueil VIP et installation à l'hôtel face à la mer.", 
        hotelImgs: ["/1hotelcasa.webp", "/2hotelcasa.jpg"] },
      { day: "2", location: "Casablanca", title: "Patrimoine", stay: "Four Seasons Casablanca", desc: "Visite de la Mosquée Hassan II et du quartier Art Déco.", 
        hotelImgs: ["/3hotelcasa.jpg"] }
    ],
    prices: [
      { month: "Avril 2026", price: 1200 }, { month: "Mai 2026", price: 1300 }, { month: "Juin 2026", price: 1400 }
    ]
  },
  "marrakech": {
    title: "Marrakech", sub: "La Ville Ocre",
    description: "Une culture envoûtante, des riads secrets et l'effervescence de Jemaa el-Fna. L'expérience ultime du luxe marocain.",
    highlights: [
      "Visite privée du Jardin Majorelle et du Musée Yves Saint Laurent avant l'ouverture au public.",
      "Survol de l'Atlas en montgolfière au lever du soleil avec petit-déjeuner berbère.",
      "Dîner privé dans un palais de la Médina avec spectacle de musique traditionnelle.",
      "Excursion exclusive dans le désert d'Agafay pour une nuit sous les étoiles."
    ],
    heroImg: "/marakechdes.webp",
    duration: "3 NUITS", price: "2 500 MAD", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108704.14811904257!2d-8.0778931!3d31.6346023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee93db1edcf1%3A0x6b05860d93da2f63!2sMarrakech!5e0!3m2!1sfr!2sma!4v1625000000000",
    itinerary: [
      { day: "1-2", location: "Médina", title: "Immersion Rouge", stay: "La Mamounia", desc: "Découverte des souks et des palais historiques.", 
        hotelImgs: ["/hotel1marra.jpg", "/hotel2marra.jpg"] },
      { day: "3", location: "Agafay", title: "Désert de Pierre", stay: "Luxury Camp", desc: "Expérience nomade de luxe à 40min de la ville.", 
        hotelImgs: ["/hotel3marra.webp"] }
    ],
    prices: [
      { month: "Avril 2026", price: 2500 }, { month: "Mai 2026", price: 2800 }, { month: "Septembre 2026", price: 3000 }
    ]
  },
  "tanger": {
    title: "Tanger", sub: "La Perle du Nord",
    description: "Là où la Méditerranée rencontre l'Atlantique. Une ville d'artistes et d'histoire internationale.",
    highlights: [
      "Visite de la Kasbah et vue panoramique sur le Détroit de Gibraltar.",
      "Découverte des Grottes d'Hercule et du Cap Spartel.",
      "Promenade dans les jardins du Palais des Institutions Italiennes."
    ],
    heroImg: "/tangerdes.jpg",
    duration: "2 NUITS", price: "1 800 MAD", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103713.06584218804!2d-5.8614488!3d35.7642345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b43525f053967%3A0x2d192c7304192d!2sTanger!5e0!3m2!1sfr!2sma!4v1625000000000",
    itinerary: [
      { day: "1-2", location: "Kasbah", title: "Mythe Tangérois", stay: "Hôtel Nord-Pinus", desc: "Balade dans la vieille ville et les cafés historiques.", 
        hotelImgs: ["/hotel1tan.jpg"] }
    ],
    prices: [
      { month: "Juin 2026", price: 1800 }, { month: "Juillet 2026", price: 2200 }
    ]
  },
  "fes": {
    title: "Fès", sub: "Capitale Spirituelle",
    description: "Plongez dans la plus grande médina médiévale du monde. Un voyage sensoriel unique entre tanneries ancestrales et palais cachés.",
    highlights: [
      "Visite guidée de la Médina Fès el-Bali, classée au patrimoine mondial de l'UNESCO.",
      "Découverte des tanneries Chouara et observation du travail artisanal du cuir.",
      "Visite de la prestigieuse Université Al Quaraouiyine, la plus ancienne au monde.",
      "Atelier de poterie et de mosaïque (Zellige) avec les maîtres artisans fassis."
    ],
    heroImg: "/fesdes.jpg", 
    duration: "2 NUITS", 
    price: "1 500 MAD", 
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52918.5262799517!2d-5.0401878!3d34.008988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b32e6c251bb%3A0x23f795679469248!2sF%C3%A8s!5e0!3m2!1sfr!2sma!4v1713250000000",
    itinerary: [
      { 
        day: "1", 
        location: "Fès El-Bali", 
        title: "Cœur Historique", 
        stay: "Palais Faraj Suites & Spa", 
        desc: "Arrivée et installation. Première immersion dans la médina et dîner avec vue panoramique sur les toits de la ville.", 
        hotelImgs: ["/hotel1fes.jpg"] 
      },
      { 
        day: "2", 
        location: "Fès & Environs", 
        title: "Artisanat & Palais", 
        stay: "Palais Faraj Suites & Spa", 
        desc: "Visite des tanneries, de la Medersa Bou Inania et des portes du Palais Royal.", 
        hotelImgs: ["/hotel2fes.jpg"] 
      }
    ],
    prices: [
      { month: "Mai 2026", price: 1500 }, 
      { month: "Juin 2026", price: 1400 }, 
      { month: "Septembre 2026", price: 1650 }
    ]
  },
  
};

export default function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const router = useRouter();
  
  const info = DATA_MAP[id] || DATA_MAP["marrakech"]; // Fallback sur Marrakech si ID non trouvé
  const [mainImage, setMainImage] = useState(info.heroImg);
  const [openDay, setOpenDay] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [sectionNavHeight, setSectionNavHeight] = useState(0);

  useEffect(() => { setMainImage(info.heroImg); }, [id, info.heroImg]);

  useEffect(() => {
    const measure = () => {
      const siteNav = document.getElementById('site-navbar');
      setNavbarHeight(siteNav ? siteNav.offsetHeight : 0);
      const stickyNavs = Array.from(document.querySelectorAll('nav.sticky')) as HTMLElement[];
      const sectionNav = stickyNavs.find(n => n.id !== 'site-navbar');
      setSectionNavHeight(sectionNav ? sectionNav.offsetHeight : 0);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const totalOffset = navbarHeight + sectionNavHeight;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementTop - totalOffset, behavior: 'smooth' });
  };

  return (
    <main className="bg-white min-h-screen font-sans text-[#003366]">
      
      {/* --- HERO SECTION --- */}
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        <div className="w-full lg:w-[45%] bg-[#003366] text-white p-12 md:p-20 flex flex-col justify-center border-b-[10px] lg:border-b-0 lg:border-r-[10px] border-orange-500">
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
      <nav className="sticky bg-white border-b border-gray-200 z-40 shadow-sm" style={{ top: navbarHeight ? `${navbarHeight}px` : 0 }}>
        <div className="max-w-[1440px] mx-auto flex gap-10 px-8 py-5 overflow-x-auto no-scrollbar">
          {[
            { label: 'Aperçu', id: 'apercu' },
            { label: 'Itinéraire', id: 'itineraire' },
            { label: 'Quand Partir', id: 'quand-partir' },
            { label: 'Tarifs', id: 'tarifs' },
          ].map((tab) => (
            <button key={tab.id} onClick={() => scrollToSection(tab.id)} className="text-[#003366] text-xs font-black uppercase tracking-widest hover:text-orange-500 transition-colors whitespace-nowrap italic">{tab.label}</button>
          ))}
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <section className="max-w-[1440px] mx-auto py-20 px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-2/3 space-y-24">
            
            {/* --- APERÇU (TEMPS FORTS) --- */}
            <div id="apercu" className="scroll-mt-24">
               <h2 className="text-[#003366] text-4xl font-black uppercase italic mb-12 border-l-8 border-orange-500 pl-6">Temps forts au Maroc</h2>
               <div className="grid gap-8">
                  {info.highlights.map((text: string, i: number) => (
                    <div key={i} className="flex gap-6 group">
                       <div className="flex-none w-10 h-10 border-2 border-orange-500 flex items-center justify-center text-orange-500 font-black italic text-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
                          {i + 1}
                       </div>
                       <p className="text-xl leading-relaxed italic text-gray-600">
                          {text}
                       </p>
                    </div>
                  ))}
               </div>
            </div>

            {/* --- ITINERARY SECTION --- */}
            <div id="itineraire" className="scroll-mt-24 pt-10 border-t border-gray-100">
              <h2 className="text-[#003366] text-3xl font-black mb-10 italic uppercase">Itinéraire Détaillé</h2>
              <div className="relative">
                {info.itinerary.map((item: any, i: number) => (
                  <div key={i} className="relative mb-4">
                    <div className="flex flex-col border border-gray-200 bg-white shadow-sm text-[#003366]">
                      <div className="px-4 py-2 bg-gray-50 flex justify-between uppercase font-black text-[10px] italic border-b">
                        <span>JOUR {item.day}</span><span>{item.location}</span>
                      </div>
                      <button onClick={() => setOpenDay(openDay === i ? -1 : i)} className="w-full text-left px-6 py-6 flex justify-between items-center">
                        <h3 className="text-xl font-black italic uppercase">{item.title}</h3>
                        <span className={`transform transition-transform ${openDay === i ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                      {openDay === i && (
                        <div className="px-6 pb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                          <p className="text-gray-600 italic leading-relaxed mb-6">{item.desc}</p>
                          <div className="bg-gray-50 p-4 border-l-4 border-orange-500 mb-6">
                            <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Hébergement Sélectionné</p>
                            <p className="font-bold italic text-lg">{item.stay}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {item.hotelImgs?.map((img: string, idx: number) => (
                              <div key={idx} className="relative aspect-video">
                                <Image src={img} fill className="object-cover" alt="hotel" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- QUAND PARTIR --- */}
            <div id="quand-partir" className="scroll-mt-24 pt-10 border-t border-gray-100">
              <h2 className="text-[#003366] text-3xl font-black uppercase italic mb-6">Quand Partir</h2>
              <p className="text-gray-600 italic leading-relaxed mb-6">Périodes conseillées : {info.prices.map((p:any)=>p.month).join(', ')}</p>
            </div>

            {/* --- TARIFS --- */}
            <div id="tarifs" className="scroll-mt-24 pt-10 border-t border-gray-100">
              <h2 className="text-[#003366] text-4xl font-black uppercase italic border-l-8 border-orange-500 pl-6 mb-8">Tarifs & Disponibilités</h2>
              <div className="border-2 border-[#003366] overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-[#003366] text-white uppercase text-[10px] font-black italic">
                    <tr>
                      <th className="p-4">Période</th>
                      <th className="p-4">Prix / Personne</th>
                      <th className="p-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {info.prices.map((p: any, i: number) => (
                      <tr key={i} className="hover:bg-orange-50 transition-colors italic font-bold">
                        <td className="p-4 text-[#003366]">{p.month}</td>
                        <td className="p-4 text-orange-500 text-lg font-black">{p.price.toLocaleString()} MAD</td>
                        <td className="p-4 text-center">
                          <button onClick={()=>router.push("https://wa.me/212682838530")} className="bg-[#003366] text-white px-6 py-2 text-[10px] font-black uppercase hover:bg-orange-500 transition-all">Réserver</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="w-full lg:w-1/3 relative">
            <div className="sticky top-28 space-y-10">
              <div className="bg-[#003366] p-10 text-white border-t-[12px] border-orange-500 text-center shadow-2xl">
                  <h3 className="text-2xl font-black italic uppercase mb-2 tracking-tight">WELIVE</h3>
                  <h3 className="text-3xl font-black italic uppercase mb-6 tracking-tight text-orange-500">MOROCCO</h3>
                  <p className="text-white/60 text-sm italic mb-10 leading-relaxed">Agence locale experte basée à Rabat & Témara.</p>
                  <a href="https://wa.me/212682838530" className="block bg-orange-500 text-white text-center py-5 font-black uppercase hover:scale-105 transition-all text-xs mb-8 shadow-xl">Réserver par WhatsApp</a>
                  <p className="text-xl font-black italic text-gray-400">06 82 83 85 30</p>
              </div>
              <div className="h-[400px] border-8 border-gray-50 bg-gray-100 shadow-xl overflow-hidden">
                <iframe src={info.mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}