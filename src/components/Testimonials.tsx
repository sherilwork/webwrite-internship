
"use client"

import React from "react"
import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, EcoSphere",
    content: "Webwrite didn't just build a website; they built a growth engine. Our conversions increased by 40% within the first month of launch.",
    avatar: "https://picsum.photos/seed/user1/100/100",
  },
  {
    name: "David Chen",
    role: "Marketing Director, FinTech Solutions",
    content: "The level of strategic thinking they bring to every project is unmatched. They understand the intersection of design and performance perfectly.",
    avatar: "https://picsum.photos/seed/user2/100/100",
  },
  {
    name: "Aisha Patel",
    role: "Founder, Luxe Fashion Hub",
    content: "Their video production team captured our brand's essence beautifully. The cinematic quality of our campaign has elevated our entire market presence.",
    avatar: "https://picsum.photos/seed/user3/100/100",
  },
  {
    name: "Marcus Thorne",
    role: "Product Lead, MedTech Innovations",
    content: "A partner that actually listens. They simplified our complex product offering into a clear, compelling digital story that resonates with clinicians.",
    avatar: "https://picsum.photos/seed/user4/100/100",
  },
  {
    name: "Elena Rodriguez",
    role: "Digital Manager, Global Learning LMS",
    content: "Efficiency meets creativity. Webwrite delivered a high-performance platform that handles half a million students with zero friction.",
    avatar: "https://picsum.photos/seed/user5/100/100",
  },
  {
    name: "James Wilson",
    role: "Co-Founder, Retail Logic",
    content: "The SEO and Meta Ads strategy they implemented has cut our customer acquisition cost in half. Truly impressive results.",
    avatar: "https://picsum.photos/seed/user6/100/100",
  },
  {
    name: "Robert Fox",
    role: "Head of Operations, Sagar Disposal",
    content: "The B2B portal they developed for us has completely streamlined our inventory management. Their technical prowess is matched only by their professionalism.",
    avatar: "https://picsum.photos/seed/user7/100/100",
  },
  {
    name: "Emily Davis",
    role: "Founder, Sundar Vibes",
    content: "Creative, responsive, and truly strategic. They've become an essential extension of our team, helping us navigate the competitive retail landscape with ease.",
    avatar: "https://picsum.photos/seed/user8/100/100",
  },
  {
    name: "Michael Brown",
    role: "Community Lead, AWS UG Pune",
    content: "A partnership built on trust and results. Their community-first approach helped us grow our network significantly through targeted digital campaigns.",
    avatar: "https://picsum.photos/seed/user9/100/100",
  }
]

export function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden border-t border-black/[0.03]">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-4xl mb-16 lg:mb-24">
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
            <p className="text-base md:text-lg text-black/50 font-medium leading-relaxed max-w-sm">
              We measure our success by the growth of our partners. Here's what they have to say.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative bg-[#f7f7f5] rounded-[2rem] p-8 border border-black/[0.04] shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.04)] transition-all duration-700"
            >
              <div className="absolute top-8 right-8 text-black/[0.05] group-hover:text-[#f5b800]/20 transition-colors duration-700">
                <Quote size={40} strokeWidth={3} />
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#f5b800] text-[#f5b800]" />
                  ))}
                </div>

                <p className="text-black/70 font-medium leading-relaxed text-sm md:text-base italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-black/[0.05]">
                  <Avatar className="h-12 w-12 border-2 border-white shadow-md">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-black text-white text-xs">{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-black uppercase tracking-wider text-black">{testimonial.name}</span>
                    <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
