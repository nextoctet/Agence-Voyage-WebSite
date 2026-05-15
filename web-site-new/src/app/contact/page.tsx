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
  const phoneDisplay = '+212 6 XX XX XX XX';
  const phoneHref = 'https://wa.me/2126XXXXXXXX';
  const plannerMailtoHref =
    `mailto:${contactEmail}` +
    `?subject=${encodeURIComponent('Private Morocco Journey Request')}` +
    `&body=${encodeURIComponent(
      "Hello WeLiveMorocco,\n\nI'd like to start planning a private Morocco journey.\n\nPreferred dates:\nNumber of travelers:\nTravel style:\nPlaces of interest:\n\nThank you."
    )}`;

  const buildMailtoLink = () => {
    const body = [
      `Nom complet: ${fullName}`,
      `Email: ${email}`,
      `Nationalite: ${nationality || '-'}`,
      `Telephone: ${phone || '-'}`,
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
    <main
      className="min-h-screen overflow-x-hidden px-4 py-6 text-[#111216] md:px-6 md:py-10"
      style={{
        background:
          'radial-gradient(circle at 78% 20%, rgba(216, 74, 27, 0.08), transparent 28rem), radial-gradient(circle at 10% 85%, rgba(17, 18, 22, 0.05), transparent 24rem), #fbf7ef',
      }}
    >
      <div className="mx-auto max-w-[1160px]">
        <section className="relative overflow-hidden rounded-[32px] border border-[rgba(216,74,27,0.22)] bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(246,239,227,0.72))] shadow-[0_28px_70px_rgba(71,36,18,0.12)]">
          <div className="pointer-events-none absolute right-[-150px] top-[-180px] h-[460px] w-[460px] rounded-full bg-[rgba(216,74,27,0.1)]" />

          <div className="relative z-10 grid items-center gap-12 px-6 py-10 md:px-10 md:py-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:px-14 lg:py-16">
            <div>
              <p className="mb-5 text-[12px] font-extrabold uppercase tracking-[0.32em] text-[#d84a1b] md:text-[14px]">
                {t('WeLiveMorocco')}
              </p>

              <h1 className="max-w-[760px] font-serif text-[clamp(52px,8vw,94px)] leading-[0.92] tracking-[-0.055em] text-[#111216]">
                {t('Contactez-nous')}
              </h1>

              <p className="mt-6 max-w-[650px] font-serif text-[20px] leading-[1.55] text-[#7b6c63] md:text-[21px]">
                {t("Notre équipe d'experts à Témara est à votre disposition pour organiser votre prochain voyage sur mesure.")}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact-form"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-[#d84a1b] bg-[#d84a1b] px-7 font-serif text-[17px] text-white shadow-[0_16px_34px_rgba(216,74,27,0.22)] transition hover:-translate-y-0.5 hover:bg-[#b63b13] hover:border-[#b63b13]"
                >
                  {t('Envoyez-nous un message')}
                </a>
                <a
                  href={plannerMailtoHref}
                  className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-[rgba(17,18,22,0.24)] px-7 font-serif text-[17px] text-[#111216] transition hover:-translate-y-0.5 hover:bg-[#111216] hover:text-white"
                >
                  {t('Email')}
                </a>
              </div>
            </div>

            <div className="relative min-h-[260px] md:min-h-[320px]">
              <div className="absolute right-6 top-0 h-[170px] w-[170px] rounded-full bg-[linear-gradient(135deg,#d84a1b,#e85a21)] shadow-[0_22px_54px_rgba(216,74,27,0.22)] md:right-10 md:top-4 md:h-[220px] md:w-[220px]" />

              <svg
                className="absolute bottom-6 right-[-40px] h-auto w-[420px] text-[#d84a1b] drop-shadow-[0_18px_22px_rgba(216,74,27,0.14)] md:bottom-12 md:right-[-16px] md:w-[520px]"
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

              <div className="absolute bottom-0 left-0 w-full max-w-[320px] rounded-[22px] border border-[rgba(216,74,27,0.18)] bg-[rgba(255,255,255,0.72)] p-6 shadow-[0_22px_48px_rgba(38,25,16,0.1)] backdrop-blur-[14px]">
                <strong className="mb-2 block text-[12px] uppercase tracking-[0.16em] text-[#d84a1b]">
                  {t('Informations')}
                </strong>
                <p className="font-serif text-[16px] leading-[1.45] text-[#2a2725]">
                  {t('Centre Ville, Témara, Maroc')}
                  <br />
                  {contactEmail}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-11 border-t border-[rgba(216,74,27,0.22)] px-1 pt-14 lg:grid-cols-[0.82fr_1fr] lg:gap-16">
          <div className="space-y-8">
            <h2 className="font-serif text-[clamp(46px,8vw,86px)] uppercase leading-[0.9] tracking-[0.08em] text-[#111216]">
              {t('Contactez-nous')}
            </h2>

            <div>
              <h3 className="mb-6 max-w-[315px] font-serif text-[23px] uppercase leading-[1.14] tracking-[0.14em] text-[#111216]">
                {t('Informations')}
              </h3>

              <div className="grid gap-4">
                <a
                  href={`mailto:${contactEmail}`}
                  className="grid w-fit grid-cols-[42px_1fr] items-center gap-4 font-serif text-[19px] leading-[1.25] text-[#7b6c63] transition hover:translate-x-1 hover:text-[#d84a1b]"
                >
                  <span className="grid h-[38px] w-[38px] place-items-center rounded-full bg-[#d84a1b] text-white shadow-[0_12px_28px_rgba(216,74,27,0.2)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 stroke-[1.9]">
                      <path d="M4 5h16v14H4z" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </span>
                  <span>{contactEmail}</span>
                </a>

                <a
                  href={phoneHref}
                  className="grid w-fit grid-cols-[42px_1fr] items-center gap-4 font-serif text-[19px] leading-[1.25] text-[#7b6c63] transition hover:translate-x-1 hover:text-[#d84a1b]"
                >
                  <span className="grid h-[38px] w-[38px] place-items-center rounded-full bg-[#d84a1b] text-white shadow-[0_12px_28px_rgba(216,74,27,0.2)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 stroke-[1.9]">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.32 1.8.59 2.65a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.24-1.24a2 2 0 0 1 2.11-.45c.85.27 1.75.47 2.65.59A2 2 0 0 1 22 16.92Z" />
                    </svg>
                  </span>
                  <span>{phoneDisplay}</span>
                </a>

                <div className="grid w-fit grid-cols-[42px_1fr] items-center gap-4 font-serif text-[19px] leading-[1.25] text-[#7b6c63]">
                  <span className="grid h-[38px] w-[38px] place-items-center rounded-full bg-[#d84a1b] text-white shadow-[0_12px_28px_rgba(216,74,27,0.2)]">
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
            <h3 className="font-serif text-[23px] uppercase leading-[1.14] tracking-[0.14em] text-[#111216]">
              WeLiveMorocco
            </h3>

            <p className="mt-4 font-serif text-[20px] leading-[1.55] text-[#7b6c63]">
              {t("Notre équipe d'experts à Témara est à votre disposition pour organiser votre prochain voyage sur mesure.")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 rounded-full border border-[#d84a1b] bg-[#d84a1b] px-7 py-4 font-serif text-[17px] text-white shadow-[0_16px_34px_rgba(216,74,27,0.22)] transition hover:-translate-y-0.5 hover:bg-[#b63b13] hover:border-[#b63b13]"
              >
                {t('Envoyez-nous un message')}
              </a>

              <a
                href={phoneHref}
                className="inline-flex items-center gap-3 rounded-full border border-[rgba(17,18,22,0.22)] px-6 py-4 font-serif text-[17px] text-[#111216] transition hover:-translate-y-0.5 hover:bg-[#111216] hover:text-white"
              >
                {t('WhatsApp & Tel')}
              </a>
            </div>

            <div className="mt-10 border-t border-[rgba(216,74,27,0.22)] pt-6 font-serif text-[16px] leading-[1.55] text-[#7b6c63]">
              {t("Lundi - Vendredi")} 09:00 - 18:00
              <br />
              {t("Samedi")} 09:00 - 13:00
            </div>
          </div>
        </section>

        <section id="contact-form" className="mt-16 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          <div className="rounded-[28px] bg-[#1a2222] p-8 text-white shadow-[0_28px_70px_rgba(24,25,28,0.2)] md:p-10">
            <span className="block text-[12px] font-extrabold uppercase tracking-[0.32em] text-[#d84a1b] md:text-[14px]">
              {t("Heures d'ouverture")}
            </span>

            <h3 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              {t('Envoyez-nous un message')}
            </h3>

            <p className="mt-5 font-serif text-[18px] leading-[1.6] text-white/70">
              {t("Notre équipe d'experts à Témara est à votre disposition pour organiser votre prochain voyage sur mesure.")}
            </p>

            <div className="mt-10 space-y-4 border-t border-white/10 pt-6 font-serif text-[18px] text-white/80">
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

          <div className="rounded-[28px] border border-[rgba(216,74,27,0.15)] bg-[rgba(255,255,255,0.76)] p-6 shadow-[0_28px_70px_rgba(71,36,18,0.12)] backdrop-blur-sm md:p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[12px] font-bold uppercase tracking-[0.24em] text-[#7b6c63]">
                    {t('Nom Complet')}
                  </label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    type="text"
                    className="w-full rounded-[18px] border border-[rgba(216,74,27,0.14)] bg-[#fbf7ef] px-5 py-4 text-base text-[#111216] outline-none transition focus:border-[#d84a1b] focus:ring-2 focus:ring-[#d84a1b]/15"
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
                    className="w-full rounded-[18px] border border-[rgba(216,74,27,0.14)] bg-[#fbf7ef] px-5 py-4 text-base text-[#111216] outline-none transition focus:border-[#d84a1b] focus:ring-2 focus:ring-[#d84a1b]/15"
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
                  className="w-full rounded-[18px] border border-[rgba(216,74,27,0.14)] bg-[#fbf7ef] px-5 py-4 text-base text-[#111216] outline-none transition focus:border-[#d84a1b] focus:ring-2 focus:ring-[#d84a1b]/15"
                  placeholder={t('Planification de voyage, Questions...')}
                  required
                  aria-required="true"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[12px] font-bold uppercase tracking-[0.24em] text-[#7b6c63]">
                    {t('Nationalité')}
                  </label>
                  <input
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    type="text"
                    className="w-full rounded-[18px] border border-[rgba(216,74,27,0.14)] bg-[#fbf7ef] px-5 py-4 text-base text-[#111216] outline-none transition focus:border-[#d84a1b] focus:ring-2 focus:ring-[#d84a1b]/15"
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
                    className="w-full rounded-[18px] border border-[rgba(216,74,27,0.14)] bg-[#fbf7ef] px-5 py-4 text-base text-[#111216] outline-none transition focus:border-[#d84a1b] focus:ring-2 focus:ring-[#d84a1b]/15"
                    placeholder={t('06XXXXXXXX')}
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
                  className="w-full rounded-[18px] border border-[rgba(216,74,27,0.14)] bg-[#fbf7ef] px-5 py-4 text-base text-[#111216] outline-none transition focus:border-[#d84a1b] focus:ring-2 focus:ring-[#d84a1b]/15"
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
                  className="w-full resize-none rounded-[22px] border border-[rgba(216,74,27,0.14)] bg-[#fbf7ef] px-5 py-4 text-base text-[#111216] outline-none transition focus:border-[#d84a1b] focus:ring-2 focus:ring-[#d84a1b]/15"
                  placeholder={t('Dites-nous en plus sur vos envies...')}
                  required
                />
              </div>

              <button
                disabled={loading}
                type="submit"
                className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full border border-[#d84a1b] bg-[#d84a1b] px-7 font-serif text-[17px] text-white shadow-[0_16px_34px_rgba(216,74,27,0.22)] transition hover:-translate-y-0.5 hover:bg-[#b63b13] hover:border-[#b63b13] disabled:cursor-not-allowed disabled:opacity-60"
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

        <section className="mt-16 rounded-[28px] border border-[rgba(216,74,27,0.14)] bg-[rgba(255,255,255,0.7)] p-3 shadow-[0_28px_70px_rgba(71,36,18,0.12)]">
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
