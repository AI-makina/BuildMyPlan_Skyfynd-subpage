# Custom Website Builder - Feature Specification

## Overview

The Custom Website Builder is an interactive step-by-step configurator that allows customers to build their own website plan according to their specific needs. When a customer clicks "Custom" instead of selecting a pre-defined tier (Essential/Pro/Enterprise), they enter this guided builder flow.

---

## Core Mechanics

### Pricing Logic
- **Step 1 (Project Type):** Information only — NO price impact
- **Steps 2–7:** All pricing is calculated from these selections
- **Running total** displays and updates in real-time as user makes selections

### Recommendation Engine
- Based on Step 1 selection, relevant features are **pre-checked** as recommendations
- User can **uncheck** any recommendation
- User can **add** features not in the recommendation
- All selections remain fully editable throughout the flow

### Feature Options
- Each feature has **tiered options** (e.g., Basic, Standard, Advanced)
- Default tier is pre-selected but adjustable
- Clicking a feature expands its options for customization

### Tooltips (? Icon)
- Every selection has a **? icon** that opens an info tooltip
- **Step 1 tooltips:** What it is + Ideal if + Real brand examples
- **Feature tooltips:** Brief description of what's included

---

## Step 1: Project Type (Info Only)

*Question: "What best describes your project?"*

**Price Impact:** None — informational only, triggers recommendations

| Option | Tooltip Content |
|--------|-----------------|
| Portfolio / Personal Brand | **What it is:** A website showcasing your work, skills, or personal brand. **Ideal if:** You're a freelancer, artist, photographer, or professional building your online presence. **Examples:** Casey Neistat, Behance portfolios, personal coaching sites |
| Business / Corporate | **What it is:** A professional website representing your company and services. **Ideal if:** You want to establish credibility, attract clients, and showcase what your business offers. **Examples:** Deloitte, local law firms, marketing agencies |
| Landing Page | **What it is:** A single, focused page designed to drive one specific action. **Ideal if:** You're launching a product, running a campaign, or capturing leads. **Examples:** App launch pages, event signups, Mailchimp landing pages |
| Online Store / E-commerce | **What it is:** A website where customers can browse and buy products online. **Ideal if:** You want to sell physical or digital products directly to customers. **Examples:** Nike, Apple Store, Shopify stores |
| Web Application | **What it is:** An interactive platform where users log in and perform tasks. **Ideal if:** You're building a SaaS product, dashboard, tool, or member portal. **Examples:** Notion, Trello, Canva |
| Blog / Content Site | **What it is:** A content-focused website for articles, news, or resources. **Ideal if:** You want to publish regularly, build authority, or drive organic traffic. **Examples:** Medium, TechCrunch, company blogs |
| Other | **What it is:** Something unique that doesn't fit the above categories. **Ideal if:** You have a custom project in mind — we'll tailor recommendations. |

---

## Recommendation Presets (Based on Step 1)

When user selects a project type, these features are **pre-checked** (but editable):

```javascript
const recommendationPresets = {
  "portfolio": {
    siteSize: "2-5",
    designComplexity: "modern",
    cms: "none",
    features: ["contactForm", "imageGallery", "analytics"]
  },
  "business": {
    siteSize: "6-10",
    designComplexity: "modern",
    cms: "basic",
    features: ["contactForm", "blog", "seo", "analytics"]
  },
  "landing": {
    siteSize: "1",
    designComplexity: "modern",
    cms: "none",
    features: ["contactForm", "videoBackground", "animations", "analytics"]
  },
  "ecommerce": {
    siteSize: "6-10",
    designComplexity: "modern",
    cms: "advanced",
    features: ["ecommerce", "contactForm", "seo", "analytics"]
  },
  "webapp": {
    siteSize: "6-10",
    designComplexity: "premium",
    cms: "advanced",
    features: ["userAccounts", "apiIntegration", "analytics"]
  },
  "blog": {
    siteSize: "6-10",
    designComplexity: "clean",
    cms: "advanced",
    features: ["blog", "seo", "analytics"]
  },
  "other": {
    siteSize: "2-5",
    designComplexity: "modern",
    cms: "none",
    features: ["contactForm", "analytics"]
  }
}
```

---

## Step 2: Site Size

*Question: "How many pages do you need?"*

**Default:** 2–5 pages (or based on Step 1 recommendation)

