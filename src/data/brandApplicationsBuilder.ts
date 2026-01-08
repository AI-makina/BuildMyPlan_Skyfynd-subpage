// Brand Applications Builder Data
// Specification: /prompts/Branding/Brand Applications/BrandApplicationsBuilder_Specification.md

export interface ApplicationGoalOption {
  id: string;
  label: string;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface StationeryOption {
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

export interface DigitalOption {
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

export interface SocialOption {
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

export interface PresentationOption {
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

export interface MarketingOption {
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

export interface SignageOption {
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

export interface PackagingOption {
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

export interface EventsOption {
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

// Step 1: Application Goal Options
export const applicationGoalOptions: ApplicationGoalOption[] = [
  {
    id: 'launch',
    label: 'New Brand Launch',
    tooltip: {
      whatItIs: 'Creating all essential brand touchpoints for a new brand.',
      idealIf: "You've completed visual identity and need to bring it to life.",
      examples: 'Startups, new businesses, product launches',
    },
  },
  {
    id: 'rebrand',
    label: 'Rebrand Rollout',
    tooltip: {
      whatItIs: 'Updating all brand materials following a rebrand.',
      idealIf: "You've refreshed your identity and need materials updated.",
      examples: 'Post-rebrand implementation, visual refresh rollout',
    },
  },
  {
    id: 'essentials',
    label: 'Business Essentials',
    tooltip: {
      whatItIs: 'Core business materials like cards, letterhead, and email signatures.',
      idealIf: 'You need professional basics for day-to-day business.',
      examples: 'New hires, office setup, client-facing materials',
    },
  },
  {
    id: 'digital',
    label: 'Digital Presence',
    tooltip: {
      whatItIs: 'Digital assets for web, social, and online presence.',
      idealIf: 'You need branded digital materials across platforms.',
      examples: 'Social media, email, digital ads, web assets',
    },
  },
  {
    id: 'marketing',
    label: 'Marketing Collateral',
    tooltip: {
      whatItIs: 'Sales and marketing materials to support business development.',
      idealIf: 'You need materials to support sales and marketing efforts.',
      examples: 'Brochures, sell sheets, presentations, proposals',
    },
  },
  {
    id: 'environment',
    label: 'Physical Environment',
    tooltip: {
      whatItIs: 'Signage, environmental graphics, and physical brand presence.',
      idealIf: 'You have offices, retail, or event spaces needing branding.',
      examples: 'Office signage, trade shows, retail environments',
    },
  },
  {
    id: 'packaging',
    label: 'Product & Packaging',
    tooltip: {
      whatItIs: 'Product packaging, labels, and product-related materials.',
      idealIf: 'You sell physical products needing branded packaging.',
      examples: 'Product boxes, labels, inserts, shipping materials',
    },
  },
  {
    id: 'events',
    label: 'Events & Experiential',
    tooltip: {
      whatItIs: 'Event materials, booth designs, and experiential brand touchpoints.',
      idealIf: 'You attend or host events requiring branded presence.',
      examples: 'Trade shows, conferences, pop-ups, activations',
    },
  },
  {
    id: 'complete',
    label: 'Complete Application Suite',
    tooltip: {
      whatItIs: 'Comprehensive brand applications across all touchpoints.',
      idealIf: 'You need full implementation of brand across everything.',
      examples: 'Complete brand rollouts, enterprise implementation',
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

// Step 2: Stationery & Business Essentials
export const stationeryOptions: StationeryOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'No stationery required.',
      idealIf: 'You already have stationery or operate entirely digitally.',
      examples: 'Digital-only businesses',
    },
  },
  {
    id: 'basic',
    label: 'Basic Package',
    price: 400,
    tooltip: {
      whatItIs: 'Business card design only.',
      idealIf: 'You just need cards to hand out.',
      examples: 'Freelancers, consultants, minimal needs',
    },
  },
  {
    id: 'standard',
    label: 'Standard Package',
    price: 800,
    tooltip: {
      whatItIs: 'Business cards, letterhead, and email signature.',
      idealIf: 'You need core professional materials.',
      examples: 'Most businesses, client-facing roles',
    },
  },
  {
    id: 'comprehensive',
    label: 'Comprehensive Package',
    price: 1400,
    tooltip: {
      whatItIs: 'Cards, letterhead, envelopes, email signature, and additional items.',
      idealIf: 'You need full stationery suite.',
      examples: 'Professional services, established businesses',
    },
  },
  {
    id: 'premium',
    label: 'Premium Package',
    price: 2200,
    startsAt: true,
    tooltip: {
      whatItIs: 'Complete stationery system with multiple card types, folders, notecards, and specialty items.',
      idealIf: 'You need extensive, premium business materials.',
      examples: 'Law firms, agencies, luxury brands',
    },
  },
];

// Step 3: Digital Assets & Templates
export const digitalOptions: DigitalOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'No digital assets required.',
      idealIf: "You have digital materials covered or don't need them.",
      examples: 'Existing digital presence',
    },
  },
  {
    id: 'basic',
    label: 'Basic Package',
    price: 350,
    tooltip: {
      whatItIs: 'Email signature and basic document templates.',
      idealIf: 'You need minimal digital presence.',
      examples: 'Email-focused businesses',
    },
  },
  {
    id: 'standard',
    label: 'Standard Package',
    price: 700,
    tooltip: {
      whatItIs: 'Email templates, document templates, and web graphics.',
      idealIf: 'You need core digital assets.',
      examples: 'Most businesses',
    },
  },
  {
    id: 'comprehensive',
    label: 'Comprehensive Package',
    price: 1200,
    tooltip: {
      whatItIs: 'Full digital asset suite including newsletters, forms, and ad templates.',
      idealIf: 'You have extensive digital touchpoints.',
      examples: 'Marketing-active businesses',
    },
  },
  {
    id: 'premium',
    label: 'Premium Package',
    price: 2000,
    startsAt: true,
    tooltip: {
      whatItIs: 'Complete digital system with all templates, multiple formats, and interactive elements.',
      idealIf: 'You need maximum digital flexibility.',
      examples: 'Enterprise, agencies, digital-first brands',
    },
  },
];

// Step 4: Social Media Assets
export const socialOptions: SocialOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'No social media assets required.',
      idealIf: "You don't have social presence or have it covered.",
      examples: 'Existing social presence',
    },
  },
  {
    id: 'basic',
    label: 'Basic Package',
    price: 300,
    tooltip: {
      whatItIs: 'Profile images and cover photos for main platforms.',
      idealIf: 'You need basic social presence setup.',
      examples: 'LinkedIn + one other platform',
    },
  },
  {
    id: 'standard',
    label: 'Standard Package',
    price: 600,
    tooltip: {
      whatItIs: 'Profiles, covers, and post templates for multiple platforms.',
      idealIf: 'You need consistent social presence.',
      examples: 'Most businesses, 2-3 platforms',
    },
  },
  {
    id: 'comprehensive',
    label: 'Comprehensive Package',
    price: 1000,
    tooltip: {
      whatItIs: 'Full social kit with templates for posts, stories, highlights, and ads.',
      idealIf: 'Social is important to your marketing.',
      examples: 'B2C brands, active social presence',
    },
  },
  {
    id: 'premium',
    label: 'Premium Package',
    price: 1600,
    startsAt: true,
    tooltip: {
      whatItIs: 'Complete social system with extensive templates, animated assets, and platform-specific optimization.',
      idealIf: 'Social is a primary channel.',
      examples: 'Consumer brands, influencer-style presence',
    },
  },
];

// Step 5: Presentation Templates
export const presentationOptions: PresentationOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'No presentation templates required.',
      idealIf: "You don't give presentations or have templates covered.",
      examples: 'Existing templates',
    },
  },
  {
    id: 'basic',
    label: 'Basic Template',
    price: 400,
    tooltip: {
      whatItIs: 'Single presentation template with essential slides.',
      idealIf: 'You need basic branded presentations.',
      examples: 'Internal meetings, simple pitches',
    },
  },
  {
    id: 'standard',
    label: 'Standard Package',
    price: 800,
    tooltip: {
      whatItIs: 'Primary template with 20+ slide types plus charts/graphs.',
      idealIf: 'You give regular presentations.',
      examples: 'Sales meetings, client presentations',
    },
  },
  {
    id: 'comprehensive',
    label: 'Comprehensive Package',
    price: 1400,
    tooltip: {
      whatItIs: 'Multiple templates for different purposes (sales, internal, investor).',
      idealIf: 'You have varied presentation needs.',
      examples: 'Sales teams, startups pitching',
    },
  },
  {
    id: 'premium',
    label: 'Premium Package',
    price: 2200,
    startsAt: true,
    tooltip: {
      whatItIs: 'Complete presentation system with multiple templates, custom graphics, and animation.',
      idealIf: 'Presentations are critical to your business.',
      examples: 'Agencies, consultants, enterprise sales',
    },
  },
];

