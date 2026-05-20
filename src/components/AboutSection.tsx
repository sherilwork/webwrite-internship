"use client"

import React from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left Side: Text Content */}
          <div className="flex-1 space-y-8 max-w-2xl animate-in fade-in slide-in-from-left-8 duration-1000 ease-out">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">About Webwrite</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.05] tracking-tighter">
                ELEVATING BRANDS <br />
                <span className="text-[#f5b800]">THROUGH PRECISION</span>
              </h2>
              <div className="w-20 h-1.5 bg-black mt-2" />
            </div>
            
            <p className="text-lg text-black/50 font-medium leading-relaxed">
              At Webwrite, we don't just build websites; we engineer digital ecosystems that drive growth. Our approach combines data-driven strategy with world-class design to ensure your brand stands out in an increasingly crowded digital landscape.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {[
                "Data-Driven Strategy",
                "Conversion Optimized Design",
                "Advanced Meta Advertising",
                "High-Performance Development"
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
                Learn our process
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Side: Visual Metrics Area */}
          <div className="flex-1 w-full lg:w-auto relative group animate-in fade-in slide-in-from-right-8 duration-1000 ease-out">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#f5b800]/20 to-transparent rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-1000" />
            
            <div className="relative aspect-square md:aspect-[4/3] w-full bg-black/[0.01] border border-black/[0.05] rounded-[3rem] overflow-hidden backdrop-blur-sm p-4 md:p-8 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 md:gap-6 w-full h-full max-w-lg">
                <div className="bg-white p-5 md:p-8 rounded-[2rem] shadow-2xl shadow-black/[0.04] flex flex-col justify-between border border-black/[0.03] hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center shadow-lg shadow-black/10">
                    <span className="text-[#f5b800] text-xl font-black">15+</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-black uppercase tracking-widest text-black/20">Global</p>
                    <p className="text-[13px] font-bold text-black uppercase">Markets Served</p>
                  </div>
                </div>
                
                <div className="bg-white p-5 md:p-8 rounded-[2rem] shadow-2xl shadow-black/[0.04] flex flex-col justify-between border border-black/[0.03] translate-y-8 hover:translate-y-6 transition-transform duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-[#f5b800] flex items-center justify-center shadow-lg shadow-[#f5b800]/20">
                    <span className="text-black text-xl font-black">98%</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-black uppercase tracking-widest text-black/20">Client</p>
                    <p className="text-[13px] font-bold text-black uppercase">Retention Rate</p>
                  </div>
                </div>
                
                <div className="bg-white p-5 md:p-8 rounded-[2rem] shadow-2xl shadow-black/[0.04] flex flex-col justify-between border border-black/[0.03] hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-black/[0.03] border border-black/5 flex items-center justify-center">
                    <span className="text-black text-xl font-black">250</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-black uppercase tracking-widest text-black/20">Projects</p>
                    <p className="text-[13px] font-bold text-black uppercase">Successful Ops</p>
                  </div>
                </div>
                
                <div className="bg-white p-5 md:p-8 rounded-[2rem] shadow-2xl shadow-black/[0.04] flex flex-col justify-between border border-black/[0.03] translate-y-8 hover:translate-y-6 transition-transform duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center shadow-lg shadow-black/10">
                    <span className="text-[#f5b800] text-xl font-black">5y+</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-black uppercase tracking-widest text-black/20">Agency</p>
                    <p className="text-[13px] font-bold text-black uppercase">Market Mastery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
