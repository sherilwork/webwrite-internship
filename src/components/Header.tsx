
'use client';

import React from 'react';
import { Search, User } from 'lucide-react';

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <header className="h-16 border-b border-gray-50 bg-white/80 backdrop-blur-md sticky top-0 z-10 px-8 flex items-center justify-between">
      <h1 className="text-lg font-bold text-black tracking-tight">{title}</h1>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <img src="/profile-avatar-1.png" alt="Profile" className="w-8 h-8 rounded-full border border-gray-100 cursor-pointer object-cover" />
        </div>
      </div>
    </header>
  );
}
