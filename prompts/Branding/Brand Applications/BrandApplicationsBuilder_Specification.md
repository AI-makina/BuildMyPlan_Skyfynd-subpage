# Brand Applications Custom Builder - Feature Specification

## Overview

The Brand Applications Custom Builder is an interactive step-by-step configurator that allows customers to build their own brand applications package according to their specific needs. Brand Applications focuses on the practical implementation of visual identity across real-world touchpoints — taking the brand from guidelines to tangible assets. When a customer clicks "Custom" instead of selecting a pre-defined tier (Essential/Pro/Enterprise), they enter this guided builder flow.

---

## Core Mechanics

### Pricing Logic
- **Step 1 (Application Goal):** Information only — NO price impact
- **Steps 2–10:** All pricing calculated from these selections
- **One-time project pricing:** Brand applications is typically a one-time engagement
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

## Step 1: Application Goal (Info Only)

*Question: "What's driving your need for brand applications?"*

**Price Impact:** None — informational only, triggers recommendations

| Option | Tooltip Content |
|--------|-----------------|
| New Brand Launch | **What it is:** Creating all essential brand touchpoints for a new brand. **Ideal if:** You've completed visual identity and need to bring it to life. **Examples:** Startups, new businesses, product launches |
| Rebrand Rollout | **What it is:** Updating all brand materials following a rebrand. **Ideal if:** You've refreshed your identity and need materials updated. **Examples:** Post-rebrand implementation, visual refresh rollout |
| Business Essentials | **What it is:** Core business materials like cards, letterhead, and email signatures. **Ideal if:** You need professional basics for day-to-day business. **Examples:** New hires, office setup, client-facing materials |
| Digital Presence | **What it is:** Digital assets for web, social, and online presence. **Ideal if:** You need branded digital materials across platforms. **Examples:** Social media, email, digital ads, web assets |
| Marketing Collateral | **What it is:** Sales and marketing materials to support business development. **Ideal if:** You need materials to support sales and marketing efforts. **Examples:** Brochures, sell sheets, presentations, proposals |
| Physical Environment | **What it is:** Signage, environmental graphics, and physical brand presence. **Ideal if:** You have offices, retail, or event spaces needing branding. **Examples:** Office signage, trade shows, retail environments |
| Product & Packaging | **What it is:** Product packaging, labels, and product-related materials. **Ideal if:** You sell physical products needing branded packaging. **Examples:** Product boxes, labels, inserts, shipping materials |
| Events & Experiential | **What it is:** Event materials, booth designs, and experiential brand touchpoints. **Ideal if:** You attend or host events requiring branded presence. **Examples:** Trade shows, conferences, pop-ups, activations |
| Complete Application Suite | **What it is:** Comprehensive brand applications across all touchpoints. **Ideal if:** You need full implementation of brand across everything. **Examples:** Complete brand rollouts, enterprise implementation |
| Other | **What it is:** Something unique or a combination of needs. **Ideal if:** Your situation doesn't fit standard categories — we'll tailor recommendations. |

```javascript
const applicationGoalOptions = [
  { id: "launch", label: "New Brand Launch" },
  { id: "rebrand", label: "Rebrand Rollout" },
  { id: "essentials", label: "Business Essentials" },
  { id: "digital", label: "Digital Presence" },
  { id: "marketing", label: "Marketing Collateral" },
  { id: "environment", label: "Physical Environment" },
  { id: "packaging", label: "Product & Packaging" },
  { id: "events", label: "Events & Experiential" },
  { id: "complete", label: "Complete Application Suite" },
  { id: "other", label: "Other" }
]
```

---

## Recommendation Presets (Based on Step 1)

When user selects an application goal, these options are **pre-selected** (but editable):

```javascript
const recommendationPresets = {
  "launch": {
    stationery: "standard",
    digital: "standard",
    social: "standard",
    presentations: "standard",
    marketing: "basic",
    signage: "none",
    packaging: "none",
    events: "none"
  },
  "rebrand": {
    stationery: "standard",
    digital: "standard",
    social: "standard",
    presentations: "standard",
    marketing: "standard",
    signage: "basic",
    packaging: "none",
    events: "none"
  },
  "essentials": {
    stationery: "standard",
    digital: "basic",
    social: "none",
    presentations: "basic",
    marketing: "none",
    signage: "none",
    packaging: "none",
    events: "none"
  },
  "digital": {
    stationery: "none",
    digital: "comprehensive",
    social: "comprehensive",
    presentations: "standard",
    marketing: "none",
    signage: "none",
    packaging: "none",
    events: "none"
  },
  "marketing": {
    stationery: "basic",
    digital: "basic",
    social: "basic",
    presentations: "comprehensive",
    marketing: "comprehensive",
    signage: "none",
    packaging: "none",
    events: "none"
  },
  "environment": {
    stationery: "none",
    digital: "none",
    social: "none",
    presentations: "none",
    marketing: "none",
    signage: "comprehensive",
    packaging: "none",
    events: "basic"
  },
  "packaging": {
    stationery: "none",
    digital: "none",
    social: "none",
    presentations: "none",
    marketing: "basic",
    signage: "none",
    packaging: "comprehensive",
    events: "none"
  },
  "events": {
    stationery: "basic",
    digital: "basic",
    social: "standard",
    presentations: "standard",
    marketing: "standard",
    signage: "basic",
    packaging: "none",
    events: "comprehensive"
  },
  "complete": {
    stationery: "comprehensive",
    digital: "comprehensive",
    social: "comprehensive",
    presentations: "comprehensive",
    marketing: "comprehensive",
    signage: "standard",
    packaging: "standard",
    events: "standard"
  },
  "other": {
    stationery: "basic",
    digital: "basic",
    social: "basic",
    presentations: "basic",
    marketing: "none",
    signage: "none",
    packaging: "none",
    events: "none"
  }
}
```

