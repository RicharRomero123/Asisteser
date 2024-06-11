"use client"
import CallToActionWithVideo from "@/components/main/hero/hero";
import CtaSection from "@/components/ui/Contacto/Contacto";
import Coverage from "@/components/ui/Coverage/Converage";
import Location from "@/components/ui/Location/Location";
import Nosotros from "@/components/ui/Nosotros/Nosotros";
import Features from "@/components/ui/Servicios/Servicios";
import Testimonials from "@/components/ui/Testimonials/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between ">
        
        <CallToActionWithVideo></CallToActionWithVideo>
        <Nosotros></Nosotros>
        <Features></Features>
        <Testimonials></Testimonials>
        <Location></Location>
        <Coverage></Coverage>
     
        
    </main>
  );
}
