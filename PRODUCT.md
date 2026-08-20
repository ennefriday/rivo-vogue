# Rivo Vogue — Website Product Specification (Structure Document)

**Business:** Rivo Vogue — Bridal & Stitches (Ughelli, Delta State, Nigeria)
**Stack:** Next.js · Tailwind CSS · Framer Motion · Lucide React · Vercel
**Purpose of this document:** Defines the *structure* (not final copy) of every page, plus the design system, animation, SEO, and accessibility rules that guide build decisions. Use this as the single source of truth during development.

---

## 1. Brand & Design Direction

### 1.1 Brand Personality
Warm · Stylish · Elegant Excellence · Local (Ughelli/Delta pride, felt through imagery and language, not stereotype)

### 1.2 Color System — 60/30/10 Rule
| Role | % | Color | Usage |
|---|---|---|---|
| **Dominant (60%)** | 60% | Off-white / Ivory (not pure white, e.g. `#F7F3EE`) | Page backgrounds, whitespace, base canvas |
| **Secondary (30%)** | 30% | Off-black / Charcoal (not pure black, e.g. `#1B1714`) | Text, dark sections, footer, contrast blocks |
| **Accent (10%)** | 10% split | Pink (e.g. `#C9899A` dusty rose — not neon) + Gold (e.g. `#B8925A` muted metallic gold) | CTAs, hover states, dividers, icons, highlights, borders |

**Rule of thumb:** Gold = luxury signals (buttons, prices, section markers). Pink = warmth/femininity signals (accents, hover underlines, badges). Never let both accents compete in the same element.

### 1.3 Typography
- Avoid: Inter, Geist, Space Grotesk, and generic "AI slop" pairings.
- Recommended direction: an **elegant modern serif or high-contrast didone** for headlines (bridal/editorial feel — e.g. Fraunces, Canela-alike, Freight Display, or a licensed equivalent) paired with a **refined humanist sans** for body text (e.g. General Sans, Söhne-alike, or Public Sans).
- **Fluid typography:** use `clamp()` for all headline and body sizes so type scales smoothly between mobile and desktop — no fixed breakpoint jumps.
- Establish a clear type scale (e.g. Display / H1 / H2 / H3 / Body-lg / Body / Caption) and use it consistently across all 5 templates.

### 1.4 Spacing System
- Define an 8pt base spacing scale (8/16/24/32/48/64/96/128/160).
- Generous vertical rhythm between sections (min. 96–160px desktop, 56–80px mobile).
- Consistent horizontal gutters/margins using a max-width container (e.g. 1280–1440px) with fluid side padding via `clamp()`.
- No cramped elements — luxury brands "breathe."

### 1.5 Visual/Layout Principles
- No bento grids. No emoji anywhere (icons via Lucide React only).
- Favor **asymmetric, editorial layouts** (offset images, overlapping panels, generous negative space) over generic centered card grids.
- Full-bleed imagery sections for emotional/aspirational moments (bridal shots, fabric close-ups).
- Subtle gold-line dividers and thin borders as signature detail motifs.

### 1.6 Motion Philosophy
- Motion should feel **couture, not flashy** — slow eases, soft parallax, refined reveals.
- Framer Motion for all page/scroll transitions; Lucide React icons animate on hover/interaction only (no decorative looping animation on icons).
- Respect `prefers-reduced-motion` globally — provide a static fallback for every animated pattern.

---

## 2. Global Structure (Present on Every Page)

Used consistently on every page so navigation and branding feel cohesive.

### 2.1 Header / Navbar
- Logo (left)
- Nav links: Home · About · Services · Store · Academy · Contact
- CTA button: "Book Appointment"
- Mobile:
  - Hamburger menu
  - Same links + CTA

### 2.2 Footer
- The footer should answer "what do I do next?"
- Short brand intro area
- Quick links: Home, About, Services, Store, Academy, Contact
- Services list (7 items, as links)
- Contact info:
  - Phone
  - WhatsApp
  - Email
  - Address (Ughelli, Delta State)
