'use client';

import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 px-6">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating bubbles */}
        <div className="absolute top-10 right-20 w-16 h-16 opacity-30 animate-float">
          <img src="/images/decorations/bubble.svg" alt="" />
        </div>
        <div className="absolute top-40 right-40 w-12 h-12 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <img src="/images/decorations/bubble.svg" alt="" />
        </div>
        <div className="absolute bottom-20 left-32 w-20 h-20 opacity-25 animate-float" style={{ animationDelay: '2s' }}>
          <img src="/images/decorations/bubble.svg" alt="" />
        </div>

        {/* Coral decorations */}
        <div className="absolute bottom-0 left-10 w-16 opacity-40 animate-wave">
          <img src="/images/decorations/coral.svg" alt="" />
        </div>
        <div className="absolute bottom-0 right-10 w-16 opacity-40 animate-wave" style={{ animationDelay: '1.5s' }}>
          <img src="/images/decorations/coral.svg" alt="" />
        </div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Dive Deep into Bikini Bottom's Mysteries!
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover hidden jokes, secret Easter eggs, and deep lore that you never noticed in your favorite SpongeBob episodes.
        </p>
        <Link
          href="/episodes"
          className="inline-block px-8 py-4 bg-[hsl(var(--sandy))] text-[hsl(var(--navy))] font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          🔍 Start the Adventure
        </Link>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
            <div className="text-4xl font-bold text-[hsl(var(--sandy))] mb-2">250+</div>
            <div className="text-white/80 text-sm uppercase tracking-wide">Hidden Jokes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
            <div className="text-4xl font-bold text-[hsl(var(--sandy))] mb-2">45+</div>
            <div className="text-white/80 text-sm uppercase tracking-wide">Episodes Analyzed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
            <div className="text-4xl font-bold text-[hsl(var(--sandy))] mb-2">1,200+</div>
            <div className="text-white/80 text-sm uppercase tracking-wide">Community Members</div>
          </div>
        </div>
      </div>
    </section>
  );
}
