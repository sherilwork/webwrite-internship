'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
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
    <header className="fixed top-10 left-0 right-0 z-50 flex justify-center px-4">
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
                  d="M4 9H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M4 15H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[50%] p-0 flex flex-col bg-white border-r">
            <SheetHeader className="p-5 border-b text-left">
              <SheetTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30">Main Menu</SheetTitle>
            </SheetHeader>
            <div className="flex-1 overflow-y-auto py-2">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="px-5 py-3.5 text-xs font-bold text-black/60 hover:text-black hover:bg-black/[0.02] transition-colors border-l-2 border-transparent hover:border-[#f5b800]"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              
              <div className="mt-4 px-5">
                <Separator className="bg-black/5" />
                <div className="mt-6">
                  <Button className="w-full rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest py-6 hover:bg-black/90">
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
