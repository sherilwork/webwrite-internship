
"use client"

import React, { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { 
  ArrowLeft,
  Upload,
  Send,
  CheckCircle2
} from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { SubHeader } from "@/components/SubHeader"
import { Footer } from "@/components/Footer"
import { GridBackground } from "@/components/GridBackground"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { jobs } from "@/constants/jobs"
import { useToast } from "@/hooks/use-toast"

export default function JobApplyPage() {
  const { slug } = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const job = jobs.find(j => j.slug === slug)
  const [fileName, setFileName] = useState<string>("No file chosen")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name)
    } else {
      setFileName("No file chosen")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Application Received",
        description: `Your application for ${job?.role} has been submitted successfully.`,
      })
      setIsSubmitting(false)
      router.push('/career')
    }, 1500)
  }

  if (!job) {
    return <div className="min-h-screen bg-white" />
  }

  return (
    <main className="min-h-screen bg-white">
      <SubHeader />
      <Navigation />

      <section className="relative pt-60 pb-24 overflow-hidden">
        <GridBackground gridSize={40} gridOpacity={0.03} showEdgeFade={true} className="h-[500px] absolute inset-0 -z-10" />
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Header */}
            <div className="flex flex-col gap-6">
              <button 
                onClick={() => router.back()}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/40 hover:text-black transition-colors w-fit"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to details
              </button>
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Secure Submission</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter leading-[1.1]">
                  Apply for <br />
                  <span className="text-[#f5b800]">{job.role}</span>
                </h1>
                <p className="text-black/40 text-sm md:text-base font-bold uppercase tracking-widest">
                  Let's write your story together.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-black/[0.01] border border-black/[0.05] p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-black/[0.02]">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2.5">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Full Name *</Label>
                    <Input placeholder="John Doe" required className="h-14 rounded-2xl bg-white border-black/5 focus-visible:ring-[#f5b800] font-medium" />
                  </div>
                  <div className="space-y-2.5">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Email Address *</Label>
                    <Input type="email" placeholder="john@example.com" required className="h-14 rounded-2xl bg-white border-black/5 focus-visible:ring-[#f5b800] font-medium" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2.5">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Mobile Number *</Label>
                    <Input placeholder="+91 98765 43210" required className="h-14 rounded-2xl bg-white border-black/5 focus-visible:ring-[#f5b800] font-medium" />
                  </div>
                  <div className="space-y-2.5">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Current Location *</Label>
                    <Input placeholder="City, Country" required className="h-14 rounded-2xl bg-white border-black/5 focus-visible:ring-[#f5b800] font-medium" />
                  </div>
                </div>

                <div className="space-y-2.5">
                   <Label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Resume / CV (PDF, DOCX) *</Label>
                   <div className="relative group/upload">
                      <input type="file" id="resume-upload" className="sr-only" accept=".pdf,.docx" onChange={handleFileChange} required />
                      <label 
                        htmlFor="resume-upload" 
                        className="flex items-center justify-between h-16 px-8 bg-white border border-dashed border-black/10 rounded-2xl group-hover/upload:border-[#f5b800]/40 group-hover/upload:bg-black/[0.02] transition-all cursor-pointer"
                      >
                        <span className="text-xs font-medium text-black/40 truncate max-w-[70%]">
                          {fileName}
                        </span>
                        <div className="flex items-center gap-3 text-black">
                          <Upload className="w-4 h-4 text-[#f5b800]" />
                          <span className="text-[10px] font-black uppercase tracking-widest">Select File</span>
                        </div>
                      </label>
                   </div>
                </div>

                <div className="pt-6">
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-20 rounded-full bg-black text-white text-[14px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-[#f5b800] hover:text-black transition-all duration-500 group disabled:opacity-50"
                  >
                    {isSubmitting ? "Processing..." : "Submit Application"}
                    {!isSubmitting && <Send className="w-5 h-5 transition-transform group-hover:translate-x-2 group-hover:-translate-y-1" />}
                  </Button>
                </div>
              </form>
            </div>

            {/* Privacy Note */}
            <div className="flex items-center justify-center gap-3 opacity-30">
               <CheckCircle2 className="w-4 h-4" />
               <span className="text-[10px] font-black uppercase tracking-[0.2em]">Your data is handled securely & privately</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
