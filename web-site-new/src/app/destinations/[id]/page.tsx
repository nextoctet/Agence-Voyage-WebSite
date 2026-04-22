/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useTranslation } from "react-i18next";
import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { t } = useTranslation();
  const id = resolvedParams.id;
  const router = useRouter();

  // --- BASE DE DONNÉES ---
  const DATA_MAP: any = {
    "casablanca": {
      title: t("Casablanca"), sub: t("La Ville Blanche"),
      description: t("Le centre névralgique du Maroc moderne. Entre architecture Art Déco et la majestueuse Mosquée Hassan II."),
      highlights: [
        t("Visite privée de la Mosquée Hassan II, véritable chef-d'œuvre architectural au-dessus de l'océan."),
        t("Découvrez le quartier des Habous et son artisanat traditionnel raffiné."),
        t("Dîner exclusif sur la Corniche avec vue panoramique sur l'Atlantique."),
        t("Exploration de l'architecture Art Déco du centre-ville avec un expert en patrimoine.")
      ],
      heroImg: "/casaa.jpg",
      duration: t("2 NUITS"), price: "1 200 MAD", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106362.45034638363!2d-7.669394!3d33.572268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1625000000000",
      itinerary: [
        { day: "1", location: t("Casablanca"), title: t("Arrivée & Corniche"), stay: t("Four Seasons Casablanca"), desc: t("Accueil VIP et installation à l'hôtel face à la mer."), 
          hotelImgs: ["/1hotelcasa.webp", "/2hotelcasa.jpg"] },
        { day: "2", location: t("Casablanca"), title: t("Patrimoine"), stay: t("Four Seasons Casablanca"), desc: t("Visite de la Mosquée Hassan II et du quartier Art Déco."), 
          hotelImgs: ["/3hotelcasa.jpg"] }
      ],
      prices: [
        { month: t("Avril 2026"), price: 1200 }, { month: t("Mai 2026"), price: 1300 }, { month: t("Juin 2026"), price: 1400 }
      ]
    },
    "marrakech": {
      title: t("Marrakech"), sub: t("La Ville Ocre"),
      description: t("Une culture envoûtante, des riads secrets et l'effervescence de Jemaa el-Fna. L'expérience ultime du luxe marocain."),
      highlights: [
        t("Visite privée du Jardin Majorelle et du Musée Yves Saint Laurent avant l'ouverture au public."),
        t("Survol de l'Atlas en montgolfière au lever du soleil avec petit-déjeuner berbère."),
        t("Dîner privé dans un palais de la Médina avec spectacle de musique traditionnelle."),
        t("Excursion exclusive dans le désert d'Agafay pour une nuit sous les étoiles.")
      ],
      heroImg: "/marakechdes.webp",
      duration: t("3 NUITS"), price: "2 500 MAD", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108704.14811904257!2d-8.0778931!3d31.6346023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee93db1edcf1%3A0x6b05860d93da2f63!2sMarrakech!5e0!3m2!1sfr!2sma!4v1625000000000",
      itinerary: [
        { day: "1-2", location: t("Médina"), title: t("Immersion Rouge"), stay: t("La Mamounia"), desc: t("Découverte des souks et des palais historiques."), 
          hotelImgs: ["/hotel1marra.jpg", "/hotel2marra.jpg"] },
        { day: "3", location: t("Agafay"), title: t("Désert de Pierre"), stay: t("Luxury Camp"), desc: t("Expérience nomade de luxe à 40min de la ville."), 
          hotelImgs: ["/hotel3marra.webp"] }
      ],
      prices: [
        { month: t("Avril 2026"), price: 2500 }, { month: t("Mai 2026"), price: 2800 }, { month: t("Septembre 2026"), price: 3000 }
      ]
    },
    "tanger": {
      title: t("Tanger"), sub: t("La Perle du Nord"),
      description: t("Là où la Méditerranée rencontre l'Atlantique. Une ville d'artistes et d'histoire internationale."),
      highlights: [
        t("Visite de la Kasbah et vue panoramique sur le Détroit de Gibraltar."),
        t("Découverte des Grottes d'Hercule et du Cap Spartel."),
        t("Promenade dans les jardins du Palais des Institutions Italiennes.")
      ],
      heroImg: "/tangerdes.jpg",
      duration: t("2 NUITS"), price: "1 800 MAD", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103713.06584218804!2d-5.8614488!3d35.7642345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b43525f053967%3A0x2d192c7304192d!2sTanger!5e0!3m2!1sfr!2sma!4v1625000000000",
      itinerary: [
        { day: "1-2", location: t("Kasbah"), title: t("Mythe Tangérois"), stay: t("Hôtel Nord-Pinus"), desc: t("Balade dans la vieille ville et les cafés historiques."), 
          hotelImgs: ["/hotel1tan.jpg"] }
      ],
      prices: [
        { month: t("Juin 2026"), price: 1800 }, { month: t("Juillet 2026"), price: 2200 }
      ]
    },
    "fes": {
      title: t("Fès"), sub: t("Capitale Spirituelle"),
      description: t("Plongez dans la plus grande médina médiévale du monde. Un voyage sensoriel unique entre tanneries ancestrales et palais cachés."),
      highlights: [
        t("Visite guidée de la Médina Fès el-Bali, classée au patrimoine mondial de l'UNESCO."),
        t("Découverte des tanneries Chouara et observation du travail artisanal du cuir."),
        t("Visite de la prestigieuse Université Al Quaraouiyine, la plus ancienne au monde."),
        t("Atelier de poterie et de mosaïque (Zellige) avec les maîtres artisans fassis.")
      ],
      heroImg: "/fesdes.jpg", 
      duration: t("2 NUITS"), 
      price: "1 500 MAD", 
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52918.5262799517!2d-5.0401878!3d34.008988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b32e6c251bb%3A0x23f795679469248!2sF%C3%A8s!5e0!3m2!1sfr!2sma!4v1713250000000",
      itinerary: [
        { day: "1", location: t("Fès El-Bali"), title: t("Cœur Historique"), stay: t("Palais Faraj Suites & Spa"), desc: t("Arrivée et installation. Première immersion dans la médina et dîner avec vue panoramique sur les toits de la ville."), hotelImgs: ["/hotel1fes.jpg"] },
        { day: "2", location: t("Fès & Environs"), title: t("Artisanat & Palais"), stay: t("Palais Faraj Suites & Spa"), desc: t("Visite des tanneries, de la Medersa Bou Inania et des portes du Palais Royal."), hotelImgs: ["/hotel2fes.jpg"] }
      ],
      prices: [
        { month: t("Mai 2026"), price: 1500 }, { month: t("Juin 2026"), price: 1400 }, { month: t("Septembre 2026"), price: 1650 }
      ]
    },
  };

  const info = DATA_MAP[id] || DATA_MAP["marrakech"];
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
    <main className="bg-[#F9F7F2] min-h-screen font-sans text-[#2D2926]">
      
      {/* --- HERO SECTION --- */}
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        <div className="w-full lg:w-[45%] bg-[#2D2926] text-white p-12 md:p-20 flex flex-col justify-center border-b-[10px] lg:border-b-0 lg:border-r-[10px] border-[#C07652]">
          <nav className="text-[10px] uppercase tracking-[0.3em] text-[#C07652] mb-10 flex gap-2 font-bold">
            <Link href="/" className="hover:text-white transition-colors">{t("Accueil")}</Link> 
            <span className="opacity-30">/</span> <span className="text-white capitalize">{t(id)}</span>
          </nav>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic mb-8 leading-[1] tracking-tight">
            {info.title} <br /> <span className="text-[#C07652] not-italic font-sans font-black uppercase text-4xl md:text-6xl block mt-2">{info.sub}</span>
          </h1>
          <p className="text-lg text-gray-300 mb-12 leading-relaxed border-l-2 border-[#C07652] pl-8 max-w-xl italic font-light">
            {info.description}
          </p>
          <div className="flex items-center gap-5 text-[11px] font-bold uppercase tracking-[0.2em] border-t border-white/10 pt-10">
            <div className="bg-[#C07652] text-white w-6 h-6 rounded-full flex items-center justify-center shadow-lg font-bold">✓</div>
            {info.duration} {t("— À PARTIR DE")} {info.price}
          </div>
        </div>
        <div className="w-full lg:w-[55%] relative group min-h-[400px] overflow-hidden">
          <Image src={mainImage} alt={info.title} fill className="object-cover scale-105 transition-transform duration-1000" priority />
        </div>
      </div>

      {/* --- STICKY NAV --- */}
      <nav className="sticky bg-white/90 backdrop-blur-md border-b border-gray-100 z-40 shadow-sm" style={{ top: navbarHeight ? `${navbarHeight}px` : 0 }}>
        <div className="max-w-[1440px] mx-auto flex gap-12 px-8 py-5 overflow-x-auto no-scrollbar">
          {[{ label: t('Aperçu'), id: 'apercu' }, { label: t('Itinéraire'), id: 'itineraire' }, { label: t('Quand Partir'), id: 'quand-partir' }, { label: t('Tarifs'), id: 'tarifs' }].map((tab) => (
            <button key={tab.id} onClick={() => scrollToSection(tab.id)} className="text-[#2D2926] text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#C07652] transition-colors whitespace-nowrap">{tab.label}</button>
          ))}
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <section className="max-w-[1440px] mx-auto py-32 px-8">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="w-full lg:w-2/3 space-y-32">
            
            {/* APERÇU */}
            <div id="apercu" className="scroll-mt-32">
               <div className="flex items-center gap-6 mb-16">
                  <h2 className="text-[#2D2926] text-4xl font-serif italic">{t("Temps forts au Maroc")}</h2>
                  <div className="h-[1px] bg-gray-200 flex-1"></div>
               </div>
               <div className="grid gap-12">
                  {info.highlights.map((text: string, i: number) => (
                    <div key={i} className="flex gap-8 group">
                       <div className="flex-none text-2xl font-serif italic text-[#C07652] opacity-50 group-hover:opacity-100 transition-opacity">{(i + 1).toString().padStart(2, '0')}</div>
                       <p className="text-xl leading-relaxed italic text-gray-600 font-light">{text}</p>
                    </div>
                  ))}
               </div>
            </div>

            {/* ITINERAIRE */}
            <div id="itineraire" className="scroll-mt-32">
              <h2 className="text-[#2D2926] text-4xl font-serif italic mb-16 uppercase tracking-tighter">{t("Itinéraire Détaillé")}</h2>
              <div className="space-y-6">
                {info.itinerary.map((item: any, i: number) => (
                  <div key={i} className="group transition-all duration-500">
                    <div className={`flex flex-col border border-gray-100 transition-all duration-500 ${openDay === i ? 'bg-white shadow-2xl scale-[1.01]' : 'bg-transparent'}`}>
                      <div className="px-6 py-3 bg-[#2D2926]/5 flex justify-between uppercase text-[9px] font-bold tracking-widest text-[#2D2926]/50">
                        <span>{t("JOUR")} {item.day}</span><span>{item.location}</span>
                      </div>
                      <button onClick={() => setOpenDay(openDay === i ? -1 : i)} className="w-full text-left px-8 py-8 flex justify-between items-center">
                        <h3 className={`text-xl font-bold uppercase tracking-tight transition-colors ${openDay === i ? 'text-[#C07652]' : 'text-[#2D2926]'}`}>{item.title}</h3>
                        <span className={`text-[#C07652] transform transition-transform duration-500 ${openDay === i ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                      {openDay === i && (
                        <div className="px-8 pb-10 animate-in fade-in slide-in-from-top-2 duration-500">
                          <p className="text-gray-500 italic leading-[1.8] font-light mb-10 text-lg">{item.desc}</p>
                          <div className="bg-[#F9F7F2] p-8 border-l-2 border-[#C07652] mb-10">
                            <p className="text-[9px] uppercase font-bold text-[#C07652] tracking-[0.3em] mb-3">{t("Hébergement Sélectionné")}</p>
                            <p className="font-serif italic text-2xl text-[#2D2926]">{item.stay}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            {item.hotelImgs?.map((img: string, idx: number) => (
                              <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-sm group/img">
                                <Image src={img} fill className="object-cover group-hover/img:scale-110 transition-transform duration-700" alt={t("hotel")} />
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

            {/* QUAND PARTIR (PRO) */}
            <div id="quand-partir" className="scroll-mt-32 pt-20 border-t border-gray-100">
              <div className="flex items-center gap-6 mb-12">
                <h2 className="text-[#2D2926] text-3xl font-serif italic uppercase tracking-tighter">{t("Quand Partir")}</h2>
                <div className="h-[1px] bg-[#C07652]/20 flex-1"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-100 p-10 shadow-sm">
                  <p className="text-[#C07652] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">{t("Périodes conseillées")}</p>
                  <div className="flex flex-wrap gap-3">
                    {info.prices.map((p: any, i: number) => (
                      <span key={i} className="px-5 py-2 bg-[#F9F7F2] text-[#2D2926] text-sm font-serif italic border border-[#C07652]/10 uppercase">{p.month}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-[#2D2926] p-10 text-white flex flex-col justify-center relative overflow-hidden">
                  <p className="text-base italic font-light opacity-80 leading-relaxed z-10">
                    {t("Le Maroc est magnifique toute l'année, mais ces mois offrent la lumière la plus pure et des températures idéales.")}
                  </p>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#C07652]/10 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* TARIFS (PRO) */}
            <div id="tarifs" className="scroll-mt-32 pt-20 border-t border-gray-100">
              <div className="flex items-center gap-6 mb-12">
                <h2 className="text-[#2D2926] text-3xl font-serif italic uppercase tracking-tighter">{t("Tarifs & Disponibilités")}</h2>
                <div className="h-[1px] bg-[#C07652]/20 flex-1"></div>
              </div>
              <div className="overflow-hidden border border-gray-100 bg-white shadow-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="p-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2D2926]/40">{t("Période")}</th>
                      <th className="p-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2D2926]/40">{t("Prix / Personne")}</th>
                      <th className="p-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2D2926]/40 text-right">{t("Statut")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {info.prices.map((p: any, i: number) => (
                      <tr key={i} className="group hover:bg-[#F9F7F2]/50 transition-colors">
                        <td className="p-8">
                          <p className="text-xl font-serif italic text-[#2D2926]">{p.month}</p>
                          <p className="text-[9px] uppercase font-bold text-gray-400 mt-1 tracking-widest">{t("Saison 2026")}</p>
                        </td>
                        <td className="p-8">
                          <p className="text-2xl font-bold text-[#C07652] tracking-tighter">{p.price.toLocaleString()} MAD</p>
                          <p className="text-[9px] uppercase font-bold text-gray-400 tracking-widest">{t("Taxes incluses")}</p>
                        </td>
                        <td className="p-8 text-right">
                          <button onClick={() => router.push("https://wa.me/212682838530")} className="bg-[#2D2926] text-white px-10 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-[#C07652] transition-all duration-500 shadow-xl">{t("Réserver")}</button>
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
            <div className="sticky top-32 space-y-10">
              <div className="bg-[#2D2926] p-12 text-white relative overflow-hidden shadow-2xl rounded-sm">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#C07652]/10 rounded-full -mr-12 -mt-12"></div>
                  <h3 className="text-xl font-serif italic mb-1 tracking-tight text-[#C07652]">{t("WELIVE")}</h3>
                  <h3 className="text-3xl font-bold uppercase tracking-widest mb-6">{t("MOROCCO")}</h3>
                  <p className="text-white/50 text-sm italic mb-10 leading-relaxed font-light">{t("Agence locale experte basée à Rabat & Témara.")}</p>
                  <a href="https://wa.me/212682838530" className="block bg-[#C07652] text-white text-center py-5 font-bold uppercase tracking-[0.2em] hover:bg-[#A65F3D] transition-all text-[10px] mb-8 shadow-xl">{t("Réserver par WhatsApp")}</a>
                  <div className="pt-8 border-t border-white/5 text-center">
                    <p className="text-lg font-bold italic tracking-tighter text-white/80">{t("+212 6 82 83 85 30")}</p>
                  </div>
              </div>
              <div className="h-[400px] border border-gray-100 p-2 bg-white shadow-lg overflow-hidden grayscale-[50%] hover:grayscale-0 transition-all duration-1000 rounded-sm">
                <iframe src={info.mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}