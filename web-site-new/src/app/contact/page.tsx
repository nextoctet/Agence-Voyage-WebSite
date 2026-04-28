'use client';
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <main className="bg-[#F9F7F2] min-h-screen py-24 px-8 font-sans text-[#2D2926]">
      <div className="max-w-7xl mx-auto">
        
        {/* hero Section */}
        <div className="text-center mb-24">
          <span className="text-[#C07652] font-bold text-[10px] uppercase tracking-[0.5em] italic mb-6 block">
            {t("WeLiveMorocco")}
          </span>
          <h1 className="text-5xl md:text-8xl font-serif italic leading-none tracking-tighter mb-8">
            {t("Contactez-nous")}
          </h1>
          <div className="w-24 h-1 bg-[#C07652] mx-auto mb-8"></div>
          <p className="text-gray-500 text-xl font-light italic max-w-2xl mx-auto leading-relaxed">
            {t("Notre équipe d'experts à Témara est à votre disposition pour organiser votre prochain voyage sur mesure.")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Informations de Contact */}
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-serif italic text-[#2D2926] uppercase mb-12 tracking-tight">
                {t("Informations")}
              </h2>
              
              <div className="space-y-10">
                {/* Localisation */}
                <div className="flex items-center gap-8 group">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-xl shadow-sm border border-gray-100 group-hover:bg-[#2D2926] group-hover:text-white transition-all duration-500">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold text-[#C07652] uppercase text-[10px] tracking-widest mb-1">{t("Notre Agence")}</h4>
                    <p className="text-[#2D2926] font-serif italic text-lg">{t("Centre Ville, Témara, Maroc")}</p>
                  </div>
                </div>

                {/* WhatsApp & Téléphone */}
                <a href="https://wa.me/2126XXXXXXXX" className="flex items-center gap-8 group cursor-pointer text-left">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-xl shadow-sm border border-gray-100 group-hover:bg-[#C07652] group-hover:text-white transition-all duration-500">
                    💬
                  </div>
                  <div>
                    <h4 className="font-bold text-[#C07652] uppercase text-[10px] tracking-widest mb-1">{t("WhatsApp & Tel")}</h4>
                    <p className="text-[#2D2926] font-serif italic text-lg">{t("+212 6 XX XX XX XX")}</p>
                  </div>
                </a>

                {/* Email */}
                <div className="flex items-center gap-8 group">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-xl shadow-sm border border-gray-100 group-hover:bg-[#2D2926] group-hover:text-white transition-all duration-500">
                    📧
                  </div>
                  <div>
                    <h4 className="font-bold text-[#C07652] uppercase text-[10px] tracking-widest mb-1">{t("Email")}</h4>
                    <p className="text-[#2D2926] font-serif italic text-lg">{t("contact@welivemorocco.com")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Horaires */}
            <div className="bg-[#2D2926] p-12 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C07652]/10 rounded-full -mr-16 -mt-16"></div>
              <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] mb-8 text-[#C07652] border-b border-[#C07652]/20 pb-4">
                {t("Heures d'ouverture")}
              </h4>
              <div className="space-y-4 text-white/80 font-light italic">
                <div className="flex justify-between items-center border-b border-white/5 py-3">
                  <span>{t("Lundi - Vendredi")}</span>
                  <span className="font-bold text-white">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span>{t("Samedi")}</span>
                  <span className="font-bold text-white">09:00 - 13:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Formulaire de Contact */}
          <div className="bg-white p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
            <h3 className="text-3xl font-serif italic text-[#2D2926] mb-8">{t("Envoyez-nous un message")}</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">{t("Nom Complet")}</label>
                  <input type="text" className="w-full bg-[#F9F7F2] border-none p-4 focus:ring-1 focus:ring-[#C07652] transition-all outline-none italic" placeholder="e.g. Sarah Mansouri" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">{t("Email")}</label>
                  <input type="email" className="w-full bg-[#F9F7F2] border-none p-4 focus:ring-1 focus:ring-[#C07652] transition-all outline-none italic" placeholder="sarah@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">{t("Sujet")}</label>
                <input type="text" className="w-full bg-[#F9F7F2] border-none p-4 focus:ring-1 focus:ring-[#C07652] transition-all outline-none italic" placeholder={t("Planification de voyage, Questions...")} />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">{t("Votre Message")}</label>
                <textarea rows={5} className="w-full bg-[#F9F7F2] border-none p-4 focus:ring-1 focus:ring-[#C07652] transition-all outline-none italic resize-none" placeholder={t("Dites-nous en plus sur vos envies...")}></textarea>
              </div>
              <button type="submit" className="w-full bg-[#2D2926] text-white py-5 uppercase font-bold text-[10px] tracking-[0.3em] hover:bg-[#C07652] transition-all duration-500 shadow-xl">
                {t("Envoyer le message")}
              </button>
            </form>
          </div>

        </div>

        {/* 3. Section Google Maps*/}
        <div className="mt-32 h-[500px] overflow-hidden relative border border-gray-200 bg-white p-2 shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13238.411651871216!2d-6.9272!3d33.9189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7134371707963%3A0x6e9f9024f9958e98!2sT%C3%A9mara!5e0!3m2!1sfr!2sma!4v1713880000000!5m2!1sfr!2sma" 
              className="w-full h-full grayscale-[50%] hover:grayscale-0 transition-all duration-1000"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
            <div className="absolute bottom-8 left-8 right-8 bg-[#2D2926] p-6 text-white text-center max-w-xs mx-auto">
               <p className="text-[10px] font-bold uppercase tracking-[0.4em]">{t("Nous trouver à Témara")}</p>
            </div>
        </div>
        
      </div>
    </main>
  );
}