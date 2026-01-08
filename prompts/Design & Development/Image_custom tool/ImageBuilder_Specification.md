# Image Custom Builder - Feature Specification

## Overview

The Image Custom Builder is an interactive step-by-step configurator that allows customers to build their own image project plan according to their specific needs. When a customer clicks "Custom" instead of selecting a pre-defined tier (Essential/Pro/Enterprise), they enter this guided builder flow.

---

## Core Mechanics

### Pricing Logic
- **Step 1 (Image Type):** Information only — NO price impact
- **Steps 2–8:** All pricing calculated from these selections
- **Running total** displays and updates in real-time

### Recommendation Engine
- Based on Step 1 selection, relevant options are **pre-selected** as recommendations
- User can **change** any recommendation
- User can **add** features not in the recommendation
- All selections remain fully editable throughout the flow

### Tooltips (? Icon)
- Every selection has a **? icon** that opens an info tooltip
- **Step 1 tooltips:** What it is + Ideal if + Real brand examples
- **All other tooltips:** What it is + Ideal if + Examples

---

## Step 1: Image Type (Info Only)

*Question: "What kind of images do you need?"*

**Price Impact:** None — informational only, triggers recommendations

| Option | Tooltip Content |
|--------|-----------------|
| Product Photography | **What it is:** Professional images showcasing physical products for e-commerce, catalogs, or marketing. **Ideal if:** You sell products online and need high-quality visuals that convert. **Examples:** Amazon listings, Shopify stores, product catalogs |
| Social Media Graphics | **What it is:** Custom-designed images optimized for social platforms. **Ideal if:** You need scroll-stopping content for Instagram, LinkedIn, Facebook, etc. **Examples:** Instagram posts, LinkedIn banners, Facebook ads |
| Marketing & Ads | **What it is:** Designed visuals for advertising campaigns across digital and print. **Ideal if:** You're running paid campaigns or need promotional materials. **Examples:** Google display ads, banner ads, flyers, billboards |
| Brand Imagery | **What it is:** Cohesive visual content that represents your brand identity. **Ideal if:** You need consistent imagery across all touchpoints. **Examples:** Website hero images, brand photography, lifestyle shots |
| AI-Generated Images | **What it is:** Custom images created using AI tools like Midjourney, DALL-E, or Stable Diffusion. **Ideal if:** You need unique visuals quickly without traditional photography or illustration. **Examples:** Conceptual art, blog imagery, creative backgrounds |
| Illustrations | **What it is:** Hand-drawn or digitally illustrated custom artwork. **Ideal if:** You want a unique artistic style that photography can't achieve. **Examples:** Editorial illustrations, icon sets, infographics, children's content |
| Photo Editing / Retouching | **What it is:** Enhancement, manipulation, or restoration of existing photos. **Ideal if:** You have photos that need professional editing, cleanup, or compositing. **Examples:** Headshot retouching, background removal, color correction |
| Infographics | **What it is:** Visual representations of data, processes, or information. **Ideal if:** You need to communicate complex information in an engaging, digestible format. **Examples:** Data visualizations, process diagrams, comparison charts |
| Thumbnails & Covers | **What it is:** Eye-catching images for video thumbnails, podcast covers, or book covers. **Ideal if:** You need click-worthy visuals for content platforms. **Examples:** YouTube thumbnails, Spotify podcast covers, eBook covers |
| Other | **What it is:** Something unique or a combination of styles. **Ideal if:** Your project doesn't fit standard categories — we'll tailor recommendations. |

```javascript
const imageTypeOptions = [
  { id: "product", label: "Product Photography" },
  { id: "social", label: "Social Media Graphics" },
  { id: "marketing", label: "Marketing & Ads" },
  { id: "brand", label: "Brand Imagery" },
  { id: "ai-generated", label: "AI-Generated Images" },
  { id: "illustrations", label: "Illustrations" },
  { id: "editing", label: "Photo Editing / Retouching" },
  { id: "infographics", label: "Infographics" },
  { id: "thumbnails", label: "Thumbnails & Covers" },
  { id: "other", label: "Other" }
]
```

---

## Recommendation Presets (Based on Step 1)

When user selects an image type, these options are **pre-selected** (but editable):

