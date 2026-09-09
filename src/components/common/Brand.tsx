import React from 'react'

interface BrandProps {
  className?: string
  href?: string
}

export const Brand: React.FC<BrandProps> = ({ className = '', href = '#top' }) => {
  return (
    <a
      href={href}
      aria-label="Daily.News, início"
      className={`font-serif font-light text-[22px] tracking-[0.01em] text-black hover:opacity-90 transition-opacity inline-block ${className}`}
    >
      Daily<span className="text-[#D4AF37]">.News</span>
    </a>
  )
}
