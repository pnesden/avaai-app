'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import VideoPlayer from '@/components/VideoPlayer';

// Mock data - should be shared or fetched from DB in real app
const EXAMPLE_VIDEOS = [
    {
        id: 1,
        model: 'Sora 2',
        prompt: 'A serene beach with crashing waves at sunset, drone camera movement',
        videoUrl: '/assets/gallery/adraga-beach.mp4',
        aspectRatio: '16:9',
        price: 15,
        duration: '10s',
        created: '2024-01-08',
    },
    {
        id: 2,
        model: 'Veo 3.1',
        prompt: 'Aerial view of winding mountain road through snowy landscape',
        videoUrl: '/assets/gallery/aerial-road.mp4',
        aspectRatio: '16:9',
        price: 12,
        duration: '8s',
        created: '2024-01-08',
    },
    {
        id: 3,
        model: 'Runway Gen 3',
        prompt: 'Futuristic robot with glowing eyes looking at camera',
        videoUrl: '/assets/gallery/robot-eyes.mp4',
        aspectRatio: '1:1',
        price: 10,
        duration: '6s',
        created: '2024-01-07',
    },
    {
        id: 4,
        model: 'Pika 2.2',
        prompt: 'Athlete swimming underwater with dynamic camera angles',
        videoUrl: '/assets/gallery/swimmer.mp4',
        aspectRatio: '16:9',
        price: 8,
        duration: '8s',
        created: '2024-01-07',
    },
    {
        id: 5,
        model: 'Kling',
        prompt: 'Drone footage of snowy mountain landscape with smooth motion',
        videoUrl: '/assets/gallery/drone-snow.mp4',
        aspectRatio: '16:9',
        price: 10,
        duration: '10s',
        created: '2024-01-06',
    },
    {
        id: 6,
        model: 'Luma',
        prompt: 'Parking lot aerial view in portrait mode with cars moving',
        videoUrl: '/assets/gallery/parking-portrait.mp4',
        aspectRatio: '9:16',
        price: 9,
        duration: '8s',
        created: '2024-01-06',
    },
    {
        id: 7,
        model: 'Runway Gen 3',
        prompt: 'Robot character turning head with cinematic lighting',
        videoUrl: '/assets/gallery/robot-look.mp4',
        aspectRatio: '1:1',
        price: 10,
        duration: '6s',
        created: '2024-01-05',
    },
    {
        id: 8,
        model: 'Sora 2',
        prompt: 'Cinematic scene showcasing advanced AI video generation',
        videoUrl: '/hero/sora2.mp4',
        aspectRatio: '16:9',
        price: 15,
        duration: '10s',
        created: '2024-01-05',
    },
    {
        id: 9,
        model: 'Veo 3.1',
        prompt: 'High-quality realistic video with natural motion',
        videoUrl: '/hero/veo3.mp4',
        aspectRatio: '16:9',
        price: 12,
        duration: '8s',
        created: '2024-01-04',
    },
    {
        id: 10,
        model: 'Runway Gen 3',
        prompt: 'Creative video generation with unique style',
        videoUrl: '/hero/runway-gen3.mp4',
        aspectRatio: '16:9',
        price: 10,
        duration: '8s',
        created: '2024-01-04',
    },
    {
        id: 11,
        model: 'Pika 2.2',
        prompt: 'Fast and versatile video generation',
        videoUrl: '/hero/pika-22.mp4',
        aspectRatio: '16:9',
        price: 8,
        duration: '6s',
        created: '2024-01-03',
    },
    {
        id: 12,
        model: 'Pika 1.5',
        prompt: 'Earlier generation Pika with consistent results',
        videoUrl: '/hero/pika-15.mp4',
        aspectRatio: '16:9',
        price: 6,
        duration: '6s',
        created: '2024-01-03',
    },
    {
        id: 13,
        model: 'Luma',
        prompt: 'Dreamlike AI-generated video with smooth animations',
        videoUrl: '/hero/luma-dream.mp4',
        aspectRatio: '16:9',
        price: 9,
        duration: '8s',
        created: '2024-01-02',
    },
    {
        id: 14,
        model: 'Luma',
        prompt: 'Flash video generation with Luma Ray 2',
        videoUrl: '/hero/luma-ray2-flash.mp4',
        aspectRatio: '16:9',
        price: 10,
        duration: '8s',
        created: '2024-01-02',
    },
    {
        id: 15,
        model: 'Minimax Video-01',
        prompt: 'High-quality Chinese AI model with excellent character motion',
        videoUrl: '/hero/minimax-video01.mp4',
        aspectRatio: '16:9',
        price: 11,
        duration: '10s',
        created: '2024-01-01',
    },
];

