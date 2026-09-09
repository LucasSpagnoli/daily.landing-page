import React from 'react'
import { EditorialRule } from '../common/EditorialRule.tsx'
import { SectionIntro } from '../common/SectionIntro.tsx'
import { ObjectionCard } from './ObjectionCard.tsx'

export const ContrastSection: React.FC = () => {
  return (
    <section className="py-16 max-md:py-12 bg-black/[0.02] border-y border-black/5">
      <div className="w-[min(1120px,calc(100%-48px))] max-w-[1120px] mx-auto">
        <EditorialRule />
        <SectionIntro
          eyebrow="Clareza e confiança"
          title="Informação precisa. Sem ruído."
          centered
          className="reveal"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[50px] mt-10 max-md:mt-7">
          <ObjectionCard
            symbol="✦"
            title="Inteligência artificial cirúrgica"
            question="“A IA vai inventar notícias ou mandar coisas irrelevantes?”"
            answer="Não. O Gemini cruza preferências com notícias reais — e você revisa tudo antes de enviar."
          />
          <ObjectionCard
            symbol="◎"
            title="Cobertura ampla e confiável"
            question="“E se a plataforma deixar passar um movimento importante?”"
            answer="Acompanhamos RSS de portais como InfoMoney e G1 Economia em tempo real."
          />
        </div>
      </div>
    </section>
  )
}
