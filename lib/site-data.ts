export const COMPANY = {
  name: 'GRM Overseas Ltd.',
  shortName: 'GRM Overseas',
  brand: 'GRM',
  founded: 1974,
  email: 'info@grmrice.com',
  phone: '+91 99969 94923',
  domesticUrl: 'https://www.grmconsumers.com',
  social: {
    linkedin: 'https://www.linkedin.com/company/grm-overseas-ltd/',
    instagram: 'https://www.instagram.com/grm_overseas/',
    youtube: 'https://www.youtube.com/@grmoverseasltd.4484',
    facebook: 'https://www.facebook.com/GRMOverseasLtd/',
  },
}

// Three office locations. Full addresses to be confirmed by the client —
// labeled placeholders are used until then.
export const ADDRESSES: {
  label: string
  city: string
  lines: string
}[] = [
  {
    label: 'Registered Office',
    city: 'Delhi',
    lines:
      '128, First Floor, Shiva Market, Pitampura, Delhi 110034, India',
  },
  {
    label: 'Plant',
    city: 'Naultha, Panipat',
    lines:
      '8 K.M. Stone, Gohana-Rohtak Road, Village Naultha, Panipat 132145, Haryana, India',
  },
  {
    label: 'Corporate Office',
    city: 'Gurgaon',
    lines: 'Corporate Office address — Gurgaon, Haryana, India',
  },
]

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Private Label', href: '/specifications' },
  { label: 'Global Presence', href: '/global-presence' },
  { label: 'Media', href: '/media' },
  { label: 'Investors', href: '/investors' },
  { label: 'Contact', href: '/contact' },
]

export const STATS = [
  { value: 50, suffix: '+', label: 'Years of heritage since 1974' },
  { value: 65, suffix: '+', label: 'Countries served worldwide' },
  { value: 440800, suffix: ' MT', label: 'Annual production capacity' },
  { value: 5, prefix: 'Top ', label: 'Among the world’s largest rice exporters' },
]

export const PROCESS = [
  {
    step: 'Procurement',
    detail:
      'Paddy sourced directly from India’s finest basmati-growing belts across the northern plains.',
  },
  {
    step: 'Milling',
    detail: '3 milling plants with a combined capacity of 550 MT per day.',
  },
  {
    step: 'Sortex',
    detail: '9 sortex plants delivering 1,400 MT per day of optical precision.',
  },
  {
    step: 'Packing',
    detail:
      'Flexible packaging from 1 kg retail packs to 20 kg bulk, private-label ready.',
  },
  {
    step: 'Logistics',
    detail: 'Direct access to Kandla and Mundra ports for swift global shipment.',
  },
  {
    step: 'Warehousing',
    detail: '1.75 lakh sq. ft. of warehousing near the western seaports.',
  },
]

export const PRODUCT_PREVIEW = [
  {
    name: 'White Sella',
    description: 'Parboiled, non-sticky grains with a firm, elegant bite.',
    image: '/brand/grains-white-sella.png',
  },
  {
    name: 'Golden Sella',
    description: 'Amber-hued parboiled basmati, aromatic and resilient.',
    image: '/brand/grains-golden-sella.png',
  },
  {
    name: 'Steam',
    description: 'Steam-processed grains that cook fluffy and separate.',
    image: '/brand/grains-steam.png',
  },
  {
    name: 'Raw Basmati',
    description: 'Classic aged basmati with a delicate natural aroma.',
    image: '/brand/basmati-grains.png',
  },
  {
    name: 'Organic',
    description: 'Certified organic basmati, grown without chemical inputs.',
    image: '/brand/cooked-rice.png',
  },
]

