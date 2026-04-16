"use client";

import React, { useEffect, useState } from "react";
import i18n from "../utils/i18n";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const lang = typeof window !== 'undefined' ? (localStorage.getItem('i18nextLng') || 'fr') : 'fr';
    i18n.changeLanguage(lang).finally(() => setReady(true));
  }, []);

  if (!ready) return null;
  return <>{children}</>;
}
