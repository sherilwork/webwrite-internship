
"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Play, ExternalLink, TrendingUp, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const categories = ["All", "Videos", "Websites", "Ads Results"]

const projects = [
  {
    id: 1,
    title: "Cinematic Brand Story",
    category: "Videos",
    image: "work-video-1",
    metric: "2.4M Views",
    description: "High-end brand storytelling for global tech leaders."
  },
  {
    id: 2,
    title: "EcoSphere SaaS Platform",
    category: "Websites",
    image: "work-website-1",
    metric: "99.9% Performance",
    description: "Cloud-native infrastructure visualization dashboard."
  },
  {
    id: 3,
    title: "Global Meta Campaign",
    category: "Ads Results",
    image: "work-ads-1",
    metric: "12.5x ROAS",
    description: "Data-driven scale for high-performance e-commerce."
  },
  {
    id: 4,
    title: "Commercial Motion Kit",
    category: "Videos",
    image: "work-video-2",
    metric: "4k Resolution",
    description: "Custom motion graphics for broadcast television."
  },
  {
    id: 5,
    title: "Luxe Fashion Store",
    category: "Websites",
    image: "work-website-2",
    metric: "300% Conversion",
    description: "High-converting headless commerce experience."
  },
  {
    id: 6,
    title: "Search Engine Domination",
    category: "Ads Results",
    image: "work-ads-2",
    metric: "+450% Traffic",
    description: "Advanced SEO and SEM strategy for competitive niches."
  }
]

export function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  )

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-6 max-w-2xl">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Portfolio</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.05] tracking-tighter uppercase">
                FEATURED <br />
                <span className="text-[#f5b800]">WORK & RESULTS</span>
              </h2>
              <div className="w-12 md:w-20 h-1.5 bg-black mt-2" />
            </div>
            <p className="text-base md:text-lg text-black/50 font-medium leading-relaxed max-w-md">
              A curated selection of projects where creativity meets measurable digital performance.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border",
                  activeCategory === cat
                    ? "bg-black text-white border-black"
                    : "bg-transparent text-black/40 border-black/10 hover:border-black/30"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#f7f7f5] border border-black/[0.05] shadow-[0_10px_40px_rgba(0,0,0,0.02)] transition-all duration-700 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transform-gpu">
                  <Image
                    src={PlaceHolderImages.find(img => img.id === project.image)?.imageUrl || ""}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.category === "Videos" ? (
                        <Play className="w-5 h-5 fill-current" />
                      ) : (
                        <ExternalLink className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/5 shadow-sm">
                    <TrendingUp className="w-3.5 h-3.5 text-[#f5b800]" />
                    <span className="text-[10px] font-black text-black uppercase tracking-wider">
                      {project.metric}
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-2 px-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#f5b800]">
                      {project.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-black/20 group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-xl font-black text-black uppercase tracking-tight group-hover:text-[#f5b800] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-black/40 font-medium leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 flex justify-center">
          <Button className="rounded-full bg-black text-white px-10 py-7 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black/90 transition-all hover:translate-y-[-2px] active:scale-95 shadow-2xl shadow-black/20 group">
            View Full Portfolio
            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
