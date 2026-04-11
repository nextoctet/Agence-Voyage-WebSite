import { OFFRES } from '@/app/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const offre = OFFRES.find((o) => o.id === id);

  // Ila mal9inahch (id ghalat), n-tl3u 404
  if (!offre) return notFound();

  return (
    <main className="bg-white min-h-screen pb-20 pt-6">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Gallery Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[550px] mb-12">
          <div className="md:col-span-2 overflow-hidden rounded-[2.5rem] shadow-lg">
            <img src={offre.images[0]} className="w-full h-full object-cover hover:scale-105 transition duration-1000" alt={offre.titre} />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="rounded-[2.5rem] overflow-hidden shadow-md">
                <img src={offre.images[1]} className="w-full h-full object-cover hover:scale-110 transition duration-700" alt={offre.titre} />
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-md">
                <img src={offre.images[2]} className="w-full h-full object-cover hover:scale-110 transition duration-700" alt={offre.titre} />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* L-jiha dyal l-leff: Details */}
          <div className="lg:col-span-2">
            <div className="mb-10">
              <span className="text-orange-500 font-black text-xs uppercase tracking-[0.3em] italic mb-4 block">Destination de Rêve</span>
              <h1 className="text-5xl md:text-7xl font-black text-[#003366] uppercase italic leading-[0.9] tracking-tighter mb-8">
                {offre.titre}
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed font-medium">
                {offre.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50/50 p-10 rounded-[2.5rem] border border-blue-100">
                <h4 className="text-[#003366] font-black text-sm uppercase mb-6 italic">Points Forts</h4>
                <ul className="space-y-4">
                  {offre.details.inclus.map((x, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#003366] font-bold">
                      <span className="bg-orange-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px]">✓</span> 
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
                <h4 className="text-gray-400 font-black text-sm uppercase mb-6 italic text-center underline underline-offset-8">Information Voyage</h4>
                <div className="text-center">
                  <p className="text-gray-400 text-xs font-bold uppercase mb-2 tracking-widest">Durée</p>
                  <p className="text-[#003366] font-black text-4xl italic tracking-tighter">{offre.details.duree}</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-2xl border-l-8 border-orange-500 font-bold text-orange-900 text-sm italic">
                Note: Les places sont limitées pour la saison 2026. Réservez dès maintenant pour garantir votre départ.
            </div>
          </div>

          {/* L-jiha dyal l-limen: Booking Card */}
          <aside className="lg:col-span-1 sticky top-28">
            <div className="bg-[#003366] p-10 rounded-[3rem] text-white shadow-2xl overflow-hidden relative">
              {/* Background Accent */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-20"></div>

              <p className="text-blue-200 font-black mb-2 uppercase tracking-widest text-[10px]">Tarif à partir de</p>
              <div className="text-6xl font-black mb-10 italic tracking-tighter text-white">
                {offre.prix}
              </div>
              
              <div className="space-y-4">
                <Link 
                  href={`/reservation?offre=${offre.id}`} 
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-6 rounded-2xl font-black transition-all shadow-xl shadow-orange-500/20 active:scale-95 uppercase italic"
                >
                  RÉSERVER MAINTENANT
                </Link>
                <a 
                  href="https://wa.me/212632382403" 
                  className="block w-full bg-white/10 hover:bg-white/20 text-white text-center py-5 rounded-2xl font-black border border-white/20 transition-all text-sm uppercase"
                >
                  WhatsApp Expert
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 flex flex-col items-center gap-4">
                 <p className="text-blue-300/60 text-[10px] text-center font-bold uppercase tracking-widest">Almas Voyages Rabat - Témara</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}