---

## Step 2: Stationery & Business Essentials

*Question: "What business stationery do you need?"*

**Default:** Standard Package

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No stationery required. **Ideal if:** You already have stationery or operate entirely digitally. **Examples:** Digital-only businesses |
| Basic Package | $400 | **What it is:** Business card design only. **Ideal if:** You just need cards to hand out. **Examples:** Freelancers, consultants, minimal needs |
| Standard Package | $800 | **What it is:** Business cards, letterhead, and email signature. **Ideal if:** You need core professional materials. **Examples:** Most businesses, client-facing roles |
| Comprehensive Package | $1,400 | **What it is:** Cards, letterhead, envelopes, email signature, and additional items. **Ideal if:** You need full stationery suite. **Examples:** Professional services, established businesses |
| Premium Package | $2,200+ | **What it is:** Complete stationery system with multiple card types, folders, notecards, and specialty items. **Ideal if:** You need extensive, premium business materials. **Examples:** Law firms, agencies, luxury brands |

**Included items by tier:**

| Item | Basic | Standard | Comprehensive | Premium |
|------|-------|----------|---------------|---------|
| Business Cards | ✓ | ✓ | ✓ | ✓ |
| Letterhead | — | ✓ | ✓ | ✓ |
| Email Signature | — | ✓ | ✓ | ✓ |
| Envelope (#10) | — | — | ✓ | ✓ |
| Second Card Design | — | — | ✓ | ✓ |
| Notecard / Thank You | — | — | — | ✓ |
| Presentation Folder | — | — | — | ✓ |
| Mailing Label | — | — | — | ✓ |
| Custom Items | — | — | — | ✓ |

```javascript
const stationeryOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "basic", label: "Basic Package", price: 400, oneTime: true },
  { id: "standard", label: "Standard Package", price: 800, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Package", price: 1400, oneTime: true },
  { id: "premium", label: "Premium Package", price: 2200, oneTime: true, startsAt: true }
]
```

---

## Step 3: Digital Assets & Templates

*Question: "What digital assets do you need?"*

**Default:** Standard Package

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No digital assets required. **Ideal if:** You have digital materials covered or don't need them. |
| Basic Package | $350 | **What it is:** Email signature and basic document templates. **Ideal if:** You need minimal digital presence. **Examples:** Email-focused businesses |
| Standard Package | $700 | **What it is:** Email templates, document templates, and web graphics. **Ideal if:** You need core digital assets. **Examples:** Most businesses |
| Comprehensive Package | $1,200 | **What it is:** Full digital asset suite including newsletters, forms, and ad templates. **Ideal if:** You have extensive digital touchpoints. **Examples:** Marketing-active businesses |
| Premium Package | $2,000+ | **What it is:** Complete digital system with all templates, multiple formats, and interactive elements. **Ideal if:** You need maximum digital flexibility. **Examples:** Enterprise, agencies, digital-first brands |

**Included items by tier:**

| Item | Basic | Standard | Comprehensive | Premium |
|------|-------|----------|---------------|---------|
| Email Signature | ✓ | ✓ | ✓ | ✓ |
| Word/Docs Templates | ✓ | ✓ | ✓ | ✓ |
| Email Header/Footer | — | ✓ | ✓ | ✓ |
| Web Banner Set | — | ✓ | ✓ | ✓ |
| Newsletter Template | — | — | ✓ | ✓ |
| Form Templates | — | — | ✓ | ✓ |
| Digital Ad Templates | — | — | ✓ | ✓ |
| Zoom/Video Backgrounds | — | — | — | ✓ |
| Interactive PDF | — | — | — | ✓ |
| Icon Set (UI) | — | — | — | ✓ |

```javascript
const digitalOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "basic", label: "Basic Package", price: 350, oneTime: true },
  { id: "standard", label: "Standard Package", price: 700, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Package", price: 1200, oneTime: true },
  { id: "premium", label: "Premium Package", price: 2000, oneTime: true, startsAt: true }
]
```

---

## Step 4: Social Media Assets

*Question: "What social media assets do you need?"*

**Default:** Standard Package

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No social media assets required. **Ideal if:** You don't have social presence or have it covered. |
| Basic Package | $300 | **What it is:** Profile images and cover photos for main platforms. **Ideal if:** You need basic social presence setup. **Examples:** LinkedIn + one other platform |
| Standard Package | $600 | **What it is:** Profiles, covers, and post templates for multiple platforms. **Ideal if:** You need consistent social presence. **Examples:** Most businesses, 2-3 platforms |
| Comprehensive Package | $1,000 | **What it is:** Full social kit with templates for posts, stories, highlights, and ads. **Ideal if:** Social is important to your marketing. **Examples:** B2C brands, active social presence |
| Premium Package | $1,600+ | **What it is:** Complete social system with extensive templates, animated assets, and platform-specific optimization. **Ideal if:** Social is a primary channel. **Examples:** Consumer brands, influencer-style presence |

**Included items by tier:**

| Item | Basic | Standard | Comprehensive | Premium |
|------|-------|----------|---------------|---------|
| Profile Images (all platforms) | ✓ | ✓ | ✓ | ✓ |
| Cover Photos | ✓ | ✓ | ✓ | ✓ |
| Post Templates (3) | — | ✓ | ✓ | ✓ |
| Post Templates (8+) | — | — | ✓ | ✓ |
| Story Templates | — | — | ✓ | ✓ |
| Highlight Covers | — | — | ✓ | ✓ |
| Ad Templates | — | — | ✓ | ✓ |
| Animated Templates | — | — | — | ✓ |
| Video Thumbnails | — | — | — | ✓ |
| Platform-Specific Optimization | — | — | — | ✓ |

```javascript
const socialOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "basic", label: "Basic Package", price: 300, oneTime: true },
  { id: "standard", label: "Standard Package", price: 600, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Package", price: 1000, oneTime: true },
  { id: "premium", label: "Premium Package", price: 1600, oneTime: true, startsAt: true }
]
```

---

## Step 5: Presentation Templates

*Question: "What presentation templates do you need?"*

**Default:** Standard Package

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No presentation templates required. **Ideal if:** You don't give presentations or have templates covered. |
| Basic Template | $400 | **What it is:** Single presentation template with essential slides. **Ideal if:** You need basic branded presentations. **Examples:** Internal meetings, simple pitches |
| Standard Package | $800 | **What it is:** Primary template with 20+ slide types plus charts/graphs. **Ideal if:** You give regular presentations. **Examples:** Sales meetings, client presentations |
| Comprehensive Package | $1,400 | **What it is:** Multiple templates for different purposes (sales, internal, investor). **Ideal if:** You have varied presentation needs. **Examples:** Sales teams, startups pitching |
| Premium Package | $2,200+ | **What it is:** Complete presentation system with multiple templates, custom graphics, and animation. **Ideal if:** Presentations are critical to your business. **Examples:** Agencies, consultants, enterprise sales |

**Included items by tier:**

| Item | Basic | Standard | Comprehensive | Premium |
|------|-------|----------|---------------|---------|
| PowerPoint Template | ✓ | ✓ | ✓ | ✓ |
| Keynote Template | — | ✓ | ✓ | ✓ |
| Google Slides Template | — | ✓ | ✓ | ✓ |
| Slide Variations (20+) | — | ✓ | ✓ | ✓ |
| Chart/Graph Styles | — | ✓ | ✓ | ✓ |
| Second Template Type | — | — | ✓ | ✓ |
| Third Template Type | — | — | ✓ | ✓ |
| Custom Iconography | — | — | — | ✓ |
| Animated Transitions | — | — | — | ✓ |
| Video Slide Templates | — | — | — | ✓ |

```javascript
const presentationOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "basic", label: "Basic Template", price: 400, oneTime: true },
  { id: "standard", label: "Standard Package", price: 800, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Package", price: 1400, oneTime: true },
  { id: "premium", label: "Premium Package", price: 2200, oneTime: true, startsAt: true }
]
```

---

## Step 6: Marketing Collateral

*Question: "What marketing materials do you need?"*

**Default:** Basic Package

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No marketing collateral required. **Ideal if:** You don't need printed or PDF marketing materials. |
| Basic Package | $500 | **What it is:** One-pager/sell sheet design. **Ideal if:** You need basic leave-behind materials. **Examples:** Simple sales tool, service overview |
| Standard Package | $1,000 | **What it is:** Sell sheet plus brochure or capability deck. **Ideal if:** You need core sales materials. **Examples:** B2B sales, service businesses |
| Comprehensive Package | $1,800 | **What it is:** Multiple collateral pieces including brochures, case studies, and proposals. **Ideal if:** You have active sales team needing materials. **Examples:** Sales-driven businesses |
| Premium Package | $3,000+ | **What it is:** Complete marketing toolkit with extensive materials and templates. **Ideal if:** You need comprehensive sales and marketing support. **Examples:** Enterprise sales, multi-product companies |

**Included items by tier:**

| Item | Basic | Standard | Comprehensive | Premium |
|------|-------|----------|---------------|---------|
| One-Pager / Sell Sheet | ✓ | ✓ | ✓ | ✓ |
| Bi-fold or Tri-fold Brochure | — | ✓ | ✓ | ✓ |
| Capability Deck | — | ✓ | ✓ | ✓ |
| Case Study Template | — | — | ✓ | ✓ |
| Proposal Template | — | — | ✓ | ✓ |
| Product/Service Sheets (3+) | — | — | ✓ | ✓ |
| White Paper Template | — | — | — | ✓ |
| eBook Template | — | — | — | ✓ |
| Infographic Templates | — | — | — | ✓ |
| Full Collateral System | — | — | — | ✓ |

```javascript
const marketingOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "basic", label: "Basic Package", price: 500, oneTime: true },
  { id: "standard", label: "Standard Package", price: 1000, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Package", price: 1800, oneTime: true },
  { id: "premium", label: "Premium Package", price: 3000, oneTime: true, startsAt: true }
]
```

---

## Step 7: Signage & Environmental

*Question: "What signage and environmental graphics do you need?"*

**Default:** Not Needed

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No signage or environmental graphics required. **Ideal if:** You don't have physical spaces needing branding. |
| Basic Package | $600 | **What it is:** Primary signage design (exterior or interior main sign). **Ideal if:** You need one key sign designed. **Examples:** Door sign, reception sign |
| Standard Package | $1,200 | **What it is:** Core signage suite including exterior, reception, and directional. **Ideal if:** You have an office or location needing branded signage. **Examples:** Office branding, small retail |
| Comprehensive Package | $2,400 | **What it is:** Full environmental graphics including walls, windows, and wayfinding. **Ideal if:** You want cohesive branded environment. **Examples:** Larger offices, retail spaces |
| Premium Package | $4,500+ | **What it is:** Complete environmental branding with custom installations and experiential elements. **Ideal if:** Your space is a brand experience. **Examples:** Flagship locations, showrooms, headquarters |

**Included items by tier:**

| Item | Basic | Standard | Comprehensive | Premium |
|------|-------|----------|---------------|---------|
| Primary Signage Design | ✓ | ✓ | ✓ | ✓ |
| Reception/Lobby Sign | — | ✓ | ✓ | ✓ |
| Directional Signage | — | ✓ | ✓ | ✓ |
| Window Graphics | — | — | ✓ | ✓ |
| Wall Graphics/Murals | — | — | ✓ | ✓ |
| Wayfinding System | — | — | ✓ | ✓ |
| Vehicle Graphics | — | — | — | ✓ |
| Custom Installations | — | — | — | ✓ |
| Environmental Guidelines | — | — | — | ✓ |

```javascript
const signageOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "basic", label: "Basic Package", price: 600, oneTime: true },
  { id: "standard", label: "Standard Package", price: 1200, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Package", price: 2400, oneTime: true },
  { id: "premium", label: "Premium Package", price: 4500, oneTime: true, startsAt: true }
]
```

---

## Step 8: Packaging & Product

*Question: "What packaging and product materials do you need?"*

**Default:** Not Needed

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No packaging required. **Ideal if:** You don't sell physical products or have packaging covered. |
| Basic Package | $700 | **What it is:** Single product packaging design or label design. **Ideal if:** You have one product or simple packaging needs. **Examples:** Single product, simple box or label |
| Standard Package | $1,400 | **What it is:** Primary packaging plus secondary elements (box, insert, label). **Ideal if:** You need complete product packaging. **Examples:** E-commerce, consumer products |
| Comprehensive Package | $2,600 | **What it is:** Multiple SKU packaging with system and shipping materials. **Ideal if:** You have a product line needing cohesive packaging. **Examples:** Product families, retail brands |
| Premium Package | $4,500+ | **What it is:** Complete packaging system with custom structures, premium finishes, and unboxing experience. **Ideal if:** Packaging is a key brand touchpoint. **Examples:** Luxury products, subscription boxes, premium brands |

**Included items by tier:**

| Item | Basic | Standard | Comprehensive | Premium |
|------|-------|----------|---------------|---------|
| Primary Package Design | ✓ | ✓ | ✓ | ✓ |
| Label Design | ✓ | ✓ | ✓ | ✓ |
| Insert/Card | — | ✓ | ✓ | ✓ |
| Secondary Packaging | — | ✓ | ✓ | ✓ |
| Multiple SKUs (3-5) | — | — | ✓ | ✓ |
| Shipping Box Design | — | — | ✓ | ✓ |
| Packaging Guidelines | — | — | ✓ | ✓ |
| Custom Structure Design | — | — | — | ✓ |
| Premium Finishes Spec | — | — | — | ✓ |
| Unboxing Experience | — | — | — | ✓ |

```javascript
const packagingOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "basic", label: "Basic Package", price: 700, oneTime: true },
  { id: "standard", label: "Standard Package", price: 1400, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Package", price: 2600, oneTime: true },
  { id: "premium", label: "Premium Package", price: 4500, oneTime: true, startsAt: true }
]
```

---

## Step 9: Events & Experiential

*Question: "What event materials do you need?"*

**Default:** Not Needed

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No event materials required. **Ideal if:** You don't attend or host events. |
| Basic Package | $500 | **What it is:** Pop-up banner and table throw design. **Ideal if:** You need simple event presence. **Examples:** Networking events, small booths |
| Standard Package | $1,100 | **What it is:** Booth graphics, banners, and handout materials. **Ideal if:** You attend trade shows or conferences. **Examples:** Standard trade show presence |
| Comprehensive Package | $2,200 | **What it is:** Complete booth design with multiple elements and promotional items. **Ideal if:** Events are important marketing channel. **Examples:** Major trade shows, conferences |
| Premium Package | $4,000+ | **What it is:** Custom booth design, experiential elements, and full event branding. **Ideal if:** Events are critical to your brand. **Examples:** Flagship booths, experiential activations, branded events |

**Included items by tier:**

| Item | Basic | Standard | Comprehensive | Premium |
|------|-------|----------|---------------|---------|
| Pop-up/Retractable Banner | ✓ | ✓ | ✓ | ✓ |
| Table Throw/Cover | ✓ | ✓ | ✓ | ✓ |
| Backdrop Design | — | ✓ | ✓ | ✓ |
| Booth Graphics | — | ✓ | ✓ | ✓ |
| Handout/Flyer Design | — | ✓ | ✓ | ✓ |
| Badge/Lanyard Design | — | — | ✓ | ✓ |
| Promotional Items (3+) | — | — | ✓ | ✓ |
| Custom Booth Design | — | — | — | ✓ |
| Experiential Elements | — | — | — | ✓ |
| Event Guidelines | — | — | — | ✓ |

```javascript
const eventsOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "basic", label: "Basic Package", price: 500, oneTime: true },
  { id: "standard", label: "Standard Package", price: 1100, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Package", price: 2200, oneTime: true },
  { id: "premium", label: "Premium Package", price: 4000, oneTime: true, startsAt: true }
]
```

---

## Step 10: Add-on Services

*Question: "Select any additional services you need."*

Each add-on can be **selected/deselected**.

| Option | Price | Tooltip |
|--------|-------|---------|
| Merchandise Design (5 items) | $600 | **What it is:** Branded merchandise designs (t-shirts, hats, mugs, etc.). **Ideal if:** You want branded swag for team or clients. **Examples:** Company store, client gifts, team gear |
| Merchandise Design (10+ items) | $1,100 | **What it is:** Extended merchandise line with multiple items. **Ideal if:** You have significant merch needs. **Examples:** Full company store, event giveaways |
| Vehicle Wrap Design | $900 | **What it is:** Full vehicle wrap or graphics design. **Ideal if:** You have company vehicles. **Examples:** Vans, trucks, cars, fleet vehicles |
| Uniform/Apparel Design | $500 | **What it is:** Staff uniform design and specifications. **Ideal if:** You have customer-facing staff needing branded attire. **Examples:** Retail, hospitality, service businesses |
| Menu/Price List Design | $450 | **What it is:** Branded menu or pricing materials. **Ideal if:** You're a restaurant, salon, or service with pricing displays. **Examples:** Restaurants, spas, professional services |
| Forms & Documents | $350 | **What it is:** Branded business forms (invoices, contracts, receipts). **Ideal if:** You need professional business documents. **Examples:** Invoices, proposals, contracts |
| Gift Card/Certificate | $250 | **What it is:** Gift card or certificate design. **Ideal if:** You sell gift cards or certificates. **Examples:** Retail, services, experiences |
| Promotional Items (per item) | $150 | **What it is:** Individual promotional item design. **Ideal if:** You need specific items designed. **Examples:** Pens, bags, notebooks, custom items |
| Print Production Management | $400 | **What it is:** Coordination with printers and production vendors. **Ideal if:** You want us to manage printing/production. **Examples:** Large print runs, multiple vendors |
| Asset Organization & Handoff | $300 | **What it is:** Organized brand asset package with all files properly named and structured. **Ideal if:** You need clean handoff to team or vendors. **Examples:** Internal teams, external partners |

```javascript
const addOnServices = [
  { id: "merch-5", label: "Merchandise Design (5 items)", price: 600, oneTime: true },
  { id: "merch-10", label: "Merchandise Design (10+ items)", price: 1100, oneTime: true },
  { id: "vehicle", label: "Vehicle Wrap Design", price: 900, oneTime: true },
  { id: "uniform", label: "Uniform/Apparel Design", price: 500, oneTime: true },
  { id: "menu", label: "Menu/Price List Design", price: 450, oneTime: true },
  { id: "forms", label: "Forms & Documents", price: 350, oneTime: true },
  { id: "gift-card", label: "Gift Card/Certificate", price: 250, oneTime: true },
  { id: "promo-item", label: "Promotional Items (per item)", price: 150, oneTime: true },
  { id: "print-management", label: "Print Production Management", price: 400, oneTime: true },
  { id: "asset-handoff", label: "Asset Organization & Handoff", price: 300, oneTime: true }
]
```

---

## Step 11: Timeline

*Question: "When do you need this completed?"*

**Default:** Flexible (6–8 weeks)

| Option | Price Impact | Tooltip |
|--------|--------------|---------|
| Flexible (6–8 weeks) | +0% | **What it is:** Standard timeline allowing thorough development and production coordination. **Ideal if:** You can plan ahead for best results. **Examples:** Most projects |
| Standard (4–6 weeks) | +10% | **What it is:** Slightly accelerated timeline with focused execution. **Ideal if:** You have a target date but some flexibility. **Examples:** Planned launches, events |
| Accelerated (2–4 weeks) | +25% | **What it is:** Fast-tracked delivery requiring prioritized scheduling. **Ideal if:** You have a firm deadline approaching. **Examples:** Upcoming events, urgent needs |
| Rush (Under 2 weeks) | +50% | **What it is:** Expedited delivery with dedicated resources. **Ideal if:** You have an immediate need. **Examples:** Last-minute events, crisis response |

```javascript
const timelineOptions = [
  { id: "flexible", label: "Flexible (6–8 weeks)", multiplier: 1.0 },
  { id: "standard", label: "Standard (4–6 weeks)", multiplier: 1.10 },
  { id: "accelerated", label: "Accelerated (2–4 weeks)", multiplier: 1.25 },
  { id: "rush", label: "Rush (Under 2 weeks)", multiplier: 1.50 }
]
```

---

## Summary Screen

### UI Elements

1. **Selection Summary Table**
   - Groups items by category (Business Essentials, Digital & Social, Marketing, Physical)
   - Shows timeline premium if applicable
   - Editable — clicking any row returns to that step

2. **Price Calculation Display**
   ```
   YOUR CUSTOM BRAND APPLICATIONS PLAN
   ────────────────────────────────────────

   BUSINESS ESSENTIALS
   Stationery                  Standard Package            $800
   Presentations               Standard Package            $800
   ────────────────────────────────────────
   Business Essentials Subtotal                            $1,600

   DIGITAL & SOCIAL
   Digital Assets              Standard Package            $700
   Social Media Assets         Standard Package            $600
   ────────────────────────────────────────
   Digital & Social Subtotal                               $1,300

   MARKETING MATERIALS
   Marketing Collateral        Basic Package               $500
   ────────────────────────────────────────
   Marketing Subtotal                                      $500

   PHYSICAL APPLICATIONS
   Signage & Environmental     Not Needed                  $0
   Packaging & Product         Not Needed                  $0
   Events & Experiential       Not Needed                  $0
   ────────────────────────────────────────
   Physical Subtotal                                       $0

   ADD-ONS
   Forms & Documents           —                           $350
   Asset Handoff               —                           $300
   ────────────────────────────────────────
   Add-ons Total                                           $650

   ────────────────────────────────────────
   Project Subtotal                                        $4,050
   Timeline                    Standard (+10%)             $405
   ────────────────────────────────────────
   TOTAL INVESTMENT                                        $4,455

   Timeline: 4–6 weeks

   [ Adjust Plan ]                      [ Generate Quote ]
   ```

3. **Action Buttons**
   - [ Adjust Plan ] — Returns to builder flow
   - [ **Generate Quote** ] — Opens quote request form

4. **Disclaimer Text**
   *"This is an estimate based on your selections. Final pricing may vary based on project scope and complexity. Printing and production costs are separate and not included in this quote."*

---

## Quote Request Form

| Field | Type | Required |
|-------|------|----------|
| Full Name | Text | Yes |
| Email | Email | Yes |
| Company / Brand | Text | Yes |
| Phone | Tel | No |
| Website URL | URL | No |
| Do you have brand guidelines? | Select | No |
| Industry | Select | No |
| Project Notes | Textarea | No |

---

## Confirmation Screen

```
✓ Quote Request Submitted

Thanks, [Name]! We've received your custom brand applications plan.

What's next:
• We'll review your selections within 24–48 hours
• You'll receive a detailed proposal via email
• We'll schedule a call to discuss your specific needs and brand assets

Your Reference: #BA-[timestamp]
```

---

## Data Models

### Builder State

```javascript
const builderState = {
  // Step 1
  applicationGoal: "launch", // info only, no price
  
  // Step 2
  stationery: {
    selected: "standard",
    price: 800,
    oneTime: true
  },
  
  // Step 3
  digital: {
    selected: "standard",
    price: 700,
    oneTime: true
  },
  
  // Step 4
  social: {
    selected: "standard",
    price: 600,
    oneTime: true
  },
  
  // Step 5
  presentations: {
    selected: "standard",
    price: 800,
    oneTime: true
  },
  
  // Step 6
  marketing: {
    selected: "basic",
    price: 500,
    oneTime: true
  },
  
  // Step 7
  signage: {
    selected: "none",
    price: 0
  },
  
  // Step 8
  packaging: {
    selected: "none",
    price: 0
  },
  
  // Step 9
  events: {
    selected: "none",
    price: 0
  },
  
  // Step 10 - Add-ons
  addOns: [
    { id: "forms", price: 350, oneTime: true },
    { id: "asset-handoff", price: 300, oneTime: true }
  ],
  
  // Step 11
  timeline: {
    selected: "standard",
    multiplier: 1.10
  },
  
  // Calculated
  businessEssentialsSubtotal: 1600,
  digitalSocialSubtotal: 1300,
  marketingSubtotal: 500,
  physicalSubtotal: 0,
  addOnsTotal: 650,
  projectSubtotal: 4050,
  timelinePremium: 405,
  totalInvestment: 4455,
  hasCustomQuote: false,
  
  // Customer Info
  customer: {
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    hasGuidelines: "",
    industry: "",
    notes: ""
  }
}
```

### Price Calculation Logic

```javascript
function calculateTotal(state) {
  let businessEssentialsSubtotal = 0;
  let digitalSocialSubtotal = 0;
  let marketingSubtotal = 0;
  let physicalSubtotal = 0;
  let addOnsTotal = 0;
  let hasCustomQuote = false;
  
  // Business Essentials
  if (state.stationery.price === null) {
    hasCustomQuote = true;
  } else {
    businessEssentialsSubtotal += state.stationery.price;
  }
  
  if (state.presentations.price === null) {
    hasCustomQuote = true;
  } else {
    businessEssentialsSubtotal += state.presentations.price;
  }
  
  // Digital & Social
  if (state.digital.price === null) {
    hasCustomQuote = true;
  } else {
    digitalSocialSubtotal += state.digital.price;
  }
  
  if (state.social.price === null) {
    hasCustomQuote = true;
  } else {
    digitalSocialSubtotal += state.social.price;
  }
  
  // Marketing
  if (state.marketing.price === null) {
    hasCustomQuote = true;
  } else {
    marketingSubtotal += state.marketing.price;
  }
  
  // Physical Applications
  if (state.signage.price === null) {
    hasCustomQuote = true;
  } else {
    physicalSubtotal += state.signage.price;
  }
  
  if (state.packaging.price === null) {
    hasCustomQuote = true;
  } else {
    physicalSubtotal += state.packaging.price;
  }
  
  if (state.events.price === null) {
    hasCustomQuote = true;
  } else {
    physicalSubtotal += state.events.price;
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
  const projectSubtotal = businessEssentialsSubtotal + digitalSocialSubtotal + marketingSubtotal + physicalSubtotal + addOnsTotal;
  
  // Timeline multiplier
  const multiplier = state.timeline.multiplier;
  const timelinePremium = projectSubtotal * (multiplier - 1);
  const totalInvestment = projectSubtotal * multiplier;
  
  return {
    businessEssentialsSubtotal: businessEssentialsSubtotal,
    digitalSocialSubtotal: digitalSocialSubtotal,
    marketingSubtotal: marketingSubtotal,
    physicalSubtotal: physicalSubtotal,
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

### Quick Reference - All Categories

| Category | Option | Price |
|----------|--------|-------|
| **Stationery** | Not Needed | $0 |
| | Basic Package | $400 |
| | Standard Package | $800 |
| | Comprehensive Package | $1,400 |
| | Premium Package | $2,200+ |
| **Digital Assets** | Not Needed | $0 |
| | Basic Package | $350 |
| | Standard Package | $700 |
| | Comprehensive Package | $1,200 |
| | Premium Package | $2,000+ |
| **Social Media** | Not Needed | $0 |
| | Basic Package | $300 |
| | Standard Package | $600 |
| | Comprehensive Package | $1,000 |
| | Premium Package | $1,600+ |
| **Presentations** | Not Needed | $0 |
| | Basic Template | $400 |
| | Standard Package | $800 |
| | Comprehensive Package | $1,400 |
| | Premium Package | $2,200+ |
| **Marketing Collateral** | Not Needed | $0 |
| | Basic Package | $500 |
| | Standard Package | $1,000 |
| | Comprehensive Package | $1,800 |
| | Premium Package | $3,000+ |
| **Signage** | Not Needed | $0 |
| | Basic Package | $600 |
| | Standard Package | $1,200 |
| | Comprehensive Package | $2,400 |
| | Premium Package | $4,500+ |
| **Packaging** | Not Needed | $0 |
| | Basic Package | $700 |
| | Standard Package | $1,400 |
| | Comprehensive Package | $2,600 |
| | Premium Package | $4,500+ |
| **Events** | Not Needed | $0 |
| | Basic Package | $500 |
| | Standard Package | $1,100 |
| | Comprehensive Package | $2,200 |
| | Premium Package | $4,000+ |

### Quick Reference - Add-ons

| Service | Price |
|---------|-------|
| Merchandise Design (5 items) | $600 |
| Merchandise Design (10+ items) | $1,100 |
| Vehicle Wrap Design | $900 |
| Uniform/Apparel Design | $500 |
| Menu/Price List Design | $450 |
| Forms & Documents | $350 |
| Gift Card/Certificate | $250 |
| Promotional Items (per item) | $150 |
| Print Production Management | $400 |
| Asset Organization & Handoff | $300 |

### Quick Reference - Timeline

| Timeline | Multiplier | Effect |
|----------|------------|--------|
| Flexible (6–8 weeks) | 1.0 | Base price |
| Standard (4–6 weeks) | 1.10 | +10% premium |
| Accelerated (2–4 weeks) | 1.25 | +25% premium |
| Rush (Under 2 weeks) | 1.50 | +50% premium |

---

## Price Examples

### Example 1: Startup Essentials

| Selection | Option | Price |
|-----------|--------|-------|
| **Business Essentials** | | |
| Stationery | Basic Package | $400 |
| Presentations | Basic Template | $400 |
| **Subtotal** | | **$800** |
| | | |
| **Digital & Social** | | |
| Digital Assets | Basic Package | $350 |
| Social Media | Basic Package | $300 |
| **Subtotal** | | **$650** |
| | | |
| **Marketing** | | |
| Marketing Collateral | Not Needed | $0 |
| **Subtotal** | | **$0** |
| | | |
| **Physical** | | |
| All Physical | Not Needed | $0 |
| **Subtotal** | | **$0** |
| | | |
| **Project Subtotal** | | **$1,450** |
| Timeline | Flexible | +0% |
| **Total** | | **$1,450** |

---

### Example 2: Business Launch Package

| Selection | Option | Price |
|-----------|--------|-------|
| **Business Essentials** | | |
| Stationery | Standard Package | $800 |
| Presentations | Standard Package | $800 |
| **Subtotal** | | **$1,600** |
| | | |
| **Digital & Social** | | |
| Digital Assets | Standard Package | $700 |
| Social Media | Standard Package | $600 |
| **Subtotal** | | **$1,300** |
| | | |
| **Marketing** | | |
| Marketing Collateral | Basic Package | $500 |
| **Subtotal** | | **$500** |
| | | |
| **Physical** | | |
| All Physical | Not Needed | $0 |
| **Subtotal** | | **$0** |
| | | |
| **Add-ons** | | |
| Forms & Documents | — | $350 |
| Asset Handoff | — | $300 |
| **Add-ons Total** | | **$650** |
| | | |
| **Project Subtotal** | | **$4,050** |
| Timeline | Standard (+10%) | $405 |
| **Total** | | **$4,455** |

---

### Example 3: Retail Brand Applications

| Selection | Option | Price |
|-----------|--------|-------|
| **Business Essentials** | | |
| Stationery | Standard Package | $800 |
| Presentations | Standard Package | $800 |
| **Subtotal** | | **$1,600** |
| | | |
| **Digital & Social** | | |
| Digital Assets | Comprehensive Package | $1,200 |
| Social Media | Comprehensive Package | $1,000 |
| **Subtotal** | | **$2,200** |
| | | |
| **Marketing** | | |
| Marketing Collateral | Standard Package | $1,000 |
| **Subtotal** | | **$1,000** |
| | | |
| **Physical** | | |
| Signage & Environmental | Standard Package | $1,200 |
| Packaging & Product | Standard Package | $1,400 |
| Events | Not Needed | $0 |
| **Subtotal** | | **$2,600** |
| | | |
| **Add-ons** | | |
| Merchandise Design (5) | — | $600 |
| Gift Card Design | — | $250 |
| Asset Handoff | — | $300 |
| **Add-ons Total** | | **$1,150** |
| | | |
| **Project Subtotal** | | **$8,550** |
| Timeline | Standard (+10%) | $855 |
| **Total** | | **$9,405** |

---

### Example 4: Enterprise Complete Suite

| Selection | Option | Price |
|-----------|--------|-------|
| **Business Essentials** | | |
| Stationery | Comprehensive Package | $1,400 |
| Presentations | Comprehensive Package | $1,400 |
| **Subtotal** | | **$2,800** |
| | | |
| **Digital & Social** | | |
| Digital Assets | Comprehensive Package | $1,200 |
| Social Media | Comprehensive Package | $1,000 |
| **Subtotal** | | **$2,200** |
| | | |
| **Marketing** | | |
| Marketing Collateral | Comprehensive Package | $1,800 |
| **Subtotal** | | **$1,800** |
| | | |
| **Physical** | | |
| Signage & Environmental | Comprehensive Package | $2,400 |
| Packaging & Product | Standard Package | $1,400 |
| Events | Standard Package | $1,100 |
| **Subtotal** | | **$4,900** |
| | | |
| **Add-ons** | | |
| Merchandise Design (10+) | — | $1,100 |
| Vehicle Wrap Design | — | $900 |
| Uniform Design | — | $500 |
| Forms & Documents | — | $350 |
| Print Production Mgmt | — | $400 |
| Asset Handoff | — | $300 |
| **Add-ons Total** | | **$3,550** |
| | | |
| **Project Subtotal** | | **$15,250** |
| Timeline | Flexible | +0% |
| **Total** | | **$15,250** |

---

## Integration Notes

- This custom builder lives alongside the standard tier selection (Essential/Pro/Enterprise)
- Customer can switch between "Choose a Package" and "Build Custom" views
- If custom total is close to a tier price, optionally suggest the tier as simpler option
- All data structures are API-ready for future backend integration
- Application goal recommendations should guide users toward appropriate selections
- Consider showing "Popular for [Goal]" badges on recommended options
- Timeline multipliers apply to the entire project total
- Brand applications is typically a one-time project, not recurring
- Requires existing visual identity/brand guidelines to execute — pair with Visual Identity if needed
- Printing and production costs are separate and not included
- Consider offering bundle discount when purchased with Visual Identity or Brand Strategy
