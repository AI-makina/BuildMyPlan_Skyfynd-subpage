# Animation Custom Builder - Feature Specification

## Overview

The Animation Custom Builder is an interactive step-by-step configurator that allows customers to build their own animation project plan according to their specific needs. When a customer clicks "Custom" instead of selecting a pre-defined tier (Essential/Pro/Enterprise), they enter this guided builder flow.

---

## Core Mechanics

### Pricing Logic
- **Step 1 (Animation Type):** Information only — NO price impact
- **Steps 2–8:** All pricing calculated from these selections
- **Running total** displays and updates in real-time

### Recommendation Engine
- Based on Step 1 selection, relevant options are **pre-selected** as recommendations
- User can **change** any recommendation
- User can **add** services not in the recommendation
- All selections remain fully editable throughout the flow

### Tooltips (? Icon)
- Every selection has a **? icon** that opens an info tooltip
- **Step 1 tooltips:** What it is + Ideal if + Real brand examples
- **All other tooltips:** What it is + Ideal if + Examples

---

## Step 1: Animation Type (Info Only)

*Question: "What kind of animation do you need?"*

**Price Impact:** None — informational only, triggers recommendations

| Option | Tooltip Content |
|--------|-----------------|
| Motion Graphics | **What it is:** Animated text, shapes, icons, and graphic elements in motion. **Ideal if:** You need animated logos, titles, social media content, or explainer visuals. **Examples:** YouTube intros, Instagram Reels graphics, animated infographics |
| Explainer Video | **What it is:** Animated video that explains a product, service, or concept. **Ideal if:** You want to simplify complex ideas and engage viewers with a narrative. **Examples:** Dropbox explainer, Slack product videos, startup pitch videos |
| Character Animation | **What it is:** Animated characters with personality, movement, and expression. **Ideal if:** You want storytelling with relatable figures or mascots. **Examples:** Duolingo owl, Headspace animations, Mailchimp mascot |
| Logo Animation | **What it is:** Your static logo brought to life with motion. **Ideal if:** You need an animated logo for video intros, websites, or presentations. **Examples:** Netflix "ta-dum," HBO intro, Pixar lamp |
| UI/UX Animation | **What it is:** Micro-interactions, transitions, and interface animations for apps/websites. **Ideal if:** You want to enhance user experience with polished, functional motion. **Examples:** Apple iOS interactions, Stripe checkout animations, Airbnb transitions |
| Social Media Content | **What it is:** Short, engaging animations optimized for social platforms. **Ideal if:** You need scroll-stopping content for Instagram, TikTok, LinkedIn, etc. **Examples:** Branded Reels, animated ads, story templates |
| Product/3D Animation | **What it is:** 3D renders and animations showcasing physical products. **Ideal if:** You want to highlight product features, launches, or demonstrate functionality. **Examples:** Apple product reveals, Nike shoe animations, tech gadget showcases |
| Presentation Animation | **What it is:** Animated slides, transitions, and visuals for presentations. **Ideal if:** You want to elevate pitches, keynotes, or corporate presentations. **Examples:** TED talk visuals, investor pitch decks, conference presentations |
| Other | **What it is:** Something unique or a combination of styles. **Ideal if:** Your project doesn't fit standard categories — we'll tailor recommendations. |

```javascript
const animationTypeOptions = [
  { id: "motion-graphics", label: "Motion Graphics" },
  { id: "explainer", label: "Explainer Video" },
  { id: "character", label: "Character Animation" },
  { id: "logo", label: "Logo Animation" },
  { id: "ui-ux", label: "UI/UX Animation" },
  { id: "social", label: "Social Media Content" },
  { id: "product-3d", label: "Product/3D Animation" },
  { id: "presentation", label: "Presentation Animation" },
  { id: "other", label: "Other" }
]
```

---

## Recommendation Presets (Based on Step 1)

When user selects an animation type, these options are **pre-selected** (but editable):

