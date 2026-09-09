import React from 'react'

export const TrustLogos: React.FC = () => {
  const logos = ['InfoMoney', 'G1 Economia', 'Gemini', 'WhatsApp']

  return (
    <div className="flex flex-wrap gap-[18px_24px] md:gap-[36px] text-black/50 font-sans text-[13px] items-center">
      {logos.map((logo) => (
        <span key={logo} className="font-sans font-semibold tracking-tight">
          {logo}
        </span>
      ))}
    </div>
  )
}
