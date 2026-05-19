"use client"

import React from "react"
import { 
  Phone, 
  Mail, 
  Briefcase, 
  Rocket, 
  Cloud, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  LogIn 
} from "lucide-react"

export function SubHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-10 bg-black flex items-center justify-between px-6 overflow-hidden">
      {/* Left Section: Info */}
      <div className="flex items-center gap-6 animate-in fade-in slide-in-from-left-4 duration-1000">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Phone className="w-4 h-4 text-[#f5b800]" />
          <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider group-hover:text-white transition-colors">
            +91 8000-334444
          </span>
        </div>
        <div className="h-4 w-px bg-white/10" />
        <div className="flex items-center gap-2 group cursor-pointer">
          <Mail className="w-4 h-4 text-[#f5b800]" />
          <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider group-hover:text-white transition-colors">
            info@nextsaas.ai
          </span>
        </div>
        <div className="h-4 w-px bg-white/10" />
        <div className="flex items-center gap-2 group cursor-pointer">
          <Briefcase className="w-4 h-4 text-[#f5b800]" />
          <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider group-hover:text-white transition-colors">
            Career With Us
          </span>
        </div>
      </div>

      {/* Center Section: Animated Proposal */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
        <Cloud className="w-5 h-5 text-white/10 animate-cloud" />
        <div className="flex items-center gap-2.5 group cursor-pointer bg-white/5 px-4 py-1 rounded-full border border-white/10 hover:border-[#f5b800]/50 transition-all">
          <span className="text-[10px] font-black text-white uppercase tracking-[0.25em]">
            Get a Proposal
          </span>
          <Rocket className="w-4 h-4 text-[#f5b800] animate-rocket" />
        </div>
        <Cloud className="w-5 h-5 text-white/10 animate-cloud" style={{ animationDelay: '2s' }} />
      </div>

      {/* Right Section: Socials & Login */}
      <div className="flex items-center gap-6 animate-in fade-in slide-in-from-right-4 duration-1000">
        <div className="flex items-center gap-4 opacity-60">
          <Facebook className="w-4 h-4 text-white hover:text-[#f5b800] transition-colors cursor-pointer" />
          <Twitter className="w-4 h-4 text-white hover:text-[#f5b800] transition-colors cursor-pointer" />
          <Linkedin className="w-4 h-4 text-white hover:text-[#f5b800] transition-colors cursor-pointer" />
          <Instagram className="w-4 h-4 text-white hover:text-[#f5b800] transition-colors cursor-pointer" />
        </div>
        <div className="h-4 w-px bg-white/10" />
        <button className="flex items-center gap-2 group">
          <LogIn className="w-4 h-4 text-[#f5b800]" />
          <span className="text-[11px] font-black text-white uppercase tracking-widest group-hover:text-[#f5b800] transition-colors">
            LOGIN
          </span>
        </button>
      </div>
    </div>
  )
}
