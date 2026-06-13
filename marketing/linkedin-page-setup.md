# MythosPro LinkedIn Company Page Setup

## Page Identity

| Field | Value |
|---|---|
| **Company name** | MythosPro |
| **Page URL** | linkedin.com/company/mythospro |
| **Tagline** | Focused software for professionals. |
| **Website** | mythospro.com |
| **Industry** | Software Development |
| **Company size** | 0–1 employees (Self-employed) |
| **Company type** | Self-Owned / Sole Proprietorship |

> **Note on size & type:** It's just you, and that's fine. Select **"0-1 employees"** and **"Self-Owned"** (or "Sole Proprietorship"). You do **not** need a registered legal entity (LLC, Ltd, etc.) to run a LinkedIn company page. In the indie/dev community, "solo studio" is a credibility signal, not a weakness, lean into it.

---

## About Section (2,000 chars max, copy/paste ready)

> MythosPro is an indie software studio building sharp, practical SaaS tools for professionals, without enterprise overhead or feature bloat.
>
> Our tools are made for teams and solo operators who need to move fast, stay compliant, and get real work done.
>
> **Current products:**
> - **EAA Scanner**: Accessibility compliance SaaS for teams that need to meet EAA and WCAG 2.2 standards. Scan, report, and track issues at eaascanner.com.
>
> We're makers, not committees. Small studio. Sharp tools.

---

## Profile Assets

### Logo
- **New brand logo:** `public/mythospro-logo.svg` (512×512 icon) and `public/mythospro-wordmark.svg` (horizontal lockup)
- Mark: gradient mountain-peaks "M" (indigo→violet) on a dark rounded tile
- LinkedIn profile logo recommended size: **300 × 300 px**, export the SVG to PNG at 300×300 (or 512×512, LinkedIn will downscale)
- Quick export: open the SVG in a browser → screenshot, or use `npx svgexport mythospro-logo.svg logo.png 512:512`

### Banner / Cover Image
- Recommended size: **1128 × 191 px**
- Suggested design: dark background, `mythospro.com` URL, tagline "Focused software for professionals.", subtle indigo accent line
- Tools: Figma, Canva, or export from the site's existing design language

---

## Featured Section
Pin these as soon as they exist:
1. Link to **eaascanner.com** with a short description
2. First blog post or product announcement
3. Product launch post (see content strategy)

---

## Hashtags to Follow / Associate
`#accessibility` `#wcag` `#eaa` `#saas` `#indiehacker` `#webdev` `#compliance` `#a11y` `#productdevelopment`

---

## Admin Setup Checklist

- [ ] Create page at linkedin.com/company/setup
- [ ] Upload logo (300×300)
- [ ] Upload banner (1128×191)
- [ ] Fill "About" section
- [ ] Add website URL
- [ ] Set industry, size, type
- [ ] Add 3 featured items
- [ ] Invite any collaborators as admins
- [ ] Enable "My company" notifications
- [ ] Post the first "We're live" announcement

---

## First Post (Day 1, Page Launch)

**How to post it:** In the page share composer, paste the copy below into the empty text box. LinkedIn may auto-attach a link preview card. For a launch post you can leave the card pointing at the page, or delete it and let `eaascanner.com` in the text generate a product preview instead (better for driving clicks). The "Strengthen post" button is LinkedIn's optional AI polish, you can ignore it.

> MythosPro is now on LinkedIn.
>
> We're a small indie studio building focused SaaS tools for professionals. No bloat, no enterprise pricing, just tools that do one thing well.
>
> Our first product is EAA Scanner: accessibility compliance scanning for teams that need to meet the EU Accessibility Act and WCAG 2.2 standards.
>
> Run a free scan at eaascanner.com
>
> Follow along, we're building in public.
>
> #saas #accessibility #eaa #wcag #a11y

---

## Banner / Cover Image (ready to use)

`public/mythospro-linkedin-banner.png` is a finished 1128 × 191 cover (already exported), with the source SVG alongside it.

**Safe-zone design:** all text is centered horizontally and vertically on purpose. On a company page LinkedIn overlays the real logo on the **bottom-left** of the cover (desktop) and crops toward the **center** on mobile, so anything in the corners or far edges gets clipped. Keeping the wordmark, tagline, and URL centered means they stay visible in both views. Do not move content into the bottom-left.

**To upload:** **Edit page → Cover image → upload `public/mythospro-linkedin-banner.png`.**

To regenerate after editing the SVG:

```bash
npx svgexport public/mythospro-linkedin-banner.svg public/mythospro-linkedin-banner.png 1128:191
```

---

## Educational Posts (Week 1 queue)

Post these 2-3 days apart after the launch post. Each is built to teach first and sell second, which is what performs on LinkedIn. Pair any of them with a screenshot of an EAA Scanner report for a native-video or image post when possible.

### Post 2: The deadline reality check

> The EU Accessibility Act deadline (June 28, 2025) has already passed, and a lot of teams still aren't compliant.
>
> Here's who it applies to, even if you're not based in the EU:
>
> - You sell to customers in the EU
> - You run an e-commerce store shipping to EU countries
> - You build digital products for EU clients
> - Your SaaS has European users
>
> Non-compliance can mean fines and removal from EU markets. The hard part isn't caring about accessibility, it's knowing where you actually stand right now.
>
> That's the gap EAA Scanner closes: point it at your site, get a plain report of what passes and what fails against WCAG 2.2 and EAA.
>
> Check yours in 2 minutes: eaascanner.com
>
> #accessibility #eaa #wcag #webdev #compliance

### Post 3: What WCAG 2.2 actually checks

> "We need to be WCAG compliant" is one of those phrases that sounds clear until someone asks what it means.
>
> WCAG 2.2 is organized around four principles. Your site has to be:
>
> - **Perceivable**: people can see or hear your content (alt text, captions, contrast)
> - **Operable**: people can use it without a mouse (keyboard nav, focus order, enough time)
> - **Understandable**: content and controls behave predictably (clear labels, consistent navigation)
> - **Robust**: it works with assistive tech like screen readers (valid, well-structured markup)
>
> Most failures aren't exotic. They're missing alt text, low color contrast, form fields with no labels, and content you can't reach with a keyboard.
>
> The fastest way to find yours is to scan for them instead of auditing by hand: eaascanner.com
>
> #wcag #accessibility #a11y #frontend #webdev

### Post 4: The 5 most common failures we see

> We scan a lot of sites. The same five accessibility failures show up again and again:
>
> 1. **Missing alt text** on images, so screen readers announce nothing
> 2. **Low color contrast** on text and buttons, unreadable for low-vision users
> 3. **Unlabeled form fields**, so users don't know what to type
> 4. **No keyboard access**, menus and modals that only work with a mouse
> 5. **Missing focus indicators**, so keyboard users can't tell where they are
>
> The good news: all five are fixable, and most take less time to fix than to argue about.
>
> The first step is seeing them. EAA Scanner flags every instance with the exact element, so you're fixing, not hunting.
>
> Free scan: eaascanner.com
>
> #accessibility #a11y #wcag #webdev #ux
