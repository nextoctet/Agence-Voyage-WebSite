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
      <section className="relative flex min-h-[calc(100svh-64px)] items-end justify-start overflow-hidden px-6 pb-14 pt-24 sm:min-h-[calc(100svh-72px)] sm:px-8 sm:pb-16 sm:pt-28 md:min-h-[calc(100svh-88px)] md:items-center md:px-16 md:pb-20 md:pt-24 lg:px-24">
        <Image
          src="/pictures/rabat.jpg"
          fill
          className="object-cover object-[62%_center] scale-110 animate-[zoom_20s_infinite_alternate] md:object-center"
          alt={t("hero_alt")}
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/15 md:from-black/60 md:via-black/28 md:to-transparent" />

        <div className="relative z-10 flex max-w-[42rem] flex-col items-start space-y-5 text-white md:space-y-6">
          <div className="space-y-3 text-left md:space-y-4">
            <FadeIn direction="none" duration={1.2}>
              <h1 className="text-[clamp(2.9rem,11vw,5.6rem)] font-playfair leading-[0.92] tracking-[-0.04em] opacity-95">
                {t("hero_title")}
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <p className="max-w-[34rem] text-base font-playfair lowercase leading-[1.65] opacity-85 sm:text-lg md:text-xl lg:text-[1.35rem]">
                {t("hero_subtitle")}
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.8}>
            <div className="flex items-stretch">
              <div className="w-[3px] bg-[#C07652] mr-0" />
              <Link
                href="/contact"
                className="rounded-r-full bg-[#C07652] px-6 py-3 text-[11px] font-montserrat font-bold uppercase tracking-[0.18em] text-white shadow-xl transition-all hover:translate-x-1 hover:bg-[#A35F3F] active:scale-95 sm:px-8 sm:py-4 sm:text-sm">
                {t("hero_button")}
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
          <div className="h-14 w-[1px] animate-bounce bg-gradient-to-b from-white/0 via-white to-white/0" />
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
