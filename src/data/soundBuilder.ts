// Brand Signature Sound Builder Options

export const soundTypeOptions = [
  {
    id: 'sonic-logo',
    label: 'Sonic Logo / Audio Logo',
    tooltip: {
      whatItIs: 'A short, memorable sound that represents your brand — the audio equivalent of a visual logo.',
      idealIf: 'You want instant brand recognition in video content, ads, podcasts, or apps.',
      examples: 'Netflix "ta-dum," Intel bong, McDonald\'s "ba da ba ba ba"',
    },
  },
  {
    id: 'ringtone',
    label: 'Ringtone / Notification Sound',
    tooltip: {
      whatItIs: 'Custom sounds for phone ringtones, app notifications, or alerts.',
      idealIf: 'You want branded sounds for mobile apps or devices.',
      examples: 'iPhone ringtone, Slack notification, WhatsApp message tone',
    },
  },
  {
    id: 'hold-music',
    label: 'Hold Music / Phone System',
    tooltip: {
      whatItIs: 'Custom music and messages for phone systems, IVR, and hold queues.',
      idealIf: 'You need professional audio for customer phone experiences.',
      examples: 'Business phone systems, call centers, customer service lines',
    },
  },
  {
    id: 'app-sounds',
    label: 'App Sound Package',
    tooltip: {
      whatItIs: 'A collection of UI sounds for mobile or web applications.',
      idealIf: "You're building an app and want cohesive audio feedback.",
      examples: 'Button clicks, success sounds, error alerts, navigation sounds',
    },
  },
  {
    id: 'podcast',
    label: 'Podcast Intro/Outro',
    tooltip: {
      whatItIs: 'Custom music and sound design for podcast branding.',
      idealIf: "You're launching a podcast and want professional audio identity.",
      examples: 'Podcast theme music, intro stinger, outro bed',
    },
  },
  {
    id: 'video',
    label: 'Video Intro/Outro',
    tooltip: {
      whatItIs: 'Audio branding for video content — YouTube, corporate videos, social content.',
      idealIf: 'You create regular video content and want consistent audio branding.',
      examples: 'YouTube channel intro, corporate video opener',
    },
  },
  {
    id: 'jingle',
    label: 'Jingle / Brand Music',
    tooltip: {
      whatItIs: 'A short, catchy musical piece with or without lyrics for advertising.',
      idealIf: 'You want a memorable tune associated with your brand.',
      examples: 'State Farm jingle, Kit Kat "Give me a break," local business jingles',
    },
  },
  {
    id: 'soundscape',
    label: 'Soundscape / Ambient',
    tooltip: {
      whatItIs: 'Background audio atmospheres for spaces, experiences, or content.',
      idealIf: 'You need ambient sound for retail spaces, apps, or immersive experiences.',
      examples: 'Store ambiance, meditation app backgrounds, game environments',
    },
  },
  {
    id: 'full-system',
    label: 'Full Audio Brand System',
    tooltip: {
      whatItIs: 'A comprehensive audio identity package including multiple sound assets.',
      idealIf: 'You want complete audio branding across all touchpoints.',
      examples: 'Complete brand sound systems like Mastercard, Visa',
    },
  },
  {
    id: 'other',
    label: 'Other',
    tooltip: {
      whatItIs: 'Something unique or a combination of audio needs.',
      idealIf: "Your project doesn't fit standard categories — we'll tailor recommendations.",
      examples: 'Custom combinations, unique audio projects',
    },
  },
];

