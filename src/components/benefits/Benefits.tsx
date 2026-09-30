import React from 'react'
import { EditorialRule } from '../common/EditorialRule.tsx'
import { SectionIntro } from '../common/SectionIntro.tsx'
import { BenefitCard } from './BenefitCard.tsx'

const benefitsList = [
  {
    number: '01',
    title: 'Poupe de 2 a 3 horas todos os dias',
    description: 'Organizamos as informações relevantes para você.',
    image: '/images/benefit1.jpg',
  },
  {
    number: '02',
    title: 'Um resumo para cada perfil',
    description: 'Interesses individuais, de FIIs ao dólar.',
    image: '/images/benefit2.jpg',
  },
  {
    number: '03',
    title: 'Do feed ao WhatsApp',
    description: 'Resumo revisado, pronto para envio com um clique.',
    image: '/images/benefit3.jpg',
  },
]

export const Benefits: React.FC = () => {
  return (
    <section
      id="beneficios"
      className="w-[min(1120px,calc(100%-48px))] max-w-[1000px] mx-auto py-16 md:py-[72px] max-md:py-12">
      <EditorialRule />
      <SectionIntro
        eyebrow="Mais tempo para o relacionamento"
        title="O mercado não para. Mas você não precisa perder o dia todo lendo o feed."
        className="reveal"
      />

      {/* gap grande = distância de scroll entre um card e o próximo */}
      <div className="flex flex-col gap-3 md:gap-25 mt-20 max-md:mt-15">
        {benefitsList.map((benefit, i) => (
          <BenefitCard key={benefit.number} {...benefit} index={i} />
        ))}
      </div>
    </section>
  )
}