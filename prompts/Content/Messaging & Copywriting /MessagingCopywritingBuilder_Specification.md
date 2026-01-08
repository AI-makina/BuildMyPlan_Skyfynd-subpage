# Messaging & Copywriting Custom Builder - Feature Specification

## Overview

The Messaging & Copywriting Custom Builder is an interactive step-by-step configurator that allows customers to build their own messaging and copywriting engagement according to their specific needs. This service covers both strategic messaging frameworks and tactical copy execution — from brand voice development to website copy, sales materials, and ongoing content. When a customer clicks "Custom" instead of selecting a pre-defined tier (Essential/Pro/Enterprise), they enter this guided builder flow.

---

## Core Mechanics

### Pricing Logic
- **Step 1 (Messaging Goal):** Information only — NO price impact
- **Steps 2–10:** All pricing calculated from these selections
- **Mixed pricing model:** One-time strategic work + optional ongoing retainer for copy production
- **Timeline multipliers:** Faster delivery increases project cost (applies to one-time work only)
- **Running total** displays and updates in real-time, separating one-time and monthly costs

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

## Step 1: Messaging Goal (Info Only)

*Question: "What's driving your need for messaging and copywriting?"*

**Price Impact:** None — informational only, triggers recommendations

| Option | Tooltip Content |
|--------|-----------------|
| Brand Messaging Foundation | **What it is:** Establishing core messaging framework for a new or evolving brand. **Ideal if:** You need foundational messaging before any copy is written. **Examples:** New brands, rebrands, positioning shifts |
| Website Copy | **What it is:** Copy for website pages — from single pages to full site. **Ideal if:** You're building or refreshing your website. **Examples:** New sites, redesigns, landing pages |
| Sales & Marketing Copy | **What it is:** Copy that drives leads and conversions — ads, emails, landing pages. **Ideal if:** You need copy that sells. **Examples:** Campaigns, funnels, lead generation |
| Product Copy | **What it is:** Copy for product descriptions, features, and UI. **Ideal if:** You sell products (physical or digital) needing compelling descriptions. **Examples:** E-commerce, SaaS, apps |
| Brand Voice Development | **What it is:** Defining how your brand sounds across all communications. **Ideal if:** You need consistent, distinctive brand voice. **Examples:** Growing brands, multi-writer teams |
| Content Writing | **What it is:** Long-form content — blog posts, articles, guides, thought leadership. **Ideal if:** You need quality content at scale. **Examples:** Content marketing, SEO, authority building |
| Sales Enablement | **What it is:** Copy that supports sales process — decks, proposals, case studies. **Ideal if:** You need materials that help close deals. **Examples:** B2B, enterprise sales, consultative selling |
| UX Writing | **What it is:** Microcopy for digital products — buttons, errors, onboarding, tooltips. **Ideal if:** You're building apps or digital experiences. **Examples:** Apps, SaaS, digital products |
| Complete Messaging & Copy | **What it is:** Full messaging framework plus copy across all touchpoints. **Ideal if:** You need comprehensive messaging and copy solution. **Examples:** Launches, rebrands, full programs |
| Other | **What it is:** Something unique or a combination of needs. **Ideal if:** Your situation doesn't fit standard categories — we'll tailor recommendations. |

```javascript
const messagingGoalOptions = [
  { id: "foundation", label: "Brand Messaging Foundation" },
  { id: "website", label: "Website Copy" },
  { id: "sales-marketing", label: "Sales & Marketing Copy" },
  { id: "product", label: "Product Copy" },
  { id: "voice", label: "Brand Voice Development" },
  { id: "content", label: "Content Writing" },
  { id: "sales-enablement", label: "Sales Enablement" },
  { id: "ux", label: "UX Writing" },
  { id: "complete", label: "Complete Messaging & Copy" },
  { id: "other", label: "Other" }
]
```

---

## Recommendation Presets (Based on Step 1)

When user selects a messaging goal, these options are **pre-selected** (but editable):

```javascript
const recommendationPresets = {
  "foundation": {
    messaging: "comprehensive",
    voice: "standard",
    website: "none",
    marketing: "none",
    sales: "none",
    product: "none",
    content: "none",
    ux: "none",
    retainer: "none"
  },
  "website": {
    messaging: "core",
    voice: "basic",
    website: "standard",
    marketing: "none",
    sales: "none",
    product: "none",
    content: "none",
    ux: "none",
    retainer: "none"
  },
  "sales-marketing": {
    messaging: "core",
    voice: "basic",
    website: "none",
    marketing: "comprehensive",
    sales: "none",
    product: "none",
    content: "none",
    ux: "none",
    retainer: "none"
  },
  "product": {
    messaging: "core",
    voice: "basic",
    website: "none",
    marketing: "none",
    sales: "none",
    product: "comprehensive",
    content: "none",
    ux: "basic",
    retainer: "none"
  },
  "voice": {
    messaging: "standard",
    voice: "comprehensive",
    website: "none",
    marketing: "none",
    sales: "none",
    product: "none",
    content: "none",
    ux: "none",
    retainer: "none"
  },
  "content": {
    messaging: "core",
    voice: "standard",
    website: "none",
    marketing: "none",
    sales: "none",
    product: "none",
    content: "standard",
    ux: "none",
    retainer: "light"
  },
  "sales-enablement": {
    messaging: "standard",
    voice: "basic",
    website: "none",
    marketing: "basic",
    sales: "comprehensive",
    product: "none",
    content: "none",
    ux: "none",
    retainer: "none"
  },
  "ux": {
    messaging: "core",
    voice: "standard",
    website: "none",
    marketing: "none",
    sales: "none",
    product: "none",
    content: "none",
    ux: "comprehensive",
    retainer: "none"
  },
  "complete": {
    messaging: "comprehensive",
    voice: "comprehensive",
    website: "comprehensive",
    marketing: "standard",
    sales: "standard",
    product: "none",
    content: "standard",
    ux: "none",
    retainer: "standard"
  },
  "other": {
    messaging: "core",
    voice: "basic",
    website: "none",
    marketing: "none",
    sales: "none",
    product: "none",
    content: "none",
    ux: "none",
    retainer: "none"
  }
}
```

