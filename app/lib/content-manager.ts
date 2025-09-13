import fs from 'fs';
import path from 'path';

// Type definitions for our content structure
export interface VPOSection {
  title: string;
  subtitle: string;
}

export interface VPOWheel {
  centerText: string;
  centerSubtext: string;
  safety: VPOSection;
  quality: VPOSection;
  volume: VPOSection;
  cost: VPOSection;
}

export interface AutonmousTeam {
  title: string;
  bulletPoints: string[];
  coreEnablers: {
    title: string;
    items: string[];
  };
}

export interface Slide2Content {
  title: string;
  subtitle: string;
  vpoWheel: VPOWheel;
  autonomousTeam: AutonmousTeam;
}

export interface SafetySection {
  title: string;
  content: string;
}

export interface Slide3Content {
  title: string;
  frontlineResponsibilities: {
    title: string;
    items: string[];
    successMetrics: {
      title: string;
      items: string[];
    };
  };
  operatorActions: {
    title: string;
    sections: SafetySection[];
    focusAreas: {
      title: string;
      content: string;
    };
    stopWork: {
      title: string;
      subtitle: string;
    };
  };
  footer: string;
}

export interface VPOPrimaryRole {
  title: string;
  items: string[];
}

export interface SupportRole {
  title: string;
  items: string[];
}

export interface Slide13Content {
  title: string;
  primaryRoles: {
    sectionTitle: string;
    safety: VPOPrimaryRole;
    quality: VPOPrimaryRole;
    volume: VPOPrimaryRole;
    cost: VPOPrimaryRole;
  };
  secondaryRoles: {
    sectionTitle: string;
    labellerSupport: SupportRole;
    infeedCoordination: SupportRole;
    teamLeadership: SupportRole;
  };
  footer: string;
}

export interface SlideContent {
  slide2: Slide2Content;
  slide3: Slide3Content;
  slide13: Slide13Content;
}

// Content file path
const CONTENT_FILE_PATH = path.join(process.cwd(), 'lib/slide-content.json');

// Load content from JSON file
export function loadSlideContent(): SlideContent {
  try {
    const fileContent = fs.readFileSync(CONTENT_FILE_PATH, 'utf-8');
    return JSON.parse(fileContent) as SlideContent;
  } catch (error) {
    console.error('Error loading slide content:', error);
    throw new Error('Failed to load slide content');
  }
}

// Save content to JSON file
export function saveSlideContent(content: SlideContent): void {
  try {
    const jsonContent = JSON.stringify(content, null, 2);
    fs.writeFileSync(CONTENT_FILE_PATH, jsonContent, 'utf-8');
  } catch (error) {
    console.error('Error saving slide content:', error);
    throw new Error('Failed to save slide content');
  }
}

// Get content for a specific slide
export function getSlideContent(slideNumber: number): Slide2Content | Slide3Content | Slide13Content | null {
  const allContent = loadSlideContent();
  
  switch (slideNumber) {
    case 2:
      return allContent.slide2;
    case 3:
      return allContent.slide3;
    case 13:
      return allContent.slide13;
    default:
      return null;
  }
}

// Update content for a specific slide
export function updateSlideContent(slideNumber: number, newContent: Slide2Content | Slide3Content | Slide13Content): void {
  const allContent = loadSlideContent();
  
  switch (slideNumber) {
    case 2:
      allContent.slide2 = newContent as Slide2Content;
      break;
    case 3:
      allContent.slide3 = newContent as Slide3Content;
      break;
    case 13:
      allContent.slide13 = newContent as Slide13Content;
      break;
    default:
      throw new Error(`Slide ${slideNumber} is not supported`);
  }
  
  saveSlideContent(allContent);
}
