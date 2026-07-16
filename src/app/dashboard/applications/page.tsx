
'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Eye,
  Trash2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SupabaseApplication } from '@/lib/types';
import ApplicationDetail from '@/components/ApplicationDetail';

export const dynamic = 'force-dynamic';

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<SupabaseApplication[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState<SupabaseApplication | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<SupabaseApplication | null>(null);

  useEffect(() => {
    fetch('/api/internship-applications')
      .then(r => r.json())
      .then(d => { setApplications(Array.isArray(d) ? d : []); setLoading(false) })
      .catch(() => setLoading(false))
  }, []);

  const filtered = applications.filter(app => {
    const q = searchQuery.toLowerCase();
    return app.full_name.toLowerCase().includes(q) ||
           app.city.toLowerCase().includes(q) ||
           app.email.toLowerCase().includes(q) ||
           app.role.toLowerCase().includes(q) ||
           (app.application_id?.toLowerCase() || '').includes(q);
  });

  const handleDelete = async (id: number) => {
    await fetch(`/api/internship-applications/${id}`, { method: 'DELETE' });
    setApplications(prev => prev.filter(a => a.id !== id));
  };

  const handleDeleteConfirm = () => {
    if (!confirmDelete) return;
    handleDelete(confirmDelete.id);
    setConfirmDelete(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Internship Applications" />
      
      <div className="px-8 py-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Quick search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-1.5 bg-white border border-gray-200 rounded-lg text-xs outline-none w-full sm:w-64 focus:border-black transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">App ID</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Applicant</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">City</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Applied Role</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Date</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Details</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {loading ? (
                  <tr><td colSpan={7} className="px-6 py-8 text-center text-sm text-gray-400">Loading...</td></tr>
                ) : filtered.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50/30 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="text-xs font-bold text-black">{app.application_id || '—'}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-black text-gray-500">
                          {app.full_name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-black group-hover:underline cursor-pointer decoration-gray-300 underline-offset-2">{app.full_name}</span>
                          <span className="text-[10px] text-gray-400 font-medium">{app.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-gray-600 font-medium">{app.city}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-gray-600 font-bold">{app.role}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[10px] text-gray-400 font-medium">
                        {new Date(app.created_at).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors" title="View Details" onClick={() => setSelectedApp(app)}>
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-1.5 rounded-md text-red-400 hover:text-red-600 hover:bg-red-50 transition-colors" title="Delete" onClick={() => setConfirmDelete(app)}>
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t border-gray-50 flex items-center justify-between">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              {loading ? 'Loading...' : `Showing ${filtered.length} of ${applications.length} applicants`}
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

      {selectedApp && (
        <ApplicationDetail app={selectedApp} onClose={() => setSelectedApp(null)} />
      )}

      {confirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/20" onClick={() => setConfirmDelete(null)} />
          <div className="relative bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full mx-4">
            <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-2">Confirm Delete</h3>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to permanently delete <strong>{confirmDelete.full_name}</strong>'s application?
            </p>
            <div className="flex items-center gap-3 justify-end">
              <button onClick={() => setConfirmDelete(null)} className="px-4 py-2 text-xs font-bold text-gray-500 hover:text-gray-700 transition-colors">
                Cancel
              </button>
              <button onClick={handleDeleteConfirm} className="px-4 py-2 text-xs font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
