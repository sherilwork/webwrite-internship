
"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface GridBackgroundProps {
  gridSize?: number
  gridOpacity?: number
  glowIntensity?: number
  highlightOpacity?: number
  showEdgeFade?: boolean
  showHighlights?: boolean
  className?: string
  children?: React.ReactNode
}

export const GridBackground = ({
  gridSize = 64,
  gridOpacity = 0.04,
  glowIntensity = 0.4,
  highlightOpacity = 0.3,
  showEdgeFade = true,
  showHighlights = true,
  className,
  children,
}: GridBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative h-screen w-full overflow-hidden bg-background transition-all duration-500",
        className
      )}
      style={
        {
          "--grid-size": `${gridSize}px`,
          "--grid-opacity": gridOpacity,
          "--glow-intensity": glowIntensity,
          "--highlight-opacity": highlightOpacity,
        } as React.CSSProperties
      }
    >
      {/* The Grid Layer */}
      <div className="premium-grid absolute inset-0 pointer-events-none" />

      {/* Radial Center Glow */}
      <div className="radial-glow absolute inset-0 pointer-events-none" />

      {/* Subtle Highlights */}
      {showHighlights && (
        <>
          <div 
            className="blurred-highlight absolute top-[15%] left-[10%] w-[300px] h-[300px] bg-blue-100 rounded-full pointer-events-none" 
          />
          <div 
            className="blurred-highlight absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-slate-200 rounded-full pointer-events-none" 
          />
        </>
      )}

      {/* Edge Fading */}
      {showEdgeFade && (
        <div className="absolute inset-0 bg-background/5 pointer-events-none backdrop-blur-[1px] edge-fade" />
      )}

      {/* Content Area */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  )
}
