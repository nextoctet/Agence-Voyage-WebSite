import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

import Footer from "./components/footer"; 
import ClientLayout from "../components/ClientLayout";
import ClientRoot from "../components/ClientRoot";
import CookieConsentBanner from "../components/CookieConsentBanner";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "welive morocco",
  description: "Agence de voyage premium",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${libreBaskerville.variable} font-serif antialiased`}
        suppressHydrationWarning
      >
        <ClientLayout>
          <ClientRoot>
            <Navbar />

            {children}

            <Footer />
            <CookieConsentBanner />
          </ClientRoot>
        </ClientLayout>
      </body>
    </html>
  );
}
