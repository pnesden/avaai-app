export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[var(--background-secondary)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-[var(--text-primary)] sm:text-6xl lg:text-7xl">
              The right engine <br />
              for every shot.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)] max-w-2xl mx-auto">
              Create stunning AI-generated videos with multiple models. Choose from Sora, Veo, Runway, and more.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/generate"
                className="rounded-full bg-[var(--accent)] px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-[var(--accent-hover)] transition-colors"
              >
                Start a render
              </a>
              <a
                href="/examples"
                className="text-base font-semibold leading-7 text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
              >
                See examples <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Featured Video Cards */}
            <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Video Card 1 */}
              <a href="/video/1" className="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="aspect-video bg-gray-900 relative overflow-hidden">
                  <video
                    src="/assets/gallery/adraga-beach.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-white text-xs font-medium">
                    16:9
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">Sora 2</span>
                    <span className="text-xs text-gray-500">$1.50</span>
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2 mb-3">
                    A serene beach with crashing waves at sunset
                  </p>
                  <button className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
                    Clone settings →
                  </button>
                </div>
              </a>

              {/* Video Card 2 */}
              <a href="/video/3" className="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="aspect-video bg-gray-900 relative overflow-hidden">
                  <video
                    src="/assets/gallery/robot-eyes.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-white text-xs font-medium">
                    1:1
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-pink-600 bg-pink-50 px-2 py-1 rounded">Runway Gen 3</span>
                    <span className="text-xs text-gray-500">$1.00</span>
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2 mb-3">
                    Futuristic robot with glowing eyes
                  </p>
                  <button className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
                    Clone settings →
                  </button>
                </div>
              </a>

              {/* Video Card 3 */}
              <a href="/video/9" className="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="aspect-video bg-gray-900 relative overflow-hidden">
                  <video
                    src="/hero/veo3.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-white text-xs font-medium">
                    16:9
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">Veo 3.1</span>
                    <span className="text-xs text-gray-500">$1.20</span>
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2 mb-3">
                    High-quality realistic video with natural motion
                  </p>
                  <button className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
                    Clone settings →
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Model Ecosystem */}
      <section className="border-y border-[var(--border)] bg-white py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-semibold text-[var(--text-secondary)]">
            <span>Works with</span>
            <span className="text-[var(--text-primary)]">Sora 2</span>
            <span className="text-[var(--text-primary)]">Veo 3.1</span>
            <span className="text-[var(--text-primary)]">Pika 2.2</span>
            <span className="text-[var(--text-primary)]">Runway Gen 3</span>
            <span className="text-[var(--text-primary)]">Kling</span>
            <span className="text-[var(--text-primary)]">Luma</span>
            <span className="text-[var(--text-primary)]">Minimax</span>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-[var(--background-secondary)]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] text-center mb-16">
            Everything you need to create amazing videos
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                Fast Generation
              </h3>
              <p className="text-[var(--text-secondary)]">
                Create videos in minutes with our optimized rendering pipeline
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                Price Before You Generate
              </h3>
              <p className="text-[var(--text-secondary)]">
                Know exactly what each render will cost before you hit generate
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                Real-time Tracking
              </h3>
              <p className="text-[var(--text-secondary)]">
                Monitor your render status and access your video library instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Pay for what you use. No subscriptions, no hidden fees.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Package 1 */}
            <div className="rounded-lg border border-[var(--border)] p-8 shadow-card hover:shadow-float transition-shadow">
              <div className="text-4xl font-bold text-[var(--text-primary)] mb-2">$20</div>
              <div className="text-sm text-[var(--text-secondary)] mb-6">Starter credits</div>
              <a
                href="/pricing"
                className="block w-full rounded-full bg-[var(--accent)] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors"
              >
                Get started
              </a>
            </div>

            {/* Package 2 */}
            <div className="rounded-lg border-2 border-[var(--accent)] p-8 shadow-float relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-white px-4 py-1 rounded-full text-xs font-semibold">
                POPULAR
              </div>
              <div className="text-4xl font-bold text-[var(--text-primary)] mb-2">$50</div>
              <div className="text-sm text-[var(--text-secondary)] mb-6">Pro credits</div>
              <a
                href="/pricing"
                className="block w-full rounded-full bg-[var(--accent)] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors"
              >
                Get started
              </a>
            </div>

            {/* Package 3 */}
            <div className="rounded-lg border border-[var(--border)] p-8 shadow-card hover:shadow-float transition-shadow">
              <div className="text-4xl font-bold text-[var(--text-primary)] mb-2">$100</div>
              <div className="text-sm text-[var(--text-secondary)] mb-6">Premium credits</div>
              <a
                href="/pricing"
                className="block w-full rounded-full bg-[var(--accent)] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--accent)] text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to create amazing videos?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Sign up now and get 100 free credits to get started
          </p>
          <a
            href="/signup"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[var(--accent)] hover:bg-gray-100 transition-colors"
          >
            Start for free
          </a>
        </div>
      </section>
    </div>
  );
}
