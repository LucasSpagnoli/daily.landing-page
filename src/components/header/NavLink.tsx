import React from 'react'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, className = '' }) => {
  return (
    <a
      href={href}
      className={`text-black/50 hover:text-black transition-colors duration-200 text-[13px] ${className}`}
    >
      {children}
    </a>
  )
}
