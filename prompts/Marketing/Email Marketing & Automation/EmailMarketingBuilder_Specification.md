# Email Marketing & Automation Custom Builder - Feature Specification

## Overview

The Email Marketing & Automation Custom Builder is an interactive step-by-step configurator that allows customers to build their own email marketing program according to their specific needs. When a customer clicks "Custom" instead of selecting a pre-defined tier (Essential/Pro/Enterprise), they enter this guided builder flow.

---

## Core Mechanics

### Pricing Logic
- **Step 1 (Email Marketing Goal):** Information only — NO price impact
- **Steps 2–10:** All pricing calculated from these selections
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

## Step 1: Email Marketing Goal (Info Only)

*Question: "What's your primary goal for email marketing?"*

**Price Impact:** None — informational only, triggers recommendations

| Option | Tooltip Content |
|--------|-----------------|
| Newsletter & Content | **What it is:** Regular email content to keep subscribers engaged and informed. **Ideal if:** You want to build relationships and stay top-of-mind with your audience. **Examples:** Weekly newsletters, blog digests, industry updates |
| Lead Nurturing | **What it is:** Automated sequences that guide prospects toward becoming customers. **Ideal if:** You have leads that need education and warming before they buy. **Examples:** Drip campaigns, welcome sequences, educational series |
| E-commerce & Sales | **What it is:** Emails designed to drive purchases, recover carts, and maximize customer value. **Ideal if:** You sell products online and want email to drive revenue. **Examples:** Abandoned cart, product recommendations, flash sales |
| Customer Retention | **What it is:** Emails focused on keeping existing customers engaged and reducing churn. **Ideal if:** You want to increase lifetime value and loyalty. **Examples:** Onboarding sequences, re-engagement campaigns, loyalty programs |
| Event & Webinar Promotion | **What it is:** Email campaigns to drive registrations and attendance for events. **Ideal if:** You host webinars, workshops, or live events. **Examples:** Invitation sequences, reminder emails, post-event follow-up |
| Product Launches | **What it is:** Strategic email campaigns to build anticipation and drive launch success. **Ideal if:** You're launching new products or services. **Examples:** Teaser campaigns, launch sequences, early access offers |
| Transactional & Operational | **What it is:** Automated emails triggered by user actions — receipts, confirmations, notifications. **Ideal if:** You need reliable, branded transactional emails. **Examples:** Order confirmations, shipping updates, password resets |
| Full-Service Email Program | **What it is:** Comprehensive email marketing covering all aspects of your email strategy. **Ideal if:** You want to hand off email marketing entirely to experts. **Examples:** Complete email programs, multi-sequence strategies |
| Other | **What it is:** Something unique or a combination of goals. **Ideal if:** Your needs don't fit standard categories — we'll tailor recommendations. |

```javascript
const emailGoalOptions = [
  { id: "newsletter", label: "Newsletter & Content" },
  { id: "lead-nurturing", label: "Lead Nurturing" },
  { id: "ecommerce", label: "E-commerce & Sales" },
  { id: "retention", label: "Customer Retention" },
  { id: "events", label: "Event & Webinar Promotion" },
  { id: "launches", label: "Product Launches" },
  { id: "transactional", label: "Transactional & Operational" },
  { id: "full-service", label: "Full-Service Email Program" },
  { id: "other", label: "Other" }
]
```

---

## Recommendation Presets (Based on Step 1)

When user selects an email marketing goal, these options are **pre-selected** (but editable):

```javascript
const recommendationPresets = {
  "newsletter": {
    volume: "light",
    design: "branded",
    automation: "basic",
    sequences: "1",
    list: "basic",
    copy: "standard",
    reporting: "monthly"
  },
  "lead-nurturing": {
    volume: "standard",
    design: "branded",
    automation: "standard",
    sequences: "2",
    list: "standard",
    copy: "standard",
    reporting: "biweekly"
  },
  "ecommerce": {
    volume: "active",
    design: "premium",
    automation: "advanced",
    sequences: "3-4",
    list: "advanced",
    copy: "premium",
    reporting: "weekly",
    addOns: ["testing-advanced", "platform-deliverability"]
  },
  "retention": {
    volume: "light",
    design: "branded",
    automation: "standard",
    sequences: "2",
    list: "standard",
    copy: "standard",
    reporting: "monthly"
  },
  "events": {
    volume: "standard",
    design: "branded",
    automation: "standard",
    sequences: "1",
    list: "standard",
    copy: "standard",
    reporting: "biweekly"
  },
  "launches": {
    volume: "active",
    design: "premium",
    automation: "standard",
    sequences: "1",
    list: "standard",
    copy: "premium",
    reporting: "weekly"
  },
  "transactional": {
    volume: "light",
    design: "branded",
    automation: "advanced",
    sequences: "2",
    list: "basic",
    copy: "client",
    reporting: "monthly",
    addOns: ["platform-managed"]
  },
  "full-service": {
    volume: "active",
    design: "premium",
    automation: "advanced",
    sequences: "5-6",
    list: "advanced",
    copy: "premium",
    reporting: "weekly",
    addOns: ["testing-advanced", "platform-deliverability"]
  },
  "other": {
    volume: "light",
    design: "basic",
    automation: "basic",
    sequences: "none",
    list: "basic",
    copy: "client",
    reporting: "monthly"
  }
}
```

