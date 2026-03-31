<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-vue-next'

interface Project {
  id: number
  title: string
  description: string
  images: string[]
  tags: string[]
  url: string
  video?: string
  className?: string
}

const projects: Project[] = [
  {
    id: 0,
    title: "AriseXR",
    description: "AriseXR es una single page application moderna y visualmente atractiva, diseñada para mostrar los servicios de coaching de manera elegante, con animaciones fluidas y una interfaz inmersiva.",
    images: ["https://res.cloudinary.com/dqojdssac/image/upload/v1774979186/arise-page_qxto7w.png"],
    video: "https://res.cloudinary.com/dqojdssac/video/upload/v1774977201/2026-03-31_12-08-39_xvmuub.mp4",
    tags: ["Vue.js", "TailwindCss", "Motion", "Single Page"],
    url: "#"
  },
  {
    id: 1,
    title: "PrepagoYa",
    description: "Scort Web Site es creada a peticion de un cliente. Una plataforma web moderna y segura diseñada para conectar proveedores de servicios de acompañantes premium con clientes potenciales.",
    images: ["https://res.cloudinary.com/dqojdssac/image/upload/v1770763255/Gemini_Generated_Image_vhgxvvvhgxvvvhgx_znubwu.png"],
    tags: ["Next.js", "TailwindCss", "MongoDB", "NextAuth", "TypeScript"],
    url: "https://www.prepagoya.com",
  },
  {
    id: 2,
    title: "coopinem",
    description: "Coopinem es una cooperativa sin ánimo de lucro en el Tolima, dedicada al bienestar de docentes activos (nómina municipal y departamental) y pensionados del magisterio (Fopep y Fiduprevisora).",
    images: ["https://res.cloudinary.com/dqojdssac/image/upload/v1770767449/Screenshot_2026-02-10_185013_vwlzcu.png"],
    tags: ["Wordpress", "Elementor", "WooCommerce"],
    url: "https://coopinem.com.co/",
  },
  {
    id: 3,
    title: "Catalogo de Portatiles",
    description: "Esta es una web desarrollada con el objetivo de ofrecer una variedad de productos a los usuarios para que puedan ver sus detalles, comentarios, poder comprarlos, ver su historial de vistas, entre otras funciones.",
    images: ["https://res.cloudinary.com/dqojdssac/image/upload/v1770762420/Screenshot_2026-02-10_172644_uqlxbu.png"],
    tags: ["Next.js", "TailwindCss", "MongoDB", "NextAuth", "TypeScript"],
    url: "https://catalogo.tecnologiacol.lat",
  },
  {
    id: 4,
    title: "Taller Sag",
    description: "Desarrollé con mi grupo de trabajo una aplicación web para una empresa conocida en su sector con el objetivo de que los clientes tengan la posibilidad de contactar e interactuar con la empresa desde la comodidad de sus casas.",
    images: ["https://res.cloudinary.com/dqojdssac/image/upload/v1770763049/Screenshot_2026-02-10_172757_cuu5qw.png"],
    tags: ["Next.js", "TailwindCss", "MongoDB", "Auth0", "TypeScript"],
    url: "https://taller-sag.vercel.app",
  },
  {
    id: 5,
    title: "FisiomFulness",
    description: "FisiomFulness es una plataforma web integral de salud y bienestar diseñada principalmente para conectar a pacientes con fisioterapeutas.",
    images: ["https://res.cloudinary.com/dqojdssac/image/upload/v1770765724/Screenshot_2026-02-10_182123_jajg0z.png"],
    tags: ["Next.js", "Redux", "Node.js", "Bootstrap"],
    url: "https://fisiom-front.vercel.app",
  }
]

const carouselIndexes = ref<Record<number, number>>(
  Object.fromEntries(projects.map(p => [p.id, 0]))
)

function goToPrevious(projectId: number, imagesLength: number) {
  const current = carouselIndexes.value[projectId]
  carouselIndexes.value[projectId] = current === 0 ? imagesLength - 1 : current - 1
}

function goToNext(projectId: number, imagesLength: number) {
  const current = carouselIndexes.value[projectId]
  carouselIndexes.value[projectId] = current === imagesLength - 1 ? 0 : current + 1
}

function goToSlide(projectId: number, index: number) {
  carouselIndexes.value[projectId] = index
}

// Video hover logic for AriseXR
const videoRefs = ref<Record<number, HTMLVideoElement | null>>({})

function setVideoRef(el: any, projectId: number) {
  videoRefs.value[projectId] = el as HTMLVideoElement | null
}

function onProjectMouseEnter(project: Project) {
  if (!project.video) return
  const video = videoRefs.value[project.id]
  if (!video) return
  video.currentTime = 0
  video.play().catch(() => {})
}

function onProjectMouseLeave(project: Project) {
  if (!project.video) return
  const video = videoRefs.value[project.id]
  if (!video) return
  video.pause()
  video.currentTime = 0
}

