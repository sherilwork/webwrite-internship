"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Tech Section - High Performance Optimized Version
 * - Icons displayed in full color for maximum brand recognition.
 * - Hardware accelerated animations for 60fps smoothness.
 * - Responsive layout: 6 Rows (Mobile) | 3 Rows (Desktop).
 */
const techStack = [
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Three.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
  { name: 'Premiere Pro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg' },
  { name: 'After Effects', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg' },
  { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
  { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
  { name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'D3.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg' },
  { name: 'Canva', icon: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg' },
]

export function Tech() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <section className="bg-black py-32 w-full h-[600px]" />;
  }

  // Row distributions
  const desktopRows = [
    techStack.slice(0, 8),
    techStack.slice(8, 16),
    techStack.slice(16, 24),
  ];

  const mobileRows = [
    techStack.slice(0, 4),
    techStack.slice(4, 8),
    techStack.slice(8, 12),
    techStack.slice(12, 16),
    techStack.slice(16, 20),
    techStack.slice(20, 24),
  ];

  const TechItem = ({ tech, isMobile = false }: { tech: typeof techStack[0], isMobile?: boolean }) => (
    <div className={cn(
      "flex items-center shrink-0 group cursor-default transform-gpu",
      isMobile ? "gap-4 px-6" : "gap-8 px-12"
    )}>
      <div className={cn(
        "relative transition-transform duration-500 group-hover:scale-110",
        isMobile ? "w-8 h-8" : "w-12 h-12"
      )}>
        <Image
          src={tech.icon}
          alt={tech.name}
          width={isMobile ? 32 : 48}
          height={isMobile ? 32 : 48}
          className="object-contain transition-all duration-500"
          unoptimized
        />
      </div>
      <span className={cn(
        "font-medium text-white tracking-tight whitespace-nowrap transition-colors duration-300",
        isMobile ? "text-lg" : "text-3xl"
      )}>
        {tech.name}
      </span>
    </div>
  );

  const MarqueeRow = ({ items, direction = 'left', speed = 'normal', isMobile = false }: { 
    items: typeof techStack, 
    direction?: 'left' | 'right', 
    speed?: 'slow' | 'normal' | 'fast',
    isMobile?: boolean 
  }) => {
    const duration = speed === 'slow' ? '45s' : speed === 'fast' ? '25s' : '35s';
    
    return (
      <div className="flex overflow-hidden relative group/row w-full select-none">
        <div 
          className={cn(
            "flex items-center py-2 will-change-transform transform-gpu",
            direction === 'left' ? "animate-tech-marquee-left" : "animate-tech-marquee-right",
            "group-hover/row:[animation-play-state:paused]"
          )}
          style={{ '--duration': duration } as React.CSSProperties}
        >
          {items.map((tech, idx) => <TechItem key={`${idx}-${tech.name}`} tech={tech} isMobile={isMobile} />)}
          {items.map((tech, idx) => <TechItem key={`dup-${idx}-${tech.name}`} tech={tech} isMobile={isMobile} />)}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-black py-24 lg:py-32 px-6 md:px-12 relative overflow-hidden select-none border-y border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-[#f5b800]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto space-y-16 lg:space-y-24 relative z-10">
        
        {/* Header Label */}
        <div className="flex justify-between items-center px-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#f5b800] rotate-45 shadow-[0_0_10px_#f5b800]" />
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white font-orbitron">
              Technologies We Use
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-6 opacity-20">
            <div className="flex gap-1.5 items-center">
              <div className="w-10 h-[1px] bg-white" />
              <div className="w-1.5 h-[1px] bg-white" />
            </div>
          </div>
        </div>

        {/* Desktop Layout - 3 Rows */}
        <div className="hidden lg:flex flex-col gap-12 relative">
          <MarqueeRow items={desktopRows[0]} direction="left" speed="normal" />
          <MarqueeRow items={desktopRows[1]} direction="right" speed="slow" />
          <MarqueeRow items={desktopRows[2]} direction="left" speed="fast" />
        </div>

        {/* Mobile Layout - 6 Rows */}
        <div className="flex lg:hidden flex-col gap-8 relative">
          <MarqueeRow items={mobileRows[0]} direction="left" speed="fast" isMobile />
          <MarqueeRow items={mobileRows[1]} direction="right" speed="normal" isMobile />
          <MarqueeRow items={mobileRows[2]} direction="left" speed="slow" isMobile />
          <MarqueeRow items={mobileRows[3]} direction="right" speed="fast" isMobile />
          <MarqueeRow items={mobileRows[4]} direction="left" speed="normal" isMobile />
          <MarqueeRow items={mobileRows[5]} direction="right" speed="slow" isMobile />
        </div>
      </div>

      <style jsx global>{`
        @keyframes tech-marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes tech-marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-tech-marquee-left {
          animation: tech-marquee-left var(--duration, 35s) linear infinite;
          backface-visibility: hidden;
          perspective: 1000px;
        }
        .animate-tech-marquee-right {
          animation: tech-marquee-right var(--duration, 35s) linear infinite;
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </section>
  )
}