# Visual Identity Design Custom Builder - Feature Specification

## Overview

The Visual Identity Design Custom Builder is an interactive step-by-step configurator that allows customers to build their own visual identity engagement according to their specific needs. When a customer clicks "Custom" instead of selecting a pre-defined tier (Essential/Pro/Enterprise), they enter this guided builder flow.

---

## Core Mechanics

### Pricing Logic
- **Step 1 (Visual Identity Goal):** Information only — NO price impact
- **Steps 2–12:** All pricing calculated from these selections
- **One-time project pricing:** Visual identity is typically a one-time engagement
- **Timeline multipliers:** Faster delivery increases project cost
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

## Step 1: Visual Identity Goal (Info Only)

*Question: "What's driving your need for visual identity?"*

**Price Impact:** None — informational only, triggers recommendations

| Option | Tooltip Content |
|--------|-----------------|
| New Brand | **What it is:** Creating visual identity from scratch for a new business or venture. **Ideal if:** You're launching something new and need complete visual foundations. **Examples:** Startups, new products, spin-offs |
| Full Rebrand | **What it is:** Complete visual overhaul replacing existing identity. **Ideal if:** Your current identity no longer serves you and needs replacement. **Examples:** Pivots, outdated brands, M&A, major repositioning |
| Brand Refresh | **What it is:** Evolving and modernizing existing visual identity. **Ideal if:** Your brand needs updating but core equity should be preserved. **Examples:** Modernization, subtle evolution, cleaning up inconsistencies |
| Brand Extension | **What it is:** Extending visual identity to new products, services, or sub-brands. **Ideal if:** You're launching something new under an existing brand umbrella. **Examples:** Product lines, service expansions, sub-brands |
| Visual System Expansion | **What it is:** Adding new elements to an existing visual identity system. **Ideal if:** You have core identity but need additional assets and applications. **Examples:** Icon systems, illustration styles, motion guidelines |
| Consistency & Standards | **What it is:** Documenting and standardizing existing visual identity. **Ideal if:** You have identity elements but lack clear guidelines. **Examples:** Growing teams, franchise, licensing |
| Campaign / Temporary | **What it is:** Visual identity for a specific campaign, event, or limited time. **Ideal if:** You need distinct visuals for a specific initiative. **Examples:** Product launches, events, seasonal campaigns |
| Personal Brand | **What it is:** Visual identity for an individual or personal brand. **Ideal if:** You're building your personal professional presence. **Examples:** Consultants, speakers, creators, executives |
| Full Visual Identity System | **What it is:** Comprehensive visual identity covering all aspects and applications. **Ideal if:** You need end-to-end visual identity development. **Examples:** Complete brand builds, enterprise identity |
| Other | **What it is:** Something unique or a combination of needs. **Ideal if:** Your situation doesn't fit standard categories — we'll tailor recommendations. |

```javascript
const visualIdentityGoalOptions = [
  { id: "new-brand", label: "New Brand" },
  { id: "rebrand", label: "Full Rebrand" },
  { id: "refresh", label: "Brand Refresh" },
  { id: "extension", label: "Brand Extension" },
  { id: "expansion", label: "Visual System Expansion" },
  { id: "standards", label: "Consistency & Standards" },
  { id: "campaign", label: "Campaign / Temporary" },
  { id: "personal", label: "Personal Brand" },
  { id: "full-system", label: "Full Visual Identity System" },
  { id: "other", label: "Other" }
]
```

---

## Recommendation Presets (Based on Step 1)

When user selects a visual identity goal, these options are **pre-selected** (but editable):

```javascript
const recommendationPresets = {
  "new-brand": {
    logo: "full",
    colors: "full",
    typography: "standard",
    photography: "direction",
    icons: "basic",
    patterns: "none",
    illustration: "none",
    motion: "none",
    guidelines: "standard"
  },
  "rebrand": {
    logo: "full",
    colors: "full",
    typography: "standard",
    photography: "direction",
    icons: "standard",
    patterns: "basic",
    illustration: "none",
    motion: "basic",
    guidelines: "comprehensive",
    addOns: ["collateral", "social", "presentation"]
  },
  "refresh": {
    logo: "refinement",
    colors: "refresh",
    typography: "review",
    photography: "none",
    icons: "none",
    patterns: "none",
    illustration: "none",
    motion: "none",
    guidelines: "standard"
  },
  "extension": {
    logo: "lockup",
    colors: "extension",
    typography: "review",
    photography: "none",
    icons: "guide",
    patterns: "none",
    illustration: "none",
    motion: "none",
    guidelines: "light"
  },
  "expansion": {
    logo: "none",
    colors: "none",
    typography: "none",
    photography: "none",
    icons: "full",
    patterns: "standard",
    illustration: "standard",
    motion: "guidelines",
    guidelines: "light"
  },
  "standards": {
    logo: "cleanup",
    colors: "documentation",
    typography: "documentation",
    photography: "none",
    icons: "none",
    patterns: "none",
    illustration: "none",
    motion: "none",
    guidelines: "comprehensive",
    addOns: ["asset-library"]
  },
  "campaign": {
    logo: "lockup",
    colors: "extension",
    typography: "simple",
    photography: "direction",
    icons: "none",
    patterns: "basic",
    illustration: "none",
    motion: "none",
    guidelines: "quick"
  },
  "personal": {
    logo: "core",
    colors: "core",
    typography: "simple",
    photography: "basic",
    icons: "none",
    patterns: "none",
    illustration: "none",
    motion: "none",
    guidelines: "light",
    addOns: ["social"]
  },
  "full-system": {
    logo: "full",
    colors: "full",
    typography: "full",
    photography: "full",
    icons: "full",
    patterns: "standard",
    illustration: "standard",
    motion: "guidelines",
    guidelines: "comprehensive",
    addOns: ["collateral", "social", "presentation", "asset-library"]
  },
  "other": {
    logo: "core",
    colors: "core",
    typography: "simple",
    photography: "none",
    icons: "none",
    patterns: "none",
    illustration: "none",
    motion: "none",
    guidelines: "light"
  }
}
```

