// Content Strategy Custom Builder Data
// Specification: /prompts/Content/Content Strategy/ContentStrategyBuilder_Specification.md

export interface ContentGoalOption {
  id: string;
  label: string;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface DepthOption {
  id: string;
  label: string;
  price: number;
  startsAt?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface AuditOption {
  id: string;
  label: string;
  price: number;
  startsAt?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface AudienceOption {
  id: string;
  label: string;
  price: number;
  startsAt?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface ChannelOption {
  id: string;
  label: string;
  price: number;
  startsAt?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface EditorialOption {
  id: string;
  label: string;
  price: number;
  startsAt?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface SeoOption {
  id: string;
  label: string;
  price: number;
  startsAt?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface GovernanceOption {
  id: string;
  label: string;
  price: number;
  startsAt?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface MeasurementOption {
  id: string;
  label: string;
  price: number;
  startsAt?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface AddOnService {
  id: string;
  label: string;
  price: number;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface TimelineOption {
  id: string;
  label: string;
  multiplier: number;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

// Step 1: Content Strategy Goal Options
export const contentGoalOptions: ContentGoalOption[] = [
  {
    id: 'scratch',
    label: 'Starting from Scratch',
    tooltip: {
      whatItIs: 'Building content strategy foundations for a new brand or initiative.',
      idealIf: "You're launching and need a content roadmap before creating anything.",
      examples: 'Startups, new products, new markets',
    },
  },
  {
    id: 'overhaul',
    label: 'Content Overhaul',
    tooltip: {
      whatItIs: 'Rethinking and restructuring existing content approach.',
      idealIf: "Current content isn't working and you need a new direction.",
      examples: 'Pivots, rebrands, performance issues',
    },
  },
  {
    id: 'scale',
    label: 'Scale Content Operations',
    tooltip: {
      whatItIs: 'Building systems and processes to produce more content efficiently.',
      idealIf: 'You need to increase content output without sacrificing quality.',
      examples: 'Growing teams, content expansion',
    },
  },
  {
    id: 'performance',
    label: 'Improve Content Performance',
    tooltip: {
      whatItIs: 'Optimizing content strategy for better results.',
      idealIf: "You have content but it's not delivering desired outcomes.",
      examples: 'Low engagement, poor SEO, conversion issues',
    },
  },
  {
    id: 'launch',
    label: 'Launch Content Program',
    tooltip: {
      whatItIs: 'Creating strategy for a specific content initiative (blog, podcast, video).',
      idealIf: "You're launching a new content channel or format.",
      examples: 'Blog launch, podcast strategy, video series',
    },
  },
  {
    id: 'seo',
    label: 'SEO & Organic Growth',
    tooltip: {
      whatItIs: 'Content strategy focused on search visibility and organic traffic.',
      idealIf: 'You want content to drive sustainable organic growth.',
      examples: 'SEO-driven businesses, inbound marketing',
    },
  },
  {
    id: 'thought-leadership',
    label: 'Thought Leadership',
    tooltip: {
      whatItIs: 'Strategy to establish authority and expertise in your space.',
      idealIf: 'You want to be seen as an industry leader.',
      examples: 'B2B, consultants, executives, experts',
    },
  },
  {
    id: 'sales',
    label: 'Sales Enablement Content',
    tooltip: {
      whatItIs: 'Content strategy supporting sales process and conversions.',
      idealIf: 'You need content that helps close deals.',
      examples: 'B2B sales, considered purchases',
    },
  },
  {
    id: 'full',
    label: 'Full Content Strategy',
    tooltip: {
      whatItIs: 'Comprehensive content strategy covering all aspects.',
      idealIf: 'You need end-to-end content strategy across channels.',
      examples: 'Complete content programs, enterprise',
    },
  },
  {
    id: 'other',
    label: 'Other',
    tooltip: {
      whatItIs: 'Something unique or a combination of goals.',
      idealIf: "Your situation doesn't fit standard categories — we'll tailor recommendations.",
      examples: 'Custom projects, unique requirements',
    },
  },
];

// Step 2: Strategy Depth Options
export const depthOptions: DepthOption[] = [
  {
    id: 'focused',
    label: 'Focused',
    price: 1200,
    tooltip: {
      whatItIs: 'Targeted strategy addressing one specific content area or channel.',
      idealIf: 'You have existing strategy but need focus on specific challenge.',
      examples: 'Blog strategy only, video content plan, social content strategy',
    },
  },
  {
    id: 'foundation',
    label: 'Foundation',
    price: 2500,
    tooltip: {
      whatItIs: 'Essential strategic elements to guide content decisions.',
      idealIf: 'You need solid fundamentals without exhaustive documentation.',
      examples: 'Startups, small businesses, new initiatives',
    },
  },
  {
    id: 'comprehensive',
    label: 'Comprehensive',
    price: 4500,
    tooltip: {
      whatItIs: 'Complete strategic framework covering all content dimensions.',
      idealIf: 'You need thorough strategy to guide significant content investment.',
      examples: 'Content-driven businesses, rebrands, scaling companies',
    },
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    price: 7500,
    startsAt: true,
    tooltip: {
      whatItIs: 'Extensive strategy with multiple stakeholder input, detailed documentation, and implementation roadmap.',
      idealIf: "You're a larger organization with complex content needs.",
      examples: 'Enterprise, multi-brand, global content programs',
    },
  },
];

// Step 3: Content Audit & Assessment Options
export const auditOptions: AuditOption[] = [
  {
    id: 'none',
    label: 'No Audit',
    price: 0,
    tooltip: {
      whatItIs: 'Skip audit — starting fresh or already assessed.',
      idealIf: "You're starting from scratch or have recent audit data.",
      examples: 'New brands, recent audits',
    },
  },
  {
    id: 'basic',
    label: 'Basic Audit',
    price: 600,
    tooltip: {
      whatItIs: 'High-level review of existing content with key findings.',
      idealIf: 'You want quick assessment of what you have.',
      examples: 'Small content libraries, focused review',
    },
  },
  {
    id: 'standard',
    label: 'Standard Audit',
    price: 1200,
    tooltip: {
      whatItIs: 'Thorough content inventory with performance analysis and recommendations.',
      idealIf: "You need to understand what's working and what isn't.",
      examples: 'Most businesses, content overhauls',
    },
  },
  {
    id: 'comprehensive',
    label: 'Comprehensive Audit',
    price: 2200,
    tooltip: {
      whatItIs: 'Deep analysis including competitive review, gap analysis, and detailed action items.',
      idealIf: 'You need complete picture of content landscape.',
      examples: 'Large content libraries, major strategy shifts',
    },
  },
  {
    id: 'full',
    label: 'Full Content Ecosystem Audit',
    price: 3500,
    startsAt: true,
    tooltip: {
      whatItIs: 'Extensive audit across all channels with benchmarking and prioritization framework.',
      idealIf: 'You have complex content across many channels.',
      examples: 'Enterprise, multi-channel brands',
    },
  },
];

// Step 4: Audience & Persona Strategy Options
export const audienceOptions: AudienceOption[] = [
  {
    id: 'existing',
    label: 'Use Existing',
    price: 0,
    tooltip: {
      whatItIs: 'Work with personas/audience data you already have.',
      idealIf: 'You have solid audience research already completed.',
      examples: 'Post-brand strategy, existing personas',
    },
  },
  {
    id: 'basic',
    label: 'Basic Audience Definition',
    price: 400,
    tooltip: {
      whatItIs: 'Core audience segments defined for content purposes.',
      idealIf: 'You need basic clarity on who content is for.',
      examples: 'Simple businesses, clear audiences',
    },
  },
  {
    id: 'standard',
    label: 'Standard Persona Development',
    price: 900,
    tooltip: {
      whatItIs: 'Content-focused personas with preferences, behaviors, and content needs.',
      idealIf: 'You need actionable audience insights for content.',
      examples: 'Most businesses',
    },
  },
  {
    id: 'comprehensive',
    label: 'Comprehensive Persona System',
    price: 1600,
    tooltip: {
      whatItIs: 'Detailed personas with content journeys, preferences by stage, and topic mapping.',
      idealIf: 'You have multiple audiences with different content needs.',
      examples: 'B2B, complex products',
    },
  },
  {
    id: 'research',
    label: 'Audience Research & Personas',
    price: 2800,
    startsAt: true,
    tooltip: {
      whatItIs: 'Primary research-backed personas with validation and content preference data.',
      idealIf: 'You need research-validated audience insights.',
      examples: 'Enterprise, data-driven companies',
    },
  },
];

// Step 5: Channel Strategy Options
export const channelOptions: ChannelOption[] = [
  {
    id: 'focused',
    label: 'Focused (1-2 channels)',
    price: 500,
    tooltip: {
      whatItIs: 'Strategy for one or two primary content channels.',
      idealIf: "You're starting focused or launching specific channel.",
      examples: 'Blog + newsletter, social only, podcast launch',
    },
  },
  {
    id: 'standard',
    label: 'Standard (3-4 channels)',
    price: 1000,
    tooltip: {
      whatItIs: 'Strategy spanning core content channels with integration.',
      idealIf: 'You have typical multi-channel presence.',
      examples: 'Website, blog, social, email',
    },
  },
  {
    id: 'comprehensive',
    label: 'Comprehensive (5-6 channels)',
    price: 1800,
    tooltip: {
      whatItIs: 'Full channel ecosystem with cross-channel strategy.',
      idealIf: 'You have extensive content touchpoints.',
      examples: 'Omnichannel brands, content-heavy businesses',
    },
  },
  {
    id: 'enterprise',
    label: 'Enterprise (7+ channels)',
    price: 2800,
    startsAt: true,
    tooltip: {
      whatItIs: 'Complete multi-channel architecture with prioritization and resource allocation.',
      idealIf: 'You manage complex channel ecosystem.',
      examples: 'Enterprise, media companies, large brands',
    },
  },
];

// Step 6: Editorial Planning Options
export const editorialOptions: EditorialOption[] = [
  {
    id: 'basic',
    label: 'Basic Framework',
    price: 400,
    tooltip: {
      whatItIs: 'Content themes, categories, and basic planning structure.',
      idealIf: 'You need foundational editorial direction.',
      examples: 'Getting started, simple content needs',
    },
  },
  {
    id: 'standard',
    label: 'Standard Planning',
    price: 800,
    tooltip: {
      whatItIs: 'Editorial calendar framework, content themes, and topic clusters.',
      idealIf: 'You need structured approach to content planning.',
      examples: 'Most businesses, regular content',
    },
  },
  {
    id: 'comprehensive',
    label: 'Comprehensive Planning',
    price: 1400,
    tooltip: {
      whatItIs: 'Full editorial system with calendar, workflows, and content templates.',
      idealIf: 'You need robust editorial infrastructure.',
      examples: 'Content teams, high-volume content',
    },
  },
  {
    id: 'full',
    label: 'Full Editorial System',
    price: 2400,
    startsAt: true,
    tooltip: {
      whatItIs: 'Complete editorial operations including calendar, workflows, briefs, and team structure.',
      idealIf: "You're building content operation from ground up.",
      examples: 'Media companies, content-first businesses',
    },
  },
];

// Step 7: SEO & Search Strategy Options
export const seoOptions: SeoOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'No SEO focus for this strategy.',
      idealIf: "Organic search isn't a priority channel.",
      examples: 'Sales content, internal content',
    },
  },
  {
    id: 'basic',
    label: 'Basic SEO Direction',
    price: 400,
    tooltip: {
      whatItIs: 'High-level SEO guidance and best practices.',
      idealIf: 'You want SEO awareness without deep strategy.',
      examples: 'Supplementary SEO consideration',
    },
  },
  {
    id: 'standard',
    label: 'Standard SEO Strategy',
    price: 900,
    tooltip: {
      whatItIs: 'Keyword themes, on-page guidance, and content optimization framework.',
      idealIf: 'SEO is important but not primary focus.',
      examples: 'Most businesses',
    },
  },
  {
    id: 'comprehensive',
    label: 'Comprehensive SEO Strategy',
    price: 1800,
    tooltip: {
      whatItIs: 'Full SEO strategy with topic clusters, keyword mapping, and technical recommendations.',
      idealIf: 'Organic search is a key growth channel.',
      examples: 'SEO-driven businesses, content marketing',
    },
  },
  {
    id: 'full',
    label: 'Full SEO Program',
    price: 3200,
    startsAt: true,
    tooltip: {
      whatItIs: 'Extensive SEO strategy with competitive analysis, content gap analysis, and ongoing recommendations.',
      idealIf: 'SEO is primary content driver.',
      examples: 'Publishers, e-commerce, SEO-first companies',
    },
  },
];

// Step 8: Content Governance Options
export const governanceOptions: GovernanceOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'No formal governance documentation.',
      idealIf: "You're small team with informal processes.",
      examples: 'Solo creators, tiny teams',
    },
  },
  {
    id: 'basic',
    label: 'Basic Guidelines',
    price: 350,
    tooltip: {
      whatItIs: 'Core content standards and style basics.',
      idealIf: 'You need minimum viable governance.',
      examples: 'Small teams, getting started',
    },
  },
  {
    id: 'standard',
    label: 'Standard Governance',
    price: 700,
    tooltip: {
      whatItIs: 'Content standards, style guide, and approval workflows.',
      idealIf: 'You need clear rules for consistent content.',
      examples: 'Most businesses, growing teams',
    },
  },
  {
    id: 'comprehensive',
    label: 'Comprehensive Governance',
    price: 1200,
    tooltip: {
      whatItIs: 'Full governance framework with brand voice, standards, and process documentation.',
      idealIf: 'You have multiple content creators needing alignment.',
      examples: 'Larger teams, agencies',
    },
  },
  {
    id: 'enterprise',
    label: 'Enterprise Governance',
    price: 2000,
    startsAt: true,
    tooltip: {
      whatItIs: 'Complete content governance system with multi-stakeholder workflows and compliance.',
      idealIf: 'You have complex approval needs or regulatory requirements.',
      examples: 'Enterprise, regulated industries',
    },
  },
];

// Step 9: Measurement & Analytics Options
export const measurementOptions: MeasurementOption[] = [
  {
    id: 'basic',
    label: 'Basic Metrics',
    price: 300,
    tooltip: {
      whatItIs: 'Core KPIs and basic tracking recommendations.',
      idealIf: 'You need simple performance visibility.',
      examples: 'Getting started, simple needs',
    },
  },
  {
    id: 'standard',
    label: 'Standard Framework',
    price: 600,
    tooltip: {
      whatItIs: 'Measurement framework with KPIs, dashboards, and reporting cadence.',
      idealIf: 'You want structured content performance tracking.',
      examples: 'Most businesses',
    },
  },
  {
    id: 'comprehensive',
    label: 'Comprehensive Analytics',
    price: 1100,
    tooltip: {
      whatItIs: 'Full analytics strategy with attribution, benchmarks, and optimization framework.',
      idealIf: 'You need data-driven content optimization.',
      examples: 'Performance-focused, marketing teams',
    },
  },
  {
    id: 'full',
    label: 'Full Analytics Program',
    price: 1800,
    startsAt: true,
    tooltip: {
      whatItIs: 'Complete measurement system with custom dashboards, reporting automation, and analysis process.',
      idealIf: 'Content performance is critical to business decisions.',
      examples: 'Enterprise, content-driven businesses',
    },
  },
];

// Step 10: Add-on Services
export const addOnServices: AddOnService[] = [
  {
    id: 'keyword-research',
    label: 'Keyword Research Package',
    price: 800,
    tooltip: {
      whatItIs: 'Comprehensive keyword research with prioritized opportunities.',
      idealIf: 'You need data-driven topic selection for SEO.',
      examples: 'SEO content, blog strategy',
    },
  },
  {
    id: 'competitor-content',
    label: 'Competitor Content Analysis',
    price: 700,
    tooltip: {
      whatItIs: 'Deep analysis of competitor content strategies and gaps.',
      idealIf: 'You want to understand competitive content landscape.',
      examples: 'Differentiation, opportunity finding',
    },
  },
  {
    id: 'content-pillars',
    label: 'Content Pillar Development',
    price: 600,
    tooltip: {
      whatItIs: 'Define core content pillars and supporting topic clusters.',
      idealIf: 'You need clear thematic organization.',
      examples: 'Thought leadership, SEO, authority building',
    },
  },
  {
    id: 'journey-mapping',
    label: 'Content Journey Mapping',
    price: 900,
    tooltip: {
      whatItIs: 'Map content to customer journey stages with gap analysis.',
      idealIf: 'You need content aligned to buyer journey.',
      examples: 'B2B, sales-driven, considered purchases',
    },
  },
  {
    id: 'calendar-3mo',
    label: 'Content Calendar (3 months)',
    price: 500,
    tooltip: {
      whatItIs: 'Detailed content calendar with specific topics and assignments.',
      idealIf: 'You want ready-to-execute content plan.',
      examples: 'Quick start, team alignment',
    },
  },
  {
    id: 'calendar-6mo',
    label: 'Content Calendar (6 months)',
    price: 900,
    tooltip: {
      whatItIs: 'Extended content calendar with seasonal planning.',
      idealIf: 'You want longer-term content roadmap.',
      examples: 'Planning ahead, resource allocation',
    },
  },
  {
    id: 'calendar-12mo',
    label: 'Content Calendar (12 months)',
    price: 1500,
    tooltip: {
      whatItIs: 'Full year content calendar with themes and major initiatives.',
      idealIf: 'You want comprehensive annual planning.',
      examples: 'Enterprise, marketing planning',
    },
  },
  {
    id: 'briefs',
    label: 'Content Brief Templates',
    price: 400,
    tooltip: {
      whatItIs: 'Custom content brief templates for different content types.',
      idealIf: 'You want consistent content creation process.',
      examples: 'Teams, freelancer management',
    },
  },
  {
    id: 'ai-guidelines',
    label: 'AI Content Guidelines',
    price: 450,
    tooltip: {
      whatItIs: 'Guidelines for using AI in content creation responsibly.',
      idealIf: 'You want to incorporate AI into content workflow.',
      examples: 'Scaling content, efficiency',
    },
  },
  {
    id: 'repurposing',
    label: 'Content Repurposing Strategy',
    price: 500,
    tooltip: {
      whatItIs: 'Framework for maximizing content value across formats and channels.',
      idealIf: 'You want more mileage from content investment.',
      examples: 'Efficiency, multi-channel',
    },
  },
  {
    id: 'workshop',
    label: 'Internal Content Workshop',
    price: 800,
    tooltip: {
      whatItIs: 'Half-day workshop to align team on content strategy.',
      idealIf: 'You need team buy-in and understanding.',
      examples: 'Launches, new strategies',
    },
  },
  {
    id: 'presentation',
    label: 'Strategy Presentation',
    price: 400,
    tooltip: {
      whatItIs: 'Executive presentation of content strategy for stakeholders.',
      idealIf: 'You need to present strategy to leadership.',
      examples: 'Approval, alignment',
    },
  },
];

// Step 11: Timeline Options
export const timelineOptions: TimelineOption[] = [
  {
    id: 'flexible',
    label: 'Flexible (6-8 weeks)',
    multiplier: 1.0,
    tooltip: {
      whatItIs: 'Standard timeline allowing thorough research and development.',
      idealIf: 'You can plan ahead for best results.',
      examples: 'Most projects',
    },
  },
  {
    id: 'standard',
    label: 'Standard (4-6 weeks)',
    multiplier: 1.1,
    tooltip: {
      whatItIs: 'Slightly accelerated timeline with focused execution.',
      idealIf: 'You have a target date but some flexibility.',
      examples: 'Planned launches',
    },
  },
  {
    id: 'accelerated',
    label: 'Accelerated (2-4 weeks)',
    multiplier: 1.25,
    tooltip: {
      whatItIs: 'Fast-tracked delivery requiring prioritized scheduling.',
      idealIf: 'You have a firm deadline approaching.',
      examples: 'Urgent initiatives',
    },
  },
  {
    id: 'rush',
    label: 'Rush (Under 2 weeks)',
    multiplier: 1.5,
    tooltip: {
      whatItIs: 'Expedited delivery with dedicated resources.',
      idealIf: 'You have an immediate need.',
      examples: 'Crisis response, opportunities',
    },
  },
];

// Recommendation Presets based on Step 1 selection
export const recommendationPresets: Record<string, {
  depth?: string;
  audit?: string;
  audience?: string;
  channels?: string;
  editorial?: string;
  seo?: string;
  governance?: string;
  measurement?: string;
  addOns?: string[];
}> = {
  'scratch': {
    depth: 'foundation',
    audit: 'none',
    audience: 'standard',
    channels: 'standard',
    editorial: 'standard',
    seo: 'basic',
    governance: 'basic',
    measurement: 'standard',
  },
  'overhaul': {
    depth: 'comprehensive',
    audit: 'comprehensive',
    audience: 'standard',
    channels: 'comprehensive',
    editorial: 'comprehensive',
    seo: 'standard',
    governance: 'standard',
    measurement: 'comprehensive',
  },
  'scale': {
    depth: 'foundation',
    audit: 'basic',
    audience: 'basic',
    channels: 'standard',
    editorial: 'comprehensive',
    seo: 'basic',
    governance: 'comprehensive',
    measurement: 'standard',
  },
  'performance': {
    depth: 'focused',
    audit: 'comprehensive',
    audience: 'standard',
    channels: 'standard',
    editorial: 'standard',
    seo: 'comprehensive',
    governance: 'basic',
    measurement: 'comprehensive',
  },
  'launch': {
    depth: 'focused',
    audit: 'none',
    audience: 'standard',
    channels: 'focused',
    editorial: 'standard',
    seo: 'standard',
    governance: 'basic',
    measurement: 'standard',
  },
  'seo': {
    depth: 'foundation',
    audit: 'basic',
    audience: 'standard',
    channels: 'focused',
    editorial: 'standard',
    seo: 'comprehensive',
    governance: 'basic',
    measurement: 'comprehensive',
    addOns: ['keyword-research', 'competitor-content'],
  },
  'thought-leadership': {
    depth: 'foundation',
    audit: 'basic',
    audience: 'comprehensive',
    channels: 'standard',
    editorial: 'comprehensive',
    seo: 'standard',
    governance: 'basic',
    measurement: 'standard',
    addOns: ['content-pillars'],
  },
  'sales': {
    depth: 'foundation',
    audit: 'basic',
    audience: 'comprehensive',
    channels: 'standard',
    editorial: 'standard',
    seo: 'basic',
    governance: 'basic',
    measurement: 'standard',
    addOns: ['journey-mapping', 'content-pillars'],
  },
  'full': {
    depth: 'comprehensive',
    audit: 'comprehensive',
    audience: 'comprehensive',
    channels: 'comprehensive',
    editorial: 'comprehensive',
    seo: 'comprehensive',
    governance: 'comprehensive',
    measurement: 'comprehensive',
    addOns: ['keyword-research', 'content-pillars', 'journey-mapping'],
  },
  'other': {
    depth: 'foundation',
    audit: 'basic',
    audience: 'standard',
    channels: 'standard',
    editorial: 'standard',
    seo: 'basic',
    governance: 'basic',
    measurement: 'standard',
  },
};
