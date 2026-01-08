# Avaai Deployment Guide

## 🎉 Live Site

**Production URL:** https://avaai-app.vercel.app

**Repository:** https://github.com/pnesden/avaai-app

**Status:** ✅ Deployed and functional

---

## Deployment Details

**Platform:** Vercel  
**Framework:** Next.js 15 (App Router)  
**Deployed:** January 8, 2026  
**Auto-deploy:** Enabled (pushes to `main` branch auto-deploy)

---

## Environment Variables (Production)

Currently configured on Vercel:

```
NEXT_PUBLIC_SUPABASE_URL=https://lqfyxfrogekwxkctutqq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ... (configured)
```

---

## What's Working

✅ **All Pages:**
- Homepage with hero video cards
- Examples gallery with filters
- Video details pages
- Models showcase
- Pricing page
- Authentication (login/signup)
- Protected routes (generate, history, account)

✅ **Features:**
- Custom video player with hover-to-play
- Video navigation and details
- User authentication via Supabase
- Credit system (tracking only, no purchases yet)
- Responsive design

---

## What Needs Integration

### 1. Video Generation (FAL.ai)
**Time:** 5 minutes  
**Steps:**
1. Get API key from https://fal.ai
2. Add to Vercel: Settings → Environment Variables
   - Key: `FAL_API_KEY`
   - Value: `your_fal_key_here`
3. Redeploy (or wait for auto-deploy on next push)

### 2. Payment Processing (Stripe)
**Time:** 2-3 hours development  
**What's needed:**
- Stripe account setup
- Payment flow implementation
- Webhook handler for processing
- Credit top-up on successful payment

### 3. Content Management (Optional)
**Time:** 4-6 hours development  
**What's needed:**
- Admin panel UI
- Database-driven content
- CRUD operations for videos

---

## Updating the Live Site

**Method 1: Push to GitHub (Recommended)**
```bash
cd c:\Users\PeterNesden\Desktop\avaai.me\new-app
# Make your changes
git add .
git commit -m "Your change description"
git push
```
Vercel will auto-deploy in ~2 minutes.

**Method 2: Vercel CLI**
```bash
npm install -g vercel
vercel --prod
```

**Method 3: Manual Redeploy**
- Go to https://vercel.com/pnesden/avaai-app
- Click "Deployments" → "..." → "Redeploy"

---

## Adding Environment Variables

1. Go to https://vercel.com/pnesden/avaai-app/settings/environment-variables
2. Add new variable:
   - **Key:** Variable name
   - **Value:** Variable value
   - **Environment:** Production (and/or Preview, Development)
3. Click "Save"
4. Redeploy for changes to take effect

---

## Custom Domain (Optional)

To add a custom domain:
1. Go to https://vercel.com/pnesden/avaai-app/settings/domains
2. Add your domain (e.g., `avaai.app`)
3. Configure DNS records as instructed
4. Vercel will auto-provision SSL certificate

---

## Monitoring & Logs

**View Logs:**
- https://vercel.com/pnesden/avaai-app/logs

**Analytics:**
- https://vercel.com/pnesden/avaai-app/analytics

**Performance:**
- https://vercel.com/pnesden/avaai-app/speed-insights

---

## Troubleshooting

**Site not updating after push?**
- Check GitHub Actions / Vercel deployments tab
- Verify push went to `main` branch
- Check build logs for errors

**Environment variables not working?**
- Ensure they're set for "Production" environment
- Redeploy after adding new variables
- Check variable names match code exactly

**Build failing?**
- Check build logs in Vercel dashboard
- Verify all dependencies in `package.json`
- Test build locally: `npm run build`

---

## Next Steps

1. ✅ Site is live - share the link!
2. Test all pages and features
3. Add FAL API key when ready for video generation
4. Set up Stripe when ready for payments
5. Consider custom domain
6. Monitor analytics and user feedback

---

## Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Supabase Docs:** https://supabase.com/docs
- **FAL.ai Docs:** https://fal.ai/docs