---

## Step 2: Email Volume

*Question: "How many emails do you need to send per month?"*

**Default:** Standard (8 emails/mo)

**Note:** Volume refers to unique email campaigns. Automated sequences count separately.

| Option | Price | Tooltip |
|--------|-------|---------|
| Light (4 emails/mo) | $200/mo | **What it is:** 1 email per week — consistent presence without overwhelming subscribers. **Ideal if:** You want to maintain regular contact with minimal content needs. **Examples:** Monthly newsletters, weekly digest |
| Standard (8 emails/mo) | $350/mo | **What it is:** 2 emails per week — solid cadence for engagement and nurturing. **Ideal if:** You want active email marketing without daily sends. **Examples:** Newsletter + promotional mix |
| Active (12 emails/mo) | $500/mo | **What it is:** 3 emails per week — frequent touchpoints for engaged audiences. **Ideal if:** You have lots to share and an engaged list. **Examples:** E-commerce, content-heavy brands |
| Aggressive (16 emails/mo) | $650/mo | **What it is:** 4 emails per week — high-frequency for maximum engagement. **Ideal if:** You're in e-commerce or have time-sensitive offers. **Examples:** Daily deals, flash sales, news |
| High-Volume (20+ emails/mo) | $850/mo+ | **What it is:** 5+ emails per week — intensive email program. **Ideal if:** Email is a primary revenue channel. **Examples:** Large e-commerce, media companies |
| Custom Volume | Custom quote | **What it is:** Tailored volume based on your specific needs and seasonality. **Ideal if:** You have variable needs or seasonal spikes. |

```javascript
const volumeOptions = [
  { id: "light", label: "Light (4 emails/mo)", price: 200, recurring: "monthly", emailsPerMonth: 4 },
  { id: "standard", label: "Standard (8 emails/mo)", price: 350, recurring: "monthly", emailsPerMonth: 8 },
  { id: "active", label: "Active (12 emails/mo)", price: 500, recurring: "monthly", emailsPerMonth: 12 },
  { id: "aggressive", label: "Aggressive (16 emails/mo)", price: 650, recurring: "monthly", emailsPerMonth: 16 },
  { id: "high-volume", label: "High-Volume (20+ emails/mo)", price: 850, recurring: "monthly", startsAt: true, emailsPerMonth: 20 },
  { id: "custom", label: "Custom Volume", price: null, customQuote: true }
]
```

---

## Step 3: Email Design & Templates

*Question: "What level of email design do you need?"*

**Default:** Branded Templates

| Option | Price | Tooltip |
|--------|-------|---------|
| Text-Only / Minimal | $0/mo | **What it is:** Plain text or minimal HTML emails with basic formatting. **Ideal if:** You want personal, non-promotional feeling emails. **Examples:** Personal outreach, founder letters, B2B nurturing |
| Basic Templates | $100/mo | **What it is:** Clean, functional templates with your logo and brand colors. **Ideal if:** You need professional emails without custom design. **Examples:** Standard newsletters, updates |
| Branded Templates | $200/mo | **What it is:** Custom-designed templates matching your brand guidelines. **Ideal if:** You want polished, on-brand emails that impress. **Examples:** Most businesses, branded communications |
| Premium Templates | $350/mo | **What it is:** Multiple custom templates with advanced layouts, graphics, and interactivity. **Ideal if:** You need varied, high-impact email designs. **Examples:** E-commerce, product showcases, premium brands |
| Custom Design Per Email | $500/mo+ | **What it is:** Unique designs for each campaign — no repeated templates. **Ideal if:** Every email needs to be special and distinct. **Examples:** Luxury brands, agencies, creative companies |

