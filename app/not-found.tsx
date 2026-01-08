import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <h1 className="text-8xl font-bold text-[var(--accent)] mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-4">
                    Page Not Found
                </h2>
                <p className="text-lg text-[var(--text-secondary)] mb-8">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="rounded-full bg-[var(--accent)] px-6 py-3 text-base font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/examples"
                        className="rounded-full border border-[var(--border)] bg-white px-6 py-3 text-base font-semibold text-[var(--text-primary)] hover:bg-gray-50 transition-colors"
                    >
                        Browse Examples
                    </Link>
                </div>
            </div>
        </div>
    );
}
