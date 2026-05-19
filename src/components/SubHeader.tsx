"use client"

import React from "react"
import { 
  Phone, 
  Globe, 
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
    <div className="fixed top-0 left-0 right-0 z-[60] h-8 bg-black flex items-center justify-between px-6 overflow-hidden">
      {/* Left Section: Info */}
      <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left-4 duration-1000">
        <div className="flex items-center gap-1.5 group cursor-pointer">
          <Phone className="w-3 h-3 text-[#f5b800]" />
          <span className="text-[9px] font-bold text-white/80 uppercase tracking-wider group-hover:text-white transition-colors">
            +91 8000-334444
          </span>
        </div>
        <div className="h-3 w-px bg-white/10" />
        <div className="flex items-center gap-1.5 group cursor-pointer">
          <Globe className="w-3 h-3 text-[#f5b800]" />
          <span className="text-[9px] font-bold text-white/80 uppercase tracking-wider group-hover:text-white transition-colors">
            Global Presence
          </span>
        </div>
        <div className="h-3 w-px bg-white/10" />
        <div className="flex items-center gap-1.5 group cursor-pointer">
          <Briefcase className="w-3 h-3 text-[#f5b800]" />
          <span className="text-[9px] font-bold text-white/80 uppercase tracking-wider group-hover:text-white transition-colors">
            Career With Us
          </span>
        </div>
      </div>

      {/* Center Section: Animated Proposal */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
        <Cloud className="w-4 h-4 text-white/10 animate-cloud" />
        <div className="flex items-center gap-2 group cursor-pointer bg-white/5 px-3 py-0.5 rounded-full border border-white/10 hover:border-[#f5b800]/50 transition-all">
          <span className="text-[9px] font-black text-white uppercase tracking-[0.25em]">
            Get a Proposal
          </span>
          <Rocket className="w-3 h-3 text-[#f5b800] animate-rocket" />
        </div>
        <Cloud className="w-4 h-4 text-white/10 animate-cloud" style={{ animationDelay: '2s' }} />
      </div>

      {/* Right Section: Socials & Login */}
      <div className="flex items-center gap-5 animate-in fade-in slide-in-from-right-4 duration-1000">
        <div className="flex items-center gap-3 opacity-60">
          <Facebook className="w-3 h-3 text-white hover:text-[#f5b800] transition-colors cursor-pointer" />
          <Twitter className="w-3 h-3 text-white hover:text-[#f5b800] transition-colors cursor-pointer" />
          <Linkedin className="w-3 h-3 text-white hover:text-[#f5b800] transition-colors cursor-pointer" />
          <Instagram className="w-3 h-3 text-white hover:text-[#f5b800] transition-colors cursor-pointer" />
        </div>
        <div className="h-3 w-px bg-white/10" />
        <button className="flex items-center gap-1.5 group">
          <LogIn className="w-3 h-3 text-[#f5b800]" />
          <span className="text-[9px] font-black text-white uppercase tracking-widest group-hover:text-[#f5b800] transition-colors">
            LOGIN
          </span>
        </button>
      </div>
    </div>
  )
}
