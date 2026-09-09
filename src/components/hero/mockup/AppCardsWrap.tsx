import React from 'react'
import { AppCard } from './AppCard.tsx'

export const AppCardsWrap: React.FC = () => {
  const cardsData = [
    {
      clientName: 'Lucas',
      items: [
        'Ibovespa fecha em alta puxado pelo setor bancário',
        'Dólar recua e fecha a semana no menor patamar em dois meses',
      ],
      delay: '0.05s',
    },
    {
      clientName: 'Murilo',
      items: [
        'Inflação desacelera pelo terceiro mês seguido, aponta índice oficial',
        'Banco Central sinaliza manutenção da taxa de juros',
      ],
      delay: '0.15s',
    },
    {
      clientName: 'Tiago',
      items: [
        'Fundos imobiliários atraem novos investidores no mês',
        'Governo revisa projeção de crescimento para o próximo ano',
      ],
      delay: '0.25s',
    },
  ]

  return (
    <div className="relative">
      <div className="flex gap-3.5 p-[18px_20px_20px] overflow-x-auto [scrollbar-width:thin] [scrollbar-color:rgba(0,0,0,0.1)_transparent]">
        {cardsData.map((card) => (
          <AppCard
            key={card.clientName}
            clientName={card.clientName}
            items={card.items}
            delay={card.delay}
          />
        ))}
      </div>
      <div
        className="absolute top-0 right-0 bottom-0 w-9 bg-gradient-to-r from-transparent to-white pointer-events-none"
        aria-hidden="true"
      />
    </div>
  )
}
