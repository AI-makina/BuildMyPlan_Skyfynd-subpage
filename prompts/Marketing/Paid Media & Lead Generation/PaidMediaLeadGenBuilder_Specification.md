# Paid Media & Lead Generation Custom Builder - Feature Specification

## Overview

The Paid Media & Lead Generation Custom Builder is an interactive step-by-step configurator that allows customers to build their own advertising and lead generation campaign plan according to their specific needs. When a customer clicks "Custom" instead of selecting a pre-defined tier (Essential/Pro/Enterprise), they enter this guided builder flow.

---

## Core Mechanics

### Pricing Logic
- **Step 1 (Campaign Type):** Information only — NO price impact
- **Steps 2–9:** All pricing calculated from these selections
- **Two price categories:** Monthly recurring costs + One-time setup costs
- **Duration discounts:** Longer commitments receive percentage discounts on monthly fees
- **Running total** displays and updates in real-time, showing both monthly and one-time costs

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

## Step 1: Campaign Type (Info Only)

*Question: "What kind of marketing campaign do you need?"*

**Price Impact:** None — informational only, triggers recommendations

| Option | Tooltip Content |
|--------|-----------------|
| Search Ads (PPC) | **What it is:** Text-based ads on search engines that appear when users search for specific keywords. **Ideal if:** You want to capture high-intent users actively searching for your product or service. **Examples:** Google Ads, Bing Ads, search result sponsored listings |
| Social Media Ads | **What it is:** Visual and video ads on social platforms targeting specific demographics and interests. **Ideal if:** You want to build awareness, engagement, or reach new audiences. **Examples:** Facebook/Instagram Ads, LinkedIn Ads, TikTok Ads |
| Display / Banner Ads | **What it is:** Visual ads shown across websites, apps, and the Google Display Network. **Ideal if:** You want broad visibility and brand awareness across the web. **Examples:** Website banners, retargeting ads, programmatic display |
| Video Ads | **What it is:** Video-based advertising on YouTube, social platforms, or streaming services. **Ideal if:** You want engaging storytelling and high-impact brand messaging. **Examples:** YouTube pre-roll, Instagram Reels ads, TikTok ads |
| Retargeting / Remarketing | **What it is:** Ads shown to people who have already visited your website or engaged with your brand. **Ideal if:** You want to convert warm leads who didn't purchase on first visit. **Examples:** "You left items in your cart" ads, website visitor follow-up |
| Lead Generation Campaign | **What it is:** Campaigns specifically designed to capture contact information and generate qualified leads. **Ideal if:** You need to build a pipeline of potential customers for sales follow-up. **Examples:** Lead forms, gated content, webinar signups |
| E-commerce / Shopping Ads | **What it is:** Product-focused ads that showcase inventory with images, prices, and direct purchase links. **Ideal if:** You sell products online and want to drive direct sales. **Examples:** Google Shopping, Facebook Shop, Instagram Shopping |
| App Install Campaign | **What it is:** Campaigns designed to drive mobile app downloads. **Ideal if:** You have a mobile app and want to grow your user base. **Examples:** App Store ads, Google App campaigns, social app install ads |
| Full-Funnel Campaign | **What it is:** Comprehensive strategy covering awareness, consideration, and conversion stages. **Ideal if:** You want an integrated approach that nurtures prospects through the entire journey. **Examples:** Multi-platform campaigns, integrated marketing |
| Other | **What it is:** Something unique or a combination of campaign types. **Ideal if:** Your marketing needs don't fit standard categories — we'll tailor recommendations. |

```javascript
const campaignTypeOptions = [
  { id: "search", label: "Search Ads (PPC)" },
  { id: "social", label: "Social Media Ads" },
  { id: "display", label: "Display / Banner Ads" },
  { id: "video", label: "Video Ads" },
  { id: "retargeting", label: "Retargeting / Remarketing" },
  { id: "lead-gen", label: "Lead Generation Campaign" },
  { id: "ecommerce", label: "E-commerce / Shopping Ads" },
  { id: "app-install", label: "App Install Campaign" },
  { id: "full-funnel", label: "Full-Funnel Campaign" },
  { id: "other", label: "Other" }
]
```

---

## Recommendation Presets (Based on Step 1)

When user selects a campaign type, these options are **pre-selected** (but editable):

