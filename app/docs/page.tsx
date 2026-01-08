export default function DocsPage() {
    return (
        <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-8">
                Documentation
            </h1>
            <div className="bg-white rounded-lg shadow-card p-8">
                <p className="text-[var(--text-secondary)] mb-4">
                    Documentation will be added here for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)]">
                    <li>Getting started guide</li>
                    <li>API documentation</li>
                    <li>Best practices for prompts</li>
                    <li>Credit system details</li>
                    <li>Model comparison guides</li>
                </ul>
            </div>
        </div>
    );
}
