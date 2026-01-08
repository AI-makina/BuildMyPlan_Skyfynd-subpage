# Social Media Management Custom Builder - Feature Specification

## Overview

The Social Media Management Custom Builder is an interactive step-by-step configurator that allows customers to build their own social media management plan according to their specific needs. When a customer clicks "Custom" instead of selecting a pre-defined tier (Essential/Pro/Enterprise), they enter this guided builder flow.

---

## Core Mechanics

### Pricing Logic
- **Step 1 (Management Goal):** Information only — NO price impact
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

## Step 1: Management Goal (Info Only)

*Question: "What's your primary goal for social media?"*

**Price Impact:** None — informational only, triggers recommendations

| Option | Tooltip Content |
|--------|-----------------|
| Brand Awareness | **What it is:** Building visibility and recognition for your brand across social platforms. **Ideal if:** You're new, launching, or want to expand your reach to new audiences. **Examples:** Startups, rebrands, market expansion |
| Community Building | **What it is:** Growing and nurturing an engaged audience that interacts with your brand. **Ideal if:** You want loyal followers who comment, share, and advocate for you. **Examples:** Lifestyle brands, creators, membership businesses |
| Lead Generation | **What it is:** Using social content to capture potential customer information and drive inquiries. **Ideal if:** You want social media to directly feed your sales pipeline. **Examples:** B2B companies, service businesses, coaches |
| Sales & Conversions | **What it is:** Driving direct purchases or bookings through social media content and shopping features. **Ideal if:** You sell products/services and want social to drive revenue. **Examples:** E-commerce, restaurants, salons |
| Customer Support | **What it is:** Using social channels to respond to customer questions, complaints, and feedback. **Ideal if:** Your customers reach out via social and expect quick responses. **Examples:** SaaS, retail, hospitality |
| Thought Leadership | **What it is:** Establishing your brand or founders as industry experts and trusted voices. **Ideal if:** You want to build authority and trust in your space. **Examples:** Consultants, B2B, professional services |
| Recruitment / Employer Brand | **What it is:** Showcasing company culture and attracting talent through social presence. **Ideal if:** You're hiring and want to attract top candidates. **Examples:** Growing companies, competitive hiring markets |
| Full-Service Management | **What it is:** Comprehensive social media management covering all aspects of your presence. **Ideal if:** You want to hand off social media entirely to experts. **Examples:** Busy founders, scaling businesses |
| Other | **What it is:** Something unique or a combination of goals. **Ideal if:** Your needs don't fit standard categories — we'll tailor recommendations. |

```javascript
const managementGoalOptions = [
  { id: "awareness", label: "Brand Awareness" },
  { id: "community", label: "Community Building" },
  { id: "lead-gen", label: "Lead Generation" },
  { id: "sales", label: "Sales & Conversions" },
  { id: "support", label: "Customer Support" },
  { id: "thought-leadership", label: "Thought Leadership" },
  { id: "recruitment", label: "Recruitment / Employer Brand" },
  { id: "full-service", label: "Full-Service Management" },
  { id: "other", label: "Other" }
]
```

---

## Recommendation Presets (Based on Step 1)

When user selects a management goal, these options are **pre-selected** (but editable):

```javascript
const recommendationPresets = {
  "awareness": {
    platforms: "2",
    frequency: "standard",
    content: "standard",
    engagement: "standard",
    strategy: "standard",
    reporting: "monthly"
  },
  "community": {
    platforms: "2",
    frequency: "active",
    content: "standard",
    engagement: "active",
    strategy: "standard",
    reporting: "biweekly",
    addOns: ["stories-basic"]
  },
  "lead-gen": {
    platforms: "2",
    frequency: "standard",
    content: "standard",
    engagement: "active",
    strategy: "standard",
    reporting: "biweekly"
  },
  "sales": {
    platforms: "2",
    frequency: "active",
    content: "premium",
    engagement: "active",
    strategy: "standard",
    reporting: "biweekly",
    addOns: ["stories-active"]
  },
  "support": {
    platforms: "2",
    frequency: "light",
    content: "basic",
    engagement: "priority",
    strategy: "basic",
    reporting: "weekly"
  },
  "thought-leadership": {
    platforms: "2",
    frequency: "standard",
    content: "standard",
    engagement: "standard",
    strategy: "premium",
    reporting: "monthly"
  },
  "recruitment": {
    platforms: "2",
    frequency: "light",
    content: "standard",
    engagement: "standard",
    strategy: "basic",
    reporting: "monthly"
  },
  "full-service": {
    platforms: "3",
    frequency: "aggressive",
    content: "premium",
    engagement: "active",
    strategy: "premium",
    reporting: "weekly",
    addOns: ["stories-active", "reels-standard"]
  },
  "other": {
    platforms: "1",
    frequency: "light",
    content: "basic",
    engagement: "standard",
    strategy: "basic",
    reporting: "monthly"
  }
}
```