- Social icons: Instagram, WhatsApp, Facebook, TikTok
- Small copyright + "Designed by [your brand]"

### 2.3 Floating / Sticky Elements
- Sticky header — appears only when the visitor scrolls **up** (not on scroll down)
- Floating glowing WhatsApp button — bottom-right, present on all pages

### 2.4 Other Shared Components/Patterns
- Section eyebrow labels (small gold uppercase tag above each section heading)
- CTA banner block (reusable, appears at the bottom of Home/About/Services/Store/Contact)
- Testimonial/review card component
- Image reveal component (clip-path or mask reveal on scroll)
- Breadcrumb component (used on all 7 individual service pages + Store product pages)
- Lightbox/modal component (portfolio, gallery, product images)

---

## 3. Page-by-Page Structure

## PAGE 1 — Home

The homepage must clearly answer, in order:
1. What do you do?
2. Who is it for?
3. Why does it matter?
4. Why should I trust you?
5. What are your services?
6. Show me proof.
7. Tell me what to do next.

1. **Hero Section — "What do you do & who is it for?"**
   - Full-width short video (bridal, fashion, accessories)
   - Overlay content:
     - Brand name + tagline
     - 1-line value proposition (what you do + who it's for + why you're better than others)
     - Primary CTA: "Explore Services"
     - Secondary CTA: "Visit Store"
   - Subtle Framer Motion animations

2. **Who It's For — Audience Segmentation**
   - Section title: (an appropriate title)
   - Short brand intro line that leads into the cards below
   - 7 audience cards:
     - Brides-to-be
     - Bridesmaids & Bridal Trains
     - Wedding Guests & Asoebi Groups
     - Red Carpet & Gala Attendees
     - Fashion-Forward Women (bags, shoes, perfumes)
     - Shoppers Seeking Curated Luxury
     - Aspiring Designers (Academy)
   - Each card: small image, title, 1–2 line description

3. **Services Overview — "What are your services?"**
   - Section title: "Our Services"
   - Intro line (1 sentence)
   - Grid of 7 service cards: image, title, 1–2 line description, "Learn More" link → specific service detail page
   - "View All Services" button → Services page

4. **Store Teaser — "From Our Store"**
   - Horizontal scroll or grid of 4–6 products: image, name, category tag (Bags, Shoes, Perfumes), price or "From ₦...", "View Details" button
   - "Visit Store" button → Store page

5. **Why It Matters — Problem → Transformation**
   - Section title: (appropriate title)
   - 2-column layout (text + image):
     - Left: short intro line + 3–4 bullet points (confidence on your big day, standing out at events, expressing your personal style, investing in quality & craftsmanship)
     - Right: high-quality emotional image (happy bride, confident guest, etc.)
   - Add a "How It Works" strip: Choose Service → Consultation → Get Quote → Book → Measurement/Fittings → Production → Delivery/Pickup
   - Subtle animation on scroll

6. **Why Trust Rivo Vogue — Credibility & Trust**
   - Section title: "Why People Trust Rivo Vogue"
   - 4–6 trust blocks (grid), each: Lucide icon or small graphic, title, 1–2 line explanation
   - Small stats row: X+ Brides Served · 100% Happy Clients · X Years of Experience · X+ Students Trained

7. **Proof — Portfolio & Testimonials — "Show me proof"**

   7.1 **Portfolio Highlights**
   - Section title: "Recent Work"
   - Grid of 4 images and 2 videos
   - Lightbox/modal on click
   - "View More" button → Portfolio page

   7.2 **Testimonials**
   - Section title: "What Our Clients Say"
   - 3–6 testimonial cards: client photo, name + location, short quote, star rating/visual indicator
   - Carousel layout

