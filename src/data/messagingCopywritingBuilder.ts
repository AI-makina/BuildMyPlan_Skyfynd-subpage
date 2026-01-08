// Messaging & Copywriting Custom Builder Data

export interface MessagingOption {
  id: string;
  label: string;
  price: number;
  oneTime?: boolean;
  startsAt?: boolean;
  recurring?: 'monthly';
}

export interface AddOnService {
  id: string;
  label: string;
  price: number;
  oneTime: boolean;
}

export interface TimelineOption {
  id: string;
  label: string;
  multiplier: number;
}

export interface RecommendationPreset {
  messaging: string;
  voice: string;
  website: string;
  marketing: string;
  sales: string;
  product: string;
  content: string;
  ux: string;
  retainer: string;
}

// Step 1: Messaging Goal Options
export const messagingGoalOptions = [
  {
    id: 'foundation',
    label: 'Brand Messaging Foundation',
    tooltip: {
      whatItIs: 'Establishing core messaging framework for a new or evolving brand.',
      idealIf: 'You need foundational messaging before any copy is written.',
      examples: 'New brands, rebrands, positioning shifts',
    },
  },
  {
    id: 'website',
    label: 'Website Copy',
    tooltip: {
      whatItIs: 'Copy for website pages — from single pages to full site.',
      idealIf: "You're building or refreshing your website.",
      examples: 'New sites, redesigns, landing pages',
    },
  },
  {
    id: 'sales-marketing',
    label: 'Sales & Marketing Copy',
    tooltip: {
      whatItIs: 'Copy that drives leads and conversions — ads, emails, landing pages.',
      idealIf: 'You need copy that sells.',
      examples: 'Campaigns, funnels, lead generation',
    },
  },
  {
    id: 'product',
    label: 'Product Copy',
    tooltip: {
      whatItIs: 'Copy for product descriptions, features, and UI.',
      idealIf: 'You sell products (physical or digital) needing compelling descriptions.',
      examples: 'E-commerce, SaaS, apps',
    },
  },
  {
    id: 'voice',
    label: 'Brand Voice Development',
    tooltip: {
      whatItIs: 'Defining how your brand sounds across all communications.',
      idealIf: 'You need consistent, distinctive brand voice.',
      examples: 'Growing brands, multi-writer teams',
    },
  },
  {
    id: 'content',
    label: 'Content Writing',
    tooltip: {
      whatItIs: 'Long-form content — blog posts, articles, guides, thought leadership.',
      idealIf: 'You need quality content at scale.',
      examples: 'Content marketing, SEO, authority building',
    },
  },
  {
    id: 'sales-enablement',
    label: 'Sales Enablement',
    tooltip: {
      whatItIs: 'Copy that supports sales process — decks, proposals, case studies.',
      idealIf: 'You need materials that help close deals.',
      examples: 'B2B, enterprise sales, consultative selling',
    },
  },
  {
    id: 'ux',
    label: 'UX Writing',
    tooltip: {
      whatItIs: 'Microcopy for digital products — buttons, errors, onboarding, tooltips.',
      idealIf: "You're building apps or digital experiences.",
      examples: 'Apps, SaaS, digital products',
    },
  },
  {
    id: 'complete',
    label: 'Complete Messaging & Copy',
    tooltip: {
      whatItIs: 'Full messaging framework plus copy across all touchpoints.',
      idealIf: 'You need comprehensive messaging and copy solution.',
      examples: 'Launches, rebrands, full programs',
    },
  },
  {
    id: 'other',
    label: 'Other',
    tooltip: {
      whatItIs: 'Something unique or a combination of needs.',
      idealIf: "Your situation doesn't fit standard categories — we'll tailor recommendations.",
      examples: '',
    },
  },
];

// Step 2: Messaging Framework Options
export const messagingOptions: MessagingOption[] = [
  { id: 'none', label: 'Not Needed', price: 0 },
  { id: 'refresh', label: 'Messaging Refresh', price: 500, oneTime: true },
  { id: 'core', label: 'Core Messaging', price: 1200, oneTime: true },
  { id: 'standard', label: 'Standard Messaging', price: 2200, oneTime: true },
  { id: 'comprehensive', label: 'Comprehensive Messaging', price: 3800, oneTime: true },
  { id: 'enterprise', label: 'Enterprise Messaging System', price: 6000, oneTime: true, startsAt: true },
];

