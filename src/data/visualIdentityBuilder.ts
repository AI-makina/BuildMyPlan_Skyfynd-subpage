// Visual Identity Builder Data
// Specification: /prompts/Branding/Visual Identity Design/VisualIdentityBuilder_Specification.md

export interface VisualIdentityGoalOption {
  id: string;
  label: string;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface LogoOption {
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

export interface ColorOption {
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

export interface TypographyOption {
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

export interface PhotographyOption {
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

export interface IconOption {
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

export interface PatternOption {
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

export interface IllustrationOption {
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

export interface MotionOption {
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

export interface GuidelinesOption {
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

// Step 1: Visual Identity Goal Options
export const visualIdentityGoalOptions: VisualIdentityGoalOption[] = [
  {
    id: 'new-brand',
    label: 'New Brand',
    tooltip: {
      whatItIs: 'Creating visual identity from scratch for a new business or venture.',
      idealIf: "You're launching something new and need complete visual foundations.",
      examples: 'Startups, new products, spin-offs',
    },
  },
  {
    id: 'rebrand',
    label: 'Full Rebrand',
    tooltip: {
      whatItIs: 'Complete visual overhaul replacing existing identity.',
      idealIf: 'Your current identity no longer serves you and needs replacement.',
      examples: 'Pivots, outdated brands, M&A, major repositioning',
    },
  },
  {
    id: 'refresh',
    label: 'Brand Refresh',
    tooltip: {
      whatItIs: 'Evolving and modernizing existing visual identity.',
      idealIf: 'Your brand needs updating but core equity should be preserved.',
      examples: 'Modernization, subtle evolution, cleaning up inconsistencies',
    },
  },
  {
    id: 'extension',
    label: 'Brand Extension',
    tooltip: {
      whatItIs: 'Extending visual identity to new products, services, or sub-brands.',
      idealIf: "You're launching something new under an existing brand umbrella.",
      examples: 'Product lines, service expansions, sub-brands',
    },
  },
  {
    id: 'expansion',
    label: 'Visual System Expansion',
    tooltip: {
      whatItIs: 'Adding new elements to an existing visual identity system.',
      idealIf: 'You have core identity but need additional assets and applications.',
      examples: 'Icon systems, illustration styles, motion guidelines',
    },
  },
  {
    id: 'standards',
    label: 'Consistency & Standards',
    tooltip: {
      whatItIs: 'Documenting and standardizing existing visual identity.',
      idealIf: 'You have identity elements but lack clear guidelines.',
      examples: 'Growing teams, franchise, licensing',
    },
  },
  {
    id: 'campaign',
    label: 'Campaign / Temporary',
    tooltip: {
      whatItIs: 'Visual identity for a specific campaign, event, or limited time.',
      idealIf: 'You need distinct visuals for a specific initiative.',
      examples: 'Product launches, events, seasonal campaigns',
    },
  },
  {
    id: 'personal',
    label: 'Personal Brand',
    tooltip: {
      whatItIs: 'Visual identity for an individual or personal brand.',
      idealIf: "You're building your personal professional presence.",
      examples: 'Consultants, speakers, creators, executives',
    },
  },
  {
    id: 'full-system',
    label: 'Full Visual Identity System',
    tooltip: {
      whatItIs: 'Comprehensive visual identity covering all aspects and applications.',
      idealIf: 'You need end-to-end visual identity development.',
      examples: 'Complete brand builds, enterprise identity',
    },
  },
  {
    id: 'other',
    label: 'Other',
    tooltip: {
      whatItIs: 'Something unique or a combination of needs.',
      idealIf: "Your situation doesn't fit standard categories — we'll tailor recommendations.",
      examples: 'Custom projects, unique requirements',
    },
  },
];

// Step 2: Logo Design Options
export const logoOptions: LogoOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'No logo work required.',
      idealIf: "You have a logo you're keeping.",
      examples: 'Established brands, refresh projects',
    },
  },
  {
    id: 'cleanup',
    label: 'Logo Cleanup',
    price: 400,
    tooltip: {
      whatItIs: 'Technical cleanup and file preparation of existing logo.',
      idealIf: 'Your logo is fine but files are messy or incomplete.',
      examples: 'Vector recreation, file organization',
    },
  },
  {
    id: 'refinement',
    label: 'Logo Refinement',
    price: 800,
    tooltip: {
      whatItIs: 'Subtle improvements to existing logo without changing core identity.',
      idealIf: 'Your logo needs polish but not replacement.',
      examples: 'Proportion fixes, modernization tweaks',
    },
  },
  {
    id: 'lockup',
    label: 'Logo Lockup / Variation',
    price: 600,
    tooltip: {
      whatItIs: 'New lockups or variations of existing logo.',
      idealIf: 'You need your logo adapted for new contexts.',
      examples: 'Sub-brand lockups, co-branded versions, tagline additions',
    },
  },
  {
    id: 'core',
    label: 'Core Logo',
    price: 1500,
    tooltip: {
      whatItIs: 'Primary logo design with essential variations.',
      idealIf: 'You need a solid logo without extensive exploration.',
      examples: 'Startups, small businesses, personal brands',
    },
  },
  {
    id: 'full',
    label: 'Full Logo System',
    price: 3000,
    tooltip: {
      whatItIs: 'Comprehensive logo with full variation system and responsive versions.',
      idealIf: 'You need complete logo flexibility across all applications.',
      examples: 'Most businesses, rebrands',
    },
  },
  {
    id: 'premium',
    label: 'Premium Logo System',
    price: 5000,
    startsAt: true,
    tooltip: {
      whatItIs: 'Extensive logo development with multiple concepts, iterations, and comprehensive system.',
      idealIf: 'Logo is critical and you want thorough exploration.',
      examples: 'Funded startups, enterprise, consumer brands',
    },
  },
];

// Step 3: Color Palette Options
export const colorOptions: ColorOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'No color work required.',
      idealIf: "You have established colors you're keeping.",
      examples: 'Refresh projects, extensions',
    },
  },
  {
    id: 'documentation',
    label: 'Color Documentation',
    price: 200,
    tooltip: {
      whatItIs: 'Documenting and organizing existing colors with specifications.',
      idealIf: 'You have colors but need proper documentation.',
      examples: 'Hex, RGB, CMYK, Pantone specs',
    },
  },
  {
    id: 'refresh',
    label: 'Color Refresh',
    price: 400,
    tooltip: {
      whatItIs: 'Refining and optimizing existing color palette.',
      idealIf: 'Your colors need adjustment but not complete replacement.',
      examples: 'Accessibility fixes, digital optimization',
    },
  },
  {
    id: 'extension',
    label: 'Color Palette Extension',
    price: 350,
    tooltip: {
      whatItIs: 'Extending existing palette with complementary colors.',
      idealIf: 'You need more colors within your existing system.',
      examples: 'UI colors, accent colors, gradients',
    },
  },
  {
    id: 'core',
    label: 'Core Color Palette',
    price: 500,
    tooltip: {
      whatItIs: 'Primary and secondary colors with basic usage guidance.',
      idealIf: 'You need essential colors defined.',
      examples: 'Startups, simple brands',
    },
  },
  {
    id: 'full',
    label: 'Full Color System',
    price: 900,
    tooltip: {
      whatItIs: 'Comprehensive color palette with tints, shades, and detailed usage rules.',
      idealIf: 'You need complete color flexibility and guidance.',
      examples: 'Most businesses, digital-heavy brands',
    },
  },
  {
    id: 'extended',
    label: 'Extended Color System',
    price: 1400,
    startsAt: true,
    tooltip: {
      whatItIs: 'Extensive color architecture including semantic colors, gradients, and accessibility specifications.',
      idealIf: 'You have complex color needs across many applications.',
      examples: 'Product companies, enterprise, multi-brand',
    },
  },
];

// Step 4: Typography Options
export const typographyOptions: TypographyOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'No typography work required.',
      idealIf: "You have established typography you're keeping.",
      examples: 'Refresh projects, minor updates',
    },
  },
  {
    id: 'documentation',
    label: 'Typography Documentation',
    price: 200,
    tooltip: {
      whatItIs: 'Documenting existing type choices with specifications.',
      idealIf: 'You have fonts but need proper documentation.',
      examples: 'Font stacks, sizing, weights',
    },
  },
  {
    id: 'review',
    label: 'Typography Review',
    price: 300,
    tooltip: {
      whatItIs: 'Assessment and recommendations for existing typography.',
      idealIf: 'You want expert input on your current type choices.',
      examples: 'Pairing evaluation, hierarchy review',
    },
  },
  {
    id: 'simple',
    label: 'Simple Typography',
    price: 400,
    tooltip: {
      whatItIs: 'Primary typeface selection with basic hierarchy.',
      idealIf: 'You need straightforward type decisions.',
      examples: 'Single font family, simple applications',
    },
  },
  {
    id: 'standard',
    label: 'Standard Typography',
    price: 700,
    tooltip: {
      whatItIs: 'Primary and secondary typefaces with heading/body hierarchy.',
      idealIf: 'You need solid typography system for most applications.',
      examples: 'Most businesses, web + print',
    },
  },
  {
    id: 'full',
    label: 'Full Typography System',
    price: 1200,
    tooltip: {
      whatItIs: 'Comprehensive type system with multiple faces, detailed hierarchy, and responsive sizing.',
      idealIf: 'You have complex typographic needs.',
      examples: 'Publications, content-heavy brands, products',
    },
  },
  {
    id: 'custom',
    label: 'Custom Typography',
    price: 3000,
    startsAt: true,
    tooltip: {
      whatItIs: 'Custom typeface development or extensive type customization.',
      idealIf: 'You want ownable, distinctive typography.',
      examples: 'Major brands, unique differentiation needs',
    },
  },
];

// Step 5: Photography & Imagery Direction Options
export const photographyOptions: PhotographyOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'No photography direction required.',
      idealIf: "You have established imagery or don't need photography guidance.",
      examples: 'Text-heavy brands, B2B',
    },
  },
  {
    id: 'basic',
    label: 'Basic Direction',
    price: 400,
    tooltip: {
      whatItIs: 'High-level photography style and mood guidance.',
      idealIf: 'You need basic direction for sourcing or shooting.',
      examples: "Mood references, do's and don'ts",
    },
  },
  {
    id: 'direction',
    label: 'Photography Direction',
    price: 800,
    tooltip: {
      whatItIs: 'Detailed photography style guide with examples and specifications.',
      idealIf: 'You need clear guidance for consistent imagery.',
      examples: 'Style guides, shot lists, treatment specs',
    },
  },
  {
    id: 'full',
    label: 'Full Photography System',
    price: 1500,
    tooltip: {
      whatItIs: 'Comprehensive imagery guidelines including subjects, composition, editing, and sourcing strategy.',
      idealIf: 'Photography is central to your brand expression.',
      examples: 'Lifestyle brands, e-commerce, hospitality',
    },
  },
  {
    id: 'art-direction',
    label: 'Photography + Art Direction',
    price: 2500,
    startsAt: true,
    tooltip: {
      whatItIs: 'Complete visual content direction including photography, videography, and creative direction.',
      idealIf: 'You need hands-on creative direction for shoots.',
      examples: 'Campaign launches, brand shoots',
    },
  },
];

