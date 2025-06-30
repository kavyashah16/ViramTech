# GitHub Setup Instructions for Viram Tech Website

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the details:
   - **Repository name**: `viram-tech-website`
   - **Description**: "Professional Mumbai-based technology services website for Viram Tech - Frontend-only React application"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README (we already have one)

## Step 2: Download Project Files

Since this is a Replit environment, you'll need to download the project files:

1. In Replit, click on the three dots menu (⋯) in the file explorer
2. Select "Download as zip"
3. Extract the zip file on your local machine

## Step 3: Clean Up Project (Optional)

Remove Replit-specific files before uploading:
- Delete `.replit` file
- Delete `replit.nix` file
- Keep `.gitignore` (already configured for this project)

## Step 4: Initialize Git and Push to GitHub

Open terminal/command prompt in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Frontend-only Viram Tech website"

# Add GitHub remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/viram-tech-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 5: Configure GitHub Pages (Optional)

To host your website directly on GitHub Pages:

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. Create `.github/workflows/deploy.yml` with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Project Structure

Your repository will contain:
```
viram-tech-website/
├── client/                 # React frontend application
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   └── index.html         # Main HTML file
├── server/                # Minimal server redirect (for Replit compatibility)
├── attached_assets/       # Project attachments
├── documentation files    # README, LICENSE, etc.
├── package.json           # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── .gitignore            # Git ignore rules
```

## Available Scripts

After cloning and installing dependencies:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contact Information

- **Email**: viramtech09@gmail.com
- **Phone**: +91 9326505690
- **GST**: 27PONPS7663D1ZZ
- **Location**: Mumbai, Maharashtra, India

## Features

- Frontend-only React application
- Docker-inspired professional design
- Contact form with mailto functionality
- Fully responsive design
- SEO optimized
- Ready for static hosting (Vercel, Netlify, GitHub Pages)