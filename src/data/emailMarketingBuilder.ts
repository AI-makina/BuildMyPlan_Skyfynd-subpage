// Email Marketing & Automation Builder Data

export interface EmailGoalOption {
  id: string;
  label: string;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface VolumeOption {
  id: string;
  label: string;
  price: number | null;
  recurring?: 'monthly';
  emailsPerMonth: number | null;
  startsAt?: boolean;
  customQuote?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface DesignOption {
  id: string;
  label: string;
  price: number;
  recurring: 'monthly';
  startsAt?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface AutomationOption {
  id: string;
  label: string;
  price: number;
  recurring: 'monthly';
  startsAt?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface SequenceOption {
  id: string;
  label: string;
  price: number | null;
  oneTime?: boolean;
  customQuote?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface ListOption {
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

export interface CopyOption {
  id: string;
  label: string;
  price: number;
  recurring: 'monthly';
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

export interface TestingOption {
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

export interface PlatformOption {
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

export interface AdditionalService {
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

// Step 1: Email Marketing Goal
export const emailGoalOptions: EmailGoalOption[] = [
  {
    id: 'newsletter',
    label: 'Newsletter & Content',
    tooltip: {
      whatItIs: 'Regular email content to keep subscribers engaged and informed.',
      idealIf: 'You want to build relationships and stay top-of-mind with your audience.',
      examples: 'Weekly newsletters, blog digests, industry updates',
    },
  },
  {
    id: 'lead-nurturing',
    label: 'Lead Nurturing',
    tooltip: {
      whatItIs: 'Automated sequences that guide prospects toward becoming customers.',
      idealIf: 'You have leads that need education and warming before they buy.',
      examples: 'Drip campaigns, welcome sequences, educational series',
    },
  },
  {
    id: 'ecommerce',
    label: 'E-commerce & Sales',
    tooltip: {
      whatItIs: 'Emails designed to drive purchases, recover carts, and maximize customer value.',
      idealIf: 'You sell products online and want email to drive revenue.',
      examples: 'Abandoned cart, product recommendations, flash sales',
    },
  },
  {
    id: 'retention',
    label: 'Customer Retention',
    tooltip: {
      whatItIs: 'Emails focused on keeping existing customers engaged and reducing churn.',
      idealIf: 'You want to increase lifetime value and loyalty.',
      examples: 'Onboarding sequences, re-engagement campaigns, loyalty programs',
    },
  },
  {
    id: 'events',
    label: 'Event & Webinar Promotion',
    tooltip: {
      whatItIs: 'Email campaigns to drive registrations and attendance for events.',
      idealIf: 'You host webinars, workshops, or live events.',
      examples: 'Invitation sequences, reminder emails, post-event follow-up',
    },
  },
  {
    id: 'launches',
    label: 'Product Launches',
    tooltip: {
      whatItIs: 'Strategic email campaigns to build anticipation and drive launch success.',
      idealIf: "You're launching new products or services.",
      examples: 'Teaser campaigns, launch sequences, early access offers',
    },
  },
  {
    id: 'transactional',
    label: 'Transactional & Operational',
    tooltip: {
      whatItIs: 'Automated emails triggered by user actions — receipts, confirmations, notifications.',
      idealIf: 'You need reliable, branded transactional emails.',
      examples: 'Order confirmations, shipping updates, password resets',
    },
  },
  {
    id: 'full-service',
    label: 'Full-Service Email Program',
    tooltip: {
      whatItIs: 'Comprehensive email marketing covering all aspects of your email strategy.',
      idealIf: 'You want to hand off email marketing entirely to experts.',
      examples: 'Complete email programs, multi-sequence strategies',
    },
  },
  {
    id: 'other',
    label: 'Other',
    tooltip: {
      whatItIs: 'Something unique or a combination of goals.',
      idealIf: "Your needs don't fit standard categories — we'll tailor recommendations.",
      examples: 'Custom requirements, hybrid approaches',
    },
  },
];

// Step 2: Email Volume
export const volumeOptions: VolumeOption[] = [
  {
    id: 'light',
    label: 'Light (4 emails/mo)',
    price: 200,
    recurring: 'monthly',
    emailsPerMonth: 4,
    tooltip: {
      whatItIs: '1 email per week — consistent presence without overwhelming subscribers.',
      idealIf: 'You want to maintain regular contact with minimal content needs.',
      examples: 'Monthly newsletters, weekly digest',
    },
  },
  {
    id: 'standard',
    label: 'Standard (8 emails/mo)',
    price: 350,
    recurring: 'monthly',
    emailsPerMonth: 8,
    tooltip: {
      whatItIs: '2 emails per week — solid cadence for engagement and nurturing.',
      idealIf: 'You want active email marketing without daily sends.',
      examples: 'Newsletter + promotional mix',
    },
  },
  {
    id: 'active',
    label: 'Active (12 emails/mo)',
    price: 500,
    recurring: 'monthly',
    emailsPerMonth: 12,
    tooltip: {
      whatItIs: '3 emails per week — frequent touchpoints for engaged audiences.',
      idealIf: 'You have lots to share and an engaged list.',
      examples: 'E-commerce, content-heavy brands',
    },
  },
  {
    id: 'aggressive',
    label: 'Aggressive (16 emails/mo)',
    price: 650,
    recurring: 'monthly',
    emailsPerMonth: 16,
    tooltip: {
      whatItIs: '4 emails per week — high-frequency for maximum engagement.',
      idealIf: "You're in e-commerce or have time-sensitive offers.",
      examples: 'Daily deals, flash sales, news',
    },
  },
  {
    id: 'high-volume',
    label: 'High-Volume (20+ emails/mo)',
    price: 850,
    recurring: 'monthly',
    emailsPerMonth: 20,
    startsAt: true,
    tooltip: {
      whatItIs: '5+ emails per week — intensive email program.',
      idealIf: 'Email is a primary revenue channel.',
      examples: 'Large e-commerce, media companies',
    },
  },
  {
    id: 'custom',
    label: 'Custom Volume',
    price: null,
    emailsPerMonth: null,
    customQuote: true,
    tooltip: {
      whatItIs: 'Tailored volume based on your specific needs and seasonality.',
      idealIf: 'You have variable needs or seasonal spikes.',
      examples: 'Seasonal businesses, variable campaigns',
    },
  },
];

// Step 3: Email Design & Templates
export const designOptions: DesignOption[] = [
  {
    id: 'text',
    label: 'Text-Only / Minimal',
    price: 0,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Plain text or minimal HTML emails with basic formatting.',
      idealIf: 'You want personal, non-promotional feeling emails.',
      examples: 'Personal outreach, founder letters, B2B nurturing',
    },
  },
  {
    id: 'basic',
    label: 'Basic Templates',
    price: 100,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Clean, functional templates with your logo and brand colors.',
      idealIf: 'You need professional emails without custom design.',
      examples: 'Standard newsletters, updates',
    },
  },
  {
    id: 'branded',
    label: 'Branded Templates',
    price: 200,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Custom-designed templates matching your brand guidelines.',
      idealIf: 'You want polished, on-brand emails that impress.',
      examples: 'Most businesses, branded communications',
    },
  },
  {
    id: 'premium',
    label: 'Premium Templates',
    price: 350,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Multiple custom templates with advanced layouts, graphics, and interactivity.',
      idealIf: 'You need varied, high-impact email designs.',
      examples: 'E-commerce, product showcases, premium brands',
    },
  },
  {
    id: 'custom',
    label: 'Custom Design Per Email',
    price: 500,
    recurring: 'monthly',
    startsAt: true,
    tooltip: {
      whatItIs: 'Unique designs for each campaign — no repeated templates.',
      idealIf: 'Every email needs to be special and distinct.',
      examples: 'Luxury brands, agencies, creative companies',
    },
  },
];

// Step 4: Automation & Sequences
export const automationOptions: AutomationOption[] = [
  {
    id: 'none',
    label: 'No Automation',
    price: 0,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Manual sends only — no automated sequences.',
      idealIf: 'You only need one-off campaigns or broadcasts.',
      examples: 'Simple newsletters, announcements',
    },
  },
  {
    id: 'basic',
    label: 'Basic Automation',
    price: 150,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Simple automations — welcome emails, basic triggers.',
      idealIf: 'You want essential automations without complexity.',
      examples: 'Welcome sequence, thank you emails',
    },
  },
  {
    id: 'standard',
    label: 'Standard Automation',
    price: 300,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Multi-step sequences with branching logic and segmentation.',
      idealIf: 'You want nurture sequences and behavioral triggers.',
      examples: 'Lead nurturing, onboarding flows',
    },
  },
  {
    id: 'advanced',
    label: 'Advanced Automation',
    price: 500,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Complex workflows with advanced triggers, scoring, and personalization.',
      idealIf: 'You need sophisticated, data-driven automation.',
      examples: 'E-commerce flows, multi-touch nurturing',
    },
  },
  {
    id: 'enterprise',
    label: 'Enterprise Automation',
    price: 750,
    recurring: 'monthly',
    startsAt: true,
    tooltip: {
      whatItIs: 'Full-scale automation architecture with integrations and optimization.',
      idealIf: 'Email automation is critical to your business.',
      examples: 'SaaS, large e-commerce, enterprise',
    },
  },
];

// Step 5: Automation Sequences
export const sequenceOptions: SequenceOption[] = [
  {
    id: 'none',
    label: 'None',
    price: 0,
    tooltip: {
      whatItIs: 'No automated sequences needed.',
      idealIf: 'You only send manual campaigns.',
      examples: 'Simple newsletters',
    },
  },
  {
    id: '1',
    label: '1 Sequence',
    price: 250,
    oneTime: true,
    tooltip: {
      whatItIs: 'One automated email sequence (3–7 emails).',
      idealIf: 'You need a single key flow like welcome or nurture.',
      examples: 'Welcome series, lead magnet follow-up',
    },
  },
  {
    id: '2',
    label: '2 Sequences',
    price: 450,
    oneTime: true,
    tooltip: {
      whatItIs: 'Two automated sequences for different purposes.',
      idealIf: 'You need welcome + one other key sequence.',
      examples: 'Welcome + abandoned cart, welcome + onboarding',
    },
  },
  {
    id: '3-4',
    label: '3–4 Sequences',
    price: 750,
    oneTime: true,
    tooltip: {
      whatItIs: 'Multiple sequences covering key customer touchpoints.',
      idealIf: 'You want comprehensive automation coverage.',
      examples: 'Welcome, nurture, cart, post-purchase',
    },
  },
  {
    id: '5-6',
    label: '5–6 Sequences',
    price: 1100,
    oneTime: true,
    tooltip: {
      whatItIs: 'Extended automation system with multiple flows.',
      idealIf: 'You need full lifecycle email coverage.',
      examples: 'Complete e-commerce flows, SaaS onboarding',
    },
  },
  {
    id: '7+',
    label: 'Full Automation System (7+)',
    price: null,
    customQuote: true,
    tooltip: {
      whatItIs: 'Complete email automation architecture.',
      idealIf: 'You need enterprise-level automation.',
      examples: 'Large e-commerce, complex B2B',
    },
  },
];

// Step 6: List Management & Segmentation
export const listOptions: ListOption[] = [
  {
    id: 'basic',
    label: 'Basic List Management',
    price: 75,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'List hygiene, unsubscribe handling, and basic organization.',
      idealIf: 'You have a simple list and need basic maintenance.',
      examples: 'Single-list newsletters',
    },
  },
  {
    id: 'standard',
    label: 'Standard Segmentation',
    price: 150,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Segment creation, tagging strategy, and targeted sends.',
      idealIf: 'You want to send relevant content to different audience groups.',
      examples: 'Interest-based segments, customer vs. prospect',
    },
  },
  {
    id: 'advanced',
    label: 'Advanced Segmentation',
    price: 275,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Behavioral segmentation, engagement scoring, and dynamic lists.',
      idealIf: 'You need sophisticated targeting based on actions and data.',
      examples: 'E-commerce RFM, engagement tiers',
    },
  },
  {
    id: 'full',
    label: 'Full List Strategy',
    price: 400,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Complete list strategy, growth tactics, and optimization.',
      idealIf: 'List building and management is a priority.',
      examples: 'Growing brands, lead-focused businesses',
    },
  },
];

