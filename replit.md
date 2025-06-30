# Viram Tech - Company Website

## Overview

This is a modern, professional website for Viram Tech, a Mumbai-based technology services company. The application is a frontend-only React application showcasing the company's services, values, and contact information. The website uses Docker's color palette (deep blues, navy blues, whites, and subtle grays) for a professional appearance.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation
- **Contact Form**: Uses mailto functionality for direct email integration

### Project Structure
- `client/` - React frontend application
- `attached_assets/` - Project assets and attachments

## Key Components

### Frontend Components
- **Header**: Fixed navigation with smooth scrolling
- **Hero Section**: Main landing area with company tagline and CTAs
- **Services Section**: Three core offerings (Products, Services, Talent)
- **Technology Stack**: Showcase of modern technologies
- **Why Choose Us**: Company values and core principles
- **Client Success**: Testimonials and statistics
- **About Section**: Company information and founder details
- **Contact Section**: Contact form and business information
- **Footer**: Additional navigation and company details

## Data Flow

1. **Contact Form Submission**:
   - User fills contact form → Frontend validation (Zod) → Opens email client with pre-filled message → User sends email directly
   
2. **Page Navigation**:
   - Smooth scrolling navigation between sections using element IDs
   
3. **Responsive Design**:
   - Mobile-first approach with breakpoint-based layouts

## External Dependencies

### Core Technologies
- **UI Components**: Radix UI primitives
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Hookform Resolvers
- **Validation**: Zod
- **Icons**: Lucide React
- **Date Handling**: date-fns

### Development Tools
- **TypeScript**: Type safety for frontend development
- **Vite**: Frontend development and building
- **Tailwind CSS**: Utility-first styling framework

## Deployment Strategy

### Development
- Vite dev server for frontend with HMR
- Integrated development environment with Replit support

### Production Build
1. Frontend: `vite build` → Static files in `dist/`
2. Deploy to static hosting services (Vercel, Netlify, GitHub Pages)

### Environment Variables
- `NODE_ENV` - Environment setting (development/production)

## Changelog
```
Changelog:
- June 30, 2025: Initial setup and complete website development
- June 30, 2025: Updated contact information (viramtech09@gmail.com, +91 9326505690)
- June 30, 2025: Refined GST registration mentions for better branding
- June 30, 2025: Created comprehensive GitHub documentation (README, LICENSE, CONTRIBUTING, DEPLOYMENT guides)
- June 30, 2025: Converted to frontend-only application - removed all backend components (Express server, database, API routes)
- June 30, 2025: Updated contact form to use mailto functionality for direct email integration
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```