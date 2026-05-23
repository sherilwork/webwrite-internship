"use client"

import React, { useState, useMemo, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Play, ArrowLeft, ArrowRight, X, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel"

// --- Configuration & Data ---

const categories = [
  "All", 
  "Car delivery", 
  "Clothing brand", 
  "Construction", 
  "Education institution", 
  "Event's", 
  "Fitness Gym", 
  "Promotional", 
  "Properties", 
  "Restaurant"
]

const featuredVideos = [
  {
    id: "1",
    title: "Premium Vehicle Logistics",
    category: "Car delivery",
    videoUrl: "https://vimeo.com/1194923855",
    description: "Standard-setting delivery systems for the modern car industry."
  },
  {
    id: "2",
    title: "Luxury Transport Reveal",
    category: "Car delivery",
    videoUrl: "https://vimeo.com/1194923856",
    description: "Experience the pinnacle of automotive logistics and handling."
  },
  {
    id: "3",
    title: "Vogue Collection Reveal",
    category: "Clothing brand",
    videoUrl: "https://vimeo.com/1194928655",
    description: "A cinematic look at the latest haute couture trends."
  },
  {
    id: "4",
    title: "Ethereal Threads",
    category: "Clothing brand",
    videoUrl: "https://vimeo.com/1194928654",
    description: "Capturing the flow and texture of premium fabrics."
  },
  {
    id: "5",
    title: "Modern Lifestyle Lookbook",
    category: "Clothing brand",
    videoUrl: "https://vimeo.com/1194928656",
    description: "Defining contemporary style through bold visual storytelling."
  },
  {
    id: "6",
    title: "Modern Architectural Vision",
    category: "Construction",
    videoUrl: "https://vimeo.com/1194928979",
    description: "Capturing the intricate details and scale of modern architectural marvels."
  },
  {
    id: "7",
    title: "Foundation of Excellence",
    category: "Construction",
    videoUrl: "https://vimeo.com/1194928980",
    description: "Showcasing the precision and engineering power behind large-scale builds."
  },
  {
    id: "8",
    title: "Academic Excellence",
    category: "Education institution",
    videoUrl: "https://vimeo.com/1194929564",
    description: "Showcasing the journey of intellectual growth and achievement."
  },
  {
    id: "9",
    title: "Learning Redefined",
    category: "Education institution",
    videoUrl: "https://vimeo.com/1194929498",
    description: "Modern approaches to comprehensive student development."
  },
  {
    id: "10",
    title: "Future Ready Campus",
    category: "Education institution",
    videoUrl: "https://vimeo.com/1194929495",
    description: "Exploring world-class facilities and innovative learning spaces."
  },
  {
    id: "11",
    title: "Innovation in Education",
    category: "Education institution",
    videoUrl: "https://vimeo.com/1194929497",
    description: "Pioneering new standards in academic success and technology."
  },
  {
    id: "12",
    title: "Global Student Life",
    category: "Education institution",
    videoUrl: "https://vimeo.com/1194929496",
    description: "A look at the vibrant and diverse community shaping tomorrow."
  },
  {
    id: "13",
    title: "Grand Celebration Reveal",
    category: "Event's",
    videoUrl: "https://vimeo.com/1194929853",
    description: "Premium coverage of exclusive high-profile social gatherings."
  },
  {
    id: "14",
    title: "Cultural Festival Highlights",
    category: "Event's",
    videoUrl: "https://vimeo.com/1194929852",
    description: "Vibrant storytelling capturing the spirit of community events."
  },
  {
    id: "15",
    title: "Luxury Wedding Showcase",
    category: "Event's",
    videoUrl: "https://vimeo.com/1194929854",
    description: "Cinematic documentation of bespoke premium celebrations."
  },
  {
    id: "16",
    title: "Ultimate Fitness Evolution",
    category: "Fitness Gym",
    videoUrl: "https://vimeo.com/1194930092",
    description: "High-energy gym atmosphere showcasing peak physical performance."
  },
  {
    id: "17",
    title: "Pro Training Sessions",
    category: "Fitness Gym",
    videoUrl: "https://vimeo.com/1194930094",
    description: "Expert-led strength and conditioning routines for athletes."
  },
  {
    id: "18",
    title: "Modern Gym Atmosphere",
    category: "Fitness Gym",
    videoUrl: "https://vimeo.com/1194930090",
    description: "Exploring world-class facilities and dynamic training environments."
  },
  {
    id: "19",
    title: "Health & Wellness Showcase",
    category: "Fitness Gym",
    videoUrl: "https://vimeo.com/1194930093",
    description: "A holistic look at lifestyle transformation and community growth."
  },
  {
    id: "20",
    title: "Brand Impact Showcase",
    category: "Promotional",
    videoUrl: "https://vimeo.com/1194930444",
    description: "High-impact promotional content designed for market dominance."
  },
  {
    id: "21",
    title: "Strategic Growth Film",
    category: "Promotional",
    videoUrl: "https://vimeo.com/1194930443",
    description: "Capturing the essence of brand evolution and strategic vision."
  },
  {
    id: "22",
    title: "Market Presence Teaser",
    category: "Promotional",
    videoUrl: "https://vimeo.com/1194930443",
    description: "Dynamic visual storytelling for premium product launches."
  },
  {
    id: "23",
    title: "Luxury Real Estate Showcase",
    category: "Properties",
    videoUrl: "https://vimeo.com/1194930732",
    description: "Premium property showcase featuring high-end architectural details."
  },
  {
    id: "24",
    title: "Modern Architectural Tour",
    category: "Properties",
    videoUrl: "https://vimeo.com/1194930733",
    description: "Exploring contemporary spaces through cinematic motion graphics."
  },
  {
    id: "25",
    title: "Artisan Culinary Journey",
    category: "Restaurant",
    videoUrl: "https://vimeo.com/1194931054",
    description: "A deep dive into the craftsmanship behind award-winning gastronomy."
  },
  {
    id: "26",
    title: "The Chef's Table Experience",
    category: "Restaurant",
    videoUrl: "https://vimeo.com/1194931053",
    description: "Capturing the intimacy and detail of high-end boutique dining."
  },
  {
    id: "27",
    title: "Vibrant Bistro Atmosphere",
    category: "Restaurant",
    videoUrl: "https://vimeo.com/1194931021",
    description: "Exploring the energy and soul of modern urban eateries."
  },
  {
    id: "28",
    title: "Gourmet Flavor Reveal",
    category: "Restaurant",
    videoUrl: "https://vimeo.com/1194931020",
    description: "High-impact visual storytelling for signature seasonal menus."
  },
  {
    id: "29",
    title: "Atmospheric Dining Noir",
    category: "Restaurant",
    videoUrl: "https://vimeo.com/1194931018",
    description: "Cinematic documentation of premium late-night lounge and dining culture."
  },
  {
    id: "30",
    title: "Farm to Fork Narrative",
    category: "Restaurant",
    videoUrl: "https://vimeo.com/1194931019",
    description: "Showcasing the journey of sustainable ingredients to the plate."
  },
  {
    id: "31",
    title: "Culinary Excellence Reveal",
    category: "Restaurant",
    videoUrl: "https://vimeo.com/1194953379",
    description: "Capturing the art and soul of elite modern hospitality."
  }
]

// --- Helper Utilities ---

const extractVimeoId = (url: string) => {
  const cleanUrl = url.split("?")[0]
  const match = cleanUrl.match(/vimeo\.com\/(\d+)/)
  return match ? match[1] : ""
}

const VimeoThumbnail = ({ videoUrl, alt }: { videoUrl: string; alt: string }) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null)
  const videoId = useMemo(() => extractVimeoId(videoUrl), [videoUrl])

  useEffect(() => {
    if (!videoId) return
    let isMounted = true
    
    setThumbnail(null)
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
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Loader2 className="w-6 h-6 text-black/10 animate-spin" />
        </div>
      )}
    </div>
  )
}