```javascript
const recommendationPresets = {
  "product": {
    quantity: "6-10",
    style: "clean",
    creation: "stock",
    editing: "standard",
    background: "solid",
    overlay: "none",
    sizes: "single",
    formats: "all"
  },
  "social": {
    quantity: "6-10",
    style: "bold",
    creation: "design",
    editing: "standard",
    background: "natural",
    overlay: "simple-text",
    sizes: "full",
    formats: "web"
  },
  "marketing": {
    quantity: "3-5",
    style: "branded",
    creation: "design",
    editing: "advanced",
    background: "natural",
    overlay: "designed",
    sizes: "multiple",
    formats: "all"
  },
  "brand": {
    quantity: "6-10",
    style: "lifestyle",
    creation: "photography",
    editing: "advanced",
    background: "natural",
    overlay: "none",
    sizes: "multiple",
    formats: "all",
    source: "source"
  },
  "ai-generated": {
    quantity: "6-10",
    style: "abstract",
    creation: "ai",
    editing: "basic",
    background: "natural",
    overlay: "none",
    sizes: "single",
    formats: "web"
  },
  "illustrations": {
    quantity: "3-5",
    style: "editorial",
    creation: "illustration",
    editing: "standard",
    background: "transparent",
    overlay: "none",
    sizes: "single",
    formats: "all",
    source: "source"
  },
  "editing": {
    quantity: "6-10",
    style: "clean",
    creation: "stock",
    editing: "advanced",
    background: "natural",
    overlay: "none",
    sizes: "single",
    formats: "web"
  },
  "infographics": {
    quantity: "1-2",
    style: "branded",
    creation: "design",
    editing: "standard",
    background: "solid",
    overlay: "designed",
    sizes: "multiple",
    formats: "all",
    source: "source"
  },
  "thumbnails": {
    quantity: "3-5",
    style: "bold",
    creation: "design",
    editing: "standard",
    background: "natural",
    overlay: "simple-text",
    sizes: "single",
    formats: "web"
  },
  "other": {
    quantity: "3-5",
    style: "clean",
    creation: "design",
    editing: "standard",
    background: "natural",
    overlay: "none",
    sizes: "single",
    formats: "web"
  }
}
```

---

## Step 2: Image Quantity

*Question: "How many images do you need?"*

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| 1–2 images | $75 | **What it is:** A small batch for focused needs. **Ideal if:** You need a hero image, single graphic, or quick turnaround on limited scope. **Examples:** One website banner, single social post, one infographic |
| 3–5 images | $150 | **What it is:** A small set covering basic needs. **Ideal if:** You need a few variations or a mini content package. **Examples:** Small ad set, a few product shots, social media starter pack |
| 6–10 images | $275 | **What it is:** A standard package for most projects. **Ideal if:** You need variety and coverage across multiple uses. **Examples:** Product line photos, social media content batch, marketing campaign |
| 11–20 images | $450 | **What it is:** A comprehensive package for larger needs. **Ideal if:** You're building a content library or need extensive coverage. **Examples:** Full product catalog, content calendar, brand photo library |
| 21–30 images | $600 | **What it is:** Large-scale image production. **Ideal if:** You have significant visual needs across platforms. **Examples:** E-commerce store launch, extensive campaign, full website imagery |
| 30+ images | Custom quote | **What it is:** Enterprise-level image production. **Ideal if:** You need a massive content library or ongoing visual support. **Examples:** Large catalogs, franchise assets, media libraries |

```javascript
const quantityOptions = [
  { id: "1-2", label: "1–2 images", price: 75 },
  { id: "3-5", label: "3–5 images", price: 150 },
  { id: "6-10", label: "6–10 images", price: 275 },
  { id: "11-20", label: "11–20 images", price: 450 },
  { id: "21-30", label: "21–30 images", price: 600 },
  { id: "30+", label: "30+ images", price: null, customQuote: true }
]
```

---

## Step 3: Image Style / Aesthetic

