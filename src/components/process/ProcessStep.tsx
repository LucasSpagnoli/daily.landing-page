import React from 'react'

interface ProcessStepProps {
  step: string
  title: string
  description: string
  isLast?: boolean
  className?: string
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
  isLast = false,
  className = '',
}) => {
  return (
    <li
      className={`reveal relative list-none ${
        !isLast
          ? 'md:after:content-[""] md:after:absolute md:after:top-5 md:after:-right-[31px] md:after:w-[18px] md:after:border-t md:after:border-black/10'
          : ''
      } ${className}`}
    >
      <span className="grid w-10 h-10 place-items-center bg-[#D4AF37] text-black font-mono font-medium text-sm">
        {step}
      </span>
      <h3 className="my-5 mb-2.5 font-serif font-light text-xl text-black">
        {title}
      </h3>
      <p className="text-black/60 text-sm m-0 leading-relaxed font-sans">
        {description}
      </p>
    </li>
  )
}
