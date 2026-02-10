# 🚀 StackDek Landing Page — Deploy Guide

> **For Spanky.** Follow these steps top to bottom. You'll have a live URL in ~10 minutes.

---

## Step 1: Initialize Git

Open **Command Prompt** or **PowerShell** and run:

```bash
cd C:\Users\x\.openclaw\workspace\stackdek-landing
git init
git add .
git commit -m "Initial landing page"
```

✅ **You should see:** something like `create mode 100644 index.html` and a commit hash.

> **Already done this before?** Skip to Step 2.

---

## Step 2: Create a GitHub Repo

1. Go to **[github.com/new](https://github.com/new)** (log in if needed)
2. Fill in:
   - **Repository name:** `stackdek-landing`
   - **Description:** *(optional)* `StackDek landing page`
   - **Visibility:** ✅ Public
3. **DO NOT** check "Add a README" or ".gitignore" — we already have files
4. Click **"Create repository"**
5. You'll see a page with setup instructions. **Copy the URL** that looks like:
   ```
   https://github.com/YOUR-USERNAME/stackdek-landing.git
   ```

---

## Step 3: Push to GitHub

Back in your terminal, run these commands (**paste your URL** from Step 2):

```bash
git remote add origin https://github.com/YOUR-USERNAME/stackdek-landing.git
git branch -M main
git push -u origin main
```

It will ask for your GitHub username and password/token.

> **⚠️ Password won't work.** GitHub requires a **Personal Access Token** now.
> If you don't have one:
> 1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
> 2. Click **"Generate new token (classic)"**
> 3. Check the **`repo`** scope
> 4. Click **Generate token**
> 5. **Copy it immediately** (you won't see it again)
> 6. Use it as your password when prompted

✅ **You should see:** `Branch 'main' set up to track remote branch 'main'`

---

## Step 4: Deploy to Vercel

This is the fun part. Vercel gives you free hosting with zero config.

1. Go to **[vercel.com](https://vercel.com)**
2. Click **"Sign Up"** → choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub
4. Click **"Add New…"** → **"Project"**
5. You'll see your repos listed. Find **`stackdek-landing`** and click **"Import"**
6. On the configure screen:
   - **Framework Preset:** leave as-is (Vercel auto-detects)
   - **Root Directory:** leave blank
   - Don't change anything else
7. Click **"Deploy"**
8. Wait ~1-2 minutes ⏳

✅ **You should see:** A confetti animation 🎉 and your live URL:

```
https://stackdek-landing-xxxxx.vercel.app
```

Click it. That's your live site. **It's on the internet right now.**

---

## Step 5: Share Your URL

Your site is live. Here's what to do with it:

- **Copy the Vercel URL** and use it in SMS texts to leads
- Example text:
  > "Hey, check out what we're building → https://stackdek-landing-xxxxx.vercel.app"
- Every time you push new code to GitHub, **Vercel auto-deploys** — no extra steps

### Optional: Custom Domain (Later)

When you're ready for a real domain like `stackdek.com`:
1. Buy a domain (Namecheap, Google Domains, etc.)
2. In Vercel dashboard → your project → **Settings** → **Domains**
3. Add your domain and follow the DNS instructions

---

## 🔁 Updating the Site Later

Whenever you change files, just run:

```bash
cd C:\Users\x\.openclaw\workspace\stackdek-landing
git add .
git commit -m "Update landing page"
git push
```

Vercel picks it up automatically. New version live in ~30 seconds.

---

## ❓ Troubleshooting

| Problem | Fix |
|---|---|
| `git` not recognized | Install Git: [git-scm.com/download/win](https://git-scm.com/download/win) |
| Push rejected / 403 | Use a Personal Access Token, not your password (see Step 3) |
| Vercel says "no framework detected" | That's fine — it still deploys static HTML |
| Site shows blank page | Make sure you have an `index.html` in the root folder |
| Changes not showing | Did you `git push`? Vercel only updates on push |

---

**That's it. You're deployed. 🚀**
