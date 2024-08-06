import React from "react";

export function VortexDemo() {
  return (
    <div className="bg-light dark:bg-veryDarkBlue/30  mx-auto rounded-md h-[30rem] overflow-hidden flex items-center flex-col justify-center px-2 md:px-10 py-4">
      <h2 className="text-darkBlue dark:text-bright text-4xl sm:text-5xl md:text-6xl font-bold text-center">
        ¿Quieres unirte a nuestro equipo de profesionales de la salud?
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-2xl max-w-xl mt-6 text-center">
        Completa el siguiente formulario para postular a una de nuestras vacantes.
      </p>
      <div className="flex justify-center items-center gap-4 mt-6">
        <a
          href="https://forms.gle/iG2GQXategqeBn8C9"
          target="_blank"
          rel="noopener noreferrer"
          className="relative py-4 px-12 text-black text-lg font-bold rounded-full overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-purple-500 before:to-purple-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
        >
          ¡Postula ahora!
        </a>
      </div>
    </div>
  );
}