export const messagingTooltips: Record<string, { whatItIs: string; idealIf: string; examples: string }> = {
  none: {
    whatItIs: 'Skip messaging framework — go straight to copy.',
    idealIf: 'You have solid messaging already or just need tactical copy.',
    examples: 'Existing brands with clear messaging',
  },
  refresh: {
    whatItIs: 'Review and refinement of existing messaging.',
    idealIf: 'Your messaging exists but needs updating or tightening.',
    examples: 'Minor updates, alignment check',
  },
  core: {
    whatItIs: 'Essential messaging elements — positioning, value prop, key messages.',
    idealIf: 'You need foundational messaging building blocks.',
    examples: 'Startups, new initiatives',
  },
  standard: {
    whatItIs: 'Complete messaging framework with audience-specific variations.',
    idealIf: 'You need comprehensive messaging for multiple contexts.',
    examples: 'Most businesses, B2B',
  },
  comprehensive: {
    whatItIs: 'Full messaging architecture with detailed frameworks and sales messaging.',
    idealIf: 'You need extensive messaging for complex offerings.',
    examples: 'Enterprise, multi-product',
  },
  enterprise: {
    whatItIs: 'Complete messaging ecosystem with governance and multi-stakeholder input.',
    idealIf: 'You have complex messaging needs across organization.',
    examples: 'Large enterprises, multi-brand',
  },
};

// Step 3: Brand Voice & Tone Options
export const voiceOptions: MessagingOption[] = [
  { id: 'none', label: 'Not Needed', price: 0 },
  { id: 'basic', label: 'Basic Voice', price: 400, oneTime: true },
  { id: 'standard', label: 'Standard Voice', price: 900, oneTime: true },
  { id: 'comprehensive', label: 'Comprehensive Voice', price: 1600, oneTime: true },
  { id: 'training', label: 'Voice System + Training', price: 2500, oneTime: true, startsAt: true },
];

export const voiceTooltips: Record<string, { whatItIs: string; idealIf: string; examples: string }> = {
  none: {
    whatItIs: 'No voice development — use existing or define later.',
    idealIf: "You have established voice or it's not a priority.",
    examples: '',
  },
  basic: {
    whatItIs: 'Core voice attributes and basic tone guidance.',
    idealIf: 'You need fundamental voice direction.',
    examples: 'Simple brands, solo writers',
  },
  standard: {
    whatItIs: 'Complete voice framework with personality, tone variations, and examples.',
    idealIf: 'You want consistent voice across writers and channels.',
    examples: 'Most businesses',
  },
  comprehensive: {
    whatItIs: "Full voice system with detailed guidelines, do's/don'ts, and channel-specific direction.",
    idealIf: 'Voice is critical differentiator or you have multiple writers.',
    examples: 'Consumer brands, content-heavy',
  },
  training: {
    whatItIs: 'Complete voice development plus team training and implementation support.',
    idealIf: 'You need organization-wide voice adoption.',
    examples: 'Enterprise, agencies, large teams',
  },
};

// Step 4: Website Copy Options
export const websiteOptions: MessagingOption[] = [
  { id: 'none', label: 'Not Needed', price: 0 },
  { id: 'landing', label: 'Landing Page (single)', price: 600, oneTime: true },
  { id: 'core', label: 'Core Pages (3–5 pages)', price: 1400, oneTime: true },
  { id: 'standard', label: 'Standard Website (6–10 pages)', price: 2800, oneTime: true },
  { id: 'comprehensive', label: 'Comprehensive Website (11–20 pages)', price: 4800, oneTime: true },
  { id: 'enterprise', label: 'Enterprise Website (20+ pages)', price: 7500, oneTime: true, startsAt: true },
];

