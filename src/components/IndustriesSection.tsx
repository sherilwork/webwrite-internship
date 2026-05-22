
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { 
  ShoppingBag, 
  Building2, 
  Plane, 
  Activity, 
  GraduationCap, 
  CreditCard, 
  Rocket, 
  Tv, 
  Landmark, 
  Heart, 
  Truck, 
  Factory, 
  Banknote, 
  Smartphone, 
  Car, 
  Gamepad2, 
  Megaphone, 
  Utensils, 
  Gavel, 
  Trophy, 
  Dumbbell, 
  Key,
  LucideIcon 
} from 'lucide-react'

interface Industry {
  name: string
  icon: LucideIcon
}

const industries: Industry[] = [
  { name: "Retail", icon: ShoppingBag },
  { name: "Real Estate", icon: Building2 },
  { name: "Travel & Tourism", icon: Plane },
  { name: "Healthcare", icon: Activity },
  { name: "Education", icon: GraduationCap },
  { name: "E-Commerce", icon: CreditCard },
  { name: "Startups", icon: Rocket },
  { name: "Media", icon: Tv },
  { name: "Govt. & Public", icon: Landmark },
  { name: "Nonprofits & NGOs", icon: Heart },
  { name: "Logistics", icon: Truck },
  { name: "Manufacturing", icon: Factory },
  { name: "Finance", icon: Banknote },
  { name: "On-Demand", icon: Smartphone },
  { name: "Automotive", icon: Car },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Advertising", icon: Megaphone },
  { name: "Food & Beverages", icon: Utensils },
  { name: "Legal Services", icon: Gavel },
  { name: "Sports", icon: Trophy },
  { name: "Fitness", icon: Dumbbell },
  { name: "Rentals", icon: Key },
]

export function IndustriesSection() {
  return (
    <div className="bg-white">
      {/* Industries Section */}
      <section className="bg-white py-24 lg:pt-32 lg:pb-16 relative overflow-hidden border-t border-black/[0.03]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8 mb-20">
            <div className="space-y-4 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Industries We Serve</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black leading-[1.05] tracking-tighter uppercase">
                STRATEGIC IMPACT <br />
                <span className="text-[#f5b800]">ACROSS ALL SECTORS</span>
              </h2>
              <div className="w-16 md:w-20 h-1.5 bg-black mt-2" />
            </div>
            <p className="text-base md:text-xl text-black/40 font-medium leading-relaxed">
              We provide AI-powered digital marketing solutions across multiple industries, helping businesses increase visibility, generate leads, and scale revenue with data-driven strategies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
            {industries.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.015, duration: 0.4, ease: "easeOut" }}
                className="group relative will-change-transform transform-gpu"
              >
                <div className="h-full flex flex-col items-center justify-center p-4 md:p-5 rounded-[1.5rem] bg-[#fcfcfc] border border-black/[0.04] shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.03)] hover:border-[#f5b800]/30 hover:-translate-y-1 transition-all duration-300 ease-out cursor-default transform-gpu">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-black/[0.02] flex items-center justify-center text-black/40 group-hover:bg-[#f5b800] group-hover:text-black transition-all duration-300 ease-out shadow-sm mb-4">
                    <item.icon size={24} strokeWidth={1.5} className="transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-[9px] md:text-[11px] font-black text-black/60 uppercase tracking-[0.1em] text-center transition-colors duration-300 group-hover:text-black">
                    {item.name}
                  </span>
                  <div className="absolute bottom-4 w-3 h-0.5 bg-[#f5b800] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