---

## Step 2: Platforms

*Question: "Which social platforms do you need managed?"*

**Default:** Based on Step 1 recommendation

**Supported Platforms:** Instagram, Facebook, LinkedIn, Twitter/X, TikTok, Pinterest, YouTube, Threads

| Option | Price | Tooltip |
|--------|-------|---------|
| 1 Platform | $200/mo | **What it is:** Management of a single social media platform. **Ideal if:** You want to focus efforts on one primary channel. **Examples:** LinkedIn-only for B2B, Instagram-only for visual brands |
| 2 Platforms | $350/mo | **What it is:** Coordinated management across two platforms. **Ideal if:** You want presence on your two most important channels. **Examples:** Instagram + Facebook, LinkedIn + Twitter |
| 3 Platforms | $475/mo | **What it is:** Management across three platforms with tailored content. **Ideal if:** You need broader coverage without full-scale presence. **Examples:** Instagram + Facebook + LinkedIn |
| 4 Platforms | $600/mo | **What it is:** Comprehensive management across four platforms. **Ideal if:** You want strong presence across major channels. **Examples:** Instagram + Facebook + LinkedIn + Twitter |
| 5+ Platforms | $750/mo+ | **What it is:** Full-scale management across all relevant platforms. **Ideal if:** You need maximum reach and platform diversity. **Examples:** Enterprise brands, media companies |
| Custom Mix | Custom quote | **What it is:** Tailored platform selection including niche networks. **Ideal if:** You need specific platforms like Pinterest, YouTube, TikTok, Reddit. |

```javascript
const platformOptions = [
  { id: "1", label: "1 Platform", price: 200, recurring: "monthly" },
  { id: "2", label: "2 Platforms", price: 350, recurring: "monthly" },
  { id: "3", label: "3 Platforms", price: 475, recurring: "monthly" },
  { id: "4", label: "4 Platforms", price: 600, recurring: "monthly" },
  { id: "5+", label: "5+ Platforms", price: 750, recurring: "monthly", startsAt: true },
  { id: "custom", label: "Custom Mix", price: null, customQuote: true }
]
```

---

## Step 3: Posting Frequency

*Question: "How often do you want to post?"*

**Default:** Standard (12 posts/mo)

**Note:** Post counts are per platform. Multi-platform management includes tailored content for each.

| Option | Price | Tooltip |
|--------|-------|---------|
| Light (8 posts/mo) | $150/mo | **What it is:** 2 posts per week — maintains presence without heavy lift. **Ideal if:** You want consistent visibility with minimal content needs. **Examples:** B2B, professional services, niche brands |
| Standard (12 posts/mo) | $250/mo | **What it is:** 3 posts per week — solid presence with regular content. **Ideal if:** You want steady engagement without daily posting. **Examples:** Most businesses, service providers |
| Active (16 posts/mo) | $350/mo | **What it is:** 4 posts per week — active presence with varied content. **Ideal if:** You want to stay top-of-mind with your audience. **Examples:** Retail, restaurants, lifestyle brands |
| Aggressive (20 posts/mo) | $450/mo | **What it is:** 5 posts per week — high-frequency visibility. **Ideal if:** You're in a competitive space or building momentum. **Examples:** E-commerce, media, fast-moving industries |
| Daily (30 posts/mo) | $600/mo | **What it is:** Daily posting across platforms. **Ideal if:** You need constant presence and have lots to share. **Examples:** News, entertainment, high-volume e-commerce |
| Custom Frequency | Custom quote | **What it is:** Tailored posting schedule based on your specific needs. **Ideal if:** You have unique requirements or seasonal variations. |

```javascript
const frequencyOptions = [
  { id: "light", label: "Light (8 posts/mo)", price: 150, recurring: "monthly", postsPerMonth: 8 },
  { id: "standard", label: "Standard (12 posts/mo)", price: 250, recurring: "monthly", postsPerMonth: 12 },
  { id: "active", label: "Active (16 posts/mo)", price: 350, recurring: "monthly", postsPerMonth: 16 },
  { id: "aggressive", label: "Aggressive (20 posts/mo)", price: 450, recurring: "monthly", postsPerMonth: 20 },
  { id: "daily", label: "Daily (30 posts/mo)", price: 600, recurring: "monthly", postsPerMonth: 30 },
  { id: "custom", label: "Custom Frequency", price: null, customQuote: true }
]
```