// Step 6: Iconography Options
export const iconOptions: IconOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'No icon work required.',
      idealIf: "You'll use existing icons or don't need them.",
      examples: 'Simple brands, text-focused',
    },
  },
  {
    id: 'guide',
    label: 'Icon Style Guide',
    price: 300,
    tooltip: {
      whatItIs: 'Guidelines for selecting and using icons consistently.',
      idealIf: "You'll source icons but need style direction.",
      examples: 'Icon library recommendations, usage rules',
    },
  },
  {
    id: 'basic',
    label: 'Basic Icon Set (10-15)',
    price: 600,
    tooltip: {
      whatItIs: 'Essential custom icons for core needs.',
      idealIf: 'You need a handful of key icons.',
      examples: 'Navigation, features, social',
    },
  },
  {
    id: 'standard',
    label: 'Standard Icon Set (20-30)',
    price: 1100,
    tooltip: {
      whatItIs: 'Comprehensive custom icon set covering main use cases.',
      idealIf: 'You need icons across website and marketing.',
      examples: 'Service icons, feature icons, UI icons',
    },
  },
  {
    id: 'full',
    label: 'Full Icon System (40-60)',
    price: 2000,
    tooltip: {
      whatItIs: 'Extensive custom icon library with detailed guidelines.',
      idealIf: 'Icons are a significant part of your visual language.',
      examples: 'Apps, products, complex websites',
    },
  },
  {
    id: 'extended',
    label: 'Extended Icon System (80+)',
    price: 3500,
    startsAt: true,
    tooltip: {
      whatItIs: 'Complete icon ecosystem with multiple styles and ongoing expansion capability.',
      idealIf: 'You need extensive iconography across many applications.',
      examples: 'Enterprise, product suites, platforms',
    },
  },
];

