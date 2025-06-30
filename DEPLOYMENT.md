# Deployment Guide

## Quick Deployment Options

### 1. Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Set up project
# - Connect to Git repository
# - Deploy automatically
```

### 2. Netlify
```bash
# Build the project
npm run build

# Upload dist folder to Netlify
# Or connect GitHub repository for automatic deployments
```

### 3. Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway deploy
```

## GitHub Repository Setup

### 1. Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Viram Tech website"
```

### 2. Create GitHub Repository
1. Go to GitHub.com
2. Create new repository: `viram-tech-website`
3. Don't initialize with README (already exists)

### 3. Push to GitHub
```bash
git remote add origin https://github.com/yourusername/viram-tech-website.git
git branch -M main
git push -u origin main
```

## Environment Configuration

### Production Environment Variables
```env
NODE_ENV=production
PORT=5000
```

### Optional (for future database integration)
```env
DATABASE_URL=postgresql://username:password@host:port/database
```

## Build Commands

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview  # Test production build locally
```

## Server Configuration

### Node.js Server (if self-hosting)
```bash
# Install PM2 for process management
npm install -g pm2

# Start application
pm2 start npm --name "viram-tech" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

### Nginx Configuration (if using reverse proxy)
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Domain Setup

### 1. DNS Configuration
- Point A record to your server IP
- Add CNAME for www subdomain
- Enable HTTPS with SSL certificate

### 2. SSL Certificate (Let's Encrypt)
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Generate certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Monitoring and Analytics

### 1. Google Analytics Setup
1. Create Google Analytics 4 property
2. Add tracking code to `client/index.html`
3. Configure goals and conversions

### 2. Performance Monitoring
- Use Vercel Analytics (if deployed on Vercel)
- Set up Lighthouse CI for performance monitoring
- Monitor Core Web Vitals

## Security Considerations

### 1. HTTPS
- Always use HTTPS in production
- Redirect HTTP to HTTPS
- Use HSTS headers

### 2. Content Security Policy
Add to `client/index.html`:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
               font-src 'self' https://fonts.gstatic.com;">
```

### 3. Rate Limiting (for API endpoints)
```javascript
// Add to server/index.ts
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

## Performance Optimization

### 1. Image Optimization
- Use WebP format for images
- Implement lazy loading
- Add proper alt tags for SEO

### 2. Caching Strategy
```nginx
# Nginx caching for static files
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 3. CDN Setup
- Use Cloudflare or similar CDN
- Enable compression and minification
- Set up proper cache headers

## Backup Strategy

### 1. Code Backup
- Use Git for version control
- Regular pushes to GitHub
- Tag releases for rollback capability

### 2. Database Backup (when database is added)
```bash
# PostgreSQL backup
pg_dump -h hostname -U username -d database_name > backup.sql

# Automated backups with cron
0 2 * * * pg_dump -h hostname -U username -d database_name > /backups/$(date +\%Y\%m\%d).sql
```

## Contact Form Data

### Current Implementation
- Uses in-memory storage
- Data is lost on server restart
- Suitable for development and low-traffic sites

### Production Recommendation
- Integrate with PostgreSQL database
- Set up email notifications for new submissions
- Add admin panel for viewing submissions

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (must be 18+)
   - Clear node_modules and reinstall
   - Check for TypeScript errors

2. **Deployment Issues**
   - Verify environment variables
   - Check build output directory
   - Ensure all dependencies are in package.json

3. **Performance Issues**
   - Run Lighthouse audit
   - Check bundle size with `npm run build`
   - Optimize images and assets

### Support Contacts
- **Technical Issues**: contact@viramtech.com
- **Hosting Questions**: Refer to hosting provider documentation