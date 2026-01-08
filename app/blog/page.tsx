export const metadata = {
    title: 'Blog - Avaai',
    description: 'Latest news, guides, and insights about AI video generation',
};

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Blog</h1>
                <p className="text-lg text-[var(--text-secondary)] mb-12">
                    Articles, guides, and updates about AI video generation
                </p>

                <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center">
                    <svg className="w-16 h-16 mx-auto mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-3">
                        Coming Soon
                    </h2>
                    <p className="text-[var(--text-secondary)] mb-4">
                        We're working on articles about AI video generation, model comparisons, best practices, and more.
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Subscribe to our newsletter to be notified when we publish new content.
                    </p>
                </div>

                {/* Placeholder for future blog posts */}
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {[
                        {
                            title: "Getting Started with AI Video Generation",
                            description: "Learn the basics of creating stunning videos with AI",
                            category: "Guide"
                        },
                        {
                            title: "Sora vs Veo: Model Comparison",
                            description: "Detailed comparison of the two leading AI video models",
                            category: "Comparison"
                        },
                        {
                            title: "Best Practices for AI Video Prompts",
                            description: "Tips and tricks for writing effective video prompts",
                            category: "Tutorial"
                        },
                        {
                            title: "The Future of AI Video",
                            description: "Industry trends and what's coming next",
                            category: "Insights"
                        }
                    ].map((post, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 opacity-50">
                            <div className="text-xs font-semibold text-[var(--accent)] uppercase mb-2">{post.category}</div>
                            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{post.title}</h3>
                            <p className="text-sm text-[var(--text-secondary)]">{post.description}</p>
                            <div className="mt-4 text-sm text-gray-400 italic">Coming soon...</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
