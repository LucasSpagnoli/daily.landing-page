import React from 'react'

interface BenefitCardProps {
  number: string
  title: string
  description: string
  image: string
  index: number
  className?: string
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  number,
  title,
  description,
  image,
  index,
  className = '',
}) => {
  const rotation = index % 2 === 0 ? '1.2deg' : '-1.2deg'

  return (
    <article
      style={
        {
          top: `calc(96px + ${index * 20}px)`,
          '--rotation': rotation,
        } as React.CSSProperties}
      className={`
        md:sticky md:[transform:rotate(var(--rotation))]
        grid grid-cols-1 md:grid-cols-2 md:h-[380px]
        bg-white overflow-hidden
        shadow-[0_24px_60px_-12px_rgba(0,0,0,0.28),0_8px_20px_rgba(0,0,0,0.10)]
        ${className} stack-card`}>
      <div className="p-8 md:p-12 flex flex-col justify-between order-2 md:order-1">
        <div>
          <span className="text-[#D4AF37] font-sans text-sm font-semibold tracking-wider block">
            {number}
          </span>
          <h3 className="mt-7 max-md:mt-5 font-sans font-semibold text-2xl md:text-3xl leading-[1.2] text-black">
            {title}
          </h3>
        </div>
        <p className="text-black/60 text-base mt-6 font-sans leading-relaxed">
          {description}
        </p>
      </div>

      <div className="order-1 md:order-2 h-56 md:h-full overflow-hidden">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    </article>
  )
}