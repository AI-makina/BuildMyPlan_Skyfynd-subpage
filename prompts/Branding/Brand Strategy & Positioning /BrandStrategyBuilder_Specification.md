# Brand Strategy & Positioning Custom Builder - Feature Specification

## Overview

The Brand Strategy & Positioning Custom Builder is an interactive step-by-step configurator that allows customers to build their own brand strategy engagement according to their specific needs. When a customer clicks "Custom" instead of selecting a pre-defined tier (Essential/Pro/Enterprise), they enter this guided builder flow.

---

## Core Mechanics

### Pricing Logic
- **Step 1 (Brand Strategy Goal):** Information only — NO price impact
- **Steps 2–11:** All pricing calculated from these selections
- **One-time project pricing:** Brand strategy is typically a one-time engagement
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

## Step 1: Brand Strategy Goal (Info Only)

*Question: "What's driving your need for brand strategy?"*

**Price Impact:** None — informational only, triggers recommendations

| Option | Tooltip Content |
|--------|-----------------|
| New Business / Startup | **What it is:** Building brand foundations from scratch for a new venture. **Ideal if:** You're launching a new business and need strategic clarity before visual identity. **Examples:** Startups, new product lines, spin-offs |
| Rebrand / Refresh | **What it is:** Redefining or evolving an existing brand's positioning and strategy. **Ideal if:** Your current brand no longer reflects who you are or where you're going. **Examples:** Pivots, mergers, modernization, repositioning |
| Market Expansion | **What it is:** Adapting brand strategy for new markets, audiences, or geographies. **Ideal if:** You're entering new territories or targeting new customer segments. **Examples:** International expansion, new verticals, demographic shifts |
| Competitive Differentiation | **What it is:** Sharpening your positioning to stand out in a crowded market. **Ideal if:** You're struggling to differentiate or losing ground to competitors. **Examples:** Commodity markets, crowded categories, price pressure |
| Merger / Acquisition | **What it is:** Integrating or harmonizing brands after M&A activity. **Ideal if:** You've acquired a company or merged and need brand clarity. **Examples:** Post-acquisition integration, brand architecture decisions |
| Product / Service Launch | **What it is:** Strategic positioning for a new product or service offering. **Ideal if:** You're launching something new that needs its own positioning. **Examples:** New product lines, service expansions, sub-brands |
| Investor / Funding Readiness | **What it is:** Clarifying brand story and positioning for fundraising. **Ideal if:** You're preparing to pitch investors and need a compelling narrative. **Examples:** Seed rounds, Series A, growth funding |
| Internal Alignment | **What it is:** Unifying team understanding of brand purpose, values, and direction. **Ideal if:** Your team lacks clarity on what the brand stands for. **Examples:** Growing teams, culture initiatives, leadership transitions |
| Full Brand Strategy | **What it is:** Comprehensive strategic foundation covering all aspects of brand. **Ideal if:** You need end-to-end strategic clarity before any creative work. **Examples:** Complete brand builds, strategic overhauls |
| Other | **What it is:** Something unique or a combination of needs. **Ideal if:** Your situation doesn't fit standard categories — we'll tailor recommendations. |

```javascript
const strategyGoalOptions = [
  { id: "new-business", label: "New Business / Startup" },
  { id: "rebrand", label: "Rebrand / Refresh" },
  { id: "expansion", label: "Market Expansion" },
  { id: "differentiation", label: "Competitive Differentiation" },
  { id: "merger", label: "Merger / Acquisition" },
  { id: "launch", label: "Product / Service Launch" },
  { id: "investor", label: "Investor / Funding Readiness" },
  { id: "alignment", label: "Internal Alignment" },
  { id: "full", label: "Full Brand Strategy" },
  { id: "other", label: "Other" }
]
```

---

## Recommendation Presets (Based on Step 1)

When user selects a brand strategy goal, these options are **pre-selected** (but editable):