export const PRODUCT_GROUPS = [
  {
    id: 'white-sella',
    name: 'White Sella',
    blurb:
      'Parboiled basmati with a clean ivory grain, prized for its firm texture and exceptional elongation.',
    image: '/brand/grains-white-sella.png',
    varieties: [
      '1121 Sella',
      '1718 Sella',
      '1509 Sella',
      'Sughanda Sella',
      'Sharbati Sella',
      'PR 11 Sella',
      'Taj Sella',
      'RH 10 Sella',
    ],
  },
  {
    id: 'golden-sella',
    name: 'Golden Sella',
    blurb:
      'Amber-golden parboiled basmati, rich in aroma and resilient through cooking — a global favourite.',
    image: '/brand/grains-golden-sella.png',
    varieties: [
      '1121 Golden Sella',
      '1718 Golden Sella',
      '1509 Golden Sella',
      'Sughanda Golden Sella',
      'PR 11 Golden',
      'Taj Golden',
      'RH10 Golden',
    ],
  },
  {
    id: 'steam',
    name: 'Steam Rice',
    blurb:
      'Steam-processed basmati that retains its natural character, cooking light, fluffy and separate.',
    image: '/brand/grains-steam.png',
    varieties: [
      '1121 Steam',
      '1718 Steam',
      '1509 Steam',
      '1401 Steam',
      'Sughanda Steam',
      'RH10 Steam',
      'PR 11 Steam',
    ],
  },
]

export interface BrandVariety {
  name: string
  grain: string
  sizes: string
  image: string
}

export interface Brand {
  id: string
  name: string
  fullName: string
  tagline: string
  description: string
  image: string
  markets: string
  varieties: BrandVariety[]
}

export const BRANDS: Brand[] = [
  {
    id: 'himalaya',
    name: 'Himalaya River',
    fullName: 'Himalaya River',
    tagline: 'From the River of Purity',
    description:
      'Our flagship export brand — extra-long grain basmati carrying the crisp purity of the Himalayan foothills. Aged, aromatic and effortlessly elegant, Himalaya River spans premium basmati, sella, brown and long-grain varieties for retail shelves worldwide.',
    image: '/brand/himalaya-river-lineup.png',
    markets: 'UK, Europe, Australia, Maldives, Israel & Georgia',
    varieties: [
      {
        name: 'Himalaya River Premium',
        grain: 'Pusa Steam',
        sizes: '1, 2, 5, 10 & 20 kg',
        image: '/brand/himalaya/premium.png',
      },
      {
        name: 'Himalaya River Jumbo',
        grain: '1121 Extra Long Grain Steam',
        sizes: '5 & 20 kg',
        image: '/brand/himalaya/jumbo.png',
      },
      {
        name: 'Himalaya River Iconic',
        grain: 'Traditional Basmati',
        sizes: '4 & 18 kg',
        image: '/brand/himalaya/iconic.png',
      },
      {
        name: 'Himalaya River Premium Sella',
        grain: '1121 Sella',
        sizes: '1, 5, 10 & 20 kg',
        image: '/brand/himalaya/sella.png',
      },
      {
        name: 'Himalaya River Brown',
        grain: 'Brown Basmati Rice',
        sizes: '1 & 5 kg',
        image: '/brand/himalaya/brown.png',
      },
      {
        name: 'Himalaya River Long Grain',
        grain: 'Long Grain White Rice',
        sizes: '250 g & 1 kg',
        image: '/brand/himalaya/long-grain.png',
      },
      {
        name: 'Himalaya River Easy Cook',
        grain: 'Long Grain Easy Cook Rice',
        sizes: '1 kg',
        image: '/brand/himalaya/easy-cook.png',
      },
    ],
  },
  {
    id: 'tanoush',
    name: 'Tanoush',
    fullName: 'Tanoush',
    tagline: 'Harvesting Blessings',
    description:
      'A fragrant basmati crafted for the world’s great cuisines, with grains that elongate beautifully and stay perfectly separate. The Tanoush range spans steam, sella, golden sella and organic varieties tailored for European and Middle Eastern tables.',
    image: '/brand/brand-tanoush.png',
    markets: 'UK, Europe, Iraq, UAE, Maldives, Turkey & Georgia',
    varieties: [
      {
        name: 'Tanoush Emperor',
        grain: '1121 Steam / Sella',
        sizes: '1 & 5 kg',
        image: '/brand/tanoush/emperor.png',
      },
      {
        name: 'Tanoush King',
        grain: 'Pure 1401 Steam',
        sizes: '1 & 5 kg',
        image: '/brand/tanoush/king.png',
      },
      {
        name: 'Tanoush Lord',
        grain: '1509 Steam',
        sizes: '1 & 5 kg',
        image: '/brand/tanoush/lord.png',
      },
      {
        name: 'Tanoush Duke',
        grain: 'Pure 1121 Golden Sella',
        sizes: '1 & 5 kg',
        image: '/brand/tanoush/duke.png',
      },
      {
        name: 'Tanoush Organic',
        grain: 'Jammu Type 3 Organic',
        sizes: '1 & 5 kg',
        image: '/brand/tanoush/organic.png',
      },
    ],
  },
  {
    id: '10x',
    name: '10X',
    fullName: '10X',
    tagline: 'Ten Times the Standard',
    description:
      'Our newest export brand — a bold, modern basmati line engineered for discerning retail. 10X delivers extra-long 1121 grains with striking shelf presence across premium and sella variants.',
    image: '/brand/brand-10x.png',
    markets: 'Australia, Europe, Jordan, Mauritius, Morocco & Saudi Arabia',
    varieties: [
      {
        name: '10X Indian Basmati',
        grain: '1121 Steam',
        sizes: '5 kg',
        image: '/brand/tenx/indian-basmati.png',
      },
      {
        name: '10X Sella Basmati',
        grain: '1121 Sella',
        sizes: '5 kg',
        image: '/brand/tenx/sella.png',
      },
    ],
  },
]

