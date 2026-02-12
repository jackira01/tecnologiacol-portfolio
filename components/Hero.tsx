import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="col-span-1 lg:col-span-12 relative min-h-[85vh] flex flex-col lg:flex-row items-center lg:items-center z-10 snap-start">
      <div className="w-full lg:w-7/12 flex flex-col justify-center h-full order-2 lg:order-1 mt-12 lg:mt-0 relative">
        <div className="absolute -left-6 top-0 h-full w-[1px] bg-white/10 hidden lg:block"></div>
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in-up">Full Stack Developer</p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] text-white mb-8 tracking-tighter">
          <span className="block hover:text-primary/90 transition-colors duration-500 cursor-default">Nicolás</span>
          <span className="block italic font-light ml-12 text-white/90">Beru</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-md font-light leading-relaxed mb-10 ml-2">
          Creo <span className="text-white">soluciones web a la medida</span> para tus necesidades. <br />
          Desarrollo personalizado que convierte ideas en experiencias digitales únicas.
        </p>
        <div className="flex items-center gap-6 ml-2">
          <a
            href="#projects"

            className="group flex items-center gap-2 bg-white text-surface-dark px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300"
          >
            Ver Proyectos
            <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
          </a>
          <a
            href="#contact"

            className="text-sm font-medium hover:text-white transition-colors border-b border-transparent hover:border-primary pb-0.5"
          >
            Contactar ahora
          </a>
        </div>
      </div>

      <div className="w-full lg:w-5/12 h-[50vh] lg:h-[75vh] relative order-1 lg:order-2">
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent z-10 lg:hidden"></div>
        <div className="relative w-full h-full rounded-2xl overflow-hidden hover:scale-[1.01] transition-transform duration-700 ease-out shadow-2xl shadow-black/50 group">
          <img
            alt="Nicolás Beru Portrait"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            src="https://res.cloudinary.com/dqojdssac/image/upload/v1770764435/Gemini_Generated_Image_tx6fpltx6fpltx6f_zbvliq.png"
          />
          <div className="absolute bottom-6 left-6 z-20 px-4 py-2 rounded-lg flex items-center gap-3 bg-surface-card/40 backdrop-blur-md border border-white/5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-white uppercase">TOLIMA . COLOMBIA</span>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-12 -right-12 w-32 h-32 border border-white/10 rounded-full z-0 hidden lg:block"></div>
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/20 backdrop-blur-md rounded-full z-20 hidden lg:block"></div>
      </div>
    </section>
  );
};

export default Hero;