```javascript
const recommendationPresets = {
  "new-business": {
    depth: "foundation",
    research: "standard",
    positioning: "full",
    messaging: "core",
    architecture: "none",
    purpose: "core",
    audience: "core",
    workshop: "half-day"
  },
  "rebrand": {
    depth: "comprehensive",
    research: "deep",
    positioning: "full",
    messaging: "full",
    architecture: "review",
    purpose: "core",
    audience: "core",
    workshop: "full-day",
    addOns: ["competitive", "story", "internal-launch"]
  },
  "expansion": {
    depth: "foundation",
    research: "deep",
    positioning: "full",
    messaging: "core",
    architecture: "review",
    purpose: "none",
    audience: "full",
    workshop: "half-day"
  },
  "differentiation": {
    depth: "comprehensive",
    research: "deep",
    positioning: "full",
    messaging: "full",
    architecture: "none",
    purpose: "none",
    audience: "core",
    workshop: "half-day",
    addOns: ["competitive"]
  },
  "merger": {
    depth: "comprehensive",
    research: "standard",
    positioning: "core",
    messaging: "core",
    architecture: "full",
    purpose: "core",
    audience: "overview",
    workshop: "full-day",
    addOns: ["internal-launch"]
  },
  "launch": {
    depth: "focused",
    research: "standard",
    positioning: "core",
    messaging: "core",
    architecture: "extension",
    purpose: "none",
    audience: "core",
    workshop: "kickoff"
  },
  "investor": {
    depth: "focused",
    research: "light",
    positioning: "core",
    messaging: "core",
    architecture: "none",
    purpose: "none",
    audience: "overview",
    workshop: "none",
    addOns: ["pitch", "presentation"]
  },
  "alignment": {
    depth: "foundation",
    research: "light",
    positioning: "core",
    messaging: "core",
    architecture: "none",
    purpose: "full",
    audience: "included",
    workshop: "full-day",
    addOns: ["internal-launch"]
  },
  "full": {
    depth: "comprehensive",
    research: "deep",
    positioning: "full",
    messaging: "full",
    architecture: "full",
    purpose: "full",
    audience: "full",
    workshop: "series",
    addOns: ["competitive", "story"]
  },
  "other": {
    depth: "foundation",
    research: "light",
    positioning: "core",
    messaging: "core",
    architecture: "none",
    purpose: "none",
    audience: "overview",
    workshop: "half-day"
  }
}
```

---

## Step 2: Strategy Depth

*Question: "How comprehensive does your brand strategy need to be?"*

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| Focused | $1,500 | **What it is:** Targeted strategy addressing one specific aspect of brand. **Ideal if:** You have existing strategy but need to solve a specific challenge. **Examples:** Positioning refresh, messaging update, single-market strategy |
| Foundation | $3,000 | **What it is:** Essential strategic elements to guide brand decisions. **Ideal if:** You need solid fundamentals without exhaustive documentation. **Examples:** Startups, small businesses, MVPs |
| Comprehensive | $5,500 | **What it is:** Complete strategic framework covering all brand dimensions. **Ideal if:** You need thorough strategy to guide significant investment. **Examples:** Rebrands, funded startups, established businesses |
| Enterprise | $9,000+ | **What it is:** Extensive strategy with multiple stakeholder input and detailed documentation. **Ideal if:** You're a larger organization with complex needs. **Examples:** Enterprise brands, multi-market strategies, M&A |

```javascript
const depthOptions = [
  { id: "focused", label: "Focused", price: 1500, oneTime: true },
  { id: "foundation", label: "Foundation", price: 3000, oneTime: true },
  { id: "comprehensive", label: "Comprehensive", price: 5500, oneTime: true },
  { id: "enterprise", label: "Enterprise", price: 9000, oneTime: true, startsAt: true }
]
```

---

## Step 3: Research & Discovery

*Question: "What level of research should inform your strategy?"*

**Default:** Standard Research

| Option | Price | Tooltip |
|--------|-------|---------|
| Light Discovery | $500 | **What it is:** Stakeholder interviews and basic competitive scan. **Ideal if:** You have good market knowledge and need validation. **Examples:** Founder-led businesses, clear market position |
| Standard Research | $1,200 | **What it is:** Stakeholder sessions, competitor analysis, and audience insights review. **Ideal if:** You need solid research foundation without primary research. **Examples:** Most strategy projects, B2B brands |
| Deep Research | $2,500 | **What it is:** Comprehensive research including customer interviews, surveys, and market analysis. **Ideal if:** You need data-driven insights to inform major decisions. **Examples:** Rebrands, competitive markets, investor-backed |
| Full Research Program | $4,500+ | **What it is:** Extensive primary and secondary research with detailed findings report. **Ideal if:** You need thorough evidence base for significant investment. **Examples:** Enterprise, regulated industries, major pivots |

