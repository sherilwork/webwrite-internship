
"use client"

import React, { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  User,
  Mail,
  Phone,
  Upload,
  FileText,
  X
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
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

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
  const [activeJob, setActiveJob] = useState<typeof jobs[0] | null>(null)
  const [isApplyOpen, setIsApplyOpen] = useState(false)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  
  const [fileName, setFileName] = useState<string>("No file chosen")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    } else {
      setFileName("No file chosen")
    }
  }

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Application Received",
      description: `Your application for the ${activeJob?.title} position has been sent successfully.`,
    })
    setIsApplyOpen(false)
  }

  const openApply = (job: typeof jobs[0]) => {
    setActiveJob(job)
    setIsDetailsOpen(false)
    setIsApplyOpen(true)
  }

  const openDetails = (job: typeof jobs[0]) => {
    setActiveJob(job)
    setIsApplyOpen(false)
    setIsDetailsOpen(true)
  }

  const handleDetailsApply = () => {
    if (activeJob) {
      setIsDetailsOpen(false)
      setTimeout(() => {
        setIsApplyOpen(true)
      }, 300)
    }
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
                  className="group relative p-8 lg:pb-16 rounded-[2rem] bg-black/[0.01] border border-black/[0.05] hover:bg-black hover:text-white transition-all duration-500 overflow-hidden flex flex-col justify-between"
                >
                  <div className="space-y-6 relative z-10 lg:pb-8">
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
                  </div>

                  <div className="flex flex-col gap-3 pt-6 relative z-10 lg:mt-auto">
                    <Button 
                      onClick={() => openApply(job)}
                      className="w-full rounded-full bg-[#f5b800] text-black text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all py-6 h-auto"
                    >
                      APPLY NOW
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => openDetails(job)}
                      className="w-full rounded-full border-black/10 bg-white group-hover:bg-white text-black group-hover:text-black text-[10px] font-black uppercase tracking-widest py-6 h-auto transition-colors"
                    >
                      VIEW DETAILS
                    </Button>
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

      {/* Application Dialog */}
      <Dialog open={isApplyOpen} onOpenChange={setIsApplyOpen}>
        <DialogContent className="w-[92%] md:max-w-3xl p-0 bg-white border-none rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl max-h-[90vh] md:max-h-[85vh] font-body flex flex-col">
          <div className="bg-[#f5b800] p-6 md:p-8 text-black shrink-0">
            <DialogHeader>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/10 border border-black/5 mb-3 w-fit">
                <span className="text-[9px] font-extrabold uppercase tracking-[0.2em]">Application Form</span>
              </div>
              <DialogTitle className="text-xl md:text-3xl font-black uppercase tracking-tighter leading-tight mb-3">
                APPLY FOR {activeJob?.title}
              </DialogTitle>
              <p className="text-[10px] md:text-[11px] font-semibold uppercase tracking-widest opacity-80 leading-relaxed max-w-xl">
                FILL OUT THE FORM BELOW AND ATTACH YOUR RESUME TO APPLY FOR THIS POSITION.
              </p>
            </DialogHeader>
          </div>
          
          <ScrollArea className="flex-1 max-h-[60vh] md:max-h-[70vh]">
            <div className="p-6 md:p-10">
              <form onSubmit={handleApplySubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-extrabold uppercase tracking-widest text-black/40">FULL NAME *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/20" />
                      <Input required placeholder="John Doe" className="pl-10 h-14 bg-black/[0.02] border-black/5 rounded-xl text-[13px] font-semibold focus-visible:ring-[#f5b800]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-extrabold uppercase tracking-widest text-black/40">EMAIL ADDRESS *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/20" />
                      <Input required type="email" placeholder="john@example.com" className="pl-10 h-14 bg-black/[0.02] border-black/5 rounded-xl text-[13px] font-semibold focus-visible:ring-[#f5b800]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-extrabold uppercase tracking-widest text-black/40">MOBILE NUMBER *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/20" />
                      <Input required placeholder="+91 9876543210" className="pl-10 h-14 bg-black/[0.02] border-black/5 rounded-xl text-[13px] font-semibold focus-visible:ring-[#f5b800]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-extrabold uppercase tracking-widest text-black/40">CURRENT ADDRESS / LOCATION *</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/20" />
                      <Input required placeholder="City, Country" className="pl-10 h-14 bg-black/[0.02] border-black/5 rounded-xl text-[13px] font-semibold focus-visible:ring-[#f5b800]" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <Label className="text-[10px] font-extrabold uppercase tracking-widest text-black/40">RESUME / CV (PDF, DOCX MAX 5MB) *</Label>
                  <div className="flex flex-col md:flex-row items-center gap-4 p-6 rounded-2xl border-2 border-dashed border-black/10 bg-black/[0.01]">
                    <div className="flex items-center gap-3 flex-1 overflow-hidden">
                      <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5 text-black/40" />
                      </div>
                      <span className="text-[11px] font-bold text-black/60 truncate uppercase tracking-widest">
                        {fileName}
                      </span>
                    </div>
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden" 
                      accept=".pdf,.docx"
                      required
                    />
                    <Button 
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="rounded-full bg-black text-white text-[10px] font-black uppercase tracking-widest px-8 hover:bg-[#f5b800] hover:text-black transition-all"
                    >
                      SELECT FILE
                    </Button>
                  </div>
                </div>

                <Button type="submit" className="w-full h-16 rounded-full bg-black text-white text-[12px] font-black uppercase tracking-[0.2em] hover:bg-[#f5b800] hover:text-black shadow-2xl transition-all active:scale-95 group">
                  SUBMIT APPLICATION
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="w-[92%] md:max-w-3xl p-0 bg-white border-none rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl max-h-[90vh] md:max-h-[85vh] font-body flex flex-col">
          <div className="bg-[#f5b800] p-6 md:p-8 text-black shrink-0">
            <DialogHeader>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/10 border border-black/5 mb-3 w-fit">
                <span className="text-[9px] font-extrabold uppercase tracking-[0.2em]">Job Opening</span>
              </div>
              <DialogTitle className="text-xl md:text-3xl font-black uppercase tracking-tighter leading-tight mb-3">
                {activeJob?.title}
              </DialogTitle>
              <div className="flex flex-wrap gap-3 opacity-80">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{activeJob?.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{activeJob?.type}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{activeJob?.experience}</span>
                </div>
              </div>
            </DialogHeader>
          </div>
          
          <ScrollArea className="flex-1 max-h-[60vh] md:max-h-[70vh]">
            <div className="p-6 md:p-10 space-y-10">
              <section className="space-y-4">
                <h4 className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-black/30">Job Description</h4>
                <p className="text-sm md:text-base text-black/60 font-medium leading-relaxed max-w-2xl">
                  {activeJob?.description}
                </p>
              </section>

              <section className="space-y-4">
                <h4 className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-black/30">Key Responsibilities</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-2xl bg-black/[0.02] border border-black/[0.04] group hover:bg-black transition-all duration-300">
                      <div className="w-7 h-7 md:w-10 md:h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-[#f5b800] transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5 md:w-5 md:h-5 text-black" />
                      </div>
                      <span className="text-[8px] md:text-[10px] font-extrabold uppercase tracking-[0.15em] text-black/80 group-hover:text-white transition-colors">{resp}</span>
                    </div>
                  ))}
                </div>
              </section>

              <div className="pt-4 border-t border-black/5">
                <p className="text-[10px] font-extrabold text-black/30 uppercase tracking-widest mb-6">Found everything you need?</p>
                <Button 
                  onClick={handleDetailsApply}
                  className="w-full rounded-full bg-black text-white text-[11px] font-black uppercase tracking-[0.2em] py-8 h-auto hover:bg-[#f5b800] hover:text-black transition-all group shadow-xl"
                >
                  APPLY FOR THIS PROFILE
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

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