```javascript
const designOptions = [
  { id: "text", label: "Text-Only / Minimal", price: 0, recurring: "monthly" },
  { id: "basic", label: "Basic Templates", price: 100, recurring: "monthly" },
  { id: "branded", label: "Branded Templates", price: 200, recurring: "monthly" },
  { id: "premium", label: "Premium Templates", price: 350, recurring: "monthly" },
  { id: "custom", label: "Custom Design Per Email", price: 500, recurring: "monthly", startsAt: true }
]
```

---

## Step 4: Automation & Sequences

*Question: "What level of email automation do you need?"*

**Default:** Standard Automation

| Option | Price | Tooltip |
|--------|-------|---------|
| No Automation | $0/mo | **What it is:** Manual sends only — no automated sequences. **Ideal if:** You only need one-off campaigns or broadcasts. **Examples:** Simple newsletters, announcements |
| Basic Automation | $150/mo | **What it is:** Simple automations — welcome emails, basic triggers. **Ideal if:** You want essential automations without complexity. **Examples:** Welcome sequence, thank you emails |
| Standard Automation | $300/mo | **What it is:** Multi-step sequences with branching logic and segmentation. **Ideal if:** You want nurture sequences and behavioral triggers. **Examples:** Lead nurturing, onboarding flows |
| Advanced Automation | $500/mo | **What it is:** Complex workflows with advanced triggers, scoring, and personalization. **Ideal if:** You need sophisticated, data-driven automation. **Examples:** E-commerce flows, multi-touch nurturing |
| Enterprise Automation | $750/mo+ | **What it is:** Full-scale automation architecture with integrations and optimization. **Ideal if:** Email automation is critical to your business. **Examples:** SaaS, large e-commerce, enterprise |

```javascript
const automationOptions = [
  { id: "none", label: "No Automation", price: 0, recurring: "monthly" },
  { id: "basic", label: "Basic Automation", price: 150, recurring: "monthly" },
  { id: "standard", label: "Standard Automation", price: 300, recurring: "monthly" },
  { id: "advanced", label: "Advanced Automation", price: 500, recurring: "monthly" },
  { id: "enterprise", label: "Enterprise Automation", price: 750, recurring: "monthly", startsAt: true }
]
```

---

## Step 5: Automation Sequences

*Question: "How many automated sequences do you need built or managed?"*

**Default:** Based on Step 1 recommendation

**Note:** Sequences include strategy, copywriting, setup, and testing.

| Option | Price | Tooltip |
|--------|-------|---------|
| None | $0 | **What it is:** No automated sequences needed. **Ideal if:** You only send manual campaigns. **Examples:** Simple newsletters |
| 1 Sequence | $250 (one-time) | **What it is:** One automated email sequence (3–7 emails). **Ideal if:** You need a single key flow like welcome or nurture. **Examples:** Welcome series, lead magnet follow-up |
| 2 Sequences | $450 (one-time) | **What it is:** Two automated sequences for different purposes. **Ideal if:** You need welcome + one other key sequence. **Examples:** Welcome + abandoned cart, welcome + onboarding |
| 3–4 Sequences | $750 (one-time) | **What it is:** Multiple sequences covering key customer touchpoints. **Ideal if:** You want comprehensive automation coverage. **Examples:** Welcome, nurture, cart, post-purchase |
| 5–6 Sequences | $1,100 (one-time) | **What it is:** Extended automation system with multiple flows. **Ideal if:** You need full lifecycle email coverage. **Examples:** Complete e-commerce flows, SaaS onboarding |
| Full Automation System (7+) | Custom quote | **What it is:** Complete email automation architecture. **Ideal if:** You need enterprise-level automation. **Examples:** Large e-commerce, complex B2B |

```javascript
const sequenceOptions = [
  { id: "none", label: "None", price: 0 },
  { id: "1", label: "1 Sequence", price: 250, oneTime: true },
  { id: "2", label: "2 Sequences", price: 450, oneTime: true },
  { id: "3-4", label: "3–4 Sequences", price: 750, oneTime: true },
  { id: "5-6", label: "5–6 Sequences", price: 1100, oneTime: true },
  { id: "7+", label: "Full Automation System (7+)", price: null, customQuote: true }
]
```

