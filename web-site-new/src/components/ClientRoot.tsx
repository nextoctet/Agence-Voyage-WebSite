"use client";

import React, { useEffect } from "react";
import i18n from "../utils/i18n";

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lang = i18n.language || (typeof window !== 'undefined' ? localStorage.getItem('i18nextLng') || 'fr' : 'fr');
    document.documentElement.lang = lang;
    document.documentElement.dir = ['ar','he','fa','ur'].includes(lang) ? 'rtl' : 'ltr';
  }, []);

  return <>{children}</>;
}
