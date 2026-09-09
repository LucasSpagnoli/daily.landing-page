import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'small' | 'outline'
  fullWidth?: boolean
  className?: string
  showArrow?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  fullWidth = false,
  className = '',
  showArrow = false,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center border font-sans font-medium uppercase transition-all duration-300 cursor-pointer text-center'

  const variantStyles = {
    primary:
      'border-black bg-black text-white px-[22px] py-[14px] text-xs tracking-[0.18em] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black hover:shadow-[0_10px_24px_rgba(212,175,55,0.35)] hover:-translate-y-[1px] gap-[18px]',
    small:
      'border-black bg-black text-white px-4 py-[11px] text-[10px] tracking-[0.18em] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black hover:shadow-[0_10px_24px_rgba(212,175,55,0.35)] hover:-translate-y-[1px]',
    outline:
      'border-black/20 bg-transparent text-black px-2 py-1 text-[8px] tracking-[0.1em] hover:border-[#D4AF37] hover:text-[#D4AF37]',
  }

  const widthStyle = fullWidth ? 'w-full' : ''
  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${widthStyle} ${className}`

  const content = (
    <>
      {children}
      {showArrow && <span aria-hidden="true">→</span>}
    </>
  )

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  )
}
