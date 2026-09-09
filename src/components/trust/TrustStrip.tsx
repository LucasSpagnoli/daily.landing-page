import React from 'react'
import { TrustLogos } from './TrustLogos.tsx'

export const TrustStrip: React.FC = () => {
  return (
    <section className="border-y border-black/10 py-6 bg-transparent">
      <div className="w-[min(1120px,calc(100%-48px))] max-w-[1120px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-6 text-black/40 font-mono text-[11px] tracking-[0.04em]">
        <span>Fontes e integrações que alimentam seu feed</span>
        <TrustLogos />
      </div>
    </section>
  )
}
