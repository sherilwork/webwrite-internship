
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  LogOut,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/lib/supabase';

const MENU_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Internship Applications', href: '/dashboard/applications' },
  { icon: Users, label: 'Job Applications', href: '/dashboard/jobs' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col sticky top-0">
      {/* Branding Section */}
      <div className="p-6">
        <Link href="/dashboard" className="block">
          <Image 
            src="/webwrite-logo.webp" 
            alt="Smiloe Group Logo" 
            width={140} 
            height={40} 
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-between px-3 py-2 rounded-md transition-colors group",
                isActive 
                  ? "bg-gray-50 text-black font-medium" 
                  : "text-gray-500 hover:text-black hover:bg-gray-50"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className={cn("w-4 h-4", isActive ? "text-black" : "text-gray-400 group-hover:text-black")} />
                <span className="text-sm">{item.label}</span>
              </div>
              {isActive && <ChevronRight className="w-3 h-3 text-gray-400" />}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-gray-50">
        <div className="flex items-center gap-3 px-3 py-2 mb-2">
          <img src="/profile-avatar-1.png" alt="Profile" className="w-8 h-8 rounded-full object-cover" />
          <div className="flex flex-col">
            <span className="text-xs font-bold text-black">Admin</span>
            <span className="text-[10px] text-gray-400 font-medium">admin@webwrite.co.in</span>
          </div>
        </div>
        <button onClick={async () => { await supabase.auth.signOut(); router.push('/login'); }} className="flex items-center gap-3 px-3 py-2 w-full text-gray-500 hover:text-red-600 transition-colors rounded-md hover:bg-red-50">
          <LogOut className="w-4 h-4" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
