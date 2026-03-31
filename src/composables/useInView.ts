import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useInView(
    options: { once?: boolean; margin?: string } = {}
): { target: Ref<HTMLElement | null>; isInView: Ref<boolean> } {
    const { once = true, margin = '-60px' } = options
    const target = ref<HTMLElement | null>(null)
    const isInView = ref(false)
    let observer: IntersectionObserver | null = null

    onMounted(() => {
        if (!target.value) return
        observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    isInView.value = true
                    if (once && observer && target.value) {
                        observer.unobserve(target.value)
                    }
                } else if (!once) {
                    isInView.value = false
                }
            },
            { rootMargin: margin }
        )
        observer.observe(target.value)
    })

    onUnmounted(() => {
        observer?.disconnect()
    })

    return { target, isInView }
}
