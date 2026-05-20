
"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { SubHeader } from "@/components/SubHeader"
import { Footer } from "@/components/Footer"
import { GridBackground } from "@/components/GridBackground"
import { teamMembers } from "@/constants/team"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubHeader />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 overflow-hidden">
        <GridBackground gridSize={40} gridOpacity={0.03} showEdgeFade={true} className="h-[500px] absolute inset-0 -z-10" />
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Our Team</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-black leading-tight tracking-tighter uppercase">
              MEET THE MINDS <br />
              <span className="text-[#f5b800]">BEHIND WEBWRITE</span>
            </h1>
            <div className="w-20 h-2 bg-black mx-auto mt-4" />
            <p className="text-lg md:text-xl text-black/50 font-medium leading-relaxed">
              A diverse group of strategists, designers, and developers dedicated to turning your digital vision into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            
            {teamMembers.map((member, idx) => {
              const placeholder = PlaceHolderImages.find(img => img.id === member.imageId);
              const isFounder = member.id === 1;
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group"
                >
                  <div className={cn(
                    "relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 transition-transform duration-700 group-hover:scale-[1.02]",
                    isFounder 
                      ? "border-[3px] border-[#f5b800] shadow-2xl shadow-[#f5b800]/10" 
                      : "bg-black/[0.02] border border-black/[0.05] shadow-2xl shadow-black/[0.02]"
                  )}>
                    <Image
                      src={placeholder?.imageUrl || "https://picsum.photos/seed/placeholder/600/800"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-black uppercase tracking-tight">{member.name}</h3>
                    <p className="text-xs font-bold text-[#f5b800] uppercase tracking-widest">{member.role}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