| Option | Price | Tooltip |
|--------|-------|---------|
| 1 page (Landing) | $150 | A single, focused page. Great for campaigns, launches, or simple online presence. |
| 2–5 pages | $300 | Typical for small sites: Home, About, Services, Contact, etc. |
| 6–10 pages | $500 | Room for detailed services, team pages, case studies, blog, and more. |
| 11–20 pages | $800 | Comprehensive sites with multiple service lines, resources, and content sections. |
| 20+ pages | Custom quote | Large-scale sites requiring custom scoping and pricing. |

```javascript
const siteSizeOptions = [
  { id: "1", label: "1 page (Landing)", price: 150 },
  { id: "2-5", label: "2–5 pages", price: 300 },
  { id: "6-10", label: "6–10 pages", price: 500 },
  { id: "11-20", label: "11–20 pages", price: 800 },
  { id: "20+", label: "20+ pages", price: null, customQuote: true }
]
```

---

## Step 3: Design Complexity

*Question: "What level of design are you looking for?"*

**Default:** Modern & Polished (or based on Step 1 recommendation)

| Option | Price | Tooltip |
|--------|-------|---------|
| Clean & Simple | +$100 | Minimal, content-focused layouts with clean typography. Ideal if you want a straightforward, professional look without heavy visuals. |
| Modern & Polished | +$250 | Custom layouts, refined aesthetics, and thoughtful details. Ideal if you want to stand out with a polished, contemporary feel. |
| Premium & Immersive | +$450 | Bespoke design with scroll effects, animations, and rich visuals. Ideal if you want a high-end, memorable experience that wows visitors. |

```javascript
const designOptions = [
  { id: "clean", label: "Clean & Simple", price: 100 },
  { id: "modern", label: "Modern & Polished", price: 250 },
  { id: "premium", label: "Premium & Immersive", price: 450 }
]
```

---

## Step 4: Content Management (CMS)

*Question: "Do you need to update content yourself?"*

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| None (Static) | +$0 | We build it, you send us updates to implement. Ideal if content rarely changes or you prefer hands-off management. |
| Basic CMS | +$100 | Edit text, images, and blog posts yourself via a simple dashboard. Ideal if you want to make quick updates without developer help. |
| Advanced CMS | +$250 | Full control over collections, dynamic content, filtering, and structured data. Ideal if you have lots of content types that change frequently. |

```javascript
const cmsOptions = [
  { id: "none", label: "None (Static)", price: 0 },
  { id: "basic", label: "Basic CMS", price: 100 },
  { id: "advanced", label: "Advanced CMS", price: 250 }
]
```

---

## Step 5: Features & Functionality

*Question: "Select the features you need."*

Each feature can be **selected/deselected** and has **tiered options** for customization.

---

### Contact Form

**Default tier:** Basic

| Option | Price | Tooltip |
|--------|-------|---------|
| Basic | +$50 | Simple form with name, email, and message fields. Submissions sent to your inbox. |
| Multi-step / Lead Capture | +$100 | Guided form with multiple steps, conditional logic, and lead qualification fields. |

```javascript
const contactFormOptions = [
  { id: "basic", label: "Basic", price: 50, description: "Name, email, message → inbox" },
  { id: "multistep", label: "Multi-step / Lead Capture", price: 100, description: "Conditional logic, qualification" }
]
```

---

### Blog

**Default tier:** Standard

| Option | Price | Tooltip |
|--------|-------|---------|
| Standard | +$75 | Blog with categories, tags, and single author support. |
| Advanced | +$150 | Multi-author support, comments system, newsletter integration, related posts. |

```javascript
const blogOptions = [
  { id: "standard", label: "Standard", price: 75, description: "Categories, tags, single author" },
  { id: "advanced", label: "Advanced", price: 150, description: "Multi-author, comments, newsletter" }
]
```

---

### Image Gallery / Portfolio

**Default tier:** Standard

| Option | Price | Tooltip |
|--------|-------|---------|
| Standard | +$75 | Grid or masonry gallery layout with lightbox image viewing. |
| Advanced | +$150 | Filterable categories, hover effects, dedicated project detail pages. |

```javascript
const galleryOptions = [
  { id: "standard", label: "Standard", price: 75, description: "Grid/masonry, lightbox" },
  { id: "advanced", label: "Advanced", price: 150, description: "Filters, hover effects, detail pages" }
]
```

---

### Video Backgrounds

**Default tier:** Single Section

| Option | Price | Tooltip |
|--------|-------|---------|
| Single Section | +$50 | One hero or section with an autoplay video background. |
| Multiple Sections | +$100 | Video backgrounds in multiple sections throughout the site. |

```javascript
const videoBackgroundOptions = [
  { id: "single", label: "Single Section", price: 50, description: "One hero/section" },
  { id: "multiple", label: "Multiple Sections", price: 100, description: "Throughout site" }
]
```

