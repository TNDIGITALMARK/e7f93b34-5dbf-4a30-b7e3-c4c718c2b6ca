'use client';

import { Navigation } from '@/components/layout/Navigation';
import { mockHiddenJokes, mockEpisodes, getJokeById, getEpisodeById } from '@/lib/data/mock-data';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, Star, ThumbsUp, Share2 } from 'lucide-react';
import { use } from 'react';

export default function JokeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const joke = getJokeById(resolvedParams.id);
  const episode = joke ? getEpisodeById(joke.episodeId) : null;

  if (!joke || !episode) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Joke Not Found</h1>
          <Link href="/" className="text-[hsl(var(--sandy))] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedJokes = mockHiddenJokes.filter(j => joke.relatedJokes.includes(j.id));

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-6">
        <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Discovery Hub
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Joke Details */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="bg-[hsl(var(--card-light))] rounded-2xl p-8 shadow-lg mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-2 bg-[hsl(var(--coral))]/20 text-[hsl(var(--coral))] rounded-full text-sm font-bold uppercase">
                  {joke.category.replace('_', ' ')}
                </span>
                <Link
                  href={`/episode/${episode.id}`}
                  className="px-4 py-2 bg-[hsl(var(--ocean-light))]/20 text-[hsl(var(--ocean-medium))] rounded-full text-sm font-semibold hover:bg-[hsl(var(--ocean-light))]/30 transition-colors"
                >
                  {episode.title} ({episode.id})
                </Link>
              </div>

              <h1 className="text-4xl font-bold text-[hsl(var(--navy))] mb-4">
                {joke.title}
              </h1>

              <p className="text-xl text-[hsl(var(--navy))]/80 mb-6">
                {joke.description}
              </p>

              {/* Stats bar */}
              <div className="flex items-center gap-6 pb-6 border-b-2 border-[hsl(var(--navy))]/10">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-[hsl(var(--sandy))] text-[hsl(var(--sandy))]" />
                  <span className="font-bold text-[hsl(var(--navy))]">{joke.clevernesRating}</span>
                  <span className="text-sm text-[hsl(var(--navy))]/60">Cleverness</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-[hsl(var(--ocean-medium))]" />
                  <span className="font-bold text-[hsl(var(--navy))]">{joke.commentCount}</span>
                  <span className="text-sm text-[hsl(var(--navy))]/60">Comments</span>
                </div>
                <div className="text-sm text-[hsl(var(--navy))]/60">
                  Discovered: {new Date(joke.discoveryDate).toLocaleDateString()}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-6">
                <button className="flex items-center gap-2 px-6 py-3 bg-[hsl(var(--ocean-light))] text-white font-semibold rounded-lg hover:scale-105 transition-transform">
                  <ThumbsUp className="w-5 h-5" />
                  Upvote
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-white/20 text-[hsl(var(--navy))] font-semibold rounded-lg hover:bg-white/30 transition-colors">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>

            {/* Explanation Section */}
            <div className="bg-[hsl(var(--card-light))] rounded-2xl p-8 shadow-lg mb-6">
              <h2 className="text-2xl font-bold text-[hsl(var(--navy))] mb-4">The Explanation</h2>
              <p className="text-lg text-[hsl(var(--navy))]/80 leading-relaxed mb-6">
                {joke.explanation}
              </p>

              {/* Screenshot comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="aspect-video bg-gradient-to-br from-[hsl(var(--ocean-light))] to-[hsl(var(--ocean-medium))] rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-5xl mb-2">📸</div>
                    <div className="text-sm font-semibold">Before Screenshot</div>
                  </div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-[hsl(var(--sandy))] to-[hsl(var(--coral))] rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-5xl mb-2">🔍</div>
                    <div className="text-sm font-semibold">After Screenshot</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Discovery Credit */}
            <div className="bg-gradient-to-r from-[hsl(var(--ocean-light))]/20 to-[hsl(var(--sandy))]/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--card-light))] flex items-center justify-center text-3xl">
                  🕵️
                </div>
                <div>
                  <div className="text-sm text-white/80 mb-1">Discovered by</div>
                  <div className="text-xl font-bold text-white">{joke.discoveredBy}</div>
                  <div className="text-sm text-white/70">
                    on {new Date(joke.discoveryDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-[hsl(var(--card-light))] rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[hsl(var(--navy))] mb-6">
                Discussion ({joke.commentCount})
              </h2>

              {/* Sample comments */}
              <div className="space-y-4">
                {[
                  { author: 'bikini_bottom_scholar', avatar: '📚', comment: 'This is such a clever reference! I can\'t believe I never noticed this before.', likes: 24 },
                  { author: 'krabby_patty_detective', avatar: '🕵️', comment: 'Great find! This adds so much depth to the episode. The writers really knew what they were doing.', likes: 18 }
                ].map((comment, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white/50 rounded-xl">
                    <div className="text-2xl">{comment.avatar}</div>
                    <div className="flex-1">
                      <div className="font-bold text-[hsl(var(--navy))] mb-1">{comment.author}</div>
                      <p className="text-[hsl(var(--navy))]/80 mb-2">{comment.comment}</p>
                      <div className="flex items-center gap-4 text-sm text-[hsl(var(--navy))]/60">
                        <button className="flex items-center gap-1 hover:text-[hsl(var(--ocean-medium))] transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          {comment.likes}
                        </button>
                        <button className="hover:text-[hsl(var(--ocean-medium))] transition-colors">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add comment */}
              <div className="mt-6 pt-6 border-t-2 border-[hsl(var(--navy))]/10">
                <textarea
                  placeholder="Share your thoughts on this hidden joke..."
                  className="w-full p-4 rounded-xl bg-white/50 border-2 border-[hsl(var(--navy))]/20 text-[hsl(var(--navy))] placeholder:text-[hsl(var(--navy))]/50 focus:border-[hsl(var(--ocean-light))] focus:outline-none"
                  rows={4}
                />
                <button className="mt-3 px-6 py-3 bg-[hsl(var(--sandy))] text-[hsl(var(--navy))] font-bold rounded-lg hover:scale-105 transition-transform">
                  Post Comment
                </button>
              </div>
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="lg:col-span-1">
            {/* Related Episode */}
            <div className="bg-[hsl(var(--card-light))] rounded-2xl p-6 shadow-lg mb-6">
              <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-4">From Episode</h3>
              <Link href={`/episode/${episode.id}`} className="block group">
                <div className="aspect-video bg-gradient-to-br from-[hsl(var(--ocean-light))] to-[hsl(var(--ocean-medium))] rounded-xl mb-3 flex items-center justify-center">
                  <div className="text-4xl">📺</div>
                </div>
                <div className="text-sm font-semibold text-[hsl(var(--ocean-medium))] mb-1">
                  {episode.id}
                </div>
                <div className="text-lg font-bold text-[hsl(var(--navy))] group-hover:text-[hsl(var(--ocean-medium))] transition-colors">
                  {episode.title}
                </div>
              </Link>
            </div>

            {/* Related Jokes */}
            {relatedJokes.length > 0 && (
              <div className="bg-[hsl(var(--card-light))] rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-4">Related Jokes</h3>
                <div className="space-y-3">
                  {relatedJokes.map(relatedJoke => (
                    <Link
                      key={relatedJoke.id}
                      href={`/joke/${relatedJoke.id}`}
                      className="block p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-colors"
                    >
                      <div className="text-sm font-bold text-[hsl(var(--navy))] mb-1 line-clamp-2">
                        {relatedJoke.title}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[hsl(var(--navy))]/60">
                        <Star className="w-3 h-3 fill-[hsl(var(--sandy))] text-[hsl(var(--sandy))]" />
                        <span>{relatedJoke.clevernesRating}</span>
                        <span>•</span>
                        <span>{relatedJoke.episodeId}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[hsl(var(--navy))] py-8 mt-16">
        <div className="container mx-auto px-6 text-center text-white/70">
          <p>© 2024 SpongeBob Secrets Hub. Fan-made project.</p>
        </div>
      </footer>
    </div>
  );
}