// Step 7: Patterns & Textures Options
export const patternOptions: PatternOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'No patterns or textures required.',
      idealIf: "Your brand doesn't need these elements.",
      examples: 'Minimal brands, clean aesthetics',
    },
  },
  {
    id: 'basic',
    label: 'Basic Patterns (2-3)',
    price: 400,
    tooltip: {
      whatItIs: 'A few versatile patterns for brand applications.',
      idealIf: 'You want subtle texture options.',
      examples: 'Background patterns, accent elements',
    },
  },
  {
    id: 'standard',
    label: 'Standard Patterns (4-6)',
    price: 750,
    tooltip: {
      whatItIs: 'Varied pattern set with different scales and applications.',
      idealIf: 'You need patterns across multiple touchpoints.',
      examples: 'Packaging, environmental, digital backgrounds',
    },
  },
  {
    id: 'full',
    label: 'Full Pattern System (8-12)',
    price: 1300,
    tooltip: {
      whatItIs: 'Comprehensive pattern library with usage guidelines.',
      idealIf: 'Patterns are a key part of your visual identity.',
      examples: 'Retail, hospitality, fashion',
    },
  },
  {
    id: 'custom',
    label: 'Custom Pattern System',
    price: 2200,
    startsAt: true,
    tooltip: {
      whatItIs: 'Bespoke pattern development with unique, ownable designs.',
      idealIf: 'You want distinctive, signature patterns.',
      examples: 'Luxury brands, heritage brands',
    },
  },
];

