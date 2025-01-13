import type { Metadata } from "next";
import { Outfit, PT_Serif, Metal } from "next/font/google";
import "./globals.css";

const montserrat = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"]
});

const metal = Metal({
  variable: "--font-metal",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Marvix Digital Agency",
  description: "Transforming Ideas into Digital Excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${ptSerif.variable} ${metal.variable}`}>
        {children}
      </body>
    </html>
  );
}
