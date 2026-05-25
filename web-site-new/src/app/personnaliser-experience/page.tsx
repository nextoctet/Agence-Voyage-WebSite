'use client';

import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  source: string;
  journey: string;
  message: string;
};

type FieldName = keyof FormState;

type ToastState = {
  type: 'success' | 'error';
  message: string;
};

const INITIAL_FORM: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  source: '',
  journey: '',
  message: '',
};

export default function DesignExperience() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [toast, setToast] = useState<ToastState | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const contactEmail = 'contact@welivemorocco.com';
  const phoneDisplay = '+212 6 36 78 44 01';
  const whatsappNumber = '212636784401';

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const showToast = (nextToast: ToastState) => {
    setToast(nextToast);

    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = setTimeout(() => {
      setToast(null);
    }, 3600);
  };

  const handleChange =
    (field: FieldName) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      setForm((current) => ({ ...current, [field]: value }));
      setErrors((current) => ({ ...current, [field]: undefined }));
    };

  const validate = () => {
    const nextErrors: Partial<Record<FieldName, string>> = {};

    if (!form.firstName.trim()) {
      nextErrors.firstName = t('design_error_first_name');
    }

    if (!form.lastName.trim()) {
      nextErrors.lastName = t('design_error_last_name');
    }

    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = t('design_error_email');
    }

    if (!form.phone.trim()) {
      nextErrors.phone = t('design_error_phone');
    }

    if (!form.message.trim()) {
      nextErrors.message = t('design_error_message');
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const buildMessage = () => {
    const template = t('design_email_body_template');
    return template
      .replace('{{first}}', form.firstName.trim())
      .replace('{{last}}', form.lastName.trim())
      .replace('{{email}}', form.email.trim())
      .replace('{{phone}}', form.phone.trim())
      .replace('{{source}}', form.source.trim() || t('Not specified'))
      .replace('{{journey}}', form.journey.trim() || t('Not specified'))
      .replace('{{message}}', form.message.trim());
  };

  const buildGmailLink = () => {
    const subject = t('design_email_subject');
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessage())}`;
  };

  const buildWhatsAppLink = () =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildMessage())}`;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      showToast({
        type: 'error',
        message: t('design_toast_required'),
      });
      return;
    }

    if (typeof window !== 'undefined') {
      window.open(buildGmailLink(), '_blank', 'noopener,noreferrer');
    }

    showToast({
      type: 'success',
      message: t('design_toast_email_success'),
    });
  };

  const handleWhatsApp = () => {
    if (!validate()) {
      showToast({
        type: 'error',
        message: t('design_toast_required'),
      });
      return;
    }

    if (typeof window !== 'undefined') {
      window.open(buildWhatsAppLink(), '_blank', 'noopener,noreferrer');
    }

    showToast({
      type: 'success',
      message: t('design_toast_whatsapp_success'),
    });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f2ec] text-[#211712]">
      <section className="relative overflow-hidden border-b border-[#6B7280]/10 bg-[radial-gradient(circle_at_20%_18%,rgba(75, 85, 99,0.12),transparent_18rem),radial-gradient(circle_at_82%_24%,rgba(240,100,43,0.10),transparent_22rem),linear-gradient(180deg,#fbf7f1_0%,#f7f2ec_100%)] px-4 pb-10 pt-4 sm:px-6 sm:pb-14 sm:pt-8 md:pb-16">
        <div className="pointer-events-none absolute left-[-5rem] top-[18%] h-40 w-40 rounded-full bg-[#4B5563]/8 blur-3xl sm:h-56 sm:w-56" />
        <div className="pointer-events-none absolute right-[-4rem] top-[12%] h-44 w-44 rounded-full border-[20px] border-[#4B5563]/10 sm:h-64 sm:w-64 sm:border-[28px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-[120%] -translate-x-1/2 rounded-t-[100%] border-t border-[#6B7280]/10" />

        <div className="relative mx-auto flex min-h-[calc(100svh-72px)] w-full max-w-[1320px] flex-col justify-center sm:min-h-[calc(100svh-88px)]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-[980px] text-center"
          >
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#4B5563] sm:mb-5 sm:text-[13px] sm:tracking-[0.34em]">
              {t('Private Travel Design')}
            </p>

            <h1 className="mx-auto max-w-[860px] text-[clamp(2.95rem,14vw,7.4rem)] font-black leading-[0.88] tracking-[-0.065em] text-[#4B5563]">
              {t('design_title')}
            </h1>

            <p className="mx-auto mt-6 max-w-[760px] font-serif text-[17px] leading-[1.55] text-[#5b4a40] sm:mt-7 sm:text-[20px] md:text-[24px]">
              {t('design_subtitle')}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a
                href="#journey-form"
                className="inline-flex min-h-[54px] w-full max-w-[340px] items-center justify-center rounded-full border border-[#4B5563] bg-[#4B5563] px-7 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-[#111827] hover:shadow-[0_18px_36px_rgba(75, 85, 99,0.18)] sm:min-h-[58px] sm:w-auto sm:max-w-none sm:px-8 sm:text-[12px] sm:tracking-[0.18em]"
              >
                {t('Commencer mon voyage sur mesure') || t('Begin the Enquiry')}
              </a>

              <div className="inline-flex min-h-[54px] w-full max-w-[340px] items-center justify-center rounded-full border border-[#6B7280]/20 bg-white/70 px-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[#6b564a] backdrop-blur-sm sm:min-h-[58px] sm:w-auto sm:max-w-none sm:text-[12px] sm:tracking-[0.18em]">
                {t('Réponse sous 24h') || t('Reply within 24 hours')}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-10 w-full max-w-[1080px] border-y border-[#6B7280]/14 sm:mt-12 md:mt-14"
          >
            <div className="grid gap-0 md:grid-cols-3">
              {[
                {
                  title: t('100% Privé') || t('Private only'),
                  body: t('Votre voyage, votre groupe, votre rythme. Jamais partagé avec des inconnus.') || t('Every itinerary is shaped for your group only, never added to a shared departure.'),
                },
                {
                  title: t('Experts sur place') || t('Planned in Morocco'),
                  body: t('Des guides locaux qui vivent et respirent chaque destination.') || t('Your trip is designed locally, with real on-the-ground knowledge and response time.'),
                },
                {
                  title: t('Flexibilité totale') || t('Refined around you'),
                  body: t('Changez d’avis en cours de route. Nous nous adaptons en temps réel.') || t('Atmosphere, pace, comfort, and routing are adjusted to your travel style.'),
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`px-5 py-5 text-center md:px-8 md:py-8 ${
                    index < 2
                      ? 'border-b border-[#6B7280]/14 md:border-b-0 md:border-r'
                      : 'last:border-b-0'
                  }`}
                >
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.24em] text-[#4B5563]">
                    {item.title}
                  </p>
                  <p className="mx-auto mt-3 max-w-[260px] text-[14px] leading-[1.6] text-[#6f5c51]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="journey-form" className="scroll-mt-28 px-[14px] py-[28px] sm:px-[21px] sm:py-[36px] md:py-[42px]">
        <div className="mx-auto w-full max-w-[1180px]">
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.78fr)] lg:gap-[56px] xl:gap-[72px]">
          <div>
            <div className="mb-7 border-b border-[#6B7280]/12 pb-5 sm:mb-8 sm:pb-6">
              <p className="text-[12px] font-extrabold uppercase tracking-[0.28em] text-[#4B5563]">
                {t('PERSONALISER VOTRE EXPERIENCE') || t('Your enquiry')}
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2.3rem,8vw,3.8rem)] leading-[0.95] tracking-[-0.04em] text-[#211712]">
                {t('design_title')}
              </h2>
              <p className="mt-4 max-w-[660px] text-[14px] leading-[1.7] text-[#6f5c51] sm:text-[15px]">
                {t('design_subtitle')}
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
                <div className="flex flex-col gap-[7px]">
                  <label htmlFor="firstName" className="text-[12px] font-semibold tracking-[0.04em] text-[#251811]">
                    {t('design_label_first_name')}
                  </label>
                  <input
                    id="firstName"
                    value={form.firstName}
                    onChange={handleChange('firstName')}
                    placeholder={t('design_label_first_name')}
                    autoComplete="given-name"
                    aria-invalid={Boolean(errors.firstName)}
                    className={`w-full rounded-[12px] border bg-[rgba(255,255,255,0.34)] px-4 py-[15px] text-[14px] text-[#211712] outline-none transition placeholder:text-[#b5aaa3] focus:-translate-y-px focus:bg-white focus:shadow-[0_0_0_5px_rgba(240,100,43,0.10)] ${
                      errors.firstName ? 'border-[#111827] bg-[#fff7f4]' : 'border-[#6B7280]'
                    }`}
                  />
                  {errors.firstName && <span className="text-[12px] text-[#111827]">{errors.firstName}</span>}
                </div>

                <div className="flex flex-col gap-[7px]">
                  <label htmlFor="lastName" className="text-[12px] font-semibold tracking-[0.04em] text-[#251811]">
                    {t('design_label_last_name')}
                  </label>
                  <input
                    id="lastName"
                    value={form.lastName}
                    onChange={handleChange('lastName')}
                    placeholder={t('design_label_last_name')}
                    autoComplete="family-name"
                    aria-invalid={Boolean(errors.lastName)}
                    className={`w-full rounded-[12px] border bg-[rgba(255,255,255,0.34)] px-4 py-[15px] text-[14px] text-[#211712] outline-none transition placeholder:text-[#b5aaa3] focus:-translate-y-px focus:bg-white focus:shadow-[0_0_0_5px_rgba(240,100,43,0.10)] ${
                      errors.lastName ? 'border-[#111827] bg-[#fff7f4]' : 'border-[#6B7280]'
                    }`}
                  />
                  {errors.lastName && <span className="text-[12px] text-[#111827]">{errors.lastName}</span>}
                </div>

                <div className="flex flex-col gap-[7px]">
                  <label htmlFor="email" className="text-[12px] font-semibold tracking-[0.04em] text-[#251811]">
                    {t('design_label_email')}
                  </label>
                  <input
                    id="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder="ejemplo@empresa.com"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    className={`w-full rounded-[12px] border bg-[rgba(255,255,255,0.34)] px-4 py-[15px] text-[14px] text-[#211712] outline-none transition placeholder:text-[#b5aaa3] focus:-translate-y-px focus:bg-white focus:shadow-[0_0_0_5px_rgba(240,100,43,0.10)] ${
                      errors.email ? 'border-[#111827] bg-[#fff7f4]' : 'border-[#6B7280]'
                    }`}
                  />
                  {errors.email && <span className="text-[12px] text-[#111827]">{errors.email}</span>}
                </div>

                <div className="flex flex-col gap-[7px]">
                  <label htmlFor="phone" className="text-[12px] font-semibold tracking-[0.04em] text-[#251811]">
                    {t('design_label_phone')}
                  </label>
                  <input
                    id="phone"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    placeholder="+212 6 00 00 00 00"
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.phone)}
                    className={`w-full rounded-[12px] border bg-[rgba(255,255,255,0.34)] px-4 py-[15px] text-[14px] text-[#211712] outline-none transition placeholder:text-[#b5aaa3] focus:-translate-y-px focus:bg-white focus:shadow-[0_0_0_5px_rgba(240,100,43,0.10)] ${
                      errors.phone ? 'border-[#111827] bg-[#fff7f4]' : 'border-[#6B7280]'
                    }`}
                  />
                  {errors.phone && <span className="text-[12px] text-[#111827]">{errors.phone}</span>}
                </div>

                <div className="flex flex-col gap-[7px] md:col-span-2">
                  <label htmlFor="source" className="text-[12px] font-semibold tracking-[0.04em] text-[#251811]">
                    {t('design_label_source')}
                  </label>
                  <select
                    id="source"
                    value={form.source}
                    onChange={handleChange('source')}
                    className="w-full rounded-[12px] border border-[#6B7280] bg-[rgba(255,255,255,0.34)] px-4 py-[15px] text-[14px] text-[#211712] outline-none transition focus:-translate-y-px focus:bg-white focus:shadow-[0_0_0_5px_rgba(240,100,43,0.10)]"
                  >
                    <option value="">{t('Selecciona una opción...') || 'Selecciona una opción...'}</option>
                    <option>Google</option>
                    <option>Instagram</option>
                    <option>{t('Recomendación') || 'Recomendación'}</option>
                    <option>{t('Agencia de viajes') || 'Agencia de viajes'}</option>
                    <option>TripAdvisor / Viator</option>
                    <option>{t('Cliente anterior') || 'Cliente anterior'}</option>
                    <option>{t('Otro') || 'Otro'}</option>
                  </select>
                </div>

                <div className="flex flex-col gap-[7px] md:col-span-2">
                  <label htmlFor="journey" className="text-[12px] font-semibold tracking-[0.04em] text-[#251811]">
                    {t('design_label_journey')}
                  </label>
                  <select
                    id="journey"
                    value={form.journey}
                    onChange={handleChange('journey')}
                    className="w-full rounded-[12px] border border-[#6B7280] bg-[rgba(255,255,255,0.34)] px-4 py-[15px] text-[14px] text-[#211712] outline-none transition focus:-translate-y-px focus:bg-white focus:shadow-[0_0_0_5px_rgba(240,100,43,0.10)]"
                  >
                    <option value="">{t('Selecciona una opción...') || 'Selecciona una opción...'}</option>
                    <option>{t('Viaje privado a medida') || 'Viaje privado a medida'}</option>
                    <option>{t('Luna de miel de lujo') || 'Luna de miel de lujo'}</option>
                    <option>{t('Viaje en familia') || 'Viaje en familia'}</option>
                    <option>{t('Ciudades imperiales y cultura') || 'Ciudades imperiales y cultura'}</option>
                    <option>{t('Experiencia en el desierto del Sahara') || 'Experiencia en el desierto del Sahara'}</option>
                    <option>{t('Gastronomía y vino') || 'Gastronomía y vino'}</option>
                    <option>{t('Viaje corporativo / incentivo') || 'Viaje corporativo / incentivo'}</option>
                    <option>{t('Aún no lo tengo claro') || 'Aún no lo tengo claro'}</option>
                  </select>
                </div>

                <div className="flex flex-col gap-[7px] md:col-span-2">
                  <label htmlFor="message" className="text-[12px] font-semibold tracking-[0.04em] text-[#251811]">
                    {t('design_label_message')}
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={handleChange('message')}
                    placeholder={t('design_placeholder_message')}
                    aria-invalid={Boolean(errors.message)}
                    className={`min-h-[112px] w-full resize-y rounded-[12px] border bg-[rgba(255,255,255,0.34)] px-4 py-[15px] text-[14px] leading-[1.55] text-[#211712] outline-none transition placeholder:text-[#b5aaa3] focus:-translate-y-px focus:bg-white focus:shadow-[0_0_0_5px_rgba(240,100,43,0.10)] ${
                      errors.message ? 'border-[#111827] bg-[#fff7f4]' : 'border-[#6B7280]'
                    }`}
                  />
                  {errors.message && <span className="text-[12px] text-[#111827]">{errors.message}</span>}
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:gap-4 md:grid-cols-[1fr_0.84fr] md:items-center">
                <button
                  type="submit"
                  className="min-h-[66px] rounded-[14px] border border-[#6B7280] bg-transparent px-5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#3b2518] transition hover:-translate-y-0.5 hover:bg-[#4B5563] hover:text-white hover:shadow-[0_15px_30px_rgba(75, 85, 99,0.18)] sm:min-h-[74px] sm:text-[12px]"
                >
                  {t('design_btn_submit')}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="min-h-[66px] rounded-[14px] border border-[rgba(75, 85, 99,0.38)] bg-white px-5 text-[11px] font-extrabold uppercase tracking-[0.10em] text-[#4B5563] transition hover:-translate-y-0.5 hover:bg-[#fff3ed] sm:min-h-[74px] sm:text-[12px]"
                >
                  {t('design_btn_whatsapp')}
                </button>
              </div>
            </form>
          </div>

          <aside className="pt-0 lg:pt-[72px] xl:pt-[92px]">
            <div className="mb-7 grid grid-cols-[42px_1fr] items-start gap-[15px]">
              <div className="grid h-[34px] w-[34px] place-items-center rounded-full border border-[rgba(75, 85, 99,0.15)] bg-white text-[#4B5563] shadow-[0_8px_24px_rgba(75, 85, 99,0.10)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[18px] w-[18px]">
                  <path d="M4 5h16v14H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </div>
              <div>
                <h3 className="mb-[5px] text-[14px] font-bold">{t('design_sidebar_email_title')}</h3>
                <a href={`mailto:${contactEmail}`} className="mb-2 inline-block text-[13px] font-bold text-[#4B5563] no-underline">
                  {contactEmail}
                </a>
                <p className="m-0 text-[13px] leading-[1.5] text-[#6f5c51]">
                  {t('design_sidebar_email_body')}
                </p>
              </div>
            </div>

            <div className="mb-7 grid grid-cols-[42px_1fr] items-start gap-[15px]">
              <div className="grid h-[34px] w-[34px] place-items-center rounded-full border border-[rgba(75, 85, 99,0.15)] bg-white text-[#4B5563] shadow-[0_8px_24px_rgba(75, 85, 99,0.10)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[18px] w-[18px]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.32 1.8.59 2.65a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.24-1.24a2 2 0 0 1 2.11-.45c.85.27 1.75.47 2.65.59A2 2 0 0 1 22 16.92Z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-[5px] text-[14px] font-bold">{t('design_sidebar_phone_title')}</h3>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 inline-block text-[13px] font-bold text-[#4B5563] no-underline"
                >
                  {phoneDisplay}
                </a>
                <p className="m-0 text-[13px] leading-[1.5] text-[#6f5c51]">
                  {t('design_sidebar_phone_body')}
                </p>
              </div>
            </div>

            <div className="mt-[26px] rounded-[20px] border border-[rgba(75, 85, 99,0.18)] bg-[rgba(255,255,255,0.42)] p-[20px] shadow-[0_22px_70px_rgba(69,34,16,0.08)] sm:mt-[34px] sm:p-[22px]">
              <strong className="mb-2 block text-[13px] uppercase tracking-[0.12em] text-[#4B5563]">
                {t('design_sidebar_note_title')}
              </strong>
              <p className="m-0 text-[14px] leading-[1.55] text-[#5b4a40]">
                {t('design_sidebar_note_body')}
              </p>
            </div>
          </aside>
        </div>
        </div>
      </section>

      <div
        className={`pointer-events-none fixed bottom-[22px] right-[22px] max-w-[380px] rounded-[16px] border border-[rgba(75, 85, 99,0.22)] bg-white px-5 py-[18px] text-[14px] leading-[1.45] text-[#4f3b31] shadow-[0_20px_50px_rgba(49,27,17,0.18)] transition-all duration-200 ${
          toast ? 'translate-y-0 opacity-100' : 'translate-y-[18px] opacity-0'
        }`}
      >
        {toast?.message}
      </div>
    </main>
  );
}
