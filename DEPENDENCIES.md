# Dependencies and Requirements

## System Requirements

### Node.js Environment
- **Node.js**: 18.x or higher
- **npm**: 9.x or higher
- **Package Manager**: npm (recommended) or yarn

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Production Dependencies

### Core Framework
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "typescript": "^5.0.0",
  "vite": "^5.0.0"
}
```

### Backend
```json
{
  "express": "^4.18.0",
  "express-session": "^1.17.0",
  "@types/express": "^4.17.0",
  "@types/express-session": "^1.17.0"
}
```

### UI and Styling
```json
{
  "tailwindcss": "^3.3.0",
  "@tailwindcss/typography": "^0.5.0",
  "tailwindcss-animate": "^1.0.0",
  "tailwind-merge": "^2.0.0",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.0.0"
}
```

### Forms and Validation
```json
{
  "react-hook-form": "^7.45.0",
  "@hookform/resolvers": "^3.3.0",
  "zod": "^3.22.0",
  "zod-validation-error": "^2.0.0"
}
```

### State Management and Data Fetching
```json
{
  "@tanstack/react-query": "^5.0.0"
}
```

### Routing
```json
{
  "wouter": "^3.0.0"
}
```

### UI Components (Radix UI)
```json
{
  "@radix-ui/react-accordion": "^1.1.0",
  "@radix-ui/react-alert-dialog": "^1.0.0",
  "@radix-ui/react-avatar": "^1.0.0",
  "@radix-ui/react-button": "^0.1.0",
  "@radix-ui/react-card": "^0.1.0",
  "@radix-ui/react-dialog": "^1.0.0",
  "@radix-ui/react-dropdown-menu": "^2.0.0",
  "@radix-ui/react-form": "^0.0.0",
  "@radix-ui/react-label": "^2.0.0",
  "@radix-ui/react-popover": "^1.0.0",
  "@radix-ui/react-select": "^2.0.0",
  "@radix-ui/react-separator": "^1.0.0",
  "@radix-ui/react-sheet": "^0.1.0",
  "@radix-ui/react-slot": "^1.0.0",
  "@radix-ui/react-toast": "^1.1.0",
  "@radix-ui/react-tooltip": "^1.0.0"
}
```

### Icons and Assets
```json
{
  "lucide-react": "^0.400.0",
  "react-icons": "^4.11.0"
}
```

### Database (Optional - Ready for PostgreSQL)
```json
{
  "drizzle-orm": "^0.29.0",
  "drizzle-kit": "^0.20.0",
  "@neondatabase/serverless": "^0.6.0"
}
```

## Development Dependencies

### Build Tools
```json
{
  "@vitejs/plugin-react": "^4.0.0",
  "vite": "^5.0.0",
  "esbuild": "^0.19.0"
}
```

### TypeScript Support
```json
{
  "typescript": "^5.0.0",
  "@types/node": "^20.0.0",
  "@types/react": "^18.2.0",
  "@types/react-dom": "^18.2.0"
}
```

### CSS Processing
```json
{
  "postcss": "^8.4.0",
  "autoprefixer": "^10.4.0"
}
```

## Installation Commands

### Full Installation
```bash
npm install
```

### Development Only
```bash
npm install --only=dev
```

### Production Only
```bash
npm install --only=production
```

## Server Requirements (Production)

### Minimum Requirements
- **RAM**: 512MB
- **Storage**: 100MB for application files
- **CPU**: 1 vCPU
- **Network**: HTTPS support required

### Recommended Requirements
- **RAM**: 1GB
- **Storage**: 500MB (including logs and cache)
- **CPU**: 2 vCPU
- **CDN**: CloudFlare or similar for optimal performance

### Environment Variables
```bash
NODE_ENV=production
PORT=5000
DATABASE_URL=postgresql://... (optional)
```

## Optional Integrations

### Database (PostgreSQL)
- **Version**: 13+
- **Extensions**: None required
- **Connection Pooling**: Recommended for production

### Email Service (Future Enhancement)
- SendGrid, Mailgun, or similar
- SMTP configuration required

### Analytics (Future Enhancement)
- Google Analytics 4
- Privacy-compliant tracking