---

## Step 2: Messaging Framework

*Question: "What level of messaging foundation do you need?"*

**Default:** Core Messaging

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** Skip messaging framework — go straight to copy. **Ideal if:** You have solid messaging already or just need tactical copy. **Examples:** Existing brands with clear messaging |
| Messaging Refresh | $500 | **What it is:** Review and refinement of existing messaging. **Ideal if:** Your messaging exists but needs updating or tightening. **Examples:** Minor updates, alignment check |
| Core Messaging | $1,200 | **What it is:** Essential messaging elements — positioning, value prop, key messages. **Ideal if:** You need foundational messaging building blocks. **Examples:** Startups, new initiatives |
| Standard Messaging | $2,200 | **What it is:** Complete messaging framework with audience-specific variations. **Ideal if:** You need comprehensive messaging for multiple contexts. **Examples:** Most businesses, B2B |
| Comprehensive Messaging | $3,800 | **What it is:** Full messaging architecture with detailed frameworks and sales messaging. **Ideal if:** You need extensive messaging for complex offerings. **Examples:** Enterprise, multi-product |
| Enterprise Messaging System | $6,000+ | **What it is:** Complete messaging ecosystem with governance and multi-stakeholder input. **Ideal if:** You have complex messaging needs across organization. **Examples:** Large enterprises, multi-brand |

**Included by tier:**

| Item | Refresh | Core | Standard | Comprehensive | Enterprise |
|------|---------|------|----------|---------------|------------|
| Positioning Statement | ✓ | ✓ | ✓ | ✓ | ✓ |
| Value Proposition | ✓ | ✓ | ✓ | ✓ | ✓ |
| Key Messages (3–5) | — | ✓ | ✓ | ✓ | ✓ |
| Elevator Pitch | — | ✓ | ✓ | ✓ | ✓ |
| Tagline Options | — | ✓ | ✓ | ✓ | ✓ |
| Audience-Specific Messages | — | — | ✓ | ✓ | ✓ |
| Proof Points | — | — | ✓ | ✓ | ✓ |
| Messaging by Funnel Stage | — | — | — | ✓ | ✓ |
| Competitive Differentiation | — | — | — | ✓ | ✓ |
| Objection Handling | — | — | — | ✓ | ✓ |
| Product/Service Messaging | — | — | — | — | ✓ |
| Internal Messaging | — | — | — | — | ✓ |
| Messaging Governance | — | — | — | — | ✓ |

```javascript
const messagingOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "refresh", label: "Messaging Refresh", price: 500, oneTime: true },
  { id: "core", label: "Core Messaging", price: 1200, oneTime: true },
  { id: "standard", label: "Standard Messaging", price: 2200, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Messaging", price: 3800, oneTime: true },
  { id: "enterprise", label: "Enterprise Messaging System", price: 6000, oneTime: true, startsAt: true }
]
```

---

## Step 3: Brand Voice & Tone

*Question: "What level of brand voice development do you need?"*

**Default:** Basic Voice

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No voice development — use existing or define later. **Ideal if:** You have established voice or it's not a priority. |
| Basic Voice | $400 | **What it is:** Core voice attributes and basic tone guidance. **Ideal if:** You need fundamental voice direction. **Examples:** Simple brands, solo writers |
| Standard Voice | $900 | **What it is:** Complete voice framework with personality, tone variations, and examples. **Ideal if:** You want consistent voice across writers and channels. **Examples:** Most businesses |
| Comprehensive Voice | $1,600 | **What it is:** Full voice system with detailed guidelines, do's/don'ts, and channel-specific direction. **Ideal if:** Voice is critical differentiator or you have multiple writers. **Examples:** Consumer brands, content-heavy |
| Voice System + Training | $2,500+ | **What it is:** Complete voice development plus team training and implementation support. **Ideal if:** You need organization-wide voice adoption. **Examples:** Enterprise, agencies, large teams |

**Included by tier:**

| Item | Basic | Standard | Comprehensive | + Training |
|------|-------|----------|---------------|------------|
| Voice Attributes (3–5) | ✓ | ✓ | ✓ | ✓ |
| Tone Description | ✓ | ✓ | ✓ | ✓ |
| Voice Personality | — | ✓ | ✓ | ✓ |
| Tone Variations by Context | — | ✓ | ✓ | ✓ |
| Writing Examples | — | ✓ | ✓ | ✓ |
| Do's and Don'ts | — | — | ✓ | ✓ |
| Channel-Specific Guidance | — | — | ✓ | ✓ |
| Vocabulary Guidelines | — | — | ✓ | ✓ |
| Voice Training Session | — | — | — | ✓ |
| Implementation Support | — | — | — | ✓ |

