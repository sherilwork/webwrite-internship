
'use client';

import { Search, Bell, User } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 border-b border-black/[0.05] bg-white/80 backdrop-blur-md sticky top-0 z-30 px-8 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-black transition-colors" />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="w-full bg-black/[0.03] border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-black/10 transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-black/[0.03] transition-all">
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>
        <div className="w-8 h-8 rounded-full bg-black/[0.05] border border-black/[0.05] flex items-center justify-center cursor-pointer hover:bg-black/[0.08] transition-all">
          <User className="w-4 h-4" />
        </div>
      </div>
    </header>
  );
}
