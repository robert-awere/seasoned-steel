# Seasoned Steel — seasonedsteel.com

Astro static site. **You never run commands locally.** Every push to `main` → GitHub Actions validates → Vercel builds → live.

## Repo map

```
content/articles/        ← all articles live here (one .md file each)
public/images/articles/  ← your photos (create the folder by uploading a file into it)
src/pages/articles/      ← article template (rarely touch)
.github/workflows/       ← CI (never touch)
```

## How to publish an article (the whole loop)

1. Draft arrives as a PR (or a file). Review it.
2. Upload the finished `.md` to `content/articles/` via GitHub web UI (Add file → Upload files).
3. Upload its photos to `public/images/articles/`.
4. Commit to **main** → Actions goes green → Vercel deploys (~1 min) → live on seasonedsteel.com.
5. Submit the URL in Google Search Console (URL Inspection → Request Indexing).
6. **Retro-link duty:** when a new pillar/cluster page goes live, edit older articles to add the new internal link (see content map linking rules). Articles carry `<!-- TODO-LINK -->` comments marking planned links.

## Filenames & URLs

`09-boiled-water-simmer-method.md` → seasonedsteel.com/articles/boiled-water-simmer-method/

The `NN-` prefix controls display order in GitHub and is stripped automatically from the URL. **Never rename a published file** — the URL follows the filename.

## Frontmatter (required — build fails without it)

```yaml
---
title: "Article H1 here"
description: "Meta description, max 160 chars, includes primary keyword."
pubDate: 2026-09-20
cluster: "troubleshooting"     # one of: seasoning, cleaning, troubleshooting,
                               # restoration, cooking, compare, best, reviews, misc
keywords: ["primary keyword", "long-tail variant"]
type: "howto"                  # article | howto | faq
draft: false
howToSteps:                    # only if type: howto — keep each under 10 words
  - "Return the pan to medium heat"
  - "Add one cup of water and bring to a boil"
faq:                           # only if type: faq
  - question: "Does boiling water damage the seasoning?"
    answer: "No — a 1–2 minute simmer does not harm polymerized oil."
---
```

JSON-LD (Article + HowTo + FAQPage) and meta/OG tags are generated automatically from frontmatter. Do not hand-write schema in article bodies.

## Writing rules (per briefs)

- First-person, hands-on. Answer the query in the first 100 words.
- One exact number per claim. Tables wherever data exists.
- Callouts: markdown blockquotes (`>`). Prefix with **Warning:** / **Note:** for scannability.
- Numbered steps: plain ordered lists; imperative, under 10 words each.
- Amazon links: max 1 contextual link in informational articles. Prices must be current at publish. Disclosure is auto-injected in the site footer.
- Image filenames: `NN-slug-descriptor.jpg`; alt = descriptive + natural keyword variant.

## Pilot status

- [x] Scaffold build-tested (0 errors, 0 warnings)
- [ ] Scaffold pushed to GitHub + Vercel green
- [ ] Article #9 (boiled-water simmer method) reviewed by you + photos added
- [ ] First article indexed in Search Console

## Content source of truth

`cast-iron-content-map.md` in the project workspace — 97 articles; publish order = **Master Publish Sequence** section (NOT article-number order).
