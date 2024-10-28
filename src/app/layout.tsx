// import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FE0000" },
    { media: "(prefers-color-scheme: dark)", color: "#454A4E" },
  ],
};
export const metadata: Metadata = {
  title: "Entreprise de conseil en gestion et RH en Tunisie - Finky ",
  description:
    "Finky, entreprise de conseil en gestion et RH en Tunisie, propose des solutions personnalisées pour optimiser vos performances et accompagner votre croissance.",
  manifest: "@/app/manifest.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <GoogleAnalytics gaId="G-THRVPLR1HX" />
      <GoogleTagManager gtmId="GT-MQ7V4CSL" /> */}
      <body className={inter.className}>
        <div className="menu-principal sticky top-0">
          <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
