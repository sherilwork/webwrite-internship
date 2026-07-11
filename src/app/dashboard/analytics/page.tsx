'use client';

import React from 'react';
import Header from '@/components/Header';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { Users, Activity, GraduationCap, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

const MONTHLY_DATA = [
  { name: 'Jan', apps: 40 },
  { name: 'Feb', apps: 30 },
  { name: 'Mar', apps: 65 },
  { name: 'Apr', apps: 45 },
  { name: 'May', apps: 80 },
  { name: 'Jun', apps: 95 },
];

const SKILLS_DATA = [
  { name: 'React', value: 45 },
  { name: 'Node.js', value: 30 },
  { name: 'Python', value: 25 },
  { name: 'UI/UX', value: 15 },
  { name: 'Java', value: 20 },
];

const COLLEGE_DATA = [
  { name: 'IIT Bombay', value: 35 },
  { name: 'BITS Pilani', value: 28 },
  { name: 'DTU', value: 22 },
  { name: 'Anna Univ', value: 18 },
  { name: 'MNIT', value: 15 },
];

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <Header title="Analytics" />
      
      <div className="px-8 py-8 space-y-8">
        {/* Analytics Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Total Applications" value="245" sub="+12% from last month" icon={Users} color="text-blue-600" />
          <StatCard label="Partner Colleges" value="42" sub="+3 this semester" icon={GraduationCap} color="text-emerald-600" />
          <StatCard label="Roles Posted" value="12" sub="Active openings" icon={Briefcase} color="text-amber-600" />
          <StatCard label="System Uptime" value="99.9%" sub="All systems normal" icon={Activity} color="text-indigo-600" />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ChartCard title="Applications Trend" description="Total applications received per month">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={MONTHLY_DATA}>
                  <defs>
                    <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#000" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#000" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#999' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#999' }} dx={-10} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: '1px solid #f0f0f0', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontSize: '12px' }} 
                  />
                  <Area type="monotone" dataKey="apps" stroke="#000" strokeWidth={2} fillOpacity={1} fill="url(#colorApps)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          <ChartCard title="Skills Distribution" description="Primary skills reported by applicants">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SKILLS_DATA} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#666' }} />
                  <Tooltip 
                    cursor={{ fill: '#fafafa' }}
                    contentStyle={{ borderRadius: '12px', border: '1px solid #f0f0f0', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontSize: '12px' }} 
                  />
                  <Bar dataKey="value" fill="#000" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          <ChartCard title="Top Colleges" description="Application volume by institution">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={COLLEGE_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#999' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#999' }} dx={-10} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: '1px solid #f0f0f0', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontSize: '12px' }} 
                  />
                  <Bar dataKey="value" fill="#000" radius={[4, 4, 0, 0]} barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, sub, icon: Icon, color }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
          <Icon className={cn("w-5 h-5", color)} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-black tracking-tight">{value}</span>
        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">{label}</span>
        <span className="text-[10px] text-emerald-500 font-bold mt-2">{sub}</span>
      </div>
    </div>
  );
}

function ChartCard({ title, description, children }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
      <div className="flex flex-col">
        <h3 className="text-sm font-bold text-black">{title}</h3>
        <p className="text-[10px] text-gray-400 font-medium">{description}</p>
      </div>
      {children}
    </div>
  );
}
