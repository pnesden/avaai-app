'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AccountPage() {
    const [user, setUser] = useState<any>(null);
    const [credits, setCredits] = useState<number>(0);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();
    const router = useRouter();

    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            setUser(user);
            setCredits(user.user_metadata?.credits || 0);
        }
        setLoading(false);
    };

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push('/');
    };

    if (loading) {
        return (
            <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--accent)] border-r-transparent"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-8">
                Account Settings
            </h1>

            {/* Credit Balance Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-card p-8 mb-6">
                <div className="flex items-center justify-between text-white">
                    <div>
                        <p className="text-sm opacity-90 mb-1">Available Credits</p>
                        <p className="text-5xl font-bold">{credits}</p>
                        <p className="text-sm opacity-90 mt-2">credits remaining</p>
                    </div>
                    <svg className="w-16 h-16 opacity-20" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                </div>
                <Link
                    href="/pricing"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-gray-100 transition-colors"
                >
                    Get More Credits
                </Link>
            </div>

            {/* Account Information */}
            <div className="bg-white rounded-lg shadow-card p-6 mb-6">
                <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                    Account Information
                </h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                            Email
                        </label>
                        <p className="text-[var(--text-primary)]">{user?.email}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                            Account Created
                        </label>
                        <p className="text-[var(--text-primary)]">
                            {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-card p-6 mb-6">
                <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                    Quick Actions
                </h2>
                <div className="space-y-3">
                    <Link
                        href="/generate"
                        className="flex items-center justify-between p-4 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] hover:bg-blue-50 transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-[var(--text-primary)]">Generate Video</p>
                                <p className="text-sm text-[var(--text-secondary)]">Create a new AI video</p>
                            </div>
                        </div>
                        <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>

                    <Link
                        href="/history"
                        className="flex items-center justify-between p-4 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] hover:bg-blue-50 transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-[var(--text-primary)]">Video History</p>
                                <p className="text-sm text-[var(--text-secondary)]">View your generated videos</p>
                            </div>
                        </div>
                        <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>

                    <Link
                        href="/pricing"
                        className="flex items-center justify-between p-4 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] hover:bg-blue-50 transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-[var(--text-primary)]">Buy Credits</p>
                                <p className="text-sm text-[var(--text-secondary)]">View pricing and packages</p>
                            </div>
                        </div>
                        <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Sign Out */}
            <div className="bg-white rounded-lg shadow-card p-6">
                <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                    Account Actions
                </h2>
                <button
                    onClick={handleSignOut}
                    className="w-full rounded-lg border-2 border-red-200 px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
}
