
'use client';

import { useState } from 'react';
import { 
  Download, 
  RefreshCcw, 
  Search, 
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Eye,
  Trash2
} from 'lucide-react';
import { MOCK_APPLICANTS } from '@/lib/mock-data';
import Link from 'next/link';

export default function ApplicationsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = MOCK_APPLICANTS.filter(app => {
    return app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           app.college.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight mb-2">Applications</h1>
          <p className="text-muted-foreground text-sm">Manage and review all internship applications in one place.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-black/[0.03] hover:bg-black/[0.06] border border-black/[0.05] rounded-lg text-xs font-bold transition-all">
            <Download className="w-3 h-3" /> Export CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-xs font-bold transition-all hover:bg-black/90 shadow-sm">
            <RefreshCcw className="w-3 h-3" /> Refresh
          </button>
        </div>
      </div>

      <div className="bg-white border border-black/[0.05] rounded-2xl shadow-sm">
        <div className="p-4 border-b border-black/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search by name or college..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/[0.02] border border-black/[0.05] rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-black/10 outline-none transition-all"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-black/[0.05] bg-black/[0.01]">
                <th className="px-6 py-4 w-10">
                  <input type="checkbox" className="rounded border-black/[0.1] text-black focus:ring-black" />
                </th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Applicant</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">College</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Role</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Applied Date</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((app) => (
                <tr key={app.id} className="group hover:bg-black/[0.01] transition-colors border-b border-black/[0.03] last:border-0">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="rounded border-black/[0.1] text-black focus:ring-black" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-black/[0.05] flex items-center justify-center text-xs font-black">
                        {app.name.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold">{app.name}</span>
                        <span className="text-[11px] text-muted-foreground">{app.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium">{app.college}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground">{app.role}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground">{app.appliedDate}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link 
                        href={`/applications/${app.id}`}
                        className="p-1.5 rounded-lg text-muted-foreground hover:bg-black/[0.05] hover:text-black transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <button className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg text-muted-foreground hover:bg-black/[0.05] hover:text-black transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-black/[0.05] flex items-center justify-between">
          <p className="text-xs text-muted-foreground font-medium">Showing {filtered.length} of {MOCK_APPLICANTS.length} applicants</p>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg border border-black/[0.05] hover:bg-black/[0.03] transition-all disabled:opacity-30" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center">
              <button className="w-8 h-8 rounded-lg bg-black text-white text-xs font-bold">1</button>
            </div>
            <button className="p-2 rounded-lg border border-black/[0.05] hover:bg-black/[0.03] transition-all disabled:opacity-30" disabled>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
