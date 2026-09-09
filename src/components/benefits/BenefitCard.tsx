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
      className={`reveal min-h-[230px] max-md:min-h-0 p-6 border border-black/10 bg-white hover:border-[#D4AF37] hover:shadow-[0_14px_28px_rgba(0,0,0,0.06)] hover:-translate-y-[2px] transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        <span className="text-[#D4AF37] font-sans text-sm font-semibold tracking-wider block">
          {number}
        </span>
        <h3 className="mt-7 max-md:mt-5 font-sans font-semibold text-lg leading-[1.3] text-black">
          {title}
        </h3>
      </div>
      <p className="text-black/60 text-sm mt-3 mb-0 font-sans leading-relaxed">
        {description}
      </p>
    </article>
  )
}
