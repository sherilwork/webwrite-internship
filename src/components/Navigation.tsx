
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
import { ScrollArea } from "@/components/ui/scroll-area";

export function Navigation() {
  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'About', href: '/about', icon: Star },
    { label: 'Team', href: '/team', icon: Building2 },
    { label: 'Services', href: '/#services', icon: Zap },
    { label: 'Portfolio', href: '/#portfolio', icon: Layout },
    { label: 'Career', href: '#', icon: Briefcase },
    { label: 'Contact', href: '/#contact', icon: Mail },
  ];

  const logo = PlaceHolderImages.find((img) => img.id === 'logo');

  return (
    <header className="fixed top-16 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between w-full max-w-6xl px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-border shadow-sm transition-all duration-300">
        <Link href="/" className="flex items-center gap-2 transition-transform active:scale-95">
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
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button asChild className="hidden md:inline-flex rounded-full bg-black hover:bg-black/90 text-white px-6 font-medium transition-transform active:scale-95 shadow-lg shadow-black/10">
          <Link href="/#contact">Get started</Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <button
              className="md:hidden p-1.5 text-black/70 hover:bg-black/5 rounded-full transition-all active:scale-90 flex items-center justify-center will-change-transform"
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
          <SheetContent side="left" className="w-[85%] p-0 flex flex-col bg-white border-r overflow-visible rounded-r-[32px] animate-in slide-in-from-left duration-500 ease-out">
            <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-50">
              <SheetClose asChild>
                <button className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-90 group">
                  <ChevronLeft className="w-5 h-5 text-[#f5b800] group-hover:-translate-x-0.5 transition-transform" />
                </button>
              </SheetClose>
            </div>

            <SheetHeader className="pt-20 pb-8 px-8 border-b flex flex-row items-center gap-4 space-y-0 text-left">
              <SheetClose asChild>
                <button className="w-9 h-9 rounded-full border border-black/10 bg-black/5 flex items-center justify-center hover:bg-black transition-all hover:scale-105 active:scale-95 shrink-0 group">
                   <ChevronLeft className="w-5 h-5 text-black group-hover:text-[#f5b800] transition-colors" />
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
                  priority
                />
              </div>
            </SheetHeader>
            
            <ScrollArea className="flex-1 h-full scroll-smooth">
              <div className="flex flex-col">
                {navItems.map((item, idx) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between px-8 py-6 text-[14px] font-black text-black/80 hover:text-[#f5b800] hover:bg-black/[0.01] transition-all border-b border-black/[0.04] uppercase tracking-[0.2em] group animate-in fade-in slide-in-from-left-4 fill-mode-both"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-10 h-10 rounded-full bg-black/[0.02] flex items-center justify-center group-hover:bg-[#f5b800]/20 transition-all">
                        <item.icon className="w-5 h-5 text-black/30 group-hover:text-[#f5b800] transition-all" />
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                    </div>
                    <ChevronLeft className="w-4 h-4 rotate-180 opacity-0 group-hover:opacity-40 transition-all -translate-x-4 group-hover:translate-x-0" />
                  </Link>
                ))}
              </div>
              
              <div className="mt-8 px-8 mb-12">
                <Button asChild className="w-full rounded-full bg-black text-white text-[12px] font-black uppercase tracking-[0.2em] py-8 hover:bg-black/90 shadow-2xl shadow-black/20 transition-all active:scale-95 border border-white/5">
                  <Link href="/#contact">Get Started Now</Link>
                </Button>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