export const durationOptions = [
  {
    id: 'micro',
    label: 'Micro (Under 1 second)',
    price: 50,
    tooltip: {
      whatItIs: 'Ultra-short sound effects — clicks, pops, micro-interactions.',
      idealIf: 'You need UI feedback sounds or tiny audio moments.',
      examples: 'Button clicks, notification pips, toggle sounds',
    },
  },
  {
    id: 'short',
    label: 'Short (1–3 seconds)',
    price: 100,
    tooltip: {
      whatItIs: 'Brief audio signatures or stingers.',
      idealIf: 'You need a sonic logo, short notification, or quick brand moment.',
      examples: 'Sonic logos, app notifications, alert sounds',
    },
  },
  {
    id: 'medium',
    label: 'Medium (4–10 seconds)',
    price: 175,
    tooltip: {
      whatItIs: 'Longer stingers, ringtones, or short intros.',
      idealIf: 'You need full ringtones, extended notifications, or short musical pieces.',
      examples: 'Ringtones, video bumpers, short intros',
    },
  },
  {
    id: 'standard',
    label: 'Standard (11–30 seconds)',
    price: 300,
    tooltip: {
      whatItIs: 'Full intro/outro music, short jingles, or extended brand music.',
      idealIf: 'You need podcast intros, video openers, or short advertising music.',
      examples: 'Podcast themes, YouTube intros, ad music',
    },
  },
  {
    id: 'extended',
    label: 'Extended (31–60 seconds)',
    price: 450,
    tooltip: {
      whatItIs: 'Full jingles, hold music segments, or longer brand compositions.',
      idealIf: 'You need complete musical pieces or extended hold music.',
      examples: 'Full jingles, hold music, brand anthems',
    },
  },
  {
    id: 'long',
    label: 'Long (1–2 minutes)',
    price: 650,
    tooltip: {
      whatItIs: 'Full-length compositions for hold systems or extended content.',
      idealIf: 'You need complete hold music or longer ambient pieces.',
      examples: 'Full hold music, ambient loops, background tracks',
    },
  },
  {
    id: 'extended-long',
    label: 'Extended Long (2–3 minutes)',
    price: 850,
    tooltip: {
      whatItIs: 'Longer compositions for comprehensive audio needs.',
      idealIf: 'You need extended ambient soundscapes or full musical pieces.',
      examples: 'Meditation tracks, store ambiance, full songs',
    },
  },
  {
    id: 'custom',
    label: 'Custom Length (3+ minutes)',
    price: null,
    customQuote: true,
    tooltip: {
      whatItIs: 'Full-length compositions or extensive audio packages.',
      idealIf: 'You need long-form content or complete audio systems.',
      examples: 'Full brand music, extended soundscapes',
    },
  },
];

export const styleOptions = [
  {
    id: 'clean',
    label: 'Clean / Minimal',
    price: 50,
    tooltip: {
      whatItIs: 'Simple, uncluttered sounds with clarity and precision.',
      idealIf: 'You want modern, professional audio without complexity.',
      examples: 'Apple product sounds, minimalist tech brands',
    },
  },
  {
    id: 'corporate',
    label: 'Corporate / Professional',
    price: 75,
    tooltip: {
      whatItIs: 'Polished, business-appropriate audio with broad appeal.',
      idealIf: 'You need safe, professional audio for corporate applications.',
      examples: 'Enterprise software, financial services, B2B',
    },
  },
  {
    id: 'modern',
    label: 'Modern / Electronic',
    price: 100,
    tooltip: {
      whatItIs: 'Contemporary sounds using synthesizers, digital textures, and modern production.',
      idealIf: 'You want a tech-forward, innovative audio identity.',
      examples: 'Intel, Microsoft, tech startups',
    },
  },
  {
    id: 'warm',
    label: 'Warm / Organic',
    price: 100,
    tooltip: {
      whatItIs: 'Natural, acoustic-leaning sounds with warmth and humanity.',
      idealIf: 'You want approachable, friendly, human-feeling audio.',
      examples: 'Airbnb, wellness brands, organic products',
    },
  },
  {
    id: 'playful',
    label: 'Playful / Fun',
    price: 100,
    tooltip: {
      whatItIs: 'Light, cheerful, and approachable sounds with personality.',
      idealIf: 'You want friendly, engaging audio with character.',
      examples: "Duolingo, children's brands, casual games",
    },
  },
  {
    id: 'bold',
    label: 'Bold / Energetic',
    price: 125,
    tooltip: {
      whatItIs: 'High-energy, impactful sounds that demand attention.',
      idealIf: 'You want exciting, dynamic audio that stands out.',
      examples: 'Sports brands, energy drinks, gaming',
    },
  },
  {
    id: 'retro',
    label: 'Retro / Vintage',
    price: 125,
    tooltip: {
      whatItIs: 'Nostalgic sounds inspired by past eras (8-bit, analog, vintage).',
      idealIf: 'You want a throwback feel or nostalgic connection.',
      examples: 'Retro gaming, vintage brands, nostalgia marketing',
    },
  },
  {
    id: 'luxury',
    label: 'Luxury / Premium',
    price: 150,
    tooltip: {
      whatItIs: 'Sophisticated, high-end audio with refinement and elegance.',
      idealIf: 'You\'re a premium brand requiring exclusive-feeling sound.',
      examples: 'Mercedes, Mastercard, luxury fashion',
    },
  },
  {
    id: 'cinematic',
    label: 'Cinematic / Epic',
    price: 175,
    tooltip: {
      whatItIs: 'Dramatic, orchestral, or film-score inspired audio.',
      idealIf: 'You want grand, emotional, story-driven sound.',
      examples: 'Movie studios, gaming, premium launches',
    },
  },
  {
    id: 'custom',
    label: 'Custom Style',
    price: null,
    customQuote: true,
    tooltip: {
      whatItIs: 'A completely unique sonic palette developed for your brand.',
      idealIf: 'You want a signature sound no one else has.',
      examples: 'Bespoke audio identities for major brands',
    },
  },
];

