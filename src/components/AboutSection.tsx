
"use client"

import React from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-section')?.imageUrl || "/about-image.png"

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left Side: Text Content */}
          <div className="flex-1 space-y-8 max-w-2xl animate-in fade-in slide-in-from-left-8 duration-1000 ease-out">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.05] tracking-tighter">
                FROM SMALL STEPS <br />
                <span className="text-[#f5b800]">TO BIG IDEAS</span>
              </h2>
              <div className="w-20 h-1.5 bg-black mt-2" />
            </div>
            
            <p className="text-lg text-black/50 font-medium leading-relaxed">
              At Webwrite, we started with a simple belief: that big dreams deserve digital spaces that work. We've grown into a partner that builds websites that connect and content that resonates. Every project is an opportunity to turn a simple idea into a real success, helping you leave a lasting mark.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {[
                "Personalized Solutions",
                "Simple, Effective Designs",
                "Content That Connects",
                "Practical Innovation",
                "Long-Term Growth Focus",
                "Clear Communication"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center shrink-0 group-hover:bg-[#f5b800]/20 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black group-hover:text-[#f5b800] transition-colors" />
                  </div>
                  <span className="text-[13px] font-black uppercase tracking-wider text-black/80">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button className="rounded-full bg-black text-white px-10 py-7 text-xs font-bold uppercase tracking-widest hover:bg-black/90 transition-all hover:translate-x-1 active:scale-95 shadow-2xl shadow-black/20 group">
                Discover our story
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Side: Visual Branding Area */}
          <div className="flex-1 w-full lg:w-auto relative group animate-in fade-in slide-in-from-right-8 duration-1000 ease-out">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#f5b800]/20 to-transparent rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-1000" />
            
            <div className="relative aspect-square md:aspect-[4/3] w-full bg-black/[0.01] border border-black/[0.05] rounded-[3rem] overflow-hidden backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-black/5">
              <Image 
                src={aboutImage}
                alt="Webwrite journey"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                data-ai-hint="team business"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
