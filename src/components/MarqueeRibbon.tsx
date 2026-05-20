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
          <span className="text-black text-[16px] md:text-[24px] font-black uppercase tracking-tight drop-shadow-sm">
            {word}
          </span>
          <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-[#f5b800] rounded-full shrink-0 shadow-[0_0_10px_rgba(245,184,0,0.3)]" />
        </React.Fragment>
      ))}
    </div>
  )

  return (
    <section className="bg-white py-0 overflow-hidden relative w-full select-none border-y border-black/[0.03]">
      {/* Background Ambient Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80px] bg-gradient-to-r from-transparent via-[#f5b800]/5 to-transparent blur-[50px] pointer-events-none" />
      
      {/* Mask for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-0 relative z-20">
        {/* Ribbon 1: Moving Left */}
        <div className="group flex overflow-hidden">
          <div 
            className="flex py-3 md:py-6 bg-black/[0.01] border-y border-black/[0.02] backdrop-blur-sm animate-marquee-left hover:[animation-play-state:paused] transition-all duration-700 hover:scale-[1.01] hover:bg-black/[0.02]"
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
            className="flex py-3 md:py-6 bg-black/[0.01] border-y border-black/[0.02] backdrop-blur-sm animate-marquee-right hover:[animation-play-state:paused] transition-all duration-700 hover:scale-[1.01] hover:bg-black/[0.02]"
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

      <style jsx global>{`
        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-left {
          animation: marquee-left 45s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 50s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee-left { animation-duration: 30s; }
          .animate-marquee-right { animation-duration: 35s; }
        }
      `}</style>
    </section>
  )
}
