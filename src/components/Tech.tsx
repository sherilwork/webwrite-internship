
"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Tech Section - High Performance Optimized Light Version
 * - Matches the visual language of the About Section.
 * - Hardware accelerated animations for 60fps smoothness.
 * - Optimized for light theme backgrounds.
 */
const techStack = [
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
  { name: 'Premiere Pro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg' },
  { name: 'After Effects', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg' },
  { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
  { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Canva', icon: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg' },
]

export function Tech() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <section className="bg-white py-32 w-full h-[600px]" />;
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
        "font-black text-black/80 tracking-tight whitespace-nowrap transition-colors duration-300 uppercase",
        isMobile ? "text-sm" : "text-2xl"
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
            "flex items-center py-4 will-change-transform transform-gpu",
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
    <section className="bg-white py-24 lg:py-32 px-6 md:px-12 relative overflow-hidden select-none border-t border-black/[0.03]">
      {/* Background Ambient Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-[#f5b800]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto space-y-16 lg:space-y-20 relative z-10">
        
        {/* Header Section - Matches About Section Style */}
        <div className="px-4 space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Our Toolkit</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-black leading-[1.05] tracking-tighter uppercase">
              POWERING YOUR <br />
              <span className="text-[#f5b800]">DIGITAL VISION</span>
            </h2>
            <div className="w-16 md:w-20 h-1.5 bg-black mt-2" />
          </div>
        </div>

        {/* Desktop Layout - 3 Rows */}
        <div className="hidden lg:flex flex-col gap-10 relative">
          <MarqueeRow items={desktopRows[0]} direction="left" speed="normal" />
          <MarqueeRow items={desktopRows[1]} direction="right" speed="slow" />
          <MarqueeRow items={desktopRows[2]} direction="left" speed="fast" />
        </div>

        {/* Mobile Layout - 6 Rows */}
        <div className="flex lg:hidden flex-col gap-6 relative">
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
