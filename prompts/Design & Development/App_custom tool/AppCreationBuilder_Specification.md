# App Creation Custom Builder - Feature Specification

## Overview

The App Creation Custom Builder is an interactive step-by-step configurator that allows customers to build their own app development plan according to their specific needs. When a customer clicks "Custom" instead of selecting a pre-defined tier (Essential/Pro/Enterprise), they enter this guided builder flow.

---

## Core Mechanics

### Pricing Logic
- **Step 1 (App Type):** Information only — NO price impact
- **Steps 2–10:** All pricing calculated from these selections
- **AI Features:** Setup fee (one-time) + Monthly usage fee
- **Running total** displays and updates in real-time

### Recommendation Engine
- Based on Step 1 selection, relevant options are **pre-selected** as recommendations
- User can **change** any recommendation
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

## Step 1: App Type (Info Only)

*Question: "What kind of app do you need?"*

**Price Impact:** None — informational only, triggers recommendations

| Option | Tooltip Content |
|--------|-----------------|
| Mobile App | **What it is:** A native or cross-platform app for iOS and/or Android devices. **Ideal if:** You want users to download from the App Store or Google Play. **Examples:** Instagram, Uber, Duolingo |
| Web App | **What it is:** An application that runs in a browser, no download required. **Ideal if:** You want easy access across all devices without app store approval. **Examples:** Notion, Figma, Google Docs |
| Desktop App | **What it is:** Software installed on Mac or Windows computers. **Ideal if:** You need offline functionality or system-level access. **Examples:** Slack, VS Code, Spotify |
| Cross-platform (Mobile + Web) | **What it is:** One codebase that works on mobile devices and browsers. **Ideal if:** You want maximum reach with a single development effort. **Examples:** Discord, Airbnb |
| Full Ecosystem (Mobile + Web + Desktop) | **What it is:** A complete suite across all platforms with synced experience. **Ideal if:** You're building a product that users access anywhere. **Examples:** Notion, Spotify, Microsoft Teams |
| Other | **What it is:** Something unique or hybrid. **Ideal if:** Your project doesn't fit standard categories — we'll tailor recommendations. |

```javascript
const appTypeOptions = [
  { id: "mobile", label: "Mobile App" },
  { id: "web", label: "Web App" },
  { id: "desktop", label: "Desktop App" },
  { id: "cross-platform", label: "Cross-platform (Mobile + Web)" },
  { id: "ecosystem", label: "Full Ecosystem (Mobile + Web + Desktop)" },
  { id: "other", label: "Other" }
]
```

---

## Recommendation Presets (Based on Step 1)

When user selects an app type, these options are **pre-selected** (but editable):

```javascript
const recommendationPresets = {
  "mobile": {
    platform: "ios-android",
    screens: "standard",
    design: "custom",
    auth: "social",
    backend: "standard",
    features: ["pushNotifications", "analytics"]
  },
  "web": {
    platform: "web",
    screens: "standard",
    design: "custom",
    auth: "basic",
    backend: "standard",
    features: ["analytics"]
  },
  "desktop": {
    platform: "desktop-single",
    screens: "standard",
    design: "custom",
    auth: "basic",
    backend: "simple",
    features: ["offlineMode", "analytics"]
  },
  "cross-platform": {
    platform: "web-ios-android",
    screens: "standard",
    design: "custom",
    auth: "social",
    backend: "standard",
    features: ["pushNotifications", "analytics"]
  },
  "ecosystem": {
    platform: "all",
    screens: "complex",
    design: "premium",
    auth: "advanced",
    backend: "complex",
    features: ["pushNotifications", "offlineMode", "analytics"]
  },
  "other": {
    platform: "web",
    screens: "simple",
    design: "template",
    auth: "none",
    backend: "simple",
    features: ["analytics"]
  }
}
```

---

## Step 2: Platform

*Question: "Which platforms do you need?"*

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| Web only | $300 | Browser-based application accessible on any device with internet connection. |
| iOS only | $400 | Native iPhone and iPad app distributed via Apple App Store. |
| Android only | $400 | Native app distributed via Google Play Store. |
| iOS + Android | $650 | Both mobile platforms with shared functionality and design. |
| Web + iOS | $600 | Browser app plus native iPhone/iPad app. |
| Web + Android | $600 | Browser app plus native Android app. |
| Web + iOS + Android | $800 | Full coverage: browser and both mobile platforms. |
| Desktop (Mac or Windows) | $500 | Single desktop platform application. |
| Desktop (Mac + Windows) | $750 | Both desktop platforms with shared functionality. |
| All Platforms | $1,200+ | Web, iOS, Android, Mac, Windows — complete ecosystem. |

```javascript
const platformOptions = [
  { id: "web", label: "Web only", price: 300 },
  { id: "ios", label: "iOS only", price: 400 },
  { id: "android", label: "Android only", price: 400 },
  { id: "ios-android", label: "iOS + Android", price: 650 },
  { id: "web-ios", label: "Web + iOS", price: 600 },
  { id: "web-android", label: "Web + Android", price: 600 },
  { id: "web-ios-android", label: "Web + iOS + Android", price: 800 },
  { id: "desktop-single", label: "Desktop (Mac or Windows)", price: 500 },
  { id: "desktop-both", label: "Desktop (Mac + Windows)", price: 750 },
  { id: "all", label: "All Platforms", price: 1200, startsAt: true }
]
```

---