---

## Step 6: List Management & Segmentation

*Question: "What level of list management do you need?"*

**Default:** Standard Segmentation

| Option | Price | Tooltip |
|--------|-------|---------|
| Basic List Management | $75/mo | **What it is:** List hygiene, unsubscribe handling, and basic organization. **Ideal if:** You have a simple list and need basic maintenance. **Examples:** Single-list newsletters |
| Standard Segmentation | $150/mo | **What it is:** Segment creation, tagging strategy, and targeted sends. **Ideal if:** You want to send relevant content to different audience groups. **Examples:** Interest-based segments, customer vs. prospect |
| Advanced Segmentation | $275/mo | **What it is:** Behavioral segmentation, engagement scoring, and dynamic lists. **Ideal if:** You need sophisticated targeting based on actions and data. **Examples:** E-commerce RFM, engagement tiers |
| Full List Strategy | $400/mo | **What it is:** Complete list strategy, growth tactics, and optimization. **Ideal if:** List building and management is a priority. **Examples:** Growing brands, lead-focused businesses |

```javascript
const listOptions = [
  { id: "basic", label: "Basic List Management", price: 75, recurring: "monthly" },
  { id: "standard", label: "Standard Segmentation", price: 150, recurring: "monthly" },
  { id: "advanced", label: "Advanced Segmentation", price: 275, recurring: "monthly" },
  { id: "full", label: "Full List Strategy", price: 400, recurring: "monthly" }
]
```

---

## Step 7: Copywriting & Content

*Question: "Who writes the email content?"*

**Default:** Standard Copywriting

| Option | Price | Tooltip |
|--------|-------|---------|
| Client Provides Copy | $0/mo | **What it is:** You write all email content, we design and send. **Ideal if:** You have a writer or prefer to control messaging. **Examples:** In-house marketing teams |
| Copy Editing Only | $100/mo | **What it is:** We edit and optimize copy you provide. **Ideal if:** You write drafts but want professional polish. **Examples:** Founder-written content, rough drafts |
| Standard Copywriting | $250/mo | **What it is:** Professional email copywriting for all campaigns. **Ideal if:** You want expert-written emails that convert. **Examples:** Most businesses, quality-focused brands |
| Premium Copywriting | $400/mo | **What it is:** Senior copywriter with A/B testing and optimization. **Ideal if:** Copy quality is critical to your success. **Examples:** High-converting funnels, premium brands |
| Full Content Strategy | $600/mo+ | **What it is:** Content strategy, copywriting, and editorial calendar. **Ideal if:** You want a complete content approach to email. **Examples:** Content-driven brands, publishers |

```javascript
const copyOptions = [
  { id: "client", label: "Client Provides Copy", price: 0, recurring: "monthly" },
  { id: "editing", label: "Copy Editing Only", price: 100, recurring: "monthly" },
  { id: "standard", label: "Standard Copywriting", price: 250, recurring: "monthly" },
  { id: "premium", label: "Premium Copywriting", price: 400, recurring: "monthly" },
  { id: "full", label: "Full Content Strategy", price: 600, recurring: "monthly", startsAt: true }
]
```

---

## Step 8: Reporting & Analytics

*Question: "How do you want to track email performance?"*

**Default:** Monthly Report

| Option | Price | Tooltip |
|--------|-------|---------|
| Basic Metrics | $0/mo | **What it is:** Standard platform metrics — opens, clicks, unsubscribes. **Ideal if:** You just need basic performance visibility. **Examples:** Simple tracking needs |
| Monthly Report | $75/mo | **What it is:** Monthly performance summary with insights and recommendations. **Ideal if:** You want regular analysis without deep dives. **Examples:** Most small businesses |
| Bi-Weekly Reports | $125/mo | **What it is:** Reports every two weeks with trends and optimization suggestions. **Ideal if:** You want more frequent visibility and faster optimization. **Examples:** Active email programs |
| Weekly Reports + Call | $225/mo | **What it is:** Weekly reports plus a strategy call to discuss performance. **Ideal if:** You want close collaboration and rapid iteration. **Examples:** High-volume senders, launches |
| Full Analytics Suite | $350/mo | **What it is:** Advanced analytics, revenue attribution, and predictive insights. **Ideal if:** Email is a major revenue driver and you need deep data. **Examples:** E-commerce, data-driven companies |