// Step 6: Marketing Collateral
export const marketingOptions: MarketingOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'No marketing collateral required.',
      idealIf: "You don't need printed or PDF marketing materials.",
      examples: 'Digital-only marketing',
    },
  },
  {
    id: 'basic',
    label: 'Basic Package',
    price: 500,
    tooltip: {
      whatItIs: 'One-pager/sell sheet design.',
      idealIf: 'You need basic leave-behind materials.',
      examples: 'Simple sales tool, service overview',
    },
  },
  {
    id: 'standard',
    label: 'Standard Package',
    price: 1000,
    tooltip: {
      whatItIs: 'Sell sheet plus brochure or capability deck.',
      idealIf: 'You need core sales materials.',
      examples: 'B2B sales, service businesses',
    },
  },
  {
    id: 'comprehensive',
    label: 'Comprehensive Package',
    price: 1800,
    tooltip: {
      whatItIs: 'Multiple collateral pieces including brochures, case studies, and proposals.',
      idealIf: 'You have active sales team needing materials.',
      examples: 'Sales-driven businesses',
    },
  },
  {
    id: 'premium',
    label: 'Premium Package',
    price: 3000,
    startsAt: true,
    tooltip: {
      whatItIs: 'Complete marketing toolkit with extensive materials and templates.',
      idealIf: 'You need comprehensive sales and marketing support.',
      examples: 'Enterprise sales, multi-product companies',
    },
  },
];

