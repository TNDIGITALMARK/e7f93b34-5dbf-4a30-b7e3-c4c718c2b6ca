// Mock data for SpongeBob Secrets Hub

export interface Episode {
  id: string;
  title: string;
  season: number;
  episodeNumber: number;
  airDate: string;
  thumbnailUrl: string;
  hiddenJokesCount: number;
  discussionCount: number;
  difficulty: 1 | 2 | 3 | 4 | 5;
}

export interface HiddenJoke {
  id: string;
  episodeId: string;
  title: string;
  description: string;
  category: 'adult_humor' | 'cultural_reference' | 'animation_error' | 'easter_egg' | 'character_development';
  screenshotBefore?: string;
  screenshotAfter?: string;
  explanation: string;
  discoveryDate: string;
  discoveredBy: string;
  clevernesRating: number;
  commentCount: number;
  relatedJokes: string[];
}

export interface ForumThread {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  category: 'episode_analysis' | 'theory_crafting' | 'character_deep_dive' | 'general_discussion';
  createdAt: string;
  replyCount: number;
  upvotes: number;
  excerpt: string;
  isFeatured?: boolean;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  bio: string;
  jokesDiscovered: number;
  postsCreated: number;
  reputationScore: number;
  favoriteCharacters: string[];
  joinDate: string;
}

// Mock Episodes
export const mockEpisodes: Episode[] = [
  {
    id: 'S1E1',
    title: 'Help Wanted',
    season: 1,
    episodeNumber: 1,
    airDate: '1999-05-01',
    thumbnailUrl: '/images/episodes/help-wanted.jpg',
    hiddenJokesCount: 12,
    discussionCount: 245,
    difficulty: 2
  },
  {
    id: 'S2E11',
    title: 'Squidville',
    season: 2,
    episodeNumber: 11,
    airDate: '2001-03-06',
    thumbnailUrl: '/images/episodes/squidville.jpg',
    hiddenJokesCount: 18,
    discussionCount: 312,
    difficulty: 4
  },
  {
    id: 'S3E5',
    title: 'The Krusty Krab Training Video',
    season: 3,
    episodeNumber: 5,
    airDate: '2002-05-10',
    thumbnailUrl: '/images/episodes/training-video.jpg',
    hiddenJokesCount: 24,
    discussionCount: 567,
    difficulty: 5
  },
  {
    id: 'S1E9',
    title: 'Pizza Delivery',
    season: 1,
    episodeNumber: 9,
    airDate: '1999-08-14',
    thumbnailUrl: '/images/episodes/pizza-delivery.jpg',
    hiddenJokesCount: 15,
    discussionCount: 423,
    difficulty: 3
  },
  {
    id: 'S2E15',
    title: 'Graveyard Shift',
    season: 2,
    episodeNumber: 15,
    airDate: '2002-09-06',
    thumbnailUrl: '/images/episodes/graveyard-shift.jpg',
    hiddenJokesCount: 21,
    discussionCount: 678,
    difficulty: 4
  },
  {
    id: 'S3E13',
    title: 'Band Geeks',
    season: 3,
    episodeNumber: 13,
    airDate: '2001-09-07',
    thumbnailUrl: '/images/episodes/band-geeks.jpg',
    hiddenJokesCount: 28,
    discussionCount: 892,
    difficulty: 5
  }
];