```javascript
const researchOptions = [
  { id: "light", label: "Light Discovery", price: 500, oneTime: true },
  { id: "standard", label: "Standard Research", price: 1200, oneTime: true },
  { id: "deep", label: "Deep Research", price: 2500, oneTime: true },
  { id: "full", label: "Full Research Program", price: 4500, oneTime: true, startsAt: true }
]
```

---

## Step 4: Positioning & Differentiation

*Question: "What level of positioning work do you need?"*

**Default:** Full Positioning

| Option | Price | Tooltip |
|--------|-------|---------|
| Positioning Review | $400 | **What it is:** Assessment and refinement of existing positioning. **Ideal if:** You have positioning but need validation or minor adjustments. **Examples:** Positioning check, light refresh |
| Core Positioning | $1,000 | **What it is:** Clear positioning statement, value proposition, and key differentiators. **Ideal if:** You need essential positioning clarity. **Examples:** Startups, focused brands, single offerings |
| Full Positioning | $2,000 | **What it is:** Comprehensive positioning including competitive mapping, audience-specific angles, and proof points. **Ideal if:** You need thorough positioning to guide all communications. **Examples:** Competitive markets, rebrands, multi-audience |
| Strategic Positioning System | $3,500+ | **What it is:** Complete positioning architecture with market mapping, persona positioning, and strategic narrative. **Ideal if:** You operate in complex markets with multiple audiences. **Examples:** Enterprise, B2B, multi-product companies |

```javascript
const positioningOptions = [
  { id: "review", label: "Positioning Review", price: 400, oneTime: true },
  { id: "core", label: "Core Positioning", price: 1000, oneTime: true },
  { id: "full", label: "Full Positioning", price: 2000, oneTime: true },
  { id: "system", label: "Strategic Positioning System", price: 3500, oneTime: true, startsAt: true }
]
```

---

## Step 5: Brand Messaging Framework

*Question: "What messaging deliverables do you need?"*

**Default:** Core Messaging

| Option | Price | Tooltip |
|--------|-------|---------|
| No Messaging | $0 | **What it is:** Strategy only, no messaging framework. **Ideal if:** You have messaging handled or will develop it separately. **Examples:** Strategy-only engagements |
| Core Messaging | $800 | **What it is:** Tagline, elevator pitch, and key messages. **Ideal if:** You need essential messaging building blocks. **Examples:** Startups, focused communications |
| Full Messaging Framework | $1,800 | **What it is:** Complete messaging hierarchy including audience-specific messages, proof points, and tone guidance. **Ideal if:** You need comprehensive messaging to guide all content. **Examples:** Multi-channel brands, content-heavy companies |
| Messaging System | $3,000+ | **What it is:** Extensive messaging architecture with scenario-specific messaging, objection handling, and sales enablement. **Ideal if:** You have complex sales cycles or multiple stakeholder audiences. **Examples:** B2B enterprise, considered purchases |

```javascript
const messagingOptions = [
  { id: "none", label: "No Messaging", price: 0 },
  { id: "core", label: "Core Messaging", price: 800, oneTime: true },
  { id: "full", label: "Full Messaging Framework", price: 1800, oneTime: true },
  { id: "system", label: "Messaging System", price: 3000, oneTime: true, startsAt: true }
]
```

---

## Step 6: Brand Architecture

*Question: "Do you need brand architecture guidance?"*

**Default:** Not Needed

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** Single brand, no architecture needed. **Ideal if:** You have one brand with no sub-brands or product lines. **Examples:** Single-product companies, focused services |
| Architecture Review | $600 | **What it is:** Assessment of current brand structure with recommendations. **Ideal if:** You have multiple offerings and need clarity on structure. **Examples:** Growing companies, portfolio review |
| Extension Strategy | $1,200 | **What it is:** Guidelines for extending the brand to new products or services. **Ideal if:** You're launching new offerings under your existing brand. **Examples:** Product launches, service expansion |
| Full Architecture | $2,500 | **What it is:** Complete brand architecture strategy for multi-brand or complex portfolios. **Ideal if:** You manage multiple brands or complex product lines. **Examples:** Holding companies, acquired brands, sub-brands |
| Portfolio Strategy | $4,000+ | **What it is:** Comprehensive portfolio strategy including migration planning and naming conventions. **Ideal if:** You have complex brand portfolio requiring strategic organization. **Examples:** M&A integration, enterprise portfolios |

