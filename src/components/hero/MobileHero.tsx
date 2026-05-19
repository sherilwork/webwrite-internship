"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Users, Target, TrendingUp } from "lucide-react"
import { GridBackground } from "@/components/GridBackground"
import { Navigation } from "@/components/Navigation"
import { SubHeader } from "@/components/SubHeader"
import { BookingCard } from "@/components/BookingCard"
import { PlaceHolderImages } from "@/lib/placeholder-images"

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
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const handleTyping = () => {
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
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, phraseIndex, typingSpeed, isMounted])

  const heroOverlay = PlaceHolderImages.find(img => img.id === 'hero-overlay')

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
        className="min-h-screen pt-40 pb-12"
      >
        <div className="container mx-auto px-4 flex flex-col gap-10">
          
          {/* Content Area */}
          <div className="flex flex-col items-center text-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out z-30">
            <div className="flex items-center gap-2 bg-white border border-black/5 rounded-full px-4 py-1.5 shadow-sm">
              <div className="bg-[#f5b800] text-white px-3 py-1 rounded-full text-[8px] font-black tracking-widest uppercase shrink-0">
                CLARITY
              </div>
              <span className="text-[10px] font-bold text-black/70 tracking-tight">Starts with the Right Experts!</span>
            </div>

            <div className="space-y-4 w-full">
              <h1 className="text-3xl font-black text-black leading-tight tracking-tighter flex flex-col items-center gap-2">
                <div className="relative h-[1.2em] w-full flex justify-center overflow-visible">
                  <span className="whitespace-nowrap">
                    {isMounted ? currentText : phrases[0]}
                    <span className="inline-block w-[3px] h-[0.8em] bg-[#f5b800] ml-1 align-middle animate-pulse" />
                  </span>
                </div>
                <span className="font-light text-black/80">Strategy Session</span>
              </h1>
              <div className="w-12 h-1 bg-[#f5b800] mx-auto" />
            </div>

            <p className="text-[11px] font-medium text-black/40 max-w-[280px] leading-relaxed mx-auto">
              Book a <span className="text-[#f5b800] font-bold">FREE Consultation</span> with <br />
              <span className="text-black font-bold border-b border-black/10 pb-0.5">Webwrite services Strategy Experts</span>
            </p>
          </div>

          {/* Visuals */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative w-full max-w-[320px] aspect-[1/1] z-20 pointer-events-none animate-in fade-in duration-1000">
              <div className="absolute inset-[10%] bg-blue-100 rounded-[3rem] -z-10 opacity-60" />
              <Image 
                src={heroOverlay?.imageUrl || "/hero-section-overlay.png"}
                alt="Hero Visual Overlay"
                fill
                className="object-contain z-10 scale-110"
                priority
                data-ai-hint="business woman"
              />
            </div>

            <div className="w-full max-w-sm z-30">
              <BookingCard imageUrl="/hero-illustration.png" />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6 w-full max-w-xs mx-auto pt-8 pb-12">
            <div className="flex items-center gap-4 text-left">
              <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center bg-white shadow-sm shrink-0">
                <Users className="w-4 h-4 text-black" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-black uppercase tracking-wider">Expert Guidance</h4>
                <p className="text-[9px] text-black/40 mt-0.5 font-medium leading-tight">Top industry strategists</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-left">
              <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center bg-white shadow-sm shrink-0">
                <Target className="w-4 h-4 text-black" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-black uppercase tracking-wider">Strategic Plan</h4>
                <p className="text-[9px] text-black/40 mt-0.5 font-medium leading-tight">Custom-built roadmaps</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-left">
              <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center bg-white shadow-sm shrink-0">
                <TrendingUp className="w-4 h-4 text-black" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-black uppercase tracking-wider">Growth Focus</h4>
                <p className="text-[9px] text-black/40 mt-0.5 font-medium leading-tight">Measurable ROI & scale</p>
              </div>
            </div>
          </div>
        </div>
      </GridBackground>
    </div>
  )
}
