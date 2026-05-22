"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Clock, 
  Globe,
  ArrowRight
} from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { SubHeader } from "@/components/SubHeader"
import { Footer } from "@/components/Footer"
import { GridBackground } from "@/components/GridBackground"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message Sent",
      description: "We've received your inquiry and will get back to you within 24 hours.",
    })
    const target = e.target as HTMLFormElement
    target.reset()
  }

  return (
    <main className="min-h-screen bg-white">
      <SubHeader />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-48 md:pt-60 pb-12 md:pb-20 overflow-hidden">
        <GridBackground gridSize={40} gridOpacity={0.03} showEdgeFade={true} className="h-[500px] absolute inset-0 -z-10" />
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
              <MessageSquare className="w-3.5 h-3.5 text-[#f5b800]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Get in Touch</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black text-black leading-[1.05] tracking-tighter uppercase">
              LET'S START <br />
              <span className="text-[#f5b800]">YOUR STORY</span>
            </h1>
            <div className="w-16 md:w-20 h-1.5 md:h-2 bg-black mt-2 md:mt-4" />
            <p className="text-base md:text-xl text-black/50 font-medium leading-relaxed pt-2">
              Have a vision that needs clarity? Our strategy experts are ready to collaborate and build your digital legacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-black/[0.03]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-12 lg:gap-20 items-start">
            
            {/* Left Side: Contact Information */}
            <div className="lg:col-span-5 space-y-8 md:space-y-12">
              <div className="space-y-6 md:space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-black/[0.01] border border-black/[0.05] hover:bg-black hover:text-white transition-all duration-500"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-black group-hover:bg-[#f5b800] transition-colors">
                      <Mail className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-40">Email Us</p>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-sm md:text-base font-black tracking-tight group-hover:text-[#f5b800] transition-colors lowercase">info@webwrite.co.in</h3>
                        <h3 className="text-sm md:text-base font-black tracking-tight group-hover:text-[#f5b800] transition-colors lowercase">contact@webwrite.co.in</h3>
                        <h3 className="text-sm md:text-base font-black tracking-tight group-hover:text-[#f5b800] transition-colors lowercase">hello@webwrite.co.in</h3>
                        <h3 className="text-sm md:text-base font-black tracking-tight group-hover:text-[#f5b800] transition-colors lowercase">hr@webwrite.co.in</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-black/[0.01] border border-black/[0.05] hover:bg-black hover:text-white transition-all duration-500"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-black group-hover:bg-[#f5b800] transition-colors">
                      <Phone className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-40">Call Us</p>
                      <h3 className="text-base md:text-lg font-black uppercase tracking-tight">+91-7906627288</h3>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-black/[0.01] border border-black/[0.05] hover:bg-black hover:text-white transition-all duration-500"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-black group-hover:bg-[#f5b800] transition-colors">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-40">Our Base</p>
                      <h3 className="text-base md:text-lg font-black uppercase tracking-tight leading-tight">Etawah, Uttar Pradesh <br /> 206001, UP, IN</h3>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="pt-8 md:pt-12 border-t border-black/5 space-y-4 md:space-y-6">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-[#f5b800]/10 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-[#f5b800]" />
                   </div>
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-black/40">Response Time</p>
                      <p className="text-sm font-bold text-black/80">Within 24 business hours</p>
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-[#f5b800]/10 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-[#f5b800]" />
                   </div>
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-black/40">Work Hours</p>
                      <p className="text-sm font-bold text-black/80">Mon - Sat: 10AM - 7PM IST</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="lg:col-span-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[3rem] bg-black text-white relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f5b800]/5 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="mb-8 md:mb-10 space-y-2">
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">Send a Message</h2>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40">Fill out the form below and we'll reach out shortly.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-white/40">First Name *</Label>
                      <Input 
                        required 
                        placeholder="John" 
                        className="bg-white/5 border-white/10 h-12 md:h-14 rounded-xl text-white placeholder:text-white/10 focus-visible:ring-[#f5b800] border-none" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-white/40">Last Name *</Label>
                      <Input 
                        required 
                        placeholder="Doe" 
                        className="bg-white/5 border-white/10 h-12 md:h-14 rounded-xl text-white placeholder:text-white/10 focus-visible:ring-[#f5b800] border-none" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-white/40">Email Address *</Label>
                    <Input 
                      required 
                      type="email"
                      placeholder="john@webwrite.co.in" 
                      className="bg-white/5 border-white/10 h-12 md:h-14 rounded-xl text-white placeholder:text-white/10 focus-visible:ring-[#f5b800] border-none" 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-white/40">Subject</Label>
                    <Input 
                      placeholder="e.g. Web Development Inquiry" 
                      className="bg-white/5 border-white/10 h-12 md:h-14 rounded-xl text-white placeholder:text-white/10 focus-visible:ring-[#f5b800] border-none" 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-white/40">Your Message *</Label>
                    <Textarea 
                      required 
                      placeholder="Tell us about your project or vision..." 
                      className="bg-white/5 border-white/10 min-h-[100px] md:min-h-[140px] rounded-2xl text-white placeholder:text-white/10 focus-visible:ring-[#f5b800] border-none resize-none" 
                    />
                  </div>

                  <Button type="submit" className="w-full h-14 md:h-16 rounded-full bg-[#f5b800] text-black text-[11px] md:text-[12px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all active:scale-95 group">
                    Submit Inquiry
                    <Send className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
