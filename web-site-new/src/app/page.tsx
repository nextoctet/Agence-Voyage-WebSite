'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="bg-[#F9F7F2] min-h-screen font-sans text-[#2D2926] overflow-x-hidden relative">
      
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#C07652]/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-20%] w-[40%] h-[40%] bg-[#2D2926]/10 blur-[100px] rounded-full"></div>
      </div>
   
   {/* SECTION 1: HERO */}

   {/* SECTION 1: HERO */}
<section className="relative h-[85vh] flex items-center justify-start px-10 md:px-24 overflow-hidden">
  <Image
    src="/pictures/rabat.jpg"
    fill
    className="object-cover scale-110 animate-[zoom_20s_infinite_alternate]"
    alt={t("hero_alt")}
    priority
  />

  <div className="absolute inset-0 bg-black/40" />

  <div className="relative z-10 text-white max-w-4xl flex flex-col items-start space-y-8">
    <div className="space-y-6 text-left">
      <h1 className="text-5xl md:text-6xl font-serif uppercase tracking-widest leading-tight opacity-95">
        {t("Perfect Gateway")}
      </h1><br></br>
      <p className="text-lg md:text-xl font-light leading-relaxed opacity-90 max-w-2xl font-serif">
        {t("Find your perfect getaway, where relaxation and adventure come together in the ideal balance. Whether you're dreaming of serene beaches, cozy mountain retreats, or vibrant city escapes, we offer destinations that suit your every mood.")}
      </p>
    </div><br></br>

    <Link
      href="/contact"
      className="bg-[#C07652] text-white px-10 py-4 rounded-2xl uppercase font-bold text-[12px] tracking-[0.2em] shadow-xl hover:bg-[#A35F3F] transition-all transform hover:scale-105 active:scale-95">
      {t("Lets Explore")}
    </Link>
  </div>

  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
    <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white to-white/0 animate-bounce" />
  </div>
 </section>
   

      {/* SECTION 2:*/}
      <section className="py-32 px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-block border-l-4 border-[#C07652] pl-6 overflow-hidden">
               <h2 className="text-[#C07652] font-bold uppercase text-[10px] tracking-[0.3em] animate-slide-in">{t("Pourquoi le sur mesure")}</h2>
            </div>
            <p className="text-4xl md:text-5xl font-serif italic leading-tight text-[#2D2926]">
              {t("Les voyages organisés amènent les gens au Maroc. Les voyages sur mesure leur permettent de s'y plonger.")} <br/>
              <span className="text-[#C07652] not-italic font-sans font-black uppercase text-3xl md:text-4xl block mt-4 tracking-tighter decoration-[#C07652] underline-offset-8">
                {t("Le sur-mesure les emmène au cœur du pays.")}
              </span>
            </p>
          </div>
          <div className="bg-[#2D2926] text-[#F9F7F2] p-12 md:p-20 relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden group rounded-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C07652]/10 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-1000"></div>
            <p className="text-xl md:text-2xl font-light italic mb-8 leading-relaxed relative z-10 border-b border-[#C07652]/20 pb-8">
              {t("Notre équipe de professionnels du voyage nés au Maroc a passé plus d'une décennie à bâtir une connaissance réelle du pays.")}
            </p>
            <p className="text-xl md:text-2xl font-light italic leading-relaxed relative z-10">
              {t("Votre rythme, vos intérêts, votre budget, votre groupe — chaque élément est pensé avec soin.")}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-32 bg-white/30 backdrop-blur-sm px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif italic text-center mb-24 text-[#2D2926] uppercase">
            {t("Styles de Voyage")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            {[
              { n: "01", img: "/pictures/marrakech-culture.jpeg", t: t("Immersion Culturelle"), d: t("Private walks and dinners.") },
              { n: "02", img: "/pictures/Desert & Landscapes.jpg", t: t("Désert & Paysages"), d: t("Dunes and luxury bivouacs.") },
              { n: "03", img: "/pictures/adventure.jpg", t: t("Aventure & Actif"), d: t("Treks and 4x4 expeditions.") },
              { n: "04", img: "/pictures/hotel3marra.webp", t: t("Luxe & Privé"), d: t("Seamless high-end service.") },
              { n: "05", img: "/pictures/Family Travel.webp", t: t("Voyage en Famille"), d: t("Experiences for all ages.") },
              { n: "06", img: "/pictures/table.webp", t: t("Gastronomie"), d: t("Spice markets and private chefs.") }
            ].map((style) => (
              <a href="/contact" key={style.n} className="group cursor-pointer">
                <div className="relative bg-[#F9F7F2] transition-all duration-500 transform group-hover:-translate-y-4 group-hover:shadow-[0_40px_80px_-15px_rgba(192,118,82,0.3)] rounded-2xl overflow-hidden border border-transparent hover:border-[#C07652]/20">
                  <div className="h-[28rem] relative overflow-hidden">
                    <Image 
                      src={style.img} 
                      fill 
                      className="object-cover transition-transform duration-[3s] group-hover:scale-125" 
                      alt={style.t} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                   
                    <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-[#C07652] transition-all duration-700 group-hover:w-full"></div>
                  </div>
                  <div className="p-10">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[#C07652] font-serif italic text-3xl block">{style.n}</span>
                      <span className="text-[#C07652] opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                        →
                      </span>
                    </div>
                    <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter text-[#2D2926]">{style.t}</h3>
                    <p className="text-sm text-gray-500 italic leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {style.d}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

     {/* SECTION 4 */}
      <section className="py-32 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif italic text-[#2D2926] uppercase select-none">{t("The Journey Album")}</h2>
            <div className="w-24 h-1 bg-[#C07652] mx-auto mt-6 animate-pulse"></div>
            <p className="mt-8 text-gray-400 italic tracking-[0.5em] text-[10px] uppercase">{t("Snapshots from our latest expeditions")}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[300px]">
            {[
              { src: "/pictures/tourisme.jpg", col: "md:col-span-2", row: "md:row-span-2" },
              { src: "/pictures/phtos.webp", col: "md:col-span-1", row: "md:row-span-1" },
              { src: "/pictures/Etranger.jpg", col: "md:col-span-1", row: "md:row-span-2" },
              { src: "/pictures/maroc.jpg", col: "md:col-span-1", row: "md:row-span-1" },
              { src: "/pictures/marr.jpg", col: "md:col-span-1", row: "md:row-span-1" },  
              { src: "/pictures/marocc.png", col: "md:col-span-2", row: "md:row-span-1" },
              { src: "/pictures/j.jpg", col: "md:col-span-1", row: "md:row-span-1" },
            ].map((photo, index) => (
              <div 
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
              </div>
            ))}
          </div>
        </div>
      </section>
 {/* SECTION 9*/}
      <section className="py-32 px-8 max-w-7xl mx-auto text-left relative z-10 border-t border-[#C07652]/10">
        <div className="mb-20">
          <p className="uppercase tracking-[0.5em] text-[#C07652] text-[10px] font-bold mb-4">
            {t("Common Questions")}
          </p>
          <h2 className="text-5xl md:text-7xl font-serif italic text-[#2D2926] leading-tight">
            {t("Answers before you even ask.")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {/* Question 1 */}
          <div className="border-b border-[#C07652]/10 pb-10 group">
            <h4 className="text-xl font-bold text-[#2D2926] mb-4 font-serif italic group-hover:text-[#C07652] transition-colors tracking-tight">
              {t("How far in advance should I reach out?")}
            </h4>
            <p className="text-[13px] text-gray-500 leading-relaxed font-light">
              {t("4–6 weeks minimum, earlier in peak season (March–May and September–November). We handle last-minute well and always tell you honestly if we can deliver the quality you deserve.")}
            </p>
          </div>

          {/* Question 2 */}
          <div className="border-b border-[#C07652]/10 pb-10 group">
            <h4 className="text-xl font-bold text-[#2D2926] mb-4 font-serif italic group-hover:text-[#C07652] transition-colors tracking-tight">
              {t("Is there a minimum number of days or people?")}
            </h4>
            <p className="text-[13px] text-gray-500 leading-relaxed font-light">
              {t("No minimum. Solo travelers to groups of 20. 3-night trips to 3-week journeys. The shorter the trip, the more focused we make it — fewer things done properly beats too much done in a rush.")}
            </p>
          </div>

          {/* Question 3 */}
          <div className="border-b border-[#C07652]/10 pb-10 group">
            <h4 className="text-xl font-bold text-[#2D2926] mb-4 font-serif italic group-hover:text-[#C07652] transition-colors tracking-tight">
              {t("What does a tailor-made trip cost?")}
            </h4>
            <p className="text-[13px] text-gray-500 leading-relaxed font-light">
              {t("There's no fixed price because there's no fixed trip. Tell us your budget range and we'll maximise it. All quotes are fully itemised so you know exactly what you're paying for.")}
            </p>
          </div>
        
          {/* Question 4 */}
          <div className="border-b border-[#C07652]/10 pb-10 group">
            <h4 className="text-xl font-bold text-[#2D2926] mb-4 font-serif italic group-hover:text-[#C07652] transition-colors tracking-tight">
              {t("Do I need a clear idea before contacting you?")}
            </h4>
            <p className="text-[13px] text-gray-500 leading-relaxed font-light">
              {t("Not at all. '10 days, love food, want to avoid crowds' is enough. We ask the right questions. Working out the detail is our job — that's exactly what we're here for.")}
            </p>
          </div>

          {/* Question 5 */}
          <div className="border-b border-[#C07652]/10 pb-10 group">
            <h4 className="text-xl font-bold text-[#2D2926] mb-4 font-serif italic group-hover:text-[#C07652] transition-colors tracking-tight">
              {t("What if something goes wrong during the trip?")}
            </h4>
            <p className="text-[13px] text-gray-500 leading-relaxed font-light">
              {t("Our team is in Morocco and reachable on WhatsApp around the clock. If anything changes or goes wrong — you contact us and we fix it. That's what a real ground team means.")}
            </p>
          </div>
            
          {/* Question 6 */}
          <div className="border-b border-[#C07652]/10 pb-10 group">
            <h4 className="text-xl font-bold text-[#2D2926] mb-4 font-serif italic group-hover:text-[#C07652] transition-colors tracking-tight">
              {t("Can you handle dietary or accessibility needs?")}
            </h4>
            <p className="text-[13px] text-gray-500 leading-relaxed font-light">
              {t("Yes — from the start, not as an afterthought. Tell us when you first reach out and we build it into every meal, activity, and accommodation selection from day one.")}
            </p>
          </div>
        </div>
      </section>

      {/* CSS Keyframes  */}
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