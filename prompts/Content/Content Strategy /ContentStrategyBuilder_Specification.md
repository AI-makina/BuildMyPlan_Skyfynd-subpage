# Content Strategy Custom Builder - Feature Specification

## Overview

The Content Strategy Custom Builder is an interactive step-by-step configurator that allows customers to build their own content strategy engagement according to their specific needs. Content Strategy focuses on the planning, framework, and systems that guide content creation — the "what, why, and how" before execution. When a customer clicks "Custom" instead of selecting a pre-defined tier (Essential/Pro/Enterprise), they enter this guided builder flow.

---

## Core Mechanics

### Pricing Logic
- **Step 1 (Content Strategy Goal):** Information only — NO price impact
- **Steps 2–10:** All pricing calculated from these selections
- **One-time project pricing:** Content strategy is typically a one-time engagement with optional ongoing components
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

## Step 1: Content Strategy Goal (Info Only)

*Question: "What's driving your need for content strategy?"*

**Price Impact:** None — informational only, triggers recommendations

| Option | Tooltip Content |
|--------|-----------------|
| Starting from Scratch | **What it is:** Building content strategy foundations for a new brand or initiative. **Ideal if:** You're launching and need a content roadmap before creating anything. **Examples:** Startups, new products, new markets |
| Content Overhaul | **What it is:** Rethinking and restructuring existing content approach. **Ideal if:** Current content isn't working and you need a new direction. **Examples:** Pivots, rebrands, performance issues |
| Scale Content Operations | **What it is:** Building systems and processes to produce more content efficiently. **Ideal if:** You need to increase content output without sacrificing quality. **Examples:** Growing teams, content expansion |
| Improve Content Performance | **What it is:** Optimizing content strategy for better results. **Ideal if:** You have content but it's not delivering desired outcomes. **Examples:** Low engagement, poor SEO, conversion issues |
| Launch Content Program | **What it is:** Creating strategy for a specific content initiative (blog, podcast, video). **Ideal if:** You're launching a new content channel or format. **Examples:** Blog launch, podcast strategy, video series |
| SEO & Organic Growth | **What it is:** Content strategy focused on search visibility and organic traffic. **Ideal if:** You want content to drive sustainable organic growth. **Examples:** SEO-driven businesses, inbound marketing |
| Thought Leadership | **What it is:** Strategy to establish authority and expertise in your space. **Ideal if:** You want to be seen as an industry leader. **Examples:** B2B, consultants, executives, experts |
| Sales Enablement Content | **What it is:** Content strategy supporting sales process and conversions. **Ideal if:** You need content that helps close deals. **Examples:** B2B sales, considered purchases |
| Full Content Strategy | **What it is:** Comprehensive content strategy covering all aspects. **Ideal if:** You need end-to-end content strategy across channels. **Examples:** Complete content programs, enterprise |
| Other | **What it is:** Something unique or a combination of goals. **Ideal if:** Your situation doesn't fit standard categories — we'll tailor recommendations. |

```javascript
const contentGoalOptions = [
  { id: "scratch", label: "Starting from Scratch" },
  { id: "overhaul", label: "Content Overhaul" },
  { id: "scale", label: "Scale Content Operations" },
  { id: "performance", label: "Improve Content Performance" },
  { id: "launch", label: "Launch Content Program" },
  { id: "seo", label: "SEO & Organic Growth" },
  { id: "thought-leadership", label: "Thought Leadership" },
  { id: "sales", label: "Sales Enablement Content" },
  { id: "full", label: "Full Content Strategy" },
  { id: "other", label: "Other" }
]
```

---

## Recommendation Presets (Based on Step 1)

When user selects a content strategy goal, these options are **pre-selected** (but editable):

