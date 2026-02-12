import React from 'react';
import { Mail, Phone, ArrowUpRight, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="col-span-1 lg:col-span-12 z-10 pt-5 scroll-mt-32 snap-start">
            <div className="relative">
                {/* Top decorative line */}
                <div className="mb-12 flex items-center gap-4">
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <span className="text-slate-500 font-mono text-sm">03 — CONTACTO</span>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>
                {/* Background decorative elements */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

                {/* Main CTA Card */}
                <div className="relative bg-gradient-to-br from-surface-card via-surface-card to-background-dark rounded-3xl border border-white/10 overflow-hidden">
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>

                    <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Column: Content */}
                        <div className="flex flex-col items-start text-left">
                            <div className="flex items-center gap-3 mb-6">
                                <Sparkles className="text-primary animate-pulse" size={24} />
                                <span className="text-primary font-mono text-sm uppercase tracking-widest">Hablemos</span>
                            </div>

                            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-[0.95] tracking-tight">
                                ¿Tienes un proyecto
                                <span className="block italic font-light text-white/80 mt-2">en mente?</span>
                            </h2>

                            <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                                Estoy disponible para nuevos proyectos y colaboraciones.
                                Ya sea que necesites un sitio web completo o mejorar uno existente,
                                <span className="text-white font-medium"> trabajemos juntos</span> para crear algo excepcional.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                <a
                                    href="mailto:tecnologiacol03@gmail.com"
                                    className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
                                >
                                    Iniciar un Proyecto
                                    <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Contact Cards */}
                        <div className="flex flex-col gap-6 justify-center w-full">
                            {/* Email Card */}
                            <a
                                href="mailto:tecnologiacol03@gmail.com"
                                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <Mail className="text-primary" size={20} />
                                    </div>
                                    <ArrowUpRight className="text-slate-500 group-hover:text-primary group-hover:rotate-45 transition-all duration-300" size={20} />
                                </div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-mono">Email</p>
                                <p className="text-white font-medium text-lg group-hover:text-primary transition-colors">
                                    tecnologiacol03@gmail.com
                                </p>
                            </a>

                            {/* Phone Card */}
                            <a
                                href="tel:+573025336266"
                                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <Phone className="text-primary" size={20} />
                                    </div>
                                    <ArrowUpRight className="text-slate-500 group-hover:text-primary group-hover:rotate-45 transition-all duration-300" size={20} />
                                </div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-mono">Teléfono</p>
                                <p className="text-white font-medium text-lg group-hover:text-primary transition-colors">
                                    +57 (323) 724-2744
                                </p>
                            </a>

                            <div className="text-center sm:text-right mt-2">
                                <span className="text-slate-500 text-sm block">
                                    Respuesta en <span className="text-white font-medium">24 horas</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Contact;
