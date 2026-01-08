// Animation Builder Configuration Data

export interface TooltipContent {
  whatItIs: string;
  idealIf: string;
  examples: string;
}

export interface AnimationTypeOption {
  id: string;
  label: string;
  tooltip: TooltipContent;
}

export interface DurationOption {
  id: string;
  label: string;
  price: number | null;
  customQuote?: boolean;
  tooltip: TooltipContent;
}

export interface StyleOption {
  id: string;
  label: string;
  price: number | null;
  startsAt?: boolean;
  customQuote?: boolean;
  tooltip: TooltipContent;
}

export interface ComplexityOption {
  id: string;
  label: string;
  price: number;
  startsAt?: boolean;
  tooltip: TooltipContent;
}

export interface SoundOption {
  id: string;
  label: string;
  price: number;
  startsAt?: boolean;
  tooltip: TooltipContent;
}

export interface AddOnTier {
  id: string;
  label: string;
  price: number;
  description: string;
  startsAt?: boolean;
  included?: boolean;
}

export interface AddOnCategory {
  id: string;
  name: string;
  defaultSelected: boolean;
  defaultTier: string;
  tiers: AddOnTier[];
}

export interface VideoFormatOption {
  id: string;
  label: string;
  price: number;
  included?: boolean;
  tooltip: TooltipContent;
}

export interface AspectRatioOption {
  id: string;
  label: string;
  price: number;
  included?: boolean;
  tooltip: TooltipContent;
}

export interface SourceFileOption {
  id: string;
  label: string;
  price: number;
  included?: boolean;
  tooltip: TooltipContent;
}

export interface TimelineOption {
  id: string;
  label: string;
  multiplier: number;
  tooltip: TooltipContent;
}

export interface RecommendationPreset {
  duration: string;
  style: string;
  complexity: string;
  sound: string;
  addOns?: string[];
  deliverables: string[];
  aspectRatios: string;
}

// Animation Types (Step 1) - Information only, no price impact
export const animationTypeOptions: AnimationTypeOption[] = [
  {
    id: 'motion-graphics',
    label: 'Motion Graphics',
    tooltip: {
      whatItIs: 'Animated text, shapes, icons, and graphic elements in motion.',
      idealIf: 'You need animated logos, titles, social media content, or explainer visuals.',
      examples: 'YouTube intros, Instagram Reels graphics, animated infographics',
    },
  },
  {
    id: 'explainer',
    label: 'Explainer Video',
    tooltip: {
      whatItIs: 'Animated video that explains a product, service, or concept.',
      idealIf: 'You want to simplify complex ideas and engage viewers with a narrative.',
      examples: 'Dropbox explainer, Slack product videos, startup pitch videos',
    },
  },
  {
    id: 'character',
    label: 'Character Animation',
    tooltip: {
      whatItIs: 'Animated characters with personality, movement, and expression.',
      idealIf: 'You want storytelling with relatable figures or mascots.',
      examples: 'Duolingo owl, Headspace animations, Mailchimp mascot',
    },
  },
  {
    id: 'logo',
    label: 'Logo Animation',
    tooltip: {
      whatItIs: 'Your static logo brought to life with motion.',
      idealIf: 'You need an animated logo for video intros, websites, or presentations.',
      examples: 'Netflix "ta-dum," HBO intro, Pixar lamp',
    },
  },
  {
    id: 'ui-ux',
    label: 'UI/UX Animation',
    tooltip: {
      whatItIs: 'Micro-interactions, transitions, and interface animations for apps/websites.',
      idealIf: 'You want to enhance user experience with polished, functional motion.',
      examples: 'Apple iOS interactions, Stripe checkout animations, Airbnb transitions',
    },
  },
  {
    id: 'social',
    label: 'Social Media Content',
    tooltip: {
      whatItIs: 'Short, engaging animations optimized for social platforms.',
      idealIf: 'You need scroll-stopping content for Instagram, TikTok, LinkedIn, etc.',
      examples: 'Branded Reels, animated ads, story templates',
    },
  },
  {
    id: 'product-3d',
    label: 'Product/3D Animation',
    tooltip: {
      whatItIs: '3D renders and animations showcasing physical products.',
      idealIf: 'You want to highlight product features, launches, or demonstrate functionality.',
      examples: 'Apple product reveals, Nike shoe animations, tech gadget showcases',
    },
  },
  {
    id: 'presentation',
    label: 'Presentation Animation',
    tooltip: {
      whatItIs: 'Animated slides, transitions, and visuals for presentations.',
      idealIf: 'You want to elevate pitches, keynotes, or corporate presentations.',
      examples: 'TED talk visuals, investor pitch decks, conference presentations',
    },
  },
  {
    id: 'other',
    label: 'Other',
    tooltip: {
      whatItIs: "Something unique or a combination of styles.",
      idealIf: "Your project doesn't fit standard categories — we'll tailor recommendations.",
      examples: 'Custom projects',
    },
  },
];