```javascript
const recommendationPresets = {
  "scratch": {
    depth: "foundation",
    audit: "none",
    audience: "standard",
    channels: "standard",
    editorial: "standard",
    seo: "basic",
    governance: "basic",
    measurement: "standard"
  },
  "overhaul": {
    depth: "comprehensive",
    audit: "comprehensive",
    audience: "standard",
    channels: "comprehensive",
    editorial: "comprehensive",
    seo: "standard",
    governance: "standard",
    measurement: "comprehensive"
  },
  "scale": {
    depth: "foundation",
    audit: "basic",
    audience: "basic",
    channels: "standard",
    editorial: "comprehensive",
    seo: "basic",
    governance: "comprehensive",
    measurement: "standard"
  },
  "performance": {
    depth: "focused",
    audit: "comprehensive",
    audience: "standard",
    channels: "standard",
    editorial: "standard",
    seo: "comprehensive",
    governance: "basic",
    measurement: "comprehensive"
  },
  "launch": {
    depth: "focused",
    audit: "none",
    audience: "standard",
    channels: "focused",
    editorial: "standard",
    seo: "standard",
    governance: "basic",
    measurement: "standard"
  },
  "seo": {
    depth: "foundation",
    audit: "basic",
    audience: "standard",
    channels: "focused",
    editorial: "standard",
    seo: "comprehensive",
    governance: "basic",
    measurement: "comprehensive",
    addOns: ["keyword-research", "competitor-content"]
  },
  "thought-leadership": {
    depth: "foundation",
    audit: "basic",
    audience: "comprehensive",
    channels: "standard",
    editorial: "comprehensive",
    seo: "standard",
    governance: "basic",
    measurement: "standard",
    addOns: ["content-pillars"]
  },
  "sales": {
    depth: "foundation",
    audit: "basic",
    audience: "comprehensive",
    channels: "standard",
    editorial: "standard",
    seo: "basic",
    governance: "basic",
    measurement: "standard",
    addOns: ["journey-mapping", "content-pillars"]
  },
  "full": {
    depth: "comprehensive",
    audit: "comprehensive",
    audience: "comprehensive",
    channels: "comprehensive",
    editorial: "comprehensive",
    seo: "comprehensive",
    governance: "comprehensive",
    measurement: "comprehensive",
    addOns: ["keyword-research", "content-pillars", "journey-mapping"]
  },
  "other": {
    depth: "foundation",
    audit: "basic",
    audience: "standard",
    channels: "standard",
    editorial: "standard",
    seo: "basic",
    governance: "basic",
    measurement: "standard"
  }
}
```

---

## Step 2: Strategy Depth

*Question: "How comprehensive does your content strategy need to be?"*

**Default:** Foundation

| Option | Price | Tooltip |
|--------|-------|---------|
| Focused | $1,200 | **What it is:** Targeted strategy addressing one specific content area or channel. **Ideal if:** You have existing strategy but need focus on specific challenge. **Examples:** Blog strategy only, video content plan, social content strategy |
| Foundation | $2,500 | **What it is:** Essential strategic elements to guide content decisions. **Ideal if:** You need solid fundamentals without exhaustive documentation. **Examples:** Startups, small businesses, new initiatives |
| Comprehensive | $4,500 | **What it is:** Complete strategic framework covering all content dimensions. **Ideal if:** You need thorough strategy to guide significant content investment. **Examples:** Content-driven businesses, rebrands, scaling companies |
| Enterprise | $7,500+ | **What it is:** Extensive strategy with multiple stakeholder input, detailed documentation, and implementation roadmap. **Ideal if:** You're a larger organization with complex content needs. **Examples:** Enterprise, multi-brand, global content programs |

```javascript
const depthOptions = [
  { id: "focused", label: "Focused", price: 1200, oneTime: true },
  { id: "foundation", label: "Foundation", price: 2500, oneTime: true },
  { id: "comprehensive", label: "Comprehensive", price: 4500, oneTime: true },
  { id: "enterprise", label: "Enterprise", price: 7500, oneTime: true, startsAt: true }
]
```

---

## Step 3: Content Audit & Assessment

*Question: "Do you need existing content audited?"*

**Default:** Basic Audit

| Option | Price | Tooltip |
|--------|-------|---------|
| No Audit | $0 | **What it is:** Skip audit — starting fresh or already assessed. **Ideal if:** You're starting from scratch or have recent audit data. **Examples:** New brands, recent audits |
| Basic Audit | $600 | **What it is:** High-level review of existing content with key findings. **Ideal if:** You want quick assessment of what you have. **Examples:** Small content libraries, focused review |
| Standard Audit | $1,200 | **What it is:** Thorough content inventory with performance analysis and recommendations. **Ideal if:** You need to understand what's working and what isn't. **Examples:** Most businesses, content overhauls |
| Comprehensive Audit | $2,200 | **What it is:** Deep analysis including competitive review, gap analysis, and detailed action items. **Ideal if:** You need complete picture of content landscape. **Examples:** Large content libraries, major strategy shifts |
| Full Content Ecosystem Audit | $3,500+ | **What it is:** Extensive audit across all channels with benchmarking and prioritization framework. **Ideal if:** You have complex content across many channels. **Examples:** Enterprise, multi-channel brands |

```javascript
const auditOptions = [
  { id: "none", label: "No Audit", price: 0 },
  { id: "basic", label: "Basic Audit", price: 600, oneTime: true },
  { id: "standard", label: "Standard Audit", price: 1200, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Audit", price: 2200, oneTime: true },
  { id: "full", label: "Full Content Ecosystem Audit", price: 3500, oneTime: true, startsAt: true }
]
```

---

## Step 4: Audience & Persona Strategy

*Question: "What level of audience work do you need for content?"*

**Default:** Standard