## Step 3: App Complexity / Screens

*Question: "How many screens or views does your app need?"*

**Default:** Standard (6–12 screens)

| Option | Price | Tooltip |
|--------|-------|---------|
| Simple (1–5 screens) | $200 | Basic app with core functionality. Typical: Login, home, 1–2 feature screens, settings. |
| Standard (6–12 screens) | $400 | Full-featured app with multiple sections and user flows. |
| Complex (13–25 screens) | $700 | Comprehensive app with detailed features, multiple user types, or admin dashboards. |
| Enterprise (25+ screens) | Custom quote | Large-scale application requiring custom scoping and pricing. |

```javascript
const screenOptions = [
  { id: "simple", label: "Simple (1–5 screens)", price: 200 },
  { id: "standard", label: "Standard (6–12 screens)", price: 400 },
  { id: "complex", label: "Complex (13–25 screens)", price: 700 },
  { id: "enterprise", label: "Enterprise (25+ screens)", price: null, customQuote: true }
]
```

---

## Step 4: Design Level

*Question: "What level of design are you looking for?"*

**Default:** Custom Design

| Option | Price | Tooltip |
|--------|-------|---------|
| Template-based | $100 | Clean UI using established design patterns and component libraries. Fast to implement, professional look. |
| Custom Design | $300 | Unique visual identity with custom layouts, colors, typography, and branded elements. |
| Premium / Bespoke | $550 | High-end design with micro-interactions, custom illustrations, animations, and refined details. |

```javascript
const designOptions = [
  { id: "template", label: "Template-based", price: 100 },
  { id: "custom", label: "Custom Design", price: 300 },
  { id: "premium", label: "Premium / Bespoke", price: 550 }
]
```

---

## Step 5: User Authentication

*Question: "How will users log in?"*

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| None | $0 | No user accounts required — app works without login. |
| Basic (Email/Password) | $100 | Standard signup and login with email and password, includes password reset flow. |
| Social Logins | $175 | Login with Google, Apple, Facebook, etc. in addition to email/password option. |
| Advanced (SSO, 2FA, Roles) | $350+ | Enterprise-grade: single sign-on, two-factor authentication, user roles and permissions. |

```javascript
const authOptions = [
  { id: "none", label: "None", price: 0 },
  { id: "basic", label: "Basic (Email/Password)", price: 100 },
  { id: "social", label: "Social Logins", price: 175 },
  { id: "advanced", label: "Advanced (SSO, 2FA, Roles)", price: 350, startsAt: true }
]
```

---

## Step 6: Backend & Database

*Question: "What kind of data does your app need to handle?"*

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| No backend (static/local) | $0 | App stores data locally on device only. No server or database needed. |
| Simple (Basic CRUD) | $200 | Create, read, update, delete data — user profiles, content, simple records. |
| Standard (Relational data) | $400 | Multiple data types with relationships — orders linked to products, users to roles, etc. |
| Complex (Real-time, large scale) | $700+ | Real-time sync, complex queries, high data volume, multi-tenant architecture. |

```javascript
const backendOptions = [
  { id: "none", label: "No backend (static/local)", price: 0 },
  { id: "simple", label: "Simple (Basic CRUD)", price: 200 },
  { id: "standard", label: "Standard (Relational data)", price: 400 },
  { id: "complex", label: "Complex (Real-time, large scale)", price: 700, startsAt: true }
]
```

---

## Step 7: Features & Functionality

*Question: "Select the features you need."*

Each feature can be **selected/deselected** and has **tiered options** for customization.

---

### Push Notifications

**Default tier:** Basic

| Option | Price | Tooltip |
|--------|-------|---------|
| Basic | $75 | Send notifications to all users — announcements, updates, reminders. |
| Segmented | $150 | Target specific user groups based on behavior, preferences, or custom segments. |
| Advanced | $250+ | Trigger-based automation, scheduling, A/B testing, rich media notifications. |

```javascript
const pushNotificationOptions = [
  { id: "basic", label: "Basic", price: 75, description: "Broadcast to all users" },
  { id: "segmented", label: "Segmented", price: 150, description: "Target specific groups" },
  { id: "advanced", label: "Advanced", price: 250, description: "Automation, A/B testing", startsAt: true }
]
```

---

### In-App Messaging / Chat

**Default tier:** Basic (1:1)

| Option | Price | Tooltip |
|--------|-------|---------|
| Basic (1:1) | $200 | Direct messages between two users with basic text support. |
| Group Chat | $350 | Multi-user conversations, chat rooms, group management. |
| Advanced | $500+ | File sharing, reactions, threaded replies, read receipts, typing indicators. |

```javascript
const messagingOptions = [
  { id: "basic", label: "Basic (1:1)", price: 200, description: "Direct messages" },
  { id: "group", label: "Group Chat", price: 350, description: "Multi-user rooms" },
  { id: "advanced", label: "Advanced", price: 500, description: "Files, reactions, threads", startsAt: true }
]
```

---

### Payments / Transactions

**Default tier:** Single Gateway

| Option | Price | Tooltip |
|--------|-------|---------|
| Single Gateway | $150 | Accept payments via one processor (Stripe, PayPal, Square, etc.) |
| Multiple Gateways | $250 | Support multiple payment methods and regional processors. |
| Subscriptions | $350+ | Recurring billing, subscription tiers, plan management, trial periods. |
| Marketplace | $500+ | Split payments between parties, seller payouts, escrow, platform fees. |