---

### Animations / Motion Effects

**Default tier:** Basic

| Option | Price | Tooltip |
|--------|-------|---------|
| Basic | +$100 | Scroll reveal animations, hover effects, and smooth transitions. |
| Advanced | +$250 | Complex animation sequences, parallax effects, interactive motion, scroll-driven animations. |

```javascript
const animationOptions = [
  { id: "basic", label: "Basic", price: 100, description: "Scroll reveals, hover effects" },
  { id: "advanced", label: "Advanced", price: 250, description: "Parallax, sequences, scroll-driven" }
]
```

---

### E-commerce

**Default tier:** Standard

| Option | Price | Tooltip |
|--------|-------|---------|
| Starter | +$150 | Up to 10 products, basic shopping cart, single payment gateway. Good for testing or small catalogs. |
| Standard | +$300 | Up to 50 products, size/color variants, discount codes, shipping calculation. |
| Advanced | +$500+ | Unlimited products, advanced filtering, inventory management, multiple payment gateways, subscriptions. |

```javascript
const ecommerceOptions = [
  { id: "starter", label: "Starter", price: 150, description: "Up to 10 products, basic cart" },
  { id: "standard", label: "Standard", price: 300, description: "Up to 50 products, variants, discounts" },
  { id: "advanced", label: "Advanced", price: 500, description: "Unlimited, inventory, multi-gateway", startsAt: true }
]
```

---

### Booking / Scheduling

**Default tier:** Basic

| Option | Price | Tooltip |
|--------|-------|---------|
| Basic | +$100 | Single service calendar, simple booking form, email confirmations. |
| Advanced | +$250+ | Multi-service booking, staff calendars, payment integration, automated reminders. |

```javascript
const bookingOptions = [
  { id: "basic", label: "Basic", price: 100, description: "Single calendar, email confirmations" },
  { id: "advanced", label: "Advanced", price: 250, description: "Multi-service, staff, payments", startsAt: true }
]
```

---

### User Accounts / Login

**Default tier:** Basic

| Option | Price | Tooltip |
|--------|-------|---------|
| Basic | +$150 | Email and password signup/login with simple user profile. |
| Advanced | +$300+ | Social login options, user roles and permissions, member dashboards, gated content areas. |

```javascript
const userAccountOptions = [
  { id: "basic", label: "Basic", price: 150, description: "Email/password, simple profile" },
  { id: "advanced", label: "Advanced", price: 300, description: "Social login, roles, dashboards", startsAt: true }
]
```

---

### Search Functionality

**Default tier:** Basic

| Option | Price | Tooltip |
|--------|-------|---------|
| Basic | +$75 | Simple site-wide search with results page. |
| Advanced | +$150 | Filtered search, instant results, search suggestions, content indexing. |

```javascript
const searchOptions = [
  { id: "basic", label: "Basic", price: 75, description: "Site search, results page" },
  { id: "advanced", label: "Advanced", price: 150, description: "Filters, instant results, suggestions" }
]
```

---

### Multi-language Support

**Default tier:** 2 Languages

| Option | Price | Tooltip |
|--------|-------|---------|
| 2 Languages | +$150 | Full site available in two languages with a language switcher. |
| 3+ Languages | +$250+ | Three or more languages with regional content variations. |

```javascript
const multiLanguageOptions = [
  { id: "two", label: "2 Languages", price: 150, description: "Bilingual with switcher" },
  { id: "three-plus", label: "3+ Languages", price: 250, description: "Multiple languages, regional content", startsAt: true }
]
```

---

### API / Third-party Integrations

**Default tier:** 1 Integration

| Option | Price | Tooltip |
|--------|-------|---------|
| 1 Integration | +$100 | Connect one external service (CRM, Zapier, payment processor, etc.) |
| 2–3 Integrations | +$200 | Multiple service connections with data flow between them. |
| 4+ Integrations | +$350+ | Complex integration ecosystem with custom API work. |

```javascript
const apiIntegrationOptions = [
  { id: "one", label: "1 Integration", price: 100, description: "Single service connection" },
  { id: "two-three", label: "2–3 Integrations", price: 200, description: "Multiple connections" },
  { id: "four-plus", label: "4+ Integrations", price: 350, description: "Complex ecosystem", startsAt: true }
]
```

---

### Custom Interactive Tools

| Option | Price | Tooltip |
|--------|-------|---------|
| Custom | Quote required | Calculators, configurators, quizzes, or bespoke functionality. We'll scope it together based on your requirements. |

