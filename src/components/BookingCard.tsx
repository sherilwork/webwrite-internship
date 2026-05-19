
"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Globe, Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

interface BookingCardProps {
  imageUrl?: string
}

export function BookingCard({ imageUrl }: BookingCardProps) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  const dates = Array.from({ length: 31 }, (_, i) => i + 1)
  
  // State for interactive calendar
  const [selectedDate, setSelectedDate] = useState<number | null>(19)
  const [todayDate, setTodayDate] = useState<number | null>(null)

  useEffect(() => {
    // Determine "today" only on client to avoid hydration mismatch
    const now = new Date()
    // For the mock, we assume we are in May 2026 if that's what the UI says,
    // but typically we disable based on real current date.
    setTodayDate(now.getDate())
  }, [])

  const illustration = PlaceHolderImages.find(img => img.id === 'consultation-illustration')
  const finalImageUrl = imageUrl || illustration?.imageUrl || "/hero-illustration.png"

  return (
    <div className="w-full max-w-2xl ml-auto overflow-hidden rounded-[1.5rem] bg-[#121212] shadow-2xl border border-white/10 flex flex-col md:flex-row transition-all duration-700 animate-in fade-in slide-in-from-bottom-8">
      {/* Left Panel: Brand & Info */}
      <div className="w-full md:w-[40%] bg-white p-6 flex flex-col items-center justify-between text-center border-r border-black/5">
        <div className="space-y-4 w-full">
          {/* Text Content */}
          <div className="space-y-3 pt-2">
            <h3 className="text-black text-xl font-bold uppercase tracking-tight leading-none">
              BOOK A FREE CONSULTATION
            </h3>
            <p className="text-black/50 text-[10px] font-semibold uppercase tracking-wider leading-tight px-4">
              with India&apos;s leading digital marketing agency
            </p>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mt-2" />
          </div>

          {/* Illustration section */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mt-6 bg-muted">
            <Image 
              src={finalImageUrl}
              alt="Consultation Illustration"
              fill
              className="object-cover"
              data-ai-hint="medical consultation"
            />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
           <div className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
           <span className="text-[8px] font-semibold text-black/30 uppercase tracking-widest">Online consultation</span>
        </div>
      </div>

      {/* Right Panel: Calendar */}
      <div className="flex-1 p-6 text-white bg-gradient-to-br from-[#1c1c1c] via-[#121212] to-[#0a0a0a]">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-60">Select Date & Time</h4>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="p-1 bg-white/5 rounded-md border border-white/10">
                <CalendarIcon className="w-3 h-3 text-[#f5b800]" />
              </div>
              <div className="text-left">
                <p className="text-[8px] font-bold text-[#f5b800] uppercase">
                  {selectedDate ? `Date: ${selectedDate}` : 'Select Date'}
                </p>
                <p className="text-[10px] font-normal opacity-40">May 2026</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              <button className="p-1 hover:bg-white/5 rounded-full transition-colors">
                <ChevronLeft className="w-4 h-4 opacity-40" />
              </button>
              <button className="p-1 hover:bg-white/5 rounded-full transition-colors">
                <ChevronRight className="w-4 h-4 opacity-40" />
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-y-2 mb-6">
          {days.map((day) => (
            <div key={day} className="text-center text-[7px] font-bold text-white tracking-widest">
              {day}
            </div>
          ))}
          
          {/* Empty slots for month start */}
          <div className="h-7" />
          <div className="h-7" />
          <div className="h-7" />
          <div className="h-7" />
          <div className="h-7" />

          {dates.map((date) => {
            const isPast = todayDate !== null && date < todayDate;
            return (
              <button
                key={date}
                disabled={isPast}
                onClick={() => setSelectedDate(date)}
                className={cn(
                  "h-7 w-7 mx-auto flex items-center justify-center rounded-full text-[10px] font-medium transition-all",
                  date === selectedDate 
                    ? "bg-[#f5b800] text-black shadow-[0_0_15px_rgba(245,184,0,0.3)] font-bold" 
                    : isPast
                      ? "opacity-20 cursor-not-allowed"
                      : "bg-white/[0.03] hover:bg-white/10 text-white/60"
                )}
              >
                {date}
              </button>
            )
          })}
        </div>

        {/* Footer: Time Zone */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <div className="flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-[#f5b800]" />
            <span className="text-[9px] font-bold text-[#f5b800] uppercase tracking-wide">Time Zone</span>
          </div>
          <div className="bg-white/5 px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
            <span className="text-[9px] font-medium opacity-60">Asia/Kolkata</span>
            <div className="w-4 h-3 bg-white/10 rounded-sm flex flex-col overflow-hidden">
              <div className="flex-1 bg-[#FF9933]" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-[#138808]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
