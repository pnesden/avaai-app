'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate form submission (replace with actual API call later)
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Get In Touch</h1>
                    <p className="text-lg text-[var(--text-secondary)]">
                        Have questions? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Map & Address Card - NOW ON LEFT */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-card p-8">
                            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">Our Location</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 mr-3 mt-0.5 text-[var(--accent)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div>
                                        <p className="font-medium text-[var(--text-primary)]">Avaai Technologies</p>
                                        <p className="text-[var(--text-secondary)] text-sm mt-1">
                                            Infinitus Plaza<br />
                                            199 Des Voeux Road Central<br />
                                            Sheung Wan, Hong Kong
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center text-sm text-[var(--text-secondary)]">
                                    <svg className="w-5 h-5 mr-3 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Monday - Friday: 9:00 AM - 6:00 PM HKT</span>
                                </div>
                            </div>

                            {/* Google Maps Embed */}
                            <div className="rounded-lg overflow-hidden border border-gray-200 h-80">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5888472891385!2d114.14858731495726!3d22.28629698533043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403ffe1b6e1e6c5%3A0x91e5ec8f85f6f9a!2sInfinitus%20Plaza!5e0!3m2!1sen!2s!4v1641234567890!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Avaai Location - Infinitus Plaza, Hong Kong"
                                />
                            </div>
                        </div>

                        {/* Quick Info Card */}
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                            <h3 className="font-semibold text-[var(--text-primary)] mb-2">Need immediate help?</h3>
                            <p className="text-sm text-[var(--text-secondary)] mb-3">
                                Check out our <a href="/docs" className="text-[var(--accent)] hover:underline">documentation</a> for quick answers to common questions.
                            </p>
                            <p className="text-xs text-[var(--text-secondary)]">
                                Average response time: 24 hours
                            </p>
                        </div>
                    </div>

                    {/* Contact Form Card - NOW ON RIGHT */}
                    <div className="bg-white rounded-xl shadow-card p-8">
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">Send us a message</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="Tell us how we can help..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-[var(--accent)] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[var(--accent-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-600 text-sm text-center">
                                    Thanks for reaching out! We'll get back to you soon.
                                </p>
                            )}
                        </form>

                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Other ways to reach us</h3>
                            <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href="mailto:support@avaai.app" className="hover:text-[var(--accent)] transition-colors">
                                        support@avaai.app
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
