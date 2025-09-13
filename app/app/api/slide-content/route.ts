import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const CONTENT_FILE_PATH = path.join(process.cwd(), 'lib/slide-content.json');

export async function GET() {
  try {
    const fileContent = fs.readFileSync(CONTENT_FILE_PATH, 'utf-8');
    const content = JSON.parse(fileContent);
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error reading slide content:', error);
    return NextResponse.json({ error: 'Failed to load content' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const content = await request.json();
    const jsonContent = JSON.stringify(content, null, 2);
    fs.writeFileSync(CONTENT_FILE_PATH, jsonContent, 'utf-8');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving slide content:', error);
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 });
  }
}