```javascript
const recommendationPresets = {
  "search": {
    platforms: "google",
    duration: "3-months",
    management: "full",
    creatives: "copy",
    landingPage: "none",
    tracking: "standard",
    reporting: "biweekly"
  },
  "social": {
    platforms: "meta",
    duration: "3-months",
    management: "full",
    creatives: "static-5",
    landingPage: "none",
    tracking: "standard",
    reporting: "biweekly"
  },
  "display": {
    platforms: "google",
    duration: "3-months",
    management: "full",
    creatives: "static-10",
    landingPage: "none",
    tracking: "standard",
    reporting: "monthly"
  },
  "video": {
    platforms: "google",
    duration: "3-months",
    management: "full",
    creatives: "video-1",
    landingPage: "none",
    tracking: "standard",
    reporting: "biweekly"
  },
  "retargeting": {
    platforms: "google-meta",
    duration: "3-months",
    management: "full",
    creatives: "static-5",
    landingPage: "none",
    tracking: "advanced",
    reporting: "biweekly",
    addOns: ["remarketing"]
  },
  "lead-gen": {
    platforms: "google-meta",
    duration: "3-months",
    management: "full",
    creatives: "static-5",
    landingPage: "single",
    tracking: "advanced",
    reporting: "weekly"
  },
  "ecommerce": {
    platforms: "google-meta",
    duration: "3-months",
    management: "full",
    creatives: "static-10",
    landingPage: "none",
    tracking: "advanced",
    reporting: "weekly"
  },
  "app-install": {
    platforms: "google-meta",
    duration: "3-months",
    management: "full",
    creatives: "video-1",
    landingPage: "none",
    tracking: "advanced",
    reporting: "weekly"
  },
  "full-funnel": {
    platforms: "multi",
    duration: "6-months",
    management: "premium",
    creatives: "full",
    landingPage: "ab",
    tracking: "advanced",
    reporting: "weekly",
    addOns: ["competitor", "remarketing"]
  },
  "other": {
    platforms: "google",
    duration: "3-months",
    management: "full",
    creatives: "client",
    landingPage: "none",
    tracking: "standard",
    reporting: "biweekly"
  }
}
```

---

## Step 2: Advertising Platforms

*Question: "Which platforms do you want to advertise on?"*

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| Google Ads Only | $150/mo | **What it is:** Search, Display, YouTube, and Shopping ads through Google's ecosystem. **Ideal if:** You want to reach users with high purchase intent via search or broad reach via display. **Examples:** Search results, YouTube, partner websites |
| Meta Only (Facebook/Instagram) | $150/mo | **What it is:** Ads across Facebook, Instagram, Messenger, and Meta's audience network. **Ideal if:** You want detailed demographic targeting and visual storytelling. **Examples:** Feed ads, Stories, Reels, Messenger |
| LinkedIn Only | $200/mo | **What it is:** B2B-focused advertising on the world's largest professional network. **Ideal if:** You're targeting professionals, decision-makers, or B2B audiences. **Examples:** Sponsored content, InMail, lead gen forms |
| TikTok Only | $175/mo | **What it is:** Short-form video ads on the fastest-growing social platform. **Ideal if:** You want to reach younger audiences with engaging, creative content. **Examples:** In-feed ads, branded hashtags, spark ads |
| Google + Meta | $250/mo | **What it is:** Combined strategy across search and social for comprehensive coverage. **Ideal if:** You want both high-intent search traffic and social awareness. **Examples:** Most standard campaigns |
| Google + Meta + LinkedIn | $375/mo | **What it is:** Full coverage across search, social, and professional networks. **Ideal if:** You're B2B or want maximum reach across audiences. **Examples:** SaaS companies, professional services |
| Multi-Platform (4+) | $450/mo+ | **What it is:** Comprehensive presence across all major advertising platforms. **Ideal if:** You want full-funnel coverage and maximum market penetration. **Examples:** Enterprise campaigns, product launches |
| Custom Platform Mix | Custom quote | **What it is:** Tailored platform selection based on your specific needs. **Ideal if:** You need specific platforms like Pinterest, Snapchat, Twitter, or programmatic. |

```javascript
const platformOptions = [
  { id: "google", label: "Google Ads Only", price: 150, recurring: "monthly" },
  { id: "meta", label: "Meta Only (Facebook/Instagram)", price: 150, recurring: "monthly" },
  { id: "linkedin", label: "LinkedIn Only", price: 200, recurring: "monthly" },
  { id: "tiktok", label: "TikTok Only", price: 175, recurring: "monthly" },
  { id: "google-meta", label: "Google + Meta", price: 250, recurring: "monthly" },
  { id: "google-meta-linkedin", label: "Google + Meta + LinkedIn", price: 375, recurring: "monthly" },
  { id: "multi", label: "Multi-Platform (4+)", price: 450, recurring: "monthly", startsAt: true },
  { id: "custom", label: "Custom Platform Mix", price: null, customQuote: true }
]
```

