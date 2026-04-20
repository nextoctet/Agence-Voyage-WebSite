"use client";

import { useEffect, useState } from "react";
import i18n from "../utils/i18n";

export default function useDirection() {
  const [language, setLanguage] = useState<string>(typeof window !== 'undefined' ? (localStorage.getItem('i18nextLng') || i18n.language || 'fr') : 'fr');
  const [dir, setDir] = useState<'ltr' | 'rtl'>(['ar','he','fa','ur'].includes(language) ? 'rtl' : 'ltr');

  useEffect(() => {
    const onChange = () => {
      const lng = i18n.language || localStorage.getItem('i18nextLng') || 'fr';
      setLanguage(lng);
      setDir(['ar','he','fa','ur'].includes(lng) ? 'rtl' : 'ltr');
    };
    i18n.on('languageChanged', onChange);
    onChange();
    return () => { i18n.off('languageChanged', onChange); };
  }, []);

  return { dir, isRTL: dir === 'rtl', language };
}