```javascript
const recommendationPresets = {
  "motion-graphics": {
    duration: "standard",
    style: "2d-modern",
    complexity: "standard",
    sound: "licensed-music",
    deliverables: ["mp4"],
    aspectRatios: "single"
  },
  "explainer": {
    duration: "extended",
    style: "2d-flat",
    complexity: "standard",
    sound: "voiceover-source",
    addOns: ["storyboard-basic", "script-full"],
    deliverables: ["mp4"],
    aspectRatios: "single"
  },
  "character": {
    duration: "standard",
    style: "2d-illustrated",
    complexity: "complex",
    sound: "voiceover-source",
    addOns: ["character-standard", "storyboard-detailed"],
    deliverables: ["mp4"],
    aspectRatios: "single"
  },
  "logo": {
    duration: "micro",
    style: "2d-modern",
    complexity: "simple",
    sound: "sfx",
    deliverables: ["mp4", "gif"],
    aspectRatios: "single"
  },
  "ui-ux": {
    duration: "micro",
    style: "2d-flat",
    complexity: "standard",
    sound: "none",
    deliverables: ["lottie"],
    aspectRatios: "single"
  },
  "social": {
    duration: "short",
    style: "2d-modern",
    complexity: "simple",
    sound: "licensed-music",
    deliverables: ["mp4"],
    aspectRatios: "full-package"
  },
  "product-3d": {
    duration: "standard",
    style: "3d-render",
    complexity: "complex",
    sound: "licensed-music",
    deliverables: ["mp4", "mov"],
    aspectRatios: "single"
  },
  "presentation": {
    duration: "short",
    style: "2d-flat",
    complexity: "simple",
    sound: "none",
    deliverables: ["mp4"],
    aspectRatios: "single"
  },
  "other": {
    duration: "standard",
    style: "2d-flat",
    complexity: "simple",
    sound: "none",
    deliverables: ["mp4"],
    aspectRatios: "single"
  }
}
```

---

## Step 2: Animation Duration

*Question: "How long does your animation need to be?"*

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| Micro (1–5 seconds) | $75 | **What it is:** Ultra-short animations like logo stings, loading states, or UI micro-interactions. **Ideal if:** You need quick, loopable, or functional motion. **Examples:** Logo reveals, button animations, loading spinners |
| Short (6–15 seconds) | $150 | **What it is:** Brief animations for social clips, ads, or quick messaging. **Ideal if:** You need punchy content that grabs attention fast. **Examples:** Instagram stories, pre-roll ads, GIFs |
| Standard (16–30 seconds) | $250 | **What it is:** Standard length for most social and marketing animations. **Ideal if:** You need enough time to convey a message with visuals. **Examples:** Social media ads, product teasers, animated announcements |
| Extended (31–60 seconds) | $400 | **What it is:** Longer format for storytelling, demonstrations, or detailed explanations. **Ideal if:** You need more time to explain or engage. **Examples:** Short explainers, product walkthroughs, testimonial animations |
| Long (1–2 minutes) | $650 | **What it is:** Full short-form content for deeper storytelling or comprehensive explainers. **Ideal if:** You have a complex message or narrative to share. **Examples:** Explainer videos, brand stories, tutorial animations |
| Extended Long (2–3 minutes) | $900 | **What it is:** Longer-form animated content for detailed explanations or storytelling. **Ideal if:** You need thorough coverage of a topic or longer narratives. **Examples:** In-depth explainers, training videos, product deep-dives |
| Long-form (3+ minutes) | Custom quote | **What it is:** Full-length animated content. **Ideal if:** You're creating substantial educational, narrative, or promotional content. **Examples:** Animated shorts, course content, documentary-style explainers |

```javascript
const durationOptions = [
  { id: "micro", label: "Micro (1–5 seconds)", price: 75 },
  { id: "short", label: "Short (6–15 seconds)", price: 150 },
  { id: "standard", label: "Standard (16–30 seconds)", price: 250 },
  { id: "extended", label: "Extended (31–60 seconds)", price: 400 },
  { id: "long", label: "Long (1–2 minutes)", price: 650 },
  { id: "extended-long", label: "Extended Long (2–3 minutes)", price: 900 },
  { id: "long-form", label: "Long-form (3+ minutes)", price: null, customQuote: true }
]
```

---

## Step 3: Animation Style

