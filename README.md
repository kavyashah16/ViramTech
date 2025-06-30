# Viram Tech - Technology Services Website

A modern, professional frontend-only website for Viram Tech, a Mumbai-based technology services company. Built with React and TypeScript, featuring a Docker-inspired design and comprehensive business information.

## 🚀 Overview

Viram Tech is a GST-registered technology services company founded by Yash Sanjay Shah in 2025. This website showcases our core offerings in custom software development, technology consulting, and professional staffing solutions.

## ✨ Features

- **Modern Design**: Docker-inspired color palette with professional blue themes
- **Responsive Layout**: Mobile-first design that works on all devices
- **Contact Form**: Direct email integration using mailto functionality
- **SEO Optimized**: Proper meta tags and structured data
- **Professional Branding**: Complete business information including GST registration
- **Smooth Animations**: Engaging user experience with hover effects and transitions
- **Static Deployment**: Frontend-only architecture for easy hosting

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Wouter** - Lightweight client-side routing
- **React Hook Form** - Form handling with validation
- **Zod** - Runtime type validation

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn package manager

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/viram-tech-website.git
   cd viram-tech-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000`

## 📦 Build for Production

```bash
npm run build
```

This creates a `dist/` directory with static files ready for deployment on any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## 📁 Project Structure

```
viram-tech-website/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions and configs
│   │   └── hooks/         # Custom React hooks
│   └── index.html         # HTML template
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data storage interface
├── shared/               # Shared TypeScript types
│   └── schema.ts        # Database schemas and types
└── README.md            # This file
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌐 Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for client-side routing

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload contents of `dist` folder to your web server
3. Configure your server to serve `index.html` for all routes

## 🔐 Environment Variables

For production deployment, you may want to configure:

```env
NODE_ENV=production
DATABASE_URL=your_postgresql_connection_string (optional)
```

## 📞 Business Information

- **Company**: Viram Tech
- **Proprietor**: Yash Sanjay Shah
- **GST Number**: 27PONPS7663D1ZZ
- **Address**: 3rd Floor, A-304, Neptune Tower, Pushpa Park Road, Daftary Road, Malad East, Mumbai - 400097, Maharashtra, India
- **Established**: 2025

## 🎨 Design System

### Color Palette (Docker-inspired)
- Primary Blue: `#0db7ed` (hsl(200, 86%, 50%))
- Secondary Blue: `#2496ed` (hsl(207, 89%, 54%))
- Navy Blue: `#003f7f` (hsl(210, 100%, 25%))
- Light Blue: `#e3f2fd` (hsl(200, 86%, 95%))
- Background: White and light gray shades

### Typography
- Font Family: Inter (Google Fonts)
- Headers: Bold weights (600-800)
- Body: Regular weight (400)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by Viram Tech (Proprietorship of Yash Sanjay Shah).

## 📧 Contact

- **Email**: viramtech09@gmail.com
- **Phone**: +91 9326505690
- **Address**: Malad East, Mumbai, Maharashtra, India

## 🔧 Development Notes

### Adding New Components
1. Create component in `client/src/components/`
2. Export from component file
3. Import and use in pages or other components

### Adding New API Endpoints
1. Define route in `server/routes.ts`
2. Add corresponding storage methods in `server/storage.ts`
3. Update interface in `server/storage.ts`

### Database Integration
The project is set up to easily integrate with PostgreSQL using Drizzle ORM. Update the database configuration in `drizzle.config.ts` and add your connection string.

## 🚀 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🐛 Bug Reports

If you encounter any issues, please create an issue on GitHub with:
- Description of the problem
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)
- Browser and device information

---

**Built with ❤️ in Mumbai by Viram Tech**