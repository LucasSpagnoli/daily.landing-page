import React from 'react'

export const FooterLinks: React.FC = () => {
  return (
    <div className="flex gap-5">
      <a
        href="#"
        className="hover:text-[#D4AF37] transition-colors duration-200"
      >
        Termos de Uso
      </a>
      <a
        href="#"
        className="hover:text-[#D4AF37] transition-colors duration-200"
      >
        Política de Privacidade
      </a>
    </div>
  )
}