// Step 8: Illustration Style Options
export const illustrationOptions: IllustrationOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'No illustration work required.',
      idealIf: "Your brand doesn't use illustrations.",
      examples: 'Photo-driven brands, corporate',
    },
  },
  {
    id: 'direction',
    label: 'Illustration Direction',
    price: 500,
    tooltip: {
      whatItIs: 'Style guide for sourcing or commissioning illustrations.',
      idealIf: "You'll work with illustrators but need direction.",
      examples: 'Style references, specifications',
    },
  },
  {
    id: 'spot',
    label: 'Spot Illustrations (5-8)',
    price: 900,
    tooltip: {
      whatItIs: 'Small accent illustrations for key brand moments.',
      idealIf: 'You want illustration touches without full system.',
      examples: 'Empty states, accents, heroes',
    },
  },
  {
    id: 'standard',
    label: 'Standard Illustration Set (10-15)',
    price: 1600,
    tooltip: {
      whatItIs: 'Core illustration set establishing brand illustration style.',
      idealIf: 'Illustrations are part of your visual language.',
      examples: 'Website illustrations, marketing materials',
    },
  },
  {
    id: 'full',
    label: 'Full Illustration System (20-30)',
    price: 3000,
    tooltip: {
      whatItIs: 'Comprehensive illustration library with style documentation.',
      idealIf: 'Illustration is central to your brand expression.',
      examples: 'Tech brands, playful brands, storytelling brands',
    },
  },
  {
    id: 'custom',
    label: 'Custom Illustration Style',
    price: 5000,
    startsAt: true,
    tooltip: {
      whatItIs: 'Bespoke illustration style development with extensive library.',
      idealIf: 'You want truly ownable illustration aesthetic.',
      examples: 'Major campaigns, distinctive brands',
    },
  },
];

