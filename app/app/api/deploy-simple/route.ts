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
      method: 'simple_deploy'
    };
    
    fs.writeFileSync(
      path.join(deployPath, 'deploy-info.json'), 
      JSON.stringify(deployInfo, null, 2)
    );

    return NextResponse.json({ 
      success: true, 
      message: `🚀 Page ${pageNumber} deployment package ready!`,
      deployPath: deployPath,
      filesCreated: deployInfo.filesIncluded.length,
      timestamp: deployInfo.timestamp,
      note: 'Using existing build output. Copy github-deploy folder to your GitHub repo!'
    });

  } catch (error) {
    console.error('Simple deployment error:', error);
    return NextResponse.json({ 
      error: 'Deployment failed', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}