// Recommendation Presets based on Animation Type
export const recommendationPresets: Record<string, RecommendationPreset> = {
  'motion-graphics': {
    duration: 'standard',
    style: '2d-modern',
    complexity: 'standard',
    sound: 'licensed-music',
    deliverables: ['mp4'],
    aspectRatios: 'single',
  },
  'explainer': {
    duration: 'extended',
    style: '2d-flat',
    complexity: 'standard',
    sound: 'voiceover-source',
    addOns: ['storyboard-basic', 'script-full'],
    deliverables: ['mp4'],
    aspectRatios: 'single',
  },
  'character': {
    duration: 'standard',
    style: '2d-illustrated',
    complexity: 'complex',
    sound: 'voiceover-source',
    addOns: ['character-standard', 'storyboard-detailed'],
    deliverables: ['mp4'],
    aspectRatios: 'single',
  },
  'logo': {
    duration: 'micro',
    style: '2d-modern',
    complexity: 'simple',
    sound: 'sfx',
    deliverables: ['mp4', 'gif'],
    aspectRatios: 'single',
  },
  'ui-ux': {
    duration: 'micro',
    style: '2d-flat',
    complexity: 'standard',
    sound: 'none',
    deliverables: ['lottie'],
    aspectRatios: 'single',
  },
  'social': {
    duration: 'short',
    style: '2d-modern',
    complexity: 'simple',
    sound: 'licensed-music',
    deliverables: ['mp4'],
    aspectRatios: 'full-package',
  },
  'product-3d': {
    duration: 'standard',
    style: '3d-render',
    complexity: 'complex',
    sound: 'licensed-music',
    deliverables: ['mp4', 'mov'],
    aspectRatios: 'single',
  },
  'presentation': {
    duration: 'short',
    style: '2d-flat',
    complexity: 'simple',
    sound: 'none',
    deliverables: ['mp4'],
    aspectRatios: 'single',
  },
  'other': {
    duration: 'standard',
    style: '2d-flat',
    complexity: 'simple',
    sound: 'none',
    deliverables: ['mp4'],
    aspectRatios: 'single',
  },
};