```javascript
const voiceOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "basic", label: "Basic Voice", price: 400, oneTime: true },
  { id: "standard", label: "Standard Voice", price: 900, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Voice", price: 1600, oneTime: true },
  { id: "training", label: "Voice System + Training", price: 2500, oneTime: true, startsAt: true }
]
```

---

## Step 4: Website Copy

*Question: "What website copy do you need?"*

**Default:** Not Needed

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No website copy required. **Ideal if:** Website isn't in scope or copy exists. |
| Landing Page (single) | $600 | **What it is:** One high-converting landing page. **Ideal if:** You need a focused conversion page. **Examples:** Campaign pages, lead gen, product launches |
| Core Pages (3–5 pages) | $1,400 | **What it is:** Essential website pages — home, about, services/product, contact. **Ideal if:** You need fundamental website copy. **Examples:** Small sites, MVPs |
| Standard Website (6–10 pages) | $2,800 | **What it is:** Complete website copy covering main sections. **Ideal if:** You need full website copywriting. **Examples:** Most business websites |
| Comprehensive Website (11–20 pages) | $4,800 | **What it is:** Extensive website copy including blog setup and resource pages. **Ideal if:** You have larger website with multiple sections. **Examples:** Larger businesses, content-rich sites |
| Enterprise Website (20+ pages) | $7,500+ | **What it is:** Full website ecosystem including all pages, landing pages, and microsites. **Ideal if:** You have complex website needs. **Examples:** Enterprise, multi-product, large sites |

**Per-page breakdown (approximate):**

| Page Type | Price Range |
|-----------|-------------|
| Homepage | $400–$600 |
| About Page | $300–$450 |
| Services/Product Page | $350–$500 |
| Landing Page | $500–$700 |
| Blog Post | $200–$400 |
| Resource/Guide Page | $300–$500 |
| FAQ Page | $200–$300 |
| Contact Page | $150–$200 |

```javascript
const websiteOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "landing", label: "Landing Page (single)", price: 600, oneTime: true },
  { id: "core", label: "Core Pages (3–5 pages)", price: 1400, oneTime: true },
  { id: "standard", label: "Standard Website (6–10 pages)", price: 2800, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Website (11–20 pages)", price: 4800, oneTime: true },
  { id: "enterprise", label: "Enterprise Website (20+ pages)", price: 7500, oneTime: true, startsAt: true }
]
```

---

## Step 5: Marketing & Advertising Copy

*Question: "What marketing copy do you need?"*

**Default:** Not Needed

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No marketing copy required. **Ideal if:** Marketing copy isn't in scope. |
| Basic Package | $500 | **What it is:** Ad copy set or email sequence (choose one). **Ideal if:** You need focused marketing copy. **Examples:** Single campaign, email nurture |
| Standard Package | $1,200 | **What it is:** Ad copy + email sequence + landing page copy. **Ideal if:** You need integrated campaign copy. **Examples:** Lead gen campaigns, launches |
| Comprehensive Package | $2,400 | **What it is:** Full campaign copy across multiple channels and formats. **Ideal if:** You're running significant marketing campaigns. **Examples:** Major launches, multi-channel campaigns |
| Premium Package | $4,000+ | **What it is:** Complete marketing copy system with testing variations and ongoing optimization. **Ideal if:** Marketing copy is critical to growth. **Examples:** Performance marketing, scaled campaigns |

**Included by tier:**

| Item | Basic | Standard | Comprehensive | Premium |
|------|-------|----------|---------------|---------|
| Ad Copy Set (5–10 variations) | ✓ | ✓ | ✓ | ✓ |
| Email Sequence (3–5 emails) | ✓ | ✓ | ✓ | ✓ |
| Landing Page Copy | — | ✓ | ✓ | ✓ |
| Social Ad Copy | — | ✓ | ✓ | ✓ |
| Extended Email Sequence (8+) | — | — | ✓ | ✓ |
| Multiple Landing Pages | — | — | ✓ | ✓ |
| A/B Test Variations | — | — | ✓ | ✓ |
| Full Funnel Copy | — | — | — | ✓ |
| Ongoing Optimization | — | — | — | ✓ |

```javascript
const marketingOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "basic", label: "Basic Package", price: 500, oneTime: true },
  { id: "standard", label: "Standard Package", price: 1200, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Package", price: 2400, oneTime: true },
  { id: "premium", label: "Premium Package", price: 4000, oneTime: true, startsAt: true }
]
```

---

## Step 6: Sales Enablement Copy

*Question: "What sales materials do you need?"*

**Default:** Not Needed

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No sales copy required. **Ideal if:** Sales materials aren't in scope. |
| Basic Package | $600 | **What it is:** One-pager/sell sheet or case study. **Ideal if:** You need essential sales leave-behind. **Examples:** Single sales tool |
| Standard Package | $1,400 | **What it is:** Sell sheet + case study + proposal template. **Ideal if:** You need core sales toolkit. **Examples:** B2B sales basics |
| Comprehensive Package | $2,800 | **What it is:** Complete sales toolkit including deck, case studies, and proposal system. **Ideal if:** You have active sales team needing materials. **Examples:** Sales-driven businesses |
| Premium Package | $4,500+ | **What it is:** Full sales enablement library with multiple formats and ongoing updates. **Ideal if:** Sales content is critical to revenue. **Examples:** Enterprise sales, complex B2B |