// Step 7: Signage & Environmental
export const signageOptions: SignageOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'No signage or environmental graphics required.',
      idealIf: "You don't have physical spaces needing branding.",
      examples: 'Remote/virtual businesses',
    },
  },
  {
    id: 'basic',
    label: 'Basic Package',
    price: 600,
    tooltip: {
      whatItIs: 'Primary signage design (exterior or interior main sign).',
      idealIf: 'You need one key sign designed.',
      examples: 'Door sign, reception sign',
    },
  },
  {
    id: 'standard',
    label: 'Standard Package',
    price: 1200,
    tooltip: {
      whatItIs: 'Core signage suite including exterior, reception, and directional.',
      idealIf: 'You have an office or location needing branded signage.',
      examples: 'Office branding, small retail',
    },
  },
  {
    id: 'comprehensive',
    label: 'Comprehensive Package',
    price: 2400,
    tooltip: {
      whatItIs: 'Full environmental graphics including walls, windows, and wayfinding.',
      idealIf: 'You want cohesive branded environment.',
      examples: 'Larger offices, retail spaces',
    },
  },
  {
    id: 'premium',
    label: 'Premium Package',
    price: 4500,
    startsAt: true,
    tooltip: {
      whatItIs: 'Complete environmental branding with custom installations and experiential elements.',
      idealIf: 'Your space is a brand experience.',
      examples: 'Flagship locations, showrooms, headquarters',
    },
  },
];

// Step 8: Packaging & Product
export const packagingOptions: PackagingOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'No packaging required.',
      idealIf: "You don't sell physical products or have packaging covered.",
      examples: 'Service businesses',
    },
  },
  {
    id: 'basic',
    label: 'Basic Package',
    price: 700,
    tooltip: {
      whatItIs: 'Single product packaging design or label design.',
      idealIf: 'You have one product or simple packaging needs.',
      examples: 'Single product, simple box or label',
    },
  },
  {
    id: 'standard',
    label: 'Standard Package',
    price: 1400,
    tooltip: {
      whatItIs: 'Primary packaging plus secondary elements (box, insert, label).',
      idealIf: 'You need complete product packaging.',
      examples: 'E-commerce, consumer products',
    },
  },
  {
    id: 'comprehensive',
    label: 'Comprehensive Package',
    price: 2600,
    tooltip: {
      whatItIs: 'Multiple SKU packaging with system and shipping materials.',
      idealIf: 'You have a product line needing cohesive packaging.',
      examples: 'Product families, retail brands',
    },
  },
  {
    id: 'premium',
    label: 'Premium Package',
    price: 4500,
    startsAt: true,
    tooltip: {
      whatItIs: 'Complete packaging system with custom structures, premium finishes, and unboxing experience.',
      idealIf: 'Packaging is a key brand touchpoint.',
      examples: 'Luxury products, subscription boxes, premium brands',
    },
  },
];

