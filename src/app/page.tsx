'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Hero } from '@/components/layout/Hero';
import { EpisodeCard } from '@/components/episodes/EpisodeCard';
import { mockEpisodes, mockHiddenJokes, mockForumThreads } from '@/lib/data/mock-data';
import Link from 'next/link';
import { MessageCircle, TrendingUp, Users } from 'lucide-react';

export default function HomePage() {
  const featuredEpisodes = mockEpisodes.slice(0, 6);
  const recentJokes = mockHiddenJokes.slice(0, 2);
  const recentThreads = mockForumThreads.filter(t => t.isFeatured).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* Main content */}
      <div className="container mx-auto px-6 py-12">
        {/* Episode Analysis Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Episode Analysis</h2>
              <p className="text-white/80 text-lg">Explore episodes packed with hidden secrets</p>
            </div>
            <Link
              href="/episodes"
              className="px-6 py-3 bg-[hsl(var(--sandy))] text-[hsl(var(--navy))] font-bold rounded-lg hover:scale-105 transition-transform"
            >
              View All Episodes →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEpisodes.map(episode => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        </section>

        {/* Two-column layout: Recent Discoveries + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Recent Hidden Jokes */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">Hidden Jokes Database</h2>

            <div className="space-y-4">
              {recentJokes.map(joke => (
                <Link
                  key={joke.id}
                  href={`/joke/${joke.id}`}
                  className="block bg-[hsl(var(--card-light))] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 card-hover"
                >
                  <div className="flex gap-4">
                    {/* Icon/Emoji */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--ocean-light))] to-[hsl(var(--ocean-medium))] flex items-center justify-center text-3xl">
                        🕵️
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-[hsl(var(--coral))]/20 text-[hsl(var(--coral))] rounded-full text-xs font-bold uppercase">
                          {joke.category.replace('_', ' ')}
                        </span>
                        <span className="text-[hsl(var(--navy))]/60 text-sm">
                          {joke.episodeId}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-2">
                        {joke.title}
                      </h3>

                      <p className="text-[hsl(var(--navy))]/70 mb-3 line-clamp-2">
                        {joke.description}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-[hsl(var(--navy))]/60">
                        <div className="flex items-center gap-1">
                          <span>⭐</span>
                          <span className="font-semibold">{joke.clevernesRating}</span>
                          <span>cleverness</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{joke.commentCount} comments</span>
                        </div>
                        <div className="text-xs">
                          Discovered by <span className="font-semibold">{joke.discoveredBy}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/jokes"
              className="mt-6 inline-block px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              Explore All Hidden Jokes →
            </Link>
          </div>

          {/* Right: Sidebar with Recent Threads */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">Recent Threads</h3>

            <div className="space-y-3">
              {recentThreads.map(thread => (
                <Link
                  key={thread.id}
                  href={`/community/thread/${thread.id}`}
                  className="block bg-[hsl(var(--card-light))] rounded-xl p-4 shadow hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-3xl flex-shrink-0">
                      {thread.authorAvatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[hsl(var(--navy))] text-sm mb-1 line-clamp-2">
                        {thread.title}
                      </h4>
                      <p className="text-xs text-[hsl(var(--navy))]/60 mb-2 line-clamp-2">
                        {thread.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-[hsl(var(--navy))]/50">
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {thread.replyCount}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {thread.upvotes}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/community"
              className="mt-4 block text-center px-4 py-2 bg-[hsl(var(--sandy))] text-[hsl(var(--navy))] font-bold rounded-lg hover:scale-105 transition-transform"
            >
              Join Community →
            </Link>
          </div>
        </div>

        {/* Popular Theories Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">Popular Theories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[hsl(var(--ocean-light))]/20 to-[hsl(var(--ocean-medium))]/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/10">
              <div className="text-4xl mb-3">🍔</div>
              <h3 className="text-xl font-bold text-white mb-2">The Krabby Patty Formula</h3>
              <p className="text-white/80 mb-4">Deep dive into the mystery of the secret formula</p>
              <Link href="/theory/krabby-patty" className="text-[hsl(var(--sandy))] font-semibold hover:underline">
                Read Theory →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-[hsl(var(--coral))]/20 to-[hsl(var(--sandy))]/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/10">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="text-xl font-bold text-white mb-2">Gary's True Identity</h3>
              <p className="text-white/80 mb-4">Evidence that Gary is more than just a pet snail</p>
              <Link href="/theory/gary" className="text-[hsl(var(--sandy))] font-semibold hover:underline">
                Read Theory →
              </Link>
            </div>
          </div>
        </section>

        {/* Active Community Members */}
        <section className="mt-16 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Users className="w-8 h-8" />
            Active Community Members
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {['🧽', '⭐', '🦑', '🦀', '🐿️', '🧠', '📚', '🕵️'].map((emoji, i) => (
              <div
                key={i}
                className="w-16 h-16 rounded-full bg-[hsl(var(--card-light))] flex items-center justify-center text-3xl shadow-md hover:scale-110 transition-transform cursor-pointer"
              >
                {emoji}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[hsl(var(--navy))] py-8 mt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-white/70 text-sm">
            <div className="mb-4 md:mb-0">
              <p>© 2024 SpongeBob Secrets Hub. Fan-made project.</p>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <div className="flex gap-3 ml-4">
                <span className="text-xl cursor-pointer hover:scale-110 transition-transform">🐦</span>
                <span className="text-xl cursor-pointer hover:scale-110 transition-transform">📘</span>
                <span className="text-xl cursor-pointer hover:scale-110 transition-transform">📷</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