// Step 7: Copywriting & Content
export const copyOptions: CopyOption[] = [
  {
    id: 'client',
    label: 'Client Provides Copy',
    price: 0,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'You write all email content, we design and send.',
      idealIf: 'You have a writer or prefer to control messaging.',
      examples: 'In-house marketing teams',
    },
  },
  {
    id: 'editing',
    label: 'Copy Editing Only',
    price: 100,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'We edit and optimize copy you provide.',
      idealIf: 'You write drafts but want professional polish.',
      examples: 'Founder-written content, rough drafts',
    },
  },
  {
    id: 'standard',
    label: 'Standard Copywriting',
    price: 250,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Professional email copywriting for all campaigns.',
      idealIf: 'You want expert-written emails that convert.',
      examples: 'Most businesses, quality-focused brands',
    },
  },
  {
    id: 'premium',
    label: 'Premium Copywriting',
    price: 400,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Senior copywriter with A/B testing and optimization.',
      idealIf: 'Copy quality is critical to your success.',
      examples: 'High-converting funnels, premium brands',
    },
  },
  {
    id: 'full',
    label: 'Full Content Strategy',
    price: 600,
    recurring: 'monthly',
    startsAt: true,
    tooltip: {
      whatItIs: 'Content strategy, copywriting, and editorial calendar.',
      idealIf: 'You want a complete content approach to email.',
      examples: 'Content-driven brands, publishers',
    },
  },
];

