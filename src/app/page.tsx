
"use client"

import React, { useState } from "react"
import Image from "next/image"
import { GridBackground } from "@/components/GridBackground"
import { HeroPreview } from "@/components/HeroPreview"
import { Navigation } from "@/components/Navigation"
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
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navigation />
      
      {/* Background Layer */}
      <GridBackground
        gridSize={settings.gridSize}
        gridOpacity={settings.gridOpacity}
        glowIntensity={settings.glowIntensity}
        highlightOpacity={settings.highlightOpacity}
        showEdgeFade={settings.edgeFade}
        showHighlights={settings.highlights}
      >
        {/* Hero Content Container */}
        <HeroPreview 
          headline="" 
          bodyText="" 
          alignment={settings.alignment}
        >
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Side: Hero Overlay Image */}
            <div className="relative w-full md:w-1/2 aspect-square max-w-[500px] animate-in fade-in slide-in-from-left-12 duration-1000 ease-out">
              <Image 
                src={heroOverlay?.imageUrl || "/hero-overlay.png"}
                alt="Hero Visual Overlay"
                fill
                className="object-contain"
                priority
                data-ai-hint="abstract overlay"
              />
            </div>

            {/* Right Side: Booking Card */}
            <div className="w-full md:w-auto flex justify-end">
              <BookingCard imageUrl="/hero-illustration.png" />
            </div>
          </div>
        </HeroPreview>
      </GridBackground>
      
      <Toaster />
    </main>
  )
}
