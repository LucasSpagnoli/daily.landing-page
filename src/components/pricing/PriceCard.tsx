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
      <span className="font-mono text-[11px] font-medium tracking-[0.14em] text-black/60 uppercase block">
        Acesso completo no teste
      </span>
      <p className="mt-4 mb-0 font-serif font-light text-2xl leading-[1.18] tracking-[-0.01em] text-black">
        Para validar o Daily.News na sua rotina.
      </p>
      <div className="mt-[18px] text-sm text-black/60">
        A partir de{' '}
        <strong className="font-mono font-semibold text-lg text-black">
          R$ XX/mês
        </strong>
        <small className="block mt-1 font-mono tracking-[0.03em] text-black/40 text-[11px]">
          após os 7 dias grátis · placeholder de preço
        </small>
      </div>

      <ul className="grid gap-2.5 p-0 my-[26px] list-none text-sm text-black">
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

      <small className="block mt-3.5 text-black/40 text-[11px] text-center font-sans">
        Sem cobrança durante o teste. Cancele quando quiser.
      </small>
    </article>
  )
}
