
"use client"

import React from "react"
import { motion } from "framer-motion"
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
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { SubHeader } from "@/components/SubHeader"
import { Footer } from "@/components/Footer"
import { GridBackground } from "@/components/GridBackground"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Branding",
    description: "Building distinctive brand identities that resonate and endure in a crowded market. We create the visual and emotional foundation for your success.",
    icon: Palette,
    accent: "bg-[#c7fff1]",
  },
  {
    title: "Website Development",
    description: "High-performance, responsive websites built with modern frameworks like Next.js for speed, scale, and exceptional user experience.",
    icon: Code,
    accent: "bg-[#e2f5ff]",
  },
  {
    title: "App Development",
    description: "Intuitive mobile and web applications designed to solve complex business problems through simple, elegant digital interfaces.",
    icon: Smartphone,
    accent: "bg-[#f5f0ff]",
  },
  {
    title: "Video Editing",
    description: "Professional cinematic editing that tells your story and captures your audience's focus. High-impact visuals for a digital-first world.",
    icon: Video,
    accent: "bg-[#fff0f0]",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven performance marketing (Meta & Google Ads) focused on high ROI, precision targeting, and sustainable business growth.",
    icon: Zap,
    accent: "bg-[#f0fff4]",
  },
  {
    title: "Social Media Management",
    description: "Strategic management and growth of your voice across all major social platforms, ensuring consistent engagement and brand authority.",
    icon: Share2,
    accent: "bg-[#fffbe2]",
  },
  {
    title: "SEO Optimization",
    description: "Advanced search engine optimization strategies to dominate search results, drive organic traffic, and establish long-term relevance.",
    icon: Search,
    accent: "bg-[#e8fff8]",
  },
  {
    title: "UGC Content",
    description: "Authentic user-generated content strategies that build community trust, drive social proof, and significantly increase conversions.",
    icon: UserCheck,
    accent: "bg-[#f0f4ff]",
  },
  {
    title: "Content Creation",
    description: "Creative storytelling through high-impact visuals and compelling written narrative tailored for your specific audience segments.",
    icon: PenTool,
    accent: "bg-[#fff5e6]",
  },
  {
    title: "Graphic Design",
    description: "Stunning visual assets that elevate your brand communication across every touchpoint, from social media to physical collateral.",
    icon: Layers,
    accent: "bg-[#f7f7f5]",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubHeader />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-60 pb-20 overflow-hidden">
        <GridBackground gridSize={40} gridOpacity={0.03} showEdgeFade={true} className="h-[500px] absolute inset-0 -z-10" />
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
              <Zap className="w-3.5 h-3.5 text-[#f5b800]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Our Expertise</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-black leading-[1.05] tracking-tighter uppercase">
              SCALING YOUR <br />
              <span className="text-[#f5b800]">DIGITAL IMPACT</span>
            </h1>
            <div className="w-20 h-2 bg-black mt-4" />
            <p className="text-lg md:text-xl text-black/50 font-medium leading-relaxed pt-4">
              We provide end-to-end digital solutions designed to help modern brands grow. From initial identity to full-scale performance marketing, we build the systems that drive success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group p-6 rounded-[1.5rem] bg-black/[0.01] border border-black/[0.05] hover:bg-black hover:text-white transition-all duration-500 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center text-black shadow-sm transition-transform duration-500 group-hover:scale-110",
                    service.accent
                  )}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black uppercase tracking-tight">{service.title}</h3>
                    <p className="text-xs md:text-sm font-medium opacity-50 group-hover:opacity-80 leading-relaxed line-clamp-4">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-black/[0.05] group-hover:border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#f5b800]" />
                    <span className="text-[9px] font-bold uppercase tracking-widest">Premium Service</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="p-12 rounded-[3rem] bg-[#f5b800] text-black flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-[#f5b800]/20">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-black uppercase tracking-tighter">Ready to scale your brand?</h2>
              <p className="text-sm font-bold uppercase tracking-widest opacity-60">Let's build a strategy that works for you.</p>
            </div>
            <a href="https://wa.me/917906627288" target="_blank" rel="noopener noreferrer">
              <button className="px-10 py-5 rounded-full bg-black text-white text-xs font-black uppercase tracking-widest hover:translate-x-1 transition-all active:scale-95 flex items-center gap-3">
                Start a project
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
