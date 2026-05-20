
"use client"

import React from "react"
import { 
  Phone, 
  Mail, 
  Rocket, 
  Cloud, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube
} from "lucide-react"
import { founders } from "@/constants/founder"

export function SubHeader() {
  const founder = founders[0]

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-10 bg-black flex items-center justify-between px-4 md:px-6 overflow-hidden">
      {/* Left Section: Info - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:flex items-center gap-6 animate-in fade-in slide-in-from-left-4 duration-1000">
        <a href="tel:+917906627288" className="flex items-center gap-2 group cursor-pointer">
          <Phone className="w-3.5 h-3.5 text-[#f5b800]" />
          <span className="text-[10px] md:text-[11px] font-bold text-white/80 uppercase tracking-wider group-hover:text-white transition-colors">
            +91 7906627288
          </span>
        </a>
        <div className="h-4 w-px bg-white/10" />
        <a href="mailto:info@webwrite.services" className="flex items-center gap-2 group cursor-pointer">
          <Mail className="w-4 h-4 text-[#f5b800]" />
          <span className="text-[11px] font-bold text-white/80 tracking-wider group-hover:text-white transition-colors lowercase">
            info@webwrite.services
          </span>
        </a>
      </div>

      {/* Mobile-only Phone Link (left) */}
      <div className="flex lg:hidden items-center animate-in fade-in duration-1000">
        <a href="tel:+917906627288" className="flex items-center gap-1.5 group">
          <Phone className="w-3.5 h-3.5 text-[#f5b800]" />
          <span className="text-[9px] font-black text-white/90 uppercase tracking-tighter">Call Now</span>
        </a>
      </div>

      {/* Center Section: Animated Proposal - Always visible, slightly scaled for mobile */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-4 scale-90 md:scale-100">
        <Cloud className="w-4 h-4 md:w-5 md:h-5 text-white/10 animate-cloud hidden sm:block" />
        <a 
          href="https://wa.me/917906627288" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 group cursor-pointer bg-white/5 px-3 md:px-4 py-1 rounded-full border border-white/10 hover:border-[#f5b800]/50 transition-all whitespace-nowrap"
        >
          <span className="text-[9px] font-black text-white uppercase tracking-[0.15em] md:tracking-[0.25em]">
            Get a Proposal
          </span>
          <Rocket className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#f5b800] animate-rocket" />
        </a>
        <Cloud className="w-4 h-4 md:w-5 md:h-5 text-white/10 animate-cloud hidden sm:block" style={{ animationDelay: '2s' }} />
      </div>

      {/* Right Section: Socials - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:flex items-center gap-6 animate-in fade-in slide-in-from-right-4 duration-1000">
        <div className="flex items-center gap-4 opacity-60">
          <a href={founder.facebook} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Facebook className="w-4 h-4 text-white hover:text-[#f5b800] transition-colors" />
          </a>
          <a href={founder.twitter} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Twitter className="w-4 h-4 text-white hover:text-[#f5b800] transition-colors" />
          </a>
          <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Linkedin className="w-4 h-4 text-white hover:text-[#f5b800] transition-colors" />
          </a>
          <a href={founder.instagram} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Instagram className="w-4 h-4 text-white hover:text-[#f5b800] transition-colors" />
          </a>
          <a href={founder.youtube} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Youtube className="w-4 h-4 text-white hover:text-[#f5b800] transition-colors" />
          </a>
        </div>
      </div>
    </div>
  )
}