```javascript
const paymentOptions = [
  { id: "single", label: "Single Gateway", price: 150, description: "One payment processor" },
  { id: "multiple", label: "Multiple Gateways", price: 250, description: "Multiple processors" },
  { id: "subscriptions", label: "Subscriptions", price: 350, description: "Recurring billing", startsAt: true },
  { id: "marketplace", label: "Marketplace", price: 500, description: "Split payments, payouts", startsAt: true }
]
```

---

### Location / Maps

**Default tier:** Static Maps

| Option | Price | Tooltip |
|--------|-------|---------|
| Static Maps | $75 | Display locations on a map — store locator, address pins, directions link. |
| Interactive Maps | $150 | User interaction — search locations, zoom, pan, select points of interest. |
| Live Tracking | $300+ | Real-time GPS tracking, route updates, geofencing, location history. |

```javascript
const locationOptions = [
  { id: "static", label: "Static Maps", price: 75, description: "Display locations" },
  { id: "interactive", label: "Interactive Maps", price: 150, description: "Search, zoom, select" },
  { id: "live", label: "Live Tracking", price: 300, description: "Real-time GPS", startsAt: true }
]
```

---

### Media Handling

**Default tier:** Image Upload

| Option | Price | Tooltip |
|--------|-------|---------|
| Image Upload | $75 | Users can upload, store, and display images. |
| Image + Video | $150 | Support for both photo and video uploads with playback. |
| Advanced | $300+ | In-app editing, filters, compression, gallery management, cloud optimization. |

```javascript
const mediaOptions = [
  { id: "image", label: "Image Upload", price: 75, description: "Photo uploads" },
  { id: "image-video", label: "Image + Video", price: 150, description: "Photo and video" },
  { id: "advanced", label: "Advanced", price: 300, description: "Editing, filters, optimization", startsAt: true }
]
```

---

### Offline Mode

**Default tier:** Basic (View only)

| Option | Price | Tooltip |
|--------|-------|---------|
| Basic (View only) | $100 | Users can view previously loaded content without internet connection. |
| Full (Sync) | $250+ | Users can create and edit offline; data syncs automatically when back online. |

```javascript
const offlineOptions = [
  { id: "basic", label: "Basic (View only)", price: 100, description: "View cached content" },
  { id: "full", label: "Full (Sync)", price: 250, description: "Edit offline, sync later", startsAt: true }
]
```

---

### Analytics / Admin Dashboard

**Default tier:** Basic Tracking

| Option | Price | Tooltip |
|--------|-------|---------|
| Basic Tracking | $75 | Track user activity, screen views, events, and basic metrics. |
| Admin Dashboard | $200 | Backend dashboard to view stats, manage users, moderate content. |
| Advanced Reporting | $400+ | Custom reports, data visualization, filters, export functionality. |

```javascript
const analyticsOptions = [
  { id: "basic", label: "Basic Tracking", price: 75, description: "Activity and events" },
  { id: "dashboard", label: "Admin Dashboard", price: 200, description: "Stats, user management" },
  { id: "advanced", label: "Advanced Reporting", price: 400, description: "Custom reports, exports", startsAt: true }
]
```

---

### Third-party Integrations / API

**Default tier:** 1 Integration

| Option | Price | Tooltip |
|--------|-------|---------|
| 1 Integration | $100 | Connect one external service (CRM, email, calendar, analytics, etc.) |
| 2–3 Integrations | $200 | Multiple service connections with data flow between them. |
| 4+ Integrations | $400+ | Complex integration ecosystem or building custom APIs for external use. |

```javascript
const integrationOptions = [
  { id: "one", label: "1 Integration", price: 100, description: "Single service" },
  { id: "few", label: "2–3 Integrations", price: 200, description: "Multiple services" },
  { id: "many", label: "4+ Integrations", price: 400, description: "Complex ecosystem", startsAt: true }
]
```

---

### Search

**Default tier:** Basic

| Option | Price | Tooltip |
|--------|-------|---------|
| Basic | $75 | Simple search within app content with results list. |
| Advanced | $175 | Filtered search, autocomplete suggestions, indexed results, sorting options. |

```javascript
const searchOptions = [
  { id: "basic", label: "Basic", price: 75, description: "Simple content search" },
  { id: "advanced", label: "Advanced", price: 175, description: "Filters, autocomplete, sorting" }
]
```

---

### Multi-language Support

**Default tier:** 2 Languages

| Option | Price | Tooltip |
|--------|-------|---------|
| 2 Languages | $125 | App available in two languages with language switcher. |
| 3+ Languages | $225+ | Multiple languages with automatic region detection. |

```javascript
const languageOptions = [
  { id: "two", label: "2 Languages", price: 125, description: "Bilingual with switcher" },
  { id: "multiple", label: "3+ Languages", price: 225, description: "Multi-language, region detection", startsAt: true }
]
```

---

### Accessibility Features

**Default tier:** Standard

| Option | Price | Tooltip |
|--------|-------|---------|
| Standard | $75 | Screen reader support, proper contrast ratios, keyboard navigation basics. |
| Full Compliance (WCAG AA) | $200+ | Complete accessibility audit and implementation to meet WCAG AA standards. |

```javascript
const accessibilityOptions = [
  { id: "standard", label: "Standard", price: 75, description: "Basic accessibility" },
  { id: "full", label: "Full Compliance (WCAG AA)", price: 200, description: "Complete WCAG AA", startsAt: true }
]
```

