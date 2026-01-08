export const metadata = {
    title: 'Privacy Policy - Avaai',
    description: 'Avaai Privacy Policy',
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-8">Privacy Policy</h1>

                <div className="bg-white rounded-lg shadow-card p-8 space-y-6 text-[var(--text-secondary)] leading-relaxed">
                    <p className="text-sm text-gray-500">Last updated: January 8, 2026</p>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Overview</h2>
                        <p>
                            Avaai ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our AI video generation platform.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Information We Collect</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Account Information:</strong> Email address, username, and password</li>
                            <li><strong>Usage Data:</strong> Video generation requests, prompts, and model selections</li>
                            <li><strong>Payment Information:</strong> Processed securely through Stripe (we do not store card details)</li>
                            <li><strong>Technical Data:</strong> IP address, browser type, and device information</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">How We Use Your Information</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To provide and improve our video generation services</li>
                            <li>To process your requests and manage your account</li>
                            <li>To send you service-related communications</li>
                            <li>To analyze usage patterns and optimize performance</li>
                            <li>To comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Data Security</h2>
                        <p>
                            We implement industry-standard security measures to protect your data, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Encrypted data transmission (SSL/TLS)</li>
                            <li>Secure database storage through Supabase</li>
                            <li>Regular security audits and updates</li>
                            <li>Limited access to personal information</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Third-Party Services</h2>
                        <p>We use the following third-party services:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Supabase:</strong> Database and authentication</li>
                            <li><strong>Stripe:</strong> Payment processing</li>
                            <li><strong>Vercel:</strong> Website hosting</li>
                            <li><strong>AI Providers:</strong> Video generation (Sora, Veo, Runway, etc.)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Access your personal data</li>
                            <li>Request corrections to your data</li>
                            <li>Delete your account and associated data</li>
                            <li>Opt out of marketing communications</li>
                            <li>Export your data</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Contact Us</h2>
                        <p>
                            For privacy-related questions or requests, contact us at:
                            <br />
                            <a href="mailto:privacy@avaai.app" className="text-[var(--accent)] hover:underline">privacy@avaai.app</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
