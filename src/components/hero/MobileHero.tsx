"use client"

import React, { useState, useEffect, useCallback } from "react"
import { GridBackground } from "@/components/GridBackground"
import { Navigation } from "@/components/Navigation"
import { SubHeader } from "@/components/SubHeader"
import { BookingCard } from "@/components/BookingCard"

export function MobileHero() {
  const [settings] = useState({
    gridSize: 24,
    gridOpacity: 0.05,
    glowIntensity: 0.3,
    highlightOpacity: 0.2,
    edgeFade: true,
    highlights: true,
  })

  const phrases = ["Digital Marketing", "Meta ads", "Video editing"]
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState(phrases[0])
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleTyping = useCallback(() => {
    if (!isMounted) return
    const fullText = phrases[phraseIndex]
    
    if (!isDeleting) {
      setCurrentText(fullText.substring(0, currentText.length + 1))
      setTypingSpeed(100)
      if (currentText === fullText) {
        setIsDeleting(true)
        setTypingSpeed(2000)
      }
    } else {
      setCurrentText(fullText.substring(0, currentText.length - 1))
      setTypingSpeed(50)
      if (currentText === "") {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
        setTypingSpeed(500)
      }
    }
  }, [currentText, isDeleting, phraseIndex, isMounted])

  useEffect(() => {
    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [handleTyping, typingSpeed])

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <SubHeader />
      <Navigation />
      
      <GridBackground
        gridSize={settings.gridSize}
        gridOpacity={settings.gridOpacity}
        glowIntensity={settings.glowIntensity}
        highlightOpacity={settings.highlightOpacity}
        showEdgeFade={settings.edgeFade}
        showHighlights={settings.highlights}
        className="min-h-screen pt-36 pb-12"
      >
        <div className="container mx-auto px-4 flex flex-col gap-6">
          
          {/* Content Area */}
          <div className="flex flex-col items-center text-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out z-30 will-change-transform">
            <div className="flex items-center gap-2 bg-white border border-black/5 rounded-full px-4 py-1 shadow-sm active:scale-95 transition-transform">
              <div className="bg-[#f5b800] text-white px-3 py-0.5 rounded-full text-[8px] font-black tracking-widest uppercase shrink-0">
                CLARITY
              </div>
              <span className="text-[10px] font-bold text-black/70 tracking-tight">Starts with the Right Experts!</span>
            </div>

            <div className="space-y-2 w-full">
              <h1 className="text-3xl font-black text-black leading-tight tracking-tighter flex flex-col items-center gap-1">
                <div className="relative h-[1.2em] w-full flex justify-center overflow-visible">
                  <span className="whitespace-nowrap transition-all duration-300">
                    {currentText}
                    <span className="inline-block w-[3px] h-[0.8em] bg-[#f5b800] ml-1 align-middle animate-pulse" />
                  </span>
                </div>
                <span className="font-light text-black/80">Strategy Session</span>
              </h1>
              <div className="w-10 h-0.5 bg-[#f5b800] mx-auto" />
            </div>

            <p className="text-[11px] font-medium text-black/40 max-w-[280px] leading-relaxed mx-auto">
              Book a <span className="text-[#f5b800] font-bold">FREE Consultation</span> with <br />
              <span className="text-black font-bold border-b border-black/10 pb-0.5">WebWrite Services Strategy Experts</span>
            </p>
          </div>

          {/* Booking Section */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-full max-w-sm z-30 transition-all duration-500 ease-out">
              <BookingCard imageUrl="/hero-illustration.png" />
            </div>
          </div>
        </div>
      </GridBackground>
    </div>
  )
}
