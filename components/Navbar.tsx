import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[60] px-4 md:px-6 py-6 mix-blend-difference text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <span className="font-serif text-xl font-bold tracking-tight">NB.</span>

        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase opacity-80">
          <a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')} className="relative group hover:text-primary transition-colors">
            Proyectos
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </a>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="relative group hover:text-primary transition-colors">
            Sobre mí
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="relative group hover:text-primary transition-colors">
            Contacto
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </a>
        </div>

        <button
          className="md:hidden z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-surface-dark z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
            <a href="#projects" onClick={() => setIsOpen(false)} className="text-2xl font-serif hover:text-primary transition-colors">Proyectos</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-2xl font-serif hover:text-primary transition-colors">Sobre mí</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-2xl font-serif hover:text-primary transition-colors">Contacto</a>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;