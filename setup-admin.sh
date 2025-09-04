#!/bin/bash

# GitHub Pages Deployment Setup Script
# This script helps configure your repository for the admin panel

echo "🚀 Setting up GitHub Pages deployment with admin panel..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository. Please run 'git init' first."
    exit 1
fi

# Get repository information
REPO_URL=$(git config --get remote.origin.url)
if [ -z "$REPO_URL" ]; then
    echo "❌ Error: No remote origin found. Please add a remote first."
    echo "   Example: git remote add origin https://github.com/username/repo-name.git"
    exit 1
fi

# Extract owner and repo name from URL
if [[ $REPO_URL =~ github\.com[:/]([^/]+)/([^/.]+) ]]; then
    OWNER="${BASH_REMATCH[1]}"
    REPO="${BASH_REMATCH[2]}"
    echo "✅ Repository detected: $OWNER/$REPO"
else
    echo "❌ Error: Could not parse GitHub repository URL"
    exit 1
fi

# Update next.config.js with correct repository name
echo "📝 Updating next.config.js..."
sed -i.bak "s/your-repo-name/$REPO/g" next.config.js
echo "✅ Updated next.config.js with repository name: $REPO"

# Create or update GitHub Actions workflow
echo "📝 Checking GitHub Actions workflow..."
if [ ! -f ".github/workflows/deploy.yml" ]; then
    echo "⚠️  GitHub Actions workflow not found. Please ensure .github/workflows/deploy.yml exists."
else
    echo "✅ GitHub Actions workflow found"
fi

echo ""
echo "🎉 Setup complete! Next steps:"
echo ""
echo "1. Create a GitHub Personal Access Token:"
echo "   - Go to: https://github.com/settings/tokens"
echo "   - Create a new token with 'repo' and 'workflow' permissions"
echo ""
echo "2. Push your changes:"
echo "   git add ."
echo "   git commit -m 'Add admin panel and update configuration'"
echo "   git push origin main"
echo ""
echo "3. Enable GitHub Pages:"
echo "   - Go to: https://github.com/$OWNER/$REPO/settings/pages"
echo "   - Source: GitHub Actions"
echo ""
echo "4. Access your admin panel:"
echo "   - URL: https://$OWNER.github.io/$REPO/admin"
echo "   - Password: crew2025 (change this in app/admin/page.tsx)"
echo ""
echo "5. Configure the admin panel:"
echo "   - Enter your GitHub token"
echo "   - Repository Owner: $OWNER"
echo "   - Repository Name: $REPO"
echo ""
echo "📚 For detailed instructions, see ADMIN_SETUP.md"