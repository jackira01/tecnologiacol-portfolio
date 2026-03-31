<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Mail, Phone, ArrowUpRight, Sparkles } from 'lucide-vue-next'

// IntersectionObserver refs for staggered animations
const decorLineRef = ref<HTMLElement | null>(null)
const mainCardRef = ref<HTMLElement | null>(null)
const sparklesRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)
const descRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)
const emailCardRef = ref<HTMLElement | null>(null)
const phoneCardRef = ref<HTMLElement | null>(null)
const responseRef = ref<HTMLElement | null>(null)

const decorLineVisible = ref(false)
const mainCardVisible = ref(false)
const sparklesVisible = ref(false)
const headingVisible = ref(false)
const descVisible = ref(false)
const ctaVisible = ref(false)
const emailCardVisible = ref(false)
const phoneCardVisible = ref(false)
const responseVisible = ref(false)

let observers: IntersectionObserver[] = []

function observe(el: HTMLElement | null, visibleRef: typeof decorLineVisible, margin = '-40px', delay = 0) {
  if (!el) return
  const obs = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (delay) {
          setTimeout(() => { visibleRef.value = true }, delay)
        } else {
          visibleRef.value = true
        }
        obs.disconnect()
      }
    },
    { rootMargin: margin }
  )
  obs.observe(el)
  observers.push(obs)
}

onMounted(() => {
  observe(decorLineRef.value, decorLineVisible, '-40px')
  observe(mainCardRef.value, mainCardVisible, '-80px')
  observe(sparklesRef.value, sparklesVisible, '0px', 200)
  observe(headingRef.value, headingVisible, '0px', 300)
  observe(descRef.value, descVisible, '0px', 400)
  observe(ctaRef.value, ctaVisible, '0px', 500)
  observe(emailCardRef.value, emailCardVisible, '0px', 300)
  observe(phoneCardRef.value, phoneCardVisible, '0px', 450)
  observe(responseRef.value, responseVisible, '0px', 600)
})

onUnmounted(() => {
  observers.forEach(obs => obs.disconnect())
})
</script>

