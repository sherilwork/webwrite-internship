
"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight,
  Code,
  Zap,
  Video,
  Database,
  Layers,
  CheckCircle2,
  ChevronRight
} from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { SubHeader } from "@/components/SubHeader"
import { Footer } from "@/components/Footer"
import { GridBackground } from "@/components/GridBackground"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

const jobs = [
  {
    id: "01",
    title: "BACKEND DEVELOPER",
    location: "AGRA, IN",
    experience: "3-5 YEARS",
    type: "FULL-TIME",
    icon: Database,
    description: "We are looking for an experienced Backend Developer to join our core product team. You will be responsible for building robust PHP/MySQL APIs, optimizing database performance, and designing scalable server-side architectures. A deep understanding of modern PHP frameworks and RESTful design principles is essential."
  },
  {
    id: "02",
    title: "FRONTEND DEVELOPER",
    location: "REMOTE / NOIDA",
    experience: "2-4 YEARS",
    type: "FULL-TIME",
    icon: Code,
    description: "Seeking a creative Frontend Developer with expertise in React, Next.js and Tailwind CSS to craft immersive and high-performance user interfaces."
  },
  {
    id: "03",
    title: "DIGITAL MARKETING SPECIALIST",
    location: "ETAWAH, UP",
    experience: "1-3 YEARS",
    type: "FULL-TIME",
    icon: Zap,
    description: "Join our growth team to drive strategic performance marketing, Meta ads management, and social media campaigns for global brands."
  },
  {
    id: "04",
    title: "SENIOR VIDEO EDITOR",
    location: "MUMBAI / REMOTE",
    experience: "2-5 YEARS",
    type: "PROJECT-BASED",
    icon: Video,
    description: "Cinematic storyteller needed to create high-impact video content, motion graphics, and visual effects for premium client portfolios."
  },
  {
    id: "05",
    title: "UI/UX DESIGNER",
    location: "REMOTE",
    experience: "3+ YEARS",
    type: "FULL-TIME",
    icon: Layers,
    description: "Visionary designer focused on minimalist aesthetics, user journeys, and high-fidelity prototyping for advanced digital products."
  }
]

const responsibilities = [
  "HIGH-QUALITY CODE DELIVERY",
  "SCALABLE DESIGN SYNC",
  "TEAM COLLABORATION",
  "PERFORMANCE OPTIMIZATION"
]

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null)

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
              <Briefcase className="w-3.5 h-3.5 text-[#f5b800]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Career Opportunities</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-black leading-[1.05] tracking-tighter uppercase">
              JOIN OUR TEAM <br />
              <span className="text-[#f5b800]">DESIGN YOUR FUTURE</span>
            </h1>
            <div className="w-20 h-2 bg-black mt-4" />
            <p className="text-lg md:text-xl text-black/50 font-medium leading-relaxed pt-4">
              We're looking for innovative thinkers and expert builders to help us push the boundaries of digital experiences. Join a culture of high performance and creative freedom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="space-y-8">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 border-b border-black/[0.05] pb-6">Current Openings ({jobs.length})</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobs.map((job, idx) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative p-8 rounded-[2rem] bg-black/[0.01] border border-black/[0.05] hover:bg-black hover:text-white transition-all duration-500 overflow-hidden flex flex-col justify-between"
                >
                  <div className="space-y-6 relative z-10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-black/[0.03] group-hover:bg-[#f5b800] flex items-center justify-center text-black transition-colors shrink-0">
                          <job.icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-black uppercase tracking-tight leading-tight">{job.title}</h3>
                      </div>
                      
                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        <div className="flex items-center gap-1.5 opacity-40 group-hover:opacity-70">
                          <MapPin className="w-3 h-3" />
                          <span className="text-[9px] font-bold uppercase tracking-widest">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5 opacity-40 group-hover:opacity-70">
                          <Clock className="w-3 h-3" />
                          <span className="text-[9px] font-bold uppercase tracking-widest">{job.type}</span>
                        </div>
                      </div>

                      <p className="text-sm font-medium opacity-50 group-hover:opacity-80 leading-relaxed pt-2 line-clamp-4">
                        {job.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 pt-4">
                      <Button className="w-full rounded-full bg-[#f5b800] text-black text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all py-6 h-auto">
                        APPLY NOW
                      </Button>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            onClick={() => setSelectedJob(job)}
                            className="w-full rounded-full border-black/10 bg-white group-hover:bg-white text-black group-hover:text-black text-[10px] font-black uppercase tracking-widest py-6 h-auto transition-colors"
                          >
                            VIEW DETAILS
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl p-0 bg-white border-none rounded-[2.5rem] overflow-hidden">
                          <div className="bg-[#f5b800] p-8 md:p-12 text-black">
                            <DialogHeader>
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 border border-black/5 mb-4 w-fit">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Job Opening</span>
                              </div>
                              <DialogTitle className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4">
                                {selectedJob?.title}
                              </DialogTitle>
                              <div className="flex flex-wrap gap-4 opacity-60">
                                <div className="flex items-center gap-1.5">
                                  <MapPin className="w-4 h-4" />
                                  <span className="text-xs font-black uppercase tracking-widest">{selectedJob?.location}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <Clock className="w-4 h-4" />
                                  <span className="text-xs font-black uppercase tracking-widest">{selectedJob?.type}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <Briefcase className="w-4 h-4" />
                                  <span className="text-xs font-black uppercase tracking-widest">{selectedJob?.experience}</span>
                                </div>
                              </div>
                            </DialogHeader>
                          </div>
                          
                          <ScrollArea className="max-h-[60vh]">
                            <div className="p-8 md:p-12 space-y-10">
                              <section className="space-y-4">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30">Job Description</h4>
                                <p className="text-sm md:text-base text-black/60 font-medium leading-relaxed">
                                  {selectedJob?.description}
                                </p>
                              </section>

                              <section className="space-y-4">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30">Key Responsibilities</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {responsibilities.map((resp, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-black/[0.02] border border-black/[0.05] group hover:bg-black transition-all">
                                      <CheckCircle2 className="w-5 h-5 text-[#f5b800]" />
                                      <span className="text-[10px] font-black uppercase tracking-widest text-black/80 group-hover:text-white transition-colors">{resp}</span>
                                    </div>
                                  ))}
                                </div>
                              </section>

                              <Button className="w-full rounded-full bg-black text-white text-[12px] font-black uppercase tracking-[0.2em] py-8 h-auto hover:bg-[#f5b800] hover:text-black transition-all group">
                                APPLY FOR THIS PROFILE
                                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </div>
                          </ScrollArea>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>

                  <div className="absolute top-4 right-8 text-[60px] font-black text-black/[0.02] group-hover:text-white/[0.01] pointer-events-none transition-colors">
                    {job.id}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="p-12 rounded-[3rem] bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f5b800]/10 blur-[100px] rounded-full" />
            <div className="space-y-4 text-center md:text-left relative z-10">
              <h2 className="text-3xl font-black uppercase tracking-tighter">Not seeing your role?</h2>
              <p className="text-sm font-bold uppercase tracking-widest opacity-60">We're always looking for brilliant minds to join our mission. Send us your CV anyway.</p>
            </div>
            <a href="mailto:careers@webwrite.services" className="relative z-10">
              <button className="px-10 py-5 rounded-full bg-[#f5b800] text-black text-xs font-black uppercase tracking-widest hover:translate-x-1 transition-all active:scale-95 flex items-center gap-3">
                Drop your CV
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