*Question: "What visual style fits your brand?"*

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| 2D Flat / Minimal | $100 | **What it is:** Clean, simple shapes with flat colors and minimal detail. **Ideal if:** You want modern, professional visuals that load fast and scale well. **Examples:** Google animations, Slack, Asana |
| 2D Illustrated | $200 | **What it is:** Hand-drawn or illustrated look with more character and detail. **Ideal if:** You want warmth, personality, and artistic flair. **Examples:** Headspace, Mailchimp, Dropbox |
| 2D Modern / Dynamic | $175 | **What it is:** Bold, energetic motion with contemporary design trends. **Ideal if:** You want eye-catching, trendy visuals that pop. **Examples:** Spotify Wrapped, Apple keynotes, fitness apps |
| Isometric | $225 | **What it is:** 3D-like perspective using 2D techniques, geometric and clean. **Ideal if:** You want technical or product-focused visuals with depth. **Examples:** Pitch decks, SaaS explainers, tech products |
| 3D Render | $400+ | **What it is:** Full 3D modeling and animation with realistic or stylized rendering. **Ideal if:** You need product visualization, immersive experiences, or premium quality. **Examples:** Apple product videos, car commercials, Nike |
| 3D Stylized | $350+ | **What it is:** 3D with artistic, non-realistic style (cartoon, low-poly, abstract). **Ideal if:** You want 3D depth with unique creative direction. **Examples:** Pixar-style, game cinematics, playful brand content |
| Mixed Media | $300+ | **What it is:** Combination of animation with live footage, photos, or multiple styles. **Ideal if:** You want a unique, hybrid look that stands out. **Examples:** Music videos, documentary-style, collage aesthetics |
| Custom / Bespoke | Custom quote | **What it is:** Completely custom visual style developed for your brand. **Ideal if:** You want a signature look no one else has. **Examples:** Unique brand identities, award-show visuals, premium campaigns |

```javascript
const styleOptions = [
  { id: "2d-flat", label: "2D Flat / Minimal", price: 100 },
  { id: "2d-illustrated", label: "2D Illustrated", price: 200 },
  { id: "2d-modern", label: "2D Modern / Dynamic", price: 175 },
  { id: "isometric", label: "Isometric", price: 225 },
  { id: "3d-render", label: "3D Render", price: 400, startsAt: true },
  { id: "3d-stylized", label: "3D Stylized", price: 350, startsAt: true },
  { id: "mixed-media", label: "Mixed Media", price: 300, startsAt: true },
  { id: "custom", label: "Custom / Bespoke", price: null, customQuote: true }
]
```

---

## Step 4: Complexity Level

*Question: "How detailed does the animation need to be?"*

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| Simple | $100 | **What it is:** Basic motion — fades, slides, simple transforms, minimal elements on screen. **Ideal if:** You need clean, straightforward animation without complexity. **Examples:** Text animations, logo reveals, simple icons |
| Standard | $225 | **What it is:** Moderate motion — multiple elements, coordinated timing, smooth transitions. **Ideal if:** You want polished, professional animation with visual interest. **Examples:** Most social content, product features, standard explainers |
| Complex | $400 | **What it is:** Detailed animation — many elements, intricate timing, advanced effects. **Ideal if:** You need rich, dynamic visuals that impress. **Examples:** Character animation, detailed product demos, multi-scene stories |
| Premium | $600+ | **What it is:** High-end animation — cinematic quality, advanced techniques, meticulous detail. **Ideal if:** Quality is paramount and the animation represents your brand at the highest level. **Examples:** TV commercials, brand films, award-worthy content |

```javascript
const complexityOptions = [
  { id: "simple", label: "Simple", price: 100 },
  { id: "standard", label: "Standard", price: 225 },
  { id: "complex", label: "Complex", price: 400 },
  { id: "premium", label: "Premium", price: 600, startsAt: true }
]
```

---

## Step 5: Sound & Audio

