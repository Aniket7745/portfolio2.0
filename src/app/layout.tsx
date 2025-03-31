import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Outfit } from 'next/font/google';
import "./globals.css";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: "Aniket Kundu | Portfolio",
  description: "Software developer passionate about web development and Linux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} ${outfit.variable}`}>
      <body
        className="antialiased"
        style={{
          backgroundImage: "url('backgrounds/bg2.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
