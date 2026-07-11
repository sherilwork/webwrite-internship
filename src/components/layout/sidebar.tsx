
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: Users, label: 'Applications', href: '/applications' },
  { icon: BarChart3, label: 'Analytics', href: '/analytics' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-black/[0.05] h-screen flex flex-col bg-white sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
          </div>
          <span className="font-bold text-lg tracking-tight">AdminPanel</span>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between px-3 py-2 rounded-lg transition-all group",
                  isActive 
                    ? "bg-black text-white shadow-sm" 
                    : "text-muted-foreground hover:bg-black/[0.03] hover:text-black"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                {isActive && <ChevronRight className="w-3 h-3 opacity-50" />}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-black/[0.05]">
        <div className="flex items-center gap-3 mb-6 p-2 rounded-xl bg-black/[0.02] border border-black/[0.03]">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
            AD
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold">Admin User</span>
            <span className="text-[10px] text-muted-foreground">admin@smiloe.com</span>
          </div>
        </div>
        <button className="flex items-center gap-3 px-3 py-2 w-full text-muted-foreground hover:text-destructive transition-colors rounded-lg hover:bg-destructive/5">
          <LogOut className="w-4 h-4" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