*Question: "What visual style fits your project?"*

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| Clean / Minimal | $50 | **What it is:** Simple, uncluttered visuals with focus on the subject. **Ideal if:** You want professional, distraction-free imagery. **Examples:** Apple product shots, minimalist brands, corporate content |
| Bold / Vibrant | $75 | **What it is:** High-contrast, colorful, attention-grabbing visuals. **Ideal if:** You want to stand out and make an impact. **Examples:** Fitness brands, food photography, entertainment content |
| Lifestyle / Contextual | $100 | **What it is:** Images showing products or concepts in real-world settings. **Ideal if:** You want relatable, aspirational imagery that tells a story. **Examples:** Airbnb, fashion lookbooks, home goods |
| Branded / On-brand | $100 | **What it is:** Visuals designed to match your existing brand guidelines. **Ideal if:** You need consistency with your established visual identity. **Examples:** Corporate marketing, franchise materials |
| Editorial / Artistic | $150 | **What it is:** Creative, magazine-quality imagery with artistic direction. **Ideal if:** You want premium, story-driven visuals. **Examples:** Fashion editorials, luxury brands, thought leadership |
| Abstract / Conceptual | $125 | **What it is:** Non-literal visuals representing ideas, emotions, or concepts. **Ideal if:** You need creative imagery for abstract topics. **Examples:** Tech companies, mental health, innovation themes |
| Custom Style | Custom quote | **What it is:** A completely unique visual style developed for your project. **Ideal if:** You want something no one else has. **Examples:** Signature brand aesthetic, art direction from scratch |

```javascript
const styleOptions = [
  { id: "clean", label: "Clean / Minimal", price: 50 },
  { id: "bold", label: "Bold / Vibrant", price: 75 },
  { id: "lifestyle", label: "Lifestyle / Contextual", price: 100 },
  { id: "branded", label: "Branded / On-brand", price: 100 },
  { id: "editorial", label: "Editorial / Artistic", price: 150 },
  { id: "abstract", label: "Abstract / Conceptual", price: 125 },
  { id: "custom", label: "Custom Style", price: null, customQuote: true }
]
```

---

## Step 4: Creation Method

*Question: "How should the images be created?"*

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| AI-Generated | $75 | **What it is:** Images created using AI tools (Midjourney, DALL-E, Stable Diffusion). **Ideal if:** You need unique visuals quickly and cost-effectively. **Examples:** Blog imagery, conceptual visuals, backgrounds |
| Stock + Editing | $100 | **What it is:** Licensed stock photos customized and edited to fit your needs. **Ideal if:** You need professional photos with budget efficiency. **Examples:** Website imagery, marketing materials, presentations |
| Digital Design / Graphic | $150 | **What it is:** Custom graphics created in design software (Photoshop, Illustrator, Figma). **Ideal if:** You need designed visuals, not photography. **Examples:** Social graphics, ads, infographics, icons |
| Digital Illustration | $200+ | **What it is:** Hand-drawn or digitally illustrated custom artwork. **Ideal if:** You want unique artistic visuals with personality. **Examples:** Editorial illustrations, character art, custom icons |
| Photo Compositing | $175+ | **What it is:** Multiple images combined into one seamless visual. **Ideal if:** You need impossible or complex scenes created from photos. **Examples:** Fantasy scenes, product in environment, creative ads |
| Professional Photography | $300+ | **What it is:** Original photos shot by a professional photographer. **Ideal if:** You need authentic, high-quality original imagery. **Examples:** Headshots, product photography, brand shoots |

```javascript
const creationMethodOptions = [
  { id: "ai", label: "AI-Generated", price: 75 },
  { id: "stock", label: "Stock + Editing", price: 100 },
  { id: "design", label: "Digital Design / Graphic", price: 150 },
  { id: "illustration", label: "Digital Illustration", price: 200, startsAt: true },
  { id: "compositing", label: "Photo Compositing", price: 175, startsAt: true },
  { id: "photography", label: "Professional Photography", price: 300, startsAt: true }
]
```

---

## Step 5: Editing Level

*Question: "How much editing and refinement is needed?"*

**Default:** Standard

| Option | Price | Tooltip |
|--------|-------|---------|
| Basic | $50 | **What it is:** Simple adjustments — cropping, resizing, basic color correction. **Ideal if:** Images need minor tweaks only. **Examples:** Resize for social, basic cleanup, format conversion |
| Standard | $100 | **What it is:** Professional editing — color grading, exposure, sharpening, minor retouching. **Ideal if:** You want polished, professional-quality images. **Examples:** Most marketing content, product photos, social media |
| Advanced | $175 | **What it is:** Detailed work — skin retouching, object removal, background replacement, compositing. **Ideal if:** Images need significant enhancement or manipulation. **Examples:** Beauty retouching, complex edits, ad campaigns |
| Premium | $275+ | **What it is:** High-end editing — extensive manipulation, artistic effects, magazine-quality retouching. **Ideal if:** Quality is critical and every detail matters. **Examples:** Fashion editorials, luxury brands, award submissions |

