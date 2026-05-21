
"use client"

import React from 'react'
import { cn } from '@/lib/utils'
import { 
  ShoppingBag, 
  Building2, 
  Plane, 
  Activity, 
  GraduationCap, 
  CreditCard, 
  Rocket, 
  Tv, 
  Landmark, 
  Heart, 
  Truck, 
  Factory, 
  Banknote, 
  Smartphone, 
  Car, 
  Gamepad2, 
  Megaphone, 
  Utensils, 
  Gavel, 
  Trophy, 
  Dumbbell, 
  Key,
  LucideIcon 
} from 'lucide-react'

interface Industry {
  name: string
  icon: LucideIcon
}

const industries: Industry[] = [
  { name: "Retail", icon: ShoppingBag },
  { name: "Real Estate", icon: Building2 },
  { name: "Travel & Tourism", icon: Plane },
  { name: "Healthcare", icon: Activity },
  { name: "Education", icon: GraduationCap },
  { name: "E-Commerce", icon: CreditCard },
  { name: "Startups", icon: Rocket },
  { name: "Media", icon: Tv },
  { name: "Govt. & Public", icon: Landmark },
  { name: "Nonprofits & NGOs", icon: Heart },
  { name: "Logistics", icon: Truck },
  { name: "Manufacturing", icon: Factory },
  { name: "Finance", icon: Banknote },
  { name: "On-Demand", icon: Smartphone },
  { name: "Automotive", icon: Car },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Advertising", icon: Megaphone },
  { name: "Food & Beverages", icon: Utensils },
  { name: "Legal Services", icon: Gavel },
  { name: "Sports", icon: Trophy },
  { name: "Fitness", icon: Dumbbell },
  { name: "Rentals", icon: Key },
]

export function IndustriesSection() {
  const row1 = industries.slice(0, 11)
  const row2 = industries.slice(11)

  const MarqueeItem = ({ item }: { item: Industry }) => (
    <div className="flex items-center shrink-0 px-3">
      <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.02)] group hover:border-[#f5b800]/50 hover:shadow-[0_8px_30px_rgba(245,184,0,0.05)] transition-all duration-500 cursor-default">
        <div className="w-8 h-8 rounded-xl bg-black/[0.02] flex items-center justify-center text-black/40 group-hover:bg-[#f5b800] group-hover:text-black transition-all duration-500 shadow-sm">
          <item.icon className="w-4 h-4" />
        </div>
        <span className="text-[13px] font-black text-black/80 uppercase tracking-tight transition-colors group-hover:text-black">
          {item.name}
        </span>
      </div>
    </div>
  )

  const MarqueeRow = ({ items, direction = 'left', speed = '40s' }: { 
    items: Industry[], 
    direction?: 'left' | 'right',
    speed?: string
  }) => (
    <div className="flex overflow-hidden relative group w-full py-4">
      <div 
        className={cn(
          "flex items-center will-change-transform transform-gpu",
          direction === 'left' ? "animate-industry-left" : "animate-industry-right"
        )}
        style={{ '--duration': speed } as React.CSSProperties}
      >
        {items.map((item, idx) => <MarqueeItem key={idx} item={item} />)}
        {items.map((item, idx) => <MarqueeItem key={`dup-${idx}`} item={item} />)}
      </div>
    </div>
  )

  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden border-t border-black/[0.03]">
      {/* Ambient background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f5b800]/[0.02] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="max-w-4xl space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Industries We Serve</span>
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

      <div className="flex flex-col gap-2 relative z-10">
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