```javascript
const reportingOptions = [
  { id: "basic", label: "Basic Metrics", price: 0, recurring: "monthly" },
  { id: "monthly", label: "Monthly Report", price: 75, recurring: "monthly" },
  { id: "biweekly", label: "Bi-Weekly Reports", price: 125, recurring: "monthly" },
  { id: "weekly", label: "Weekly Reports + Call", price: 225, recurring: "monthly" },
  { id: "full", label: "Full Analytics Suite", price: 350, recurring: "monthly" }
]
```

---

## Step 9: Add-on Services

*Question: "Select any additional services you need."*

Each add-on can be **selected/deselected**.

---

### A/B Testing

| Option | Price | Tooltip |
|--------|-------|---------|
| Not Included | $0/mo | **What it is:** No systematic A/B testing. **Ideal if:** You don't need optimization testing. |
| Basic Testing | $100/mo | **What it is:** Subject line and send time testing. **Ideal if:** You want simple optimizations. **Examples:** Subject line variants, timing tests |
| Advanced Testing | $200/mo | **What it is:** Comprehensive testing — subject, content, design, CTAs, segments. **Ideal if:** You want data-driven optimization. **Examples:** Full conversion optimization |

```javascript
const testingOptions = [
  { id: "none", label: "Not Included", price: 0, recurring: "monthly" },
  { id: "basic", label: "Basic Testing", price: 100, recurring: "monthly" },
  { id: "advanced", label: "Advanced Testing", price: 200, recurring: "monthly" }
]
```

---

### Platform Management

| Option | Price | Tooltip |
|--------|-------|---------|
| Client Manages Platform | $0/mo | **What it is:** You handle ESP administration, we just build campaigns. **Ideal if:** You have platform expertise in-house. **Examples:** In-house email teams |
| Platform Management | $100/mo | **What it is:** We manage your ESP — settings, deliverability, technical setup. **Ideal if:** You want us to handle the technical side. **Examples:** Mailchimp, Klaviyo, HubSpot management |
| Platform + Deliverability | $200/mo | **What it is:** Full platform management plus deliverability monitoring and optimization. **Ideal if:** Inbox placement is critical. **Examples:** High-volume senders, e-commerce |

```javascript
const platformOptions = [
  { id: "client", label: "Client Manages Platform", price: 0, recurring: "monthly" },
  { id: "managed", label: "Platform Management", price: 100, recurring: "monthly" },
  { id: "deliverability", label: "Platform + Deliverability", price: 200, recurring: "monthly" }
]
```

---

### Additional Services

| Option | Price | Tooltip |
|--------|-------|---------|
| ESP Migration | $500+ (one-time) | **What it is:** Move your email program from one platform to another. **Ideal if:** You're switching email platforms. **Examples:** Mailchimp to Klaviyo, HubSpot to ActiveCampaign |
| List Cleaning | $150 (one-time) | **What it is:** Remove invalid, bounced, and unengaged contacts. **Ideal if:** Your list has hygiene issues or hasn't been cleaned. **Examples:** Old lists, deliverability problems |
| Email Audit | $300 (one-time) | **What it is:** Comprehensive review of current email program with recommendations. **Ideal if:** You want expert analysis before committing. **Examples:** Starting point assessment |
| Template Development | $400+ (one-time) | **What it is:** Custom email template design and coding. **Ideal if:** You need new branded templates built. **Examples:** Rebrands, new programs |
| Popup/Form Design | $200 (one-time) | **What it is:** Design and setup of email capture forms and popups. **Ideal if:** You need to grow your list with on-site capture. **Examples:** Website popups, embedded forms |
| Landing Page (Email) | $400 (one-time) | **What it is:** Dedicated landing page for email campaigns. **Ideal if:** You need a conversion page for email traffic. **Examples:** Promo pages, signup pages |
| SMS Integration | $150/mo | **What it is:** Coordinate SMS with email campaigns for multi-channel messaging. **Ideal if:** You want to add SMS to your communication mix. **Examples:** E-commerce, time-sensitive offers |
| CRM Integration | $300 (one-time) | **What it is:** Connect your email platform to your CRM for data sync. **Ideal if:** You need email and sales data connected. **Examples:** Salesforce, HubSpot, Pipedrive |

