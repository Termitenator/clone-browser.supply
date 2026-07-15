# Project Documentation — Technical Q&A

This document explains the technical approach, architectural decisions, and strategies used in the development of this project (Next.js App Router + Firebase Firestore, deployed on Vercel).

---

## 1. JSON Data Structure for Scalability & Maintainability

Data in this project is stored in Firestore using per-entity collections (`customers`, `templates`) rather than a single document holding a large array. This approach was chosen because:

- **Flat & normalized, not deeply nested.** Each document (`Customer`, `Template`) has clearly typed fields (see `types/customer.ts`, `types/template.ts`). Relationships between data (e.g. `Customer.templateUsed.templateId` referencing `Template.id`) are stored as **references by ID** rather than duplicating the entire object. This prevents stale data when a template is updated.
- **Consistent `id` pattern.** Every document uses its Firestore document ID as `id`, mapped automatically through the query layer (`lib/queries/*.ts`) — so the frontend never needs to know the underlying database implementation details.
- **Query layer separated from components.** All data access goes through functions like `getCustomers()` and `getTemplateById()` in `lib/queries/`. This means that if the data structure changes in the future (new fields, migration to another database), the change only needs to happen in one place without touching UI components.
- **Optional fields are explicitly designed.** Fields that aren't always present (e.g. `liveSiteVideoUrl`, `purchaseUrl`) are marked `?` in the TypeScript interface, allowing the UI to safely conditionally render and avoid errors when data is incomplete.
- **`createdAt` timestamp on every entity** makes chronological sorting and future pagination straightforward without requiring a schema migration.
- **Future scalability:** as data volume grows, this structure is already prepared for adding filters (`where`), pagination (`startAfter`/`limit`), and composite indexes in Firestore without changing the shape of the existing data.

---

## 2. Technology/Framework Choice for a Custom-Built API

If this project needed a separate REST/API layer (beyond Server Components accessing Firestore directly), my choice would be:

**Next.js API Routes (Route Handlers) inside `app/api/`**, for the following reasons:

- **Single codebase, single deployment.** No need for separate backend infrastructure — the API and frontend stay within one Next.js project, deployed together on Vercel.
- **Serverless by default.** Every route handler automatically becomes a serverless function on Vercel, auto-scaling with traffic without manual server setup.
- **End-to-end TypeScript.** The same types (`Customer`, `Template`) can be shared between frontend and backend, reducing the risk of data mismatches.
- **Fits specific use cases** where a Server Component alone isn't enough, such as:
  - Endpoints called from client-side code (form submissions, webhooks)
  - Third-party integrations that require a public REST endpoint
  - On-demand revalidation (`/api/revalidate`) to trigger ISR after content updates from an admin panel

