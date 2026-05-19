
"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface HeroPreviewProps {
  headline: string
  bodyText: string
  alignment: "center" | "left" | "right"
  children?: React.ReactNode
}

export const HeroPreview = ({
  alignment,
  children
}: HeroPreviewProps) => {
  return (
    <div 
      className={cn(
        "container mx-auto px-6 min-h-screen flex flex-col justify-center pt-32 pb-12 transition-all duration-700 ease-in-out",
        alignment === "center" && "items-center text-center",
        alignment === "left" && "items-start text-left",
        alignment === "right" && "items-end text-right"
      )}
    >
      {children}
    </div>
  )
}
