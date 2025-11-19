# Vercel 404 Error - Troubleshooting Guide

## Issue
Your Next.js app shows a 404 NOT_FOUND error on Vercel deployment.

## Root Cause
Most likely: **Missing environment variables on Vercel**

## ✅ Solution Checklist

### 1. Add Environment Variables to Vercel

Go to your Vercel project dashboard:
1. Navigate to **Settings** → **Environment Variables**
2. Add these two variables for **all environments** (Production, Preview, Development):

```
NEXT_PUBLIC_SUPABASE_URL=https://umgfyreylymqhlrdlrbr.supabase.co
```

```
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtZ2Z5cmV5bHltcWhscmRscmJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2OTEyNTUsImV4cCI6MjA1ODI2NzI1NX0.sifdnDoqW8HYKGEy6_1DyAS6hsXxPGQ1RuDeyIIUEIU
```

3. Click **Save**

### 2. Redeploy

After adding environment variables:
- Go to **Deployments** tab
- Click the **three dots (•••)** on the latest deployment
- Select **Redeploy**
- ✅ Check "Use existing Build Cache" or leave it unchecked for a fresh build

### 3. Verify Files Are Committed

Make sure these files are in your repository:
- ✅ `proxy.ts` (your middleware)
- ✅ `app/page.tsx`
- ✅ `app/layout.tsx`
- ✅ All auth pages under `app/auth/`

Run:
```bash
git status
git add .
git commit -m "Ensure all files are committed"
git push
```

### 4. Check Vercel Build Logs

If still not working:
1. Go to your deployment in Vercel
2. Click on the deployment
3. Check the **Build Logs** tab
4. Look for any errors during build

### 5. Verify Build Output

Your build should show:
```
Route (app)
┌ ○ /                    ← Your home page
├ ○ /auth/login
├ ○ /auth/sign-up
└ ƒ Proxy (Middleware)   ← Your proxy.ts
```

## Common Issues

### Issue: Still 404 after adding env vars
**Solution**: Clear Vercel's build cache
- Settings → General → scroll to "Build & Development Settings"
- Redeploy with cache cleared

### Issue: Environment variables not taking effect
**Solution**: Make sure you selected **all environments** when adding them
- Production ✅
- Preview ✅  
- Development ✅

### Issue: Build succeeds but 404 persists
**Solution**: Check if you have a custom domain that needs DNS propagation time (up to 48 hours)

## Test Your Deployment

Once redeployed, visit:
- `https://your-app.vercel.app/` - Should show your hero page
- `https://your-app.vercel.app/auth/login` - Should show login page
- `https://your-app.vercel.app/auth/sign-up` - Should show sign up page

## About the "Ignored build scripts" Warning

If you see this warning during Vercel deployment:
```
Warning: Ignored build scripts: sharp, unrs-resolver.
```

**This is normal and safe to ignore.** It's just informational and doesn't affect your deployment. These packages (`sharp` and `unrs-resolver`) are used by Next.js for image optimization and are handled correctly by Vercel.

## Still Having Issues?

Run this locally to verify your build:
```bash
pnpm build
pnpm start
```

Then visit `http://localhost:3000` - if it works locally but not on Vercel, the issue is definitely with Vercel configuration.

