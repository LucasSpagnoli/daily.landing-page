import React, { useState } from 'react'

export const DemoPlaceholder: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="reveal min-h-[280px] flex flex-col items-center justify-center gap-3.5 border border-dashed border-black/20 bg-black/[0.02] text-center p-6 mt-9 transition-colors">
      <b className="font-serif font-light text-[17px] text-black">
        Cadastro → feed personalizado → resumo → WhatsApp
      </b>
      <p className="m-0 text-black/40 font-mono text-[11px] tracking-[0.1em] uppercase">
        {isPlaying ? 'Demonstração ativa da interface' : 'Clique para ver o fluxo simplificado'}
      </p>
      <button
        type="button"
        aria-label="Reproduzir demonstração"
        onClick={() => setIsPlaying(!isPlaying)}
        className="grid w-11 h-11 place-items-center border border-black bg-white text-black hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer shadow-sm text-sm"
      >
        {isPlaying ? '❚❚' : '▶'}
      </button>
    </div>
  )
}