---

## Step 2: Logo Design

*Question: "What level of logo design do you need?"*

**Default:** Based on Step 1 recommendation

**Included in all logo tiers:** Primary logo, horizontal and stacked variations (where applicable), single-color versions, vector files (AI, EPS, SVG), raster files (PNG, JPG)

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No logo work required. **Ideal if:** You have a logo you're keeping. **Examples:** Established brands, refresh projects |
| Logo Cleanup | $400 | **What it is:** Technical cleanup and file preparation of existing logo. **Ideal if:** Your logo is fine but files are messy or incomplete. **Examples:** Vector recreation, file organization |
| Logo Refinement | $800 | **What it is:** Subtle improvements to existing logo without changing core identity. **Ideal if:** Your logo needs polish but not replacement. **Examples:** Proportion fixes, modernization tweaks |
| Logo Lockup / Variation | $600 | **What it is:** New lockups or variations of existing logo. **Ideal if:** You need your logo adapted for new contexts. **Examples:** Sub-brand lockups, co-branded versions, tagline additions |
| Core Logo | $1,500 | **What it is:** Primary logo design with essential variations. **Ideal if:** You need a solid logo without extensive exploration. **Examples:** Startups, small businesses, personal brands |
| Full Logo System | $3,000 | **What it is:** Comprehensive logo with full variation system and responsive versions. **Ideal if:** You need complete logo flexibility across all applications. **Examples:** Most businesses, rebrands |
| Premium Logo System | $5,000+ | **What it is:** Extensive logo development with multiple concepts, iterations, and comprehensive system. **Ideal if:** Logo is critical and you want thorough exploration. **Examples:** Funded startups, enterprise, consumer brands |

```javascript
const logoOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "cleanup", label: "Logo Cleanup", price: 400, oneTime: true },
  { id: "refinement", label: "Logo Refinement", price: 800, oneTime: true },
  { id: "lockup", label: "Logo Lockup / Variation", price: 600, oneTime: true },
  { id: "core", label: "Core Logo", price: 1500, oneTime: true },
  { id: "full", label: "Full Logo System", price: 3000, oneTime: true },
  { id: "premium", label: "Premium Logo System", price: 5000, oneTime: true, startsAt: true }
]
```

---

## Step 3: Color Palette

*Question: "What level of color development do you need?"*

**Default:** Full Color System

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No color work required. **Ideal if:** You have established colors you're keeping. **Examples:** Refresh projects, extensions |
| Color Documentation | $200 | **What it is:** Documenting and organizing existing colors with specifications. **Ideal if:** You have colors but need proper documentation. **Examples:** Hex, RGB, CMYK, Pantone specs |
| Color Refresh | $400 | **What it is:** Refining and optimizing existing color palette. **Ideal if:** Your colors need adjustment but not complete replacement. **Examples:** Accessibility fixes, digital optimization |
| Color Palette Extension | $350 | **What it is:** Extending existing palette with complementary colors. **Ideal if:** You need more colors within your existing system. **Examples:** UI colors, accent colors, gradients |
| Core Color Palette | $500 | **What it is:** Primary and secondary colors with basic usage guidance. **Ideal if:** You need essential colors defined. **Examples:** Startups, simple brands |
| Full Color System | $900 | **What it is:** Comprehensive color palette with tints, shades, and detailed usage rules. **Ideal if:** You need complete color flexibility and guidance. **Examples:** Most businesses, digital-heavy brands |
| Extended Color System | $1,400+ | **What it is:** Extensive color architecture including semantic colors, gradients, and accessibility specifications. **Ideal if:** You have complex color needs across many applications. **Examples:** Product companies, enterprise, multi-brand |

```javascript
const colorOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "documentation", label: "Color Documentation", price: 200, oneTime: true },
  { id: "refresh", label: "Color Refresh", price: 400, oneTime: true },
  { id: "extension", label: "Color Palette Extension", price: 350, oneTime: true },
  { id: "core", label: "Core Color Palette", price: 500, oneTime: true },
  { id: "full", label: "Full Color System", price: 900, oneTime: true },
  { id: "extended", label: "Extended Color System", price: 1400, oneTime: true, startsAt: true }
]
```

---

## Step 4: Typography

*Question: "What level of typography work do you need?"*

