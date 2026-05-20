
"use client"

import React, { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Play, ExternalLink, TrendingUp, ArrowUpRight, Filter, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const categories = ["All", "Videos", "Websites", "Ads Results"]

const subCategoriesMap: Record<string, string[]> = {
  "All": [],
  "Videos": ["All", "Brand Story", "Commercial", "Motion Graphics"],
  "Websites": ["All", "SaaS", "E-commerce", "Corporate"],
  "Ads Results": ["All", "Meta Ads", "Google Ads", "SEO"],
}

const projects = [
  {
    id: 1,
    title: "Cinematic Brand Story",
    category: "Videos",
    subCategory: "Brand Story",
    image: "work-video-1",
    metric: "2.4M Views",
    description: "High-end brand storytelling for global tech leaders."
  },
  {
    id: 2,
    title: "EcoSphere SaaS Platform",
    category: "Websites",
    subCategory: "SaaS",
    image: "work-website-1",
    metric: "99.9% Performance",
    description: "Cloud-native infrastructure visualization dashboard."
  },
  {
    id: 3,
    title: "Global Meta Campaign",
    category: "Ads Results",
    subCategory: "Meta Ads",
    image: "work-ads-1",
    metric: "12.5x ROAS",
    description: "Data-driven scale for high-performance e-commerce."
  },
  {
    id: 4,
    title: "Commercial Motion Kit",
    category: "Videos",
    subCategory: "Motion Graphics",
    image: "work-video-2",
    metric: "4k Resolution",
    description: "Custom motion graphics for broadcast television."
  },
  {
    id: 5,
    title: "Luxe Fashion Store",
    category: "Websites",
    subCategory: "E-commerce",
    image: "work-website-2",
    metric: "300% Conversion",
    description: "High-converting headless commerce experience."
  },
  {
    id: 6,
    title: "Search Engine Domination",
    category: "Ads Results",
    subCategory: "SEO",
    image: "work-ads-2",
    metric: "+450% Traffic",
    description: "Advanced SEO and SEM strategy for competitive niches."
  }
]

export function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState("Videos")
  const [activeSubCategory, setActiveSubCategory] = useState("All")

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const categoryMatch = activeCategory === "All" || p.category === activeCategory
      const subCategoryMatch = activeSubCategory === "All" || p.subCategory === activeSubCategory
      return categoryMatch && subCategoryMatch
    })
  }, [activeCategory, activeSubCategory])

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setActiveSubCategory("All")
  }

  const renderProjectCard = (project: typeof projects[0]) => {
    const projectImage = PlaceHolderImages.find(img => img.id === project.image);
    return (
      <motion.div
        key={project.id}
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="group relative h-full pb-8"
      >
        {/* Changed to Portrait Aspect Ratio (Vertical Cards) */}
        <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-[#f7f7f5] border border-black/[0.05] shadow-[0_10px_40px_rgba(0,0,0,0.02)] transition-all duration-700 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transform-gpu">
          {projectImage?.imageUrl && (
            <Image
              src={projectImage.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          )}
          
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {project.category === "Videos" ? (
                <Play className="w-6 h-6 fill-current" />
              ) : (
                <ExternalLink className="w-6 h-6" />
              )}
            </div>
          </div>

          <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/5 shadow-sm">
            <TrendingUp className="w-3.5 h-3.5 text-[#f5b800]" />
            <span className="text-[10px] font-black text-black uppercase tracking-wider">
              {project.metric}
            </span>
          </div>
        </div>

        <div className="mt-6 space-y-2 px-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#f5b800]">
                {project.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-black/10" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/30">
                {project.subCategory}
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-black/20 group-hover:text-black transition-colors" />
          </div>
          <h3 className="text-xl font-black text-black uppercase tracking-tight group-hover:text-[#f5b800] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-black/40 font-medium leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <section className="bg-white py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05] w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Portfolio Showcase</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
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

        {/* Sub-Category Filter */}
        <AnimatePresence mode="wait">
          {activeCategory !== "All" && subCategoriesMap[activeCategory] && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-wrap items-center gap-4 mb-12 pb-4 border-b border-black/[0.03]"
            >
              <div className="flex items-center gap-2 text-[9px] font-black text-black/30 uppercase tracking-widest mr-2">
                <Filter className="w-3 h-3" />
                Refine:
              </div>
              {subCategoriesMap[activeCategory].map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubCategory(sub)}
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-widest transition-colors",
                    activeSubCategory === sub
                      ? "text-[#f5b800]"
                      : "text-black/40 hover:text-black"
                  )}
                >
                  {sub}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeCategory === "Videos" ? (
              <motion.div
                key="video-slider"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4 md:-ml-8">
                    {filteredProjects.map((project) => (
                      <CarouselItem key={project.id} className="pl-4 md:pl-8 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                        {renderProjectCard(project)}
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-end gap-3 mt-8">
                    <CarouselPrevious className="static translate-y-0 h-12 w-12 border-black/5 hover:bg-black hover:text-white transition-all" />
                    <CarouselNext className="static translate-y-0 h-12 w-12 border-black/5 hover:bg-black hover:text-white transition-all" />
                  </div>
                </Carousel>
              </motion.div>
            ) : (
              <motion.div 
                key="grid-layout"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
              >
                {filteredProjects.map((project) => renderProjectCard(project))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

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
