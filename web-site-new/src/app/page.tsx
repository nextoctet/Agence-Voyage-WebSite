'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  const destinationsHome = [
    { 
      id: "casablanca", 
      title: t("Casablanca"), 
      subtitle: t("La Ville Blanche"), 
      price: t("À partir de 1.200 Dhs"), 
      img: "/casa.jpg" 
    },
    { 
      id: "marrakech", 
      title: t("Marrakech"), 
      subtitle: t("La Ville Ocre"), 
      price: t("À partir de 2.500 Dhs"), 
      img: "/marrakech.jpg" 
    },
    { 
      id: "tanger", 
      title: t("Tanger"), 
      subtitle: t("La Perle du Nord"), 
      price: t("À partir de 1.800 Dhs"), 
      img: "/tanger.jpg" 
    },
    { 
      id: "fes", 
      title: t("Fès"), 
      subtitle: t("La Capitale Spirituelle"), 
      price: t("À partir de 1.500 Dhs"), 
      img: "/fes.jpg" 
    }
  ];

  return (
    <main className="bg-white min-h-screen font-sans text-[#003366]">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/monde-du-voyage.webp"
            fill
            className="object-cover"
            alt={t("Hero Morocco")}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#003366]/70 via-[#003366]/30 to-white"></div>
        </div>
        <div className="relative z-10 text-white px-6">
          <span className="text-orange-500 font-black uppercase tracking-[0.5em] text-xs italic mb-6 block drop-shadow-lg underline decoration-2">
            {t("Explorez le Maroc Autrement")}
          </span>
          <h1 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
            {t("WELIVE")} <br /> <span className="text-orange-500 italic">{t("MOROCCO")}</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <Link href="/design-experience" className="bg-white text-[#003366] px-10 py-5 uppercase font-black text-[10px] tracking-widest hover:bg-orange-500 hover:text-white transition-all shadow-2xl border-2 border-white hover:border-orange-500">
              {t("Design Your Experience")}
            </Link>
            <button 
              onClick={() => window.scrollTo({top: 900, behavior: 'smooth'})} 
              className="bg-orange-500 text-white px-10 py-5 uppercase font-black text-[10px] tracking-widest hover:bg-[#003366] transition-all shadow-2xl"
            >
              {t("Nos Destinations")}
            </button>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="py-16 bg-white border-b border-gray-100 relative z-20 -mt-10 mx-4 md:mx-10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "04", label: t("Villes Impériales") },
            { val: "100%", label: t("Expérience Locale") },
            { val: "24/7", label: t("Accompagnement") },
            { val: "2017", label: t("Depuis") }
          ].map((stat, i) => (
            <div key={i} className="border-r last:border-none border-gray-100">
              <p className="text-3xl font-black text-[#003366]">{stat.val}</p>
              <p className="text-[9px] uppercase font-black tracking-widest text-orange-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. GRILLE DES DESTINATIONS */}
      <section className="py-32 max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <h2 className="text-5xl font-black uppercase italic border-l-[10px] border-orange-500 pl-8 leading-none">
            {t("Nos")} <br/><span className="text-orange-500">{t("Destinations")}</span>
          </h2>
          <p className="text-gray-400 italic max-w-sm text-right text-sm">
            {t("Découvrez la magie du Maroc à travers nos circuits de départ exclusifs.")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {destinationsHome.map((dest) => (
            <Link href={`/destinations/${dest.id}`} key={dest.id} className="group relative h-[500px] overflow-hidden">
                <Image 
                  src={dest.img} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt={dest.title}
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-orange-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-2">{dest.subtitle}</p>
                  <h3 className="text-5xl font-black uppercase italic">{dest.title}</h3>
                  <p className="mt-4 font-light text-lg italic">{dest.price}</p>
                </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}