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
  imageUrl: string; // Nueva propiedad para la URL de la imagen
}

// Define las propiedades de Feature
interface Feature {
  id: number;
  title: string;
  description: string;
  icon: IconType;
  color: string;
  imageUrl: string; // Nueva propiedad para la URL de la imagen
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

const FeatureItem = ({ title, description, icon, color, imageUrl }: FeatureItemProps) => {
  return (
    <div className="p-4 bg-light dark:bg-veryDarkBlue rounded-lg space-y-3 h-full flex flex-col">
      <span className={`p-3 flex w-max rounded-full text-white ${color}`}>
        {iconRender(icon)}
      </span>
      <h1 className="flex text-lg font-semibold capitalize text-darkBlue dark:text-light">
        {title}
      </h1>
      <p className="text-sm font-light text-gray-700 dark:text-light flex-grow">
        {description}
      </p>
      <img
        src={imageUrl}
        alt={title}
        className="rounded-lg"
      />
      <div className="flex justify-center mt-4">
        <Link href="#" className="bg-mediumBlue dark:bg-bright text-white rounded-full px-6 h-12 flex items-center">
          Contáctanos
        </Link>
      </div>
    </div>
  );
};

const features: Feature[] = [
  {
    id: 1,
    title: "Servicios de enfermería técnica",
    description: "Atención humanista y profesional. Ofrecemos servicios de enfermería técnica con un enfoque humanista. Nuestro equipo capacitado brinda cuidado personalizado, seguro y efectivo, atendiendo tanto las necesidades físicas como emocionales de cada paciente.",
    icon: "default-ico",
    color: "bg-mediumBlue",
    imageUrl: "/service/enfermeria.webp"
  },
  {
    id: 2,
    title: "Servicios de técnicas geriátricas",
    description: "Cuidado integral y humanista. Brindamos cuidado personalizado y de alta calidad. Asistencia integral, desde el manejo de condiciones crónicas hasta la ayuda en actividades diarias, respetando la dignidad y el bienestar emocional de cada persona.",
    icon: "default-ico",
    color: "bg-darkBlue",
    imageUrl: "/service/geriatrico.webp"
  },
  {
    id: 3,
    title: "Servicios de terapia física y rehabilitación",
    description: "Recuperación personalizada. Desarrollamos programas de recuperación adaptados a las necesidades individuales. Técnicas avanzadas para garantizar tratamientos seguros y eficaces. Promovemos tanto la recuperación física como el bienestar emocional.",
    icon: "default-ico",
    color: "bg-bright",
    imageUrl: "/service/rehabilitacion.webp"
  },
  {
    id: 4,
    title: "Servicios de psicología",
    description: "Bienestar emocional y mental. Diseñados para promover el bienestar emocional y mental. Atención profesional en un entorno seguro y confidencial, desarrollando planes de tratamiento adaptados a las necesidades individuales.",
    icon: "default-ico",
    color: "bg-rose-600",
    imageUrl: "/service/psicologia.webp"
  }
];

const Features = () => {
  return (
    <section id="servicios" className="py-20 bg-light dark:bg-veryDarkBlue/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="space-y-8 max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-darkBlue dark:text-light">
            Nuestros Servicios
          </h2>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {features.map((feature) => (
            <div key={feature.id} className="h-full">
              <FeatureItem {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
