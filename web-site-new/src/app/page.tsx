'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const destinationsHome = [
    { id: "andalousie", title: "Andalousie & Séville", price: "7.200 Dhs", img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80" },
    { id: "dubai", title: "Dubaï Expérience", price: "9.990 Dhs", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80" },
    { id: "omra", title: "Omra Ramadan", price: "14.500 Dhs", img: "https://images.unsplash.com/photo-1565037604118-28564a2753a8?q=80" },
    { id: "istanbul", title: "Istanbul Magic", price: "6.500 Dhs", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80" },
    { id: "marrakech", title: "Marrakech Prestige", price: "2.500 Dhs", img: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80" }
  ];

  return (
    <main className="bg-white min-h-screen font-sans text-[#003366]">
      {/* Hero simple */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80" fill className="object-cover" alt="Hero" />
          <div className="absolute inset-0 bg-[#003366]/60"></div>
        </div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
            EXPERT <span className="text-orange-500 italic">VOYAGES</span>
          </h1>
          <p className="text-xl mt-4 italic opacity-90">Votre expert local à Rabat & Témara</p>
        </div>
      </section>

      {/* Grille des Destinations */}
      <section className="py-20 max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-black mb-12 uppercase italic border-l-8 border-orange-500 pl-6">Nos Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinationsHome.map((dest) => (
            <Link href={`/destinations/${dest.id}`} key={dest.id} className="group">
              <div className="relative h-80 rounded-[2rem] overflow-hidden shadow-lg border border-gray-100">
                <Image src={dest.img} fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt={dest.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-2">Découvrir</p>
                  <h3 className="text-2xl font-black uppercase italic">{dest.title}</h3>
                  <p className="text-xl font-light mt-1">{dest.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}