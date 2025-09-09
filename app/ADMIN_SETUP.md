# Admin Panel Setup Guide

## Overview

The admin panel allows you to edit presentation content directly through a web interface. Changes are automatically deployed via GitHub Actions.

## Setup Instructions

### 1. Create a GitHub Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a descriptive name like "Presentation Admin"
4. Select these scopes:
   - `repo` (Full control of private repositories)
   - `workflow` (Update GitHub Action workflows)
5. Copy the token (starts with `ghp_`)

### 2. Configure the Admin Panel

1. Navigate to `/admin` on your deployed site
2. Login with password: `crew2025` (change this in `app/admin/page.tsx`)
3. Enter your GitHub configuration:
   - **GitHub Token**: The token you created above
   - **Repository Owner**: Your GitHub username
   - **Repository Name**: The name of this repository
4. Click "Save Config"

### 3. Start Editing

- Click "Refresh" to load your slides
- Click "Edit" on any slide to modify its content
- Use "Create New Slide" to add new slides
- Changes are automatically committed to GitHub and deployed

## Features

### Current Features
- ✅ Password-protected admin interface
- ✅ Simple slide editing (title, subtitle, content)
- ✅ GitHub configuration management
- ✅ Local storage for settings
- ✅ Responsive design

### Planned Features
- 🔄 GitHub API integration (currently using mock data)
- 🔄 Advanced editor with syntax highlighting
- 🔄 Image upload and management
- 🔄 Slide templates and themes
- 🔄 Preview mode
- 🔄 Bulk operations

## Security Notes

- Change the default password in `app/admin/page.tsx`
- Keep your GitHub token secure
- Consider adding IP restrictions for production use
- The admin panel is publicly accessible at `/admin`

## Troubleshooting

### "No slides loaded"
- Check your GitHub token has the correct permissions
- Verify the repository owner and name are correct
- Ensure the repository exists and you have access

### "Error updating slide"
- Check your internet connection
- Verify the GitHub token is still valid
- Check the browser console for detailed error messages

## File Structure

```
app/
├── admin/
│   └── page.tsx          # Admin panel interface
├── api/
│   └── slides/
│       └── route.ts      # API endpoints for GitHub integration
└── pages/
    ├── 1/page.tsx        # Slide 1
    ├── 2/page.tsx        # Slide 2
    └── ...               # Additional slides
```

## Customization

### Changing the Password
Edit the `ADMIN_PASSWORD` constant in `app/admin/page.tsx`:

```typescript
const ADMIN_PASSWORD = 'your-new-password';
```

### Adding New Slide Templates
Modify the `generateSlideTemplate` function in `lib/slide-utils.ts` to add new templates.

### Styling
The admin panel uses Tailwind CSS and shadcn/ui components. Modify the JSX in `app/admin/page.tsx` to customize the appearance.

## Development

To run the admin panel locally:

```bash
npm run dev
```

Then navigate to `http://localhost:3000/admin`

## Deployment

The admin panel is automatically deployed with your presentation. No additional setup required.