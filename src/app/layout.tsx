import type { Metadata } from "next";
import "./globals.css";
import I18nProvider from "./i18n-provider";

export const metadata: Metadata = {
  title: "Porfolio",
  description: "Porfolio -  Dante Lugo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#fffdf4]">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
