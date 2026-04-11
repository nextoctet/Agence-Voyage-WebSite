import Link from "next/link"; // Had l-import hwa li khass i-koun f Next.js

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 md:px-12 bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      {/* Logo Section */}
      <div className="text-2xl font-black italic tracking-tighter text-[#003366]">
        EXPERT <span className="text-orange-500">VOYAGES</span>
      </div>

      {/* Menu Links */}
      <div className="hidden md:flex space-x-8 font-semibold text-[#003366] uppercase text-sm tracking-wide">
        <Link href="/" className="relative group transition-colors hover:text-orange-500">
          Accueil
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
        </Link>
        <Link href="/destinations" className="relative group transition-colors hover:text-orange-500">
          Destinations
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
        </Link>
        <Link href="/contact" className="relative group transition-colors hover:text-orange-500">
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
        </Link>
      </div>

      {/* Action Button Section */}
      <div className="flex items-center gap-4">
        {/* Bouton Traduction */}
        <Link 
          href="" 
          className="hidden sm:block text-sm font-bold text-[#003366] hover:text-orange-500 transition uppercase"
        >
          FR | AR | EN
        </Link>

        {/* Bouton Réservation */}
        <Link 
          href="reservation" 
          className="px-6 py-2.5 bg-orange-500 text-white text-sm font-bold rounded-full shadow-lg shadow-orange-500/30 hover:bg-[#003366] hover:shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-0.5 text-center"
        >
          RÉSERVER MAINTENANT
        </Link>
      </div>
    </nav> // Zdt had l-balise bach nseddo l-nav
  );
}