'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function Header() {
    const [user, setUser] = useState<any>(null);
    const [credits, setCredits] = useState<number | null>(null);
    const supabase = createClient();
    const router = useRouter();

    useEffect(() => {
        // Get initial user
        supabase.auth.getUser().then(({ data: { user } }) => {
            setUser(user);
            if (user) {
                setCredits(user.user_metadata?.credits || 0);
            }
        });

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
            if (session?.user) {
                setCredits(session.user.user_metadata?.credits || 0);
            } else {
                setCredits(null);
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push('/');
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Image
                        src="/branding/favicon.png"
                        alt="Avaai"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                    />
                    <span className="text-2xl font-semibold text-[var(--text-primary)]">
                        Avaai
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link
                        href="/models"
                        className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                        Models
                    </Link>
                    <Link
                        href="/examples"
                        className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                        Examples
                    </Link>
                    <Link
                        href="/pricing"
                        className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="/docs"
                        className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                        Docs
                    </Link>
                </nav>

                {/* Right Side - Auth & Credits */}
                <div className="flex items-center gap-4">
                    {user ? (
                        <>
                            {/* Credits Display */}
                            {credits !== null && (
                                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200">
                                    <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm font-semibold text-[var(--accent)]">{credits}</span>
                                </div>
                            )}

                            {/* User Menu */}
                            <Link
                                href="/history"
                                className="hidden sm:inline-flex text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                            >
                                History
                            </Link>
                            <Link
                                href="/account"
                                className="hidden sm:inline-flex text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                            >
                                Account
                            </Link>
                            <button
                                onClick={handleSignOut}
                                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                            >
                                Sign out
                            </button>
                            <Link
                                href="/generate"
                                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors shadow-sm"
                            >
                                Generate
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="hidden sm:inline-flex text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                            >
                                Log in
                            </Link>
                            <Link
                                href="/generate"
                                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors shadow-sm"
                            >
                                Start a render
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
