# Brand Signature Sound Custom Builder - Feature Specification

## Overview

The Brand Signature Sound Custom Builder is an interactive step-by-step configurator that allows customers to build their own audio branding project plan according to their specific needs. When a customer clicks "Custom" instead of selecting a pre-defined tier (Essential/Pro/Enterprise), they enter this guided builder flow.

---

## Core Mechanics

### Pricing Logic
- **Step 1 (Sound Type):** Information only — NO price impact
- **Steps 2–8:** All pricing calculated from these selections
- **Running total** displays and updates in real-time

### Recommendation Engine
- Based on Step 1 selection, relevant options are **pre-selected** as recommendations
- User can **change** any recommendation
- User can **add** features not in the recommendation
- All selections remain fully editable throughout the flow

### Tooltips (? Icon)
- Every selection has a **? icon** that opens an info tooltip
- **Step 1 tooltips:** What it is + Ideal if + Real brand examples
- **All other tooltips:** What it is + Ideal if + Examples

---

## Step 1: Sound Type (Info Only)

*Question: "What kind of audio do you need?"*

**Price Impact:** None — informational only, triggers recommendations

| Option | Tooltip Content |
|--------|-----------------|
| Sonic Logo / Audio Logo | **What it is:** A short, memorable sound that represents your brand — the audio equivalent of a visual logo. **Ideal if:** You want instant brand recognition in video content, ads, podcasts, or apps. **Examples:** Netflix "ta-dum," Intel bong, McDonald's "ba da ba ba ba" |
| Ringtone / Notification Sound | **What it is:** Custom sounds for phone ringtones, app notifications, or alerts. **Ideal if:** You want branded sounds for mobile apps or devices. **Examples:** iPhone ringtone, Slack notification, WhatsApp message tone |
| Hold Music / Phone System | **What it is:** Custom music and messages for phone systems, IVR, and hold queues. **Ideal if:** You need professional audio for customer phone experiences. **Examples:** Business phone systems, call centers, customer service lines |
| App Sound Package | **What it is:** A collection of UI sounds for mobile or web applications. **Ideal if:** You're building an app and want cohesive audio feedback. **Examples:** Button clicks, success sounds, error alerts, navigation sounds |
| Podcast Intro/Outro | **What it is:** Custom music and sound design for podcast branding. **Ideal if:** You're launching a podcast and want professional audio identity. **Examples:** Podcast theme music, intro stinger, outro bed |
| Video Intro/Outro | **What it is:** Audio branding for video content — YouTube, corporate videos, social content. **Ideal if:** You create regular video content and want consistent audio branding. **Examples:** YouTube channel intro, corporate video opener |
| Jingle / Brand Music | **What it is:** A short, catchy musical piece with or without lyrics for advertising. **Ideal if:** You want a memorable tune associated with your brand. **Examples:** State Farm jingle, Kit Kat "Give me a break," local business jingles |
| Soundscape / Ambient | **What it is:** Background audio atmospheres for spaces, experiences, or content. **Ideal if:** You need ambient sound for retail spaces, apps, or immersive experiences. **Examples:** Store ambiance, meditation app backgrounds, game environments |
| Full Audio Brand System | **What it is:** A comprehensive audio identity package including multiple sound assets. **Ideal if:** You want complete audio branding across all touchpoints. **Examples:** Complete brand sound systems like Mastercard, Visa |
| Other | **What it is:** Something unique or a combination of audio needs. **Ideal if:** Your project doesn't fit standard categories — we'll tailor recommendations. |

```javascript
const soundTypeOptions = [
  { id: "sonic-logo", label: "Sonic Logo / Audio Logo" },
  { id: "ringtone", label: "Ringtone / Notification Sound" },
  { id: "hold-music", label: "Hold Music / Phone System" },
  { id: "app-sounds", label: "App Sound Package" },
  { id: "podcast", label: "Podcast Intro/Outro" },
  { id: "video", label: "Video Intro/Outro" },
  { id: "jingle", label: "Jingle / Brand Music" },
  { id: "soundscape", label: "Soundscape / Ambient" },
  { id: "full-system", label: "Full Audio Brand System" },
  { id: "other", label: "Other" }
]
```

---

## Recommendation Presets (Based on Step 1)

When user selects a sound type, these options are **pre-selected** (but editable):

