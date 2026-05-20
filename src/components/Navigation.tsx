
'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronLeft } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from '@/components/ui/separator';

export function Navigation() {
  const navItems = [
    'Home',
    'About',
    'Team',
    'Services',
    'Portfolio',
    'Career',
    'Contact',
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
              key={item}
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
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
                className="w-6 h-6"
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
          <SheetContent side="left" className="w-[80%] p-0 flex flex-col bg-white border-r overflow-visible">
            {/* Custom Side Tab Close Button - Mountain Curve Shape */}
            <div className="absolute -right-12 bottom-32 z-50">
              <SheetClose asChild>
                <button className="w-12 h-24 bg-white border-l-0 border border-black/[0.01] rounded-r-[4rem] shadow-[25px_0_50px_-15px_rgba(0,0,0,0.12)] flex items-center justify-center pr-3 pl-1 group hover:w-14 transition-all duration-500 ease-in-out">
                  <div className="w-9 h-9 rounded-full bg-black/[0.02] group-hover:bg-[#f5b800]/5 flex items-center justify-center transition-all duration-300">
                    <ChevronLeft className="w-5 h-5 text-black/20 group-hover:text-[#f5b800] transition-colors" />
                  </div>
                </button>
              </SheetClose>
            </div>

            <SheetHeader className="p-5 border-b flex flex-row items-center gap-4 space-y-0 text-left">
              <SheetClose asChild>
                <button className="w-10 h-10 rounded-[1.25rem] border border-black/[0.03] bg-black/[0.01] flex items-center justify-center hover:bg-black/[0.04] transition-all hover:scale-105 active:scale-95 shrink-0 group">
                   <ChevronLeft className="w-5 h-5 text-black/60 group-hover:text-[#f5b800] transition-colors" />
                </button>
              </SheetClose>
              <SheetTitle className="text-xl font-black text-black tracking-tight uppercase">Main Menu</SheetTitle>
            </SheetHeader>
            <div className="flex-1 overflow-y-auto py-2">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="px-6 py-4 text-[11px] font-black text-black/60 hover:text-black hover:bg-black/[0.01] transition-colors border-l-4 border-transparent hover:border-[#f5b800] uppercase tracking-widest"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              
              <div className="mt-4 px-6">
                <Separator className="bg-black/5" />
                <div className="mt-8">
                  <Button className="w-full rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest py-6 hover:bg-black/90 shadow-lg shadow-black/10">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
