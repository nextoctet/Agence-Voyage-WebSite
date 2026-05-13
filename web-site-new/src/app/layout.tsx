import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

import Footer from "./components/footer"; 
import ClientLayout from "../components/ClientLayout";
import ClientRoot from "../components/ClientRoot";
import CookieConsentBanner from "../components/CookieConsentBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "welive morocco",
  description: "Agence de voyage premium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${montserrat.variable} antialiased`}
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