```javascript
const recommendationPresets = {
  "sonic-logo": {
    duration: "short",
    style: "modern",
    complexity: "standard",
    quantity: "2-3",
    voiceover: "none",
    lyrics: "none",
    formats: "all",
    addOns: ["mnemonic"]
  },
  "ringtone": {
    duration: "medium",
    style: "clean",
    complexity: "simple",
    quantity: "2-3",
    voiceover: "none",
    lyrics: "none",
    formats: "mobile"
  },
  "hold-music": {
    duration: "long",
    style: "corporate",
    complexity: "simple",
    quantity: "single",
    voiceover: "vo-source",
    lyrics: "none",
    formats: "standard",
    addOns: ["loop"]
  },
  "app-sounds": {
    duration: "micro",
    style: "clean",
    complexity: "standard",
    quantity: "7-10",
    voiceover: "none",
    lyrics: "none",
    formats: "mobile"
  },
  "podcast": {
    duration: "standard",
    style: "warm",
    complexity: "standard",
    quantity: "2-3",
    voiceover: "vo-source",
    lyrics: "none",
    formats: "standard"
  },
  "video": {
    duration: "medium",
    style: "modern",
    complexity: "standard",
    quantity: "2-3",
    voiceover: "none",
    lyrics: "none",
    formats: "standard"
  },
  "jingle": {
    duration: "standard",
    style: "bold",
    complexity: "complex",
    quantity: "2-3",
    voiceover: "none",
    lyrics: "full",
    formats: "broadcast"
  },
  "soundscape": {
    duration: "long",
    style: "warm",
    complexity: "standard",
    quantity: "single",
    voiceover: "none",
    lyrics: "none",
    formats: "standard",
    addOns: ["loop"]
  },
  "full-system": {
    duration: "standard",
    style: "modern",
    complexity: "complex",
    quantity: "11-15",
    voiceover: "tag",
    lyrics: "none",
    formats: "all",
    addOns: ["mnemonic", "stems"]
  },
  "other": {
    duration: "medium",
    style: "modern",
    complexity: "simple",
    quantity: "single",
    voiceover: "none",
    lyrics: "none",
    formats: "standard"
  }
}
```

---

## Step 2: Sound Duration / Length

*Question: "How long does your audio need to be?"*

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| Micro (Under 1 second) | $50 | **What it is:** Ultra-short sound effects — clicks, pops, micro-interactions. **Ideal if:** You need UI feedback sounds or tiny audio moments. **Examples:** Button clicks, notification pips, toggle sounds |
| Short (1–3 seconds) | $100 | **What it is:** Brief audio signatures or stingers. **Ideal if:** You need a sonic logo, short notification, or quick brand moment. **Examples:** Sonic logos, app notifications, alert sounds |
| Medium (4–10 seconds) | $175 | **What it is:** Longer stingers, ringtones, or short intros. **Ideal if:** You need full ringtones, extended notifications, or short musical pieces. **Examples:** Ringtones, video bumpers, short intros |
| Standard (11–30 seconds) | $300 | **What it is:** Full intro/outro music, short jingles, or extended brand music. **Ideal if:** You need podcast intros, video openers, or short advertising music. **Examples:** Podcast themes, YouTube intros, ad music |
| Extended (31–60 seconds) | $450 | **What it is:** Full jingles, hold music segments, or longer brand compositions. **Ideal if:** You need complete musical pieces or extended hold music. **Examples:** Full jingles, hold music, brand anthems |
| Long (1–2 minutes) | $650 | **What it is:** Full-length compositions for hold systems or extended content. **Ideal if:** You need complete hold music or longer ambient pieces. **Examples:** Full hold music, ambient loops, background tracks |
| Extended Long (2–3 minutes) | $850 | **What it is:** Longer compositions for comprehensive audio needs. **Ideal if:** You need extended ambient soundscapes or full musical pieces. **Examples:** Meditation tracks, store ambiance, full songs |
| Custom Length (3+ minutes) | Custom quote | **What it is:** Full-length compositions or extensive audio packages. **Ideal if:** You need long-form content or complete audio systems. **Examples:** Full brand music, extended soundscapes |

```javascript
const durationOptions = [
  { id: "micro", label: "Micro (Under 1 second)", price: 50 },
  { id: "short", label: "Short (1–3 seconds)", price: 100 },
  { id: "medium", label: "Medium (4–10 seconds)", price: 175 },
  { id: "standard", label: "Standard (11–30 seconds)", price: 300 },
  { id: "extended", label: "Extended (31–60 seconds)", price: 450 },
  { id: "long", label: "Long (1–2 minutes)", price: 650 },
  { id: "extended-long", label: "Extended Long (2–3 minutes)", price: 850 },
  { id: "custom", label: "Custom Length (3+ minutes)", price: null, customQuote: true }
]
```

