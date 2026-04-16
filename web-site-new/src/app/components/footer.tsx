'use client';

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white pt-24 pb-12 px-8 font-sans border-t-[12px] border-orange-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Logo */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <h2 className="text-4xl font-black uppercase tracking-tighter leading-[0.8]">
                WELIVE <br />
                <span className="text-orange-500 italic underline decoration-4 underline-offset-8">MOROCCO</span>
              </h2>
            </div>
            <div className="mt-4 flex flex-col gap-2 border-l-[6px] border-orange-500 pl-6">
              <p className="text-[10px] uppercase font-black tracking-[0.3em] text-gray-400">Experience</p>
              <p className="text-2xl font-black italic tracking-tighter hover:text-orange-500 transition-colors cursor-pointer">
                06 82 83 85 30
              </p>
            </div>
          </div>

          {/* Colonne 1 */}
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-8 text-orange-500">L'Agence</h3>
            <ul className="flex flex-col gap-4 text-sm font-bold italic tracking-tight text-gray-300">
              <li className="hover:translate-x-2 hover:text-white transition-all cursor-pointer">WELIVE MOROCCO</li>
              <li className="hover:translate-x-2 hover:text-white transition-all cursor-pointer">Notre Vision</li>
              <li className="hover:translate-x-2 hover:text-white transition-all cursor-pointer">Confidentialité</li>
            </ul>
          </div>

          {/* Colonne 2 */}
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-8 text-orange-500">Destinations</h3>
            <ul className="flex flex-col gap-4 text-sm font-bold italic tracking-tight text-gray-300">
              <li className="hover:translate-x-2 hover:text-white transition-all cursor-pointer">Villes Impériales</li>
              <li className="hover:translate-x-2 hover:text-white transition-all cursor-pointer">Désert Safari</li>
              <li className="hover:translate-x-2 hover:text-white transition-all cursor-pointer">Côte Atlantique</li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-8 text-orange-500">Services</h3>
            <ul className="flex flex-col gap-4 text-sm font-bold italic tracking-tight text-gray-300">
              <li className="hover:translate-x-2 hover:text-white transition-all cursor-pointer">Sur Mesure</li>
              <li className="hover:translate-x-2 hover:text-white transition-all cursor-pointer">VIP Transport</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-black uppercase tracking-[0.6em] text-gray-500">
            © 2026 WELIVE MOROCCO
          </p>
          <div className="flex gap-8 text-[9px] font-black uppercase tracking-widest text-gray-400">
            <span className="hover:text-orange-500 cursor-pointer italic">Instagram</span>
            <span className="hover:text-orange-500 cursor-pointer italic">WhatsApp</span>
          </div>
        </div>
      </div>
    </footer>
  );
}