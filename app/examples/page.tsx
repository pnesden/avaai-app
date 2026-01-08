'use client';

import { useState } from 'react';
import Link from 'next/link';

const MODELS = ['All', 'Sora 2', 'Veo 3.1', 'Runway Gen 3', 'Pika 2.2', 'Kling', 'Luma'];

const EXAMPLE_VIDEOS = [
    {
        id: 1,
        model: 'Sora 2',
        prompt: 'A serene lake at sunset with mountains in the background, drone camera movement',
        videoUrl: '/assets/examples/example-1.mp4',
        aspectRatio: '16:9',
        price: 15,
    },
    {
        id: 2,
        model: 'Veo 3.1',
        prompt: 'City street at night with neon lights and rain, cinematic camera work',
        videoUrl: '/assets/examples/example-2.mp4',
        aspectRatio: '16:9',
        price: 12,
    },
    {
        id: 3,
        model: 'Runway Gen 3',
        prompt: 'Abstract colorful particles flowing and morphing, smooth motion',
        videoUrl: '/assets/examples/example-3.mp4',
        aspectRatio: '1:1',
        price: 10,
    },
];

export default function ExamplesPage() {
    const [selectedModel, setSelectedModel] = useState('All');

    const filteredExamples = selectedModel === 'All'
        ? EXAMPLE_VIDEOS
        : EXAMPLE_VIDEOS.filter(ex => ex.model === selectedModel);

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
                        onClick={() => setSelectedModel(model)}
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
            {filteredExamples.length === 0 ? (
                <div className="bg-white rounded-lg shadow-card p-12 text-center">
                    <p className="text-[var(--text-secondary)]">
                        No examples for this model yet
                    </p>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredExamples.map((example) => (
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