---

## Step 3: Sound Style / Genre

*Question: "What style fits your brand?"*

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| Clean / Minimal | $50 | **What it is:** Simple, uncluttered sounds with clarity and precision. **Ideal if:** You want modern, professional audio without complexity. **Examples:** Apple product sounds, minimalist tech brands |
| Corporate / Professional | $75 | **What it is:** Polished, business-appropriate audio with broad appeal. **Ideal if:** You need safe, professional audio for corporate applications. **Examples:** Enterprise software, financial services, B2B |
| Modern / Electronic | $100 | **What it is:** Contemporary sounds using synthesizers, digital textures, and modern production. **Ideal if:** You want a tech-forward, innovative audio identity. **Examples:** Intel, Microsoft, tech startups |
| Warm / Organic | $100 | **What it is:** Natural, acoustic-leaning sounds with warmth and humanity. **Ideal if:** You want approachable, friendly, human-feeling audio. **Examples:** Airbnb, wellness brands, organic products |
| Playful / Fun | $100 | **What it is:** Light, cheerful, and approachable sounds with personality. **Ideal if:** You want friendly, engaging audio with character. **Examples:** Duolingo, children's brands, casual games |
| Bold / Energetic | $125 | **What it is:** High-energy, impactful sounds that demand attention. **Ideal if:** You want exciting, dynamic audio that stands out. **Examples:** Sports brands, energy drinks, gaming |
| Retro / Vintage | $125 | **What it is:** Nostalgic sounds inspired by past eras (8-bit, analog, vintage). **Ideal if:** You want a throwback feel or nostalgic connection. **Examples:** Retro gaming, vintage brands, nostalgia marketing |
| Luxury / Premium | $150 | **What it is:** Sophisticated, high-end audio with refinement and elegance. **Ideal if:** You're a premium brand requiring exclusive-feeling sound. **Examples:** Mercedes, Mastercard, luxury fashion |
| Cinematic / Epic | $175 | **What it is:** Dramatic, orchestral, or film-score inspired audio. **Ideal if:** You want grand, emotional, story-driven sound. **Examples:** Movie studios, gaming, premium launches |
| Custom Style | Custom quote | **What it is:** A completely unique sonic palette developed for your brand. **Ideal if:** You want a signature sound no one else has. **Examples:** Bespoke audio identities for major brands |

```javascript
const styleOptions = [
  { id: "clean", label: "Clean / Minimal", price: 50 },
  { id: "corporate", label: "Corporate / Professional", price: 75 },
  { id: "modern", label: "Modern / Electronic", price: 100 },
  { id: "warm", label: "Warm / Organic", price: 100 },
  { id: "playful", label: "Playful / Fun", price: 100 },
  { id: "bold", label: "Bold / Energetic", price: 125 },
  { id: "retro", label: "Retro / Vintage", price: 125 },
  { id: "luxury", label: "Luxury / Premium", price: 150 },
  { id: "cinematic", label: "Cinematic / Epic", price: 175 },
  { id: "custom", label: "Custom Style", price: null, customQuote: true }
]
```

---

## Step 4: Production Complexity

*Question: "How complex does the production need to be?"*

**Default:** Standard

| Option | Price | Tooltip |
|--------|-------|---------|
| Simple | $75 | **What it is:** Basic production — single instrument, simple melody, minimal layers. **Ideal if:** You need clean, straightforward audio without complexity. **Examples:** Basic notifications, simple stingers |
| Standard | $175 | **What it is:** Professional production — multiple elements, proper mixing, polished sound. **Ideal if:** You want quality audio with depth and professionalism. **Examples:** Most brand audio, standard intros |
| Complex | $325 | **What it is:** Advanced production — multiple instruments, detailed arrangement, sophisticated mixing. **Ideal if:** You need rich, layered audio with multiple elements. **Examples:** Full jingles, detailed soundscapes, orchestral elements |
| Premium | $500+ | **What it is:** High-end production — studio musicians, custom recording, mastering, full production value. **Ideal if:** Quality is paramount and audio represents your brand at the highest level. **Examples:** TV commercials, major brand sonic logos, broadcast quality |

