import React from 'react'
import { HeroCopy } from './HeroCopy.tsx'
import { ProductFrame } from './mockup/ProductFrame.tsx'

export const Hero: React.FC = () => {
  return (
    <section className="w-[min(1120px,calc(100%-48px))] max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center min-h-[520px] py-14 max-md:pt-14 max-md:pb-20">
      <div className="order-0">
        <HeroCopy />
      </div>
      <ProductFrame />
    </section>
  )
}
