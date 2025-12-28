# Niranjan Navaneethan - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Senior Data Scientist specializing in AI/ML, RAG systems, and LLM applications.

## Features

- Clean, modern design with smooth animations
- Fully responsive (mobile, tablet, desktop)
- Easy to navigate single-page layout
- Sections for Experience, Projects, Skills, Education, and Awards
- Downloadable resume
- Direct contact links

## Deployment to GitHub Pages

Follow these steps to deploy your website to GitHub Pages:

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the '+' icon in the top right and select 'New repository'
3. Name your repository: `<your-username>.github.io` (replace `<your-username>` with your actual GitHub username)
   - Example: If your username is `niranjan-nav`, name it `niranjan-nav.github.io`
4. Make the repository **Public**
5. Do NOT initialize with README (we already have one)
6. Click 'Create repository'

### Step 2: Initialize Git and Push Your Files

Open your terminal in this directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace with your actual repository URL)
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on 'Settings' tab
3. Scroll down to 'Pages' section in the left sidebar
4. Under 'Source', select 'main' branch
5. Click 'Save'

### Step 4: Access Your Website

Your website will be live at: `https://<your-username>.github.io`

It may take a few minutes for the site to go live after pushing.

## Updating Your Website

To update your website:

1. Make changes to your files locally
2. Run these commands:

```bash
git add .
git commit -m "Update website"
git push
```

Your changes will be live within a few minutes.

## Customization

### Update Resume PDF

Replace `Resume-Niranjan Navaneethan.pdf` with your latest resume PDF. Make sure to:
1. Keep the same filename or update the link in [index.html](index.html) (line 21)
2. Commit and push the changes

### Update Content

Edit [index.html](index.html) to update:
- Contact information
- Work experience
- Projects
- Skills
- Education details
- Awards

### Customize Colors

Edit [styles.css](styles.css) and modify the CSS variables at the top:

```css
:root {
    --primary-color: #2563eb;  /* Main blue color */
    --secondary-color: #8b5cf6; /* Purple accent */
    --accent-color: #10b981;    /* Green accent */
    /* ... other colors ... */
}
```

## File Structure

```
.
├── index.html              # Main HTML file
├── styles.css              # Styling
├── script.js               # JavaScript functionality
├── Resume-Niranjan Navaneethan.pdf  # Your resume
├── .gitignore             # Git ignore file
└── README.md              # This file
```

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- Vanilla JavaScript
- Google Fonts (Inter)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a personal portfolio website. Feel free to use this template for your own portfolio, but please update the content with your own information.

## Contact

- Email: niranjan.nav95@gmail.com
- LinkedIn: [linkedin.com/in/niranjan-navaneethan](https://www.linkedin.com/in/niranjan-navaneethan/)
- Location: Austin, TX

---

Built with passion for data science and AI