```javascript
const complexityOptions = [
  { id: "simple", label: "Simple", price: 75 },
  { id: "standard", label: "Standard", price: 175 },
  { id: "complex", label: "Complex", price: 325 },
  { id: "premium", label: "Premium", price: 500, startsAt: true }
]
```

---

## Step 5: Quantity & Variations

*Question: "How many sounds or variations do you need?"*

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| Single Sound | $0 | **What it is:** One final audio piece. **Ideal if:** You need one definitive sound. **Examples:** Single sonic logo, one ringtone |
| 2–3 Variations | $100 | **What it is:** The same core sound with slight variations (length, intensity, instrumentation). **Ideal if:** You need flexibility for different contexts. **Examples:** Long/short versions, full/minimal versions |
| 4–6 Variations | $200 | **What it is:** Extended variation package for multiple use cases. **Ideal if:** You need the sound adapted for various platforms. **Examples:** Social, broadcast, app, notification versions |
| Sound Package (7–10) | $350 | **What it is:** A collection of related sounds for comprehensive coverage. **Ideal if:** You need a full set of branded audio. **Examples:** App sound packages, notification sets |
| Sound System (11–15) | $500 | **What it is:** A complete audio system with multiple sound types. **Ideal if:** You're building a full audio identity. **Examples:** Complete app audio, multi-touch brand sounds |
| Full Library (16+) | Custom quote | **What it is:** Extensive sound library covering all brand needs. **Ideal if:** You need comprehensive audio across all touchpoints. **Examples:** Full brand audio systems |

```javascript
const quantityOptions = [
  { id: "single", label: "Single Sound", price: 0 },
  { id: "2-3", label: "2–3 Variations", price: 100 },
  { id: "4-6", label: "4–6 Variations", price: 200 },
  { id: "7-10", label: "Sound Package (7–10)", price: 350 },
  { id: "11-15", label: "Sound System (11–15)", price: 500 },
  { id: "16+", label: "Full Library (16+)", price: null, customQuote: true }
]
```

---

## Step 6: Add-on Services

*Question: "Select any additional services you need."*

Each add-on can be **selected/deselected** and has options where applicable.

---

### Voiceover / Voice Tag

**Default:** Based on Step 1 recommendation

| Option | Price | Tooltip |
|--------|-------|---------|
| None | $0 | **What it is:** Instrumental/sound only, no voice. **Ideal if:** You want pure audio branding without spoken elements. **Examples:** Most sonic logos, UI sounds |
| Voice Tag (Short) | $75 | **What it is:** Brief spoken brand name or tagline (under 5 words). **Ideal if:** You want your brand name spoken as part of the audio. **Examples:** "This is Spotify," brand name stingers |
| Voiceover (Client Provides) | $50 | **What it is:** We integrate voice audio you provide into the sound design. **Ideal if:** You have existing VO or a specific voice you want to use. **Examples:** Using your own talent |
| Voiceover (We Source) | $150+ | **What it is:** Professional voice artist for longer scripts or messaging. **Ideal if:** You need hold messages, IVR prompts, or narrated content. **Examples:** Phone system messages, podcast intros with narration |

```javascript
const voiceoverOptions = [
  { id: "none", label: "None", price: 0 },
  { id: "tag", label: "Voice Tag (Short)", price: 75 },
  { id: "vo-client", label: "Voiceover (Client Provides)", price: 50 },
  { id: "vo-source", label: "Voiceover (We Source)", price: 150, startsAt: true }
]
```

---

### Lyrics / Sung Vocals

**Default:** None (Instrumental)

