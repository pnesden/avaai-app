export const metadata = {
    title: 'About Us - Example-AI',
    description: 'Learn about Example-AI - Your multi-engine AI video platform',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-8">About Example-AI</h1>

                <div className="bg-white rounded-lg shadow-card p-8 space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
                            The Right Engine for Every Shot
                        </h2>
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                            Example-AI is a unified platform that gives you access to the world's best AI video generation models - all in one place. Choose from Sora, Veo, Runway, Pika, and more, with transparent pricing and real-time cost estimation.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
                            Our Mission
                        </h2>
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                            We believe creators shouldn't be locked into a single AI engine. Different projects need different tools - whether you need cinematic quality, fast iterations, or specific aspect ratios. Example-AI lets you pick the perfect model for each shot.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
                            How It Works
                        </h2>
                        <ul className="space-y-3 text-[var(--text-secondary)]">
                            <li className="flex items-start">
                                <span className="mr-3 text-[var(--accent)] font-bold">1.</span>
                                <span>Choose your AI model based on your needs</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-[var(--accent)] font-bold">2.</span>
                                <span>See the exact price before you generate</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-[var(--accent)] font-bold">3.</span>
                                <span>Generate and download your video</span>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
                            Supported Models
                        </h2>
                        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                            We integrate with the industry's leading AI video platforms:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="text-sm font-medium text-[var(--text-primary)]">• Sora 2</div>
                            <div className="text-sm font-medium text-[var(--text-primary)]">• Veo 3.1</div>
                            <div className="text-sm font-medium text-[var(--text-primary)]">• Runway Gen 3</div>
                            <div className="text-sm font-medium text-[var(--text-primary)]">• Pika 2.2</div>
                            <div className="text-sm font-medium text-[var(--text-primary)]">• Kling</div>
                            <div className="text-sm font-medium text-[var(--text-primary)]">• Luma</div>
                        </div>
                    </section>

                    <section className="pt-6 border-t border-gray-200">
                        <p className="text-sm text-[var(--text-secondary)]">
                            Have questions? <a href="/contact" className="text-[var(--accent)] hover:underline">Get in touch</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
