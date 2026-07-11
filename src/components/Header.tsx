
'use client';

import React from 'react';
import { Search, Bell, User } from 'lucide-react';

export default function Header({ title }: { title: string }) {
  return (
    <header className="h-16 border-b border-gray-50 bg-white/80 backdrop-blur-md sticky top-0 z-10 px-8 flex items-center justify-between">
      <h1 className="text-lg font-bold text-black tracking-tight">{title}</h1>
      
      <div className="flex items-center gap-6">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-black transition-colors" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-9 pr-4 py-1.5 bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white rounded-full text-sm outline-none w-64 transition-all"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="relative text-gray-400 hover:text-black transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-blue-500 rounded-full border border-white" />
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-100 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
