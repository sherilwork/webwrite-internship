"use client"

import React from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-section')?.imageUrl || "/about-image.png"

  return (
    <div className="bg-white pt-12 md:pt-24">
      <section className="min-h-screen flex items-center bg-white overflow-hidden py-20 lg:py-0">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            {/* Left Side: Text Content */}
            <div className="flex-1 space-y-6 md:space-y-8 max-w-2xl animate-in fade-in slide-in-from-left-8 duration-1000 ease-out will-change-transform">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Our Story</span>
                </div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-black leading-[1.05] tracking-tighter uppercase">
                  Meet Etawah‘s first <br />
                  <span className="text-[#f5b800]">Creative market agency</span>
                </h2>
                <p className="text-xs md:text-sm font-black uppercase tracking-[0.1em] text-black/40">
                  defining how brands build digital priority
                </p>
                <div className="w-16 md:w-20 h-1.5 bg-black mt-2" />
              </div>
              
              <div className="space-y-6 text-base md:text-lg text-black/50 font-medium leading-relaxed">
                <p>
                  Webwrite Services represents a modern approach to digital growth, where creativity meets strategy with clarity. Since 2023, working across multiple industries including education, events, restaurants, jewellery, and local businesses, one thing became clear — brands do not fail because of competition, they fail because their digital presence lacks direction, consistency, and trust.
                </p>
                <p>
                  Over 4+ years of experience working across 20+ industries and serving clients in 5+ countries worldwide, Webwrite Services has developed a structured understanding of how brands are discovered, remembered, and trusted in the digital world.
                </p>
              </div>

              <div className="pt-4 md:pt-6">
                <Link href="/about">
                  <Button className="rounded-full bg-black text-white px-8 md:px-10 py-6 md:py-7 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-black/90 transition-all hover:translate-x-1 active:scale-95 shadow-2xl shadow-black/20 group">
                    Discover our story
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Side: Visual Branding Area */}
            <div className="flex-1 w-full max-w-[280px] md:max-w-none mx-auto lg:w-auto relative group animate-in fade-in slide-in-from-right-8 duration-1000 ease-out will-change-transform">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#f5b800]/10 to-transparent rounded-[2rem] md:rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-1000" />
              
              <div className="relative aspect-square md:aspect-[4/3] w-full bg-black/[0.01] border border-black/[0.05] rounded-[2rem] md:rounded-[3rem] overflow-hidden backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-black/5">
                <Image 
                  src={aboutImage}
                  alt="WebWrite journey"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-ai-hint="team business"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