---

## Step 3: Monthly Ad Spend Budget

*Question: "What's your monthly advertising budget?"*

**Note:** This is your ad spend paid directly to platforms, separate from management fees.

**Default:** Growth ($1,500–$5,000/mo)

| Option | Price | Tooltip |
|--------|-------|---------|
| Starter ($500–$1,500/mo) | $0 | **What it is:** Entry-level budget for testing and small-scale campaigns. **Ideal if:** You're new to paid ads or have a limited budget. **Examples:** Local businesses, startups testing channels |
| Growth ($1,500–$5,000/mo) | $0 | **What it is:** Moderate budget for consistent lead generation and growth. **Ideal if:** You have proven product-market fit and want to scale. **Examples:** Growing SMBs, e-commerce stores |
| Scale ($5,000–$15,000/mo) | $0 | **What it is:** Substantial budget for aggressive growth and market expansion. **Ideal if:** You're ready to invest significantly in customer acquisition. **Examples:** Funded startups, established businesses |
| Enterprise ($15,000–$50,000/mo) | $0 | **What it is:** Large-scale budget for dominant market presence. **Ideal if:** You're an established company with serious growth targets. **Examples:** Enterprise companies, national campaigns |
| Enterprise+ ($50,000+/mo) | Custom quote | **What it is:** Premium budget for maximum market impact. **Ideal if:** You're a major brand or have aggressive acquisition targets. **Examples:** Major brands, product launches |

```javascript
const budgetOptions = [
  { id: "starter", label: "Starter ($500–$1,500/mo)", price: 0, adSpendRange: [500, 1500] },
  { id: "growth", label: "Growth ($1,500–$5,000/mo)", price: 0, adSpendRange: [1500, 5000] },
  { id: "scale", label: "Scale ($5,000–$15,000/mo)", price: 0, adSpendRange: [5000, 15000] },
  { id: "enterprise", label: "Enterprise ($15,000–$50,000/mo)", price: 0, adSpendRange: [15000, 50000] },
  { id: "enterprise-plus", label: "Enterprise+ ($50,000+/mo)", price: null, customQuote: true }
]
```

---

## Step 4: Campaign Duration / Commitment

*Question: "How long do you want to run your campaign?"*

**Default:** 3 Months (Standard)

| Option | Price Impact | Tooltip |
|--------|--------------|---------|
| 1 Month (Trial) | +25% | **What it is:** Short-term trial to test performance. **Ideal if:** You want to evaluate results before committing longer. **Examples:** Testing a new channel, seasonal promotion |
| 3 Months (Standard) | +0% | **What it is:** Standard commitment for meaningful optimization and results. **Ideal if:** You want enough time to optimize and see real ROI. **Examples:** Most campaigns, quarterly planning |
| 6 Months (Growth) | -10% | **What it is:** Extended commitment for sustained growth and deeper optimization. **Ideal if:** You're serious about growth and want better rates. **Examples:** Ongoing lead gen, brand building |
| 12 Months (Partnership) | -20% | **What it is:** Annual partnership with maximum savings and strategic depth. **Ideal if:** You want a long-term marketing partner and best pricing. **Examples:** Established marketing relationships |

```javascript
const durationOptions = [
  { id: "1-month", label: "1 Month (Trial)", multiplier: 1.25 },
  { id: "3-months", label: "3 Months (Standard)", multiplier: 1.0 },
  { id: "6-months", label: "6 Months (Growth)", multiplier: 0.90 },
  { id: "12-months", label: "12 Months (Partnership)", multiplier: 0.80 }
]
```

---

## Step 5: Management Level

*Question: "How much hands-on management do you need?"*

**Default:** Full Management

| Option | Price | Tooltip |
|--------|-------|---------|
| Setup Only | $300 (one-time) | **What it is:** We build and launch your campaigns, then hand over control. **Ideal if:** You have an in-house team to manage ongoing optimization. **Examples:** DIY marketers, in-house teams |
| Light Management | $200/mo | **What it is:** Monthly check-ins, basic optimizations, and performance monitoring. **Ideal if:** You want oversight without full-service management. **Examples:** Low-maintenance campaigns, limited budgets |
| Full Management | $400/mo | **What it is:** Active daily/weekly optimization, A/B testing, and strategic adjustments. **Ideal if:** You want hands-off campaign management with continuous improvement. **Examples:** Most clients, growth-focused businesses |
| Premium Management | $700/mo+ | **What it is:** Dedicated strategist, advanced optimization, competitive analysis, and priority support. **Ideal if:** You have significant spend and need expert-level attention. **Examples:** High-budget campaigns, competitive markets |