export const websiteTooltips: Record<string, { whatItIs: string; idealIf: string; examples: string }> = {
  none: {
    whatItIs: 'No website copy required.',
    idealIf: "Website isn't in scope or copy exists.",
    examples: '',
  },
  landing: {
    whatItIs: 'One high-converting landing page.',
    idealIf: 'You need a focused conversion page.',
    examples: 'Campaign pages, lead gen, product launches',
  },
  core: {
    whatItIs: 'Essential website pages — home, about, services/product, contact.',
    idealIf: 'You need fundamental website copy.',
    examples: 'Small sites, MVPs',
  },
  standard: {
    whatItIs: 'Complete website copy covering main sections.',
    idealIf: 'You need full website copywriting.',
    examples: 'Most business websites',
  },
  comprehensive: {
    whatItIs: 'Extensive website copy including blog setup and resource pages.',
    idealIf: 'You have larger website with multiple sections.',
    examples: 'Larger businesses, content-rich sites',
  },
  enterprise: {
    whatItIs: 'Full website ecosystem including all pages, landing pages, and microsites.',
    idealIf: 'You have complex website needs.',
    examples: 'Enterprise, multi-product, large sites',
  },
};

// Step 5: Marketing & Advertising Copy Options
export const marketingOptions: MessagingOption[] = [
  { id: 'none', label: 'Not Needed', price: 0 },
  { id: 'basic', label: 'Basic Package', price: 500, oneTime: true },
  { id: 'standard', label: 'Standard Package', price: 1200, oneTime: true },
  { id: 'comprehensive', label: 'Comprehensive Package', price: 2400, oneTime: true },
  { id: 'premium', label: 'Premium Package', price: 4000, oneTime: true, startsAt: true },
];

export const marketingTooltips: Record<string, { whatItIs: string; idealIf: string; examples: string }> = {
  none: {
    whatItIs: 'No marketing copy required.',
    idealIf: "Marketing copy isn't in scope.",
    examples: '',
  },
  basic: {
    whatItIs: 'Ad copy set or email sequence (choose one).',
    idealIf: 'You need focused marketing copy.',
    examples: 'Single campaign, email nurture',
  },
  standard: {
    whatItIs: 'Ad copy + email sequence + landing page copy.',
    idealIf: 'You need integrated campaign copy.',
    examples: 'Lead gen campaigns, launches',
  },
  comprehensive: {
    whatItIs: 'Full campaign copy across multiple channels and formats.',
    idealIf: "You're running significant marketing campaigns.",
    examples: 'Major launches, multi-channel campaigns',
  },
  premium: {
    whatItIs: 'Complete marketing copy system with testing variations and ongoing optimization.',
    idealIf: 'Marketing copy is critical to growth.',
    examples: 'Performance marketing, scaled campaigns',
  },
};

// Step 6: Sales Enablement Copy Options
export const salesOptions: MessagingOption[] = [
  { id: 'none', label: 'Not Needed', price: 0 },
  { id: 'basic', label: 'Basic Package', price: 600, oneTime: true },
  { id: 'standard', label: 'Standard Package', price: 1400, oneTime: true },
  { id: 'comprehensive', label: 'Comprehensive Package', price: 2800, oneTime: true },
  { id: 'premium', label: 'Premium Package', price: 4500, oneTime: true, startsAt: true },
];

export const salesTooltips: Record<string, { whatItIs: string; idealIf: string; examples: string }> = {
  none: {
    whatItIs: 'No sales copy required.',
    idealIf: "Sales materials aren't in scope.",
    examples: '',
  },
  basic: {
    whatItIs: 'One-pager/sell sheet or case study.',
    idealIf: 'You need essential sales leave-behind.',
    examples: 'Single sales tool',
  },
  standard: {
    whatItIs: 'Sell sheet + case study + proposal template.',
    idealIf: 'You need core sales toolkit.',
    examples: 'B2B sales basics',
  },
  comprehensive: {
    whatItIs: 'Complete sales toolkit including deck, case studies, and proposal system.',
    idealIf: 'You have active sales team needing materials.',
    examples: 'Sales-driven businesses',
  },
  premium: {
    whatItIs: 'Full sales enablement library with multiple formats and ongoing updates.',
    idealIf: 'Sales content is critical to revenue.',
    examples: 'Enterprise sales, complex B2B',
  },
};

// Step 7: Product Copy Options
export const productOptions: MessagingOption[] = [
  { id: 'none', label: 'Not Needed', price: 0 },
  { id: 'basic', label: 'Basic Package (5–10 products)', price: 500, oneTime: true },
  { id: 'standard', label: 'Standard Package (20–30 products)', price: 1200, oneTime: true },
  { id: 'comprehensive', label: 'Comprehensive Package (50–75 products)', price: 2400, oneTime: true },
  { id: 'premium', label: 'Premium Package (100+ products)', price: 4000, oneTime: true, startsAt: true },
];

