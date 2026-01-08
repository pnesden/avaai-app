import Link from 'next/link';

const AI_MODELS = [
    {
        id: 'sora-2',
        name: 'Sora 2',
        provider: 'OpenAI',
        description: 'Best for cinematic quality and complex scenes with realistic physics',
        price: 15,
        features: ['Cinematic quality', 'Complex physics', 'Long duration support'],
        status: 'live',
        bestFor: 'Professional filmmaking, high-quality commercials',
    },
    {
        id: 'veo-3.1',
        name: 'Veo 3.1',
        provider: 'Google',
        description: 'Great for realistic scenes with natural lighting and movements',
        price: 12,
        features: ['Realistic lighting', 'Natural motion', 'High resolution'],
        status: 'live',
        bestFor: 'Product videos, nature scenes, documentaries',
    },
    {
        id: 'runway-gen3',
        name: 'Runway Gen 3',
        provider: 'Runway',
        description: 'Fast and creative with excellent style control',
        price: 10,
        features: ['Fast generation', 'Style control', 'Creative freedom'],
        status: 'live',
        bestFor: 'Creative projects, music videos, artistic content',
    },
    {
        id: 'pika-2.2',
        name: 'Pika 2.2',
        provider: 'Pika Labs',
        description: 'Versatile and affordable for various use cases',
        price: 8,
        features: ['Affordable', 'Versatile', 'Quick turnaround'],
        status: 'live',
        bestFor: 'Social media, quick prototypes, budget projects',
    },
    {
        id: 'kling-2.6',
        name: 'Kling 2.6',
        provider: 'Kling',
        description: 'High quality motion and smooth transitions',
        price: 10,
        features: ['Smooth motion', 'Quality transitions', 'Stable output'],
        status: 'live',
        bestFor: 'Animations, motion graphics, transitions',
    },
    {
        id: 'luma-dream',
        name: 'Luma Dream',
        provider: 'Luma',
        description: 'Smooth animations with dreamlike quality',
        price: 9,
        features: ['Smooth animations', 'Artistic style', 'Dream-like aesthetics'],
        status: 'live',
        bestFor: 'Artistic videos, abstract content, creative visuals',
    },
];

export default function ModelsPage() {
    return (
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
                    AI Video Models
                </h1>
                <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                    Choose the right AI engine for your video. Each model has unique strengths.
                </p>
            </div>

            {/* Models Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {AI_MODELS.map((model) => (
                    <div key={model.id} className="bg-white rounded-lg shadow-card p-6 hover:shadow-float transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                                    {model.name}
                                </h3>
                                <p className="text-sm text-[var(--text-secondary)]">{model.provider}</p>
                            </div>
                            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded uppercase">
                                {model.status}
                            </span>
                        </div>

                        <p className="text-sm text-[var(--text-primary)] mb-4">
                            {model.description}
                        </p>

                        <div className="mb-4">
                            <p className="text-xs font-medium text-[var(--text-secondary)] mb-2">BEST FOR</p>
                            <p className="text-sm text-[var(--text-primary)]">{model.bestFor}</p>
                        </div>

                        <div className="mb-4">
                            <p className="text-xs font-medium text-[var(--text-secondary)] mb-2">FEATURES</p>
                            <ul className="space-y-1">
                                {model.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-[var(--text-primary)]">
                                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                            <span className="text-lg font-bold text-[var(--accent)]">
                                {model.price} credits
                            </span>
                            <Link
                                href={`/generate?model=${model.id}`}
                                className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                            >
                                Try it →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* When to Choose Guide */}
            <div className="bg-white rounded-lg shadow-card p-8">
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                    When to Choose Each Model
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-semibold text-[var(--text-primary)] mb-2">For Professional Work</h3>
                        <p className="text-sm text-[var(--text-secondary)]">
                            Choose <strong>Sora 2</strong> or <strong>Veo 3.1</strong> for highest quality output, realistic physics, and professional-grade results.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-[var(--text-primary)] mb-2">For Creative Projects</h3>
                        <p className="text-sm text-[var(--text-secondary)]">
                            Choose <strong>Runway Gen 3</strong> or <strong>Luma Dream</strong> for artistic control, unique styles, and creative freedom.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-[var(--text-primary)] mb-2">For Budget-Conscious</h3>
                        <p className="text-sm text-[var(--text-secondary)]">
                            Choose <strong>Pika 2.2</strong> for affordable pricing while maintaining good quality for social media and quick iterations.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-[var(--text-primary)] mb-2">For Motion Graphics</h3>
                        <p className="text-sm text-[var(--text-secondary)]">
                            Choose <strong>Kling 2.6</strong> for smooth animations, clean transitions, and motion-focused content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
