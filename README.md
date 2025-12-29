# Niranjan Navaneethan – Systems-Oriented Resume

A systems-oriented professional website designed with editorial principles: clarity over decoration, evidence over claims, hierarchy over aesthetics.

## Design Philosophy

This is not a portfolio site. It's a **systems resume** built for senior hiring managers and technical recruiters.

**Core Principles:**
- **Systems thinking**: Experience organized by problem domains (GenAI/LLM, Forecasting, NLP), not chronological jobs
- **Context → Constraints → Decisions → Impact**: Every system entry shows the reasoning, not just the result
- **Editorial design**: Swiss-style typography, generous whitespace, minimal color
- **Scannable hierarchy**: Information architecture works without color or animation
- **Calm confidence**: No marketing language, no gimmicks, just evidence

**Design Language:**
- Serif typography (Crimson Text) for editorial credibility
- Sans-serif (Inter) for technical clarity
- Neutral palette (mostly grayscale)
- No animations, no icons, no decorative elements
- Desktop-first, optimized for 2-5 minute evaluation

## Structure

1. **Identity Block**: Name, role, professional thesis, contact
2. **Systems Resume**: 3 problem domains with detailed system entries
   - GenAI & LLM Systems for Analytics
   - Forecasting & Decision Optimization
   - NLP & Document Intelligence
3. **Technical Capabilities**: Skills grouped by depth (Deep vs Production vs Familiar)
4. **Evidence & Recognition**: Patents, publications, awards
5. **Education**
6. **Employment Timeline**: Reference section for verification

## Deployment to GitHub Pages

### Step 1: Create Repository

1. Go to GitHub and create a new repository
2. Name: `<your-username>.github.io` (e.g., `niranjannav.github.io`)
3. Visibility: **Public**
4. Do NOT initialize with README

### Step 2: Push Code

```bash
cd "d:\Big Tech Job"

# If not already initialized
git init
git add .
git commit -m "Systems-oriented resume website"

# Add remote and push
git remote add origin https://github.com/niranjannav/niranjannav.github.io.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository Settings → Pages
2. Source: Deploy from branch **main**
3. Folder: **/ (root)**
4. Save

### Step 4: Live URL

Your site will be live at: **`https://niranjannav.github.io`**

(Takes 2-5 minutes after first push)

## Updating Content

### Update Resume PDF

Replace `Resume-Niranjan Navaneethan.pdf` with latest version, then:

```bash
git add Resume-Niranjan Navaneethan.pdf
git commit -m "Update resume PDF"
git push
```

### Edit System Entries

Edit `index.html` to update:
- System entries (Context, Constraints, Decisions, Impact)
- Technical capabilities
- Evidence items

Structure is semantic HTML with clear class names.

### Customize Typography

Edit `styles.css` CSS variables:

```css
:root {
    --font-serif: 'Crimson Text', Georgia, serif;
    --font-sans: 'Inter', system-ui, sans-serif;

    --color-text: #1a1a1a;
    --color-text-secondary: #4a4a4a;
    /* ... */
}
```

## File Structure

```
.
├── index.html              # Systems resume (semantic HTML)
├── styles.css              # Editorial design system
├── script.js               # Minimal (currently empty)
├── Resume-Niranjan Navaneethan.pdf
├── .gitignore
└── README.md
```

## Quality Criteria

Before deploying updates, verify:

- ✅ Does seniority register within 5 seconds?
- ✅ Is impact measurable and specific?
- ✅ Can the page be scanned without reading everything?
- ✅ Does the design disappear in service of content?
- ✅ Would this stand next to Stripe, Linear, or Figma documentation?

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design (mobile, tablet, desktop)
- Print-optimized styles included

## License

Personal resume website. Content is specific to Niranjan Navaneethan.
Design system and structure can be adapted for your own use.

---

**Site reflects systems built, decisions made, impact measured.**
Last updated: December 2024
