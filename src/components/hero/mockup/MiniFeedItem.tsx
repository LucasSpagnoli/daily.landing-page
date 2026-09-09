import React from 'react'

interface MiniFeedItemProps {
  headline: string
  source?: string
  isLast?: boolean
}

export const MiniFeedItem: React.FC<MiniFeedItemProps> = ({
  headline,
  source,
  isLast = false,
}) => {
  return (
    <div
      className={`py-[9px] ${
        isLast ? 'border-b-0 pb-0' : 'border-b border-black/10'
      }`}
    >
      {source && (
        <span className="block text-[#D4AF37] font-sans text-[9px] font-semibold tracking-[0.08em] uppercase">
          {source}
        </span>
      )}
      <p className="m-0 mt-1 text-[11px] leading-[1.4] text-black/70 font-sans">
        {headline}
      </p>
    </div>
  )
}