// Duration Options (Step 2)
export const durationOptions: DurationOption[] = [
  {
    id: 'micro',
    label: 'Micro (1–5 seconds)',
    price: 75,
    tooltip: {
      whatItIs: 'Ultra-short animations like logo stings, loading states, or UI micro-interactions.',
      idealIf: 'You need quick, loopable, or functional motion that makes an instant impact.',
      examples: 'Logo reveals, button animations, loading spinners, app transitions',
    },
  },
  {
    id: 'short',
    label: 'Short (6–15 seconds)',
    price: 150,
    tooltip: {
      whatItIs: 'Brief animations for social clips, ads, or quick messaging.',
      idealIf: 'You want punchy content that grabs attention fast and delivers a single message.',
      examples: 'Instagram stories, pre-roll ads, GIFs, social teasers',
    },
  },
  {
    id: 'standard',
    label: 'Standard (16–30 seconds)',
    price: 250,
    tooltip: {
      whatItIs: 'Standard length for most social and marketing animations.',
      idealIf: 'You need to convey a complete message with visuals and have room for pacing.',
      examples: 'Social media ads, product teasers, animated announcements',
    },
  },
  {
    id: 'extended',
    label: 'Extended (31–60 seconds)',
    price: 400,
    tooltip: {
      whatItIs: 'Longer format for storytelling, demonstrations, or detailed explanations.',
      idealIf: 'You need more time to explain, demonstrate, or engage your audience.',
      examples: 'Short explainers, product walkthroughs, testimonial animations',
    },
  },
  {
    id: 'long',
    label: 'Long (1–2 minutes)',
    price: 650,
    tooltip: {
      whatItIs: 'Full short-form content for deeper storytelling or comprehensive explainers.',
      idealIf: 'Your message requires complex narratives or thorough explanation.',
      examples: 'Explainer videos, brand stories, tutorial animations',
    },
  },
  {
    id: 'extended-long',
    label: 'Extended Long (2–3 minutes)',
    price: 900,
    tooltip: {
      whatItIs: 'Longer-form animated content for detailed explanations or storytelling.',
      idealIf: 'You need thorough coverage of a topic or longer narrative arcs.',
      examples: 'In-depth explainers, training videos, product deep-dives',
    },
  },
  {
    id: 'long-form',
    label: 'Long-form (3+ minutes)',
    price: null,
    customQuote: true,
    tooltip: {
      whatItIs: 'Full-length animated content for substantial projects.',
      idealIf: 'You need educational, narrative, or promotional content with significant depth.',
      examples: 'Animated shorts, course content, documentary-style explainers',
    },
  },
];

// Style Options (Step 3)
export const styleOptions: StyleOption[] = [
  {
    id: '2d-flat',
    label: '2D Flat / Minimal',
    price: 100,
    tooltip: {
      whatItIs: 'Clean, simple shapes with flat colors and minimal detail.',
      idealIf: 'You need modern, professional visuals that load fast and scale well.',
      examples: 'Google animations, Slack, Asana, corporate presentations',
    },
  },
  {
    id: '2d-modern',
    label: '2D Modern / Dynamic',
    price: 175,
    tooltip: {
      whatItIs: 'Bold, energetic motion with contemporary design trends.',
      idealIf: 'You want eye-catching, trendy visuals that pop and grab attention.',
      examples: 'Spotify Wrapped, Apple keynotes, fitness apps, tech startups',
    },
  },
  {
    id: '2d-illustrated',
    label: '2D Illustrated',
    price: 200,
    tooltip: {
      whatItIs: 'Hand-drawn or illustrated look with more character and detail.',
      idealIf: 'You want warmth, personality, and artistic flair in your animation.',
      examples: 'Headspace, Mailchimp, Dropbox, children\'s content',
    },
  },
  {
    id: 'isometric',
    label: 'Isometric',
    price: 225,
    tooltip: {
      whatItIs: '3D-like perspective using 2D techniques, geometric and clean.',
      idealIf: 'You need technical or product-focused visuals with depth and clarity.',
      examples: 'Pitch decks, SaaS explainers, tech products, architectural viz',
    },
  },
  {
    id: 'mixed-media',
    label: 'Mixed Media',
    price: 300,
    startsAt: true,
    tooltip: {
      whatItIs: 'Combination of animation with live footage, photos, or multiple styles.',
      idealIf: 'You want a unique, hybrid look that stands out from typical animations.',
      examples: 'Music videos, documentary-style, collage aesthetics, editorial',
    },
  },
  {
    id: '3d-stylized',
    label: '3D Stylized',
    price: 350,
    startsAt: true,
    tooltip: {
      whatItIs: '3D with artistic, non-realistic style (cartoon, low-poly, abstract).',
      idealIf: 'You want 3D depth with unique creative direction and personality.',
      examples: 'Pixar-style, game cinematics, playful brand content, toy ads',
    },
  },
  {
    id: '3d-render',
    label: '3D Render',
    price: 400,
    startsAt: true,
    tooltip: {
      whatItIs: 'Full 3D modeling and animation with realistic or stylized rendering.',
      idealIf: 'You need product visualization, immersive experiences, or premium quality.',
      examples: 'Apple product videos, car commercials, Nike, luxury brands',
    },
  },
  {
    id: 'custom',
    label: 'Custom / Bespoke',
    price: null,
    customQuote: true,
    tooltip: {
      whatItIs: 'Completely custom visual style developed specifically for your brand.',
      idealIf: 'You want a signature look no one else has — a true original.',
      examples: 'Unique brand identities, award-show visuals, premium campaigns',
    },
  },
];

