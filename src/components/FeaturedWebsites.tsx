'use client'

import React, { useEffect, useRef, useState, useMemo } from 'react'
import { ArrowLeft, ArrowRight, MousePointer2, Cpu, GraduationCap, ShoppingBag, Package } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { gsap } from 'gsap'
import { useIsMobile } from '@/hooks/use-mobile'

/**
 * DESKTOP CONFIGURATION - HIGH PERFORMANCE ISOLATED
 */
const categories = ["All", "Real Estate", "Education", "Community", "E-Commerce", "Manufacturing"]

const FEATURED_CARDS = [
  {
    id: 1,
    title: "Landmark Lane Estates",
    description: "A premium real estate portal designed for high-fidelity property showcases and seamless user navigation in the luxury housing market.",
    icon: <MousePointer2 className="w-5 h-5" />,
    stats: "Luxury Listing",
    tag: "REAL ESTATE",
    url: "https://www.landmarklaneestates.co.in/",
    imageUrl: "https://picsum.photos/seed/ws1/800/500"
  },
  {
    id: 2,
    title: "Gyansthali Academy",
    description: "A comprehensive educational platform designed to streamline academic management and enhance student-teacher engagement.",
    icon: <GraduationCap className="w-5 h-5" />,
    stats: "Academic Portal",
    tag: "EDUCATION",
    url: "https://www.gsavijaynagaretawah.com/",
    imageUrl: "https://picsum.photos/seed/ws2/800/500"
  },
  {
    id: 3,
    title: "AWS UG Pune",
    description: "A community-driven platform for cloud enthusiasts, featuring event updates, technical resources, and membership management.",
    icon: <Cpu className="w-5 h-5" />,
    stats: "Cloud Network",
    tag: "COMMUNITY",
    url: "https://www.awsugpune.in/",
    imageUrl: "https://picsum.photos/seed/ws3/800/500"
  },
  {
    id: 4,
    title: "Sundar Vibes Store",
    description: "A premium e-commerce experience designed for lifestyle and fashion, featuring a streamlined checkout process and responsive visual merchandising.",
    icon: <ShoppingBag className="w-5 h-5" />,
    stats: "Retail Logic",
    tag: "E-COMMERCE",
    url: "https://sundarvibesstore.com/",
    imageUrl: "https://picsum.photos/seed/ws4/800/500"
  },
  {
    id: 5,    title: "Sagar Disposal",
    description: "A specialized digital platform for industrial disposal solutions, featuring a structured product catalog and optimized for professional B2B interactions.",
    icon: <Package className="w-5 h-5" />,
    stats: "B2B Catalog",
    tag: "MANUFACTURING",
    url: "https://sagar-disposal.vercel.app/",
    imageUrl: "https://picsum.photos/seed/ws5/800/500"
  }
]