| Option | Price | Tooltip |
|--------|-------|---------|
| Use Existing | $0 | **What it is:** Work with personas/audience data you already have. **Ideal if:** You have solid audience research already completed. **Examples:** Post-brand strategy, existing personas |
| Basic Audience Definition | $400 | **What it is:** Core audience segments defined for content purposes. **Ideal if:** You need basic clarity on who content is for. **Examples:** Simple businesses, clear audiences |
| Standard Persona Development | $900 | **What it is:** Content-focused personas with preferences, behaviors, and content needs. **Ideal if:** You need actionable audience insights for content. **Examples:** Most businesses |
| Comprehensive Persona System | $1,600 | **What it is:** Detailed personas with content journeys, preferences by stage, and topic mapping. **Ideal if:** You have multiple audiences with different content needs. **Examples:** B2B, complex products |
| Audience Research & Personas | $2,800+ | **What it is:** Primary research-backed personas with validation and content preference data. **Ideal if:** You need research-validated audience insights. **Examples:** Enterprise, data-driven companies |

```javascript
const audienceOptions = [
  { id: "existing", label: "Use Existing", price: 0 },
  { id: "basic", label: "Basic Audience Definition", price: 400, oneTime: true },
  { id: "standard", label: "Standard Persona Development", price: 900, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Persona System", price: 1600, oneTime: true },
  { id: "research", label: "Audience Research & Personas", price: 2800, oneTime: true, startsAt: true }
]
```

---

## Step 5: Channel Strategy

*Question: "How many channels does your content strategy need to cover?"*

**Default:** Standard (3–4 channels)

| Option | Price | Tooltip |
|--------|-------|---------|
| Focused (1–2 channels) | $500 | **What it is:** Strategy for one or two primary content channels. **Ideal if:** You're starting focused or launching specific channel. **Examples:** Blog + newsletter, social only, podcast launch |
| Standard (3–4 channels) | $1,000 | **What it is:** Strategy spanning core content channels with integration. **Ideal if:** You have typical multi-channel presence. **Examples:** Website, blog, social, email |
| Comprehensive (5–6 channels) | $1,800 | **What it is:** Full channel ecosystem with cross-channel strategy. **Ideal if:** You have extensive content touchpoints. **Examples:** Omnichannel brands, content-heavy businesses |
| Enterprise (7+ channels) | $2,800+ | **What it is:** Complete multi-channel architecture with prioritization and resource allocation. **Ideal if:** You manage complex channel ecosystem. **Examples:** Enterprise, media companies, large brands |

**Channel examples:** Website/Blog, Email/Newsletter, LinkedIn, Instagram, Twitter/X, Facebook, TikTok, YouTube, Podcast, Webinars, Events, PR/Media, Sales Content, Community

```javascript
const channelOptions = [
  { id: "focused", label: "Focused (1–2 channels)", price: 500, oneTime: true },
  { id: "standard", label: "Standard (3–4 channels)", price: 1000, oneTime: true },
  { id: "comprehensive", label: "Comprehensive (5–6 channels)", price: 1800, oneTime: true },
  { id: "enterprise", label: "Enterprise (7+ channels)", price: 2800, oneTime: true, startsAt: true }
]
```

---

## Step 6: Editorial Planning

*Question: "What level of editorial planning do you need?"*

**Default:** Standard

| Option | Price | Tooltip |
|--------|-------|---------|
| Basic Framework | $400 | **What it is:** Content themes, categories, and basic planning structure. **Ideal if:** You need foundational editorial direction. **Examples:** Getting started, simple content needs |
| Standard Planning | $800 | **What it is:** Editorial calendar framework, content themes, and topic clusters. **Ideal if:** You need structured approach to content planning. **Examples:** Most businesses, regular content |
| Comprehensive Planning | $1,400 | **What it is:** Full editorial system with calendar, workflows, and content templates. **Ideal if:** You need robust editorial infrastructure. **Examples:** Content teams, high-volume content |
| Full Editorial System | $2,400+ | **What it is:** Complete editorial operations including calendar, workflows, briefs, and team structure. **Ideal if:** You're building content operation from ground up. **Examples:** Media companies, content-first businesses |

**Included by tier:**

| Item | Basic | Standard | Comprehensive | Full |
|------|-------|----------|---------------|------|
| Content Themes/Pillars | ✓ | ✓ | ✓ | ✓ |
| Content Categories | ✓ | ✓ | ✓ | ✓ |
| Topic Framework | — | ✓ | ✓ | ✓ |
| Editorial Calendar Template | — | ✓ | ✓ | ✓ |
| Content Brief Templates | — | — | ✓ | ✓ |
| Workflow Documentation | — | — | ✓ | ✓ |
| Team Roles & Responsibilities | — | — | — | ✓ |
| Content Production SOPs | — | — | — | ✓ |
| Tool Recommendations | — | — | — | ✓ |