```javascript
const managementOptions = [
  { id: "setup", label: "Setup Only", price: 300, oneTime: true },
  { id: "light", label: "Light Management", price: 200, recurring: "monthly" },
  { id: "full", label: "Full Management", price: 400, recurring: "monthly" },
  { id: "premium", label: "Premium Management", price: 700, recurring: "monthly", startsAt: true }
]
```

---

## Step 6: Creative Services

*Question: "What creative assets do you need for your campaigns?"*

---

### Ad Creative Production

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| Client Provides | $0 | **What it is:** You supply all ad creatives, we implement them. **Ideal if:** You have a design team or existing assets. **Examples:** In-house creative teams |
| Ad Copy Only | $150 (one-time) | **What it is:** Compelling headlines, descriptions, and CTAs for text-based ads. **Ideal if:** You need search ads or have visuals covered. **Examples:** Google Search ads, LinkedIn text |
| Static Images (5 ads) | $250 (one-time) | **What it is:** Designed static ad images in multiple sizes for your campaigns. **Ideal if:** You need display, social feed, or banner ads. **Examples:** Facebook ads, display banners |
| Static Images (10 ads) | $400 (one-time) | **What it is:** Extended set of static creatives for comprehensive testing. **Ideal if:** You want more variations for A/B testing. **Examples:** Multi-variant testing |
| Video Ads (1 video) | $500+ (one-time) | **What it is:** Produced video ad for social or YouTube campaigns. **Ideal if:** You want high-engagement video content. **Examples:** Facebook video, YouTube pre-roll |
| Video Ads (3 videos) | $1,200+ (one-time) | **What it is:** Multiple video ads for testing and platform variety. **Ideal if:** You want comprehensive video coverage. **Examples:** Multi-platform video campaigns |
| Full Creative Package | $800+ (one-time) | **What it is:** Ad copy + static images + basic video for complete coverage. **Ideal if:** You need everything produced from scratch. **Examples:** New campaign launches |

```javascript
const creativeOptions = [
  { id: "client", label: "Client Provides", price: 0 },
  { id: "copy", label: "Ad Copy Only", price: 150, oneTime: true },
  { id: "static-5", label: "Static Images (5 ads)", price: 250, oneTime: true },
  { id: "static-10", label: "Static Images (10 ads)", price: 400, oneTime: true },
  { id: "video-1", label: "Video Ads (1 video)", price: 500, oneTime: true, startsAt: true },
  { id: "video-3", label: "Video Ads (3 videos)", price: 1200, oneTime: true, startsAt: true },
  { id: "full", label: "Full Creative Package", price: 800, oneTime: true, startsAt: true }
]
```

---

### Landing Page

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** You'll use your existing website or pages. **Ideal if:** You already have optimized landing pages. **Examples:** Established websites |
| Landing Page Audit | $150 (one-time) | **What it is:** Review and recommendations for your existing landing pages. **Ideal if:** You have pages but want conversion optimization advice. **Examples:** CRO recommendations |
| Single Landing Page | $500 (one-time) | **What it is:** Custom-designed, conversion-optimized landing page. **Ideal if:** You need a dedicated page for your campaign. **Examples:** Lead gen pages, product pages |
| Landing Page + A/B Variant | $750 (one-time) | **What it is:** Primary landing page plus a variant for split testing. **Ideal if:** You want to test different messaging or layouts. **Examples:** Conversion optimization |
| Landing Page System (3+) | $1,200+ (one-time) | **What it is:** Multiple landing pages for different audiences or campaigns. **Ideal if:** You have segmented audiences or multiple offers. **Examples:** Multi-product campaigns |

```javascript
const landingPageOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "audit", label: "Landing Page Audit", price: 150, oneTime: true },
  { id: "single", label: "Single Landing Page", price: 500, oneTime: true },
  { id: "ab", label: "Landing Page + A/B Variant", price: 750, oneTime: true },
  { id: "system", label: "Landing Page System (3+)", price: 1200, oneTime: true, startsAt: true }
]
```

---

