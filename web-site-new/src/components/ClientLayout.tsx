"use client";

import React, { useEffect, useState } from "react";
import i18n from "../utils/i18n";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setReady(true);
    } else {
      const handleInitialized = () => setReady(true);
      i18n.on('initialized', handleInitialized);
      return () => i18n.off('initialized', handleInitialized);
    }
  }, []);

  if (!ready) return null;
  return <>{children}</>;
}