// Mock Hidden Jokes
export const mockHiddenJokes: HiddenJoke[] = [
  {
    id: 'joke_1',
    episodeId: 'S1E1',
    title: "Gary's Meows Are Actually Words",
    description: 'Gary the snail is actually speaking full sentences, but they sound like meows',
    category: 'character_development',
    explanation: 'If you play Gary\'s meows in reverse or listen closely, he\'s actually communicating complex thoughts. The creators confirmed this was intentional to show Gary is highly intelligent.',
    discoveryDate: '2015-03-12',
    discoveredBy: 'krabby_patty_detective',
    clevernesRating: 4.8,
    commentCount: 234,
    relatedJokes: ['joke_5', 'joke_12']
  },
  {
    id: 'joke_2',
    episodeId: 'S2E11',
    title: 'Dirty Dan Reference',
    description: 'The wanted poster shows a different character design than later appearances',
    category: 'animation_error',
    explanation: 'In the original airing, Dirty Dan\'s wanted poster showed him with brown pants, but in later episodes he has purple pants. This was an animation continuity error that became a running joke among fans.',
    discoveryDate: '2016-07-22',
    discoveredBy: 'patrick_star_fan',
    clevernesRating: 3.2,
    commentCount: 87,
    relatedJokes: ['joke_8']
  },
  {
    id: 'joke_3',
    episodeId: 'S3E5',
    title: 'The POOP Acronym',
    description: 'People Order Our Patties has a hidden meaning',
    category: 'adult_humor',
    explanation: 'The acronym POOP for the Krusty Krab philosophy is an obvious adult humor joke that went over kids\' heads but had parents laughing.',
    discoveryDate: '2014-11-08',
    discoveredBy: 'bikini_bottom_scholar',
    clevernesRating: 4.9,
    commentCount: 512,
    relatedJokes: ['joke_4', 'joke_6']
  },
  {
    id: 'joke_4',
    episodeId: 'S1E9',
    title: 'Krusty Krab Pizza Song Hidden Melody',
    description: 'The pizza song melody references an old advertising jingle',
    category: 'cultural_reference',
    explanation: 'The "Krusty Krab Pizza" song uses the melody from a 1960s pizza chain commercial, creating a nostalgic reference for older viewers.',
    discoveryDate: '2017-05-19',
    discoveredBy: 'melody_master_99',
    clevernesRating: 4.3,
    commentCount: 165,
    relatedJokes: ['joke_3']
  },
  {
    id: 'joke_5',
    episodeId: 'S2E15',
    title: 'Hash-Slinging Slasher Name Origin',
    description: 'The name goes through multiple mispronunciations that reference classic horror',
    category: 'cultural_reference',
    explanation: 'The progression from "Hash-Slinging Slasher" to "Slash-Bringing Hasher" to other variations is a parody of how horror movie villain names get distorted in pop culture.',
    discoveryDate: '2018-10-13',
    discoveredBy: 'horror_fan_sponge',
    clevernesRating: 4.7,
    commentCount: 298,
    relatedJokes: ['joke_7']
  },
  {
    id: 'joke_6',
    episodeId: 'S3E13',
    title: 'Sweet Victory Stadium Crowd',
    description: 'Background characters include references to other Nickelodeon shows',
    category: 'easter_egg',
    explanation: 'If you freeze frame the stadium crowd during the "Sweet Victory" performance, you can spot character designs that resemble other Nick show characters as Easter eggs.',
    discoveryDate: '2019-02-03',
    discoveredBy: 'easter_egg_hunter',
    clevernesRating: 4.6,
    commentCount: 421,
    relatedJokes: ['joke_3', 'joke_5']
  }
];

// Mock Forum Threads
export const mockForumThreads: ForumThread[] = [
  {
    id: 'thread_1',
    title: 'Theory: Is Patrick Actually a Genius Playing Dumb?',
    author: 'deep_thinker_42',
    authorAvatar: '🧠',
    category: 'theory_crafting',
    createdAt: '2024-12-15',
    replyCount: 156,
    upvotes: 892,
    excerpt: 'I\'ve been rewatching the entire series and noticed multiple instances where Patrick displays incredible intelligence for brief moments. What if...',
    isFeatured: true
  },
  {
    id: 'thread_2',
    title: 'Complete Analysis: The Krusty Krab Secret Formula Mystery',
    author: 'plankton_researcher',
    authorAvatar: '🔬',
    category: 'episode_analysis',
    createdAt: '2024-12-10',
    replyCount: 234,
    upvotes: 1247,
    excerpt: 'After analyzing every episode that mentions the formula, I\'ve compiled a comprehensive list of all the hints and clues about what\'s really in it...',
    isFeatured: true
  },
  {
    id: 'thread_3',
    title: 'Why Squidward Is The Most Complex Character',
    author: 'squid_appreciation',
    authorAvatar: '🎨',
    category: 'character_deep_dive',
    createdAt: '2024-12-08',
    replyCount: 98,
    upvotes: 654,
    excerpt: 'Squidward represents the struggle of an artist in a world that doesn\'t appreciate his talent. His character arc is actually the most relatable...'
  },
  {
    id: 'thread_4',
    title: 'Found a NEW Easter Egg in "Band Geeks"!',
    author: 'easter_egg_hunter',
    authorAvatar: '🥚',
    category: 'general_discussion',
    createdAt: '2024-12-14',
    replyCount: 67,
    upvotes: 423,
    excerpt: 'In the crowd scene at 14:23, there\'s a character that looks suspiciously like a young Mr. Krabs. Has anyone else noticed this?'
  },
  {
    id: 'thread_5',
    title: 'The Evolution of SpongeBob\'s Animation Style',
    author: 'animation_analyst',
    authorAvatar: '🎬',
    category: 'episode_analysis',
    createdAt: '2024-12-12',
    replyCount: 123,
    upvotes: 789,
    excerpt: 'Looking at seasons 1-3 vs modern episodes, the animation style has drastically changed. Let\'s break down the artistic decisions...'
  },
  {
    id: 'thread_6',
    title: 'Is Sandy Actually Conducting Experiments on SpongeBob?',
    author: 'conspiracy_sponge',
    authorAvatar: '🧪',
    category: 'theory_crafting',
    createdAt: '2024-12-09',
    replyCount: 89,
    upvotes: 567,
    excerpt: 'Think about it - Sandy is a scientist living underwater in a glass dome. SpongeBob is her perfect test subject and she regularly gets him involved...'
  }
];

