import React from 'react'

export const Reassurance: React.FC = () => {
  return (
    <div className="flex gap-3 items-start max-w-[400px] mt-7 pt-5 border-t border-white/20">
      <span className="grid shrink-0 w-[22px] h-[22px] place-items-center bg-[#D4AF37] text-black font-bold text-xs">
        ✓
      </span>
      <p className="m-0 text-white text-[13px] leading-relaxed">
        <strong>Você revisa cada resumo.</strong>
        <br />
        O Daily.News não envia mensagens automaticamente.
      </p>
    </div>
  )
}