export const CERTIFICATIONS = [
  'GMP',
  'ISO 22000',
  'BRCGS',
  'FDA Registered',
  'Organic',
  'SQF',
  'Kosher',
  'Halal',
]

// Richer detail used for the certification badges. `logo` points at a
// generated seal emblem shown wherever certifications appear.
export const CERTIFICATION_BADGES: {
  name: string
  abbr: string
  blurb: string
  logo: string
}[] = [
  { name: 'GMP', abbr: 'GMP', blurb: 'Good Manufacturing Practice', logo: '/brand/certs/gmp.png' },
  { name: 'ISO 22000', abbr: 'ISO', blurb: 'Food Safety Management', logo: '/brand/certs/iso.png' },
  { name: 'BRCGS', abbr: 'BRCGS', blurb: 'Global Food Safety Standard', logo: '/brand/certs/brcgs.png' },
  { name: 'FDA Registered', abbr: 'FDA', blurb: 'U.S. Registered Facility', logo: '/brand/certs/fda.png' },
  { name: 'Organic', abbr: 'ORG', blurb: 'Certified Organic', logo: '/brand/certs/organic.png' },
  { name: 'SQF', abbr: 'SQF', blurb: 'Safe Quality Food (GFSI)', logo: '/brand/certs/sqf.png' },
  { name: 'Kosher', abbr: 'OK', blurb: 'Kosher Certified', logo: '/brand/certs/kosher.png' },
  { name: 'Halal', abbr: 'HALAL', blurb: 'Halal Certified', logo: '/brand/certs/halal.png' },
]

// Retailers & distributors we supply. Logos with `logo` render as brand
// marks; entries without a logo fall back to a styled wordmark.
export const CLIENTS: { name: string; logo?: string }[] = [
  { name: 'ASDA', logo: '/brand/clients/asda.svg' },
  { name: 'Tesco', logo: '/brand/clients/tesco.svg' },
  { name: "Sainsbury's" },
  { name: 'Rimi Latvia' },
  { name: 'Home Bargains' },
  { name: 'Amira Supermarkets Iraq' },
  { name: 'Mahmood Rice' },
  { name: 'Sedi Hissam' },
  { name: 'ETG Commodities' },
  { name: 'Durra' },
  { name: 'Al Fanar' },
  { name: 'Nawras' },
  { name: 'Tamashee Miadi Russia' },
  { name: 'Al Fakhama' },
]

export const VALUES = [
  {
    title: 'Integrity',
    description:
      'We honour every commitment — to farmers, partners and the grain itself — with uncompromising transparency.',
    image: '/brand/values/integrity.png',
  },
  {
    title: 'Responsibility',
    description:
      'From field to port, we own the quality and sustainability of every consignment we ship.',
    image: '/brand/values/responsibility.png',
  },
  {
    title: 'Teamwork',
    description:
      'Five decades of trust built by people who work as one, across continents and cultures.',
    image: '/brand/values/teamwork.png',
  },
]