## Step 7: Tracking & Analytics

*Question: "What level of tracking and measurement do you need?"*

**Default:** Standard Tracking

| Option | Price | Tooltip |
|--------|-------|---------|
| Basic Tracking | $100 (one-time) | **What it is:** Standard pixel/tag installation and conversion tracking. **Ideal if:** You need fundamental tracking to measure results. **Examples:** Facebook Pixel, Google Ads conversion tracking |
| Standard Tracking | $250 (one-time) | **What it is:** Comprehensive tracking including UTMs, goal setup, and basic attribution. **Ideal if:** You want clear visibility into what's working. **Examples:** Google Analytics goals, multi-event tracking |
| Advanced Tracking | $500 (one-time) | **What it is:** Full-funnel tracking, custom events, CRM integration, and attribution modeling. **Ideal if:** You need detailed insights into the customer journey. **Examples:** Salesforce integration, multi-touch attribution |
| Enterprise Tracking | $1,000+ (one-time) | **What it is:** Custom data infrastructure, advanced attribution, and data warehouse integration. **Ideal if:** You have complex tracking needs across multiple systems. **Examples:** Custom dashboards, API integrations |

```javascript
const trackingOptions = [
  { id: "basic", label: "Basic Tracking", price: 100, oneTime: true },
  { id: "standard", label: "Standard Tracking", price: 250, oneTime: true },
  { id: "advanced", label: "Advanced Tracking", price: 500, oneTime: true },
  { id: "enterprise", label: "Enterprise Tracking", price: 1000, oneTime: true, startsAt: true }
]
```

---

## Step 8: Reporting & Communication

*Question: "How often do you want performance updates?"*

**Default:** Bi-Weekly Reports

| Option | Price | Tooltip |
|--------|-------|---------|
| Monthly Reports | $0 | **What it is:** Comprehensive monthly performance report with insights and recommendations. **Ideal if:** You want regular updates without information overload. **Examples:** Standard reporting cadence |
| Bi-Weekly Reports | $75/mo | **What it is:** Performance reports every two weeks with optimization notes. **Ideal if:** You want more frequent visibility into campaign performance. **Examples:** Active optimization phases |
| Weekly Reports + Call | $150/mo | **What it is:** Weekly written reports plus a strategy call to discuss performance. **Ideal if:** You want close collaboration and rapid iteration. **Examples:** High-budget campaigns, launch phases |
| Real-Time Dashboard + Weekly Call | $250/mo | **What it is:** Live dashboard access plus weekly strategy calls. **Ideal if:** You want constant visibility and active partnership. **Examples:** Enterprise clients, aggressive growth |

```javascript
const reportingOptions = [
  { id: "monthly", label: "Monthly Reports", price: 0, recurring: "monthly" },
  { id: "biweekly", label: "Bi-Weekly Reports", price: 75, recurring: "monthly" },
  { id: "weekly", label: "Weekly Reports + Call", price: 150, recurring: "monthly" },
  { id: "realtime", label: "Real-Time Dashboard + Weekly Call", price: 250, recurring: "monthly" }
]
```

---

## Step 9: Add-on Services

*Question: "Select any additional services you need."*

Each add-on can be **selected/deselected**.

| Option | Price | Tooltip |
|--------|-------|---------|
| Competitor Analysis | $300 (one-time) | **What it is:** Deep dive into competitor ad strategies, messaging, and positioning. **Ideal if:** You want to understand the competitive landscape before launching. **Examples:** Ad spy research, positioning analysis |
| Audience Research | $250 (one-time) | **What it is:** Detailed audience persona development and targeting recommendations. **Ideal if:** You need to refine who you're targeting. **Examples:** Persona development, targeting strategy |
| A/B Testing Program | $200/mo | **What it is:** Structured testing of creatives, copy, audiences, and landing pages. **Ideal if:** You want systematic optimization through experimentation. **Examples:** Ongoing creative testing, message testing |
| CRM Integration | $350 (one-time) | **What it is:** Connect ad platforms to your CRM for lead tracking and closed-loop reporting. **Ideal if:** You want to track leads through to sale. **Examples:** HubSpot, Salesforce, Pipedrive integration |
| Remarketing Setup | $200 (one-time) | **What it is:** Pixel setup and audience creation for retargeting campaigns. **Ideal if:** You want to re-engage website visitors. **Examples:** Cart abandonment, site visitor retargeting |
| Lead Scoring Setup | $400 (one-time) | **What it is:** System to qualify and prioritize leads based on behavior and fit. **Ideal if:** You generate high volume and need to prioritize follow-up. **Examples:** MQL/SQL scoring, lead routing |
| Email Nurture Integration | $300 (one-time) | **What it is:** Connect lead gen campaigns to email sequences for automated follow-up. **Ideal if:** You want automated lead nurturing after capture. **Examples:** Drip campaigns, welcome sequences |

