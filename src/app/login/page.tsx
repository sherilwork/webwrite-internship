'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) router.replace('/dashboard');
    });
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: userId,
      password,
    });

    setLoading(false);

    if (signInError) {
      setError(signInError.message);
      setPassword('');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <form onSubmit={handleLogin} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-6">
          <div className="flex flex-col items-center gap-3">
            <img src="/profile-avatar-1.png" alt="Profile" className="w-20 h-20 rounded-full object-cover border-2 border-gray-100" />
            <h1 className="text-lg font-bold text-black">Admin Login</h1>
            <p className="text-xs text-gray-400 font-medium">Sign in to your account</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email</label>
              <input
                type="email"
                value={userId}
                onChange={(e) => { setUserId(e.target.value); setError(''); }}
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-black transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Password</label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-black transition-colors pr-10"
                />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {error && (
            <p className="text-xs font-bold text-red-600 text-center">{error}</p>
          )}

          <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 py-2.5 bg-black text-white rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors disabled:opacity-50">
            <LogIn className="w-4 h-4" />
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