export const TIMELINE = [
  {
    year: '1974',
    title: 'The seed is sown',
    detail:
      'GRM is founded in India’s basmati heartland, built on a single conviction — never compromise on the grain. It is a promise that still defines the house five decades on.',
  },
  {
    year: '1980s–1990s',
    title: 'Roots go global',
    detail:
      'GRM carries Indian basmati to the Middle East, earning a reputation for consistency that turns first orders into decades-long partnerships across the Gulf.',
  },
  {
    year: '2000s',
    title: 'A house of brands',
    detail:
      'Flagship brands are launched and export reach widens across MENA, the UK and beyond — a proven track record that establishes GRM among the world’s leading exporters.',
  },
  {
    year: '2020',
    title: 'GRM 2.0 — heritage comes home',
    detail:
      'Nearly fifty years of export-grade quality is brought to Indian consumers, marrying a trusted legacy with a modern, listed-company ambition.',
  },
  {
    year: 'Today',
    title: 'Fifty years, and growing',
    detail:
      'Among the top 5 exporters of rice in the world — a listed basmati house shipping to 65+ countries, still rooted in the grain.',
  },
]

export const LEADERSHIP = [
  {
    name: 'Atul Garg',
    role: 'Chairman & Managing Director',
    bio: 'Leads GRM’s global vision, steering the company’s growth as a listed basmati house with a presence across 65+ countries.',
  },
  {
    name: 'Board of Directors',
    role: 'Executive & Independent Directors',
    bio: 'A seasoned board guiding strategy, governance and responsible growth. Full profiles available in the investor section.',
  },
]

export const MANUFACTURING = [
  {
    location: 'Naultha, Panipat',
    state: 'Haryana',
    detail: 'Flagship milling and sortex complex on the Gohana-Rohtak road.',
  },
  {
    location: 'Panipat (Gohana Road)',
    state: 'Haryana',
    detail: 'Additional processing capacity in India’s basmati heartland.',
  },
  {
    location: 'Gandhidham',
    state: 'Gujarat',
    detail: 'Warehousing and export logistics near Kandla & Mundra ports.',
  },
]

export const PORTS = [
  { name: 'Kandla', coordinates: [70.22, 22.99] as [number, number] },
  { name: 'Mundra', coordinates: [69.72, 22.84] as [number, number] },
]

