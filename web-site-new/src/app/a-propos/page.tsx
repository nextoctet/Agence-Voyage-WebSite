'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <main className="bg-[#F9F7F2] min-h-screen font-sans text-[#2D2926] overflow-x-hidden text-left">
      
     
      <section className="relative h-[95vh] flex flex-col px-8 md:px-20 lg:px-32 overflow-hidden bg-[#1A2222]">
        <Image 
          src="/pictures/about-ushero.png" 
          alt="About Us Hero" 
          fill 
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="w-full max-w-[1600px] mx-auto relative z-10 flex flex-col h-full py-12 md:py-16">
          
          <div className="flex justify-start">
            <span className="text-[#C07652] text-[13px] md:text-sm font-bold uppercase tracking-[0.8em]">
              {t("ABOUT US")}
            </span>
          </div>

          <div className="flex-grow flex flex-col justify-center relative">
            {/* The Orange Diamond */}
            <div className="absolute -left-8 md:-left-16 top-1/2 -translate-y-[200%] w-4 h-4 md:w-6 md:h-6 bg-[#C07652] rotate-45 hidden md:block"></div>
            
            <div className="max-w-5xl">
              <h1 className="text-5xl md:text-[6rem] lg:text-[7.5rem] font-serif leading-[0.95] text-[#F9F7F2] tracking-tighter mb-6">
                {t("We don't just plan")} <br />
                {t("trips to Morocco.")}
              </h1>
              
              <p className="text-[#C07652] font-serif italic text-3xl md:text-5xl lg:text-6xl">
                {t("We're from here. We know it inside out.")}
              </p>
            </div>
          </div>

          <div className="w-full border-t border-white/10 pt-8 flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-white/40 font-bold font-sans">
            <span className="opacity-80">welivemorocco.com</span>
            <span className="opacity-80">Marrakech, Morocco</span>
          </div>
        </div>
      </section>

      
      <section className="relative bg-white overflow-hidden">
        {/* Background Split for Desktop */}
        <div className="absolute inset-0 flex flex-col md:flex-row pointer-events-none">
          <div className="md:w-5/12 bg-[#EAE0D5]"></div>
          <div className="md:w-7/12 bg-white"></div>
        </div>

        <div className="relative max-w-[1600px] mx-auto flex flex-col md:flex-row min-h-[700px] z-10">
          {/* Left Column Content */}
          <div className="md:w-5/12 p-12 md:p-20 lg:p-24 flex flex-col justify-center">
            <span className="text-[#C07652] text-sm font-bold uppercase tracking-[0.4em] mb-12">
              {t("NOTRE HISTOIRE")}
            </span>
            <h2 className="text-5xl md:text-[5rem] font-serif leading-[1.1] text-[#2D2926] mb-16 tracking-tighter">
              {t("story_built_by")} <br />
              {t("story_moroccans")} <br />
              {t("story_for_the_world")}
            </h2>
            <div className="border-l-4 border-[#C07652] pl-10 py-2">
              <p className="text-[#2D2926]/70 text-lg leading-relaxed font-light">
                {t("story_intro_box")}
              </p>
            </div>
          </div>
          
          {/* Right Column Content */}
          <div className="md:w-7/12 p-12 md:p-20 lg:p-24 flex flex-col justify-center">
            <div className="max-w-2xl">
              <p className="text-[#2D2926] text-xl md:text-2xl font-light leading-relaxed mb-10">
                {t("story_right_p1")}
              </p>
              
              <hr className="border-[#2D2926]/10 mb-10" />
              
              <p className="text-[#2D2926] text-xl md:text-2xl font-light leading-relaxed mb-16">
                {t("story_right_p2")}
              </p>
              
              <div className="bg-[#C07652]/10 border-l-4 border-[#C07652] p-10">
                <p className="text-[#C07652] font-serif text-xl italic leading-relaxed">
                  {t("story_bottom_highlight")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Section: Who We Are & Languages */}
      <section className="py-24 bg-[#F9F7F2] px-8 md:px-20 lg:px-32">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Content */}
          <div className="lg:w-3/5 text-left">
            <span className="text-[#C07652] text-sm font-bold uppercase tracking-[0.4em] mb-8 block">
              {t("QUI SOMMES-NOUS")}
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-[#2D2926] mb-12 leading-[1.1]">
              {t("who_we_are_h1")} <br />
              {t("who_we_are_h2")}
            </h2>
            <div className="space-y-8 max-w-2xl">
              <p className="text-[#2D2926]/80 text-xl leading-relaxed">
                {t("who_we_are_p1")}
              </p>
              <p className="text-[#2D2926]/80 text-xl leading-relaxed">
                {t("who_we_are_p2")}
              </p>
            </div>
          </div>

          {/* Right Sidebar (Languages) */}
          <div className="lg:w-2/5 w-full">
            <div className="bg-[#EAE0D5] p-10 md:p-16 rounded-sm">
              <h3 className="text-3xl font-serif italic mb-10 text-[#2D2926]">
                {t("We speak your language")}
              </h3>
              <div className="space-y-4">
                {[
                  { name: t("English"), key: "English" },
                  { name: t("Français"), key: "Français" },
                  { name: t("Español"), key: "Español" },
                  { name: t("العربية"), key: "العربية" },
                  { name: t("Tamazight"), key: "Tamazight" },
                ].map((lang) => (
                  <div
                    key={lang.key}
                    className="bg-white p-6 border-l-4 border-[#C07652] flex items-center justify-between group cursor-default transition-all hover:translate-x-2"
                  >
                    <span className="text-xl font-medium text-[#2D2926]">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: How We Work */}
      <section className="py-24 bg-[#F9F7F2] px-8 md:px-20 lg:px-32">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-20">
            <span className="text-[#C07652] text-sm font-bold uppercase tracking-[0.4em] mb-8 block">
              {t("how_we_work_label")}
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-[#2D2926] leading-[1.1]">
              {t("how_we_work_title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "01", tKey: "how_we_work_01_t", dKey: "how_we_work_01_d" },
              { id: "02", tKey: "how_we_work_02_t", dKey: "how_we_work_02_d" },
              { id: "03", tKey: "how_we_work_03_t", dKey: "how_we_work_03_d" },
              { id: "04", tKey: "how_we_work_04_t", dKey: "how_we_work_04_d" },
              { id: "05", tKey: "how_we_work_05_t", dKey: "how_we_work_05_d" },
              { id: "06", tKey: "how_we_work_06_t", dKey: "how_we_work_06_d" },
            ].map((item) => (
              <div
                key={item.id}
                className="bg-[#F2EDE4] p-12 border-t-8 border-[#C07652] flex flex-col h-full transition-transform hover:-translate-y-1 duration-300"
              >
                <span className="text-6xl font-serif text-[#C07652] mb-10">
                  {item.id}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-[#2D2926] mb-8 leading-tight">
                  {t(item.tKey)}
                </h3>
                <p className="text-[#2D2926]/70 text-lg leading-relaxed">
                  {t(item.dKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Section: Where we take you */}
      <section className="py-24 bg-[#1A2222] px-8 md:px-20 lg:px-32">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-20">
            <span className="text-[#C07652] text-sm font-bold uppercase tracking-[0.4em] mb-8 block">
              {t("Where we take you")}
            </span>
            <h2 className="text-5xl md:text-7xl font-serif italic text-white leading-[1.1]">
              {t("where_we_take_you_title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
            {[
              { name: t("Marrakech"), desc: t("dest_marrakech_d") },
              { name: t("Fez"), desc: t("dest_fez_d") },
              { name: t("High Atlas Mountains"), desc: t("dest_atlas_d") },
              { name: t("The Sahara — Merzouga & Zagora"), desc: t("dest_sahara_d") },
              { name: t("Essaouira & Atlantic Coast"), desc: t("dest_essaouira_d") },
              { name: t("The Imperial Cities Circuit"), desc: t("dest_imperial_d") },
            ].map((dest, index) => (
              <div
                key={index}
                className="bg-white/5 p-10 border-l-4 border-[#C07652] hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-3xl font-serif text-white mb-6">
                  {dest.name}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  {dest.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section: Why people choose us */}
      <section className="flex flex-col md:flex-row min-h-[80vh]">
        {/* Left Column */}
        <div className="md:w-5/12 bg-[#C07652] p-12 md:p-20 lg:p-24 flex flex-col justify-center text-white">
          <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-[1.1]">
            {t("why_choose_us_title")}
          </h2>
          <div className="w-full border-t border-white/30 my-12"></div>
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-16 opacity-90">
            {t("why_choose_us_subtitle")}
          </p>
          
          <div className="mt-auto">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current text-white" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm uppercase tracking-[0.2em] font-bold opacity-70">
              {t("why_choose_us_footer")}
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-7/12 bg-[#F9F7F2] p-12 md:p-20 lg:p-24 flex flex-col justify-center">
          <div className="space-y-12">
            {[
              { id: "01", tKey: "why_choose_us_01_t", dKey: "why_choose_us_01_d" },
              { id: "02", tKey: "why_choose_us_02_t", dKey: "why_choose_us_02_d" },
              { id: "03", tKey: "why_choose_us_03_t", dKey: "why_choose_us_03_d" },
              { id: "04", tKey: "why_choose_us_04_t", dKey: "why_choose_us_04_d" },
              { id: "05", tKey: "why_choose_us_05_t", dKey: "why_choose_us_05_d" },
            ].map((item, index) => (
              <div key={item.id} className={`${index !== 0 ? 'border-t border-[#2D2926]/10 pt-12' : ''} flex gap-12`}>
                <span className="text-2xl font-serif italic text-[#C07652]">
                  {item.id}
                </span>
                <div className="flex-1">
                  <h3 className="text-3xl font-serif text-[#2D2926] mb-6">
                    {t(item.tKey)}
                  </h3>
                  <p className="text-[#2D2926]/70 text-lg leading-relaxed">
                    {t(item.dKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section: B2B / Partners */}
      <section className="py-24 bg-[#F9F7F2] px-8 md:px-20 lg:px-32 border-t border-[#2D2926]/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-4xl mb-20">
            <span className="text-[#C07652] text-sm font-bold uppercase tracking-[0.4em] mb-8 block">
              {t("b2b_label")}
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-[#2D2926] mb-12 leading-[1.1]">
              {t("b2b_title")}
            </h2>
            <p className="text-[#2D2926]/70 text-xl md:text-2xl leading-relaxed font-light">
              {t("b2b_desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { tKey: "b2b_card_01_t", dKey: "b2b_card_01_d" },
              { tKey: "b2b_card_02_t", dKey: "b2b_card_02_d" },
              { tKey: "b2b_card_03_t", dKey: "b2b_card_03_d" },
            ].map((card, index) => (
              <div key={index} className="bg-white p-10 md:p-12 border-t-4 border-[#C07652] shadow-sm flex flex-col h-full">
                <div className="w-4 h-4 bg-[#C07652] rounded-full mb-10"></div>
                <h3 className="text-2xl md:text-3xl font-serif text-[#2D2926] mb-8 leading-tight">
                  {t(card.tKey)}
                </h3>
                <p className="text-[#2D2926]/70 text-lg leading-relaxed font-light">
                  {t(card.dKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Dark CTA Section */}
      <section className="bg-[#1A2222] py-24 px-8 md:px-20 lg:px-32 relative overflow-hidden">
        {/* Subtle orange line on the left side, matching image if it's there */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C07652] opacity-50"></div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="max-w-4xl">
            <span className="text-[#C07652] text-sm font-bold uppercase tracking-[0.4em] mb-12 block">
              {t("cta_label")}
            </span>
            
            <h2 className="text-5xl md:text-8xl font-serif text-white mb-12 leading-[1.05]">
              {t("cta_title")}
            </h2>
            
            <p className="text-white/60 text-xl md:text-2xl leading-relaxed font-light mb-16 max-w-3xl">
              {t("cta_desc")}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-24">
              <Link 
                href="/personnaliser-experience"
                className="bg-[#C07652] text-white px-10 py-5 rounded-sm font-bold text-lg inline-flex items-center justify-center hover:bg-[#A65E3F] transition-colors group"
              >
                {t("cta_btn_primary")}
                <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                href="/contact"
                className="border border-[#C07652] text-white px-10 py-5 rounded-sm font-bold text-lg inline-flex items-center justify-center hover:bg-white/5 transition-colors group"
              >
                {t("cta_btn_secondary")}
                <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