```javascript
const customToolOptions = [
  { id: "custom", label: "Custom Tool", price: null, customQuote: true, description: "Calculators, quizzes, configurators" }
]
```

---

## Step 6: Additional Services

*Question: "Do you need any additional services?"*

These are optional add-ons, not tied to recommendations.

| Service | Price | Tooltip |
|---------|-------|---------|
| SEO Optimization | +$100 | Meta tags, schema markup, XML sitemap, page speed optimization, keyword-friendly structure. |
| Copywriting / Content | +$150+ | Professional website copy — headlines, page content, calls-to-action. Price varies by page count. |
| Analytics & Tracking | +$50 | Google Analytics 4 setup, conversion tracking, event configuration. |
| Ongoing Maintenance | +$75/mo | Monthly updates, security monitoring, backups, and minor content edits. |
| Hosting Setup | +$50 | Configuration and deployment to your preferred hosting provider. |
| Domain / DNS Setup | +$25 | Domain connection, DNS configuration, and SSL certificate setup. |

```javascript
const additionalServices = [
  { id: "seo", label: "SEO Optimization", price: 100 },
  { id: "copywriting", label: "Copywriting / Content", price: 150, startsAt: true },
  { id: "analytics", label: "Analytics & Tracking", price: 50 },
  { id: "maintenance", label: "Ongoing Maintenance", price: 75, recurring: "monthly" },
  { id: "hosting", label: "Hosting Setup", price: 50 },
  { id: "domain", label: "Domain / DNS Setup", price: 25 }
]
```

---

## Step 7: Timeline

*Question: "When do you need this completed?"*

**Default:** Flexible

| Option | Price Impact | Tooltip |
|--------|--------------|---------|
| Flexible / No rush | +0% | We'll schedule based on current workload. Typically 4–8 weeks. |
| 4–6 weeks | +0% | Standard timeline for most projects. |
| 2–4 weeks | +15% | Expedited delivery. Your project gets priority scheduling. |
| ASAP (under 2 weeks) | +25% | Rush delivery. Subject to availability — contact us to confirm. |

```javascript
const timelineOptions = [
  { id: "flexible", label: "Flexible / No rush", multiplier: 1.0 },
  { id: "standard", label: "4–6 weeks", multiplier: 1.0 },
  { id: "expedited", label: "2–4 weeks", multiplier: 1.15 },
  { id: "rush", label: "ASAP (under 2 weeks)", multiplier: 1.25 }
]
```

---

## Summary Screen

After completing all steps, display a summary:

### UI Elements

1. **Selection Summary Table**
   - Lists each selection with chosen option and price
   - Editable — clicking any row returns to that step

2. **Price Calculation**
   ```
   Subtotal:        $X,XXX.XX
   Rush Fee (15%):  $XXX.XX    (if applicable)
   ─────────────────────────────
   Estimated Total: $X,XXX.XX
   ```

3. **Action Buttons**
   - [ Adjust Plan ] — Returns to builder flow
   - [ **Generate Quote** ] — Opens quote request form

4. **Disclaimer Text**
   *"This is an estimate based on your selections. Final pricing may vary based on project specifics. We'll confirm everything before starting."*

---

## Generate Quote Flow

### Quote Request Form Fields

| Field | Type | Required |
|-------|------|----------|
| Full Name | Text | Yes |
| Email | Email | Yes |
| Company / Brand | Text | No |
| Phone | Tel | No |
| Project Notes | Textarea | No |

### On Submit

1. Validate form fields
2. Compile data:
   - All selections from builder
   - Calculated prices
   - Customer info
3. Send quote request (mock for now, API-ready structure)
4. Show confirmation screen

### Confirmation Screen

```
✓ Quote Request Submitted

Thanks, [Name]! We've received your custom website plan.

What's next:
• We'll review your selections within 24–48 hours
• You'll receive a detailed proposal via email
• We'll schedule a call to discuss any questions

Your Reference: #QR-[timestamp]
```

---

## Data Models

### Builder State