**Included by tier:**

| Item | Basic | Standard | Comprehensive | Premium |
|------|-------|----------|---------------|---------|
| One-Pager / Sell Sheet | ✓ | ✓ | ✓ | ✓ |
| Case Study (1) | ✓ | ✓ | ✓ | ✓ |
| Proposal Template | — | ✓ | ✓ | ✓ |
| Sales Deck Copy | — | ✓ | ✓ | ✓ |
| Additional Case Studies (2+) | — | — | ✓ | ✓ |
| Battle Cards | — | — | ✓ | ✓ |
| ROI Calculator Copy | — | — | — | ✓ |
| Sales Email Templates | — | — | — | ✓ |
| Objection Handling Scripts | — | — | — | ✓ |

```javascript
const salesOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "basic", label: "Basic Package", price: 600, oneTime: true },
  { id: "standard", label: "Standard Package", price: 1400, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Package", price: 2800, oneTime: true },
  { id: "premium", label: "Premium Package", price: 4500, oneTime: true, startsAt: true }
]
```

---

## Step 7: Product Copy

*Question: "What product copy do you need?"*

**Default:** Not Needed

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No product copy required. **Ideal if:** You don't sell products or have copy covered. |
| Basic Package | $500 | **What it is:** Product descriptions for small catalog (5–10 products). **Ideal if:** You have limited product range. **Examples:** Small e-commerce, featured products |
| Standard Package | $1,200 | **What it is:** Product descriptions + category copy (20–30 products). **Ideal if:** You have moderate product catalog. **Examples:** Growing e-commerce |
| Comprehensive Package | $2,400 | **What it is:** Full product copy system (50–75 products) with SEO optimization. **Ideal if:** You have significant product catalog. **Examples:** Established e-commerce |
| Premium Package | $4,000+ | **What it is:** Complete product content (100+ products) with templates and scalable system. **Ideal if:** You have large catalog needing consistent copy. **Examples:** Large e-commerce, marketplaces |

```javascript
const productOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "basic", label: "Basic Package (5–10 products)", price: 500, oneTime: true },
  { id: "standard", label: "Standard Package (20–30 products)", price: 1200, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Package (50–75 products)", price: 2400, oneTime: true },
  { id: "premium", label: "Premium Package (100+ products)", price: 4000, oneTime: true, startsAt: true }
]
```

---

## Step 8: Content Writing

*Question: "What content writing do you need?"*

**Default:** Not Needed

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No content writing required. **Ideal if:** Content writing isn't in scope. |
| Starter Package | $800 | **What it is:** 2 blog posts or articles (~1,000–1,500 words each). **Ideal if:** You need quality content to start. **Examples:** Blog launch, initial content |
| Standard Package | $1,800 | **What it is:** 5 blog posts or articles with SEO optimization. **Ideal if:** You want meaningful content foundation. **Examples:** Content marketing kickoff |
| Comprehensive Package | $3,500 | **What it is:** 10 pieces of content including blogs, guides, and thought leadership. **Ideal if:** You're building content library. **Examples:** Authority building, SEO |
| Premium Package | $6,000+ | **What it is:** 20+ pieces of content with full content strategy alignment. **Ideal if:** Content is major marketing investment. **Examples:** Content-driven growth |

**Content types included:**
- Blog posts (800–1,500 words)
- Long-form articles (1,500–2,500 words)
- Guides and how-tos
- Thought leadership pieces
- LinkedIn articles
- Guest posts

```javascript
const contentOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "starter", label: "Starter Package (2 pieces)", price: 800, oneTime: true },
  { id: "standard", label: "Standard Package (5 pieces)", price: 1800, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Package (10 pieces)", price: 3500, oneTime: true },
  { id: "premium", label: "Premium Package (20+ pieces)", price: 6000, oneTime: true, startsAt: true }
]
```

---

## Step 9: UX Writing

*Question: "What UX writing do you need?"*

**Default:** Not Needed

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No UX writing required. **Ideal if:** You don't have digital product or UX is covered. |
| Basic Package | $600 | **What it is:** Core UX copy for key flows (onboarding, main actions). **Ideal if:** You need essential product copy. **Examples:** MVP, simple apps |
| Standard Package | $1,400 | **What it is:** Comprehensive UX copy covering main user journeys. **Ideal if:** You need solid product copy foundation. **Examples:** Apps, SaaS products |
| Comprehensive Package | $2,800 | **What it is:** Full UX writing including all flows, errors, empty states, and help content. **Ideal if:** You want complete product copy coverage. **Examples:** Complex products |
| Premium Package | $4,500+ | **What it is:** Complete UX writing system with guidelines and content design framework. **Ideal if:** UX writing is ongoing need. **Examples:** Product teams, enterprise software |

**UX writing elements:**
- Buttons and CTAs
- Form labels and helpers
- Error messages
- Success messages
- Empty states
- Onboarding flows
- Tooltips and hints
- Navigation labels
- Notifications
- Help content

