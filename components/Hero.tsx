import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

// Timing constants
const TYPING_DELAY = 0.6;
const TYPING_SPEED = 55;
const QUOTE = 'Si lo puedes imaginar, lo puedo crear';

interface TypingEffectProps {
  text: string;
  delay?: number;
  speed?: number;
  onComplete?: () => void;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, delay = 0, speed = 55, onComplete }) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const completedRef = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed);
      return () => clearTimeout(t);
    } else if (!completedRef.current) {
      completedRef.current = true;
      const t = setTimeout(() => {
        setCursorVisible(false);
        onComplete?.();
      }, 500);
      return () => clearTimeout(t);
    }
  }, [started, displayed, text, speed, onComplete]);

  if (!started) return null;

  return (
    <>
      {displayed}
      {cursorVisible && <span className="animate-blink ml-0.5">|</span>}
    </>
  );
};

const Hero: React.FC = () => {
  const [typingDone, setTypingDone] = useState(false);
  const handleTypingComplete = useCallback(() => setTypingDone(true), []);

  return (
    <section className="col-span-1 lg:col-span-12 relative min-h-[85vh] flex flex-col lg:flex-row items-center lg:items-center z-10 snap-start">
      <div className="w-full lg:w-7/12 flex flex-col justify-center h-full order-2 lg:order-1 mt-12 lg:mt-0 relative">
        <div className="absolute -left-6 top-0 h-full w-[1px] bg-white/10 hidden lg:block"></div>

        {/* Role - fade in from bottom */}
        <motion.p
          className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
        >
          Full Stack Developer
        </motion.p>

        {/* Quote - typing effect */}
        <motion.div
          className="mb-8 mr-8 p-6 rounded-lg border border-primary/30 bg-primary/5 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: TYPING_DELAY - 0.1, duration: 0.3 }}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl italic text-primary font-light leading-relaxed mb-0">
            <span className="text-3xl md:text-4xl font-serif opacity-60 mr-2">"</span>
            <TypingEffect
              text={QUOTE}
              delay={TYPING_DELAY}
              speed={TYPING_SPEED}
              onComplete={handleTypingComplete}
            />
            {typingDone && (
              <motion.span
                className="text-3xl md:text-4xl font-serif opacity-60 ml-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.3 }}
              >
                "
              </motion.span>
            )}
          </p>
        </motion.div>

        {/* Name - scale + fade, triggered after typing */}
        <motion.h1
          className="font-serif text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] text-white mb-8 tracking-tighter"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={typingDone ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="block hover:text-primary/90 transition-colors duration-500 cursor-default">Nicolás</span>
          <span className="block italic font-light ml-12 text-white/90">Beru</span>
        </motion.h1>

        {/* Description - staggered fade in from bottom */}
        <motion.p
          className="text-xl text-slate-400 max-w-md font-light leading-relaxed mb-10 ml-2"
          initial={{ opacity: 0, y: 20 }}
          animate={typingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
        >
          Creo <span className="text-white">soluciones web a la medida</span> para tus necesidades. <br />
          Desarrollo personalizado que convierte ideas en experiencias digitales únicas.
        </motion.p>

        {/* Buttons - fade in after description */}
        <motion.div
          className="flex items-center gap-6 ml-2"
          initial={{ opacity: 0, y: 20 }}
          animate={typingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.4, ease: 'easeOut' }}
        >
          <motion.a
            href="#projects"
            className="group flex items-center gap-2 bg-white text-surface-dark px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            Ver Proyectos
            <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
          </motion.a>
          <motion.a
            href="#contact"
            className="text-sm font-medium hover:text-white transition-colors border-b border-transparent hover:border-primary pb-0.5"
            whileHover={{ opacity: 0.7 }}
          >
            Contactar ahora
          </motion.a>
        </motion.div>
      </div>

      {/* Right column */}
      <div className="w-full lg:w-5/12 h-[50vh] lg:h-[75vh] relative order-1 lg:order-2">
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent z-10 lg:hidden"></div>

        {/* Image - mask reveal from bottom + blur dissipates */}
        <motion.div
          className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 group"
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={{ clipPath: 'inset(0% 0 0 0)' }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.img
            alt="Nicolás Beru Portrait"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            src="https://res.cloudinary.com/dqojdssac/image/upload/v1770764435/Gemini_Generated_Image_tx6fpltx6fpltx6f_zbvliq.png"
            initial={{ filter: 'blur(8px)', scale: 1.1 }}
            animate={{ filter: 'blur(0px)', scale: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
          />

          {/* Location badge - appears after image reveal */}
          <motion.div
            className="absolute bottom-6 left-6 z-20 px-4 py-2 rounded-lg flex items-center gap-3 bg-surface-card/40 backdrop-blur-md border border-white/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-white uppercase">TOLIMA . COLOMBIA</span>
          </motion.div>
        </motion.div>

        {/* Decorative elements - continuous floating / pulsing */}
        <motion.div
          className="absolute -top-12 -right-12 w-32 h-32 border border-white/10 rounded-full z-0 hidden lg:block"
          animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/20 backdrop-blur-md rounded-full z-20 hidden lg:block"
          animate={{ y: [0, 6, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>
    </section>
  );
};

export default Hero;