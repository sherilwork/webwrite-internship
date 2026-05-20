
"use client"

import React, { useState, useMemo, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Play, ExternalLink, TrendingUp, ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel"

const categories = ["All", "Healthcare", "Education", "E-Commerce", "Fitness", "Finance"]

const projects = [
  {
    id: 1,
    title: "Patient Care Portal",
    category: "Healthcare",
    subCategory: "Platform",
    image: "work-video-1",
    metric: "98% Satisfaction",
    description: "Streamlined digital experience for patient management and telehealth."
  },
  {
    id: 2,
    title: "MedTech Innovations",
    category: "Healthcare",
    subCategory: "Video",
    image: "work-video-2",
    metric: "1.2M Views",
    description: "High-end cinematic storytelling for surgical robotics."
  },
  {
    id: 3,
    title: "Wellness Tracker",
    category: "Healthcare",
    subCategory: "App",
    image: "work-video-3",
    metric: "4.8 Star Rating",
    description: "Mobile-first health monitoring with real-time data sync."
  },
  {
    id: 4,
    title: "Global Learning LMS",
    category: "Education",
    subCategory: "SaaS",
    image: "work-website-1",
    metric: "500k+ Students",
    description: "Next-generation learning management system for universities."
  },
  {
    id: 5,
    title: "EdTech Brand Story",
    category: "Education",
    subCategory: "Video",
    image: "work-video-4",
    metric: "Viral Reach",
    description: "Capturing the future of digital education through film."
  },
  {
    id: 6,
    title: "Luxe Fashion Hub",
    category: "E-Commerce",
    subCategory: "Store",
    image: "work-website-2",
    metric: "300% ROAS",
    description: "High-converting headless commerce for premium brands."
  },
  {
    id: 7,
    title: "Eco-Retail Platform",
    category: "E-Commerce",
    subCategory: "Ads",
    image: "work-ads-1",
    metric: "12x Conversion",
    description: "Scaling sustainable retail through data-driven marketing."
  },
  {
    id: 8,
    title: "Elite Fitness App",
    category: "Fitness",
    subCategory: "Platform",
    image: "work-ads-2",
    metric: "+450% Growth",
    description: "Personalized training experience with AI-driven insights."
  },
  {
    id: 9,
    title: "FinTech Dashboard",
    category: "Finance",
    subCategory: "UI/UX",
    image: "work-video-5",
    metric: "Zero Latency",
    description: "Complex financial data visualized through minimalist design."
  }
]

export function FeaturedVideos() {
  const [activeCategory, setActiveCategory] = useState("All")
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
    if (activeCategory === "All") return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setSelectedIndex(0)
    if (api) api.scrollTo(0)
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
        className="group relative h-full will-change-transform"
      >
        <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden bg-[#f7f7f5] border border-black/[0.05] shadow-[0_10px_40px_rgba(0,0,0,0.02)] transition-all duration-700 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transform-gpu">
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
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {project.subCategory === "Video" ? (
                <Play className="w-5 h-5 fill-current" />
              ) : (
                <ExternalLink className="w-5 h-5" />
              )}
            </div>
          </div>

          <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-black/5 shadow-sm">
            <TrendingUp className="w-3 h-3 text-[#f5b800]" />
            <span className="text-[8px] font-black text-black uppercase tracking-wider">
              {project.metric}
            </span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <section className="bg-white py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-black/[0.05] pb-6">
          <div className="relative">
            <h2 className="text-xl md:text-3xl font-black text-black leading-none tracking-tighter uppercase text-nowrap">
              Featured Videos
            </h2>
            <div className="w-8 md:w-12 h-1 bg-black mt-1" />
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
                  {filteredProjects.map((project, index) => (
                    <CarouselItem 
                      key={project.id} 
                      className="pl-4 basis-[60%] sm:basis-1/3 md:basis-[22%] lg:basis-[18%]"
                    >
                      {renderProjectCard(project, index === selectedIndex)}
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                <div className="flex justify-center gap-3 mt-12">
                  <button 
                    onClick={() => api?.scrollPrev()} 
                    className="group flex items-center justify-center gap-3 px-8 py-3 bg-black/[0.03] border border-black/[0.08] text-black text-[10px] uppercase tracking-[0.2em] font-black rounded-full hover:bg-black hover:border-black hover:text-white transition-all duration-300 shadow-lg shadow-black/5"
                  >
                    <ArrowLeft className="w-4 h-4 text-[#f5b800] group-hover:-translate-x-1 transition-transform" />
                    Prev
                  </button>
                  <button 
                    onClick={() => api?.scrollNext()} 
                    className="group flex items-center justify-center gap-3 px-8 py-3 bg-black/[0.03] border border-black/[0.08] text-black text-[10px] uppercase tracking-[0.2em] font-black rounded-full hover:bg-black hover:border-black hover:text-white transition-all duration-300 shadow-lg shadow-black/5"
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
