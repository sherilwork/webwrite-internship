"use client"

import React, { useState, useEffect } from "react"
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
            <div className="flex-1 flex flex-col items-start text-left gap-3 animate-in fade-in slide-in-from-left-12 duration-1000 ease-out z-30 h-full pt-12 pb-8">
              <div className="flex items-center gap-2 bg-white border border-black/5 rounded-full px-2.5 py-1 shadow-sm -mt-4">
                <div className="bg-[#f5b800] text-white px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase shrink-0">
                  CLARITY
                </div>
                <span className="text-[12px] font-bold text-black/70 tracking-tight whitespace-nowrap">Starts with the Right Experts!</span>
              </div>

              <div className="space-y-1 mt-2 w-full">
                <h1 className="text-5xl font-black text-black leading-tight tracking-tighter flex items-center flex-wrap gap-x-3">
                  <div className="relative inline-block h-[1.1em] min-w-[320px] overflow-visible z-40">
                    <span className="whitespace-nowrap absolute left-0 top-0">
                      {isMounted ? currentText : phrases[0]}
                      <span className="inline-block w-[3px] h-[0.8em] bg-[#f5b800] ml-1 align-middle animate-pulse" />
                    </span>
                  </div>
                  <span className="font-light text-black/80 whitespace-nowrap">Strategy Session</span>
                </h1>
                <div className="w-12 h-1 bg-[#f5b800] mt-3" />
              </div>

              <p className="text-xs font-medium text-black/40 max-w-xs leading-relaxed mt-1">
                Book a <span className="text-[#f5b800] font-bold">FREE Consultation</span> with <br />
                <span className="text-black font-bold border-b border-black/10 pb-0.5">Webwrite services Strategy Experts</span>
              </p>

              <div className="grid grid-cols-3 gap-6 w-full max-w-lg py-6 mt-auto">
                <div className="flex flex-col items-center text-center gap-2.5 group">
                  <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center bg-white shadow-sm transition-transform group-hover:scale-110 duration-300">
                    <Users className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-black uppercase tracking-wider">Expert Guidance</h4>
                    <p className="text-[10px] text-black/40 mt-0.5 font-medium leading-tight">Top industry strategists</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-2.5 group">
                  <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center bg-white shadow-sm transition-transform group-hover:scale-110 duration-300">
                    <Target className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-black uppercase tracking-wider">Strategic Plan</h4>
                    <p className="text-[10px] text-black/40 mt-0.5 font-medium leading-tight">Custom-built roadmaps</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-2.5 group">
                  <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center bg-white shadow-sm transition-transform group-hover:scale-110 duration-300">
                    <TrendingUp className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-black uppercase tracking-wider">Growth Focus</h4>
                    <p className="text-[10px] text-black/40 mt-0.5 font-medium leading-tight">Measurable ROI & scale</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Group */}
            <div className="flex flex-row items-center justify-end gap-0">
              <div className="relative w-[600px] aspect-[16/10] -mr-40 mt-12 z-20 pointer-events-none animate-in fade-in slide-in-from-right-12 duration-1000 ease-out group">
                <div className="absolute top-[0%] bottom-[5%] left-[25%] right-[25%] bg-blue-100 rounded-[5rem] -z-10 opacity-80" />
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

              <div className="w-auto flex justify-end relative z-30">
                <BookingCard imageUrl="/hero-illustration.png" />
              </div>
            </div>
          </div>
        </div>
      </GridBackground>
    </div>
  )
}
