"use client"

import React, { useState } from "react"
import { GridBackground } from "@/components/GridBackground"
import { HeroPreview } from "@/components/HeroPreview"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  const [settings] = useState({
    gridSize: 32,
    gridOpacity: 0.04,
    glowIntensity: 0.4,
    highlightOpacity: 0.3,
    edgeFade: true,
    highlights: true,
    alignment: "center" as "center" | "left",
  })

  const [copy] = useState({
    headline: "Design with pure intent.",
    bodyText: "Create stunning minimalist interfaces with a robust mathematical grid. Precision engineering for the modern creative professional.",
  })

  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Background Layer */}
      <GridBackground
        gridSize={settings.gridSize}
        gridOpacity={settings.gridOpacity}
        glowIntensity={settings.glowIntensity}
        highlightOpacity={settings.highlightOpacity}
        showEdgeFade={settings.edgeFade}
        showHighlights={settings.highlights}
      >
        {/* Hero Preview */}
        <HeroPreview 
          headline={copy.headline} 
          bodyText={copy.bodyText} 
          alignment={settings.alignment}
        />
      </GridBackground>
      
      <Toaster />
    </main>
  )
}
