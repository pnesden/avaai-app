'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const supabase = createClient();

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        credits: 100, // Award 100 free credits
                    },
                },
            });

            if (error) throw error;

            if (data.user) {
                // Redirect to generate page after successful signup
                router.push('/generate');
            }
        } catch (error: any) {
            setError(error.message || 'An error occurred during signup');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[var(--background-secondary)] px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-lg shadow-card p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-[var(--text-primary)]">Create account</h2>
                        <p className="mt-2 text-sm text-[var(--text-secondary)]">
                            Get started with 100 free credits
                        </p>
                    </div>

                    <form onSubmit={handleSignUp} className="space-y-6">
                        {error && (
                            <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800">
                                {error}
                            </div>
                        )}

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full rounded-lg border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full rounded-lg border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                                placeholder="••••••••"
                            />
                            <p className="mt-2 text-xs text-[var(--text-secondary)]">
                                Must be at least 6 characters
                            </p>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full rounded-full bg-[var(--accent)] px-4 py-3 text-base font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Creating account...' : 'Sign up'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-[var(--text-secondary)]">
                            Already have an account?{' '}
                            <Link href="/login" className="font-medium text-[var(--accent)] hover:text-[var(--accent-hover)]">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
