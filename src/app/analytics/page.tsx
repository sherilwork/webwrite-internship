
'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

const data = [
  { name: 'Jan', value: 40 },
  { name: 'Feb', value: 30 },
  { name: 'Mar', value: 65 },
  { name: 'Apr', value: 45 },
  { name: 'May', value: 90 },
  { name: 'Jun', value: 80 },
];

const statusData = [
  { name: 'Approved', value: 112, color: '#10b981' },
  { name: 'Pending', value: 31, color: '#f59e0b' },
  { name: 'Rejected', value: 102, color: '#ef4444' },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-black tracking-tight mb-2">Analytics</h1>
        <p className="text-muted-foreground text-sm">Insights and trends of the internship program.</p>
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
          <h3 className="text-lg font-black mb-6 uppercase tracking-tight">Application Status Distribution</h3>
          <div className="h-[300px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col gap-2 ml-4">
              {statusData.map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color }} />
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{s.name} ({s.value})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