export const DESTINATIONS: {
  name: string
  region: string
  coordinates: [number, number]
}[] = [
  { name: 'Iran', region: 'Middle East', coordinates: [53.69, 32.43] },
  { name: 'Iraq', region: 'Middle East', coordinates: [43.68, 33.22] },
  { name: 'Yemen', region: 'Middle East', coordinates: [48.52, 15.55] },
  { name: 'Malaysia', region: 'Asia Pacific', coordinates: [101.98, 4.21] },
  { name: 'Saudi Arabia', region: 'Middle East', coordinates: [45.08, 23.88] },
  { name: 'Algeria', region: 'Africa', coordinates: [2.63, 28.03] },
  { name: 'Somalia', region: 'Africa', coordinates: [46.2, 5.15] },
  { name: 'Oman', region: 'Middle East', coordinates: [57.02, 21.47] },
  { name: 'Turkey', region: 'Europe', coordinates: [35.24, 38.96] },
  { name: 'Egypt', region: 'Africa', coordinates: [30.8, 26.82] },
  { name: 'Djibouti', region: 'Africa', coordinates: [42.59, 11.83] },
  { name: 'Syria', region: 'Middle East', coordinates: [38.99, 34.8] },
  { name: 'Ukraine', region: 'Europe', coordinates: [31.16, 48.38] },
  { name: 'Russia', region: 'Europe', coordinates: [37.62, 55.75] },
  { name: 'China', region: 'Asia Pacific', coordinates: [104.19, 35.86] },
  { name: 'United Kingdom', region: 'Europe', coordinates: [-1.55, 52.36] },
  { name: 'Jordan', region: 'Middle East', coordinates: [36.24, 30.59] },
  { name: 'Canada', region: 'Americas', coordinates: [-106.35, 56.13] },
  { name: 'Indonesia', region: 'Asia Pacific', coordinates: [113.92, -0.79] },
  { name: 'Nepal', region: 'Asia Pacific', coordinates: [84.12, 28.39] },
  { name: 'South Sudan', region: 'Africa', coordinates: [31.3, 6.88] },
  { name: 'United Arab Emirates', region: 'Middle East', coordinates: [54.37, 24.45] },
  { name: 'Morocco', region: 'Africa', coordinates: [-7.09, 31.79] },
  { name: 'Kenya', region: 'Africa', coordinates: [37.91, -0.02] },
  { name: 'Cyprus', region: 'Europe', coordinates: [33.43, 35.13] },
  { name: 'Mauritania', region: 'Africa', coordinates: [-10.94, 21.0] },
  { name: 'Bahrain', region: 'Middle East', coordinates: [50.55, 26.07] },
  { name: 'Germany', region: 'Europe', coordinates: [10.45, 51.17] },
  { name: 'Georgia', region: 'Europe', coordinates: [43.36, 42.32] },
  { name: 'Lebanon', region: 'Middle East', coordinates: [35.86, 33.85] },
  { name: 'Libya', region: 'Africa', coordinates: [17.23, 26.34] },
  { name: 'Mozambique', region: 'Africa', coordinates: [35.53, -18.67] },
  { name: 'Israel', region: 'Middle East', coordinates: [34.85, 31.05] },
  { name: 'Azerbaijan', region: 'Europe', coordinates: [47.58, 40.14] },
  { name: 'Peru', region: 'Americas', coordinates: [-75.02, -9.19] },
  { name: 'Guinea', region: 'Africa', coordinates: [-9.7, 9.95] },
  { name: 'Netherlands', region: 'Europe', coordinates: [5.29, 52.13] },
  { name: 'Sweden', region: 'Europe', coordinates: [18.64, 60.13] },
  { name: 'Qatar', region: 'Middle East', coordinates: [51.18, 25.35] },
  { name: 'Portugal', region: 'Europe', coordinates: [-8.22, 39.4] },
  { name: 'Australia', region: 'Asia Pacific', coordinates: [133.78, -25.27] },
  { name: 'DR Congo', region: 'Africa', coordinates: [21.76, -4.04] },
  { name: 'Tanzania', region: 'Africa', coordinates: [34.89, -6.37] },
  { name: 'Mauritius', region: 'Africa', coordinates: [57.55, -20.35] },
  { name: 'South Africa', region: 'Africa', coordinates: [24.99, -28.48] },
  { name: 'Kazakhstan', region: 'Asia Pacific', coordinates: [66.92, 48.02] },
  { name: 'Norway', region: 'Europe', coordinates: [8.47, 60.47] },
  { name: 'Kuwait', region: 'Middle East', coordinates: [47.98, 29.31] },
  { name: 'Maldives', region: 'Asia Pacific', coordinates: [73.22, 3.2] },
  { name: 'Sudan', region: 'Africa', coordinates: [30.22, 12.86] },
  { name: 'Singapore', region: 'Asia Pacific', coordinates: [103.82, 1.35] },
  { name: 'New Zealand', region: 'Asia Pacific', coordinates: [174.89, -40.9] },
  { name: 'Bangladesh', region: 'Asia Pacific', coordinates: [90.36, 23.68] },
  { name: 'Italy', region: 'Europe', coordinates: [12.57, 41.87] },
  { name: 'Vietnam', region: 'Asia Pacific', coordinates: [108.28, 14.06] },
  { name: 'Niger', region: 'Africa', coordinates: [8.08, 17.61] },
  { name: 'Chile', region: 'Americas', coordinates: [-71.54, -35.68] },
  { name: 'Thailand', region: 'Asia Pacific', coordinates: [100.99, 15.87] },
  { name: 'Palestine', region: 'Middle East', coordinates: [35.23, 31.95] },
  { name: 'Cuba', region: 'Americas', coordinates: [-77.78, 21.52] },
  { name: 'Sri Lanka', region: 'Asia Pacific', coordinates: [80.77, 7.87] },
  { name: 'Bosnia', region: 'Europe', coordinates: [17.68, 43.92] },
  { name: 'Togo', region: 'Africa', coordinates: [0.82, 8.62] },
  { name: 'France', region: 'Europe', coordinates: [2.21, 46.6] },
  { name: 'Ireland', region: 'Europe', coordinates: [-8.24, 53.41] },
]

