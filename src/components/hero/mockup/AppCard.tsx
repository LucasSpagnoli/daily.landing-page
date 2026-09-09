import React, { useState } from 'react'
import { MiniFeedItem } from './MiniFeedItem.tsx'

interface AppCardProps {
  clientName: string
  items: string[]
  delay?: string
}

export const AppCard: React.FC<AppCardProps> = ({
  clientName,
  items,
  delay = '0s',
}) => {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => setIsGenerating(false), 600)
  }

  const handleSend = () => {
    setIsSent(true)
    setTimeout(() => setIsSent(false), 2000)
  }

  return (
    <article
      style={{ animationDelay: delay }}
      className="flex-none w-[210px] p-3.5 border border-black/10 bg-white hover:border-[#D4AF37] hover:shadow-[0_10px_20px_rgba(0,0,0,0.06)] hover:-translate-y-[2px] transition-all duration-300 animate-fadeInUp"
    >
      <div className="flex items-center justify-between gap-2 my-2 mt-0">
        <h4 className="m-0 font-serif font-light text-[15px] text-black">
          {clientName}
        </h4>
        <button
          type="button"
          onClick={handleGenerate}
          className="px-[7px] py-[5px] border border-black/20 bg-transparent text-black font-sans text-[8px] font-medium tracking-[0.1em] uppercase hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
        >
          {isGenerating ? 'Gerando...' : 'Gerar feed'}
        </button>
      </div>

      <div className="my-1.5 mb-3">
        {items.map((headline, idx) => (
          <MiniFeedItem
            key={idx}
            headline={headline}
            isLast={idx === items.length - 1}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={handleSend}
        className="w-full p-[9px] border-none bg-black text-white font-sans text-[9px] font-medium tracking-[0.1em] uppercase hover:bg-[#D4AF37] hover:text-black hover:scale-[0.98] transition-all duration-300 cursor-pointer"
      >
        {isSent ? '✓ Pronto p/ envio' : 'Enviar resumo'}
      </button>
    </article>
  )
}
