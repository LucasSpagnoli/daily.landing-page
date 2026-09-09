import React from 'react'

export const WindowTop: React.FC = () => {
  return (
    <div className="h-[30px] flex items-center gap-[5px] px-3 border-b border-black/10 bg-black/[0.02] text-black/40 text-[9px]">
      <span className="block w-1.5 h-1.5 rounded-full bg-black/20" />
      <span className="block w-1.5 h-1.5 rounded-full bg-black/20" />
      <span className="block w-1.5 h-1.5 rounded-full bg-black/20" />
      <b className="ml-2 font-mono font-normal">daily.news / feed</b>
    </div>
  )
}
