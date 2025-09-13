import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs';

const execAsync = promisify(exec);

export async function POST(request: NextRequest) {
  try {
    const { pageNumber } = await request.json();
    
    if (!pageNumber) {
      return NextResponse.json({ error: 'Page number is required' }, { status: 400 });
    }

    // Clean build cache first to prevent EPERM errors
    console.log('Cleaning build cache...');
    try {
      await execAsync('Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue', { 
        cwd: process.cwd(),
        shell: 'powershell.exe',
        timeout: 30000
      });
    } catch (cleanError) {
      console.log('Cache clean warning (non-critical):', cleanError);
    }

    // Build the project
    console.log('Building project...');
    const buildResult = await execAsync('npm run build', { 
      cwd: process.cwd(),
      timeout: 120000, // 2 minutes timeout
      env: { ...process.env, NODE_ENV: 'production' } // Fix NODE_ENV warning
    });
    
    console.log('Build completed:', buildResult.stdout);

    // Check if the page was built successfully
    const pagePath = path.join(process.cwd(), 'out', 'pages', pageNumber.toString());
    if (!fs.existsSync(pagePath)) {
      return NextResponse.json({ 
        error: `Page ${pageNumber} was not generated in build output` 
      }, { status: 404 });
    }

    // Create deployment package
    const deployPath = path.join(process.cwd(), 'github-deploy');
    
    // Clean and recreate deploy directory
    if (fs.existsSync(deployPath)) {
      fs.rmSync(deployPath, { recursive: true, force: true });
    }
    fs.mkdirSync(deployPath, { recursive: true });
    fs.mkdirSync(path.join(deployPath, '_next'), { recursive: true });

    // Copy page files
    const pageFiles = fs.readdirSync(pagePath);
    for (const file of pageFiles) {
      fs.copyFileSync(
        path.join(pagePath, file),
        path.join(deployPath, file)
      );
    }

    // Copy _next assets
    const nextPath = path.join(process.cwd(), 'out', '_next');
    if (fs.existsSync(nextPath)) {
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

    // Create a simple deployment info file
    const deployInfo = {
      pageNumber,
      timestamp: new Date().toISOString(),
      status: 'ready_for_github',
      filesIncluded: fs.readdirSync(deployPath)
    };
    
    fs.writeFileSync(
      path.join(deployPath, 'deploy-info.json'), 
      JSON.stringify(deployInfo, null, 2)
    );

    return NextResponse.json({ 
      success: true, 
      message: `Page ${pageNumber} deployed successfully! 🚀`,
      deployPath: deployPath,
      filesCreated: deployInfo.filesIncluded.length,
      timestamp: deployInfo.timestamp,
      note: 'Deployment package created. Ready for GitHub Pages!'
    });

  } catch (error) {
    console.error('Deployment error:', error);
    return NextResponse.json({ 
      error: 'Deployment failed', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}