---

## Step 4: Content Creation

*Question: "What level of content creation do you need?"*

**Default:** Standard (Graphics + Captions)

| Option | Price | Tooltip |
|--------|-------|---------|
| Client Provides Content | $0/mo | **What it is:** You supply all photos, videos, and copy — we schedule and post. **Ideal if:** You have an internal team creating content. **Examples:** In-house marketing teams |
| Basic (Captions + Hashtags) | $100/mo | **What it is:** We write captions and research hashtags for content you provide. **Ideal if:** You have visuals but need copywriting help. **Examples:** Product-based businesses with photos |
| Standard (Graphics + Captions) | $250/mo | **What it is:** Designed graphics, written captions, and hashtag strategy. **Ideal if:** You want polished, branded social content. **Examples:** Most businesses, professional presence |
| Premium (Mixed Media) | $400/mo | **What it is:** Graphics, basic video edits, carousels, and Stories content. **Ideal if:** You want varied, engaging content across formats. **Examples:** Lifestyle brands, e-commerce, hospitality |
| Full Production | $600/mo+ | **What it is:** High-quality graphics, video production, Reels/TikToks, animations. **Ideal if:** You want scroll-stopping, professional content. **Examples:** Premium brands, competitive markets |
| Content + UGC Curation | $350/mo | **What it is:** Original content plus sourcing and reposting user-generated content. **Ideal if:** You want to leverage customer content alongside original posts. **Examples:** E-commerce, hospitality, lifestyle |

```javascript
const contentOptions = [
  { id: "client", label: "Client Provides Content", price: 0, recurring: "monthly" },
  { id: "basic", label: "Basic (Captions + Hashtags)", price: 100, recurring: "monthly" },
  { id: "standard", label: "Standard (Graphics + Captions)", price: 250, recurring: "monthly" },
  { id: "premium", label: "Premium (Mixed Media)", price: 400, recurring: "monthly" },
  { id: "full", label: "Full Production", price: 600, recurring: "monthly", startsAt: true },
  { id: "ugc", label: "Content + UGC Curation", price: 350, recurring: "monthly" }
]
```

---

## Step 5: Engagement & Community Management

*Question: "How should we handle engagement with your audience?"*

**Default:** Standard Engagement

| Option | Price | Tooltip |
|--------|-------|---------|
| No Engagement | $0/mo | **What it is:** We post content only — you handle all comments and messages. **Ideal if:** You want to personally manage community interaction. **Examples:** Personal brands, small businesses |
| Monitoring Only | $75/mo | **What it is:** We monitor comments and DMs, flag important items, but don't respond. **Ideal if:** You want visibility without us speaking for your brand. **Examples:** Sensitive industries, regulated businesses |
| Standard Engagement | $150/mo | **What it is:** Respond to comments and DMs within 24 hours during business days. **Ideal if:** You want professional, timely community management. **Examples:** Most businesses |
| Active Engagement | $275/mo | **What it is:** Proactive engagement — responding, liking, commenting on relevant content, growing community. **Ideal if:** You want to build relationships and grow organically. **Examples:** Community-focused brands, B2B networking |
| Priority Engagement | $400/mo | **What it is:** Same-day responses, weekend monitoring, escalation protocols, sentiment tracking. **Ideal if:** Social is a key customer touchpoint requiring fast response. **Examples:** Customer support via social, high-volume accounts |
| 24/7 Engagement | Custom quote | **What it is:** Round-the-clock monitoring and response. **Ideal if:** You have a global audience or critical response requirements. **Examples:** Enterprise, global brands |

```javascript
const engagementOptions = [
  { id: "none", label: "No Engagement", price: 0, recurring: "monthly" },
  { id: "monitoring", label: "Monitoring Only", price: 75, recurring: "monthly" },
  { id: "standard", label: "Standard Engagement", price: 150, recurring: "monthly" },
  { id: "active", label: "Active Engagement", price: 275, recurring: "monthly" },
  { id: "priority", label: "Priority Engagement", price: 400, recurring: "monthly" },
  { id: "24-7", label: "24/7 Engagement", price: null, customQuote: true }
]
```

---

## Step 6: Strategy & Planning

*Question: "What level of strategic support do you need?"*

