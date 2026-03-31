<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import FooterSection from './components/Footer.vue'

let lenis: Lenis | null = null
let rafId: number | null = null
let handleAnchorClick: ((e: MouseEvent) => void) | null = null

onMounted(() => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  function raf(time: number): void {
    lenis?.raf(time ?? 0)
    rafId = requestAnimationFrame(raf)
  }
  rafId = requestAnimationFrame(raf)

  handleAnchorClick = (e: MouseEvent): void => {
    const target = e.target as HTMLElement | null
    const anchor = target?.closest('a') ?? null
    if (anchor) {
      const href = anchor.getAttribute('href') ?? ''
      if (href.startsWith('#') && href.length > 1) {
        e.preventDefault()
        lenis?.scrollTo(href, { offset: -1 })
      }
    }
  }

  document.addEventListener('click', handleAnchorClick)
})

onUnmounted(() => {
  lenis?.destroy()
  lenis = null
  if (rafId !== null) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
  if (handleAnchorClick !== null) {
    document.removeEventListener('click', handleAnchorClick)
    handleAnchorClick = null
  }
})
</script>

<template>
  <div class="relative overflow-x-hidden w-full">
    <Navbar />

    <main class="relative w-full max-w-7xl mx-auto px-6 md:pt-15 pt-20 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-y-24 gap-x-12">
      <!-- Background glow effects -->
      <div class="fixed top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div class="fixed bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2 z-0"></div>

      <Hero />
      <Projects />
      <About />
      <Contact />
      <FooterSection />
    </main>

    <!-- Grain overlay -->
    <div
      class="fixed inset-0 pointer-events-none z-[100] opacity-50 mix-blend-overlay"
      :style="{
        backgroundImage: `url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E&quot;)`
      }"
    ></div>
  </div>
</template>