**Default:** Standard Typography

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No typography work required. **Ideal if:** You have established typography you're keeping. **Examples:** Refresh projects, minor updates |
| Typography Documentation | $200 | **What it is:** Documenting existing type choices with specifications. **Ideal if:** You have fonts but need proper documentation. **Examples:** Font stacks, sizing, weights |
| Typography Review | $300 | **What it is:** Assessment and recommendations for existing typography. **Ideal if:** You want expert input on your current type choices. **Examples:** Pairing evaluation, hierarchy review |
| Simple Typography | $400 | **What it is:** Primary typeface selection with basic hierarchy. **Ideal if:** You need straightforward type decisions. **Examples:** Single font family, simple applications |
| Standard Typography | $700 | **What it is:** Primary and secondary typefaces with heading/body hierarchy. **Ideal if:** You need solid typography system for most applications. **Examples:** Most businesses, web + print |
| Full Typography System | $1,200 | **What it is:** Comprehensive type system with multiple faces, detailed hierarchy, and responsive sizing. **Ideal if:** You have complex typographic needs. **Examples:** Publications, content-heavy brands, products |
| Custom Typography | $3,000+ | **What it is:** Custom typeface development or extensive type customization. **Ideal if:** You want ownable, distinctive typography. **Examples:** Major brands, unique differentiation needs |

```javascript
const typographyOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "documentation", label: "Typography Documentation", price: 200, oneTime: true },
  { id: "review", label: "Typography Review", price: 300, oneTime: true },
  { id: "simple", label: "Simple Typography", price: 400, oneTime: true },
  { id: "standard", label: "Standard Typography", price: 700, oneTime: true },
  { id: "full", label: "Full Typography System", price: 1200, oneTime: true },
  { id: "custom", label: "Custom Typography", price: 3000, oneTime: true, startsAt: true }
]
```

---

## Step 5: Photography & Imagery Direction

*Question: "Do you need photography style direction?"*

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No photography direction required. **Ideal if:** You have established imagery or don't need photography guidance. **Examples:** Text-heavy brands, B2B |
| Basic Direction | $400 | **What it is:** High-level photography style and mood guidance. **Ideal if:** You need basic direction for sourcing or shooting. **Examples:** Mood references, do's and don'ts |
| Photography Direction | $800 | **What it is:** Detailed photography style guide with examples and specifications. **Ideal if:** You need clear guidance for consistent imagery. **Examples:** Style guides, shot lists, treatment specs |
| Full Photography System | $1,500 | **What it is:** Comprehensive imagery guidelines including subjects, composition, editing, and sourcing strategy. **Ideal if:** Photography is central to your brand expression. **Examples:** Lifestyle brands, e-commerce, hospitality |
| Photography + Art Direction | $2,500+ | **What it is:** Complete visual content direction including photography, videography, and creative direction. **Ideal if:** You need hands-on creative direction for shoots. **Examples:** Campaign launches, brand shoots |

```javascript
const photographyOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "basic", label: "Basic Direction", price: 400, oneTime: true },
  { id: "direction", label: "Photography Direction", price: 800, oneTime: true },
  { id: "full", label: "Full Photography System", price: 1500, oneTime: true },
  { id: "art-direction", label: "Photography + Art Direction", price: 2500, oneTime: true, startsAt: true }
]
```

---

## Step 6: Iconography

*Question: "Do you need icons designed?"*

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No icon work required. **Ideal if:** You'll use existing icons or don't need them. **Examples:** Simple brands, text-focused |
| Icon Style Guide | $300 | **What it is:** Guidelines for selecting and using icons consistently. **Ideal if:** You'll source icons but need style direction. **Examples:** Icon library recommendations, usage rules |
| Basic Icon Set (10–15) | $600 | **What it is:** Essential custom icons for core needs. **Ideal if:** You need a handful of key icons. **Examples:** Navigation, features, social |
| Standard Icon Set (20–30) | $1,100 | **What it is:** Comprehensive custom icon set covering main use cases. **Ideal if:** You need icons across website and marketing. **Examples:** Service icons, feature icons, UI icons |
| Full Icon System (40–60) | $2,000 | **What it is:** Extensive custom icon library with detailed guidelines. **Ideal if:** Icons are a significant part of your visual language. **Examples:** Apps, products, complex websites |
| Extended Icon System (80+) | $3,500+ | **What it is:** Complete icon ecosystem with multiple styles and ongoing expansion capability. **Ideal if:** You need extensive iconography across many applications. **Examples:** Enterprise, product suites, platforms |

```javascript
const iconOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "guide", label: "Icon Style Guide", price: 300, oneTime: true },
  { id: "basic", label: "Basic Icon Set (10–15)", price: 600, oneTime: true },
  { id: "standard", label: "Standard Icon Set (20–30)", price: 1100, oneTime: true },
  { id: "full", label: "Full Icon System (40–60)", price: 2000, oneTime: true },
  { id: "extended", label: "Extended Icon System (80+)", price: 3500, oneTime: true, startsAt: true }
]
```

---

## Step 7: Patterns & Textures

*Question: "Do you need brand patterns or textures?"*

**Default:** Not Needed

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No patterns or textures required. **Ideal if:** Your brand doesn't need these elements. **Examples:** Minimal brands, clean aesthetics |
| Basic Patterns (2–3) | $400 | **What it is:** A few versatile patterns for brand applications. **Ideal if:** You want subtle texture options. **Examples:** Background patterns, accent elements |
| Standard Patterns (4–6) | $750 | **What it is:** Varied pattern set with different scales and applications. **Ideal if:** You need patterns across multiple touchpoints. **Examples:** Packaging, environmental, digital backgrounds |
| Full Pattern System (8–12) | $1,300 | **What it is:** Comprehensive pattern library with usage guidelines. **Ideal if:** Patterns are a key part of your visual identity. **Examples:** Retail, hospitality, fashion |
| Custom Pattern System | $2,200+ | **What it is:** Bespoke pattern development with unique, ownable designs. **Ideal if:** You want distinctive, signature patterns. **Examples:** Luxury brands, heritage brands |