*Question: "What audio do you need with your animation?"*

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| None | $0 | **What it is:** Silent animation, no audio track. **Ideal if:** Audio will be added separately, or it's for muted autoplay (social feeds). **Examples:** Website UI animations, muted social posts, GIFs |
| Sound Effects Only | $75 | **What it is:** Spot effects synced to motion — whooshes, clicks, pops, impacts. **Ideal if:** You want audio feedback without music or voice. **Examples:** Logo stings, UI interactions, app animations |
| Licensed Music | $100 | **What it is:** Background music from royalty-free libraries, properly licensed. **Ideal if:** You need a soundtrack without custom composition. **Examples:** Most social content, YouTube videos, presentations |
| Custom Music / Score | $300+ | **What it is:** Original music composed specifically for your animation. **Ideal if:** You want a unique audio identity or need something perfectly timed. **Examples:** Brand anthems, premium commercials, signature intros |
| Voiceover (Client Provides) | $50 | **What it is:** We sync and edit animation to voiceover you provide. **Ideal if:** You have existing VO or will record it separately. **Examples:** Explainers with your team's voice, existing recordings |
| Voiceover (We Source) | $150+ | **What it is:** Professional voiceover artist sourced, directed, and synced. **Ideal if:** You need quality VO but don't have a source. **Examples:** Explainer videos, narrated content, professional presentations |
| Full Audio Package | $400+ | **What it is:** Voiceover + music + sound effects, fully produced. **Ideal if:** You want turnkey audio that elevates the entire piece. **Examples:** Commercial-quality explainers, brand films, launch videos |

```javascript
const soundOptions = [
  { id: "none", label: "None", price: 0 },
  { id: "sfx", label: "Sound Effects Only", price: 75 },
  { id: "licensed-music", label: "Licensed Music", price: 100 },
  { id: "custom-music", label: "Custom Music / Score", price: 300, startsAt: true },
  { id: "voiceover-client", label: "Voiceover (Client Provides)", price: 50 },
  { id: "voiceover-source", label: "Voiceover (We Source)", price: 150, startsAt: true },
  { id: "full-audio", label: "Full Audio Package", price: 400, startsAt: true }
]
```

---

## Step 6: Add-on Services

*Question: "Select any additional services you need."*

Each add-on can be **selected/deselected** and has **tiered options** where applicable.

---

### Scriptwriting

**Default:** Not selected (unless recommended)

| Option | Price | Tooltip |
|--------|-------|---------|
| Basic Script | $100 | **What it is:** Simple script for straightforward messaging (up to 150 words). **Ideal if:** You have the core message but need it polished for animation. **Examples:** Short social videos, simple explainers |
| Full Script | $200+ | **What it is:** Complete script with narrative structure, hooks, and CTA (150–500 words). **Ideal if:** You need a compelling story written from scratch. **Examples:** Explainer videos, brand stories, pitch videos |

```javascript
const scriptOptions = [
  { id: "basic", label: "Basic Script", price: 100, description: "Up to 150 words" },
  { id: "full", label: "Full Script", price: 200, description: "150–500 words", startsAt: true }
]
```

---

### Storyboarding

**Default:** Not selected (unless recommended)

| Option | Price | Tooltip |
|--------|-------|---------|
| Basic Storyboard | $75 | **What it is:** Simple scene sketches showing key frames and flow. **Ideal if:** You want to visualize the animation before production. **Examples:** Quick approval reference, internal alignment |
| Detailed Storyboard | $175 | **What it is:** Comprehensive visual breakdown with notes on timing, transitions, and direction. **Ideal if:** You need thorough pre-visualization for complex animations. **Examples:** Explainer videos, character pieces, client presentations |

```javascript
const storyboardOptions = [
  { id: "basic", label: "Basic Storyboard", price: 75, description: "Key frames and flow" },
  { id: "detailed", label: "Detailed Storyboard", price: 175, description: "Full breakdown with notes" }
]
```

---

### Character Design

**Default:** Not selected (unless recommended)

| Option | Price | Tooltip |
|--------|-------|---------|
| Simple Character | $150 | **What it is:** Basic character design — simple shapes, limited detail, 1 character. **Ideal if:** You need a mascot or figure without complex features. **Examples:** Icon-style characters, simple explainer figures |
| Standard Character | $300 | **What it is:** Detailed character with personality, expressions, and full design (1–2 characters). **Ideal if:** You want a memorable character that represents your brand. **Examples:** Duolingo owl, Headspace characters |
| Character System | $500+ | **What it is:** Multiple characters or a character with full expression/pose library. **Ideal if:** You need characters for ongoing content or varied scenarios. **Examples:** Animated series, extensive brand campaigns |

