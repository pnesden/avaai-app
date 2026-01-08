# Visual Design Fix List
**Avaai vs MaxVideoAI - Detailed Comparison & Required Fixes**

Generated: 2026-01-08

## Status Summary
- **Structure/Content:** ✅ 90% Complete (pages, routes, functionality)
- **Visual Design:** ⚠️ 40-50% Complete (styling, polish, UX)

---

## 🏠 Homepage Fixes

### Critical Issues
1. **✅ Hero Video Cards** (COMPLETED)
   - [x] Add large autoplay video cards directly below CTA buttons
   - [x] Each card should show: video preview, model name, price in $, "Clone settings" button
   - [x] Videos should autoplay (muted) on page load
   - [x] Should be 2-3 featured videos in a row

2. **Missing Meta Badges**
   - [ ] Add rounded badge above main title (e.g., "PAY-AS-YOU-GO")
   - [ ] Style: pill-shaped, subtle background, small text

3. **"Works With" Section Redesign**
   - [ ] Replace text list with clean horizontal brand names
   - [ ] Remove generic icons, use actual brand logos if available
   - [ ] Simpler, cleaner presentation

### Style Issues
- [ ] Add subtle background gradients to sections
- [ ] Soften shadows on all cards
- [ ] Reduce border contrast (too harsh currently)

---

## 🎬 Examples Page Fixes

### Critical Issues
1. **✅ Video Player Overhaul** (COMPLETED - Custom VideoPlayer component)
   - [x] Remove default HTML5 controls (the "1990s" look)
   - [x] Create custom minimal player overlay
   - [x] Implement **play-on-hover** functionality
   - [x] Add subtle play icon overlay when not playing
   - [x] Videos should autoplay (muted) on hover

2. **Filter Bar Enhancement**
   - [ ] Add color-coded buttons per model
     - Sora: Purple
     - Veo: Blue
     - Runway: Pink/Magenta
     - Pika: Green
     - Kling: Teal
     - Luma: Orange
   - [ ] Sophisticated "ENGINES" label on filter bar

3. **Card Data Fields**
   - [ ] Change "Credits" to show price in **USD ($)**
   - [ ] Add technical model info (version, speed tier)
   - [ ] Show duration (e.g., "8s", "10s")
   - [ ] Keep aspect ratio display

### Style Issues
- [ ] Implement **masonry/varying height grid** (not uniform)
- [ ] Add hover animations on cards (lift, shadow)
- [ ] Improve card spacing and visual hierarchy

---

## ✅ Legal & Info Pages (COMPLETED)

**All pages created with professional layouts:**
- [x] About page - Company info, mission, supported models
- [x] Contact page - Form with validation, Google Maps embed (Hong Kong office), business hours
- [x] Privacy Policy - Standard legal boilerplate
- [x] Terms of Service - Standard legal boilerplate  
- [x] Custom 404 page - Branded error page with navigation

---

## 🤖 Models Page Fixes

### Critical Issues
1. **Color-Themed Cards**
   - [ ] Apply brand-specific background colors:
     - Sora cards: Light purple tint
     - Veo cards: Light blue tint
     - Runway cards: Light pink tint
     - Pika cards: Light green tint
     - Others: Appropriate brand colors
   - [ ] Not just white/grey for every model

2. **Badge System Update**
   - [ ] Replace generic "LIVE" badges with version-specific badges
   - [ ] Examples: "PRO", "3.1 FAST", "GEN 3", "2.2"
   - [ ] Position on card edge, styled per brand

### Style Issues
- [ ] Vary font sizes for visual hierarchy (catalog feel)
- [ ] Add subtle gradients to card backgrounds
- [ ] Improve spacing between model name and description

---

## 💰 Pricing Page - MAJOR REDESIGN NEEDED

### Critical Issues
1. **Wrong Pricing Model**
   - Current: SaaS-style tiers (Starter $20, Pro $50, Premium $100)
   - MaxVideoAI: **Interactive Cost Estimator** - pay per use
   
2. **Required Changes**
   - [ ] **Remove** the 3-tier pricing cards entirely
   - [ ] **Create** interactive cost estimator tool:
     - Dropdown: Select model
     - Slider: Select duration
     - Output: Live price calculation in $
   - [ ] Messaging: "Pay only for what you run"
   - [ ] Simple, clean calculator interface

---

## 🎨 Global Styling Fixes

### Apply to ALL Pages

1. **Border Radius**
   - [ ] Increase to `border-radius: 1rem` (16px) minimum for cards
   - [ ] Buttons: `border-radius: 9999px` (fully rounded)

2. **Shadows**
   - [ ] Use softer shadows: `box-shadow: 0 4px 20px rgba(0,0,0,0.05)`
   - [ ] Add hover state: `box-shadow: 0 8px 30px rgba(0,0,0,0.1)`

3. **Typography**
   - [ ] Use Inter or similar modern sans-serif
   - [ ] Distinct font weights (400 for body, 600 for headings, 700 for titles)
   - [ ] Improve line heights for readability

4. **Color Palette Refinement**
   - [ ] Soften harsh borders (use lighter grays)
   - [ ] Add subtle background gradients where appropriate
   - [ ] Ensure consistent accent color usage

5. **Animations/Transitions**
   - [ ] Add hover effects to ALL cards (transform, shadow)
   - [ ] Smooth transitions: `transition: all 0.3s ease`
   - [ ] Loading states for videos

---

## 📊 Priority Order for Fixes

### Phase 8.1: Critical Visual Updates
1. Custom video player (Examples page)
2. Hero video cards (Homepage)
3. Pricing page redesign

### Phase 8.2: Card & Styling Polish
4. Color-themed model cards
5. Filter bar colors
6. Global border-radius and shadows

### Phase 8.3: Final Polish
7. Typography refinement
8. Hover animations
9. Spacing and padding adjustments

---

## Notes

- **Structure is solid** - all pages exist, routing works, auth works
- **Visual design needs significant work** - currently looks like a "wireframe with basic styling"
- **Not production-ready visually** - would not match MaxVideoAI brand quality
- **Estimate:** 15-20 additional fixes needed for true visual parity

## Next Steps

User will decide which fixes to tackle first. Recommend starting with:
1. Video player improvements (biggest visual impact)
2. Homepage hero cards (above the fold)
3. Pricing page redesign (completely wrong approach currently)
