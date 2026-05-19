
"use client"

import React, { useState } from "react"
import Image from "next/image"
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
          <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-end gap-0">
            {/* Left Side: Hero Overlay Image */}
            <div className="relative w-full md:w-1/2 aspect-[16/10] max-w-[750px] md:-mr-48 md:mt-12 z-20 pointer-events-none animate-in fade-in slide-in-from-left-12 duration-1000 ease-out group">
              
              {/* Vertically Aligned Background Shape - Height increased from the top */}
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

            {/* Right Side: Booking Card */}
            <div className="w-full md:w-auto flex justify-end relative z-30">
              <BookingCard imageUrl="/hero-illustration.png" />
            </div>
          </div>
        </HeroPreview>
      </GridBackground>
      
      <Toaster />
    </main>
  )
}