```javascript
const characterOptions = [
  { id: "simple", label: "Simple Character", price: 150, description: "1 basic character" },
  { id: "standard", label: "Standard Character", price: 300, description: "1–2 detailed characters" },
  { id: "system", label: "Character System", price: 500, description: "Multiple or full library", startsAt: true }
]
```

---

### Illustration / Asset Creation

**Default:** Not selected

| Option | Price | Tooltip |
|--------|-------|---------|
| Basic Assets | $75 | **What it is:** Simple icons, shapes, and graphic elements for the animation. **Ideal if:** You need supporting visuals beyond text and basic shapes. **Examples:** Icon sets, simple backgrounds |
| Custom Illustrations | $200+ | **What it is:** Original illustrated scenes, backgrounds, or detailed visual elements. **Ideal if:** You want unique artwork that elevates the animation. **Examples:** Scene backgrounds, detailed environments, custom graphics |

```javascript
const illustrationOptions = [
  { id: "basic", label: "Basic Assets", price: 75, description: "Icons and simple elements" },
  { id: "custom", label: "Custom Illustrations", price: 200, description: "Original artwork", startsAt: true }
]
```

---

### Revisions Package

**Default:** Standard (2 rounds) — Included

| Option | Price | Tooltip |
|--------|-------|---------|
| Standard (2 rounds) | Included | **What it is:** Two rounds of revisions included with your project. **Ideal if:** Most projects — covers typical feedback cycles. |
| Extended (4 rounds) | +$100 | **What it is:** Four rounds of revisions for more iteration. **Ideal if:** You have multiple stakeholders or expect more feedback cycles. **Examples:** Committee approvals, brand guidelines reviews |
| Unlimited Revisions | +$250 | **What it is:** Unlimited revision rounds until you're satisfied. **Ideal if:** You need flexibility and aren't sure how many iterations you'll need. **Examples:** High-stakes content, perfectionist clients |

```javascript
const revisionOptions = [
  { id: "standard", label: "Standard (2 rounds)", price: 0, included: true },
  { id: "extended", label: "Extended (4 rounds)", price: 100 },
  { id: "unlimited", label: "Unlimited Revisions", price: 250 }
]
```

---

## Step 7: Deliverables & Formats

*Question: "What file formats do you need?"*

---

### Video Formats

**Default:** MP4 (Standard) — Included

| Option | Price | Tooltip |
|--------|-------|---------|
| MP4 (Standard) | Included | **What it is:** Universal video format, works everywhere. **Ideal if:** You need one format that plays on any platform. **Examples:** Social media, websites, presentations |
| Multiple Formats (MP4, MOV, WebM) | +$50 | **What it is:** Multiple video formats for different platforms and uses. **Ideal if:** You're distributing across various channels with different requirements. **Examples:** Web (WebM), Apple (MOV), general (MP4) |
| GIF | +$50 | **What it is:** Animated GIF for lightweight, looping animations. **Ideal if:** You need embeddable animation for emails, websites, or messaging. **Examples:** Email signatures, Slack reactions, blog embeds |
| Lottie (JSON) | +$100 | **What it is:** Lightweight, scalable animation format for web and apps. **Ideal if:** You need animations integrated into websites or mobile apps. **Examples:** App micro-interactions, website animations, UI elements |

```javascript
const videoFormatOptions = [
  { id: "mp4", label: "MP4 (Standard)", price: 0, included: true },
  { id: "multiple", label: "Multiple Formats (MP4, MOV, WebM)", price: 50 },
  { id: "gif", label: "GIF", price: 50 },
  { id: "lottie", label: "Lottie (JSON)", price: 100 }
]
```

---

### Aspect Ratios

**Default:** Single Ratio — Included

| Option | Price | Tooltip |
|--------|-------|---------|
| Single Ratio | Included | **What it is:** One aspect ratio (16:9, 9:16, or 1:1). **Ideal if:** You know exactly where this will be used. **Examples:** YouTube (16:9), Stories (9:16), Feed (1:1) |
| Two Ratios | +$75 | **What it is:** Same animation adapted for two aspect ratios. **Ideal if:** You're posting to different platforms with different specs. **Examples:** YouTube + Instagram Stories |
| Full Package (16:9, 9:16, 1:1) | +$150 | **What it is:** Animation adapted for all major aspect ratios. **Ideal if:** You want maximum platform coverage from one animation. **Examples:** Full social distribution, multi-platform campaigns |

