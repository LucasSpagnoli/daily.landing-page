import React from 'react'
import { NavLink } from './NavLink.tsx'

interface NavProps {
  className?: string
}

export const Nav: React.FC<NavProps> = ({ className = '' }) => {
  return (
    <nav
      aria-label="Navegação principal"
      className={`hidden md:flex items-center gap-7 ${className}`}>
      
      <NavLink href="#beneficios">Benefícios</NavLink>
      <NavLink href="#como-funciona">Como funciona</NavLink>
      <NavLink href="#faq">FAQ</NavLink>
    </nav>
  )
}