```javascript
const additionalServices = [
  { id: "migration", label: "ESP Migration", price: 500, oneTime: true, startsAt: true },
  { id: "list-cleaning", label: "List Cleaning", price: 150, oneTime: true },
  { id: "audit", label: "Email Audit", price: 300, oneTime: true },
  { id: "template-dev", label: "Template Development", price: 400, oneTime: true, startsAt: true },
  { id: "popup", label: "Popup/Form Design", price: 200, oneTime: true },
  { id: "landing", label: "Landing Page (Email)", price: 400, oneTime: true },
  { id: "sms", label: "SMS Integration", price: 150, recurring: "monthly" },
  { id: "crm", label: "CRM Integration", price: 300, oneTime: true }
]
```

---

## Step 10: Contract Duration

*Question: "How long do you want to commit?"*

**Default:** 3 Months

| Option | Price Impact | Tooltip |
|--------|--------------|---------|
| Month-to-Month | +15% | **What it is:** No long-term commitment, cancel anytime. **Ideal if:** You want flexibility to adjust or pause. **Examples:** Testing, uncertain timelines |
| 3 Months | +0% | **What it is:** Quarterly commitment for meaningful results. **Ideal if:** You want time to see impact without long lock-in. **Examples:** Campaign periods, trial runs |
| 6 Months | -10% | **What it is:** Extended commitment with better rates. **Ideal if:** You're serious about email marketing and want savings. **Examples:** Sustained growth efforts |
| 12 Months | -20% | **What it is:** Annual partnership with maximum savings. **Ideal if:** Email is a core channel and you want the best pricing. **Examples:** Long-term programs |

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
   YOUR CUSTOM EMAIL MARKETING PLAN
   ────────────────────────────────────────

   MONTHLY COSTS
   Email Volume                Standard (8/mo)             $350/mo
   Design & Templates          Branded Templates           $200/mo
   Automation                  Standard Automation         $300/mo
   List Management             Standard Segmentation       $150/mo
   Copywriting                 Standard Copywriting        $250/mo
   Reporting                   Bi-Weekly Reports           $125/mo
   A/B Testing                 Basic Testing               $100/mo
   Platform Management         Managed                     $100/mo
   ────────────────────────────────────────
   Monthly Subtotal                                        $1,575/mo
   Duration Discount           6 Months (-10%)             -$157.50/mo
   ────────────────────────────────────────
   MONTHLY TOTAL                                           $1,417.50/mo


   ONE-TIME COSTS
   Sequences                   3–4 Sequences               $750
   Email Audit                 —                           $300
   Popup/Form Design           —                           $200
   ────────────────────────────────────────
   ONE-TIME TOTAL                                          $1,250


   COMMITMENT SUMMARY
   Duration                    6 Months
   Monthly Fee                 $1,417.50/mo
   Total Monthly Over Term     $8,505
   One-Time Setup              $1,250
   ────────────────────────────────────────
   TOTAL INVESTMENT            $9,755

   [ Adjust Plan ]                      [ Generate Quote ]
   ```

3. **Action Buttons**
   - [ Adjust Plan ] — Returns to builder flow
   - [ **Generate Quote** ] — Opens quote request form

4. **Disclaimer Text**
   *"This is an estimate based on your selections. Final pricing may vary based on project specifics. ESP platform costs are paid separately and not included in this quote."*

---

## Quote Request Form

| Field | Type | Required |
|-------|------|----------|
| Full Name | Text | Yes |
| Email | Email | Yes |
| Company / Brand | Text | No |
| Phone | Tel | No |
| Website URL | URL | No |
| Current ESP | Text | No |
| List Size | Number | No |
| Project Notes | Textarea | No |

---

## Confirmation Screen

```
✓ Quote Request Submitted

Thanks, [Name]! We've received your custom email marketing plan.

What's next:
• We'll review your selections within 24–48 hours
• You'll receive a detailed proposal via email
• We'll schedule a discovery call to discuss your goals and current setup

