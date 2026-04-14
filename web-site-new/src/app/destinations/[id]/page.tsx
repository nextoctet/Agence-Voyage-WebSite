'use client';
import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// On crée un petit dictionnaire de données pour que la page s'adapte
const DATA_MAP: any = {
  "marrakech": { title: "Marrakech Prestige", sub: "La Ville Rouge", img: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80" },
  "omra": { title: "Omra Ramadan", sub: "Voyage Spirituel", img: "https://images.unsplash.com/photo-1565037604118-28564a2753a8?q=80" },
  "dubai": { title: "Dubaï Expérience", sub: "Luxe & Modernité", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80" },
  "andalousie": { title: "Andalousie & Séville", sub: "Histoire & Culture", img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80" },
};

export default function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  // On récupère l'ID de l'URL (ex: 'omra')
  const { id } = use(params);
  
  // On récupère les infos correspondantes, ou on met Marrakech par défaut
  const info = DATA_MAP[id] || DATA_MAP["marrakech"];

  return (
    <main className="min-h-screen bg-white text-[#003366]">
      {/* Hero Dynamique */}
      <div className="flex flex-col lg:flex-row h-[600px]">
        <div className="w-full lg:w-1/2 bg-[#003366] text-white p-20 flex flex-col justify-center">
          <Link href="/" className="text-orange-500 font-bold text-xs uppercase mb-8">← Retour</Link>
          <h1 className="text-7xl font-black uppercase italic leading-none">
            {info.title} <br/>
            <span className="text-orange-500">{info.sub}</span>
          </h1>
          <p className="mt-8 text-gray-300 italic max-w-md">Découvrez notre programme exclusif pour cette destination inoubliable avec Almas Voyages.</p>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <Image src={info.img} fill className="object-cover" alt={info.title} />
        </div>
      </div>

      {/* Section Contact / Réservation */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-black uppercase mb-8">Prêt pour le départ ?</h2>
        <a href="https://wa.me/212682838530" className="bg-orange-500 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform inline-block shadow-xl">
          Réserver via WhatsApp
        </a>
      </section>
    </main>
  );
}