'use client'

import React, { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, MousePointer2, Cpu, GraduationCap, ShoppingBag, Package } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { gsap } from 'gsap'

/**
 * DESKTOP CONFIGURATION - HIGH PERFORMANCE ISOLATED
 */
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
    id: 5,
    title: "Sagar Disposal",
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
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleWebsiteNav = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setWebsiteIndex((prev) => (prev + 1) % FEATURED_CARDS.length)
    } else {
      setWebsiteIndex((prev) => (prev - 1 + FEATURED_CARDS.length) % FEATURED_CARDS.length)
    }
  }

  useEffect(() => {
    if (!isMounted) return

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[]
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
          reveal: true,
          ease: "expo.out",
          force3D: true
        })
      } else if (index < websiteIndex) {
        gsap.to(card, {
          x: 600,
          y: 150,
          rotate: 15,
          opacity: 0,
          scale: 0.8,
          zIndex: 5,
          duration: 0.8,
          ease: "expo.inOut",
          force3D: true
        })
      } else {
        gsap.to(card, {
          x: -600,
          y: -150,
          rotate: -15,
          opacity: 0,
          scale: 0.8,
          zIndex: 5,
          duration: 0.8,
          ease: "expo.inOut",
          force3D: true
        })
      }
    })
  }, [websiteIndex, isMounted])

  return (
    <section className="bg-white py-24 overflow-hidden min-h-[700px] flex items-center justify-center relative border-t border-black/[0.03]">
      <div className="container mx-auto px-6 relative h-[500px] flex items-center justify-center">
        {FEATURED_CARDS.map((card, i) => (
          <div
            key={`website-${card.id}`}
            ref={el => { cardsRef.current[i] = el }}
            className="absolute w-full max-w-[800px] bg-[#f7f7f5] backdrop-blur-2xl border border-black/[0.05] p-6 md:p-10 rounded-[32px] shadow-2xl shadow-black/5 opacity-0 transform-gpu will-change-transform overflow-hidden"
            style={{
              transform: i === websiteIndex ? 'none' : 'translateX(-600px) rotate(-15deg) scale(0.8)',
              zIndex: i === websiteIndex ? 10 : 5
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#ff6b1a]/10 border border-[#ff6b1a]/40 rounded-xl flex items-center justify-center text-[#ff6b1a]">
                    {card.icon}
                  </div>
                  <div className="px-3 py-1 bg-black/[0.03] border border-black/[0.05] rounded-full">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40">{card.tag}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-black text-black tracking-tighter leading-tight uppercase">
                    {card.title}
                  </h2>
                  <p className="text-black/40 text-sm md:text-base font-medium leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <a 
                    href={card.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group relative h-12 px-8 flex items-center gap-3 bg-[#ff6b1a] hover:bg-[#ff8038] rounded-full transition-all duration-300 shadow-xl shadow-[#ff6b1a]/20"
                  >
                    <span className="text-white text-[12px] font-black uppercase tracking-widest">Visit site</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-black/[0.05] bg-black/[0.03] group shadow-2xl shadow-black/5">
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
        ))}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
          <button 
            onClick={() => handleWebsiteNav('prev')} 
            className="group flex items-center gap-3 px-8 py-4 bg-black/[0.03] border border-black/[0.05] text-black text-[10px] uppercase tracking-[0.4em] font-black hover:bg-[#ff6b1a] hover:border-[#ff6b1a] hover:text-white transition-all duration-300"
            style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Prev
          </button>
          <button 
            onClick={() => handleWebsiteNav('next')} 
            className="group flex items-center gap-3 px-8 py-4 bg-black/[0.03] border border-black/[0.05] text-black text-[10px] uppercase tracking-[0.4em] font-black hover:bg-[#ff6b1a] hover:border-[#ff6b1a] hover:text-white transition-all duration-300"
            style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
          >
            Next
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