**Default:** Standard Strategy

| Option | Price | Tooltip |
|--------|-------|---------|
| No Strategy (Execution Only) | $0/mo | **What it is:** We execute based on your direction — no strategic input. **Ideal if:** You have a clear strategy and just need execution help. **Examples:** In-house strategists |
| Basic Strategy | $100/mo | **What it is:** Monthly content calendar with posting schedule and basic content themes. **Ideal if:** You want organized planning without deep strategy. **Examples:** Small businesses, straightforward needs |
| Standard Strategy | $200/mo | **What it is:** Monthly strategy, content calendar, hashtag research, and basic analytics review. **Ideal if:** You want strategic guidance with regular optimization. **Examples:** Growing businesses |
| Premium Strategy | $350/mo | **What it is:** Comprehensive strategy, competitor monitoring, trend identification, monthly strategy calls. **Ideal if:** You want proactive, data-driven social media management. **Examples:** Competitive markets, growth-focused brands |
| Full Strategic Partnership | $500/mo+ | **What it is:** Dedicated strategist, quarterly planning, campaign development, cross-channel coordination. **Ideal if:** Social is critical to your business and needs expert leadership. **Examples:** Enterprise, funded startups |

```javascript
const strategyOptions = [
  { id: "none", label: "No Strategy (Execution Only)", price: 0, recurring: "monthly" },
  { id: "basic", label: "Basic Strategy", price: 100, recurring: "monthly" },
  { id: "standard", label: "Standard Strategy", price: 200, recurring: "monthly" },
  { id: "premium", label: "Premium Strategy", price: 350, recurring: "monthly" },
  { id: "full", label: "Full Strategic Partnership", price: 500, recurring: "monthly", startsAt: true }
]
```

---

## Step 7: Reporting & Analytics

*Question: "How do you want to track performance?"*

**Default:** Monthly Summary

| Option | Price | Tooltip |
|--------|-------|---------|
| No Reporting | $0/mo | **What it is:** No formal reports — you track metrics yourself. **Ideal if:** You have internal analytics capabilities. **Examples:** In-house data teams |
| Monthly Summary | $50/mo | **What it is:** Monthly report with key metrics, top posts, and basic insights. **Ideal if:** You want regular visibility without deep analysis. **Examples:** Most small businesses |
| Bi-Weekly Reports | $100/mo | **What it is:** Reports every two weeks with performance trends and recommendations. **Ideal if:** You want more frequent optimization cycles. **Examples:** Active campaigns, growth phases |
| Weekly Reports + Call | $200/mo | **What it is:** Weekly written reports plus a call to discuss performance and adjustments. **Ideal if:** You want close collaboration and rapid iteration. **Examples:** Aggressive growth, launches |
| Real-Time Dashboard | $150/mo | **What it is:** Live dashboard with 24/7 access to all metrics and performance data. **Ideal if:** You want constant visibility and self-serve analytics. **Examples:** Data-driven teams |
| Dashboard + Weekly Call | $300/mo | **What it is:** Real-time dashboard plus weekly strategy calls. **Ideal if:** You want full visibility and active strategic partnership. **Examples:** Premium clients, enterprise |

```javascript
const reportingOptions = [
  { id: "none", label: "No Reporting", price: 0, recurring: "monthly" },
  { id: "monthly", label: "Monthly Summary", price: 50, recurring: "monthly" },
  { id: "biweekly", label: "Bi-Weekly Reports", price: 100, recurring: "monthly" },
  { id: "weekly", label: "Weekly Reports + Call", price: 200, recurring: "monthly" },
  { id: "dashboard", label: "Real-Time Dashboard", price: 150, recurring: "monthly" },
  { id: "dashboard-call", label: "Dashboard + Weekly Call", price: 300, recurring: "monthly" }
]
```

---

## Step 8: Add-on Services

*Question: "Select any additional services you need."*

Each add-on can be **selected/deselected**.

---

### Stories Management

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Included | $0/mo | **What it is:** Stories not managed — focus on feed posts only. **Ideal if:** Stories aren't a priority for your brand. |
| Basic Stories (8/mo) | $100/mo | **What it is:** 2 Stories per week with simple graphics or repurposed content. **Ideal if:** You want consistent Stories presence. **Examples:** Behind-the-scenes, quick updates |
| Active Stories (16/mo) | $200/mo | **What it is:** 4 Stories per week with designed content, polls, and stickers. **Ideal if:** You want engaging, interactive Stories. **Examples:** Retail, lifestyle, engagement-focused |
| Daily Stories (30/mo) | $350/mo | **What it is:** Daily Story content with varied formats and features. **Ideal if:** Stories are a key part of your strategy. **Examples:** Influencer-style brands, high-engagement accounts |