```javascript
const uxOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "basic", label: "Basic Package", price: 600, oneTime: true },
  { id: "standard", label: "Standard Package", price: 1400, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Package", price: 2800, oneTime: true },
  { id: "premium", label: "Premium Package", price: 4500, oneTime: true, startsAt: true }
]
```

---

## Step 10: Ongoing Copy Retainer

*Question: "Do you need ongoing copywriting support?"*

**Default:** Not Needed

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0/mo | **What it is:** Project-based only, no ongoing retainer. **Ideal if:** You have one-time needs or in-house writers. |
| Light Retainer | $800/mo | **What it is:** ~5 hours/month of copywriting support. **Ideal if:** You need occasional copy help. **Examples:** Ad hoc needs, overflow support |
| Standard Retainer | $1,500/mo | **What it is:** ~10 hours/month of dedicated copywriting. **Ideal if:** You have regular copy needs. **Examples:** Ongoing marketing, content |
| Growth Retainer | $2,800/mo | **What it is:** ~20 hours/month of copywriting with priority access. **Ideal if:** You have significant ongoing copy requirements. **Examples:** Active marketing, scaling |
| Premium Retainer | $4,500/mo+ | **What it is:** ~35 hours/month as embedded copy resource. **Ideal if:** You need near-full-time copy support. **Examples:** High-growth, content-heavy |

**Retainer benefits:**
- Priority scheduling
- Faster turnaround
- Dedicated writer familiarity
- Rollover hours (limited)
- Monthly strategy call

```javascript
const retainerOptions = [
  { id: "none", label: "Not Needed", price: 0, recurring: "monthly" },
  { id: "light", label: "Light Retainer (~5 hrs/mo)", price: 800, recurring: "monthly" },
  { id: "standard", label: "Standard Retainer (~10 hrs/mo)", price: 1500, recurring: "monthly" },
  { id: "growth", label: "Growth Retainer (~20 hrs/mo)", price: 2800, recurring: "monthly" },
  { id: "premium", label: "Premium Retainer (~35 hrs/mo)", price: 4500, recurring: "monthly", startsAt: true }
]
```

---

## Step 11: Add-on Services

*Question: "Select any additional services you need."*

Each add-on can be **selected/deselected**.

| Option | Price | Tooltip |
|--------|-------|---------|
| Tagline Development | $600 | **What it is:** Strategic tagline creation with multiple options. **Ideal if:** You need memorable brand tagline. **Examples:** Brand taglines, campaign lines |
| Naming (Product/Service) | $1,200 | **What it is:** Strategic naming with research and options. **Ideal if:** You need names for products or services. **Examples:** Product launches, service naming |
| Bio Writing (Founder/Team) | $300 | **What it is:** Professional bios for key people. **Ideal if:** You need polished team bios. **Examples:** About pages, LinkedIn, speaking |
| Testimonial Development | $400 | **What it is:** Interview and write customer testimonials. **Ideal if:** You need compelling social proof. **Examples:** Website, sales materials |
| Press Release | $500 | **What it is:** Professional press release writing. **Ideal if:** You have newsworthy announcements. **Examples:** Launches, funding, partnerships |
| Video Scripts | $700 | **What it is:** Scripts for brand or explainer videos. **Ideal if:** You're producing video content. **Examples:** Brand videos, explainers, ads |
| Podcast/Webinar Scripts | $500 | **What it is:** Scripts and talking points for audio/video content. **Ideal if:** You host podcasts or webinars. **Examples:** Episode scripts, webinar content |
| Social Media Copy Bank | $600 | **What it is:** Bank of social media posts across platforms. **Ideal if:** You need social content ready to go. **Examples:** Launch content, ongoing social |
| Email Templates | $400 | **What it is:** Templated emails for common communications. **Ideal if:** You need consistent email responses. **Examples:** Customer service, sales outreach |
| Style Guide (Copy) | $500 | **What it is:** Writing style guide for consistency. **Ideal if:** Multiple people write for your brand. **Examples:** Teams, freelancer management |
| Copy Audit | $600 | **What it is:** Review of existing copy with recommendations. **Ideal if:** You want expert assessment. **Examples:** Before rewrite, optimization |
| Rush Delivery | +25% | **What it is:** Expedited delivery for urgent needs. **Ideal if:** You have tight deadlines. **Examples:** Last-minute campaigns |

```javascript
const addOnServices = [
  { id: "tagline", label: "Tagline Development", price: 600, oneTime: true },
  { id: "naming", label: "Naming (Product/Service)", price: 1200, oneTime: true },
  { id: "bios", label: "Bio Writing (Founder/Team)", price: 300, oneTime: true },
  { id: "testimonials", label: "Testimonial Development", price: 400, oneTime: true },
  { id: "press-release", label: "Press Release", price: 500, oneTime: true },
  { id: "video-scripts", label: "Video Scripts", price: 700, oneTime: true },
  { id: "podcast-scripts", label: "Podcast/Webinar Scripts", price: 500, oneTime: true },
  { id: "social-bank", label: "Social Media Copy Bank", price: 600, oneTime: true },
  { id: "email-templates", label: "Email Templates", price: 400, oneTime: true },
  { id: "style-guide", label: "Style Guide (Copy)", price: 500, oneTime: true },
  { id: "copy-audit", label: "Copy Audit", price: 600, oneTime: true }
]
```

---

## Step 12: Timeline

*Question: "When do you need this completed?"*

