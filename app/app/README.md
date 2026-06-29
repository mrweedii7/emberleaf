# Ember & Leaf Production Starter

Owner: `mrweedii7`  
Domain: `emberandleaf.nl`

This is the first real production-style Next.js starter for Ember & Leaf.

## Local setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Push to GitHub

Create a new empty GitHub repository called:

```text
ember-leaf
```

Then run:

```bash
git init
git add .
git commit -m "Initial Ember & Leaf production starter"
git branch -M main
git remote add origin https://github.com/mrweedii7/ember-leaf.git
git push -u origin main
```

## Deploy to Vercel

1. Go to Vercel.
2. Import Git Repository.
3. Select `mrweedii7/ember-leaf`.
4. Framework should auto-detect as Next.js.
5. Click Deploy.

## Connect domain

In Vercel Project Settings > Domains, add:

```text
emberandleaf.nl
www.emberandleaf.nl
```

Vercel will show the DNS records to add at your domain registrar.

## Next build phases

- Add real logo assets to `/public`.
- Add Supabase database.
- Add reservations API.
- Add admin dashboard.
- Add Stripe/iDEAL payments later.
