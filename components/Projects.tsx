import React, { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[]; // Cambiado de image a images (array)
  tags: string[];
  url: string;
  className?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "PrepagoYa",
    description: "Scort Web Site es una plataforma web moderna y segura diseñada para conectar proveedores de servicios de acompañantes premium con clientes potenciales.",
    images: ["https://res.cloudinary.com/dqojdssac/image/upload/v1770763255/Gemini_Generated_Image_vhgxvvvhgxvvvhgx_znubwu.png"],
    tags: ["Next.js", "TailwindCss", "MongoDB", "NextAuth", "TypeScript"],
    url: "https://www.prepagoya.com",
    className: "md:-mt-12"
  },
  {
    id: 2,
    title: "coopinem",
    description: "Coopinem es una cooperativa sin ánimo de lucro en el Tolima, dedicada al bienestar de docentes activos (nómina municipal y departamental) y pensionados del magisterio (Fopep y Fiduprevisora).",
    images: ["https://res.cloudinary.com/dqojdssac/image/upload/v1770767449/Screenshot_2026-02-10_185013_vwlzcu.png"],
    tags: ["Wordpress", "Elementor", "WooCommerce"],
    url: "https://coopinem.com.co/",
    className: "md:-mt-12"
  },
  {
    id: 3,
    title: "Catalogo de Portatiles",
    description: "Esta es una web desarrollada con el objetivo de ofrecer una variedad de productos a los usuarios para que puedan ver sus detalles, comentarios, poder comprarlos, ver su historial de vistas, entre otras funciones.",
    images: ["https://res.cloudinary.com/dqojdssac/image/upload/v1770762420/Screenshot_2026-02-10_172644_uqlxbu.png"],
    tags: ["Next.js", "TailwindCss", "MongoDB", "NextAuth", "TypeScript"],
    url: "https://catalogo.tecnologiacol.lat",
  },
  {
    id: 4,
    title: "Taller Sag",
    description: "Desarrollé con mi grupo de trabajo una aplicación web para una empresa conocida en su sector con el objetivo de que los clientes tengan la posibilidad de contactar e interactuar con la empresa desde la comodidad de sus casas.",
    images: ["https://res.cloudinary.com/dqojdssac/image/upload/v1770763049/Screenshot_2026-02-10_172757_cuu5qw.png"],
    tags: ["Next.js", "TailwindCss", "MongoDB", "Auth0", "TypeScript"],
    url: "https://taller-sag.vercel.app",
    className: "md:mt-24"
  },
  {
    id: 5,
    title: "FisiomFulness",
    description: "FisiomFulness es una plataforma web integral de salud y bienestar diseñada principalmente para conectar a pacientes con fisioterapeutas.",
    images: ["https://res.cloudinary.com/dqojdssac/image/upload/v1770765724/Screenshot_2026-02-10_182123_jajg0z.png"],
    tags: ["Next.js", "Redux", "Node.js", "Bootstrap"],
    url: "https://fisiom-front.vercel.app",
    className: "md:mt-12"
  }
];

// Componente de Carrusel
const ImageCarousel: React.FC<{ images: string[]; title: string }> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-full">
      {/* Imagen actual */}
      <img
        src={images[currentIndex]}
        alt={`${title} - ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105"
      />

      {/* Controles del carrusel - solo se muestran si hay más de una imagen */}
      {images.length > 1 && (
        <>
          {/* Botones de navegación */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Imagen siguiente"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicadores de puntos */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => goToSlide(index, e)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-primary w-6'
                  : 'bg-white/50 hover:bg-white/80'
                  }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>

          {/* Contador de imágenes */}
          <div className="absolute top-3 right-3 z-20 px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm text-white text-xs font-mono">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="col-span-1 lg:col-span-12 z-10 pt-5 md:pt-20 scroll-mt-32 snap-start">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-6">
        <h2 className="font-serif text-4xl md:text-5xl text-white">Proyectos Destacados</h2>
        <span className="text-slate-500 font-mono text-sm mt-2 md:mt-0">01 — SELECCIÓN CINEMATOGRÁFICA</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group project-card cursor-pointer md:col-span-1 md:row-span-1 block ${project.className || ''}`}
          >
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/5 bg-surface-card relative shadow-2xl shadow-black/20">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500 pointer-events-none"></div>
              <ImageCarousel images={project.images} title={project.title} />
            </div>

            <div className="mt-6 flex flex-col md:flex-row justify-between items-start gap-4">
              <div className="w-full">
                <h3 className="text-2xl text-white font-serif group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-400 mt-2 text-sm leading-relaxed w-full md:max-w-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4 text-xs font-mono text-slate-500 uppercase tracking-wide">
                  {project.tags.map(tag => (
                    <span key={tag} className="border border-white/10 px-2 py-1 rounded whitespace-nowrap">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0 self-end md:self-start">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;