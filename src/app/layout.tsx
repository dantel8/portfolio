import type { Metadata } from "next";
import "./globals.css";
import I18nProvider from "./i18n-provider";
import { ThemeProvider } from "@/context/ThemeContext";
import GoogleAnalytics from "./GoogleAnalytics";

export const metadata: Metadata = {
  title: "Porfolio - Dante Lugo",
  description: "Portfolio de Dante Lugo - Desarrollador Frontend",
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
    <html lang="en">
      <body className="transition-colors duration-300">
        <GoogleAnalytics measurementId="G-DQRPDKC078" />
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
