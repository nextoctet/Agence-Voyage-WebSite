import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white pt-16 pb-8 px-8 font-sans">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

            {/* Logo + Tél */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter">
                  EXPERT<span className="text-orange-500 underline decoration-2 underline-offset-4">VOYAGES</span>
                </h2>
              </div>
              <div className="mt-4 flex flex-col gap-2 border-l-2 border-orange-500 pl-4">
                <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Tél</p>
                <p className="text-xl font-black italic tracking-tight">06 82 83 85 30</p>
              </div>
            </div>

            {/* À propos */}
            <div>
              <h3 className="text-sm font-black uppercase italic tracking-widest mb-6 pb-2 border-b border-white/10 w-fit">À propos</h3>
              <ul className="flex flex-col gap-3 text-sm font-medium italic text-gray-300">
                <li className="hover:text-orange-500 transition-colors cursor-pointer">• EXPERT VOYAGES</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">• Règles de confidentialité</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">• Conditions de ventes et d&apos;utilisation</li>
              </ul>
            </div>

            {/* Nos offres */}
            <div>
              <h3 className="text-sm font-black uppercase italic tracking-widest mb-6 pb-2 border-b border-white/10 w-fit">Nos offres</h3>
              <ul className="flex flex-col gap-3 text-sm font-medium italic text-gray-300">
                <li className="hover:text-orange-500 transition-colors cursor-pointer">• Voyages à l&apos;étranger</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">• Voyages au Maroc</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">• Circuits Privé au Maroc</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">• Omra</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">• Croisière</li>
              </ul>
            </div>

            {/* À la carte */}
            <div>
              <h3 className="text-sm font-black uppercase italic tracking-widest mb-6 pb-2 border-b border-white/10 w-fit">À la carte</h3>
              <ul className="flex flex-col gap-3 text-sm font-medium italic text-gray-300">
                <li className="hover:text-orange-500 transition-colors cursor-pointer">• Séjour à la carte au Maroc</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">• Séjour à la carte à l&apos;étranger</li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500">
              EXPERT VOYAGES © 2026
            </p>
          </div>

        </div>
      </footer>
    );
}