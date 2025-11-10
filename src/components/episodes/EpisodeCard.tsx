'use client';

import Link from 'next/link';
import { MessageCircle, Star } from 'lucide-react';
import type { Episode } from '@/lib/data/mock-data';

interface EpisodeCardProps {
  episode: Episode;
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Link
      href={`/episode/${episode.id}`}
      className="block bg-[hsl(var(--card-light))] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 card-hover group"
    >
      {/* Episode thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-blue-200 to-blue-300 overflow-hidden">
        {/* Placeholder image with episode info overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[hsl(var(--ocean-light))] to-[hsl(var(--ocean-medium))]">
          <div className="text-center text-white">
            <div className="text-6xl mb-2">📺</div>
            <div className="text-sm font-semibold">{episode.id}</div>
          </div>
        </div>

        {/* Badge for new discoveries */}
        {episode.hiddenJokesCount > 20 && (
          <div className="absolute top-3 right-3 bg-[hsl(var(--coral))] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
            🔥 {episode.hiddenJokesCount} Secrets!
          </div>
        )}

        {/* Difficulty stars */}
        <div className="absolute bottom-3 left-3 flex gap-1">
          {Array.from({ length: episode.difficulty }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[hsl(var(--sandy))] text-[hsl(var(--sandy))]" />
          ))}
        </div>
      </div>

      {/* Episode info */}
      <div className="p-5">
        <div className="text-sm font-semibold text-[hsl(var(--ocean-medium))] mb-1 uppercase tracking-wide">
          Season {episode.season} • Episode {episode.episodeNumber}
        </div>
        <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-3 group-hover:text-[hsl(var(--ocean-medium))] transition-colors">
          {episode.title}
        </h3>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-[hsl(var(--navy))]/70">
          <div className="flex items-center gap-1">
            <span className="text-lg">🕵️</span>
            <span className="font-semibold">{episode.hiddenJokesCount}</span>
            <span>jokes</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4" />
            <span className="font-semibold">{episode.discussionCount}</span>
            <span>discussions</span>
          </div>
        </div>

        {/* Air date */}
        <div className="mt-3 text-xs text-[hsl(var(--navy))]/50">
          Originally aired: {new Date(episode.airDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>
    </Link>
  );
}
