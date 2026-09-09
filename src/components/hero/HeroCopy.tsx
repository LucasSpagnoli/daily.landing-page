import React from 'react'
import { Button } from '../common/Button.tsx'

export const HeroCopy: React.FC = () => {
  return (
    <div className="max-w-[670px]">
      <p className="text-[#D4AF37] font-mono text-[11px] tracking-[0.22em] uppercase mb-[13px]">
        Exclusivo para assessores de investimentos
      </p>
      <h1 className="font-serif font-light text-[clamp(30px,3.6vw,46px)] leading-[1.15] tracking-[-0.015em] mb-[23px] text-black">
        Notícias relevantes, resumidas e prontas antes do{' '}
        <em className="italic font-normal">café</em>.
      </h1>
      <div className="flex items-center gap-[25px] mt-7">
        <Button href="#preco" showArrow>
          Começar teste grátis de 7 dias
        </Button>
      </div>
    </div>
  )
}
