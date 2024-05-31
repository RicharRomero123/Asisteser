import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar/Navbar";
import FooterBlock from "@/components/ui/Footer/Footer";
import WhatsAppFloatIcon from "@/components/main/WhatsApp/WhatsApp";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://asisteser.pe"),
  title: "Asisteser",
  description: "Proporcionamos acceso confiable a personal de salud asistencial altamente calificado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <WhatsAppFloatIcon phoneNumber="916762916"/>
        <FooterBlock/>
      </body>
    </html>
  );
}