```javascript
const editorialOptions = [
  { id: "basic", label: "Basic Framework", price: 400, oneTime: true },
  { id: "standard", label: "Standard Planning", price: 800, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Planning", price: 1400, oneTime: true },
  { id: "full", label: "Full Editorial System", price: 2400, oneTime: true, startsAt: true }
]
```

---

## Step 7: SEO & Search Strategy

*Question: "What level of SEO strategy do you need?"*

**Default:** Basic

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No SEO focus for this strategy. **Ideal if:** Organic search isn't a priority channel. **Examples:** Sales content, internal content |
| Basic SEO Direction | $400 | **What it is:** High-level SEO guidance and best practices. **Ideal if:** You want SEO awareness without deep strategy. **Examples:** Supplementary SEO consideration |
| Standard SEO Strategy | $900 | **What it is:** Keyword themes, on-page guidance, and content optimization framework. **Ideal if:** SEO is important but not primary focus. **Examples:** Most businesses |
| Comprehensive SEO Strategy | $1,800 | **What it is:** Full SEO strategy with topic clusters, keyword mapping, and technical recommendations. **Ideal if:** Organic search is a key growth channel. **Examples:** SEO-driven businesses, content marketing |
| Full SEO Program | $3,200+ | **What it is:** Extensive SEO strategy with competitive analysis, content gap analysis, and ongoing recommendations. **Ideal if:** SEO is primary content driver. **Examples:** Publishers, e-commerce, SEO-first companies |

```javascript
const seoOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "basic", label: "Basic SEO Direction", price: 400, oneTime: true },
  { id: "standard", label: "Standard SEO Strategy", price: 900, oneTime: true },
  { id: "comprehensive", label: "Comprehensive SEO Strategy", price: 1800, oneTime: true },
  { id: "full", label: "Full SEO Program", price: 3200, oneTime: true, startsAt: true }
]
```

---

## Step 8: Content Governance

*Question: "What level of content governance do you need?"*

**Default:** Basic

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** No formal governance documentation. **Ideal if:** You're small team with informal processes. **Examples:** Solo creators, tiny teams |
| Basic Guidelines | $350 | **What it is:** Core content standards and style basics. **Ideal if:** You need minimum viable governance. **Examples:** Small teams, getting started |
| Standard Governance | $700 | **What it is:** Content standards, style guide, and approval workflows. **Ideal if:** You need clear rules for consistent content. **Examples:** Most businesses, growing teams |
| Comprehensive Governance | $1,200 | **What it is:** Full governance framework with brand voice, standards, and process documentation. **Ideal if:** You have multiple content creators needing alignment. **Examples:** Larger teams, agencies |
| Enterprise Governance | $2,000+ | **What it is:** Complete content governance system with multi-stakeholder workflows and compliance. **Ideal if:** You have complex approval needs or regulatory requirements. **Examples:** Enterprise, regulated industries |

**Included by tier:**

| Item | Basic | Standard | Comprehensive | Enterprise |
|------|-------|----------|---------------|------------|
| Core Style Guide | ✓ | ✓ | ✓ | ✓ |
| Content Standards | ✓ | ✓ | ✓ | ✓ |
| Approval Workflow | — | ✓ | ✓ | ✓ |
| Brand Voice Guidelines | — | ✓ | ✓ | ✓ |
| Channel-Specific Guidelines | — | — | ✓ | ✓ |
| Quality Checklists | — | — | ✓ | ✓ |
| Compliance Framework | — | — | — | ✓ |
| Multi-Team Coordination | — | — | — | ✓ |
| Governance Training | — | — | — | ✓ |

```javascript
const governanceOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "basic", label: "Basic Guidelines", price: 350, oneTime: true },
  { id: "standard", label: "Standard Governance", price: 700, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Governance", price: 1200, oneTime: true },
  { id: "enterprise", label: "Enterprise Governance", price: 2000, oneTime: true, startsAt: true }
]
```

---

## Step 9: Measurement & Analytics

*Question: "What level of content measurement framework do you need?"*

**Default:** Standard

| Option | Price | Tooltip |
|--------|-------|---------|
| Basic Metrics | $300 | **What it is:** Core KPIs and basic tracking recommendations. **Ideal if:** You need simple performance visibility. **Examples:** Getting started, simple needs |
| Standard Framework | $600 | **What it is:** Measurement framework with KPIs, dashboards, and reporting cadence. **Ideal if:** You want structured content performance tracking. **Examples:** Most businesses |
| Comprehensive Analytics | $1,100 | **What it is:** Full analytics strategy with attribution, benchmarks, and optimization framework. **Ideal if:** You need data-driven content optimization. **Examples:** Performance-focused, marketing teams |
| Full Analytics Program | $1,800+ | **What it is:** Complete measurement system with custom dashboards, reporting automation, and analysis process. **Ideal if:** Content performance is critical to business decisions. **Examples:** Enterprise, content-driven businesses |

