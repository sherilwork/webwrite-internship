"use client"

import React, { useState, useMemo, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Play, ArrowLeft, ArrowRight, X } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel"

// --- Configuration & Data ---

const categories = ["All", "Healthcare", "Education", "E-Commerce", "Fitness", "Shops"]

const featuredVideos = [
  {
    id: "1",
    title: "Campaign Strategy Insights",
    category: "Healthcare",
    videoUrl: "https://vimeo.com/1192553118?fl=tl&fe=ec",
    description: "High-impact digital strategy for modern healthcare portals."
  },
  {
    id: "2",
    title: "MedTech Innovation",
    category: "Healthcare",
    videoUrl: "https://vimeo.com/1192553462?fl=tl&fe=ec",
    description: "Cinematic storytelling for advanced medical robotics."
  },
  {
    id: "3",
    title: "Global Learning LMS",
    category: "Education",
    videoUrl: "https://vimeo.com/1192553402?fl=tl&fe=ec",
    description: "Next-gen educational platform branding and launch."
  },
  {
    id: "4",
    title: "Luxe Fashion Hub",
    category: "E-Commerce",
    videoUrl: "https://vimeo.com/1192553355?fl=tl&fe=ec",
    description: "High-converting headless commerce for premium brands."
  },
  {
    id: "5",
    title: "Eco-Retail Campaign",
    category: "E-Commerce",
    videoUrl: "https://vimeo.com/1192553359?fl=tl&fe=ec",
    description: "Scaling sustainable retail through data-driven visuals."
  },
  {
    id: "6",
    title: "Elite Fitness App",
    category: "Fitness",
    videoUrl: "https://vimeo.com/1192553338?fl=tl&fe=ec",
    description: "Personalized training experience with AI-driven insights."
  },
  {
    id: "7",
    title: "FinTech UI Reveal",
    category: "Shops",
    videoUrl: "https://vimeo.com/1192553117?fl=tl&fe=ec",
    description: "Complex financial data visualized through minimalist design."
  },
  {
    id: "8",
    title: "B2B Catalog Launch",
    category: "Shops",
    videoUrl: "https://vimeo.com/1192553119?fl=tl&fe=ec",
    description: "Streamlined industrial inventory management systems."
  },
  {
    id: "9",
    title: "Retail Logic 2.0",
    category: "Shops",
    videoUrl: "https://vimeo.com/1192553116?fl=tl&fe=ec",
    description: "Advanced retail management and POS visualization."
  }
]

// --- Helper Utilities ---

const extractVimeoId = (url: string) => {
  const cleanUrl = url.split("?")[0]
  const match = cleanUrl.match(/vimeo\.com\/(\d+)/)
  return match ? match[1] : ""
}