```javascript
const architectureOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "review", label: "Architecture Review", price: 600, oneTime: true },
  { id: "extension", label: "Extension Strategy", price: 1200, oneTime: true },
  { id: "full", label: "Full Architecture", price: 2500, oneTime: true },
  { id: "portfolio", label: "Portfolio Strategy", price: 4000, oneTime: true, startsAt: true }
]
```

---

## Step 7: Purpose, Vision & Values

*Question: "Do you need purpose, vision, and values development?"*

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Needed | $0 | **What it is:** You have existing purpose/vision/values or don't need them. **Ideal if:** This work has been done or isn't a priority. **Examples:** Established brands, positioning-focused projects |
| Values Refresh | $500 | **What it is:** Review and refinement of existing values. **Ideal if:** You have values but they need updating or clarification. **Examples:** Growing teams, culture evolution |
| Core Purpose & Values | $1,200 | **What it is:** Defined purpose, vision, mission, and core values. **Ideal if:** You need foundational elements to guide culture and decisions. **Examples:** Startups, new leadership, culture building |
| Full Purpose Platform | $2,200 | **What it is:** Comprehensive purpose framework with behaviors, principles, and activation guidance. **Ideal if:** Purpose is central to your brand and culture strategy. **Examples:** Purpose-driven brands, B-corps, culture-first companies |

```javascript
const purposeOptions = [
  { id: "none", label: "Not Needed", price: 0 },
  { id: "refresh", label: "Values Refresh", price: 500, oneTime: true },
  { id: "core", label: "Core Purpose & Values", price: 1200, oneTime: true },
  { id: "full", label: "Full Purpose Platform", price: 2200, oneTime: true }
]
```

---

## Step 8: Target Audience & Personas

*Question: "What level of audience work do you need?"*

**Default:** Core Personas

| Option | Price | Tooltip |
|--------|-------|---------|
| Included in Research | $0 | **What it is:** Audience insights covered within research phase. **Ideal if:** Your research tier includes sufficient audience work. **Examples:** Projects with Deep or Full Research |
| Audience Overview | $400 | **What it is:** High-level audience segments with key characteristics. **Ideal if:** You need basic audience clarity without detailed personas. **Examples:** B2C with clear segments, simple audiences |
| Core Personas (2–3) | $900 | **What it is:** Detailed personas for your primary audiences with needs, motivations, and behaviors. **Ideal if:** You need actionable personas to guide marketing and product. **Examples:** Most businesses, focused targeting |
| Full Persona System (4–6) | $1,800 | **What it is:** Comprehensive persona set covering all key audiences with journey touchpoints. **Ideal if:** You have multiple distinct audiences requiring detailed understanding. **Examples:** B2B with buying committees, diverse customer base |
| Audience Research & Personas | $3,000+ | **What it is:** Primary research-backed personas with validation and strategic recommendations. **Ideal if:** You need research-validated audience insights. **Examples:** Enterprise, data-driven organizations |

```javascript
const audienceOptions = [
  { id: "included", label: "Included in Research", price: 0 },
  { id: "overview", label: "Audience Overview", price: 400, oneTime: true },
  { id: "core", label: "Core Personas (2–3)", price: 900, oneTime: true },
  { id: "full", label: "Full Persona System (4–6)", price: 1800, oneTime: true },
  { id: "research", label: "Audience Research & Personas", price: 3000, oneTime: true, startsAt: true }
]
```

---

## Step 9: Workshops & Collaboration

*Question: "Do you want facilitated strategy workshops?"*

**Default:** Half-Day Workshop

