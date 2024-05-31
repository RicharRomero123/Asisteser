import CallToActionWithVideo from "@/components/main/hero/hero";
import CtaSection from "@/components/ui/Contacto/Contacto";
import Nosotros from "@/components/ui/Nosotros/Nosotros";
import Features from "@/components/ui/Servicios/Servicios";
import TestimonialSection from "@/components/ui/Testimonios/Testimonios";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between ">
        
        <CallToActionWithVideo></CallToActionWithVideo>
        <Nosotros></Nosotros>
        <Features></Features>
     
        
    </main>
  );
}
