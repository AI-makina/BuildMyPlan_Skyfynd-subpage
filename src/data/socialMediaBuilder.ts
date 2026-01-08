// Social Media Management Custom Builder Data
// Based on specification with Step 1 as info-only (triggers recommendations)

export interface SocialMediaOption {
  id: string;
  label: string;
  price?: number | null;
  recurring?: 'monthly';
  startsAt?: boolean;
  customQuote?: boolean;
  multiplier?: number;
  months?: number;
  postsPerMonth?: number;
  oneTime?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples?: string;
  };
}

// Step 1: Management Goal (Info Only - triggers recommendations)
export const managementGoalOptions: SocialMediaOption[] = [
  {
    id: 'awareness',
    label: 'Brand Awareness',
    tooltip: {
      whatItIs: 'Building visibility and recognition for your brand across social platforms.',
      idealIf: "You're new, launching, or want to expand your reach to new audiences.",
      examples: 'Startups, rebrands, market expansion',
    },
  },
  {
    id: 'community',
    label: 'Community Building',
    tooltip: {
      whatItIs: 'Growing and nurturing an engaged audience that interacts with your brand.',
      idealIf: 'You want loyal followers who comment, share, and advocate for you.',
      examples: 'Lifestyle brands, creators, membership businesses',
    },
  },
  {
    id: 'lead-gen',
    label: 'Lead Generation',
    tooltip: {
      whatItIs: 'Using social content to capture potential customer information and drive inquiries.',
      idealIf: 'You want social media to directly feed your sales pipeline.',
      examples: 'B2B companies, service businesses, coaches',
    },
  },
  {
    id: 'sales',
    label: 'Sales & Conversions',
    tooltip: {
      whatItIs: 'Driving direct purchases or bookings through social media content and shopping features.',
      idealIf: 'You sell products/services and want social to drive revenue.',
      examples: 'E-commerce, restaurants, salons',
    },
  },
  {
    id: 'support',
    label: 'Customer Support',
    tooltip: {
      whatItIs: 'Using social channels to respond to customer questions, complaints, and feedback.',
      idealIf: 'Your customers reach out via social and expect quick responses.',
      examples: 'SaaS, retail, hospitality',
    },
  },
  {
    id: 'thought-leadership',
    label: 'Thought Leadership',
    tooltip: {
      whatItIs: 'Establishing your brand or founders as industry experts and trusted voices.',
      idealIf: 'You want to build authority and trust in your space.',
      examples: 'Consultants, B2B, professional services',
    },
  },
  {
    id: 'recruitment',
    label: 'Recruitment / Employer Brand',
    tooltip: {
      whatItIs: 'Showcasing company culture and attracting talent through social presence.',
      idealIf: "You're hiring and want to attract top candidates.",
      examples: 'Growing companies, competitive hiring markets',
    },
  },
  {
    id: 'full-service',
    label: 'Full-Service Management',
    tooltip: {
      whatItIs: 'Comprehensive social media management covering all aspects of your presence.',
      idealIf: 'You want to hand off social media entirely to experts.',
      examples: 'Busy founders, scaling businesses',
    },
  },
  {
    id: 'other',
    label: 'Other',
    tooltip: {
      whatItIs: 'Something unique or a combination of goals.',
      idealIf: "Your needs don't fit standard categories — we'll tailor recommendations.",
      examples: 'Custom combinations, unique requirements',
    },
  },
];

