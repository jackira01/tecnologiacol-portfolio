<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isOpen = ref(false)
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-[60] px-4 md:px-6 py-6 mix-blend-difference text-white nav-enter"
  >
    <div class="flex justify-between items-center max-w-7xl mx-auto">
      <span class="font-serif text-xl font-bold tracking-tight">NB.</span>

      <div class="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase opacity-80">
        <a href="#projects" class="relative group hover:text-primary transition-colors">
          Proyectos
          <span class="absolute -bottom-1 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
        </a>
        <a href="#about" class="relative group hover:text-primary transition-colors">
          Sobre mí
          <span class="absolute -bottom-1 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
        </a>
        <a href="#contact" class="relative group hover:text-primary transition-colors">
          Contacto
          <span class="absolute -bottom-1 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
        </a>
      </div>

      <button
        class="md:hidden z-50 relative"
        @click="isOpen = !isOpen"
      >
        <X v-if="isOpen" :size="24" />
        <Menu v-else :size="24" />
      </button>

      <!-- Mobile Menu Overlay -->
      <div v-if="isOpen" class="fixed inset-0 bg-surface-dark z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
        <a href="#projects" @click="isOpen = false" class="text-2xl font-serif hover:text-primary transition-colors">Proyectos</a>
        <a href="#about" @click="isOpen = false" class="text-2xl font-serif hover:text-primary transition-colors">Sobre mí</a>
        <a href="#contact" @click="isOpen = false" class="text-2xl font-serif hover:text-primary transition-colors">Contacto</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-enter {
  animation: navSlideDown 0.6s ease-out both;
}

@keyframes navSlideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
