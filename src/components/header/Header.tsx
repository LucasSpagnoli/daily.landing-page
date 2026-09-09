import React from 'react'
import { Brand } from '../common/Brand.tsx'
import { Button } from '../common/Button.tsx'
import { Nav } from './Nav.tsx'

export const Header: React.FC = () => {
  return (
    <div className="bg-[#FCFBF9] border-b border-black/10 sticky top-0 z-40">
      <header className="w-[min(1120px,calc(100%-48px))] max-w-[1120px] mx-auto h-[82px] max-md:h-[67px] flex items-center justify-between gap-7">
        <Brand />
        <Nav />
        <Button href="#preco" variant="small" className="hidden md:inline-flex">
          Começar teste grátis de 7 dias
        </Button>
      </header>
    </div>
  )
}
