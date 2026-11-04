# Renee Bishop: Professional Portfolio

A static, single-page portfolio built with **React + Vite + Tailwind CSS**, deployed free on **GitHub Pages**.
No backend, database, API keys, tracking, or paid services.

---

## 1. Run it on your computer

Requires [Node.js](https://nodejs.org/) 20 or newer.

```bash
npm install        # first time only
npm run dev        # preview at http://localhost:5173 (shows yellow placeholder notes)
npm run build      # production build into dist/ (placeholders hidden)
npm run preview    # view the production build at http://localhost:4173
npm run check      # list every open TODO / placeholder in the content
```

## 2. Where to edit content

All text lives in `src/content/`. You do not need to touch the components to update wording.

| File | What it controls |
|---|---|
| `profile.js` | Name, hero text, About bio, resume/LinkedIn/GitHub/email links |
| `expertise.js` | The six Core Expertise cards |
| `caseStudies.js` | The three confidentiality-safe case studies |
| `aiInnovation.js` | AI practice areas and the evaluation demo (fictional) |
| `credentials.js` | Certifications and verification links |
| `speaking.js` | Featured talk and future engagements |
| `philosophy.js` | "Define Excellence For Yourself." section |

**Placeholders:** any link set to `null` shows a yellow "Placeholder" note in `npm run dev` and is **hidden automatically** on the live site.

**Resume:** put a public-safe PDF at `public/resume/Renee-Bishop-Resume.pdf`, then set
`resume: 'resume/Renee-Bishop-Resume.pdf'` in `src/content/profile.js`.

**Headshot:** `src/assets/renee-bishop-480.webp` and `-800.webp`. Replace both files (same names) to change the photo.

## 3. Publish to GitHub Pages (first time)

1. **Create a GitHub account** at <https://github.com> if you don't have one.
2. **Create a new repository**: click **+** → **New repository**.
   - Name: e.g. `portfolio` (your site will be `https://<username>.github.io/portfolio/`)
     *or* name it exactly `<username>.github.io` to get `https://<username>.github.io/`.
   - Visibility: **Public** (required for free GitHub Pages).
   - Do **not** add a README, .gitignore, or license (this folder already has them).
3. **Push this folder** from a terminal opened in this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```
   (GitHub Desktop works too: *File → Add local repository → Publish repository*, then untick "Keep this code private".)
4. **Turn on Pages**: in the repository go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
5. Open the **Actions** tab. The "Deploy to GitHub Pages" workflow runs automatically (about 1–2 minutes).
   When it shows a green check, your site is live at the URL shown in **Settings → Pages**.

No base-path change is needed: the build uses relative paths, so it works under any repository name.

## 4. Updating the site later

Edit files in `src/content/` → check with `npm run dev` → then:

```bash
git add .
git commit -m "Update content"
git push
```

Every push to `main` rebuilds and republishes automatically.

## 5. Connecting a custom domain (optional, later)

1. Buy a domain from any registrar (e.g. `reneebishop.com`).
2. In the repository: **Settings → Pages → Custom domain** → enter the domain → **Save**.
3. At your registrar, add DNS records:
   - Apex domain (`reneebishop.com`): four **A** records pointing to
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` subdomain: a **CNAME** record pointing to `<username>.github.io`
4. Wait for DNS to propagate (minutes to a few hours), then tick **Enforce HTTPS**.
5. Update the `og:image` / `twitter:image` tags in `index.html` to the full URL
   (e.g. `https://reneebishop.com/og-image.jpg`) so link previews show the image.

See GitHub's guide: <https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site>

## 6. Before publishing: content checklist

- [ ] `npm run check` shows only items you've intentionally left hidden
- [ ] Case study role/approach statements confirmed as accurate
- [ ] No employer, client, project, or system names; no confidential metrics
- [ ] Speaking engagement status and dates confirmed
- [ ] Resume PDF contains no personal phone number or home address
- [ ] Azure Data Fundamentals still shown as "in progress" until the exam is passed

## Project structure

```
├── .github/workflows/deploy.yml   GitHub Pages build & deploy
├── public/                        Static files copied as-is (favicon, share image, resume/)
├── scripts/check-content.mjs      Lists open placeholders
├── src/
│   ├── assets/                    Optimized headshot images
│   ├── components/                One component per section
│   ├── content/                   ← all editable text
│   ├── hooks/useScrollSpy.js      Highlights the current nav item
│   ├── App.jsx, main.jsx, index.css
├── index.html                     Page title, SEO and social metadata
└── vite.config.js
```