// Step 9: Motion & Animation Guidelines Options
export const motionOptions: MotionOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'No motion guidelines required.',
      idealIf: "You don't need animation guidance.",
      examples: 'Print-focused brands, simple websites',
    },
  },
  {
    id: 'basic',
    label: 'Basic Motion Principles',
    price: 400,
    tooltip: {
      whatItIs: 'High-level motion principles and recommendations.',
      idealIf: 'You want basic animation direction.',
      examples: 'Timing, easing, general feel',
    },
  },
  {
    id: 'guidelines',
    label: 'Motion Guidelines',
    price: 900,
    tooltip: {
      whatItIs: 'Documented motion style including principles, timing, and examples.',
      idealIf: 'You need consistent motion across touchpoints.',
      examples: 'UI transitions, hover states, loading',
    },
  },
  {
    id: 'full',
    label: 'Full Motion System',
    price: 1800,
    tooltip: {
      whatItIs: 'Comprehensive motion design language with detailed specifications and examples.',
      idealIf: 'Motion is integral to your brand experience.',
      examples: 'Apps, products, digital-first brands',
    },
  },
  {
    id: 'assets',
    label: 'Motion System + Assets',
    price: 3000,
    startsAt: true,
    tooltip: {
      whatItIs: 'Complete motion system plus animated assets and templates.',
      idealIf: 'You need ready-to-use motion assets.',
      examples: 'Social, presentations, video intros',
    },
  },
];

// Step 10: Brand Guidelines Options
export const guidelinesOptions: GuidelinesOption[] = [
  {
    id: 'none',
    label: 'No Guidelines',
    price: 0,
    tooltip: {
      whatItIs: 'Assets only, no documentation.',
      idealIf: "You'll document internally or don't need guidelines.",
      examples: 'Simple projects, in-house teams',
    },
  },
  {
    id: 'quick',
    label: 'Quick Reference (1-pager)',
    price: 300,
    tooltip: {
      whatItIs: 'Single-page brand cheat sheet with essentials.',
      idealIf: 'You need minimal documentation for small teams.',
      examples: 'Logo usage, colors, fonts at a glance',
    },
  },
  {
    id: 'light',
    label: 'Light Guidelines',
    price: 600,
    tooltip: {
      whatItIs: 'Basic guidelines covering core identity elements.',
      idealIf: 'You need clear documentation without extensive detail.',
      examples: 'Startups, small businesses',
    },
  },
  {
    id: 'standard',
    label: 'Standard Guidelines',
    price: 1200,
    tooltip: {
      whatItIs: 'Comprehensive guidelines for consistent brand application.',
      idealIf: 'You need solid documentation for teams and partners.',
      examples: 'Most businesses, growing teams',
    },
  },
  {
    id: 'comprehensive',
    label: 'Comprehensive Guidelines',
    price: 2200,
    tooltip: {
      whatItIs: 'Detailed brand book covering all identity elements with extensive examples.',
      idealIf: 'You need thorough documentation for complex organizations.',
      examples: 'Enterprise, franchises, agencies',
    },
  },
  {
    id: 'interactive',
    label: 'Interactive / Digital Guidelines',
    price: 3500,
    startsAt: true,
    tooltip: {
      whatItIs: 'Living digital brand portal with searchable guidelines and downloadable assets.',
      idealIf: 'You need accessible, updateable brand resource.',
      examples: 'Large organizations, distributed teams',
    },
  },
];

