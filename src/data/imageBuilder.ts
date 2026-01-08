// Image Builder Data - Options, Prices, and Recommendations

export interface ImageTypeOption {
  id: string;
  label: string;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface QuantityOption {
  id: string;
  label: string;
  price: number | null;
  customQuote?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface StyleOption {
  id: string;
  label: string;
  price: number | null;
  customQuote?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface CreationMethodOption {
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

export interface EditingOption {
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

export interface BackgroundOption {
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

export interface OverlayOption {
  id: string;
  label: string;
  price: number;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface SizeOption {
  id: string;
  label: string;
  price: number;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface RevisionOption {
  id: string;
  label: string;
  price: number;
  included?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
  };
}

export interface FormatOption {
  id: string;
  label: string;
  price: number;
  included?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface SourceOption {
  id: string;
  label: string;
  price: number;
  included?: boolean;
  tooltip: {
    whatItIs: string;
    idealIf: string;
    examples: string;
  };
}

export interface LicenseOption {
  id: string;
  label: string;
  price: number;
  included?: boolean;
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
  };
}

export interface RecommendationPreset {
  quantity: string;
  style: string;
  creation: string;
  editing: string;
  background: string;
  overlay: string;
  sizes: string;
  formats?: string;
  source?: string;
}

// Step 1: Image Type Options (Info Only - No Price Impact)
export const imageTypeOptions: ImageTypeOption[] = [
  {
    id: 'product',
    label: 'Product Photography',
    tooltip: {
      whatItIs: 'Professional images showcasing physical products for e-commerce, catalogs, or marketing.',
      idealIf: 'You sell products online and need high-quality visuals that convert.',
      examples: 'Amazon listings, Shopify stores, product catalogs',
    },
  },
  {
    id: 'social',
    label: 'Social Media Graphics',
    tooltip: {
      whatItIs: 'Custom-designed images optimized for social platforms.',
      idealIf: 'You need scroll-stopping content for Instagram, LinkedIn, Facebook, etc.',
      examples: 'Instagram posts, LinkedIn banners, Facebook ads',
    },
  },
  {
    id: 'marketing',
    label: 'Marketing & Ads',
    tooltip: {
      whatItIs: 'Designed visuals for advertising campaigns across digital and print.',
      idealIf: "You're running paid campaigns or need promotional materials.",
      examples: 'Google display ads, banner ads, flyers, billboards',
    },
  },
  {
    id: 'brand',
    label: 'Brand Imagery',
    tooltip: {
      whatItIs: 'Cohesive visual content that represents your brand identity.',
      idealIf: 'You need consistent imagery across all touchpoints.',
      examples: 'Website hero images, brand photography, lifestyle shots',
    },
  },
  {
    id: 'ai-generated',
    label: 'AI-Generated Images',
    tooltip: {
      whatItIs: 'Custom images created using AI tools like Midjourney, DALL-E, or Stable Diffusion.',
      idealIf: 'You need unique visuals quickly without traditional photography or illustration.',
      examples: 'Conceptual art, blog imagery, creative backgrounds',
    },
  },
  {
    id: 'illustrations',
    label: 'Illustrations',
    tooltip: {
      whatItIs: 'Hand-drawn or digitally illustrated custom artwork.',
      idealIf: "You want a unique artistic style that photography can't achieve.",
      examples: "Editorial illustrations, icon sets, infographics, children's content",
    },
  },
  {
    id: 'editing',
    label: 'Photo Editing / Retouching',
    tooltip: {
      whatItIs: 'Enhancement, manipulation, or restoration of existing photos.',
      idealIf: 'You have photos that need professional editing, cleanup, or compositing.',
      examples: 'Headshot retouching, background removal, color correction',
    },
  },
  {
    id: 'infographics',
    label: 'Infographics',
    tooltip: {
      whatItIs: 'Visual representations of data, processes, or information.',
      idealIf: 'You need to communicate complex information in an engaging, digestible format.',
      examples: 'Data visualizations, process diagrams, comparison charts',
    },
  },
  {
    id: 'thumbnails',
    label: 'Thumbnails & Covers',
    tooltip: {
      whatItIs: 'Eye-catching images for video thumbnails, podcast covers, or book covers.',
      idealIf: 'You need click-worthy visuals for content platforms.',
      examples: 'YouTube thumbnails, Spotify podcast covers, eBook covers',
    },
  },
  {
    id: 'other',
    label: 'Other',
    tooltip: {
      whatItIs: 'Something unique or a combination of styles.',
      idealIf: "Your project doesn't fit standard categories — we'll tailor recommendations.",
      examples: 'Custom projects, mixed media, experimental concepts',
    },
  },
];

// Step 2: Quantity Options
export const quantityOptions: QuantityOption[] = [
  {
    id: '1-2',
    label: '1-2 images',
    price: 75,
    tooltip: {
      whatItIs: 'A small batch for focused needs.',
      idealIf: 'You need a hero image, single graphic, or quick turnaround on limited scope.',
      examples: 'One website banner, single social post, one infographic',
    },
  },
  {
    id: '3-5',
    label: '3-5 images',
    price: 150,
    tooltip: {
      whatItIs: 'A small set covering basic needs.',
      idealIf: 'You need a few variations or a mini content package.',
      examples: 'Small ad set, a few product shots, social media starter pack',
    },
  },
  {
    id: '6-10',
    label: '6-10 images',
    price: 275,
    tooltip: {
      whatItIs: 'A standard package for most projects.',
      idealIf: 'You need variety and coverage across multiple uses.',
      examples: 'Product line photos, social media content batch, marketing campaign',
    },
  },
  {
    id: '11-20',
    label: '11-20 images',
    price: 450,
    tooltip: {
      whatItIs: 'A comprehensive package for larger needs.',
      idealIf: "You're building a content library or need extensive coverage.",
      examples: 'Full product catalog, content calendar, brand photo library',
    },
  },
  {
    id: '21-30',
    label: '21-30 images',
    price: 600,
    tooltip: {
      whatItIs: 'Large-scale image production.',
      idealIf: 'You have significant visual needs across platforms.',
      examples: 'E-commerce store launch, extensive campaign, full website imagery',
    },
  },
  {
    id: '30+',
    label: '30+ images',
    price: null,
    customQuote: true,
    tooltip: {
      whatItIs: 'Enterprise-level image production.',
      idealIf: 'You need a massive content library or ongoing visual support.',
      examples: 'Large catalogs, franchise assets, media libraries',
    },
  },
];

// Step 3: Style Options
export const styleOptions: StyleOption[] = [
  {
    id: 'clean',
    label: 'Clean / Minimal',
    price: 50,
    tooltip: {
      whatItIs: 'Simple, uncluttered visuals with focus on the subject.',
      idealIf: 'You want professional, distraction-free imagery.',
      examples: 'Apple product shots, minimalist brands, corporate content',
    },
  },
  {
    id: 'bold',
    label: 'Bold / Vibrant',
    price: 75,
    tooltip: {
      whatItIs: 'High-contrast, colorful, attention-grabbing visuals.',
      idealIf: 'You want to stand out and make an impact.',
      examples: 'Fitness brands, food photography, entertainment content',
    },
  },
  {
    id: 'lifestyle',
    label: 'Lifestyle / Contextual',
    price: 100,
    tooltip: {
      whatItIs: 'Images showing products or concepts in real-world settings.',
      idealIf: 'You want relatable, aspirational imagery that tells a story.',
      examples: 'Airbnb, fashion lookbooks, home goods',
    },
  },
  {
    id: 'branded',
    label: 'Branded / On-brand',
    price: 100,
    tooltip: {
      whatItIs: 'Visuals designed to match your existing brand guidelines.',
      idealIf: 'You need consistency with your established visual identity.',
      examples: 'Corporate marketing, franchise materials',
    },
  },
  {
    id: 'editorial',
    label: 'Editorial / Artistic',
    price: 150,
    tooltip: {
      whatItIs: 'Creative, magazine-quality imagery with artistic direction.',
      idealIf: 'You want premium, story-driven visuals.',
      examples: 'Fashion editorials, luxury brands, thought leadership',
    },
  },
  {
    id: 'abstract',
    label: 'Abstract / Conceptual',
    price: 125,
    tooltip: {
      whatItIs: 'Non-literal visuals representing ideas, emotions, or concepts.',
      idealIf: 'You need creative imagery for abstract topics.',
      examples: 'Tech companies, mental health, innovation themes',
    },
  },
  {
    id: 'custom',
    label: 'Custom Style',
    price: null,
    customQuote: true,
    tooltip: {
      whatItIs: 'A completely unique visual style developed for your project.',
      idealIf: 'You want something no one else has.',
      examples: 'Signature brand aesthetic, art direction from scratch',
    },
  },
];

// Step 4: Creation Method Options
export const creationMethodOptions: CreationMethodOption[] = [
  {
    id: 'ai',
    label: 'AI-Generated',
    price: 75,
    tooltip: {
      whatItIs: 'Images created using AI tools (Midjourney, DALL-E, Stable Diffusion).',
      idealIf: 'You need unique visuals quickly and cost-effectively.',
      examples: 'Blog imagery, conceptual visuals, backgrounds',
    },
  },
  {
    id: 'stock',
    label: 'Stock + Editing',
    price: 100,
    tooltip: {
      whatItIs: 'Licensed stock photos customized and edited to fit your needs.',
      idealIf: 'You need professional photos with budget efficiency.',
      examples: 'Website imagery, marketing materials, presentations',
    },
  },
  {
    id: 'design',
    label: 'Digital Design / Graphic',
    price: 150,
    tooltip: {
      whatItIs: 'Custom graphics created in design software (Photoshop, Illustrator, Figma).',
      idealIf: 'You need designed visuals, not photography.',
      examples: 'Social graphics, ads, infographics, icons',
    },
  },
  {
    id: 'compositing',
    label: 'Photo Compositing',
    price: 175,
    startsAt: true,
    tooltip: {
      whatItIs: 'Multiple images combined into one seamless visual.',
      idealIf: 'You need impossible or complex scenes created from photos.',
      examples: 'Fantasy scenes, product in environment, creative ads',
    },
  },
  {
    id: 'illustration',
    label: 'Digital Illustration',
    price: 200,
    startsAt: true,
    tooltip: {
      whatItIs: 'Hand-drawn or digitally illustrated custom artwork.',
      idealIf: 'You want unique artistic visuals with personality.',
      examples: 'Editorial illustrations, character art, custom icons',
    },
  },
  {
    id: 'photography',
    label: 'Professional Photography',
    price: 300,
    startsAt: true,
    tooltip: {
      whatItIs: 'Original photos shot by a professional photographer.',
      idealIf: 'You need authentic, high-quality original imagery.',
      examples: 'Headshots, product photography, brand shoots',
    },
  },
];

// Step 5: Editing Level Options
export const editingOptions: EditingOption[] = [
  {
    id: 'basic',
    label: 'Basic',
    price: 50,
    tooltip: {
      whatItIs: 'Simple adjustments — cropping, resizing, basic color correction.',
      idealIf: 'Images need minor tweaks only.',
      examples: 'Resize for social, basic cleanup, format conversion',
    },
  },
  {
    id: 'standard',
    label: 'Standard',
    price: 100,
    tooltip: {
      whatItIs: 'Professional editing — color grading, exposure, sharpening, minor retouching.',
      idealIf: 'You want polished, professional-quality images.',
      examples: 'Most marketing content, product photos, social media',
    },
  },
  {
    id: 'advanced',
    label: 'Advanced',
    price: 175,
    tooltip: {
      whatItIs: 'Detailed work — skin retouching, object removal, background replacement, compositing.',
      idealIf: 'Images need significant enhancement or manipulation.',
      examples: 'Beauty retouching, complex edits, ad campaigns',
    },
  },
  {
    id: 'premium',
    label: 'Premium',
    price: 275,
    startsAt: true,
    tooltip: {
      whatItIs: 'High-end editing — extensive manipulation, artistic effects, magazine-quality retouching.',
      idealIf: 'Quality is critical and every detail matters.',
      examples: 'Fashion editorials, luxury brands, award submissions',
    },
  },
];

// Step 6: Add-ons

// Background Options
export const backgroundOptions: BackgroundOption[] = [
  {
    id: 'natural',
    label: 'As-is / Natural',
    price: 0,
    tooltip: {
      whatItIs: 'Keep the original or natural background.',
      idealIf: 'The background works for your use case.',
      examples: 'Lifestyle photos, contextual imagery',
    },
  },
  {
    id: 'solid',
    label: 'White / Solid Color',
    price: 25,
    tooltip: {
      whatItIs: 'Clean, uniform background in white or a color of choice.',
      idealIf: 'You need e-commerce style product shots.',
      examples: 'Amazon listings, product catalogs',
    },
  },
  {
    id: 'transparent',
    label: 'Transparent (PNG)',
    price: 35,
    tooltip: {
      whatItIs: 'Background removed, saved with transparency.',
      idealIf: 'You need to place images on different backgrounds.',
      examples: 'Website elements, composite designs',
    },
  },
  {
    id: 'custom',
    label: 'Custom Background',
    price: 75,
    startsAt: true,
    tooltip: {
      whatItIs: 'Subject placed on a new custom background or environment.',
      idealIf: 'You want lifestyle context without a photoshoot.',
      examples: 'Product in room setting, environmental context',
    },
  },
];

// Text & Graphics Overlay Options
export const overlayOptions: OverlayOption[] = [
  {
    id: 'none',
    label: 'None',
    price: 0,
    tooltip: {
      whatItIs: 'Image only, no text or graphics added.',
      idealIf: 'You want clean imagery without overlays.',
      examples: 'Product photos, brand imagery',
    },
  },
  {
    id: 'simple-text',
    label: 'Simple Text',
    price: 25,
    tooltip: {
      whatItIs: 'Basic text overlay — headline, caption, or call-to-action.',
      idealIf: 'You need text on social posts or simple ads.',
      examples: 'Quote graphics, announcement posts',
    },
  },
  {
    id: 'designed',
    label: 'Designed Graphics',
    price: 75,
    tooltip: {
      whatItIs: 'Custom graphics, icons, badges, or designed text treatments.',
      idealIf: 'You need branded, designed visual elements.',
      examples: 'Sale badges, infographic elements, branded frames',
    },
  },
];

// Size Variations Options
export const sizeOptions: SizeOption[] = [
  {
    id: 'single',
    label: 'Single Size',
    price: 0,
    tooltip: {
      whatItIs: 'Images delivered in one size/aspect ratio.',
      idealIf: 'You know exactly where these will be used.',
      examples: 'Website banners, specific ad placements',
    },
  },
  {
    id: 'multiple',
    label: '2-3 Sizes',
    price: 50,
    tooltip: {
      whatItIs: 'Same images adapted to multiple sizes.',
      idealIf: "You're using images across a few platforms.",
      examples: 'Web + social, print + digital',
    },
  },
  {
    id: 'full',
    label: 'Full Size Package',
    price: 100,
    tooltip: {
      whatItIs: 'Images in all standard sizes (square, landscape, portrait, stories).',
      idealIf: 'You want maximum flexibility across all platforms.',
      examples: 'Full social suite, multi-platform campaigns',
    },
  },
];

// Revision Options
export const revisionOptions: RevisionOption[] = [
  {
    id: 'standard',
    label: 'Standard (2 rounds)',
    price: 0,
    included: true,
    tooltip: {
      whatItIs: 'Two rounds of revisions included.',
      idealIf: 'Most projects — covers typical feedback cycles.',
    },
  },
  {
    id: 'extended',
    label: 'Extended (4 rounds)',
    price: 75,
    tooltip: {
      whatItIs: 'Four rounds for more iteration.',
      idealIf: 'Multiple stakeholders or expected revisions.',
    },
  },
  {
    id: 'unlimited',
    label: 'Unlimited',
    price: 150,
    tooltip: {
      whatItIs: 'Unlimited revisions until satisfied.',
      idealIf: 'You need flexibility on feedback cycles.',
    },
  },
];

// Step 7: Deliverables

// File Format Options
export const formatOptions: FormatOption[] = [
  {
    id: 'web',
    label: 'Web (JPG/PNG)',
    price: 0,
    included: true,
    tooltip: {
      whatItIs: 'Optimized files for digital use.',
      idealIf: 'Images are for websites, social media, or digital marketing.',
      examples: 'Website images, social posts, email graphics',
    },
  },
  {
    id: 'print',
    label: 'Print-Ready (High-res + CMYK)',
    price: 50,
    tooltip: {
      whatItIs: 'High-resolution files prepared for professional printing.',
      idealIf: 'You need images for brochures, posters, or packaging.',
      examples: 'Flyers, banners, product packaging',
    },
  },
  {
    id: 'all',
    label: 'All Formats',
    price: 75,
    tooltip: {
      whatItIs: 'Web-optimized, print-ready, and raw/layered files.',
      idealIf: 'You want maximum flexibility for any use.',
      examples: 'Multi-channel campaigns, future-proofing',
    },
  },
];

// Source File Options
export const sourceOptions: SourceOption[] = [
  {
    id: 'final',
    label: 'Final Files Only',
    price: 0,
    included: true,
    tooltip: {
      whatItIs: 'Finished images ready to use.',
      idealIf: 'You just need the end product.',
      examples: 'Most standard projects',
    },
  },
  {
    id: 'source',
    label: 'Source Files Included',
    price: 75,
    tooltip: {
      whatItIs: 'Original layered files (PSD, AI, Figma).',
      idealIf: 'You want to make future edits yourself.',
      examples: 'Ongoing campaigns, in-house design teams',
    },
  },
];

// Usage License Options
export const licenseOptions: LicenseOption[] = [
  {
    id: 'standard',
    label: 'Standard (Digital + Print)',
    price: 0,
    included: true,
    tooltip: {
      whatItIs: 'Use images for your business across digital and print.',
      idealIf: 'Standard business use — website, social, marketing.',
      examples: 'Most business applications',
    },
  },
  {
    id: 'extended',
    label: 'Extended (Resale / Products)',
    price: 100,
    tooltip: {
      whatItIs: 'Use images on products for resale or merchandise.',
      idealIf: "You're creating products with the imagery (t-shirts, prints, etc.).",
      examples: 'Merch, print-on-demand, physical products',
    },
  },
  {
    id: 'exclusive',
    label: 'Exclusive Rights',
    price: 250,
    startsAt: true,
    tooltip: {
      whatItIs: "Full ownership — we won't use or resell the images.",
      idealIf: 'You need complete exclusivity and ownership.',
      examples: 'Signature brand assets, competitive advantage',
    },
  },
];

// Step 8: Timeline Options
export const timelineOptions: TimelineOption[] = [
  {
    id: 'flexible',
    label: 'Flexible',
    multiplier: 1.0,
    tooltip: {
      whatItIs: 'We schedule based on workload.',
      idealIf: 'No hard deadline. Typically 1-2 weeks depending on scope.',
    },
  },
  {
    id: 'standard',
    label: 'Standard (1 week)',
    multiplier: 1.0,
    tooltip: {
      whatItIs: 'Normal turnaround for most image projects.',
      idealIf: 'You have a reasonable deadline.',
    },
  },
  {
    id: 'expedited',
    label: 'Expedited (3-5 days)',
    multiplier: 1.25,
    tooltip: {
      whatItIs: 'Accelerated delivery with priority scheduling.',
      idealIf: 'You have a firm deadline approaching.',
    },
  },
  {
    id: 'rush',
    label: 'Rush (1-2 days)',
    multiplier: 1.5,
    tooltip: {
      whatItIs: 'Rush delivery with dedicated resources.',
      idealIf: 'You need it ASAP. Subject to scope limitations.',
    },
  },
];

// Recommendation Presets based on Image Type
export const recommendationPresets: Record<string, RecommendationPreset> = {
  product: {
    quantity: '6-10',
    style: 'clean',
    creation: 'stock',
    editing: 'standard',
    background: 'solid',
    overlay: 'none',
    sizes: 'single',
    formats: 'all',
  },
  social: {
    quantity: '6-10',
    style: 'bold',
    creation: 'design',
    editing: 'standard',
    background: 'natural',
    overlay: 'simple-text',
    sizes: 'full',
    formats: 'web',
  },
  marketing: {
    quantity: '3-5',
    style: 'branded',
    creation: 'design',
    editing: 'advanced',
    background: 'natural',
    overlay: 'designed',
    sizes: 'multiple',
    formats: 'all',
  },
  brand: {
    quantity: '6-10',
    style: 'lifestyle',
    creation: 'photography',
    editing: 'advanced',
    background: 'natural',
    overlay: 'none',
    sizes: 'multiple',
    formats: 'all',
    source: 'source',
  },
  'ai-generated': {
    quantity: '6-10',
    style: 'abstract',
    creation: 'ai',
    editing: 'basic',
    background: 'natural',
    overlay: 'none',
    sizes: 'single',
    formats: 'web',
  },
  illustrations: {
    quantity: '3-5',
    style: 'editorial',
    creation: 'illustration',
    editing: 'standard',
    background: 'transparent',
    overlay: 'none',
    sizes: 'single',
    formats: 'all',
    source: 'source',
  },
  editing: {
    quantity: '6-10',
    style: 'clean',
    creation: 'stock',
    editing: 'advanced',
    background: 'natural',
    overlay: 'none',
    sizes: 'single',
    formats: 'web',
  },
  infographics: {
    quantity: '1-2',
    style: 'branded',
    creation: 'design',
    editing: 'standard',
    background: 'solid',
    overlay: 'designed',
    sizes: 'multiple',
    formats: 'all',
    source: 'source',
  },
  thumbnails: {
    quantity: '3-5',
    style: 'bold',
    creation: 'design',
    editing: 'standard',
    background: 'natural',
    overlay: 'simple-text',
    sizes: 'single',
    formats: 'web',
  },
  other: {
    quantity: '3-5',
    style: 'clean',
    creation: 'design',
    editing: 'standard',
    background: 'natural',
    overlay: 'none',
    sizes: 'single',
    formats: 'web',
  },
};