**Default:** Flexible (4–6 weeks)

*Note: Timeline applies to one-time project work. Retainer work is ongoing.*

| Option | Price Impact | Tooltip |
|--------|--------------|---------|
| Flexible (4–6 weeks) | +0% | **What it is:** Standard timeline allowing thorough development and revisions. **Ideal if:** You can plan ahead for best results. **Examples:** Most projects |
| Standard (2–4 weeks) | +10% | **What it is:** Slightly accelerated timeline with focused execution. **Ideal if:** You have a target date but some flexibility. **Examples:** Planned launches |
| Accelerated (1–2 weeks) | +25% | **What it is:** Fast-tracked delivery requiring prioritized scheduling. **Ideal if:** You have a firm deadline approaching. **Examples:** Campaign deadlines |
| Rush (Under 1 week) | +50% | **What it is:** Expedited delivery with dedicated resources. **Ideal if:** You have an immediate need. **Examples:** Urgent campaigns, crisis response |

```javascript
const timelineOptions = [
  { id: "flexible", label: "Flexible (4–6 weeks)", multiplier: 1.0 },
  { id: "standard", label: "Standard (2–4 weeks)", multiplier: 1.10 },
  { id: "accelerated", label: "Accelerated (1–2 weeks)", multiplier: 1.25 },
  { id: "rush", label: "Rush (Under 1 week)", multiplier: 1.50 }
]
```

---

## Summary Screen

### UI Elements

1. **Selection Summary Table**
   - Separates One-Time Costs from Monthly Costs
   - Shows timeline premium applied to one-time work
   - Editable — clicking any row returns to that step

2. **Price Calculation Display**
   ```
   YOUR CUSTOM MESSAGING & COPYWRITING PLAN
   ────────────────────────────────────────

   ONE-TIME COSTS

   MESSAGING FOUNDATION
   Messaging Framework         Standard Messaging          $2,200
   Brand Voice                 Standard Voice              $900
   ────────────────────────────────────────
   Messaging Foundation Subtotal                           $3,100

   COPY PRODUCTION
   Website Copy                Standard (6–10 pages)       $2,800
   Marketing Copy              Standard Package            $1,200
   Sales Copy                  Not Needed                  $0
   Product Copy                Not Needed                  $0
   Content Writing             Starter Package             $800
   UX Writing                  Not Needed                  $0
   ────────────────────────────────────────
   Copy Production Subtotal                                $4,800

   ADD-ONS
   Tagline Development         —                           $600
   Bio Writing                 —                           $300
   ────────────────────────────────────────
   Add-ons Total                                           $900

   ────────────────────────────────────────
   One-Time Subtotal                                       $8,800
   Timeline                    Standard (+10%)             $880
   ────────────────────────────────────────
   ONE-TIME TOTAL                                          $9,680


   MONTHLY COSTS

   Ongoing Retainer            Light Retainer              $800/mo
   ────────────────────────────────────────
   MONTHLY TOTAL                                           $800/mo


   INVESTMENT SUMMARY
   One-Time Investment         $9,680
   Monthly Retainer            $800/mo

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
| Do you have brand guidelines? | Select | No |
| Project Notes | Textarea | No |

---

## Confirmation Screen

```
✓ Quote Request Submitted

Thanks, [Name]! We've received your custom messaging & copywriting plan.

What's next:
• We'll review your selections within 24–48 hours
• You'll receive a detailed proposal via email
• We'll schedule a discovery call to discuss your messaging needs

