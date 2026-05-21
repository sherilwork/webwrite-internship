
"use client"

import React from "react"
import Hero from "@/components/hero"
import { MarqueeRibbon } from "@/components/MarqueeRibbon"
import { AboutSection } from "@/components/AboutSection"
import ServicesSection from "@/components/ServicesSection"
import { FeaturedVideos } from "@/components/FeaturedVideos"
import { FeaturedWebsites } from "@/components/FeaturedWebsites"
import { Tech } from "@/components/Tech"
import { IndustriesSection } from "@/components/IndustriesSection"
import { Testimonials } from "@/components/Testimonials"
import { FounderSection } from "@/components/FounderSection"
import { FAQSection } from "@/components/FAQSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Hero />
      <MarqueeRibbon />
      <AboutSection />
      <ServicesSection />
      <FeaturedVideos />
      <FeaturedWebsites />
      <Tech />
      <IndustriesSection />
      <Testimonials />
      <FounderSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </main>
  )
}
