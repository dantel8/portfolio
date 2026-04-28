import type { Metadata } from "next";
import { Anton, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import I18nProvider from "./i18n-provider";
import { ThemeProvider } from "@/context/ThemeContext";
import { NotificationProvider } from "@/context/NotificationContext";
import GoogleAnalytics from "./GoogleAnalytics";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dantelugo.dev"),
  title: "Portfolio - Dante Lugo",
  description:
    "Portfolio de Dante Lugo, desarrollador frontend especializado en React, TypeScript y Next.js.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Portfolio - Dante Lugo",
    description:
      "Proyectos, experiencia y certificaciones de Dante Lugo, Frontend Developer.",
    url: "https://dantelugo.dev",
    siteName: "Portfolio Dante Lugo",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Dante Lugo",
    description:
      "Proyectos, experiencia y certificaciones de Dante Lugo, Frontend Developer.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${anton.variable} ${nunito.variable} ${geistMono.variable} font-sans transition-colors duration-300`}
      >
        <GoogleAnalytics measurementId="G-DQRPDKC078" />
        <ThemeProvider>
          <NotificationProvider>
            <I18nProvider>{children}</I18nProvider>
          </NotificationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
