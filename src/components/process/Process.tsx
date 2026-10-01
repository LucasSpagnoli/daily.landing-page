import React from 'react'
import { EditorialRule } from '../common/EditorialRule.tsx'
import { SectionIntro } from '../common/SectionIntro.tsx'
import { ProcessSlide } from './ProcessSlide.tsx'
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll.ts'

// quantos "vh" de scroll cada slide ocupa (maior = mais scroll entre imagens)
const SCROLL_PER_SLIDE = 50

const steps = [
  {
    step: '01',
    title: "Na aba 'Clientes', registre seu assessorado",
    image: '/images/1.jpg',
  },
  {
    step: '02',
   title: 'Cadastre as preferências que ele quiser',
    image: '/images/2.jpg',
  },
  {
    step: '03',
    title: "Na aba 'Feed', clique para gerar feed",
    image: '/images/3.jpg',
  },
  {
    step: '04',
    title: 'Clique em enviar resumo e mande a mensagem!',
    image: '/images/4.jpg',
  },
]

export const Process: React.FC = () => {
  const { wrapperRef, active } = useHorizontalScroll(steps.length)

  return (
    <section id="como-funciona">
      <div className="w-[min(1120px,calc(100%-48px))] max-w-[1120px] mx-auto pt-16 md:pt-[72px] max-md:pt-12">
        <EditorialRule />
        <SectionIntro
          eyebrow="Simples desde a primeira manhã"
          title="Sua nova rotina em 4 passos."
          className="reveal"
        />
      </div>

      {/* DESKTOP */}
      <div
        ref={wrapperRef}
        // cada slide ganha SCROLL_PER_SLIDE vh; +100vh é a altura da própria tela presa
        style={{ height: `${steps.length * SCROLL_PER_SLIDE + 100}vh` }}
        className="hidden md:block relative">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
          <div
            style={{
              width: `${steps.length * 100}%`,
              transform: `translate3d(-${(active * 100) / steps.length}%, 0, 0)`,
            }}
            className="flex flex-1 min-h-0 pt-24 will-change-transform transition-transform duration-[1000ms] ease-[cubic-bezier(0.65,0,0.35,1)]">
            {steps.map((item, i) => (
              <ProcessSlide key={item.step} {...item} isActive={i === active} />
            ))}
          </div>

          {/* indicador de progresso */}
          <div className="w-[min(800px,calc(100%-48px))] mx-auto py-2 flex gap-2">
            {steps.map((item, i) => (
              <div
                key={item.step}
                className={`h-[2px] flex-1 transition-colors duration-500 ${
                  i <= active ? 'bg-[#D4AF37]' : 'bg-black/10'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden flex flex-col gap-12 py-10">
        {steps.map((item) => (
          <ProcessSlide key={item.step} {...item} mobile />
        ))}
      </div>
    </section>
  )
}