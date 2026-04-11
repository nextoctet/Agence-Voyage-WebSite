'use client';
import Link from 'next/link';

export default function Home() {
  // HNA FIN TMODIFI L-TSAWER O L-ATMAN (Hadu huma l-offres dyalk)
  const allOffres = [
    { 
      id: "andalousie-2026", 
      title: "Andalousie & Séville", 
      price: "6.500 Dhs", 
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80" // Beddli had l-lien
    },
    { 
      id: "costa-del-sol", 
      title: "Costa Del Sol / Malaga", 
      price: "3.500 Dhs", 
      image: "https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?q=80" 
    },
    { 
      id: "dubai-premium", 
      title: "Dubaï Expérience", 
      price: "8.900 Dhs", 
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80" 
    },
    { 
      id: "istanbul-city", 
      title: "Istanbul Magic", 
      price: "5.800 Dhs", 
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80" 
    },
    { 
      id: "marrakech-riad", 
      title: "Marrakech Prestige", 
      price: "1.900 Dhs", 
      image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80" 
    },
    { 
      id: "omra-2026", 
      title: "Omra Ramadan", 
      price: "13.900 Dhs", 
      image: "https://www.chaimatravel.net/wp-content/uploads/2025/12/Omra-Ramadan.jpeg" 
    },
    { 
      id: "maldives-luxe", 
      title: "Maldives Paradise", 
      price: "16.500 Dhs", 
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80" 
    },
    { 
      id: "paris-romantique", 
      title: "Paris Lumières", 
      price: "7.900 Dhs", 
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80" 
    },
    { 
      id: "antalya-resort", 
      title: "Antalya All Inclusive", 
      price: "6.900 Dhs", 
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80" 
    }
  ];

  return (
    <main className="bg-white min-h-screen font-sans text-[#003366]">
      
      {/* 1. Hero Section - Background Hero mktoub hna */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-[#003366]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-center md:text-left">
          <div className="max-w-3xl">
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-widest uppercase">
              Explorez le monde avec nous
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
              EXPERT <br/>
              <span className="text-orange-500 italic">VOYAGE</span>
            </h1>
            <p className="text-xl text-blue-50/80 mb-10 max-w-xl leading-relaxed">
              Vivez des expériences uniques à travers nos circuits organisés et voyages sur mesure au meilleur prix au Maroc.
            </p>
            <div className="flex flex-wrap gap-5 justify-center md:justify-start">
              <Link href="/destinations" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-black transition-all shadow-xl shadow-orange-500/20 hover:scale-105">
                VOIR LES OFFRES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Grid des Offres */}
      <section className="py-20 bg-gray-50 rounded-[3rem] mx-4 mb-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-[#003366] uppercase tracking-tight">Nos Exclusivités</h2>
            <div className="w-20 h-2 bg-orange-500 mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allOffres.map((dest, i) => (
              <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="relative h-72 overflow-hidden">
                  {/* Hna fin kttla3 t-swira dyal kol card */}
                  <img src={dest.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={dest.title} />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black mb-4 text-[#003366] uppercase italic">{dest.title}</h3>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                    <div>
                      <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">À partir de</p>
                      <p className="text-[#003366] font-black text-2xl">{dest.price}</p>
                    </div>
                    <Link href={`/offres/${dest.id}`} className="bg-[#003366] hover:bg-orange-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300">
                      →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-black italic text-[#003366]">
            EXPERT <span className="text-orange-500">VOYAGE</span>
          </div>
          <p className="text-gray-400 text-[10px] font-bold tracking-[0.3em] uppercase">© 2026 Expert Voyage</p>
        </div>
      </footer>
    </main>
  );
}