```javascript
const addOnOptions = [
  { id: "competitor", label: "Competitor Analysis", price: 300, oneTime: true },
  { id: "audience", label: "Audience Research", price: 250, oneTime: true },
  { id: "ab-testing", label: "A/B Testing Program", price: 200, recurring: "monthly" },
  { id: "crm", label: "CRM Integration", price: 350, oneTime: true },
  { id: "remarketing", label: "Remarketing Setup", price: 200, oneTime: true },
  { id: "lead-scoring", label: "Lead Scoring Setup", price: 400, oneTime: true },
  { id: "email-nurture", label: "Email Nurture Integration", price: 300, oneTime: true }
]
```

---

## Summary Screen

### UI Elements

1. **Selection Summary Table**
   - Separates Monthly Costs from One-Time Costs
   - Shows duration discount applied to monthly fees
   - Lists ad spend range as informational (not included in totals)
   - Editable — clicking any row returns to that step

2. **Price Calculation Display**
   ```
   YOUR CUSTOM PAID MEDIA PLAN
   ────────────────────────────────────────

   MONTHLY COSTS
   Platforms                   Google + Meta               $250/mo
   Management                  Full Management             $400/mo
   Reporting                   Bi-Weekly Reports           $75/mo
   A/B Testing                 Program                     $200/mo
   ────────────────────────────────────────
   Monthly Subtotal                                        $925/mo
   Duration Discount           6 Months (-10%)             -$92.50/mo
   ────────────────────────────────────────
   MONTHLY TOTAL                                           $832.50/mo


   ONE-TIME COSTS
   Creatives                   Static Images (10)          $400
   Landing Page                Single Page                 $500
   Tracking                    Standard                    $250
   Competitor Analysis         —                           $300
   CRM Integration             —                           $350
   ────────────────────────────────────────
   ONE-TIME TOTAL                                          $1,800


   COMMITMENT SUMMARY
   Duration                    6 Months
   Monthly Fee                 $832.50/mo
   Total Monthly Over Term     $4,995
   One-Time Setup              $1,800
   ────────────────────────────────────────
   TOTAL INVESTMENT            $6,795

   *Ad spend ($1,500–$5,000/mo) paid directly to platforms, not included above.

   [ Adjust Plan ]                      [ Generate Quote ]
   ```

3. **Action Buttons**
   - [ Adjust Plan ] — Returns to builder flow
   - [ **Generate Quote** ] — Opens quote request form

4. **Disclaimer Text**
   *"This is an estimate based on your selections. Final pricing may vary based on project specifics. Ad spend is paid directly to advertising platforms and is not included in this quote."*

---

## Quote Request Form

| Field | Type | Required |
|-------|------|----------|
| Full Name | Text | Yes |
| Email | Email | Yes |
| Company / Brand | Text | No |
| Phone | Tel | No |
| Website URL | URL | No |
| Project Notes | Textarea | No |

---

## Confirmation Screen

```
✓ Quote Request Submitted

Thanks, [Name]! We've received your custom paid media plan.

What's next:
• We'll review your selections within 24–48 hours
• You'll receive a detailed proposal via email
• We'll schedule a strategy call to discuss your goals

Your Reference: #PM-[timestamp]
```

---

## Data Models

### Builder State

```javascript
const builderState = {
  // Step 1
  campaignType: "lead-gen", // info only, no price
  
  // Step 2
  platforms: {
    selected: "google-meta",
    price: 250,
    recurring: "monthly"
  },
  
  // Step 3
  budget: {
    selected: "growth",
    adSpendRange: [1500, 5000]
  },
  
  // Step 4
  duration: {
    selected: "6-months",
    multiplier: 0.90,
    months: 6
  },
  
  // Step 5
  management: {
    selected: "full",
    price: 400,
    recurring: "monthly"
  },
  
  // Step 6 - Creative Services
  creatives: {
    adCreative: { selected: "static-10", price: 400, oneTime: true },
    landingPage: { selected: "single", price: 500, oneTime: true }
  },
  
  // Step 7
  tracking: {
    selected: "standard",
    price: 250,
    oneTime: true
  },
  
  // Step 8
  reporting: {
    selected: "biweekly",
    price: 75,
    recurring: "monthly"
  },
  
  // Step 9 - Add-ons
  addOns: [
    { id: "competitor", price: 300, oneTime: true },
    { id: "crm", price: 350, oneTime: true },
    { id: "ab-testing", price: 200, recurring: "monthly" }
  ],
  
  // Calculated
  monthlySubtotal: 925,
  durationDiscount: 92.50,
  monthlyTotal: 832.50,
  oneTimeTotal: 1800,
  totalMonthlyOverTerm: 4995,
  totalInvestment: 6795,
  hasCustomQuote: false,
  
  // Customer Info
  customer: {
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    notes: ""
  }
}
```