export function FeaturedVideos() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [api, setApi] = useState<CarouselApi>()
  const [playingVideoUrl, setPlayingVideoUrl] = useState<string | null>(null)
  const [isPlayerLoading, setIsPlayerLoading] = useState(false)

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return featuredVideos
    return featuredVideos.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const handleCategoryChange = useCallback((cat: string) => {
    setActiveCategory(cat)
    setPlayingVideoUrl(null)
    setIsPlayerLoading(false)
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
        <div className="relative min-h-[400px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              {filteredProjects.length > 0 ? (
                <Carousel
                  setApi={setApi}
                  opts={{
                    align: "start",
                    loop: filteredProjects.length > 3,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {filteredProjects.map((project, index) => {
                      const isPlaying = playingVideoUrl === project.videoUrl

                      return (
                        <CarouselItem 
                           key={`${project.id}-${index}`} 
                           className="pl-4 basis-[88%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                        >
                          <div className={cn(
                            "group relative aspect-[3/4] cursor-pointer rounded-[1.5rem] overflow-hidden bg-[#f7f7f5] border border-black/[0.05] shadow-lg transition-all duration-300",
                            isPlaying && "z-50 shadow-2xl"
                          )}>
                            {isPlaying ? (
                              <div className="relative w-full h-full bg-black">
                                {isPlayerLoading && (
                                  <div className="absolute inset-0 flex items-center justify-center z-10 bg-black">
                                    <Loader2 className="w-8 h-8 text-[#f5b800] animate-spin" />
                                  </div>
                                )}
                                <iframe
                                  src={`https://player.vimeo.com/video/${extractVimeoId(project.videoUrl)}?autoplay=1&color=f5b800&title=0&byline=0&portrait=0`}
                                  className="w-full h-full border-none"
                                  allow="autoplay; fullscreen; picture-in-picture"
                                  allowFullScreen
                                  onLoad={() => setIsPlayerLoading(false)}
                                />
                                <button 
                                   onClick={(e) => {
                                    e.stopPropagation();
                                    setPlayingVideoUrl(null);
                                    setIsPlayerLoading(false);
                                  }}
                                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition-all z-20"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ) : (
                              <div 
                                 className="w-full h-full"
                                onClick={() => {
                                  setIsPlayerLoading(true)
                                  setPlayingVideoUrl(project.videoUrl)
                                }}
                              >
                                <VimeoThumbnail 
                                   videoUrl={project.videoUrl} 
                                   alt={project.title} 
                                 />
                                
                                <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/20 transition-all duration-300">
                                  <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-[#f5b800] shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-black">
                                    <Play className="w-6 h-6 fill-current ml-1" />
                                  </div>
                                </div>

                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                                    <p className="text-[9px] font-bold text-[#f5b800] uppercase tracking-widest mb-1">{project.category}</p>
                                    <h4 className="text-white text-base font-black leading-tight tracking-tight uppercase line-clamp-2">{project.title}</h4>
                                </div>
                              </div>
                            )}
                          </div>
                        </CarouselItem>
                      )
                    })}
                  </CarouselContent>
                  
                  {filteredProjects.length > 1 && (
                    <div className="flex justify-center gap-4 mt-8">
                      <button 
                         onClick={() => api?.scrollPrev()} 
                         className="group flex items-center justify-center gap-3 px-8 py-3 bg-black/[0.03] border border-black/[0.08] text-black text-[10px] uppercase tracking-[0.2em] font-black rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-md"
                      >
                        <ArrowLeft className="w-4 h-4 text-[#f5b800] group-hover:-translate-x-1 transition-transform" />
                        Prev
                      </button>
                      <button 
                         onClick={() => api?.scrollNext()} 
                         className="group flex items-center justify-center gap-3 px-8 py-3 bg-black/[0.03] border border-black/[0.08] text-black text-[10px] uppercase tracking-[0.2em] font-black rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-md"
                      >
                        Next
                        <ArrowRight className="w-4 h-4 text-[#f5b800] group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  )}
                </Carousel>
              ) : (
                <div className="w-full py-20 text-center">
                   <p className="text-black/20 font-black uppercase tracking-[0.3em] text-sm italic">No videos in this category yet</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}