```javascript
const aspectRatioOptions = [
  { id: "single", label: "Single Ratio", price: 0, included: true },
  { id: "two", label: "Two Ratios", price: 75 },
  { id: "full-package", label: "Full Package (16:9, 9:16, 1:1)", price: 150 }
]
```

---

### Source Files

**Default:** Final Files Only — Included

| Option | Price | Tooltip |
|--------|-------|---------|
| Final Files Only | Included | **What it is:** Rendered video files, ready to use. **Ideal if:** You just need the finished product. |
| Source Files Included | +$100 | **What it is:** Original project files (After Effects, Blender, etc.). **Ideal if:** You want to make future edits or have an in-house team continue the work. **Examples:** Ongoing campaigns, template usage |

```javascript
const sourceFileOptions = [
  { id: "final", label: "Final Files Only", price: 0, included: true },
  { id: "source", label: "Source Files Included", price: 100 }
]
```

---

## Step 8: Timeline

*Question: "When do you need this completed?"*

**Default:** Standard (2–3 weeks)

| Option | Price Impact | Tooltip |
|--------|--------------|---------|
| Flexible | +0% | **What it is:** We schedule based on current workload. **Ideal if:** You have no hard deadline. Typically 2–4 weeks depending on scope. |
| Standard (2–3 weeks) | +0% | **What it is:** Normal production timeline for most animations. **Ideal if:** You have a reasonable deadline and want quality work. |
| Expedited (1–2 weeks) | +25% | **What it is:** Accelerated production with priority scheduling. **Ideal if:** You have a firm deadline coming up soon. |
| Rush (Under 1 week) | +50% | **What it is:** Rush delivery with dedicated resources. **Ideal if:** You need it ASAP. Subject to availability and scope limitations. |

```javascript
const timelineOptions = [
  { id: "flexible", label: "Flexible", multiplier: 1.0 },
  { id: "standard", label: "Standard (2–3 weeks)", multiplier: 1.0 },
  { id: "expedited", label: "Expedited (1–2 weeks)", multiplier: 1.25 },
  { id: "rush", label: "Rush (Under 1 week)", multiplier: 1.50 }
]
```

---

## Summary Screen

### UI Elements

1. **Selection Summary Table**
   - Lists each selection with chosen option and price
   - Shows included items (revisions, MP4, single ratio)
   - Editable — clicking any row returns to that step

2. **Price Calculation Display**
   ```
   YOUR CUSTOM ANIMATION PLAN
   ────────────────────────────────────────

   Duration                    Standard (16–30s)           $250
   Style                       2D Illustrated              $200
   Complexity                  Standard                    $225
   Sound                       Licensed Music              $100
   Voiceover                   We Source                   $150
   Storyboard                  Basic                       $75
   Formats                     MP4 + GIF                   $50
   Aspect Ratios               Two Ratios (16:9, 9:16)     $75
   Timeline                    Expedited (1–2 weeks)       +25%

   ────────────────────────────────────────
   Subtotal                                                $1,125
   Rush Fee (25%)                                          $281.25
   ────────────────────────────────────────
   TOTAL                                                   $1,406.25

   Includes: 2 revision rounds, MP4 format, source files not included

   [ Adjust Plan ]                      [ Generate Quote ]
   ```

3. **Action Buttons**
   - [ Adjust Plan ] — Returns to builder flow
   - [ **Generate Quote** ] — Opens quote request form

4. **Disclaimer Text**
   *"This is an estimate based on your selections. Final pricing may vary based on project specifics. We'll confirm everything before starting."*

---

## Quote Request Form

| Field | Type | Required |
|-------|------|----------|
| Full Name | Text | Yes |
| Email | Email | Yes |
| Company / Brand | Text | No |
| Phone | Tel | No |
| Project Notes | Textarea | No |

---

## Confirmation Screen

```
✓ Quote Request Submitted

Thanks, [Name]! We've received your custom animation plan.

What's next:
• We'll review your selections within 24–48 hours
• You'll receive a detailed proposal via email
• We'll schedule a kickoff call to discuss creative direction

Your Reference: #ANIM-[timestamp]
```

---

## Data Models

### Builder State

