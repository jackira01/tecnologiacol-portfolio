<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Fingerprint, Globe, Download, MapPin } from 'lucide-vue-next'
import { personal, links, assets, techStack } from '@/data/portfolio'

// IntersectionObserver for staggered card reveals (once: true, margin: -60px)
const sectionRef = ref<HTMLElement | null>(null)
const headerVisible = ref(false)
const cardVisible = ref<boolean[]>(Array(6).fill(false))
const englishBarVisible = ref(false)
let observers: IntersectionObserver[] = []

const cardRefs = ref<(HTMLElement | null)[]>([])
const headerRef = ref<HTMLElement | null>(null)
const englishBarRef = ref<HTMLElement | null>(null)

function setCardRef(el: any, index: number) {
  cardRefs.value[index] = el as HTMLElement | null
}

onMounted(() => {
  // Header observer
  if (headerRef.value) {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { headerVisible.value = true; obs.disconnect() } },
      { rootMargin: '-40px' }
    )
    obs.observe(headerRef.value)
    observers.push(obs)
  }

  // Card observers with staggered delays
  cardRefs.value.forEach((el, index) => {
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => { cardVisible.value[index] = true }, index * 100)
          obs.disconnect()
        }
      },
      { rootMargin: '-60px' }
    )
    obs.observe(el)
    observers.push(obs)
  })

  // English bar observer
  if (englishBarRef.value) {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => { englishBarVisible.value = true }, 400)
          obs.disconnect()
        }
      },
      { rootMargin: '-60px' }
    )
    obs.observe(englishBarRef.value)
    observers.push(obs)
  }
})

onUnmounted(() => {
  observers.forEach(obs => obs.disconnect())
})
</script>

<template>
  <section id="about" ref="sectionRef" class="col-span-1 lg:col-span-12 z-10 pt-5 scroll-mt-32 snap-start">
    <!-- Section header -->
    <div
      ref="headerRef"
      class="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/5 pb-6 motion-fade-up"
      :class="headerVisible ? 'motion-active' : ''"
    >
      <h2 class="font-serif text-4xl md:text-5xl text-white">Sobre mí</h2>
      <span class="text-slate-500 font-mono text-sm mt-2 md:mt-0">02 — PERFIL & STACK</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 auto-rows-[180px]">
      <!-- Main Profile Card -->
      <div
        :ref="(el) => setCardRef(el, 0)"
        class="md:col-span-2 row-span-2 bg-surface-card rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-1 duration-300 group border border-white/5 hover:border-white/10 transition-colors motion-card"
        :class="cardVisible[0] ? 'motion-active' : ''"
      >
        <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Fingerprint class="text-white/70 group-hover:text-primary" :size="24" />
        </div>
        <div>
          <h3 class="text-2xl text-white font-medium mb-4">{{ personal.bio.heading }}</h3>
          <p class="text-slate-400 leading-relaxed text-sm md:text-base">
            {{ personal.bio.description }}
          </p>
        </div>
      </div>

      <!-- Availability Status -->
      <div
        :ref="(el) => setCardRef(el, 1)"
        class="md:col-span-1 row-span-1 bg-gradient-to-br from-surface-card to-background-dark rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:-translate-y-1 duration-300 border border-white/5 relative overflow-hidden group motion-card"
        :class="cardVisible[1] ? 'motion-active' : ''"
      >
        <div class="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
        <span class="relative flex h-4 w-4 mb-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span class="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
        </span>
        <h4 class="text-white font-medium relative z-10">{{ personal.availability.label }}</h4>
        <p class="text-xs text-slate-400 mt-1 relative z-10">{{ personal.availability.sublabel }}</p>
      </div>

      <!-- Language Level -->
      <div
        :ref="(el) => setCardRef(el, 2)"
        ref="englishBarRef"
        class="md:col-span-1 row-span-1 bg-[#EAEAEA] rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 duration-300 relative overflow-hidden group motion-card"
        :class="cardVisible[2] ? 'motion-active' : ''"
      >
        <div class="absolute top-0 right-0 p-3 opacity-20">
          <Globe :size="40" class="text-black" />
        </div>
        <div class="flex items-baseline gap-1">
          <span class="text-5xl font-serif font-bold text-black tracking-tighter">{{ personal.english.level }}</span>
          <span class="text-sm font-bold text-black/60">/ {{ personal.english.scale }}</span>
        </div>
        <div>
          <p class="text-black font-bold text-sm">Nivel Inglés</p>
          <div class="w-full bg-black/10 h-1 mt-2 rounded-full overflow-hidden">
            <div
              class="bg-black h-full english-bar"
              :class="englishBarVisible ? 'english-bar-full' : ''"
            />
          </div>
        </div>
      </div>

      <!-- Tech Stack -->
      <div
        :ref="(el) => setCardRef(el, 3)"
        class="md:col-span-2 lg:col-span-2 row-span-2 bg-surface-card rounded-2xl p-6 flex flex-col justify-start hover:-translate-y-1 duration-300 border border-white/5 overflow-y-auto motion-card"
        :class="cardVisible[3] ? 'motion-active' : ''"
      >
        <!-- Tech Stack -->
        <div class="mb-4" v-for="category in techStack" :key="category.label">
          <h4 class="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5" :class="category.color">{{ category.label }}</h4>
          <div class="flex flex-wrap gap-2">
            <span v-for="t in category.items" :key="t" class="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 text-xs font-medium border border-white/5 hover:bg-white/10 transition-colors">{{ t }}</span>
          </div>
        </div>
      </div>

      <!-- Download CV -->
      <div
        :ref="(el) => setCardRef(el, 4)"
        class="md:col-span-1 row-span-1 bg-transparent border border-white/20 rounded-2xl flex flex-col justify-center items-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer group relative motion-card hover-scale"
        :class="cardVisible[4] ? 'motion-active' : ''"
      >
        <a
          :href="links.cv"
          target="_blank"
          rel="noopener noreferrer"
          class="absolute inset-0 z-10 flex flex-col items-center justify-center"
        >
          <Download :size="28" class="mb-2 group-hover:scale-110 transition-transform" />
          <span class="font-bold text-sm tracking-wide">Descargar CV</span>
        </a>
      </div>

      <!-- Location Map -->
      <div
        :ref="(el) => setCardRef(el, 5)"
        class="md:col-span-1 row-span-1 relative rounded-2xl overflow-hidden hover:-translate-y-1 duration-300 group motion-card"
        :class="cardVisible[5] ? 'motion-active' : ''"
      >
        <img
          :src="assets.mapColombia"
          alt="Colombia Map"
          class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent"></div>
        <div class="absolute bottom-4 left-4 z-10">
          <p class="text-white text-sm font-bold flex items-center gap-1">
            <MapPin :size="14" class="text-primary" /> Colombia
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Header fade in from bottom */
.motion-fade-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.motion-fade-up.motion-active {
  opacity: 1;
  transform: translateY(0);
}

/* Bento cards - staggered reveal from bottom */
.motion-card {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.motion-card.motion-active {
  opacity: 1;
  transform: translateY(0);
}

/* CV card hover scale */
.hover-scale {
  transition: opacity 0.5s ease-out, transform 0.5s ease-out, background-color 0.3s, color 0.3s;
}
.hover-scale:hover {
  transform: scale(1.03) !important;
}

/* English bar animation */
.english-bar {
  width: 0%;
  transition: width 0.8s ease-out;
}
.english-bar-full {
  width: 95%;
}
</style>
