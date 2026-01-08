'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import Link from 'next/link';

interface VideoJob {
    id: string;
    prompt: string;
    model: string;
    status: 'pending' | 'processing' | 'completed' | 'failed';
    videoUrl?: string;
    createdAt: string;
    price: number;
}

export default function HistoryPage() {
    const [jobs, setJobs] = useState<VideoJob[]>([]);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        loadJobs();
    }, []);

    const loadJobs = async () => {
        // In a real implementation, this would fetch from Supabase database
        // For now, we'll show placeholder data
        setLoading(false);

        // Placeholder - would be replaced with actual database query
        setJobs([]);
    };

    if (loading) {
        return (
            <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--accent)] border-r-transparent"></div>
                    <p className="mt-4 text-[var(--text-secondary)]">Loading your videos...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-[var(--text-primary)]">Video History</h1>
                    <p className="mt-2 text-lg text-[var(--text-secondary)]">
                        View and manage your generated videos
                    </p>
                </div>
                <Link
                    href="/generate"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors"
                >
                    Generate New Video
                </Link>
            </div>

            {jobs.length === 0 ? (
                <div className="bg-white rounded-lg shadow-card p-12 text-center">
                    <svg
                        className="mx-auto h-16 w-16 text-[var(--text-secondary)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                    </svg>
                    <h3 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">
                        No videos yet
                    </h3>
                    <p className="mt-2 text-[var(--text-secondary)]">
                        Get started by generating your first AI video
                    </p>
                    <Link
                        href="/generate"
                        className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors"
                    >
                        Generate Video
                    </Link>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job) => (
                        <div key={job.id} className="bg-white rounded-lg shadow-card overflow-hidden hover:shadow-float transition-shadow">
                            {/* Video Preview */}
                            <div className="aspect-video bg-gray-100 relative">
                                {job.status === 'completed' && job.videoUrl ? (
                                    <video
                                        src={job.videoUrl}
                                        className="w-full h-full object-cover"
                                        controls
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        {job.status === 'pending' && (
                                            <div className="text-center">
                                                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--accent)] border-r-transparent mb-2"></div>
                                                <p className="text-sm text-[var(--text-secondary)]">Pending...</p>
                                            </div>
                                        )}
                                        {job.status === 'processing' && (
                                            <div className="text-center">
                                                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--accent)] border-r-transparent mb-2"></div>
                                                <p className="text-sm text-[var(--text-secondary)]">Processing...</p>
                                            </div>
                                        )}
                                        {job.status === 'failed' && (
                                            <div className="text-center text-red-600">
                                                <svg className="mx-auto h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                                <p className="text-sm">Failed</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Job Details */}
                            <div className="p-4">
                                <div className="flex items-start justify-between mb-2">
                                    <span className="text-xs font-medium text-[var(--accent)] bg-blue-50 px-2 py-1 rounded">
                                        {job.model}
                                    </span>
                                    <span className="text-xs text-[var(--text-secondary)]">
                                        {job.price} credits
                                    </span>
                                </div>
                                <p className="text-sm text-[var(--text-primary)] line-clamp-2 mb-2">
                                    {job.prompt}
                                </p>
                                <p className="text-xs text-[var(--text-secondary)]">
                                    {new Date(job.createdAt).toLocaleDateString()}
                                </p>

                                {job.status === 'completed' && job.videoUrl && (
                                    <button className="mt-3 w-full rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors">
                                        Download
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
