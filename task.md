# Avaai Project - MaxVideoAI Clone Build

## Project Goal
Build a visual clone of MaxVideoAI with same functionality and look/feel, but branded as "Avaai" and built with simpler tech stack.

## Project Phases

### Phase 1: Research & Planning
- [x] Research entire maxvideoai.com live site
- [x] Examine repository files and assets
- [x] Document findings in local research.md
- [ ] Create implementation plan

### Phase 2: Project Setup
- [x] Set up Next.js 15 project structure in /new-app
- [x] Configure Supabase integration (from frontend/.env.local)
- [/] Set up AI Studio API integration (package installed, needs API key)
- [x] Create Avaai logo
- [x] Initial git commit after baseline setup (commit: 70368c6)

### Phase 3: Core UI Build
- [x] Build homepage layout
- [x] Build navigation/header
- [x] Build footer
- [x] Create common components
- [x] Implement responsive design

### Phase 4: Authentication
- [x] Build sign up page
- [x] Build login page
- [x] Implement Supabase auth
- [x] Create protected routes
- [x] Add 100 free credits on signup

### Phase 5: Video Generation
- [x] Build generation page UI
- [x] Integrate AI Studio API (temporary)
- [x] Implement model selection
- [x] Add credit system
- [x] Build FAL.ai integration layer (for easy swap)

### Phase 6: User Dashboard
- [x] Build video history page
- [x] Display video status tracking
- [x] Video playback functionality
- [x] Build account page with credit balance
- [x] Credit management display
- [x] Payment UI integration points

### Phase 7: Additional Features
- [x] Build examples gallery page
- [x] Build models page with all AI engines
- [x] Build pricing page with packages
- [x] Add placeholder docs page
- [x] Create FAQ section
- [x] **Add 15 video assets from MaxVideoAI**
- [x] **Expand model library to 15 AI engines**

### Phase 8: Visual Design Polish (NEW - See DESIGN_FIXES.md)

#### 8.1 Critical Visual Updates
- [x] **Custom video player** (Examples page - replaced HTML5 controls)
  - [x] Remove default browser controls
  - [x] Add custom play overlay
  - [x] Implement play-on-hover
  - [x] Styled minimal controls
- [x] **Video Details Page** (New Feature)
  - [x] Create `/video/[id]` dynamic route
  - [x] Build layout (large player, prompt details, model info)
  [x] Connect "Clone" button to generator
  - [x] Link from Examples page cards
- [x] **Hero video cards** (Homepage)
  - [x] Add 2-3 autoplay video cards below CTAs
  - [x] Show model name, price ($), clone button
  - [x] Autoplay muted videos
- [x] **Legal & Info Pages**
  - [x] About, Contact, Privacy, Terms, Custom 404
  - [x] Contact form with map integration
- [ ] **Pricing page redesign**
  - [ ] Remove SaaS tier cards
  - [ ] Build interactive cost estimator
  - [ ] Model dropdown + duration slider
  - [ ] Live price calculation

#### 8.2 Card & Styling Polish
- [ ] Color-themed model cards (purple for Sora, blue for Veo, etc.)
- [ ] Color-coded filter buttons on Examples page
- [ ] Global border-radius increase (1rem minimum)
- [x] Softer shadows on all cards
- [x] Hover animations (lift + shadow)

#### 8.3 Final Polish
- [ ] Typography refinement (Inter font, proper weights)
- [ ] Masonry grid layout for Examples
- [ ] Meta badges on homepage hero
- [ ] "Works with" section redesign
- [ ] Background gradients and visual depth

### Phase 9: Testing & Deployment
- [ ] Local testing
- [ ] Deploy to Vercel
- [ ] Client demo preparation