Alternatives I considered but didn't choose for this project's scale: **tRPC** (more relevant for larger full-stack TypeScript apps with heavy client-server interaction) and **a separate Express/Fastify server** (adds infrastructure complexity that isn't justified for current needs).

---

## 3. Configuring a Custom Domain on Vercel

Steps to point a custom domain (e.g. `www.clientwebsite.com`) to a project deployed on Vercel:

1. **Open the project in the Vercel Dashboard** → **Settings** tab → **Domains**.
2. **Add the domain** by typing `www.clientwebsite.com` (or `clientwebsite.com` for the root domain) and clicking **Add**.
3. Vercel will show the required DNS records to add at your domain provider (e.g. Cloudflare, Namecheap, GoDaddy):
   - For a **subdomain** (`www`): add a **CNAME record** pointing to `cname.vercel-dns.com`.
   - For the **root/apex domain** (`clientwebsite.com` without `www`): add an **A record** pointing to Vercel's IP (`76.76.21.21`), or use an **ALIAS/ANAME record** if your DNS provider supports it.
4. **Redirect between `www` and root domain**: it's recommended to set one as primary (e.g. `www.clientwebsite.com`), and Vercel will automatically redirect from the root domain to the primary one (or vice versa) — configurable on the Domains page.
5. **Wait for DNS propagation** (usually a few minutes up to 24 hours depending on the provider); Vercel will automatically detect the change and show a "Valid Configuration" status.
6. **Automatic SSL certificate** — Vercel issues an HTTPS certificate (via Let's Encrypt) automatically once the domain is verified, with no additional manual configuration needed.

---

## 4. Admin Panel for Managing Website Content

To manage data such as `customers` and `templates` (create, update, delete) without directly touching the Firestore Console, my approach would be:

- **Firebase-native approach (fastest for small–medium scale):** Build a simple admin panel within the same Next.js project, on a protected route like `/admin`, using:
  - **Firebase Authentication** for admin login (email/password or Google sign-in), restricted via custom claims or an email whitelist.
  - **Next.js Server Actions** or API Routes to perform writes to Firestore (create/update/delete `customers` and `templates` documents) with server-side validation.
  - **Middleware** (`middleware.ts`) to protect `/admin/*` routes so only logged-in users can access them.
  - Input forms using **React Hook Form + Zod** for schema validation that stays consistent with the existing TypeScript interfaces (`Customer`, `Template`).

- **Alternative for more complex CMS needs** (many non-technical content editors, rich text editing, media library, etc.): use a **headless CMS** such as **Sanity** or **Payload CMS**, integrated as a replacement or companion data source to Firestore. This option is better suited when a non-developer team needs to manage content independently with a more mature UI.

For this project's current needs (structured data, limited fields), a custom admin panel inside Next.js with Firebase Auth is considered the most efficient approach without adding new infrastructure dependencies.

---

## 5. Techniques for Fast Loading, Even on Slow Connections

Strategies applied/recommended for this project:

- **Server Components by default.** Most pages (`TemplatesPage`, `LiveExamplesPage`, `TemplateDetailPage`) are Server Components — data is fetched on the server and the resulting HTML is sent ready-made to the browser, reducing the JavaScript bundle the client needs to download and execute.
- **Static Generation + ISR** (`generateStaticParams` + `revalidate`). Template detail pages are generated statically at build time, then revalidated periodically (`revalidate = 60`). This means pages are served directly from Vercel's edge CDN without querying Firestore on every request.
- **Automatic code splitting** from Next.js — each route only loads the JavaScript relevant to it, not the entire application at once.
- **`next/image`** for all images — automatically handles lazy loading, resizing based on viewport, and serving modern formats (WebP/AVIF) based on browser support.
- **Client Components kept to a minimum**, used only where interactivity is genuinely needed (`framer-motion` animations, autoplay video) — everything else stays a Server Component.
- **Font optimization** via `next/font` to avoid layout shift and render-blocking when loading external fonts.
- **Minimizing third-party scripts** and avoiding render-blocking resources above the fold.
- **Automatic prefetching** — Next.js `<Link>` prefetches pages visible in the viewport, making navigation feel instant even on slow connections.

---

## 6. Securely Sending Form Data to the Backend

If this project adds a form (e.g. contact form, booking form), the security approach used would be:

- **Next.js Server Actions** (for App Router) — the form submits directly to a server function without needing to create a separate public API endpoint, reducing the attack surface since the logic is never exposed as a freely callable endpoint.
- **Server-side input validation** using **Zod**, not relying solely on client-side validation (which can easily be bypassed).
- **HTTPS enforced** — automatically provided by Vercel for all domains, ensuring data is encrypted in transit.
- **Rate limiting** on form endpoints (e.g. via Vercel Edge Middleware or a service like Upstash Ratelimit) to prevent spam/abuse.
- **CSRF protection** — Next.js Server Actions have built-in CSRF protection; if using a manual API Route instead, token verification needs to be added.
- **Input sanitization** before storing to the database, to prevent injection attacks (Firestore isn't natively vulnerable to SQL injection, but sanitization is still important to prevent XSS when the data is later displayed).
- **Environment variables for credentials** — all API keys/secrets (Firebase Admin SDK credentials, etc.) are stored in Vercel Environment Variables, never hardcoded or exposed in the client bundle.
- **Bot verification/CAPTCHA** (e.g. Cloudflare Turnstile or reCAPTCHA) for forms prone to bot abuse.

---

## 7. Image Optimization Strategies Without Sacrificing Quality

- **`next/image` as the default** for all images in this project — automatically provides:
  - **Responsive sizing** via the `sizes` attribute, so the browser only downloads the image size appropriate for the viewport, instead of a full-resolution image on every device.
  - **Automatic format conversion** to WebP/AVIF based on browser support, significantly reducing file size compared to JPEG/PNG without noticeable quality loss.
  - **Lazy loading by default** — images outside the viewport aren't downloaded until the user scrolls near them, except when marked `priority` for above-the-fold images (like the hero image).
- **`remotePatterns`** in `next.config.js` is configured for external image domains (`framerusercontent.com`, `i.pravatar.cc`), ensuring the Next.js Image Optimization API can process images from those sources.
- **`fill` with a fixed-aspect-ratio container** (e.g. `aspect-[4/3]`) is used across all card components to prevent Cumulative Layout Shift (CLS) while images load.
- **`priority` prop** is applied only to hero/above-the-fold images (e.g. in `TemplateDetailHero`), while other images are left to lazy-load by default so they don't burden the initial page load.
- **Compression at the source** — for images uploaded through a future admin panel, it's recommended to add automatic compression (e.g. via Firebase Storage + a Cloud Function resize step, or a service like Cloudinary) before storage, so the stored files are already optimized from the start.
