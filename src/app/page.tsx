"use client"

import React from "react"
import Hero from "@/components/hero"
import { MarqueeRibbon } from "@/components/MarqueeRibbon"
import { AboutSection } from "@/components/AboutSection"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Hero />
      <MarqueeRibbon />
      <AboutSection />
      <Toaster />
    </main>
  )
}