// Step 8: Reporting & Analytics
export const reportingOptions: ReportingOption[] = [
  {
    id: 'basic',
    label: 'Basic Metrics',
    price: 0,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Standard platform metrics — opens, clicks, unsubscribes.',
      idealIf: 'You just need basic performance visibility.',
      examples: 'Simple tracking needs',
    },
  },
  {
    id: 'monthly',
    label: 'Monthly Report',
    price: 75,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Monthly performance summary with insights and recommendations.',
      idealIf: 'You want regular analysis without deep dives.',
      examples: 'Most small businesses',
    },
  },
  {
    id: 'biweekly',
    label: 'Bi-Weekly Reports',
    price: 125,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Reports every two weeks with trends and optimization suggestions.',
      idealIf: 'You want more frequent visibility and faster optimization.',
      examples: 'Active email programs',
    },
  },
  {
    id: 'weekly',
    label: 'Weekly Reports + Call',
    price: 225,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Weekly reports plus a strategy call to discuss performance.',
      idealIf: 'You want close collaboration and rapid iteration.',
      examples: 'High-volume senders, launches',
    },
  },
  {
    id: 'full',
    label: 'Full Analytics Suite',
    price: 350,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Advanced analytics, revenue attribution, and predictive insights.',
      idealIf: 'Email is a major revenue driver and you need deep data.',
      examples: 'E-commerce, data-driven companies',
    },
  },
];