8. **Final CTA Strip**
   - Full-width colored section
   - Text: "Your dream look starts here."
   - Buttons: "Book Appointment", "Chat on WhatsApp"

9. **Footer** (global)

---

## PAGE 2 — About Us

**Goal:** Build emotional trust, establish credibility, humanize the brand, reinforce "local excellence."

1. **Hero Section (About)**
   - Background image
   - Title: "About Rivo Vogue"
   - 1–2 sentence summary of brand story

2. **Our Story**
   - Narrative section covering: how the business started, mission & vision, focus on bridal, fashion, and training

3. **Who We Serve**
   - 3–4 audience cards (similar to Home but more detailed): Brides · Wedding Guests & Asoebi Groups · Fashion Lovers (bags, shoes, perfumes) · Aspiring Designers

4. **Meet the Founder**
   - Founder photo + bio
   - Emphasize experience and specialization

5. **Values / Approach / Philosophy**
   - 3–5 value cards: Quality Craftsmanship · Attention to Detail · Customer-First Approach · Timeliness · Affordable Luxury
   - Each with icon + short text

6. **Workshop & Process Gallery**
   - Grid/masonry of images: cutting, sewing, embroidery, fittings, styling sessions, academy classes (if available)
   - Lightbox for larger view

7. **Stats / Proof Points**
   - Simple counters: "X+ Brides Served" · "X+ Students Trained" · "X+ Custom Outfits Created"

8. **CTA Section**
   - Text: "Let's create your perfect look or start your fashion journey"
   - Buttons: "Book Appointment", "Explore Services", "Learn About Academy"

9. **Footer**

---

## PAGE 3 — Services Index Page

**Goal:** Present all 7 services clearly, let visitors self-select their path, funnel into individual service pages.

1. **Hero Section (Services)**
   - Image collage of different services
   - Title: "Our Services"
   - Subtitle: short line about premium bridal & fashion experiences

2. **Services Overview Grid**
   - 7 service cards: image, title, 1–2 line description, "Learn More" link → individual service page, optional "Book This Service" button
   - Services list (for reference when designing cards):
     1. Premium Wedding Gown Rentals
     2. Bridal Accessories & Styling
     3. Custom Tailoring (Bespoke)
     4. Asoebi Specialization
     5. Designer Bags and Shoes
     6. Luxury Perfumes
     7. Fashion Academy for Aspiring Designers

3. **How We Work (Process)**
   - Steps: Design & Selection → Book Consultation → Get Quote → Measurements/Fitting → Production → Final Delivery/Pickup
   - Icons + short text

4. **FAQs (Services-Focused)**
   - 8 common questions, e.g.: How long does a bridal outfit take? Do you source fabrics and accessories? Do you handle out-of-town clients? Academy duration & fees (brief)? etc.
   - Accordion style

5. **CTA Strip**
   - Text: "Not sure which service fits your needs?"
   - Buttons: "Chat on WhatsApp", "Book a Consultation"

6. **Footer**

---

## PAGE 4 — Individual Service Page (×7 — Repeatable Template)

Each of the 7 services gets its own page using this same structure:

1. **Hero Section (Service-Specific)**
   - High-quality image representing that service
   - Service name as H1
   - 1–2 sentence summary
   - Primary CTA

2. **Service Overview**
   - What the service includes, who it's for (ties to target audience segment), what makes Rivo Vogue's approach distinct

3. **Gallery / Portfolio for This Service**
   - Grid of 10–12 images and 5–8 videos specific to this service

4. **Process for This Service**
   - 3–5 step timeline tailored to this service (e.g. bridal gown rental vs. bespoke tailoring will differ)

5. **Pricing & Packages (Service-Specific)**
   - 2–3 package options or price ranges
   - What's included in each
   - CTA: "Get a Custom Quote"

6. **FAQs (Service-Specific)**
   - 4 questions specific to this service: timeline, options (fabrics, styles, accessories), price factors, what to bring to first appointment