// Complexity Options (Step 4)
export const complexityOptions: ComplexityOption[] = [
  {
    id: 'simple',
    label: 'Simple',
    price: 100,
    tooltip: {
      whatItIs: 'Basic motion — fades, slides, simple transforms, minimal elements on screen.',
      idealIf: 'You need clean, straightforward animation without complexity.',
      examples: 'Text animations, logo reveals, simple icons, basic transitions',
    },
  },
  {
    id: 'standard',
    label: 'Standard',
    price: 225,
    tooltip: {
      whatItIs: 'Moderate motion — multiple elements, coordinated timing, smooth transitions.',
      idealIf: 'You want polished, professional animation with visual interest.',
      examples: 'Most social content, product features, standard explainers',
    },
  },
  {
    id: 'complex',
    label: 'Complex',
    price: 400,
    tooltip: {
      whatItIs: 'Detailed animation — many elements, intricate timing, advanced effects.',
      idealIf: 'You need rich, dynamic visuals that impress and engage deeply.',
      examples: 'Character animation, detailed product demos, multi-scene stories',
    },
  },
  {
    id: 'premium',
    label: 'Premium',
    price: 600,
    startsAt: true,
    tooltip: {
      whatItIs: 'High-end animation — cinematic quality, advanced techniques, meticulous detail.',
      idealIf: 'Quality is paramount and the animation represents your brand at the highest level.',
      examples: 'TV commercials, brand films, award-worthy content, flagship campaigns',
    },
  },
];

// Sound Options (Step 5)
export const soundOptions: SoundOption[] = [
  {
    id: 'none',
    label: 'None',
    price: 0,
    tooltip: {
      whatItIs: 'Silent animation with no audio track.',
      idealIf: 'You\'ll add audio separately, or need muted autoplay for social feeds.',
      examples: 'Website UI animations, muted social posts, GIFs, app interactions',
    },
  },
  {
    id: 'sfx',
    label: 'Sound Effects Only',
    price: 75,
    tooltip: {
      whatItIs: 'Spot effects synced to motion — whooshes, clicks, pops, impacts.',
      idealIf: 'You want audio feedback without music or voiceover.',
      examples: 'Logo stings, UI interactions, app animations, micro-interactions',
    },
  },
  {
    id: 'licensed-music',
    label: 'Licensed Music',
    price: 100,
    tooltip: {
      whatItIs: 'Background music from royalty-free libraries, properly licensed.',
      idealIf: 'You need a soundtrack without the cost of custom composition.',
      examples: 'Most social content, YouTube videos, presentations, ads',
    },
  },
  {
    id: 'voiceover-client',
    label: 'Voiceover (Client Provides)',
    price: 50,
    tooltip: {
      whatItIs: 'We sync and edit animation to voiceover you provide.',
      idealIf: 'You have existing VO or will record it separately with your own talent.',
      examples: 'Explainers with your team\'s voice, existing recordings, internal content',
    },
  },
  {
    id: 'voiceover-source',
    label: 'Voiceover (We Source)',
    price: 150,
    startsAt: true,
    tooltip: {
      whatItIs: 'Professional voiceover artist sourced, directed, and synced.',
      idealIf: 'You need quality VO but don\'t have a source or recording setup.',
      examples: 'Explainer videos, narrated content, professional presentations',
    },
  },
  {
    id: 'custom-music',
    label: 'Custom Music / Score',
    price: 300,
    startsAt: true,
    tooltip: {
      whatItIs: 'Original music composed specifically for your animation.',
      idealIf: 'You want a unique audio identity or perfectly timed original music.',
      examples: 'Brand anthems, premium commercials, signature intros, sonic branding',
    },
  },
  {
    id: 'full-audio',
    label: 'Full Audio Package',
    price: 400,
    startsAt: true,
    tooltip: {
      whatItIs: 'Voiceover + music + sound effects, fully produced and mixed.',
      idealIf: 'You want turnkey audio that elevates the entire piece professionally.',
      examples: 'Commercial-quality explainers, brand films, launch videos, TV spots',
    },
  },
];

