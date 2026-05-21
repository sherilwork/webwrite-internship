
"use client"

import React, { useState } from 'react'
import { Navigation } from "@/components/Navigation"
import { SubHeader } from "@/components/SubHeader"
import { Footer } from "@/components/Footer"
import { GridBackground } from "@/components/GridBackground"
import { Briefcase, MapPin, Clock, Calendar, ArrowRight, Plus, Upload, Send, Info, CheckCircle2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"

const JOBS = [
  {
    id: "backend-dev",
    role: "Backend Developer",
    location: "Agra, IN",
    experience: "3-5 Years",
    type: "Full-time",
    description: "We are looking for an experienced Backend Developer to join our core product team. You will be responsible for building robust PHP/MySQL APIs, optimizing database performance, and designing scalable server-side architectures. A deep understanding of modern PHP frameworks and RESTful design principles is essential."
  },
  {
    id: "frontend-dev",
    role: "Frontend Developer",
    location: "Remote / Noida",
    experience: "2-4 Years",
    type: "Full-time",
    description: "Seeking a creative Frontend Developer with expertise in React, Next.js and Tailwind CSS to craft immersive and high-performance user interfaces."
  },
  {
    id: "digi-mkt",
    role: "Digital Marketing Specialist",
    location: "Etawah, UP",
    experience: "1-3 Years",
    type: "Full-time",
    description: "Join our growth team to drive strategic performance marketing, Meta ads management, and social media campaigns for global brands."
  },
  {
    id: "video-editor",
    role: "Senior Video Editor",
    location: "Mumbai / Remote",
    experience: "2-5 Years",
    type: "Project-based",
    description: "Cinematic storyteller needed to create high-impact video content, motion graphics, and visual effects for premium client portfolios."
  },
  {
    id: "uiux-designer",
    role: "UI/UX Designer",
    location: "Remote",
    experience: "3+ Years",
    type: "Full-time",
    description: "Visionary designer focused on minimalist aesthetics, user journeys, and high-fidelity prototyping for advanced digital products."
  }
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof JOBS[0] | null>(null)
  const [viewingJob, setViewingJob] = useState<typeof JOBS[0] | null>(null)
  const [fileName, setFileName] = useState<string>("No file chosen")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name)
    } else {
      setFileName("No file chosen")
    }
  }

  const handleGeneralApplication = () => {
    setSelectedJob({
      id: "general",
      role: "General Application",
      location: "Multiple",
      experience: "Any",
      type: "Full-time",
      description: "Send us your portfolio. We're always looking for exceptional talent to join our specialized teams."
    })
  }

  return (
    <main className="min-h-screen bg-white">
      <SubHeader />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-60 pb-20 overflow-hidden">
        <GridBackground gridSize={40} gridOpacity={0.03} showEdgeFade={true} className="h-[600px] absolute inset-0 -z-10" />
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/60">Join Our Team</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-black leading-[1.05] tracking-tighter uppercase">
              DESIGN YOUR <br />
              <span className="text-[#f5b800]">PROFESSIONAL FUTURE</span>
            </h1>
            <div className="w-20 h-2 bg-black mt-4" />
            <p className="text-lg md:text-xl text-black/50 font-medium leading-relaxed pt-4">
              We're looking for innovative thinkers and expert builders to help us push the boundaries of digital experiences and build systems that work.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {JOBS.map((job, i) => (
              <JobCard 
                key={job.id} 
                job={job} 
                index={i} 
                onApply={() => setSelectedJob(job)} 
                onViewDetails={() => setViewingJob(job)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="p-12 rounded-[3rem] bg-[#f5b800] text-black flex flex-col items-center text-center gap-8 shadow-2xl shadow-[#f5b800]/20">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Don't See a <span className="italic opacity-60">Fit?</span></h2>
              <p className="text-sm md:text-lg font-bold uppercase tracking-widest opacity-60 max-w-xl">
                Send us your portfolio anyway. We're always looking for exceptional talent to join our specialized teams.
              </p>
            </div>
            <button 
              onClick={handleGeneralApplication}
              className="px-10 py-5 rounded-full bg-black text-white text-xs font-black uppercase tracking-widest hover:translate-x-1 transition-all active:scale-95 flex items-center gap-3"
            >
              General Application
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Details Dialog */}
      <Dialog open={!!viewingJob} onOpenChange={(open) => !open && setViewingJob(null)}>
        <DialogContent 
          data-lenis-prevent
          className="max-w-2xl bg-white border border-black/5 p-0 shadow-2xl overflow-hidden rounded-xl flex flex-col max-h-[90vh]"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#f5b800] z-50" />
          
          <ScrollArea className="flex-1 overflow-y-auto">
            <div className="p-8 md:p-12 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/60">Job Opening</span>
                </div>
                
                <div className="space-y-4">
                  <DialogTitle className="text-3xl md:text-5xl font-black text-black tracking-tighter uppercase leading-[1.1]">
                    {viewingJob?.role}
                  </DialogTitle>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center gap-2 text-black/60">
                      <MapPin className="w-4 h-4 text-[#f5b800]" />
                      <span className="text-[11px] font-black uppercase tracking-widest">{viewingJob?.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-black/60">
                      <Calendar className="w-4 h-4 text-[#f5b800]" />
                      <span className="text-[11px] font-black uppercase tracking-widest">{viewingJob?.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-black/60">
                      <Clock className="w-4 h-4 text-[#f5b800]" />
                      <span className="text-[11px] font-black uppercase tracking-widest">{viewingJob?.type}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 border-t border-black/5 pt-8">
                <div className="flex items-center gap-3">
                   <Info className="w-4 h-4 text-[#f5b800]" />
                   <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-black">Job Description</h4>
                </div>
                <p className="text-black/50 text-base leading-relaxed font-medium">
                  {viewingJob?.description}
                </p>
              </div>

              <div className="space-y-6 border-t border-black/5 pt-8">
                 <div className="flex items-center gap-3">
                   <CheckCircle2 className="w-4 h-4 text-[#f5b800]" />
                   <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-black">Key Responsibilities</h4>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <DetailPoint label="High-Quality Code Delivery" />
                    <DetailPoint label="Scalable Design Sync" />
                    <DetailPoint label="Team Collaboration" />
                    <DetailPoint label="Performance Optimization" />
                 </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => {
                    setSelectedJob(viewingJob)
                    setViewingJob(null)
                  }}
                  className="w-full h-14 bg-black text-white text-[12px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-[#f5b800] hover:text-black transition-all duration-500 rounded-full group"
                >
                  Apply for this profile
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            
            <div className="px-12 pb-12 flex items-center justify-center opacity-10">
               <span className="text-[8px] font-black tracking-[0.5em] uppercase text-black">We Are Hiring</span>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Application Dialog */}
      <Dialog open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
        <DialogContent 
          data-lenis-prevent
          className="max-w-2xl bg-white border border-black/5 p-0 shadow-2xl overflow-hidden rounded-xl flex flex-col max-h-[90vh]"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#f5b800] z-50" />
          
          <ScrollArea className="flex-1 overflow-y-auto">
            <div className="p-8 md:p-12 space-y-8">
              <div className="space-y-4">
                <DialogTitle className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight text-black">
                  Apply for <span className="text-[#f5b800] italic">{selectedJob?.role}</span>
                </DialogTitle>
                <DialogDescription className="text-black/40 text-xs font-bold uppercase tracking-widest">
                  Fill out the form below and attach your resume to apply for this position.
                </DialogDescription>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-[0.2em] font-black text-black ml-1">Full Name *</Label>
                    <Input 
                      placeholder="John Doe" 
                      className="bg-black/[0.02] border border-black/20 h-12 rounded-xl focus-visible:ring-[#f5b800]/30 text-black placeholder:text-black/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-[0.2em] font-black text-black ml-1">Email Address *</Label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-black/[0.02] border border-black/20 h-12 rounded-xl focus-visible:ring-[#f5b800]/30 text-black placeholder:text-black/10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-[0.2em] font-black text-black ml-1">Mobile Number *</Label>
                    <Input 
                      placeholder="+91 9876543210" 
                      className="bg-black/[0.02] border border-black/20 h-12 rounded-xl focus-visible:ring-[#f5b800]/30 text-black placeholder:text-black/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-[0.2em] font-black text-black ml-1">Current Address *</Label>
                    <Input 
                      placeholder="City, Country" 
                      className="bg-black/[0.02] border border-black/20 h-12 rounded-xl focus-visible:ring-[#f5b800]/30 text-black placeholder:text-black/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-[0.2em] font-black text-black ml-1">Resume / CV (PDF, DOCX) *</Label>
                  <div className="relative group/upload">
                    <input 
                      type="file" 
                      id="resume-upload" 
                      className="sr-only" 
                      accept=".pdf,.docx"
                      onChange={handleFileChange}
                    />
                    <label 
                      htmlFor="resume-upload"
                      className="flex items-center justify-between h-14 px-6 bg-black/[0.01] border border-dashed border-black/20 rounded-xl group-hover/upload:border-[#f5b800]/40 group-hover/upload:bg-[#f5b800]/5 transition-all cursor-pointer"
                    >
                      <span className="text-sm font-medium text-black/60 truncate max-w-[70%]">
                        {fileName}
                      </span>
                      <div className="flex items-center gap-2 text-[#f5b800]">
                        <Upload className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Select File</span>
                      </div>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full h-14 bg-black text-white text-[12px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-[#f5b800] hover:text-black transition-all duration-500 rounded-full group"
                >
                  Submit Application
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            <div className="px-12 pb-12 flex items-center justify-center opacity-10">
               <span className="text-[8px] font-black tracking-[0.5em] uppercase text-black">Secure Submission</span>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  )
}

function DetailPoint({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-1.5 h-1.5 bg-[#f5b800] rotate-45" />
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/60">{label}</span>
    </div>
  )
}

function JobCard({ job, index, onApply, onViewDetails }: { job: typeof JOBS[0], index: number, onApply: () => void, onViewDetails: () => void }) {
  return (
    <div 
      className="group relative bg-black/[0.01] border border-black/[0.05] rounded-xl p-8 overflow-hidden hover:border-[#f5b800]/30 hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 transform-gpu flex flex-col min-h-[480px]"
      style={{ animationDelay: `${0.05 * index}s` }}
    >
      <div className="relative z-10 space-y-6 flex-1">
        <div className="flex justify-between items-center">
           <div className="w-12 h-12 rounded-2xl bg-[#f5b800]/10 border border-[#f5b800]/20 flex items-center justify-center text-black transition-transform group-hover:scale-110">
             <Briefcase className="w-6 h-6" />
           </div>
           <span className="text-[8px] font-black text-black/20 tracking-[0.3em] uppercase">[JOB_0{index + 1}]</span>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-black text-black uppercase tracking-tight group-hover:text-[#f5b800] transition-colors">
            {job.role}
          </h3>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 text-black/30">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-[10px] font-black uppercase tracking-widest">{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-black/30">
              <Calendar className="w-3.5 h-3.5" />
              <span className="text-[10px] font-black uppercase tracking-widest">{job.experience}</span>
            </div>
            <div className="flex items-center gap-2 text-black/30">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-[10px] font-black uppercase tracking-widest">{job.type}</span>
            </div>
          </div>

          <p className="text-black/40 text-sm font-medium leading-relaxed pt-4 border-t border-black/5 line-clamp-3">
            {job.description}
          </p>
        </div>
      </div>

      <div className="relative z-10 pt-8 mt-auto flex flex-col gap-3">
        <button 
          onClick={onApply}
          className="w-full h-12 bg-black text-white text-[11px] font-black uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-[#f5b800] hover:text-black transition-all duration-300 rounded-full group/btn"
        >
          Apply Now
          <ArrowRight className="w-4 h-4 transition-transform group/btn:translate-x-1" />
        </button>
        <button 
          onClick={onViewDetails}
          className="w-full h-12 bg-black/[0.03] text-black/40 text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-black hover:text-white transition-all duration-300 rounded-full group/details"
        >
          View Details
          <Plus className="w-3.5 h-3.5 transition-transform group/details:rotate-90" />
        </button>
      </div>

      <div className="absolute top-0 right-0 w-24 h-24 bg-[#f5b800]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  )
}
