'use client';
import Link from 'next/link';
import { OFFRES } from '../../data';

export default function DestinationsPage() {
  return (
    <main className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 text-center">
          <span className="text-orange-500 font-black text-xs uppercase tracking-[0.3em] italic mb-4 block">Almas Voyages</span>
          <h1 className="text-5xl md:text-7xl font-black text-[#003366] uppercase italic leading-none tracking-tighter">
            Nos Destinations
          </h1>
          <div className="w-24 h-2 bg-orange-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grid d les Offres */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {OFFRES.map((offre) => (
            <div 
              key={offre.id} 
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 hover:-translate-y-3 transition-all duration-500"
            >
              {/* Image Section */}
              <div className="h-72 overflow-hidden relative">
                <img src={offre.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" alt={offre.titre} />
                <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md text-[#003366] px-6 py-2 rounded-2xl font-black shadow-lg italic">
                  {offre.prix}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                   <h3 className="text-2xl font-black text-[#003366] uppercase leading-tight italic">
                    {offre.titre}
                  </h3>
                </div>
                
                <p className="text-gray-500 mb-8 line-clamp-2 font-medium">
                  {offre.description}
                </p>

                {/* Bouton Voir Offre */}
                <Link 
                  href={`/offres/${offre.id}`} 
                  className="block w-full text-center bg-[#003366] text-white py-5 rounded-2xl font-black hover:bg-orange-500 transition-all shadow-lg shadow-blue-900/10 uppercase italic"
                >
                  Découvrir l'offre
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Note Footer */}
        <div className="mt-20 bg-gray-50 p-10 rounded-[3rem] text-center border border-dashed border-gray-200">
           <p className="text-[#003366] font-bold italic">
             Vous ne trouvez pas votre destination ? 
             <Link href="/contact" className="text-orange-500 underline ml-2">Contactez notre agence</Link>
           </p>
        </div>

      </div>
    </main>
  );
}