export function FeaturedWebsites() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const [websiteIndex, setWebsiteIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState("All")
  const [isMounted, setIsMounted] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const filteredCards = useMemo(() => {
    if (activeCategory === "All") return FEATURED_CARDS
    return FEATURED_CARDS.filter((card) => card.tag.toLowerCase() === activeCategory.toLowerCase())
  }, [activeCategory])

  const handleWebsiteNav = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setWebsiteIndex((prev) => (prev + 1) % filteredCards.length)
    } else {
      setWebsiteIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length)
    }
  }

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setWebsiteIndex(0)
  }

  useEffect(() => {
    if (!isMounted) return

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[]
    const xOffset = isMobile ? 300 : 600
    const yOffset = isMobile ? 80 : 150
    
    // Reset positions and animate
    cards.forEach((card, index) => {
      if (index === websiteIndex) {
        gsap.to(card, {
          x: 0,
          y: 0,
          rotate: 0,
          opacity: 1,
          scale: 1,
          zIndex: 10,
          duration: 0.8,
          ease: "expo.out",
          force3D: true
        })
      } else if (index < websiteIndex) {
        gsap.to(card, {
          x: xOffset,
          y: yOffset,
          rotate: isMobile ? 5 : 15,
          opacity: 0,
          scale: 0.8,
          zIndex: 5,
          duration: 0.8,
          ease: "expo.inOut",
          force3D: true
        })
      } else {
        gsap.to(card, {
          x: -xOffset,
          y: -yOffset,
          rotate: isMobile ? -5 : -15,
          opacity: 0,
          scale: 0.8,
          zIndex: 5,
          duration: 0.8,
          ease: "expo.inOut",
          force3D: true
        })
      }
    })
  }, [websiteIndex, isMounted, filteredCards, isMobile])

  return (
    <section className="bg-white py-12 md:py-24 overflow-hidden min-h-[700px] md:min-h-[800px] relative border-t border-black/[0.03]">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-black/[0.05] pb-6">
          <div className="relative">
            <h2 className="text-xl md:text-3xl font-black text-black leading-none tracking-tighter uppercase text-nowrap">
              Featured Websites
            </h2>
            <div className="w-8 md:w-12 h-1 bg-[#f5b800] mt-1" />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={cn(
                  "px-3 md:px-4 py-1.5 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all border",
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

        {/* Content Area */}
        <div className="relative h-[600px] md:h-[500px] flex items-center justify-center">
          {filteredCards.length > 0 ? (
            filteredCards.map((card, i) => (
              <div
                key={`${activeCategory}-website-${card.id}`}
                ref={el => { cardsRef.current[i] = el }}
                className="absolute w-full max-w-[800px] bg-[#f7f7f5] backdrop-blur-2xl border border-black/[0.05] p-5 md:p-10 rounded-[24px] md:rounded-[32px] shadow-2xl shadow-black/5 opacity-0 transform-gpu will-change-transform overflow-hidden"
                style={{
                  zIndex: i === websiteIndex ? 10 : 5
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-[#f5b800]/10 border border-[#f5b800]/40 rounded-xl flex items-center justify-center text-black">
                        {card.icon}
                      </div>
                      <div className="px-2 md:px-3 py-1 bg-black/[0.03] border border-black/[0.05] rounded-full">
                        <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-black/40">{card.tag}</span>
                      </div>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <h2 className="text-2xl md:text-4xl font-black text-black tracking-tighter leading-tight uppercase">
                        {card.title}
                      </h2>
                      <p className="text-black/40 text-xs md:text-base font-medium leading-relaxed line-clamp-3 md:line-clamp-none">
                        {card.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-6 pt-2 md:pt-4">
                      <a 
                        href={card.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group relative h-10 md:h-12 px-6 md:px-8 flex items-center gap-3 bg-black hover:bg-black/90 rounded-full transition-all duration-300 shadow-xl shadow-black/10"
                      >
                        <span className="text-white text-[10px] md:text-[12px] font-black uppercase tracking-widest">Visit site</span>
                        <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#f5b800] group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                  <div className="relative aspect-[16/10] rounded-xl md:rounded-2xl overflow-hidden border border-black/[0.05] bg-black/[0.03] group shadow-xl md:shadow-2xl shadow-black/5">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      fill
                      className="object-cover transition-opacity duration-700"
                      priority={i === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-black/20 font-black uppercase tracking-[0.2em] pt-20">
              No projects found in this category
            </div>
          )}

          {filteredCards.length > 1 && (
            <div className="absolute bottom-0 md:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 md:gap-4 z-50 w-full px-6 md:w-auto">
              <button 
                onClick={() => handleWebsiteNav('prev')} 
                className="group flex-1 md:flex-none flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 bg-black/[0.03] border border-black/[0.05] text-black text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] font-black hover:bg-black hover:border-black hover:text-white transition-all duration-300"
                style={{ clipPath: isMobile ? 'none' : 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-[#f5b800] group-hover:-translate-x-1 transition-transform" />
                Prev
              </button>
              <button 
                onClick={() => handleWebsiteNav('next')} 
                className="group flex-1 md:flex-none flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 bg-black/[0.03] border border-black/[0.05] text-black text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] font-black hover:bg-black hover:border-black hover:text-white transition-all duration-300"
                style={{ clipPath: isMobile ? 'none' : 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
              >
                Next
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#f5b800] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}