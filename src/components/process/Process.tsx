import React from 'react'
import { EditorialRule } from '../common/EditorialRule.tsx'
import { SectionIntro } from '../common/SectionIntro.tsx'
import { ProcessStep } from './ProcessStep.tsx'
import { DemoPlaceholder } from './DemoPlaceholder.tsx'

export const Process: React.FC = () => {
  const steps = [
    {
      step: '1',
      title: 'Cadastre o cliente',
      description: 'Nome, WhatsApp e tags como Ibovespa, VALE3 ou Dividendos.',
    },
    {
      step: '2',
      title: 'Deixe a IA trabalhar',
      description: 'O painel cruza notícias com o perfil de cada cliente.',
    },
    {
      step: '3',
      title: 'Revise e envie',
      description: 'Confira o resumo e abra o WhatsApp pronto para o disparo.',
    },
  ]

  return (
    <section id="como-funciona" className="w-[min(1120px,calc(100%-48px))] max-w-[1120px] mx-auto py-16 md:py-[72px] max-md:py-12">
      <EditorialRule />
      <SectionIntro
        eyebrow="Simples desde a primeira manhã"
        title="Sua nova rotina em 3 passos."
        className="reveal"
      />
      <ol className="grid grid-cols-1 md:grid-cols-3 gap-11 max-md:gap-7 p-0 my-9">
        {steps.map((item, idx) => (
          <ProcessStep
            key={item.step}
            step={item.step}
            title={item.title}
            description={item.description}
            isLast={idx === steps.length - 1}
          />
        ))}
      </ol>
      <DemoPlaceholder />
    </section>
  )
}
