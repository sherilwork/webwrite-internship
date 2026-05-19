"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between w-full max-w-6xl px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-border shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-black rounded-full p-1.5 flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-foreground/80">NextSaaS</span>
        </div>

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
