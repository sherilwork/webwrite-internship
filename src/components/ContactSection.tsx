"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook,
  MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, just show a success toast. Persistence can be added with Firebase later.
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you shortly.",
    })
    const target = e.target as HTMLFormElement
    target.reset()
  }

  return (
    <section id="contact" className="bg-white py-20 lg:py-32 relative overflow-hidden border-t border-black/[0.03]">
      {/* Background Ambient Effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f5b800]/[0.02] -z-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
                  <MessageSquare className="w-3.5 h-3.5 text-[#f5b800]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Contact Us</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-black leading-[1.05] tracking-tighter uppercase">
                  READY TO <br />
                  <span className="text-[#f5b800]">START A PROJECT?</span>
                </h2>
                <div className="w-16 md:w-20 h-1.5 bg-black mt-2" />
              </div>
              
              <p className="text-sm md:text-lg text-black/50 font-medium leading-relaxed max-w-sm">
                Have a vision? We have the tools. Let's collaborate to build something exceptional.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <a href="mailto:info@webwrite.co.in" className="flex items-center gap-5 group w-fit">
                  <div className="w-12 h-12 rounded-2xl bg-black/[0.02] border border-black/[0.05] flex items-center justify-center group-hover:bg-[#f5b800]/10 group-hover:border-[#f5b800]/30 transition-all duration-300">
                    <Mail className="w-5 h-5 text-black/40 group-hover:text-[#f5b800] transition-colors" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/20">Email Us</p>
                    <p className="text-sm font-bold text-black group-hover:text-[#f5b800] transition-colors">info@webwrite.co.in</p>
                  </div>
                </a>

                <a href="tel:+917906627288" className="flex items-center gap-5 group w-fit">
                  <div className="w-12 h-12 rounded-2xl bg-black/[0.02] border border-black/[0.05] flex items-center justify-center group-hover:bg-[#f5b800]/10 group-hover:border-[#f5b800]/30 transition-all duration-300">
                    <Phone className="w-5 h-5 text-black/40 group-hover:text-[#f5b800] transition-colors" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/20">Call Us</p>
                    <p className="text-sm font-bold text-black group-hover:text-[#f5b800] transition-colors">+91-7906627288</p>
                  </div>
                </a>

                <div className="flex items-center gap-5 group w-fit">
                  <div className="w-12 h-12 rounded-2xl bg-black/[0.02] border border-black/[0.05] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-black/40" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/20">Our Location</p>
                    <p className="text-sm font-bold text-black">Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-black/[0.05]">
                <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-4">Follow our journey</p>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/company/webwrite-services/" },
                    { icon: Instagram, href: "https://www.instagram.com/webwriteservices" },
                    { icon: Twitter, href: "https://x.com/webwrite_co_in" },
                    { icon: Facebook, href: "https://www.facebook.com/webwrite.services/" }
                  ].map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.href} 
                      target="_blank" 
                      className="w-10 h-10 rounded-xl bg-black/[0.03] border border-black/[0.05] flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group"
                    >
                      <social.icon className="w-4 h-4 text-black group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-12 rounded-[2.5rem] bg-black/[0.01] border border-black/[0.05] backdrop-blur-sm shadow-2xl shadow-black/[0.02]"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2.5">
                    <Label htmlFor="firstName" className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">First Name</Label>
                    <Input 
                      id="firstName"
                      placeholder="Jane" 
                      required
                      className="h-14 bg-white/50 border-black/5 focus-visible:ring-1 focus-visible:ring-[#f5b800] rounded-2xl text-[13px] font-medium"
                    />
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="lastName" className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Last Name</Label>
                    <Input 
                      id="lastName"
                      placeholder="Doe" 
                      required
                      className="h-14 bg-white/50 border-black/5 focus-visible:ring-1 focus-visible:ring-[#f5b800] rounded-2xl text-[13px] font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Email Address</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="jane@webwrite.co.in" 
                    required
                    className="h-14 bg-white/50 border-black/5 focus-visible:ring-1 focus-visible:ring-[#f5b800] rounded-2xl text-[13px] font-medium"
                  />
                </div>

                <div className="space-y-2.5">
                  <Label htmlFor="subject" className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Subject</Label>
                  <Input 
                    id="subject"
                    placeholder="Tell us what you're looking for" 
                    required
                    className="h-14 bg-white/50 border-black/5 focus-visible:ring-1 focus-visible:ring-[#f5b800] rounded-2xl text-[13px] font-medium"
                  />
                </div>

                <div className="space-y-2.5">
                  <Label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Your Message</Label>
                  <Textarea 
                    id="message"
                    placeholder="Hi Rishi, I'd like to discuss a new web project..." 
                    required
                    className="min-h-[160px] bg-white/50 border-black/5 focus-visible:ring-1 focus-visible:ring-[#f5b800] rounded-[1.5rem] text-[13px] font-medium p-6 resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full h-16 rounded-full bg-black text-white text-[12px] font-black uppercase tracking-[0.2em] hover:bg-black/90 shadow-2xl shadow-black/20 transition-all active:scale-[0.98] group"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