// Step 11: Add-on Services
export const addOnServices: AddOnService[] = [
  {
    id: 'collateral',
    label: 'Brand Collateral Templates',
    price: 800,
    tooltip: {
      whatItIs: 'Designed templates for business cards, letterhead, email signatures, etc.',
      idealIf: 'You need ready-to-use business essentials.',
      examples: 'Stationery suite, email templates',
    },
  },
  {
    id: 'social',
    label: 'Social Media Templates',
    price: 600,
    tooltip: {
      whatItIs: 'Branded templates for social media posts and profiles.',
      idealIf: 'You need consistent social presence.',
      examples: 'Post templates, cover images, story templates',
    },
  },
  {
    id: 'presentation',
    label: 'Presentation Template',
    price: 700,
    tooltip: {
      whatItIs: 'Branded PowerPoint/Keynote/Google Slides template.',
      idealIf: 'You need professional presentation capability.',
      examples: 'Sales decks, investor decks, internal presentations',
    },
  },
  {
    id: 'signage',
    label: 'Signage & Environmental',
    price: 900,
    tooltip: {
      whatItIs: 'Guidance and designs for physical brand applications.',
      idealIf: 'You have physical locations or events.',
      examples: 'Office signage, trade shows, retail',
    },
  },
  {
    id: 'packaging',
    label: 'Packaging Direction',
    price: 1200,
    tooltip: {
      whatItIs: 'Packaging design direction and structure guidelines.',
      idealIf: 'You have products that need packaging.',
      examples: 'Product packaging, shipping materials',
    },
  },
  {
    id: 'vehicle',
    label: 'Vehicle / Fleet Graphics',
    price: 800,
    tooltip: {
      whatItIs: 'Brand application for vehicles.',
      idealIf: 'You have company vehicles.',
      examples: 'Car wraps, truck graphics, fleet branding',
    },
  },
  {
    id: 'merchandise',
    label: 'Merchandise Guidelines',
    price: 500,
    tooltip: {
      whatItIs: 'Guidelines for branded merchandise and swag.',
      idealIf: 'You produce branded items.',
      examples: 'T-shirts, mugs, promotional items',
    },
  },
  {
    id: 'asset-library',
    label: 'Brand Asset Library',
    price: 400,
    tooltip: {
      whatItIs: 'Organized, packaged brand assets ready for distribution.',
      idealIf: 'You need clean handoff to team or vendors.',
      examples: 'Asset packages, file organization',
    },
  },
  {
    id: 'launch',
    label: 'Brand Launch Support',
    price: 600,
    tooltip: {
      whatItIs: 'Guidance and materials for internal brand rollout.',
      idealIf: "You're launching new identity to your organization.",
      examples: 'Launch presentations, rollout planning',
    },
  },
];

