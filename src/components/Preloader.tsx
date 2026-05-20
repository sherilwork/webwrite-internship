"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  const logo = PlaceHolderImages.find((img) => img.id === 'logo')

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + 1
      })
    }, 20)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6 text-center"
        >
          <div className="relative flex flex-col items-center max-w-sm w-full">
            {/* Logo Container with Spinner Effect */}
            <div className="relative w-24 h-24 mb-8">
              {/* Spinner Arc using Theme Color #f5b800 */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#f5b800]"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              {/* Logo Capsule */}
              <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden border border-black/5">
                <Image
                  src={logo?.imageUrl || "/webwrite-logo.webp"}
                  alt="Webwrite Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Brand Text */}
            <div className="space-y-2 mb-8">
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-black text-black tracking-tighter uppercase"
              >
                Webwrite Services
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.4 }}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-black"
              >
                Digital Marketing. Smarter Growth.
              </motion.p>
            </div>

            {/* Segmented Progress Bar using Theme Color #f5b800 */}
            <div className="flex gap-1.5 mb-6 w-40">
              {[0, 1, 2, 3].map((index) => (
                <div 
                  key={index} 
                  className="h-1 flex-1 bg-black/5 rounded-full overflow-hidden"
                >
                  <motion.div
                    className="h-full bg-[#f5b800]"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: progress >= (index + 1) * 25 ? "100%" : 
                             progress > index * 25 ? `${(progress % 25) * 4}%` : "0%" 
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Loading Label */}
            <motion.span 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-[10px] font-bold uppercase tracking-widest text-black/30"
            >
              Loading...
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
