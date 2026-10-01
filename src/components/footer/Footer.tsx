import React from 'react'
import { Brand } from '../common/Brand.tsx'
// import { FooterLinks } from './FooterLinks.tsx'

export const Footer: React.FC = () => {
  return (
    <footer className="py-[38px] border-t border-black/10 bg-[#F7F6F2]">
      <div className="w-[min(1120px,calc(100%-48px))] max-w-[1120px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-black/40 text-xs">
        <Brand />
        <p className="m-0 text-black/40 text-xs text-center sm:text-left order-3 sm:order-2">
          © 2026 Daily.News. Todos os direitos reservados.
        </p>
        {/* <div className="order-2 sm:order-3">
          <FooterLinks />
        </div> */}
      </div>
    </footer>
  )
}
