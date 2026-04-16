'use client';
import { useTranslation } from "react-i18next";
export default function ContactPage() {
  const { t } = useTranslation();
  return (
    <main className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-orange-500 font-black text-xs uppercase tracking-[0.3em] italic mb-4 block">{t("Expert Voyages")}</span>
          <h1 className="text-5xl md:text-7xl font-black text-[#003366] uppercase italic tracking-tighter">
            {t("Contactez-nous")}
          </h1>
          <p className="text-gray-500 text-xl mt-4 max-w-2xl mx-auto">
            {t("Notre équipe d'experts à Témara est à votre disposition pour organiser votre prochain voyage.")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* 1. Informations de Contact */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black text-[#003366] uppercase italic mb-8">{t("Informations")}</h2>
              
              <div className="space-y-8">
                {/* Localisation - Témara */}
                <div className="flex items-center gap-6 group">
                  <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:bg-[#003366] group-hover:text-white transition-all duration-300">
                    📍
                  </div>
                  <div>
                    <h4 className="font-black text-[#003366] uppercase text-sm italic">{t("Notre Agence")}</h4>
                    <p className="text-gray-500 font-medium leading-tight">{t("Centre Ville, Témara, Maroc")}</p>
                  </div>
                </div>

                {/* WhatsApp / Phone - Nouveau Numéro */}
                <a href="https://wa.me/212682838530" className="flex items-center gap-6 group cursor-pointer">
                  <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                    💬
                  </div>
                  <div>
                    <h4 className="font-black text-[#003366] uppercase text-sm italic">{t("WhatsApp & Tel")}</h4>
                    <p className="text-gray-500 font-medium">{t("+212 6 82 83 85 30")}</p>
                  </div>
                </a>

                {/* Email - Nouveau Gmail */}
                <div className="flex items-center gap-6 group">
                  <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    📧
                  </div>
                  <div>
                    <h4 className="font-black text-[#003366] uppercase text-sm italic">{t("Email")}</h4>
                    <p className="text-gray-500 font-medium">{t("contact@expertvoyages.com")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horaire Section */}
            <div className="bg-[#003366] p-8 rounded-[2.5rem] text-white shadow-xl">
              <h4 className="font-black uppercase italic mb-4 text-orange-500">{t("Heures d'ouverture")}</h4>
              <div className="flex justify-between border-b border-white/10 py-2">
                <span>{t("Lundi - Vendredi")}</span>
                <span className="font-bold">09:00 - 18:30</span>
              </div>
              <div className="flex justify-between py-2">
                <span>{t("Samedi")}</span>
                <span className="font-bold">09:00 - 13:00</span>
              </div>
            </div>
          </div>

          {/* 2. Google Maps Section */}
          <div className="h-[600px] rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-gray-50">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13239.563068593414!2d-6.918933!3d33.918991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda70df650000001%3A0x10b7b6c6b3e7!2sTemara!5e0!3m2!1sfr!2sma!4v1712830000000!5m2!1sfr!2sma" 
               className="w-full h-full hover:scale-105 transition-all duration-700"
               style={{ border: 0 }}
               allowFullScreen={true}
               loading="lazy"
             ></iframe>
          </div>

        </div>
      </div>
    </main>
  );
}
