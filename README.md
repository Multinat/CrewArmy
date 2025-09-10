
# 2025 Team Army Excellence Strategy - PowerPoint Presentation

A professional PowerPoint presentation built as a Next.js web application, featuring 19 interactive slides covering the comprehensive Team Army Excellence Strategy for Crew Army packaging operators.

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Features](#features)
- [Slides Overview](#slides-overview)
- [Development Notes](#development-notes)
- [Troubleshooting](#troubleshooting)
- [Export Options](#export-options)

## 🎯 Overview

This presentation is structured around the four primary VPO pillars (Safety, Quality, Volume, Cost) with integration of three additional VPO pillars (Management, Logistics, Environment) and People as cross-cutting enablers. It includes:

- **19 Interactive Slides** with professional layouts
- **Machine-Specific Roles & Responsibilities** for Crew Army operations  
- **VPO Framework Implementation** with color-coded sections
- **Backend RACI Matrix** for operational clarity
- **Keyboard Navigation** support (Left/Right arrows)
- **Dark Theme** with consistent branding
- **Responsive Design** optimized for 1920x1080 presentations

## 🔧 Prerequisites

Before running this project locally, ensure you have the following installed on your computer:

### Required Software:
- **Node.js** (version 18.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- **Git** (optional, for version control) - [Download here](https://git-scm.com/)

### System Requirements:
- **Operating System**: Windows 10/11, macOS 10.14+, or Linux
- **RAM**: Minimum 4GB, recommended 8GB+
- **Storage**: At least 500MB free space for dependencies

## 🚀 Installation

Follow these steps to set up the project on your local computer:

### Step 1: Extract the Project
If you received this as a compressed file (ZIP/TAR.GZ), extract it to your desired location:
```bash
# For ZIP files
unzip packaging_strategy_ppt.zip
cd packaging_strategy_ppt

# For TAR.GZ files  
tar -xzf packaging_strategy_ppt.tar.gz
cd packaging_strategy_ppt
```

### Step 2: Navigate to the App Directory
```bash
cd app
```

### Step 3: Install Dependencies
Choose one of the following methods:

**Using npm (recommended):**
```bash
npm install
```

**Using yarn (alternative):**
```bash
yarn install
```

This will download and install all required packages (~200+ dependencies). The installation may take 2-5 minutes depending on your internet connection.

## 🏃‍♂️ Running the Project

### Development Server (Recommended for Local Use)
Start the development server with hot reloading:

```bash
npm run dev
```
or
```bash
yarn dev
```

Once started, open your web browser and go to:
**http://localhost:3000**

The presentation will automatically open to Slide 1, and you can navigate using:
- **Right Arrow Key**: Next slide  
- **Left Arrow Key**: Previous slide
- **URL Navigation**: Direct access via `/pages/1` through `/pages/19`

### Production Build (For Deployment)
To create an optimized production build:

```bash
npm run build
npm start
```

## 📁 Project Structure

```
packaging_strategy_ppt/
├── app/                          # Main Next.js application
│   ├── app/                      # App router pages
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout component
│   │   ├── page.tsx             # Home page (redirects to slide 1)
│   │   └── pages/               # Individual slide pages
│   │       ├── 1/page.tsx       # Slide 1: Title Slide
│   │       ├── 2/page.tsx       # Slide 2: Operational Excellence Framework
│   │       ├── 3/page.tsx       # Slide 3: Safety First Responsibilities
│   │       ├── 4/page.tsx       # Slide 4: Quality Always Responsibilities
│   │       ├── 5/page.tsx       # Slide 5: Volume Optimization
│   │       ├── 6/page.tsx       # Slide 6: Cost Management
│   │       ├── 7/page.tsx       # Slide 7: Crew Army Method & Principles
│   │       ├── 8/page.tsx       # Slide 8: KPIs & Performance Metrics
│   │       ├── 9/page.tsx       # Slide 9: Implementation Roadmap
│   │       ├── 10/page.tsx      # Slide 10: Filler Machine Roles
│   │       ├── 11/page.tsx      # Slide 11: EBI Machine Roles
│   │       ├── 12/page.tsx      # Slide 12: Pasteuriser Roles
│   │       ├── 13/page.tsx      # Slide 13: Bottlewasher Roles
│   │       ├── 14/page.tsx      # Slide 14: Labellers Roles
│   │       ├── 15/page.tsx      # Slide 15: Backend RACI Matrix
│   │       ├── 16/page.tsx      # Slide 16: Unpacker/Packer Roles
│   │       ├── 17/page.tsx      # Slide 17: Depalletiser/Palletiser Roles
│   │       ├── 18/page.tsx      # Slide 18: Cratewasher Roles
│   │       └── 19/page.tsx      # Slide 19: Crate Accumulator Roles
│   ├── components/              # Reusable React components
│   │   ├── keyboard-navigation.tsx  # Arrow key navigation logic
│   │   ├── theme-provider.tsx       # Dark theme provider
│   │   └── ui/                      # UI component library (60+ components)
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility functions
│   ├── package.json            # Project dependencies and scripts
│   ├── next.config.js          # Next.js configuration
│   ├── tailwind.config.ts      # Tailwind CSS configuration
│   └── tsconfig.json           # TypeScript configuration
├── layout_plan/                # Original design plans and documentation
└── README.md                   # This file
```

## ✨ Features

### 🎨 Design Features
- **Professional Dark Theme** with gradient backgrounds
- **VPO Color Coding**: Safety (Yellow), Quality (Green), Volume (Orange), Cost (Purple)
- **Consistent Typography** using Inter font with proper sizing hierarchy
- **Interactive Elements** with hover effects and smooth transitions
- **1920x1080 Optimized** for presentation displays

### 🧭 Navigation Features  
- **Keyboard Navigation**: Left/Right arrow keys
- **URL-based Navigation**: Direct slide access via URLs
- **Slide Counter**: Shows current position (e.g., "Slide 1 of 19")
- **Seamless Transitions** between slides

### 📊 Content Features
- **RACI Matrix** with interactive role assignments
- **Color-coded Machine Sections** for easy identification
- **Structured Information Hierarchy** with consistent layouts
- **Professional Icons** from Lucide React library

## 🎬 Slides Overview

1. **Title Slide** - "2025 Team Army Excellence Strategy"
2. **Operational Excellence Framework** - VPO pillars overview  
3. **Safety First** - Comprehensive safety responsibilities
4. **Quality Always** - Quality assurance protocols
5. **Volume Optimization** - Production efficiency metrics
6. **Cost Management** - Cost optimization strategies
7. **Crew Army Method & Principles** - 12-point methodology
8. **KPIs & Performance Metrics** - Success indicators
9. **Implementation Roadmap** - Three-phase rollout plan
10. **Filler Machine Roles** - Primary and secondary responsibilities
11. **EBI Machine Roles** - Inspection and support duties
12. **Pasteuriser Roles** - Temperature control and coordination
13. **Bottlewasher Roles** - Cleaning system operations
14. **Labellers Roles** - Labeling process management
15. **Backend RACI Matrix** - Role assignment matrix
16. **Unpacker/Packer Roles** - Case handling protocols
17. **Depalletiser/Palletiser Roles** - Pallet management
18. **Cratewasher Roles** - Crate cleaning operations
19. **Crate Accumulator Roles** - Stacking system protocols

## 🔧 Development Notes

### Technology Stack
- **Next.js 14** with App Router
- **React 18** with TypeScript
- **Tailwind CSS 3** for styling
- **Radix UI** for accessible components
- **Lucide React** for icons
- **Chart.js** for data visualization

### Configuration Notes
- **Static Export Ready**: Configured for static site generation
- **TypeScript Strict Mode**: Full type safety enabled
- **ESLint Configuration**: Code quality enforcement
- **Responsive Images**: Optimized for various screen sizes

### Customization
To modify slides, edit the corresponding files in `app/pages/[slide-number]/page.tsx`. Each slide is a self-contained React component with:
- Consistent layout structure
- Color-coded theming
- Keyboard navigation integration
- Responsive design principles

## 🔍 Troubleshooting

### Common Issues and Solutions:

**Issue: "Module not found" errors**
```bash
# Solution: Clear cache and reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Issue: Port 3000 already in use**
```bash
# Solution: Use a different port
npm run dev -- -p 3001
# Then visit http://localhost:3001
```

**Issue: Build fails with TypeScript errors**
```bash
# Solution: Check for type errors
npm run lint
# Fix any reported TypeScript issues
```

**Issue: Slides not displaying correctly**
- Ensure you're using a modern browser (Chrome, Firefox, Safari, Edge)
- Check browser console for JavaScript errors
- Verify viewport size (optimized for 1920x1080)

**Issue: Navigation not working**
- Refresh the page and try again
- Check if JavaScript is enabled in your browser
- Ensure you're using keyboard arrow keys, not other keys

### Performance Optimization
- The app is optimized for development with hot-reloading
- For better performance, use the production build (`npm run build && npm start`)
- Consider using a faster package manager like `yarn` or `pnpm`

## 📤 Export Options

While running locally, you can:

1. **Print to PDF**: Use your browser's print function (Ctrl+P / Cmd+P) and select "Save as PDF"
2. **Screenshot Individual Slides**: Use browser developer tools or screenshot tools
3. **Static Export**: Run `npm run build` to generate static HTML files
4. **Deploy Online**: Deploy to Vercel, Netlify, or GitHub Pages for online access

## 🛠️ Additional Commands

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build for production
npm run build

# Start production server
npm start

# Clean install (if having dependency issues)
npm ci
```

## 📞 Support

If you encounter any issues while setting up or running this presentation:

1. **Check Prerequisites**: Ensure Node.js 18+ is installed
2. **Clear Cache**: Delete `node_modules` and reinstall
3. **Check Console**: Look for error messages in the browser developer console
4. **Try Different Browser**: Test in Chrome, Firefox, or Safari
5. **Check Network**: Ensure stable internet connection for initial setup

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**

*Last Updated: December 2024*

<!-- Updated with improved desktop header spacing for better browser compatibility -->