7. **CTA Section**
   - Text: (appropriate text)
   - Buttons: "Book Appointment", "Chat on WhatsApp"

8. **Footer**

---

## PAGE 5 — Store (Bags, Shoes, Perfumes)

**Goal:** Showcase products and convert visitors into buyers or inquiries.

1. **Hero Section (Store)**
   - Image of collection or best-sellers
   - Title: "Our Store"
   - Subtitle: short line about curated designer bags, shoes, and luxury perfumes

2. **Filters & Sorting Bar**
   - Filter by category: Bags, Shoes, Perfumes, Bridal, Asoebi, etc.

3. **Product Grid**
   - Product cards: image, name, price (₦), "View Details" button
   - Infinite scroll or pagination

4. **Product Detail Page (for each product)**
   - Image gallery (main + thumbnails)
   - Product title, price, short description
   - Details: brand (if applicable), sizes (for shoes/bags if relevant), scent notes (for perfumes), availability, delivery time
   - CTA buttons: "Order via WhatsApp", "Request More Images"
   - Related products section

5. **Special Collections / Featured Section**
   - "New Arrivals" · "Best Sellers" · "Bridal Accessories & Gifts"
   - Each as a horizontal scroll

6. **Diaspora/Interstate Ordering Info Section**
   - Clear explanation of how remote clients order (measurements guide, shipping, consultation call, etc.) — important for the diaspora audience segment

7. **CTA Strip**
   - Text: "Want something exclusive or custom?"
   - Buttons: "Explore Services", "Book a Consultation"

8. **Footer**

---

## PAGE 6 — Contact Us

**Goal:** Make it extremely easy to reach the business and book appointments.

1. **Hero Section (Contact)**
   - Simple hero image (shop front, team, or friendly image)
   - Title: "Contact Us"
   - Subtitle: "We're here to help you create your perfect look"

2. **Contact Info Blocks**
   - 3–4 cards: phone number (click-to-call), WhatsApp (click-to-chat), email (click-to-send), physical address (Ughelli) with "Get Directions" link

3. **Map Section**
   - Embedded map (Google Maps) showing Ughelli location
   - Pin with business name

4. **Contact Form**
   - Fields: Name, Phone, Email (optional), Service Interest (dropdown: list of 7 services + "Other"), Message, Preferred Appointment Date/Time (optional)
   - Submit button: "Send Message" / "Request Appointment"
   - Success message / confirmation state

5. **Business Hours**
   - Table or list: weekdays & hours, weekend hours (if any)
   - Note about appointments vs. walk-ins

6. **FAQs (Contact & Booking)**
   - 3–5 quick questions (e.g. response time, deposit/payment process, rescheduling policy, walk-in availability)

7. **Footer**

---

## 4. SEO Structure Requirements

- **Per-page metadata:** unique `<title>`, `meta description`, and `Open Graph`/Twitter card image for all 5 core pages + all 7 service pages + product pages.
- **Semantic HTML:** proper heading hierarchy (single H1 per page), `<nav>`, `<main>`, `<footer>`, `<article>` where relevant.
- **Structured Data (JSON-LD):**
  - `LocalBusiness` schema (Ughelli, Delta State address, hours, geo-coordinates) sitewide
  - `Service` schema on each of the 7 service pages
  - `Product` schema on Store product pages
  - `BreadcrumbList` schema on all sub-pages
  - `FAQPage` schema wherever FAQ accordions appear
- **Performance:** Next.js Image optimization for all imagery (lazy-loaded below the fold, `priority` on hero images), font optimization, target Core Web Vitals green (LCP, CLS, INP).
- **URL structure:** clean, descriptive routes — `/services/[service-slug]`, `/store/[product-slug]`.
- **Sitemap.xml & robots.txt** generated via Next.js metadata routes.
- **Alt text:** descriptive, keyword-natural alt text on every image (never decorative-only unless `alt=""` is intentional).
- **Local SEO focus:** consistent NAP (Name, Address, Phone) across site + Google Business Profile alignment; local keyword integration (Ughelli, Delta State, Nigeria bridal wear, asoebi styling, etc.) woven naturally into copy (content phase, not structural).

