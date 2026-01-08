export const metadata = {
    title: 'Terms of Service - Avaai',
    description: 'Avaai Terms of Service',
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-8">Terms of Service</h1>

                <div className="bg-white rounded-lg shadow-card p-8 space-y-6 text-[var(--text-secondary)] leading-relaxed">
                    <p className="text-sm text-gray-500">Last updated: January 8, 2026</p>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Agreement to Terms</h2>
                        <p>
                            By accessing or using Avaai, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Description of Service</h2>
                        <p>
                            Avaai is a platform that provides access to multiple AI video generation models. We aggregate services from third-party providers (Sora, Veo, Runway, Pika, and others) and provide a unified interface for video creation.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Credits and Billing</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>You must purchase credits to generate videos</li>
                            <li>Credits are non-refundable once purchased</li>
                            <li>Pricing is displayed before each generation</li>
                            <li>Credits do not expire</li>
                            <li>We reserve the right to adjust credit pricing with notice</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Acceptable Use</h2>
                        <p>You agree not to:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Generate illegal, harmful, or offensive content</li>
                            <li>Violate intellectual property rights</li>
                            <li>Abuse or exploit the service</li>
                            <li>Attempt to bypass usage limits or security measures</li>
                            <li>Resell access to the service without authorization</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Content Ownership</h2>
                        <p>
                            You retain all rights to videos you generate through Avaai. However, you are responsible for ensuring your use of the service complies with the terms of the underlying AI providers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Service Availability</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>We strive for 99.9% uptime but do not guarantee uninterrupted service</li>
                            <li>Third-party AI providers may experience downtime</li>
                            <li>We may perform scheduled maintenance with notice</li>
                            <li>Credits are not refunded for service interruptions</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Limitation of Liability</h2>
                        <p>
                            Avaai is provided "as is" without warranties. We are not liable for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Quality or suitability of generated videos</li>
                            <li>Third-party AI provider limitations</li>
                            <li>Loss of data or content</li>
                            <li>Indirect or consequential damages</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Account Termination</h2>
                        <p>
                            We reserve the right to suspend or terminate accounts that violate these terms. Upon termination, unused credits are forfeited.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Changes to Terms</h2>
                        <p>
                            We may update these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Contact</h2>
                        <p>
                            Questions about these terms? Contact us at:
                            <br />
                            <a href="mailto:legal@avaai.app" className="text-[var(--accent)] hover:underline">legal@avaai.app</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