export const complexityOptions = [
  {
    id: 'simple',
    label: 'Simple',
    price: 75,
    tooltip: {
      whatItIs: 'Basic production — single instrument, simple melody, minimal layers.',
      idealIf: 'You need clean, straightforward audio without complexity.',
      examples: 'Basic notifications, simple stingers',
    },
  },
  {
    id: 'standard',
    label: 'Standard',
    price: 175,
    tooltip: {
      whatItIs: 'Professional production — multiple elements, proper mixing, polished sound.',
      idealIf: 'You want quality audio with depth and professionalism.',
      examples: 'Most brand audio, standard intros',
    },
  },
  {
    id: 'complex',
    label: 'Complex',
    price: 325,
    tooltip: {
      whatItIs: 'Advanced production — multiple instruments, detailed arrangement, sophisticated mixing.',
      idealIf: 'You need rich, layered audio with multiple elements.',
      examples: 'Full jingles, detailed soundscapes, orchestral elements',
    },
  },
  {
    id: 'premium',
    label: 'Premium',
    price: 500,
    startsAt: true,
    tooltip: {
      whatItIs: 'High-end production — studio musicians, custom recording, mastering, full production value.',
      idealIf: 'Quality is paramount and audio represents your brand at the highest level.',
      examples: 'TV commercials, major brand sonic logos, broadcast quality',
    },
  },
];

export const quantityOptions = [
  {
    id: 'single',
    label: 'Single Sound',
    price: 0,
    tooltip: {
      whatItIs: 'One final audio piece.',
      idealIf: 'You need one definitive sound.',
      examples: 'Single sonic logo, one ringtone',
    },
  },
  {
    id: '2-3',
    label: '2–3 Variations',
    price: 100,
    tooltip: {
      whatItIs: 'The same core sound with slight variations (length, intensity, instrumentation).',
      idealIf: 'You need flexibility for different contexts.',
      examples: 'Long/short versions, full/minimal versions',
    },
  },
  {
    id: '4-6',
    label: '4–6 Variations',
    price: 200,
    tooltip: {
      whatItIs: 'Extended variation package for multiple use cases.',
      idealIf: 'You need the sound adapted for various platforms.',
      examples: 'Social, broadcast, app, notification versions',
    },
  },
  {
    id: '7-10',
    label: 'Sound Package (7–10)',
    price: 350,
    tooltip: {
      whatItIs: 'A collection of related sounds for comprehensive coverage.',
      idealIf: 'You need a full set of branded audio.',
      examples: 'App sound packages, notification sets',
    },
  },
  {
    id: '11-15',
    label: 'Sound System (11–15)',
    price: 500,
    tooltip: {
      whatItIs: 'A complete audio system with multiple sound types.',
      idealIf: "You're building a full audio identity.",
      examples: 'Complete app audio, multi-touch brand sounds',
    },
  },
  {
    id: '16+',
    label: 'Full Library (16+)',
    price: null,
    customQuote: true,
    tooltip: {
      whatItIs: 'Extensive sound library covering all brand needs.',
      idealIf: 'You need comprehensive audio across all touchpoints.',
      examples: 'Full brand audio systems',
    },
  },
];

export const voiceoverOptions = [
  {
    id: 'none',
    label: 'None',
    price: 0,
    tooltip: {
      whatItIs: 'Instrumental/sound only, no voice.',
      idealIf: 'You want pure audio branding without spoken elements.',
      examples: 'Most sonic logos, UI sounds',
    },
  },
  {
    id: 'tag',
    label: 'Voice Tag (Short)',
    price: 75,
    tooltip: {
      whatItIs: 'Brief spoken brand name or tagline (under 5 words).',
      idealIf: 'You want your brand name spoken as part of the audio.',
      examples: '"This is Spotify," brand name stingers',
    },
  },
  {
    id: 'vo-client',
    label: 'Voiceover (Client Provides)',
    price: 50,
    tooltip: {
      whatItIs: 'We integrate voice audio you provide into the sound design.',
      idealIf: 'You have existing VO or a specific voice you want to use.',
      examples: 'Using your own talent',
    },
  },
  {
    id: 'vo-source',
    label: 'Voiceover (We Source)',
    price: 150,
    startsAt: true,
    tooltip: {
      whatItIs: 'Professional voice artist for longer scripts or messaging.',
      idealIf: 'You need hold messages, IVR prompts, or narrated content.',
      examples: 'Phone system messages, podcast intros with narration',
    },
  },
];

