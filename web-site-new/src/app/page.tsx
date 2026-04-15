'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
   
  const destinationsHome = [
    { id: "casablanca", title: "Casablanca", subtitle: "La Ville Blanche", price: "À partir de 1.200 Dhs", img: "https://images.unsplash.com/photo-1559586035-773f272c490a?q=80" },
    { id: "marrakech", title: "Marrakech", subtitle: "La Ville Ocre", price: "À partir de 2.500 Dhs", img: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80" },
    { id: "tanger", title: "Tanger", subtitle: "La Perle du Nord", price: "À partir de 1.800 Dhs", img: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80" },
    { id: "fes", title: "Fès", subtitle: "La Capitale Spirituelle", price: "À partir de 1.500 Dhs", img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80" }
  ];

  return (
    <main className="bg-white min-h-screen font-sans text-[#003366]">
      
      {/* 1. HERO SECTION -*/}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80" fill className="object-cover" alt="Hero Morocco" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#003366]/70 via-[#003366]/30 to-white"></div>
        </div>
        <div className="relative z-10 text-white px-6">
          <span className="text-orange-500 font-black uppercase tracking-[0.5em] text-xs italic mb-6 block drop-shadow-lg underline decoration-2">Explorez le Maroc Autrement</span>
          <h1 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
            WELIVE <br /> <span className="text-orange-500 italic">MOROCCO</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <Link href="/design-experience" className="bg-white text-[#003366] px-10 py-5 uppercase font-black text-[10px] tracking-widest hover:bg-orange-500 hover:text-white transition-all shadow-2xl border-2 border-white hover:border-orange-500">
              Design Your Experience
            </Link>
            <button onClick={() => window.scrollTo({top: 900, behavior: 'smooth'})} className="bg-orange-500 text-white px-10 py-5 uppercase font-black text-[10px] tracking-widest hover:bg-[#003366] transition-all shadow-2xl">
              Nos Destinations
            </button>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="py-16 bg-white border-b border-gray-100 relative z-20 -mt-10 mx-4 md:mx-10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "04", label: "Villes Impériales" },
            { val: "100%", label: "Expérience Locale" },
            { val: "24/7", label: "Accompagnement" },
            { val: "2017", label: "Depuis" }
          ].map((stat, i) => (
            <div key={i} className="border-r last:border-none border-gray-100">
              <p className="text-3xl font-black text-[#003366]">{stat.val}</p>
              <p className="text-[9px] uppercase font-black tracking-widest text-orange-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. GRILLE DES DESTINATIONS */}
      <section className="py-32 max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <h2 className="text-5xl font-black uppercase italic border-l-[10px] border-orange-500 pl-8 leading-none">Nos <br/><span className="text-orange-500">Destinations</span></h2>
          <p className="text-gray-400 italic max-w-sm text-right text-sm">Découvrez la magie du Maroc à travers nos circuits de départ exclusifs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {destinationsHome.map((dest) => (
            <Link href={`/destinations/${dest.id}`} key={dest.id} className="group relative h-[500px] overflow-hidden">
                <Image src={dest.img} fill className="object-cover group-hover:scale-105 transition-transform duration-700" alt={dest.title} />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-orange-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-2">{dest.subtitle}</p>
                  <h3 className="text-5xl font-black uppercase italic">{dest.title}</h3>
                  <p className="mt-4 font-light text-lg italic">{dest.price}</p>
                </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer*/}
      <footer className="bg-[#003366] text-white py-16 text-center">
         <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <h4 className="font-black italic text-2xl uppercase tracking-tighter">Welive<span className="text-orange-500">Morocco</span></h4>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
              <Link href="/about" className="hover:text-orange-500 transition">About Us</Link>
              <Link href="/travel-guide" className="hover:text-orange-500 transition">Guide</Link>
              <Link href="/contact" className="hover:text-orange-500 transition">Contact</Link>
            </div>
            <p className="opacity-40 text-[9px] font-black uppercase tracking-widest">© 2026 WELIVEMOROCCO</p>
         </div>
      </footer>
    </main>
  );
}