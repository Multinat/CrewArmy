// Utility functions for parsing and generating slide content

export interface ParsedSlideContent {
  title: string;
  subtitle?: string;
  content: string;
  customElements?: string[];
}

export function parseSlideContent(reactComponent: string): ParsedSlideContent {
  // Extract title
  const titleMatch = reactComponent.match(/className="[^"]*slide-title[^"]*"[^>]*>\s*([^<]+)/);
  const title = titleMatch ? titleMatch[1].trim() : 'Untitled Slide';

  // Extract subtitle
  const subtitleMatch = reactComponent.match(/<p className="text-2xl[^>]*>\s*([^<]+)/);
  const subtitle = subtitleMatch ? subtitleMatch[1].trim() : undefined;

  // Extract main content area
  const contentMatch = reactComponent.match(/<div className="flex-1[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*\);/);
  const content = contentMatch ? contentMatch[1].trim() : '';

  return {
    title,
    subtitle,
    content
  };
}

export function generateSlideTemplate(
  slideId: number, 
  title: string, 
  subtitle?: string, 
  content?: string,
  template: 'basic' | 'framework' | 'custom' = 'basic'
): string {
  
  const templates = {
    basic: `export default function Slide${slideId}() {
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
        ${content || `<h2 className="text-lg md:text-2xl lg:text-4xl font-medium text-gray-200 mb-6 md:mb-8">
          Content for slide ${slideId}
        </h2>`}
      </div>
    </div>
  );
}`,

    framework: `import { Shield, CheckCircle, TrendingUp, DollarSign } from 'lucide-react';

export default function Slide${slideId}() {
  return (
    <div className="slide-container">
      {/* Header */}
      <div className="text-center mb-4 md:mb-6">
        <h1 className="slide-title font-bold text-yellow-400 mb-2 px-4">
          ${title}
        </h1>
        ${subtitle ? `<p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
          ${subtitle}
        </p>` : ''}
      </div>

      {/* Main Content with Framework Layout */}
      <div className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-8 w-full max-w-7xl px-4">
        {/* Left Panel - Framework Wheel */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Center Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center z-10 border-4 border-white/20">
              <span className="text-black font-bold text-sm text-center">VPO<br/>WHEEL</span>
            </div>
            
            {/* Framework Elements */}
            ${content || '<!-- Add your framework elements here -->'}
          </div>
        </div>

        {/* Right Panel - Details */}
        <div className="flex-1 flex flex-col justify-center space-y-6">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Framework Overview</h3>
            <div className="space-y-3 text-gray-200">
              <!-- Add your content here -->
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,

    custom: content || `export default function Slide${slideId}() {
  return (
    <div className="slide-container">
      ${content || '<!-- Custom slide content -->'}
    </div>
  );
}`
  };

  return templates[template];
}

export function extractSlideMetadata(reactComponent: string) {
  const imports = reactComponent.match(/import\s+{[^}]+}\s+from\s+['"][^'"]+['"];?/g) || [];
  const hasIcons = imports.some(imp => imp.includes('lucide-react'));
  const hasComplexLayout = reactComponent.includes('grid') || reactComponent.includes('flex-row');
  
  return {
    hasIcons,
    hasComplexLayout,
    imports,
    estimatedTemplate: hasComplexLayout ? 'framework' : 'basic'
  };
}

export function validateSlideContent(content: string): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Check for basic React component structure
  if (!content.includes('export default function')) {
    errors.push('Missing default export function');
  }
  
  // Check for return statement
  if (!content.includes('return')) {
    errors.push('Missing return statement');
  }
  
  // Check for balanced JSX tags (basic check)
  const openTags = (content.match(/<[^/][^>]*>/g) || []).length;
  const closeTags = (content.match(/<\/[^>]*>/g) || []).length;
  const selfClosingTags = (content.match(/<[^>]*\/>/g) || []).length;
  
  if (openTags !== closeTags + selfClosingTags) {
    errors.push('Unbalanced JSX tags detected');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}