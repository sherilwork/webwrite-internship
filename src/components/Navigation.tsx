
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

        <Button className="rounded-full bg-black hover:bg-black/90 text-white px-6 font-medium">
          Get started
        </Button>
      </nav>
    </header>
  )
}