```javascript
const patternOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "basic", label: "Basic Patterns (2–3)", price: 400, oneTime: true },
  { id: "standard", label: "Standard Patterns (4–6)", price: 750, oneTime: true },
  { id: "full", label: "Full Pattern System (8–12)", price: 1300, oneTime: true },
  { id: "custom", label: "Custom Pattern System", price: 2200, oneTime: true, startsAt: true }
]
```

---

## Step 8: Illustration Style

*Question: "Do you need illustration style developed?"*

**Default:** Not Needed

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No illustration work required. **Ideal if:** Your brand doesn't use illustrations. **Examples:** Photo-driven brands, corporate |
| Illustration Direction | $500 | **What it is:** Style guide for sourcing or commissioning illustrations. **Ideal if:** You'll work with illustrators but need direction. **Examples:** Style references, specifications |
| Spot Illustrations (5–8) | $900 | **What it is:** Small accent illustrations for key brand moments. **Ideal if:** You want illustration touches without full system. **Examples:** Empty states, accents, heroes |
| Standard Illustration Set (10–15) | $1,600 | **What it is:** Core illustration set establishing brand illustration style. **Ideal if:** Illustrations are part of your visual language. **Examples:** Website illustrations, marketing materials |
| Full Illustration System (20–30) | $3,000 | **What it is:** Comprehensive illustration library with style documentation. **Ideal if:** Illustration is central to your brand expression. **Examples:** Tech brands, playful brands, storytelling brands |
| Custom Illustration Style | $5,000+ | **What it is:** Bespoke illustration style development with extensive library. **Ideal if:** You want truly ownable illustration aesthetic. **Examples:** Major campaigns, distinctive brands |

```javascript
const illustrationOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "direction", label: "Illustration Direction", price: 500, oneTime: true },
  { id: "spot", label: "Spot Illustrations (5–8)", price: 900, oneTime: true },
  { id: "standard", label: "Standard Illustration Set (10–15)", price: 1600, oneTime: true },
  { id: "full", label: "Full Illustration System (20–30)", price: 3000, oneTime: true },
  { id: "custom", label: "Custom Illustration Style", price: 5000, oneTime: true, startsAt: true }
]
```

---

## Step 9: Motion & Animation Guidelines

*Question: "Do you need motion design direction?"*

**Default:** Not Needed

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No motion guidelines required. **Ideal if:** You don't need animation guidance. **Examples:** Print-focused brands, simple websites |
| Basic Motion Principles | $400 | **What it is:** High-level motion principles and recommendations. **Ideal if:** You want basic animation direction. **Examples:** Timing, easing, general feel |
| Motion Guidelines | $900 | **What it is:** Documented motion style including principles, timing, and examples. **Ideal if:** You need consistent motion across touchpoints. **Examples:** UI transitions, hover states, loading |
| Full Motion System | $1,800 | **What it is:** Comprehensive motion design language with detailed specifications and examples. **Ideal if:** Motion is integral to your brand experience. **Examples:** Apps, products, digital-first brands |
| Motion System + Assets | $3,000+ | **What it is:** Complete motion system plus animated assets and templates. **Ideal if:** You need ready-to-use motion assets. **Examples:** Social, presentations, video intros |

```javascript
const motionOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "basic", label: "Basic Motion Principles", price: 400, oneTime: true },
  { id: "guidelines", label: "Motion Guidelines", price: 900, oneTime: true },
  { id: "full", label: "Full Motion System", price: 1800, oneTime: true },
  { id: "assets", label: "Motion System + Assets", price: 3000, oneTime: true, startsAt: true }
]
```

---

## Step 10: Brand Guidelines

*Question: "What level of brand guidelines do you need?"*

**Default:** Standard Guidelines

| Option | Price | Tooltip |
|--------|-------|---------|
| No Guidelines | $0 | **What it is:** Assets only, no documentation. **Ideal if:** You'll document internally or don't need guidelines. **Examples:** Simple projects, in-house teams |
| Quick Reference (1-pager) | $300 | **What it is:** Single-page brand cheat sheet with essentials. **Ideal if:** You need minimal documentation for small teams. **Examples:** Logo usage, colors, fonts at a glance |
| Light Guidelines | $600 | **What it is:** Basic guidelines covering core identity elements. **Ideal if:** You need clear documentation without extensive detail. **Examples:** Startups, small businesses |
| Standard Guidelines | $1,200 | **What it is:** Comprehensive guidelines for consistent brand application. **Ideal if:** You need solid documentation for teams and partners. **Examples:** Most businesses, growing teams |
| Comprehensive Guidelines | $2,200 | **What it is:** Detailed brand book covering all identity elements with extensive examples. **Ideal if:** You need thorough documentation for complex organizations. **Examples:** Enterprise, franchises, agencies |
| Interactive / Digital Guidelines | $3,500+ | **What it is:** Living digital brand portal with searchable guidelines and downloadable assets. **Ideal if:** You need accessible, updateable brand resource. **Examples:** Large organizations, distributed teams |