Your Reference: #MC-[timestamp]
```

---

## Data Models

### Builder State

```javascript
const builderState = {
  // Step 1
  messagingGoal: "website", // info only, no price
  
  // Step 2
  messaging: {
    selected: "standard",
    price: 2200,
    oneTime: true
  },
  
  // Step 3
  voice: {
    selected: "standard",
    price: 900,
    oneTime: true
  },
  
  // Step 4
  website: {
    selected: "standard",
    price: 2800,
    oneTime: true
  },
  
  // Step 5
  marketing: {
    selected: "standard",
    price: 1200,
    oneTime: true
  },
  
  // Step 6
  sales: {
    selected: "none",
    price: 0
  },
  
  // Step 7
  product: {
    selected: "none",
    price: 0
  },
  
  // Step 8
  content: {
    selected: "starter",
    price: 800,
    oneTime: true
  },
  
  // Step 9
  ux: {
    selected: "none",
    price: 0
  },
  
  // Step 10
  retainer: {
    selected: "light",
    price: 800,
    recurring: "monthly"
  },
  
  // Step 11 - Add-ons
  addOns: [
    { id: "tagline", price: 600, oneTime: true },
    { id: "bios", price: 300, oneTime: true }
  ],
  
  // Step 12
  timeline: {
    selected: "standard",
    multiplier: 1.10
  },
  
  // Calculated
  messagingFoundationSubtotal: 3100,
  copyProductionSubtotal: 4800,
  addOnsTotal: 900,
  oneTimeSubtotal: 8800,
  timelinePremium: 880,
  oneTimeTotal: 9680,
  monthlyTotal: 800,
  hasCustomQuote: false,
  
  // Customer Info
  customer: {
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    industry: "",
    hasGuidelines: "",
    notes: ""
  }
}
```

### Price Calculation Logic

```javascript
function calculateTotal(state) {
  let messagingFoundationSubtotal = 0;
  let copyProductionSubtotal = 0;
  let addOnsTotal = 0;
  let monthlyTotal = 0;
  let hasCustomQuote = false;
  
  // Messaging Foundation
  if (state.messaging.price === null) {
    hasCustomQuote = true;
  } else {
    messagingFoundationSubtotal += state.messaging.price;
  }
  
  if (state.voice.price === null) {
    hasCustomQuote = true;
  } else {
    messagingFoundationSubtotal += state.voice.price;
  }
  
  // Copy Production
  if (state.website.price === null) {
    hasCustomQuote = true;
  } else {
    copyProductionSubtotal += state.website.price;
  }
  
  if (state.marketing.price === null) {
    hasCustomQuote = true;
  } else {
    copyProductionSubtotal += state.marketing.price;
  }
  
  copyProductionSubtotal += state.sales.price || 0;
  copyProductionSubtotal += state.product.price || 0;
  
  if (state.content.price === null) {
    hasCustomQuote = true;
  } else {
    copyProductionSubtotal += state.content.price;
  }
  
  if (state.ux.price === null) {
    hasCustomQuote = true;
  } else {
    copyProductionSubtotal += state.ux.price;
  }
  
  // Add-ons (one-time)
  state.addOns.forEach(addon => {
    if (addon.oneTime) {
      if (addon.price === null) {
        hasCustomQuote = true;
      } else {
        addOnsTotal += addon.price;
      }
    }
  });
  
  // One-time subtotal
  const oneTimeSubtotal = messagingFoundationSubtotal + copyProductionSubtotal + addOnsTotal;
  
  // Timeline multiplier (applies to one-time only)
  const multiplier = state.timeline.multiplier;
  const timelinePremium = oneTimeSubtotal * (multiplier - 1);
  const oneTimeTotal = oneTimeSubtotal * multiplier;
  
  // Monthly (retainer)
  monthlyTotal = state.retainer.price || 0;
  
  return {
    messagingFoundationSubtotal: messagingFoundationSubtotal,
    copyProductionSubtotal: copyProductionSubtotal,
    addOnsTotal: addOnsTotal,
    oneTimeSubtotal: oneTimeSubtotal,
    timelinePremium: timelinePremium,
    oneTimeTotal: oneTimeTotal,
    monthlyTotal: monthlyTotal,
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
- Clearly separate **One-Time** vs **Monthly** costs throughout
- Show timeline premium applied to one-time work only
- Display both totals prominently

### Real-time Price Update
- Sticky footer or sidebar showing running totals (one-time + monthly)
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

### Quick Reference - Messaging Foundation

| Category | Option | Price |
|----------|--------|-------|
| **Messaging Framework** | Not Needed | $0 |
| | Messaging Refresh | $500 |
| | Core Messaging | $1,200 |
| | Standard Messaging | $2,200 |
| | Comprehensive Messaging | $3,800 |
| | Enterprise Messaging | $6,000+ |
| **Brand Voice** | Not Needed | $0 |
| | Basic Voice | $400 |
| | Standard Voice | $900 |
| | Comprehensive Voice | $1,600 |
| | Voice + Training | $2,500+ |

### Quick Reference - Copy Production

| Category | Option | Price |
|----------|--------|-------|
| **Website Copy** | Not Needed | $0 |
| | Landing Page (single) | $600 |
| | Core Pages (3–5) | $1,400 |
| | Standard (6–10) | $2,800 |
| | Comprehensive (11–20) | $4,800 |
| | Enterprise (20+) | $7,500+ |
| **Marketing Copy** | Not Needed | $0 |
| | Basic Package | $500 |
| | Standard Package | $1,200 |
| | Comprehensive Package | $2,400 |
| | Premium Package | $4,000+ |
| **Sales Copy** | Not Needed | $0 |
| | Basic Package | $600 |
| | Standard Package | $1,400 |
| | Comprehensive Package | $2,800 |
| | Premium Package | $4,500+ |
| **Product Copy** | Not Needed | $0 |
| | Basic (5–10 products) | $500 |
| | Standard (20–30) | $1,200 |
| | Comprehensive (50–75) | $2,400 |
| | Premium (100+) | $4,000+ |
| **Content Writing** | Not Needed | $0 |
| | Starter (2 pieces) | $800 |
| | Standard (5 pieces) | $1,800 |
| | Comprehensive (10 pieces) | $3,500 |
| | Premium (20+ pieces) | $6,000+ |
| **UX Writing** | Not Needed | $0 |
| | Basic Package | $600 |
| | Standard Package | $1,400 |
| | Comprehensive Package | $2,800 |
| | Premium Package | $4,500+ |

### Quick Reference - Retainer

| Option | Price |
|--------|-------|
| Not Needed | $0/mo |
| Light (~5 hrs/mo) | $800/mo |
| Standard (~10 hrs/mo) | $1,500/mo |
| Growth (~20 hrs/mo) | $2,800/mo |
| Premium (~35 hrs/mo) | $4,500/mo+ |

### Quick Reference - Add-ons

| Service | Price |
|---------|-------|
| Tagline Development | $600 |
| Naming (Product/Service) | $1,200 |
| Bio Writing | $300 |
| Testimonial Development | $400 |
| Press Release | $500 |
| Video Scripts | $700 |
| Podcast/Webinar Scripts | $500 |
| Social Media Copy Bank | $600 |
| Email Templates | $400 |
| Style Guide (Copy) | $500 |
| Copy Audit | $600 |

### Quick Reference - Timeline

| Timeline | Multiplier | Effect |
|----------|------------|--------|
| Flexible (4–6 weeks) | 1.0 | Base price |
| Standard (2–4 weeks) | 1.10 | +10% premium |
| Accelerated (1–2 weeks) | 1.25 | +25% premium |
| Rush (Under 1 week) | 1.50 | +50% premium |

---

## Price Examples

### Example 1: Website Copy Only

| Selection | Option | Price |
|-----------|--------|-------|
| **Messaging Foundation** | | |
| Messaging Framework | Core Messaging | $1,200 |
| Brand Voice | Basic Voice | $400 |
| **Subtotal** | | **$1,600** |
| | | |
| **Copy Production** | | |
| Website Copy | Standard (6–10 pages) | $2,800 |
| All Other Copy | Not Needed | $0 |
| **Subtotal** | | **$2,800** |
| | | |
| **One-Time Subtotal** | | **$4,400** |
| Timeline | Flexible | +0% |
| **One-Time Total** | | **$4,400** |
| | | |
| **Monthly** | | |
| Retainer | Not Needed | $0/mo |

---

### Example 2: Brand Messaging + Website

| Selection | Option | Price |
|-----------|--------|-------|
| **Messaging Foundation** | | |
| Messaging Framework | Standard Messaging | $2,200 |
| Brand Voice | Standard Voice | $900 |
| **Subtotal** | | **$3,100** |
| | | |
| **Copy Production** | | |
| Website Copy | Standard (6–10 pages) | $2,800 |
| Marketing Copy | Standard Package | $1,200 |
| Content Writing | Starter Package | $800 |
| All Other Copy | Not Needed | $0 |
| **Subtotal** | | **$4,800** |
| | | |
| **Add-ons** | | |
| Tagline Development | — | $600 |
| Bio Writing | — | $300 |
| **Add-ons Total** | | **$900** |
| | | |
| **One-Time Subtotal** | | **$8,800** |
| Timeline | Standard (+10%) | $880 |
| **One-Time Total** | | **$9,680** |
| | | |
| **Monthly** | | |
| Retainer | Light (~5 hrs/mo) | $800/mo |

---

### Example 3: Sales Enablement Focus

| Selection | Option | Price |
|-----------|--------|-------|
| **Messaging Foundation** | | |
| Messaging Framework | Standard Messaging | $2,200 |
| Brand Voice | Basic Voice | $400 |
| **Subtotal** | | **$2,600** |
| | | |
| **Copy Production** | | |
| Website Copy | Core Pages (3–5) | $1,400 |
| Marketing Copy | Basic Package | $500 |
| Sales Copy | Comprehensive Package | $2,800 |
| All Other Copy | Not Needed | $0 |
| **Subtotal** | | **$4,700** |
| | | |
| **Add-ons** | | |
| Testimonial Development | — | $400 |
| Video Scripts | — | $700 |
| **Add-ons Total** | | **$1,100** |
| | | |
| **One-Time Subtotal** | | **$8,400** |
| Timeline | Flexible | +0% |
| **One-Time Total** | | **$8,400** |
| | | |
| **Monthly** | | |
| Retainer | Not Needed | $0/mo |

---

### Example 4: Complete Messaging & Copy Program

| Selection | Option | Price |
|-----------|--------|-------|
| **Messaging Foundation** | | |
| Messaging Framework | Comprehensive Messaging | $3,800 |
| Brand Voice | Comprehensive Voice | $1,600 |
| **Subtotal** | | **$5,400** |
| | | |
| **Copy Production** | | |
| Website Copy | Comprehensive (11–20 pages) | $4,800 |
| Marketing Copy | Comprehensive Package | $2,400 |
| Sales Copy | Standard Package | $1,400 |
| Content Writing | Standard Package (5 pieces) | $1,800 |
| All Other Copy | Not Needed | $0 |
| **Subtotal** | | **$10,400** |
| | | |
| **Add-ons** | | |
| Tagline Development | — | $600 |
| Bio Writing | — | $300 |
| Testimonial Development | — | $400 |
| Press Release | — | $500 |
| Social Media Copy Bank | — | $600 |
| Style Guide (Copy) | — | $500 |
| **Add-ons Total** | | **$2,900** |
| | | |
| **One-Time Subtotal** | | **$18,700** |
| Timeline | Standard (+10%) | $1,870 |
| **One-Time Total** | | **$20,570** |
| | | |
| **Monthly** | | |
| Retainer | Standard (~10 hrs/mo) | $1,500/mo |

---

## Integration Notes

- This custom builder lives alongside the standard tier selection (Essential/Pro/Enterprise)
- Customer can switch between "Choose a Package" and "Build Custom" views
- If custom total is close to a tier price, optionally suggest the tier as simpler option
- All data structures are API-ready for future backend integration
- Messaging goal recommendations should guide users toward appropriate selections
- Consider showing "Popular for [Goal]" badges on recommended options
- Timeline multipliers apply to one-time project work only, not retainers
- Clearly separate one-time and monthly costs in all displays
- Pairs well with Brand Strategy (messaging) and Content Strategy (content planning)
- Retainer provides ongoing copy support after initial project
