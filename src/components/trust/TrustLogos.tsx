import React from 'react'

export const TrustLogos: React.FC = () => {
  const logos = ['InfoMoney', 'G1 Economia', 'Gemini', 'WhatsApp']

  return (
    <div className="flex flex-wrap gap-[15px_22px] md:gap-[35px] text-black/40 font-serif text-[15px] items-center">
      {logos.map((logo) => (
        <b key={logo} className="font-serif font-medium tracking-tight">
          {logo}
        </b>
      ))}
    </div>
  )
}
