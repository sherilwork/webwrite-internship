
"use client"

import React from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { 
  MapPin, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Info, 
  CheckCircle2,
  ArrowLeft
} from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { SubHeader } from "@/components/SubHeader"
import { Footer } from "@/components/Footer"
import { GridBackground } from "@/components/GridBackground"
import { Button } from "@/components/ui/button"
import { jobs } from "@/constants/jobs"

function DetailPoint({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-1.5 h-1.5 bg-[#f5b800] rounded-full" />
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/50">{label}</span>
    </div>
  )
}

export default function JobDetailsPage() {
  const { slug } = useParams()
  const router = useRouter()
  const job = jobs.find(j => j.slug === slug)

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-black uppercase">Job Not Found</h1>
          <Button onClick={() => router.push('/career')} className="rounded-full bg-black text-white">Back to Careers</Button>
        </div>
      </div>
    )
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
            {/* Back Header */}
            <div className="flex items-center justify-between border-b border-black/[0.05] pb-8">
              <button 
                onClick={() => router.back()}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/40 hover:text-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to careers
              </button>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Job Opportunity</span>
              </div>
            </div>

            {/* Role Header */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-7xl font-black text-black uppercase tracking-tighter leading-none">
                {job.role}
              </h1>
              
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: MapPin, text: job.location },
                  { icon: Calendar, text: job.experience },
                  { icon: Clock, text: job.type }
                ].map((meta, i) => (
                  <div key={i} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/[0.02] border border-black/[0.03]">
                    <meta.icon className="w-4 h-4 text-[#f5b800]" />
                    <span className="text-[11px] font-black uppercase tracking-widest text-black/60">{meta.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-8 border-t border-black/[0.05] pt-12">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-[#f5b800]/10 flex items-center justify-center">
                    <Info className="w-5 h-5 text-black" />
                 </div>
                 <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-black">Role Overview</h4>
              </div>
              <p className="text-black/50 text-xl leading-relaxed font-medium">
                {job.description}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="space-y-8 border-t border-black/[0.05] pt-12">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-[#f5b800]/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-black" />
                 </div>
                 <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-black">Key Responsibilities</h4>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-16">
                  <DetailPoint label="High-Quality Code Delivery" />
                  <DetailPoint label="Scalable Design Sync" />
                  <DetailPoint label="Team Collaboration" />
                  <DetailPoint label="Performance Optimization" />
               </div>
            </div>

            {/* Action CTA */}
            <div className="pt-12">
              <Button 
                onClick={() => router.push(`/career/${slug}/apply`)}
                className="w-full h-20 rounded-full bg-black text-white text-[14px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-[#f5b800] hover:text-black transition-all duration-500 shadow-2xl shadow-black/10 group"
              >
                Apply for this profile
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
