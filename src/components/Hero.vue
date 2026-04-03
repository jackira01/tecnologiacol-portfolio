<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'
import { personal, assets, links, contact } from '@/data/portfolio'

const TYPING_DELAY = 600 // ms
const TYPING_SPEED = 55 // ms per char
const QUOTE = personal.quote

const displayed = ref('')
const started = ref(false)
const cursorVisible = ref(true)
const typingDone = ref(false)
const showRole = ref(false)
const showQuoteBox = ref(false)
const showClosingQuote = ref(false)

let typingTimeout: ReturnType<typeof setTimeout> | null = null
let startTimeout: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
  // Role fades in at 0.2s
  setTimeout(() => { showRole.value = true }, 200)
  // Quote box appears at TYPING_DELAY - 100ms
  setTimeout(() => { showQuoteBox.value = true }, TYPING_DELAY - 100)
  // Typing starts at TYPING_DELAY
  startTimeout = setTimeout(() => {
    started.value = true
  }, TYPING_DELAY)
})

watch(started, (val) => {
  if (val) typeNext()
})

function typeNext() {
  if (displayed.value.length < QUOTE.length) {
    typingTimeout = setTimeout(() => {
      displayed.value = QUOTE.slice(0, displayed.value.length + 1)
      typeNext()
    }, TYPING_SPEED)
  } else {
    typingTimeout = setTimeout(() => {
      cursorVisible.value = false
      showClosingQuote.value = true
      typingDone.value = true
    }, 500)
  }
}

onUnmounted(() => {
  if (typingTimeout) clearTimeout(typingTimeout)
  if (startTimeout) clearTimeout(startTimeout)
})
</script>

<template>
  <section class="col-span-1 lg:col-span-12 relative min-h-[85vh] flex flex-col lg:flex-row items-center lg:items-center z-10 snap-start">
    <div class="w-full lg:w-7/12 flex flex-col justify-center h-full order-2 lg:order-1 mt-12 lg:mt-0 relative">
      <div class="absolute -left-6 top-0 h-full w-[1px] bg-white/10 hidden lg:block"></div>

      <!-- Role - fade in from bottom with delay 0.2s -->
      <p
        class="text-primary font-medium tracking-widest uppercase text-sm mb-4 motion-element"
        :class="showRole ? 'motion-fade-up-active' : 'motion-fade-up-initial'"
        :style="{ transitionDelay: '0s', transitionDuration: '0.5s' }"
      >
        Full Stack Developer
      </p>

      <!-- Quote - typing effect -->
      <div
        class="mb-8 mr-8 p-6 rounded-lg border border-primary/30 bg-primary/5 backdrop-blur-sm overflow-hidden motion-element"
        :class="showQuoteBox ? 'motion-fade-active' : 'motion-fade-initial'"
        :style="{ transitionDuration: '0.3s' }"
      >
        <p class="text-2xl md:text-3xl lg:text-4xl italic text-primary font-light leading-relaxed mb-0 md:whitespace-nowrap">
          <span class="text-3xl md:text-4xl font-serif opacity-60 mr-2">"</span>
          {{ displayed }}
          <span v-if="cursorVisible && started" class="animate-blink ml-0.5">|</span>
          <span
            v-if="showClosingQuote"
            class="text-3xl md:text-4xl font-serif ml-2 closing-quote"
          >"</span>
        </p>
      </div>

      <!-- Name - scale + fade, triggered after typing -->
      <h1
        class="font-serif text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] text-white mb-8 tracking-tighter motion-element"
        :class="typingDone ? 'motion-scale-active' : 'motion-scale-initial'"
        :style="{ transitionDuration: '0.6s' }"
      >
        <span class="block hover:text-primary/90 transition-colors duration-500 cursor-default">{{ personal.name.first }}</span>
        <span class="block italic font-light ml-12 text-white/90">{{ personal.name.last }}</span>
      </h1>

      <!-- Description - staggered fade in from bottom -->
      <p
        class="text-xl text-slate-400 max-w-md font-light leading-relaxed mb-10 ml-2 motion-element"
        :class="typingDone ? 'motion-fade-up-active' : 'motion-fade-up-initial'"
        :style="{ transitionDelay: '0.3s', transitionDuration: '0.5s' }"
      >
        {{ personal.bio.tagline }} <br />
        {{ personal.bio.taglineSub }}
      </p>

      <!-- Buttons - fade in after description -->
      <div
        class="flex items-center gap-6 ml-2 motion-element"
        :class="typingDone ? 'motion-fade-up-active' : 'motion-fade-up-initial'"
        :style="{ transitionDelay: '0.5s', transitionDuration: '0.4s' }"
      >
        <a
          href="#projects"
          class="group flex items-center gap-2 bg-white text-surface-dark px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover-spring"
        >
          Ver Proyectos
          <ArrowUpRight :size="18" class="group-hover:rotate-45 transition-transform duration-300" />
        </a>
        <a
          href="#contact"
          class="text-sm font-medium hover:text-white hover:opacity-70 transition-all border-b border-transparent hover:border-primary pb-0.5"
        >
          Contactar ahora
        </a>
      </div>
    </div>

    <!-- Right column -->
    <div class="w-full lg:w-5/12 h-[50vh] lg:h-[75vh] relative order-1 lg:order-2">
      <div class="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent z-10 lg:hidden"></div>

      <!-- Image - mask reveal from bottom + blur dissipates -->
      <div class="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 group hero-image-reveal">
        <img
          :alt="personal.name.full + ' Portrait'"
          class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hero-image-blur"
          :src="assets.portrait"
        />

        <!-- Location badge - appears after image reveal -->
        <div class="absolute bottom-6 left-6 z-20 px-4 py-2 rounded-lg flex items-center gap-3 bg-surface-card/40 backdrop-blur-md border border-white/5 hero-badge">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span class="text-xs font-semibold tracking-wide text-white uppercase">{{ personal.location.badge }}</span>
        </div>
      </div>

      <!-- Decorative elements - continuous floating / pulsing -->
      <div class="absolute -top-12 -right-12 w-32 h-32 border border-white/10 rounded-full z-0 hidden lg:block floating-circle-1"></div>
      <div class="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/20 backdrop-blur-md rounded-full z-20 hidden lg:block floating-circle-2"></div>
    </div>
  </section>
