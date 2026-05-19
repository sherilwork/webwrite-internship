
"use client"

import * as React from "react"
import { useState, useEffect, useMemo } from "react"
import { ChevronLeft, ChevronRight, Globe, Calendar as CalendarIcon, Clock, ArrowLeft } from "lucide-react"
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  getDaysInMonth, 
  getDay, 
  isBefore, 
  startOfDay, 
  isSameDay,
  isSameMonth
} from "date-fns"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { ScrollArea } from "@/components/ui/scroll-area"

interface BookingCardProps {
  imageUrl?: string
}

const TIME_SLOTS = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM"
]

export function BookingCard({ imageUrl }: BookingCardProps) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  
  // State for interactive calendar
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [today] = useState(startOfDay(new Date()))

  // Calculate calendar grid
  const monthStart = startOfMonth(currentMonth)
  const daysInMonth = getDaysInMonth(currentMonth)
  const firstDayOfMonth = getDay(monthStart)
  
  const calendarDays = useMemo(() => {
    const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => null)
    const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1)
    return [...blanks, ...monthDays]
  }, [firstDayOfMonth, daysInMonth])

  const handlePrevMonth = () => {
    const prevMonth = subMonths(currentMonth, 1)
    if (!isBefore(prevMonth, startOfMonth(today))) {
      setCurrentMonth(prevMonth)
    }
  }

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const illustration = PlaceHolderImages.find(img => img.id === 'consultation-illustration')
  const finalImageUrl = imageUrl || illustration?.imageUrl || "/hero-illustration.png"

  const isPrevDisabled = isSameMonth(currentMonth, today)

  return (
    <div className="w-full max-w-2xl ml-auto overflow-hidden rounded-[1.5rem] bg-[#121212] shadow-2xl border border-white/10 flex flex-col md:flex-row transition-all duration-700 animate-in fade-in slide-in-from-bottom-8 md:h-[540px]">
      {/* Left Panel: Brand & Info OR Select Time */}
      <div className="w-full md:w-[42%] bg-white p-6 flex flex-col justify-between border-r border-black/5 h-full">
        {!selectedDate ? (
          <div className="flex flex-col items-center text-center justify-between h-full w-full">
            <div className="space-y-4 w-full">
              <div className="space-y-3 pt-2">
                <h3 className="text-black text-xl font-bold uppercase tracking-tight leading-none">
                  BOOK A FREE CONSULTATION
                </h3>
                <p className="text-black/50 text-[10px] font-semibold uppercase tracking-wider leading-tight px-4">
                  with India's leading digital marketing agency
                </p>
                <div className="w-16 h-1 bg-[#f5b800] mx-auto mt-2" />
              </div>

              <div className="relative w-full aspect-square rounded-xl overflow-hidden mt-6 bg-muted/30">
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
        ) : (
          <div className="flex flex-col h-full animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="flex items-center gap-2 mb-6">
              <button 
                onClick={() => {
                  setSelectedDate(null)
                  setSelectedTime(null)
                }}
                className="p-1.5 hover:bg-black/5 rounded-full transition-colors text-black/40 hover:text-black"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <h3 className="text-black text-sm font-bold uppercase tracking-wider">Select Time</h3>
            </div>

            <div className="mb-4">
              <p className="text-[10px] font-bold text-[#f5b800] uppercase tracking-widest mb-1">
                {format(selectedDate, 'EEEE, MMMM d')}
              </p>
              <div className="h-px w-full bg-black/5" />
            </div>

            <ScrollArea className="flex-1 -mx-2 px-2 overflow-y-auto">
              <div className="space-y-2 py-2">
                {TIME_SLOTS.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "w-full py-3 px-4 rounded-xl text-xs font-semibold transition-all border flex items-center justify-between group",
                      selectedTime === time
                        ? "bg-[#f5b800] border-[#f5b800] text-black shadow-md"
                        : "bg-white border-black/5 text-black/60 hover:border-[#f5b800] hover:text-black"
                    )}
                  >
                    <span>{time}</span>
                    <Clock className={cn(
                      "w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity",
                      selectedTime === time && "opacity-100"
                    )} />
                  </button>
                ))}
              </div>
            </ScrollArea>

            <button
              disabled={!selectedTime}
              className={cn(
                "mt-6 w-full py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
                selectedTime
                  ? "bg-black text-white hover:bg-black/80"
                  : "bg-black/5 text-black/20 cursor-not-allowed"
              )}
            >
              Confirm Appointment
            </button>
          </div>
        )}
      </div>

      {/* Right Panel: Calendar */}
      <div className="flex-1 p-6 text-white bg-gradient-to-br from-[#1c1c1c] via-[#121212] to-[#0a0a0a] flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-60">Select Date</h4>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="p-1 bg-white/5 rounded-md border border-white/10">
                <CalendarIcon className="w-3 h-3 text-[#f5b800]" />
              </div>
              <div className="text-left">
                <p className="text-[8px] font-bold text-[#f5b800] uppercase">
                  {format(currentMonth, 'MMMM yyyy')}
                </p>
                <p className="text-[10px] font-normal opacity-40">Available slots</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              <button 
                onClick={handlePrevMonth}
                disabled={isPrevDisabled}
                className={cn(
                  "p-1 rounded-full transition-colors",
                  isPrevDisabled ? "opacity-10 cursor-not-allowed" : "hover:bg-white/5 opacity-40"
                )}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={handleNextMonth}
                className="p-1 hover:bg-white/5 rounded-full transition-colors opacity-40"
              >
                <ChevronRight className="w-4 h-4" />
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
          
          {calendarDays.map((date, index) => {
            if (date === null) return <div key={`empty-${index}`} className="h-7" />

            const currentDayDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date)
            const isPast = isBefore(currentDayDate, today)
            const isSelected = selectedDate ? isSameDay(currentDayDate, selectedDate) : false

            return (
              <button
                key={`date-${date}`}
                disabled={isPast}
                onClick={() => {
                  setSelectedDate(currentDayDate)
                  setSelectedTime(null) // Reset time when date changes
                }}
                className={cn(
                  "h-8 w-8 mx-auto flex items-center justify-center rounded-full text-[10px] font-medium transition-all",
                  isSelected 
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
