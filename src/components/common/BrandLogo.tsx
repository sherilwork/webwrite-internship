'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
  /** Additional CSS classes */
  className?: string;
  /** Width in pixels (default 160) */
  width?: number;
  /** Height in pixels (default 48) */
  height?: number;
  /** Whether the image should be prioritized for loading */
  priority?: boolean;
}

/**
 * Single Source of Truth for the Smiloe Brand Logo.
 * Uses only /smileo-logo.png and ensures consistent rendering across the app.
 */
export function BrandLogo({
  className,
  width = 160,
  height = 48,
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src="/smileo-logo.png"
      alt="Smiloe Group"
      width={width}
      height={height}
      className={cn("object-contain w-auto", className)}
      priority={priority}
      quality={100}
    />
  );
}
