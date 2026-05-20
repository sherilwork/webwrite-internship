
'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  ChevronLeft, 
  Home, 
  Zap, 
  Layout, 
  Building2, 
  Briefcase, 
  Mail, 
  Star 
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Navigation() {
  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Solutions', href: '#', icon: Zap },
    { label: 'Expertise', href: '#', icon: Star },
    { label: 'Portfolio', href: '#', icon: Layout },
    { label: 'Company', href: '#', icon: Building2 },
    { label: 'Careers', href: '#', icon: Briefcase },
    { label: 'Contact', href: '#', icon: Mail },
  ];

  const logo = PlaceHolderImages.find((img) => img.id === 'logo');

  return (
    <header className="fixed top-16 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between w-full max-w-6xl px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-border shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-7 w-32 md:h-8 md:w-40">
            <Image
              src={logo?.imageUrl || '/webwrite-logo.webp'}
              alt="Webwrite services logo"
              fill
              className="object-contain object-left"
              priority
              data-ai-hint="company logo"
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Hidden on mobile, visible on desktop */}
        <Button className="hidden md:inline-flex rounded-full bg-black hover:bg-black/90 text-white px-6 font-medium">
          Get started
        </Button>

        {/* Mobile menu trigger and Sidebar */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="md:hidden p-1.5 text-black/70 hover:bg-black/5 rounded-full transition-colors flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
              >
                <path
                  d="M4 10H20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M4 14H20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[85%] p-0 flex flex-col bg-white border-r overflow-visible">
            {/* Custom Side Tab Close Button - Mountain Curve Shape with Brand Color */}
            <div className="absolute -right-10 bottom-40 z-50">
              <SheetClose asChild>
                <button className="w-10 h-24 bg-white border-l-0 border border-black/[0.02] rounded-r-[32px] shadow-[20px_0_40px_-10px_rgba(0,0,0,0.08)] flex items-center justify-center pr-3 pl-0.5 group hover:w-11 transition-all duration-300 ease-in-out">
                  <div className="w-7 h-7 rounded-full bg-[#f5b800]/5 group-hover:bg-[#f5b800]/10 flex items-center justify-center transition-all duration-300">
                    <ChevronLeft className="w-5 h-5 text-[#f5b800] transition-colors" />
                  </div>
                </button>
              </SheetClose>
            </div>

            <SheetHeader className="pt-16 pb-6 px-6 border-b flex flex-row items-center gap-4 space-y-0 text-left">
              <SheetClose asChild>
                <button className="w-10 h-10 rounded-xl border border-black/[0.03] bg-black/[0.01] flex items-center justify-center hover:bg-[#f5b800]/5 transition-all hover:scale-105 active:scale-95 shrink-0 group">
                   <ChevronLeft className="w-5 h-5 text-[#f5b800] transition-colors" />
                </button>
              </SheetClose>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="relative h-7 w-36">
                <Image
                  src={logo?.imageUrl || '/webwrite-logo.webp'}
                  alt="Webwrite services logo"
                  fill
                  className="object-contain object-left"
                  data-ai-hint="company logo"
                />
              </div>
            </SheetHeader>
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between px-7 py-6 text-[13px] font-black text-black/80 hover:text-black hover:bg-black/[0.02] transition-all border-b border-black/[0.04] uppercase tracking-[0.2em] group"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-9 h-9 rounded-full bg-black/[0.02] flex items-center justify-center group-hover:bg-[#f5b800]/10 transition-colors">
                        <item.icon className="w-4.5 h-4.5 text-black/30 group-hover:text-[#f5b800] transition-colors" />
                      </div>
                      <span>{item.label}</span>
                    </div>
                    <ChevronLeft className="w-4 h-4 rotate-180 opacity-0 group-hover:opacity-20 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </Link>
                ))}
              </div>
              
              <div className="mt-8 px-7 mb-10">
                <Button className="w-full rounded-full bg-black text-white text-[11px] font-black uppercase tracking-[0.2em] py-8 hover:bg-black/90 shadow-xl shadow-black/10 transition-transform active:scale-95">
                  Get Started Now
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