export const productTooltips: Record<string, { whatItIs: string; idealIf: string; examples: string }> = {
  none: {
    whatItIs: 'No product copy required.',
    idealIf: "You don't sell products or have copy covered.",
    examples: '',
  },
  basic: {
    whatItIs: 'Product descriptions for small catalog (5–10 products).',
    idealIf: 'You have limited product range.',
    examples: 'Small e-commerce, featured products',
  },
  standard: {
    whatItIs: 'Product descriptions + category copy (20–30 products).',
    idealIf: 'You have moderate product catalog.',
    examples: 'Growing e-commerce',
  },
  comprehensive: {
    whatItIs: 'Full product copy system (50–75 products) with SEO optimization.',
    idealIf: 'You have significant product catalog.',
    examples: 'Established e-commerce',
  },
  premium: {
    whatItIs: 'Complete product content (100+ products) with templates and scalable system.',
    idealIf: 'You have large catalog needing consistent copy.',
    examples: 'Large e-commerce, marketplaces',
  },
};

// Step 8: Content Writing Options
export const contentOptions: MessagingOption[] = [
  { id: 'none', label: 'Not Needed', price: 0 },
  { id: 'starter', label: 'Starter Package (2 pieces)', price: 800, oneTime: true },
  { id: 'standard', label: 'Standard Package (5 pieces)', price: 1800, oneTime: true },
  { id: 'comprehensive', label: 'Comprehensive Package (10 pieces)', price: 3500, oneTime: true },
  { id: 'premium', label: 'Premium Package (20+ pieces)', price: 6000, oneTime: true, startsAt: true },
];

export const contentTooltips: Record<string, { whatItIs: string; idealIf: string; examples: string }> = {
  none: {
    whatItIs: 'No content writing required.',
    idealIf: "Content writing isn't in scope.",
    examples: '',
  },
  starter: {
    whatItIs: '2 blog posts or articles (~1,000–1,500 words each).',
    idealIf: 'You need quality content to start.',
    examples: 'Blog launch, initial content',
  },
  standard: {
    whatItIs: '5 blog posts or articles with SEO optimization.',
    idealIf: 'You want meaningful content foundation.',
    examples: 'Content marketing kickoff',
  },
  comprehensive: {
    whatItIs: '10 pieces of content including blogs, guides, and thought leadership.',
    idealIf: "You're building content library.",
    examples: 'Authority building, SEO',
  },
  premium: {
    whatItIs: '20+ pieces of content with full content strategy alignment.',
    idealIf: 'Content is major marketing investment.',
    examples: 'Content-driven growth',
  },
};

// Step 9: UX Writing Options
export const uxOptions: MessagingOption[] = [
  { id: 'none', label: 'Not Needed', price: 0 },
  { id: 'basic', label: 'Basic Package', price: 600, oneTime: true },
  { id: 'standard', label: 'Standard Package', price: 1400, oneTime: true },
  { id: 'comprehensive', label: 'Comprehensive Package', price: 2800, oneTime: true },
  { id: 'premium', label: 'Premium Package', price: 4500, oneTime: true, startsAt: true },
];

export const uxTooltips: Record<string, { whatItIs: string; idealIf: string; examples: string }> = {
  none: {
    whatItIs: 'No UX writing required.',
    idealIf: "You don't have digital product or UX is covered.",
    examples: '',
  },
  basic: {
    whatItIs: 'Core UX copy for key flows (onboarding, main actions).',
    idealIf: 'You need essential product copy.',
    examples: 'MVP, simple apps',
  },
  standard: {
    whatItIs: 'Comprehensive UX copy covering main user journeys.',
    idealIf: 'You need solid product copy foundation.',
    examples: 'Apps, SaaS products',
  },
  comprehensive: {
    whatItIs: 'Full UX writing including all flows, errors, empty states, and help content.',
    idealIf: 'You want complete product copy coverage.',
    examples: 'Complex products',
  },
  premium: {
    whatItIs: 'Complete UX writing system with guidelines and content design framework.',
    idealIf: 'UX writing is ongoing need.',
    examples: 'Product teams, enterprise software',
  },
};

