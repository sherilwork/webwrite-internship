"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, Play } from "lucide-react"

interface HeroPreviewProps {
  headline: string
  bodyText: string
  alignment: "center" | "left"
}

export const HeroPreview = ({
  headline,
  bodyText,
  alignment,
}: HeroPreviewProps) => {
  return (
    <div 
      className={cn(
        "container mx-auto px-6 h-screen flex flex-col justify-center transition-all duration-700 ease-in-out",
        alignment === "center" ? "items-center text-center" : "items-start text-left"
      )}
    >
      <div className={cn(
        "max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000",
        alignment === "center" ? "mx-auto" : "ml-0"
      )}>
        {/* Subtle Tag */}
        <div className={cn(
          "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[11px] font-medium tracking-wide uppercase",
          alignment === "center" ? "mx-auto" : ""
        )}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          GridSpace MVP v1.0
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
          {headline}
        </h1>

        {/* Body Text */}
        <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed font-light max-w-2xl">
          {bodyText}
        </p>

        {/* CTA Buttons */}
        <div className={cn(
          "flex flex-wrap gap-4 pt-4",
          alignment === "center" ? "justify-center" : "justify-start"
        )}>
          <Button size="lg" className="rounded-full px-8 h-12 text-base font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/10">
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base font-medium bg-white/50 backdrop-blur-sm transition-all hover:scale-105 active:scale-95">
            <Play className="mr-2 w-3 h-3 fill-current" /> View Demo
          </Button>
        </div>

        {/* Floating Metrics - purely visual */}
        <div className={cn(
          "pt-12 grid grid-cols-3 gap-12 border-t border-black/[0.03]",
          alignment === "center" ? "mx-auto" : ""
        )}>
          {[
            { label: "Precision", value: "99.9%" },
            { label: "Efficiency", value: "2.5x" },
            { label: "Uptime", value: "100%" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="text-xl font-semibold tracking-tight">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}