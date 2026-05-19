
"use client"

import * as React from "react"
import { useState, useEffect, useMemo } from "react"
import { ChevronLeft, ChevronRight, Globe, Calendar as CalendarIcon, Clock, ArrowLeft, User, Mail, MessageSquare, Phone } from "lucide-react"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useIsMobile } from "@/hooks/use-mobile"

interface BookingCardProps {
  imageUrl?: string
}

const TIME_SLOTS = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
  "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM",
  "09:00 PM"
]

export function BookingCard({ imageUrl }: BookingCardProps) {
  const isMobile = useIsMobile()
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  
  // State for interactive calendar
  const [currentMonth, setCurrentMonth] = useState<Date | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [isDetailsStep, setIsDetailsStep] = useState(false)
  const [today, setToday] = useState<Date | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const now = new Date()
    setCurrentMonth(now)
    setToday(startOfDay(now))
  }, [])

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    notes: ""
  })

  // Calculate calendar grid
  const monthStart = useMemo(() => currentMonth ? startOfMonth(currentMonth) : null, [currentMonth])
  const daysInMonth = useMemo(() => currentMonth ? getDaysInMonth(currentMonth) : 0, [currentMonth])
  const firstDayOfMonth = useMemo(() => monthStart ? getDay(monthStart) : 0, [monthStart])
  
  const calendarDays = useMemo(() => {
    if (!currentMonth) return []
    const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => null)
    const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1)
    return [...blanks, ...monthDays]
  }, [firstDayOfMonth, daysInMonth, currentMonth])

  const handlePrevMonth = () => {
    if (!currentMonth || !today) return
    const prevMonth = subMonths(currentMonth, 1)
    if (!isBefore(prevMonth, startOfMonth(today))) {
      setCurrentMonth(prevMonth)
    }
  }

  const handleNextMonth = () => {
    if (!currentMonth) return
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const illustration = PlaceHolderImages.find(img => img.id === 'consultation-illustration')
  const finalImageUrl = imageUrl || illustration?.imageUrl || "/hero-illustration.png"

  const isPrevDisabled = !currentMonth || !today || isSameMonth(currentMonth, today)

  if (!isMounted || !currentMonth || !today) {
    return (
      <div className="w-full max-w-xl ml-auto overflow-hidden rounded-[1.25rem] bg-white shadow-2xl border border-black/5 flex flex-col md:flex-row h-[420px] items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 bg-black/5 rounded-full" />
          <div className="h-4 w-32 bg-black/5 rounded" />
        </div>
      </div>
    )
  }

  const renderSections = () => (
    <div className={cn(
      "bg-white p-5 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black/5 min-h-[380px] md:h-full relative overflow-hidden",
      isMobile ? "w-full h-full" : "w-full md:w-[44%]"
    )}>
      {!selectedDate ? (
        // STEP 1: Branding / Illustration
        <div className="flex flex-col items-center text-center justify-between h-full w-full animate-in fade-in duration-500 pt-2 pb-1">
          <div className="flex flex-col items-center w-full">
            <div className="space-y-1 w-full mb-3">
              <h3 className="text-black text-xl font-bold uppercase tracking-tight leading-none">
                FREE CONSULTATION
              </h3>
              <p className="text-black/50 text-[11px] font-semibold uppercase tracking-wider leading-tight px-2">
                with our expert digital marketing team
              </p>
              <div className="w-14 h-0.5 bg-[#f5b800] mx-auto mt-2" />
            </div>

            <div className="flex items-center justify-center gap-1.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
              <span className="text-[8px] font-semibold text-black/40 uppercase tracking-widest">Online consultation</span>
            </div>

            <div className="relative w-full aspect-[4/3] mt-auto">
              <div className="absolute top-[10%] left-[15%] right-[5%] bottom-[5%] bg-blue-50 rounded-[2rem] -z-10" />
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-transparent">
                <Image 
                  src={finalImageUrl}
                  alt="Consultation Illustration"
                  fill
                  className="object-contain"
                  data-ai-hint="professional consultant"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 w-full pt-4 border-t border-black/5">
            <div className="flex items-center gap-1.5 text-black/60">
              <Phone className="w-2.5 h-2.5 text-[#f5b800]" />
              <span className="text-[8px] font-bold uppercase tracking-wider leading-none">+1 (555) 000-1234</span>
            </div>
            <div className="flex items-center gap-1.5 text-black/60">
              <Mail className="w-2.5 h-2.5 text-[#f5b800]" />
              <span className="text-[8px] font-bold uppercase tracking-wider leading-none">contact@webwrite.services</span>
            </div>
          </div>
        </div>
      ) : !isDetailsStep ? (
        // STEP 2: Time Selection
        <div className="flex flex-col h-full animate-in fade-in slide-in-from-left-4 duration-500 overflow-hidden">
          <div className="flex items-center gap-2 mb-3 shrink-0">
            <button 
              onClick={() => {
                setSelectedDate(null)
                setSelectedTime(null)
              }}
              className="p-1.5 hover:bg-black/[0.03] rounded-full transition-colors text-black/40 hover:text-black"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <h3 className="text-black text-xs font-bold uppercase tracking-wider">Select Time</h3>
          </div>

          <div className="mb-2 shrink-0 px-2">
            <p className="text-[9px] font-bold text-[#f5b800] uppercase tracking-widest mb-1">
              {format(selectedDate, 'EEEE, MMMM d')}
            </p>
            <div className="h-px w-full bg-black/5" />
          </div>

          <ScrollArea className={cn("flex-1 -mx-2 px-2", isMobile ? "max-h-[220px]" : "")}>
            <div className="space-y-1.5 py-1">
              {TIME_SLOTS.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={cn(
                    "w-full py-2.5 px-3 rounded-lg text-[11px] font-semibold transition-all border flex items-center justify-between group",
                    selectedTime === time
                      ? "bg-[#f5b800] border-[#f5b800] text-black shadow-sm"
                      : "bg-white border-black/5 text-black/60 hover:border-[#f5b800] hover:text-black"
                  )}
                >
                  <span>{time}</span>
                  <Clock className={cn(
                    "w-3 h-3 opacity-20 group-hover:opacity-100 transition-opacity",
                    selectedTime === time && "opacity-100"
                  )} />
                </button>
              ))}
            </div>
          </ScrollArea>

          <div className={cn(
            "pt-3 mt-auto shrink-0 bg-white border-t border-black/5",
            isMobile ? "pb-4 px-6" : ""
          )}>
            <button
              disabled={!selectedTime}
              onClick={() => setIsDetailsStep(true)}
              className={cn(
                "w-full py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm",
                selectedTime
                  ? "bg-black text-white hover:bg-black/90"
                  : "bg-black/5 text-black/20 cursor-not-allowed"
              )}
            >
              Next Step
            </button>
          </div>
        </div>
      ) : (
        // STEP 3: Details Form
        <div className="flex flex-col h-full animate-in fade-in slide-in-from-left-4 duration-500 overflow-hidden">
          <div className="flex items-center gap-2 mb-3 shrink-0">
            <button 
              onClick={() => setIsDetailsStep(false)}
              className="p-1.5 hover:bg-black/[0.03] rounded-full transition-colors text-black/40 hover:text-black"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <h3 className="text-black text-xs font-bold uppercase tracking-wider">Your Details</h3>
          </div>

          <div className="mb-3 shrink-0 px-2">
            <p className="text-[9px] font-bold text-[#f5b800] uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <CalendarIcon className="w-2.5 h-2.5" />
              {selectedDate ? format(selectedDate, 'MMM d') : ''} @ {selectedTime}
            </p>
            <div className="h-px w-full bg-black/5" />
          </div>

          <ScrollArea className={cn("flex-1 -mx-2 px-2", isMobile ? "max-h-[240px]" : "")}>
            <div className={cn("space-y-4 py-1", isMobile ? "px-6" : "")}>
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-[9px] font-bold uppercase tracking-widest text-black/40">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black/20" />
                  <Input 
                    id="name"
                    placeholder="John Doe" 
                    className="pl-9 h-10 bg-black/5 border-none focus-visible:ring-1 focus-visible:ring-[#f5b800] text-[11px] font-medium"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-[9px] font-bold uppercase tracking-widest text-black/40">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black/20" />
                  <Input 
                    id="email"
                    type="email"
                    placeholder="john@example.com" 
                    className="pl-9 h-10 bg-black/5 border-none focus-visible:ring-1 focus-visible:ring-[#f5b800] text-[11px] font-medium"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="notes" className="text-[9px] font-bold uppercase tracking-widest text-black/40">Notes</Label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-3.5 h-3.5 text-black/20" />
                  <Textarea 
                    id="notes"
                    placeholder="Project details..." 
                    className="pl-9 min-h-[80px] bg-black/5 border-none focus-visible:ring-1 focus-visible:ring-[#f5b800] text-[11px] font-medium resize-none"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  />
                </div>
              </div>
            </div>
          </ScrollArea>

          <div className={cn(
            "pt-3 mt-auto shrink-0 bg-white border-t border-black/5",
            isMobile ? "pb-4 px-6" : ""
          )}>
            <button
              disabled={!formData.name || !formData.email}
              className={cn(
                "w-full py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm",
                formData.name && formData.email
                  ? "bg-[#f5b800] text-black hover:opacity-90"
                  : "bg-black/5 text-black/20 cursor-not-allowed"
              )}
            >
              Confirm Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  )

  const renderCalendar = () => (
    <div className="flex-1 p-5 text-black bg-white flex flex-col min-h-[400px] md:h-full">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/30 text-left">Select Date</h4>
        <div className="flex items-center gap-3">
          <div className="text-left">
            <p className="text-[16px] font-black text-[#f5b800] uppercase tracking-wider leading-none">
              {currentMonth ? format(currentMonth, 'MMMM yyyy') : ''}
            </p>
            <p className="text-[9px] font-bold text-black/20 leading-none mt-1 uppercase tracking-tight">
              {format(new Date(), 'EEEE, d MMMM yyyy')}
            </p>
          </div>
          <div className="flex gap-1">
            <button 
              onClick={handlePrevMonth}
              disabled={isPrevDisabled}
              className={cn(
                "p-1.5 rounded-full transition-colors",
                isPrevDisabled ? "opacity-10 cursor-not-allowed" : "hover:bg-black/[0.03] text-black/30 hover:text-black"
              )}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={handleNextMonth}
              className="p-1.5 hover:bg-black/[0.03] rounded-full transition-colors text-black/30 hover:text-black"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-y-1 mb-3 mt-6">
        {days.map((day) => (
          <div key={day} className="text-center text-[7px] font-bold text-black/60 tracking-widest pb-1">
            {day}
          </div>
        ))}
        
        {calendarDays.map((date, index) => {
          if (date === null || !currentMonth) return <div key={`empty-${index}`} className="h-7" />

          const currentDayDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date)
          const isPast = isBefore(currentDayDate, today)
          const isSelected = selectedDate ? isSameDay(currentDayDate, selectedDate) : false

          return (
            <button
              key={`date-${date}`}
              disabled={isPast}
              onClick={() => {
                setSelectedDate(currentDayDate)
                setSelectedTime(null)
                setIsDetailsStep(false)
              }}
              className={cn(
                "h-7 w-7 mx-auto flex items-center justify-center rounded-full text-[10px] font-medium transition-all",
                isSelected 
                  ? "bg-[#f5b800] text-black shadow-sm font-bold" 
                  : isPast
                    ? "opacity-20 cursor-not-allowed"
                    : "bg-black/[0.01] hover:bg-black/[0.04] text-black/60"
              )}
            >
              {date}
            </button>
          )
        })}
      </div>

      <div className="flex items-center justify-between mt-auto pt-3 border-t border-black/5">
        <div className="flex items-center gap-1.5">
          <Globe className="w-2.5 h-2.5 text-[#f5b800]" />
          <span className="text-[8px] font-bold text-[#f5b800] uppercase tracking-wide">Time Zone</span>
        </div>
        <div className="bg-black/5 px-2.5 py-1 rounded-full border border-black/10 flex items-center gap-1.5">
          <span className="text-[8px] font-medium text-black/50">Asia/Kolkata</span>
          <div className="w-3.5 h-2.5 bg-black/10 rounded-sm flex flex-col overflow-hidden">
            <div className="flex-1 bg-[#FF9933]" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-[#138808]" />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className={cn(
      "w-full max-w-xl ml-auto overflow-hidden rounded-[1.25rem] bg-white shadow-2xl border border-black/5 relative transition-all duration-700 animate-in fade-in slide-in-from-bottom-8",
      isMobile ? "h-[480px]" : "flex flex-col md:flex-row md:h-[420px]"
    )}>
      {isMobile ? (
        // MOBILE VERSION: Calendar first, then overlay sections
        <div className="w-full h-full relative">
          {renderCalendar()}
          {selectedDate && (
            <div className="absolute inset-0 z-20 bg-white">
              {renderSections()}
            </div>
          )}
        </div>
      ) : (
        // DESKTOP VERSION: Side by side
        <>
          {renderSections()}
          {renderCalendar()}
        </>
      )}
    </div>
  )
}