</template>

<style scoped>
/* Motion base */
.motion-element {
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

/* Fade up states */
.motion-fade-up-initial {
  opacity: 0;
  transform: translateY(20px);
}
.motion-fade-up-active {
  opacity: 1;
  transform: translateY(0);
}

/* Simple fade states */
.motion-fade-initial {
  opacity: 0;
}
.motion-fade-active {
  opacity: 1;
}

/* Scale states */
.motion-scale-initial {
  opacity: 0;
  transform: scale(0.9);
}
.motion-scale-active {
  opacity: 1;
  transform: scale(1);
}

/* Closing quote fade */
.closing-quote {
  animation: fadeToPartial 0.3s ease-out both;
}
@keyframes fadeToPartial {
  from { opacity: 0; }
  to { opacity: 0.6; }
}

/* Button hover spring effect */
.hover-spring {
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s, color 0.3s;
}
.hover-spring:hover {
  transform: scale(1.05) translateY(-3px);
}

/* Image clip-path reveal from bottom */
.hero-image-reveal {
  animation: clipReveal 1.2s cubic-bezier(0.76, 0, 0.24, 1) 0.3s both;
}

@keyframes clipReveal {
  from { clip-path: inset(100% 0 0 0); }
  to { clip-path: inset(0% 0 0 0); }
}

/* Image blur dissipate */
.hero-image-blur {
  animation: blurReveal 1.5s ease-out 0.5s both;
}

@keyframes blurReveal {
  from {
    filter: blur(8px);
    transform: scale(1.1);
  }
  to {
    filter: blur(0px);
    transform: scale(1);
  }
}

/* Location badge fade in after image reveal */
.hero-badge {
  animation: fadeIn 0.5s ease-out 1.6s both;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Decorative floating circles */
.floating-circle-1 {
  animation: float1 5s ease-in-out infinite;
}
.floating-circle-2 {
  animation: float2 4s ease-in-out 1s infinite;
}

@keyframes float1 {
  0%, 100% { transform: translateY(0); opacity: 0.5; }
  50% { transform: translateY(-8px); opacity: 1; }
}
@keyframes float2 {
  0%, 100% { transform: translateY(0); opacity: 0.4; }
  50% { transform: translateY(6px); opacity: 0.8; }
}
</style>
