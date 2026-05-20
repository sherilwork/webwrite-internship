
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
  Calendar,
  Info,
  CheckCircle2,
  Upload,
  Send
} from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { SubHeader } from "@/components/SubHeader"
import { Footer } from "@/components/Footer"
import { GridBackground } from "@/components/GridBackground"
import { Button } from "@/components/ui/button"
import { 
  Dialog, 
  DialogContent, 
  DialogTitle 
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const jobs = [
  {
    id: "01",
    role: "BACKEND DEVELOPER",
    location: "AGRA, IN",
    experience: "3-5 YEARS",
    type: "FULL-TIME",
    icon: Database,
    description: "We are looking for an experienced Backend Developer to join our core product team. You will be responsible for building robust PHP/MySQL APIs, optimizing database performance, and designing scalable server-side architectures. A deep understanding of modern PHP frameworks and RESTful design principles is essential."
  },
  {
    id: "02",
    role: "FRONTEND DEVELOPER",
    location: "REMOTE / NOIDA",
    experience: "2-4 YEARS",
    type: "FULL-TIME",
    icon: Code,
    description: "Seeking a creative Frontend Developer with expertise in React, Next.js and Tailwind CSS to craft immersive and high-performance user interfaces."
  },
  {
    id: "03",
    role: "DIGITAL MARKETING SPECIALIST",
    location: "ETAWAH, UP",
    experience: "1-3 YEARS",
    type: "FULL-TIME",
    icon: Zap,
    description: "Join our growth team to drive strategic performance marketing, Meta ads management, and social media campaigns for global brands."
  },
  {
    id: "04",
    role: "SENIOR VIDEO EDITOR",
    location: "MUMBAI / REMOTE",
    experience: "2-5 YEARS",
    type: "PROJECT-BASED",
    icon: Video,
    description: "Cinematic storyteller needed to create high-impact video content, motion graphics, and visual effects for premium client portfolios."
  },
  {
    id: "05",
    role: "UI/UX DESIGNER",
    location: "REMOTE",
    experience: "3+ YEARS",
    type: "FULL-TIME",
    icon: Layers,
    description: "Visionary designer focused on minimalist aesthetics, user journeys, and high-fidelity prototyping for advanced digital products."
  }
]

// Helper Component used inside the popup
function DetailPoint({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-1.5 h-1.5 bg-[#f5b800] rounded-full" />
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/50">{label}</span>
    </div>
  )
}

// JOB DETAILS POPUP MODULE
export function JobDetailsPopup({ viewingJob, setViewingJob, setSelectedJob }: { viewingJob: any, setViewingJob: any, setSelectedJob: any }) {
  return (
    <Dialog open={!!viewingJob} onOpenChange={(open) => !open && setViewingJob(null)}>
        <DialogContent 
          data-lenis-prevent
          className="max-w-2xl bg-white border-black/5 text-black p-0 shadow-2xl overflow-y-auto max-h-[92vh] flex flex-col rounded-xl [&>button]:h-10 [&>button]:w-10 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:rounded-full [&>button]:bg-black/5 [&>button]:hover:bg-black/10 [&>button]:transition-all [&>button]:top-6 [&>button]:right-6 [&>button]:opacity-100 [&_svg]:size-5"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#f5b800] z-50 shrink-0" />
                     
          <div className="p-8 md:p-12 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05] w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Career Opportunity</span>
              </div>
                             
              <div className="space-y-4">
                <DialogTitle className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter leading-[1.1] pr-8">
                  {viewingJob?.role}
                </DialogTitle>
                
                <div className="flex flex-wrap gap-4 pt-2">
                  {[
                    { icon: MapPin, text: viewingJob?.location },
                    { icon: Calendar, text: viewingJob?.experience },
                    { icon: Clock, text: viewingJob?.type }
                  ].map((meta, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/[0.02] border border-black/[0.03]">
                      <meta.icon className="w-3.5 h-3.5 text-[#f5b800]" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-black/60">{meta.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 border-t border-black/[0.05] pt-10">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-lg bg-[#f5b800]/10 flex items-center justify-center">
                    <Info className="w-4 h-4 text-black" />
                 </div>
                 <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-black">Job Description</h4>
              </div>
              <p className="text-black/50 text-base md:text-lg leading-relaxed font-medium">
                {viewingJob?.description}
              </p>
            </div>

            <div className="space-y-6 border-t border-black/[0.05] pt-10">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-lg bg-[#f5b800]/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-black" />
                 </div>
                 <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-black">Key Responsibilities</h4>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                  <DetailPoint label="High-Quality Code Delivery" />
                  <DetailPoint label="Scalable Design Sync" />
                  <DetailPoint label="Team Collaboration" />
                  <DetailPoint label="Performance Optimization" />
               </div>
            </div>

            <div className="pt-6">
              <button 
                 onClick={() => {
                  setSelectedJob(viewingJob)
                  setViewingJob(null)
                }}
                className="w-full h-16 rounded-full bg-black text-white text-[12px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-[#f5b800] hover:text-black transition-all duration-500 shadow-xl shadow-black/10 group active:scale-[0.98]"
              >
                Apply for this profile
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
                     
          <div className="px-12 pb-8 flex items-center justify-center opacity-20 shrink-0">
             <span className="text-[9px] font-black tracking-[0.4em] uppercase text-black">Webwrite Services • We Are Hiring</span>
          </div>
        </DialogContent>
      </Dialog>
  )
}

// APPLICATION FORM POPUP MODULE
export function JobApplicationPopup({ selectedJob, setSelectedJob }: { selectedJob: any, setSelectedJob: any }) {
  const [fileName, setFileName] = useState<string>("No file chosen")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name)
    } else {
      setFileName("No file chosen")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // handle submission logic here
    alert(`Application for ${selectedJob?.role} submitted successfully! (Demo)`)
    setSelectedJob(null)
  }

  return (
    <Dialog open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
        <DialogContent 
          data-lenis-prevent
          className="max-w-2xl bg-white border-black/5 text-black p-0 shadow-2xl overflow-y-auto max-h-[92vh] flex flex-col rounded-xl [&>button]:h-10 [&>button]:w-10 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:rounded-full [&>button]:bg-black/5 [&>button]:hover:bg-black/10 [&>button]:transition-all [&>button]:top-6 [&>button]:right-6 [&>button]:opacity-100 [&_svg]:size-5"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#f5b800] z-50 shrink-0" />
                     
          <div className="p-8 md:p-12 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05] w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Secure Application</span>
              </div>
                             
              <div className="space-y-4">
                <DialogTitle className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter leading-[1.1] pr-8">
                  Apply for <span className="text-[#f5b800]">{selectedJob?.role}</span>
                </DialogTitle>
                <p className="text-black/40 text-sm font-medium leading-relaxed max-w-md">
                   Fill out the form below and attach your resume to join our high-performance team.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-black/40">Full Name *</Label>
                  <Input placeholder="John Doe" required className="h-12 rounded-xl bg-black/[0.02] border-black/[0.05] focus-visible:ring-[#f5b800] text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-black/40">Email Address *</Label>
                  <Input type="email" placeholder="john@example.com" required className="h-12 rounded-xl bg-black/[0.02] border-black/[0.05] focus-visible:ring-[#f5b800] text-sm font-medium" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-black/40">Mobile Number *</Label>
                  <Input placeholder="+91 98765 43210" required className="h-12 rounded-xl bg-black/[0.02] border-black/[0.05] focus-visible:ring-[#f5b800] text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-black/40">Current Location *</Label>
                  <Input placeholder="City, Country" required className="h-12 rounded-xl bg-black/[0.02] border-black/[0.05] focus-visible:ring-[#f5b800] text-sm font-medium" />
                </div>
              </div>

              <div className="space-y-2">
                 <Label className="text-[10px] font-black uppercase tracking-widest text-black/40">Resume / CV (PDF, DOCX) *</Label>
                 <div className="relative group/upload">
                    <input type="file" id="resume-upload" className="sr-only" accept=".pdf,.docx" onChange={handleFileChange} required />
                    <label 
                      htmlFor="resume-upload" 
                      className="flex items-center justify-between h-14 px-6 bg-black/[0.01] border border-dashed border-black/10 rounded-xl group-hover/upload:border-[#f5b800]/40 group-hover/upload:bg-black/[0.03] transition-all cursor-pointer"
                    >
                      <span className="text-xs font-medium text-black/40 truncate max-w-[70%]">
                        {fileName}
                      </span>
                      <div className="flex items-center gap-2 text-black">
                        <Upload className="w-3.5 h-3.5 text-[#f5b800]" />
                        <span className="text-[9px] font-black uppercase tracking-widest">Select File</span>
                      </div>
                    </label>
                 </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full h-16 rounded-full bg-black text-white text-[12px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-[#f5b800] hover:text-black transition-all duration-500 shadow-xl shadow-black/10 group active:scale-[0.98]"
                >
                  Submit Application
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>
          </div>
                     
          <div className="px-12 pb-8 flex items-center justify-center opacity-20 shrink-0">
             <span className="text-[9px] font-black tracking-[0.4em] uppercase text-black">Webwrite Services • Secure Submission</span>
          </div>
        </DialogContent>
      </Dialog>
  )
}

export default function CareerPage() {
  const [viewingJob, setViewingJob] = useState<any>(null)
  const [selectedJob, setSelectedJob] = useState<any>(null)

  const handleApply = (job: any) => {
    setSelectedJob(job)
  }

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

      {/* Job Openings Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="space-y-8">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 border-b border-black/[0.05] pb-6">Current Openings ({jobs.length})</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {jobs.map((job, idx) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative p-8 rounded-xl bg-black/[0.01] border border-black/[0.05] hover:bg-black hover:text-white transition-all duration-500 overflow-hidden flex flex-col justify-between"
                >
                  <div className="space-y-6 relative z-10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-black/[0.03] group-hover:bg-[#f5b800] flex items-center justify-center text-black transition-colors shrink-0">
                          <job.icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-black uppercase tracking-tight leading-tight">{job.role}</h3>
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
                  </div>

                  <div className="flex flex-col gap-3 pt-8 relative z-10 lg:mt-auto">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        variant="outline"
                        onClick={() => setViewingJob(job)}
                        className="flex-1 rounded-lg border-black/10 text-black text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all py-6 h-auto"
                      >
                        VIEW DETAILS
                      </Button>
                      <button 
                        onClick={() => handleApply(job)}
                        className="flex-1"
                      >
                        <Button 
                          className="w-full rounded-lg bg-[#f5b800] text-black text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all py-6 h-auto"
                        >
                          APPLY NOW
                        </Button>
                      </button>
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
          <div className="p-12 rounded-xl bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f5b800]/10 blur-[100px] rounded-full" />
            <div className="space-y-4 text-center md:text-left relative z-10">
              <h2 className="text-3xl font-black uppercase tracking-tighter">Not seeing your role?</h2>
              <p className="text-sm font-bold uppercase tracking-widest opacity-60">We're always looking for brilliant minds to join our mission. Send us your CV anyway.</p>
            </div>
            <a href="mailto:careers@webwrite.services" className="relative z-10">
              <button className="px-10 py-5 rounded-lg bg-[#f5b800] text-black text-xs font-black uppercase tracking-widest hover:translate-x-1 transition-all active:scale-95 flex items-center gap-3">
                Drop your CV
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>
      </section>

      <JobDetailsPopup 
        viewingJob={viewingJob} 
        setViewingJob={setViewingJob} 
        setSelectedJob={setSelectedJob} 
      />

      <JobApplicationPopup
        selectedJob={selectedJob}
        setSelectedJob={setSelectedJob}
      />

      <Footer />
    </main>
  )
}
