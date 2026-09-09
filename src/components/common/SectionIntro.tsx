import React from 'react'

interface SectionIntroProps {
  eyebrow?: string
  title: React.ReactNode
  helperText?: string
  centered?: boolean
  className?: string
  eyebrowColor?: 'gold' | 'muted'
}

export const SectionIntro: React.FC<SectionIntroProps> = ({
  eyebrow,
  title,
  helperText,
  centered = false,
  className = '',
  eyebrowColor = 'muted',
}) => {
  const eyebrowColorClass =
    eyebrowColor === 'gold' ? 'text-[#D4AF37]' : 'text-black/50'

  return (
    <div
      className={`max-w-[720px] ${
        centered ? 'mx-auto text-center' : ''
      } ${className}`}
    >
      {eyebrow && (
        <p
          className={`font-mono text-[11px] tracking-[0.22em] uppercase mb-[13px] ${eyebrowColorClass}`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif font-light text-[clamp(30px,3.6vw,46px)] leading-[1.12] tracking-[-0.015em] mb-0 text-black">
        {title}
      </h2>
      {helperText && (
        <p className="mt-[18px] text-black/60 text-sm">{helperText}</p>
      )}
    </div>
  )
}