export const lyricsOptions = [
  {
    id: 'none',
    label: 'None (Instrumental)',
    price: 0,
    tooltip: {
      whatItIs: 'Music only, no singing.',
      idealIf: 'You want instrumental audio branding.',
      examples: 'Most sonic logos, background music',
    },
  },
  {
    id: 'simple',
    label: 'Simple Lyrics',
    price: 150,
    tooltip: {
      whatItIs: 'Basic sung hook or tagline (one line, simple melody).',
      idealIf: 'You want a catchy sung element without full songwriting.',
      examples: '"Ba da ba ba ba" (McDonald\'s), short sung hooks',
    },
  },
  {
    id: 'full',
    label: 'Full Lyrics + Vocals',
    price: 350,
    startsAt: true,
    tooltip: {
      whatItIs: 'Complete lyrics with professional vocalist for a full jingle.',
      idealIf: 'You want a memorable, fully-sung brand jingle.',
      examples: 'Full advertising jingles, brand songs',
    },
  },
];

export const soundDesignAddOns = [
  {
    id: 'loop',
    label: 'Loopable Version',
    price: 50,
    tooltip: {
      whatItIs: 'Audio engineered to loop seamlessly.',
      idealIf: 'You need hold music, ambient audio, or app backgrounds that repeat.',
      examples: 'Hold music, meditation apps, ambient soundscapes',
    },
  },
  {
    id: 'stems',
    label: 'Stems / Layers',
    price: 75,
    tooltip: {
      whatItIs: 'Individual audio layers delivered separately.',
      idealIf: 'You want to mix/remix elements yourself or need flexible editing.',
      examples: 'Music stems, isolated vocals, separate instruments',
    },
  },
  {
    id: 'mnemonic',
    label: 'Mnemonic Development',
    price: 150,
    tooltip: {
      whatItIs: 'Strategic development of a memorable audio signature.',
      idealIf: 'You want a scientifically-designed memorable sound.',
      examples: 'Intel bong, NBC chimes — designed for recall',
    },
  },
];

export const revisionOptions = [
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
    price: 100,
    tooltip: {
      whatItIs: 'Four rounds for more iteration.',
      idealIf: 'Multiple stakeholders or expected revisions.',
      examples: 'Committee approvals, brand reviews',
    },
  },
  {
    id: 'unlimited',
    label: 'Unlimited',
    price: 200,
    tooltip: {
      whatItIs: 'Unlimited revisions until satisfied.',
      idealIf: 'You need flexibility on feedback cycles.',
      examples: 'High-stakes content, perfectionist clients',
    },
  },
];

export const formatOptions = [
  {
    id: 'standard',
    label: 'Standard (MP3 + WAV)',
    price: 0,
    included: true,
    tooltip: {
      whatItIs: 'High-quality audio files for most uses.',
      idealIf: 'You need files for general digital use.',
      examples: 'Web, social, most applications',
    },
  },
  {
    id: 'mobile',
    label: 'Mobile Optimized (M4R + OGG)',
    price: 50,
    tooltip: {
      whatItIs: 'Formats specifically for iOS and Android devices.',
      idealIf: "You're creating ringtones or app sounds.",
      examples: 'iPhone ringtones (M4R), Android notifications (OGG)',
    },
  },
  {
    id: 'broadcast',
    label: 'Broadcast Ready',
    price: 75,
    tooltip: {
      whatItIs: 'Broadcast-spec files meeting TV/radio standards.',
      idealIf: 'Your audio will be used in broadcast advertising.',
      examples: 'TV commercials, radio spots',
    },
  },
  {
    id: 'all',
    label: 'All Formats Package',
    price: 100,
    tooltip: {
      whatItIs: 'Every format you might need — MP3, WAV, AIFF, M4R, OGG, FLAC.',
      idealIf: 'You want maximum flexibility across all platforms.',
      examples: 'Multi-platform distribution',
    },
  },
];

export const projectFileOptions = [
  {
    id: 'final',
    label: 'Final Audio Only',
    price: 0,
    included: true,
    tooltip: {
      whatItIs: 'Finished, rendered audio files.',
      idealIf: 'You just need the end product.',
      examples: 'Most standard projects',
    },
  },
  {
    id: 'project',
    label: 'Project Files Included',
    price: 100,
    tooltip: {
      whatItIs: 'Original DAW project files (Logic, Ableton, Pro Tools).',
      idealIf: 'You want to make future edits or have an audio team.',
      examples: 'In-house audio teams, future modifications',
    },
  },
];

