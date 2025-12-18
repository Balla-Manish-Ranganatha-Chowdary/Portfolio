# Photography Portfolio

A modern photography portfolio website built with Next.js 16 as a fully static site. This portfolio showcases developer work, skills, and projects with a clean, responsive design.

## 🚀 Features

- **Next.js 16** with React 19 and React Compiler
- **Static Site Generation** - No server required, deploy anywhere
- **Interactive Maps** with Mapbox GL JS integration
- **Modern UI** built with Tailwind CSS and shadcn/ui components
- **Responsive Design** optimized for all devices
- **Dark Mode** support with theme toggle
- **Resume Download** functionality
- **Local Data Management** with JSON files

## 📋 Prerequisites

Before deploying, ensure you have:

- **Node.js 18+** or **Bun** runtime
- **Mapbox** account for map features (optional)
- A static hosting platform (GitHub Pages, Vercel, Netlify, Cloudflare Pages, etc.)

## 🛠️ Local Development

### Step 1: Clone and Setup

```bash
# Clone the repository
git clone https://github.com/Balla-Manish-Ranganatha-Chowdary/portfolio.git
cd portfolio

# Install dependencies
bun install
# or
npm install
```

### Step 2: Environment Configuration (Optional)

If you want to use Mapbox features, create a `.env.local` file:

```env
# Mapbox access token (optional)
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=pk.your-mapbox-token
```

**Get Mapbox Token:**

1. Create account at [mapbox.com](https://mapbox.com)
2. Go to Account > Access Tokens
3. Create a new token with appropriate scopes

### Step 3: Run Development Server

```bash
# Start development server
bun run dev
# or
npm run dev
```

Visit `http://localhost:3000` to view your portfolio.

### Step 4: Build and Test Locally

```bash
# Build the static site
bun run build
# or
npm run build

# Preview the production build
npx serve@latest out
```

## 📝 Content Management

### Data File Structure

All portfolio content is stored in JSON files located in `/src/data/`:

```
src/data/
├── profile.json    # Personal information and bio
├── projects.json   # Project showcase items
└── skills.json     # Technical skills and tools
```

### Updating Profile Information

Edit `src/data/profile.json`:

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "bio": "Your bio text",
  "avatar": "/avatar.jpg",
  "social": {
    "github": "your-github-username",
    "email": "your@email.com",
    "location": "Your Location"
  }
}
```

### Adding/Updating Projects

Edit `src/data/projects.json`:

```json
[
  {
    "id": 1,
    "title": "Project Title",
    "description": "Project description",
    "image": "/projects/project-1.webp",
    "technologies": ["React", "Next.js", "TypeScript"],
    "github": "https://github.com/username/repo",
    "demo": "https://demo-url.com"
  }
]
```

**Important:** Place project images in `/public/projects/` directory.

### Adding/Updating Skills

Edit `src/data/skills.json`:

```json
[
  {
    "name": "React.js",
    "icon": "react"
  },
  {
    "name": "Next.js",
    "icon": "nextjs"
  }
]
```

### Updating Resume PDF

1. Replace the file at `/public/resume.pdf` with your updated resume
2. Keep the filename as `resume.pdf` to maintain download links
3. Rebuild and redeploy the site

After updating any data files, rebuild the site to see changes:

```bash
bun run build
```

## 🚀 Deployment Guide

This is a static site that can be deployed to any static hosting platform. No server or database required!

### Deploy to Vercel (Recommended)

#### Option A: Deploy via Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

#### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Deploy to Netlify

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" > "Import an existing project"
4. Connect your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
6. Click "Deploy site"

### Deploy to GitHub Pages

1. Update `next.config.ts` to add your repository name as base path (if not using custom domain):

```typescript
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',
  images: {
    unoptimized: true,
  },
};
```

2. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

3. Enable GitHub Pages in repository settings (use `gh-pages` branch)

### Deploy to Cloudflare Pages

1. Push your code to GitHub/GitLab
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) > Pages
3. Click "Create a project" > "Connect to Git"
4. Select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
6. Click "Save and Deploy"

### Custom Domain Setup

After deploying, you can add a custom domain:

**Vercel:**
- Go to Project Settings > Domains
- Add your custom domain
- Configure DNS records as instructed

**Netlify:**
- Go to Site Settings > Domain Management
- Add custom domain
- Follow DNS configuration steps

**GitHub Pages:**
- Go to Repository Settings > Pages
- Add custom domain in "Custom domain" field
- Configure DNS with CNAME record

**Cloudflare Pages:**
- Go to your Pages project > Custom domains
- Add your domain
- DNS is automatically configured if domain is on Cloudflare

## 🛠 Tech Stack

- **Framework:** Next.js 16 with React 19
- **Styling:** Tailwind CSS + shadcn/ui components
- **Animations:** Framer Motion
- **Maps:** Mapbox GL JS (optional)
- **Language:** TypeScript
- **Deployment:** Static export (no server required)

## 📱 Mobile Optimization

The application is fully responsive and optimized for mobile devices:

- **Touch-friendly** interface
- **Optimized images** with lazy loading
- **Fast loading** with static generation
- **Responsive design** for all screen sizes

## 🐛 Troubleshooting

### Common Issues

#### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
bun install

# Try building again
bun run build
```

#### Images Not Loading

- Verify image files exist in `/public` directory
- Check image paths in JSON data files match actual file locations
- Ensure image filenames are correct (case-sensitive)

#### Map Not Loading

- Verify Mapbox token is valid (if using maps)
- Check token permissions and scopes
- Ensure `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` is set in environment

#### Resume Download Not Working

- Verify `resume.pdf` exists in `/public` directory
- Check file permissions
- Clear browser cache and try again

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Netlify Deployment Guide](https://docs.netlify.com)
- [Mapbox Documentation](https://docs.mapbox.com)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 💖 Support

If you find this project helpful, please give it a ⭐️ on GitHub!

## ⭐️ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Balla-Manish-Ranganatha-Chowdary/portfolio&type=Date)](https://star-history.com/#Balla-Manish-Ranganatha-Chowdary/portfolio&Date)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Need help?** Check the troubleshooting section above or open an issue in the repository.
