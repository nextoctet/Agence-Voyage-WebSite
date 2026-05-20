'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { FadeIn, StaggerContainer, FadeInStagger } from '@/components/motion';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="bg-[#F9F7F2] min-h-screen font-sans text-[#2D2926] overflow-x-hidden relative">
      
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#C07652]/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-20%] w-[40%] h-[40%] bg-[#2D2926]/10 blur-[100px] rounded-full"></div>
      </div>
    
      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100svh-64px)] items-center justify-center overflow-hidden px-6 text-center md:min-h-[calc(100svh-88px)]">
        <Image
          src="/pictures/fezz.png"
          fill
          className="object-cover scale-110 animate-[zoom_20s_infinite_alternate]"
          alt="Morocco"
          priority
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex max-w-4xl flex-col items-center space-y-8 text-white">
          <FadeIn direction="none" duration={1.2}>
            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-playfair leading-[1.1] tracking-tight opacity-95">
              {t("hero_title")}
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <p className="max-w-2xl text-lg font-playfair leading-relaxed opacity-90 md:text-2xl">
              {t("hero_subtitle")}
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.8}>
            <Link
              href="/personnaliser-experience"
              className="inline-block bg-[#C07652] px-8 py-4 text-sm font-montserrat font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#A35F3F] active:scale-95">
              {t("hero_button")}
            </Link>
          </FadeIn>
        </div>
      </section>
   
      {/* Why Bespoke Section */}
      <section className="relative z-10 border-t border-[#C07652]/10 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Left Column: Light */}
          <div className="p-10 md:p-20 lg:p-32 flex flex-col justify-center space-y-10">
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
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-playfair leading-[1.1] text-[#1A1814]">
                  {t("why_bespoke.title")}
                </h2>
              </FadeIn>
              <div className="space-y-6">
                <FadeIn direction="right" delay={0.4}>
                  <p className="text-lg font-playfair leading-relaxed text-[#1A1814]/70 max-w-xl">
                    {t("why_bespoke.body")}
                  </p>
                </FadeIn>
                <FadeIn direction="right" delay={0.6}>
                  <p className="text-xl font-playfair italic text-[#C07652] leading-relaxed border-l-2 border-[#C07652]/20 pl-6">
                    {t("why_bespoke.accent")}
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Right Column: Dark */}
          <div className="bg-[#1A1814] p-10 md:p-20 lg:p-32 text-white flex flex-col justify-center space-y-12">
            <FadeIn className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-playfair leading-relaxed opacity-90">
                {t("why_bespoke.dark_title")}
              </h3>
              <div className="w-full h-[1px] bg-[#C07652]/30" />
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              <FadeInStagger className="space-y-1">
                <span className="text-3xl font-playfair text-[#C07652] block">{t("why_bespoke.stat_1_num")}</span>
                <span className="text-[11px] uppercase tracking-widest opacity-50 font-montserrat leading-tight block">{t("why_bespoke.stat_1_label")}</span>
              </FadeInStagger>
              <FadeInStagger className="space-y-1">
                <span className="text-3xl font-playfair text-[#C07652] block">{t("why_bespoke.stat_2_num")}</span>
                <span className="text-[11px] uppercase tracking-widest opacity-50 font-montserrat leading-tight block">{t("why_bespoke.stat_2_label")}</span>
              </FadeInStagger>
              <FadeInStagger className="space-y-1">
                <span className="text-3xl font-playfair text-[#C07652] block">{t("why_bespoke.stat_3_num")}</span>
                <span className="text-[11px] uppercase tracking-widest opacity-50 font-montserrat leading-tight block">{t("why_bespoke.stat_3_label")}</span>
              </FadeInStagger>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-20 lg:px-32 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20 space-y-4">
            <span className="font-montserrat font-bold text-[13px] tracking-[0.4em] text-[#C07652] uppercase block">
              {t("how_it_works.label")}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-[#1A1814]">
              {t("how_it_works.title")}
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[1, 2, 3, 4].map((step) => (
              <FadeInStagger key={step} className="relative group">
                <div className="mb-8 text-5xl font-playfair text-[#C07652]/10 group-hover:text-[#C07652]/30 transition-colors duration-500">0{step}</div>
                <h3 className="text-xl font-playfair mb-4 text-[#1A1814]">{t(`how_it_works.step_${step}_title`)}</h3>
                <p className="text-[#1A1814]/60 font-playfair leading-relaxed">{t(`how_it_works.step_${step}_body`)}</p>
              </FadeInStagger>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What We Personalize Section */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-20 lg:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <FadeIn className="lg:col-span-1 space-y-8">
              <div className="space-y-4">
                <span className="font-montserrat font-bold text-[13px] tracking-[0.4em] text-[#C07652] uppercase block">
                  {t("personalize.label")}
                </span>
                <h2 className="text-4xl md:text-5xl font-playfair text-[#1A1814] leading-tight">
                  {t("personalize.title")}
                </h2>
              </div>
              <Link 
                href="/personnaliser-experience"
                className="inline-block text-xs font-montserrat font-bold tracking-[0.2em] uppercase border-b border-[#C07652] pb-2 text-[#C07652] hover:text-[#1A1814] hover:border-[#1A1814] transition-all"
              >
                {t("hero_button")}
              </Link>
            </FadeIn>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <FadeIn key={item} className="space-y-3">
                  <h3 className="text-lg font-playfair font-bold text-[#1A1814]">{t(`personalize.item_${item}_title`)}</h3>
                  <p className="text-[#1A1814]/70 font-playfair leading-relaxed">{t(`personalize.item_${item}_body`)}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Travel Styles Section */}
      <section className="relative z-10 bg-[#1A1814] py-24 md:py-32 px-6 md:px-12 lg:px-24 text-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <FadeIn className="space-y-4">
            <span className="font-montserrat font-bold text-[13px] tracking-[0.4em] text-[#C07652] uppercase block">
              {t("travel_styles.label")}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair">
              {t("travel_styles.title")}
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((style) => (
              <FadeInStagger key={style} className="group space-y-8">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#2D2926]">
                  <Image
                    src={style === 1 ? "/pictures/marrakech-culture.jpeg" : style === 2 ? "/pictures/agfay.jpg" : "/pictures/atlas.jpg"}
                    alt={t(`travel_styles.style_${style}.title`)}
                    fill
                    className="object-cover opacity-70 group-hover:scale-110 transition-transform duration-1000 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1814] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#C07652] mb-3 block">{t(`travel_styles.style_${style}.subtitle`)}</span>
                    <h3 className="text-3xl font-playfair">{t(`travel_styles.style_${style}.title`)}</h3>
                  </div>
                </div>
                <div className="space-y-6">
                  <p className="text-white/60 font-playfair text-base leading-relaxed h-24 overflow-hidden">
                    {t(`travel_styles.style_${style}.body`)}
                  </p>
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-[11px] font-montserrat font-bold tracking-[0.2em] text-[#C07652] uppercase">
                      {t(`travel_styles.style_${style}.footer`)}
                    </p>
                  </div>
                </div>
              </FadeInStagger>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-20 lg:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <FadeIn className="lg:col-span-1 space-y-8">
              <div className="space-y-4">
                <span className="font-montserrat font-bold text-[13px] tracking-[0.4em] text-[#C07652] uppercase block">
                  {t("commitment.label")}
                </span>
                <p className="text-2xl md:text-3xl font-playfair text-[#1A1814] leading-relaxed">
                  {t("commitment.title")}
                </p>
              </div>
              <div className="text-[11px] font-montserrat font-bold tracking-[0.2em] text-black/40 uppercase">
                {t("commitment.satisfaction")}
              </div>
            </FadeIn>

            <div className="lg:col-span-2 space-y-16">
              {[1, 2, 3, 4, 5].map((item) => (
                <FadeIn key={item} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <h3 className="text-lg font-playfair font-bold text-[#1A1814]">{t(`commitment.item_${item}_title`)}</h3>
                  <div className="md:col-span-2">
                    <p className="text-[#1A1814]/70 font-playfair leading-relaxed">
                      {t(`commitment.item_${item}_body`)}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-32 md:py-48 px-6 bg-[#F9F7F2] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/pictures/marocc.png"
            alt="Pattern"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
          <FadeIn className="space-y-6">
            <span className="font-montserrat font-bold text-[13px] tracking-[0.4em] text-[#C07652] uppercase block">
              {t("cta.label")}
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-[#1A1814] leading-tight">
              {t("cta.title")}
            </h2>
            <p className="text-lg md:text-xl font-playfair text-[#1A1814]/70 max-w-2xl mx-auto leading-relaxed">
              {t("cta.body")}
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/personnaliser-experience"
              className="w-full sm:w-auto bg-[#C07652] px-10 py-5 text-sm font-montserrat font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#A35F3F] active:scale-95 shadow-xl">
              {t("cta.button_1")}
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto border border-[#1A1814] px-10 py-5 text-sm font-montserrat font-bold uppercase tracking-[0.2em] text-[#1A1814] transition-all hover:bg-[#1A1814] hover:text-white active:scale-95">
              {t("cta.button_2")}
            </Link>
          </FadeIn>
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