// Step 10: Ongoing Copy Retainer Options
export const retainerOptions: MessagingOption[] = [
  { id: 'none', label: 'Not Needed', price: 0, recurring: 'monthly' },
  { id: 'light', label: 'Light Retainer (~5 hrs/mo)', price: 800, recurring: 'monthly' },
  { id: 'standard', label: 'Standard Retainer (~10 hrs/mo)', price: 1500, recurring: 'monthly' },
  { id: 'growth', label: 'Growth Retainer (~20 hrs/mo)', price: 2800, recurring: 'monthly' },
  { id: 'premium', label: 'Premium Retainer (~35 hrs/mo)', price: 4500, recurring: 'monthly', startsAt: true },
];

export const retainerTooltips: Record<string, { whatItIs: string; idealIf: string; examples: string }> = {
  none: {
    whatItIs: 'Project-based only, no ongoing retainer.',
    idealIf: 'You have one-time needs or in-house writers.',
    examples: '',
  },
  light: {
    whatItIs: '~5 hours/month of copywriting support.',
    idealIf: 'You need occasional copy help.',
    examples: 'Ad hoc needs, overflow support',
  },
  standard: {
    whatItIs: '~10 hours/month of dedicated copywriting.',
    idealIf: 'You have regular copy needs.',
    examples: 'Ongoing marketing, content',
  },
  growth: {
    whatItIs: '~20 hours/month of copywriting with priority access.',
    idealIf: 'You have significant ongoing copy requirements.',
    examples: 'Active marketing, scaling',
  },
  premium: {
    whatItIs: '~35 hours/month as embedded copy resource.',
    idealIf: 'You need near-full-time copy support.',
    examples: 'High-growth, content-heavy',
  },
};

// Step 11: Add-on Services
export const addOnServices: AddOnService[] = [
  { id: 'tagline', label: 'Tagline Development', price: 600, oneTime: true },
  { id: 'naming', label: 'Naming (Product/Service)', price: 1200, oneTime: true },
  { id: 'bios', label: 'Bio Writing (Founder/Team)', price: 300, oneTime: true },
  { id: 'testimonials', label: 'Testimonial Development', price: 400, oneTime: true },
  { id: 'press-release', label: 'Press Release', price: 500, oneTime: true },
  { id: 'video-scripts', label: 'Video Scripts', price: 700, oneTime: true },
  { id: 'podcast-scripts', label: 'Podcast/Webinar Scripts', price: 500, oneTime: true },
  { id: 'social-bank', label: 'Social Media Copy Bank', price: 600, oneTime: true },
  { id: 'email-templates', label: 'Email Templates', price: 400, oneTime: true },
  { id: 'style-guide', label: 'Style Guide (Copy)', price: 500, oneTime: true },
  { id: 'copy-audit', label: 'Copy Audit', price: 600, oneTime: true },
];

export const addOnTooltips: Record<string, { whatItIs: string; idealIf: string; examples: string }> = {
  tagline: {
    whatItIs: 'Strategic tagline creation with multiple options.',
    idealIf: 'You need memorable brand tagline.',
    examples: 'Brand taglines, campaign lines',
  },
  naming: {
    whatItIs: 'Strategic naming with research and options.',
    idealIf: 'You need names for products or services.',
    examples: 'Product launches, service naming',
  },
  bios: {
    whatItIs: 'Professional bios for key people.',
    idealIf: 'You need polished team bios.',
    examples: 'About pages, LinkedIn, speaking',
  },
  testimonials: {
    whatItIs: 'Interview and write customer testimonials.',
    idealIf: 'You need compelling social proof.',
    examples: 'Website, sales materials',
  },
  'press-release': {
    whatItIs: 'Professional press release writing.',
    idealIf: 'You have newsworthy announcements.',
    examples: 'Launches, funding, partnerships',
  },
  'video-scripts': {
    whatItIs: 'Scripts for brand or explainer videos.',
    idealIf: "You're producing video content.",
    examples: 'Brand videos, explainers, ads',
  },
  'podcast-scripts': {
    whatItIs: 'Scripts and talking points for audio/video content.',
    idealIf: 'You host podcasts or webinars.',
    examples: 'Episode scripts, webinar content',
  },
  'social-bank': {
    whatItIs: 'Bank of social media posts across platforms.',
    idealIf: 'You need social content ready to go.',
    examples: 'Launch content, ongoing social',
  },
  'email-templates': {
    whatItIs: 'Templated emails for common communications.',
    idealIf: 'You need consistent email responses.',
    examples: 'Customer service, sales outreach',
  },
  'style-guide': {
    whatItIs: 'Writing style guide for consistency.',
    idealIf: 'Multiple people write for your brand.',
    examples: 'Teams, freelancer management',
  },
  'copy-audit': {
    whatItIs: 'Review of existing copy with recommendations.',
    idealIf: 'You want expert assessment.',
    examples: 'Before rewrite, optimization',
  },
};