// Step 12: Timeline Options
export const timelineOptions: TimelineOption[] = [
  {
    id: 'flexible',
    label: 'Flexible (8-12 weeks)',
    multiplier: 1.0,
    tooltip: {
      whatItIs: 'Standard timeline allowing thorough development and iteration.',
      idealIf: 'You can plan ahead and want best quality.',
      examples: 'Most projects',
    },
  },
  {
    id: 'standard',
    label: 'Standard (6-8 weeks)',
    multiplier: 1.1,
    tooltip: {
      whatItIs: 'Slightly accelerated timeline with focused sprints.',
      idealIf: 'You have a target date but some flexibility.',
      examples: 'Planned launches, rebrands',
    },
  },
  {
    id: 'accelerated',
    label: 'Accelerated (4-6 weeks)',
    multiplier: 1.25,
    tooltip: {
      whatItIs: 'Fast-tracked delivery requiring prioritized scheduling.',
      idealIf: 'You have a firm deadline approaching.',
      examples: 'Funding announcements, market opportunities',
    },
  },
  {
    id: 'rush',
    label: 'Rush (Under 4 weeks)',
    multiplier: 1.5,
    tooltip: {
      whatItIs: 'Expedited delivery with dedicated resources.',
      idealIf: 'You have an urgent need requiring immediate attention.',
      examples: 'Crisis response, unexpected opportunities',
    },
  },
];

// Recommendation Presets based on Step 1 selection
export const recommendationPresets: Record<string, {
  logo?: string;
  colors?: string;
  typography?: string;
  photography?: string;
  icons?: string;
  patterns?: string;
  illustration?: string;
  motion?: string;
  guidelines?: string;
  addOns?: string[];
}> = {
  'new-brand': {
    logo: 'full',
    colors: 'full',
    typography: 'standard',
    photography: 'direction',
    icons: 'basic',
    patterns: 'none',
    illustration: 'none',
    motion: 'none',
    guidelines: 'standard',
  },
  'rebrand': {
    logo: 'full',
    colors: 'full',
    typography: 'standard',
    photography: 'direction',
    icons: 'standard',
    patterns: 'basic',
    illustration: 'none',
    motion: 'basic',
    guidelines: 'comprehensive',
    addOns: ['collateral', 'social', 'presentation'],
  },
  'refresh': {
    logo: 'refinement',
    colors: 'refresh',
    typography: 'review',
    photography: 'none',
    icons: 'none',
    patterns: 'none',
    illustration: 'none',
    motion: 'none',
    guidelines: 'standard',
  },
  'extension': {
    logo: 'lockup',
    colors: 'extension',
    typography: 'review',
    photography: 'none',
    icons: 'guide',
    patterns: 'none',
    illustration: 'none',
    motion: 'none',
    guidelines: 'light',
  },
  'expansion': {
    logo: 'none',
    colors: 'none',
    typography: 'none',
    photography: 'none',
    icons: 'full',
    patterns: 'standard',
    illustration: 'standard',
    motion: 'guidelines',
    guidelines: 'light',
  },
  'standards': {
    logo: 'cleanup',
    colors: 'documentation',
    typography: 'documentation',
    photography: 'none',
    icons: 'none',
    patterns: 'none',
    illustration: 'none',
    motion: 'none',
    guidelines: 'comprehensive',
    addOns: ['asset-library'],
  },
  'campaign': {
    logo: 'lockup',
    colors: 'extension',
    typography: 'simple',
    photography: 'direction',
    icons: 'none',
    patterns: 'basic',
    illustration: 'none',
    motion: 'none',
    guidelines: 'quick',
  },
  'personal': {
    logo: 'core',
    colors: 'core',
    typography: 'simple',
    photography: 'basic',
    icons: 'none',
    patterns: 'none',
    illustration: 'none',
    motion: 'none',
    guidelines: 'light',
    addOns: ['social'],
  },
  'full-system': {
    logo: 'full',
    colors: 'full',
    typography: 'full',
    photography: 'full',
    icons: 'full',
    patterns: 'standard',
    illustration: 'standard',
    motion: 'guidelines',
    guidelines: 'comprehensive',
    addOns: ['collateral', 'social', 'presentation', 'asset-library'],
  },
  'other': {
    logo: 'core',
    colors: 'core',
    typography: 'simple',
    photography: 'none',
    icons: 'none',
    patterns: 'none',
    illustration: 'none',
    motion: 'none',
    guidelines: 'light',
  },
};
