'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function DesignExperience() {
  const { t } = useTranslation();

  return (
    <main className="bg-white min-h-screen font-sans text-[#003366] overflow-x-hidden text-left">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-[85vh] flex items-center justify-start px-8 md:px-24 border-b-[16px] border-orange-500">
        <Image 
          src="/monde-du-voyage.webp" 
          fill 
          className="object-cover brightness-[0.8]" 
          alt={t("Design your journey")} 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="relative z-10 text-white max-w-4xl">
          <p className="uppercase tracking-[0.6em] text-sm font-black mb-8 italic opacity-90">
            {t("NOT A PACKAGE.")}
          </p>
          <h1 className="text-6xl md:text-[9rem] font-black leading-[0.85] mb-12 tracking-tighter uppercase">
            {t("A journey")} <br /> 
            <span className="text-orange-500 italic">{t("designed")}</span> <br />
            {t("for you.")}
          </h1>
          <p className="text-xl md:text-2xl font-light italic mb-12 opacity-80 border-l-4 border-orange-500 pl-8">
            {t("Every detail of your Morocco trip is designed from scratch around your dates, interests, budget, and travel style. No shared groups. No fixed programmes.")}
          </p>
        </div>
      </section>

      {/* SECTION 2: FEATURES */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-6">
            <span className="text-4xl text-orange-500">✦</span>
            <h3 className="text-2xl font-black uppercase italic tracking-tighter">{t("100% Private")}</h3>
            <p className="text-sm text-gray-500 italic leading-relaxed">{t("Your journey, your group, your pace. Never shared with strangers.")}</p>
          </div>
          <div className="space-y-6">
            <span className="text-4xl text-orange-500">◎</span>
            <h3 className="text-2xl font-black uppercase italic tracking-tighter">{t("Built from zero")}</h3>
            <p className="text-sm text-gray-500 italic leading-relaxed">{t("We start with a blank page and build around your wishes.")}</p>
          </div>
          <div className="space-y-6">
            <span className="text-4xl text-orange-500">▲</span>
            <h3 className="text-2xl font-black uppercase italic tracking-tighter">{t("Expert on ground")}</h3>
            <p className="text-sm text-gray-500 italic leading-relaxed">{t("Local guides who live and breathe each destination.")}</p>
          </div>
          <div className="space-y-6">
            <span className="text-4xl text-orange-500">◈</span>
            <h3 className="text-2xl font-black uppercase italic tracking-tighter">{t("Full flexibility")}</h3>
            <p className="text-sm text-gray-500 italic leading-relaxed">{t("Change your mind on the road. We adapt in real time.")}</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE PROCESS */}
      <section className="py-32 bg-[#003366] text-white px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">{t("THE PROCESS")}</h2>
            <p className="text-orange-500 font-bold uppercase tracking-widest text-xs italic">{t("From your first message to your last memory")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
            <div className="group border-l border-white/10 pl-8 pt-4 hover:border-orange-500 transition-all duration-500">
              <span className="text-xs font-black text-orange-500 italic mb-8 block">01</span>
              <h3 className="text-2xl font-black uppercase mb-6 italic leading-tight tracking-tighter">{t("Tell us dream")}</h3>
              <p className="text-sm font-light italic opacity-60 leading-relaxed">{t("Fill our short design form. Tell us who you are, when you travel, and what excites you. Takes 3 minutes.")}</p>
            </div>
            <div className="group border-l border-white/10 pl-8 pt-4 hover:border-orange-500 transition-all duration-500">
              <span className="text-xs font-black text-orange-500 italic mb-8 block">02</span>
              <h3 className="text-2xl font-black uppercase mb-6 italic leading-tight tracking-tighter">{t("Meet your Designer")}</h3>
              <p className="text-sm font-light italic opacity-60 leading-relaxed">{t("A dedicated Morocco travel designer calls you within 24 hours to go deeper into your vision.")}</p>
            </div>
            <div className="group border-l border-white/10 pl-8 pt-4 hover:border-orange-500 transition-all duration-500">
              <span className="text-xs font-black text-orange-500 italic mb-8 block">03</span>
              <h3 className="text-2xl font-black uppercase mb-6 italic leading-tight tracking-tighter">{t("Receive your proposal")}</h3>
              <p className="text-sm font-light italic opacity-60 leading-relaxed">{t("In 3-5 days you receive a complete custom itinerary hotels, experiences, logistics, pricing.")}</p>
            </div>
            <div className="group border-l border-white/10 pl-8 pt-4 hover:border-orange-500 transition-all duration-500">
              <span className="text-xs font-black text-orange-500 italic mb-8 block">04</span>
              <h3 className="text-2xl font-black uppercase mb-6 italic leading-tight tracking-tighter">{t("Refine & confirm")}</h3>
              <p className="text-sm font-light italic opacity-60 leading-relaxed">{t("We adjust until it's perfect. Then you confirm and we handle everything. You just show up.")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FORM */}
      <section className="py-32 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5 space-y-12">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9]">
            {t("DESIGN YOUR")} <br /> <span className="text-orange-500">{t("MOROCCO TRIP.")}</span>
          </h2>
          <p className="text-2xl font-light italic text-gray-400">{t("One form. Your personal designer calls within 24 hours.")}</p>
          
          <div className="bg-gray-50 p-10 border-l-8 border-[#003366] shadow-xl mt-12">
            <h4 className="text-xl font-black uppercase italic mb-6 tracking-tighter text-[#003366]">{t("What happens next?")}</h4>
            <ul className="space-y-6 text-sm italic text-gray-500">
              <li>{t("1. Free design call within 24 hours.")}</li>
              <li>{t("2. Receive custom proposal in 3-5 days.")}</li>
              <li>{t("3. Refine together until you love every detail.")}</li>
              <li>{t("4. Confirm & travel. We handle everything.")}</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white p-10 md:p-20 border-t-[20px] border-orange-500 shadow-3xl">
            <form className="space-y-12">
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-500 italic">{t("FULL NAME *")}</label>
                <input type="text" placeholder={t("e.g. Sofia & Marc Laurent")} className="w-full border-b-2 border-gray-100 py-4 focus:border-orange-500 outline-none font-bold italic transition-all text-xl" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                <div className="space-y-2 text-left">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-500 italic">{t("EMAIL ADDRESS *")}</label>
                  <input type="email" placeholder="sofia@example.com" className="w-full border-b-2 border-gray-100 py-4 focus:border-orange-500 outline-none font-bold italic transition-all" />
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-500 italic">{t("NATIONALITY")}</label>
                  <input type="text" placeholder={t("e.g. French")} className="w-full border-b-2 border-gray-100 py-4 focus:border-orange-500 outline-none font-bold italic transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                <div className="space-y-2 text-left">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-500 italic">{t("PHONE (WhatsApp)")}</label>
                  <input type="tel" placeholder="+33 6 ..." className="w-full border-b-2 border-gray-100 py-4 focus:border-orange-500 outline-none font-bold italic transition-all" />
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-500 italic">{t("TRAVELLING AS")}</label>
                  <div className="flex gap-4 pt-4">
                    {["Couple", "Family", "Solo", "Group"].map(type => (
                      <label key={type} className="flex items-center gap-2 text-xs font-black uppercase cursor-pointer hover:text-orange-500">
                        <input type="radio" name="travellerType" className="accent-orange-500" /> {t(type)}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-500 italic">{t("BUDGET RANGE *")}</label>
                <select className="w-full border-b-2 border-gray-100 py-4 focus:border-orange-500 outline-none font-bold italic transition-all bg-transparent">
                  <option>{t("3000-6000 per person")}</option>
                  <option>{t("6000-10000 per person")}</option>
                  <option>{t("10000+ per person")}</option>
                </select>
              </div>

              <div className="pt-8">
                <button className="w-full bg-orange-500 text-white py-10 font-black uppercase tracking-[0.5em] text-xs hover:bg-[#003366] transition-all shadow-3xl active:scale-95 text-center text-wrap leading-tight">
                  {t("REQUEST MY FREE DESIGN CALL")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="py-40 bg-[#003366] text-white text-center px-8 border-t-[20px] border-orange-500 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-4xl text-orange-500 mb-8 block">✦</span>
          <h2 className="text-6xl md:text-[10rem] font-black italic mb-12 uppercase text-white leading-none tracking-tighter">
            {t("Your Morocco")} <br /> {t("is waiting.")}
          </h2>
          <p className="text-2xl text-white/50 mb-20 italic font-light">{t("Design your tailor-made journey today.")}</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <Link href="/form" className="bg-orange-500 text-white px-16 py-8 font-black uppercase text-xs tracking-[0.5em] hover:bg-white hover:text-[#003366] transition-all shadow-3xl w-full md:w-auto">
              {t("DESIGN MY TRIP")}
            </Link>
          </div>
          <div className="mt-40 pt-16 border-t border-white/10 opacity-40 italic font-black uppercase text-[10px] tracking-[0.6em]">
              <p>welivemorocco.com | hello@welivemorocco.com | +212 (0) 537 000 000</p>
          </div>
        </div>
      </section>

    </main>
  );
}