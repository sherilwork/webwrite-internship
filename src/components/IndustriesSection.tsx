
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
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

const brandLogos = [
  { id: 1, src: "/clients-logo/imgi_16_WhatsApp-Image-2025-04-27-at-12.17.08_40b3f6fc.jpg" },
  { id: 2, src: "/clients-logo/imgi_17_logochiilumchai.png" },
  { id: 3, src: "/clients-logo/imgi_18_IMG_2520-scaled.png" },
  { id: 4, src: "/clients-logo/imgi_19_Untitleddesign-modified-2.png" },
  { id: 5, src: "/clients-logo/imgi_20_file.png" },
  { id: 6, src: "/clients-logo/imgi_21_41096640619.png" },
  { id: 7, src: "/clients-logo/imgi_23_IMG_0062-1.png" },
  { id: 8, src: "/clients-logo/imgi_24_Ajmera-Trends-1.png" },
];

export function IndustriesSection() {
  const MarqueeGroup = () => (
    <div className="flex items-center gap-12 md:gap-24 px-6 md:px-12 whitespace-nowrap">
      {brandLogos.map((logo) => (
        <div key={logo.id} className="relative h-12 w-28 md:h-20 md:w-48 shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform-gpu cursor-pointer">
          <Image 
            src={logo.src} 
            alt="Collaborator Brand" 
            fill 
            className="object-contain" 
            sizes="(max-width: 768px) 112px, 192px"
          />
        </div>
      ))}
    </div>
  )

  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden border-t border-black/[0.03]">
      {/* Background Ambient Glow - Optimized Opacity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[#f5b800]/[0.015] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6">
        {/* Centered Header Section */}
        <div className="max-w-3xl mx-auto text-center space-y-8 mb-20">
          <div className="space-y-4 flex flex-col items-center">
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
          <p className="text-base md:text-xl text-black/40 font-medium leading-relaxed">
            We provide AI-powered digital marketing solutions across multiple industries, helping businesses increase visibility, generate leads, and scale revenue with data-driven strategies.
          </p>
        </div>

        {/* Optimized High-Fidelity Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.015, duration: 0.4, ease: "easeOut" }}
              className="group relative will-change-transform transform-gpu"
            >
              <div className="h-full flex flex-col items-center justify-center p-4 md:p-5 rounded-[1.5rem] bg-[#fcfcfc] border border-black/[0.04] shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.03)] hover:border-[#f5b800]/30 hover:-translate-y-1 transition-all duration-300 ease-out cursor-default transform-gpu">
                {/* Icon Container */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-black/[0.02] flex items-center justify-center text-black/40 group-hover:bg-[#f5b800] group-hover:text-black transition-all duration-300 ease-out shadow-sm mb-4">
                  <item.icon size={24} strokeWidth={1.5} className="transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                {/* Label */}
                <span className="text-[9px] md:text-[11px] font-black text-black/60 uppercase tracking-[0.1em] text-center transition-colors duration-300 group-hover:text-black">
                  {item.name}
                </span>

                {/* Subtle Accent Line */}
                <div className="absolute bottom-4 w-3 h-0.5 bg-[#f5b800] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collaborations Section */}
        <div className="mt-32 pt-24 border-t border-black/[0.03]">
          <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
            <div className="space-y-4 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Our Partners</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black leading-[1.05] tracking-tighter uppercase">
                COLLABORATIONS WITH <br />
                <span className="text-[#f5b800]">LEADING BRANDS</span>
              </h2>
              <div className="w-16 md:w-20 h-1.5 bg-black mt-2" />
            </div>
            <p className="text-base md:text-xl text-black/40 font-medium leading-relaxed max-w-2xl mx-auto">
              Get to know the talented individuals who make our company thrive. Our diverse team brings together a wealth of expertise.
            </p>
          </div>

          <div className="relative overflow-hidden w-full -mx-6 md:-mx-12">
            {/* Mask for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex overflow-hidden">
              <div 
                className="flex py-10 animate-brand-marquee-left hover:[animation-play-state:paused] transition-all duration-700"
                style={{ '--duration': '40s' } as React.CSSProperties}
              >
                <MarqueeGroup />
                <MarqueeGroup />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes brand-marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-brand-marquee-left {
          animation: brand-marquee-left var(--duration, 40s) linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  )
}
