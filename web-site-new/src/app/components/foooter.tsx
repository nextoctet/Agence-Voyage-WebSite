'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* --- 1. Partners & Payment (نفس ستايل الصورة) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 border-b border-gray-50 pb-16">
          {/* Nos Partenaires */}
          <div>
            <h3 className="text-[#003366] text-xl font-black uppercase italic mb-8">Nos Partenaires</h3>
            <div className="flex flex-wrap gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Royal_Air_Maroc_Logo.svg/2560px-Royal_Air_Maroc_Logo.svg.png" alt="RAM" width={80} height={32} className="h-8 w-auto" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Etihad_Airways_logo.svg/1200px-Etihad_Airways_logo.svg.png" alt="Etihad" width={60} height={24} className="h-6 w-auto" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Turkish_Airlines_logo_2019.svg/1280px-Turkish_Airlines_logo_2019.svg.png" alt="Turkish" width={60} height={24} className="h-6 w-auto" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Gulf_Air_logo.svg/1200px-Gulf_Air_logo.svg.png" alt="Gulf" width={80} height={32} className="h-8 w-auto" />
            </div>
          </div>
          
          {/* Paiement sécurisé */}
          <div>
            <h3 className="text-[#003366] text-xl font-black uppercase italic mb-8">Paiement sécurisé</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Image src="https://www.cashplus.ma/wp-content/uploads/2021/06/Logo-Cash-Plus-1.png" alt="CashPlus" width={80} height={32} className="h-8 w-auto" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" width={60} height={24} className="h-6 w-auto" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" width={80} height={32} className="h-8 w-auto" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="Paypal" width={60} height={24} className="h-6 w-auto" />
              <Image src="https://www.cmi.co.ma/sites/default/files/cmi-logo-footer.png" alt="CMI" width={100} height={40} className="h-10 w-auto" />
            </div>
          </div>
        </div>

        {/* --- 2. Main Footer Links --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Logo & Info */}
          <div className="col-span-1">
            <div className="mb-6">
               <span className="text-[#003366] text-3xl font-black uppercase italic tracking-tighter">ALMAS</span>
               <span className="text-orange-500 text-3xl font-black uppercase italic tracking-tighter"> VOYAGES</span>
            </div>
            <p className="text-gray-400 text-sm italic leading-relaxed mb-8">
              Expert en voyages de luxe et séjours sur mesure au Maroc. Votre satisfaction est notre priorité.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#003366] hover:bg-orange-500 hover:text-white transition-all text-lg font-bold">f</a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#003366] hover:bg-orange-500 hover:text-white transition-all text-lg">📷</a>
            </div>
          </div>

          {/* Nos Offres */}
          <div>
            <h4 className="text-[#003366] font-black uppercase italic text-xs tracking-widest mb-8 border-b-2 border-orange-500 w-fit pb-1">Nos Offres</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-500 italic">
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Voyages à l&apos;étranger</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Voyages au Maroc</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Omra</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Croisière</Link></li>
            </ul>
          </div>

          {/* À Propos */}
          <div>
            <h4 className="text-[#003366] font-black uppercase italic text-xs tracking-widest mb-8 border-b-2 border-orange-500 w-fit pb-1">À Propos</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-500 italic">
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Règles de confidentialité</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Conditions de ventes</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Contactez-nous</Link></li>
            </ul>
          </div>

          {/* Contact Expert */}
          <div>
            <h4 className="text-[#003366] font-black uppercase italic text-xs tracking-widest mb-8 border-b-2 border-orange-500 w-fit pb-1">Contact</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-orange-500 text-xl">📞</span>
                <span className="text-lg font-black italic text-[#003366]">06 32 38 24 03</span>
              </div>
              <Link href="https://wa.me/212632382403" className="inline-flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-green-600 transition-all">
                <span className="text-xl">💬</span>
                WhatsApp Direct
              </Link>
            </div>
          </div>
        </div>

        {/* --- 3. Bottom Bar --- */}
        <div className="pt-10 border-t border-gray-100 flex flex-col md:row justify-between items-center gap-4 text-center">
          <p className="text-gray-400 text-[10px] font-bold tracking-[0.4em] uppercase">ALMAS VOYAGES — EXPERT VOYAGES © 2026</p>
          <div className="flex gap-6 text-[9px] font-black text-gray-300 tracking-widest italic">
             <span>SÉJOUR À LA CARTE</span>
             <span>VOYAGES DE LUXE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}