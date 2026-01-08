import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-[var(--border)] bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    {/* Product */}
                    <div>
                        <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/models" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                                    Models
                                </Link>
                            </li>
                            <li>
                                <Link href="/examples" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                                    Examples
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/docs" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                                    Docs
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/terms" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                                    Privacy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[var(--border)]">
                    <p className="text-sm text-[var(--text-secondary)] text-center">
                        © {currentYear} Avaai. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
