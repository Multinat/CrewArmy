# GitHub Pages Deployment Setup Script (PowerShell)
# This script helps configure your repository for the admin panel

Write-Host "🚀 Setting up GitHub Pages deployment with admin panel..." -ForegroundColor Green

# Check if we're in a git repository
if (-not (Test-Path ".git")) {
    Write-Host "❌ Error: Not in a git repository. Please run 'git init' first." -ForegroundColor Red
    exit 1
}

# Get repository information
try {
    $repoUrl = git config --get remote.origin.url
    if (-not $repoUrl) {
        Write-Host "❌ Error: No remote origin found. Please add a remote first." -ForegroundColor Red
        Write-Host "   Example: git remote add origin https://github.com/username/repo-name.git" -ForegroundColor Yellow
        exit 1
    }
} catch {
    Write-Host "❌ Error: Git not found or not configured." -ForegroundColor Red
    exit 1
}

# Extract owner and repo name from URL
if ($repoUrl -match "github\.com[:/]([^/]+)/([^/.]+)") {
    $owner = $matches[1]
    $repo = $matches[2]
    Write-Host "✅ Repository detected: $owner/$repo" -ForegroundColor Green
} else {
    Write-Host "❌ Error: Could not parse GitHub repository URL" -ForegroundColor Red
    exit 1
}

# Update next.config.js with correct repository name
Write-Host "📝 Updating next.config.js..." -ForegroundColor Blue
if (Test-Path "next.config.js") {
    $content = Get-Content "next.config.js" -Raw
    $content = $content -replace "your-repo-name", $repo
    Set-Content "next.config.js" $content
    Write-Host "✅ Updated next.config.js with repository name: $repo" -ForegroundColor Green
} else {
    Write-Host "⚠️  next.config.js not found" -ForegroundColor Yellow
}

# Check GitHub Actions workflow
Write-Host "📝 Checking GitHub Actions workflow..." -ForegroundColor Blue
if (Test-Path ".github/workflows/deploy.yml") {
    Write-Host "✅ GitHub Actions workflow found" -ForegroundColor Green
} else {
    Write-Host "⚠️  GitHub Actions workflow not found. Please ensure .github/workflows/deploy.yml exists." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🎉 Setup complete! Next steps:" -ForegroundColor Green
Write-Host ""
Write-Host "1. Create a GitHub Personal Access Token:" -ForegroundColor Cyan
Write-Host "   - Go to: https://github.com/settings/tokens" -ForegroundColor White
Write-Host "   - Create a new token with 'repo' and 'workflow' permissions" -ForegroundColor White
Write-Host ""
Write-Host "2. Push your changes:" -ForegroundColor Cyan
Write-Host "   git add ." -ForegroundColor White
Write-Host "   git commit -m 'Add admin panel and update configuration'" -ForegroundColor White
Write-Host "   git push origin main" -ForegroundColor White
Write-Host ""
Write-Host "3. Enable GitHub Pages:" -ForegroundColor Cyan
Write-Host "   - Go to: https://github.com/$owner/$repo/settings/pages" -ForegroundColor White
Write-Host "   - Source: GitHub Actions" -ForegroundColor White
Write-Host ""
Write-Host "4. Access your admin panel:" -ForegroundColor Cyan
Write-Host "   - URL: https://$owner.github.io/$repo/admin" -ForegroundColor White
Write-Host "   - Password: crew2025 (change this in app/admin/page.tsx)" -ForegroundColor White
Write-Host ""
Write-Host "5. Configure the admin panel:" -ForegroundColor Cyan
Write-Host "   - Enter your GitHub token" -ForegroundColor White
Write-Host "   - Repository Owner: $owner" -ForegroundColor White
Write-Host "   - Repository Name: $repo" -ForegroundColor White
Write-Host ""
Write-Host "📚 For detailed instructions, see ADMIN_SETUP.md" -ForegroundColor Magenta