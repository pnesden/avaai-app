'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

const MODELS = [
    { id: 'sora-2', name: 'Sora 2', provider: 'OpenAI', price: 15, description: 'Best for cinematic quality' },
    { id: 'veo-3.1', name: 'Veo 3.1', provider: 'Google', price: 12, description: 'Great for realistic scenes' },
    { id: 'runway-gen3', name: 'Runway Gen 3', provider: 'Runway', price: 10, description: 'Fast and creative' },
    { id: 'pika-2.2', name: 'Pika 2.2', provider: 'Pika Labs', price: 8, description: 'Versatile and affordable' },
    { id: 'kling-2.6', name: 'Kling 2.6', provider: 'Kling', price: 10, description: 'High quality motion' },
    { id: 'luma-dream', name: 'Luma Dream', provider: 'Luma', price: 9, description: 'Smooth animations' },
];

const ASPECT_RATIOS = [
    { id: '16:9', label: '16:9 (Landscape)', multiplier: 1 },
    { id: '9:16', label: '9:16 (Portrait)', multiplier: 1 },
    { id: '1:1', label: '1:1 (Square)', multiplier: 1 },
    { id: '4:5', label: '4:5 (Social)', multiplier: 1 },
];

const DURATIONS = [
    { id: '3', label: '3 seconds', multiplier: 0.5 },
    { id: '5', label: '5 seconds', multiplier: 1 },
    { id: '10', label: '10 seconds', multiplier: 2 },
];

export default function GeneratePage() {
    const [prompt, setPrompt] = useState('');
    const [selectedModel, setSelectedModel] = useState(MODELS[0]);
    const [aspectRatio, setAspectRatio] = useState(ASPECT_RATIOS[0]);
    const [duration, setDuration] = useState(DURATIONS[1]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [userCredits, setUserCredits] = useState<number | null>(null);
    const router = useRouter();
    const supabase = createClient();

    // Calculate price
    const calculatePrice = () => {
        return Math.round(selectedModel.price * aspectRatio.multiplier * duration.multiplier);
    };

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const price = calculatePrice();

        try {
            // Check credits
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                router.push('/login');
                return;
            }

            // Call generation API
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt,
                    model: selectedModel.id,
                    aspectRatio: aspectRatio.id,
                    duration: duration.id,
                    price,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Generation failed');
            }

            // Redirect to history
            router.push('/history');
        } catch (error: any) {
            setError(error.message || 'An error occurred during generation');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-2">
                Generate Video
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mb-8">
                Create stunning AI-generated videos with your choice of model
            </p>

            <form onSubmit={handleGenerate} className="space-y-8">
                {error && (
                    <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-800">
                        {error}
                    </div>
                )}

                {/* Model Selection */}
                <div className="bg-white rounded-lg shadow-card p-6">
                    <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                        Select Model
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {MODELS.map((model) => (
                            <button
                                key={model.id}
                                type="button"
                                onClick={() => setSelectedModel(model)}
                                className={`text-left p-4 rounded-lg border-2 transition-all ${selectedModel.id === model.id
                                        ? 'border-[var(--accent)] bg-blue-50'
                                        : 'border-[var(--border)] hover:border-gray-300'
                                    }`}
                            >
                                <div className="font-semibold text-[var(--text-primary)]">{model.name}</div>
                                <div className="text-sm text-[var(--text-secondary)] mt-1">{model.description}</div>
                                <div className="text-sm font-medium text-[var(--accent)] mt-2">
                                    ${model.price} base credits
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Prompt Input */}
                <div className="bg-white rounded-lg shadow-card p-6">
                    <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                        Describe Your Video
                    </h2>
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        required
                        rows={4}
                        className="w-full rounded-lg border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                        placeholder="A serene lake at sunset with mountains in the background..."
                    />
                    <p className="text-sm text-[var(--text-secondary)] mt-2">
                        Be specific about what you want to see in your video
                    </p>
                </div>

                {/* Settings */}
                <div className="bg-white rounded-lg shadow-card p-6">
                    <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                        Settings
                    </h2>

                    {/* Aspect Ratio */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-3">
                            Aspect Ratio
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {ASPECT_RATIOS.map((ratio) => (
                                <button
                                    key={ratio.id}
                                    type="button"
                                    onClick={() => setAspectRatio(ratio)}
                                    className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${aspectRatio.id === ratio.id
                                            ? 'border-[var(--accent)] bg-blue-50 text-[var(--accent)]'
                                            : 'border-[var(--border)] text-[var(--text-secondary)] hover:border-gray-300'
                                        }`}
                                >
                                    {ratio.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Duration */}
                    <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-3">
                            Duration
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                            {DURATIONS.map((dur) => (
                                <button
                                    key={dur.id}
                                    type="button"
                                    onClick={() => setDuration(dur)}
                                    className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${duration.id === dur.id
                                            ? 'border-[var(--accent)] bg-blue-50 text-[var(--accent)]'
                                            : 'border-[var(--border)] text-[var(--text-secondary)] hover:border-gray-300'
                                        }`}
                                >
                                    {dur.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Price Preview & Generate */}
                <div className="bg-white rounded-lg shadow-card p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                                Estimated Cost
                            </h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                {selectedModel.name} • {aspectRatio.id} • {duration.label}
                            </p>
                        </div>
                        <div className="text-3xl font-bold text-[var(--accent)]">
                            {calculatePrice()} credits
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={loading || !prompt.trim()}
                        className="w-full rounded-full bg-[var(--accent)] px-8 py-4 text-lg font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Generating...' : 'Generate Video'}
                    </button>
                </div>
            </form>
        </div>
    );
}