```javascript
const editingOptions = [
  { id: "basic", label: "Basic", price: 50 },
  { id: "standard", label: "Standard", price: 100 },
  { id: "advanced", label: "Advanced", price: 175 },
  { id: "premium", label: "Premium", price: 275, startsAt: true }
]
```

---

## Step 6: Features & Add-ons

*Question: "Select any additional features you need."*

Each add-on can be **selected/deselected** and has **tiered options** where applicable.

---

### Background Options

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| As-is / Natural | $0 | **What it is:** Keep the original or natural background. **Ideal if:** The background works for your use case. **Examples:** Lifestyle photos, contextual imagery |
| White / Solid Color | $25 | **What it is:** Clean, uniform background in white or a color of choice. **Ideal if:** You need e-commerce style product shots. **Examples:** Amazon listings, product catalogs |
| Transparent (PNG) | $35 | **What it is:** Background removed, saved with transparency. **Ideal if:** You need to place images on different backgrounds. **Examples:** Website elements, composite designs |
| Custom Background | $75+ | **What it is:** Subject placed on a new custom background or environment. **Ideal if:** You want lifestyle context without a photoshoot. **Examples:** Product in room setting, environmental context |

```javascript
const backgroundOptions = [
  { id: "natural", label: "As-is / Natural", price: 0 },
  { id: "solid", label: "White / Solid Color", price: 25 },
  { id: "transparent", label: "Transparent (PNG)", price: 35 },
  { id: "custom", label: "Custom Background", price: 75, startsAt: true }
]
```

---

### Text & Graphics Overlay

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| None | $0 | **What it is:** Image only, no text or graphics added. **Ideal if:** You want clean imagery without overlays. **Examples:** Product photos, brand imagery |
| Simple Text | $25 | **What it is:** Basic text overlay — headline, caption, or call-to-action. **Ideal if:** You need text on social posts or simple ads. **Examples:** Quote graphics, announcement posts |
| Designed Graphics | $75 | **What it is:** Custom graphics, icons, badges, or designed text treatments. **Ideal if:** You need branded, designed visual elements. **Examples:** Sale badges, infographic elements, branded frames |

```javascript
const overlayOptions = [
  { id: "none", label: "None", price: 0 },
  { id: "simple-text", label: "Simple Text", price: 25 },
  { id: "designed", label: "Designed Graphics", price: 75 }
]
```

---

### Size Variations

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| Single Size | $0 | **What it is:** Images delivered in one size/aspect ratio. **Ideal if:** You know exactly where these will be used. **Examples:** Website banners, specific ad placements |
| 2–3 Sizes | $50 | **What it is:** Same images adapted to multiple sizes. **Ideal if:** You're using images across a few platforms. **Examples:** Web + social, print + digital |
| Full Size Package | $100 | **What it is:** Images in all standard sizes (square, landscape, portrait, stories). **Ideal if:** You want maximum flexibility across all platforms. **Examples:** Full social suite, multi-platform campaigns |

```javascript
const sizeOptions = [
  { id: "single", label: "Single Size", price: 0 },
  { id: "multiple", label: "2–3 Sizes", price: 50 },
  { id: "full", label: "Full Size Package", price: 100 }
]
```

---

### Revisions

**Default:** Standard (2 rounds) — Included

| Option | Price | Tooltip |
|--------|-------|---------|
| Standard (2 rounds) | Included | **What it is:** Two rounds of revisions included. **Ideal if:** Most projects — covers typical feedback cycles. |
| Extended (4 rounds) | +$75 | **What it is:** Four rounds for more iteration. **Ideal if:** Multiple stakeholders or expected revisions. **Examples:** Committee approvals, brand reviews |
| Unlimited | +$150 | **What it is:** Unlimited revisions until satisfied. **Ideal if:** You need flexibility on feedback cycles. **Examples:** High-stakes content, perfectionist clients |

