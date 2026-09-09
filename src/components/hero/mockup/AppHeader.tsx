import React from 'react'

export const AppHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-5 py-4 border-b border-black/10">
      <span className="font-serif font-light text-[15px] tracking-[0.02em] text-black">
        Daily<span className="text-[#D4AF37]">.News</span>
      </span>
      <nav className="flex gap-4 font-mono text-[9px] font-medium tracking-[0.12em] uppercase text-black/35">
        <span className="text-black border-b-2 border-[#D4AF37] pb-[2px] cursor-pointer">
          Clientes
        </span>
        <span className="hover:text-black cursor-pointer transition-colors">
          Feed
        </span>
        <span className="hover:text-black cursor-pointer transition-colors">
          Sair
        </span>
      </nav>
    </div>
  )
}