```javascript
const guidelinesOptions = [
  { id: "none", label: "No Guidelines", price: 0 },
  { id: "quick", label: "Quick Reference (1-pager)", price: 300, oneTime: true },
  { id: "light", label: "Light Guidelines", price: 600, oneTime: true },
  { id: "standard", label: "Standard Guidelines", price: 1200, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Guidelines", price: 2200, oneTime: true },
  { id: "interactive", label: "Interactive / Digital Guidelines", price: 3500, oneTime: true, startsAt: true }
]
```

---

## Step 11: Add-on Services

*Question: "Select any additional services you need."*

Each add-on can be **selected/deselected**.

| Option | Price | Tooltip |
|--------|-------|---------|
| Brand Collateral Templates | $800 | **What it is:** Designed templates for business cards, letterhead, email signatures, etc. **Ideal if:** You need ready-to-use business essentials. **Examples:** Stationery suite, email templates |
| Social Media Templates | $600 | **What it is:** Branded templates for social media posts and profiles. **Ideal if:** You need consistent social presence. **Examples:** Post templates, cover images, story templates |
| Presentation Template | $700 | **What it is:** Branded PowerPoint/Keynote/Google Slides template. **Ideal if:** You need professional presentation capability. **Examples:** Sales decks, investor decks, internal presentations |
| Signage & Environmental | $900 | **What it is:** Guidance and designs for physical brand applications. **Ideal if:** You have physical locations or events. **Examples:** Office signage, trade shows, retail |
| Packaging Direction | $1,200 | **What it is:** Packaging design direction and structure guidelines. **Ideal if:** You have products that need packaging. **Examples:** Product packaging, shipping materials |
| Vehicle / Fleet Graphics | $800 | **What it is:** Brand application for vehicles. **Ideal if:** You have company vehicles. **Examples:** Car wraps, truck graphics, fleet branding |
| Merchandise Guidelines | $500 | **What it is:** Guidelines for branded merchandise and swag. **Ideal if:** You produce branded items. **Examples:** T-shirts, mugs, promotional items |
| Brand Asset Library | $400 | **What it is:** Organized, packaged brand assets ready for distribution. **Ideal if:** You need clean handoff to team or vendors. **Examples:** Asset packages, file organization |
| Brand Launch Support | $600 | **What it is:** Guidance and materials for internal brand rollout. **Ideal if:** You're launching new identity to your organization. **Examples:** Launch presentations, rollout planning |

```javascript
const addOnServices = [
  { id: "collateral", label: "Brand Collateral Templates", price: 800, oneTime: true },
  { id: "social", label: "Social Media Templates", price: 600, oneTime: true },
  { id: "presentation", label: "Presentation Template", price: 700, oneTime: true },
  { id: "signage", label: "Signage & Environmental", price: 900, oneTime: true },
  { id: "packaging", label: "Packaging Direction", price: 1200, oneTime: true },
  { id: "vehicle", label: "Vehicle / Fleet Graphics", price: 800, oneTime: true },
  { id: "merchandise", label: "Merchandise Guidelines", price: 500, oneTime: true },
  { id: "asset-library", label: "Brand Asset Library", price: 400, oneTime: true },
  { id: "launch", label: "Brand Launch Support", price: 600, oneTime: true }
]
```

---

## Step 12: Timeline

*Question: "When do you need this completed?"*

**Default:** Flexible (8–12 weeks)

| Option | Price Impact | Tooltip |
|--------|--------------|---------|
| Flexible (8–12 weeks) | +0% | **What it is:** Standard timeline allowing thorough development and iteration. **Ideal if:** You can plan ahead and want best quality. **Examples:** Most projects |
| Standard (6–8 weeks) | +10% | **What it is:** Slightly accelerated timeline with focused sprints. **Ideal if:** You have a target date but some flexibility. **Examples:** Planned launches, rebrands |
| Accelerated (4–6 weeks) | +25% | **What it is:** Fast-tracked delivery requiring prioritized scheduling. **Ideal if:** You have a firm deadline approaching. **Examples:** Funding announcements, market opportunities |
| Rush (Under 4 weeks) | +50% | **What it is:** Expedited delivery with dedicated resources. **Ideal if:** You have an urgent need requiring immediate attention. **Examples:** Crisis response, unexpected opportunities |

```javascript
const timelineOptions = [
  { id: "flexible", label: "Flexible (8–12 weeks)", multiplier: 1.0 },
  { id: "standard", label: "Standard (6–8 weeks)", multiplier: 1.10 },
  { id: "accelerated", label: "Accelerated (4–6 weeks)", multiplier: 1.25 },
  { id: "rush", label: "Rush (Under 4 weeks)", multiplier: 1.50 }
]
```

---

## Summary Screen

### UI Elements

1. **Selection Summary Table**
   - Groups items by category (Core Identity, Visual Elements, Documentation, Add-ons)
   - Shows timeline premium if applicable
   - Editable — clicking any row returns to that step

