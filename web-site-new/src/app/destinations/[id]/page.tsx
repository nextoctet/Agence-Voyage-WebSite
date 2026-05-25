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
      heroImg: "/pictures/casablancaa.jpg",
      duration: t("2 NUITS"), price: "1 200 MAD", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106362.45034638363!2d-7.669394!3d33.572268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1625000000000",
      itinerary: [
        { day: "1", location: t("Casablanca"), title: t("Arrivée & Corniche"), stay: t("Four Seasons Casablanca"), desc: t("Accueil VIP et installation à l'hôtel face à la mer."), 
          hotelImgs: ["/pictures/1hotelcasa.webp", "/pictures/2hotelcasa.jpg"] },
        { day: "2", location: t("Casablanca"), title: t("Patrimoine"), stay: t("Four Seasons Casablanca"), desc: t("Visite de la Mosquée Hassan II et du quartier Art Déco."), 
          hotelImgs: ["/pictures/3hotelcasa.jpg"] }
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
      heroImg: "/pictures/marakechdes.webp",
      duration: t("3 NUITS"), price: "2 500 MAD", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108704.14811904257!2d-8.0778931!3d31.6346023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee93db1edcf1%3A0x6b05860d93da2f63!2sMarrakech!5e0!3m2!1sfr!2sma!4v1625000000000",
      itinerary: [
        { day: "1-2", location: t("Médina"), title: t("Immersion Rouge"), stay: t("La Mamounia"), desc: t("Découverte des souks et des palais historiques."), 
          hotelImgs: ["/pictures/1hotelmarra.jpg", "/pictures/2hotelmarra.jpg"] },
        { day: "3", location: t("Agafay"), title: t("Désert de Pierre"), stay: t("Luxury Camp"), desc: t("Expérience nomade de luxe à 40min de la ville."), 
          hotelImgs: ["/pictures/3hotelmarra.webp"] }
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
          hotelImgs: ["/pictures/hotel1tan.jpg"] }
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
      heroImg: "/pictures/fesdes.jpg", 
      duration: t("2 NUITS"), 
      price: "1 500 MAD", 
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52918.5262799517!2d-5.0401878!3d34.008988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b32e6c251bb%3A0x23f795679469248!2sF%C3%A8s!5e0!3m2!1sfr!2sma!4v1713250000000",
      itinerary: [
        { day: "1", location: t("Fès El-Bali"), title: t("Cœur Historique"), stay: t("Palais Faraj Suites & Spa"), desc: t("Arrivée et installation. Première immersion dans la médina et dîner avec vue panoramique sur les toits de la ville."), hotelImgs: ["/pictures/hotel1fes.jpg"] },
        { day: "2", location: t("Fès & Environs"), title: t("Artisanat & Palais"), stay: t("Palais Faraj Suites & Spa"), desc: t("Visite des tanneries, de la Medersa Bou Inania et des portes du Palais Royal."), hotelImgs: ["/pictures/hotel2fes.jpg"] }
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
    <main className="min-h-screen overflow-x-hidden bg-[#F9F7F2] font-sans text-[#2D2926]">
      
      {/* HERO SECTION */}
      <div className="flex min-h-[calc(100svh-72px)] flex-col lg:min-h-[680px] lg:flex-row">
        <div className="flex w-full flex-col justify-center border-b-[8px] border-[#4B5563] bg-[#2D2926] px-5 pb-10 pt-8 text-white sm:px-8 sm:pb-12 sm:pt-10 md:px-12 md:pb-14 md:pt-12 lg:w-[45%] lg:border-b-0 lg:border-r-[10px] lg:p-20">
          <nav className="mb-8 flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#4B5563] sm:mb-10 sm:text-[12px] sm:tracking-[0.3em] md:text-sm">
            <Link href="/" className="hover:text-white transition-colors">{t("Accueil")}</Link> 
            <span className="opacity-30">/</span> <span className="text-white capitalize">{t(id)}</span>
          </nav>
          <h1 className="mb-6 text-[clamp(3.25rem,14vw,7.8rem)] font-serif italic leading-[0.94] tracking-tight sm:mb-8">
            {info.title} <br /> <span className="mt-2 block text-[clamp(2.25rem,9vw,5.8rem)] font-sans font-black uppercase not-italic text-[#4B5563]">{info.sub}</span>
          </h1>
          <p className="mb-8 max-w-xl border-l-2 border-[#4B5563] pl-5 text-base italic font-light leading-relaxed text-gray-300 sm:mb-10 sm:pl-6 sm:text-lg md:mb-12 md:pl-8 md:text-xl">
            {info.description}
          </p>
          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-[11px] font-bold uppercase tracking-[0.18em] sm:flex-row sm:items-center sm:gap-5 sm:text-[12px] sm:tracking-[0.2em] md:text-sm">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4B5563] text-lg font-bold text-white shadow-lg sm:h-8 sm:w-8 sm:text-xl">✓</div>
            {info.duration} {t("— À PARTIR DE")} {info.price}
          </div>
        </div>
        <div className="relative min-h-[320px] w-full overflow-hidden sm:min-h-[380px] lg:min-h-0 lg:w-[55%]">
          <Image src={mainImage} alt={info.title} fill className="object-cover scale-105 transition-transform duration-1000" priority />
        </div>
      </div>

      
      <nav className="sticky bg-white/90 backdrop-blur-md border-b border-gray-100 z-40 shadow-sm" style={{ top: navbarHeight ? `${navbarHeight}px` : 0 }}>
        <div className="mx-auto flex max-w-[1440px] gap-6 overflow-x-auto px-5 py-4 no-scrollbar sm:gap-8 sm:px-6 md:gap-10 md:px-8 md:py-5">
          {[{ label: t('Aperçu'), id: 'apercu' }, { label: t('Itinéraire'), id: 'itineraire' }, { label: t('Quand Partir'), id: 'quand-partir' }, { label: t('Tarifs'), id: 'tarifs' }].map((tab) => (
            <button key={tab.id} onClick={() => scrollToSection(tab.id)} className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.18em] text-[#2D2926] transition-colors hover:text-[#4B5563] sm:text-[12px] md:text-sm">{tab.label}</button>
          ))}
        </div>
      </nav>

      
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:py-28">
        <div className="flex flex-col gap-14 md:gap-16 lg:flex-row lg:gap-20">
          <div className="w-full space-y-20 sm:space-y-24 lg:w-2/3 lg:space-y-28">
            
            <div id="apercu" className="scroll-mt-32">
               <div className="mb-10 flex items-center gap-4 sm:mb-12 sm:gap-6 md:mb-16">
                  <h2 className="text-3xl font-serif italic text-[#2D2926] sm:text-4xl md:text-5xl lg:text-6xl">{t("Temps forts au Maroc")}</h2>
                  <div className="h-[1px] bg-gray-200 flex-1"></div>
               </div>
               <div className="grid gap-8 sm:gap-10 md:gap-12">
                  {info.highlights.map((text: string, i: number) => (
                    <div key={i} className="group flex gap-4 sm:gap-6 md:gap-8">
                       <div className="flex-none text-2xl font-serif italic text-[#4B5563] opacity-50 transition-opacity group-hover:opacity-100 sm:text-3xl">{(i + 1).toString().padStart(2, '0')}</div>
                       <p className="text-lg italic font-light leading-relaxed text-gray-600 sm:text-xl md:text-2xl">{text}</p>
                    </div>
                  ))}
               </div>
            </div>

            {/* ITINERAIRE */}
            <div id="itineraire" className="scroll-mt-32">
              <h2 className="mb-10 text-3xl font-serif italic uppercase tracking-tighter text-[#2D2926] sm:mb-12 sm:text-4xl md:mb-16 md:text-5xl lg:text-6xl">{t("Itinéraire Détaillé")}</h2>
              <div className="space-y-4 sm:space-y-6">
                {info.itinerary.map((item: any, i: number) => (
                  <div key={i} className="group transition-all duration-500">
                    <div className={`flex flex-col border border-gray-100 transition-all duration-500 ${openDay === i ? 'scale-[1.01] bg-white shadow-2xl' : 'bg-transparent'}`}>
                      <div className="flex justify-between bg-[#2D2926]/5 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#2D2926]/50 sm:px-6 sm:text-[12px] md:text-sm">
                        <span>{t("JOUR")} {item.day}</span><span>{item.location}</span>
                      </div>
                      <button onClick={() => setOpenDay(openDay === i ? -1 : i)} className="flex w-full items-center justify-between px-5 py-6 text-left sm:px-8 sm:py-7">
                        <h3 className={`text-xl font-bold uppercase tracking-tight transition-colors sm:text-2xl md:text-3xl ${openDay === i ? 'text-[#4B5563]' : 'text-[#2D2926]'}`}>{item.title}</h3>
                        <span className={`text-[#4B5563] transform transition-transform duration-500 ${openDay === i ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                      {openDay === i && (
                        <div className="animate-in fade-in slide-in-from-top-2 px-5 pb-8 duration-500 sm:px-8 sm:pb-10">
                          <p className="mb-8 text-lg italic font-light leading-[1.8] text-gray-500 sm:text-xl md:text-2xl">{item.desc}</p>
                          <div className="mb-8 border-l-2 border-[#4B5563] bg-[#F9F7F2] p-5 sm:mb-10 sm:p-8">
                            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#4B5563] sm:text-[12px] sm:tracking-[0.3em] md:text-sm">{t("Hébergement Sélectionné")}</p>
                            <p className="font-serif text-2xl italic text-[#2D2926] sm:text-3xl md:text-4xl">{item.stay}</p>
                          </div>
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

          
            <div id="quand-partir" className="scroll-mt-32 border-t border-gray-100 pt-12 sm:pt-14 md:pt-20">
              <div className="mb-10 flex items-center gap-4 sm:mb-12 sm:gap-6">
                <h2 className="text-3xl font-serif italic uppercase tracking-tighter text-[#2D2926] sm:text-4xl md:text-5xl">{t("Quand Partir")}</h2>
                <div className="h-[1px] bg-[#4B5563]/20 flex-1"></div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                <div className="border border-gray-100 bg-white p-6 shadow-sm sm:p-8 md:p-10">
                  <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.24em] text-[#4B5563] sm:mb-6 sm:text-sm sm:tracking-[0.3em]">{t("Périodes conseillées")}</p>
                  <div className="flex flex-wrap gap-3">
                    {info.prices.map((p: any, i: number) => (
                      <span key={i} className="border border-[#4B5563]/10 bg-[#F9F7F2] px-4 py-2 text-[15px] font-serif uppercase italic text-[#2D2926] sm:px-5 sm:text-base md:text-lg">{p.month}</span>
                    ))}
                  </div>
                </div>
                <div className="relative flex flex-col justify-center overflow-hidden bg-[#2D2926] p-6 text-white sm:p-8 md:p-10">
                  <p className="z-10 text-base italic font-light leading-relaxed opacity-80 sm:text-lg md:text-xl">
                    {t("Le Maroc est magnifique toute l'année, mais ces mois offrent la lumière la plus pure et des températures idéales.")}
                  </p>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#4B5563]/10 rounded-full"></div>
                </div>
              </div>
            </div>

            
            <div id="tarifs" className="scroll-mt-32 border-t border-gray-100 pt-12 sm:pt-14 md:pt-20">
              <div className="mb-10 flex items-center gap-4 sm:mb-12 sm:gap-6">
                <h2 className="text-3xl font-serif italic uppercase tracking-tighter text-[#2D2926] sm:text-4xl md:text-5xl">{t("Tarifs & Disponibilités")}</h2>
                <div className="h-[1px] bg-[#4B5563]/20 flex-1"></div>
              </div>
              <div className="overflow-x-auto border border-gray-100 bg-white pb-2 shadow-xl sm:pb-4">
                <table className="w-full min-w-[640px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="p-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#2D2926]/40 sm:p-6 sm:text-[12px] md:p-8 md:text-sm">{t("Période")}</th>
                      <th className="p-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#2D2926]/40 sm:p-6 sm:text-[12px] md:p-8 md:text-sm">{t("Prix / Personne")}</th>
                      <th className="p-5 text-right text-[11px] font-bold uppercase tracking-[0.18em] text-[#2D2926]/40 sm:p-6 sm:text-[12px] md:p-8 md:text-sm">{t("Statut")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {info.prices.map((p: any, i: number) => (
                      <tr key={i} className="group hover:bg-[#F9F7F2]/50 transition-colors">
                        <td className="p-5 sm:p-6 md:p-8">
                          <p className="text-xl font-serif italic text-[#2D2926] sm:text-2xl">{p.month}</p>
                          <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 sm:text-[12px] md:text-sm md:tracking-widest">{t("Saison 2026")}</p>
                        </td>
                        <td className="p-5 sm:p-6 md:p-8">
                          <p className="text-2xl font-bold tracking-tighter text-[#4B5563] sm:text-3xl">{p.price.toLocaleString()} MAD</p>
                          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 sm:text-[12px] md:text-sm md:tracking-widest">{t("Taxes incluses")}</p>
                        </td>
                        <td className="p-5 text-right sm:p-6 md:p-8">
                          <button onClick={() => router.push('/personnaliser-experience')} className="bg-[#2D2926] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-xl transition-all duration-500 hover:bg-[#4B5563] sm:px-8 sm:py-4 sm:text-[12px] md:text-sm md:tracking-widest">{t("Réserver")}</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          
          <div className="relative w-full lg:w-1/3">
            <div className="sticky top-32 space-y-6 sm:space-y-8 md:space-y-10">
              <div className="relative overflow-hidden rounded-[24px] bg-[#2D2926] p-8 text-white shadow-2xl sm:p-10 md:p-12">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#4B5563]/10 rounded-full -mr-12 -mt-12"></div>
                  <h3 className="mb-1 text-xl font-serif italic tracking-tight text-[#4B5563] sm:text-2xl">{t("WELIVE")}</h3>
                  <h3 className="mb-5 text-3xl font-bold uppercase tracking-[0.24em] sm:text-4xl sm:tracking-widest">{t("MOROCCO")}</h3>
                  <p className="mb-8 text-base italic font-light leading-relaxed text-white/50 md:text-lg">{t("Agence locale experte basée à Rabat & Témara.")}</p>
                  <a href="https://wa.me/212636784401" className="mb-7 block bg-[#4B5563] py-4 text-center text-[12px] font-bold uppercase tracking-[0.18em] text-white shadow-xl transition-all hover:bg-[#111827] sm:py-5 sm:text-sm md:text-base">{t("Réserver par WhatsApp")}</a>
                  <div className="border-t border-white/5 pt-7 text-center sm:pt-8">
                    <p className="text-lg font-bold italic tracking-tighter text-white/80 sm:text-xl md:text-2xl">{t("+212 6 36 78 44 01")}</p>
                  </div>
              </div>
              <div className="h-[320px] overflow-hidden rounded-[24px] border border-gray-100 bg-white p-2 shadow-lg transition-all duration-1000 hover:grayscale-0 grayscale-[50%] sm:h-[400px]">
                <iframe src={info.mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