export const REGIONS = [
  {
    name: 'Middle East',
    blurb: 'Our largest market — a cornerstone of GRM’s standing among the world’s top 5 rice exporters.',
    countries: 'UAE, Saudi Arabia, Kuwait, Qatar, Oman, Bahrain, Iraq & more',
  },
  {
    name: 'Europe',
    blurb: 'Trusted by leading retailers and distributors across the continent.',
    countries: 'UK, Germany, France, Netherlands, Italy, Spain & more',
  },
  {
    name: 'Americas',
    blurb: 'Serving retail and foodservice across North America.',
    countries: 'United States & Canada',
  },
  {
    name: 'Africa',
    blurb: 'A fast-growing footprint across the continent.',
    countries: 'South Africa, Kenya, Nigeria, Egypt, Morocco & more',
  },
  {
    name: 'Asia Pacific',
    blurb: 'Serving diaspora and premium retail markets.',
    countries: 'Australia, Singapore, Malaysia, Japan & more',
  },
]

export const TRADE_FAIRS: { name: string; city: string; logo?: string }[] = [
  { name: 'Gulfood', city: 'Dubai, UAE', logo: '/brand/fairs/gulfood.png' },
  { name: 'SIAL', city: 'Paris, France', logo: '/brand/fairs/sial.png' },
  { name: 'Gulfood', city: 'Riyadh, Saudi Arabia', logo: '/brand/fairs/gulfood.png' },
  { name: 'WorldFood', city: 'Istanbul, Türkiye', logo: '/brand/fairs/worldfood.png' },
  { name: 'Indus Food', city: 'Hyderabad, India', logo: '/brand/fairs/indusfood.png' },
  { name: 'WorldFood', city: 'Baku, Azerbaijan', logo: '/brand/fairs/worldfood.png' },
]

export interface SpecRow {
  variety: string
  group: 'White Sella' | 'Golden Sella' | 'Steam'
  length: string
  moisture: string
  broken: string
  purity: string
  foreign: string
  damaged: string
}

export const SPECIFICATIONS: SpecRow[] = [
  { variety: '1121 Sella', group: 'White Sella', length: '8.30 – 8.40', moisture: '≤ 12.5', broken: '≤ 1', purity: '≥ 95', foreign: 'Nil', damaged: '≤ 1' },
  { variety: '1718 Sella', group: 'White Sella', length: '8.00 – 8.20', moisture: '≤ 12.5', broken: '≤ 1', purity: '≥ 95', foreign: 'Nil', damaged: '≤ 1' },
  { variety: '1509 Sella', group: 'White Sella', length: '7.90 – 8.00', moisture: '≤ 12.5', broken: '≤ 1', purity: '≥ 95', foreign: 'Nil', damaged: '≤ 1' },
  { variety: 'Sugandha Sella', group: 'White Sella', length: '7.60 – 7.80', moisture: '≤ 12.5', broken: '≤ 2', purity: '≥ 93', foreign: 'Nil', damaged: '≤ 1' },
  { variety: 'Sharbati Sella', group: 'White Sella', length: '7.00 – 7.20', moisture: '≤ 12.5', broken: '≤ 2', purity: '≥ 90', foreign: 'Nil', damaged: '≤ 1.5' },
  { variety: 'PR 11 Sella', group: 'White Sella', length: '6.60 – 6.80', moisture: '≤ 13', broken: '≤ 2', purity: '≥ 90', foreign: 'Nil', damaged: '≤ 1.5' },
  { variety: '1121 Golden Sella', group: 'Golden Sella', length: '8.30 – 8.40', moisture: '≤ 12.5', broken: '≤ 1', purity: '≥ 95', foreign: 'Nil', damaged: '≤ 1' },
  { variety: '1718 Golden Sella', group: 'Golden Sella', length: '8.00 – 8.20', moisture: '≤ 12.5', broken: '≤ 1', purity: '≥ 95', foreign: 'Nil', damaged: '≤ 1' },
  { variety: '1509 Golden Sella', group: 'Golden Sella', length: '7.90 – 8.00', moisture: '≤ 12.5', broken: '≤ 1', purity: '≥ 95', foreign: 'Nil', damaged: '≤ 1' },
  { variety: 'Sugandha Golden', group: 'Golden Sella', length: '7.60 – 7.80', moisture: '≤ 12.5', broken: '≤ 2', purity: '≥ 93', foreign: 'Nil', damaged: '≤ 1' },
  { variety: 'PR 11 Golden', group: 'Golden Sella', length: '6.60 – 6.80', moisture: '≤ 13', broken: '≤ 2', purity: '≥ 90', foreign: 'Nil', damaged: '≤ 1.5' },
  { variety: '1121 Steam', group: 'Steam', length: '8.30 – 8.40', moisture: '≤ 12.5', broken: '≤ 1', purity: '≥ 95', foreign: 'Nil', damaged: '≤ 1' },
  { variety: '1718 Steam', group: 'Steam', length: '8.00 – 8.20', moisture: '≤ 12.5', broken: '≤ 1', purity: '≥ 95', foreign: 'Nil', damaged: '≤ 1' },
  { variety: '1509 Steam', group: 'Steam', length: '7.90 – 8.00', moisture: '≤ 12.5', broken: '≤ 1', purity: '≥ 95', foreign: 'Nil', damaged: '≤ 1' },
  { variety: '1401 Steam', group: 'Steam', length: '7.70 – 7.90', moisture: '≤ 12.5', broken: '≤ 2', purity: '≥ 93', foreign: 'Nil', damaged: '≤ 1' },
]

