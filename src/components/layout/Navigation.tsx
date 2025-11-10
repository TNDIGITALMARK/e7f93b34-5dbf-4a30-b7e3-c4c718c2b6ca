'use client';

import Link from 'next/link';
import { Search } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-[hsl(var(--ocean-light))] px-6 py-2">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-white font-[family-name:var(--font-heading)]">
              🧽 SpongeBob Secrets
            </div>
          </Link>

          {/* Search and user actions */}
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search episodes, jokes..."
                className="w-64 px-4 py-2 pr-10 rounded-lg border-2 border-white/30 bg-white/20 text-white placeholder:text-white/70 focus:bg-white/30 focus:border-white focus:outline-none"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
            </div>
            <button className="px-4 py-2 rounded-lg bg-white/20 text-white font-semibold hover:bg-white/30 transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-[hsl(var(--navy))] px-6 py-3 shadow-md">
        <div className="container mx-auto">
          <ul className="flex items-center gap-8 text-white font-medium">
            <li>
              <Link
                href="/"
                className="hover:text-[hsl(var(--sandy))] transition-colors uppercase text-sm tracking-wide"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/episodes"
                className="hover:text-[hsl(var(--sandy))] transition-colors uppercase text-sm tracking-wide"
              >
                Episodes
              </Link>
            </li>
            <li>
              <Link
                href="/jokes"
                className="hover:text-[hsl(var(--sandy))] transition-colors uppercase text-sm tracking-wide"
              >
                Hidden Jokes
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className="hover:text-[hsl(var(--sandy))] transition-colors uppercase text-sm tracking-wide"
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[hsl(var(--sandy))] transition-colors uppercase text-sm tracking-wide"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
