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
      <span className="shrink-0 w-10 h-10 grid place-items-center border border-black bg-white text-base text-black font-sans">
        {symbol}
      </span>
      <div>
        <h3 className="font-sans font-semibold text-lg text-black my-0.5 mb-2.5">
          {title}
        </h3>
        <p className="text-black font-medium text-sm mb-2 font-sans">
          {question}
        </p>
        <p className="text-black/60 text-sm font-sans m-0 leading-relaxed">
          {answer}
        </p>
      </div>
    </article>
  )
}