| Option | Price | Tooltip |
|--------|-------|---------|
| None (Instrumental) | $0 | **What it is:** Music only, no singing. **Ideal if:** You want instrumental audio branding. **Examples:** Most sonic logos, background music |
| Simple Lyrics | $150 | **What it is:** Basic sung hook or tagline (one line, simple melody). **Ideal if:** You want a catchy sung element without full songwriting. **Examples:** "Ba da ba ba ba" (McDonald's), short sung hooks |
| Full Lyrics + Vocals | $350+ | **What it is:** Complete lyrics with professional vocalist for a full jingle. **Ideal if:** You want a memorable, fully-sung brand jingle. **Examples:** Full advertising jingles, brand songs |

```javascript
const lyricsOptions = [
  { id: "none", label: "None (Instrumental)", price: 0 },
  { id: "simple", label: "Simple Lyrics", price: 150 },
  { id: "full", label: "Full Lyrics + Vocals", price: 350, startsAt: true }
]
```

---

### Sound Design Add-ons

**Default:** None selected (unless recommended)

| Option | Price | Tooltip |
|--------|-------|---------|
| Loopable Version | $50 | **What it is:** Audio engineered to loop seamlessly. **Ideal if:** You need hold music, ambient audio, or app backgrounds that repeat. **Examples:** Hold music, meditation apps, ambient soundscapes |
| Stems / Layers | $75 | **What it is:** Individual audio layers delivered separately. **Ideal if:** You want to mix/remix elements yourself or need flexible editing. **Examples:** Music stems, isolated vocals, separate instruments |
| Mnemonic Development | $150 | **What it is:** Strategic development of a memorable audio signature. **Ideal if:** You want a scientifically-designed memorable sound. **Examples:** Intel bong, NBC chimes — designed for recall |

```javascript
const soundDesignAddOns = [
  { id: "loop", label: "Loopable Version", price: 50 },
  { id: "stems", label: "Stems / Layers", price: 75 },
  { id: "mnemonic", label: "Mnemonic Development", price: 150 }
]
```

---

### Revisions

**Default:** Standard (2 rounds) — Included

| Option | Price | Tooltip |
|--------|-------|---------|
| Standard (2 rounds) | Included | **What it is:** Two rounds of revisions included. **Ideal if:** Most projects — covers typical feedback cycles. |
| Extended (4 rounds) | +$100 | **What it is:** Four rounds for more iteration. **Ideal if:** Multiple stakeholders or expected revisions. **Examples:** Committee approvals, brand reviews |
| Unlimited | +$200 | **What it is:** Unlimited revisions until satisfied. **Ideal if:** You need flexibility on feedback cycles. **Examples:** High-stakes content, perfectionist clients |

```javascript
const revisionOptions = [
  { id: "standard", label: "Standard (2 rounds)", price: 0, included: true },
  { id: "extended", label: "Extended (4 rounds)", price: 100 },
  { id: "unlimited", label: "Unlimited", price: 200 }
]
```

---

## Step 7: Deliverables & Licensing

*Question: "What file formats and usage rights do you need?"*

---

### File Formats

**Default:** Standard (MP3 + WAV) — Included

| Option | Price | Tooltip |
|--------|-------|---------|
| Standard (MP3 + WAV) | Included | **What it is:** High-quality audio files for most uses. **Ideal if:** You need files for general digital use. **Examples:** Web, social, most applications |
| Mobile Optimized (M4R + OGG) | +$50 | **What it is:** Formats specifically for iOS and Android devices. **Ideal if:** You're creating ringtones or app sounds. **Examples:** iPhone ringtones (M4R), Android notifications (OGG) |
| Broadcast Ready | +$75 | **What it is:** Broadcast-spec files meeting TV/radio standards. **Ideal if:** Your audio will be used in broadcast advertising. **Examples:** TV commercials, radio spots |
| All Formats Package | +$100 | **What it is:** Every format you might need — MP3, WAV, AIFF, M4R, OGG, FLAC. **Ideal if:** You want maximum flexibility across all platforms. **Examples:** Multi-platform distribution |

```javascript
const formatOptions = [
  { id: "standard", label: "Standard (MP3 + WAV)", price: 0, included: true },
  { id: "mobile", label: "Mobile Optimized (M4R + OGG)", price: 50 },
  { id: "broadcast", label: "Broadcast Ready", price: 75 },
  { id: "all", label: "All Formats Package", price: 100 }
]
```

---

### Project Files

**Default:** Final Audio Only — Included

| Option | Price | Tooltip |
|--------|-------|---------|
| Final Audio Only | Included | **What it is:** Finished, rendered audio files. **Ideal if:** You just need the end product. **Examples:** Most standard projects |
| Project Files Included | +$100 | **What it is:** Original DAW project files (Logic, Ableton, Pro Tools). **Ideal if:** You want to make future edits or have an audio team. **Examples:** In-house audio teams, future modifications |

```javascript
const projectFileOptions = [
  { id: "final", label: "Final Audio Only", price: 0, included: true },
  { id: "project", label: "Project Files Included", price: 100 }
]
```

---

### Usage License

**Default:** Standard (Digital + Broadcast) — Included

| Option | Price | Tooltip |
|--------|-------|---------|
| Standard (Digital + Broadcast) | Included | **What it is:** Use audio across digital platforms and broadcast. **Ideal if:** Standard business use — apps, web, social, TV, radio. **Examples:** Most business applications |
| Extended (Products / Resale) | +$150 | **What it is:** Use audio on products for sale (devices, toys, merchandise). **Ideal if:** The sound will be embedded in physical products. **Examples:** Device sounds, toy sounds, hardware products |
| Exclusive Rights | +$350+ | **What it is:** Full ownership — we won't license this sound to anyone else. **Ideal if:** You need complete exclusivity for your sonic identity. **Examples:** Signature brand sounds, competitive advantage |

```javascript
const licenseOptions = [
  { id: "standard", label: "Standard (Digital + Broadcast)", price: 0, included: true },
  { id: "extended", label: "Extended (Products / Resale)", price: 150 },
  { id: "exclusive", label: "Exclusive Rights", price: 350, startsAt: true }
]
```

---

## Step 8: Timeline

*Question: "When do you need this completed?"*

**Default:** Standard (1–2 weeks)

| Option | Price Impact | Tooltip |
|--------|--------------|---------|
| Flexible | +0% | **What it is:** We schedule based on workload. **Ideal if:** No hard deadline. Typically 1–2 weeks. |
| Standard (1–2 weeks) | +0% | **What it is:** Normal turnaround for most audio projects. **Ideal if:** You have a reasonable deadline. |
| Expedited (5–7 days) | +25% | **What it is:** Accelerated delivery with priority scheduling. **Ideal if:** You have a firm deadline approaching. |
| Rush (Under 5 days) | +50% | **What it is:** Rush delivery with dedicated resources. **Ideal if:** You need it ASAP. Subject to scope limitations. |

```javascript
const timelineOptions = [
  { id: "flexible", label: "Flexible", multiplier: 1.0 },
  { id: "standard", label: "Standard (1–2 weeks)", multiplier: 1.0 },
  { id: "expedited", label: "Expedited (5–7 days)", multiplier: 1.25 },
  { id: "rush", label: "Rush (Under 5 days)", multiplier: 1.50 }
]
```

---

## Summary Screen

### UI Elements

1. **Selection Summary Table**
   - Lists each selection with chosen option and price
   - Shows included items (revisions, standard formats, standard license)
   - Editable — clicking any row returns to that step

2. **Price Calculation Display**
   ```
   YOUR CUSTOM SOUND PLAN
   ────────────────────────────────────────

   Duration                    Short (1–3 seconds)         $100
   Style                       Modern / Electronic         $100
   Complexity                  Standard                    $175
   Variations                  2–3 Variations              $100
   Voiceover                   None                        $0
   Lyrics                      None                        $0
   Add-ons                     Mnemonic Development        $150
   Formats                     All Formats Package         $100
   License                     Exclusive Rights            $350
   Timeline                    Standard (1–2 weeks)        +0%

   ────────────────────────────────────────
   Subtotal                                                $1,075
   ────────────────────────────────────────
   TOTAL                                                   $1,075

   Includes: 2 revision rounds, standard license

   [ Adjust Plan ]                      [ Generate Quote ]
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

Thanks, [Name]! We've received your custom sound plan.

What's next:
• We'll review your selections within 24–48 hours
• You'll receive a detailed proposal via email
• We'll schedule a kickoff call to discuss creative direction

Your Reference: #SND-[timestamp]
```

---

## Data Models

### Builder State

```javascript
const builderState = {
  // Step 1
  soundType: "sonic-logo", // info only, no price
  
  // Step 2
  duration: {
    selected: "short",
    price: 100
  },
  
  // Step 3
  style: {
    selected: "modern",
    price: 100
  },
  
  // Step 4
  complexity: {
    selected: "standard",
    price: 175
  },
  
  // Step 5
  quantity: {
    selected: "2-3",
    price: 100
  },
  
  // Step 6 - Add-ons
  addOns: {
    voiceover: { selected: "none", price: 0 },
    lyrics: { selected: "none", price: 0 },
    soundDesign: [
      { id: "mnemonic", price: 150 }
    ],
    revisions: { selected: "standard", price: 0 }
  },
  
  // Step 7 - Deliverables
  deliverables: {
    formats: { selected: "all", price: 100 },
    projectFiles: { selected: "final", price: 0 },
    license: { selected: "exclusive", price: 350 }
  },
  
  // Step 8
  timeline: {
    selected: "standard",
    multiplier: 1.0
  },
  
  // Calculated
  subtotal: 1075,
  rushFee: 0,
  total: 1075,
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
  let subtotal = 0;
  let hasCustomQuote = false;
  
  // Duration
  if (state.duration.price === null) {
    hasCustomQuote = true;
  } else {
    subtotal += state.duration.price;
  }
  
  // Style
  if (state.style.price === null) {
    hasCustomQuote = true;
  } else {
    subtotal += state.style.price;
  }
  
  // Complexity
  subtotal += state.complexity.price;
  
  // Quantity
  if (state.quantity.price === null) {
    hasCustomQuote = true;
  } else {
    subtotal += state.quantity.price;
  }
  
  // Add-ons - Voiceover
  subtotal += state.addOns.voiceover.price;
  
  // Add-ons - Lyrics
  subtotal += state.addOns.lyrics.price;
  
  // Add-ons - Sound Design
  state.addOns.soundDesign.forEach(addon => {
    subtotal += addon.price;
  });
  
  // Add-ons - Revisions
  subtotal += state.addOns.revisions.price;
  
  // Deliverables - Formats
  subtotal += state.deliverables.formats.price;
  
  // Deliverables - Project Files
  subtotal += state.deliverables.projectFiles.price;
  
  // Deliverables - License
  subtotal += state.deliverables.license.price;
  
  // Timeline multiplier
  const multiplier = state.timeline.multiplier;
  const rushFee = subtotal * (multiplier - 1);
  const total = subtotal * multiplier;
  
  return {
    subtotal: subtotal,
    rushFee: rushFee,
    total: total,
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

### Add-on Selection UI
- Voiceover/Lyrics: Single-select radio buttons
- Sound Design Add-ons: Multi-select checkboxes
- Show price next to each option
- Default selections pre-checked based on sound type

### Real-time Price Update
- Sticky footer or sidebar showing running total
- Animates when price changes
- Shows "Custom quote required" badge if any selection triggers it

### Mobile Considerations
- Single column layout
- Collapsible sections for add-ons and deliverables
- Bottom sheet for tooltips
- Sticky CTA button at bottom
- Swipe navigation between steps

---

## Price Summary Tables

### Quick Reference - Core Options

| Category | Option | Price |
|----------|--------|-------|
| **Duration** | Micro (Under 1s) | $50 |
| | Short (1–3s) | $100 |
| | Medium (4–10s) | $175 |
| | Standard (11–30s) | $300 |
| | Extended (31–60s) | $450 |
| | Long (1–2 min) | $650 |
| | Extended Long (2–3 min) | $850 |
| | Custom (3+ min) | Custom |
| **Style** | Clean / Minimal | $50 |
| | Corporate / Professional | $75 |
| | Modern / Electronic | $100 |
| | Warm / Organic | $100 |
| | Playful / Fun | $100 |
| | Bold / Energetic | $125 |
| | Retro / Vintage | $125 |
| | Luxury / Premium | $150 |
| | Cinematic / Epic | $175 |
| | Custom Style | Custom |
| **Complexity** | Simple | $75 |
| | Standard | $175 |
| | Complex | $325 |
| | Premium | $500+ |
| **Quantity** | Single Sound | $0 |
| | 2–3 Variations | $100 |
| | 4–6 Variations | $200 |
| | Sound Package (7–10) | $350 |
| | Sound System (11–15) | $500 |
| | Full Library (16+) | Custom |

### Quick Reference - Add-ons

| Add-on | Option | Price |
|--------|--------|-------|
| **Voiceover** | None | $0 |
| | Voice Tag (Short) | $75 |
| | VO (Client Provides) | $50 |
| | VO (We Source) | $150+ |
| **Lyrics** | None (Instrumental) | $0 |
| | Simple Lyrics | $150 |
| | Full Lyrics + Vocals | $350+ |
| **Sound Design** | Loopable Version | $50 |
| | Stems / Layers | $75 |
| | Mnemonic Development | $150 |
| **Revisions** | Standard (2) | Included |
| | Extended (4) | $100 |
| | Unlimited | $200 |

### Quick Reference - Deliverables

| Deliverable | Option | Price |
|-------------|--------|-------|
| **Formats** | Standard (MP3 + WAV) | Included |
| | Mobile Optimized | $50 |
| | Broadcast Ready | $75 |
| | All Formats | $100 |
| **Project Files** | Final Audio Only | Included |
| | Project Files | $100 |
| **License** | Standard (Digital + Broadcast) | Included |
| | Extended (Products/Resale) | $150 |
| | Exclusive Rights | $350+ |

### Quick Reference - Timeline

| Timeline | Multiplier |
|----------|------------|
| Flexible | +0% |
| Standard (1–2 weeks) | +0% |
| Expedited (5–7 days) | +25% |
| Rush (Under 5 days) | +50% |

---

## Price Examples

### Example 1: Simple App Notification Sound

| Selection | Option | Price |
|-----------|--------|-------|
| Duration | Micro (Under 1s) | $50 |
| Style | Clean / Minimal | $50 |
| Complexity | Simple | $75 |
| Quantity | Single Sound | $0 |
| Formats | Mobile Optimized | $50 |
| Timeline | Standard | +0% |

**Total: $225**

---

### Example 2: Sonic Logo Package

| Selection | Option | Price |
|-----------|--------|-------|
| Duration | Short (1–3s) | $100 |
| Style | Modern / Electronic | $100 |
| Complexity | Standard | $175 |
| Quantity | 4–6 Variations | $200 |
| Add-ons | Mnemonic Development | $150 |
| Formats | All Formats | $100 |
| License | Exclusive | $350 |
| Timeline | Standard | +0% |

**Total: $1,175**

---

### Example 3: Podcast Intro/Outro

| Selection | Option | Price |
|-----------|--------|-------|
| Duration | Standard (11–30s) | $300 |
| Style | Warm / Organic | $100 |
| Complexity | Standard | $175 |
| Quantity | 2–3 Variations | $100 |
| Voiceover | We Source | $150 |
| Formats | Standard | Included |
| Timeline | Expedited | +25% |

**Subtotal: $825**
**Rush Fee (25%): $206.25**
**Total: $1,031.25**

---

### Example 4: Full App Sound Package

| Selection | Option | Price |
|-----------|--------|-------|
| Duration | Micro (Under 1s) | $50 |
| Style | Playful / Fun | $100 |
| Complexity | Standard | $175 |
| Quantity | Sound Package (7–10) | $350 |
| Formats | Mobile Optimized | $50 |
| Project Files | Included | $100 |
| Timeline | Standard | +0% |

**Total: $825**

---

### Example 5: Brand Jingle with Vocals

| Selection | Option | Price |
|-----------|--------|-------|
| Duration | Standard (11–30s) | $300 |
| Style | Bold / Energetic | $125 |
| Complexity | Complex | $325 |
| Quantity | 2–3 Variations | $100 |
| Lyrics | Full Lyrics + Vocals | $350 |
| Formats | Broadcast Ready | $75 |
| License | Exclusive | $350 |
| Revisions | Extended | $100 |
| Timeline | Standard | +0% |

**Total: $1,725**

---

### Example 6: Hold Music System

| Selection | Option | Price |
|-----------|--------|-------|
| Duration | Long (1–2 min) | $650 |
| Style | Corporate / Professional | $75 |
| Complexity | Simple | $75 |
| Quantity | Single Sound | $0 |
| Voiceover | We Source | $150 |
| Add-ons | Loopable Version | $50 |
| Formats | Standard | Included |
| Timeline | Standard | +0% |

**Total: $1,000**

---

### Example 7: Full Audio Brand System

| Selection | Option | Price |
|-----------|--------|-------|
| Duration | Standard (11–30s) | $300 |
| Style | Luxury / Premium | $150 |
| Complexity | Complex | $325 |
| Quantity | Sound System (11–15) | $500 |
| Voiceover | Voice Tag | $75 |
| Add-ons | Mnemonic Development | $150 |
| Add-ons | Stems / Layers | $75 |
| Formats | All Formats | $100 |
| Project Files | Included | $100 |
| License | Exclusive | $350 |
| Revisions | Extended | $100 |
| Timeline | Standard | +0% |

**Total: $2,225**

---

## Integration Notes

- This custom builder lives alongside the standard tier selection (Essential/Pro/Enterprise)
- Customer can switch between "Choose a Package" and "Build Custom" views
- If custom total is close to a tier price, optionally suggest the tier as simpler option
- All data structures are API-ready for future backend integration
- Sound type recommendations should guide users toward appropriate selections
- Consider showing "Popular for [Sound Type]" badges on recommended options
- Audio previews/examples could enhance the selection experience (Phase 2)
