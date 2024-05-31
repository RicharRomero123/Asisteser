"use client"
import Link from "next/link";

// Define el tipo de icono
type IconType = "default-ico" | "other-ico"; // Agrega más tipos de iconos si es necesario

// Define las propiedades de FeatureItem
interface FeatureItemProps {
  title: string;
  description: string;
  icon: IconType;
  color: string;
}

// Define las propiedades de Feature
interface Feature {
  id: number;
  title: string;
  description: string;
  icon: IconType;
  color: string;
}

const iconRender = (val: IconType) => {
  switch (val) {
    case "default-ico":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z" clipRule="evenodd" />
        </svg>
      );
    default:
      return <>No Icon</>;
  }
};

const FeatureItem = ({ title, description, icon, color }: FeatureItemProps) => {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-lg space-y-3 h-full flex flex-col">
      <span className={`p-3 flex w-max rounded-full text-white ${color}`}>
        {iconRender(icon)}
      </span>
      <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
        {title}
      </h1>
      <p className="text-sm font-light text-gray-700 dark:text-gray-300 flex-grow">
        {description}
      </p>
    </div>
  );
};

const features: Feature[] = [
  {
    id: 1,
    title: "Servicios de enfermería técnica",
    description: "Atención humanista y profesional. Ofrecemos servicios de enfermería técnica con un enfoque humanista. Nuestro equipo capacitado brinda cuidado personalizado, seguro y efectivo, atendiendo tanto las necesidades físicas como emocionales de cada paciente.",
    icon: "default-ico",
    color: "bg-sky-600"
  },
  {
    id: 2,
    title: "Servicios de técnicas geriátricas",
    description: "Cuidado integral y humanista. Brindamos cuidado personalizado y de alta calidad. Asistencia integral, desde el manejo de condiciones crónicas hasta la ayuda en actividades diarias, respetando la dignidad y el bienestar emocional de cada persona.",
    icon: "default-ico",
    color: "bg-indigo-600"
  },
  {
    id: 3,
    title: "Servicios de terapia física y rehabilitación",
    description: "Recuperación personalizada. Desarrollamos programas de recuperación adaptados a las necesidades individuales. Técnicas avanzadas para garantizar tratamientos seguros y eficaces. Promovemos tanto la recuperación física como el bienestar emocional.",
    icon: "default-ico",
    color: "bg-orange-600"
  },
  {
    id: 4,
    title: "Servicios de psicología",
    description: "Bienestar emocional y mental. Diseñados para promover el bienestar emocional y mental. Atención profesional en un entorno seguro y confidencial, desarrollando planes de tratamiento adaptados a las necesidades individuales.",
    icon: "default-ico",
    color: "bg-rose-600"
  }
];

const Features = () => {
  return (
    <section id="servicios" className="py-20">
    <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
      <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 xl:gap-14">
        <div className="flex-1 py-10 lg:py-8 space-y-8 max-w-2xl mx-auto text-center lg:text-left">
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white">
            Cuida tu salud con Asisteser
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:mx-0">
            En Asisteser, nos dedicamos a proporcionar servicios de salud asistencial de alta calidad, diseñados para mejorar tu bienestar físico y emocional. Confía en nuestro equipo de profesionales para recibir una atención integral y personalizada.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link href="#" className="bg-sky-700 dark:bg-sky-500 text-white rounded-full px-6 h-12 flex w-max items-center">
              Contáctanos
            </Link>
          </div>
        </div>
        <div className="lg:w-[55%] xl:w-3/5 lg:items-center grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="h-full">
              <FeatureItem {...feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Features;
