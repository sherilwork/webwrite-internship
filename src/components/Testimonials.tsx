
"use client"

import React, { useState, useEffect } from "react"
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import { Quote, Star, RotateCcw } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

const testimonials = [
  {
    id: "1",
    name: "Sarah Jenkins",
    role: "CEO, EcoSphere",
    content: "Webwrite built a growth engine. Our conversions increased by 40% within the first month of launch.",
    avatar: "https://picsum.photos/seed/user1/100/100",
  },
  {
    id: "2",
    name: "David Chen",
    role: "Director, FinTech",
    content: "Their strategic thinking is unmatched. They perfectly understand design and performance intersection.",
    avatar: "https://picsum.photos/seed/user2/100/100",
  },
  {
    id: "3",
    name: "Aisha Patel",
    role: "Founder, Luxe Fashion",
    content: "The cinematic quality of our campaign elevated our entire market presence. Beautiful work.",
    avatar: "https://picsum.photos/seed/user3/100/100",
  },
  {
    id: "4",
    name: "Marcus Thorne",
    role: "Lead, MedTech",
    content: "They simplified our complex offering into a clear, compelling digital story that really resonates.",
    avatar: "https://picsum.photos/seed/user4/100/100",
  },
  {
    id: "5",
    name: "Elena Rodriguez",
    role: "Manager, LMS",
    content: "Efficiency meets creativity. They delivered a platform that handles 500k students with zero friction.",
    avatar: "https://picsum.photos/seed/user5/100/100",
  },
  {
    id: "6",
    name: "James Wilson",
    role: "Co-Founder, Retail",
    content: "The SEO and Meta Ads strategy cut our acquisition cost in half. Truly impressive results.",
    avatar: "https://picsum.photos/seed/user6/100/100",
  },
  {
    id: "7",
    name: "Robert Fox",
    role: "Ops, Sagar Disposal",
    content: "The B2B portal they developed completely streamlined our inventory management. Very professional.",
    avatar: "https://picsum.photos/seed/user7/100/100",
  },
  {
    id: "8",
    name: "Emily Davis",
    role: "Founder, Sundar Vibes",
    content: "Creative, responsive, and strategic. They've become an essential extension of our core team.",
    avatar: "https://picsum.photos/seed/user8/100/100",
  },
  {
    id: "9",
    name: "Michael Brown",
    role: "Lead, AWS UG Pune",
    content: "A partnership built on trust. Their community-first approach helped us grow our network significantly.",
    avatar: "https://picsum.photos/seed/user9/100/100",
  }
]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="group relative bg-[#f7f7f5] rounded-[1.25rem] p-4 border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-700 h-full flex flex-col justify-between">
      <div className="absolute top-4 right-4 text-black/[0.05] group-hover:text-[#f5b800]/20 transition-colors duration-700">
        <Quote size={18} strokeWidth={3} />
      </div>
      
      <div className="space-y-3 relative z-10">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={8} className="fill-[#f5b800] text-[#f5b800]" />
          ))}
        </div>

        <p className="text-black/70 font-medium leading-snug text-[11px] md:text-[12px] italic line-clamp-2 min-h-[2.5em]">
          "{testimonial.content}"
        </p>

        <div className="flex items-center gap-2.5 pt-3 border-t border-black/[0.05]">
          <Avatar className="h-8 w-8 border border-white shadow-sm">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback className="bg-black text-white text-[8px]">{testimonial.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-wider text-black">{testimonial.name}</span>
            <span className="text-[8px] font-bold text-black/40 uppercase tracking-widest leading-none mt-0.5">{testimonial.role}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function TinderCard({ testimonial, onRemove, index, total }: { testimonial: typeof testimonials[0], onRemove: () => void, index: number, total: number }) {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-25, 25])
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0])

  function handleDragEnd() {
    if (Math.abs(x.get()) > 100) {
      onRemove()
    }
  }

  return (
    <motion.div
      style={{ x, rotate, opacity, zIndex: total - index }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={{ 
        scale: 1 - index * 0.05,
        y: index * 12,
      }}
      className="absolute inset-0 w-full"
    >
      <TestimonialCard testimonial={testimonial} />
    </motion.div>
  )
}

function MarqueeColumn({ items, direction = 'up', speed = '40s' }: { items: typeof testimonials, direction?: 'up' | 'down', speed?: string }) {
  return (
    <div className="flex flex-col gap-6 h-full overflow-hidden relative group/column">
      <div 
        className={cn(
          "flex flex-col gap-6 py-4",
          direction === 'up' ? "animate-marquee-up" : "animate-marquee-down",
          "group-hover/column:[animation-play-state:paused]"
        )}
        style={{ '--duration': speed } as React.CSSProperties}
      >
        {[...items, ...items].map((t, idx) => (
          <div key={`${t.id}-${idx}`}>
            <TestimonialCard testimonial={t} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function Testimonials() {
  const isMobile = useIsMobile()
  const [mobileItems, setMobileItems] = useState(testimonials)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const col1 = [testimonials[0], testimonials[3], testimonials[6]]
  const col2 = [testimonials[1], testimonials[4], testimonials[7]]
  const col3 = [testimonials[2], testimonials[5], testimonials[8]]

  const removeCard = () => {
    setMobileItems((prev) => prev.slice(1))
  }

  const resetCards = () => {
    setMobileItems(testimonials)
  }

  if (!isMounted) return <section className="min-h-[600px] bg-white" />

  return (
    <section className="bg-white py-20 lg:py-24 relative overflow-hidden border-t border-black/[0.03]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Success Stories</span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-black leading-[1.05] tracking-tighter uppercase">
                TRUSTED BY <br />
                <span className="text-[#f5b800]">INDUSTRY LEADERS</span>
              </h2>
              <div className="w-16 md:w-20 h-1.5 bg-black mt-2" />
            </div>
            <p className="text-sm md:text-base text-black/50 font-medium leading-relaxed max-w-sm">
              We measure our success by the growth of our partners. Here's what they have to say.
            </p>
          </motion.div>
        </div>

        {isMobile ? (
          <div className="relative h-[300px] flex flex-col items-center">
            <div className="relative w-full max-w-[320px] h-[180px]">
              <AnimatePresence>
                {mobileItems.length > 0 ? (
                  mobileItems.slice(0, 3).map((t, idx) => (
                    <TinderCard 
                      key={t.id} 
                      testimonial={t} 
                      onRemove={removeCard} 
                      index={idx} 
                      total={3} 
                    />
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/[0.02] rounded-[1.25rem] border border-dashed border-black/10"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/20">End of stack</span>
                    <button 
                      onClick={resetCards}
                      className="p-2 rounded-full bg-black text-white hover:scale-110 active:scale-95 transition-all"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <p className="mt-8 text-[9px] font-black uppercase tracking-[0.2em] text-black/20 animate-pulse">
              Swipe cards to discover
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[500px] relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

            <MarqueeColumn items={col1} direction="up" speed="30s" />
            <div className="hidden md:block">
              <MarqueeColumn items={col2} direction="down" speed="40s" />
            </div>
            <div className="hidden lg:block">
              <MarqueeColumn items={col3} direction="up" speed="35s" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
