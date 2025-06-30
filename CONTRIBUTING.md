# Contributing to Viram Tech Website

Thank you for your interest in contributing to the Viram Tech website project. This document provides guidelines for contributing to this repository.

## Code of Conduct

This project is proprietary software owned by Viram Tech (Proprietorship of Yash Sanjay Shah). Contributions are welcome under the terms specified in this document.

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control
- Code editor (VS Code recommended)

### Development Setup
1. Fork the repository (if you have permission)
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`
5. Open `http://localhost:5000` in your browser

## Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow existing naming conventions
- Use Tailwind CSS for styling
- Maintain consistent indentation (2 spaces)
- Add proper TypeScript types

### Component Structure
```
client/src/components/
├── ui/           # Reusable UI components (shadcn/ui)
├── component-name.tsx  # Business logic components
└── ...
```

### File Naming
- Use kebab-case for file names: `hero-section.tsx`
- Use PascalCase for component names: `HeroSection`
- Use camelCase for function and variable names

### TypeScript Guidelines
- Define proper interfaces and types
- Use shared types from `shared/schema.ts`
- Avoid `any` type usage
- Add JSDoc comments for complex functions

## Making Changes

### Before You Start
1. Check existing issues and pull requests
2. Create an issue describing your proposed changes
3. Wait for approval before starting work
4. Keep changes focused and atomic

### Development Process
1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes following the guidelines
3. Test your changes thoroughly
4. Commit with clear, descriptive messages
5. Push to your fork and submit a pull request

### Commit Message Format
```
type(scope): brief description

Longer description if needed

- List of changes
- Additional context
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:
```
feat(contact): add phone number validation for Indian numbers
fix(header): resolve mobile menu closing issue
docs(readme): update deployment instructions
```

## Testing

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Contact form submits successfully
- [ ] Mobile responsive design works
- [ ] All navigation links function
- [ ] No console errors in browser
- [ ] Performance is acceptable (Lighthouse score >90)

### Browser Testing
Test in the following browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Mobile Testing
Test on various screen sizes:
- iPhone (Safari)
- Android (Chrome)
- Tablet devices

## Pull Request Process

### Before Submitting
1. Ensure your code follows the style guidelines
2. Test your changes on multiple browsers
3. Update documentation if needed
4. Rebase your branch on the latest main branch

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Style/formatting change
- [ ] Refactoring
- [ ] Performance improvement

## Testing
- [ ] Manual testing completed
- [ ] Cross-browser testing done
- [ ] Mobile responsive testing done

## Screenshots
(If applicable, add screenshots of visual changes)

## Additional Notes
Any additional context or considerations
```

### Review Process
1. Code review by project maintainers
2. Testing on staging environment
3. Approval required before merging
4. Automatic deployment after merge

## Areas for Contribution

### High Priority
- Performance optimizations
- SEO improvements
- Accessibility enhancements
- Mobile experience improvements

### Medium Priority
- Additional animations and micro-interactions
- Enhanced form validation
- New component variations
- Documentation improvements

### Low Priority
- Code refactoring
- Additional utility functions
- Style improvements
- Testing enhancements

## Specific Guidelines

### UI/UX Changes
- Maintain consistency with Docker-inspired design
- Use existing color palette and typography
- Ensure accessibility compliance (WCAG 2.1 AA)
- Test with screen readers if adding new interactive elements

### Backend Changes
- Follow RESTful API conventions
- Add proper error handling
- Validate all inputs with Zod schemas
- Maintain backward compatibility

### Database Changes
- Create migrations for schema changes
- Update TypeScript types accordingly
- Test data integrity
- Document any breaking changes

## Getting Help

### Resources
- Project documentation in README.md
- Design system in Tailwind config
- Component examples in shadcn/ui docs
- TypeScript documentation

### Contact
- Email: viramtech09@gmail.com
- Create an issue for bugs or feature requests
- Check existing documentation before asking questions

## Recognition

Contributors will be acknowledged in:
- CONTRIBUTORS.md file
- Release notes for significant contributions
- Project documentation where appropriate

## Legal

By contributing to this project, you agree that:
- Your contributions will be licensed under the same proprietary license
- You have the right to submit your contributions
- Viram Tech retains ownership of all contributed code
- You waive any claims to intellectual property in your contributions

## Quality Standards

### Code Quality
- Write clean, readable code
- Follow DRY (Don't Repeat Yourself) principles
- Add comments for complex logic
- Use meaningful variable and function names

### Performance
- Optimize images and assets
- Minimize bundle size
- Use lazy loading where appropriate
- Monitor Core Web Vitals

### Security
- Validate all user inputs
- Follow security best practices
- Don't commit sensitive information
- Use HTTPS in production

Thank you for contributing to Viram Tech's success!