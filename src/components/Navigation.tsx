
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Navigation() {
  const navItems = [
    "Home",
    "About",
    "Team",
    "Services",
    "Portfolio",
    "Career",
    "Contact"
  ]

  const logo = PlaceHolderImages.find(img => img.id === 'logo')

  return (
    <header className="fixed top-14 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between w-full max-w-6xl px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-border shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-40">
            <Image 
              src={logo?.imageUrl || "/webwrite-logo.webp"}
              alt="Webwrite services logo"
              fill
              className="object-contain object-left"
              priority
              data-ai-hint="company logo"
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link 
              key={item} 
              href="#" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Hidden on mobile, visible on desktop */}
        <Button className="hidden md:inline-flex rounded-full bg-black hover:bg-black/90 text-white px-6 font-medium">
          Get started
        </Button>

        {/* Mobile menu trigger: Custom 2-line icon with more width */}
        <button className="md:hidden p-2 text-black/70 hover:bg-black/5 rounded-full transition-colors flex items-center justify-center" aria-label="Toggle menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
            <path d="M2 8H22" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
            <path d="M2 16H22" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
          </svg>
        </button>
      </nav>
    </header>
  )
}
