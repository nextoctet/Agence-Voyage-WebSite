'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- 1. DONNÉES DE TOUTES TES DESTINATIONS  ---
const TOUTES_DESTINATIONS = [
  {
    id: "marrakech",
    title: "Marrakech Prestige",
    country: "Maroc",
    price: "4 400 DH",
    duration: "7 Nuits",
    img: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80",
    tag: "Culture & Luxe"
  },
  {
    id: "omra",
    title: "Omra Ramadan",
    country: "Arabie Saoudite",
    price: "14 500 DH",
    duration: "10 Nuits",
    img: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=1600",
    tag: "Spirituel"
  },
  {
    id: "dubai",
    title: "Dubaï Expérience",
    country: "Émirats Arabes Unis",
    price: "9 990 DH",
    duration: "8 Nuits",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80",
    tag: "Modernité"
  },
  {
    id: "istanbul",
    title: "Istanbul Magic",
    country: "Turquie",
    price: "6 500 DH",
    duration: "6 Nuits",
    img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80",
    tag: "Histoire"
  },
  {
    id: "andalousie",
    title: "Andalousie & Séville",
    country: "Espagne",
    price: "7 200 DH",
    duration: "7 Nuits",
    img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80",
    tag: "Culture"
  },
  {
    id: "malaga",
    title: "Costa Del Sol",
    country: "Espagne",
    price: "3 990 DH",
    duration: "5 Nuits",
    img: "https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?q=80",
    tag: "Plage"
  },
  // --- NOUVELLES CARTES AJOUTÉES ICI ---
  {
    id: "le-caire",
    title: "Mystères d'Égypte",
    country: "Égypte",
    price: "8 800 DH",
    duration: "7 Nuits",
    img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80",
    tag: "Aventure"
  },
  {
    id: "bali",
    title: "Bali Zen",
    country: "Indonésie",
    price: "12 200 DH",
    duration: "12 Nuits",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80",
    tag: "Détente"
  },
  {
    id: "maldives",
    title: "Évasion Maldives",
    country: "Maldives",
    price: "19 500 DH",
    duration: "6 Nuits",
    img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80",
    tag: "Luxe Absolu"
  }
];

export default function DestinationsCataloguePage() {
  return (
    <main className="bg-white min-h-screen font-sans text-[#003366]">
      
      {/* --- HEADER SECTION --- */}
      <section className="bg-[#003366] pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <div className="relative z-10">
          <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs italic mb-4 block">Expert Voyages</span>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6 leading-none">
            Nos <span className="text-orange-500">Destinations</span>
          </h1>
          <p className="text-blue-100/60 max-w-2xl mx-auto italic text-lg">
            Explorez le monde avec nos circuits organisés et séjours de luxe sur mesure.
          </p>
        </div>
      </section>

      {/* --- GRID DES CARDS --- */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {TOUTES_DESTINATIONS.map((dest) => (
            <div key={dest.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
              
              {/* Image de la Card */}
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src={dest.img} 
                  alt={dest.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm text-[#003366] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {dest.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Contenu de la Card */}
              <div className="p-10 flex flex-col flex-grow">
                <div className="mb-6">
                  <p className="text-orange-500 font-black text-[10px] uppercase tracking-widest mb-2 italic">
                    {dest.country} — {dest.duration}
                  </p>
                  <h3 className="text-3xl font-black text-[#003366] uppercase italic tracking-tighter leading-none mb-4 group-hover:text-orange-500 transition-colors">
                    {dest.title}
                  </h3>
                </div>

                <div className="mt-auto pt-8 border-t border-gray-50 flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">À partir de</p>
                    <p className="text-[#003366] font-black text-2xl tracking-tight">{dest.price}</p>
                  </div>
                  
                  <Link 
                    href={`/destinations/${dest.id}`}
                    className="bg-[#003366] text-white w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-orange-500 transition-all shadow-lg active:scale-90"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* --- BANNER CONTACT --- */}
      <section className="bg-gray-50 py-20 px-6 mx-6 mb-12 rounded-[3rem] text-center border border-gray-100">
        <h2 className="text-3xl font-black text-[#003366] uppercase italic mb-6">Vous ne trouvez pas votre bonheur ?</h2>
        <p className="text-gray-500 mb-10 italic">Nos conseillers à Rabat & Témara créent votre voyage 100% sur mesure.</p>
        <a 
          href="https://wa.me/212682838530" 
          className="bg-orange-500 text-white px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-xl hover:bg-[#003366] transition-all inline-block"
        >
          Demander un devis personnalisé
        </a>
      </section>

    </main>
  );
}