```javascript
const storiesOptions = [
  { id: "none", label: "Not Included", price: 0, recurring: "monthly" },
  { id: "basic", label: "Basic Stories (8/mo)", price: 100, recurring: "monthly" },
  { id: "active", label: "Active Stories (16/mo)", price: 200, recurring: "monthly" },
  { id: "daily", label: "Daily Stories (30/mo)", price: 350, recurring: "monthly" }
]
```

---

### Reels / Short-Form Video

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Included | $0/mo | **What it is:** No Reels/TikTok/Shorts production. **Ideal if:** Video isn't part of your current strategy. |
| Basic (4 Reels/mo) | $200/mo | **What it is:** 1 Reel per week — simple edits, trending audio, text overlays. **Ideal if:** You want to participate in short-form video without heavy investment. **Examples:** Behind-the-scenes, tips, product highlights |
| Standard (8 Reels/mo) | $375/mo | **What it is:** 2 Reels per week — edited video content with graphics and transitions. **Ideal if:** You want consistent video presence. **Examples:** Tutorials, product demos, trends |
| Premium (12 Reels/mo) | $550/mo | **What it is:** 3 Reels per week — high-quality production, scripted content, effects. **Ideal if:** Video is a priority growth channel. **Examples:** Lifestyle brands, e-commerce, creators |
| Aggressive (16+ Reels/mo) | $750/mo+ | **What it is:** 4+ Reels per week — video-first strategy. **Ideal if:** You're going all-in on short-form video. **Examples:** TikTok-focused brands, viral growth strategy |

```javascript
const reelsOptions = [
  { id: "none", label: "Not Included", price: 0, recurring: "monthly" },
  { id: "basic", label: "Basic (4 Reels/mo)", price: 200, recurring: "monthly" },
  { id: "standard", label: "Standard (8 Reels/mo)", price: 375, recurring: "monthly" },
  { id: "premium", label: "Premium (12 Reels/mo)", price: 550, recurring: "monthly" },
  { id: "aggressive", label: "Aggressive (16+ Reels/mo)", price: 750, recurring: "monthly", startsAt: true }
]
```

---

### Additional Services

| Option | Price | Tooltip |
|--------|-------|---------|
| Influencer Coordination | $200/mo | **What it is:** Identify, outreach, and coordinate with micro-influencers for collaborations. **Ideal if:** You want to leverage influencer partnerships. **Examples:** Product seeding, sponsored posts, collaborations |
| Paid Social Boost | $150/mo | **What it is:** Strategic boosting of top-performing organic posts (ad spend separate). **Ideal if:** You want to amplify best content with paid support. **Examples:** Extending reach on key posts |
| Social Listening | $175/mo | **What it is:** Monitor brand mentions, industry conversations, and competitor activity. **Ideal if:** You want to track what's being said about your brand. **Examples:** Reputation management, market intelligence |
| Contest / Giveaway Management | $250/mo | **What it is:** Plan, execute, and manage social media contests or giveaways. **Ideal if:** You want to run promotions to grow followers and engagement. **Examples:** Product launches, follower milestones |
| Profile Optimization | $150 (one-time) | **What it is:** Audit and optimize all profile bios, links, highlights, and settings. **Ideal if:** Your profiles need a refresh or haven't been optimized. **Examples:** New accounts, rebrands |
| Content Photoshoot Coordination | $300 (one-time) | **What it is:** Plan and coordinate a photoshoot for social content (photographer fees separate). **Ideal if:** You need original photography for content. **Examples:** Product shoots, lifestyle imagery |
| Social Media Audit | $250 (one-time) | **What it is:** Comprehensive review of current social presence with recommendations. **Ideal if:** You want expert analysis before committing to management. **Examples:** Starting point assessment |

```javascript
const additionalServices = [
  { id: "influencer", label: "Influencer Coordination", price: 200, recurring: "monthly" },
  { id: "boost", label: "Paid Social Boost", price: 150, recurring: "monthly" },
  { id: "listening", label: "Social Listening", price: 175, recurring: "monthly" },
  { id: "contest", label: "Contest / Giveaway Management", price: 250, recurring: "monthly" },
  { id: "profile-optimization", label: "Profile Optimization", price: 150, oneTime: true },
  { id: "photoshoot", label: "Content Photoshoot Coordination", price: 300, oneTime: true },
  { id: "audit", label: "Social Media Audit", price: 250, oneTime: true }
]
```