---

## 5. Accessibility Requirements (WCAG 2.1 AA Target)

- Full keyboard navigability (nav, menus, accordions, filters, forms, modals — visible focus states styled in brand gold, not default blue)
- Color contrast: verify pink/gold accents against ivory/charcoal backgrounds meet 4.5:1 (text) / 3:1 (large text & UI components)
- All interactive elements have accessible names (`aria-label` where icon-only, e.g. WhatsApp FAB, social icons)
- Form fields: proper `<label>` association, error messaging announced via `aria-live`
- Motion: respect `prefers-reduced-motion` — disable parallax/scroll-linked animation, replace with simple fades
- Images: meaningful alt text; decorative images marked `alt=""`
- Skip-to-content link for keyboard/screen reader users
- Modal/lightbox (product detail, mobile menu): focus trap + `Esc` to close + return focus to trigger element
- Heading structure logical and non-skipping on every page

---

## 6. Animation & Scroll Effects Guidelines (Framer Motion)

| Pattern | Where Used | Notes |
|---|---|---|
| Fade + slight rise on scroll-into-view | Section headings, cards, testimonials | Stagger children (0.05–0.1s delay steps) |
| Scroll-driven image reveal (clip-path/mask) | Hero, Portfolio, About story | Signature "couture reveal" motif |
| Horizontal scroll/drag gallery | Home showcase, Service galleries | With scroll-snap for mobile |
| Micro-interactions on hover | Buttons, product cards, nav links | Underline draw, gold shimmer/shift, image zoom (subtle, 1.03–1.06 scale) |
| Sticky/condensing navbar | Global | Height + background opacity transition on scroll |
| Page transitions | Route changes | Soft fade/slide, kept fast (~250–400ms) to not feel sluggish |
| Accordion expand/collapse | FAQs | Height auto-animate, rotate chevron icon |
| Mobile menu drawer | Global | Staggered link entrance, backdrop fade |
| Loading/skeleton states | Store grid, form submission | Elegant shimmer, not generic spinners |

**Rule:** every animation must have a clear *purpose* (guide attention, reveal hierarchy, give feedback) — never decorative motion for its own sake.

---

## 7. Responsive & Fluid Typography Notes

- Breakpoint strategy: mobile-first, with key checkpoints at ~375px, 768px, 1024px, 1440px, 1920px — but rely primarily on `clamp()` fluid scaling rather than hard jumps.
- Touch targets ≥44px on mobile for nav, buttons, form controls.
- Image art direction: consider swapping crop/aspect ratio between mobile portrait heroes and desktop wide heroes (Next.js `<Image>` with responsive `sizes`).
- Test all 7 service page templates + Store product template at each breakpoint since they repeat structurally.

---

## 8. Component Inventory (Build Checklist)

- Navbar (with mega-menu + mobile drawer)
- Footer
- Hero (variant: home / inner-page)
- Section Eyebrow + Heading block
- Editorial Image Reveal block
- Service Preview Card
- Service Detail Template (full page)
- Process/Timeline component
- Testimonial Card + Carousel
- FAQ Accordion
- Product Card + Product Detail template
- Store Filter/Sort bar
- Contact Form
- Map/Location block
- CTA Banner (reusable)
- WhatsApp Floating Action Button
- Breadcrumb
- Newsletter signup (footer)
- Loading/skeleton states

---

## 9. Next Steps (Not Covered in This Document)
- Finalize the 7 service names/definitions
- Content/copywriting for each section
- Final imagery/photography direction and shot list
- Exact color hex values + type family licensing decision
- Wireframes/high-fidelity design in Figma before development
