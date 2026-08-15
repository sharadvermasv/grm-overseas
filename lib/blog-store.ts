export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  coverImage: string
  author: {
    name: string
    role: string
    avatar?: string
  }
  publishedAt: string
  status: 'published' | 'draft' | 'scheduled'
  views: number
  readingTimeMinutes: number
  featured?: boolean
}

export const BLOG_CATEGORIES = [
  'All',
  'Export Insights',
  'AgTech & Milling',
  'Basmati Culinary',
  'Sustainability',
  'Market Trends',
] as const

export const DEFAULT_AUTHORS = [
  {
    name: 'GRM Editorial Team',
    role: 'Corporate Communications, GRM Overseas Ltd.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
  },
  {
    name: 'Atul Garg',
    role: 'Managing Director, GRM Overseas Ltd.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
  },
  {
    name: 'Dr. Rajesh Sharma',
    role: 'Head of Quality Assurance & Grain Science',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
  },
  {
    name: 'Chef Ananya Sen',
    role: 'Culinary Advisor & Basmati Specialist',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
  },
]

export const PRESET_COVER_IMAGES = [
  {
    label: 'Golden Hour Paddy Fields',
    url: '/brand/paddy-field.png',
  },
  {
    label: 'Basmati Grain Quality Inspection',
    url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: 'Modern Milling & Silo Facility',
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: 'Global Maritime Freight & Logistics',
    url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: 'Gourmet Biryani & Basmati Dish',
    url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: 'Farmer Partnerships & Sustainable Harvest',
    url: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1200&q=80',
  },
]

