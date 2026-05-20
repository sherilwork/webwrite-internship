
"use client"

import React, { useState, useMemo, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Play, TrendingUp, ArrowLeft, ArrowRight, X } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

// --- Configuration & Data ---

const categories = ["All", "Healthcare", "Education", "E-Commerce", "Fitness", "Shops"]

const featuredVideos = [
  {
    id: "1192868770",
    title: "Campaign Strategy Insights",
    category: "Healthcare",
    videoUrl: "https://vimeo.com/1192868770",
    metric: "98% Satisfaction",
    description: "High-impact digital strategy for modern healthcare portals."
  },
  {
    id: "1192553462",
    title: "MedTech Innovation",
    category: "Healthcare",
    videoUrl: "https://vimeo.com/1192553462",
    metric: "1.2M Views",
    description: "Cinematic storytelling for advanced medical robotics."
  },
  {
    id: "1192553402",
    title: "Global Learning LMS",
    category: "Education",
    videoUrl: "https://vimeo.com/1192553402",
    metric: "500k+ Students",
    description: "Next-gen educational platform branding and launch."
  },
  {
    id: "1192553355",
    title: "Luxe Fashion Hub",
    category: "E-Commerce",
    videoUrl: "https://vimeo.com/1192553355",
    metric: "300% ROAS",
    description: "High-converting headless commerce for premium brands."
  },
  {
    id: "1192553359",
    title: "Eco-Retail Campaign",
    category: "E-Commerce",
    videoUrl: "https://vimeo.com/1192553359",
    metric: "12x Conversion",
    description: "Scaling sustainable retail through data-driven visuals."
  },
  {
    id: "1192553338",
    title: "Elite Fitness App",
    category: "Fitness",
    videoUrl: "https://vimeo.com/1192553338",
    metric: "+450% Growth",
    description: "Personalized training experience with AI-driven insights."
  },
  {
    id: "1192553117",
    title: "FinTech UI Reveal",
    category: "Shops",
    videoUrl: "https://vimeo.com/1192553117",
    metric: "Zero Latency",
    description: "Complex financial data visualized through minimalist design."
  },
  {
    id: "1192553119",
    title: "B2B Catalog Launch",
    category: "Shops",
    videoUrl: "https://vimeo.com/1192553119",
    metric: "92% Retention",
    description: "Streamlined industrial inventory management systems."
  }
]

// --- Helper Components ---

const extractVimeoId = (url: string) => {
  const cleanUrl = url.split("?")[0]
  const match = cleanUrl.match(/vimeo\.com\/(\d+)/)
  return match ? match[1] : ""
}

const VimeoThumbnail = ({ videoUrl, alt, isActive }: { videoUrl: string; alt: string; isActive: boolean }) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null)
  const videoId = extractVimeoId(videoUrl)

  useEffect(() => {
    if (!videoId) return
    // Fetch high-res thumbnail from Vimeo oEmbed API
    fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`)
      .then(res => res.json())
      .then(data => setThumbnail(data.thumbnail_url))
      .catch(() => setThumbnail(null))
  }, [videoId])

  return (
    <div className="relative w-full h-full bg-black/5 overflow-hidden">
      {thumbnail ? (
        <Image
          src={`${thumbnail}?v=${videoId}`}
          alt={alt}
          fill
          className={cn(
            "object-cover transition-all duration-1000",
            isActive ? "scale-105" : "scale-100"
          )}
          unoptimized 
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-black/10 border-t-[#f5b800] rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}

export function FeaturedVideos() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [api, setApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  useEffect(() => {
    if (!api) return
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap())
    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return featuredVideos
    return featuredVideos.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setSelectedIndex(0)
    if (api) api.scrollTo(0)
  }

  return (
    <section className="bg-white py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-black/[0.05] pb-6">
          <div className="relative">
            <h2 className="text-xl md:text-3xl font-black text-black leading-none tracking-tighter uppercase text-nowrap">
              Featured Videos
            </h2>
            <div className="w-8 md:w-12 h-1 bg-[#f5b800] mt-1" />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all border",
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

        {/* Carousel Content */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Carousel
                setApi={setApi}
                opts={{
                  align: "center",
                  loop: filteredProjects.length > 2,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4 items-center">
                  {filteredProjects.map((project, index) => {
                    const isActive = index === selectedIndex
                    return (
                      <CarouselItem 
                        key={`${project.id}-${index}`} 
                        className="pl-4 basis-[75%] sm:basis-1/3 md:basis-[28%] lg:basis-[22%]"
                      >
                        <motion.div
                          layout
                          initial={false}
                          animate={{ 
                            opacity: isActive ? 1 : 0.4, 
                            scale: isActive ? 1.1 : 0.9,
                            filter: isActive ? "grayscale(0)" : "grayscale(0.5)"
                          }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                          className="group relative aspect-[3/4] cursor-pointer will-change-transform"
                          onClick={() => setSelectedVideo(project.videoUrl)}
                        >
                          <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-[#f7f7f5] border border-black/[0.05] shadow-2xl transition-all duration-700 transform-gpu">
                            <VimeoThumbnail 
                              videoUrl={project.videoUrl} 
                              alt={project.title} 
                              isActive={isActive} 
                            />
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
                                <Play className="w-6 h-6 fill-current" />
                              </div>
                            </div>

                            {/* Data Badge */}
                            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/5 shadow-sm">
                              <TrendingUp className="w-3 h-3 text-[#f5b800]" />
                              <span className="text-[9px] font-black text-black uppercase tracking-wider">
                                {project.metric}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      </CarouselItem>
                    )
                  })}
                </CarouselContent>
                
                {/* Navigation Controls */}
                <div className="flex justify-center gap-3 mt-16">
                  <button 
                    onClick={() => api?.scrollPrev()} 
                    className="group flex items-center justify-center gap-3 px-8 py-3.5 bg-black/[0.03] border border-black/[0.08] text-black text-[10px] uppercase tracking-[0.2em] font-black rounded-full hover:bg-black hover:border-black hover:text-white transition-all duration-300 shadow-lg"
                  >
                    <ArrowLeft className="w-4 h-4 text-[#f5b800] group-hover:-translate-x-1 transition-transform" />
                    Prev
                  </button>
                  <button 
                    onClick={() => api?.scrollNext()} 
                    className="group flex items-center justify-center gap-3 px-8 py-3.5 bg-black/[0.03] border border-black/[0.08] text-black text-[10px] uppercase tracking-[0.2em] font-black rounded-full hover:bg-black hover:border-black hover:text-white transition-all duration-300 shadow-lg"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 text-[#f5b800] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Carousel>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Video Modal Player */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-6xl p-0 bg-black border-none overflow-hidden aspect-video">
          <DialogTitle className="sr-only">Video Player</DialogTitle>
          {selectedVideo && (
            <iframe
              src={`https://player.vimeo.com/video/${extractVimeoId(selectedVideo)}?autoplay=1&color=f5b800`}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          )}
          <button 
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>
        </DialogContent>
      </Dialog>
    </section>
  )
}
