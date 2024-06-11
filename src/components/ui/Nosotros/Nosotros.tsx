"use client"
import React from "react";
import { BackgroundGradient } from "../background-gradient";

// Definir las propiedades de FeatureItem
interface FeatureItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

// Ajustar las propiedades de Feature
interface Feature {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Misión",
    description: "Proporcionar acceso confiable a personal de salud asistencial calificado en Lima y Perú. Nos comprometemos a brindar atención integral en áreas física, psicológica y de rehabilitación, asegurando un servicio cálido y excepcional que haga una diferencia positiva en la vida de nuestras familias clientes.",
    imageUrl: "https://res.cloudinary.com/daassyisd/image/upload/v1718047453/gqbkvgrx2cjf4qzes6qx.webp"
  },
  {
    id: 2,
    title: "Visión",
    description: "Ser líderes en el cuidado de la salud en Lima y Perú, ofreciendo un servicio integral y personalizado que promueva el bienestar y la calidad de vida de cada persona. Aspiramos a ser reconocidos por nuestra excelencia, empatía y compromiso en el cuidado de los seres queridos de las familias peruanas.",
    imageUrl: "https://res.cloudinary.com/daassyisd/image/upload/v1718047219/tysqjzby0oijt2huzuy2.webp"
  },
  {
    id: 3,
    title: "¿Qué Hacemos?",
    description: "Conectamos a profesionales de salud calificados con familias que necesitan apoyo en el cuidado de sus seres queridos. Nuestro enfoque es comprender las necesidades específicas de cada cliente, proporcionando soluciones personalizadas que garantizan un cuidado integral y de calidad.",
    imageUrl: "https://res.cloudinary.com/daassyisd/image/upload/v1718047238/vwwvulzcnqh2psfkm8jk.webp"
  },
];

const FeatureItem = ({ title, description, imageUrl }: FeatureItemProps) => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-5 sm:gap-6 p-6 rounded-lg shadow-md bg-light dark:bg-veryDarkBlue">
      <div className="space-y-1 text-center lg:text-left">
        <h2 className="text-xl font-semibold text-darkBlue dark:text-light">
          {title}
        </h2>
        <p className="text-gray-700 dark:text-light">
          {description}
        </p>
      </div>
      <div className="relative lg:w-full flex justify-center lg:justify-start pr-8">
        <img
          src={imageUrl}
          alt={title}
          style={{ width: '100%', height: 'auto', zIndex: 2 }}
          className="relative rounded-lg"
        />
      </div>
    </div>
  );
};

const Nosotros = () => {
  return (
    <section id="nosotros" className="py-20 bg-light dark:bg-veryDarkBlue/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="space-y-4 max-w-2xl mx-auto text-center">
          <span className="text-mediumBlue dark:text-bright font-semibold pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-mediumBlue dark:before:bg-bright before:rounded-full">
          Tu salud, nuestra prioridad
          </span>
          <h1 className="font-bold text-darkBlue dark:text-light text-3xl"> ¿Por qué nosotros?</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14">
          {features.map((feature, index) => (
            <BackgroundGradient key={feature.id} className={`rounded-[22px] p-4 sm:p-10 bg-light dark:bg-veryDarkBlue mx-auto ${index === 2 ? 'sm:col-span-2 sm:col-start-1' : ''}`}>
              <FeatureItem {...feature} />
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
