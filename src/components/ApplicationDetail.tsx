
'use client';

import { X, ExternalLink, FileText } from 'lucide-react';
import type { SupabaseApplication } from '@/lib/types';

interface Props {
  app: SupabaseApplication;
  onClose: () => void;
}

export default function ApplicationDetail({ app, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white shadow-2xl overflow-y-auto animate-slide-in">
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-sm font-black uppercase tracking-widest text-gray-900">Application Details</h2>
          <button onClick={onClose} className="p-1.5 rounded-md hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-lg font-black text-gray-500">
              {app.full_name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{app.full_name}</h3>
              <p className="text-sm text-gray-500">{app.role}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <DetailField label="Email" value={app.email} />
            <DetailField label="Mobile" value={app.mobile} />
            <DetailField label="City" value={app.city} />
            <DetailField label="Application ID" value={app.application_id || '—'} />
            <DetailField label="Applied On" value={new Date(app.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} />
          </div>

          {(app.portfolio_url || app.linkedin_url) && (
            <div className="space-y-2">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Links</h4>
              <div className="flex flex-wrap gap-2">
                {app.portfolio_url && (
                  <a href={app.portfolio_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-700 hover:bg-gray-200 transition-colors">
                    <ExternalLink className="w-3 h-3" />
                    Portfolio
                  </a>
                )}
                {app.linkedin_url && (
                  <a href={app.linkedin_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-700 hover:bg-gray-200 transition-colors">
                    <ExternalLink className="w-3 h-3" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          )}

          {app.notes && (
            <div className="space-y-2">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Notes</h4>
              <p className="text-sm text-gray-600 bg-gray-50 rounded-xl p-4">{app.notes}</p>
            </div>
          )}

          {app.resume_url && (
            <div className="space-y-2">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Resume</h4>
              <a href={app.resume_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 bg-black text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition-colors">
                <FileText className="w-4 h-4" />
                View Resume
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DetailField({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{label}</span>
      <p className="text-sm font-medium text-gray-900 break-words">{value}</p>
    </div>
  );
}
