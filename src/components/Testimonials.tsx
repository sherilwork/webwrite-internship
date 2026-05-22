
"use client"

import React, { useState, useEffect } from "react"
import { motion, useMotionValue, useTransform, AnimatePresence, PanInfo } from "framer-motion"
import { Quote, Star, RotateCcw } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

const testimonials = [
  {
    id: "1",
    name: "Education Arena",
    role: "Local Guide",
    content: "WebWrite Services is doing an outstanding job in the field of social media management and video editing. From creating high-quality, engaging content to handling official pages.",
    stars: 5
  },
  {
    id: "2",
    name: "Sundar Vibes",
    role: "Client",
    content: "Love to work with webwrite team, they made a fantastic website for my brand and also creatives for social media. Highly recommended for premium branding.",
    stars: 5
  },
  {
    id: "3",
    name: "Squareup",
    role: "Client",
    content: "Handling all my operations and marketing best team! Love working with WebWrite team. They understand the vision perfectly.",
    stars: 5
  },
  {
    id: "4",
    name: "Function Up",
    role: "Client",
    content: "WebWrite Services delivers exceptional web and app development services. Their expertise and customized solutions exceeded my expectations. Communication was efficient.",
    stars: 5
  },
  {
    id: "5",
    name: "SPS GLOBAL SCHOOL",
    role: "Institutional Client",
    content: "WebWrite services provides best social media marketing services to SPS Global School Jaswantnagar! Best Company for social media management & marketing.",
    stars: 5
  },
  {
    id: "6",
    name: "Effortless Esports",
    role: "Gaming Org",
    content: "WebWrite Provides amazing web services and they have other services also! Highly recommend for your businesses. They are quick and professional.",
    stars: 5
  },
  {
    id: "7",
    name: "SunShine Fitness",
    role: "Client",
    content: "I love to work with them! they do an amazing work! I'm totally satisfied by their work! Recommend webwrite for anyone looking for growth.",
    stars: 4
  },
  {
    id: "8",
    name: "PlayXpo Tech",
    role: "Client",
    content: "Great experience with webwrite services! team also amazing. They delivered the project before the deadline with top-notch quality.",
    stars: 5
  },
  {
    id: "9",
    name: "Akshita Sales",
    role: "Tech Client",
    content: "Great work with webwrite Services! highly recommended for mobile and smart tech branding. Their strategies really work.",
    stars: 5
  },
  {
    id: "10",
    name: "Kunal Chavan",
    role: "Client",
    content: "Good Work, having great experience with Team WebWrite! The technical support is very responsive and helpful.",
    stars: 4
  },
  {
    id: "11",
    name: "Atharva Shetye",
    role: "Client",
    content: "Best IT Company for Development !!! WebWrite Services is the place to go if you want quality web solutions.",
    stars: 5
  },
  {
    id: "12",
    name: "Harsh Vardhan",
    role: "Client",
    content: "Doing great work Rishi! keep it up... The team's dedication to project success is truly commendable.",
    stars: 5
  },
  {
    id: "13",
    name: "Marathi Gamer",
    role: "Client",
    content: "Great job!!! The video editing and graphics for my channel were fantastic. Very happy with the results.",
    stars: 4
  },
  {
    id: "14",
    name: "ANKIT KUMAR",
    role: "Local Guide",
    content: "Best service provider in the region. Their marketing strategies helped us gain a lot of visibility online.",
    stars: 5
  },
  {
    id: "15",
    name: "Reema Yadav",
    role: "Client",
    content: "Professional and highly skilled team. They made the entire development process very smooth and stress-free.",
    stars: 5
  },
  {
    id: "16",
    name: "S",
    role: "Client",
    content: "Excellent support and very reliable services. WebWrite has been a great partner for our digital journey.",
    stars: 4
  }
]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="group relative bg-[#f7f7f5] rounded-[1.25rem] p-4 border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-700 h-full flex flex-col justify-between select-none">
      <div className="absolute top-4 right-4 text-black/[0.05] group-hover:text-[#f5b800]/20 transition-colors duration-700">
        <Quote size={18} strokeWidth={3} />
      </div>
      
      <div className="space-y-3 relative z-10">
        <div className="flex gap-0.5">
          {[...Array(testimonial.stars)].map((_, i) => (
            <Star key={i} size={8} className="fill-[#f5b800] text-[#f5b800]" />
          ))}
          {testimonial.stars < 5 && [...Array(5 - testimonial.stars)].map((_, i) => (
            <Star key={i} size={8} className="text-black/10" />
          ))}
        </div>

        <p className="text-black/70 font-medium leading-snug text-[11px] md:text-[12px] italic line-clamp-3 min-h-[3em]">
          "{testimonial.content}"
        </p>

        <div className="flex items-center gap-2.5 pt-3 border-t border-black/[0.05]">
          <Avatar className="h-8 w-8 border border-white shadow-sm">
            <AvatarFallback className="bg-black text-white text-[9px] font-black uppercase">{testimonial.name[0]}</AvatarFallback>
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

  function handleDragEnd(event: any, info: PanInfo) {
    const swipeThreshold = 100
    const velocityThreshold = 500
    
    if (Math.abs(info.offset.x) > swipeThreshold || Math.abs(info.velocity.x) > velocityThreshold) {
      onRemove()
    }
  }

  return (
    <motion.div
      style={{ 
        x, 
        rotate, 
        opacity, 
        zIndex: total - index,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.05 }}
      animate={{ 
        scale: 1 - index * 0.05,
        y: index * 12,
      }}
      exit={{ 
        x: x.get() < 0 ? -500 : 500, 
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.3, ease: "easeIn" }
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 35
      }}
      className="w-full cursor-grab active:cursor-grabbing will-change-transform transform-gpu"
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

  // Optimized distribution for 16 items across 3 columns
  const col1 = [testimonials[0], testimonials[3], testimonials[6], testimonials[9], testimonials[12], testimonials[15]]
  const col2 = [testimonials[1], testimonials[4], testimonials[7], testimonials[10], testimonials[13]]
  const col3 = [testimonials[2], testimonials[5], testimonials[8], testimonials[11], testimonials[14]]

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
          <div className="relative h-[360px] flex flex-col items-center">
            <div className="relative w-full max-w-[320px] h-[200px]">
              <AnimatePresence initial={false}>
                {mobileItems.length > 0 ? (
                  mobileItems.slice(0, 5).reverse().map((t, idx) => (
                    <TinderCard 
                      key={t.id} 
                      testimonial={t} 
                      onRemove={removeCard} 
                      index={Math.min(4, mobileItems.slice(0, 5).length - 1) - idx} 
                      total={5} 
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
                      className="p-3 rounded-full bg-black text-white hover:scale-110 active:scale-95 transition-all shadow-xl"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="mt-12 flex flex-col items-center gap-2">
               <p className="text-[9px] font-black uppercase tracking-[0.2em] text-black/20 animate-pulse">
                Swipe cards to discover
              </p>
              {mobileItems.length > 0 && (
                <div className="flex gap-1">
                  {testimonials.map((_, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "w-1 h-1 rounded-full transition-all duration-300",
                        i < (testimonials.length - mobileItems.length) ? "bg-[#f5b800] scale-125" : "bg-black/10"
                      )} 
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[500px] relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

            <MarqueeColumn items={col1} direction="up" speed="45s" />
            <div className="hidden md:block">
              <MarqueeColumn items={col2} direction="down" speed="55s" />
            </div>
            <div className="hidden lg:block">
              <MarqueeColumn items={col3} direction="up" speed="50s" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