// Step 9: Events & Experiential
export const eventsOptions: EventsOption[] = [
  {
    id: 'none',
    label: 'Not Needed',
    price: 0,
    tooltip: {
      whatItIs: 'No event materials required.',
      idealIf: "You don't attend or host events.",
      examples: 'Non-event businesses',
    },
  },
  {
    id: 'basic',
    label: 'Basic Package',
    price: 500,
    tooltip: {
      whatItIs: 'Pop-up banner and table throw design.',
      idealIf: 'You need simple event presence.',
      examples: 'Networking events, small booths',
    },
  },
  {
    id: 'standard',
    label: 'Standard Package',
    price: 1100,
    tooltip: {
      whatItIs: 'Booth graphics, banners, and handout materials.',
      idealIf: 'You attend trade shows or conferences.',
      examples: 'Standard trade show presence',
    },
  },
  {
    id: 'comprehensive',
    label: 'Comprehensive Package',
    price: 2200,
    tooltip: {
      whatItIs: 'Complete booth design with multiple elements and promotional items.',
      idealIf: 'Events are important marketing channel.',
      examples: 'Major trade shows, conferences',
    },
  },
  {
    id: 'premium',
    label: 'Premium Package',
    price: 4000,
    startsAt: true,
    tooltip: {
      whatItIs: 'Custom booth design, experiential elements, and full event branding.',
      idealIf: 'Events are critical to your brand.',
      examples: 'Flagship booths, experiential activations, branded events',
    },
  },
];

// Step 10: Add-on Services
export const addOnServices: AddOnService[] = [
  {
    id: 'merch-5',
    label: 'Merchandise Design (5 items)',
    price: 600,
    tooltip: {
      whatItIs: 'Branded merchandise designs (t-shirts, hats, mugs, etc.).',
      idealIf: 'You want branded swag for team or clients.',
      examples: 'Company store, client gifts, team gear',
    },
  },
  {
    id: 'merch-10',
    label: 'Merchandise Design (10+ items)',
    price: 1100,
    tooltip: {
      whatItIs: 'Extended merchandise line with multiple items.',
      idealIf: 'You have significant merch needs.',
      examples: 'Full company store, event giveaways',
    },
  },
  {
    id: 'vehicle',
    label: 'Vehicle Wrap Design',
    price: 900,
    tooltip: {
      whatItIs: 'Full vehicle wrap or graphics design.',
      idealIf: 'You have company vehicles.',
      examples: 'Vans, trucks, cars, fleet vehicles',
    },
  },
  {
    id: 'uniform',
    label: 'Uniform/Apparel Design',
    price: 500,
    tooltip: {
      whatItIs: 'Staff uniform design and specifications.',
      idealIf: 'You have customer-facing staff needing branded attire.',
      examples: 'Retail, hospitality, service businesses',
    },
  },
  {
    id: 'menu',
    label: 'Menu/Price List Design',
    price: 450,
    tooltip: {
      whatItIs: 'Branded menu or pricing materials.',
      idealIf: "You're a restaurant, salon, or service with pricing displays.",
      examples: 'Restaurants, spas, professional services',
    },
  },
  {
    id: 'forms',
    label: 'Forms & Documents',
    price: 350,
    tooltip: {
      whatItIs: 'Branded business forms (invoices, contracts, receipts).',
      idealIf: 'You need professional business documents.',
      examples: 'Invoices, proposals, contracts',
    },
  },
  {
    id: 'gift-card',
    label: 'Gift Card/Certificate',
    price: 250,
    tooltip: {
      whatItIs: 'Gift card or certificate design.',
      idealIf: 'You sell gift cards or certificates.',
      examples: 'Retail, services, experiences',
    },
  },
  {
    id: 'promo-item',
    label: 'Promotional Items (per item)',
    price: 150,
    tooltip: {
      whatItIs: 'Individual promotional item design.',
      idealIf: 'You need specific items designed.',
      examples: 'Pens, bags, notebooks, custom items',
    },
  },
  {
    id: 'print-management',
    label: 'Print Production Management',
    price: 400,
    tooltip: {
      whatItIs: 'Coordination with printers and production vendors.',
      idealIf: 'You want us to manage printing/production.',
      examples: 'Large print runs, multiple vendors',
    },
  },
  {
    id: 'asset-handoff',
    label: 'Asset Organization & Handoff',
    price: 300,
    tooltip: {
      whatItIs: 'Organized brand asset package with all files properly named and structured.',
      idealIf: 'You need clean handoff to team or vendors.',
      examples: 'Internal teams, external partners',
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
      whatItIs: 'Standard timeline allowing thorough development and production coordination.',
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
      examples: 'Planned launches, events',
    },
  },
  {
    id: 'accelerated',
    label: 'Accelerated (2-4 weeks)',
    multiplier: 1.25,
    tooltip: {
      whatItIs: 'Fast-tracked delivery requiring prioritized scheduling.',
      idealIf: 'You have a firm deadline approaching.',
      examples: 'Upcoming events, urgent needs',
    },
  },
  {
    id: 'rush',
    label: 'Rush (Under 2 weeks)',
    multiplier: 1.5,
    tooltip: {
      whatItIs: 'Expedited delivery with dedicated resources.',
      idealIf: 'You have an immediate need.',
      examples: 'Last-minute events, crisis response',
    },
  },
];

