
"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Users, Target, TrendingUp } from "lucide-react"
import { GridBackground } from "@/components/GridBackground"
import { HeroPreview } from "@/components/HeroPreview"
import { Navigation } from "@/components/Navigation"
import { SubHeader } from "@/components/SubHeader"
import { Toaster } from "@/components/ui/toaster"
import { BookingCard } from "@/components/BookingCard"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function Home() {
  const [settings] = useState({
    gridSize: 32,
    gridOpacity: 0.04,
    glowIntensity: 0.4,
    highlightOpacity: 0.3,
    edgeFade: true,
    highlights: true,
    alignment: "right" as "center" | "left" | "right",
  })

  const heroOverlay = PlaceHolderImages.find(img => img.id === 'hero-overlay')

  return (
    <main className="relative h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-hidden">
      <SubHeader />
      <Navigation />
      
      {/* Background Layer */}
      <GridBackground
        gridSize={settings.gridSize}
        gridOpacity={settings.gridOpacity}
        glowIntensity={settings.glowIntensity}
        highlightOpacity={settings.highlightOpacity}
        showEdgeFade={settings.edgeFade}
        showHighlights={settings.highlights}
        className="h-full"
      >
        {/* Hero Content Container */}
        <HeroPreview 
          headline="" 
          bodyText="" 
          alignment={settings.alignment}
        >
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
            
            {/* Left Content Area: New Strategic Branding - Optimized Size */}
            <div className="flex-1 flex flex-col items-start text-left gap-6 animate-in fade-in slide-in-from-left-12 duration-1000 ease-out z-30">
              
              {/* Clarity Badge */}
              <div className="flex items-center gap-3 bg-white border border-black/5 rounded-full px-3 py-1 shadow-sm">
                <div className="bg-[#f5b800] text-white px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase">
                  CLARITY
                </div>
                <span className="text-[10px] font-semibold text-black/60 tracking-tight">Starts with the Right Experts!</span>
              </div>

              {/* Strategy Session Headline */}
              <div className="space-y-1">
                <h1 className="text-4xl md:text-6xl font-black text-black leading-[0.85] tracking-tighter">
                  Digital Marketing <br />
                  <span className="font-light text-black/80">Strategy Session</span>
                </h1>
                <div className="w-16 h-1 bg-[#f5b800] mt-3" />
              </div>

              {/* Sub-headline / Offer */}
              <p className="text-xs md:text-sm font-medium text-black/40 max-w-sm leading-relaxed">
                Book a <span className="text-[#f5b800] font-bold">FREE Consultation</span> with <br />
                <span className="text-black font-bold border-b-2 border-black/10 pb-0.5">NextSaaS AI Strategy Experts</span>
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-3 gap-4 w-full max-w-lg py-2">
                <div className="flex flex-col items-center text-center gap-2 group">
                  <div className="w-11 h-11 rounded-full border border-black/5 flex items-center justify-center bg-white shadow-sm transition-transform group-hover:scale-110 duration-300">
                    <Users className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-black uppercase tracking-wider">Expert Guidance</h4>
                    <p className="text-[8px] text-black/40 mt-0.5 font-medium">Top industry strategists</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-2 group">
                  <div className="w-11 h-11 rounded-full border border-black/5 flex items-center justify-center bg-white shadow-sm transition-transform group-hover:scale-110 duration-300">
                    <Target className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-black uppercase tracking-wider">Strategic Plan</h4>
                    <p className="text-[8px] text-black/40 mt-0.5 font-medium">Custom-built roadmaps</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-2 group">
                  <div className="w-11 h-11 rounded-full border border-black/5 flex items-center justify-center bg-white shadow-sm transition-transform group-hover:scale-110 duration-300">
                    <TrendingUp className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-black uppercase tracking-wider">Growth Focus</h4>
                    <p className="text-[8px] text-black/40 mt-0.5 font-medium">Measurable ROI & scale</p>
                  </div>
                </div>
              </div>

              {/* Trusted Brands Pill */}
              <div className="w-full max-w-md bg-white/40 backdrop-blur-sm border border-black/5 rounded-full p-2.5 flex items-center gap-4 shadow-sm mt-2">
                <span className="text-[7px] font-bold text-black/40 uppercase tracking-[0.2em] pl-3 shrink-0">Trusted by</span>
                <div className="h-3 w-px bg-black/10" />
                <div className="flex items-center justify-between flex-1 pr-4 opacity-40 grayscale pointer-events-none select-none">
                  <span className="text-[9px] font-black tracking-tighter">TATA</span>
                  <span className="text-[9px] font-bold tracking-tighter italic">Coca-Cola</span>
                  <span className="text-[9px] font-black tracking-tighter">SBI</span>
                  <span className="text-[9px] font-black tracking-tighter italic">BAJAJ</span>
                  <span className="text-[9px] font-black tracking-tighter">Apollo</span>
                  <span className="text-[7px] font-medium text-black/40">& more</span>
                </div>
              </div>
            </div>

            {/* Right Group: Existing Image Overlay + Booking Card */}
            <div className="flex flex-col md:flex-row items-center justify-end gap-0">
              {/* Hero Overlay Image */}
              <div className="relative w-full md:w-[600px] aspect-[16/10] md:-mr-48 md:mt-12 z-20 pointer-events-none animate-in fade-in slide-in-from-right-12 duration-1000 ease-out group">
                {/* Vertically Aligned Background Shape */}
                <div className="absolute top-[0%] bottom-[5%] left-[25%] right-[25%] bg-blue-100 rounded-[5rem] -z-10 opacity-80" />
                
                {/* Vertically Aligned Dots Pattern */}
                <div className="absolute top-[10%] right-[20%] w-16 h-16 opacity-30 -z-10" 
                     style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px)', backgroundSize: '8px 8px' }} />
                
                <div className="absolute bottom-[10%] left-[20%] w-16 h-16 opacity-30 -z-10" 
                     style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px)', backgroundSize: '8px 8px' }} />
                
                <Image 
                  src={heroOverlay?.imageUrl || "/hero-section-overlay.png"}
                  alt="Hero Visual Overlay"
                  fill
                  className="object-contain z-10"
                  priority
                  data-ai-hint="business woman"
                />
              </div>

              {/* Booking Card */}
              <div className="w-full md:w-auto flex justify-end relative z-30">
                <BookingCard imageUrl="/hero-illustration.png" />
              </div>
            </div>
          </div>
        </HeroPreview>
      </GridBackground>
      
      <Toaster />
    </main>
  )
}