// Step 2: Platforms
export const platformOptions: SocialMediaOption[] = [
  {
    id: '1',
    label: '1 Platform',
    price: 200,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Management of a single social media platform.',
      idealIf: 'You want to focus efforts on one primary channel.',
      examples: 'LinkedIn-only for B2B, Instagram-only for visual brands',
    },
  },
  {
    id: '2',
    label: '2 Platforms',
    price: 350,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Coordinated management across two platforms.',
      idealIf: 'You want presence on your two most important channels.',
      examples: 'Instagram + Facebook, LinkedIn + Twitter',
    },
  },
  {
    id: '3',
    label: '3 Platforms',
    price: 475,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Management across three platforms with tailored content.',
      idealIf: 'You need broader coverage without full-scale presence.',
      examples: 'Instagram + Facebook + LinkedIn',
    },
  },
  {
    id: '4',
    label: '4 Platforms',
    price: 600,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Comprehensive management across four platforms.',
      idealIf: 'You want strong presence across major channels.',
      examples: 'Instagram + Facebook + LinkedIn + Twitter',
    },
  },
  {
    id: '5+',
    label: '5+ Platforms',
    price: 750,
    recurring: 'monthly',
    startsAt: true,
    tooltip: {
      whatItIs: 'Full-scale management across all relevant platforms.',
      idealIf: 'You need maximum reach and platform diversity.',
      examples: 'Enterprise brands, media companies',
    },
  },
  {
    id: 'custom',
    label: 'Custom Mix',
    price: null,
    customQuote: true,
    tooltip: {
      whatItIs: 'Tailored platform selection including niche networks.',
      idealIf: 'You need specific platforms like Pinterest, YouTube, TikTok, Reddit.',
      examples: 'Specialized platform requirements',
    },
  },
];

// Step 3: Posting Frequency
export const frequencyOptions: SocialMediaOption[] = [
  {
    id: 'light',
    label: 'Light (8 posts/mo)',
    price: 150,
    recurring: 'monthly',
    postsPerMonth: 8,
    tooltip: {
      whatItIs: '2 posts per week — maintains presence without heavy lift.',
      idealIf: 'You want consistent visibility with minimal content needs.',
      examples: 'B2B, professional services, niche brands',
    },
  },
  {
    id: 'standard',
    label: 'Standard (12 posts/mo)',
    price: 250,
    recurring: 'monthly',
    postsPerMonth: 12,
    tooltip: {
      whatItIs: '3 posts per week — solid presence with regular content.',
      idealIf: 'You want steady engagement without daily posting.',
      examples: 'Most businesses, service providers',
    },
  },
  {
    id: 'active',
    label: 'Active (16 posts/mo)',
    price: 350,
    recurring: 'monthly',
    postsPerMonth: 16,
    tooltip: {
      whatItIs: '4 posts per week — active presence with varied content.',
      idealIf: 'You want to stay top-of-mind with your audience.',
      examples: 'Retail, restaurants, lifestyle brands',
    },
  },
  {
    id: 'aggressive',
    label: 'Aggressive (20 posts/mo)',
    price: 450,
    recurring: 'monthly',
    postsPerMonth: 20,
    tooltip: {
      whatItIs: '5 posts per week — high-frequency visibility.',
      idealIf: "You're in a competitive space or building momentum.",
      examples: 'E-commerce, media, fast-moving industries',
    },
  },
  {
    id: 'daily',
    label: 'Daily (30 posts/mo)',
    price: 600,
    recurring: 'monthly',
    postsPerMonth: 30,
    tooltip: {
      whatItIs: 'Daily posting across platforms.',
      idealIf: 'You need constant presence and have lots to share.',
      examples: 'News, entertainment, high-volume e-commerce',
    },
  },
  {
    id: 'custom',
    label: 'Custom Frequency',
    price: null,
    customQuote: true,
    tooltip: {
      whatItIs: 'Tailored posting schedule based on your specific needs.',
      idealIf: 'You have unique requirements or seasonal variations.',
      examples: 'Event-based, seasonal businesses',
    },
  },
];

