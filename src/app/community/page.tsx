'use client';

import { Navigation } from '@/components/layout/Navigation';
import { mockForumThreads, mockUsers } from '@/lib/data/mock-data';
import Link from 'next/link';
import { MessageCircle, TrendingUp, Users, Search, Plus } from 'lucide-react';

export default function CommunityPage() {
  const categories = [
    { id: 'episode_analysis', name: 'Episode Analysis', icon: '📺', color: 'from-blue-400 to-blue-600' },
    { id: 'theory_crafting', name: 'Theory Crafting', icon: '🧠', color: 'from-purple-400 to-purple-600' },
    { id: 'character_deep_dive', name: 'Character Deep Dive', icon: '🧽', color: 'from-yellow-400 to-yellow-600' },
    { id: 'general_discussion', name: 'General Discussion', icon: '💬', color: 'from-green-400 to-green-600' }
  ];

  const featuredThreads = mockForumThreads.filter(t => t.isFeatured);
  const recentThreads = mockForumThreads.filter(t => !t.isFeatured);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[hsl(var(--ocean-medium))] to-[hsl(var(--ocean-dark))] py-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Community Forum</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join fellow fans in discussing theories, analyzing episodes, and sharing discoveries about SpongeBob SquarePants!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-[hsl(var(--sandy))] text-[hsl(var(--navy))] font-bold rounded-lg hover:scale-105 transition-transform shadow-lg">
              <Plus className="w-5 h-5" />
              Create New Thread
            </button>
            <div className="relative max-w-md mx-auto sm:mx-0">
              <input
                type="text"
                placeholder="Search discussions..."
                className="w-full px-6 py-4 pr-12 rounded-lg border-2 border-white/30 bg-white/20 text-white placeholder:text-white/70 focus:bg-white/30 focus:border-white focus:outline-none"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Categories Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Discussion Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(category => (
              <Link
                key={category.id}
                href={`/community/category/${category.id}`}
                className="block group"
              >
                <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  <div className="text-5xl mb-4 text-center">{category.icon}</div>
                  <h3 className="text-xl font-bold text-white text-center mb-2">{category.name}</h3>
                  <div className="text-white/90 text-sm text-center">
                    {mockForumThreads.filter(t => t.category === category.id).length} threads
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Threads */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="text-3xl">⭐</div>
            <h2 className="text-3xl font-bold text-white">Featured Discussions</h2>
          </div>

          <div className="space-y-4">
            {featuredThreads.map(thread => (
              <Link
                key={thread.id}
                href={`/community/thread/${thread.id}`}
                className="block bg-[hsl(var(--card-light))] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover overflow-hidden"
              >
                <div className="flex items-start gap-6 p-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--ocean-light))] to-[hsl(var(--ocean-medium))] flex items-center justify-center text-3xl">
                      {thread.authorAvatar}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-2 group-hover:text-[hsl(var(--ocean-medium))] transition-colors">
                          {thread.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-[hsl(var(--navy))]/60 mb-2">
                          <span className="font-semibold">{thread.author}</span>
                          <span>•</span>
                          <span>{new Date(thread.createdAt).toLocaleDateString()}</span>
                          <span>•</span>
                          <span className="px-3 py-1 bg-[hsl(var(--ocean-light))]/20 text-[hsl(var(--ocean-medium))] rounded-full text-xs font-bold uppercase">
                            {thread.category.replace('_', ' ')}
                          </span>
                        </div>
                      </div>
                      {thread.isFeatured && (
                        <div className="px-3 py-1 bg-[hsl(var(--sandy))] text-[hsl(var(--navy))] rounded-full text-xs font-bold flex items-center gap-1">
                          ⭐ Featured
                        </div>
                      )}
                    </div>

                    <p className="text-[hsl(var(--navy))]/80 mb-4 line-clamp-2">
                      {thread.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-[hsl(var(--navy))]/60">
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        <span className="font-semibold">{thread.replyCount}</span>
                        <span>replies</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-semibold">{thread.upvotes}</span>
                        <span>upvotes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Recent Threads */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-8">Recent Discussions</h2>

            <div className="space-y-4">
              {recentThreads.map(thread => (
                <Link
                  key={thread.id}
                  href={`/community/thread/${thread.id}`}
                  className="block bg-[hsl(var(--card-light))] rounded-xl p-5 shadow hover:shadow-md transition-all card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">
                      {thread.authorAvatar}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-[hsl(var(--navy))] mb-2 group-hover:text-[hsl(var(--ocean-medium))] transition-colors line-clamp-2">
                        {thread.title}
                      </h3>

                      <div className="flex items-center gap-3 text-sm text-[hsl(var(--navy))]/60 mb-2">
                        <span className="font-semibold">{thread.author}</span>
                        <span>•</span>
                        <span>{new Date(thread.createdAt).toLocaleDateString()}</span>
                      </div>

                      <p className="text-sm text-[hsl(var(--navy))]/70 mb-3 line-clamp-2">
                        {thread.excerpt}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-[hsl(var(--navy))]/50">
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {thread.replyCount}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {thread.upvotes}
                        </span>
                        <span className="px-2 py-1 bg-[hsl(var(--ocean-light))]/20 text-[hsl(var(--ocean-medium))] rounded text-xs font-bold">
                          {thread.category.replace('_', ' ')}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Top Contributors */}
            <div className="bg-[hsl(var(--card-light))] rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-6 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Top Contributors
              </h3>

              <div className="space-y-4">
                {mockUsers.slice(0, 5).map((user, index) => (
                  <div key={user.id} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--ocean-light))] to-[hsl(var(--ocean-medium))] flex items-center justify-center text-xl">
                      {user.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-[hsl(var(--navy))] text-sm truncate">
                        {user.username}
                      </div>
                      <div className="text-xs text-[hsl(var(--navy))]/60">
                        {user.reputationScore} points
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-[hsl(var(--sandy))]">
                      #{index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-gradient-to-br from-[hsl(var(--ocean-light))]/20 to-[hsl(var(--ocean-medium))]/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">Community Stats</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/90">Total Members</span>
                  <span className="text-2xl font-bold text-[hsl(var(--sandy))]">1,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/90">Total Threads</span>
                  <span className="text-2xl font-bold text-[hsl(var(--sandy))]">{mockForumThreads.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/90">Active Today</span>
                  <span className="text-2xl font-bold text-[hsl(var(--sandy))]">89</span>
                </div>
              </div>
            </div>

            {/* Community Rules */}
            <div className="bg-[hsl(var(--card-light))] rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-4">Community Guidelines</h3>
              <ul className="space-y-2 text-sm text-[hsl(var(--navy))]/80">
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>Be respectful to all members</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>Stay on topic</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>Credit original discoverers</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>No spoilers without warnings</span>
                </li>
              </ul>
            </div>
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