const VimeoThumbnail = ({ videoUrl, alt, isActive }: { videoUrl: string; alt: string; isActive: boolean }) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null)
  const videoId = useMemo(() => extractVimeoId(videoUrl), [videoUrl])

  useEffect(() => {
    if (!videoId) return
    let isMounted = true
    
    setThumbnail(null)
    // Requesting 1280 width to ensure high quality thumbnails
    fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}&width=1280`)
      .then(res => res.json())
      .then(data => {
        if (isMounted) setThumbnail(data.thumbnail_url)
      })
      .catch(() => {
        if (isMounted) setThumbnail(null)
      })
      
    return () => { isMounted = false }
  }, [videoId])

  return (
    <div className="relative w-full h-full bg-black/5 overflow-hidden">
      {thumbnail ? (
        <Image
          src={thumbnail}
          alt={alt}
          fill
          className={cn(
            "object-cover transition-all duration-1000 transform-gpu",
            isActive ? "scale-105" : "scale-100"
          )}
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={isActive}
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
  const [playingVideoUrl, setPlayingVideoUrl] = useState<string | null>(null)

  useEffect(() => {
    if (!api) return
    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
      setPlayingVideoUrl(null) // Reset video on scroll
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
    if (activeCategory === "All") return featuredVideos
    return featuredVideos.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const handleCategoryChange = useCallback((cat: string) => {
    setActiveCategory(cat)
    setSelectedIndex(0)
    setPlayingVideoUrl(null)
    if (api) api.scrollTo(0)
  }, [api])

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
        <div className="relative min-h-[450px] flex items-center">
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
                <CarouselContent className="-ml-4 items-center h-[500px]">
                  {filteredProjects.map((project, index) => {
                    const isActive = index === selectedIndex
                    const isPlaying = playingVideoUrl === project.videoUrl

                    return (
                      <CarouselItem 
                        key={`${project.id}-${index}`} 
                        className="pl-4 basis-[70%] sm:basis-1/3 md:basis-[28%] lg:basis-[22%]"
                      >
                        <motion.div
                          layout
                          initial={false}
                          animate={{ 
                            opacity: 1, 
                            scale: isPlaying ? 1.15 : (isActive ? 1.1 : 0.95),
                            filter: "grayscale(0)"
                          }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                          className={cn(
                            "group relative aspect-[3/4] cursor-pointer will-change-transform transform-gpu",
                            isPlaying && "z-50"
                          )}
                          onClick={() => {
                            if (!isPlaying && isActive) setPlayingVideoUrl(project.videoUrl)
                            else if (!isActive && api) api.scrollTo(index)
                          }}
                        >
                          <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[#f7f7f5] border border-black/[0.05] shadow-2xl transition-all duration-700 transform-gpu">
                            {isPlaying ? (
                              <div className="relative w-full h-full bg-black">
                                <iframe
                                  src={`https://player.vimeo.com/video/${extractVimeoId(project.videoUrl)}?autoplay=1&color=f5b800&title=0&byline=0&portrait=0`}
                                  className="w-full h-full border-none"
                                  allow="autoplay; fullscreen; picture-in-picture"
                                  allowFullScreen
                                />
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setPlayingVideoUrl(null);
                                  }}
                                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition-all z-10"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ) : (
                              <>
                                <VimeoThumbnail 
                                  videoUrl={project.videoUrl} 
                                  alt={project.title} 
                                  isActive={isActive} 
                                />
                                
                                {/* Always visible black play button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black flex items-center justify-center text-[#f5b800] shadow-2xl transition-all duration-500 transform scale-100 group-hover:scale-110">
                                    <Play className="w-6 h-6 md:w-7 md:h-7 fill-current ml-1" />
                                  </div>
                                </div>

                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <p className="text-[10px] font-bold text-[#f5b800] uppercase tracking-widest mb-1">{project.category}</p>
                                    <h4 className="text-white text-lg font-black leading-tight tracking-tight uppercase">{project.title}</h4>
                                </div>
                              </>
                            )}
                          </div>
                        </motion.div>
                      </CarouselItem>
                    )
                  })}
                </CarouselContent>
                
                <div className="flex justify-center gap-4 mt-8">
                  <button 
                    onClick={() => api?.scrollPrev()} 
                    className="group flex items-center justify-center gap-3 px-10 py-4 bg-black/[0.03] border border-black/[0.08] text-black text-[11px] uppercase tracking-[0.2em] font-black rounded-full hover:bg-black hover:border-black hover:text-white transition-all duration-300 shadow-lg"
                  >
                    <ArrowLeft className="w-4 h-4 text-[#f5b800] group-hover:-translate-x-1 transition-transform" />
                    Prev
                  </button>
                  <button 
                    onClick={() => api?.scrollNext()} 
                    className="group flex items-center justify-center gap-3 px-10 py-4 bg-black/[0.03] border border-black/[0.08] text-black text-[11px] uppercase tracking-[0.2em] font-black rounded-full hover:bg-black hover:border-black hover:text-white transition-all duration-300 shadow-lg"
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
    </section>
  )
}