// Step 9: Add-on Services - A/B Testing
export const testingOptions: TestingOption[] = [
  {
    id: 'none',
    label: 'Not Included',
    price: 0,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'No systematic A/B testing.',
      idealIf: "You don't need optimization testing.",
      examples: 'Simple campaigns',
    },
  },
  {
    id: 'basic',
    label: 'Basic Testing',
    price: 100,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Subject line and send time testing.',
      idealIf: 'You want simple optimizations.',
      examples: 'Subject line variants, timing tests',
    },
  },
  {
    id: 'advanced',
    label: 'Advanced Testing',
    price: 200,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Comprehensive testing — subject, content, design, CTAs, segments.',
      idealIf: 'You want data-driven optimization.',
      examples: 'Full conversion optimization',
    },
  },
];

// Step 9: Add-on Services - Platform Management
export const platformOptions: PlatformOption[] = [
  {
    id: 'client',
    label: 'Client Manages Platform',
    price: 0,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'You handle ESP administration, we just build campaigns.',
      idealIf: 'You have platform expertise in-house.',
      examples: 'In-house email teams',
    },
  },
  {
    id: 'managed',
    label: 'Platform Management',
    price: 100,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'We manage your ESP — settings, deliverability, technical setup.',
      idealIf: 'You want us to handle the technical side.',
      examples: 'Mailchimp, Klaviyo, HubSpot management',
    },
  },
  {
    id: 'deliverability',
    label: 'Platform + Deliverability',
    price: 200,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Full platform management plus deliverability monitoring and optimization.',
      idealIf: 'Inbox placement is critical.',
      examples: 'High-volume senders, e-commerce',
    },
  },
];

