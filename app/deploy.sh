#!/bin/bash

# Deployment script for GitHub Pages
echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Static files generated in 'out' directory"
    echo ""
    echo "🌐 To deploy to GitHub Pages:"
    echo "1. Push this repository to GitHub"
    echo "2. Go to repository Settings > Pages"
    echo "3. Select 'GitHub Actions' as source"
    echo "4. The workflow will automatically deploy on push to main branch"
    echo ""
    echo "📱 Mobile-friendly features enabled:"
    echo "- Responsive design for all screen sizes"
    echo "- Touch/swipe navigation"
    echo "- Optimized for mobile viewing"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
