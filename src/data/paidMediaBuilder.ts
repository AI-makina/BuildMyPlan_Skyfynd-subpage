// Paid Media & Lead Generation Builder Options

export interface CampaignTypeOption {
  id: string;
  label: string;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface PlatformOption {
  id: string;
  label: string;
  price: number | null;
  recurring: 'monthly';
  startsAt?: boolean;
  customQuote?: boolean;
}

export interface BudgetOption {
  id: string;
  label: string;
  price: number;
  adSpendRange: [number, number] | null;
  customQuote?: boolean;
}

export interface DurationOption {
  id: string;
  label: string;
  multiplier: number;
  months: number;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface ManagementOption {
  id: string;
  label: string;
  price: number;
  oneTime?: boolean;
  recurring?: 'monthly';
  startsAt?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface CreativeOption {
  id: string;
  label: string;
  price: number;
  oneTime?: boolean;
  startsAt?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface LandingPageOption {
  id: string;
  label: string;
  price: number;
  oneTime?: boolean;
  startsAt?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface TrackingOption {
  id: string;
  label: string;
  price: number;
  oneTime: boolean;
  startsAt?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface ReportingOption {
  id: string;
  label: string;
  price: number;
  recurring: 'monthly';
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface AddOnOption {
  id: string;
  label: string;
  price: number;
  oneTime?: boolean;
  recurring?: 'monthly';
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface RecommendationPreset {
  platforms: string;
  duration: string;
  management: string;
  creatives: string;
  landingPage: string;
  tracking: string;
  reporting: string;
  addOns?: string[];
}

// Step 1: Campaign Type (Info Only - no price impact)
export const campaignTypeOptions: CampaignTypeOption[] = [
  {
    id: 'search',
    label: 'Search Ads (PPC)',
    tooltip: {
      whatItIs: 'Text-based ads on search engines that appear when users search for specific keywords.',
      idealIf: 'You want to capture high-intent users actively searching for your product or service.',
      examples: 'Google Ads, Bing Ads, search result sponsored listings',
    },
  },
  {
    id: 'social',
    label: 'Social Media Ads',
    tooltip: {
      whatItIs: 'Visual and video ads on social platforms targeting specific demographics and interests.',
      idealIf: 'You want to build awareness, engagement, or reach new audiences.',
      examples: 'Facebook/Instagram Ads, LinkedIn Ads, TikTok Ads',
    },
  },
  {
    id: 'display',
    label: 'Display / Banner Ads',
    tooltip: {
      whatItIs: 'Visual ads shown across websites, apps, and the Google Display Network.',
      idealIf: 'You want broad visibility and brand awareness across the web.',
      examples: 'Website banners, retargeting ads, programmatic display',
    },
  },
  {
    id: 'video',
    label: 'Video Ads',
    tooltip: {
      whatItIs: 'Video-based advertising on YouTube, social platforms, or streaming services.',
      idealIf: 'You want engaging storytelling and high-impact brand messaging.',
      examples: 'YouTube pre-roll, Instagram Reels ads, TikTok ads',
    },
  },
  {
    id: 'retargeting',
    label: 'Retargeting / Remarketing',
    tooltip: {
      whatItIs: 'Ads shown to people who have already visited your website or engaged with your brand.',
      idealIf: "You want to convert warm leads who didn't purchase on first visit.",
      examples: '"You left items in your cart" ads, website visitor follow-up',
    },
  },
  {
    id: 'lead-gen',
    label: 'Lead Generation Campaign',
    tooltip: {
      whatItIs: 'Campaigns specifically designed to capture contact information and generate qualified leads.',
      idealIf: 'You need to build a pipeline of potential customers for sales follow-up.',
      examples: 'Lead forms, gated content, webinar signups',
    },
  },
  {
    id: 'ecommerce',
    label: 'E-commerce / Shopping Ads',
    tooltip: {
      whatItIs: 'Product-focused ads that showcase inventory with images, prices, and direct purchase links.',
      idealIf: 'You sell products online and want to drive direct sales.',
      examples: 'Google Shopping, Facebook Shop, Instagram Shopping',
    },
  },
  {
    id: 'app-install',
    label: 'App Install Campaign',
    tooltip: {
      whatItIs: 'Campaigns designed to drive mobile app downloads.',
      idealIf: 'You have a mobile app and want to grow your user base.',
      examples: 'App Store ads, Google App campaigns, social app install ads',
    },
  },
  {
    id: 'full-funnel',
    label: 'Full-Funnel Campaign',
    tooltip: {
      whatItIs: 'Comprehensive strategy covering awareness, consideration, and conversion stages.',
      idealIf: 'You want an integrated approach that nurtures prospects through the entire journey.',
      examples: 'Multi-platform campaigns, integrated marketing',
    },
  },
  {
    id: 'other',
    label: 'Other',
    tooltip: {
      whatItIs: 'Something unique or a combination of campaign types.',
      idealIf: "Your marketing needs don't fit standard categories — we'll tailor recommendations.",
      examples: 'Custom campaign strategies',
    },
  },
];

// Step 2: Advertising Platforms
export const platformOptions: PlatformOption[] = [
  { id: 'google', label: 'Google Ads Only', price: 150, recurring: 'monthly' },
  { id: 'meta', label: 'Meta Only (Facebook/Instagram)', price: 150, recurring: 'monthly' },
  { id: 'linkedin', label: 'LinkedIn Only', price: 200, recurring: 'monthly' },
  { id: 'tiktok', label: 'TikTok Only', price: 175, recurring: 'monthly' },
  { id: 'google-meta', label: 'Google + Meta', price: 250, recurring: 'monthly' },
  { id: 'google-meta-linkedin', label: 'Google + Meta + LinkedIn', price: 375, recurring: 'monthly' },
  { id: 'multi', label: 'Multi-Platform (4+)', price: 450, recurring: 'monthly', startsAt: true },
  { id: 'custom', label: 'Custom Platform Mix', price: null, recurring: 'monthly', customQuote: true },
];

export const platformTooltips: Record<string, { whatItIs: string; idealIf: string; examples: string }> = {
  google: {
    whatItIs: "Search, Display, YouTube, and Shopping ads through Google's ecosystem.",
    idealIf: 'You want to reach users with high purchase intent via search or broad reach via display.',
    examples: 'Search results, YouTube, partner websites',
  },
  meta: {
    whatItIs: "Ads across Facebook, Instagram, Messenger, and Meta's audience network.",
    idealIf: 'You want detailed demographic targeting and visual storytelling.',
    examples: 'Feed ads, Stories, Reels, Messenger',
  },
  linkedin: {
    whatItIs: "B2B-focused advertising on the world's largest professional network.",
    idealIf: 'You\'re targeting professionals, decision-makers, or B2B audiences.',
    examples: 'Sponsored content, InMail, lead gen forms',
  },
  tiktok: {
    whatItIs: 'Short-form video ads on the fastest-growing social platform.',
    idealIf: 'You want to reach younger audiences with engaging, creative content.',
    examples: 'In-feed ads, branded hashtags, spark ads',
  },
  'google-meta': {
    whatItIs: 'Combined strategy across search and social for comprehensive coverage.',
    idealIf: 'You want both high-intent search traffic and social awareness.',
    examples: 'Most standard campaigns',
  },
  'google-meta-linkedin': {
    whatItIs: 'Full coverage across search, social, and professional networks.',
    idealIf: 'You\'re B2B or want maximum reach across audiences.',
    examples: 'SaaS companies, professional services',
  },
  multi: {
    whatItIs: 'Comprehensive presence across all major advertising platforms.',
    idealIf: 'You want full-funnel coverage and maximum market penetration.',
    examples: 'Enterprise campaigns, product launches',
  },
  custom: {
    whatItIs: 'Tailored platform selection based on your specific needs.',
    idealIf: 'You need specific platforms like Pinterest, Snapchat, Twitter, or programmatic.',
    examples: 'Custom platform combinations',
  },
};

// Step 3: Monthly Ad Spend Budget
export const budgetOptions: BudgetOption[] = [
  { id: 'starter', label: 'Starter ($500–$1,500/mo)', price: 0, adSpendRange: [500, 1500] },
  { id: 'growth', label: 'Growth ($1,500–$5,000/mo)', price: 0, adSpendRange: [1500, 5000] },
  { id: 'scale', label: 'Scale ($5,000–$15,000/mo)', price: 0, adSpendRange: [5000, 15000] },
  { id: 'enterprise', label: 'Enterprise ($15,000–$50,000/mo)', price: 0, adSpendRange: [15000, 50000] },
  { id: 'enterprise-plus', label: 'Enterprise+ ($50,000+/mo)', price: 0, adSpendRange: null, customQuote: true },
];

export const budgetTooltips: Record<string, { whatItIs: string; idealIf: string; examples: string }> = {
  starter: {
    whatItIs: 'Entry-level budget for testing and small-scale campaigns.',
    idealIf: 'You\'re new to paid ads or have a limited budget.',
    examples: 'Local businesses, startups testing channels',
  },
  growth: {
    whatItIs: 'Moderate budget for consistent lead generation and growth.',
    idealIf: 'You have proven product-market fit and want to scale.',
    examples: 'Growing SMBs, e-commerce stores',
  },
  scale: {
    whatItIs: 'Substantial budget for aggressive growth and market expansion.',
    idealIf: 'You\'re ready to invest significantly in customer acquisition.',
    examples: 'Funded startups, established businesses',
  },
  enterprise: {
    whatItIs: 'Large-scale budget for dominant market presence.',
    idealIf: 'You\'re an established company with serious growth targets.',
    examples: 'Enterprise companies, national campaigns',
  },
  'enterprise-plus': {
    whatItIs: 'Premium budget for maximum market impact.',
    idealIf: 'You\'re a major brand or have aggressive acquisition targets.',
    examples: 'Major brands, product launches',
  },
};

// Step 4: Campaign Duration / Commitment
export const durationOptions: DurationOption[] = [
  {
    id: '1-month',
    label: '1 Month (Trial)',
    multiplier: 1.25,
    months: 1,
    tooltip: {
      whatItIs: 'Short-term trial to test performance.',
      idealIf: 'You want to evaluate results before committing longer.',
      examples: 'Testing a new channel, seasonal promotion',
    },
  },
  {
    id: '3-months',
    label: '3 Months (Standard)',
    multiplier: 1.0,
    months: 3,
    tooltip: {
      whatItIs: 'Standard commitment for meaningful optimization and results.',
      idealIf: 'You want enough time to optimize and see real ROI.',
      examples: 'Most campaigns, quarterly planning',
    },
  },
  {
    id: '6-months',
    label: '6 Months (Growth)',
    multiplier: 0.90,
    months: 6,
    tooltip: {
      whatItIs: 'Extended commitment for sustained growth and deeper optimization.',
      idealIf: 'You\'re serious about growth and want better rates.',
      examples: 'Ongoing lead gen, brand building',
    },
  },
  {
    id: '12-months',
    label: '12 Months (Partnership)',
    multiplier: 0.80,
    months: 12,
    tooltip: {
      whatItIs: 'Annual partnership with maximum savings and strategic depth.',
      idealIf: 'You want a long-term marketing partner and best pricing.',
      examples: 'Established marketing relationships',
    },
  },
];

// Step 5: Management Level
export const managementOptions: ManagementOption[] = [
  {
    id: 'setup',
    label: 'Setup Only',
    price: 300,
    oneTime: true,
    tooltip: {
      whatItIs: 'We build and launch your campaigns, then hand over control.',
      idealIf: 'You have an in-house team to manage ongoing optimization.',
      examples: 'DIY marketers, in-house teams',
    },
  },
  {
    id: 'light',
    label: 'Light Management',
    price: 200,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Monthly check-ins, basic optimizations, and performance monitoring.',
      idealIf: 'You want oversight without full-service management.',
      examples: 'Low-maintenance campaigns, limited budgets',
    },
  },
  {
    id: 'full',
    label: 'Full Management',
    price: 400,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Active daily/weekly optimization, A/B testing, and strategic adjustments.',
      idealIf: 'You want hands-off campaign management with continuous improvement.',
      examples: 'Most clients, growth-focused businesses',
    },
  },
  {
    id: 'premium',
    label: 'Premium Management',
    price: 700,
    recurring: 'monthly',
    startsAt: true,
    tooltip: {
      whatItIs: 'Dedicated strategist, advanced optimization, competitive analysis, and priority support.',
      idealIf: 'You have significant spend and need expert-level attention.',
      examples: 'High-budget campaigns, competitive markets',
    },
  },
];

// Step 6: Creative Services - Ad Creative Production
export const creativeOptions: CreativeOption[] = [
  {
    id: 'client',
    label: 'Client Provides',
    price: 0,
    tooltip: {
      whatItIs: 'You supply all ad creatives, we implement them.',
      idealIf: 'You have a design team or existing assets.',
      examples: 'In-house creative teams',
    },
  },
  {
    id: 'copy',
    label: 'Ad Copy Only',
    price: 150,
    oneTime: true,
    tooltip: {
      whatItIs: 'Compelling headlines, descriptions, and CTAs for text-based ads.',
      idealIf: 'You need search ads or have visuals covered.',
      examples: 'Google Search ads, LinkedIn text',
    },
  },
  {
    id: 'static-5',
    label: 'Static Images (5 ads)',
    price: 250,
    oneTime: true,
    tooltip: {
      whatItIs: 'Designed static ad images in multiple sizes for your campaigns.',
      idealIf: 'You need display, social feed, or banner ads.',
      examples: 'Facebook ads, display banners',
    },
  },
  {
    id: 'static-10',
    label: 'Static Images (10 ads)',
    price: 400,
    oneTime: true,
    tooltip: {
      whatItIs: 'Extended set of static creatives for comprehensive testing.',
      idealIf: 'You want more variations for A/B testing.',
      examples: 'Multi-variant testing',
    },
  },
  {
    id: 'video-1',
    label: 'Video Ads (1 video)',
    price: 500,
    oneTime: true,
    startsAt: true,
    tooltip: {
      whatItIs: 'Produced video ad for social or YouTube campaigns.',
      idealIf: 'You want high-engagement video content.',
      examples: 'Facebook video, YouTube pre-roll',
    },
  },
  {
    id: 'video-3',
    label: 'Video Ads (3 videos)',
    price: 1200,
    oneTime: true,
    startsAt: true,
    tooltip: {
      whatItIs: 'Multiple video ads for testing and platform variety.',
      idealIf: 'You want comprehensive video coverage.',
      examples: 'Multi-platform video campaigns',
    },
  },
  {
    id: 'full',
    label: 'Full Creative Package',
    price: 800,
    oneTime: true,
    startsAt: true,
    tooltip: {
      whatItIs: 'Ad copy + static images + basic video for complete coverage.',
      idealIf: 'You need everything produced from scratch.',
      examples: 'New campaign launches',
    },
  },
];

// Step 6: Creative Services - Landing Page
export const landingPageOptions: LandingPageOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'You\'ll use your existing website or pages.',
      idealIf: 'You already have optimized landing pages.',
      examples: 'Established websites',
    },
  },
  {
    id: 'audit',
    label: 'Landing Page Audit',
    price: 150,
    oneTime: true,
    tooltip: {
      whatItIs: 'Review and recommendations for your existing landing pages.',
      idealIf: 'You have pages but want conversion optimization advice.',
      examples: 'CRO recommendations',
    },
  },
  {
    id: 'single',
    label: 'Single Landing Page',
    price: 500,
    oneTime: true,
    tooltip: {
      whatItIs: 'Custom-designed, conversion-optimized landing page.',
      idealIf: 'You need a dedicated page for your campaign.',
      examples: 'Lead gen pages, product pages',
    },
  },
  {
    id: 'ab',
    label: 'Landing Page + A/B Variant',
    price: 750,
    oneTime: true,
    tooltip: {
      whatItIs: 'Primary landing page plus a variant for split testing.',
      idealIf: 'You want to test different messaging or layouts.',
      examples: 'Conversion optimization',
    },
  },
  {
    id: 'system',
    label: 'Landing Page System (3+)',
    price: 1200,
    oneTime: true,
    startsAt: true,
    tooltip: {
      whatItIs: 'Multiple landing pages for different audiences or campaigns.',
      idealIf: 'You have segmented audiences or multiple offers.',
      examples: 'Multi-product campaigns',
    },
  },
];

// Step 7: Tracking & Analytics
export const trackingOptions: TrackingOption[] = [
  {
    id: 'basic',
    label: 'Basic Tracking',
    price: 100,
    oneTime: true,
    tooltip: {
      whatItIs: 'Standard pixel/tag installation and conversion tracking.',
      idealIf: 'You need fundamental tracking to measure results.',
      examples: 'Facebook Pixel, Google Ads conversion tracking',
    },
  },
  {
    id: 'standard',
    label: 'Standard Tracking',
    price: 250,
    oneTime: true,
    tooltip: {
      whatItIs: 'Comprehensive tracking including UTMs, goal setup, and basic attribution.',
      idealIf: "You want clear visibility into what's working.",
      examples: 'Google Analytics goals, multi-event tracking',
    },
  },
  {
    id: 'advanced',
    label: 'Advanced Tracking',
    price: 500,
    oneTime: true,
    tooltip: {
      whatItIs: 'Full-funnel tracking, custom events, CRM integration, and attribution modeling.',
      idealIf: 'You need detailed insights into the customer journey.',
      examples: 'Salesforce integration, multi-touch attribution',
    },
  },
  {
    id: 'enterprise',
    label: 'Enterprise Tracking',
    price: 1000,
    oneTime: true,
    startsAt: true,
    tooltip: {
      whatItIs: 'Custom data infrastructure, advanced attribution, and data warehouse integration.',
      idealIf: 'You have complex tracking needs across multiple systems.',
      examples: 'Custom dashboards, API integrations',
    },
  },
];

// Step 8: Reporting & Communication
export const reportingOptions: ReportingOption[] = [
  {
    id: 'monthly',
    label: 'Monthly Reports',
    price: 0,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Comprehensive monthly performance report with insights and recommendations.',
      idealIf: 'You want regular updates without information overload.',
      examples: 'Standard reporting cadence',
    },
  },
  {
    id: 'biweekly',
    label: 'Bi-Weekly Reports',
    price: 75,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Performance reports every two weeks with optimization notes.',
      idealIf: 'You want more frequent visibility into campaign performance.',
      examples: 'Active optimization phases',
    },
  },
  {
    id: 'weekly',
    label: 'Weekly Reports + Call',
    price: 150,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Weekly written reports plus a strategy call to discuss performance.',
      idealIf: 'You want close collaboration and rapid iteration.',
      examples: 'High-budget campaigns, launch phases',
    },
  },
  {
    id: 'realtime',
    label: 'Real-Time Dashboard + Weekly Call',
    price: 250,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Live dashboard access plus weekly strategy calls.',
      idealIf: 'You want constant visibility and active partnership.',
      examples: 'Enterprise clients, aggressive growth',
    },
  },
];

