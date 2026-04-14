'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import hotelLegacy from '@/public/XXXL.webp';
import tamaImg from '@/public/TAMA.jpg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// --- 1. BASE DE DONNÉES COMPLÈTE (Enrichie avec MAPS & LOCATIONS) ---
const DATA_MAP: any = {
  "marrakech": {
    title: "Marrakech Prestige",
    sub: "La Ville Rouge",
    description: "Une culture envoûtante, des paysages saisissants et une cuisine délicieuse. Un mélange parfait pour des expériences exclusives.",
    heroImg: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80",
    duration: "7 NUITS",
    price: "4 400 DH",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108703.3516599222!2d-8.0778939!3d31.6346023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d9611f68b%3A0x306100a48481bc0!2sMarrakech!5e0!3m2!1sfr!2sma!4v1713100000000",
    gallery: ["https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80", "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80"],
    itinerary: [
      { day: "1 - 4", location: "Marrakech Centre", title: "Médina & Palais", stay: "The Oberoi Marrakech", desc: "Visite privée des palais historiques et dîners sous les étoiles.", hotelImg: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80" },
      { day: "4 - 8", location: "Haut Atlas", title: "Haut Atlas", stay: "Kasbah Tamadot", desc: "Détente face aux sommets enneigés de l'Atlas.", hotelImg: "https://images.unsplash.com/photo-1580674239581-39bd1b7b0dc0?q=80" }
    ],
    prices: [{ month: "Avril 2026", price: "7 500 DH" }, { month: "Mai 2026", price: "6 000 DH" }]
  },
  "omra": {
    title: "Omra Ramadan",
    sub: "Voyage Spirituel",
    description: "Vivez la spiritualité au cœur des lieux saints avec un confort absolu et un accompagnement VIP Almas Voyages.",
    heroImg: "https://images.unsplash.com/photo-1565037604118-28564a2753a8?q=80",
    duration: "10 NUITS",
    price: "14 500 DH",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237684.7334710183!2d39.817305!3d21.422487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818775%3A0x98f24c431478e17b!2sMakkah%20Arabie%20Saoudite!5e0!3m2!1sfr!2sma!4v1713100000001",
    gallery: ["https://images.unsplash.com/photo-1565037604118-28564a2753a8?q=80", "https://images.unsplash.com/photo-1582552938529-37acec290c75?q=80"],
    itinerary: [
      { day: "1 - 4", location: "Médine (Haram)", title: "Médine la Lumineuse", stay: "Pullman Zamzam Madina", desc: "Prières au Masjid An-Nabawi et visites religieuses.", hotelImg: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80" },
      { day: "5 - 10", location: "Makkah (Face Kaaba)", title: "Makkah la Bénie", stay: "Fairmont Makkah", desc: "Accomplissement de la Omra face à la Kaaba.", hotelImg: "https://images.unsplash.com/photo-1542661906-039c09939634?q=80" }
    ],
    prices: [{ month: "Ramadan 2026", price: "18 500 DH" }]
  },
  "dubai": {
    title: "Dubaï Expérience",
    sub: "Luxe & Modernité",
    description: "Découvrez la démesure de Dubaï, entre gratte-ciels futuristes et safaris dorés.",
    heroImg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80",
    duration: "8 NUITS",
    price: "9 990 DH",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231280.4571874987!2d55.117464!3d25.076380!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e508d59a0ff!2sDuba%C3%AF%20-%20%C3%89mirats%20arabes%20unis!5e0!3m2!1sfr!2sma!4v1713100000002",
    gallery: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80"],
    itinerary: [{ day: "1 - 8", location: "Downtown Dubai", title: "Dubaï Downtown", stay: "Address Downtown", desc: "Burj Khalifa et safari VIP.", hotelImg: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80" }],
    prices: [{ month: "Nov 2026", price: "9 990 DH" }]
  },
  "andalousie": {
    title: "Andalousie Magique",
    sub: "Séville & Grenade",
    description: "Découvrez la beauté de l'Andalousie avec ses paysages pittoresques et sa riche histoire maure.",
    heroImg: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80",
    duration: "7 NUITS",
    price: "7 200 DH",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101416.71199342598!2d-5.998634!3d37.389092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c11148a2e5f%3A0x33446059c3a38a74!2sS%C3%A9ville%2C%20Espagne!5e0!3m2!1sfr!2sma!4v1713100000003",
    gallery: ["https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80"],
    itinerary: [
      { day: "1 - 4", location: "Séville (Andalousie)", title: "Trésors de Séville", stay: "Melia Sevilla", desc: "Visite de la Plaza de España et de l'Alcazar.", hotelImg: "https://images.unsplash.com/photo-1559139225-421006f27b35?q=80" },
      { day: "5 - 7", location: "Grenade (Alhambra)", title: "Jardins de l'Alhambra", stay: "Hôtel Barceló Palacio", desc: "Exploration des jardins du Generalife et du quartier de l'Albaicin.", hotelImg: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80" }
    ],
    prices: [{ month: "Mai 2026", price: "7 200 DH" }]
  },
  "istanbul": {
    title: "Istanbul Magic",
    sub: "Cœur Ottoman",
    description: "Explorez la ville aux deux continents, entre les minarets majestueux et le Bosphore.",
    heroImg: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80",
    duration: "6 NUITS",
    price: "6 500 DH",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.793276237!2d28.872096!3d41.005237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab1d02468da1f%3A0x403164a273934e0!2sIstanbul%2C%20Turquie!5e0!3m2!1sfr!2sma!4v1713100000004",
    gallery: ["https://images.unsplash.com/photo-1596422846543-75c6fc18a5cf?auto=format&fit=crop&q=80&w=1600"],
    itinerary: [{ day: "1 - 6", location: "Sultanahmet", title: "Byzance & Constantinople", stay: "Legacy Ottoman Hotel", desc: "Sainte-Sophie et croisière privée sur le Bosphore.", hotelImg: "/XXXL.webp"}],
    prices: [{ month: "Juin 2026", price: "6 500 DH" }]
  },
  "le-caire": {
    title: "Mystères d'Égypte",
    sub: "Pyramides & Nil",
    description: "Un voyage hors du temps à la découverte des pharaons et des trésors millénaires du Nil.",
    heroImg: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80",
    duration: "7 NUITS",
    price: "8 800 DH",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442385.0190538053!2d30.93202958448557!3d29.983995818956973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb2965119937!2sLe%20Caire%2C%20%C3%89gypte!5e0!3m2!1sfr!2sma!4v1712210000000!5m2!1sfr!2sma",
    gallery: ["https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80"],
    itinerary: [{ day: "1 - 7", location: "Gizeh & Louxor", title: "L'Héritage Pharaonique", stay: "Marriott Mena House", desc: "Visite des grandes pyramides et croisière privée sur le Nil.", hotelImg: "https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80" }],
    prices: [{ month: "Octobre 2026", price: "8 800 DH" }]
  },

  "maldives": {
    title: "Évasion Maldives",
    sub: "Luxe & Atolls",
    description: "Le paradis sur terre avec des eaux cristallines et des villas sur pilotis pour un séjour d'exception.",
    heroImg: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80",
    duration: "6 NUITS",
    price: "19 500 DH",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2038084.735043809!2d72.24430154064504!3d3.2743105741369065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b599bfaafb7bbd%3A0x414509e181956289!2sMaldives!5e0!3m2!1sfr!2sma!4v1712210000001!5m2!1sfr!2sma",
    gallery: ["https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80"],
    itinerary: [{ day: "1 - 6", location: "Atoll de Malé", title: "Lagons Cristallins", stay: "Conrad Maldives", desc: "Détente absolue, snorkeling guidé et dîners privés sur le sable blanc.", hotelImg: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80" }],
    prices: [{ month: "Décembre 2026", price: "19 500 DH" }]
  },

  "bali": {
    title: "Bali Zen",
    sub: "Temples & Rizières",
    description: "Une immersion spirituelle entre les forêts tropicales d'Ubud et les plages sauvages d'Uluwatu.",
    heroImg: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80",
    duration: "12 NUITS",
    price: "12 200 DH",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010375.4057866597!2d114.59325997637827!3d-8.451631527715424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8101545%3A0xd0333468303d9fe3!2sBali%2C%20Indon%C3%A9sie!5e0!3m2!1sfr!2sma!4v1712210000002!5m2!1sfr!2sma",
    gallery: ["https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80"],
    itinerary: [{ day: "1 - 12", location: "Ubud & Uluwatu", title: "L'Île des Dieux", stay: "Maya Ubud Resort", desc: "Yoga au lever du soleil, visite des temples sacrés et surf à Uluwatu.", hotelImg: "https://images.unsplash.com/photo-1559628233-eb1b1a45564b?q=80" }],
    prices: [{ month: "Septembre 2026", price: "12 200 DH" }]
  },

  "malaga": {
    title: "Costa Del Sol",
    sub: "Malaga & Détente",
    description: "Le meilleur de la Méditerranée : soleil garanti, gastronomie andalouse et plages dorées.",
    heroImg: "https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?q=80",
    duration: "5 NUITS",
    price: "3 990 DH",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204739.0664650631!2d-4.572412852233827!3d36.70213110291993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7259c44fdb1253%3A0x3a4ab301e5149378!2sMalaga%2C%20Espagne!5e0!3m2!1sfr!2sma!4v1712210000003!5m2!1sfr!2sma",
    gallery: ["https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?q=80"],
    itinerary: [{ day: "1 - 5", location: "Malaga Coast", title: "Plages & Tapas", stay: "Hôtel Costa Luxe 4*", desc: "Détente sur la plage de la Malagueta et soirées animées au port.", hotelImg: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80" }],
    prices: [{ month: "Juillet 2026", price: "3 990 DH" }]
  }
};

export default function DetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const router = useRouter();
  
  const info = DATA_MAP[id] || DATA_MAP["marrakech"];
  const [mainImage, setMainImage] = useState(info.heroImg);

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
              <button key={idx} onClick={() => setMainImage(img)} className={`w-20 h-20 rounded-2xl border-4 overflow-hidden transition-all ${mainImage === img ? 'border-orange-500 scale-110' : 'border-white/50'}`}>
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
                      <p className="text-xs font-bold uppercase italic">JOURS {item.day} — {item.location}</p>
                      <h3 className="text-2xl font-black italic uppercase">{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <p className="text-gray-600 text-lg italic mb-6 leading-relaxed">{item.desc}</p>
                        <p className="font-black text-orange-500 italic">Hébergement : {item.stay}</p>
                    </div>
                    <div className="w-full md:w-72 h-48 relative rounded-3xl overflow-hidden border-4 border-white shadow-lg">
                        <Image src={item.hotelImg} fill className="object-cover" alt={item.stay} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* --- SECTION MAP --- */}
            <div className="mt-24">
              <h2 className="text-3xl font-black uppercase italic mb-8 text-[#003366]">Localisation de vos étapes</h2>
              <div className="rounded-[2.5rem] overflow-hidden border-8 border-gray-50 shadow-2xl h-[450px]">
                <iframe 
                  src={info.mapUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* --- TABLEAU DES PRIX --- */}
            <div className="mt-24">
              <h2 className="text-3xl font-black uppercase italic mb-10 text-[#003366]">Guide des Tarifs 2026</h2>
              <div className="overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-xl">
                <table className="w-full text-left">
                  <thead className="bg-[#003366] text-white uppercase text-[10px] font-black">
                    <tr><th className="p-8">Période</th><th className="p-8">Prix Total</th><th className="p-8 text-center">Action</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 italic font-bold">
                    {info.prices.map((p: any, i: number) => (
                      <tr key={i} className="hover:bg-orange-50 transition-colors">
                        <td className="p-8">{p.month}</td>
                        <td className="p-8 text-orange-500 text-2xl font-black">{p.price}</td>
                        <td className="p-8 text-center">
                          <button onClick={()=>router.push("/reservation")} className="bg-[#003366] text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase hover:bg-orange-500">Réserver</button>
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
                <p className="text-gray-400 text-sm italic mb-10">Nos experts à Rabat & Témara sont disponibles pour personnaliser ce séjour.</p>
                <a href="https://wa.me/212682838530" className="block bg-orange-500 py-6 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg text-xs">WhatsApp Direct</a>
                <p className="mt-8 text-orange-500 font-black text-xl italic">+212 6 82 83 85 30</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}