
'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { Users, TrendingUp, ArrowUpRight, GraduationCap, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SupabaseApplication } from '@/lib/types';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const dynamic = 'force-dynamic';

type AppWithType = SupabaseApplication & { _type: 'Internship' | 'Job' };

export default function Dashboard() {
  const [internshipApps, setInternshipApps] = useState<SupabaseApplication[]>([]);
  const [jobApps, setJobApps] = useState<SupabaseApplication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/internship-applications').then(r => r.json()),
      fetch('/api/job-applications').then(r => r.json()),
    ]).then(([internships, jobs]) => {
      setInternshipApps(Array.isArray(internships) ? internships : []);
      setJobApps(Array.isArray(jobs) ? jobs : []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const allApps: AppWithType[] = [
    ...internshipApps.map(a => ({ ...a, _type: 'Internship' as const })),
    ...jobApps.map(a => ({ ...a, _type: 'Job' as const })),
  ];

  const todayCount = allApps.filter(a =>
    new Date(a.created_at).toDateString() === new Date().toDateString()
  ).length;

  const totalCount = allApps.length;
  const internshipCount = internshipApps.length;
  const jobCount = jobApps.length;

  const dailyData = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    const dateStr = date.toDateString();
    return {
      date: dateStr.slice(4, 10),
      applications: allApps.filter(a => new Date(a.created_at).toDateString() === dateStr).length,
    };
  });

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload?.length) {
      return (
        <div className="bg-white border border-gray-100 shadow-md rounded-lg px-3 py-2 text-xs">
          <p className="text-gray-500 mb-0.5">{label}</p>
          <p className="font-bold text-black">{payload[0].value} apps</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col min-h-screen pb-20">
      <Header title="Dashboard" />
      
      <div className="px-8 py-8 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Applications', value: totalCount.toString(), icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', delay: '0' },
            { label: "Today's Apps", value: todayCount.toString(), icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-50', delay: '75' },
            { label: 'Internships', value: internshipCount.toString(), icon: GraduationCap, color: 'text-emerald-600', bg: 'bg-emerald-50', delay: '150' },
            { label: 'Job Roles', value: jobCount.toString(), icon: Briefcase, color: 'text-purple-600', bg: 'bg-purple-50', delay: '225' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group animate-fadeIn [animation-fill-mode:both]" style={{ animationDelay: `${stat.delay}ms` }}>
              <div className="flex items-center justify-between mb-3">
                <div className={cn("p-2 rounded-lg transition-all duration-300 group-hover:scale-110", stat.bg)}>
                  <stat.icon className={cn("w-4 h-4", stat.color)} />
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-300 transition-all duration-300 group-hover:text-gray-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-black tracking-tight transition-all duration-300">
                  {loading ? (
                    <span className="inline-block w-8 h-6 bg-gray-100 rounded animate-pulse" />
                  ) : stat.value}
                </span>
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {!loading && (
          <div className="grid grid-cols-1 gap-6 animate-fadeIn [animation-fill-mode:both]" style={{ animationDelay: '300ms' }}>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 transition-all duration-300 hover:shadow-md">
              <h3 className="text-sm font-bold text-black mb-4">Weekly Application Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={dailyData}>
                  <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.12} />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} allowDecimals={false} />
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#e5e7eb', strokeWidth: 1 }} />
                  <Area type="monotone" dataKey="applications" stroke="#3b82f6" strokeWidth={2} fill="url(#areaGrad)" dot={false} activeDot={{ r: 4, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
