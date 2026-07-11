
'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, GraduationCap, TrendingUp, Calendar } from 'lucide-react';

const data = [
  { name: 'Jan', value: 40 },
  { name: 'Feb', value: 30 },
  { name: 'Mar', value: 65 },
  { name: 'Apr', value: 45 },
  { name: 'May', value: 90 },
  { name: 'Jun', value: 80 },
];

const collegeData = [
  { name: 'IIT Bombay', value: 45 },
  { name: 'BITS Pilani', value: 32 },
  { name: 'DTU Delhi', value: 28 },
  { name: 'NIT Trichy', value: 25 },
  { name: 'VIT Vellore', value: 20 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-black tracking-tight mb-2">Analytics</h1>
        <p className="text-muted-foreground text-sm">Insights and trends of the internship program.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Growth Rate', value: '+12.5%', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Avg Applications/Day', value: '14', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Total Applicants', value: '1,284', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { label: 'College Partners', value: '45', icon: GraduationCap, color: 'text-amber-600', bg: 'bg-amber-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white border border-black/[0.05] p-6 rounded-2xl shadow-sm">
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-4", stat.bg)}>
              <stat.icon className={cn("w-5 h-5", stat.color)} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mt-1">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-black/[0.05] shadow-sm">
          <h3 className="text-lg font-black mb-6 uppercase tracking-tight">Applications Over Time</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fontWeight: 600, fill: '#888' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fontWeight: 600, fill: '#888' }} 
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="value" fill="#000" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-black/[0.05] shadow-sm">
          <h3 className="text-lg font-black mb-6 uppercase tracking-tight">Top Partner Colleges</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={collegeData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 11, fontWeight: 600, fill: '#888' }} 
                  width={100}
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="value" fill="#000" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