// Step 9: Add-on Services
export const addOnOptions: AddOnOption[] = [
  {
    id: 'competitor',
    label: 'Competitor Analysis',
    price: 300,
    oneTime: true,
    tooltip: {
      whatItIs: 'Deep dive into competitor ad strategies, messaging, and positioning.',
      idealIf: 'You want to understand the competitive landscape before launching.',
      examples: 'Ad spy research, positioning analysis',
    },
  },
  {
    id: 'audience',
    label: 'Audience Research',
    price: 250,
    oneTime: true,
    tooltip: {
      whatItIs: 'Detailed audience persona development and targeting recommendations.',
      idealIf: "You need to refine who you're targeting.",
      examples: 'Persona development, targeting strategy',
    },
  },
  {
    id: 'ab-testing',
    label: 'A/B Testing Program',
    price: 200,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Structured testing of creatives, copy, audiences, and landing pages.',
      idealIf: 'You want systematic optimization through experimentation.',
      examples: 'Ongoing creative testing, message testing',
    },
  },
  {
    id: 'crm',
    label: 'CRM Integration',
    price: 350,
    oneTime: true,
    tooltip: {
      whatItIs: 'Connect ad platforms to your CRM for lead tracking and closed-loop reporting.',
      idealIf: 'You want to track leads through to sale.',
      examples: 'HubSpot, Salesforce, Pipedrive integration',
    },
  },
  {
    id: 'remarketing',
    label: 'Remarketing Setup',
    price: 200,
    oneTime: true,
    tooltip: {
      whatItIs: 'Pixel setup and audience creation for retargeting campaigns.',
      idealIf: 'You want to re-engage website visitors.',
      examples: 'Cart abandonment, site visitor retargeting',
    },
  },
  {
    id: 'lead-scoring',
    label: 'Lead Scoring Setup',
    price: 400,
    oneTime: true,
    tooltip: {
      whatItIs: 'System to qualify and prioritize leads based on behavior and fit.',
      idealIf: 'You generate high volume and need to prioritize follow-up.',
      examples: 'MQL/SQL scoring, lead routing',
    },
  },
  {
    id: 'email-nurture',
    label: 'Email Nurture Integration',
    price: 300,
    oneTime: true,
    tooltip: {
      whatItIs: 'Connect lead gen campaigns to email sequences for automated follow-up.',
      idealIf: 'You want automated lead nurturing after capture.',
      examples: 'Drip campaigns, welcome sequences',
    },
  },
];

