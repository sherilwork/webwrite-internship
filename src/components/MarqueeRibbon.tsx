"use client"

import React from 'react'
import { cn } from '@/lib/utils'

const words = [
  "WEBSITE DEVELOPMENT",
  "APP DEVELOPMENT",
  "PERFORMANCE MARKETING",
  "SOCIAL MEDIA MARKETING",
  "META ADS",
  "SEO",
  "LOGO DESIGN",
  "VIDEO EDITING",
  "UI/UX DESIGN"
]

export function MarqueeRibbon() {
  const MarqueeGroup = () => (
    <div className="flex items-center gap-12 md:gap-24 px-6 md:px-12 whitespace-nowrap">
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span className="text-white text-[16px] md:text-[24px] font-extrabold uppercase tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            {word}
          </span>
          <div className="w-3 h-3 md:w-4 md:h-4 bg-[#ff6b1a] rotate-45 shrink-0 drop-shadow-[0_0_10px_rgba(255,107,26,0.5)]" />
        </React.Fragment>
      ))}
    </div>
  )

  return (
    <section className="bg-[#050505] py-1 overflow-hidden relative w-full select-none">
      {/* Background Ambient Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80px] bg-gradient-to-r from-transparent via-[#ff6b1a]/5 to-transparent blur-[50px] pointer-events-none" />
      
      {/* Mask for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-0 relative z-20">
        {/* Ribbon 1: Moving Left */}
        <div className="group flex overflow-hidden">
          <div 
            className="flex py-3 md:py-5 bg-white/[0.02] border-y border-white/[0.05] backdrop-blur-sm animate-marquee-left hover:[animation-play-state:paused] transition-all duration-700 hover:scale-[1.01] hover:bg-white/[0.04]"
            style={{ 
              willChange: 'transform',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d'
            }}
          >
            <MarqueeGroup />
            <MarqueeGroup />
          </div>
        </div>

        {/* Ribbon 2: Moving Right */}
        <div className="group flex overflow-hidden">
          <div 
            className="flex py-3 md:py-5 bg-white/[0.02] border-y border-white/[0.05] backdrop-blur-sm animate-marquee-right hover:[animation-play-state:paused] transition-all duration-700 hover:scale-[1.01] hover:bg-white/[0.04]"
            style={{ 
              willChange: 'transform',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d'
            }}
          >
            <MarqueeGroup />
            <MarqueeGroup />
          </div>
        </div>
      </div>
    </section>
  )
}