// Step 4: Content Creation
export const contentOptions: SocialMediaOption[] = [
  {
    id: 'client',
    label: 'Client Provides Content',
    price: 0,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'You supply all photos, videos, and copy — we schedule and post.',
      idealIf: 'You have an internal team creating content.',
      examples: 'In-house marketing teams',
    },
  },
  {
    id: 'basic',
    label: 'Basic (Captions + Hashtags)',
    price: 100,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'We write captions and research hashtags for content you provide.',
      idealIf: 'You have visuals but need copywriting help.',
      examples: 'Product-based businesses with photos',
    },
  },
  {
    id: 'standard',
    label: 'Standard (Graphics + Captions)',
    price: 250,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Designed graphics, written captions, and hashtag strategy.',
      idealIf: 'You want polished, branded social content.',
      examples: 'Most businesses, professional presence',
    },
  },
  {
    id: 'premium',
    label: 'Premium (Mixed Media)',
    price: 400,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Graphics, basic video edits, carousels, and Stories content.',
      idealIf: 'You want varied, engaging content across formats.',
      examples: 'Lifestyle brands, e-commerce, hospitality',
    },
  },
  {
    id: 'full',
    label: 'Full Production',
    price: 600,
    recurring: 'monthly',
    startsAt: true,
    tooltip: {
      whatItIs: 'High-quality graphics, video production, Reels/TikToks, animations.',
      idealIf: 'You want scroll-stopping, professional content.',
      examples: 'Premium brands, competitive markets',
    },
  },
  {
    id: 'ugc',
    label: 'Content + UGC Curation',
    price: 350,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Original content plus sourcing and reposting user-generated content.',
      idealIf: 'You want to leverage customer content alongside original posts.',
      examples: 'E-commerce, hospitality, lifestyle',
    },
  },
];

// Step 5: Engagement & Community Management
export const engagementOptions: SocialMediaOption[] = [
  {
    id: 'none',
    label: 'No Engagement',
    price: 0,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'We post content only — you handle all comments and messages.',
      idealIf: 'You want to personally manage community interaction.',
      examples: 'Personal brands, small businesses',
    },
  },
  {
    id: 'monitoring',
    label: 'Monitoring Only',
    price: 75,
    recurring: 'monthly',
    tooltip: {
      whatItIs: "We monitor comments and DMs, flag important items, but don't respond.",
      idealIf: 'You want visibility without us speaking for your brand.',
      examples: 'Sensitive industries, regulated businesses',
    },
  },
  {
    id: 'standard',
    label: 'Standard Engagement',
    price: 150,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Respond to comments and DMs within 24 hours during business days.',
      idealIf: 'You want professional, timely community management.',
      examples: 'Most businesses',
    },
  },
  {
    id: 'active',
    label: 'Active Engagement',
    price: 275,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Proactive engagement — responding, liking, commenting on relevant content, growing community.',
      idealIf: 'You want to build relationships and grow organically.',
      examples: 'Community-focused brands, B2B networking',
    },
  },
  {
    id: 'priority',
    label: 'Priority Engagement',
    price: 400,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Same-day responses, weekend monitoring, escalation protocols, sentiment tracking.',
      idealIf: 'Social is a key customer touchpoint requiring fast response.',
      examples: 'Customer support via social, high-volume accounts',
    },
  },
  {
    id: '24-7',
    label: '24/7 Engagement',
    price: null,
    customQuote: true,
    tooltip: {
      whatItIs: 'Round-the-clock monitoring and response.',
      idealIf: 'You have a global audience or critical response requirements.',
      examples: 'Enterprise, global brands',
    },
  },
];

