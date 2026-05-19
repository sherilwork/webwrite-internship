"use client"

import React from "react"
import { Sparkles } from "lucide-react"

export function SubHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-6 bg-black flex items-center justify-center gap-4 px-4 overflow-hidden">
      <div className="flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-1000">
        <Sparkles className="w-2.5 h-2.5 text-[#f5b800]" />
        <p className="text-[9px] font-bold text-white uppercase tracking-[0.3em] leading-none">
          NextSaaS AI: Revolutionizing Digital Marketing Strategy
        </p>
        <Sparkles className="w-2.5 h-2.5 text-[#f5b800]" />
      </div>
    </div>
  )
}