### Price Calculation Logic

```javascript
function calculateTotal(state) {
  let monthlySubtotal = 0;
  let oneTimeTotal = 0;
  let hasCustomQuote = false;
  
  // Platforms (monthly)
  if (state.platforms.price === null) {
    hasCustomQuote = true;
  } else {
    monthlySubtotal += state.platforms.price;
  }
  
  // Management
  if (state.management.oneTime) {
    oneTimeTotal += state.management.price;
  } else {
    monthlySubtotal += state.management.price;
  }
  
  // Creatives - Ad Creative
  if (state.creatives.adCreative.price) {
    oneTimeTotal += state.creatives.adCreative.price;
  }
  
  // Creatives - Landing Page
  if (state.creatives.landingPage.price) {
    oneTimeTotal += state.creatives.landingPage.price;
  }
  
  // Tracking
  oneTimeTotal += state.tracking.price;
  
  // Reporting (monthly)
  monthlySubtotal += state.reporting.price;
  
  // Add-ons
  state.addOns.forEach(addon => {
    if (addon.oneTime) {
      oneTimeTotal += addon.price;
    } else {
      monthlySubtotal += addon.price;
    }
  });
  
  // Duration multiplier (applies to monthly only)
  const multiplier = state.duration.multiplier;
  const durationDiscount = monthlySubtotal * (1 - multiplier);
  const monthlyTotal = monthlySubtotal * multiplier;
  
  // Calculate totals
  const months = state.duration.months;
  const totalMonthlyOverTerm = monthlyTotal * months;
  const totalInvestment = totalMonthlyOverTerm + oneTimeTotal;
  
  return {
    monthlySubtotal: monthlySubtotal,
    durationDiscount: durationDiscount,
    monthlyTotal: monthlyTotal,
    oneTimeTotal: oneTimeTotal,
    totalMonthlyOverTerm: totalMonthlyOverTerm,
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
- Clearly distinguish **Monthly** vs **One-Time** costs throughout
- Show duration discount prominently
- Display ad spend range as informational only (not included in totals)
- Use "/mo" suffix for all monthly recurring items

### Real-time Price Update
- Sticky footer or sidebar showing running totals
- Separate displays for Monthly Total and One-Time Total
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

### Quick Reference - Monthly Costs

| Category | Option | Price |
|----------|--------|-------|
| **Platforms** | Google Ads Only | $150/mo |
| | Meta Only | $150/mo |
| | TikTok Only | $175/mo |
| | LinkedIn Only | $200/mo |
| | Google + Meta | $250/mo |
| | Google + Meta + LinkedIn | $375/mo |
| | Multi-Platform (4+) | $450/mo+ |
| | Custom Mix | Custom |
| **Management** | Light Management | $200/mo |
| | Full Management | $400/mo |
| | Premium Management | $700/mo+ |
| **Reporting** | Monthly Reports | $0/mo |
| | Bi-Weekly Reports | $75/mo |
| | Weekly Reports + Call | $150/mo |
| | Real-Time + Weekly Call | $250/mo |
| **Add-ons** | A/B Testing Program | $200/mo |

### Quick Reference - One-Time Costs

| Category | Option | Price |
|----------|--------|-------|
| **Management** | Setup Only | $300 |
| **Creatives** | Ad Copy Only | $150 |
| | Static Images (5) | $250 |
| | Static Images (10) | $400 |
| | Video Ads (1) | $500+ |
| | Video Ads (3) | $1,200+ |
| | Full Creative Package | $800+ |
| **Landing Page** | Audit | $150 |
| | Single Page | $500 |
| | Page + A/B Variant | $750 |
| | Page System (3+) | $1,200+ |
| **Tracking** | Basic | $100 |
| | Standard | $250 |
| | Advanced | $500 |
| | Enterprise | $1,000+ |
| **Add-ons** | Competitor Analysis | $300 |
| | Audience Research | $250 |
| | CRM Integration | $350 |
| | Remarketing Setup | $200 |
| | Lead Scoring Setup | $400 |
| | Email Nurture Integration | $300 |

### Quick Reference - Duration Discounts

| Duration | Multiplier | Effect |
|----------|------------|--------|
| 1 Month (Trial) | 1.25 | +25% premium |
| 3 Months (Standard) | 1.0 | Base price |
| 6 Months (Growth) | 0.90 | -10% discount |
| 12 Months (Partnership) | 0.80 | -20% discount |

---

## Price Examples

### Example 1: Starter Search Campaign

| Selection | Option | Price |
|-----------|--------|-------|
| **Monthly** | | |
| Platforms | Google Ads Only | $150/mo |
| Management | Full Management | $400/mo |
| Reporting | Monthly | $0/mo |
| **Monthly Subtotal** | | **$550/mo** |
| Duration | 3 Months | +0% |
| **Monthly Total** | | **$550/mo** |
| | | |
| **One-Time** | | |
| Creatives | Ad Copy Only | $150 |
| Tracking | Basic | $100 |
| **One-Time Total** | | **$250** |
| | | |
| **3-Month Total** | | **$1,900** |

---

### Example 2: Growth Social Campaign

| Selection | Option | Price |
|-----------|--------|-------|
| **Monthly** | | |
| Platforms | Google + Meta | $250/mo |
| Management | Full Management | $400/mo |
| Reporting | Bi-Weekly | $75/mo |
| **Monthly Subtotal** | | **$725/mo** |
| Duration | 6 Months | -10% |
| **Monthly Total** | | **$652.50/mo** |
| | | |
| **One-Time** | | |
| Creatives | Static Images (10) | $400 |
| Landing Page | Single Page | $500 |
| Tracking | Standard | $250 |
| Remarketing Setup | — | $200 |
| **One-Time Total** | | **$1,350** |
| | | |
| **6-Month Total** | | **$5,265** |

---

### Example 3: B2B Lead Generation

| Selection | Option | Price |
|-----------|--------|-------|
| **Monthly** | | |
| Platforms | Google + Meta + LinkedIn | $375/mo |
| Management | Premium Management | $700/mo |
| Reporting | Weekly Reports + Call | $150/mo |
| **Monthly Subtotal** | | **$1,225/mo** |
| Duration | 6 Months | -10% |
| **Monthly Total** | | **$1,102.50/mo** |
| | | |
| **One-Time** | | |
| Creatives | Full Creative Package | $800 |
| Landing Page | Page + A/B Variant | $750 |
| Tracking | Advanced | $500 |
| Competitor Analysis | — | $300 |
| CRM Integration | — | $350 |
| Lead Scoring Setup | — | $400 |
| **One-Time Total** | | **$3,100** |
| | | |
| **6-Month Total** | | **$9,715** |

---

### Example 4: E-commerce Full-Funnel

| Selection | Option | Price |
|-----------|--------|-------|
| **Monthly** | | |
| Platforms | Multi-Platform (4+) | $450/mo |
| Management | Premium Management | $700/mo |
| Reporting | Real-Time + Weekly Call | $250/mo |
| A/B Testing | Program | $200/mo |
| **Monthly Subtotal** | | **$1,600/mo** |
| Duration | 12 Months | -20% |
| **Monthly Total** | | **$1,280/mo** |
| | | |
| **One-Time** | | |
| Creatives | Video Ads (3) | $1,200 |
| Creatives | Static Images (10) | $400 |
| Landing Page | System (3+) | $1,200 |
| Tracking | Advanced | $500 |
| Remarketing Setup | — | $200 |
| Email Nurture | — | $300 |
| **One-Time Total** | | **$3,800** |
| | | |
| **12-Month Total** | | **$19,160** |

---

## Integration Notes

- This custom builder lives alongside the standard tier selection (Essential/Pro/Enterprise)
- Customer can switch between "Choose a Package" and "Build Custom" views
- If custom total is close to a tier price, optionally suggest the tier as simpler option
- All data structures are API-ready for future backend integration
- Campaign type recommendations should guide users toward appropriate selections
- Consider showing "Popular for [Campaign Type]" badges on recommended options
- Ad spend is informational only — not included in pricing calculations
- Duration discounts only apply to monthly recurring fees, not one-time costs
