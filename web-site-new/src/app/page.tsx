'use client';
import Link from 'next/link';
import Navbar from './components/navbar';

export default function Home() {
  // Hadu huma l-offres kamlin dyal Expert Voyages
  const allOffres = [
    { id: "andalousie-2026", title: "Andalousie & Séville", price: "7.200 Dhs", img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80" },
    { id: "costa-del-sol", title: "Costa Del Sol / Malaga", price: "3.990 Dhs", img: "https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?q=80" },
    { id: "dubai-premium", title: "Dubaï Expérience", price: "9.990 Dhs", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80" },
    { id: "istanbul-city", title: "Istanbul Magic", price: "6.500 Dhs", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80" },
    { id: "marrakech-riad", title: "Marrakech Prestige", price: "2.500 Dhs", img: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80" },
    { id: "omra-2026", title: "Omra Ramadan", price: "14.500 Dhs", img: "https://images.unsplash.com/photo-1565037604118-28564a2753a8?q=80" }
  ];

  return (
    <main className="bg-white min-h-screen font-sans text-[#003366]">
      <Navbar /> {/* Navbar li drna f components/navbar.tsx */}
      
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-[#003366]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-widest uppercase shadow-lg shadow-orange-500/20">
              Expertise & Passion du Voyage
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase">
              EXPERT <br/>
              <span className="text-orange-500 italic">VOYAGES</span>
            </h1>
            <p className="text-xl text-blue-50/80 mb-10 max-w-xl leading-relaxed">
              Vivez des expériences uniques à travers nos circuits organisés et voyages sur mesure au meilleur prix au Maroc et à l'étranger.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/destinations" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-black transition-all shadow-xl shadow-orange-500/30 hover:scale-105 active:scale-95">
                VOIR LES OFFRES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section Engagements */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "Expertise Voyage", desc: "Organisation professionnelle de vos circuits de A à Z.", num: "01" },
              { title: "Support 24/7", desc: "Notre équipe vous accompagne durant tout votre séjour.", num: "02" },
              { title: "Meilleurs Tarifs", desc: "Le rapport qualité/prix le plus compétitif du marché.", num: "03" }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <span className="text-7xl font-black text-gray-50 absolute -top-8 -left-2 z-0 group-hover:text-orange-100 transition-colors uppercase">{item.num}</span>
                <div className="relative z-10 border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-[#003366] uppercase">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Grid des Offres */}
      <section className="py-20 bg-gray-50 rounded-[3rem] mx-4 mb-10 shadow-inner">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-[#003366] uppercase tracking-tight">Toutes nos destinations</h2>
            <div className="w-20 h-2 bg-orange-500 mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allOffres.map((dest, i) => (
              <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="relative h-72 overflow-hidden">
                  <img src={dest.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={dest.title} />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-4 py-1 rounded-full shadow-sm">
                    <span className="text-[#003366] font-bold text-[10px] tracking-widest">OFFRE SPÉCIALE</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black mb-4 text-[#003366] group-hover:text-orange-500 transition-colors uppercase">{dest.title}</h3>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                    <div>
                      <p className="text-gray-400 text-[10px] uppercase font-bold tracking-[0.2em]">À partir de</p>
                      <p className="text-[#003366] font-black text-2xl">{dest.price}</p>
                    </div>
                    <Link href={`/offres/${dest.id}`} className="bg-[#003366] group-hover:bg-orange-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg shadow-blue-900/10">
                      →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mini Footer Links */}
      <footer className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-100 pt-10">
          <div className="flex gap-8">
             <a href="https://facebook.com" className="text-xs font-black text-[#003366] hover:text-orange-500 tracking-widest transition-colors">FACEBOOK</a>
             <a href="https://instagram.com" className="text-xs font-black text-[#003366] hover:text-orange-500 tracking-widest transition-colors">INSTAGRAM</a>
             <a href="https://wa.me/212632382403" className="text-xs font-black text-orange-500 hover:underline tracking-widest uppercase">WhatsApp Direct</a>
          </div>
          <p className="text-gray-400 text-[10px] font-bold tracking-[0.3em] uppercase">EXPERT VOYAGES © 2026</p>
        </div>
      </footer>
    </main>
  );
}