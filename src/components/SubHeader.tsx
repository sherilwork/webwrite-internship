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
      {/* Left Section: Contact Info */}
      <div className="flex-1 flex items-center justify-start overflow-hidden">
        {/* Desktop Info */}
        <div className="hidden lg:flex items-center gap-6 animate-in fade-in slide-in-from-left-4 duration-1000">
          <a href="tel:+15550000000" className="flex items-center gap-2 group cursor-pointer">
            <Phone className="w-3.5 h-3.5 text-[#f5b800]" />
            <span className="text-[10px] md:text-[11px] font-bold text-white/80 uppercase tracking-wider group-hover:text-white transition-colors">
              +1 (555) 000-0000
            </span>
          </a>
          <div className="h-4 w-px bg-white/10" />
          <a href="mailto:hello@example.com" className="flex items-center gap-2 group cursor-pointer">
            <Mail className="w-4 h-4 text-[#f5b800]" />
            <span className="text-[11px] font-bold text-white/80 tracking-wider group-hover:text-white transition-colors lowercase">
              hello@example.com
            </span>
          </a>
        </div>

        {/* Mobile-only Section (Phone hidden per request) */}
        <div className="flex lg:hidden items-center animate-in fade-in duration-1000">
          {/* Section intentionally empty or reserved for other mobile-only elements */}
        </div>
      </div>

      {/* Middle Section: Global Announcement */}
      <div className="flex-1 flex justify-center items-center px-2">
        <div className="flex items-center gap-2 animate-in fade-in zoom-in-95 duration-1000">
          <Globe className="w-3 h-3 text-[#f5b800] animate-pulse" />
          <span className="text-[8px] md:text-[10px] font-black text-[#f5b800] uppercase tracking-[0.25em] whitespace-nowrap">
            Global Reach • Serving Worldwide
          </span>
        </div>
      </div>

      {/* Right Section: Social Links */}
      <div className="flex-1 flex items-center justify-end overflow-hidden">
        <div className="hidden lg:flex items-center gap-6 animate-in fade-in slide-in-from-right-4 duration-1000">
          <div className="flex items-center gap-4 opacity-60">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Facebook className="w-4 h-4 text-white hover:text-[#f5b800] transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Twitter className="w-4 h-4 text-white hover:text-[#f5b800] transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Linkedin className="w-4 h-4 text-white hover:text-[#f5b800] transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Instagram className="w-4 h-4 text-white hover:text-[#f5b800] transition-colors" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Youtube className="w-4 h-4 text-white hover:text-[#f5b800] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
