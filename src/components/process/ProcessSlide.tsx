import React from 'react'

interface ProcessSlideProps {
  step: string
  title: string
  image?: string
  isActive?: boolean
  mobile?: boolean
}

export const ProcessSlide: React.FC<ProcessSlideProps> = ({
  step,
  title,
  image,
  isActive = true,
  mobile = false,
}) => {
  return (
    <div
      className={mobile
          ? 'w-full flex flex-col items-center gap-5 px-6'
          : 'flex-1 min-w-0 h-full flex flex-col items-center justify-center gap-6'}>
      {/* imagem grande, centralizada, com o número por cima */}
      <div
        className={`relative shadow-[0_24px_60px_-12px_rgba(0,0,0,0.3)] transition-all duration-[1000ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
          mobile
            ? 'w-full aspect-[16/9]'
            : 'h-[70vh] aspect-[16/9] max-w-[calc(100%-48px)]'
        } ${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-90'}`}>
        <div className="w-full h-full overflow-hidden bg-black/[0.04]">
            <img src={image} alt="" loading="lazy" className="w-full h-full object-cover" />
        </div>

        <span className="absolute bottom-0 left-0 grid w-8 h-8 place-items-center bg-[#D4AF37] text-black font-sans font-bold text-sm">
          {step}
        </span>
      </div>

      {/* texto pequeno abaixo */}
      <div
        className={`text-center max-w-[520px] px-6 transition-opacity duration-[1000ms] ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}>
        <h3 className="font-sans font-semibold text-lg text-black">{title}</h3>
      </div>
    </div>
  )
}