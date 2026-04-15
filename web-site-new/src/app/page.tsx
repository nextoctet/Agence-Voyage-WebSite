'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const destinationsHome = [
    { id: "andalousie", title: "Andalousie & Séville", price: "7.200 Dhs", img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80" },
    { id: "dubai", title: "Dubaï Expérience", price: "9.990 Dhs", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80" },
    { id: "omra", title: "Omra Ramadan", price: "14.500 Dhs", img: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=1600" },
    { id: "istanbul", title: "Istanbul Magic", price: "6.500 Dhs", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80" },
    { id: "marrakech", title: "Marrakech Prestige", price: "2.500 Dhs", img: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80" }
  ];

  const avisClients = [
    { name: "Yassine B.", city: "Rabat", text: "Service impeccable ! L'organisation de notre voyage à Dubaï était parfaite.", stars: 5 },
    { name: "Sara M.", city: "Témara", text: "Meilleure agence de voyage. Très à l'écoute et prix compétitifs.", stars: 5 },
    { name: "Mehdi A.", city: "Rabat", text: "Une expérience inoubliable pour la Omra. Merci Expert Voyages.", stars: 5 }
  ];

  return (
    <main className="bg-white min-h-screen font-sans text-[#003366]">
      {/* 1. HERO SECTION (TALLER & BOLDER) */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80" fill className="object-cover" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#003366]/80 via-[#003366]/40 to-white"></div>
        </div>
        <div className="relative z-10 text-white px-6">
          <span className="text-orange-500 font-black uppercase tracking-[0.6em] text-xs italic mb-6 block drop-shadow-lg">Le Monde vous attend</span>
          <h1 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] mb-8">
            EXPERT <br /> <span className="text-orange-500 italic">VOYAGES</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <p className="text-xl md:text-2xl italic font-light border-l-4 border-orange-500 pl-6 text-left max-w-sm">Votre expert local <br/> à Rabat & Témara</p>
            <button onClick={() => window.scrollTo({top: 900, behavior: 'smooth'})} className="bg-orange-500 text-white px-10 py-5 uppercase font-black text-xs tracking-widest hover:bg-white hover:text-[#003366] transition-all shadow-2xl">
              Découvrir nos circuits
            </button>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR (COMPACT & CLEAN) */}
      <section className="py-16 bg-white border-b border-gray-100 relative z-20 -mt-10 mx-10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { val: "12", label: "Destinations Élite" },
            { val: "5k+", label: "Voyageurs Satisfaits" },
            { val: "09", label: "Ans d'Excellence" },
            { val: "24/7", label: "Support Client" }
          ].map((stat, i) => (
            <div key={i} className="border-r last:border-none border-gray-100">
              <p className="text-4xl font-black text-[#003366]">{stat.val}</p>
              <p className="text-[10px] uppercase font-black tracking-widest text-orange-500 mt-2 italic">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. GRILLE DES DESTINATIONS */}
      <section className="py-32 max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
           <h2 className="text-6xl font-black uppercase italic border-l-[12px] border-orange-500 pl-8 leading-none">Nos <br/><span className="text-orange-500">Destinations</span></h2>
           <p className="text-gray-400 italic max-w-md text-right">Une sélection rigoureuse des plus beaux endroits de la planète, organisée avec passion.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {destinationsHome.map((dest) => (
            <Link href={`/destinations/${dest.id}`} key={dest.id} className="group relative">
              <div className="relative h-[550px] rounded-none overflow-hidden shadow-2xl">
                <Image src={dest.img} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" alt={dest.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
                <div className="absolute bottom-12 left-10 text-white">
                  <p className="text-orange-500 font-black text-xs uppercase tracking-widest mb-3">Circuit Prestige</p>
                  <h3 className="text-4xl font-black uppercase italic leading-none">{dest.title}</h3>
                  <div className="mt-6 flex items-center gap-4">
                    <span className="h-[3px] w-12 bg-orange-500"></span>
                    <p className="text-2xl font-bold italic tracking-tighter">{dest.price}</p>
                  </div>
                </div>
                <div className="absolute top-8 right-8 border border-white/30 p-4 opacity-0 group-hover:opacity-100 transition-all">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. SECTION SERVICES (NEW - REPLIT LA PAGE) */}
      <section className="py-32 bg-[#003366] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs italic mb-6 block">Services de Luxe</span>
              <h2 className="text-5xl font-black uppercase italic leading-none mb-10">L'Excellence <br/> <span className="text-orange-500">sans compromis.</span></h2>
              <p className="text-blue-100/60 text-lg italic leading-relaxed">Nous ne vendons pas des billets, nous créons des souvenirs qui durent toute une vie.</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
               {[
                 { t: "Vols Privatisés", d: "Les meilleures compagnies pour votre confort absolu." },
                 { t: "Hôtels 5 Étoiles", d: "Des établissements testés et validés par nos experts." },
                 { t: "Guides Locaux", d: "Des experts passionnés pour une immersion totale." },
                 { t: "Conciergerie", d: "Un agent dédié disponible par WhatsApp 24h/7." }
               ].map((s, i) => (
                 <div key={i} className="bg-white/5 p-10 border-l-4 border-orange-500 hover:bg-white/10 transition-all">
                    <h4 className="text-xl font-black uppercase italic text-orange-500 mb-4">{s.t}</h4>
                    <p className="text-blue-100/50 text-sm italic">{s.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. INSTAGRAM GRID (NEW - TRÈS VISUELLE) */}
      <section className="py-32">
         <div className="max-w-7xl mx-auto px-8 text-center mb-20">
            <h2 className="text-4xl font-black uppercase italic text-[#003366]">Inspirez-vous de <span className="text-orange-500">nos voyageurs</span></h2>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 px-2">
            {[
              "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80",
              "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80",
              "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80",
              "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80",
              "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80",
              "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80"
            ].map((img, i) => (
              <div key={i} className="relative h-64  transition-all duration-700 ">
                 <Image src={img} fill className="object-cover" alt="travel gallery" />
              </div>
            ))}
         </div>
      </section>

      {/* 6. SECTION DES AVIS (STYLISÉE) */}
      <section className="bg-gray-50 py-32 px-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-20">
             <h2 className="text-4xl font-black uppercase italic text-[#003366]">Avis <span className="text-orange-500">Certifiés</span></h2>
             <div className="h-[2px] flex-1 mx-10 bg-orange-500/20 hidden md:block"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {avisClients.map((avis, i) => (
              <div key={i} className="bg-white p-12 border-t-8 border-[#003366] shadow-xl relative group">
                <div className="text-6xl text-orange-500/20 absolute top-6 right-6 font-black italic">“</div>
                <div className="flex gap-1 mb-8 text-orange-500">
                  {[...Array(avis.stars)].map((_, index) => (
                    <svg key={index} width="14" height="14" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  ))}
                </div>
                <p className="text-[#003366] italic text-xl leading-relaxed mb-10">"{avis.text}"</p>
                <div className="pt-8 border-t border-gray-100">
                  <p className="font-black uppercase text-sm tracking-widest text-[#003366]">{avis.name}</p>
                  <p className="text-orange-500 text-[10px] font-bold uppercase tracking-widest italic mt-1">{avis.city}, Maroc</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NEWSLETTER CTA */}
      <section className="py-32 bg-white text-center px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-500/5 rounded-full blur-[120px]"></div>
        <div className="relative z-10">
          <h2 className="text-5xl font-black uppercase italic text-[#003366] mb-6 tracking-tighter leading-none">Soyez le premier <br/><span className="text-orange-500">à partir en voyage.</span></h2>
          <p className="mt-8 italic text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">Offres de dernière minute et circuits exclusifs, directement dans votre boîte mail.</p>
          <div className="mt-12 max-w-xl mx-auto flex flex-col md:flex-row gap-0 shadow-2xl border-4 border-[#003366]">
            <input type="email" placeholder="ENTREZ VOTRE ADRESSE EMAIL" className="w-full px-8 py-5 outline-none text-xs font-black uppercase bg-white text-[#003366]" />
            <button className="bg-[#003366] text-white px-12 py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-orange-500 transition-all">S'ABONNER</button>
          </div>
        </div>
      </section>

      <footer className="bg-[#003366] text-white py-20 text-center border-t border-white/5">
         <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="text-left"><h4 className="font-black italic text-2xl uppercase tracking-tighter">Expert <span className="text-orange-500">Voyages</span></h4></div>
            <div className="text-center opacity-40 text-[10px] font-black uppercase tracking-[0.4em]">Rabat • Témara • Tamsna</div>
            <div className="text-right opacity-60 text-xs font-bold italic underline decoration-orange-500 underline-offset-8 decoration-2">contact@expertvoyages.ma</div>
         </div>
         <p className="mt-20 text-[10px] uppercase tracking-[1em] font-black opacity-20">EST. 2017 — ALL RIGHTS RESERVED</p>
      </footer>
    </main>
  );
}