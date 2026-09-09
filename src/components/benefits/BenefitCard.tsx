import React from 'react'

interface BenefitCardProps {
  number: string
  title: string
  description: string
  className?: string
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  number,
  title,
  description,
  className = '',
}) => {
  return (
    <article
      className={`reveal min-h-[250px] max-md:min-h-0 p-[25px] border border-black/10 bg-white hover:border-[#D4AF37] hover:shadow-[0_14px_28px_rgba(0,0,0,0.06)] hover:-translate-y-[2px] transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        <span className="text-[#D4AF37] font-mono text-[13px] font-medium block">
          {number}
        </span>
        <h3 className="mt-[46px] max-md:mt-7 font-serif font-light text-xl leading-[1.25] tracking-[-0.005em] text-black">
          {title}
        </h3>
      </div>
      <p className="text-black/60 text-sm mt-3.5 mb-0 font-sans">
        {description}
      </p>
    </article>
  )
}