| Option | Price | Tooltip |
|--------|-------|---------|
| No Workshops | $0 | **What it is:** Strategy developed through async collaboration and review. **Ideal if:** You prefer document-based collaboration or have limited availability. **Examples:** Remote teams, busy schedules |
| Kickoff Session (2 hrs) | $400 | **What it is:** Initial alignment session to gather input and set direction. **Ideal if:** You want collaborative input at the start. **Examples:** Small teams, clear direction |
| Half-Day Workshop | $900 | **What it is:** 4-hour facilitated session for discovery, alignment, or strategy development. **Ideal if:** You want meaningful collaboration without full-day commitment. **Examples:** Most projects, focused agendas |
| Full-Day Workshop | $1,600 | **What it is:** 8-hour intensive workshop covering multiple strategy areas. **Ideal if:** You want comprehensive, immersive collaboration. **Examples:** Leadership teams, major initiatives |
| Workshop Series (2–3) | $2,800 | **What it is:** Multiple workshops spread across the project for ongoing collaboration. **Ideal if:** You want iterative development with team input throughout. **Examples:** Complex projects, large stakeholder groups |
| Custom Workshop Program | Custom quote | **What it is:** Tailored workshop series based on your specific needs. **Ideal if:** You have unique collaboration requirements. **Examples:** Enterprise, multi-location teams |

```javascript
const workshopOptions = [
  { id: "none", label: "No Workshops", price: 0 },
  { id: "kickoff", label: "Kickoff Session (2 hrs)", price: 400, oneTime: true },
  { id: "half-day", label: "Half-Day Workshop", price: 900, oneTime: true },
  { id: "full-day", label: "Full-Day Workshop", price: 1600, oneTime: true },
  { id: "series", label: "Workshop Series (2–3)", price: 2800, oneTime: true },
  { id: "custom", label: "Custom Workshop Program", price: null, customQuote: true }
]
```

---

## Step 10: Add-on Services

*Question: "Select any additional services you need."*

Each add-on can be **selected/deselected**.

| Option | Price | Tooltip |
|--------|-------|---------|
| Competitive Audit | $800 | **What it is:** Detailed analysis of competitor positioning, messaging, and brand presence. **Ideal if:** You need to understand the competitive landscape in depth. **Examples:** Differentiation strategy, market entry |
| Brand Naming | $1,500+ | **What it is:** Strategic naming development with options and rationale. **Ideal if:** You need a new name or product names. **Examples:** New brands, product launches, rebrands |
| Tagline Development | $600 | **What it is:** Strategic tagline creation with options and testing. **Ideal if:** You need a memorable tagline or slogan. **Examples:** Campaign lines, brand taglines |
| Brand Story / Narrative | $1,000 | **What it is:** Compelling brand story crafted for key audiences. **Ideal if:** You need a narrative that connects emotionally. **Examples:** About pages, investor decks, culture docs |
| Pitch Deck Narrative | $1,200 | **What it is:** Strategic narrative and messaging for investor presentations. **Ideal if:** You're fundraising and need a compelling story. **Examples:** Seed, Series A, growth rounds |
| Employer Brand Strategy | $1,500 | **What it is:** EVP and employer positioning to attract talent. **Ideal if:** Recruiting is a priority and you need employer brand clarity. **Examples:** Hiring pushes, culture building |
| Internal Launch Kit | $800 | **What it is:** Materials and guidance for rolling out brand strategy internally. **Ideal if:** You need to align your team on the new strategy. **Examples:** Post-rebrand, growing teams |
| Brand Guidelines (Strategy Section) | $600 | **What it is:** Documented strategy section for brand guidelines. **Ideal if:** You want strategy integrated into a guidelines document. **Examples:** Handoff to creative teams |
| Stakeholder Presentation | $500 | **What it is:** Presentation deck summarizing strategy for leadership or board. **Ideal if:** You need to present strategy to stakeholders. **Examples:** Board presentations, leadership alignment |

