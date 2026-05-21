
"use client"

import React from 'react'
import { cn } from '@/lib/utils'

const industries = [
  "Retail", "Real Estate", "Travel & Tourism", "Healthcare", "Education", 
  "E-Commerce", "Startups", "Media", "Govt. & Public", "Nonprofits & NGOs", 
  "Logistics", "Manufacturing", "Finance", "On-Demand", "Automotive", 
  "Gaming", "Advertising", "Food & Beverages", "Legal Services", "Sports", 
  "Fitness", "Rentals"
]

export function IndustriesSection() {
  const row1 = industries.slice(0, 11)
  const row2 = industries.slice(11)

  const MarqueeItem = ({ text }: { text: string }) => (
    <div className="flex items-center shrink-0 px-6 md:px-10">
      <div className="flex items-center gap-3 md:gap-5 group">
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#f5b800] shadow-[0_0_10px_rgba(245,184,0,0.5)] group-hover:scale-150 transition-transform duration-500" />
        <span className="text-xl md:text-4xl font-black text-black/80 uppercase tracking-tighter transition-colors group-hover:text-black">
          {text}
        </span>
      </div>
    </div>
  )

  const MarqueeRow = ({ items, direction = 'left', speed = '40s' }: { 
    items: string[], 
    direction?: 'left' | 'right',
    speed?: string
  }) => (
    <div className="flex overflow-hidden relative group w-full py-4 md:py-6">
      <div 
        className={cn(
          "flex items-center will-change-transform transform-gpu",
          direction === 'left' ? "animate-industry-left" : "animate-industry-right"
        )}
        style={{ '--duration': speed } as React.CSSProperties}
      >
        {items.map((item, idx) => <MarqueeItem key={idx} text={item} />)}
        {items.map((item, idx) => <MarqueeItem key={`dup-${idx}`} text={item} />)}
      </div>
    </div>
  )

  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden border-t border-black/[0.03]">
      {/* Ambient background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f5b800]/[0.02] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-16 md:mb-20">
        <div className="max-w-4xl space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Our Reach</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black leading-[1.05] tracking-tighter uppercase">
              STRATEGIC IMPACT <br />
              <span className="text-[#f5b800]">ACROSS ALL SECTORS</span>
            </h2>
            <div className="w-16 md:w-20 h-1.5 bg-black mt-2" />
          </div>
          <p className="text-base md:text-xl text-black/50 font-medium leading-relaxed max-w-2xl">
            We deliver specialized digital solutions and AI-powered marketing across a diverse spectrum of industries, driving visibility and scalable growth with data-driven precision.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 md:gap-4 relative z-10">
        <MarqueeRow items={row1} direction="left" speed="35s" />
        <MarqueeRow items={row2} direction="right" speed="40s" />
      </div>

      <style jsx global>{`
        @keyframes industry-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes industry-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-industry-left {
          animation: industry-left var(--duration, 40s) linear infinite;
        }
        .animate-industry-right {
          animation: industry-right var(--duration, 40s) linear infinite;
        }
        @media (max-width: 768px) {
          .animate-industry-left, .animate-industry-right {
            animation-duration: 25s;
          }
        }
      `}</style>
    </section>
  )
}
