
'use client';

import React from 'react';
import Header from '@/components/Header';
import { Users, Clock, CheckCircle2, XCircle, TrendingUp, ArrowUpRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { MOCK_APPLICANTS } from '@/lib/data';
import { cn } from '@/lib/utils';

const STATS = [
  { label: 'Total Applications', value: '245', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Pending Review', value: '31', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
  { label: 'Approved', value: '112', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Rejected', value: '102', icon: XCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
  { label: "Today's Apps", value: '8', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-50' },
];

export default function Dashboard() {
  const recentApplications = MOCK_APPLICANTS.slice(0, 5);

  return (
    <div className="flex flex-col min-h-screen pb-20">
      <Header title="Dashboard" />
      
      <div className="px-8 py-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-center justify-between mb-3">
                <div className={cn("p-2 rounded-lg", stat.bg)}>
                  <stat.icon className={cn("w-4 h-4", stat.color)} />
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-black tracking-tight">{stat.value}</span>
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-50 flex items-center justify-between">
              <h2 className="text-base font-bold text-black">Recent Applications</h2>
              <Link 
                href="/dashboard/applications" 
                className="text-xs font-bold text-gray-400 hover:text-black flex items-center gap-1 transition-colors"
              >
                View all applications
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-6 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Applicant</th>
                    <th className="px-6 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Role</th>
                    <th className="px-6 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Applied</th>
                    <th className="px-6 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Status</th>
                    <th className="px-6 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {recentApplications.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50/30 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-black">{app.fullName}</span>
                          <span className="text-xs text-gray-400">{app.email}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600 font-medium">{app.appliedPosition}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-500">{new Date(app.appliedDate).toLocaleDateString()}</span>
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={app.status} />
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-[10px] font-bold text-gray-400 hover:text-black px-3 py-1 border border-gray-100 rounded-md hover:bg-white transition-all">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    'Pending': 'bg-amber-50 text-amber-700 border-amber-100',
    'Approved': 'bg-emerald-50 text-emerald-700 border-emerald-100',
    'Rejected': 'bg-rose-50 text-rose-700 border-rose-100',
    'Interview Scheduled': 'bg-sky-50 text-sky-700 border-sky-100',
    'Shortlisted': 'bg-purple-50 text-purple-700 border-purple-100',
  };

  return (
    <span className={cn(
      "px-2 py-0.5 rounded-full text-[10px] font-bold border",
      styles[status] || 'bg-gray-50 text-gray-600 border-gray-100'
    )}>
      {status}
    </span>
  );
}