```javascript
const revisionOptions = [
  { id: "standard", label: "Standard (2 rounds)", price: 0, included: true },
  { id: "extended", label: "Extended (4 rounds)", price: 75 },
  { id: "unlimited", label: "Unlimited", price: 150 }
]
```

---

## Step 7: Deliverables & Licensing

*Question: "What file formats and usage rights do you need?"*

---

### File Formats

**Default:** Web (JPG/PNG) — Included

| Option | Price | Tooltip |
|--------|-------|---------|
| Web (JPG/PNG) | Included | **What it is:** Optimized files for digital use. **Ideal if:** Images are for websites, social media, or digital marketing. **Examples:** Website images, social posts, email graphics |
| Print-Ready (High-res + CMYK) | +$50 | **What it is:** High-resolution files prepared for professional printing. **Ideal if:** You need images for brochures, posters, or packaging. **Examples:** Flyers, banners, product packaging |
| All Formats | +$75 | **What it is:** Web-optimized, print-ready, and raw/layered files. **Ideal if:** You want maximum flexibility for any use. **Examples:** Multi-channel campaigns, future-proofing |

```javascript
const formatOptions = [
  { id: "web", label: "Web (JPG/PNG)", price: 0, included: true },
  { id: "print", label: "Print-Ready (High-res + CMYK)", price: 50 },
  { id: "all", label: "All Formats", price: 75 }
]
```

---

### Source Files

**Default:** Final Files Only — Included

| Option | Price | Tooltip |
|--------|-------|---------|
| Final Files Only | Included | **What it is:** Finished images ready to use. **Ideal if:** You just need the end product. **Examples:** Most standard projects |
| Source Files Included | +$75 | **What it is:** Original layered files (PSD, AI, Figma). **Ideal if:** You want to make future edits yourself. **Examples:** Ongoing campaigns, in-house design teams |

```javascript
const sourceOptions = [
  { id: "final", label: "Final Files Only", price: 0, included: true },
  { id: "source", label: "Source Files Included", price: 75 }
]
```

---

### Usage License

**Default:** Standard (Digital + Print) — Included

| Option | Price | Tooltip |
|--------|-------|---------|
| Standard (Digital + Print) | Included | **What it is:** Use images for your business across digital and print. **Ideal if:** Standard business use — website, social, marketing. **Examples:** Most business applications |
| Extended (Resale / Products) | +$100 | **What it is:** Use images on products for resale or merchandise. **Ideal if:** You're creating products with the imagery (t-shirts, prints, etc.). **Examples:** Merch, print-on-demand, physical products |
| Exclusive Rights | +$250+ | **What it is:** Full ownership — we won't use or resell the images. **Ideal if:** You need complete exclusivity and ownership. **Examples:** Signature brand assets, competitive advantage |

```javascript
const licenseOptions = [
  { id: "standard", label: "Standard (Digital + Print)", price: 0, included: true },
  { id: "extended", label: "Extended (Resale / Products)", price: 100 },
  { id: "exclusive", label: "Exclusive Rights", price: 250, startsAt: true }
]
```

---

## Step 8: Timeline

*Question: "When do you need this completed?"*

**Default:** Standard (1 week)

| Option | Price Impact | Tooltip |
|--------|--------------|---------|
| Flexible | +0% | **What it is:** We schedule based on workload. **Ideal if:** No hard deadline. Typically 1–2 weeks depending on scope. |
| Standard (1 week) | +0% | **What it is:** Normal turnaround for most image projects. **Ideal if:** You have a reasonable deadline. |
| Expedited (3–5 days) | +25% | **What it is:** Accelerated delivery with priority scheduling. **Ideal if:** You have a firm deadline approaching. |
| Rush (1–2 days) | +50% | **What it is:** Rush delivery with dedicated resources. **Ideal if:** You need it ASAP. Subject to scope limitations. |

```javascript
const timelineOptions = [
  { id: "flexible", label: "Flexible", multiplier: 1.0 },
  { id: "standard", label: "Standard (1 week)", multiplier: 1.0 },
  { id: "expedited", label: "Expedited (3–5 days)", multiplier: 1.25 },
  { id: "rush", label: "Rush (1–2 days)", multiplier: 1.50 }
]
```

---

## Summary Screen

### UI Elements