**Included by tier:**

| Item | Basic | Standard | Comprehensive | Full |
|------|-------|----------|---------------|------|
| Core KPIs Defined | ✓ | ✓ | ✓ | ✓ |
| Tracking Recommendations | ✓ | ✓ | ✓ | ✓ |
| Dashboard Template | — | ✓ | ✓ | ✓ |
| Reporting Cadence | — | ✓ | ✓ | ✓ |
| Channel Benchmarks | — | — | ✓ | ✓ |
| Attribution Framework | — | — | ✓ | ✓ |
| Optimization Process | — | — | ✓ | ✓ |
| Custom Dashboard Setup | — | — | — | ✓ |
| Reporting Automation | — | — | — | ✓ |
| Analysis Playbook | — | — | — | ✓ |

```javascript
const measurementOptions = [
  { id: "basic", label: "Basic Metrics", price: 300, oneTime: true },
  { id: "standard", label: "Standard Framework", price: 600, oneTime: true },
  { id: "comprehensive", label: "Comprehensive Analytics", price: 1100, oneTime: true },
  { id: "full", label: "Full Analytics Program", price: 1800, oneTime: true, startsAt: true }
]
```

---

## Step 10: Add-on Services

*Question: "Select any additional services you need."*

Each add-on can be **selected/deselected**.

| Option | Price | Tooltip |
|--------|-------|---------|
| Keyword Research Package | $800 | **What it is:** Comprehensive keyword research with prioritized opportunities. **Ideal if:** You need data-driven topic selection for SEO. **Examples:** SEO content, blog strategy |
| Competitor Content Analysis | $700 | **What it is:** Deep analysis of competitor content strategies and gaps. **Ideal if:** You want to understand competitive content landscape. **Examples:** Differentiation, opportunity finding |
| Content Pillar Development | $600 | **What it is:** Define core content pillars and supporting topic clusters. **Ideal if:** You need clear thematic organization. **Examples:** Thought leadership, SEO, authority building |
| Content Journey Mapping | $900 | **What it is:** Map content to customer journey stages with gap analysis. **Ideal if:** You need content aligned to buyer journey. **Examples:** B2B, sales-driven, considered purchases |
| Content Calendar (3 months) | $500 | **What it is:** Detailed content calendar with specific topics and assignments. **Ideal if:** You want ready-to-execute content plan. **Examples:** Quick start, team alignment |
| Content Calendar (6 months) | $900 | **What it is:** Extended content calendar with seasonal planning. **Ideal if:** You want longer-term content roadmap. **Examples:** Planning ahead, resource allocation |
| Content Calendar (12 months) | $1,500 | **What it is:** Full year content calendar with themes and major initiatives. **Ideal if:** You want comprehensive annual planning. **Examples:** Enterprise, marketing planning |
| Content Brief Templates | $400 | **What it is:** Custom content brief templates for different content types. **Ideal if:** You want consistent content creation process. **Examples:** Teams, freelancer management |
| AI Content Guidelines | $450 | **What it is:** Guidelines for using AI in content creation responsibly. **Ideal if:** You want to incorporate AI into content workflow. **Examples:** Scaling content, efficiency |
| Content Repurposing Strategy | $500 | **What it is:** Framework for maximizing content value across formats and channels. **Ideal if:** You want more mileage from content investment. **Examples:** Efficiency, multi-channel |
| Internal Content Workshop | $800 | **What it is:** Half-day workshop to align team on content strategy. **Ideal if:** You need team buy-in and understanding. **Examples:** Launches, new strategies |
| Strategy Presentation | $400 | **What it is:** Executive presentation of content strategy for stakeholders. **Ideal if:** You need to present strategy to leadership. **Examples:** Approval, alignment |

```javascript
const addOnServices = [
  { id: "keyword-research", label: "Keyword Research Package", price: 800, oneTime: true },
  { id: "competitor-content", label: "Competitor Content Analysis", price: 700, oneTime: true },
  { id: "content-pillars", label: "Content Pillar Development", price: 600, oneTime: true },
  { id: "journey-mapping", label: "Content Journey Mapping", price: 900, oneTime: true },
  { id: "calendar-3mo", label: "Content Calendar (3 months)", price: 500, oneTime: true },
  { id: "calendar-6mo", label: "Content Calendar (6 months)", price: 900, oneTime: true },
  { id: "calendar-12mo", label: "Content Calendar (12 months)", price: 1500, oneTime: true },
  { id: "briefs", label: "Content Brief Templates", price: 400, oneTime: true },
  { id: "ai-guidelines", label: "AI Content Guidelines", price: 450, oneTime: true },
  { id: "repurposing", label: "Content Repurposing Strategy", price: 500, oneTime: true },
  { id: "workshop", label: "Internal Content Workshop", price: 800, oneTime: true },
  { id: "presentation", label: "Strategy Presentation", price: 400, oneTime: true }
]
```

