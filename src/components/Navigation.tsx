'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  ChevronLeft, 
  Home, 
  Zap, 
  Layout, 
  Building2, 
  Mail, 
  Star,
  Briefcase,
  Search,
  ArrowRight,
  X
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from '@/lib/utils';

export function Navigation() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'About', href: '/about', icon: Star },
    { label: 'Team', href: '/team', icon: Building2 },
    { label: 'Services', href: '/services', icon: Zap },
    { label: 'Portfolio', href: '/portfolio', icon: Layout },
    { label: 'Career', href: '/career', icon: Briefcase },
    { label: 'Contact', href: '/contact', icon: Mail },
  ];

  const searchResults = React.useMemo(() => {
    if (!searchQuery) return [];
    const query = searchQuery.toLowerCase();
    const items = [
      ...navItems,
      { label: 'Meta Ads', href: '/services', icon: Zap },
      { label: 'Web Development', href: '/services', icon: Zap },
      { label: 'Video Editing', href: '/services', icon: Zap },
      { label: 'App Development', href: '/services', icon: Zap },
      { label: 'Rishi Tiwari', href: '/founder', icon: Star },
    ];
    return items.filter(item => 
      item.label.toLowerCase().includes(query)
    ).slice(0, 5);
  }, [searchQuery]);

  const logo = PlaceHolderImages.find((img) => img.id === 'logo');

  return (
    <header className="fixed top-16 left-0 right-0 z-50 flex justify-center px-4 will-change-transform transform-gpu">
      <nav className="flex items-center justify-between w-full max-w-6xl px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-border shadow-sm transition-all duration-300 hover:shadow-md">
        <Link href="/" className="flex items-center gap-2 transition-transform active:scale-95 duration-200">
          <div className="relative h-7 w-32 md:h-8 md:w-40">
            <Image
              src={logo?.imageUrl || '/webwrite-logo.webp'}
              alt="WebWrite Services Logo"
              fill
              className="object-contain object-left"
              priority
              data-ai-hint="company logo"
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-200 hover:text-foreground px-1 py-1 group",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#f5b800] rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          {/* Desktop Search Toggle */}
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 transition-colors group"
            aria-label="Search"
          >
            <Search className="w-4 h-4 text-black/50 group-hover:text-black transition-colors" />
          </button>

          <Button asChild className="hidden md:inline-flex rounded-full bg-black hover:bg-black/90 text-white px-7 py-2 text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-black/10 duration-300 group">
            <a href="https://wa.me/917906627288" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Schedule free consultation
              <Zap className="w-3.5 h-3.5 text-[#f5b800] fill-[#f5b800] animate-pulse group-hover:scale-125 transition-transform" />
            </a>
          </Button>

          {/* Mobile Search Toggle */}
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="md:hidden p-2 text-black/70 hover:bg-black/5 rounded-full transition-all active:scale-90"
            aria-label="Search"
          >
            <Search className="w-6 h-6" />
          </button>

          <Sheet>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 text-black/70 hover:bg-black/5 rounded-full transition-all active:scale-90 flex items-center justify-center will-change-transform"
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
            <SheetContent side="left" className="w-[85%] p-0 flex flex-col bg-white border-r overflow-visible rounded-r-[32px] animate-in slide-in-from-left duration-300 ease-out will-change-transform">
              <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-50">
                <SheetClose asChild>
                  <button className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-90 group">
                    <ChevronLeft className="w-5 h-5 text-[#f5b800] group-hover:-translate-x-0.5 transition-transform duration-200" />
                  </button>
                </SheetClose>
              </div>

              <SheetHeader className="pt-20 pb-8 px-8 border-b flex flex-row items-center gap-4 space-y-0 text-left">
                <SheetClose asChild>
                  <button className="w-9 h-9 rounded-full border border-black/10 bg-black/5 flex items-center justify-center hover:bg-black transition-all hover:scale-105 active:scale-95 shrink-0 group">
                     <ChevronLeft className="w-5 h-5 text-black group-hover:text-[#f5b800] transition-colors duration-200" />
                  </button>
                </SheetClose>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="relative h-7 w-36">
                  <Image
                    src={logo?.imageUrl || '/webwrite-logo.webp'}
                    alt="WebWrite Services Logo"
                    fill
                    className="object-contain object-left"
                    data-ai-hint="company logo"
                    priority
                  />
                </div>
              </SheetHeader>
              
              <ScrollArea className="flex-1 h-full scroll-smooth">
                <div className="flex flex-col py-4">
                  {navItems.map((item, idx) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.04, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center justify-between px-8 py-5 text-[14px] font-black hover:bg-black/[0.02] transition-all border-b border-black/[0.04] uppercase tracking-[0.2em] group",
                            isActive ? "text-[#f5b800]" : "text-black/80 hover:text-[#f5b800]"
                          )}
                        >
                          <div className="flex items-center gap-5">
                            <div className={cn(
                              "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200",
                              isActive ? "bg-[#f5b800]/20" : "bg-black/[0.02] group-hover:bg-[#f5b800]/20"
                            )}>
                              <item.icon className={cn(
                                "w-5 h-5 transition-all duration-200",
                                isActive ? "text-[#f5b800]" : "text-black/30 group-hover:text-[#f5b800]"
                              )} />
                            </div>
                            <span className="group-hover:translate-x-1 transition-transform duration-200">{item.label}</span>
                          </div>
                          <ChevronLeft className="w-4 h-4 rotate-180 opacity-0 group-hover:opacity-40 transition-all -translate-x-4 group-hover:translate-x-0 duration-200" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
                
                <div className="mt-4 px-8 mb-12">
                  <Button asChild className="w-full rounded-full bg-black text-white text-[10px] font-black uppercase tracking-[0.15em] py-5 hover:bg-black/90 shadow-2xl shadow-black/20 transition-all active:scale-95 border border-white/5 duration-200 group">
                    <a href="https://wa.me/917906627288" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                      Schedule free consultation
                      <Zap className="w-3.5 h-3.5 text-[#f5b800] fill-[#f5b800] animate-pulse group-hover:scale-110 transition-transform" />
                    </a>
                  </Button>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Working Search Dialog */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-white/95 backdrop-blur-xl border-none shadow-2xl rounded-3xl">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="sr-only">Search WebWrite Services</DialogTitle>
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/20 group-focus-within:text-[#f5b800] transition-colors" />
              <Input 
                autoFocus
                placeholder="What can we help you find?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-12 bg-black/5 border-none rounded-2xl text-lg font-medium focus-visible:ring-2 focus-visible:ring-[#f5b800]/30 transition-all"
              />
            </div>
          </DialogHeader>
          
          <ScrollArea className="max-h-[400px] p-6">
            {searchQuery ? (
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 px-2">Search Results</p>
                {searchResults.length > 0 ? (
                  searchResults.map((item, idx) => (
                    <Link 
                      key={idx} 
                      href={item.href}
                      onClick={() => setIsSearchOpen(false)}
                      className="flex items-center justify-between p-4 rounded-2xl hover:bg-black/5 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white border border-black/5 flex items-center justify-center text-black/40 group-hover:text-[#f5b800] group-hover:bg-[#f5b800]/10 transition-all">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-black group-hover:translate-x-1 transition-transform">{item.label}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-black/20 group-hover:text-[#f5b800] transition-colors" />
                    </Link>
                  ))
                ) : (
                  <div className="py-12 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mx-auto">
                      <X className="w-6 h-6 text-black/20" />
                    </div>
                    <p className="text-sm font-medium text-black/40">No matching results found for "{searchQuery}"</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 px-2">Quick Navigation</p>
                  <div className="grid grid-cols-2 gap-2">
                    {navItems.slice(0, 4).map((item, idx) => (
                      <Link 
                        key={idx} 
                        href={item.href}
                        onClick={() => setIsSearchOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-black/5 transition-all font-bold text-sm"
                      >
                        <item.icon className="w-4 h-4 text-[#f5b800]" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 px-2">Popular Services</p>
                  <div className="flex flex-wrap gap-2">
                    {['Meta Ads', 'Web Design', 'SEO', 'App Dev', 'Content'].map((tag, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setSearchQuery(tag)}
                        className="px-4 py-2 rounded-full bg-black/5 hover:bg-[#f5b800]/10 hover:text-[#f5b800] border border-black/5 transition-all text-xs font-bold uppercase tracking-widest"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </header>
  );
}