export const PACKAGING = [
  'Pack sizes from 1 kg to 50 kg',
  'Jute, PP, BOPP, non-woven bags & pouches',
  'Custom private-label artwork & printing',
  'Handles, zippers and premium finishes',
]

// Unbranded packaging formats — signalling private-label capability.
export const PACKAGING_TYPES: { name: string; image: string }[] = [
  { name: 'Jute Bags', image: '/brand/packaging/jute.png' },
  { name: 'PP Bags', image: '/brand/packaging/pp.png' },
  { name: 'BOPP Bags', image: '/brand/packaging/bopp.png' },
  { name: 'Non-Woven Bags', image: '/brand/packaging/non-woven.png' },
  { name: 'Pouch Packing', image: '/brand/packaging/pouch.png' },
]

export const LOADABILITY = [
  { format: '20 ft container', capacity: '≈ 20–24 MT' },
  { format: '40 ft container', capacity: '≈ 26–28 MT' },
]

export interface InvestorDoc {
  title: string
  date: string
}

export const INVESTOR_SECTIONS: {
  category: string
  docs: InvestorDoc[]
}[] = [
  {
    category: 'Financial Results',
    docs: [
      { title: 'Audited Financial Results — FY 2023–24', date: 'May 2024' },
      { title: 'Q3 Unaudited Results — FY 2023–24', date: 'Feb 2024' },
      { title: 'Q2 Unaudited Results — FY 2023–24', date: 'Nov 2023' },
      { title: 'Q1 Unaudited Results — FY 2023–24', date: 'Aug 2023' },
    ],
  },
  {
    category: 'Annual Reports',
    docs: [
      { title: 'Annual Report 2023–24', date: '2024' },
      { title: 'Annual Report 2022–23', date: '2023' },
      { title: 'Annual Report 2021–22', date: '2022' },
    ],
  },
  {
    category: 'Shareholding Pattern',
    docs: [
      { title: 'Shareholding Pattern — Mar 2024', date: 'Apr 2024' },
      { title: 'Shareholding Pattern — Dec 2023', date: 'Jan 2024' },
    ],
  },
  {
    category: 'Corporate Announcements',
    docs: [
      { title: 'Outcome of Board Meeting', date: 'May 2024' },
      { title: 'Newspaper Publication of Results', date: 'May 2024' },
      { title: 'Investor Presentation', date: 'May 2024' },
    ],
  },
  {
    category: 'Corporate Governance & Policies',
    docs: [
      { title: 'Memorandum & Articles of Association (MOA/AOA)', date: '' },
      { title: 'Code of Conduct', date: '' },
      { title: 'Brief Profile of Directors', date: '' },
      { title: 'Board & Committee Composition', date: '' },
      { title: 'CSR Policy', date: '' },
    ],
  },
]

