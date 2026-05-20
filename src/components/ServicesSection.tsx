
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Code,
  Smartphone,
  Video,
  Zap,
  Share2,
  Search,
  UserCheck,
  PenTool,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Branding",
    description: "Building distinctive brand identities that resonate and endure in a crowded market.",
    icon: Palette,
    accent: "bg-[#c7fff1]",
  },
  {
    title: "Website Development",
    description: "High-performance, responsive websites built with modern frameworks for speed and scale.",
    icon: Code,
    accent: "bg-[#e2f5ff]",
  },
  {
    title: "App Development",
    description: "Intuitive mobile and web experiences designed to solve complex problems simply.",
    icon: Smartphone,
    accent: "bg-[#f5f0ff]",
  },
  {
    title: "Video Editing",
    description: "Professional cinematic editing that tells your story and captures your audience's focus.",
    icon: Video,
    accent: "bg-[#fff0f0]",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven performance marketing focused on high ROI and sustainable growth.",
    icon: Zap,
    accent: "bg-[#f0fff4]",
  },
  {
    title: "Social Media Marketing & Management",
    description: "Strategic management and growth of your voice across all major social platforms.",
    icon: Share2,
    accent: "bg-[#fffbe2]",
  },
  {
    title: "SEO",
    description: "Advanced optimization strategies to dominate search results and drive organic traffic.",
    icon: Search,
    accent: "bg-[#e8fff8]",
  },
  {
    title: "UGC",
    description: "Authentic user-generated content that builds community trust and drives conversions.",
    icon: UserCheck,
    accent: "bg-[#f0f4ff]",
  },
  {
    title: "Content Creation",
    description: "Creative storytelling through high-impact visuals and compelling written narrative.",
    icon: PenTool,
    accent: "bg-[#fff5e6]",
  },
  {
    title: "Graphic Design",
    description: "Stunning visual assets that elevate your brand communication across every touchpoint.",
    icon: Layers,
    accent: "bg-[#f7f7f5]",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-white py-24 lg:pt-48 lg:pb-[120vh] overflow-visible min-h-screen flex items-start">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,black_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 w-full">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:sticky lg:top-48 h-fit space-y-6 md:space-y-8 mb-12 lg:mb-0 z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 md:space-y-8 max-w-2xl"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Our services</span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black leading-[1.05] tracking-tighter uppercase">
                  SCALING YOUR <br />
                  <span className="text-[#f5b800]">DIGITAL IMPACT</span>
                </h2>
                <div className="w-16 md:w-20 h-1.5 bg-black mt-2" />
              </div>

              <p className="text-base md:text-lg text-black/50 font-medium leading-relaxed max-w-sm">
                We simplify growth. Our expert teams build systems that help your brand reach more people and convert them into loyal customers.
              </p>

              <div className="pt-2 md:pt-3">
                <Button className="rounded-full bg-black text-white px-6 md:px-8 py-4 md:py-5 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-black/90 transition-all hover:translate-x-1 active:scale-95 shadow-2xl shadow-black/20 group">
                  Full Service List
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Stacked Cards */}
          <div className="flex flex-col gap-12 relative lg:max-w-xl lg:ml-auto w-full">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                service={service} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.05, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="w-full lg:sticky will-change-transform"
      style={{
        top: `calc(160px + ${index * 24}px)`,
        zIndex: 20 + index,
      }}
    >
      <div className="group relative overflow-hidden rounded-[20px] border border-black/[0.04] bg-[#f7f7f5] p-5 md:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.02)] transition-all duration-700 hover:shadow-[0_20px_60px_rgba(0,0,0,0.04)] transform-gpu min-h-[100px] flex items-center">
        
        <div className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-[0.08]",
          service.accent
        )} />

        <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between w-full">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className={cn(
              "flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-[12px] border border-black/[0.03] transition-all duration-700 group-hover:scale-105",
              service.accent
            )}>
              <Icon size={16} strokeWidth={1.5} className="text-black transition-transform duration-700 group-hover:scale-110" />
            </div>

            <div className="space-y-0.5">
              <h3 className="text-[14px] md:text-[15px] font-black tracking-tight text-[#111111] uppercase">
                {service.title}
              </h3>
              <p className="max-w-[280px] md:max-w-md text-[10px] md:text-[11px] leading-relaxed text-black/40 font-medium">
                {service.description}
              </p>
            </div>
          </div>

          <button className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-500 hover:scale-110 active:scale-90 group/btn shrink-0 shadow-lg shadow-black/10">
            <ArrowUpRight size={14} strokeWidth={2} className="transition-transform duration-500 group-hover:rotate-45" />
          </button>
        </div>

        <div className="absolute top-2 right-4 text-[20px] md:text-[24px] font-black text-black/[0.01] leading-none select-none tracking-tighter transition-all duration-700 group-hover:text-black/[0.02] pointer-events-none">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>
    </motion.div>
  );
}