```javascript
const builderState = {
  // Step 1
  projectType: "ecommerce", // info only, no price
  
  // Step 2
  siteSize: {
    selected: "6-10",
    price: 500
  },
  
  // Step 3
  designComplexity: {
    selected: "modern",
    price: 250
  },
  
  // Step 4
  cms: {
    selected: "advanced",
    price: 250
  },
  
  // Step 5 - Features (array of selected features with their options)
  features: [
    { id: "contactForm", option: "basic", price: 50 },
    { id: "ecommerce", option: "standard", price: 300 },
    { id: "seo", option: null, price: 100 }
  ],
  
  // Step 6 - Additional Services
  additionalServices: [
    { id: "analytics", price: 50 },
    { id: "maintenance", price: 75, recurring: "monthly" }
  ],
  
  // Step 7
  timeline: {
    selected: "expedited",
    multiplier: 1.15
  },
  
  // Calculated
  subtotal: 1500,
  rushFee: 225,
  total: 1725,
  hasCustomQuote: false, // true if any selection requires custom quote
  
  // Customer Info (filled at quote submission)
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
  
  // Site Size
  if (state.siteSize.price === null) {
    hasCustomQuote = true;
  } else {
    subtotal += state.siteSize.price;
  }
  
  // Design Complexity
  subtotal += state.designComplexity.price;
  
  // CMS
  subtotal += state.cms.price;
  
  // Features
  state.features.forEach(feature => {
    if (feature.price === null) {
      hasCustomQuote = true;
    } else {
      subtotal += feature.price;
    }
  });
  
  // Additional Services (one-time only, recurring shown separately)
  state.additionalServices.forEach(service => {
    if (!service.recurring) {
      subtotal += service.price;
    }
  });
  
  // Timeline multiplier
  const multiplier = state.timeline.multiplier;
  const rushFee = subtotal * (multiplier - 1);
  const total = subtotal * multiplier;
  
  return {
    subtotal: subtotal,
    rushFee: rushFee,
    total: total,
    hasCustomQuote: hasCustomQuote,
    monthlyRecurring: state.additionalServices
      .filter(s => s.recurring === "monthly")
      .reduce((sum, s) => sum + s.price, 0)
  };
}
```

---

## UI/UX Guidelines

### Progress Indicator
- Show steps as a horizontal progress bar or stepper
- Highlight current step
- Allow clicking previous steps to go back

### Tooltip Behavior
- **? icon** next to each option label
- Click/tap to open tooltip modal or popover
- Tooltip closes on outside click or X button

### Feature Selection UI
- Checkbox to enable/disable feature
- When enabled, show tier options as radio buttons or dropdown
- Grayed out options when feature is disabled

### Real-time Price Update
- Sticky footer or sidebar showing running total
- Animates when price changes
- Shows "Custom quote required" if any selection triggers it

### Mobile Considerations
- Single column layout
- Collapsible sections for features
- Bottom sheet for tooltips
- Sticky CTA button at bottom

---

## Price Summary Table

### Quick Reference - All Base Prices

| Category | Option | Price |
|----------|--------|-------|
| **Site Size** | 1 page | $150 |
| | 2–5 pages | $300 |
| | 6–10 pages | $500 |
| | 11–20 pages | $800 |
| | 20+ pages | Custom |
| **Design** | Clean & Simple | $100 |
| | Modern & Polished | $250 |
| | Premium & Immersive | $450 |
| **CMS** | None | $0 |
| | Basic | $100 |
| | Advanced | $250 |
| **Contact Form** | Basic | $50 |
| | Multi-step | $100 |
| **Blog** | Standard | $75 |
| | Advanced | $150 |
| **Gallery** | Standard | $75 |
| | Advanced | $150 |
| **Video BG** | Single | $50 |
| | Multiple | $100 |
| **Animations** | Basic | $100 |
| | Advanced | $250 |
| **E-commerce** | Starter | $150 |
| | Standard | $300 |
| | Advanced | $500+ |
| **Booking** | Basic | $100 |
| | Advanced | $250+ |
| **User Accounts** | Basic | $150 |
| | Advanced | $300+ |
| **Search** | Basic | $75 |
| | Advanced | $150 |
| **Multi-language** | 2 Languages | $150 |
| | 3+ Languages | $250+ |
| **API Integration** | 1 | $100 |
| | 2–3 | $200 |
| | 4+ | $350+ |
| **Custom Tools** | — | Custom |
| **SEO** | — | $100 |
| **Copywriting** | — | $150+ |
| **Analytics** | — | $50 |
| **Maintenance** | — | $75/mo |
| **Hosting Setup** | — | $50 |
| **Domain Setup** | — | $25 |
| **Timeline** | Flexible | +0% |
| | 4–6 weeks | +0% |
| | 2–4 weeks | +15% |
| | ASAP | +25% |

---

## Integration Notes

- This custom builder lives alongside the standard tier selection (Essential/Pro/Enterprise)
- Customer can switch between "Choose a Package" and "Build Custom" views
- If custom total is close to a tier price, optionally suggest the tier as simpler option
- All data structure is API-ready for future backend integration
