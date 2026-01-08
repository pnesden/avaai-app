import Link from 'next/link';

const PRICING_PACKAGES = [
    {
        id: 'starter',
        name: 'Starter',
        price: 20,
        credits: 20,
        popular: false,
        description: 'Perfect for trying out the platform',
    },
    {
        id: 'pro',
        name: 'Pro',
        price: 50,
        credits: 52,
        popular: true,
        description: 'Best value for regular creators',
        bonus: '+2 bonus credits',
    },
    {
        id: 'premium',
        name: 'Premium',
        price: 100,
        credits: 108,
        popular: false,
        description: 'For professional use',
        bonus: '+8 bonus credits',
    },
];

const MODEL_PRICING = [
    { model: 'Sora 2', credits: 15, duration: '5s base' },
    { model: 'Veo 3.1', credits: 12, duration: '5s base' },
    { model: 'Runway Gen 3', credits: 10, duration: '5s base' },
    { model: 'Pika 2.2', credits: 8, duration: '5s base' },
    { model: 'Kling 2.6', credits: 10, duration: '5s base' },
    { model: 'Luma Dream', credits: 9, duration: '5s base' },
];

const FAQS = [
    {
        q: 'How do credits work?',
        a: 'Each video generation costs credits based on the model, duration, and aspect ratio. Credits never expire.',
    },
    {
        q: 'What happens if a generation fails?',
        a: 'If your video generation fails, your credits are automatically refunded to your account.',
    },
    {
        q: 'Can I get a refund?',
        a: 'Credits are non-refundable once purchased, but they never expire so you can use them anytime.',
    },
    {
        q: 'Do you offer bulk discounts?',
        a: 'Yes! Larger credit packages include bonus credits. Contact us for enterprise pricing.',
    },
];

export default function PricingPage() {
    return (
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
                    Simple, Transparent Pricing
                </h1>
                <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                    Pay only for what you use. No subscriptions, no hidden fees.
                </p>
            </div>

            {/* Pricing Packages */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                {PRICING_PACKAGES.map((pkg) => (
                    <div
                        key={pkg.id}
                        className={`rounded-lg p-8 ${pkg.popular
                                ? 'bg-[var(--accent)] text-white shadow-float relative'
                                : 'bg-white border border-[var(--border)] shadow-card'
                            }`}
                    >
                        {pkg.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[var(--accent)] px-4 py-1 rounded-full text-xs font-semibold">
                                MOST POPULAR
                            </div>
                        )}
                        <div className="text-center mb-6">
                            <h3 className={`text-xl font-semibold mb-2 ${pkg.popular ? 'text-white' : 'text-[var(--text-primary)]'}`}>
                                {pkg.name}
                            </h3>
                            <div className={`text-4xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-[var(--text-primary)]'}`}>
                                ${pkg.price}
                            </div>
                            <div className={`text-2xl font-semibold mb-1 ${pkg.popular ? 'text-white' : 'text-[var(--accent)]'}`}>
                                {pkg.credits} credits
                            </div>
                            {pkg.bonus && (
                                <div className={`text-sm ${pkg.popular ? 'text-white opacity-90' : 'text-green-600'}`}>
                                    {pkg.bonus}
                                </div>
                            )}
                            <p className={`text-sm mt-2 ${pkg.popular ? 'text-white opacity-90' : 'text-[var(--text-secondary)]'}`}>
                                {pkg.description}
                            </p>
                        </div>
                        <Link
                            href="/signup"
                            className={`block w-full rounded-full px-6 py-3 text-center text-sm font-semibold transition-colors ${pkg.popular
                                    ? 'bg-white text-[var(--accent)] hover:bg-gray-100'
                                    : 'bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]'
                                }`}
                        >
                            Get Started
                        </Link>
                    </div>
                ))}
            </div>

            {/* Model Pricing Table */}
            <div className="bg-white rounded-lg shadow-card p-8 mb-16">
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                    Model Pricing
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[var(--border)]">
                                <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">Model</th>
                                <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">Credits</th>
                                <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MODEL_PRICING.map((item, idx) => (
                                <tr key={idx} className="border-b border-[var(--border)] hover:bg-gray-50">
                                    <td className="py-3 px-4 text-[var(--text-primary)]">{item.model}</td>
                                    <td className="py-3 px-4 font-semibold text-[var(--accent)]">{item.credits}</td>
                                    <td className="py-3 px-4 text-[var(--text-secondary)]">{item.duration}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mt-4">
                    * Longer durations and different aspect ratios may affect final price. See price preview before generating.
                </p>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-lg shadow-card p-8">
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                    {FAQS.map((faq, idx) => (
                        <div key={idx}>
                            <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                                {faq.q}
                            </h3>
                            <p className="text-[var(--text-secondary)]">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
