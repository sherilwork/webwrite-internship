"use client"

import React from "react"
import Hero from "@/components/hero"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Hero />
      <Toaster />
    </main>
  )
}
