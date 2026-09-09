import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const allReveal = document.querySelectorAll('.reveal')
      allReveal.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const revealEls = document.querySelectorAll('.reveal')
    if (!revealEls.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('is-visible')
            }, i * 60)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    revealEls.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [])
}
