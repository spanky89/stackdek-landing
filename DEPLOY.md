# StackDek Landing Page — Deploy to Vercel

## Quick Deploy (5 minutes)

1. **Push to GitHub**
   ```bash
   cd stackdek-landing
   git init
   git add .
   git commit -m "StackDek landing page"
   # Create a repo on github.com, then:
   git remote add origin https://github.com/YOUR_USER/stackdek-landing.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) → Sign up free (use GitHub)
   - Click **"New Project"**
   - Import your `stackdek-landing` repo
   - Framework: **Vite** (auto-detected)
   - Click **Deploy**
   - Done! You get a live URL like `stackdek-landing.vercel.app`

3. **Custom Domain (optional)**
   - In Vercel dashboard → Settings → Domains
   - Add `stackdek.com` or whatever you have
   - Point DNS as instructed

## Local Dev
```bash
npm install
npm run dev
```

## Notes
- Email capture is client-side only (mock). Emails show in a demo table on the page.
- To add real email capture later: swap the form handler to POST to a Supabase table, Google Sheet, or simple API endpoint.
- Tailwind is loaded via CDN — no build step needed for styles.