// Corporate profile PDF — client to provide the final file.
export const COMPANY_PROFILE_PDF = '/brand/grm-company-profile.pdf'

// Private-label 5-step process for the Private Label & Specifications page.
export const PRIVATE_LABEL_STEPS: {
  step: string
  title: string
  detail: string
  icon: 'wheat' | 'package' | 'lineChart' | 'fileSignature' | 'ship'
}[] = [
  {
    step: '01',
    title: 'Rice Selection',
    detail:
      'We study your target market and recommend the right varieties, grades and price points from our SELLA, GOLDEN SELLA and STEAM range.',
    icon: 'wheat',
  },
  {
    step: '02',
    title: 'Packaging & Compliance',
    detail:
      'Compliant packaging design, multilingual labels and certifications tailored to your destination country.',
    icon: 'package',
  },
  {
    step: '03',
    title: 'Market Study & Pricing',
    detail:
      'Competitor benchmarking and a costed pricing strategy that protects your margins.',
    icon: 'lineChart',
  },
  {
    step: '04',
    title: 'Agreement & Production',
    detail:
      'On sign-off, production runs under strict QA at our certified plants to your exact specification.',
    icon: 'fileSignature',
  },
  {
    step: '05',
    title: 'Logistics & Delivery',
    detail:
      'Export documentation and global logistics, delivered to your port with full traceability.',
    icon: 'ship',
  },
]

export const PRIVATE_LABEL_OFFERINGS: {
  title: string
  detail: string
  image: string
}[] = [
  {
    title: 'Custom Rice Selection',
    detail:
      'The full SELLA, GOLDEN SELLA and STEAM range across every grain length and price point.',
    image: '/brand/private-label/rice-varieties.png',
  },
  {
    title: 'Fully Customised Packaging',
    detail:
      '1 kg–50 kg in jute, PP, BOPP, non-woven and pouches — with handles, zippers and premium finishes.',
    image: '/brand/private-label/packaging-lineup.png',
  },
  {
    title: 'Branding & Design Support',
    detail:
      'Multilingual labels (English, Arabic, French) compliant with BRCGS, HALAL, ORGANIC and FDA labeling standards.',
    image: '/brand/private-label/design-desk.png',
  },
  {
    title: 'Global Logistics & Documentation',
    detail:
      'End-to-end export documentation and shipping to 65+ countries from Indian ports.',
    image: '/brand/private-label/port-logistics.png',
  },
]

// Indicative FOB base rates (USD per MT) — placeholder figures pending
// confirmation from the client. Used by the price-estimate calculator.
export const CALCULATOR_VARIETIES: {
  name: string
  category: 'SELLA' | 'GOLDEN SELLA' | 'STEAM'
  baseRatePerMT: number
}[] = [
  { name: '1121 Sella', category: 'SELLA', baseRatePerMT: 1150 },
  { name: '1509 Sella', category: 'SELLA', baseRatePerMT: 1050 },
  { name: 'Sugandha Sella', category: 'SELLA', baseRatePerMT: 950 },
  { name: '1121 Golden Sella', category: 'GOLDEN SELLA', baseRatePerMT: 1200 },
  { name: '1509 Golden Sella', category: 'GOLDEN SELLA', baseRatePerMT: 1100 },
  { name: '1121 Steam', category: 'STEAM', baseRatePerMT: 1250 },
  { name: '1401 Steam', category: 'STEAM', baseRatePerMT: 1120 },
]

export const CALCULATOR_PACK_SIZES: { label: string; factor: number }[] = [
  { label: '1 kg', factor: 1.12 },
  { label: '5 kg', factor: 1.06 },
  { label: '10 kg', factor: 1.03 },
  { label: '20 kg', factor: 1.0 },
  { label: '50 kg', factor: 0.98 },
]
