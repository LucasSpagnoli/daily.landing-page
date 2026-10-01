import { useEffect, useRef, useState } from 'react'

export function useHorizontalScroll(count: number) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    let raf = 0

    const update = () => {
      raf = 0
      const wrapper = wrapperRef.current
      if (!wrapper) return

      const max = wrapper.offsetHeight - window.innerHeight
      if (max <= 0) return

      // progresso de 0 a 1 enquanto a seção está presa
      const p = Math.min(Math.max(-wrapper.getBoundingClientRect().top / max, 0), 1)

      // divide o scroll em "zonas" iguais: cada zona = um slide
      setActive(Math.min(count - 1, Math.floor(p * count)))
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [count])

  return { wrapperRef, active }
}