---

## Step 11: Timeline

*Question: "When do you need this completed?"*

**Default:** Flexible (6–8 weeks)

| Option | Price Impact | Tooltip |
|--------|--------------|---------|
| Flexible (6–8 weeks) | +0% | **What it is:** Standard timeline allowing thorough research and development. **Ideal if:** You can plan ahead for best results. **Examples:** Most projects |
| Standard (4–6 weeks) | +10% | **What it is:** Slightly accelerated timeline with focused execution. **Ideal if:** You have a target date but some flexibility. **Examples:** Planned launches |
| Accelerated (2–4 weeks) | +25% | **What it is:** Fast-tracked delivery requiring prioritized scheduling. **Ideal if:** You have a firm deadline approaching. **Examples:** Urgent initiatives |
| Rush (Under 2 weeks) | +50% | **What it is:** Expedited delivery with dedicated resources. **Ideal if:** You have an immediate need. **Examples:** Crisis response, opportunities |

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
   - Groups items by category (Strategy Foundation, Planning & Operations, Add-ons)
   - Shows timeline premium if applicable
   - Editable — clicking any row returns to that step

2. **Price Calculation Display**
   ```
   YOUR CUSTOM CONTENT STRATEGY PLAN
   ────────────────────────────────────────

   STRATEGY FOUNDATION
   Strategy Depth              Foundation                  $2,500
   Content Audit               Standard Audit              $1,200
   Audience & Personas         Standard Development        $900
   Channel Strategy            Standard (3–4 channels)     $1,000
   SEO Strategy                Standard                    $900
   ────────────────────────────────────────
   Strategy Foundation Subtotal                            $6,500

   PLANNING & OPERATIONS
   Editorial Planning          Standard Planning           $800
   Content Governance          Standard Governance         $700
   Measurement Framework       Standard Framework          $600
   ────────────────────────────────────────
   Planning & Operations Subtotal                          $2,100

   ADD-ONS
   Content Pillar Development  —                           $600
   Content Calendar (3mo)      —                           $500
   Content Brief Templates     —                           $400
   ────────────────────────────────────────
   Add-ons Total                                           $1,500

   ────────────────────────────────────────
   Project Subtotal                                        $10,100
   Timeline                    Standard (+10%)             $1,010
   ────────────────────────────────────────
   TOTAL INVESTMENT                                        $11,110

   Timeline: 4–6 weeks

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
| Current content situation | Select | No |
| Primary content goals | Textarea | No |
| Project Notes | Textarea | No |

---

## Confirmation Screen

```
✓ Quote Request Submitted

Thanks, [Name]! We've received your custom content strategy plan.

What's next:
• We'll review your selections within 24–48 hours
• You'll receive a detailed proposal via email
• We'll schedule a discovery call to discuss your content goals