1. **Selection Summary Table**
   - Lists each selection with chosen option and price
   - Shows included items (revisions, web format, standard license)
   - Editable — clicking any row returns to that step

2. **Price Calculation Display**
   ```
   YOUR CUSTOM IMAGE PLAN
   ────────────────────────────────────────

   Quantity                    6–10 images                 $275
   Style                       Lifestyle / Contextual      $100
   Creation Method             Digital Design              $150
   Editing Level               Standard                    $100
   Background                  Transparent (PNG)           $35
   Text Overlay                Simple Text                 $25
   Size Variations             2–3 Sizes                   $50
   Formats                     All Formats                 $75
   Source Files                Included                    $75
   License                     Standard                    Included
   Timeline                    Expedited (3–5 days)        +25%

   ────────────────────────────────────────
   Subtotal                                                $885
   Rush Fee (25%)                                          $221.25
   ────────────────────────────────────────
   TOTAL                                                   $1,106.25

   Includes: 2 revision rounds, standard license

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

Thanks, [Name]! We've received your custom image plan.

What's next:
• We'll review your selections within 24–48 hours
• You'll receive a detailed proposal via email
• We'll schedule a kickoff call to discuss creative direction

Your Reference: #IMG-[timestamp]
```

---

## Data Models

### Builder State

