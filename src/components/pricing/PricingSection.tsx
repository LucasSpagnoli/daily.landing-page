import React from 'react'
import { EditorialRule } from '../common/EditorialRule.tsx'
import { Reassurance } from './Reassurance.tsx'
import { PriceCard } from './PriceCard.tsx'

export const PricingSection: React.FC = () => {
  return (
    <section id="preco" className="py-16 max-md:py-12 bg-black text-white">
      <div className="w-[min(1120px,calc(100%-48px))] max-w-[1120px] mx-auto">
        <EditorialRule inverse />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-20 items-center mt-7">
          <div className="reveal">
            <p className="text-[#D4AF37] font-sans text-xs font-semibold tracking-[0.2em] uppercase mb-3.5">
              Comece sem risco
            </p>
            <h2 className="font-serif font-light text-[clamp(30px,3.6vw,46px)] leading-[1.12] tracking-[-0.015em] mb-0 text-white">
              Teste a sua nova rotina antes de decidir.
            </h2>
            <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-[540px] font-sans">
              Durante 7 dias, use o painel completo com seus próprios clientes —
              sem contrato e sem perder o controle da mensagem.
            </p>
            <Reassurance />
          </div>

          <PriceCard />
        </div>
      </div>
    </section>
  )
}
