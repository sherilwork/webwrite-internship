
'use client';

import { 
  Users, 
  CalendarDays,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Activity
} from 'lucide-react';
import { STATS, MOCK_APPLICANTS } from '@/lib/mock-data';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const statCards = [
  { label: 'Total Applications', value: STATS.total, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: "Today's Applications", value: STATS.today, icon: CalendarDays, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { label: 'Active Openings', value: STATS.active, icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Partner Colleges', value: STATS.colleges, icon: GraduationCap, color: 'text-amber-600', bg: 'bg-amber-50' },
];

export default function Dashboard() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-black tracking-tight mb-2">Dashboard</h1>
        <p className="text-muted-foreground text-sm">Welcome back, Admin. Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, i) => (
          <div key={i} className="bg-white border border-black/[0.05] p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group">
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110", stat.bg)}>
              <stat.icon className={cn("w-5 h-5", stat.color)} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mt-1">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black tracking-tight">Recent Applications</h2>
          <Link 
            href="/applications" 
            className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all text-muted-foreground hover:text-black"
          >
            See All Applications <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="bg-white border border-black/[0.05] rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-black/[0.05] bg-black/[0.01]">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Name</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Position</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Applied On</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_APPLICANTS.slice(0, 5).map((applicant) => (
                <tr key={applicant.id} className="group hover:bg-black/[0.01] transition-colors border-b border-black/[0.03] last:border-0">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-black/[0.05] flex items-center justify-center text-[10px] font-black">
                        {applicant.name.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold">{applicant.name}</span>
                        <span className="text-[11px] text-muted-foreground">{applicant.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium">{applicant.role}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground">{applicant.appliedDate}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link 
                      href={`/applications/${applicant.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-black transition-colors"
                    >
                      View <ExternalLink className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
