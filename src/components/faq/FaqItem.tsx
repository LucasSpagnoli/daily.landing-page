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
    <div className="border-b border-black/10 py-5 transition-colors duration-200">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between text-left font-sans font-semibold text-base text-black cursor-pointer group focus:outline-none"
      >
        <span className="pr-6 transition-colors duration-200 group-hover:text-black/80">
          {question}
        </span>
        <span
          className={`shrink-0 w-8 h-8 grid place-items-center border border-black/15 bg-white transition-all duration-300 ease-out ${
            isOpen
              ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] rotate-45'
              : 'text-black/40 group-hover:border-black group-hover:text-black group-hover:scale-105'
          }`}
          aria-hidden="true"
        >
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>

      {/* Accordion expand/collapse smooth transition */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[620px] text-black/65 text-sm leading-relaxed font-sans m-0 pb-1">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}
