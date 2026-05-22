"use client"

import React, { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Users, Target, TrendingUp } from "lucide-react"
import { GridBackground } from "@/components/GridBackground"
import { Navigation } from "@/components/Navigation"
import { SubHeader } from "@/components/SubHeader"
import { BookingCard } from "@/components/BookingCard"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function DesktopHero() {
  const [settings] = useState({
    gridSize: 32,
    gridOpacity: 0.04,
    glowIntensity: 0.4,
    highlightOpacity: 0.3,
    edgeFade: true,
    highlights: true,
  })

  const phrases = ["Digital Marketing", "Meta ads", "Video editing"]
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState(phrases[0]) // Start with first phrase to avoid flash
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
        setTypingSpeed(2500) // Longer pause at end
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

  const heroOverlay = PlaceHolderImages.find(img => img.id === 'hero-overlay')

  return (
    <div className="relative h-screen bg-background text-foreground overflow-hidden">
      <SubHeader />
      <Navigation />
      
      <GridBackground
        gridSize={settings.gridSize}
        gridOpacity={settings.gridOpacity}
        glowIntensity={settings.glowIntensity}
        highlightOpacity={settings.highlightOpacity}
        showEdgeFade={settings.edgeFade}
        showHighlights={settings.highlights}
        className="h-full"
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-center pt-32 pb-4">
          <div className="w-full flex flex-row items-center justify-between gap-4 h-full">
            
            {/* Left Content Area */}
            <div className="flex-1 flex flex-col items-start text-left gap-3 animate-in fade-in slide-in-from-left-12 duration-1000 ease-out z-30 h-full pt-12 pb-8 will-change-transform">
              <div className="flex items-center gap-2 bg-white border border-black/5 rounded-full px-2.5 py-1 shadow-sm -mt-4 transition-transform hover:scale-105">
                <div className="bg-[#f5b800] text-white px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase shrink-0">
                  CLARITY
                </div>
                <span className="text-[12px] font-bold text-black/70 tracking-tight whitespace-nowrap">Starts with the Right Experts!</span>
              </div>

              <div className="space-y-1 mt-2 w-full">
                <h1 className="text-5xl font-black text-black leading-tight tracking-tighter flex items-center flex-wrap gap-x-3">
                  <div className="relative inline-block h-[1.1em] min-w-[320px] overflow-visible z-40">
                    <span className="whitespace-nowrap absolute left-0 top-0 transition-all duration-300">
                      {currentText}
                      <span className="inline-block w-[3px] h-[0.8em] bg-[#f5b800] ml-1 align-middle animate-pulse" />
                    </span>
                  </div>
                  <span className="font-light text-black/80 whitespace-nowrap">Strategy Session</span>
                </h1>
                <div className="w-12 h-1 bg-[#f5b800] mt-3" />
              </div>

              <p className="text-xs font-medium text-black/40 max-w-xs leading-relaxed mt-1">
                Book a <span className="text-[#f5b800] font-bold">FREE Consultation</span> with <br />
                <span className="text-black font-bold border-b border-black/10 pb-0.5">WebWrite Services Strategy Experts</span>
              </p>

              <div className="grid grid-cols-3 gap-6 w-full max-w-lg py-6 mt-auto">
                {[
                  { icon: Users, label: "Expert Guidance", desc: "Top industry strategists" },
                  { icon: Target, label: "Strategic Plan", desc: "Custom-built roadmaps" },
                  { icon: TrendingUp, label: "Growth Focus", desc: "Measurable ROI & scale" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center gap-2.5 group transition-transform hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center bg-white shadow-sm transition-all group-hover:bg-[#f5b800]/5 group-hover:scale-110 duration-300">
                      <item.icon className="w-5 h-5 text-black group-hover:text-[#f5b800] transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-black uppercase tracking-wider">{item.label}</h4>
                      <p className="text-[10px] text-black/40 mt-0.5 font-medium leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Group */}
            <div className="flex flex-row items-center justify-end gap-0">
              <div className="relative w-[850px] aspect-[16/10] -mr-64 mt-12 z-20 pointer-events-none animate-in fade-in slide-in-from-right-12 duration-1000 ease-out group will-change-transform">
                <div className="absolute top-[0%] bottom-[5%] left-[25%] right-[25%] bg-blue-100/40 rounded-[5rem] -z-10 blur-xl" />
                
                <Image 
                  src={heroOverlay?.imageUrl || "/hero-section-overlay.png"}
                  alt="Hero Visual Overlay"
                  fill
                  className="object-contain z-10 transition-transform duration-700 group-hover:scale-105"
                  priority
                  data-ai-hint="business woman"
                  loading="eager"
                />
              </div>

              <div className="w-auto flex justify-end relative z-30 transform transition-all duration-500">
                <BookingCard imageUrl="/hero-illustration.png" />
              </div>
            </div>
          </div>
        </div>
      </GridBackground>
    </div>
  )
}