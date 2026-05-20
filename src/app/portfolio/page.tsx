
"use client"

import React from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { SubHeader } from "@/components/SubHeader"
import { Footer } from "@/components/Footer"
import { GridBackground } from "@/components/GridBackground"
import { FeaturedVideos } from "@/components/FeaturedVideos"
import { FeaturedWebsites } from "@/components/FeaturedWebsites"
import { ArrowRight, Sparkles, TrendingUp, Users, Target, Zap } from "lucide-react"

const stats = [
  { value: "100+", label: "Projects Delivered", icon: Zap },
  { value: "50+", label: "Global Clients", icon: Users },
  { value: "98%", label: "Satisfaction Rate", icon: Target },
  { value: "45%", label: "Average ROI Growth", icon: TrendingUp },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubHeader />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-60 pb-20 overflow-hidden">
        <GridBackground gridSize={40} gridOpacity={0.03} showEdgeFade={true} className="h-[500px] absolute inset-0 -z-10" />
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
              <Sparkles className="w-3.5 h-3.5 text-[#f5b800]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Our Body of Work</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-black leading-[1.05] tracking-tighter uppercase">
              CRAFTING DIGITAL <br />
              <span className="text-[#f5b800]">EXCELLENCE</span>
            </h1>
            <div className="w-20 h-2 bg-black mt-4" />
            <p className="text-lg md:text-xl text-black/50 font-medium leading-relaxed pt-4">
              Explore our diverse body of work across high-performance web development, cinematic video production, and strategic digital solutions for modern brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-5 h-5 text-[#f5b800]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-[#f5b800] tracking-tighter">{stat.value}</h3>
                <p className="text-[9px] md:text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Sections */}
      <div className="space-y-12">
        <FeaturedWebsites />
        <FeaturedVideos />
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-black/[0.03]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="p-12 rounded-[3rem] bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-black uppercase tracking-tighter">Ready to scale your digital presence?</h2>
              <p className="text-sm font-bold uppercase tracking-widest opacity-60">Let's build a strategy that works for your unique goals.</p>
            </div>
            <a href="https://wa.me/917906627288" target="_blank" rel="noopener noreferrer">
              <button className="px-10 py-5 rounded-full bg-[#f5b800] text-black text-xs font-black uppercase tracking-widest hover:translate-x-1 transition-all active:scale-95 flex items-center gap-3">
                Start a project
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