---

### Custom Features

| Option | Price | Tooltip |
|--------|-------|---------|
| Custom | Quote required | AR/VR, IoT integration, hardware connectivity, or unique functionality. We'll scope together. |

```javascript
const customFeatureOptions = [
  { id: "custom", label: "Custom Feature", price: null, customQuote: true, description: "AR/VR, IoT, unique functionality" }
]
```

---

## Step 8: AI Features (Optional)

*Question: "Does your app need AI-powered functionality?"*

**Note:** AI features have a one-time setup fee + monthly usage costs based on volume.

---

### AI Chatbot / Assistant

**Setup Fee:**

| Tier | Setup | Tooltip |
|------|-------|---------|
| Basic | $200 | Rule-based with light AI, handles FAQs and simple routing. |
| Standard | $350 | Full conversational AI (GPT/Claude), understands context, handles varied inputs. |
| Advanced | $550+ | Custom-trained on your data, brand voice, conversation memory, human handoff, analytics. |

**Monthly Usage:**

| Tier | Monthly | Includes |
|------|---------|----------|
| Starter | $50/mo | Up to 1,000 interactions |
| Growth | $150/mo | Up to 5,000 interactions |
| Scale | $300/mo | Up to 15,000 interactions |
| Enterprise | Custom | Unlimited / dedicated resources |

```javascript
const aiChatbotSetup = [
  { id: "basic", label: "Basic", price: 200 },
  { id: "standard", label: "Standard", price: 350 },
  { id: "advanced", label: "Advanced", price: 550, startsAt: true }
]

const aiChatbotUsage = [
  { id: "starter", label: "Starter", price: 50, includes: "Up to 1,000 interactions" },
  { id: "growth", label: "Growth", price: 150, includes: "Up to 5,000 interactions" },
  { id: "scale", label: "Scale", price: 300, includes: "Up to 15,000 interactions" },
  { id: "enterprise", label: "Enterprise", price: null, custom: true }
]
```

---

### AI Search

**Setup Fee:**

| Tier | Setup | Tooltip |
|------|-------|---------|
| Basic | $150 | Understands natural language queries, better than keyword matching. |
| Standard | $300 | Semantic search with filters, handles typos, synonyms, and user intent. |
| Advanced | $450+ | Custom-trained on your content, learns from user behavior, personalized results. |

**Monthly Usage:**

| Tier | Monthly | Includes |
|------|---------|----------|
| Starter | $30/mo | Up to 5,000 searches |
| Growth | $75/mo | Up to 20,000 searches |
| Scale | $150/mo | Up to 50,000 searches |
| Enterprise | Custom | Unlimited |

```javascript
const aiSearchSetup = [
  { id: "basic", label: "Basic", price: 150 },
  { id: "standard", label: "Standard", price: 300 },
  { id: "advanced", label: "Advanced", price: 450, startsAt: true }
]

const aiSearchUsage = [
  { id: "starter", label: "Starter", price: 30, includes: "Up to 5,000 searches" },
  { id: "growth", label: "Growth", price: 75, includes: "Up to 20,000 searches" },
  { id: "scale", label: "Scale", price: 150, includes: "Up to 50,000 searches" },
  { id: "enterprise", label: "Enterprise", price: null, custom: true }
]
```

---

### AI Content Generation

**Setup Fee:**

| Tier | Setup | Tooltip |
|------|-------|---------|
| Basic | $200 | Auto-complete, short descriptions, simple summaries. |
| Standard | $350 | Full content creation — posts, descriptions, emails, multiple formats. |
| Advanced | $500+ | Custom tone training, templates, workflows, bulk generation, approval systems. |

**Monthly Usage:**

| Tier | Monthly | Includes |
|------|---------|----------|
| Light | $30/mo | Up to 50,000 tokens (~40 pages) |
| Standard | $75/mo | Up to 150,000 tokens (~120 pages) |
| Heavy | $150/mo | Up to 400,000 tokens (~320 pages) |
| Enterprise | Custom | Unlimited |

```javascript
const aiContentSetup = [
  { id: "basic", label: "Basic", price: 200 },
  { id: "standard", label: "Standard", price: 350 },
  { id: "advanced", label: "Advanced", price: 500, startsAt: true }
]

const aiContentUsage = [
  { id: "light", label: "Light", price: 30, includes: "Up to 50,000 tokens" },
  { id: "standard", label: "Standard", price: 75, includes: "Up to 150,000 tokens" },
  { id: "heavy", label: "Heavy", price: 150, includes: "Up to 400,000 tokens" },
  { id: "enterprise", label: "Enterprise", price: null, custom: true }
]
```

---

### AI Recommendations

**Setup Fee:**

| Tier | Setup | Tooltip |
|------|-------|---------|
| Basic | $200 | Rules-based suggestions — "popular items," "frequently bought together." |
| Standard | $400 | Behavior-driven recommendations based on user history and preferences. |
| Advanced | $600+ | Real-time personalization, A/B optimized, collaborative filtering, multi-factor algorithms. |

**Monthly Usage:**

| Tier | Monthly | Includes |
|------|---------|----------|
| Starter | $50/mo | Up to 10,000 recommendation requests |
| Growth | $125/mo | Up to 50,000 requests |
| Scale | $250/mo | Up to 150,000 requests |
| Enterprise | Custom | Unlimited |