// Add-on Categories (Step 6)
export const addOnCategories: AddOnCategory[] = [
  {
    id: 'script',
    name: 'Scriptwriting',
    defaultSelected: false,
    defaultTier: 'basic',
    tiers: [
      { id: 'basic', label: 'Basic Script', price: 100, description: 'Up to 150 words' },
      { id: 'full', label: 'Full Script', price: 200, description: '150–500 words', startsAt: true },
    ],
  },
  {
    id: 'storyboard',
    name: 'Storyboarding',
    defaultSelected: false,
    defaultTier: 'basic',
    tiers: [
      { id: 'basic', label: 'Basic Storyboard', price: 75, description: 'Key frames and flow' },
      { id: 'detailed', label: 'Detailed Storyboard', price: 175, description: 'Full breakdown with notes' },
    ],
  },
  {
    id: 'character',
    name: 'Character Design',
    defaultSelected: false,
    defaultTier: 'simple',
    tiers: [
      { id: 'simple', label: 'Simple Character', price: 150, description: '1 basic character' },
      { id: 'standard', label: 'Standard Character', price: 300, description: '1–2 detailed characters' },
      { id: 'system', label: 'Character System', price: 500, description: 'Multiple or full library', startsAt: true },
    ],
  },
  {
    id: 'illustration',
    name: 'Illustration / Asset Creation',
    defaultSelected: false,
    defaultTier: 'basic',
    tiers: [
      { id: 'basic', label: 'Basic Assets', price: 75, description: 'Icons and simple elements' },
      { id: 'custom', label: 'Custom Illustrations', price: 200, description: 'Original artwork', startsAt: true },
    ],
  },
  {
    id: 'revisions',
    name: 'Revisions Package',
    defaultSelected: true,
    defaultTier: 'standard',
    tiers: [
      { id: 'standard', label: 'Standard (2 rounds)', price: 0, description: 'Included', included: true },
      { id: 'extended', label: 'Extended (4 rounds)', price: 100, description: 'More iteration' },
      { id: 'unlimited', label: 'Unlimited Revisions', price: 250, description: 'Until satisfied' },
    ],
  },
];

// Video Format Options (Step 7)
export const videoFormatOptions: VideoFormatOption[] = [
  {
    id: 'mp4',
    label: 'MP4 (Standard)',
    price: 0,
    included: true,
    tooltip: {
      whatItIs: 'Universal video format that works everywhere.',
      idealIf: 'You need one format that plays on any platform without issues.',
      examples: 'Social media, websites, presentations, email embeds',
    },
  },
  {
    id: 'multiple',
    label: 'Multiple Formats (MP4, MOV, WebM)',
    price: 50,
    tooltip: {
      whatItIs: 'Multiple video formats optimized for different platforms and uses.',
      idealIf: 'You\'re distributing across various channels with different requirements.',
      examples: 'Web (WebM), Apple (MOV), general (MP4), cross-platform campaigns',
    },
  },
  {
    id: 'gif',
    label: 'GIF',
    price: 50,
    tooltip: {
      whatItIs: 'Animated GIF for lightweight, looping animations.',
      idealIf: 'You need embeddable animation for emails, websites, or messaging.',
      examples: 'Email signatures, Slack reactions, blog embeds, social stickers',
    },
  },
  {
    id: 'lottie',
    label: 'Lottie (JSON)',
    price: 100,
    tooltip: {
      whatItIs: 'Lightweight, scalable animation format for web and apps.',
      idealIf: 'You want animations integrated directly into websites or mobile apps.',
      examples: 'App micro-interactions, website animations, UI elements, loading states',
    },
  },
];

