import React from 'react'
import { EditorialRule } from '../common/EditorialRule.tsx'
import { SectionIntro } from '../common/SectionIntro.tsx'
import { BenefitCard } from './BenefitCard.tsx'

export const Benefits: React.FC = () => {
  const benefitsList = [
    {
      number: '01',
      title: 'Poupe de 2 a 3 horas todos os dias',
      description: 'Organizamos as informações relevantes para você.',
    },
    {
      number: '02',
      title: 'Um resumo para cada perfil',
      description: 'Interesses individuais, de FIIs ao dólar.',
    },
    {
      number: '03',
      title: 'Do feed ao WhatsApp',
      description: 'Resumo revisado, pronto para envio com um clique.',
    },
  ]

  return (
    <section id="beneficios" className="w-[min(1120px,calc(100%-48px))] max-w-[1120px] mx-auto py-16 md:py-[72px] max-md:py-12">
      <EditorialRule />
      <SectionIntro
        eyebrow="Mais tempo para o relacionamento"
        title="O mercado não para. Mas você não precisa perder o dia todo lendo o feed."
        className="reveal"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-9 max-md:mt-7">
        {benefitsList.map((benefit) => (
          <BenefitCard
            key={benefit.number}
            number={benefit.number}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </section>
  )
}