2. **Price Calculation Display**
   ```
   YOUR CUSTOM VISUAL IDENTITY PLAN
   ────────────────────────────────────────

   CORE IDENTITY
   Logo Design                 Full Logo System            $3,000
   Color Palette               Full Color System           $900
   Typography                  Standard Typography         $700
   Photography Direction       Photography Direction       $800
   ────────────────────────────────────────
   Core Identity Subtotal                                  $5,400

   VISUAL ELEMENTS
   Iconography                 Standard Icon Set           $1,100
   Patterns & Textures         Basic Patterns              $400
   Illustration                Not Needed                  $0
   Motion Guidelines           Basic Motion Principles     $400
   ────────────────────────────────────────
   Visual Elements Subtotal                                $1,900

   DOCUMENTATION
   Brand Guidelines            Standard Guidelines         $1,200
   ────────────────────────────────────────
   Documentation Subtotal                                  $1,200

   ADD-ONS
   Collateral Templates        —                           $800
   Social Media Templates      —                           $600
   Presentation Template       —                           $700
   ────────────────────────────────────────
   Add-ons Total                                           $2,100

   ────────────────────────────────────────
   Project Subtotal                                        $10,600
   Timeline                    Standard (+10%)             $1,060
   ────────────────────────────────────────
   TOTAL INVESTMENT                                        $11,660

   Timeline: 6–8 weeks

   [ Adjust Plan ]                      [ Generate Quote ]
   ```

3. **Action Buttons**
   - [ Adjust Plan ] — Returns to builder flow
   - [ **Generate Quote** ] — Opens quote request form

4. **Disclaimer Text**
   *"This is an estimate based on your selections. Final pricing may vary based on project scope and complexity. A detailed proposal will be provided after our discovery call."*

---

## Quote Request Form

| Field | Type | Required |
|-------|------|----------|
| Full Name | Text | Yes |
| Email | Email | Yes |
| Company / Brand | Text | Yes |
| Phone | Tel | No |
| Website URL | URL | No |
| Industry | Select | No |
| Do you have existing brand assets? | Select | No |
| Project Notes | Textarea | No |

---

## Confirmation Screen

```
✓ Quote Request Submitted

Thanks, [Name]! We've received your custom visual identity plan.

What's next:
• We'll review your selections within 24–48 hours
• You'll receive a detailed proposal via email
• We'll schedule a discovery call to discuss your brand and vision

Your Reference: #VI-[timestamp]
```

---

## Data Models

### Builder State

```javascript
const builderState = {
  // Step 1
  visualIdentityGoal: "rebrand", // info only, no price
  
  // Step 2
  logo: {
    selected: "full",
    price: 3000,
    oneTime: true
  },
  
  // Step 3
  colors: {
    selected: "full",
    price: 900,
    oneTime: true
  },
  
  // Step 4
  typography: {
    selected: "standard",
    price: 700,
    oneTime: true
  },
  
  // Step 5
  photography: {
    selected: "direction",
    price: 800,
    oneTime: true
  },
  
  // Step 6
  icons: {
    selected: "standard",
    price: 1100,
    oneTime: true
  },
  
  // Step 7
  patterns: {
    selected: "basic",
    price: 400,
    oneTime: true
  },
  
  // Step 8
  illustration: {
    selected: "none",
    price: 0
  },
  
  // Step 9
  motion: {
    selected: "basic",
    price: 400,
    oneTime: true
  },
  
  // Step 10
  guidelines: {
    selected: "standard",
    price: 1200,
    oneTime: true
  },
  
  // Step 11 - Add-ons
  addOns: [
    { id: "collateral", price: 800, oneTime: true },
    { id: "social", price: 600, oneTime: true },
    { id: "presentation", price: 700, oneTime: true }
  ],
  
  // Step 12
  timeline: {
    selected: "standard",
    multiplier: 1.10
  },
  
  // Calculated
  coreIdentitySubtotal: 5400,
  visualElementsSubtotal: 1900,
  documentationSubtotal: 1200,
  addOnsTotal: 2100,
  projectSubtotal: 10600,
  timelinePremium: 1060,
  totalInvestment: 11660,
  hasCustomQuote: false,
  
  // Customer Info
  customer: {
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    industry: "",
    existingAssets: "",
    notes: ""
  }
}
```

### Price Calculation Logic

