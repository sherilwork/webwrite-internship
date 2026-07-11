'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const MENU_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Applications', href: '/dashboard/applications' },
  { icon: BarChart3, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col sticky top-0">
      <div className="p-6">
        <Link href="/dashboard" className="block w-fit group">
          <div className="relative w-8 h-8 overflow-hidden rounded-lg bg-gray-50 border border-gray-100">
            <Image 
              src="/webwrite-logo.webp" 
              alt="Smiloe Group Logo" 
              fill
              className="object-cover"
            />
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4">
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
          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold uppercase">
            SG
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-black">Admin</span>
            <span className="text-[10px] text-gray-400 font-medium">admin@smiloegroup.com</span>
          </div>
        </div>
        <button className="flex items-center gap-3 px-3 py-2 w-full text-gray-500 hover:text-red-600 transition-colors rounded-md hover:bg-red-50">
          <LogOut className="w-4 h-4" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