```javascript
const aiRecommendationsSetup = [
  { id: "basic", label: "Basic", price: 200 },
  { id: "standard", label: "Standard", price: 400 },
  { id: "advanced", label: "Advanced", price: 600, startsAt: true }
]

const aiRecommendationsUsage = [
  { id: "starter", label: "Starter", price: 50, includes: "Up to 10,000 requests" },
  { id: "growth", label: "Growth", price: 125, includes: "Up to 50,000 requests" },
  { id: "scale", label: "Scale", price: 250, includes: "Up to 150,000 requests" },
  { id: "enterprise", label: "Enterprise", price: null, custom: true }
]
```

---

### AI Image Enhancement / Generation

**Setup Fee:**

| Tier | Setup | Tooltip |
|------|-------|---------|
| Enhancement | $150 | Auto-improve photos — upscaling, noise reduction, color correction, optimization. |
| Generation | $300 | Create images from text prompts using DALL-E, Stable Diffusion, or similar. |
| Custom | $500+ | Background removal, style transfer, product mockups, brand-trained models. |

**Monthly Usage:**

| Tier | Monthly | Includes |
|------|---------|----------|
| Starter | $40/mo | Up to 200 images |
| Growth | $100/mo | Up to 600 images |
| Scale | $200/mo | Up to 1,500 images |
| Enterprise | Custom | Unlimited |

```javascript
const aiImageSetup = [
  { id: "enhancement", label: "Enhancement", price: 150 },
  { id: "generation", label: "Generation", price: 300 },
  { id: "custom", label: "Custom", price: 500, startsAt: true }
]

const aiImageUsage = [
  { id: "starter", label: "Starter", price: 40, includes: "Up to 200 images" },
  { id: "growth", label: "Growth", price: 100, includes: "Up to 600 images" },
  { id: "scale", label: "Scale", price: 200, includes: "Up to 1,500 images" },
  { id: "enterprise", label: "Enterprise", price: null, custom: true }
]
```

---

### AI Voice / Speech

**Setup Fee:**

| Tier | Setup | Tooltip |
|------|-------|---------|
| Speech-to-Text | $200 | Transcribe audio and voice to text — voice notes, transcription, accessibility. |
| Text-to-Speech | $200 | Convert text to natural-sounding audio — read-aloud, notifications, accessibility. |
| Both (STT + TTS) | $350 | Full voice input and output capability. |
| Voice Assistant | $500+ | Voice commands, conversational interface, wake words, multi-language voice. |

**Monthly Usage:**

| Tier | Monthly | Includes |
|------|---------|----------|
| Starter | $40/mo | Up to 60 minutes processing |
| Growth | $100/mo | Up to 300 minutes |
| Scale | $200/mo | Up to 800 minutes |
| Enterprise | Custom | Unlimited |

```javascript
const aiVoiceSetup = [
  { id: "stt", label: "Speech-to-Text", price: 200 },
  { id: "tts", label: "Text-to-Speech", price: 200 },
  { id: "both", label: "Both (STT + TTS)", price: 350 },
  { id: "assistant", label: "Voice Assistant", price: 500, startsAt: true }
]

const aiVoiceUsage = [
  { id: "starter", label: "Starter", price: 40, includes: "Up to 60 minutes" },
  { id: "growth", label: "Growth", price: 100, includes: "Up to 300 minutes" },
  { id: "scale", label: "Scale", price: 200, includes: "Up to 800 minutes" },
  { id: "enterprise", label: "Enterprise", price: null, custom: true }
]
```

---

### AI Translation

**Setup Fee:**

| Tier | Setup | Tooltip |
|------|-------|---------|
| Basic | $150 | Translate text between languages using Google Translate, DeepL, or similar. |
| Real-time | $300 | Live translation in chat, voice, or content as users interact. |
| Custom | $450+ | Industry-specific terminology, brand glossary, tone preservation. |

**Monthly Usage:**

| Tier | Monthly | Includes |
|------|---------|----------|
| Starter | $40/mo | Up to 100,000 characters |
| Growth | $100/mo | Up to 500,000 characters |
| Scale | $200/mo | Up to 1,500,000 characters |
| Enterprise | Custom | Unlimited |

```javascript
const aiTranslationSetup = [
  { id: "basic", label: "Basic", price: 150 },
  { id: "realtime", label: "Real-time", price: 300 },
  { id: "custom", label: "Custom", price: 450, startsAt: true }
]

const aiTranslationUsage = [
  { id: "starter", label: "Starter", price: 40, includes: "Up to 100,000 characters" },
  { id: "growth", label: "Growth", price: 100, includes: "Up to 500,000 characters" },
  { id: "scale", label: "Scale", price: 200, includes: "Up to 1,500,000 characters" },
  { id: "enterprise", label: "Enterprise", price: null, custom: true }
]
```

---

### AI Data Analysis / Insights

**Setup Fee:**

| Tier | Setup | Tooltip |
|------|-------|---------|
| Basic | $250 | AI-generated summaries — trends, highlights, anomaly detection. |
| Standard | $400 | Natural language queries ("Show me sales last month"), auto-generated reports. |
| Advanced | $650+ | Predictive analytics, forecasting, custom dashboards, automated alerts. |

**Monthly Usage:**

| Tier | Monthly | Includes |
|------|---------|----------|
| Starter | $50/mo | Up to 1,000 queries |
| Growth | $125/mo | Up to 5,000 queries |
| Scale | $250/mo | Up to 15,000 queries |
| Enterprise | Custom | Unlimited |