```javascript
function calculateTotal(state) {
  let coreIdentitySubtotal = 0;
  let visualElementsSubtotal = 0;
  let documentationSubtotal = 0;
  let addOnsTotal = 0;
  let hasCustomQuote = false;
  
  // Core Identity
  // Logo
  if (state.logo.price === null) {
    hasCustomQuote = true;
  } else {
    coreIdentitySubtotal += state.logo.price;
  }
  
  // Colors
  if (state.colors.price === null) {
    hasCustomQuote = true;
  } else {
    coreIdentitySubtotal += state.colors.price;
  }
  
  // Typography
  if (state.typography.price === null) {
    hasCustomQuote = true;
  } else {
    coreIdentitySubtotal += state.typography.price;
  }
  
  // Photography
  if (state.photography.price === null) {
    hasCustomQuote = true;
  } else {
    coreIdentitySubtotal += state.photography.price;
  }
  
  // Visual Elements
  // Icons
  if (state.icons.price === null) {
    hasCustomQuote = true;
  } else {
    visualElementsSubtotal += state.icons.price;
  }
  
  // Patterns
  if (state.patterns.price === null) {
    hasCustomQuote = true;
  } else {
    visualElementsSubtotal += state.patterns.price;
  }
  
  // Illustration
  if (state.illustration.price === null) {
    hasCustomQuote = true;
  } else {
    visualElementsSubtotal += state.illustration.price;
  }
  
  // Motion
  if (state.motion.price === null) {
    hasCustomQuote = true;
  } else {
    visualElementsSubtotal += state.motion.price;
  }
  
  // Documentation
  // Guidelines
  if (state.guidelines.price === null) {
    hasCustomQuote = true;
  } else {
    documentationSubtotal += state.guidelines.price;
  }
  
  // Add-ons
  state.addOns.forEach(addon => {
    if (addon.price === null) {
      hasCustomQuote = true;
    } else {
      addOnsTotal += addon.price;
    }
  });
  
  // Project subtotal
  const projectSubtotal = coreIdentitySubtotal + visualElementsSubtotal + documentationSubtotal + addOnsTotal;
  
  // Timeline multiplier
  const multiplier = state.timeline.multiplier;
  const timelinePremium = projectSubtotal * (multiplier - 1);
  const totalInvestment = projectSubtotal * multiplier;
  
  return {
    coreIdentitySubtotal: coreIdentitySubtotal,
    visualElementsSubtotal: visualElementsSubtotal,
    documentationSubtotal: documentationSubtotal,
    addOnsTotal: addOnsTotal,
    projectSubtotal: projectSubtotal,
    timelinePremium: timelinePremium,
    totalInvestment: totalInvestment,
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

### Pricing Display
- All prices are one-time (project-based)
- Show timeline premium clearly separated
- Display estimated timeline alongside total
- Group items by category for clarity

### Real-time Price Update
- Sticky footer or sidebar showing running total
- Animates when price changes
- Shows "Custom quote required" badge if any selection triggers it

### Mobile Considerations
- Single column layout
- Collapsible sections for add-ons
- Bottom sheet for tooltips
- Sticky CTA button at bottom
- Swipe navigation between steps

---

## Price Summary Tables

### Quick Reference - Core Identity

| Category | Option | Price |
|----------|--------|-------|
| **Logo** | Not Needed | $0 |
| | Logo Cleanup | $400 |
| | Logo Refinement | $800 |
| | Logo Lockup / Variation | $600 |
| | Core Logo | $1,500 |
| | Full Logo System | $3,000 |
| | Premium Logo System | $5,000+ |
| **Colors** | Not Needed | $0 |
| | Color Documentation | $200 |
| | Color Refresh | $400 |
| | Color Palette Extension | $350 |
| | Core Color Palette | $500 |
| | Full Color System | $900 |
| | Extended Color System | $1,400+ |
| **Typography** | Not Needed | $0 |
| | Typography Documentation | $200 |
| | Typography Review | $300 |
| | Simple Typography | $400 |
| | Standard Typography | $700 |
| | Full Typography System | $1,200 |
| | Custom Typography | $3,000+ |
| **Photography** | Not Needed | $0 |
| | Basic Direction | $400 |
| | Photography Direction | $800 |
| | Full Photography System | $1,500 |
| | Photography + Art Direction | $2,500+ |

### Quick Reference - Visual Elements

| Category | Option | Price |
|----------|--------|-------|
| **Iconography** | Not Needed | $0 |
| | Icon Style Guide | $300 |
| | Basic Icon Set (10–15) | $600 |
| | Standard Icon Set (20–30) | $1,100 |
| | Full Icon System (40–60) | $2,000 |
| | Extended Icon System (80+) | $3,500+ |
| **Patterns** | Not Needed | $0 |
| | Basic Patterns (2–3) | $400 |
| | Standard Patterns (4–6) | $750 |
| | Full Pattern System (8–12) | $1,300 |
| | Custom Pattern System | $2,200+ |
| **Illustration** | Not Needed | $0 |
| | Illustration Direction | $500 |
| | Spot Illustrations (5–8) | $900 |
| | Standard Set (10–15) | $1,600 |
| | Full System (20–30) | $3,000 |
| | Custom Illustration Style | $5,000+ |
| **Motion** | Not Needed | $0 |
| | Basic Motion Principles | $400 |
| | Motion Guidelines | $900 |
| | Full Motion System | $1,800 |
| | Motion System + Assets | $3,000+ |

### Quick Reference - Documentation

| Option | Price |
|--------|-------|
| No Guidelines | $0 |
| Quick Reference (1-pager) | $300 |
| Light Guidelines | $600 |
| Standard Guidelines | $1,200 |
| Comprehensive Guidelines | $2,200 |
| Interactive / Digital Guidelines | $3,500+ |

### Quick Reference - Add-ons

| Service | Price |
|---------|-------|
| Brand Collateral Templates | $800 |
| Social Media Templates | $600 |
| Presentation Template | $700 |
| Signage & Environmental | $900 |
| Packaging Direction | $1,200 |
| Vehicle / Fleet Graphics | $800 |
| Merchandise Guidelines | $500 |
| Brand Asset Library | $400 |
| Brand Launch Support | $600 |

### Quick Reference - Timeline

| Timeline | Multiplier | Effect |
|----------|------------|--------|
| Flexible (8–12 weeks) | 1.0 | Base price |
| Standard (6–8 weeks) | 1.10 | +10% premium |
| Accelerated (4–6 weeks) | 1.25 | +25% premium |
| Rush (Under 4 weeks) | 1.50 | +50% premium |

---

## Price Examples

### Example 1: Startup Essential

| Selection | Option | Price |
|-----------|--------|-------|
| **Core Identity** | | |
| Logo | Core Logo | $1,500 |
| Colors | Core Color Palette | $500 |
| Typography | Simple | $400 |
| Photography | Not Needed | $0 |
| **Core Identity Subtotal** | | **$2,400** |
| | | |
| **Visual Elements** | | |
| Icons | Not Needed | $0 |
| Patterns | Not Needed | $0 |
| Illustration | Not Needed | $0 |
| Motion | Not Needed | $0 |
| **Visual Elements Subtotal** | | **$0** |
| | | |
| **Documentation** | | |
| Guidelines | Light | $600 |
| **Documentation Subtotal** | | **$600** |
| | | |
| **Project Subtotal** | | **$3,000** |
| Timeline | Flexible | +0% |
| **Total** | | **$3,000** |

---

### Example 2: Business Rebrand

| Selection | Option | Price |
|-----------|--------|-------|
| **Core Identity** | | |
| Logo | Full Logo System | $3,000 |
| Colors | Full Color System | $900 |
| Typography | Standard | $700 |
| Photography | Photography Direction | $800 |
| **Core Identity Subtotal** | | **$5,400** |
| | | |
| **Visual Elements** | | |
| Icons | Standard Icon Set | $1,100 |
| Patterns | Basic Patterns | $400 |
| Illustration | Not Needed | $0 |
| Motion | Basic Motion Principles | $400 |
| **Visual Elements Subtotal** | | **$1,900** |
| | | |
| **Documentation** | | |
| Guidelines | Standard | $1,200 |
| **Documentation Subtotal** | | **$1,200** |
| | | |
| **Add-ons** | | |
| Collateral Templates | — | $800 |
| Social Media Templates | — | $600 |
| Presentation Template | — | $700 |
| **Add-ons Total** | | **$2,100** |
| | | |
| **Project Subtotal** | | **$10,600** |
| Timeline | Standard (+10%) | $1,060 |
| **Total** | | **$11,660** |

---

### Example 3: Tech Company Identity

| Selection | Option | Price |
|-----------|--------|-------|
| **Core Identity** | | |
| Logo | Full Logo System | $3,000 |
| Colors | Full Color System | $900 |
| Typography | Full Typography System | $1,200 |
| Photography | Basic Direction | $400 |
| **Core Identity Subtotal** | | **$5,500** |
| | | |
| **Visual Elements** | | |
| Icons | Full Icon System | $2,000 |
| Patterns | Not Needed | $0 |
| Illustration | Standard Set | $1,600 |
| Motion | Motion Guidelines | $900 |
| **Visual Elements Subtotal** | | **$4,500** |
| | | |
| **Documentation** | | |
| Guidelines | Comprehensive | $2,200 |
| **Documentation Subtotal** | | **$2,200** |
| | | |
| **Add-ons** | | |
| Social Media Templates | — | $600 |
| Presentation Template | — | $700 |
| Brand Asset Library | — | $400 |
| **Add-ons Total** | | **$1,700** |
| | | |
| **Project Subtotal** | | **$13,900** |
| Timeline | Standard (+10%) | $1,390 |
| **Total** | | **$15,290** |

---

### Example 4: Enterprise Full System

| Selection | Option | Price |
|-----------|--------|-------|
| **Core Identity** | | |
| Logo | Premium Logo System | $5,000 |
| Colors | Extended Color System | $1,400 |
| Typography | Full Typography System | $1,200 |
| Photography | Full Photography System | $1,500 |
| **Core Identity Subtotal** | | **$9,100** |
| | | |
| **Visual Elements** | | |
| Icons | Full Icon System | $2,000 |
| Patterns | Full Pattern System | $1,300 |
| Illustration | Full Illustration System | $3,000 |
| Motion | Full Motion System | $1,800 |
| **Visual Elements Subtotal** | | **$8,100** |
| | | |
| **Documentation** | | |
| Guidelines | Interactive / Digital | $3,500 |
| **Documentation Subtotal** | | **$3,500** |
| | | |
| **Add-ons** | | |
| Collateral Templates | — | $800 |
| Social Media Templates | — | $600 |
| Presentation Template | — | $700 |
| Signage & Environmental | — | $900 |
| Packaging Direction | — | $1,200 |
| Brand Asset Library | — | $400 |
| Brand Launch Support | — | $600 |
| **Add-ons Total** | | **$5,200** |
| | | |
| **Project Subtotal** | | **$25,900** |
| Timeline | Flexible | +0% |
| **Total** | | **$25,900** |

---

## Integration Notes

- This custom builder lives alongside the standard tier selection (Essential/Pro/Enterprise)
- Customer can switch between "Choose a Package" and "Build Custom" views
- If custom total is close to a tier price, optionally suggest the tier as simpler option
- All data structures are API-ready for future backend integration
- Visual identity goal recommendations should guide users toward appropriate selections
- Consider showing "Popular for [Goal]" badges on recommended options
- Timeline multipliers apply to the entire project total
- Visual identity is typically a one-time project, not recurring
- This builder focuses on visual identity — Brand Strategy is a separate builder
- Works best when paired with Brand Strategy (offer bundle discount when both selected)
