import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function POST(request: NextRequest) {
  try {
    const { pageNumber } = await request.json();
    
    if (!pageNumber) {
      return NextResponse.json({ error: 'Page number is required' }, { status: 400 });
    }

    // Use existing build output instead of rebuilding
    const outPath = path.join(process.cwd(), 'out');
    if (!fs.existsSync(outPath)) {
      return NextResponse.json({ 
        error: 'No build output found. Please run "npm run build" first in terminal.',
        suggestion: 'Run: npm run build && then try Push again'
      }, { status: 404 });
    }

    const pagePath = path.join(outPath, 'pages', pageNumber.toString());
    if (!fs.existsSync(pagePath)) {
      return NextResponse.json({ 
        error: `Page ${pageNumber} not found in build output`,
        suggestion: 'Make sure the page builds successfully'
      }, { status: 404 });
    }

    // Create deployment package from existing build
    const deployPath = path.join(process.cwd(), 'github-deploy');
    
    // Clean and recreate deploy directory
    if (fs.existsSync(deployPath)) {
      fs.rmSync(deployPath, { recursive: true, force: true });
    }
    fs.mkdirSync(deployPath, { recursive: true });

    // Copy page files
    const pageFiles = fs.readdirSync(pagePath);
    for (const file of pageFiles) {
      fs.copyFileSync(
        path.join(pagePath, file),
        path.join(deployPath, file)
      );
    }

    // Copy _next assets if they exist
    const nextPath = path.join(outPath, '_next');
    if (fs.existsSync(nextPath)) {
      fs.mkdirSync(path.join(deployPath, '_next'), { recursive: true });
      
      const copyDir = (src: string, dest: string) => {
        if (!fs.existsSync(dest)) {
          fs.mkdirSync(dest, { recursive: true });
        }
        const items = fs.readdirSync(src);
        for (const item of items) {
          const srcPath = path.join(src, item);
          const destPath = path.join(dest, item);
          if (fs.statSync(srcPath).isDirectory()) {
            copyDir(srcPath, destPath);
          } else {
            fs.copyFileSync(srcPath, destPath);
          }
        }
      };
      copyDir(nextPath, path.join(deployPath, '_next'));
    }

    // Create deployment info
    const deployInfo = {
      pageNumber,
      timestamp: new Date().toISOString(),
      status: 'ready_for_github',
      filesIncluded: fs.readdirSync(deployPath),
      method: 'force_push_deploy'
    };
    
    fs.writeFileSync(
      path.join(deployPath, 'deploy-info.json'), 
      JSON.stringify(deployInfo, null, 2)
    );

    // Auto-commit and force push the changes
    try {
      const { exec } = require('child_process');
      const { promisify } = require('util');
      const execAsync = promisify(exec);
      
      // Navigate to project root and commit changes
      const rootPath = path.join(process.cwd(), '..');
      
      // Add the updated JSON file and the specific page
      await execAsync(`git add app/lib/slide-content.json`, { cwd: rootPath });
      await execAsync(`git add app/app/pages/${pageNumber}/page.tsx`, { cwd: rootPath });
      await execAsync(`git add app/github-deploy/`, { cwd: rootPath });
      
      // Amend the previous commit (overwrites history)
      await execAsync(`git commit --amend -m "Latest page updates - Page ${pageNumber} edited

- Updated Page ${pageNumber} content via editor
- Timestamp: ${deployInfo.timestamp}
- Auto-deployed via Push button"`, { cwd: rootPath });
      
      // Force push to overwrite GitHub history
      await execAsync(`git push --force origin main`, { cwd: rootPath });
      
      return NextResponse.json({ 
        success: true, 
        message: `🚀 Page ${pageNumber} deployed and pushed to GitHub! (Overwrote previous commit)`,
        deployPath: deployPath,
        filesCreated: deployInfo.filesIncluded.length,
        timestamp: deployInfo.timestamp,
        note: 'Successfully force-pushed to GitHub - previous commit overwritten!'
      });
      
    } catch (gitError) {
      console.error('Git operation failed:', gitError);
      
      // Fallback to just creating deployment package
      return NextResponse.json({ 
        success: true, 
        message: `🚀 Page ${pageNumber} deployment package ready! (Manual git push needed)`,
        deployPath: deployPath,
        filesCreated: deployInfo.filesIncluded.length,
        timestamp: deployInfo.timestamp,
        gitError: gitError instanceof Error ? gitError.message : 'Git operation failed',
        note: 'Package ready but auto-push failed. Use manual git commands.'
      });
    }

  } catch (error) {
    console.error('Simple deployment error:', error);
    return NextResponse.json({ 
      error: 'Deployment failed', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}
