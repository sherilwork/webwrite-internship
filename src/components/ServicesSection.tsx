
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  LineChart,
  Mail,
  Link2,
  Globe,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "SEO Strategy",
    description:
      "Dominate search rankings with our advanced, data-driven SEO methodologies tailored for competitive markets.",
    icon: Search,
    accent: "bg-[#c7fff1]",
  },
  {
    title: "Paid Acquisition",
    description:
      "Scale your revenue with high-intent SEM and Meta advertising campaigns optimized for maximum ROI.",
    icon: LineChart,
    accent: "bg-[#e2f5ff]",
  },
  {
    title: "Lifecycle Marketing",
    description:
      "Automated conversion funnels and email sequences designed to nurture leads into lifelong brand advocates.",
    icon: Mail,
    accent: "bg-[#f5f0ff]",
  },
  {
    title: "Authority Building",
    description:
      "Secure top-tier backlinks and media placements to accelerate your domain authority and organic growth.",
    icon: Link2,
    accent: "bg-[#fff0f0]",
  },
  {
    title: "Global Search",
    description:
      "Expansion-focused SEO strategies designed to help your brand conquer international markets and local regions.",
    icon: Globe,
    accent: "bg-[#f0fff4]",
  },
  {
    title: "Conversion Engine",
    description:
      "Turn traffic into transactions with rigorous A/B testing, heatmapping, and behavioral analytics optimization.",
    icon: BarChart3,
    accent: "bg-[#fffbe2]",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-[#f7f7f5] py-24 lg:py-48 overflow-visible min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,black_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 w-full">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:sticky lg:top-40 h-fit space-y-6 md:space-y-8 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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

              <p className="text-base md:text-lg text-black/50 font-medium leading-relaxed">
                We simplify growth. Our expert teams build systems that help your brand reach more people and convert them into loyal customers.
              </p>

              <div className="pt-4 md:pt-6">
                <Button className="rounded-full bg-black text-white px-8 md:px-10 py-6 md:py-7 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-black/90 transition-all hover:translate-x-1 active:scale-95 shadow-2xl shadow-black/20 group">
                  Full Service List
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Stacked Cards */}
          <div className="flex flex-col gap-5 relative lg:max-w-xl lg:ml-auto">
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
      viewport={{ once: true, margin: "-5% 0px -5% 0px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="w-full lg:sticky will-change-transform"
      style={{
        top: `calc(160px + ${index * 24}px)`,
        zIndex: 20 + index,
      }}
    >
      <div className="group relative overflow-hidden rounded-[20px] border border-black/[0.04] bg-white p-5 md:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.02)] transition-all duration-700 hover:shadow-[0_20px_60px_rgba(0,0,0,0.04)] transform-gpu">
        
        <div className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-[0.1]",
          service.accent
        )} />

        <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className={cn(
              "flex h-11 w-11 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-[15px] border border-black/[0.03] transition-all duration-700 group-hover:scale-105 group-hover:rotate-3",
              service.accent
            )}>
              <Icon size={20} strokeWidth={1.5} className="text-black transition-transform duration-700 group-hover:scale-110" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base md:text-lg font-bold tracking-tight text-[#111111]">
                {service.title}
              </h3>
              <p className="max-w-sm text-[11px] md:text-xs leading-relaxed text-black/40 font-medium">
                {service.description}
              </p>
            </div>
          </div>

          <button className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-black text-white transition-all duration-500 hover:scale-110 active:scale-90 group/btn shrink-0">
            <ArrowUpRight size={16} strokeWidth={2} className="transition-transform duration-500 group-hover:rotate-45" />
          </button>
        </div>

        <div className="absolute top-5 right-6 text-[32px] md:text-[40px] font-black text-black/[0.015] leading-none select-none tracking-tighter transition-all duration-700 group-hover:text-black/[0.03] group-hover:-translate-y-1 pointer-events-none">
          {index + 1}
        </div>
      </div>
    </motion.div>
  );
}