// Step 9: Add-on Services - Additional Services
export const additionalServicesOptions: AdditionalService[] = [
  {
    id: 'migration',
    label: 'ESP Migration',
    price: 500,
    oneTime: true,
    startsAt: true,
    tooltip: {
      whatItIs: 'Move your email program from one platform to another.',
      idealIf: "You're switching email platforms.",
      examples: 'Mailchimp to Klaviyo, HubSpot to ActiveCampaign',
    },
  },
  {
    id: 'list-cleaning',
    label: 'List Cleaning',
    price: 150,
    oneTime: true,
    tooltip: {
      whatItIs: 'Remove invalid, bounced, and unengaged contacts.',
      idealIf: "Your list has hygiene issues or hasn't been cleaned.",
      examples: 'Old lists, deliverability problems',
    },
  },
  {
    id: 'audit',
    label: 'Email Audit',
    price: 300,
    oneTime: true,
    tooltip: {
      whatItIs: 'Comprehensive review of current email program with recommendations.',
      idealIf: 'You want expert analysis before committing.',
      examples: 'Starting point assessment',
    },
  },
  {
    id: 'template-dev',
    label: 'Template Development',
    price: 400,
    oneTime: true,
    startsAt: true,
    tooltip: {
      whatItIs: 'Custom email template design and coding.',
      idealIf: 'You need new branded templates built.',
      examples: 'Rebrands, new programs',
    },
  },
  {
    id: 'popup',
    label: 'Popup/Form Design',
    price: 200,
    oneTime: true,
    tooltip: {
      whatItIs: 'Design and setup of email capture forms and popups.',
      idealIf: 'You need to grow your list with on-site capture.',
      examples: 'Website popups, embedded forms',
    },
  },
  {
    id: 'landing',
    label: 'Landing Page (Email)',
    price: 400,
    oneTime: true,
    tooltip: {
      whatItIs: 'Dedicated landing page for email campaigns.',
      idealIf: 'You need a conversion page for email traffic.',
      examples: 'Promo pages, signup pages',
    },
  },
  {
    id: 'sms',
    label: 'SMS Integration',
    price: 150,
    recurring: 'monthly',
    tooltip: {
      whatItIs: 'Coordinate SMS with email campaigns for multi-channel messaging.',
      idealIf: 'You want to add SMS to your communication mix.',
      examples: 'E-commerce, time-sensitive offers',
    },
  },
  {
    id: 'crm',
    label: 'CRM Integration',
    price: 300,
    oneTime: true,
    tooltip: {
      whatItIs: 'Connect your email platform to your CRM for data sync.',
      idealIf: 'You need email and sales data connected.',
      examples: 'Salesforce, HubSpot, Pipedrive',
    },
  },
];

// Step 10: Contract Duration
export const durationOptions: DurationOption[] = [
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
    multiplier: 0.9,
    months: 6,
    tooltip: {
      whatItIs: 'Extended commitment with better rates.',
      idealIf: "You're serious about email marketing and want savings.",
      examples: 'Sustained growth efforts',
    },
  },
  {
    id: '12-months',
    label: '12 Months',
    multiplier: 0.8,
    months: 12,
    tooltip: {
      whatItIs: 'Annual partnership with maximum savings.',
      idealIf: 'Email is a core channel and you want the best pricing.',
      examples: 'Long-term programs',
    },
  },
];

// Recommendation Presets
export const recommendationPresets: Record<
  string,
  {
    volume?: string;
    design?: string;
    automation?: string;
    sequences?: string;
    list?: string;
    copy?: string;
    reporting?: string;
    addOns?: string[];
  }
> = {
  newsletter: {
    volume: 'light',
    design: 'branded',
    automation: 'basic',
    sequences: '1',
    list: 'basic',
    copy: 'standard',
    reporting: 'monthly',
  },
  'lead-nurturing': {
    volume: 'standard',
    design: 'branded',
    automation: 'standard',
    sequences: '2',
    list: 'standard',
    copy: 'standard',
    reporting: 'biweekly',
  },
  ecommerce: {
    volume: 'active',
    design: 'premium',
    automation: 'advanced',
    sequences: '3-4',
    list: 'advanced',
    copy: 'premium',
    reporting: 'weekly',
    addOns: ['testing-advanced', 'platform-deliverability'],
  },
  retention: {
    volume: 'light',
    design: 'branded',
    automation: 'standard',
    sequences: '2',
    list: 'standard',
    copy: 'standard',
    reporting: 'monthly',
  },
  events: {
    volume: 'standard',
    design: 'branded',
    automation: 'standard',
    sequences: '1',
    list: 'standard',
    copy: 'standard',
    reporting: 'biweekly',
  },
  launches: {
    volume: 'active',
    design: 'premium',
    automation: 'standard',
    sequences: '1',
    list: 'standard',
    copy: 'premium',
    reporting: 'weekly',
  },
  transactional: {
    volume: 'light',
    design: 'branded',
    automation: 'advanced',
    sequences: '2',
    list: 'basic',
    copy: 'client',
    reporting: 'monthly',
    addOns: ['platform-managed'],
  },
  'full-service': {
    volume: 'active',
    design: 'premium',
    automation: 'advanced',
    sequences: '5-6',
    list: 'advanced',
    copy: 'premium',
    reporting: 'weekly',
    addOns: ['testing-advanced', 'platform-deliverability'],
  },
  other: {
    volume: 'light',
    design: 'basic',
    automation: 'basic',
    sequences: 'none',
    list: 'basic',
    copy: 'client',
    reporting: 'monthly',
  },
};
