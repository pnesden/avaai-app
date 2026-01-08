'use client';

import { useState } from 'react';
import Link from 'next/link';

const MODELS = ['All', 'Sora 2', 'Veo 3.1', 'Runway Gen 3', 'Pika 2.2', 'Kling', 'Luma'];

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

export default function ExamplesPage() {
    const [selectedModel, setSelectedModel] = useState('All');
    const [displayCount, setDisplayCount] = useState(8); // Start with 8 examples

    const filteredExamples = selectedModel === 'All'
        ? EXAMPLE_VIDEOS
        : EXAMPLE_VIDEOS.filter(ex => ex.model === selectedModel);

    const displayedExamples = filteredExamples.slice(0, displayCount);
    const hasMore = displayCount < filteredExamples.length;

    const loadMore = () => {
        setDisplayCount(prev => prev + 8); // Load 8 more at a time
    };

    return (
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-2">
                    Example Videos
                </h1>
                <p className="text-lg text-[var(--text-secondary)]">
                    Explore videos created with different AI models
                </p>
            </div>

            {/* Model Filter */}
            <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
                {MODELS.map((model) => (
                    <button
                        key={model}
                        onClick={() => {
                            setSelectedModel(model);
                            setDisplayCount(8); // Reset to 8 when changing filter
                        }}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${selectedModel === model
                            ? 'bg-[var(--accent)] text-white'
                            : 'bg-white text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent)]'
                            }`}
                    >
                        {model}
                    </button>
                ))}
            </div>

            {/* Examples Grid */}
            {displayedExamples.length === 0 ? (
                <div className="bg-white rounded-lg shadow-card p-12 text-center">
                    <p className="text-[var(--text-secondary)]">
                        No examples for this model yet
                    </p>
                </div>
            ) : (
                <>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayedExamples.map((example) => (
                            <div key={example.id} className="bg-white rounded-lg shadow-card overflow-hidden hover:shadow-float transition-shadow">
                                {/* Video Preview */}
                                <div className="aspect-video bg-gray-100">
                                    <video
                                        src={example.videoUrl}
                                        className="w-full h-full object-cover"
                                        controls
                                        loop
                                    />
                                </div>

                                {/* Details */}
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-medium text-[var(--accent)] bg-blue-50 px-2 py-1 rounded">
                                            {example.model}
                                        </span>
                                        <span className="text-xs text-[var(--text-secondary)]">
                                            {example.aspectRatio}
                                        </span>
                                    </div>
                                    <p className="text-sm text-[var(--text-primary)] line-clamp-2 mb-3">
                                        {example.prompt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold text-[var(--accent)]">
                                            {example.price} credits
                                        </span>
                                        <Link
                                            href={`/generate?prompt=${encodeURIComponent(example.prompt)}&model=${example.model}`}
                                            className="text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                                        >
                                            Clone settings →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    {hasMore && (
                        <div className="mt-8 text-center">
                            <button
                                onClick={loadMore}
                                className="inline-flex items-center justify-center rounded-full border-2 border-[var(--border)] bg-white px-8 py-3 text-base font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                            >
                                Load more examples
                            </button>
                        </div>
                    )}
                </>
            )}

            {/* CTA */}
            <div className="mt-12 text-center">
                <Link
                    href="/generate"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-8 py-3.5 text-base font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors"
                >
                    Create Your Own Video
                </Link>
            </div>
        </div>
    );
}