```javascript
const addOnServices = [
  { id: "competitive", label: "Competitive Audit", price: 800, oneTime: true },
  { id: "naming", label: "Brand Naming", price: 1500, oneTime: true, startsAt: true },
  { id: "tagline", label: "Tagline Development", price: 600, oneTime: true },
  { id: "story", label: "Brand Story / Narrative", price: 1000, oneTime: true },
  { id: "pitch", label: "Pitch Deck Narrative", price: 1200, oneTime: true },
  { id: "employer", label: "Employer Brand Strategy", price: 1500, oneTime: true },
  { id: "internal-launch", label: "Internal Launch Kit", price: 800, oneTime: true },
  { id: "guidelines", label: "Brand Guidelines (Strategy Section)", price: 600, oneTime: true },
  { id: "presentation", label: "Stakeholder Presentation", price: 500, oneTime: true }
]
```

---

## Step 11: Timeline

*Question: "When do you need this completed?"*

**Default:** Flexible (8–12 weeks)

| Option | Price Impact | Tooltip |
|--------|--------------|---------|
| Flexible (8–12 weeks) | +0% | **What it is:** Standard timeline allowing thorough development and iteration. **Ideal if:** You can plan ahead and want best quality. **Examples:** Most projects |
| Standard (6–8 weeks) | +10% | **What it is:** Slightly accelerated timeline with focused sprints. **Ideal if:** You have a target date but some flexibility. **Examples:** Product launches, planned rebrands |
| Accelerated (4–6 weeks) | +25% | **What it is:** Fast-tracked delivery requiring prioritized scheduling. **Ideal if:** You have a firm deadline approaching. **Examples:** Funding rounds, market opportunities |
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
   - Lists all selected services with prices
   - Shows timeline premium if applicable
   - Editable — clicking any row returns to that step

2. **Price Calculation Display**
   ```
   YOUR CUSTOM BRAND STRATEGY PLAN
   ────────────────────────────────────────

   STRATEGY INVESTMENT
   Strategy Depth              Comprehensive               $5,500
   Research & Discovery        Deep Research               $2,500
   Positioning                 Full Positioning            $2,000
   Messaging Framework         Full Framework              $1,800
   Brand Architecture          Architecture Review         $600
   Purpose & Values            Core Purpose & Values       $1,200
   Audience & Personas         Core Personas (2–3)         $900
   Workshops                   Half-Day Workshop           $900
   ────────────────────────────────────────
   Subtotal                                                $15,400

   ADD-ONS
   Competitive Audit           —                           $800
   Brand Story / Narrative     —                           $1,000
   ────────────────────────────────────────
   Add-ons Total                                           $1,800

   ────────────────────────────────────────
   Project Subtotal                                        $17,200
   Timeline                    Accelerated (+25%)          $4,300
   ────────────────────────────────────────
   TOTAL INVESTMENT                                        $21,500

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
| Industry | Select | No |
| Company Size | Select | No |
| Project Notes | Textarea | No |

---

## Confirmation Screen

```
✓ Quote Request Submitted

Thanks, [Name]! We've received your custom brand strategy plan.

What's next:
• We'll review your selections within 24–48 hours
• You'll receive a detailed proposal via email
• We'll schedule a discovery call to discuss your brand and goals

