import React from 'react'
import { WindowTop } from './WindowTop.tsx'
import { AppHeader } from './AppHeader.tsx'
import { AppCardsWrap } from './AppCardsWrap.tsx'

export const ProductFrame: React.FC = () => {
  return (
    <div
      aria-label="Representação do painel da plataforma"
      className="overflow-hidden bg-white border border-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.1)] lg:rotate-[1.1deg] max-md:m-[8px_8px_0_0] transition-transform duration-300"
    >
      <WindowTop />
      <div className="bg-white min-h-[350px]">
        <AppHeader />
        <AppCardsWrap />
      </div>
    </div>
  )
}
