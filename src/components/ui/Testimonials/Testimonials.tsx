"use client";

import React from "react";

interface Testimonial {
  name: string;
  title: string;
  description: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jorge Ruiz",
    title: "Cuidado de personas de la tercera edad",
    description: "Gracias a Asisteser, pude encontrar una enfermera altamente capacitada que cuidó a mi abuelo con dedicación y profesionalismo. El servicio a domicilio fue una gran ayuda.",
    image: "https://res.cloudinary.com/daassyisd/image/upload/v1718056111/sgqfwttuelcyssgbqayl.webp",
  },
  {
    name: "Maria Villanueva",
    title: "Fiabilidad y confianza",
    description: "Asisteser demostró ser una empresa confiable. La enfermera que nos asignaron fue puntual, profesional y muy amable. Ahora sé que puedo contar con ellos para el cuidado de mi madre.",
    image: "https://res.cloudinary.com/daassyisd/image/upload/v1718056129/i0pwmolq5f6jvaakq5ho.webp",
  },
  {
    name: "Carla Ochoa",
    title: "Compromiso y buen trato",
    description: "El equipo de Asisteser mostró un gran compromiso con el cuidado de mi tía. La enfermera fue muy empática y brindó un trato excepcional, haciendo que mi tía se sintiera cómoda y bien cuidada.",
    image: "https://res.cloudinary.com/daassyisd/image/upload/v1718056142/omqicn9ukqfnwxmvestq.webp",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-light dark:bg-veryDarkBlue/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="space-y-4 max-w-2xl mx-auto text-center">
          <span className="text-mediumBlue dark:text-bright font-semibold">Testimonios</span>
          <h1 className="font-bold text-darkBlue dark:text-light text-3xl">Lo que dicen nuestros clientes</h1>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 p-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="flex flex-col gap-6 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl drop-shadow-xl">
              <p className="text-gray-700 dark:text-gray-300">
                {testimonial.description}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  className="w-16 h-16 object-cover rounded-full ring-4 ring-gray-300 dark:ring-gray-700"
                  alt={testimonial.name}
                />
                <div>
                  <h3 className="text-mediumBlue dark:text-bright font-bold">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
