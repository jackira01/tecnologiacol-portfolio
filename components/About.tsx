import React from 'react';
import { Fingerprint, Globe, Box, Palette, Code, Database, Download, MapPin } from 'lucide-react';

const About: React.FC = () => {
  // ---------------------------------------------------------
  // CONFIGURACIÓN DE TU CV:
  // Reemplaza el enlace de abajo con tu link público de Google Drive
  // Ejemplo: "https://drive.google.com/file/d/TU_ID_DE_ARCHIVO/view?usp=sharing"
  // ---------------------------------------------------------
  const CV_LINK = "https://drive.google.com/file/d/1FXvOc4glXxrGcvUx0kiia9cnBVm2qZbB/view?usp=sharing";

  return (
    <section id="about" className="col-span-1 lg:col-span-12 z-10 pt-5 scroll-mt-32 snap-start">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/5 pb-6">
        <h2 className="font-serif text-4xl md:text-5xl text-white">Sobre mí</h2>
        <span className="text-slate-500 font-mono text-sm mt-2 md:mt-0">02 — PERFIL & STACK</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 auto-rows-[180px]">
        {/* Main Profile Card */}
        <div className="md:col-span-2 row-span-2 bg-surface-card rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-1 duration-300 group border border-white/5 hover:border-white/10 transition-colors">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Fingerprint className="text-white/70 group-hover:text-primary" size={24} />
          </div>
          <div>
            <h3 className="text-2xl text-white font-medium mb-4">Desarrollador enfocado en soluciones a la medida</h3>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Me especializo en crear soluciones digitales personalizadas que se adaptan a tus objetivos únicos. Mi prioridad es entender a fondo las necesidades de cada cliente para entregar herramientas web eficientes, escalables y hechas a la medida.
            </p>
          </div>
        </div>

        {/* Availability Status */}
        <div className="md:col-span-1 row-span-1 bg-gradient-to-br from-surface-card to-background-dark rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:-translate-y-1 duration-300 border border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
          <span className="relative flex h-4 w-4 mb-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
          </span>
          <h4 className="text-white font-medium relative z-10">Disponible</h4>
          <p className="text-xs text-slate-400 mt-1 relative z-10">Para nuevos proyectos</p>
        </div>

        {/* Language Level */}
        <div className="md:col-span-1 row-span-1 bg-[#EAEAEA] rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 duration-300 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-3 opacity-20">
            <Globe size={40} className="text-black" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-serif font-bold text-black tracking-tighter">B1</span>
            <span className="text-sm font-bold text-black/60">/ EF SET</span>
          </div>
          <div>
            <p className="text-black font-bold text-sm">Nivel Inglés</p>
            <div className="w-full bg-black/10 h-1 mt-2 rounded-full overflow-hidden">
              <div className="bg-black h-full w-[95%]"></div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="md:col-span-2 lg:col-span-2 row-span-1 bg-surface-card rounded-2xl p-6 flex flex-col justify-center hover:-translate-y-1 duration-300 border border-white/5">
          <p className="text-xs font-mono text-slate-500 uppercase mb-4 tracking-wider">Tech Stack</p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1.5 rounded-md bg-white/5 text-slate-300 text-xs font-medium border border-white/5 flex items-center gap-2 hover:bg-white/10 transition-colors">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVzrcSL08pV4t9ouo01zE16yem1kgGFyEPiA9b8NXLbwiDeqLGeP4wZ4vhHGO6mr9NIiBKOuoMmnWUNEBxNdh85gU9zp2Mnl1BHbOTsLHMBJkZm_SMyBnoZVxMeUmDiLl3DFKKKbq6aAyB9AXnBibz6wAIUbyBve7_YqyQAhBiwvTEYtNx_LalAnFYj215NTPDVSr-X_Q7W6ZexQ8KrecQjqWZXlOajDEVBZbDos59PHwvONfKGHk-mHHGyV_574q-G5slwkCerxA" alt="React" className="w-4 h-4" /> React
            </span>
            <span className="px-3 py-1.5 rounded-md bg-white/5 text-slate-300 text-xs font-medium border border-white/5 flex items-center gap-2 hover:bg-white/10 transition-colors">
              <Box size={14} /> Next.js
            </span>
            <span className="px-3 py-1.5 rounded-md bg-white/5 text-slate-300 text-xs font-medium border border-white/5 flex items-center gap-2 hover:bg-white/10 transition-colors">
              <Palette size={14} /> Tailwind
            </span>
            <span className="px-3 py-1.5 rounded-md bg-white/5 text-slate-300 text-xs font-medium border border-white/5 flex items-center gap-2 hover:bg-white/10 transition-colors">
              <Code size={14} /> TypeScript
            </span>
            <span className="px-3 py-1.5 rounded-md bg-white/5 text-slate-300 text-xs font-medium border border-white/5 flex items-center gap-2 hover:bg-white/10 transition-colors">
              <Database size={14} /> Node.js
            </span>
            <span className="px-3 py-1.5 rounded-md bg-white/5 text-slate-300 text-xs font-medium border border-white/5 flex items-center gap-2 hover:bg-white/10 transition-colors">
              <Database size={14} /> MongoDB
            </span>
            <span className="px-3 py-1.5 rounded-md bg-white/5 text-slate-300 text-xs font-medium border border-white/5 flex items-center gap-2 hover:bg-white/10 transition-colors">
              <Database size={14} /> MySQL
            </span>
            <span className="px-3 py-1.5 rounded-md bg-white/5 text-slate-300 text-xs font-medium border border-white/5 flex items-center gap-2 hover:bg-white/10 transition-colors">
              <Database size={14} /> Bootstrap
            </span>
            <span className="px-3 py-1.5 rounded-md bg-white/5 text-slate-300 text-xs font-medium border border-white/5 flex items-center gap-2 hover:bg-white/10 transition-colors">
              <Database size={14} /> Git
            </span>
          </div>
        </div>

        {/* Download CV */}
        <div className="md:col-span-1 row-span-1 bg-transparent border border-white/20 rounded-2xl flex flex-col justify-center items-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer group relative">
          <a
            href={CV_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 flex flex-col items-center justify-center"
          >
            <Download size={28} className="mb-2 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-sm tracking-wide">Descargar CV</span>
          </a>
        </div>

        {/* Location Map */}
        <div className="md:col-span-1 row-span-1 relative rounded-2xl overflow-hidden hover:-translate-y-1 duration-300 group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl3j1Nu2BQfTqyb9ECCQivX-D45MqC0n5HzBLVRSVNgGf0OsEvbSocXeqz04hMx3g6bjT47OHWn_qxsnaLrTSuNTC3yj-5tkMPY-hJJDE_aiK8owEgbxk6qGNB7reLJpAZ24JbzBUQU5nujV-ExcO4DXIYZtgt0Ib_ymq39d1DNWMSEjSzMrdFCa4_Dum4bxgOAadOXZKHeKxsrN5f6FXG6VRsQk7jy0va1OVCknjuMQ19oi7uCtodPqbZUF-unnQM_8N4JaMVY38"
            alt="Colombia Map"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 z-10">
            <p className="text-white text-sm font-bold flex items-center gap-1">
              <MapPin size={14} className="text-primary" /> Colombia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