---

## Step 9: Contract Duration

*Question: "How long do you want to commit?"*

**Default:** 3 Months

| Option | Price Impact | Tooltip |
|--------|--------------|---------|
| Month-to-Month | +15% | **What it is:** No long-term commitment, cancel anytime. **Ideal if:** You want flexibility to adjust or pause. **Examples:** Testing, uncertain timelines |
| 3 Months | +0% | **What it is:** Quarterly commitment for meaningful results. **Ideal if:** You want time to see impact without long lock-in. **Examples:** Campaign periods, trial runs |
| 6 Months | -10% | **What it is:** Extended commitment with better rates and deeper strategy. **Ideal if:** You're serious about growth and want savings. **Examples:** Sustained growth efforts |
| 12 Months | -20% | **What it is:** Annual partnership with maximum savings and strategic depth. **Ideal if:** Social is a core channel and you want the best pricing. **Examples:** Long-term brand building |

```javascript
const durationOptions = [
  { id: "monthly", label: "Month-to-Month", multiplier: 1.15 },
  { id: "3-months", label: "3 Months", multiplier: 1.0 },
  { id: "6-months", label: "6 Months", multiplier: 0.90 },
  { id: "12-months", label: "12 Months", multiplier: 0.80 }
]
```

---

## Summary Screen

### UI Elements

1. **Selection Summary Table**
   - Separates Monthly Costs from One-Time Costs
   - Shows duration discount applied to monthly fees
   - Editable — clicking any row returns to that step

2. **Price Calculation Display**
   ```
   YOUR CUSTOM SOCIAL MEDIA PLAN
   ────────────────────────────────────────

   MONTHLY COSTS
   Platforms                   2 Platforms                 $350/mo
   Posting Frequency           Standard (12/mo)            $250/mo
   Content Creation            Standard (Graphics)         $250/mo
   Engagement                  Active Engagement           $275/mo
   Strategy                    Standard Strategy           $200/mo
   Reporting                   Bi-Weekly Reports           $100/mo
   Stories                     Basic (8/mo)                $100/mo
   Reels                       Basic (4/mo)                $200/mo
   Influencer Coordination     —                           $200/mo
   ────────────────────────────────────────
   Monthly Subtotal                                        $1,925/mo
   Duration Discount           6 Months (-10%)             -$192.50/mo
   ────────────────────────────────────────
   MONTHLY TOTAL                                           $1,732.50/mo


   ONE-TIME COSTS
   Profile Optimization        —                           $150
   Social Media Audit          —                           $250
   ────────────────────────────────────────
   ONE-TIME TOTAL                                          $400


   COMMITMENT SUMMARY
   Duration                    6 Months
   Monthly Fee                 $1,732.50/mo
   Total Monthly Over Term     $10,395
   One-Time Setup              $400
   ────────────────────────────────────────
   TOTAL INVESTMENT            $10,795

   [ Adjust Plan ]                      [ Generate Quote ]
   ```

3. **Action Buttons**
   - [ Adjust Plan ] — Returns to builder flow
   - [ **Generate Quote** ] — Opens quote request form

4. **Disclaimer Text**
   *"This is an estimate based on your selections. Final pricing may vary based on project specifics. Ad spend for paid social boosts is paid separately and not included in this quote."*

---

## Quote Request Form

| Field | Type | Required |
|-------|------|----------|
| Full Name | Text | Yes |
| Email | Email | Yes |
| Company / Brand | Text | No |
| Phone | Tel | No |
| Website URL | URL | No |
| Current Social Handles | Text | No |
| Project Notes | Textarea | No |

---

## Confirmation Screen

```
✓ Quote Request Submitted

Thanks, [Name]! We've received your custom social media plan.

What's next:
• We'll review your selections within 24–48 hours
• You'll receive a detailed proposal via email
• We'll schedule a discovery call to discuss your goals and brand

Your Reference: #SMM-[timestamp]
```

---

## Data Models

### Builder State