// Recommendation Presets based on Step 1 selection
export const recommendationPresets: Record<string, {
  stationery?: string;
  digital?: string;
  social?: string;
  presentations?: string;
  marketing?: string;
  signage?: string;
  packaging?: string;
  events?: string;
  addOns?: string[];
}> = {
  'launch': {
    stationery: 'standard',
    digital: 'standard',
    social: 'standard',
    presentations: 'standard',
    marketing: 'basic',
    signage: 'none',
    packaging: 'none',
    events: 'none',
  },
  'rebrand': {
    stationery: 'standard',
    digital: 'standard',
    social: 'standard',
    presentations: 'standard',
    marketing: 'standard',
    signage: 'basic',
    packaging: 'none',
    events: 'none',
  },
  'essentials': {
    stationery: 'standard',
    digital: 'basic',
    social: 'none',
    presentations: 'basic',
    marketing: 'none',
    signage: 'none',
    packaging: 'none',
    events: 'none',
  },
  'digital': {
    stationery: 'none',
    digital: 'comprehensive',
    social: 'comprehensive',
    presentations: 'standard',
    marketing: 'none',
    signage: 'none',
    packaging: 'none',
    events: 'none',
  },
  'marketing': {
    stationery: 'basic',
    digital: 'basic',
    social: 'basic',
    presentations: 'comprehensive',
    marketing: 'comprehensive',
    signage: 'none',
    packaging: 'none',
    events: 'none',
  },
  'environment': {
    stationery: 'none',
    digital: 'none',
    social: 'none',
    presentations: 'none',
    marketing: 'none',
    signage: 'comprehensive',
    packaging: 'none',
    events: 'basic',
  },
  'packaging': {
    stationery: 'none',
    digital: 'none',
    social: 'none',
    presentations: 'none',
    marketing: 'basic',
    signage: 'none',
    packaging: 'comprehensive',
    events: 'none',
  },
  'events': {
    stationery: 'basic',
    digital: 'basic',
    social: 'standard',
    presentations: 'standard',
    marketing: 'standard',
    signage: 'basic',
    packaging: 'none',
    events: 'comprehensive',
  },
  'complete': {
    stationery: 'comprehensive',
    digital: 'comprehensive',
    social: 'comprehensive',
    presentations: 'comprehensive',
    marketing: 'comprehensive',
    signage: 'standard',
    packaging: 'standard',
    events: 'standard',
    addOns: ['asset-handoff'],
  },
  'other': {
    stationery: 'basic',
    digital: 'basic',
    social: 'basic',
    presentations: 'basic',
    marketing: 'none',
    signage: 'none',
    packaging: 'none',
    events: 'none',
  },
};