```javascript
const builderState = {
  // Step 1
  animationType: "explainer", // info only, no price
  
  // Step 2
  duration: {
    selected: "extended",
    price: 400
  },
  
  // Step 3
  style: {
    selected: "2d-illustrated",
    price: 200
  },
  
  // Step 4
  complexity: {
    selected: "standard",
    price: 225
  },
  
  // Step 5
  sound: {
    selected: "voiceover-source",
    price: 150
  },
  
  // Step 6 - Add-ons
  addOns: [
    { id: "script", option: "full", price: 200 },
    { id: "storyboard", option: "basic", price: 75 },
    { id: "revisions", option: "standard", price: 0 }
  ],
  
  // Step 7 - Deliverables
  deliverables: {
    videoFormats: [
      { id: "mp4", price: 0 },
      { id: "gif", price: 50 }
    ],
    aspectRatios: { selected: "two", price: 75 },
    sourceFiles: { selected: "final", price: 0 }
  },
  
  // Step 8
  timeline: {
    selected: "expedited",
    multiplier: 1.25
  },
  
  // Calculated
  subtotal: 1375,
  rushFee: 343.75,
  total: 1718.75,
  hasCustomQuote: false,
  
  // Customer Info
  customer: {
    name: "",
    email: "",
    company: "",
    phone: "",
    notes: ""
  }
}
```

### Price Calculation Logic

```javascript
function calculateTotal(state) {
  let subtotal = 0;
  let hasCustomQuote = false;
  
  // Duration
  if (state.duration.price === null) {
    hasCustomQuote = true;
  } else {
    subtotal += state.duration.price;
  }
  
  // Style
  if (state.style.price === null) {
    hasCustomQuote = true;
  } else {
    subtotal += state.style.price;
  }
  
  // Complexity
  if (state.complexity.price === null) {
    hasCustomQuote = true;
  } else {
    subtotal += state.complexity.price;
  }
  
  // Sound
  subtotal += state.sound.price;
  
  // Add-ons
  state.addOns.forEach(addon => {
    if (addon.price === null) {
      hasCustomQuote = true;
    } else {
      subtotal += addon.price;
    }
  });
  
  // Deliverables - Video Formats
  state.deliverables.videoFormats.forEach(format => {
    subtotal += format.price;
  });
  
  // Deliverables - Aspect Ratios
  subtotal += state.deliverables.aspectRatios.price;
  
  // Deliverables - Source Files
  subtotal += state.deliverables.sourceFiles.price;
  
  // Timeline multiplier
  const multiplier = state.timeline.multiplier;
  const rushFee = subtotal * (multiplier - 1);
  const total = subtotal * multiplier;
  
  return {
    subtotal: subtotal,
    rushFee: rushFee,
    total: total,
    hasCustomQuote: hasCustomQuote
  };
}
```

---

## UI/UX Guidelines

### Progress Indicator
- Show steps as horizontal progress bar or numbered stepper
- Highlight current step
- Allow clicking previous steps to go back
- Show checkmarks on completed steps

### Tooltip Behavior
- **? icon** next to each option label
- Click/tap to open tooltip modal or popover
- Tooltip closes on outside click or X button
- Mobile: full-width bottom sheet

### Add-on Selection UI
- Checkbox to enable/disable add-on
- When enabled, show tier options as radio buttons
- Grayed out options when add-on is disabled
- Show price next to each option

### Deliverables UI
- Video formats: Multi-select checkboxes (MP4 always checked by default)
- Aspect ratios: Single-select radio buttons
- Source files: Single-select radio buttons

### Real-time Price Update
- Sticky footer or sidebar showing running total
- Animates when price changes
- Shows "Custom quote required" badge if any selection triggers it

### Mobile Considerations
- Single column layout
- Collapsible sections for add-ons and deliverables
- Bottom sheet for tooltips
- Sticky CTA button at bottom
- Swipe navigation between steps

---

## Price Summary Tables

### Quick Reference - Core Options

