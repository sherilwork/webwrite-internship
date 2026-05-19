"use client"

import React, { useState } from "react"
import { GridBackground } from "@/components/GridBackground"
import { ControlPanel } from "@/components/ControlPanel"
import { HeroPreview } from "@/components/HeroPreview"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  const [settings, setSettings] = useState({
    gridSize: 64,
    gridOpacity: 0.04,
    glowIntensity: 0.4,
    highlightOpacity: 0.3,
    edgeFade: true,
    highlights: true,
    alignment: "center" as "center" | "left",
  })

  const [copy, setCopy] = useState({
    headline: "Design with pure intent.",
    bodyText: "Create stunning minimalist interfaces with a robust mathematical grid. Precision engineering for the modern creative professional.",
  })

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  const handleCopySelect = (option: { headline: string; bodyText: string }) => {
    setCopy(option)
  }

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
        {/* Designer Sidebar */}
        <div className="fixed top-6 right-6 z-50 w-full max-w-sm hidden lg:block">
          <ControlPanel 
            settings={settings} 
            onSettingChange={handleSettingChange}
            onCopySelect={handleCopySelect}
          />
        </div>

        {/* Hero Preview */}
        <HeroPreview 
          headline={copy.headline} 
          bodyText={copy.bodyText} 
          alignment={settings.alignment}
        />

        {/* Mobile Designer Toggle (Simplified) - For now just hidden on mobile as specified "desktop and mobile" appearance but app is complex for mobile sidebar */}
        <div className="lg:hidden fixed bottom-6 left-6 right-6 z-50">
           <div className="bg-white/90 backdrop-blur-lg p-4 rounded-2xl shadow-2xl border flex items-center justify-between">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">GridSpace Designer</p>
              <p className="text-[10px] text-muted-foreground">Previewing Grid {settings.gridSize}px</p>
           </div>
        </div>
      </GridBackground>
      
      <Toaster />
    </main>
  )
}