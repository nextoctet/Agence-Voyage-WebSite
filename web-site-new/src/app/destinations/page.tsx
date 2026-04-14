'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const MARRAKECH_DATA = {
  title: "L'Expérience Marrakech",
  subtitle: "& Montagnes",
  price: "4 400 DH",
  duration: "7 NUITS",
  description: "Une culture envoûtante, des paysages saisissants et une cuisine délicieuse. Ce voyage d'une semaine au Maroc est le mélange parfait pour les voyageurs en quête d'expériences exclusives.",
  gallery: [
    "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=1600",
    "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1600",
    "https://media.meer.com/attachments/80514e2b1f0639ffa8e653ed3f336def84ab0162/store/fill/860/645/039509176ca4b69932d598ec383d1da9767596576fafa3a0a86914465896/Tangia-Tanjia-is-a-typical-dish-of-Marrakech-Morocco.jpg"
  ],
  itinerary: [
    { 
      day: "1 - 4", 
      title: "Marrakech: La Ville Rouge", 
      stay: "The Oberoi Marrakech", 
      desc: "Immersion dans la Médina, visite des palais historiques et dîners sous les étoiles. Votre aventure commence à Marrakech, où votre chauffeur privé vous transférera à votre retraite luxueuse.",
      hotelImg: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800"
    },
    { 
      day: "4 - 8", 
      title: "Haut Atlas: Sommets Berbères", 
      stay: "Kasbah Tamadot", 
      desc: "Randonnées privées, rencontres locales et détente face aux sommets enneigés. Explorez les horizons infinis des montagnes de l'Atlas.",
      hotelImg: "https://images.unsplash.com/photo-1580674239581-39bd1b7b0dc0?q=80&w=800"
    }
  ],
  prices: [
    { month: "Avril 2026", price: "7 500 DH", deposit: "1 100 DH" },
    { month: "Mai 2026", price: "6 000 DH", deposit: "900 DH" },
    { month: "Juin 2026", price: "4 400 DH", deposit: "700 DH" }
  ]
};

