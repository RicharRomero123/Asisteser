import Link from "next/link";

// Define las propiedades de FooterItem
export type FooterItemProps = {
  text: string;
  link: string;
};

// Define las propiedades de FooterBlockItem
export type FooterBlockItemProps = {
  title: string;
  items: FooterItemProps[];
};

// Define las propiedades de FooterBlock
export type FooterBlockProps = {
  footerBlocks: FooterBlockItemProps[];
};

const FooterItem = ({ text, link }: FooterItemProps) => {
  return (
    <li>
      <Link href={link} className="duration-200 hover:text-green-600 dark:hover:text-bright">
        {text}
      </Link>
    </li>
  );
};

const FooterBlockItem = ({ title, items }: FooterBlockItemProps) => {
  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold text-darkBlue dark:text-light">{title}</h1>
      <ul className="space-y-3">
        {items.map((item) => (
          <FooterItem key={item.link} {...item} />
        ))}
      </ul>
    </div>
  );
};

const footerBlocks = [
  {
    id: 1,
    title: "Links",
    items: [
      {
        id: 1,
        text: "Inicio",
        link: "/",
      },
      {
        id: 2,
        text: "Nosotros",
        link: "#nosotros",
      },
      {
        id: 3,
        text: "Servicios",
        link: "#servicios",
      },
    ],
  },
  {
    id: 2,
    title: "Recursos",
    items: [
      {
        id: 1,
        text: "Blog",
        link: "/blog",
      },
      {
        id: 2,
        text: "Política de Privacidad",
        link: "/privacy-policy",
      },
      {
        id: 3,
        text: "Términos y Condiciones",
        link: "/terms",
      },
    ],
  },
];

const FooterBlock = () => {
  return (
    <footer className="bg-light dark:bg-veryDarkBlue text-gray-700 dark:text-light">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-16 py-20">
        <div className="space-y-6">
          <Link href="/">
            <span className="text-bright bg-clip-text bg-gradient-to-tr from-mediumBlue to-darkBlue font-bold text-2xl">
              Asisteser
            </span>
          </Link>
          <p className="text-black dark:text-white text-justify">
            Proporcionamos acceso confiable a personal de salud asistencial altamente calificado en Lima y todo el Perú. Nos comprometemos a brindar atención integral y profesional.
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-6 uppercase text-darkBlue dark:text-light">Menu</h2>
          <nav className="flex flex-col gap-4">
            <Link href="/" className="hover:underline">Inicio</Link>
            <Link href="#nosotros" className="hover:underline">Nosotros</Link>
            <Link href="#servicios" className="hover:underline">Servicios</Link>
            <Link href="#contacto" className="hover:underline">Contacto</Link>
          </nav>
        </div>

        <div>
          <h2 className="font-bold mb-6 uppercase text-darkBlue dark:text-light">Redes sociales</h2>
          <nav className="flex flex-col gap-4">
            <a href="https://www.facebook.com/asisteser" target="_blank" className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-sky-600 p-2 rounded-lg transition-colors">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="w-[20px] h-[20px]" alt="Facebook" />
              Facebook
            </a>
            <a href="https://www.instagram.com/asisteser" target="_blank" className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-sky-600 p-2 rounded-lg transition-colors">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="w-[20px] h-[20px]" alt="Instagram" />
              Instagram
            </a>
            <a href="https://twitter.com/asisteser" target="_blank" className="flex items-center gap-2 hover:bg-gray-100 dark:hover:hover:bg-sky-600 p-2 rounded-lg transition-colors">
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384065.png" className="w-[20px] h-[20px]" alt="Twitter" />
              Twitter
            </a>
          </nav>
        </div>

        <div>
          <h2 className="font-bold mb-6 uppercase text-darkBlue dark:text-light">Contacto</h2>
          <div className="flex flex-col gap-4">
            <p className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Jirón Teniente Legua Romero 146, Lima, Peru
            </p>
            <p className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contacto@asisteser.pe
            </p>
            <p className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              (+51) 967 930 749
            </p>
          </div>
        </div>
      </div>
      <hr className="my-4 border-gray-200 dark:border-gray-700" />
      <div className="flex flex-col xl:flex-row gap-4 items-center justify-between">
        <p className="text-gray-800 dark:text-light text-center md:text-left">
          &copy; 2024 <span className="text-gray-900 dark:text-bright font-bold">Asisteser.</span> Todos los derechos reservados.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <Link href="/terms" className="text-gray-700 dark:text-light hover:text-gray-900 dark:hover:text-bright transition-colors">
            Términos y condiciones
          </Link>
          <span className="hidden md:flex">|</span>
          <Link href="/privacy-policy" className="text-gray-700 dark:text-light hover:text-gray-900 dark:hover:text-bright transition-colors">
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterBlock;