// Step 12: Timeline Options
export const timelineOptions: TimelineOption[] = [
  { id: 'flexible', label: 'Flexible (4–6 weeks)', multiplier: 1.0 },
  { id: 'standard', label: 'Standard (2–4 weeks)', multiplier: 1.1 },
  { id: 'accelerated', label: 'Accelerated (1–2 weeks)', multiplier: 1.25 },
  { id: 'rush', label: 'Rush (Under 1 week)', multiplier: 1.5 },
];

export const timelineTooltips: Record<string, { whatItIs: string; idealIf: string; examples: string }> = {
  flexible: {
    whatItIs: 'Standard timeline allowing thorough development and revisions.',
    idealIf: 'You can plan ahead for best results.',
    examples: 'Most projects',
  },
  standard: {
    whatItIs: 'Slightly accelerated timeline with focused execution.',
    idealIf: 'You have a target date but some flexibility.',
    examples: 'Planned launches',
  },
  accelerated: {
    whatItIs: 'Fast-tracked delivery requiring prioritized scheduling.',
    idealIf: 'You have a firm deadline approaching.',
    examples: 'Campaign deadlines',
  },
  rush: {
    whatItIs: 'Expedited delivery with dedicated resources.',
    idealIf: 'You have an immediate need.',
    examples: 'Urgent campaigns, crisis response',
  },
};

// Recommendation Presets (Based on Step 1 Goal)
export const recommendationPresets: Record<string, RecommendationPreset> = {
  foundation: {
    messaging: 'comprehensive',
    voice: 'standard',
    website: 'none',
    marketing: 'none',
    sales: 'none',
    product: 'none',
    content: 'none',
    ux: 'none',
    retainer: 'none',
  },
  website: {
    messaging: 'core',
    voice: 'basic',
    website: 'standard',
    marketing: 'none',
    sales: 'none',
    product: 'none',
    content: 'none',
    ux: 'none',
    retainer: 'none',
  },
  'sales-marketing': {
    messaging: 'core',
    voice: 'basic',
    website: 'none',
    marketing: 'comprehensive',
    sales: 'none',
    product: 'none',
    content: 'none',
    ux: 'none',
    retainer: 'none',
  },
  product: {
    messaging: 'core',
    voice: 'basic',
    website: 'none',
    marketing: 'none',
    sales: 'none',
    product: 'comprehensive',
    content: 'none',
    ux: 'basic',
    retainer: 'none',
  },
  voice: {
    messaging: 'standard',
    voice: 'comprehensive',
    website: 'none',
    marketing: 'none',
    sales: 'none',
    product: 'none',
    content: 'none',
    ux: 'none',
    retainer: 'none',
  },
  content: {
    messaging: 'core',
    voice: 'standard',
    website: 'none',
    marketing: 'none',
    sales: 'none',
    product: 'none',
    content: 'standard',
    ux: 'none',
    retainer: 'light',
  },
  'sales-enablement': {
    messaging: 'standard',
    voice: 'basic',
    website: 'none',
    marketing: 'basic',
    sales: 'comprehensive',
    product: 'none',
    content: 'none',
    ux: 'none',
    retainer: 'none',
  },
  ux: {
    messaging: 'core',
    voice: 'standard',
    website: 'none',
    marketing: 'none',
    sales: 'none',
    product: 'none',
    content: 'none',
    ux: 'comprehensive',
    retainer: 'none',
  },
  complete: {
    messaging: 'comprehensive',
    voice: 'comprehensive',
    website: 'comprehensive',
    marketing: 'standard',
    sales: 'standard',
    product: 'none',
    content: 'standard',
    ux: 'none',
    retainer: 'standard',
  },
  other: {
    messaging: 'core',
    voice: 'basic',
    website: 'none',
    marketing: 'none',
    sales: 'none',
    product: 'none',
    content: 'none',
    ux: 'none',
    retainer: 'none',
  },
};
