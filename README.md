# Mobile-Responsive Interactive Presentation

A modern, mobile-optimized interactive presentation template built with Next.js, designed for deployment on GitHub Pages.

## 🚀 Features

- **📱 Mobile-First Design**: Fully responsive and optimized for mobile devices
- **👆 Touch Navigation**: Swipe gestures for mobile, keyboard navigation for desktop
- **🎨 Modern UI**: Built with Tailwind CSS and shadcn/ui components
- **⚡ Static Export**: Optimized for GitHub Pages deployment
- **🎯 Interactive**: Progress indicators, slide counters, and smooth transitions
- **🌙 Dark Theme**: Professional dark theme throughout

## 📱 Navigation

### Mobile Devices
- **Swipe left/right** to navigate between slides
- **Tap navigation buttons** at the bottom of the screen
- **Use arrow keys** if you have a physical keyboard

### Desktop
- **Arrow keys** (← →) to navigate
- **Spacebar** to go to next slide
- **Home/End** keys to jump to first/last slide

## 🛠 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development
```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Open http://localhost:3000
```

### Building for Production
```bash
# Build and export static files
npm run build

# Files will be generated in the 'out' directory
```

## 🚀 GitHub Pages Deployment

### Automatic Deployment (Recommended)

1. **Fork or clone this repository**
2. **Update the repository name** in `next.config.js`:
   ```javascript
   basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
   assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
   ```
3. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions
4. **Push to main branch** - deployment happens automatically!

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the 'out' directory to your hosting service
```

## 📁 Project Structure

```
├── app/
│   ├── pages/
│   │   ├── 1/page.tsx          # Slide 1
│   │   ├── 2/page.tsx          # Slide 2
│   │   └── ...                 # More slides (up to 18)
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page (redirects to slide 1)
├── components/
│   ├── ui/                     # shadcn/ui components
│   └── keyboard-navigation.tsx # Navigation logic
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions deployment
└── next.config.js              # Next.js configuration
```

## 🎨 Customization

### Adding New Slides
1. Create a new directory: `app/pages/[number]/`
2. Add a `page.tsx` file with your slide content
3. Update the total slide count in the redirect (if needed)

### Styling
- **Global styles**: Edit `app/globals.css`
- **Component styles**: Use Tailwind CSS classes
- **Responsive design**: Built-in mobile-first approach

### Content
Each slide is a React component. Use the responsive classes:
- `slide-container`: Main slide wrapper
- `slide-title`: Responsive title styling
- Standard Tailwind responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`

## 📱 Mobile Optimization Features

- **Dynamic viewport height** (`100dvh`) for better mobile display
- **Touch gesture support** with configurable swipe threshold
- **Mobile navigation buttons** with visual feedback
- **Responsive typography** that scales across devices
- **Optimized images** and assets for faster loading
- **No horizontal scrolling** on any device size

## 🔧 Configuration

### Environment Variables
- `NODE_ENV`: Set to 'production' for GitHub Pages deployment

### Next.js Config
- **Static export** enabled for GitHub Pages
- **Image optimization** disabled for static hosting
- **Base path** configured for repository subdirectory

## 📄 License

MIT License - feel free to use this template for your presentations!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on mobile devices
5. Submit a pull request

---

**Made with ❤️ for mobile-first presentations**