<template>
  <section id="contact" class="col-span-1 lg:col-span-12 z-10 pt-5 scroll-mt-32 snap-start">
    <div class="relative">
      <!-- Top decorative line -->
      <div
        ref="decorLineRef"
        class="mb-12 flex items-center gap-4 motion-fade"
        :class="decorLineVisible ? 'motion-active' : ''"
      >
        <div class="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <span class="text-slate-500 font-mono text-sm">03 — CONTACTO</span>
        <div class="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <!-- Background decorative elements - continuous pulsing -->
      <div class="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none pulsing-glow"></div>

      <!-- Main CTA Card -->
      <div
        ref="mainCardRef"
        class="relative bg-gradient-to-br from-surface-card via-surface-card to-background-dark rounded-3xl border border-white/10 overflow-hidden motion-slide-up"
        :class="mainCardVisible ? 'motion-active' : ''"
      >
        <!-- Decorative corner elements -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div class="relative z-10 px-8 md:px-16 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Left Column: Content -->
          <div class="flex flex-col items-start text-left">
            <div
              ref="sparklesRef"
              class="flex items-center gap-3 mb-6 motion-slide-left"
              :class="sparklesVisible ? 'motion-active' : ''"
            >
              <Sparkles class="text-primary animate-pulse" :size="24" />
              <span class="text-primary font-mono text-sm uppercase tracking-widest">Hablemos</span>
            </div>

            <h2
              ref="headingRef"
              class="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-[0.95] tracking-tight motion-slide-up-inner"
              :class="headingVisible ? 'motion-active' : ''"
            >
              ¿Tienes un proyecto
              <span class="block italic font-light text-white/80 mt-2">en mente?</span>
            </h2>

            <p
              ref="descRef"
              class="text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed motion-fade-up"
              :class="descVisible ? 'motion-active' : ''"
            >
              Estoy disponible para nuevos proyectos y colaboraciones.
              Ya sea que necesites un sitio web completo o mejorar uno existente,
              <span class="text-white font-medium"> trabajemos juntos</span> para crear algo excepcional.
            </p>

            <div
              ref="ctaRef"
              class="flex flex-col sm:flex-row gap-4 items-start sm:items-center motion-fade-up"
              :class="ctaVisible ? 'motion-active' : ''"
            >
              <a
                href="mailto:tecnologiacol03@gmail.com"
                class="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover-spring"
              >
                Iniciar un Proyecto
                <ArrowUpRight :size="20" class="group-hover:rotate-45 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <!-- Right Column: Contact Cards -->
          <div class="flex flex-col gap-6 justify-center w-full">
            <!-- Email Card -->
            <a
              ref="emailCardRef"
              href="mailto:tecnologiacol03@gmail.com"
              class="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 motion-slide-right contact-hover"
              :class="emailCardVisible ? 'motion-active' : ''"
            >
              <div class="flex items-start justify-between mb-4">
                <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail class="text-primary" :size="20" />
                </div>
                <ArrowUpRight class="text-slate-500 group-hover:text-primary group-hover:rotate-45 transition-all duration-300" :size="20" />
              </div>
              <p class="text-xs text-slate-500 uppercase tracking-wider mb-2 font-mono">Email</p>
              <p class="text-white font-medium text-lg group-hover:text-primary transition-colors">
                tecnologiacol03@gmail.com
              </p>
            </a>

            <!-- Phone Card -->
            <a
              ref="phoneCardRef"
              href="tel:+573025336266"
              class="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 motion-slide-right contact-hover"
              :class="phoneCardVisible ? 'motion-active' : ''"
            >
              <div class="flex items-start justify-between mb-4">
                <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone class="text-primary" :size="20" />
                </div>
                <ArrowUpRight class="text-slate-500 group-hover:text-primary group-hover:rotate-45 transition-all duration-300" :size="20" />
              </div>
              <p class="text-xs text-slate-500 uppercase tracking-wider mb-2 font-mono">Teléfono</p>
              <p class="text-white font-medium text-lg group-hover:text-primary transition-colors">
                +57 (323) 724-2744
              </p>
            </a>

            <div
              ref="responseRef"
              class="text-center sm:text-right mt-2 motion-fade"
              :class="responseVisible ? 'motion-active' : ''"
            >
              <span class="text-slate-500 text-sm block">
                Respuesta en <span class="text-white font-medium">24 horas</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Fade */
.motion-fade {
  opacity: 0;
  transition: opacity 0.6s ease-out;
}
.motion-fade.motion-active {
  opacity: 1;
}

/* Slide up (main card) */
.motion-slide-up {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
}
.motion-slide-up.motion-active {
  opacity: 1;
  transform: translateY(0);
}

/* Slide up inner (heading, desc, cta) */
.motion-slide-up-inner {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.motion-slide-up-inner.motion-active {
  opacity: 1;
  transform: translateY(0);
}

/* Fade up */
.motion-fade-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.motion-fade-up.motion-active {
  opacity: 1;
  transform: translateY(0);
}

/* Slide from left (sparkles) */
.motion-slide-left {
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.motion-slide-left.motion-active {
  opacity: 1;
  transform: translateX(0);
}

/* Slide from right (contact cards) */
.motion-slide-right {
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.motion-slide-right.motion-active {
  opacity: 1;
  transform: translateX(0);
}

/* Contact card hover */
.contact-hover:hover {
  transform: translateY(-4px);
}

/* Button hover spring */
.hover-spring {
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s, box-shadow 0.3s;
}
.hover-spring:hover {
  transform: scale(1.05) translateY(-3px);
}

/* Pulsing glow background */
.pulsing-glow {
  animation: pulse 6s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.6; }
  50% { transform: translateX(-50%) scale(1.1); opacity: 1; }
}
</style>