// Step 6: Strategy & Planning
export const strategyOptions: SocialMediaOption[] = [
  {
    id: 'none',
    label: 'No Strategy (Execution Only)',
    price: 0,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'We execute based on your direction — no strategic input.',
      idealIf: 'You have a clear strategy and just need execution help.',
      examples: 'In-house strategists',
    },
  },
  {
    id: 'basic',
    label: 'Basic Strategy',
    price: 100,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Monthly content calendar with posting schedule and basic content themes.',
      idealIf: 'You want organized planning without deep strategy.',
      examples: 'Small businesses, straightforward needs',
    },
  },
  {
    id: 'standard',
    label: 'Standard Strategy',
    price: 200,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Monthly strategy, content calendar, hashtag research, and basic analytics review.',
      idealIf: 'You want strategic guidance with regular optimization.',
      examples: 'Growing businesses',
    },
  },
  {
    id: 'premium',
    label: 'Premium Strategy',
    price: 350,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Comprehensive strategy, competitor monitoring, trend identification, monthly strategy calls.',
      idealIf: 'You want proactive, data-driven social media management.',
      examples: 'Competitive markets, growth-focused brands',
    },
  },
  {
    id: 'full',
    label: 'Full Strategic Partnership',
    price: 500,
    recurring: 'monthly',
    startsAt: true,
    tooltip: {
      whatItIs: 'Dedicated strategist, quarterly planning, campaign development, cross-channel coordination.',
      idealIf: 'Social is critical to your business and needs expert leadership.',
      examples: 'Enterprise, funded startups',
    },
  },
];

// Step 7: Reporting & Analytics
export const reportingOptions: SocialMediaOption[] = [
  {
    id: 'none',
    label: 'No Reporting',
    price: 0,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'No formal reports — you track metrics yourself.',
      idealIf: 'You have internal analytics capabilities.',
      examples: 'In-house data teams',
    },
  },
  {
    id: 'monthly',
    label: 'Monthly Summary',
    price: 50,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Monthly report with key metrics, top posts, and basic insights.',
      idealIf: 'You want regular visibility without deep analysis.',
      examples: 'Most small businesses',
    },
  },
  {
    id: 'biweekly',
    label: 'Bi-Weekly Reports',
    price: 100,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Reports every two weeks with performance trends and recommendations.',
      idealIf: 'You want more frequent optimization cycles.',
      examples: 'Active campaigns, growth phases',
    },
  },
  {
    id: 'weekly',
    label: 'Weekly Reports + Call',
    price: 200,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Weekly written reports plus a call to discuss performance and adjustments.',
      idealIf: 'You want close collaboration and rapid iteration.',
      examples: 'Aggressive growth, launches',
    },
  },
  {
    id: 'dashboard',
    label: 'Real-Time Dashboard',
    price: 150,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Live dashboard with 24/7 access to all metrics and performance data.',
      idealIf: 'You want constant visibility and self-serve analytics.',
      examples: 'Data-driven teams',
    },
  },
  {
    id: 'dashboard-call',
    label: 'Dashboard + Weekly Call',
    price: 300,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Real-time dashboard plus weekly strategy calls.',
      idealIf: 'You want full visibility and active strategic partnership.',
      examples: 'Premium clients, enterprise',
    },
  },
];

// Step 8: Add-ons - Stories Management
export const storiesOptions: SocialMediaOption[] = [
  {
    id: 'none',
    label: 'Not Included',
    price: 0,
    recurring: 'monthly',
    tooltip: {
      whatItIs: "Stories not managed — focus on feed posts only.",
      idealIf: "Stories aren't a priority for your brand.",
      examples: 'Feed-focused accounts',
    },
  },
  {
    id: 'basic',
    label: 'Basic Stories (8/mo)',
    price: 100,
    recurring: 'monthly',
    tooltip: {
      whatItIs: '2 Stories per week with simple graphics or repurposed content.',
      idealIf: 'You want consistent Stories presence.',
      examples: 'Behind-the-scenes, quick updates',
    },
  },
  {
    id: 'active',
    label: 'Active Stories (16/mo)',
    price: 200,
    recurring: 'monthly',
    tooltip: {
      whatItIs: '4 Stories per week with designed content, polls, and stickers.',
      idealIf: 'You want engaging, interactive Stories.',
      examples: 'Retail, lifestyle, engagement-focused',
    },
  },
  {
    id: 'daily',
    label: 'Daily Stories (30/mo)',
    price: 350,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Daily Story content with varied formats and features.',
      idealIf: 'Stories are a key part of your strategy.',
      examples: 'Influencer-style brands, high-engagement accounts',
    },
  },
];