export default function VideoDetailsPage() {
    const params = useParams();
    const id = Number(params.id);
    const video = EXAMPLE_VIDEOS.find((v) => v.id === id);
    const [copied, setCopied] = useState(false);

    if (!video) {
        return (
            <div className="container mx-auto px-4 py-32 text-center">
                <h1 className="text-2xl font-bold mb-4">Video not found</h1>
                <Link href="/examples" className="text-[var(--accent)] hover:underline">
                    Return to examples
                </Link>
            </div>
        );
    }

    const copyPrompt = () => {
        navigator.clipboard.writeText(video.prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Back Link */}
                <Link
                    href="/examples"
                    className="inline-flex items-center text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] mb-6 transition-colors"
                >
                    ← BACK
                </Link>

                {/* Page Header */}
                <div className="mb-6">
                    <p className="text-xs uppercase tracking-wide text-[var(--text-secondary)] mb-2">
                        WAN 2.6 TEXT, IMAGE & REFERENCE TO VIDEO
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight">
                        {video.prompt}
                    </h1>
                    <p className="text-sm text-[var(--text-secondary)] mt-2">
                        This video was generated with {video.model}. <Link href="/models" className="text-[var(--accent)] hover:underline">Browse how to create similar renders below</Link>
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2 space-y-4">
                        {/* Prompt Card */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                                    PROMPT
                                </h3>
                                <button
                                    onClick={copyPrompt}
                                    className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
                                >
                                    {copied ? (
                                        <>
                                            <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                            COPY PROMPT
                                        </>
                                    )}
                                </button>
                            </div>
                            <p className="text-sm text-[var(--text-primary)] leading-relaxed">
                                {video.prompt}
                            </p>
                        </div>

                        {/* Engine Card */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h3 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-3">
                                ENGINE
                            </h3>
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1">{video.model}</h4>
                                    <p className="text-sm text-[var(--text-secondary)]">
                                        Advanced AI video generation engine
                                    </p>
                                </div>
                                <Link
                                    href="/models"
                                    className="text-xs font-medium text-[var(--accent)] hover:underline whitespace-nowrap"
                                >
                                    Open model page →
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="text-[var(--text-secondary)]">Cost:</span>
                                    <span className="ml-2 font-semibold text-[var(--text-primary)]">${(video.price * 0.1).toFixed(2)}</span>
                                </div>
                                <div>
                                    <span className="text-[var(--text-secondary)]">Duration:</span>
                                    <span className="ml-2 font-semibold text-[var(--text-primary)]">{video.duration}</span>
                                </div>
                                <div>
                                    <span className="text-[var(--text-secondary)]">Created:</span>
                                    <span className="ml-2 font-semibold text-[var(--text-primary)]">{video.created}</span>
                                </div>
                                <div>
                                    <span className="text-[var(--text-secondary)]">Audio:</span>
                                    <span className="ml-2 font-semibold text-[var(--text-primary)]">No</span>
                                </div>
                            </div>
                        </div>

                        {/* Create Your Own Card */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-sm border border-blue-100 p-6">
                            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                                Want to create a video like this?
                            </h3>
                            <p className="text-sm text-[var(--text-secondary)] mb-4">
                                Start a render from this prompt or load it in the workspace to remix with your preferred engine, duration, or audio.
                            </p>
                            <Link
                                href={`/generate?prompt=${encodeURIComponent(video.prompt)}&model=${video.model}`}
                                className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-hover)] transition-all shadow-sm hover:shadow-md"
                            >
                                START A RENDER →
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Video Player */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden sticky top-8">
                            <div className={`w-full ${video.aspectRatio === '9:16' ? 'aspect-[9/16]' : video.aspectRatio === '1:1' ? 'aspect-square' : 'aspect-video'}`}>
                                <VideoPlayer src={video.videoUrl} className="w-full h-full" />
                            </div>
                            <div className="p-4 border-t border-gray-200">
                                <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
                                    <span>{video.aspectRatio}</span>
                                    <span>{video.duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
