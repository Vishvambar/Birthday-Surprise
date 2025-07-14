# AGENT.md - Kedu Birthday Surprise Project

## 🎉 Project Overview
This is a personalized birthday surprise web application built for Malkya from Shembdi. It's a React-based single-page application that creates an interactive birthday experience with multiple sections/pages.

### Purpose
- Interactive birthday surprise website
- Multi-page journey with animations
- Personal photo gallery, letter, music, and surprise elements
- Romantic/celebratory theme with heart animations and pastel colors

## 🛠️ Technology Stack

### Frontend Framework
- **React 19.1.0** with functional components and hooks
- **Vite 7.0.3** for build tooling and development server
- **React Router DOM 7.6.3** for client-side routing

### Styling & UI
- **Tailwind CSS 3.4.17** for utility-first styling
- **Framer Motion 12.23.0** for animations and transitions
- Custom color palette with pink, purple, and blue gradients
- **Dancing Script** font for romantic typography

### Build & Development Tools
- **ESLint 9.30.1** for code linting
- **PostCSS 8.5.6** with Autoprefixer for CSS processing
- **Vite React Plugin** for React fast refresh

## 📁 Project Structure

```
src/
├── App.jsx              # Main app component with routing
├── main.jsx            # React app entry point
├── App.css             # Global styles
├── index.css           # Base styles and Tailwind imports
├── pages/              # Route components
│   ├── Landing.jsx     # Welcome/home page
│   ├── Gallery.jsx     # Photo gallery
│   └── Letter.jsx      # Personal letter (final page)
└── assets/             # Static assets
    ├── photos/         # Photo gallery images
    ├── music/          # Audio files
    └── react.svg       # React logo
```

## 🚀 Development Commands

### Essential Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Port Information
- Development server runs on **http://localhost:5173** (Vite default)
- Preview server runs on **http://localhost:4173**

## 🎨 Design System

### Color Palette
- **Primary Pink**: #f472b6 (pink-400)
- **Light Pink**: #ffe4ec (pink-100)
- **Primary Purple**: #a78bfa (purple-400)
- **Light Purple**: #f3e8ff (purple-100)
- **Light Blue**: #e0f2fe (blue-100)

### Typography
- **Primary Font**: Dancing Script (cursive, romantic style)
- **Fallback**: system sans-serif

### Animation Patterns
- **Page Transitions**: Fade in/out with vertical slide (Framer Motion)
- **Heart Animations**: Pulsing/heartbeat effect
- **Interactive Elements**: Scale on hover/press
- **Background**: Gradient from pink → blue → purple

## 🧭 Navigation Flow

1. **Landing** (`/`) - Welcome page with animated heart
2. **Gallery** (`/gallery`) - Photo gallery section
3. **Letter** (`/letter`) - Personal letter/message (final page)

## 🎵 Background Music

The application features background music that plays throughout the user experience:
- Music controls appear in the top-right corner after 2 seconds
- Users can toggle play/pause with the floating music button
- Music loops continuously for ambient atmosphere
- Audio file: `WhatsApp Video 2025-07-08 at 10.38.47 PM.mp3`

## 🔧 Development Guidelines

### Component Patterns
- Use functional components with hooks
- Implement Framer Motion for page transitions
- Follow mobile-first responsive design
- Use Tailwind utility classes for styling

### Animation Guidelines
- Page transitions: `initial={{ opacity: 0, y: 30 }}` → `animate={{ opacity: 1, y: 0 }}`
- Duration: 0.6s with easeInOut
- Use AnimatePresence for route transitions

### Responsive Design
- Mobile-first approach with `sm:` breakpoints
- Flexible layouts using Flexbox/Grid
- Touch-friendly button sizes (min 44px)

## 📱 Platform Considerations

### Browser Support
- Modern browsers supporting ES6+ and CSS Grid
- Mobile browsers (iOS Safari, Chrome Mobile)
- Desktop browsers (Chrome, Firefox, Safari, Edge)

### Performance
- Vite for fast development and optimized builds
- Lazy loading for images in gallery
- Efficient animations with Framer Motion

## 🎯 Key Features

### Interactive Elements
- Animated hearts and confetti effects
- Smooth page transitions
- Touch/click interactions
- Responsive design for mobile and desktop

### Content Sections
- **Gallery**: Photo slideshow/grid
- **Letter**: Personal message display (final page)
- **Background Music**: Continuous ambient music with toggle controls

## 📝 Common Tasks

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route to `App.jsx`
3. Implement Framer Motion transitions
4. Add navigation from existing pages

### Styling Updates
1. Use Tailwind utility classes
2. Extend theme in `tailwind.config.js` if needed
3. Follow existing color palette
4. Maintain responsive design patterns

### Animation Changes
1. Use Framer Motion for complex animations
2. Keep consistent timing (0.6s duration)
3. Use easeInOut for smooth transitions
4. Test on mobile devices

## 🐛 Common Issues

### Build Issues
- Run `npm run lint` to check for code issues
- Ensure all imports are correct
- Check file paths (case-sensitive)

### Animation Performance
- Use `transform` properties for better performance
- Avoid animating layout-triggering properties
- Test on lower-end devices

### Mobile Responsiveness
- Test on various screen sizes
- Ensure touch targets are 44px minimum
- Check font sizes and readability

## 🚢 Deployment

### Build Process
```bash
npm run build
```

### Deployment Configuration
- Uses Vercel configuration (`vercel.json`)
- Static build output in `dist/` directory
- Client-side routing support required

### Environment
- No environment variables currently used
- All assets are bundled with the application
- No external API dependencies

## 💡 Future Enhancements

### Potential Features
- Audio autoplay controls
- Photo upload functionality
- Social sharing capabilities
- Additional animation effects
- Progressive Web App (PWA) features

### Technical Improvements
- TypeScript migration
- Unit testing setup
- Performance optimization
- SEO improvements
- Accessibility enhancements

## 📋 Maintenance Notes

### Regular Tasks
- Update dependencies (especially React and Vite)
- Run `npm audit` for security updates
- Test on new browser versions
- Optimize images and assets

### Monitoring
- Check build sizes after updates
- Monitor loading performance
- Test animations on various devices
- Validate responsive design

---

*This documentation is for AI agents working on the Kedu Birthday Surprise project. The project is a personal gift application with romantic themes and interactive elements.*
