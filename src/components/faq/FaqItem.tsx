import React, { useState } from 'react'

interface FaqItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

export const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-black/10 py-5">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between text-left font-sans font-semibold text-base text-black cursor-pointer group"
      >
        <span className="pr-6">{question}</span>
        <span
          className={`shrink-0 text-xl font-normal transition-colors duration-200 ${
            isOpen ? 'text-[#D4AF37]' : 'text-black/40 group-hover:text-black'
          }`}
        >
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <p className="max-w-[600px] mt-3.5 mb-0 text-black/60 text-sm leading-relaxed font-sans animate-fadeInUp">
          {answer}
        </p>
      )}
    </div>
  )
}
