import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-[60] px-6 py-6 mix-blend-difference text-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <span className="font-serif text-xl font-bold tracking-tight">NB.</span>

        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase opacity-80">
          <a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')} className="hover:text-primary transition-colors">Proyectos</a>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="hover:text-primary transition-colors">Sobre mí</a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="hover:text-primary transition-colors">Contacto</a>
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
            <a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')} className="text-2xl font-serif hover:text-primary transition-colors">Proyectos</a>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="text-2xl font-serif hover:text-primary transition-colors">Sobre mí</a>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="text-2xl font-serif hover:text-primary transition-colors">Contacto</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;