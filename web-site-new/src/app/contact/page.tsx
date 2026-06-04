'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  const phoneDisplay = '+212 6 36 78 44 01';
  const phoneHref = 'https://wa.me/212636784401';
  const plannerMailtoHref =
    `mailto:${contactEmail}` +
    `?subject=${encodeURIComponent(t('Solicitud de viaje privado a Marruecos') || 'Private Morocco Journey Request')}` +
    `&body=${encodeURIComponent(
      t(
        'Hola WeLiveMorocco,\n\nMe gustaría empezar a planificar un viaje privado a Marruecos.\n\nMis fechas preferidas:\nNúmero de viajeros:\nTipo de viaje:\nLugares que me interesan:\n\nGracias.'
      ) ||
        "Hello WeLiveMorocco,\n\nI'd like to start planning a private Morocco journey.\n\nPreferred dates:\nNumber of travelers:\nTravel style:\nPlaces of interest:\n\nThank you."
    )}`;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    if (!fullName || !email || !subject || !message) {
      setStatus({ ok: false, message: 'Veuillez remplir tous les champs requis.' });
      setLoading(false);
      return;
    }

    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName,
        email,
        subject,
        nationality,
        phone,
        budget,
        message,
      }),
    })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));

        if (!res.ok) {
          throw new Error(data?.error || 'Impossible d’envoyer le message.');
        }

        setStatus({ ok: true, message: 'Votre message a été envoyé avec succès.' });
        setFullName('');
        setEmail('');
        setSubject('');
        setNationality('');
        setPhone('');
        setBudget('');
        setMessage('');
      })
      .catch((err: unknown) => {
        setStatus({
          ok: false,
          message: err instanceof Error ? err.message : 'Erreur inattendue lors de l’envoi.',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <main
      className="min-h-screen overflow-x-hidden px-3 py-4 text-[#111216] sm:px-4 sm:py-6 md:px-6 md:py-10"
      style={{
        background:
          'radial-gradient(circle at 78% 20%, rgba(75, 85, 99, 0.08), transparent 28rem), radial-gradient(circle at 10% 85%, rgba(17, 18, 22, 0.05), transparent 24rem), #fbf7ef',
      }}
    >
      <div className="mx-auto max-w-[1160px]">
        <section className="relative overflow-hidden rounded-[28px] border border-[rgba(75,85,99,0.22)] bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(246,239,227,0.72))] shadow-[0_28px_70px_rgba(71,36,18,0.12)] md:rounded-[32px]">
          <div className="pointer-events-none absolute right-[-150px] top-[-180px] h-[460px] w-[460px] rounded-full bg-[rgba(75,85,99,0.1)]" />

          <div className="relative z-10 grid items-center gap-10 px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:px-14 lg:py-16">
            <div>
              <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#4B5563] sm:text-[12px] md:mb-5 md:text-[14px] md:tracking-[0.32em]">
                {t('WeLiveMorocco')}
              </p>

              <h1 className="max-w-[760px] font-serif text-[clamp(3rem,13vw,5.9rem)] leading-[0.92] tracking-[-0.06em] text-[#111216]">
                {t('contact_hero_title')}
              </h1>

              <p className="mt-5 max-w-[650px] font-serif text-[17px] leading-[1.55] text-[#7b6c63] sm:text-[18px] md:mt-6 md:text-[21px]">
                {t('contact_hero_subtitle')}
              </p>

              <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                <a
                  href={plannerMailtoHref}
                  className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-[#4B5563] bg-[#4B5563] px-6 font-serif text-[15px] text-white shadow-[0_16px_34px_rgba(75,85,99,0.22)] transition hover:-translate-y-0.5 hover:border-[#111827] hover:bg-[#111827] sm:min-h-[54px] sm:w-auto sm:px-7 sm:text-[17px]"
                >
                  {t('contact_hero_btn_primary')}
                </a>
                <a
                  href="#contact-info"
                  className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-[rgba(17,18,22,0.24)] px-6 font-serif text-[15px] text-[#111216] transition hover:-translate-y-0.5 hover:bg-[#111216] hover:text-white sm:min-h-[54px] sm:w-auto sm:px-7 sm:text-[17px]"
                >
                  {t('contact_hero_btn_secondary')}
                </a>
              </div>
            </div>

            <div className="relative min-h-[220px] sm:min-h-[260px] md:min-h-[320px]">
              <div className="absolute right-2 top-0 h-[140px] w-[140px] rounded-full bg-[linear-gradient(135deg,#4B5563,#111827)] shadow-[0_22px_54px_rgba(75,85,99,0.22)] sm:right-6 sm:h-[170px] sm:w-[170px] md:right-10 md:top-4 md:h-[220px] md:w-[220px]" />

              <svg
                className="absolute bottom-4 right-[-56px] h-auto w-[320px] text-[#4B5563] drop-shadow-[0_18px_22px_rgba(75,85,99,0.14)] sm:bottom-6 sm:right-[-40px] sm:w-[420px] md:bottom-12 md:right-[-16px] md:w-[520px]"
                viewBox="0 0 620 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M15 135C118 60 230 54 354 123C446 174 526 168 604 114C494 211 386 228 270 164C162 105 78 104 15 135Z"
                  fill="currentColor"
                />
              </svg>

              <div className="absolute bottom-0 left-0 w-full max-w-[300px] rounded-[22px] border border-[rgba(75,85,99,0.18)] bg-[rgba(255,255,255,0.72)] p-5 shadow-[0_22px_48px_rgba(38,25,16,0.1)] backdrop-blur-[14px] sm:max-w-[320px] sm:p-6">
                <strong className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-[#4B5563] sm:text-[12px]">
                  {t('contact_visual_label')}
                </strong>
                <p className="font-serif text-[15px] leading-[1.45] text-[#2a2725] sm:text-[16px]">
                  {t('contact_visual_content')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-info" className="grid gap-9 border-t border-[rgba(75,85,99,0.22)] px-1 pt-10 sm:pt-12 lg:grid-cols-[0.82fr_1fr] lg:gap-16 lg:pt-14">
          <div className="space-y-8">
            <h2 className="font-serif text-[clamp(2.9rem,11vw,5.4rem)] uppercase leading-[0.9] tracking-[0.06em] text-[#111216] md:tracking-[0.08em]">
              {t('Contacto')}
            </h2>

            <div>
              <h3 className="mb-5 max-w-[315px] font-serif text-[20px] uppercase leading-[1.14] tracking-[0.12em] text-[#111216] md:mb-6 md:text-[23px] md:tracking-[0.14em]">
                {t('contact_left_subtitle')}
              </h3>

              <div className="grid gap-4">
                <a
                  href={`mailto:${contactEmail}`}
                  className="grid w-fit grid-cols-[42px_1fr] items-center gap-4 font-serif text-[17px] leading-[1.25] text-[#7b6c63] transition hover:translate-x-1 hover:text-[#4B5563] md:text-[19px]"
                >
                  <span className="grid h-[38px] w-[38px] place-items-center rounded-full bg-[#4B5563] text-white shadow-[0_12px_28px_rgba(75,85,99,0.2)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 stroke-[1.9]">
                      <path d="M4 5h16v14H4z" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </span>
                  <span>{contactEmail}</span>
                </a>

                <a
                  href={phoneHref}
                  className="grid w-fit grid-cols-[42px_1fr] items-center gap-4 font-serif text-[17px] leading-[1.25] text-[#7b6c63] transition hover:translate-x-1 hover:text-[#4B5563] md:text-[19px]"
                >
                  <span className="grid h-[38px] w-[38px] place-items-center rounded-full bg-[#4B5563] text-white shadow-[0_12px_28px_rgba(75,85,99,0.2)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 stroke-[1.9]">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.32 1.8.59 2.65a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.24-1.24a2 2 0 0 1 2.11-.45c.85.27 1.75.47 2.65.59A2 2 0 0 1 22 16.92Z" />
                    </svg>
                  </span>
                  <span>{phoneDisplay}</span>
                </a>

                <div className="grid w-fit grid-cols-[42px_1fr] items-center gap-4 font-serif text-[17px] leading-[1.25] text-[#7b6c63] md:text-[19px]">
                  <span className="grid h-[38px] w-[38px] place-items-center rounded-full bg-[#4B5563] text-white shadow-[0_12px_28px_rgba(75,85,99,0.2)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 stroke-[1.9]">
                      <path d="M12 21s-6-4.35-6-10a6 6 0 0 1 12 0c0 5.65-6 10-6 10Z" />
                      <circle cx="12" cy="11" r="2.5" />
                    </svg>
                  </span>
                  <span>{t('Centre Ville, Témara, Maroc')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[660px]">
            <h3 className="font-serif text-[20px] uppercase leading-[1.14] tracking-[0.12em] text-[#111216] md:text-[23px] md:tracking-[0.14em]">
              WeLiveMorocco
            </h3>

            <p className="mt-4 font-serif text-[18px] leading-[1.55] text-[#7b6c63] md:text-[20px]">
              {t('contact_right_description')}
            </p>

            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <a
                href={plannerMailtoHref}
                className="inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full border border-[#4B5563] bg-[#4B5563] px-6 py-4 font-serif text-[15px] text-white shadow-[0_16px_34px_rgba(75,85,99,0.22)] transition hover:-translate-y-0.5 hover:border-[#111827] hover:bg-[#111827] sm:w-auto sm:px-7 sm:text-[17px]"
              >
                {t('contact_right_cta')}
              </a>

              <a
                href={phoneHref}
                className="inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full border border-[rgba(17,18,22,0.22)] px-6 py-4 font-serif text-[15px] text-[#111216] transition hover:-translate-y-0.5 hover:bg-[#111216] hover:text-white sm:w-auto sm:text-[17px]"
              >
                {t('contact_right_secondary')}
              </a>
            </div>

            <div className="mt-8 border-t border-[rgba(75,85,99,0.22)] pt-5 font-serif text-[15px] leading-[1.55] text-[#7b6c63] sm:mt-10 sm:pt-6 sm:text-[16px]">
              {t('contact_footer_note')}
            </div>
          </div>
        </section>

        <section id="contact-form" className="mt-12 grid gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          <div className="rounded-[28px] bg-[#1a2222] p-6 text-white shadow-[0_28px_70px_rgba(24,25,28,0.2)] sm:p-8 md:p-10">
            <span className="block text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#4B5563] sm:text-[12px] md:text-[14px] md:tracking-[0.32em]">
              {t("Heures d'ouverture")}
            </span>

            <h3 className="mt-5 font-serif text-3xl leading-tight sm:mt-6 sm:text-4xl md:text-5xl">
              {t('Envoyez-nous un message')}
            </h3>

            <p className="mt-4 font-serif text-[17px] leading-[1.6] text-white/70 sm:mt-5 md:text-[18px]">
              {t("Notre équipe d'experts à Témara est à votre disposition pour organiser votre prochain voyage sur mesure.")}
            </p>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-5 font-serif text-[16px] text-white/80 sm:mt-10 sm:pt-6 md:text-[18px]">
              <div className="flex items-center justify-between gap-4 border-b border-white/5 py-3">
                <span>{t('Lundi - Vendredi')}</span>
                <span className="font-semibold text-white">09:00 - 18:00</span>
              </div>
              <div className="flex items-center justify-between gap-4 py-3">
                <span>{t('Samedi')}</span>
                <span className="font-semibold text-white">09:00 - 13:00</span>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-[rgba(75,85,99,0.15)] bg-[rgba(255,255,255,0.76)] p-5 shadow-[0_28px_70px_rgba(71,36,18,0.12)] backdrop-blur-sm sm:p-6 md:p-10">
            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[12px] font-bold uppercase tracking-[0.24em] text-[#7b6c63]">
                    {t('Nom Complet')}
                  </label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    type="text"
                    className="w-full rounded-[18px] border border-[rgba(75,85,99,0.14)] bg-[#fbf7ef] px-5 py-4 text-base text-[#111216] outline-none transition focus:border-[#4B5563] focus:ring-2 focus:ring-[#4B5563]/15"
                    placeholder="Sarah Mansouri"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[12px] font-bold uppercase tracking-[0.24em] text-[#7b6c63]">
                    {t('Email')}
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="w-full rounded-[18px] border border-[rgba(75,85,99,0.14)] bg-[#fbf7ef] px-5 py-4 text-base text-[#111216] outline-none transition focus:border-[#4B5563] focus:ring-2 focus:ring-[#4B5563]/15"
                    placeholder="sarah@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[12px] font-bold uppercase tracking-[0.24em] text-[#7b6c63]">
                  {t('Sujet')}
                </label>
                <input
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  className="w-full rounded-[18px] border border-[rgba(75,85,99,0.14)] bg-[#fbf7ef] px-5 py-4 text-base text-[#111216] outline-none transition focus:border-[#4B5563] focus:ring-2 focus:ring-[#4B5563]/15"
                  placeholder={t('Planification de voyage, Questions...')}
                  required
                  aria-required="true"
                />
              </div>

              <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[12px] font-bold uppercase tracking-[0.24em] text-[#7b6c63]">
                    {t('Nationalité')}
                  </label>
                  <input
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    type="text"
                    className="w-full rounded-[18px] border border-[rgba(75,85,99,0.14)] bg-[#fbf7ef] px-5 py-4 text-base text-[#111216] outline-none transition focus:border-[#4B5563] focus:ring-2 focus:ring-[#4B5563]/15"
                    placeholder={t('ex. Marocaine')}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[12px] font-bold uppercase tracking-[0.24em] text-[#7b6c63]">
                    {t('Téléphone')}
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    className="w-full rounded-[18px] border border-[rgba(75,85,99,0.14)] bg-[#fbf7ef] px-5 py-4 text-base text-[#111216] outline-none transition focus:border-[#4B5563] focus:ring-2 focus:ring-[#4B5563]/15"
                    placeholder={t('+212 6 36 78 44 01')}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[12px] font-bold uppercase tracking-[0.24em] text-[#7b6c63]">
                  {t('Budget')}
                </label>
                <input
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  type="text"
                  className="w-full rounded-[18px] border border-[rgba(75,85,99,0.14)] bg-[#fbf7ef] px-5 py-4 text-base text-[#111216] outline-none transition focus:border-[#4B5563] focus:ring-2 focus:ring-[#4B5563]/15"
                  placeholder={t('Ex. 6000 DH - 12000 DH')}
                />
              </div>

              <div>
                <label className="mb-2 block text-[12px] font-bold uppercase tracking-[0.24em] text-[#7b6c63]">
                  {t('Votre Message')}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="w-full resize-none rounded-[22px] border border-[rgba(75,85,99,0.14)] bg-[#fbf7ef] px-5 py-4 text-base text-[#111216] outline-none transition focus:border-[#4B5563] focus:ring-2 focus:ring-[#4B5563]/15"
                  placeholder={t('Dites-nous en plus sur vos envies...')}
                  required
                />
              </div>

              <button
                disabled={loading}
                type="submit"
                className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full border border-[#4B5563] bg-[#4B5563] px-7 font-serif text-[17px] text-white shadow-[0_16px_34px_rgba(75,85,99,0.22)] transition hover:-translate-y-0.5 hover:bg-[#111827] hover:border-[#111827] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Envoi...' : t('Envoyer le message')}
              </button>

              {status && (
                <p className={`text-base ${status.ok ? 'text-green-700' : 'text-red-700'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </section>

        <section className="mt-12 rounded-[28px] border border-[rgba(75,85,99,0.14)] bg-[rgba(255,255,255,0.7)] p-2 shadow-[0_28px_70px_rgba(71,36,18,0.12)] sm:mt-16 sm:p-3">
          <div className="relative h-[320px] overflow-hidden rounded-[22px] md:h-[420px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13238.411651871216!2d-6.9272!3d33.9189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7134371707963%3A0x6e9f9024f9958e98!2sT%C3%A9mara!5e0!3m2!1sfr!2sma!4v1713880000000!5m2!1sfr!2sma"
              className="h-full w-full grayscale-[30%] transition duration-1000 hover:grayscale-0"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            />

            <div className="absolute bottom-6 left-1/2 w-[calc(100%-3rem)] max-w-sm -translate-x-1/2 rounded-full bg-[#111216] px-6 py-4 text-center text-white shadow-[0_16px_34px_rgba(17,18,22,0.28)]">
              <p className="text-[12px] font-bold uppercase tracking-[0.32em]">
                {t('Nous trouver à Témara')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
