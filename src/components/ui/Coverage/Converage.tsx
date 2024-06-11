"use client";

import React from "react";

const Coverage = () => {
  return (
    <section className="py-20 bg-light dark:bg-veryDarkBlue/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 text-center">
      <span className="text-mediumBlue dark:text-bright font-semibold pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-mediumBlue dark:before:bg-bright before:rounded-full">
          Servicios en Perú
          </span>
        <h2 className="text-3xl font-semibold text-darkBlue dark:text-light mb-6">
          Nuestra Cobertura de Servicios
        </h2>
        <p className="text-gray-700 dark:text-light max-w-2xl mx-auto mb-12">
          Actualmente, Asisteser ofrece sus servicios en las regiones de Lima y Arequipa. Pronto llegaremos a más partes del Perú.
        </p>
        <div className="relative max-w-lg mx-auto">
          <img 
            src="https://res.cloudinary.com/daassyisd/image/upload/v1718075485/iep692e3txy5vaenxe5j.png" 
            alt="Mapa de Perú"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Coverage;