```javascript
const builderState = {
  // Step 1
  imageType: "social", // info only, no price
  
  // Step 2
  quantity: {
    selected: "6-10",
    price: 275
  },
  
  // Step 3
  style: {
    selected: "bold",
    price: 75
  },
  
  // Step 4
  creation: {
    selected: "design",
    price: 150
  },
  
  // Step 5
  editing: {
    selected: "standard",
    price: 100
  },
  
  // Step 6 - Add-ons
  addOns: {
    background: { selected: "transparent", price: 35 },
    overlay: { selected: "simple-text", price: 25 },
    sizes: { selected: "full", price: 100 },
    revisions: { selected: "standard", price: 0 }
  },
  
  // Step 7 - Deliverables
  deliverables: {
    formats: { selected: "all", price: 75 },
    source: { selected: "source", price: 75 },
    license: { selected: "standard", price: 0 }
  },
  
  // Step 8
  timeline: {
    selected: "expedited",
    multiplier: 1.25
  },
  
  // Calculated
  subtotal: 910,
  rushFee: 227.50,
  total: 1137.50,
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
  
  // Quantity
  if (state.quantity.price === null) {
    hasCustomQuote = true;
  } else {
    subtotal += state.quantity.price;
  }
  
  // Style
  if (state.style.price === null) {
    hasCustomQuote = true;
  } else {
    subtotal += state.style.price;
  }
  
  // Creation Method
  if (state.creation.price === null) {
    hasCustomQuote = true;
  } else {
    subtotal += state.creation.price;
  }
  
  // Editing
  subtotal += state.editing.price;
  
  // Add-ons
  subtotal += state.addOns.background.price;
  subtotal += state.addOns.overlay.price;
  subtotal += state.addOns.sizes.price;
  subtotal += state.addOns.revisions.price;
  
  // Deliverables
  subtotal += state.deliverables.formats.price;
  subtotal += state.deliverables.source.price;
  subtotal += state.deliverables.license.price;
  
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
- Single-select radio buttons for each add-on category
- Show price next to each option
- Default selections pre-checked based on image type

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
| **Quantity** | 1–2 images | $75 |
| | 3–5 images | $150 |
| | 6–10 images | $275 |
| | 11–20 images | $450 |
| | 21–30 images | $600 |
| | 30+ images | Custom |
| **Style** | Clean / Minimal | $50 |
| | Bold / Vibrant | $75 |
| | Lifestyle / Contextual | $100 |
| | Branded / On-brand | $100 |
| | Abstract / Conceptual | $125 |
| | Editorial / Artistic | $150 |
| | Custom Style | Custom |
| **Creation** | AI-Generated | $75 |
| | Stock + Editing | $100 |
| | Digital Design | $150 |
| | Photo Compositing | $175+ |
| | Digital Illustration | $200+ |
| | Professional Photography | $300+ |
| **Editing** | Basic | $50 |
| | Standard | $100 |
| | Advanced | $175 |
| | Premium | $275+ |

### Quick Reference - Add-ons

| Add-on | Option | Price |
|--------|--------|-------|
| **Background** | As-is / Natural | $0 |
| | White / Solid | $25 |
| | Transparent | $35 |
| | Custom | $75+ |
| **Overlay** | None | $0 |
| | Simple Text | $25 |
| | Designed Graphics | $75 |
| **Sizes** | Single Size | $0 |
| | 2–3 Sizes | $50 |
| | Full Package | $100 |
| **Revisions** | Standard (2) | Included |
| | Extended (4) | $75 |
| | Unlimited | $150 |

### Quick Reference - Deliverables

| Deliverable | Option | Price |
|-------------|--------|-------|
| **Formats** | Web (JPG/PNG) | Included |
| | Print-Ready | $50 |
| | All Formats | $75 |
| **Source** | Final Files Only | Included |
| | Source Files | $75 |
| **License** | Standard | Included |
| | Extended (Resale) | $100 |
| | Exclusive | $250+ |

### Quick Reference - Timeline

| Timeline | Multiplier |
|----------|------------|
| Flexible | +0% |
| Standard (1 week) | +0% |
| Expedited (3–5 days) | +25% |
| Rush (1–2 days) | +50% |

---

## Price Examples

### Example 1: Quick AI Social Graphics

| Selection | Option | Price |
|-----------|--------|-------|
| Quantity | 3–5 images | $150 |
| Style | Bold / Vibrant | $75 |
| Creation | AI-Generated | $75 |
| Editing | Basic | $50 |
| Background | As-is | $0 |
| Overlay | Simple Text | $25 |
| Sizes | Full Package | $100 |
| Timeline | Standard | +0% |

**Total: $475**

---

### Example 2: Product Photography Package

| Selection | Option | Price |
|-----------|--------|-------|
| Quantity | 11–20 images | $450 |
| Style | Clean / Minimal | $50 |
| Creation | Stock + Editing | $100 |
| Editing | Standard | $100 |
| Background | White/Solid | $25 |
| Overlay | None | $0 |
| Sizes | Single Size | $0 |
| Formats | All Formats | $75 |
| Timeline | Standard | +0% |

**Total: $800**

---

### Example 3: Premium Brand Imagery

| Selection | Option | Price |
|-----------|--------|-------|
| Quantity | 6–10 images | $275 |
| Style | Editorial / Artistic | $150 |
| Creation | Professional Photography | $300 |
| Editing | Advanced | $175 |
| Background | Custom | $75 |
| Overlay | Designed Graphics | $75 |
| Sizes | Full Package | $100 |
| Formats | All Formats | $75 |
| Source Files | Included | $75 |
| License | Exclusive | $250 |
| Revisions | Extended | $75 |
| Timeline | Expedited | +25% |

**Subtotal: $1,625**
**Rush Fee (25%): $406.25**
**Total: $2,031.25**

---

### Example 4: Infographic Design

| Selection | Option | Price |
|-----------|--------|-------|
| Quantity | 1–2 images | $75 |
| Style | Branded | $100 |
| Creation | Digital Design | $150 |
| Editing | Standard | $100 |
| Background | Solid | $25 |
| Overlay | Designed Graphics | $75 |
| Sizes | 2–3 Sizes | $50 |
| Source Files | Included | $75 |
| Timeline | Standard | +0% |

**Total: $650**

---

### Example 5: YouTube Thumbnail Pack

| Selection | Option | Price |
|-----------|--------|-------|
| Quantity | 6–10 images | $275 |
| Style | Bold / Vibrant | $75 |
| Creation | Digital Design | $150 |
| Editing | Standard | $100 |
| Background | As-is | $0 |
| Overlay | Simple Text | $25 |
| Sizes | Single Size | $0 |
| Timeline | Expedited | +25% |

**Subtotal: $625**
**Rush Fee (25%): $156.25**
**Total: $781.25**

---

## Integration Notes

- This custom builder lives alongside the standard tier selection (Essential/Pro/Enterprise)
- Customer can switch between "Choose a Package" and "Build Custom" views
- If custom total is close to a tier price, optionally suggest the tier as simpler option
- All data structures are API-ready for future backend integration
- Image type recommendations should guide users toward appropriate selections
- Consider showing "Popular for [Image Type]" badges on recommended options