export const SEED_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'The Science of Aging Basmati: Why 12 to 24 Months of Maturation Perfects the Grain',
    slug: 'science-of-aging-basmati-rice',
    excerpt:
      'Explore the biochemical transformation that occurs when long-grain Basmati is aged in temperature-controlled silos, resulting in non-sticky separation, concentrated aroma, and double grain elongation.',
    content: `## The Art and Chemistry of Grain Maturation

Basmati rice is one of the few staple grains in the world that improves dramatically with age. Much like fine wine or aged single malts, freshly harvested paddy contains excess moisture and volatile moisture pockets that cause grains to become sticky when cooked.

At GRM Overseas, our state-of-the-art storage facilities in Naultha, Panipat house over **4,40,000 MT** of grain under strictly regulated humidity and aeration controls.

### What Happens During the Aging Process?

1. **Moisture Equilibrium**: The natural moisture content is gradually drawn down to an optimal 11–12%, firming the starch structure.
2. **2-Acetyl-1-Pyrroline (2AP) Concentration**: The compound responsible for Basmati’s iconic pandan-like aroma stabilizes and intensifies within the grain's endosperm.
3. **Amylase Activity**: Enzymes gradually modify the amylose-to-amylopectin ratio, ensuring that every grain elongates up to **2.5x its original length** without bursting.

> "Aged basmati is not merely a product; it is the culmination of seasonal patience, climatic discipline, and half a century of milling mastery."

---

### Key Cooking Characteristics of Aged Basmati

| Metric | Fresh Harvest (0-3 Mos) | GRM Vintage Aged (12-24 Mos) |
|---|---|---|
| **Cooked Elongation** | 1.4x - 1.6x | **2.0x - 2.5x** |
| **Fluffiness & Separation** | Clumping / Sticky | **100% Free-Flowing Individual Grains** |
| **Aroma Intensity** | Mild / Vegetal | **Rich, Nutty, Authentic Basmati Note** |
| **Water Absorption** | Lower | **Up to 2.5x Weight in Broth** |

Whether supplied under private label to the United Kingdom, Europe, or the Middle East, our aged basmati guarantees consistent table performance for international retail brands and fine dining establishments.`,
    category: 'AgTech & Milling',
    tags: ['Aged Basmati', 'Grain Science', 'Milling', 'Quality Assurance'],
    coverImage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80',
    author: DEFAULT_AUTHORS[2],
    publishedAt: '2026-08-10',
    status: 'published',
    views: 1420,
    readingTimeMinutes: 5,
    featured: true,
  },
  {
    id: 'post-2',
    title: 'Navigating Global Food Safety Compliance: BRCGS, FDA, and EU MRL Standards in 2026',
    slug: 'global-food-safety-compliance-brcgs-fda-eu-mrl',
    excerpt:
      'An in-depth guide for global food buyers on how GRM Overseas maintains zero-defect compliance across 65+ export destinations with ISO 22000, FDA FSMA, and ultra-low pesticide residue testing.',
    content: `## Stricter Regulations, Higher Trust

International food safety regulations for grain imports have evolved dramatically over the last decade. With the European Union revising Maximum Residue Limits (MRL) for tricyclazole and other crop protection agents, global supermarket chains require absolute supply chain transparency.

### Our Multi-Tier Testing Protocol

GRM Overseas operates in-house NABL-accredited testing laboratories coupled with independent third-party certifications by **SGS**, **Eurofins**, and **Intertek**.

- **Field-Level Traceability**: Direct contract farming programs with over 15,000 farmers in the Himalayan foothills.
- **DNA Purity Verification**: Testing basmati varietal purity via PCR (Polymerase Chain Reaction) to ensure >95% varietal integrity.
- **Heavy Metal & Aflatoxin Screening**: Zero-tolerance checks for cadmium, lead, arsenic, and mycotoxins.

\`\`\`
Paddy Intake ➔ Optical Sorter (Bühler Sortex) ➔ De-stoner ➔ Metal Detection ➔ Laboratory PCR ➔ Sealed Containerization
\`\`\`

By maintaining **BRCGS Grade AA**, **FDA FSMA**, **GMP**, and **Halal/Kosher** certifications, GRM provides international distributors with frictionless customs clearance across Europe, North America, Oceania, and the GCC.`,
    category: 'Export Insights',
    tags: ['Export Compliance', 'BRCGS', 'Food Safety', 'EU Standards'],
    coverImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    author: DEFAULT_AUTHORS[0],
    publishedAt: '2026-08-04',
    status: 'published',
    views: 980,
    readingTimeMinutes: 4,
    featured: false,
  },
  {
    id: 'post-3',
    title: 'From Panipat to the World: Sustainable Paddy Sourcing in the Himalayan Foothills',
    slug: 'sustainable-paddy-sourcing-himalayan-foothills',
    excerpt:
      'How regenerative farming, Direct Seeded Rice (DSR) techniques, and water-efficient irrigation are reducing carbon footprints across our farmer network in Haryana and Punjab.',
    content: `## Protecting the Terroir of Authentic Basmati

Geographical Indication (GI) tagged Basmati rice thrives exclusively in the specific microclimates of the Indo-Gangetic plains, fed by mineral-rich snowmelt from the Himalayas.

As custodians of this heritage since 1974, GRM Overseas is pioneering sustainability frameworks that preserve soil vitality and safeguard groundwater reserves.

### Key ESG Initiatives in 2026

- **Direct Seeded Rice (DSR)**: Assisting farmers in adopting DSR to reduce water consumption by up to **30%** and cut methane emissions from flooded paddies.
- **Laser Land Levelling**: Providing precision levelling equipment across 40+ rural clusters to eliminate irrigation wastage.
- **Farmer Income Security**: Guaranteed buyback contracts ensuring fair market premiums above minimum support prices.

Sustainable agriculture is not just an environmental imperative; it is the cornerstone of sustainable food security.`,
    category: 'Sustainability',
    tags: ['ESG', 'Direct Seeded Rice', 'Water Conservation', 'Heritage'],
    coverImage: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1200&q=80',
    author: DEFAULT_AUTHORS[1],
    publishedAt: '2026-07-28',
    status: 'published',
    views: 1250,
    readingTimeMinutes: 4,
    featured: false,
  },
  {
    id: 'post-4',
    title: 'Private Label Basmati: How Retailers in Europe & the GCC Build High-Margin Grain Brands',
    slug: 'private-label-basmati-strategy-retailers',
    excerpt:
      'Learn how leading global supermarkets partner with GRM Overseas for turnkey private label manufacturing—from custom pouch packaging and barcode serialization to bespoke aging grades.',
    content: `## Why Private Label Rice is Outpacing Generic Commodities

Consumer demand for premium, authentic culinary ingredients has made private label basmati a key growth driver for supermarkets across the UK, Scandinavia, Saudi Arabia, and the United Arab Emirates.

### End-to-End Turnkey OEM Solutions

1. **Custom Blends & Grades**: Choose from 1121 Extra Long Grain, Traditional Dehradun, Pusa Basmati, Golden Sella, or 100% Organic White Sella.
2. **Packaging Flexibility**: From 500g nitrogen-flushed retail standup pouches with laser scoring, to 5kg woven laminated bags and 20kg bulk food service sacks.
3. **Automated Multi-lingual Compliance**: Nutrition fact panels rendered in Arabic, French, German, Spanish, and English meeting local labeling directives.

Partnering with GRM Overseas means leveraging five decades of supply chain dependability, guaranteed shipping slots, and world-class grain consistency.`,
    category: 'Market Trends',
    tags: ['Private Label', 'OEM', 'Retail Trends', 'FMCG'],
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    author: DEFAULT_AUTHORS[0],
    publishedAt: '2026-07-15',
    status: 'published',
    views: 840,
    readingTimeMinutes: 3,
    featured: false,
  },
  {
    id: 'post-5',
    title: 'Mastering the Royal Dum Biryani: Chef Insights on Grain Texture and Infusion',
    slug: 'mastering-royal-dum-biryani-chef-insights',
    excerpt:
      'A culinary deep-dive into why extra-long grain steam basmati absorbs saffron, ghee, and whole spices without breaking during slow dum sealed-pot cooking.',
    content: `## The Secret of the Royal Deg

In classic royal Awadhi and Hyderabadi culinary traditions, the rice is the hero. An inferior grain will turn mushy under heavy steam or break when tossed with spiced yakhni broth.

### Chef Ananya's Golden Rules for Basmati:

1. **Gentle Soaking (45 Mins)**: Allows the starch granule to hydrate evenly from the core outwards.
2. **Parboiling to 70%**: The grain should have a subtle bite before layering with meat and fried onions (birista).
3. **Heavy-Bottom Sealed Pot**: Using dough to seal the pot lid ensures aromatic steam circulates without escaping.

When using **GRM 1121 XXL Extra Long Grain**, cooked grains routinely surpass **22mm in length**, yielding that unforgettable feather-light texture cherished across world culinary capitals.`,
    category: 'Basmati Culinary',
    tags: ['Biryani', 'Culinary Craft', 'Recipes', 'Food Service'],
    coverImage: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
    author: DEFAULT_AUTHORS[3],
    publishedAt: '2026-07-02',
    status: 'published',
    views: 2100,
    readingTimeMinutes: 4,
    featured: false,
  },
]

