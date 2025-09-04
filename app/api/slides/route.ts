import { NextRequest, NextResponse } from 'next/server';

// GitHub API configuration
const GITHUB_API_BASE = 'https://api.github.com';

interface SlideUpdateRequest {
  slideId: number;
  title: string;
  subtitle?: string;
  content: string;
  githubToken: string;
  owner: string;
  repo: string;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const owner = searchParams.get('owner');
    const repo = searchParams.get('repo');
    const token = searchParams.get('token');

    if (!owner || !repo || !token) {
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    // Fetch all slide files from the repository
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${owner}/${repo}/contents/app/pages`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const contents = await response.json();
    const slides = [];

    // Process each slide directory
    for (const item of contents) {
      if (item.type === 'dir' && /^\d+$/.test(item.name)) {
        const slideId = parseInt(item.name);
        
        // Fetch the page.tsx file for this slide
        const slideResponse = await fetch(
          `${GITHUB_API_BASE}/repos/${owner}/${repo}/contents/app/pages/${slideId}/page.tsx`,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/vnd.github.v3+json',
            },
          }
        );

        if (slideResponse.ok) {
          const slideData = await slideResponse.json();
          const content = Buffer.from(slideData.content, 'base64').toString('utf-8');
          
          // Extract title and content from the React component
          const titleMatch = content.match(/className="[^"]*slide-title[^"]*"[^>]*>\s*([^<]+)/);
          const title = titleMatch ? titleMatch[1].trim() : `Slide ${slideId}`;
          
          slides.push({
            id: slideId,
            title,
            content: content,
            lastModified: slideData.updated_at,
            sha: slideData.sha
          });
        }
      }
    }

    return NextResponse.json({ slides: slides.sort((a, b) => a.id - b.id) });
  } catch (error) {
    console.error('Error fetching slides:', error);
    return NextResponse.json({ error: 'Failed to fetch slides' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body: SlideUpdateRequest = await request.json();
    const { slideId, title, subtitle, content, githubToken, owner, repo } = body;

    if (!slideId || !title || !githubToken || !owner || !repo) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // First, get the current file to get its SHA
    const currentFileResponse = await fetch(
      `${GITHUB_API_BASE}/repos/${owner}/${repo}/contents/app/pages/${slideId}/page.tsx`,
      {
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!currentFileResponse.ok) {
      throw new Error(`Failed to fetch current file: ${currentFileResponse.statusText}`);
    }

    const currentFile = await currentFileResponse.json();

    // Generate the new React component content
    const newContent = generateSlideComponent(slideId, title, subtitle, content);

    // Update the file on GitHub
    const updateResponse = await fetch(
      `${GITHUB_API_BASE}/repos/${owner}/${repo}/contents/app/pages/${slideId}/page.tsx`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `Update slide ${slideId}: ${title}`,
          content: Buffer.from(newContent).toString('base64'),
          sha: currentFile.sha,
        }),
      }
    );

    if (!updateResponse.ok) {
      throw new Error(`Failed to update file: ${updateResponse.statusText}`);
    }

    const result = await updateResponse.json();
    return NextResponse.json({ success: true, commit: result.commit });
  } catch (error) {
    console.error('Error updating slide:', error);
    return NextResponse.json({ error: 'Failed to update slide' }, { status: 500 });
  }
}

function generateSlideComponent(slideId: number, title: string, subtitle?: string, customContent?: string): string {
  // This is a basic template - you can customize this based on your slide structure
  return `export default function Slide${slideId}() {
  return (
    <div className="slide-container">
      {/* Top Section - Main Title */}
      <div className="text-center mb-6 md:mb-8">
        <h1 className="slide-title font-bold text-yellow-400 mb-2 md:mb-4 px-4">
          ${title}
        </h1>
        ${subtitle ? `<p className="text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          ${subtitle}
        </p>` : ''}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center w-full max-w-6xl px-4">
        ${customContent || `<h2 className="text-lg md:text-2xl lg:text-4xl font-medium text-gray-200 mb-6 md:mb-8">
          Content for slide ${slideId}
        </h2>`}
      </div>
    </div>
  );
}`;
}