"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Instagram, Facebook, Youtube } from "lucide-react"
import { founders } from "@/constants/founder"

export function FounderSection() {
  const founder = founders[0]

  return (
    <section className="bg-white py-20 lg:py-32 relative overflow-hidden border-t border-black/[0.03]">
      {/* Background Ambient Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[#f5b800]/[0.01] blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-center">
          
          {/* Left: Founder Message */}
          <div className="flex-1 order-2 lg:order-1 space-y-8 lg:translate-x-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Meet the Founder</span>
                </div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-black leading-[1.05] tracking-tighter uppercase">
                  CRAFTING THE <br />
                  <span className="text-[#f5b800]">DIGITAL FUTURE</span>
                </h2>
                <div className="w-16 md:w-20 h-1.5 bg-black mt-2" />
              </div>

              <div className="space-y-4 max-w-xl">
                <p className="text-sm md:text-lg text-black/50 font-medium leading-relaxed italic">
                  "{founder.quote}"
                </p>
                
                <div className="pt-4 flex flex-col">
                  <span className="text-lg md:text-2xl font-black text-black tracking-tight uppercase">{founder.name}</span>
                  <span className="text-[10px] md:text-xs font-bold text-[#f5b800] uppercase tracking-[0.3em]">{founder.role}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex flex-wrap gap-2">
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/[0.03] hover:bg-[#f5b800]/20 transition-colors" title="LinkedIn">
                    <Linkedin className="w-4 h-4 text-black" />
                  </a>
                  <a href={founder.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/[0.03] hover:bg-[#f5b800]/20 transition-colors" title="Instagram">
                    <Instagram className="w-4 h-4 text-black" />
                  </a>
                  <a href={founder.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/[0.03] hover:bg-[#f5b800]/20 transition-colors" title="Facebook">
                    <Facebook className="w-4 h-4 text-black" />
                  </a>
                  <a href={founder.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/[0.03] hover:bg-[#f5b800]/20 transition-colors" title="X (Twitter)">
                    <Twitter className="w-4 h-4 text-black" />
                  </a>
                  <a href={founder.youtube} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/[0.03] hover:bg-[#f5b800]/20 transition-colors" title="YouTube">
                    <Youtube className="w-4 h-4 text-black" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual Image */}
          <div className="flex-1 order-1 lg:order-2 w-full max-w-[260px] md:max-w-[320px] lg:max-w-[380px] lg:-translate-x-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-2xl shadow-black/5"
            >
              <Image 
                src={founder.image || founder.fallbackImage}
                alt={`${founder.name} - Founder`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                data-ai-hint="indian man"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