const STORAGE_KEY = 'grm_blog_posts_v1'

export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / wordsPerMinute))
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getStoredPosts(): BlogPost[] {
  if (typeof window === 'undefined') {
    return SEED_POSTS
  }
  try {
    const item = localStorage.getItem(STORAGE_KEY)
    if (!item) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_POSTS))
      return SEED_POSTS
    }
    return JSON.parse(item)
  } catch {
    return SEED_POSTS
  }
}

export function savePosts(posts: BlogPost[]): void {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
    } catch (err) {
      console.error('Failed to save blog posts:', err)
    }
  }
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getStoredPosts()
  return posts.find((p) => p.slug === slug && p.status === 'published')
}

export function getPostById(id: string): BlogPost | undefined {
  const posts = getStoredPosts()
  return posts.find((p) => p.id === id)
}

export function createPost(postData: Omit<BlogPost, 'id' | 'views' | 'readingTimeMinutes'>): BlogPost {
  const posts = getStoredPosts()
  const newPost: BlogPost = {
    ...postData,
    id: `post-${Date.now()}`,
    views: 0,
    readingTimeMinutes: calculateReadingTime(postData.content),
  }
  const updated = [newPost, ...posts]
  savePosts(updated)
  return newPost
}

export function updatePost(id: string, updates: Partial<BlogPost>): BlogPost | null {
  const posts = getStoredPosts()
  const index = posts.findIndex((p) => p.id === id)
  if (index === -1) return null

  const existing = posts[index]
  const updatedPost: BlogPost = {
    ...existing,
    ...updates,
    readingTimeMinutes: updates.content ? calculateReadingTime(updates.content) : existing.readingTimeMinutes,
  }
  posts[index] = updatedPost
  savePosts(posts)
  return updatedPost
}

export function deletePost(id: string): boolean {
  const posts = getStoredPosts()
  const filtered = posts.filter((p) => p.id !== id)
  if (filtered.length === posts.length) return false
  savePosts(filtered)
  return true
}

export function incrementPostViews(id: string): void {
  const posts = getStoredPosts()
  const post = posts.find((p) => p.id === id)
  if (post) {
    post.views = (post.views || 0) + 1
    savePosts(posts)
  }
}

export function resetToSeedData(): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_POSTS))
  }
}
