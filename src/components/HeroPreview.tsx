
"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface HeroPreviewProps {
  headline: string
  bodyText: string
  alignment: "center" | "left"
  children?: React.ReactNode
}

export const HeroPreview = ({
  alignment,
  children
}: HeroPreviewProps) => {
  return (
    <div 
      className={cn(
        "container mx-auto px-6 h-screen flex flex-col justify-center transition-all duration-700 ease-in-out",
        alignment === "center" ? "items-center text-center" : "items-start text-left"
      )}
    >
      {children}
    </div>
  )
}
