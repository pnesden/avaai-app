'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
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
    },
    {
        id: 2,
        model: 'Veo 3.1',
        prompt: 'Aerial view of winding mountain road through snowy landscape',
        videoUrl: '/assets/gallery/aerial-road.mp4',
        aspectRatio: '16:9',
        price: 12,
    },
    {
        id: 3,
        model: 'Runway Gen 3',
        prompt: 'Futuristic robot with glowing eyes looking at camera',
        videoUrl: '/assets/gallery/robot-eyes.mp4',
        aspectRatio: '1:1',
        price: 10,
    },
    {
        id: 4,
        model: 'Pika 2.2',
        prompt: 'Athlete swimming underwater with dynamic camera angles',
        videoUrl: '/assets/gallery/swimmer.mp4',
        aspectRatio: '16:9',
        price: 8,
    },
    {
        id: 5,
        model: 'Kling',
        prompt: 'Drone footage of snowy mountain landscape with smooth motion',
        videoUrl: '/assets/gallery/drone-snow.mp4',
        aspectRatio: '16:9',
        price: 10,
    },
    {
        id: 6,
        model: 'Luma',
        prompt: 'Parking lot aerial view in portrait mode with cars moving',
        videoUrl: '/assets/gallery/parking-portrait.mp4',
        aspectRatio: '9:16',
        price: 9,
    },
    {
        id: 7,
        model: 'Runway Gen 3',
        prompt: 'Robot character turning head with cinematic lighting',
        videoUrl: '/assets/gallery/robot-look.mp4',
        aspectRatio: '1:1',
        price: 10,
    },
    {
        id: 8,
        model: 'Sora 2',
        prompt: 'Cinematic scene showcasing advanced AI video generation',
        videoUrl: '/hero/sora2.mp4',
        aspectRatio: '16:9',
        price: 15,
    },
    {
        id: 9,
        model: 'Veo 3.1',
        prompt: 'High-quality realistic video with natural motion',
        videoUrl: '/hero/veo3.mp4',
        aspectRatio: '16:9',
        price: 12,
    },
    {
        id: 10,
        model: 'Runway Gen 3',
        prompt: 'Creative video generation with unique style',
        videoUrl: '/hero/runway-gen3.mp4',
        aspectRatio: '16:9',
        price: 10,
    },
    {
        id: 11,
        model: 'Pika 2.2',
        prompt: 'Fast and versatile video generation',
        videoUrl: '/hero/pika-22.mp4',
        aspectRatio: '16:9',
        price: 8,
    },
    {
        id: 12,
        model: 'Pika 1.5',
        prompt: 'Earlier generation Pika with consistent results',
        videoUrl: '/hero/pika-15.mp4',
        aspectRatio: '16:9',
        price: 6,
    },
    {
        id: 13,
        model: 'Luma',
        prompt: 'Dreamlike AI-generated video with smooth animations',
        videoUrl: '/hero/luma-dream.mp4',
        aspectRatio: '16:9',
        price: 9,
    },
    {
        id: 14,
        model: 'Luma',
        prompt: 'Flash video generation with Luma Ray 2',
        videoUrl: '/hero/luma-ray2-flash.mp4',
        aspectRatio: '16:9',
        price: 10,
    },
    {
        id: 15,
        model: 'Minimax Video-01',
        prompt: 'High-quality Chinese AI model with excellent character motion',
        videoUrl: '/hero/minimax-video01.mp4',
        aspectRatio: '16:9',
        price: 11,
    },
];

export default function VideoDetailsPage() {
    const params = useParams();
    const id = Number(params.id);
    const video = EXAMPLE_VIDEOS.find((v) => v.id === id);

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

    return (
        <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
            {/* Back Link */}
            <Link href="/examples" className="inline-flex items-center text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] mb-8 transition-colors">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to examples
            </Link>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column: Video Player */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden ring-1 ring-black/5">
                        <div className={`w-full ${video.aspectRatio === '9:16' ? 'aspect-[9/16] max-w-sm mx-auto' : video.aspectRatio === '1:1' ? 'aspect-square max-w-xl mx-auto' : 'aspect-video'}`}>
                            <VideoPlayer src={video.videoUrl} className="w-full h-full" />
                        </div>
                    </div>
                </div>

                {/* Right Column: Details */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-xl shadow-card p-6 border border-[var(--border)]">
                        <div className="flex items-center justify-between mb-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {video.model}
                            </span>
                            <span className="text-sm text-[var(--text-secondary)]">
                                {video.aspectRatio}
                            </span>
                        </div>

                        <h1 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                            Video Details
                        </h1>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-2">Prompt</h3>
                                <p className="text-sm text-[var(--text-primary)] bg-gray-50 p-3 rounded-md border border-gray-100">
                                    {video.prompt}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-2">Cost</h3>
                                <p className="text-lg font-bold text-[var(--accent)]">
                                    {video.price} credits
                                </p>
                            </div>

                            <div className="pt-4 mt-4 border-t border-[var(--border)]">
                                <Link
                                    href={`/generate?prompt=${encodeURIComponent(video.prompt)}&model=${video.model}`}
                                    className="w-full inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-hover)] transition-all shadow-sm hover:shadow-md"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    Clone Settings
                                </Link>
                                <p className="text-xs text-center text-[var(--text-secondary)] mt-3">
                                    Use this prompt and model as a starting point
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