```javascript
const builderState = {
  // Step 1
  managementGoal: "community", // info only, no price
  
  // Step 2
  platforms: {
    selected: "2",
    price: 350,
    recurring: "monthly"
  },
  
  // Step 3
  frequency: {
    selected: "standard",
    price: 250,
    recurring: "monthly",
    postsPerMonth: 12
  },
  
  // Step 4
  content: {
    selected: "standard",
    price: 250,
    recurring: "monthly"
  },
  
  // Step 5
  engagement: {
    selected: "active",
    price: 275,
    recurring: "monthly"
  },
  
  // Step 6
  strategy: {
    selected: "standard",
    price: 200,
    recurring: "monthly"
  },
  
  // Step 7
  reporting: {
    selected: "biweekly",
    price: 100,
    recurring: "monthly"
  },
  
  // Step 8 - Add-ons
  addOns: {
    stories: { selected: "basic", price: 100, recurring: "monthly" },
    reels: { selected: "basic", price: 200, recurring: "monthly" },
    additional: [
      { id: "influencer", price: 200, recurring: "monthly" },
      { id: "profile-optimization", price: 150, oneTime: true },
      { id: "audit", price: 250, oneTime: true }
    ]
  },
  
  // Step 9
  duration: {
    selected: "6-months",
    multiplier: 0.90,
    months: 6
  },
  
  // Calculated
  monthlySubtotal: 1925,
  durationDiscount: 192.50,
  monthlyTotal: 1732.50,
  oneTimeTotal: 400,
  totalMonthlyOverTerm: 10395,
  totalInvestment: 10795,
  hasCustomQuote: false,
  
  // Customer Info
  customer: {
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    socialHandles: "",
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
  
  // Frequency (monthly)
  if (state.frequency.price === null) {
    hasCustomQuote = true;
  } else {
    monthlySubtotal += state.frequency.price;
  }
  
  // Content (monthly)
  monthlySubtotal += state.content.price;
  
  // Engagement (monthly)
  if (state.engagement.price === null) {
    hasCustomQuote = true;
  } else {
    monthlySubtotal += state.engagement.price;
  }
  
  // Strategy (monthly)
  monthlySubtotal += state.strategy.price;
  
  // Reporting (monthly)
  monthlySubtotal += state.reporting.price;
  
  // Stories (monthly)
  monthlySubtotal += state.addOns.stories.price;
  
  // Reels (monthly)
  if (state.addOns.reels.price === null) {
    hasCustomQuote = true;
  } else {
    monthlySubtotal += state.addOns.reels.price;
  }
  
  // Additional Add-ons
  state.addOns.additional.forEach(addon => {
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
  const months = state.duration.months || 1;
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
- Use "/mo" suffix for all monthly recurring items
- Show posts per month alongside frequency options

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
| **Platforms** | 1 Platform | $200/mo |
| | 2 Platforms | $350/mo |
| | 3 Platforms | $475/mo |
| | 4 Platforms | $600/mo |
| | 5+ Platforms | $750/mo+ |
| | Custom Mix | Custom |
| **Frequency** | Light (8/mo) | $150/mo |
| | Standard (12/mo) | $250/mo |
| | Active (16/mo) | $350/mo |
| | Aggressive (20/mo) | $450/mo |
| | Daily (30/mo) | $600/mo |
| | Custom | Custom |
| **Content** | Client Provides | $0/mo |
| | Basic (Captions) | $100/mo |
| | Standard (Graphics) | $250/mo |
| | Premium (Mixed Media) | $400/mo |
| | Full Production | $600/mo+ |
| | Content + UGC | $350/mo |
| **Engagement** | No Engagement | $0/mo |
| | Monitoring Only | $75/mo |
| | Standard | $150/mo |
| | Active | $275/mo |
| | Priority | $400/mo |
| | 24/7 | Custom |
| **Strategy** | No Strategy | $0/mo |
| | Basic | $100/mo |
| | Standard | $200/mo |
| | Premium | $350/mo |
| | Full Partnership | $500/mo+ |
| **Reporting** | No Reporting | $0/mo |
| | Monthly Summary | $50/mo |
| | Bi-Weekly Reports | $100/mo |
| | Weekly + Call | $200/mo |
| | Real-Time Dashboard | $150/mo |
| | Dashboard + Weekly Call | $300/mo |
| **Stories** | Not Included | $0/mo |
| | Basic (8/mo) | $100/mo |
| | Active (16/mo) | $200/mo |
| | Daily (30/mo) | $350/mo |
| **Reels** | Not Included | $0/mo |
| | Basic (4/mo) | $200/mo |
| | Standard (8/mo) | $375/mo |
| | Premium (12/mo) | $550/mo |
| | Aggressive (16+/mo) | $750/mo+ |
| **Additional** | Influencer Coordination | $200/mo |
| | Paid Social Boost | $150/mo |
| | Social Listening | $175/mo |
| | Contest Management | $250/mo |

### Quick Reference - One-Time Costs

| Service | Price |
|---------|-------|
| Profile Optimization | $150 |
| Content Photoshoot Coordination | $300 |
| Social Media Audit | $250 |

### Quick Reference - Duration Discounts

| Duration | Multiplier | Effect |
|----------|------------|--------|
| Month-to-Month | 1.15 | +15% premium |
| 3 Months | 1.0 | Base price |
| 6 Months | 0.90 | -10% discount |
| 12 Months | 0.80 | -20% discount |

---

## Price Examples

### Example 1: Starter Presence

| Selection | Option | Price |
|-----------|--------|-------|
| **Monthly** | | |
| Platforms | 1 Platform | $200/mo |
| Frequency | Light (8/mo) | $150/mo |
| Content | Basic (Captions) | $100/mo |
| Engagement | Standard | $150/mo |
| Strategy | Basic | $100/mo |
| Reporting | Monthly Summary | $50/mo |
| **Monthly Subtotal** | | **$750/mo** |
| Duration | 3 Months | +0% |
| **Monthly Total** | | **$750/mo** |
| | | |
| **3-Month Total** | | **$2,250** |

---

### Example 2: Growth Package

| Selection | Option | Price |
|-----------|--------|-------|
| **Monthly** | | |
| Platforms | 2 Platforms | $350/mo |
| Frequency | Standard (12/mo) | $250/mo |
| Content | Standard (Graphics) | $250/mo |
| Engagement | Active | $275/mo |
| Strategy | Standard | $200/mo |
| Reporting | Bi-Weekly | $100/mo |
| Stories | Basic (8/mo) | $100/mo |
| **Monthly Subtotal** | | **$1,525/mo** |
| Duration | 6 Months | -10% |
| **Monthly Total** | | **$1,372.50/mo** |
| | | |
| **6-Month Total** | | **$8,235** |

---

### Example 3: Full-Service Management

| Selection | Option | Price |
|-----------|--------|-------|
| **Monthly** | | |
| Platforms | 3 Platforms | $475/mo |
| Frequency | Active (16/mo) | $350/mo |
| Content | Premium (Mixed Media) | $400/mo |
| Engagement | Active | $275/mo |
| Strategy | Premium | $350/mo |
| Reporting | Weekly + Call | $200/mo |
| Stories | Active (16/mo) | $200/mo |
| Reels | Standard (8/mo) | $375/mo |
| Influencer Coordination | — | $200/mo |
| Social Listening | — | $175/mo |
| **Monthly Subtotal** | | **$3,000/mo** |
| Duration | 6 Months | -10% |
| **Monthly Total** | | **$2,700/mo** |
| | | |
| **One-Time** | | |
| Profile Optimization | — | $150 |
| **One-Time Total** | | **$150** |
| | | |
| **6-Month Total** | | **$16,350** |

---

### Example 4: Enterprise Social

| Selection | Option | Price |
|-----------|--------|-------|
| **Monthly** | | |
| Platforms | 5+ Platforms | $750/mo |
| Frequency | Aggressive (20/mo) | $450/mo |
| Content | Full Production | $600/mo |
| Engagement | Priority | $400/mo |
| Strategy | Full Partnership | $500/mo |
| Reporting | Dashboard + Weekly Call | $300/mo |
| Stories | Daily (30/mo) | $350/mo |
| Reels | Premium (12/mo) | $550/mo |
| Influencer Coordination | — | $200/mo |
| Social Listening | — | $175/mo |
| Paid Social Boost | — | $150/mo |
| **Monthly Subtotal** | | **$4,425/mo** |
| Duration | 12 Months | -20% |
| **Monthly Total** | | **$3,540/mo** |
| | | |
| **One-Time** | | |
| Profile Optimization | — | $150 |
| Social Media Audit | — | $250 |
| **One-Time Total** | | **$400** |
| | | |
| **12-Month Total** | | **$42,880** |

---

## Integration Notes

- This custom builder lives alongside the standard tier selection (Essential/Pro/Enterprise)
- Customer can switch between "Choose a Package" and "Build Custom" views
- If custom total is close to a tier price, optionally suggest the tier as simpler option
- All data structures are API-ready for future backend integration
- Management goal recommendations should guide users toward appropriate selections
- Consider showing "Popular for [Goal]" badges on recommended options
- Duration discounts only apply to monthly recurring fees, not one-time costs
- Ad spend for paid social boosts is separate and not included in pricing
