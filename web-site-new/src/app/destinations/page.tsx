'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const MARRAKECH_DATA = {
  title: "L'Expérience Marrakech",
  subtitle: "& Montagnes",
  price: "4 400 DH",
  duration: "7 NUITS",
  description: "Une culture envoûtante, des paysages saisissants et une cuisine délicieuse. Ce voyage d'une semaine au Maroc est le mélange parfait pour les voyageurs en quête d'expériences exclusives.",
  gallery: [
    "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1600&auto=format&fit=crop",
    "https://media.meer.com/attachments/80514e2b1f0639ffa8e653ed3f336def84ab0162/store/fill/860/645/039509176ca4b69932d598ec383d1da9767596576fafa3a0a86914465896/Tangia-Tanjia-is-a-typical-dish-of-Marrakech-Morocco.jpg"
  ],
  itinerary: [
    { day: "1 - 4", title: "Marrakech: La Ville Rouge", stay: "The Oberoi Marrakech", desc: "Immersion dans la Médina, visite des palais historiques et dîners sous les étoiles." },
    { day: "4 - 8", title: "Haut Atlas: Sommets Berbères", stay: "Kasbah Tamadot", desc: "Randonnées privées, rencontres locales et détente face aux sommets enneigés." }
  ],
  prices: [
    { month: "Avril 2026", price: "7 500 DH", deposit: "1 100 DH" },
    { month: "Mai 2026", price: "6 000 DH", deposit: "900 DH" },
    { month: "Juin 2026", price: "4 400 DH", deposit: "700 DH" }
  ]
};

export default function MarrakechDetailPage() {
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
            <div className="bg-orange-500 p-3 rounded-xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            {MARRAKECH_DATA.duration} — TOUR PRIVÉ À PARTIR DE {MARRAKECH_DATA.price}
          </div>
        </div>

        <div className="w-full lg:w-[55%] relative group bg-gray-200 min-h-[400px]">
          <img src={mainImage} alt="Marrakech" className="w-full h-full object-cover transition-all duration-700" />
          <div className="absolute bottom-10 left-10 flex gap-4 z-20">
            {MARRAKECH_DATA.gallery.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 rounded-2xl border-4 overflow-hidden transition-all ${mainImage === img ? 'border-orange-500 scale-110 shadow-xl' : 'border-white/50 hover:border-white'}`}
              >
                <img src={img} className="w-full h-full object-cover" alt="miniature" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- 2. SECTION HIGHLIGHTS & EXPERT --- */}
      <section className="max-w-7xl mx-auto py-24 px-6 grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-12">
             <span className="h-1 w-20 bg-orange-500 rounded-full"></span>
             <h2 className="text-[#003366] text-4xl font-black uppercase italic tracking-tighter">Points Forts du Voyage</h2>
          </div>
          <ul className="grid gap-10">
            {[
              "Immergez-vous dans la culture envoûtante de Marrakech avec un guide privé expert.",
              "Apprenez des compétences culinaires uniques lors d'un cours de cuisine traditionnelle.",
              "Explorez les horizons infinis des montagnes de l'Atlas lors d'une randonnée passionnante.",
              "Rencontrez une communauté berbère locale pour découvrir leur mode de vie quotidien.",
              "Un itinéraire conçu pour allier authenticité marocaine et luxe absolu."
            ].map((text, i) => (
              <li key={i} className="flex gap-8 items-start group italic">
                <span className="text-orange-500 text-xl font-bold mt-1 transform group-hover:rotate-45 transition-all">◆</span>
                <p className="text-gray-600 text-xl leading-[1.6] font-medium group-hover:text-[#003366] transition-colors">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar Expert*/}
        <div className="lg:col-span-1">
          <div className="bg-[#003366] rounded-[3rem] p-12 text-white shadow-2xl sticky top-28 border-t-[12px] border-orange-500 text-center">
            <h3 className="text-3xl font-black italic uppercase mb-6 leading-tight">Parlez à un expert</h3>
            <p className="text-gray-400 text-base italic mb-10">Notre équipe de spécialistes attend de vous aider.</p>
            
            <Link 
              href="/demander-offre" 
              className="group relative inline-flex items-center justify-center w-full bg-orange-500 text-white font-black italic uppercase py-6 rounded-2xl transition-all overflow-hidden shadow-xl active:scale-95"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform duration-1000"></span>
              <span className="relative flex items-center gap-2">
                DEMANDER UN DEVIS
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </Link>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 italic">Ou appelez-nous</p>
              <p className="text-2xl font-black italic text-orange-500">+212 6 32 38 24 03</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. SECTION ITINERARY--- */}
      <section className="bg-gray-50 py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[#003366] text-4xl font-black uppercase italic tracking-tighter mb-12">Itinéraire Détaillé</h2>
          <div className="space-y-6">
            {MARRAKECH_DATA.itinerary.map((item, i) => (
              <div key={i} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border-l-[10px] border-[#003366] flex flex-col md:flex-row justify-between gap-6 hover:shadow-md transition-all">
                <div className="flex-1">
                  <span className="text-orange-500 font-black text-sm uppercase italic">JOURS {item.day}</span>
                  <h3 className="text-3xl font-black italic uppercase text-[#003366] my-2">{item.title}</h3>
                  <p className="text-gray-500 italic mb-4">{item.desc}</p>
                  <p className="text-sm font-bold text-gray-400">Hébergement : <span className="text-[#003366]">{item.stay}</span></p>
                </div>
                <button className="bg-gray-100 p-4 rounded-full self-center hover:bg-orange-500 hover:text-white transition-all">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 9l-7 7-7-7"/></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. SECTION PRICE GUIDE --- */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <h2 className="text-center text-[#003366] text-4xl font-black uppercase italic tracking-tighter mb-16">Guide des Tarifs</h2>
        <div className="overflow-hidden rounded-[2.5rem] border border-gray-200 shadow-xl">
          <table className="w-full text-left">
            <thead className="bg-[#003366] text-white uppercase text-xs italic font-bold">
              <tr>
                <th className="p-8">Période</th>
                <th className="p-8">À partir de</th>
                <th className="p-8">Acompte</th>
                <th className="p-8 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 italic">
              {MARRAKECH_DATA.prices.map((p, i) => (
                <tr key={i} className="hover:bg-orange-50 transition-colors">
                  <td className="p-8 font-bold">{p.month}</td>
                  <td className="p-8 font-black text-orange-500 text-xl">{p.price}</td>
                  <td className="p-8 text-gray-400">{p.deposit}</td>
                  <td className="p-8 text-center">
                    <button className="bg-[#003366] text-white px-6 py-2 rounded-xl text-xs font-black uppercase">Réserver</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* --- 5. SECTION GALLERY (GRID) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px]">
           <div className="md:col-span-8 rounded-[3rem] overflow-hidden relative group">
              <img src={MARRAKECH_DATA.gallery[1]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Gall" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
           </div>
           <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <div className="rounded-[2.5rem] overflow-hidden">
                 <img src={MARRAKECH_DATA.gallery[2]} className="w-full h-full object-cover" alt="Gall" />
              </div>
              <div className="rounded-[2.5rem] overflow-hidden bg-orange-500 flex items-center justify-center p-8 text-center">
                 <h3 className="text-white text-2xl font-black italic uppercase">Vivez l'Authenticité</h3>
              </div>
           </div>
        </div>
      </section>

      

    </main>
  );
}