'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// --- 1. BASE DE DONNÉES COMPLÈTE ---
const DATA_MAP: any = {
  "marrakech": {
    title: "Marrakech Prestige",
    sub: "La Ville Rouge",
    description: "Une culture envoûtante, des paysages saisissants et une cuisine délicieuse. Un mélange parfait pour des expériences exclusives.",
    heroImg: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80",
    duration: "7 NUITS",
    price: "4 400 DH",
    gallery: [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80",
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80",
      "https://media.meer.com/attachments/80514e2b1f0639ffa8e653ed3f336def84ab0162/store/fill/860/645/039509176ca4b69932d598ec383d1da9767596576fafa3a0a86914465896/Tangia-Tanjia-is-a-typical-dish-of-Marrakech-Morocco.jpg"
    ],
    itinerary: [
      { day: "1 - 4", title: "Médina & Palais", stay: "The Oberoi Marrakech", desc: "Visite privée des palais historiques et dîners sous les étoiles.", hotelImg: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80" },
      { day: "4 - 8", title: "Haut Atlas", stay: "Kasbah Tamadot", desc: "Détente face aux sommets enneigés de l'Atlas.", hotelImg: "https://images.unsplash.com/photo-1580674239581-39bd1b7b0dc0?q=80" }
    ],
    prices: [
      { month: "Avril 2026", price: "7 500 DH", deposit: "1 100 DH" },
      { month: "Mai 2026", price: "6 000 DH", deposit: "900 DH" }
    ]
  },
  "omra": {
    title: "Omra Ramadan",
    sub: "Voyage Spirituel",
    description: "Vivez la spiritualité au cœur des lieux saints avec un confort absolu et un accompagnement VIP Almas Voyages.",
    heroImg: "https://images.unsplash.com/photo-1565037604118-28564a2753a8?q=80",
    duration: "10 NUITS",
    price: "14 500 DH",
    gallery: ["https://images.unsplash.com/photo-1565037604118-28564a2753a8?q=80", "https://images.unsplash.com/photo-1582552938529-37acec290c75?q=80"],
    itinerary: [
      { day: "1 - 4", title: "Médine la Lumineuse", stay: "Pullman Zamzam Madina", desc: "Prières au Masjid An-Nabawi et visites religieuses.", hotelImg: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80" },
      { day: "5 - 10", title: "Makkah la Bénie", stay: "Fairmont Makkah", desc: "Accomplissement de la Omra face à la Kaaba.", hotelImg: "https://images.unsplash.com/photo-1542661906-039c09939634?q=80" }
    ],
    prices: [{ month: "Ramadan 2026", price: "18 500 DH", deposit: "5 000 DH" }]
  },
  "dubai": {
    title: "Dubaï Expérience",
    sub: "Luxe & Modernité",
    description: "Découvrez la démesure de Dubaï, entre gratte-ciels futuristes et safaris dorés.",
    heroImg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80",
    duration: "8 NUITS",
    price: "9 990 DH",
    gallery: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80"],
    itinerary: [{ day: "1 - 8", title: "Dubaï Downtown", stay: "Address Downtown", desc: "Burj Khalifa et safari VIP.", hotelImg: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80" }],
    prices: [{ month: "Nov 2026", price: "9 990 DH", deposit: "2 500 DH" }]
  },
  "andalousie": {
    title: "Andalousie Magique",
    sub: "Séville & Grenade",
    description: "Un voyage à travers l'histoire maure, les jardins de l'Alhambra et le flamenco passionné.",
    heroImg: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80",
    duration: "7 NUITS",
    price: "7 200 DH",
    gallery: ["https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80"],
    itinerary: [{ day: "1 - 7", title: "Trésors d'Espagne", stay: "Hôtel Alfonso XIII", desc: "Visite de l'Alcazar et des jardins de Grenade.", hotelImg: "https://images.unsplash.com/photo-1559139225-421006f27b35?q=80" }],
    prices: [{ month: "Mai 2026", price: "7 200 DH", deposit: "1 500 DH" }]
  },
  "istanbul": {
    title: "Istanbul Magic",
    sub: "Byzance & Constantinople",
    description: "Explorez la ville aux deux continents, entre Sainte-Sophie et les rives du Bosphore.",
    heroImg: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80",
    duration: "6 NUITS",
    price: "6 500 DH",
    gallery: ["https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80"],
    itinerary: [{ day: "1 - 6", title: "Bosphore & Bazar", stay: "Legacy Ottoman Hotel", desc: "Croisière privée et visite du Grand Bazar.", hotelImg: "https://images.unsplash.com/photo-1554994485-0-84e00be4203b?q=80" }],
    prices: [{ month: "Juin 2026", price: "6 500 DH", deposit: "1 500 DH" }]
  }
};

export default function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  
  const info = DATA_MAP[id] || DATA_MAP["marrakech"];
  const [mainImage, setMainImage] = useState(info.heroImg);

  // Reset de l'image si on change d'ID
  useEffect(() => {
    setMainImage(info.heroImg);
  }, [id, info.heroImg]);

  return (
    <main className="bg-white min-h-screen font-sans text-[#003366]">
      
      {/* --- 1. HERO SECTION --- */}
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        <div className="w-full lg:w-[45%] bg-[#003366] text-white p-12 md:p-20 flex flex-col justify-center">
          <nav className="text-xs uppercase tracking-[0.3em] text-orange-400 mb-10 flex gap-2 italic font-bold">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link> 
            <span className="text-gray-500">/</span> 
            <span className="text-white capitalize">{id}</span>
          </nav>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter mb-8 leading-[0.9]">
            {info.title} <br /> 
            <span className="text-orange-500">{info.sub}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 italic mb-12 leading-relaxed border-l-4 border-orange-500 pl-8 max-w-xl">
            {info.description}
          </p>
          
          <div className="flex items-center gap-5 text-sm font-black italic tracking-[0.2em] border-t border-white/10 pt-10">
            <div className="bg-orange-500 p-3 rounded-xl shadow-lg font-bold">✓</div>
            {info.duration} — À PARTIR DE {info.price}
          </div>
        </div>

        <div className="w-full lg:w-[55%] relative group bg-gray-200 min-h-[400px]">
          <Image src={mainImage} alt={info.title} fill className="object-cover transition-all duration-700" />
          <div className="absolute bottom-10 left-10 flex gap-4 z-20">
            {info.gallery?.map((img: string, idx: number) => (
              <button 
                key={idx} 
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 rounded-2xl border-4 overflow-hidden transition-all ${mainImage === img ? 'border-orange-500 scale-110' : 'border-white/50'}`}
              >
                <Image src={img} width={80} height={80} className="w-full h-full object-cover" alt="mini" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- 2. CONTENU --- */}
      <section className="max-w-[1440px] mx-auto py-24 px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-2/3">
            <h2 className="text-[#003366] text-4xl font-black uppercase italic mb-12 border-l-8 border-orange-500 pl-6">Itinéraire Détaillé</h2>

            <div className="space-y-12">
              {info.itinerary.map((item: any, i: number) => (
                <div key={i} className="border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm">
                  <div className="bg-[#2d6a4f] p-8 text-white flex justify-between items-center">
                    <div>
                      <p className="text-xs font-bold uppercase italic">JOURS {item.day}</p>
                      <h3 className="text-2xl font-black italic uppercase">{item.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-10 flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <p className="text-gray-600 text-lg italic mb-6">{item.desc}</p>
                        <p className="font-black text-orange-500 italic">Hébergement : {item.stay}</p>
                    </div>
                    <div className="w-full md:w-72 h-48 relative rounded-3xl overflow-hidden border-4 border-white shadow-lg">
                        <Image src={item.hotelImg} fill className="object-cover" alt={item.stay} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* --- TABLEAU DES PRIX --- */}
            <div className="mt-24">
              <h2 className="text-3xl font-black uppercase italic mb-10 text-[#003366]">Guide des Tarifs</h2>
              <div className="overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-xl">
                <table className="w-full text-left">
                  <thead className="bg-[#003366] text-white uppercase text-[10px] font-black">
                    <tr>
                      <th className="p-8 tracking-widest">Période</th>
                      <th className="p-8 tracking-widest">Prix Total</th>
                      <th className="p-8 text-center tracking-widest">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 italic font-bold">
                    {info.prices.map((p: any, i: number) => (
                      <tr key={i} className="hover:bg-orange-50 transition-colors">
                        <td className="p-8">{p.month}</td>
                        <td className="p-8 text-orange-500 text-2xl font-black">{p.price}</td>
                        <td className="p-8 text-center">
                          <button onClick={()=>router.push("/reservation")} className="bg-[#003366] text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-500 transition-all">
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

          {/* --- SIDEBAR --- */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-10 bg-[#003366] rounded-[3rem] p-12 text-white text-center border-t-[12px] border-orange-500 shadow-2xl">
                <h3 className="text-3xl font-black italic uppercase mb-6">Expert Voyage</h3>
                <p className="text-gray-400 text-sm italic mb-10 leading-relaxed">Contactez Almas Voyages Rabat - Témara pour personnaliser ce séjour.</p>
                <a href="https://wa.me/212682838530" className="block bg-orange-500 py-6 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all">WhatsApp Expert</a>
                <p className="mt-8 text-orange-500 font-black text-xl italic">+212 6 82 83 85 30</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}