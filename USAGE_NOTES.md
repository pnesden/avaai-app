# Avaai Usage & Development Notes

## Current Status (As of 2026-01-08)

### Content Management

**Video Examples Data:**
- **Current Method:** Hardcoded in component files
  - Location: `app/examples/page.tsx` and `app/video/[id]/page.tsx`
  - Data stored in `EXAMPLE_VIDEOS` TypeScript arrays
  - 15 sample videos imported from MaxVideoAI source
  
**To Update Video Data (Current Method):**
1. Open `app/examples/page.tsx` or `app/video/[id]/page.tsx`
2. Locate the `EXAMPLE_VIDEOS` array (near top of file)
3. Edit the relevant fields:
   ```typescript
   {
     id: 1,
     model: 'Sora 2',
     prompt: 'Your actual prompt here (sample prompt for demonstration)',
     videoUrl: '/assets/gallery/video.mp4',
     aspectRatio: '16:9',
     price: 15,
     duration: '10s',
     created: '2024-01-08',
   }
   ```
4. Save, commit to git, and redeploy to Vercel

**Limitations:**
- Requires code access and TypeScript knowledge
- Needs redeployment for every change
- Not suitable for non-technical users

---

### Future Improvement: Admin CMS

**Proposed Solution:**
Build an admin panel to manage video content through a web interface.

**Features:**
- Protected `/admin` route with authentication
- Database-driven content (Supabase table: `example_videos`)
- CRUD operations (Create, Read, Update, Delete)
- Forms for editing prompts, models, prices, metadata
- Optional: Video file upload interface

**Estimated Time to Build:** 4-6 hours
- Database schema setup: 30 min
- Admin UI components: 2 hours
- CRUD API routes: 1.5 hours
- Authentication & permissions: 1 hour
- Testing: 1 hour

**Benefits:**
- No code changes needed for content updates
- Non-technical users can manage content
- Changes reflect immediately (no redeploy)
- Better for production use with real user videos

---

## Site Architecture

### Tech Stack
- **Frontend:** Next.js 15 (App Router)
- **Styling:** Vanilla CSS with CSS variables
- **Database:** Supabase (Postgres)
- **Authentication:** Supabase Auth
- **Deployment:** Vercel

### Route Structure
- `/` - Homepage
- `/examples` - Video gallery (15 sample videos)
- `/video/[id]` - Video details page
- `/models` - AI models showcase (15 engines)
- `/pricing` - Credit packages (SaaS-style tiers)
- `/generate` - Video generation interface (protected)
- `/history` - User's video history (protected)
- `/account` - User account management (protected)
- `/login`, `/signup` - Authentication

---

## Known Limitations & Future Work

### Content
- [ ] Video prompts are sample/placeholder text
- [ ] Only 15 videos (all from MaxVideoAI source repo)
- [ ] No CMS for content management

### Visual Design
- [ ] Homepage missing hero video cards
- [ ] Pricing page uses SaaS tiers instead of cost calculator
- [ ] Cards need color theming (purple for Sora, blue for Veo, etc.)
- [ ] Missing hover animations and masonry grid layout
- [ ] Typography could be refined (Inter font, proper weights)

### Functionality
- [ ] Video generation uses Google AI Studio API (placeholder)
- [ ] No actual video processing/rendering
- [ ] Credit system works but no payment integration
- [ ] No email notifications

---

## Demo Readiness Checklist

**Critical for Demo (Must Have):**
- [x] Homepage loads with hero and features
- [x] Examples page shows video grid with filters
- [x] Video details page displays correctly
- [x] Custom video player with hover-to-play
- [x] Navigation between pages works
- [ ] Homepage hero video cards (high visibility item)
- [ ] Basic styling polish (shadows, spacing)

**Nice to Have (Optional for Demo):**
- [ ] Pricing calculator redesign
- [ ] Color-themed model cards
- [ ] Masonry grid layout
- [ ] Admin CMS
- [ ] Advanced animations

---

## Deployment

**Current Setup:**
- Dev server: `npm run dev` (port 3001)
- Production build: `npm run build`
- Deploy target: Vercel

**Environment Variables Required:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-side)
- `GOOGLE_AI_API_KEY` (optional, for demo video gen)

---

## Update Log

- **2026-01-08:** Initial documentation created
  - 15 videos imported from MaxVideoAI source
  - Video details page rebuilt to match reference layout
  - Custom video player implemented with play-on-hover
  - Video click navigation added