// Aspect Ratio Options (Step 7)
export const aspectRatioOptions: AspectRatioOption[] = [
  {
    id: 'single',
    label: 'Single Ratio',
    price: 0,
    included: true,
    tooltip: {
      whatItIs: 'One aspect ratio (16:9, 9:16, or 1:1) for your animation.',
      idealIf: 'You know exactly where this will be used and only need one format.',
      examples: 'YouTube (16:9), Stories (9:16), Feed posts (1:1)',
    },
  },
  {
    id: 'two',
    label: 'Two Ratios',
    price: 75,
    tooltip: {
      whatItIs: 'Same animation adapted and optimized for two aspect ratios.',
      idealIf: 'You\'re posting to different platforms with different specs.',
      examples: 'YouTube + Instagram Stories, LinkedIn + TikTok',
    },
  },
  {
    id: 'full-package',
    label: 'Full Package (16:9, 9:16, 1:1)',
    price: 150,
    tooltip: {
      whatItIs: 'Animation adapted for all major aspect ratios.',
      idealIf: 'You want maximum platform coverage from one animation investment.',
      examples: 'Full social distribution, multi-platform campaigns, omnichannel marketing',
    },
  },
];

// Source File Options (Step 7)
export const sourceFileOptions: SourceFileOption[] = [
  {
    id: 'final',
    label: 'Final Files Only',
    price: 0,
    included: true,
    tooltip: {
      whatItIs: 'Rendered video files, ready to use immediately.',
      idealIf: 'You just need the finished product without editing capabilities.',
      examples: 'One-time campaigns, social posts, presentations',
    },
  },
  {
    id: 'source',
    label: 'Source Files Included',
    price: 100,
    tooltip: {
      whatItIs: 'Original project files (After Effects, Blender, etc.) included.',
      idealIf: 'You want to make future edits or have an in-house team continue the work.',
      examples: 'Ongoing campaigns, template usage, brand asset libraries',
    },
  },
];

// Timeline Options (Step 8)
export const timelineOptions: TimelineOption[] = [
  {
    id: 'flexible',
    label: 'Flexible / No rush',
    multiplier: 1.0,
    tooltip: {
      whatItIs: 'We schedule based on current workload, typically 2–4 weeks depending on scope.',
      idealIf: 'You have no hard deadline and want us to fit your project in naturally.',
      examples: 'Planning ahead, non-urgent projects, ongoing brand work',
    },
  },
  {
    id: 'standard',
    label: 'Standard (2–3 weeks)',
    multiplier: 1.0,
    tooltip: {
      whatItIs: 'Normal production timeline for most animations.',
      idealIf: 'You have a reasonable deadline and want quality work without rush fees.',
      examples: 'Planned campaigns, product launches, scheduled content',
    },
  },
  {
    id: 'expedited',
    label: 'Expedited (1–2 weeks)',
    multiplier: 1.25,
    tooltip: {
      whatItIs: 'Accelerated production with priority scheduling (+25% fee).',
      idealIf: 'You have a firm deadline coming up soon and need faster turnaround.',
      examples: 'Upcoming events, tight campaign schedules, time-sensitive content',
    },
  },
  {
    id: 'rush',
    label: 'Rush (Under 1 week)',
    multiplier: 1.50,
    tooltip: {
      whatItIs: 'Rush delivery with dedicated resources (+50% fee).',
      idealIf: 'You need it ASAP and budget allows for premium turnaround.',
      examples: 'Emergency campaigns, last-minute requests, urgent announcements',
    },
  },
];

// Helper functions
export const getAnimationTypeById = (id: string) => animationTypeOptions.find(t => t.id === id);
export const getDurationById = (id: string) => durationOptions.find(d => d.id === id);
export const getStyleById = (id: string) => styleOptions.find(s => s.id === id);
export const getComplexityById = (id: string) => complexityOptions.find(c => c.id === id);
export const getSoundById = (id: string) => soundOptions.find(s => s.id === id);
export const getTimelineById = (id: string) => timelineOptions.find(t => t.id === id);
export const getVideoFormatById = (id: string) => videoFormatOptions.find(f => f.id === id);
export const getAspectRatioById = (id: string) => aspectRatioOptions.find(a => a.id === id);
export const getSourceFileById = (id: string) => sourceFileOptions.find(s => s.id === id);
export const getAddOnCategoryById = (id: string) => addOnCategories.find(c => c.id === id);