// IntersectionObserver for each project card (once: false, margin: -250px — matches original)
const cardRefs = ref<(HTMLElement | null)[]>([])
const cardVisible = ref<boolean[]>(projects.map(() => false))
let observers: IntersectionObserver[] = []

function setCardRef(el: any, index: number) {
  cardRefs.value[index] = el as HTMLElement | null
}

onMounted(() => {
  cardRefs.value.forEach((el, index) => {
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        cardVisible.value[index] = entry.isIntersecting
      },
      { rootMargin: '-250px' }
    )
    obs.observe(el)
    observers.push(obs)
  })
})

onUnmounted(() => {
  observers.forEach(obs => obs.disconnect())
})
</script>

<template>
  <section id="projects" class="col-span-1 lg:col-span-12 z-10 pt-5 md:pt-20 scroll-mt-32 snap-start">
    <div class="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-6">
      <h2 class="font-serif text-4xl md:text-5xl text-white">Proyectos Destacados</h2>
      <span class="text-slate-500 font-mono text-sm mt-2 md:mt-0">01 — SELECCIÓN CINEMATOGRÁFICA</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
      <a
        v-for="(project, index) in projects"
        :key="project.id"
        :ref="(el) => setCardRef(el, index)"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        :class="[
          'group project-card cursor-pointer md:col-span-1 md:row-span-1 block project-motion',
          cardVisible[index] ? 'project-visible' : (index % 2 === 0 ? 'project-hidden-left' : 'project-hidden-right')
        ]"
        @mouseenter="onProjectMouseEnter(project)"
        @mouseleave="onProjectMouseLeave(project)"
      >
        <div class="aspect-video w-full overflow-hidden rounded-xl border border-white/5 bg-surface-card relative shadow-2xl shadow-black/20">
          <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500 pointer-events-none"></div>

          <!-- Image Carousel -->
          <div class="relative w-full h-full">
            <img
              :src="project.images[carouselIndexes[project.id]]"
              :alt="`${project.title} - ${carouselIndexes[project.id] + 1}`"
              :class="[
                'w-full h-full object-cover transition-all duration-700 ease-out grayscale-[20%] group-hover:grayscale-0',
                !project.video ? 'group-hover:scale-105' : ''
              ]"
            />

            <!-- Video overlay (solo proyectos con video) -->
            <video
              v-if="project.video"
              :ref="(el) => setVideoRef(el, project.id)"
              :src="project.video"
              loop
              muted
              playsinline
              preload="metadata"
              class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5]"
            />

            <template v-if="project.images.length > 1">
              <button
                @click.prevent.stop="goToPrevious(project.id, project.images.length)"
                class="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Imagen anterior"
              >
                <ChevronLeft :size="20" />
              </button>
              <button
                @click.prevent.stop="goToNext(project.id, project.images.length)"
                class="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Imagen siguiente"
              >
                <ChevronRight :size="20" />
              </button>

              <div class="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                <button
                  v-for="(_, imgIndex) in project.images"
                  :key="imgIndex"
                  @click.prevent.stop="goToSlide(project.id, imgIndex)"
                  :class="['w-2 h-2 rounded-full transition-all duration-300', imgIndex === carouselIndexes[project.id] ? 'bg-primary w-6' : 'bg-white/50 hover:bg-white/80']"
                  :aria-label="`Ir a imagen ${imgIndex + 1}`"
                />
              </div>

              <div class="absolute top-3 right-3 z-20 px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm text-white text-xs font-mono">
                {{ carouselIndexes[project.id] + 1 }} / {{ project.images.length }}
              </div>
            </template>
          </div>
        </div>

        <div class="mt-6 flex flex-col md:flex-row justify-between items-start gap-4">
          <div class="w-full">
            <h3 class="text-2xl text-white font-serif group-hover:text-primary transition-colors">{{ project.title }}</h3>
            <p class="text-slate-400 mt-2 text-sm leading-relaxed w-full md:max-w-sm">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mt-4 text-xs font-mono text-slate-500 uppercase tracking-wide">
              <span v-for="tag in project.tags" :key="tag" class="border border-white/10 px-2 py-1 rounded whitespace-nowrap">{{ tag }}</span>
            </div>
          </div>

          <div class="w-full md:w-auto mt-4 md:mt-0 px-5 py-3 md:px-4 md:py-2 rounded-full border border-white/10 flex items-center justify-center md:justify-start gap-2 group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0 bg-white/5 md:bg-transparent">
            <span class="text-sm font-medium">Visitar Proyecto</span>
            <ArrowUpRight :size="18" />
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.project-motion {
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.project-hidden-left {
  opacity: 0;
  transform: translateX(-100px);
}

.project-hidden-right {
  opacity: 0;
  transform: translateX(100px);
}

.project-visible {
  opacity: 1;
  transform: translateX(0);
}
</style>
