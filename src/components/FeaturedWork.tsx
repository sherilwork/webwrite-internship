
"use client"

import React, { useState, useMemo, useEffect } from "react"
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
  type CarouselApi
} from "@/components/ui/carousel"

const categories = ["All", "Videos", "Websites", "Ads Results"]

const projects = [
  // 9 Video Projects
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
    id: 4,
    title: "Commercial Motion Kit",
    category: "Videos",
    subCategory: "Motion Graphics",
    image: "work-video-2",
    metric: "4k Resolution",
    description: "Custom motion graphics for broadcast television."
  },
  {
    id: 7,
    title: "Product Launch Teaser",
    category: "Videos",
    subCategory: "Commercial",
    image: "work-video-3",
    metric: "1.2M Views",
    description: "High-energy teaser for a major product unveiling."
  },
  {
    id: 8,
    title: "Social First Campaign",
    category: "Videos",
    subCategory: "Commercial",
    image: "work-video-4",
    metric: "500k Likes",
    description: "Vertical video content optimized for social engagement."
  },
  {
    id: 9,
    title: "Corporate Culture Film",
    category: "Videos",
    subCategory: "Brand Story",
    image: "work-video-5",
    metric: "Premium Sound",
    description: "Internal and external culture building through film."
  },
  {
    id: 10,
    title: "Animation Masterclass",
    category: "Videos",
    subCategory: "Motion Graphics",
    image: "work-video-6",
    metric: "60 FPS",
    description: "Educational motion graphics for digital platforms."
  },
  {
    id: 11,
    title: "Global Event Reel",
    category: "Videos",
    subCategory: "Brand Story",
    image: "work-video-7",
    metric: "Live Audio",
    description: "Capturing the energy of global summits and events."
  },
  {
    id: 12,
    title: "3D Product Render",
    category: "Videos",
    subCategory: "Motion Graphics",
    image: "work-video-8",
    metric: "8k Texture",
    description: "Hyper-realistic 3D visualization for manufacturing."
  },
  {
    id: 13,
    title: "Short Film Series",
    category: "Videos",
    subCategory: "Brand Story",
    image: "work-video-9",
    metric: "Award Winning",
    description: "Narrative storytelling that defines a brand's soul."
  },
  // Websites
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
    id: 5,
    title: "Luxe Fashion Store",
    category: "Websites",
    subCategory: "E-commerce",
    image: "work-website-2",
    metric: "300% Conversion",
    description: "High-converting headless commerce experience."
  },
  // Ads Results
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
  const [api, setApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }

    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      return activeCategory === "All" || p.category === activeCategory
    })
  }, [activeCategory])

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setSelectedIndex(0)
  }

  const renderProjectCard = (project: typeof projects[0], isActive: boolean = true) => {
    const projectImage = PlaceHolderImages.find(img => img.id === project.image);
    return (
      <motion.div
        key={project.id}
        layout
        initial={false}
        animate={{ 
          opacity: isActive ? 1 : 0.4, 
          scale: isActive ? 1.05 : 0.85,
          filter: isActive ? "grayscale(0)" : "grayscale(0.5)"
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="group relative h-full pb-8 will-change-transform"
      >
        <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-[#f7f7f5] border border-black/[0.05] shadow-[0_10px_40px_rgba(0,0,0,0.02)] transition-all duration-700 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transform-gpu">
          {projectImage?.imageUrl ? (
            <Image
              src={projectImage.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-black/5">
              <span className="text-[10px] text-black/20 font-bold">IMAGE NOT FOUND</span>
            </div>
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

        <div className={cn(
          "mt-6 space-y-2 px-2 transition-opacity duration-500",
          !isActive && "opacity-20"
        )}>
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

        {/* Category Title Heading */}
        <AnimatePresence mode="wait">
          {activeCategory !== "All" && (
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.05] tracking-tighter uppercase">
                {activeCategory}
              </h2>
              <div className="w-12 md:w-20 h-1.5 bg-black mt-2" />
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
                  setApi={setApi}
                  opts={{
                    align: "center",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4 md:-ml-8 items-center">
                    {filteredProjects.map((project, index) => (
                      <CarouselItem 
                        key={project.id} 
                        className="pl-4 md:pl-8 basis-[75%] sm:basis-1/2 md:basis-1/3"
                      >
                        {renderProjectCard(project, index === selectedIndex)}
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center gap-3 mt-12">
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
                {filteredProjects.map((project) => renderProjectCard(project, true))}
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