export const licenseOptions = [
  {
    id: 'standard',
    label: 'Standard (Digital + Broadcast)',
    price: 0,
    included: true,
    tooltip: {
      whatItIs: 'Use audio across digital platforms and broadcast.',
      idealIf: 'Standard business use — apps, web, social, TV, radio.',
      examples: 'Most business applications',
    },
  },
  {
    id: 'extended',
    label: 'Extended (Products / Resale)',
    price: 150,
    tooltip: {
      whatItIs: 'Use audio on products for sale (devices, toys, merchandise).',
      idealIf: 'The sound will be embedded in physical products.',
      examples: 'Device sounds, toy sounds, hardware products',
    },
  },
  {
    id: 'exclusive',
    label: 'Exclusive Rights',
    price: 350,
    startsAt: true,
    tooltip: {
      whatItIs: "Full ownership — we won't license this sound to anyone else.",
      idealIf: 'You need complete exclusivity for your sonic identity.',
      examples: 'Signature brand sounds, competitive advantage',
    },
  },
];

export const timelineOptions = [
  {
    id: 'flexible',
    label: 'Flexible',
    multiplier: 1.0,
    tooltip: {
      whatItIs: 'We schedule based on workload.',
      idealIf: 'No hard deadline. Typically 1–2 weeks.',
    },
  },
  {
    id: 'standard',
    label: 'Standard (1–2 weeks)',
    multiplier: 1.0,
    tooltip: {
      whatItIs: 'Normal turnaround for most audio projects.',
      idealIf: 'You have a reasonable deadline.',
    },
  },
  {
    id: 'expedited',
    label: 'Expedited (5–7 days)',
    multiplier: 1.25,
    tooltip: {
      whatItIs: 'Accelerated delivery with priority scheduling.',
      idealIf: 'You have a firm deadline approaching.',
    },
  },
  {
    id: 'rush',
    label: 'Rush (Under 5 days)',
    multiplier: 1.5,
    tooltip: {
      whatItIs: 'Rush delivery with dedicated resources.',
      idealIf: 'You need it ASAP. Subject to scope limitations.',
    },
  },
];

// Recommendation presets based on sound type
export const recommendationPresets: Record<string, {
  duration: string;
  style: string;
  complexity: string;
  quantity: string;
  voiceover: string;
  lyrics: string;
  formats: string;
  addOns?: string[];
}> = {
  'sonic-logo': {
    duration: 'short',
    style: 'modern',
    complexity: 'standard',
    quantity: '2-3',
    voiceover: 'none',
    lyrics: 'none',
    formats: 'all',
    addOns: ['mnemonic'],
  },
  'ringtone': {
    duration: 'medium',
    style: 'clean',
    complexity: 'simple',
    quantity: '2-3',
    voiceover: 'none',
    lyrics: 'none',
    formats: 'mobile',
  },
  'hold-music': {
    duration: 'long',
    style: 'corporate',
    complexity: 'simple',
    quantity: 'single',
    voiceover: 'vo-source',
    lyrics: 'none',
    formats: 'standard',
    addOns: ['loop'],
  },
  'app-sounds': {
    duration: 'micro',
    style: 'clean',
    complexity: 'standard',
    quantity: '7-10',
    voiceover: 'none',
    lyrics: 'none',
    formats: 'mobile',
  },
  'podcast': {
    duration: 'standard',
    style: 'warm',
    complexity: 'standard',
    quantity: '2-3',
    voiceover: 'vo-source',
    lyrics: 'none',
    formats: 'standard',
  },
  'video': {
    duration: 'medium',
    style: 'modern',
    complexity: 'standard',
    quantity: '2-3',
    voiceover: 'none',
    lyrics: 'none',
    formats: 'standard',
  },
  'jingle': {
    duration: 'standard',
    style: 'bold',
    complexity: 'complex',
    quantity: '2-3',
    voiceover: 'none',
    lyrics: 'full',
    formats: 'broadcast',
  },
  'soundscape': {
    duration: 'long',
    style: 'warm',
    complexity: 'standard',
    quantity: 'single',
    voiceover: 'none',
    lyrics: 'none',
    formats: 'standard',
    addOns: ['loop'],
  },
  'full-system': {
    duration: 'standard',
    style: 'modern',
    complexity: 'complex',
    quantity: '11-15',
    voiceover: 'tag',
    lyrics: 'none',
    formats: 'all',
    addOns: ['mnemonic', 'stems'],
  },
  'other': {
    duration: 'medium',
    style: 'modern',
    complexity: 'simple',
    quantity: 'single',
    voiceover: 'none',
    lyrics: 'none',
    formats: 'standard',
  },
};
