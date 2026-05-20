
"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Users, 
  Layout, 
  MessageSquare, 
  Zap, 
  TrendingUp, 
  HeartHandshake,
  ArrowRight
} from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { SubHeader } from "@/components/SubHeader"
import { Footer } from "@/components/Footer"
import { GridBackground } from "@/components/GridBackground"

const differences = [
  {
    icon: Users,
    title: "Personalized Solutions",
    description: "We take the time to understand each client's unique needs, creating custom solutions that align with their goals and vision. This approach ensures that every project truly reflects the brand’s identity."
  },
  {
    icon: Layout,
    title: "Simple, Effective Designs",
    description: "We believe in simplicity and clarity, designing websites that are easy to navigate and visually appealing, making the user experience seamless."
  },
  {
    icon: MessageSquare,
    title: "Content That Connects",
    description: "Beyond just words, our content is crafted to resonate with audiences, engaging users and helping brands build trust online. Every piece is created with purpose, aiming to create real connections."
  },
  {
    icon: Zap,
    title: "Innovation with Practicality",
    description: "We bring new ideas to life in ways that are easy to implement and effective, combining creativity with functionality. Our solutions are not just innovative but also practical for everyday use."
  },
  {
    icon: TrendingUp,
    title: "Focus on Long-Term Growth",
    description: "Our strategies are designed not just for immediate results but for lasting impact, supporting growth and relevance over time. We’re committed to helping brands thrive in the long run, not just today."
  },
  {
    icon: HeartHandshake,
    title: "Accessible Communication",
    description: "We maintain straightforward communication with our clients, ensuring transparency and easy collaboration every step of the way. Our clients can always count on us for clear updates."
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubHeader />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 overflow-hidden">
        <GridBackground gridSize={40} gridOpacity={0.03} showEdgeFade={true} className="h-[600px] absolute inset-0 -z-10" />
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-black leading-[1.05] tracking-tighter uppercase">
              FROM SMALL STEPS <br />
              <span className="text-[#f5b800]">TO BIG IDEAS</span>
            </h1>
            <div className="w-20 h-2 bg-black mt-4" />
            <p className="text-lg md:text-xl text-black/50 font-medium leading-relaxed pt-4">
              At Webwrite, we started small, with big dreams. Over time, we've grown into a place that creates digital solutions that make a difference. We’re here to help brands succeed online by building websites that work well and content that connects with people.
            </p>
            <p className="text-sm md:text-base text-black/40 leading-relaxed">
              With every project, we turn simple ideas into real opportunities, helping our clients leave a lasting mark in the digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Establishment Section */}
      <section className="bg-black py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f5b800]/10 blur-[100px] rounded-full" />
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-4">
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter">WebWrite Story</h2>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#f5b800]">Established</span>
              <div className="h-px w-12 bg-white/20" />
            </div>
          </div>
          <div className="text-center md:text-right">
            <span className="text-7xl md:text-9xl font-black text-white/5 uppercase tracking-tighter absolute right-6 md:right-12 top-1/2 -translate-y-1/2 select-none">EST. 2021</span>
            <span className="text-5xl md:text-7xl font-black text-[#f5b800] tracking-tighter relative z-10">EST. 2021</span>
          </div>
        </div>
      </section>

      {/* The WebWrite Way Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
                <Zap className="w-3.5 h-3.5 text-[#f5b800]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">The WebWrite Way</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-black leading-tight tracking-tighter uppercase">
                WHY OUR AGENCY <br />
                <span className="text-[#f5b800]">IS DIFFERENT</span>
              </h2>
              <p className="text-sm md:text-lg text-black/40 font-bold uppercase tracking-widest">
                Turning Ideas into Reality with Simplicity and Impact
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differences.map((diff, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-[2.5rem] bg-black/[0.02] border border-black/[0.05] hover:bg-black hover:text-white transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-black mb-6 group-hover:bg-[#f5b800] transition-colors">
                    <diff.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-4">{diff.title}</h3>
                  <p className="text-sm font-medium opacity-50 group-hover:opacity-80 leading-relaxed">
                    {diff.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="p-12 rounded-[3rem] bg-[#f5b800] text-black flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-[#f5b800]/20">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-black uppercase tracking-tighter">Ready to write your story?</h2>
              <p className="text-sm font-bold uppercase tracking-widest opacity-60">Let's build something exceptional together.</p>
            </div>
            <a href="/#contact">
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
