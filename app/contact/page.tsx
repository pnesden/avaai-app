export const metadata = {
    title: 'Contact Us - Avaai',
    description: 'Get in touch with the Avaai team',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-8">Contact Us</h1>

                <div className="bg-white rounded-lg shadow-card p-8">
                    <p className="text-[var(--text-secondary)] mb-6">
                        Have a question or need help? We'd love to hear from you.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Email</h3>
                            <a
                                href="mailto:support@avaai.app"
                                className="text-[var(--accent)] hover:underline"
                            >
                                support@avaai.app
                            </a>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Common Questions</h3>
                            <ul className="space-y-2 text-[var(--text-secondary)]">
                                <li>• <strong>Billing:</strong> Questions about credits or pricing</li>
                                <li>• <strong>Technical:</strong> Issues with video generation</li>
                                <li>• <strong>Features:</strong> Model capabilities and comparisons</li>
                                <li>• <strong>Account:</strong> Login or account management help</li>
                            </ul>
                        </div>

                        <div className="pt-6 border-t border-gray-200">
                            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Response Time</h3>
                            <p className="text-[var(--text-secondary)]">
                                We typically respond within 24 hours during business days.
                            </p>
                        </div>

                        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                            <p className="text-sm text-blue-900">
                                <strong>Note:</strong> For immediate help with common issues, check out our <a href="/docs" className="text-[var(--accent)] hover:underline">documentation</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
