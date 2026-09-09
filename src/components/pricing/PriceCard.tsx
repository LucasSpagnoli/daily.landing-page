import React from 'react'
import { Button } from '../common/Button.tsx'

export const PriceCard: React.FC = () => {
  const features = [
    'Cadastre seus primeiros clientes',
    'Configure interesses individuais',
    'Gere feeds e resumos com IA',
    'Prepare envios pelo WhatsApp',
  ]

  return (
    <article className="reveal p-8 bg-white text-black shadow-[0_24px_48px_rgba(0,0,0,0.4)] border border-black/10">
      <span className="font-sans text-[11px] font-semibold tracking-[0.14em] text-black/60 uppercase block">
        Acesso completo no teste
      </span>
      <h3 className="mt-3.5 mb-0 font-sans font-semibold text-xl leading-[1.25] text-black">
        Para validar o Daily.News na sua rotina.
      </h3>
      <div className="mt-4 text-sm text-black/60 font-sans">
        A partir de{' '}
        <strong className="font-sans font-bold text-xl text-black">
          R$ XX/mês
        </strong>
        <small className="block mt-1 font-sans tracking-normal text-black/50 text-xs">
          após os 7 dias grátis · placeholder de preço
        </small>
      </div>

      <ul className="grid gap-2.5 p-0 my-[26px] list-none text-sm text-black font-sans">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-[#D4AF37] font-bold mr-2.5">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button href="#preco" fullWidth>
        Começar teste grátis de 7 dias
      </Button>

      <small className="block mt-3.5 text-black/50 text-xs text-center font-sans">
        Sem cobrança durante o teste. Cancele quando quiser.
      </small>
    </article>
  )
}
