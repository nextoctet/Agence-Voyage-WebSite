import { OFFRES, Offre } from '../../data';
import Image from 'next/image';
import Link from 'next/link';

export default function OffresPage() {
  return (
    <main className="bg-white min-h-screen pb-20 pt-6">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-black text-[#003366] uppercase italic leading-[0.9] tracking-tighter mb-8 text-center">
          Nos Offres
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {OFFRES.map((offre: Offre) => (
            <div key={offre.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 hover:-translate-y-3 transition-all duration-500">
              <div className="h-72 overflow-hidden relative">
                <Image src={offre.images[0]} width={400} height={300} className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" alt={offre.titre} />
                <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md text-[#003366] px-6 py-2 rounded-2xl font-black shadow-lg italic">
                  {offre.prix}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-[#003366] uppercase leading-tight italic mb-4">
                  {offre.titre}
                </h3>
                <p className="text-gray-500 mb-8 line-clamp-2 font-medium">
                  {offre.description}
                </p>
                <Link href={`/offres/${offre.id}`} className="block w-full text-center bg-[#003366] text-white py-5 rounded-2xl font-black hover:bg-orange-500 transition-all shadow-lg shadow-blue-900/10 uppercase italic">
                  Découvrir l&apos;offre
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
