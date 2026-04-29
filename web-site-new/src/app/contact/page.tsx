'use client';
import { useState } from 'react';
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [nationality, setNationality] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; message?: string }>(null);
  const contactEmail = 'contact@welivemorocco.com';

  const buildMailtoLink = () => {
    const body = [
      `Nom complet: ${fullName}`,
      `Email: ${email}`,
      `Nationalité: ${nationality || '-'}`,
      `Téléphone: ${phone || '-'}`,
      `Budget: ${budget || '-'}`,
      `Sujet: ${subject}`,
      '',
      message,
    ].join('\n');
    const subjectText = subject || 'Contact via site web';
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(body)}`;
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    if (!fullName || !email || !subject || !message) {
      setStatus({ ok: false, message: 'Veuillez remplir tous les champs requis.' });
      setLoading(false);
      return;
    }

    if (typeof window !== 'undefined') {
      const gmailLink = buildMailtoLink();
      window.open(gmailLink, '_blank');
    }

    setLoading(false);
  }

  return (
    <main className="bg-[#F9F7F2] min-h-screen py-24 px-4 md:px-12 lg:px-24 font-sans text-[#2D2926] max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* hero Section */}
        <div className="text-center mb-24 px-2 md:px-0">
          <span className="text-[#C07652] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.5em] italic mb-6 block">
            {t("WeLiveMorocco")}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif italic leading-none tracking-tighter mb-8">
            {t("Contactez-nous")}
          </h1>
          <div className="w-24 h-1 bg-[#C07652] mx-auto mb-8"></div>
          <p className="text-base md:text-lg lg:text-xl font-light italic max-w-3xl mx-auto leading-relaxed">
            {t("Notre équipe d'experts à Témara est à votre disposition pour organiser votre prochain voyage sur mesure.")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 md:gap-14 lg:gap-20 items-start">
          
          {/* Informations de Contact */}
          <div className="space-y-12 md:space-y-14">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-[#2D2926] uppercase mb-10 md:mb-12 tracking-tight">
                {t("Informations")}
              </h2>
              
              <div className="space-y-8 md:space-y-10">
                {/* Localisation */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 group">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-xl shadow-sm border border-gray-100 group-hover:bg-[#2D2926] group-hover:text-white transition-all duration-500">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold text-[#C07652] uppercase text-[10px] tracking-widest mb-1">{t("Notre Agence")}</h4>
                    <p className="text-[#2D2926] font-serif italic text-lg">{t("Centre Ville, Témara, Maroc")}</p>
                  </div>
                </div>

                {/* WhatsApp & Téléphone */}
                <a href="https://wa.me/2126XXXXXXXX" className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 group cursor-pointer text-left">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-xl shadow-sm border border-gray-100 group-hover:bg-[#C07652] group-hover:text-white transition-all duration-500">
                    💬
                  </div>
                  <div>
                    <h4 className="font-bold text-[#C07652] uppercase text-[10px] tracking-widest mb-1">{t("WhatsApp & Tel")}</h4>
                    <p className="text-[#2D2926] font-serif italic text-lg">{t("+212 6 XX XX XX XX")}</p>
                  </div>
                </a>

                {/* Email */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 group">
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
            <div className="bg-[#2D2926] p-10 md:p-12 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C07652]/10 rounded-full -mr-16 -mt-16"></div>
              <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] mb-6 md:mb-8 text-[#C07652] border-b border-[#C07652]/20 pb-4">
                {t("Heures d'ouverture")}
              </h4>
              <div className="space-y-4 text-white/80 font-light italic">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5 py-3 gap-2 md:gap-0">
                  <span>{t("Lundi - Vendredi")}</span>
                  <span className="font-bold text-white">09:00 - 18:00</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-3 gap-2 md:gap-0">
                  <span>{t("Samedi")}</span>
                  <span className="font-bold text-white">09:00 - 13:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Formulaire de Contact */}
          <div className="bg-white p-6 md:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-[#2D2926] mb-8">
              {t("Envoyez-nous un message")}
            </h3>
            <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label className="block text-[10px] md:text-xs uppercase font-bold tracking-widest text-gray-400 mb-2">{t("Nom Complet")}</label>
                  <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" className="w-full bg-[#F9F7F2] border-none p-4 focus:ring-1 focus:ring-[#C07652] transition-all outline-none italic" placeholder="e.g. Sarah Mansouri" required />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">{t("Email")}</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full bg-[#F9F7F2] border-none p-4 focus:ring-1 focus:ring-[#C07652] transition-all outline-none italic" placeholder="sarah@email.com" required />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">{t("Sujet")}</label>
                <input name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} type="text" className="w-full bg-[#F9F7F2] border-none p-4 focus:ring-1 focus:ring-[#C07652] transition-all outline-none italic" placeholder={t("Planification de voyage, Questions...")} required aria-required="true" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">{t("Nationalité")}</label>
                  <input value={nationality} onChange={(e) => setNationality(e.target.value)} type="text" className="w-full bg-[#F9F7F2] border-none p-4 focus:ring-1 focus:ring-[#C07652] transition-all outline-none italic" placeholder={t("ex. Marocaine")} />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">{t("Téléphone")}</label>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="w-full bg-[#F9F7F2] border-none p-4 focus:ring-1 focus:ring-[#C07652] transition-all outline-none italic" placeholder={t("06XXXXXXXX")} />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">{t("Budget")}</label>
                <input value={budget} onChange={(e) => setBudget(e.target.value)} type="text" className="w-full bg-[#F9F7F2] border-none p-4 focus:ring-1 focus:ring-[#C07652] transition-all outline-none italic" placeholder={t("Ex. 6000 DH - 12000 DH")} />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">{t("Votre Message")}</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="w-full bg-[#F9F7F2] border-none p-4 focus:ring-1 focus:ring-[#C07652] transition-all outline-none italic resize-none" placeholder={t("Dites-nous en plus sur vos envies...")} required></textarea>
              </div>
              <button disabled={loading} type="submit" className="w-full bg-[#2D2926] text-white py-5 uppercase font-bold text-[11px] md:text-[12px] tracking-[0.3em] hover:bg-[#C07652] transition-all duration-500 shadow-xl disabled:opacity-50">
                {loading ? 'Envoi...' : t("Envoyer le message")}
              </button>
              {status && (
                <p className={`mt-4 text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.message}</p>
              )}
            </form>
          </div>

        </div>

        {/* 3. Section Google Maps*/}
        <div className="mt-24 md:mt-28 h-[320px] md:h-[420px] lg:h-[500px] overflow-hidden relative border border-gray-200 bg-white p-2 shadow-xl">
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