```javascript
const aiDataAnalysisSetup = [
  { id: "basic", label: "Basic", price: 250 },
  { id: "standard", label: "Standard", price: 400 },
  { id: "advanced", label: "Advanced", price: 650, startsAt: true }
]

const aiDataAnalysisUsage = [
  { id: "starter", label: "Starter", price: 50, includes: "Up to 1,000 queries" },
  { id: "growth", label: "Growth", price: 125, includes: "Up to 5,000 queries" },
  { id: "scale", label: "Scale", price: 250, includes: "Up to 15,000 queries" },
  { id: "enterprise", label: "Enterprise", price: null, custom: true }
]
```

---

### AI Vision / Recognition

**Setup Fee:**

| Tier | Setup | Tooltip |
|------|-------|---------|
| OCR | $150 | Extract text from photos, documents, receipts, IDs. |
| Object Detection | $300 | Identify and label objects in images — products, inventory, items. |
| Facial Recognition | $400+ | Identity verification, face matching. (Compliance considerations apply.) |
| Custom Vision | $600+ | Train AI to recognize items, defects, or categories specific to your business. |

**Monthly Usage:**

| Tier | Monthly | Includes |
|------|---------|----------|
| Starter | $40/mo | Up to 500 processes |
| Growth | $100/mo | Up to 2,000 processes |
| Scale | $200/mo | Up to 5,000 processes |
| Enterprise | Custom | Unlimited |

```javascript
const aiVisionSetup = [
  { id: "ocr", label: "OCR", price: 150 },
  { id: "object", label: "Object Detection", price: 300 },
  { id: "facial", label: "Facial Recognition", price: 400, startsAt: true },
  { id: "custom", label: "Custom Vision", price: 600, startsAt: true }
]

const aiVisionUsage = [
  { id: "starter", label: "Starter", price: 40, includes: "Up to 500 processes" },
  { id: "growth", label: "Growth", price: 100, includes: "Up to 2,000 processes" },
  { id: "scale", label: "Scale", price: 200, includes: "Up to 5,000 processes" },
  { id: "enterprise", label: "Enterprise", price: null, custom: true }
]
```

---

### AI Form / Lead Qualification

**Setup Fee:**

| Tier | Setup | Tooltip |
|------|-------|---------|
| Basic | $150 | Dynamic forms that adapt questions based on previous answers. |
| Standard | $275 | Lead scoring — AI rates lead quality in real-time based on responses. |
| Advanced | $400+ | Full qualification flow, auto-responses, CRM integration, routing rules. |

**Monthly Usage:**

| Tier | Monthly | Includes |
|------|---------|----------|
| Starter | $30/mo | Up to 500 submissions |
| Growth | $75/mo | Up to 2,000 submissions |
| Scale | $150/mo | Up to 5,000 submissions |
| Enterprise | Custom | Unlimited |

```javascript
const aiFormSetup = [
  { id: "basic", label: "Basic", price: 150 },
  { id: "standard", label: "Standard", price: 275 },
  { id: "advanced", label: "Advanced", price: 400, startsAt: true }
]

const aiFormUsage = [
  { id: "starter", label: "Starter", price: 30, includes: "Up to 500 submissions" },
  { id: "growth", label: "Growth", price: 75, includes: "Up to 2,000 submissions" },
  { id: "scale", label: "Scale", price: 150, includes: "Up to 5,000 submissions" },
  { id: "enterprise", label: "Enterprise", price: null, custom: true }
]
```

---

### AI Personalization

**Setup Fee:**

| Tier | Setup | Tooltip |
|------|-------|---------|
| Basic | $250 | Simple personalization — returning user recognition, basic content swaps. |
| Standard | $400 | Behavior-based personalization — dynamic content, personalized CTAs. |
| Advanced | $600+ | Full real-time personalization engine, A/B optimization, predictive targeting. |

**Monthly Usage:**

| Tier | Monthly | Includes |
|------|---------|----------|
| Starter | $75/mo | Up to 10,000 personalized sessions |
| Growth | $175/mo | Up to 50,000 sessions |
| Scale | $300/mo | Up to 150,000 sessions |
| Enterprise | Custom | Unlimited |

```javascript
const aiPersonalizationSetup = [
  { id: "basic", label: "Basic", price: 250 },
  { id: "standard", label: "Standard", price: 400 },
  { id: "advanced", label: "Advanced", price: 600, startsAt: true }
]

const aiPersonalizationUsage = [
  { id: "starter", label: "Starter", price: 75, includes: "Up to 10,000 sessions" },
  { id: "growth", label: "Growth", price: 175, includes: "Up to 50,000 sessions" },
  { id: "scale", label: "Scale", price: 300, includes: "Up to 150,000 sessions" },
  { id: "enterprise", label: "Enterprise", price: null, custom: true }
]
```

---

### Custom AI / ML

| Option | Setup | Tooltip |
|--------|-------|---------|
| API Integration Only | $200 | Connect to existing AI service — we handle integration, you provide the AI endpoint. |
| Fine-tuned Model | $800+ | Train a model on your data for specialized performance. |
| Custom ML Solution | Quote required | Proprietary algorithms, unique pipelines, R&D, specialized applications. |

*Monthly costs determined based on scope and usage.*

