'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { FadeIn, StaggerContainer, FadeInStagger } from '@/components/motion';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="bg-[#F9F7F2] min-h-screen font-sans text-[#2D2926] overflow-x-hidden relative">
      
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#C07652]/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-20%] w-[40%] h-[40%] bg-[#2D2926]/10 blur-[100px] rounded-full"></div>
      </div>
    
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-start px-10 md:px-24 overflow-hidden">
        <Image
          src="/pictures/rabat.jpg"
          fill
          className="object-cover scale-110 animate-[zoom_20s_infinite_alternate]"
          alt={t("hero_alt")}
          priority
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-white max-w-4xl flex flex-col items-start space-y-6">
          <div className="space-y-4 text-left">
            <FadeIn direction="none" duration={1.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair leading-tight opacity-95">
                {t("hero_title")}
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <p className="text-lg md:text-xl font-playfair lowercase leading-relaxed opacity-80 max-w-xl">
                {t("hero_subtitle")}
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.8}>
            <div className="flex items-stretch">
              <div className="w-[3px] bg-[#C07652] mr-0" />
              <Link
                href="/contact"
                className="bg-[#C07652] text-white px-8 py-4 uppercase font-montserrat font-bold text-sm tracking-[0.2em] shadow-xl hover:bg-[#A35F3F] transition-all transform hover:translate-x-1 active:scale-95">
                {t("hero_button")}
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white to-white/0 animate-bounce" />
        </div>
      </section>
   
      {/* Why Bespoke Section */}
      <section className="relative z-10 border-t border-[#C07652]/10">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
          {/* Left Column: Light */}
          <div className="bg-[#F9F7F2] p-10 md:p-24 lg:p-32 flex flex-col justify-center space-y-10">
            <FadeIn direction="right">
              <div className="flex items-center space-x-6">
                <div className="w-[2px] h-6 bg-[#C07652]" />
                <span className="font-montserrat font-bold text-[13px] tracking-[0.4em] text-[#C07652] uppercase">
                  {t("why_bespoke.label")}
                </span>
              </div>
            </FadeIn>
            
            <div className="space-y-8">
              <FadeIn direction="right" delay={0.2}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair leading-[1.1] text-[#1A1814]">
                  {t("why_bespoke.title")}
                </h2>
              </FadeIn>
              <FadeIn direction="right" delay={0.4}>
                <p className="text-base md:text-lg font-playfair leading-relaxed text-[#1A1814]/70 max-w-xl">
                  {t("why_bespoke.body")}
                </p>
              </FadeIn>
              
              <FadeIn direction="up" delay={0.6} className="pt-6 border-t border-[#1A1814]/10">
                <p className="text-2xl md:text-3xl font-playfair italic text-[#C07652] leading-tight">
                  {t("why_bespoke.accent")}
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Right Column: Dark */}
          <div className="bg-[#1A1814] p-10 md:p-24 lg:p-32 text-white flex flex-col justify-center space-y-12">
            <FadeIn className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-playfair leading-tight max-w-md">
                {t("why_bespoke.dark_title")}
              </h3>
              <div className="w-full h-[1px] bg-[#C07652]/30" />
            </FadeIn>

            <FadeIn delay={0.2} className="space-y-6 font-playfair italic text-base md:text-lg opacity-80 leading-relaxed max-w-md">
              <p>{t("why_bespoke.dark_body_1")}</p>
              <p>{t("why_bespoke.dark_body_2")}</p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-3 gap-6 pt-8">
              <FadeInStagger className="space-y-1">
                <span className="text-3xl md:text-4xl font-playfair text-[#C07652] block">{t("why_bespoke.stat_1_num")}</span>
                <span className="text-[12px] md:text-[13px] uppercase tracking-widest opacity-50 font-montserrat">{t("why_bespoke.stat_1_label")}</span>
              </FadeInStagger>
              <FadeInStagger className="space-y-1">
                <span className="text-3xl md:text-4xl font-playfair text-[#C07652] block">{t("why_bespoke.stat_2_num")}</span>
                <span className="text-[12px] md:text-[13px] uppercase tracking-widest opacity-50 font-montserrat">{t("why_bespoke.stat_2_label")}</span>
              </FadeInStagger>
              <FadeInStagger className="space-y-1">
                <span className="text-3xl md:text-4xl font-playfair text-[#C07652] block">{t("why_bespoke.stat_3_num")}</span>
                <span className="text-[12px] md:text-[13px] uppercase tracking-widest opacity-50 font-montserrat">{t("why_bespoke.stat_3_label")}</span>
              </FadeInStagger>
            </StaggerContainer>
          </div>
        </div>
      </section>


     
      {/* Travel Styles Section */}
      <section className="bg-[#F9F7F2] py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1A1814]/10 pb-8">
            <div className="space-y-3">
              <span className="font-montserrat font-bold text-[13px] tracking-[0.4em] text-[#C07652] uppercase">
                {t("travel_styles.label")}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-[#1A1814]">
                {t("travel_styles.title")}
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {/* Style 1 */}
            <FadeInStagger className="space-y-6 group">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                <Image
                  src="/pictures/marrakech-culture.jpeg"
                  alt="Cultural Encounters"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-6 text-5xl font-playfair text-[#C07652] opacity-40">01</div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-playfair text-[#1A1814]">{t("travel_styles.style_1.title")}</h3>
                <p className="text-[#1A1814]/70 font-playfair text-base leading-relaxed">{t("travel_styles.style_1.body")}</p>
                <p className="text-[13px] font-montserrat font-bold tracking-widest text-[#C07652] uppercase pt-2">
                  {t("travel_styles.style_1.footer")}
                </p>
              </div>
            </FadeInStagger>

            {/* Style 2 */}
            <FadeInStagger className="space-y-6 group">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                <Image
                  src="/pictures/fesdes.jpg"
                  alt="Desert & Atlas Escapes"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-6 text-5xl font-playfair text-[#C07652] opacity-40">02</div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-playfair text-[#1A1814]">{t("travel_styles.style_2.title")}</h3>
                <p className="text-[#1A1814]/70 font-playfair text-base leading-relaxed">{t("travel_styles.style_2.body")}</p>
                <p className="text-[13px] font-montserrat font-bold tracking-widest text-[#C07652] uppercase pt-2">
                  {t("travel_styles.style_2.footer")}
                </p>
              </div>
            </FadeInStagger>

            {/* Style 3 */}
            <FadeInStagger className="space-y-6 group">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                <Image
                  src="/pictures/adventure.jpg"
                  alt="Adventure & Exploration"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-6 text-5xl font-playfair text-[#C07652] opacity-40">03</div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-playfair text-[#1A1814]">{t("travel_styles.style_3.title")}</h3>
                <p className="text-[#1A1814]/70 font-playfair text-base leading-relaxed">{t("travel_styles.style_3.body")}</p>
                <p className="text-[13px] font-montserrat font-bold tracking-widest text-[#C07652] uppercase pt-2">
                  {t("travel_styles.style_3.footer")}
                </p>
              </div>
            </FadeInStagger>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-32 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif italic text-[#2D2926] uppercase select-none">{t("The Journey Album")}</h2>
            <div className="w-16 h-[2px] bg-[#C07652] mx-auto mt-4 animate-pulse"></div>
            <p className="mt-6 text-gray-400 italic tracking-[0.5em] text-[12px] uppercase">{t("Snapshots from our latest expeditions")}</p>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[300px]">
            {[
              { src: "/pictures/gallery-mohammed.jpg", col: "md:col-span-2", row: "md:row-span-2" },
              { src: "/pictures/gallery-raul-2A8.jpg", col: "md:col-span-1", row: "md:row-span-1" },
              { src: "/pictures/gallery-kyriacos.jpg", col: "md:col-span-1", row: "md:row-span-2" },
              { src: "/pictures/gallery-sabrina.jpg", col: "md:col-span-1", row: "md:row-span-1" },
              { src: "/pictures/gallery-raul-atw.jpg", col: "md:col-span-1", row: "md:row-span-1" },  
              { src: "/pictures/gallery-raul-atw-2.jpg", col: "md:col-span-2", row: "md:row-span-1" },
            ].map((photo, index) => (
              <FadeInStagger 
                key={index} 
                className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] ${photo.col || ""} ${photo.row || ""}`}
              >
                <Image 
                  src={photo.src} 
                  fill 
                  className="object-cover transition-transform duration-[1.5s] hover:scale-110" 
                  alt={`Gallery Image ${index}`} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </FadeInStagger>
            ))}
          </StaggerContainer>
        </div>
      </section>
 
      <section className="relative z-10 border-t border-[#C07652]/10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Why Morocco */}
          <div className="bg-[#C06030] p-10 md:p-24 lg:p-32 text-white flex flex-col justify-between min-h-[80vh]">
            <FadeIn className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair italic leading-tight">
                  {t("why_morocco.title")}
                </h2>
                <p className="text-lg md:text-xl font-playfair italic opacity-90 leading-relaxed max-w-md">
                  {t("why_morocco.subtitle")}
                </p>
              </div>
              
              <div className="w-16 h-[1px] bg-white/40" />
              
              <div className="space-y-6 text-base md:text-lg font-playfair leading-relaxed max-w-lg opacity-90">
                <p>{t("why_morocco.body_1")}</p>
                <p>{t("why_morocco.body_2")}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} className="mt-16 pt-6 border-t border-white/20">
              <p className="font-montserrat text-[12px] md:text-[13px] tracking-[0.3em] uppercase opacity-80">
                {t("why_morocco.footer")}
              </p>
            </FadeIn>
          </div>

          {/* Right Column: Our Commitment */}
          <div className="bg-[#1A1412] p-10 md:p-24 lg:p-32 text-white flex flex-col space-y-16 min-h-[80vh]">
            <FadeIn className="space-y-6">
              <span className="font-montserrat text-[12px] md:text-[13px] tracking-[0.5em] uppercase text-[#C06030] font-bold">
                {t("commitment.label")}
              </span>
              <p className="text-xl md:text-2xl font-playfair leading-relaxed opacity-80 max-w-md">
                {t("commitment.subtitle")}
              </p>
            </FadeIn>

            <StaggerContainer className="space-y-10">
              {[1, 2, 3, 4, 5].map((num) => (
                <FadeInStagger key={num} className="flex gap-5 md:gap-8 items-start group">
                  <span className="text-[#C06030] font-montserrat font-bold text-xl md:text-2xl pt-0.5">
                    {num.toString().padStart(2, '0')}
                  </span>
                  <div className="space-y-2">
                    <h4 className="text-xl md:text-2xl font-playfair font-bold leading-tight group-hover:text-[#C07652] transition-colors">
                      {t(`commitment.item_${num}_title`)}
                    </h4>
                    <p className="text-[15px] md:text-[16px] text-gray-400 font-playfair leading-relaxed max-w-lg">
                      {t(`commitment.item_${num}_body`)}
                    </p>
                  </div>
                </FadeInStagger>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes zoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
        .animate-zoom {
          animation: zoom 20s infinite alternate ease-in-out;
        }
      `}</style>

    </main>
  );
}