| Category | Option | Price |
|----------|--------|-------|
| **Duration** | Micro (1–5s) | $75 |
| | Short (6–15s) | $150 |
| | Standard (16–30s) | $250 |
| | Extended (31–60s) | $400 |
| | Long (1–2 min) | $650 |
| | Extended Long (2–3 min) | $900 |
| | Long-form (3+ min) | Custom |
| **Style** | 2D Flat/Minimal | $100 |
| | 2D Modern/Dynamic | $175 |
| | 2D Illustrated | $200 |
| | Isometric | $225 |
| | Mixed Media | $300+ |
| | 3D Stylized | $350+ |
| | 3D Render | $400+ |
| | Custom/Bespoke | Custom |
| **Complexity** | Simple | $100 |
| | Standard | $225 |
| | Complex | $400 |
| | Premium | $600+ |
| **Sound** | None | $0 |
| | Sound Effects | $75 |
| | Licensed Music | $100 |
| | Voiceover (Client) | $50 |
| | Voiceover (Sourced) | $150+ |
| | Custom Music | $300+ |
| | Full Audio Package | $400+ |

### Quick Reference - Add-ons

| Add-on | Basic | Standard/Full | Premium |
|--------|-------|---------------|---------|
| Scriptwriting | $100 | $200+ | — |
| Storyboarding | $75 | $175 | — |
| Character Design | $150 | $300 | $500+ |
| Illustration | $75 | $200+ | — |
| Revisions | Included | $100 | $250 |

### Quick Reference - Deliverables

| Deliverable | Price |
|-------------|-------|
| MP4 | Included |
| Multiple Formats | +$50 |
| GIF | +$50 |
| Lottie | +$100 |
| Single Aspect Ratio | Included |
| Two Aspect Ratios | +$75 |
| Full Aspect Package | +$150 |
| Source Files | +$100 |

### Quick Reference - Timeline

| Timeline | Multiplier |
|----------|------------|
| Flexible | +0% |
| Standard (2–3 weeks) | +0% |
| Expedited (1–2 weeks) | +25% |
| Rush (Under 1 week) | +50% |

---

## Price Examples

### Example 1: Simple Logo Animation

| Selection | Option | Price |
|-----------|--------|-------|
| Duration | Micro (1–5s) | $75 |
| Style | 2D Flat/Minimal | $100 |
| Complexity | Simple | $100 |
| Sound | Sound Effects Only | $75 |
| Formats | MP4 + GIF | $50 |
| Timeline | Standard | +0% |

**Total: $400**

---

### Example 2: Social Media Explainer

| Selection | Option | Price |
|-----------|--------|-------|
| Duration | Standard (16–30s) | $250 |
| Style | 2D Modern/Dynamic | $175 |
| Complexity | Standard | $225 |
| Sound | Licensed Music | $100 |
| Scriptwriting | Basic | $100 |
| Storyboard | Basic | $75 |
| Formats | MP4 | Included |
| Aspect Ratios | Full Package | $150 |
| Timeline | Standard | +0% |

**Total: $1,075**

---

### Example 3: Premium Explainer with Character

| Selection | Option | Price |
|-----------|--------|-------|
| Duration | Long (1–2 min) | $650 |
| Style | 2D Illustrated | $200 |
| Complexity | Complex | $400 |
| Sound | Full Audio Package | $400 |
| Scriptwriting | Full Script | $200 |
| Storyboard | Detailed | $175 |
| Character Design | Standard | $300 |
| Formats | MP4, MOV, WebM | $50 |
| Source Files | Included | $100 |
| Revisions | Extended | $100 |
| Timeline | Expedited | +25% |

**Subtotal: $2,575**
**Rush Fee (25%): $643.75**
**Total: $3,218.75**

---

### Example 4: UI/UX Animation Package

| Selection | Option | Price |
|-----------|--------|-------|
| Duration | Micro (1–5s) | $75 |
| Style | 2D Flat/Minimal | $100 |
| Complexity | Standard | $225 |
| Sound | None | $0 |
| Formats | Lottie | $100 |
| Timeline | Standard | +0% |

**Total: $500**

---

## Integration Notes

- This custom builder lives alongside the standard tier selection (Essential/Pro/Enterprise)
- Customer can switch between "Choose a Package" and "Build Custom" views
- If custom total is close to a tier price, optionally suggest the tier as simpler option
- All data structures are API-ready for future backend integration
- Animation type recommendations should guide users toward appropriate selections
- Consider showing "Popular for [Animation Type]" badges on recommended options