```javascript
const aiCustomSetup = [
  { id: "api", label: "API Integration Only", price: 200 },
  { id: "finetuned", label: "Fine-tuned Model", price: 800, startsAt: true },
  { id: "custom", label: "Custom ML Solution", price: null, customQuote: true }
]
```

---

## Step 9: Additional Services

*Question: "Do you need any additional services?"*

| Service | Price | Tooltip |
|---------|-------|---------|
| App Store Submission | $100 | We handle iOS App Store and/or Google Play submission, assets, screenshots, and approval process. |
| Beta Testing Setup | $75 | Configure TestFlight (iOS) and/or internal testing track (Android) for beta distribution. |
| Analytics Setup | $50 | Firebase, Mixpanel, or similar analytics integration with event tracking configuration. |
| Documentation | $100+ | Technical documentation, user guides, API docs. Price varies by scope. |
| Ongoing Maintenance | $150/mo | Updates, bug fixes, OS compatibility, security patches, minor enhancements. |
| Source Code Handoff | $0 | You own the code — always included at no extra cost. |

```javascript
const additionalServices = [
  { id: "appstore", label: "App Store Submission", price: 100 },
  { id: "beta", label: "Beta Testing Setup", price: 75 },
  { id: "analytics", label: "Analytics Setup", price: 50 },
  { id: "docs", label: "Documentation", price: 100, startsAt: true },
  { id: "maintenance", label: "Ongoing Maintenance", price: 150, recurring: "monthly" },
  { id: "source", label: "Source Code Handoff", price: 0, included: true }
]
```

---

## Step 10: Timeline

*Question: "When do you need this completed?"*

**Default:** Flexible

| Option | Price Impact | Tooltip |
|--------|--------------|---------|
| Flexible | +0% | We'll schedule based on workload. Typically 8–12 weeks depending on scope. |
| 6–8 weeks | +0% | Standard timeline for most app projects. |
| 4–6 weeks | +15% | Accelerated development with priority scheduling. |
| Under 4 weeks | +25% | Rush delivery. Subject to scope limitations and availability. |

```javascript
const timelineOptions = [
  { id: "flexible", label: "Flexible", multiplier: 1.0 },
  { id: "standard", label: "6–8 weeks", multiplier: 1.0 },
  { id: "expedited", label: "4–6 weeks", multiplier: 1.15 },
  { id: "rush", label: "Under 4 weeks", multiplier: 1.25 }
]
```

---

## Summary Screen

### UI Elements

1. **Selection Summary Table**
   - Lists each selection with chosen option and price
   - Separates one-time costs from monthly costs
   - Editable — clicking any row returns to that step

2. **Price Calculation Display**
   ```
   YOUR CUSTOM APP PLAN
   ────────────────────────────────────────

   Platform                    Web + iOS + Android         $800
   Screens                     Standard (6–12)             $400
   Design                      Custom                      $300
   Authentication              Social Logins               $175
   Backend                     Standard                    $400
   Push Notifications          Segmented                   $150
   Payments                    Single Gateway              $150
   AI Chatbot                  Standard (Setup)            $350
                               Growth (Monthly)            $150/mo
   Analytics Setup             —                           $50
   App Store Submission        —                           $100
   Timeline                    4–6 weeks                   +15%

   ────────────────────────────────────────
   Subtotal                                                $2,875
   Rush Fee (15%)                                          $431.25
   ────────────────────────────────────────
   ONE-TIME TOTAL                                          $3,306.25
   MONTHLY TOTAL                                           $150/mo
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

Thanks, [Name]! We've received your custom app plan.

What's next:
• We'll review your selections within 24–48 hours
• You'll receive a detailed proposal via email
• We'll schedule a discovery call to finalize scope

Your Reference: #APP-[timestamp]
```

---

## Data Models

### Builder State