export default function MarrakechDetailPage() {
  const router = useRouter();
  const [mainImage, setMainImage] = useState(MARRAKECH_DATA.gallery[0]);

  return (
    <main className="bg-white min-h-screen font-sans text-[#003366]">
      
      {/* --- 1. SECTION HERO (Header) --- */}
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        <div className="w-full lg:w-[45%] bg-[#003366] text-white p-12 md:p-20 flex flex-col justify-center">
          <nav className="text-xs uppercase tracking-[0.3em] text-orange-400 mb-10 flex gap-2 italic font-bold">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link> 
            <span className="text-gray-500">/</span> 
            <Link href="/destinations" className="hover:text-white transition-colors">Maroc</Link> 
            <span className="text-gray-500">/</span> 
            <span className="text-white">Marrakech</span>
          </nav>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter mb-8 leading-[0.9]">
            {MARRAKECH_DATA.title} <br /> 
            <span className="text-orange-500">{MARRAKECH_DATA.subtitle}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 italic mb-12 leading-relaxed border-l-4 border-orange-500 pl-8 max-w-xl">
            {MARRAKECH_DATA.description}
          </p>
          
          <div className="flex items-center gap-5 text-sm font-black italic tracking-[0.2em] border-t border-white/10 pt-10">
            <div className="bg-orange-500 p-3 rounded-xl shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            {MARRAKECH_DATA.duration} — TOUR PRIVÉ À PARTIR DE {MARRAKECH_DATA.price}
          </div>
        </div>

        <div className="w-full lg:w-[55%] relative group bg-gray-200 min-h-[400px]">
          <Image src={mainImage} alt="Marrakech" width={400} height={300} className="w-full h-full object-cover transition-all duration-1000" />
          <div className="absolute bottom-10 left-10 flex gap-4 z-20">
            {MARRAKECH_DATA.gallery.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 rounded-2xl border-4 overflow-hidden transition-all ${mainImage === img ? 'border-orange-500 scale-110 shadow-xl' : 'border-white/50 hover:border-white'}`}
              >
                <Image src={img} width={80} height={80} className="w-full h-full object-cover" alt="miniature" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- 2. SECTION ITINERARY WITH MAP (The Core Section) --- */}
      <section className="max-w-[1440px] mx-auto py-24 px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Detail Program */}
          <div className="w-full lg:w-2/3">
            <div className="flex items-center gap-4 mb-12">
               <span className="h-1 w-20 bg-orange-500 rounded-full"></span>
               <h2 className="text-[#003366] text-4xl font-black uppercase italic tracking-tighter">Itinéraire Détaillé</h2>
            </div>

            <div className="space-y-12">
              {MARRAKECH_DATA.itinerary.map((item, i) => (
                <div key={i} className="border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <div className="bg-[#2d6a4f] p-8 text-white flex justify-between items-center">
                    <div>
                      <p className="text-xs font-bold opacity-80 uppercase tracking-widest italic">JOURS {item.day}</p>
                      <h3 className="text-3xl font-black italic uppercase tracking-tight">{item.title}</h3>
                    </div>
                    <span className="text-3xl">⌄</span>
                  </div>
                  
                  <div className="p-10">
                    <h4 className="font-black text-[#003366] uppercase text-sm mb-4 tracking-widest">At a Glance</h4>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10 italic">{item.desc}</p>

                    <h4 className="font-black text-[#003366] uppercase text-sm mb-6 tracking-widest">Where to stay</h4>
                    <div className="max-w-md group cursor-pointer">
                      <div className="relative h-64 rounded-3xl overflow-hidden mb-5">
                        <Image src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Hôtel de Luxe Almas Voyages" priority/>
                      </div>
                      <h5 className="font-black text-[#003366] text-xl mb-1">{item.stay}</h5>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Expérience Exclusive</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* --- 3. GUIDE DES TARIFS (Integrated in Content) --- */}
            <div className="mt-24">
              <h2 className="text-3xl font-black text-[#003366] uppercase italic mb-10 tracking-tighter">Guide des Tarifs</h2>
              <div className="overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-2xl">
                <table className="w-full text-left">
                  <thead className="bg-[#003366] text-white uppercase text-[10px] italic font-black tracking-widest">
                    <tr>
                      <th className="p-8">Période</th>
                      <th className="p-8">À partir de</th>
                      <th className="p-8">Acompte</th>
                      <th className="p-8 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 bg-white">
                    {MARRAKECH_DATA.prices.map((p, i) => (
                      <tr key={i} className="hover:bg-orange-50/50 transition-colors italic">
                        <td className="p-8 font-black text-[#003366]">{p.month}</td>
                        <td className="p-8 font-black text-orange-500 text-2xl">{p.price}</td>
                        <td className="p-8 text-gray-400 font-bold">{p.deposit}</td>
                        <td className="p-8 text-center">
                          <button onClick={()=>router.push("/reservation")} className="bg-[#003366] text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-500 transition-all active:scale-95 shadow-lg">
                            Réserver
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Side: Sticky Map & Expert Card */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-10 space-y-10">
              {/* Interactive Map Placeholder */}
              <div className="rounded-[3rem] overflow-hidden h-[500px] shadow-2xl relative border-8 border-white group">
                <Image 
                  src="https://www.mapsofworld.com/morocco/maps/morocco-map.jpg" 
                  width={400} height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[20s]" 
                  alt="Marrakech Map" 
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 bg-[#2d6a4f] p-6 rounded-2xl shadow-2xl text-white text-center animate-bounce">
                  <p className="text-[10px] font-bold uppercase mb-1 tracking-widest">En direct</p>
                  <p className="font-black italic text-lg mb-4">Marrakech: The Red City</p>
                  <button className="bg-[#ff9999] text-white px-6 py-2 rounded-full font-black uppercase text-[10px] tracking-widest shadow-lg">
                    Discover
                  </button>
                </div>
              </div>

              {/* Expert Sidebar */}
              <div className="bg-[#003366] rounded-[3rem] p-12 text-white shadow-2xl border-t-[12px] border-orange-500 text-center">
                <h3 className="text-3xl font-black italic uppercase mb-6 leading-tight">Parlez à un expert</h3>
                <p className="text-gray-400 text-base italic mb-10">Notre équipe attend de vous aider.</p>
                <Link 
                  href="https://wa.me/212682838530" 
                  className="bg-orange-500 text-white font-black italic uppercase py-6 w-full rounded-2xl transition-all shadow-xl block hover:bg-white hover:text-[#003366]"
                >
                  CONTACTER SUR WHATSAPP
                </Link>
                <p className="mt-8 text-orange-500 font-black italic text-xl">+212 6 82 83 85 30</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. GALLERY (GRID) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px]">
           <div className="md:col-span-8 rounded-[3.5rem] overflow-hidden relative group">
              <Image src={MARRAKECH_DATA.gallery[1]} width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Gall" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all"></div>
           </div>
           <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <div className="rounded-[2.5rem] overflow-hidden">
                 <Image src={MARRAKECH_DATA.gallery[2]} width={400} height={300} className="w-full h-full object-cover" alt="Gall" />
              </div>
              <div className="rounded-[2.5rem] overflow-hidden bg-orange-500 flex items-center justify-center p-8 text-center shadow-inner">
                 <h3 className="text-white text-3xl font-black italic uppercase leading-none">Vivez l&apos;Authenticité <br/> Absolue</h3>
              </div>
           </div>
        </div>
      </section>

    </main>
  );
}