// Recommendation Presets (Based on Step 1)
export const recommendationPresets: Record<string, RecommendationPreset> = {
  search: {
    platforms: 'google',
    duration: '3-months',
    management: 'full',
    creatives: 'copy',
    landingPage: 'none',
    tracking: 'standard',
    reporting: 'biweekly',
  },
  social: {
    platforms: 'meta',
    duration: '3-months',
    management: 'full',
    creatives: 'static-5',
    landingPage: 'none',
    tracking: 'standard',
    reporting: 'biweekly',
  },
  display: {
    platforms: 'google',
    duration: '3-months',
    management: 'full',
    creatives: 'static-10',
    landingPage: 'none',
    tracking: 'standard',
    reporting: 'monthly',
  },
  video: {
    platforms: 'google',
    duration: '3-months',
    management: 'full',
    creatives: 'video-1',
    landingPage: 'none',
    tracking: 'standard',
    reporting: 'biweekly',
  },
  retargeting: {
    platforms: 'google-meta',
    duration: '3-months',
    management: 'full',
    creatives: 'static-5',
    landingPage: 'none',
    tracking: 'advanced',
    reporting: 'biweekly',
    addOns: ['remarketing'],
  },
  'lead-gen': {
    platforms: 'google-meta',
    duration: '3-months',
    management: 'full',
    creatives: 'static-5',
    landingPage: 'single',
    tracking: 'advanced',
    reporting: 'weekly',
  },
  ecommerce: {
    platforms: 'google-meta',
    duration: '3-months',
    management: 'full',
    creatives: 'static-10',
    landingPage: 'none',
    tracking: 'advanced',
    reporting: 'weekly',
  },
  'app-install': {
    platforms: 'google-meta',
    duration: '3-months',
    management: 'full',
    creatives: 'video-1',
    landingPage: 'none',
    tracking: 'advanced',
    reporting: 'weekly',
  },
  'full-funnel': {
    platforms: 'multi',
    duration: '6-months',
    management: 'premium',
    creatives: 'full',
    landingPage: 'ab',
    tracking: 'advanced',
    reporting: 'weekly',
    addOns: ['competitor', 'remarketing'],
  },
  other: {
    platforms: 'google',
    duration: '3-months',
    management: 'full',
    creatives: 'client',
    landingPage: 'none',
    tracking: 'standard',
    reporting: 'biweekly',
  },
};