Your Reference: #BS-[timestamp]
```

---

## Data Models

### Builder State

```javascript
const builderState = {
  // Step 1
  strategyGoal: "rebrand", // info only, no price
  
  // Step 2
  depth: {
    selected: "comprehensive",
    price: 5500,
    oneTime: true
  },
  
  // Step 3
  research: {
    selected: "deep",
    price: 2500,
    oneTime: true
  },
  
  // Step 4
  positioning: {
    selected: "full",
    price: 2000,
    oneTime: true
  },
  
  // Step 5
  messaging: {
    selected: "full",
    price: 1800,
    oneTime: true
  },
  
  // Step 6
  architecture: {
    selected: "review",
    price: 600,
    oneTime: true
  },
  
  // Step 7
  purpose: {
    selected: "core",
    price: 1200,
    oneTime: true
  },
  
  // Step 8
  audience: {
    selected: "core",
    price: 900,
    oneTime: true
  },
  
  // Step 9
  workshop: {
    selected: "half-day",
    price: 900,
    oneTime: true
  },
  
  // Step 10 - Add-ons
  addOns: [
    { id: "competitive", price: 800, oneTime: true },
    { id: "story", price: 1000, oneTime: true }
  ],
  
  // Step 11
  timeline: {
    selected: "accelerated",
    multiplier: 1.25
  },
  
  // Calculated
  strategySubtotal: 15400,
  addOnsTotal: 1800,
  projectSubtotal: 17200,
  timelinePremium: 4300,
  totalInvestment: 21500,
  hasCustomQuote: false,
  
  // Customer Info
  customer: {
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    industry: "",
    companySize: "",
    notes: ""
  }
}
```

### Price Calculation Logic

```javascript
function calculateTotal(state) {
  let strategySubtotal = 0;
  let addOnsTotal = 0;
  let hasCustomQuote = false;
  
  // Depth
  if (state.depth.price === null) {
    hasCustomQuote = true;
  } else {
    strategySubtotal += state.depth.price;
  }
  
  // Research
  if (state.research.price === null) {
    hasCustomQuote = true;
  } else {
    strategySubtotal += state.research.price;
  }
  
  // Positioning
  if (state.positioning.price === null) {
    hasCustomQuote = true;
  } else {
    strategySubtotal += state.positioning.price;
  }
  
  // Messaging
  strategySubtotal += state.messaging.price;
  
  // Architecture
  strategySubtotal += state.architecture.price;
  
  // Purpose
  strategySubtotal += state.purpose.price;
  
  // Audience
  if (state.audience.price === null) {
    hasCustomQuote = true;
  } else {
    strategySubtotal += state.audience.price;
  }
  
  // Workshop
  if (state.workshop.price === null) {
    hasCustomQuote = true;
  } else {
    strategySubtotal += state.workshop.price;
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
  const projectSubtotal = strategySubtotal + addOnsTotal;
  
  // Timeline multiplier
  const multiplier = state.timeline.multiplier;
  const timelinePremium = projectSubtotal * (multiplier - 1);
  const totalInvestment = projectSubtotal * multiplier;
  
  return {
    strategySubtotal: strategySubtotal,
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

### Quick Reference - Core Strategy

| Category | Option | Price |
|----------|--------|-------|
| **Depth** | Focused | $1,500 |
| | Foundation | $3,000 |
| | Comprehensive | $5,500 |
| | Enterprise | $9,000+ |
| **Research** | Light Discovery | $500 |
| | Standard Research | $1,200 |
| | Deep Research | $2,500 |
| | Full Research Program | $4,500+ |
| **Positioning** | Positioning Review | $400 |
| | Core Positioning | $1,000 |
| | Full Positioning | $2,000 |
| | Strategic Positioning System | $3,500+ |
| **Messaging** | No Messaging | $0 |
| | Core Messaging | $800 |
| | Full Messaging Framework | $1,800 |
| | Messaging System | $3,000+ |
| **Architecture** | Not Needed | $0 |
| | Architecture Review | $600 |
| | Extension Strategy | $1,200 |
| | Full Architecture | $2,500 |
| | Portfolio Strategy | $4,000+ |
| **Purpose & Values** | Not Needed | $0 |
| | Values Refresh | $500 |
| | Core Purpose & Values | $1,200 |
| | Full Purpose Platform | $2,200 |
| **Audience** | Included in Research | $0 |
| | Audience Overview | $400 |
| | Core Personas (2–3) | $900 |
| | Full Persona System (4–6) | $1,800 |
| | Audience Research & Personas | $3,000+ |
| **Workshops** | No Workshops | $0 |
| | Kickoff Session (2 hrs) | $400 |
| | Half-Day Workshop | $900 |
| | Full-Day Workshop | $1,600 |
| | Workshop Series (2–3) | $2,800 |
| | Custom Program | Custom |

### Quick Reference - Add-ons

| Service | Price |
|---------|-------|
| Competitive Audit | $800 |
| Brand Naming | $1,500+ |
| Tagline Development | $600 |
| Brand Story / Narrative | $1,000 |
| Pitch Deck Narrative | $1,200 |
| Employer Brand Strategy | $1,500 |
| Internal Launch Kit | $800 |
| Brand Guidelines (Strategy) | $600 |
| Stakeholder Presentation | $500 |

### Quick Reference - Timeline

| Timeline | Multiplier | Effect |
|----------|------------|--------|
| Flexible (8–12 weeks) | 1.0 | Base price |
| Standard (6–8 weeks) | 1.10 | +10% premium |
| Accelerated (4–6 weeks) | 1.25 | +25% premium |
| Rush (Under 4 weeks) | 1.50 | +50% premium |

---

## Price Examples

### Example 1: Startup Foundation

| Selection | Option | Price |
|-----------|--------|-------|
| Depth | Foundation | $3,000 |
| Research | Light Discovery | $500 |
| Positioning | Core Positioning | $1,000 |
| Messaging | Core Messaging | $800 |
| Architecture | Not Needed | $0 |
| Purpose | Not Needed | $0 |
| Audience | Included in Research | $0 |
| Workshop | Kickoff Session | $400 |
| **Subtotal** | | **$5,700** |
| Timeline | Flexible | +0% |
| **Total** | | **$5,700** |

---

### Example 2: Rebrand Strategy

| Selection | Option | Price |
|-----------|--------|-------|
| Depth | Comprehensive | $5,500 |
| Research | Deep Research | $2,500 |
| Positioning | Full Positioning | $2,000 |
| Messaging | Full Framework | $1,800 |
| Architecture | Architecture Review | $600 |
| Purpose | Core Purpose & Values | $1,200 |
| Audience | Core Personas | $900 |
| Workshop | Full-Day Workshop | $1,600 |
| **Strategy Subtotal** | | **$16,100** |
| | | |
| **Add-ons** | | |
| Competitive Audit | — | $800 |
| Brand Story | — | $1,000 |
| Internal Launch Kit | — | $800 |
| **Add-ons Subtotal** | | **$2,600** |
| | | |
| **Project Subtotal** | | **$18,700** |
| Timeline | Standard (+10%) | $1,870 |
| **Total** | | **$20,570** |

---

### Example 3: Investor-Ready Strategy

| Selection | Option | Price |
|-----------|--------|-------|
| Depth | Focused | $1,500 |
| Research | Light Discovery | $500 |
| Positioning | Core Positioning | $1,000 |
| Messaging | Core Messaging | $800 |
| Architecture | Not Needed | $0 |
| Purpose | Not Needed | $0 |
| Audience | Audience Overview | $400 |
| Workshop | No Workshops | $0 |
| **Strategy Subtotal** | | **$4,200** |
| | | |
| **Add-ons** | | |
| Pitch Deck Narrative | — | $1,200 |
| Stakeholder Presentation | — | $500 |
| **Add-ons Subtotal** | | **$1,700** |
| | | |
| **Project Subtotal** | | **$5,900** |
| Timeline | Accelerated (+25%) | $1,475 |
| **Total** | | **$7,375** |

---

### Example 4: Enterprise Full Strategy

| Selection | Option | Price |
|-----------|--------|-------|
| Depth | Enterprise | $9,000 |
| Research | Full Research Program | $4,500 |
| Positioning | Strategic Positioning System | $3,500 |
| Messaging | Messaging System | $3,000 |
| Architecture | Full Architecture | $2,500 |
| Purpose | Full Purpose Platform | $2,200 |
| Audience | Full Persona System | $1,800 |
| Workshop | Workshop Series | $2,800 |
| **Strategy Subtotal** | | **$29,300** |
| | | |
| **Add-ons** | | |
| Competitive Audit | — | $800 |
| Brand Naming | — | $1,500 |
| Brand Story | — | $1,000 |
| Employer Brand Strategy | — | $1,500 |
| Internal Launch Kit | — | $800 |
| Guidelines Section | — | $600 |
| Stakeholder Presentation | — | $500 |
| **Add-ons Subtotal** | | **$6,700** |
| | | |
| **Project Subtotal** | | **$36,000** |
| Timeline | Standard (+10%) | $3,600 |
| **Total** | | **$39,600** |

---

## Integration Notes

- This custom builder lives alongside the standard tier selection (Essential/Pro/Enterprise)
- Customer can switch between "Choose a Package" and "Build Custom" views
- If custom total is close to a tier price, optionally suggest the tier as simpler option
- All data structures are API-ready for future backend integration
- Strategy goal recommendations should guide users toward appropriate selections
- Consider showing "Popular for [Goal]" badges on recommended options
- Timeline multipliers apply to the entire project total
- Brand strategy is typically a one-time project, not recurring
- This builder focuses on strategy only — Visual Identity is a separate builder
