'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// --- 1. DATA BASE ---
const DATA_MAP: any = {
  "marrakech": {
    title: "Marrakech Prestige",
    sub: "The Red City",
    description: "Enchanting culture, breathtaking landscapes and delicious cuisine. A perfect blend for exclusive experiences.",
    heroImg: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80",
    duration: "7 NIGHTS",
    price: "4,400 MAD",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108704.1481132626!2d-8.0778939!3d31.6346761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d9611f67b%3A0x2cb2e2033a207e85!2sMarrakesh!5e0!3m2!1sen!2sma!4v1700000000000",
    gallery: ["https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80", "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80"],
    itinerary: [
      { day: "1 - 4", location: "Marrakech", title: "The Red City", stay: "The Oberoi Marrakech", desc: "Private tour of historic palaces and dinners under the stars.", hotelImg: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80" },
      { day: "4 - 8", location: "Atlas Mountains", title: "Peaks of Serenity", stay: "Kasbah Tamadot", desc: "Relaxation facing the snow-capped peaks of the Atlas Mountains.", hotelImg: "https://images.unsplash.com/photo-1580674239581-39bd1b7b0dc0?q=80" }
    ],
    prices: [{ month: "April 2026", price: "7,500 MAD" }, { month: "May 2026", price: "6,000 MAD" }]
  },
  "istanbul": {
    title: "Istanbul Magic",
    sub: "Ottoman Heart",
    description: "Explore the city of two continents, between majestic minarets and the Bosphorus.",
    heroImg: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80",
    duration: "6 NIGHTS",
    price: "6,500 MAD",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192635.03378904797!2d28.8174488!3d41.0055005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab1d024067341%3A0x82105e60166d4ca!2sIstanbul!5e0!3m2!1sen!2sma!4v1700000000000",
    itinerary: [
      { day: "1 - 6", location: "Sultanahmet", title: "Byzantium & Constantinople", stay: "Legacy Ottoman Hotel", desc: "Hagia Sophia and private Bosphorus cruise.", hotelImg: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80"}
    ],
    prices: [{ month: "June 2026", price: "6,500 MAD" }]
  }
};

export default function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const router = useRouter();
  
  const info = DATA_MAP[id] || DATA_MAP["marrakech"];
  const [mainImage, setMainImage] = useState(info.heroImg);
  const [openDay, setOpenDay] = useState(0);

  useEffect(() => {
    setMainImage(info.heroImg);
  }, [id, info.heroImg]);

  useEffect(() => {
    const setPageNavTop = () => {
      const pageNav = document.querySelector('nav[data-page-nav]') as HTMLElement | null;
      const siteNav = document.querySelector('nav:not([data-page-nav])') as HTMLElement | null;
      if (pageNav) {
        const top = siteNav?.offsetHeight || 0;
        pageNav.style.top = `${top}px`;
      }
    };
    setPageNavTop();
    window.addEventListener('resize', setPageNavTop);
    return () => window.removeEventListener('resize', setPageNavTop);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const stickyNavs = Array.from(document.querySelectorAll('nav.sticky')) as HTMLElement[];
      const totalStickyHeight = stickyNavs.reduce((sum, el) => sum + (el?.offsetHeight || 0), 0);
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const scrollTo = Math.max(0, elementTop - totalStickyHeight - 12);
      window.scrollTo({ top: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-white min-h-screen font-sans text-[#003366]">
      
      {/* --- 1. HERO SECTION --- */}
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        <div className="w-full lg:w-[45%] bg-[#003366] text-white p-12 md:p-20 flex flex-col justify-center">
          <nav className="text-xs uppercase tracking-[0.3em] text-orange-500 mb-10 flex gap-2 font-black italic">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> 
            <span className="text-gray-500">/</span> 
            <span className="text-white capitalize">{id}</span>
          </nav>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase italic mb-8 leading-[0.9] tracking-tighter">
            {info.title} <br /> <span className="text-orange-500">{info.sub}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed border-l-4 border-orange-500 pl-8 max-w-xl italic">
            {info.description}
          </p>
          <div className="flex items-center gap-5 text-sm font-black italic tracking-[0.2em] border-t border-white/10 pt-10">
            <div className="bg-orange-500 text-white p-3 rounded-xl shadow-lg font-bold">✓</div>
            {info.duration} — STARTING FROM {info.price}
          </div>
        </div>
        <div className="w-full lg:w-[55%] relative group min-h-[400px]">
          <Image src={mainImage} alt={info.title} fill className="object-cover" priority />
        </div>
      </div>

      {/* --- 2. STICKY NAV BAR --- */}
      <nav data-page-nav className="sticky top-0 bg-white border-b border-gray-200 z-40 shadow-sm">
        <div className="max-w-[1440px] mx-auto flex gap-10 px-8 py-5 overflow-x-auto no-scrollbar">
          {['Overview', 'Itinerary', 'When to visit', 'Prices'].map((tab) => (
            <button key={tab} onClick={() => scrollToSection(tab.toLowerCase().replace(/ /g, '-'))} className="text-[#003366] text-xs font-black uppercase tracking-widest hover:text-orange-500 transition-colors whitespace-nowrap italic">{tab}</button>
          ))}
        </div>
      </nav>

      {/* --- 3. MAIN CONTENT --- */}
      <section className="max-w-[1440px] mx-auto py-20 px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-2/3 space-y-24">
            
            <div id="overview" className="scroll-mt-24">
               <h2 className="text-[#003366] text-4xl font-black uppercase italic mb-8 border-l-8 border-orange-500 pl-6">Journey Highlights</h2>
               <p className="text-gray-600 text-xl leading-relaxed italic">{info.description}</p>
            </div>

            {/* --- SECTION ITINERARY MODIFIÉE --- */}
            <div id="itinerary" className="scroll-mt-24 pt-10 border-t border-gray-100">
              <h2 className="text-[#3d7a6c] text-3xl font-bold mb-10">Itinerary</h2>
              
              <div className="relative">
                
                {/* POINT DE DÉPART */}
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-[#3d7a6c] z-10" />
                  <span className="text-[#3d7a6c] font-bold text-lg italic">Fly to Marrakech</span>
                </div>

                {/* LOOP ITINERARY */}
                {info.itinerary.map((item: any, i: number) => (
                  <div key={i} className="relative">
                    
                    {/* Trait Pointillé AVANT la card (Aligné au centre de la dot) */}
                    <div className="ml-[7px] w-[2px] h-8 border-l-2 border-dashed border-[#3d7a6c]/40" />

                    <div className="flex">
                      {/* LE TABLEAU (CARD) - Aligné directement pour toucher le trait */}
                      <div className="flex-1 ml-[5px] relative border border-gray-200 rounded-sm overflow-hidden bg-white shadow-sm">
                        
                        {/* LE TRAIT PLEIN (SOLID) SUR LE BORD GAUCHE DU TABLEAU */}
                        <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#3d7a6c]" />

                        <div className="pl-4">
                          <div className="px-4 py-2 border-b border-gray-100">
                            <span className="text-[#3d7a6c] text-xs font-bold italic">Day {item.day}</span>
                          </div>
                          
                          <button 
                            onClick={() => setOpenDay(openDay === i ? -1 : i)}
                            className={`w-full text-left px-4 py-6 flex justify-between items-center transition-colors ${openDay === i ? 'bg-[#3d7a6c]/5' : ''}`}
                          >
                            <h3 className="text-xl font-bold text-[#3d7a6c] italic">
                              {item.location}: {item.title}
                            </h3>
                            <span className={`text-[#3d7a6c] transform transition-transform duration-300 ${openDay === i ? 'rotate-180' : ''}`}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                            </span>
                          </button>

                          <div className={`overflow-hidden transition-all duration-500 ${openDay === i ? 'max-h-[1000px]' : 'max-h-0'}`}>
                            <div className="p-8 flex flex-col md:flex-row gap-10 border-t border-gray-50">
                              <div className="flex-1 space-y-8">
                                <div>
                                  <h4 className="text-xs font-black uppercase text-[#003366] mb-3 tracking-widest italic border-b border-orange-500 w-fit">At a Glance</h4>
                                  <p className="text-gray-600 text-lg leading-relaxed italic">{item.desc}</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl border-l-8 border-orange-500 shadow-sm">
                                  <h4 className="text-[10px] font-black uppercase text-gray-400 mb-2 italic">Where to stay</h4>
                                  <p className="text-xl font-black text-[#003366] italic">{item.stay}</p>
                                </div>
                              </div>
                              <div className="w-full md:w-80 h-56 relative rounded-2xl overflow-hidden shadow-xl">
                                <Image src={item.hotelImg} fill className="object-cover" alt={item.stay} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Trait Pointillé APRÈS la card */}
                    <div className="ml-[7px] w-[2px] h-8 border-l-2 border-dashed border-[#3d7a6c]/40" />
                  </div>
                ))}

                {/* RETOUR */}
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-[#3d7a6c] z-10" />
                  <span className="text-[#3d7a6c] font-bold text-lg italic">Fly home</span>
                </div>

              </div>
            </div>

            {/* Rest of the code remains exactly the same... */}
            <div id="when-to-visit" className="pt-10 border-t border-gray-100 scroll-mt-24">
              <h2 className="text-[#003366] text-4xl font-black uppercase italic mb-10 border-l-8 border-orange-500 pl-6">When to Visit</h2>
              <div className="bg-gray-50 p-10 rounded-[3rem] shadow-inner">
                <div className="flex justify-between text-center font-black text-[10px] mb-6 italic text-[#003366]">
                  {['J','F','M','A','M','J','J','A','S','O','N','D'].map((m, i) => (
                    <div key={i} className="flex flex-col gap-4">
                      <span>{m}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${i >= 4 && i <= 9 ? 'bg-[#003366] text-white scale-110 shadow-lg' : 'bg-orange-200 text-orange-800 opacity-60'}`}>•</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Prices section... */}
            <div id="prices" className="scroll-mt-24 pt-10 border-t border-gray-100">
              <h2 className="text-[#003366] text-4xl font-black uppercase italic mb-10 border-l-8 border-orange-500 pl-6">Pricing Guide 2026</h2>
              <div className="overflow-hidden rounded-[3rem] border border-gray-100 shadow-2xl bg-white">
                <table className="w-full text-left">
                  <thead className="bg-[#003366] text-white uppercase text-[11px] font-black italic">
                    <tr><th className="p-8 tracking-[0.2em]">Period</th><th className="p-8 tracking-[0.2em]">Total Price</th><th className="p-8 text-center tracking-[0.2em]">Action</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {info.prices.map((p: any, i: number) => (
                      <tr key={i} className="hover:bg-orange-50 transition-colors italic font-bold">
                        <td className="p-8 text-[#003366] text-lg">{p.month}</td>
                        <td className="p-8 text-orange-500 text-3xl font-black tracking-tighter">{p.price}</td>
                        <td className="p-8 text-center">
                          <button onClick={()=>router.push("/reservation")} className="bg-[#003366] text-white px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-500 transition-all shadow-lg">Enquire Now</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar remains the same... */}
          <div className="w-full lg:w-1/3 relative">
            <div className="sticky top-28 space-y-10">
              <div className="bg-[#003366] rounded-[3rem] p-10 text-white shadow-2xl border-t-[12px] border-orange-500 text-center">
                  <h3 className="text-3xl font-black italic uppercase mb-6 tracking-tight leading-tight">Expert Voyage</h3>
                  <p className="text-gray-300 text-sm italic mb-10 leading-relaxed">Our specialists in Rabat & Témara are waiting to help you book your dream adventure.</p>
                  <a href="https://wa.me/212682838530" className="block bg-orange-500 text-white text-center py-5 rounded-[1.5rem] font-black uppercase tracking-widest hover:scale-105 transition-all text-xs mb-8 shadow-xl">WhatsApp Direct</a>
                  <div className="border-t border-white/10 pt-8">
                     <p className="text-[10px] text-gray-500 uppercase mb-2 font-bold tracking-widest italic">Or call us on</p>
                     <p className="text-2xl font-black underline decoration-orange-500 underline-offset-8 italic">+212 6 82 83 85 30</p>
                  </div>
              </div>

              <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[450px] border-8 border-gray-50 bg-gray-100">
                <iframe 
                  src={info.mapUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  className="transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}