// Step 8: Add-ons - Reels / Short-Form Video
export const reelsOptions: SocialMediaOption[] = [
  {
    id: 'none',
    label: 'Not Included',
    price: 0,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'No Reels/TikTok/Shorts production.',
      idealIf: "Video isn't part of your current strategy.",
      examples: 'Text and image focused accounts',
    },
  },
  {
    id: 'basic',
    label: 'Basic (4 Reels/mo)',
    price: 200,
    recurring: 'monthly',
    tooltip: {
      whatItIs: '1 Reel per week — simple edits, trending audio, text overlays.',
      idealIf: 'You want to participate in short-form video without heavy investment.',
      examples: 'Behind-the-scenes, tips, product highlights',
    },
  },
  {
    id: 'standard',
    label: 'Standard (8 Reels/mo)',
    price: 375,
    recurring: 'monthly',
    tooltip: {
      whatItIs: '2 Reels per week — edited video content with graphics and transitions.',
      idealIf: 'You want consistent video presence.',
      examples: 'Tutorials, product demos, trends',
    },
  },
  {
    id: 'premium',
    label: 'Premium (12 Reels/mo)',
    price: 550,
    recurring: 'monthly',
    tooltip: {
      whatItIs: '3 Reels per week — high-quality production, scripted content, effects.',
      idealIf: 'Video is a priority growth channel.',
      examples: 'Lifestyle brands, e-commerce, creators',
    },
  },
  {
    id: 'aggressive',
    label: 'Aggressive (16+ Reels/mo)',
    price: 750,
    recurring: 'monthly',
    startsAt: true,
    tooltip: {
      whatItIs: '4+ Reels per week — video-first strategy.',
      idealIf: "You're going all-in on short-form video.",
      examples: 'TikTok-focused brands, viral growth strategy',
    },
  },
];

// Step 8: Add-ons - Additional Services
export const additionalServicesOptions: SocialMediaOption[] = [
  {
    id: 'influencer',
    label: 'Influencer Coordination',
    price: 200,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Identify, outreach, and coordinate with micro-influencers for collaborations.',
      idealIf: 'You want to leverage influencer partnerships.',
      examples: 'Product seeding, sponsored posts, collaborations',
    },
  },
  {
    id: 'boost',
    label: 'Paid Social Boost',
    price: 150,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Strategic boosting of top-performing organic posts (ad spend separate).',
      idealIf: 'You want to amplify best content with paid support.',
      examples: 'Extending reach on key posts',
    },
  },
  {
    id: 'listening',
    label: 'Social Listening',
    price: 175,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Monitor brand mentions, industry conversations, and competitor activity.',
      idealIf: "You want to track what's being said about your brand.",
      examples: 'Reputation management, market intelligence',
    },
  },
  {
    id: 'contest',
    label: 'Contest / Giveaway Management',
    price: 250,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Plan, execute, and manage social media contests or giveaways.',
      idealIf: 'You want to run promotions to grow followers and engagement.',
      examples: 'Product launches, follower milestones',
    },
  },
  {
    id: 'profile-optimization',
    label: 'Profile Optimization',
    price: 150,
    oneTime: true,
    tooltip: {
      whatItIs: 'Audit and optimize all profile bios, links, highlights, and settings.',
      idealIf: "Your profiles need a refresh or haven't been optimized.",
      examples: 'New accounts, rebrands',
    },
  },
  {
    id: 'photoshoot',
    label: 'Content Photoshoot Coordination',
    price: 300,
    oneTime: true,
    tooltip: {
      whatItIs: 'Plan and coordinate a photoshoot for social content (photographer fees separate).',
      idealIf: 'You need original photography for content.',
      examples: 'Product shoots, lifestyle imagery',
    },
  },
  {
    id: 'audit',
    label: 'Social Media Audit',
    price: 250,
    oneTime: true,
    tooltip: {
      whatItIs: 'Comprehensive review of current social presence with recommendations.',
      idealIf: 'You want expert analysis before committing to management.',
      examples: 'Starting point assessment',
    },
  },
];