Your Reference: #EM-[timestamp]
```

---

## Data Models

### Builder State

```javascript
const builderState = {
  // Step 1
  emailGoal: "lead-nurturing", // info only, no price
  
  // Step 2
  volume: {
    selected: "standard",
    price: 350,
    recurring: "monthly",
    emailsPerMonth: 8
  },
  
  // Step 3
  design: {
    selected: "branded",
    price: 200,
    recurring: "monthly"
  },
  
  // Step 4
  automation: {
    selected: "standard",
    price: 300,
    recurring: "monthly"
  },
  
  // Step 5
  sequences: {
    selected: "3-4",
    price: 750,
    oneTime: true
  },
  
  // Step 6
  list: {
    selected: "standard",
    price: 150,
    recurring: "monthly"
  },
  
  // Step 7
  copy: {
    selected: "standard",
    price: 250,
    recurring: "monthly"
  },
  
  // Step 8
  reporting: {
    selected: "biweekly",
    price: 125,
    recurring: "monthly"
  },
  
  // Step 9 - Add-ons
  addOns: {
    testing: { selected: "basic", price: 100, recurring: "monthly" },
    platform: { selected: "managed", price: 100, recurring: "monthly" },
    additional: [
      { id: "audit", price: 300, oneTime: true },
      { id: "popup", price: 200, oneTime: true }
    ]
  },
  
  // Step 10
  duration: {
    selected: "6-months",
    multiplier: 0.90,
    months: 6
  },
  
  // Calculated
  monthlySubtotal: 1575,
  durationDiscount: 157.50,
  monthlyTotal: 1417.50,
  oneTimeTotal: 1250,
  totalMonthlyOverTerm: 8505,
  totalInvestment: 9755,
  hasCustomQuote: false,
  
  // Customer Info
  customer: {
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    currentESP: "",
    listSize: "",
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
  
  // Volume (monthly)
  if (state.volume.price === null) {
    hasCustomQuote = true;
  } else {
    monthlySubtotal += state.volume.price;
  }
  
  // Design (monthly)
  monthlySubtotal += state.design.price;
  
  // Automation (monthly)
  monthlySubtotal += state.automation.price;
  
  // Sequences (one-time)
  if (state.sequences.price === null) {
    hasCustomQuote = true;
  } else {
    oneTimeTotal += state.sequences.price;
  }
  
  // List (monthly)
  monthlySubtotal += state.list.price;
  
  // Copy (monthly)
  monthlySubtotal += state.copy.price;
  
  // Reporting (monthly)
  monthlySubtotal += state.reporting.price;
  
  // Testing (monthly)
  monthlySubtotal += state.addOns.testing.price;
  
  // Platform (monthly)
  monthlySubtotal += state.addOns.platform.price;
  
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
- Show emails per month alongside volume options

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
| **Volume** | Light (4/mo) | $200/mo |
| | Standard (8/mo) | $350/mo |
| | Active (12/mo) | $500/mo |
| | Aggressive (16/mo) | $650/mo |
| | High-Volume (20+/mo) | $850/mo+ |
| | Custom | Custom |
| **Design** | Text-Only / Minimal | $0/mo |
| | Basic Templates | $100/mo |
| | Branded Templates | $200/mo |
| | Premium Templates | $350/mo |
| | Custom Per Email | $500/mo+ |
| **Automation** | No Automation | $0/mo |
| | Basic | $150/mo |
| | Standard | $300/mo |
| | Advanced | $500/mo |
| | Enterprise | $750/mo+ |
| **List Management** | Basic | $75/mo |
| | Standard Segmentation | $150/mo |
| | Advanced Segmentation | $275/mo |
| | Full List Strategy | $400/mo |
| **Copywriting** | Client Provides | $0/mo |
| | Editing Only | $100/mo |
| | Standard | $250/mo |
| | Premium | $400/mo |
| | Full Content Strategy | $600/mo+ |
| **Reporting** | Basic Metrics | $0/mo |
| | Monthly Report | $75/mo |
| | Bi-Weekly Reports | $125/mo |
| | Weekly + Call | $225/mo |
| | Full Analytics Suite | $350/mo |
| **A/B Testing** | Not Included | $0/mo |
| | Basic Testing | $100/mo |
| | Advanced Testing | $200/mo |
| **Platform** | Client Manages | $0/mo |
| | Platform Management | $100/mo |
| | Platform + Deliverability | $200/mo |
| **Additional** | SMS Integration | $150/mo |

### Quick Reference - One-Time Costs

| Service | Price |
|---------|-------|
| 1 Sequence | $250 |
| 2 Sequences | $450 |
| 3–4 Sequences | $750 |
| 5–6 Sequences | $1,100 |
| Full System (7+) | Custom |
| ESP Migration | $500+ |
| List Cleaning | $150 |
| Email Audit | $300 |
| Template Development | $400+ |
| Popup/Form Design | $200 |
| Landing Page | $400 |
| CRM Integration | $300 |

### Quick Reference - Duration Discounts

| Duration | Multiplier | Effect |
|----------|------------|--------|
| Month-to-Month | 1.15 | +15% premium |
| 3 Months | 1.0 | Base price |
| 6 Months | 0.90 | -10% discount |
| 12 Months | 0.80 | -20% discount |

---

## Price Examples

### Example 1: Simple Newsletter

| Selection | Option | Price |
|-----------|--------|-------|
| **Monthly** | | |
| Volume | Light (4/mo) | $200/mo |
| Design | Basic Templates | $100/mo |
| Automation | Basic | $150/mo |
| List | Basic | $75/mo |
| Copy | Client Provides | $0/mo |
| Reporting | Monthly | $75/mo |
| **Monthly Subtotal** | | **$600/mo** |
| Duration | 3 Months | +0% |
| **Monthly Total** | | **$600/mo** |
| | | |
| **One-Time** | | |
| Sequences | 1 Sequence | $250 |
| **One-Time Total** | | **$250** |
| | | |
| **3-Month Total** | | **$2,050** |

---

### Example 2: Lead Nurturing Program

| Selection | Option | Price |
|-----------|--------|-------|
| **Monthly** | | |
| Volume | Standard (8/mo) | $350/mo |
| Design | Branded Templates | $200/mo |
| Automation | Standard | $300/mo |
| List | Standard Segmentation | $150/mo |
| Copy | Standard Copywriting | $250/mo |
| Reporting | Bi-Weekly | $125/mo |
| Testing | Basic | $100/mo |
| **Monthly Subtotal** | | **$1,475/mo** |
| Duration | 6 Months | -10% |
| **Monthly Total** | | **$1,327.50/mo** |
| | | |
| **One-Time** | | |
| Sequences | 2 Sequences | $450 |
| **One-Time Total** | | **$450** |
| | | |
| **6-Month Total** | | **$8,415** |

---

### Example 3: E-commerce Email Program

| Selection | Option | Price |
|-----------|--------|-------|
| **Monthly** | | |
| Volume | Active (12/mo) | $500/mo |
| Design | Premium Templates | $350/mo |
| Automation | Advanced | $500/mo |
| List | Advanced Segmentation | $275/mo |
| Copy | Premium Copywriting | $400/mo |
| Reporting | Weekly + Call | $225/mo |
| Testing | Advanced | $200/mo |
| Platform | Platform + Deliverability | $200/mo |
| SMS Integration | — | $150/mo |
| **Monthly Subtotal** | | **$2,800/mo** |
| Duration | 6 Months | -10% |
| **Monthly Total** | | **$2,520/mo** |
| | | |
| **One-Time** | | |
| Sequences | 5–6 Sequences | $1,100 |
| **One-Time Total** | | **$1,100** |
| | | |
| **6-Month Total** | | **$16,220** |

---

### Example 4: Enterprise Email Program

| Selection | Option | Price |
|-----------|--------|-------|
| **Monthly** | | |
| Volume | High-Volume (20+/mo) | $850/mo |
| Design | Custom Per Email | $500/mo |
| Automation | Enterprise | $750/mo |
| List | Full List Strategy | $400/mo |
| Copy | Full Content Strategy | $600/mo |
| Reporting | Full Analytics Suite | $350/mo |
| Testing | Advanced | $200/mo |
| Platform | Platform + Deliverability | $200/mo |
| SMS Integration | — | $150/mo |
| **Monthly Subtotal** | | **$4,000/mo** |
| Duration | 12 Months | -20% |
| **Monthly Total** | | **$3,200/mo** |
| | | |
| **One-Time** | | |
| Sequences | 5–6 Sequences | $1,100 |
| ESP Migration | — | $500 |
| Template Development | — | $400 |
| CRM Integration | — | $300 |
| **One-Time Total** | | **$2,300** |
| | | |
| **12-Month Total** | | **$40,700** |

---

## Integration Notes

- This custom builder lives alongside the standard tier selection (Essential/Pro/Enterprise)
- Customer can switch between "Choose a Package" and "Build Custom" views
- If custom total is close to a tier price, optionally suggest the tier as simpler option
- All data structures are API-ready for future backend integration
- Email goal recommendations should guide users toward appropriate selections
- Consider showing "Popular for [Goal]" badges on recommended options
- Duration discounts only apply to monthly recurring fees, not one-time costs
- ESP platform costs (Mailchimp, Klaviyo, etc.) are separate and not included in pricing
- Sequence costs are one-time for initial build; ongoing management included in automation tier
