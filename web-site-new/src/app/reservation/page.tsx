'use client';

import { useTranslation } from "react-i18next";

export default function ReservationPage() {
  const { t } = useTranslation();
  return (
    <main className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100">
        <h1 className="text-4xl font-black text-[#003366] mb-2 uppercase italic text-center">{t("Réserver Votre Voyage")}</h1>
        <p className="text-gray-400 text-center mb-10 font-medium">{t("Remplissez le formulaire et un conseiller vous contactera.")}</p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#003366] font-bold mb-2 ml-2 text-sm uppercase">{t("Nom Complet")}</label>
              <input type="text" className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-orange-500 outline-none transition-all" placeholder="Votre nom" />
            </div>
            <div>
              <label className="block text-[#003366] font-bold mb-2 ml-2 text-sm uppercase">{t("Téléphone")}</label>
              <input type="tel" className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-orange-500 outline-none transition-all" placeholder="06..." />
            </div>
          </div>

          <div>
            <label className="block text-[#003366] font-bold mb-2 ml-2 text-sm uppercase">{t("Destination Souhaitée")}</label>
            <select className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-orange-500 outline-none transition-all appearance-none">
              <option>{t("Sélectionnez une destination")}</option>
              <option>{t("Casablanca")}</option>
              <option>{t("Marrakech")}</option>
              <option>{t("Tangier")}</option>
              <option>{t("Fes")}</option>
            </select>
          </div>

          <div>
            <label className="block text-[#003366] font-bold mb-2 ml-2 text-sm uppercase">{t("Message (Optionnel)")}</label>
            <textarea rows={4} className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-orange-500 outline-none transition-all" placeholder={t("Avez-vous des demandes spéciales ?")}></textarea>
          </div>

          <button className="w-full bg-orange-500 text-white py-5 rounded-2xl font-black text-lg hover:bg-[#003366] transition-all shadow-xl shadow-orange-500/20 active:scale-95">
            {t("CONFIRMER LA RÉSERVATION")}
          </button>
        </form>
      </div>
    </main>
  );
}
