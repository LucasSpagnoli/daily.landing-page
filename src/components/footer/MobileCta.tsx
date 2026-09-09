import React from 'react'
import { Button } from '../common/Button.tsx'

export const MobileCta: React.FC = () => {
  return (
    <div className="fixed z-30 right-3 bottom-3 left-3 flex md:hidden shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
      <Button href="#preco" fullWidth showArrow>
        Começar teste grátis de 7 dias
      </Button>
    </div>
  )
}
