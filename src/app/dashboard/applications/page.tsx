
'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import { 
  Filter, 
  Download, 
  RefreshCcw, 
  Search, 
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Eye,
  Check,
  X
} from 'lucide-react';
import { MOCK_APPLICANTS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ApplicationStatus } from '@/lib/types';

const TABS: (ApplicationStatus | 'All')[] = [
  'All',
  'Pending',
  'Shortlisted',
  'Interview Scheduled',
  'Approved',
  'Rejected'
];

export default function ApplicationsPage() {
  const [activeTab, setActiveTab] = useState<ApplicationStatus | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = MOCK_APPLICANTS.filter(app => {
    const matchesTab = activeTab === 'All' || app.status === activeTab;
    const matchesSearch = app.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.college.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Applications" />
      
      <div className="px-8 py-8 space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 p-1 bg-gray-100/50 rounded-lg border border-gray-100 w-fit">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all",
                  activeTab === tab 
                    ? "bg-white text-black shadow-sm border border-gray-100" 
                    : "text-gray-400 hover:text-gray-600"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Quick search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-1.5 bg-white border border-gray-200 rounded-lg text-xs outline-none w-full sm:w-48 focus:border-black transition-colors"
              />
            </div>
            <button className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-500">
              <Filter className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors text-xs font-bold">
              <Download className="w-3.5 h-3.5" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-6 py-4 w-10">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Applicant</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">College</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Applied Role</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Date</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50/30 transition-colors group">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-black text-gray-500">
                          {app.fullName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-black group-hover:underline cursor-pointer decoration-gray-300 underline-offset-2">{app.fullName}</span>
                          <span className="text-[10px] text-gray-400 font-medium">{app.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-gray-600 font-medium">{app.college}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-gray-600 font-bold">{app.appliedPosition}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[10px] text-gray-400 font-medium">{new Date(app.appliedDate).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })}</span>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={app.status} />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all">
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-all">
                          <Check className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-all">
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-50 flex items-center justify-between">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              Showing {filtered.length} of {MOCK_APPLICANTS.length} applicants
            </span>
            <div className="flex items-center gap-2">
              <button className="p-1.5 border border-gray-100 rounded-md text-gray-300 cursor-not-allowed">
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button className="p-1.5 border border-gray-100 rounded-md text-gray-400 hover:text-black hover:bg-gray-50 transition-all">
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    'Pending': 'bg-amber-50 text-amber-600 border-amber-100',
    'Approved': 'bg-emerald-50 text-emerald-600 border-emerald-100',
    'Rejected': 'bg-rose-50 text-rose-600 border-rose-100',
    'Interview Scheduled': 'bg-sky-50 text-sky-600 border-sky-100',
    'Shortlisted': 'bg-purple-50 text-purple-600 border-purple-100',
  };

  return (
    <span className={cn(
      "px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border",
      styles[status] || 'bg-gray-50 text-gray-400 border-gray-100'
    )}>
      {status}
    </span>
  );
}
