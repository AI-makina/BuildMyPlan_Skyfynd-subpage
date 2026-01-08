// Brand Strategy & Positioning Builder Data

export interface StrategyGoalOption {
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
  oneTime: true;
  startsAt?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface ResearchOption {
  id: string;
  label: string;
  price: number;
  oneTime: true;
  startsAt?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface PositioningOption {
  id: string;
  label: string;
  price: number;
  oneTime: true;
  startsAt?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface MessagingOption {
  id: string;
  label: string;
  price: number;
  oneTime?: true;
  startsAt?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface ArchitectureOption {
  id: string;
  label: string;
  price: number;
  oneTime?: true;
  startsAt?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface PurposeOption {
  id: string;
  label: string;
  price: number;
  oneTime?: true;
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
  oneTime?: true;
  startsAt?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface WorkshopOption {
  id: string;
  label: string;
  price: number | null;
  oneTime?: true;
  customQuote?: boolean;
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
  oneTime: true;
  startsAt?: boolean;
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

// Step 1: Brand Strategy Goal (info only, no price)
export const strategyGoalOptions: StrategyGoalOption[] = [
  {
    id: 'new-business',
    label: 'New Business / Startup',
    tooltip: {
      whatItIs: 'Building brand foundations from scratch for a new venture.',
      idealIf: 'You\'re launching a new business and need strategic clarity before visual identity.',
      examples: 'Startups, new product lines, spin-offs',
    },
  },
  {
    id: 'rebrand',
    label: 'Rebrand / Refresh',
    tooltip: {
      whatItIs: 'Redefining or evolving an existing brand\'s positioning and strategy.',
      idealIf: 'Your current brand no longer reflects who you are or where you\'re going.',
      examples: 'Pivots, mergers, modernization, repositioning',
    },
  },
  {
    id: 'expansion',
    label: 'Market Expansion',
    tooltip: {
      whatItIs: 'Adapting brand strategy for new markets, audiences, or geographies.',
      idealIf: 'You\'re entering new territories or targeting new customer segments.',
      examples: 'International expansion, new verticals, demographic shifts',
    },
  },
  {
    id: 'differentiation',
    label: 'Competitive Differentiation',
    tooltip: {
      whatItIs: 'Sharpening your positioning to stand out in a crowded market.',
      idealIf: 'You\'re struggling to differentiate or losing ground to competitors.',
      examples: 'Commodity markets, crowded categories, price pressure',
    },
  },
  {
    id: 'merger',
    label: 'Merger / Acquisition',
    tooltip: {
      whatItIs: 'Integrating or harmonizing brands after M&A activity.',
      idealIf: 'You\'ve acquired a company or merged and need brand clarity.',
      examples: 'Post-acquisition integration, brand architecture decisions',
    },
  },
  {
    id: 'launch',
    label: 'Product / Service Launch',
    tooltip: {
      whatItIs: 'Strategic positioning for a new product or service offering.',
      idealIf: 'You\'re launching something new that needs its own positioning.',
      examples: 'New product lines, service expansions, sub-brands',
    },
  },
  {
    id: 'investor',
    label: 'Investor / Funding Readiness',
    tooltip: {
      whatItIs: 'Clarifying brand story and positioning for fundraising.',
      idealIf: 'You\'re preparing to pitch investors and need a compelling narrative.',
      examples: 'Seed rounds, Series A, growth funding',
    },
  },
  {
    id: 'alignment',
    label: 'Internal Alignment',
    tooltip: {
      whatItIs: 'Unifying team understanding of brand purpose, values, and direction.',
      idealIf: 'Your team lacks clarity on what the brand stands for.',
      examples: 'Growing teams, culture initiatives, leadership transitions',
    },
  },
  {
    id: 'full',
    label: 'Full Brand Strategy',
    tooltip: {
      whatItIs: 'Comprehensive strategic foundation covering all aspects of brand.',
      idealIf: 'You need end-to-end strategic clarity before any creative work.',
      examples: 'Complete brand builds, strategic overhauls',
    },
  },
  {
    id: 'other',
    label: 'Other',
    tooltip: {
      whatItIs: 'Something unique or a combination of needs.',
      idealIf: 'Your situation doesn\'t fit standard categories — we\'ll tailor recommendations.',
      examples: 'Custom requirements, hybrid approaches',
    },
  },
];

// Step 2: Strategy Depth
export const depthOptions: DepthOption[] = [
  {
    id: 'focused',
    label: 'Focused',
    price: 1500,
    oneTime: true,
    tooltip: {
      whatItIs: 'Targeted strategy addressing one specific aspect of brand.',
      idealIf: 'You have existing strategy but need to solve a specific challenge.',
      examples: 'Positioning refresh, messaging update, single-market strategy',
    },
  },
  {
    id: 'foundation',
    label: 'Foundation',
    price: 3000,
    oneTime: true,
    tooltip: {
      whatItIs: 'Essential strategic elements to guide brand decisions.',
      idealIf: 'You need solid fundamentals without exhaustive documentation.',
      examples: 'Startups, small businesses, MVPs',
    },
  },
  {
    id: 'comprehensive',
    label: 'Comprehensive',
    price: 5500,
    oneTime: true,
    tooltip: {
      whatItIs: 'Complete strategic framework covering all brand dimensions.',
      idealIf: 'You need thorough strategy to guide significant investment.',
      examples: 'Rebrands, funded startups, established businesses',
    },
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    price: 9000,
    oneTime: true,
    startsAt: true,
    tooltip: {
      whatItIs: 'Extensive strategy with multiple stakeholder input and detailed documentation.',
      idealIf: 'You\'re a larger organization with complex needs.',
      examples: 'Enterprise brands, multi-market strategies, M&A',
    },
  },
];

// Step 3: Research & Discovery
export const researchOptions: ResearchOption[] = [
  {
    id: 'light',
    label: 'Light Discovery',
    price: 500,
    oneTime: true,
    tooltip: {
      whatItIs: 'Stakeholder interviews and basic competitive scan.',
      idealIf: 'You have good market knowledge and need validation.',
      examples: 'Founder-led businesses, clear market position',
    },
  },
  {
    id: 'standard',
    label: 'Standard Research',
    price: 1200,
    oneTime: true,
    tooltip: {
      whatItIs: 'Stakeholder sessions, competitor analysis, and audience insights review.',
      idealIf: 'You need solid research foundation without primary research.',
      examples: 'Most strategy projects, B2B brands',
    },
  },
  {
    id: 'deep',
    label: 'Deep Research',
    price: 2500,
    oneTime: true,
    tooltip: {
      whatItIs: 'Comprehensive research including customer interviews, surveys, and market analysis.',
      idealIf: 'You need data-driven insights to inform major decisions.',
      examples: 'Rebrands, competitive markets, investor-backed',
    },
  },
  {
    id: 'full',
    label: 'Full Research Program',
    price: 4500,
    oneTime: true,
    startsAt: true,
    tooltip: {
      whatItIs: 'Extensive primary and secondary research with detailed findings report.',
      idealIf: 'You need thorough evidence base for significant investment.',
      examples: 'Enterprise, regulated industries, major pivots',
    },
  },
];

// Step 4: Positioning & Differentiation
export const positioningOptions: PositioningOption[] = [
  {
    id: 'review',
    label: 'Positioning Review',
    price: 400,
    oneTime: true,
    tooltip: {
      whatItIs: 'Assessment and refinement of existing positioning.',
      idealIf: 'You have positioning but need validation or minor adjustments.',
      examples: 'Positioning check, light refresh',
    },
  },
  {
    id: 'core',
    label: 'Core Positioning',
    price: 1000,
    oneTime: true,
    tooltip: {
      whatItIs: 'Clear positioning statement, value proposition, and key differentiators.',
      idealIf: 'You need essential positioning clarity.',
      examples: 'Startups, focused brands, single offerings',
    },
  },
  {
    id: 'full',
    label: 'Full Positioning',
    price: 2000,
    oneTime: true,
    tooltip: {
      whatItIs: 'Comprehensive positioning including competitive mapping, audience-specific angles, and proof points.',
      idealIf: 'You need thorough positioning to guide all communications.',
      examples: 'Competitive markets, rebrands, multi-audience',
    },
  },
  {
    id: 'system',
    label: 'Strategic Positioning System',
    price: 3500,
    oneTime: true,
    startsAt: true,
    tooltip: {
      whatItIs: 'Complete positioning architecture with market mapping, persona positioning, and strategic narrative.',
      idealIf: 'You operate in complex markets with multiple audiences.',
      examples: 'Enterprise, B2B, multi-product companies',
    },
  },
];

// Step 5: Brand Messaging Framework
export const messagingOptions: MessagingOption[] = [
  {
    id: 'none',
    label: 'No Messaging',
    price: 0,
    tooltip: {
      whatItIs: 'Strategy only, no messaging framework.',
      idealIf: 'You have messaging handled or will develop it separately.',
      examples: 'Strategy-only engagements',
    },
  },
  {
    id: 'core',
    label: 'Core Messaging',
    price: 800,
    oneTime: true,
    tooltip: {
      whatItIs: 'Tagline, elevator pitch, and key messages.',
      idealIf: 'You need essential messaging building blocks.',
      examples: 'Startups, focused communications',
    },
  },
  {
    id: 'full',
    label: 'Full Messaging Framework',
    price: 1800,
    oneTime: true,
    tooltip: {
      whatItIs: 'Complete messaging hierarchy including audience-specific messages, proof points, and tone guidance.',
      idealIf: 'You need comprehensive messaging to guide all content.',
      examples: 'Multi-channel brands, content-heavy companies',
    },
  },
  {
    id: 'system',
    label: 'Messaging System',
    price: 3000,
    oneTime: true,
    startsAt: true,
    tooltip: {
      whatItIs: 'Extensive messaging architecture with scenario-specific messaging, objection handling, and sales enablement.',
      idealIf: 'You have complex sales cycles or multiple stakeholder audiences.',
      examples: 'B2B enterprise, considered purchases',
    },
  },
];

// Step 6: Brand Architecture
export const architectureOptions: ArchitectureOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'Single brand, no architecture needed.',
      idealIf: 'You have one brand with no sub-brands or product lines.',
      examples: 'Single-product companies, focused services',
    },
  },
  {
    id: 'review',
    label: 'Architecture Review',
    price: 600,
    oneTime: true,
    tooltip: {
      whatItIs: 'Assessment of current brand structure with recommendations.',
      idealIf: 'You have multiple offerings and need clarity on structure.',
      examples: 'Growing companies, portfolio review',
    },
  },
  {
    id: 'extension',
    label: 'Extension Strategy',
    price: 1200,
    oneTime: true,
    tooltip: {
      whatItIs: 'Guidelines for extending the brand to new products or services.',
      idealIf: 'You\'re launching new offerings under your existing brand.',
      examples: 'Product launches, service expansion',
    },
  },
  {
    id: 'full',
    label: 'Full Architecture',
    price: 2500,
    oneTime: true,
    tooltip: {
      whatItIs: 'Complete brand architecture strategy for multi-brand or complex portfolios.',
      idealIf: 'You manage multiple brands or complex product lines.',
      examples: 'Holding companies, acquired brands, sub-brands',
    },
  },
  {
    id: 'portfolio',
    label: 'Portfolio Strategy',
    price: 4000,
    oneTime: true,
    startsAt: true,
    tooltip: {
      whatItIs: 'Comprehensive portfolio strategy including migration planning and naming conventions.',
      idealIf: 'You have complex brand portfolio requiring strategic organization.',
      examples: 'M&A integration, enterprise portfolios',
    },
  },
];

// Step 7: Purpose, Vision & Values
export const purposeOptions: PurposeOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'You have existing purpose/vision/values or don\'t need them.',
      idealIf: 'This work has been done or isn\'t a priority.',
      examples: 'Established brands, positioning-focused projects',
    },
  },
  {
    id: 'refresh',
    label: 'Values Refresh',
    price: 500,
    oneTime: true,
    tooltip: {
      whatItIs: 'Review and refinement of existing values.',
      idealIf: 'You have values but they need updating or clarification.',
      examples: 'Growing teams, culture evolution',
    },
  },
  {
    id: 'core',
    label: 'Core Purpose & Values',
    price: 1200,
    oneTime: true,
    tooltip: {
      whatItIs: 'Defined purpose, vision, mission, and core values.',
      idealIf: 'You need foundational elements to guide culture and decisions.',
      examples: 'Startups, new leadership, culture building',
    },
  },
  {
    id: 'full',
    label: 'Full Purpose Platform',
    price: 2200,
    oneTime: true,
    tooltip: {
      whatItIs: 'Comprehensive purpose framework with behaviors, principles, and activation guidance.',
      idealIf: 'Purpose is central to your brand and culture strategy.',
      examples: 'Purpose-driven brands, B-corps, culture-first companies',
    },
  },
];

// Step 8: Target Audience & Personas
export const audienceOptions: AudienceOption[] = [
  {
    id: 'included',
    label: 'Included in Research',
    price: 0,
    tooltip: {
      whatItIs: 'Audience insights covered within research phase.',
      idealIf: 'Your research tier includes sufficient audience work.',
      examples: 'Projects with Deep or Full Research',
    },
  },
  {
    id: 'overview',
    label: 'Audience Overview',
    price: 400,
    oneTime: true,
    tooltip: {
      whatItIs: 'High-level audience segments with key characteristics.',
      idealIf: 'You need basic audience clarity without detailed personas.',
      examples: 'B2C with clear segments, simple audiences',
    },
  },
  {
    id: 'core',
    label: 'Core Personas (2–3)',
    price: 900,
    oneTime: true,
    tooltip: {
      whatItIs: 'Detailed personas for your primary audiences with needs, motivations, and behaviors.',
      idealIf: 'You need actionable personas to guide marketing and product.',
      examples: 'Most businesses, focused targeting',
    },
  },
  {
    id: 'full',
    label: 'Full Persona System (4–6)',
    price: 1800,
    oneTime: true,
    tooltip: {
      whatItIs: 'Comprehensive persona set covering all key audiences with journey touchpoints.',
      idealIf: 'You have multiple distinct audiences requiring detailed understanding.',
      examples: 'B2B with buying committees, diverse customer base',
    },
  },
  {
    id: 'research',
    label: 'Audience Research & Personas',
    price: 3000,
    oneTime: true,
    startsAt: true,
    tooltip: {
      whatItIs: 'Primary research-backed personas with validation and strategic recommendations.',
      idealIf: 'You need research-validated audience insights.',
      examples: 'Enterprise, data-driven organizations',
    },
  },
];

// Step 9: Workshops & Collaboration
export const workshopOptions: WorkshopOption[] = [
  {
    id: 'none',
    label: 'No Workshops',
    price: 0,
    tooltip: {
      whatItIs: 'Strategy developed through async collaboration and review.',
      idealIf: 'You prefer document-based collaboration or have limited availability.',
      examples: 'Remote teams, busy schedules',
    },
  },
  {
    id: 'kickoff',
    label: 'Kickoff Session (2 hrs)',
    price: 400,
    oneTime: true,
    tooltip: {
      whatItIs: 'Initial alignment session to gather input and set direction.',
      idealIf: 'You want collaborative input at the start.',
      examples: 'Small teams, clear direction',
    },
  },
  {
    id: 'half-day',
    label: 'Half-Day Workshop',
    price: 900,
    oneTime: true,
    tooltip: {
      whatItIs: '4-hour facilitated session for discovery, alignment, or strategy development.',
      idealIf: 'You want meaningful collaboration without full-day commitment.',
      examples: 'Most projects, focused agendas',
    },
  },
  {
    id: 'full-day',
    label: 'Full-Day Workshop',
    price: 1600,
    oneTime: true,
    tooltip: {
      whatItIs: '8-hour intensive workshop covering multiple strategy areas.',
      idealIf: 'You want comprehensive, immersive collaboration.',
      examples: 'Leadership teams, major initiatives',
    },
  },
  {
    id: 'series',
    label: 'Workshop Series (2–3)',
    price: 2800,
    oneTime: true,
    tooltip: {
      whatItIs: 'Multiple workshops spread across the project for ongoing collaboration.',
      idealIf: 'You want iterative development with team input throughout.',
      examples: 'Complex projects, large stakeholder groups',
    },
  },
  {
    id: 'custom',
    label: 'Custom Workshop Program',
    price: null,
    customQuote: true,
    tooltip: {
      whatItIs: 'Tailored workshop series based on your specific needs.',
      idealIf: 'You have unique collaboration requirements.',
      examples: 'Enterprise, multi-location teams',
    },
  },
];

// Step 10: Add-on Services
export const addOnServices: AddOnService[] = [
  {
    id: 'competitive',
    label: 'Competitive Audit',
    price: 800,
    oneTime: true,
    tooltip: {
      whatItIs: 'Detailed analysis of competitor positioning, messaging, and brand presence.',
      idealIf: 'You need to understand the competitive landscape in depth.',
      examples: 'Differentiation strategy, market entry',
    },
  },
  {
    id: 'naming',
    label: 'Brand Naming',
    price: 1500,
    oneTime: true,
    startsAt: true,
    tooltip: {
      whatItIs: 'Strategic naming development with options and rationale.',
      idealIf: 'You need a new name or product names.',
      examples: 'New brands, product launches, rebrands',
    },
  },
  {
    id: 'tagline',
    label: 'Tagline Development',
    price: 600,
    oneTime: true,
    tooltip: {
      whatItIs: 'Strategic tagline creation with options and testing.',
      idealIf: 'You need a memorable tagline or slogan.',
      examples: 'Campaign lines, brand taglines',
    },
  },
  {
    id: 'story',
    label: 'Brand Story / Narrative',
    price: 1000,
    oneTime: true,
    tooltip: {
      whatItIs: 'Compelling brand story crafted for key audiences.',
      idealIf: 'You need a narrative that connects emotionally.',
      examples: 'About pages, investor decks, culture docs',
    },
  },
  {
    id: 'pitch',
    label: 'Pitch Deck Narrative',
    price: 1200,
    oneTime: true,
    tooltip: {
      whatItIs: 'Strategic narrative and messaging for investor presentations.',
      idealIf: 'You\'re fundraising and need a compelling story.',
      examples: 'Seed, Series A, growth rounds',
    },
  },
  {
    id: 'employer',
    label: 'Employer Brand Strategy',
    price: 1500,
    oneTime: true,
    tooltip: {
      whatItIs: 'EVP and employer positioning to attract talent.',
      idealIf: 'Recruiting is a priority and you need employer brand clarity.',
      examples: 'Hiring pushes, culture building',
    },
  },
  {
    id: 'internal-launch',
    label: 'Internal Launch Kit',
    price: 800,
    oneTime: true,
    tooltip: {
      whatItIs: 'Materials and guidance for rolling out brand strategy internally.',
      idealIf: 'You need to align your team on the new strategy.',
      examples: 'Post-rebrand, growing teams',
    },
  },
  {
    id: 'guidelines',
    label: 'Brand Guidelines (Strategy Section)',
    price: 600,
    oneTime: true,
    tooltip: {
      whatItIs: 'Documented strategy section for brand guidelines.',
      idealIf: 'You want strategy integrated into a guidelines document.',
      examples: 'Handoff to creative teams',
    },
  },
  {
    id: 'presentation',
    label: 'Stakeholder Presentation',
    price: 500,
    oneTime: true,
    tooltip: {
      whatItIs: 'Presentation deck summarizing strategy for leadership or board.',
      idealIf: 'You need to present strategy to stakeholders.',
      examples: 'Board presentations, leadership alignment',
    },
  },
];

// Step 11: Timeline
export const timelineOptions: TimelineOption[] = [
  {
    id: 'flexible',
    label: 'Flexible (8–12 weeks)',
    multiplier: 1.0,
    tooltip: {
      whatItIs: 'Standard timeline allowing thorough development and iteration.',
      idealIf: 'You can plan ahead and want best quality.',
      examples: 'Most projects',
    },
  },
  {
    id: 'standard',
    label: 'Standard (6–8 weeks)',
    multiplier: 1.10,
    tooltip: {
      whatItIs: 'Slightly accelerated timeline with focused sprints.',
      idealIf: 'You have a target date but some flexibility.',
      examples: 'Product launches, planned rebrands',
    },
  },
  {
    id: 'accelerated',
    label: 'Accelerated (4–6 weeks)',
    multiplier: 1.25,
    tooltip: {
      whatItIs: 'Fast-tracked delivery requiring prioritized scheduling.',
      idealIf: 'You have a firm deadline approaching.',
      examples: 'Funding rounds, market opportunities',
    },
  },
  {
    id: 'rush',
    label: 'Rush (Under 4 weeks)',
    multiplier: 1.50,
    tooltip: {
      whatItIs: 'Expedited delivery with dedicated resources.',
      idealIf: 'You have an urgent need requiring immediate attention.',
      examples: 'Crisis response, unexpected opportunities',
    },
  },
];

// Recommendation Presets (Based on Step 1)
export const recommendationPresets: Record<
  string,
  {
    depth?: string;
    research?: string;
    positioning?: string;
    messaging?: string;
    architecture?: string;
    purpose?: string;
    audience?: string;
    workshop?: string;
    addOns?: string[];
  }
> = {
  'new-business': {
    depth: 'foundation',
    research: 'standard',
    positioning: 'full',
    messaging: 'core',
    architecture: 'none',
    purpose: 'core',
    audience: 'core',
    workshop: 'half-day',
  },
  rebrand: {
    depth: 'comprehensive',
    research: 'deep',
    positioning: 'full',
    messaging: 'full',
    architecture: 'review',
    purpose: 'core',
    audience: 'core',
    workshop: 'full-day',
    addOns: ['competitive', 'story', 'internal-launch'],
  },
  expansion: {
    depth: 'foundation',
    research: 'deep',
    positioning: 'full',
    messaging: 'core',
    architecture: 'review',
    purpose: 'none',
    audience: 'full',
    workshop: 'half-day',
  },
  differentiation: {
    depth: 'comprehensive',
    research: 'deep',
    positioning: 'full',
    messaging: 'full',
    architecture: 'none',
    purpose: 'none',
    audience: 'core',
    workshop: 'half-day',
    addOns: ['competitive'],
  },
  merger: {
    depth: 'comprehensive',
    research: 'standard',
    positioning: 'core',
    messaging: 'core',
    architecture: 'full',
    purpose: 'core',
    audience: 'overview',
    workshop: 'full-day',
    addOns: ['internal-launch'],
  },
  launch: {
    depth: 'focused',
    research: 'standard',
    positioning: 'core',
    messaging: 'core',
    architecture: 'extension',
    purpose: 'none',
    audience: 'core',
    workshop: 'kickoff',
  },
  investor: {
    depth: 'focused',
    research: 'light',
    positioning: 'core',
    messaging: 'core',
    architecture: 'none',
    purpose: 'none',
    audience: 'overview',
    workshop: 'none',
    addOns: ['pitch', 'presentation'],
  },
  alignment: {
    depth: 'foundation',
    research: 'light',
    positioning: 'core',
    messaging: 'core',
    architecture: 'none',
    purpose: 'full',
    audience: 'included',
    workshop: 'full-day',
    addOns: ['internal-launch'],
  },
  full: {
    depth: 'comprehensive',
    research: 'deep',
    positioning: 'full',
    messaging: 'full',
    architecture: 'full',
    purpose: 'full',
    audience: 'full',
    workshop: 'series',
    addOns: ['competitive', 'story'],
  },
  other: {
    depth: 'foundation',
    research: 'light',
    positioning: 'core',
    messaging: 'core',
    architecture: 'none',
    purpose: 'none',
    audience: 'overview',
    workshop: 'half-day',
  },
};