```javascript
const builderState = {
  // Step 1
  appType: "cross-platform", // info only, no price
  
  // Step 2
  platform: {
    selected: "web-ios-android",
    price: 800
  },
  
  // Step 3
  screens: {
    selected: "standard",
    price: 400
  },
  
  // Step 4
  design: {
    selected: "custom",
    price: 300
  },
  
  // Step 5
  auth: {
    selected: "social",
    price: 175
  },
  
  // Step 6
  backend: {
    selected: "standard",
    price: 400
  },
  
  // Step 7 - Features
  features: [
    { id: "pushNotifications", option: "segmented", price: 150 },
    { id: "payments", option: "single", price: 150 }
  ],
  
  // Step 8 - AI Features
  aiFeatures: [
    { 
      id: "aiChatbot", 
      setupOption: "standard", 
      setupPrice: 350,
      usageOption: "growth",
      usagePrice: 150,
      usageRecurring: "monthly"
    }
  ],
  
  // Step 9 - Additional Services
  additionalServices: [
    { id: "analytics", price: 50 },
    { id: "appstore", price: 100 },
    { id: "maintenance", price: 150, recurring: "monthly" }
  ],
  
  // Step 10
  timeline: {
    selected: "expedited",
    multiplier: 1.15
  },
  
  // Calculated
  oneTimeSubtotal: 2875,
  rushFee: 431.25,
  oneTimeTotal: 3306.25,
  monthlyTotal: 300, // AI usage + maintenance
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
  let oneTimeSubtotal = 0;
  let monthlyTotal = 0;
  let hasCustomQuote = false;
  
  // Platform
  if (state.platform.price === null) {
    hasCustomQuote = true;
  } else {
    oneTimeSubtotal += state.platform.price;
  }
  
  // Screens
  if (state.screens.price === null) {
    hasCustomQuote = true;
  } else {
    oneTimeSubtotal += state.screens.price;
  }
  
  // Design
  oneTimeSubtotal += state.design.price;
  
  // Auth
  oneTimeSubtotal += state.auth.price;
  
  // Backend
  if (state.backend.price === null) {
    hasCustomQuote = true;
  } else {
    oneTimeSubtotal += state.backend.price;
  }
  
  // Features
  state.features.forEach(feature => {
    if (feature.price === null) {
      hasCustomQuote = true;
    } else {
      oneTimeSubtotal += feature.price;
    }
  });
  
  // AI Features (setup + usage)
  state.aiFeatures.forEach(ai => {
    if (ai.setupPrice === null) {
      hasCustomQuote = true;
    } else {
      oneTimeSubtotal += ai.setupPrice;
    }
    if (ai.usagePrice && ai.usageRecurring === "monthly") {
      monthlyTotal += ai.usagePrice;
    }
  });
  
  // Additional Services
  state.additionalServices.forEach(service => {
    if (service.recurring === "monthly") {
      monthlyTotal += service.price;
    } else {
      oneTimeSubtotal += service.price;
    }
  });
  
  // Timeline multiplier (applies to one-time only)
  const multiplier = state.timeline.multiplier;
  const rushFee = oneTimeSubtotal * (multiplier - 1);
  const oneTimeTotal = oneTimeSubtotal * multiplier;
  
  return {
    oneTimeSubtotal: oneTimeSubtotal,
    rushFee: rushFee,
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

### Feature Selection UI
- Checkbox to enable/disable feature
- When enabled, show tier options as radio buttons or dropdown
- Grayed out options when feature is disabled
- Show price next to each option

### AI Features UI
- Two-part selection: Setup tier + Usage tier
- Clearly label "One-time" vs "Monthly" costs
- Show combined impact in running total

### Real-time Price Update
- Sticky footer or sidebar showing running total
- Separate display for one-time and monthly costs
- Animates when price changes
- Shows "Custom quote required" badge if any selection triggers it

### Mobile Considerations
- Single column layout
- Collapsible sections for features
- Bottom sheet for tooltips
- Sticky CTA button at bottom
- Swipe navigation between steps

---

## Price Summary Tables

### Quick Reference - Base Options

| Category | Option | Price |
|----------|--------|-------|
| **Platform** | Web only | $300 |
| | iOS only | $400 |
| | Android only | $400 |
| | iOS + Android | $650 |
| | Web + iOS | $600 |
| | Web + Android | $600 |
| | Web + iOS + Android | $800 |
| | Desktop (single) | $500 |
| | Desktop (both) | $750 |
| | All Platforms | $1,200+ |
| **Screens** | Simple (1–5) | $200 |
| | Standard (6–12) | $400 |
| | Complex (13–25) | $700 |
| | Enterprise (25+) | Custom |
| **Design** | Template | $100 |
| | Custom | $300 |
| | Premium | $550 |
| **Auth** | None | $0 |
| | Basic | $100 |
| | Social | $175 |
| | Advanced | $350+ |
| **Backend** | None | $0 |
| | Simple | $200 |
| | Standard | $400 |
| | Complex | $700+ |

### Quick Reference - Features

| Feature | Basic | Standard/Mid | Advanced |
|---------|-------|--------------|----------|
| Push Notifications | $75 | $150 | $250+ |
| Messaging/Chat | $200 | $350 | $500+ |
| Payments | $150 | $250–$350 | $500+ |
| Location/Maps | $75 | $150 | $300+ |
| Media | $75 | $150 | $300+ |
| Offline Mode | $100 | — | $250+ |
| Analytics/Dashboard | $75 | $200 | $400+ |
| Integrations | $100 | $200 | $400+ |
| Search | $75 | — | $175 |
| Multi-language | $125 | — | $225+ |
| Accessibility | $75 | — | $200+ |

### Quick Reference - AI Features (Setup + Monthly)

| AI Feature | Basic Setup | Standard Setup | Advanced Setup | Monthly Range |
|------------|-------------|----------------|----------------|---------------|
| Chatbot | $200 | $350 | $550+ | $50–$300/mo |
| Search | $150 | $300 | $450+ | $30–$150/mo |
| Content Gen | $200 | $350 | $500+ | $30–$150/mo |
| Recommendations | $200 | $400 | $600+ | $50–$250/mo |
| Image AI | $150 | $300 | $500+ | $40–$200/mo |
| Voice/Speech | $200 | $350 | $500+ | $40–$200/mo |
| Translation | $150 | $300 | $450+ | $40–$200/mo |
| Data Analysis | $250 | $400 | $650+ | $50–$250/mo |
| Vision | $150 | $300 | $600+ | $40–$200/mo |
| Form/Lead Qual | $150 | $275 | $400+ | $30–$150/mo |
| Personalization | $250 | $400 | $600+ | $75–$300/mo |

---

## Integration Notes

- This custom builder lives alongside the standard tier selection (Essential/Pro/Enterprise)
- Customer can switch between "Choose a Package" and "Build Custom" views
- If custom total is close to a tier price, optionally suggest the tier as simpler option
- All data structures are API-ready for future backend integration
- AI monthly costs should be clearly communicated as ongoing operational expenses
