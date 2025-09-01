import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-[#fffdf4]">{children}</body>
    </html>
  );
}
