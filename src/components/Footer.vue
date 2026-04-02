<script setup lang="ts">
import { personal, links } from '@/data/portfolio'
</script>

<template>
  <footer class="col-span-1 lg:col-span-12 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
    <p>© 2026 {{ personal.name.full }}. All rights reserved.</p>
    <div class="flex gap-4">
      <a :href="links.linkedin" target="_blank" class="hover:text-white transition-colors">LinkedIn</a>
      <a :href="links.github" target="_blank" class="hover:text-white transition-colors">Github</a>
    </div>
  </footer>
</template>