// Mock Users
export const mockUsers: User[] = [
  {
    id: 'user_1',
    username: 'krabby_patty_detective',
    avatar: '🕵️',
    bio: 'Finding secrets since 1999',
    jokesDiscovered: 47,
    postsCreated: 123,
    reputationScore: 2847,
    favoriteCharacters: ['SpongeBob', 'Gary', 'Mr. Krabs'],
    joinDate: '2020-03-15'
  },
  {
    id: 'user_2',
    username: 'patrick_star_fan',
    avatar: '⭐',
    bio: 'Is mayonnaise an instrument?',
    jokesDiscovered: 23,
    postsCreated: 89,
    reputationScore: 1654,
    favoriteCharacters: ['Patrick', 'SpongeBob'],
    joinDate: '2021-07-22'
  },
  {
    id: 'user_3',
    username: 'bikini_bottom_scholar',
    avatar: '📚',
    bio: 'Deep diving into Bikini Bottom lore',
    jokesDiscovered: 62,
    postsCreated: 201,
    reputationScore: 3921,
    favoriteCharacters: ['Squidward', 'Sandy', 'Pearl'],
    joinDate: '2019-11-08'
  },
  {
    id: 'user_4',
    username: 'easter_egg_hunter',
    avatar: '🥚',
    bio: 'No Easter egg left unfound!',
    jokesDiscovered: 91,
    postsCreated: 156,
    reputationScore: 4532,
    favoriteCharacters: ['SpongeBob', 'Plankton', 'Karen'],
    joinDate: '2019-02-03'
  }
];

// Search function simulation
export function searchEpisodes(query: string): Episode[] {
  const lowerQuery = query.toLowerCase();
  return mockEpisodes.filter(episode =>
    episode.title.toLowerCase().includes(lowerQuery) ||
    episode.id.toLowerCase().includes(lowerQuery)
  );
}

// Filter by joke type
export function filterJokesByCategory(category: HiddenJoke['category']): HiddenJoke[] {
  return mockHiddenJokes.filter(joke => joke.category === category);
}

// Get episode by ID
export function getEpisodeById(id: string): Episode | undefined {
  return mockEpisodes.find(episode => episode.id === id);
}

// Get jokes by episode
export function getJokesByEpisode(episodeId: string): HiddenJoke[] {
  return mockHiddenJokes.filter(joke => joke.episodeId === episodeId);
}

// Get joke by ID
export function getJokeById(id: string): HiddenJoke | undefined {
  return mockHiddenJokes.find(joke => joke.id === id);
}

// Get threads by category
export function getThreadsByCategory(category: ForumThread['category']): ForumThread[] {
  return mockForumThreads.filter(thread => thread.category === category);
}

// Get featured threads
export function getFeaturedThreads(): ForumThread[] {
  return mockForumThreads.filter(thread => thread.isFeatured);
}
