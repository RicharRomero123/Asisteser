"use client"

import React from "react";

const Location = () => {
  return (
    <section className="py-20 bg-light dark:bg-veryDarkBlue/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="space-y-8 text-center">
        <span className="text-mediumBlue dark:text-bright font-semibold pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-mediumBlue dark:before:bg-bright before:rounded-full">
          Nuestras oficinas en Lima
          </span>
          <h2 className="text-3xl font-semibold text-darkBlue dark:text-light">Nuestra Ubicación</h2>
          <p className="text-gray-700 dark:text-light max-w-2xl mx-auto">
            Encuéntranos en nuestra oficina principal para cualquier consulta o información adicional.
          </p>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d26245.19235574072!2d-77.11742546619654!3d-12.086721899451549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDA1JzI5LjciUyA3N8KwMDQnMjEuNiJX!5e0!3m2!1ses!2spe!4v1719430601303!5m2!1ses!2spe"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
