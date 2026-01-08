import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Image
                        src="/branding/favicon.png"
                        alt="Avaai"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                    />
                    <span className="text-2xl font-semibold text-[var(--text-primary)]">
                        Avaai
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link
                        href="/models"
                        className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                        Models
                    </Link>
                    <Link
                        href="/examples"
                        className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                        Examples
                    </Link>
                    <Link
                        href="/pricing"
                        className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="/docs"
                        className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                        Docs
                    </Link>
                </nav>

                {/* CTA Buttons */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/login"
                        className="hidden sm:inline-flex text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                        Log in
                    </Link>
                    <Link
                        href="/generate"
                        className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors shadow-sm"
                    >
                        Start a render
                    </Link>
                </div>
            </div>
        </header>
    );
}
