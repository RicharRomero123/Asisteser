"use client"
import React from "react";
import { BackgroundGradient } from "../background-gradient";
import Lottie from 'lottie-react';
import missionAnimation from './mision.json';
import visionAnimation from './vision.json';
import whatdoAnimation from './whatdo.json';

// Definir las propiedades de FeatureItem
interface FeatureItemProps {
  title: string;
  description: string;
  animationData: any;
}

// Ajustar las propiedades de Feature
interface Feature {
  id: number;
  title: string;
  description: string;
  animationData: any;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Misión",
    description: "Proporcionar acceso confiable a personal de salud asistencial calificado en Lima y Perú. Nos comprometemos a brindar atención integral en áreas física, psicológica y de rehabilitación, asegurando un servicio cálido y excepcional que haga una diferencia positiva en la vida de nuestras familias clientes.",
    animationData: missionAnimation
  },
  {
    id: 2,
    title: "Visión",
    description: "Ser líderes en el cuidado de la salud en Lima y Perú, ofreciendo un servicio integral y personalizado que promueva el bienestar y la calidad de vida de cada persona. Aspiramos a ser reconocidos por nuestra excelencia, empatía y compromiso en el cuidado de los seres queridos de las familias peruanas.",
    animationData: visionAnimation
  },
  {
    id: 3,
    title: "¿Qué Hacemos?",
    description: "Conectamos a profesionales de salud calificados con familias que necesitan apoyo en el cuidado de sus seres queridos. Nuestro enfoque es comprender las necesidades específicas de cada cliente, proporcionando soluciones personalizadas que garantizan un cuidado integral y de calidad.",
    animationData: whatdoAnimation
  },
];

const FeatureItem = ({ title, description, animationData }: FeatureItemProps) => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-5 sm:gap-6 p-6 rounded-lg shadow-md">
      <div className="space-y-1 text-center lg:text-left">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </div>
      <div className="relative lg:w-full flex justify-center lg:justify-start pr-8">
        <Lottie
          animationData={animationData}
          autoplay
          loop
          style={{ width: '100%', height: 'auto', zIndex: 2 }}
          className="relative"
        />
      </div>
    </div>
  );
};

const Nosotros = () => {
  return (
    <section id="nosotros" className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="space-y-4 max-w-2xl mx-auto text-center">
          <span className="text-blue-600 dark:text-blue-400 font-semibold pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-blue-600 dark:before:bg-blue-500 before:rounded-full">
          Tu salud, nuestra prioridad
          </span>
          <h1 className="font-bold text-gray-800 dark:text-white text-3xl"> ¿Por qué nosotros?</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14">
          {features.map((feature, index) => (
            <BackgroundGradient key={feature.id} className={`rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 mx-auto ${index === 2 ? 'sm:col-span-2 sm:col-start-1' : ''}`}>
              <FeatureItem {...feature} />
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
