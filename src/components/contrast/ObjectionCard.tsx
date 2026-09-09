import React from 'react'

interface ObjectionCardProps {
  symbol: string
  title: string
  question: string
  answer: string
  className?: string
}

export const ObjectionCard: React.FC<ObjectionCardProps> = ({
  symbol,
  title,
  question,
  answer,
  className = '',
}) => {
  return (
    <article className={`reveal flex gap-5 items-start ${className}`}>
      <span className="shrink-0 w-10 h-10 grid place-items-center border border-black bg-white text-lg font-serif text-black">
        {symbol}
      </span>
      <div>
        <h3 className="font-serif font-light text-xl text-black my-1 mb-3.5">
          {title}
        </h3>
        <p className="text-black font-semibold text-[15px] mb-2 font-sans">
          {question}
        </p>
        <p className="text-black/60 text-sm font-sans m-0 leading-relaxed">
          {answer}
        </p>
      </div>
    </article>
  )
}