// Step 9: Contract Duration
export const durationOptions: SocialMediaOption[] = [
  {
    id: 'monthly',
    label: 'Month-to-Month',
    multiplier: 1.15,
    months: 1,
    tooltip: {
      whatItIs: 'No long-term commitment, cancel anytime.',
      idealIf: 'You want flexibility to adjust or pause.',
      examples: 'Testing, uncertain timelines',
    },
  },
  {
    id: '3-months',
    label: '3 Months',
    multiplier: 1.0,
    months: 3,
    tooltip: {
      whatItIs: 'Quarterly commitment for meaningful results.',
      idealIf: 'You want time to see impact without long lock-in.',
      examples: 'Campaign periods, trial runs',
    },
  },
  {
    id: '6-months',
    label: '6 Months',
    multiplier: 0.90,
    months: 6,
    tooltip: {
      whatItIs: 'Extended commitment with better rates and deeper strategy.',
      idealIf: "You're serious about growth and want savings.",
      examples: 'Sustained growth efforts',
    },
  },
  {
    id: '12-months',
    label: '12 Months',
    multiplier: 0.80,
    months: 12,
    tooltip: {
      whatItIs: 'Annual partnership with maximum savings and strategic depth.',
      idealIf: 'Social is a core channel and you want the best pricing.',
      examples: 'Long-term brand building',
    },
  },
];

// Recommendation Presets based on Step 1 Management Goal
export const recommendationPresets: Record<string, {
  platforms: string;
  frequency: string;
  content: string;
  engagement: string;
  strategy: string;
  reporting: string;
  addOns?: string[];
}> = {
  awareness: {
    platforms: '2',
    frequency: 'standard',
    content: 'standard',
    engagement: 'standard',
    strategy: 'standard',
    reporting: 'monthly',
  },
  community: {
    platforms: '2',
    frequency: 'active',
    content: 'standard',
    engagement: 'active',
    strategy: 'standard',
    reporting: 'biweekly',
    addOns: ['stories-basic'],
  },
  'lead-gen': {
    platforms: '2',
    frequency: 'standard',
    content: 'standard',
    engagement: 'active',
    strategy: 'standard',
    reporting: 'biweekly',
  },
  sales: {
    platforms: '2',
    frequency: 'active',
    content: 'premium',
    engagement: 'active',
    strategy: 'standard',
    reporting: 'biweekly',
    addOns: ['stories-active'],
  },
  support: {
    platforms: '2',
    frequency: 'light',
    content: 'basic',
    engagement: 'priority',
    strategy: 'basic',
    reporting: 'weekly',
  },
  'thought-leadership': {
    platforms: '2',
    frequency: 'standard',
    content: 'standard',
    engagement: 'standard',
    strategy: 'premium',
    reporting: 'monthly',
  },
  recruitment: {
    platforms: '2',
    frequency: 'light',
    content: 'standard',
    engagement: 'standard',
    strategy: 'basic',
    reporting: 'monthly',
  },
  'full-service': {
    platforms: '3',
    frequency: 'aggressive',
    content: 'premium',
    engagement: 'active',
    strategy: 'premium',
    reporting: 'weekly',
    addOns: ['stories-active', 'reels-standard'],
  },
  other: {
    platforms: '1',
    frequency: 'light',
    content: 'basic',
    engagement: 'standard',
    strategy: 'basic',
    reporting: 'monthly',
  },
};

// Helper function to get all add-on options flattened
export const getAllAddOnOptions = () => {
  return [
    ...storiesOptions.filter(o => o.id !== 'none').map(o => ({ ...o, category: 'stories' as const })),
    ...reelsOptions.filter(o => o.id !== 'none').map(o => ({ ...o, category: 'reels' as const })),
    ...additionalServicesOptions.map(o => ({ ...o, category: 'additional' as const })),
  ];
};
