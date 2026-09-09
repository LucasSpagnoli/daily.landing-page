import React from 'react'

interface EditorialRuleProps {
  inverse?: boolean
  className?: string
}

export const EditorialRule: React.FC<EditorialRuleProps> = ({
  inverse = false,
  className = '',
}) => {
  return (
    <div
      className={`border-t-[3px] ${
        inverse ? 'border-white' : 'border-black'
      } mb-[30px] max-md:mb-[22px] ${className}`}
    >
      <span className="block border-t border-[#D4AF37] mt-[3px]" />
    </div>
  )
}