Your Reference: #CS-[timestamp]
```

---

## Data Models

### Builder State

```javascript
const builderState = {
  // Step 1
  contentGoal: "overhaul", // info only, no price
  
  // Step 2
  depth: {
    selected: "foundation",
    price: 2500,
    oneTime: true
  },
  
  // Step 3
  audit: {
    selected: "standard",
    price: 1200,
    oneTime: true
  },
  
  // Step 4
  audience: {
    selected: "standard",
    price: 900,
    oneTime: true
  },
  
  // Step 5
  channels: {
    selected: "standard",
    price: 1000,
    oneTime: true
  },
  
  // Step 6
  editorial: {
    selected: "standard",
    price: 800,
    oneTime: true
  },
  
  // Step 7
  seo: {
    selected: "standard",
    price: 900,
    oneTime: true
  },
  
  // Step 8
  governance: {
    selected: "standard",
    price: 700,
    oneTime: true
  },
  
  // Step 9
  measurement: {
    selected: "standard",
    price: 600,
    oneTime: true
  },
  
  // Step 10 - Add-ons
  addOns: [
    { id: "content-pillars", price: 600, oneTime: true },
    { id: "calendar-3mo", price: 500, oneTime: true },
    { id: "briefs", price: 400, oneTime: true }
  ],
  
  // Step 11
  timeline: {
    selected: "standard",
    multiplier: 1.10
  },
  
  // Calculated
  strategyFoundationSubtotal: 6500,
  planningOperationsSubtotal: 2100,
  addOnsTotal: 1500,
  projectSubtotal: 10100,
  timelinePremium: 1010,
  totalInvestment: 11110,
  hasCustomQuote: false,
  
  // Customer Info
  customer: {
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    currentSituation: "",
    contentGoals: "",
    notes: ""
  }
}
```

### Price Calculation Logic

```javascript
function calculateTotal(state) {
  let strategyFoundationSubtotal = 0;
  let planningOperationsSubtotal = 0;
  let addOnsTotal = 0;
  let hasCustomQuote = false;
  
  // Strategy Foundation
  if (state.depth.price === null) {
    hasCustomQuote = true;
  } else {
    strategyFoundationSubtotal += state.depth.price;
  }
  
  strategyFoundationSubtotal += state.audit.price || 0;
  strategyFoundationSubtotal += state.audience.price || 0;
  
  if (state.channels.price === null) {
    hasCustomQuote = true;
  } else {
    strategyFoundationSubtotal += state.channels.price;
  }
  
  if (state.seo.price === null) {
    hasCustomQuote = true;
  } else {
    strategyFoundationSubtotal += state.seo.price;
  }
  
  // Planning & Operations
  if (state.editorial.price === null) {
    hasCustomQuote = true;
  } else {
    planningOperationsSubtotal += state.editorial.price;
  }
  
  if (state.governance.price === null) {
    hasCustomQuote = true;
  } else {
    planningOperationsSubtotal += state.governance.price;
  }
  
  if (state.measurement.price === null) {
    hasCustomQuote = true;
  } else {
    planningOperationsSubtotal += state.measurement.price;
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
  const projectSubtotal = strategyFoundationSubtotal + planningOperationsSubtotal + addOnsTotal;
  
  // Timeline multiplier
  const multiplier = state.timeline.multiplier;
  const timelinePremium = projectSubtotal * (multiplier - 1);
  const totalInvestment = projectSubtotal * multiplier;
  
  return {
    strategyFoundationSubtotal: strategyFoundationSubtotal,
    planningOperationsSubtotal: planningOperationsSubtotal,
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

### Quick Reference - Strategy Foundation

| Category | Option | Price |
|----------|--------|-------|
| **Strategy Depth** | Focused | $1,200 |
| | Foundation | $2,500 |
| | Comprehensive | $4,500 |
| | Enterprise | $7,500+ |
| **Content Audit** | No Audit | $0 |
| | Basic Audit | $600 |
| | Standard Audit | $1,200 |
| | Comprehensive Audit | $2,200 |
| | Full Ecosystem Audit | $3,500+ |
| **Audience & Personas** | Use Existing | $0 |
| | Basic Definition | $400 |
| | Standard Development | $900 |
| | Comprehensive System | $1,600 |
| | Research & Personas | $2,800+ |
| **Channel Strategy** | Focused (1–2) | $500 |
| | Standard (3–4) | $1,000 |
| | Comprehensive (5–6) | $1,800 |
| | Enterprise (7+) | $2,800+ |
| **SEO Strategy** | Not Needed | $0 |
| | Basic Direction | $400 |
| | Standard Strategy | $900 |
| | Comprehensive Strategy | $1,800 |
| | Full SEO Program | $3,200+ |

### Quick Reference - Planning & Operations

| Category | Option | Price |
|----------|--------|-------|
| **Editorial Planning** | Basic Framework | $400 |
| | Standard Planning | $800 |
| | Comprehensive Planning | $1,400 |
| | Full Editorial System | $2,400+ |
| **Content Governance** | Not Needed | $0 |
| | Basic Guidelines | $350 |
| | Standard Governance | $700 |
| | Comprehensive Governance | $1,200 |
| | Enterprise Governance | $2,000+ |
| **Measurement** | Basic Metrics | $300 |
| | Standard Framework | $600 |
| | Comprehensive Analytics | $1,100 |
| | Full Analytics Program | $1,800+ |

### Quick Reference - Add-ons

| Service | Price |
|---------|-------|
| Keyword Research Package | $800 |
| Competitor Content Analysis | $700 |
| Content Pillar Development | $600 |
| Content Journey Mapping | $900 |
| Content Calendar (3 months) | $500 |
| Content Calendar (6 months) | $900 |
| Content Calendar (12 months) | $1,500 |
| Content Brief Templates | $400 |
| AI Content Guidelines | $450 |
| Content Repurposing Strategy | $500 |
| Internal Content Workshop | $800 |
| Strategy Presentation | $400 |

### Quick Reference - Timeline

| Timeline | Multiplier | Effect |
|----------|------------|--------|
| Flexible (6–8 weeks) | 1.0 | Base price |
| Standard (4–6 weeks) | 1.10 | +10% premium |
| Accelerated (2–4 weeks) | 1.25 | +25% premium |
| Rush (Under 2 weeks) | 1.50 | +50% premium |

---

## Price Examples

### Example 1: Focused Blog Strategy

| Selection | Option | Price |
|-----------|--------|-------|
| **Strategy Foundation** | | |
| Strategy Depth | Focused | $1,200 |
| Content Audit | No Audit | $0 |
| Audience & Personas | Use Existing | $0 |
| Channel Strategy | Focused (1–2) | $500 |
| SEO Strategy | Standard | $900 |
| **Subtotal** | | **$2,600** |
| | | |
| **Planning & Operations** | | |
| Editorial Planning | Standard | $800 |
| Content Governance | Basic | $350 |
| Measurement | Basic | $300 |
| **Subtotal** | | **$1,450** |
| | | |
| **Add-ons** | | |
| Content Calendar (3mo) | — | $500 |
| **Add-ons Total** | | **$500** |
| | | |
| **Project Subtotal** | | **$4,550** |
| Timeline | Flexible | +0% |
| **Total** | | **$4,550** |

---

### Example 2: Content Overhaul

| Selection | Option | Price |
|-----------|--------|-------|
| **Strategy Foundation** | | |
| Strategy Depth | Foundation | $2,500 |
| Content Audit | Standard Audit | $1,200 |
| Audience & Personas | Standard Development | $900 |
| Channel Strategy | Standard (3–4) | $1,000 |
| SEO Strategy | Standard | $900 |
| **Subtotal** | | **$6,500** |
| | | |
| **Planning & Operations** | | |
| Editorial Planning | Standard | $800 |
| Content Governance | Standard | $700 |
| Measurement | Standard | $600 |
| **Subtotal** | | **$2,100** |
| | | |
| **Add-ons** | | |
| Content Pillar Development | — | $600 |
| Content Calendar (3mo) | — | $500 |
| Content Brief Templates | — | $400 |
| **Add-ons Total** | | **$1,500** |
| | | |
| **Project Subtotal** | | **$10,100** |
| Timeline | Standard (+10%) | $1,010 |
| **Total** | | **$11,110** |

---

### Example 3: SEO-Focused Content Strategy

| Selection | Option | Price |
|-----------|--------|-------|
| **Strategy Foundation** | | |
| Strategy Depth | Foundation | $2,500 |
| Content Audit | Basic Audit | $600 |
| Audience & Personas | Standard Development | $900 |
| Channel Strategy | Focused (1–2) | $500 |
| SEO Strategy | Comprehensive | $1,800 |
| **Subtotal** | | **$6,300** |
| | | |
| **Planning & Operations** | | |
| Editorial Planning | Comprehensive | $1,400 |
| Content Governance | Standard | $700 |
| Measurement | Comprehensive | $1,100 |
| **Subtotal** | | **$3,200** |
| | | |
| **Add-ons** | | |
| Keyword Research Package | — | $800 |
| Competitor Content Analysis | — | $700 |
| Content Pillar Development | — | $600 |
| Content Calendar (6mo) | — | $900 |
| **Add-ons Total** | | **$3,000** |
| | | |
| **Project Subtotal** | | **$12,500** |
| Timeline | Flexible | +0% |
| **Total** | | **$12,500** |

---

### Example 4: Enterprise Content Strategy

| Selection | Option | Price |
|-----------|--------|-------|
| **Strategy Foundation** | | |
| Strategy Depth | Comprehensive | $4,500 |
| Content Audit | Comprehensive Audit | $2,200 |
| Audience & Personas | Comprehensive System | $1,600 |
| Channel Strategy | Comprehensive (5–6) | $1,800 |
| SEO Strategy | Comprehensive | $1,800 |
| **Subtotal** | | **$11,900** |
| | | |
| **Planning & Operations** | | |
| Editorial Planning | Comprehensive | $1,400 |
| Content Governance | Comprehensive | $1,200 |
| Measurement | Comprehensive | $1,100 |
| **Subtotal** | | **$3,700** |
| | | |
| **Add-ons** | | |
| Keyword Research Package | — | $800 |
| Competitor Content Analysis | — | $700 |
| Content Pillar Development | — | $600 |
| Content Journey Mapping | — | $900 |
| Content Calendar (12mo) | — | $1,500 |
| Content Brief Templates | — | $400 |
| AI Content Guidelines | — | $450 |
| Internal Content Workshop | — | $800 |
| Strategy Presentation | — | $400 |
| **Add-ons Total** | | **$6,550** |
| | | |
| **Project Subtotal** | | **$22,150** |
| Timeline | Standard (+10%) | $2,215 |
| **Total** | | **$24,365** |

---

## Integration Notes

- This custom builder lives alongside the standard tier selection (Essential/Pro/Enterprise)
- Customer can switch between "Choose a Package" and "Build Custom" views
- If custom total is close to a tier price, optionally suggest the tier as simpler option
- All data structures are API-ready for future backend integration
- Content goal recommendations should guide users toward appropriate selections
- Consider showing "Popular for [Goal]" badges on recommended options
- Timeline multipliers apply to the entire project total
- Content strategy is typically a one-time project with optional ongoing components
- Pairs well with Messaging & Copywriting for complete content program
- Content execution (actual content creation) is separate — this is strategy only
