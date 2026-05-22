"use client"

import React from "react"
import { 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
  Globe
} from "lucide-react"

export function SubHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-10 bg-black flex items-center px-4 md:px-6 overflow-hidden border-b border-white/5">
      {/* Left Section: Equal width container to balance the right side */}
      <div className="flex-1 flex items-center justify-start overflow-hidden">
        {/* Desktop Info */}
        <div className="hidden lg:flex items-center gap-6 animate-in fade-in slide-in-from-left-4 duration-1000">
          <a href="tel:+917906627288" className="flex items-center gap-2 group cursor-pointer">
            <Phone className="w-3.5 h-3.5 text-[#f5b800]" />
            <span className="text-[10px] md:text-[11px] font-bold text-white/80 uppercase tracking-wider group-hover:text-white transition-colors">
              +91 7906627288
            </span>
          </a>
          <div className="h-4 w-px bg-white/10" />
          <a href="mailto:info@webwrite.co.in" className="flex items-center gap-2 group cursor-pointer">
            <Mail className="w-4 h-4 text-[#f5b800]" />
            <span className="text-[11px] font-bold text-white/80 tracking-wider group-hover:text-white transition-colors lowercase">
              info@webwrite.co.in
            </span>
          </a>
        </div>

        {/* Mobile-only Phone Link */}
        <div className="flex lg:hidden items-center animate-in fade-in duration-1000">
          <a href="tel:+917906627288" className="flex items-center gap-1.5 group">
            <Phone className="w-3 h-3 text-[#f5b800]" />
            <span className="text-[9px] font-black text-white/90 uppercase tracking-tighter">Call Now</span>
          </a>
        </div>
      </div>

      {/* Middle Section: Mathematical center */}
      <div className="flex-[2] flex justify-center items-center px-2">
        <div className="flex items-center gap-2 animate-in fade-in zoom-in-95 duration-1000">
          <Globe className="w-3 h-3 text-[#f5b800] animate-pulse" />
          <span className="text-[8px] md:text-[10px] font-black text-[#f5b800] uppercase tracking-[0.25em] whitespace-nowrap">
            Global Reach • Serving Worldwide
          </span>
        </div>
      </div>

      {/* Right Section: Equal width container to balance the left side */}
      <div className="flex-1 flex items-center justify-end overflow-hidden">
        <div className="hidden lg:flex items-center gap-6 animate-in fade-in slide-in-from-right-4 duration-1000">
          <div className="flex items-center gap-4 opacity-60">
            <a href="https://www.facebook.com/webwrite.services/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Facebook className="w-4 h-4 text-white hover:text-[#f5b800] transition-colors" />
            </a>
            <a href="https://x.com/webwrite_co_in" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Twitter className="w-4 h-4 text-white hover:text-[#f5b800] transition-colors" />
            </a>
            <a href="https://www.linkedin.com/company/webwrite-services/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Linkedin className="w-4 h-4 text-white hover:text-[#f5b800] transition-colors" />
            </a>
            <a href="https://www.instagram.com/webwriteservices" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Instagram className="w-4 h-4 text-white hover:text-[#f5b800] transition-colors" />
            </a>
            <a href="https://www.youtube.com/@webwriteservices" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Youtube className="w-4 h-4 text-white hover:text-[#f5b800] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
