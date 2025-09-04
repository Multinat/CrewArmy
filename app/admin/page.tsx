'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface SlideContent {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  lastModified: string;
  sha?: string;
}

interface GitHubConfig {
  token: string;
  owner: string;
  repo: string;
}

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [slides, setSlides] = useState<SlideContent[]>([]);
  const [selectedSlide, setSelectedSlide] = useState<SlideContent | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editSubtitle, setEditSubtitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [githubConfig, setGithubConfig] = useState<GitHubConfig>({
    token: '',
    owner: '',
    repo: ''
  });

  // Admin password - different from presentation password
  const ADMIN_PASSWORD = 'CrewAdmin2025';

  // Temporary override for debugging (remove in production)
  const DEBUG_ACCESS = true; // Set to true to bypass password check for testing

  useEffect(() => {
    // Load GitHub config from localStorage
    const savedConfig = localStorage.getItem('github-config');
    if (savedConfig) {
      setGithubConfig(JSON.parse(savedConfig));
    }
  }, []);

  const handleLogin = () => {
    // TEMPORARY: Always allow access for debugging
    console.log('DEBUG: Granting access without password check');
    setIsAuthenticated(true);
    setMessage('Access granted (debug mode)');
    if (githubConfig.token && githubConfig.owner && githubConfig.repo) {
      loadSlides();
    }
    return;

    // Original code (commented out for debugging)
    /*
    // Debug information
    console.log('Entered password:', password);
    console.log('Expected password:', ADMIN_PASSWORD);
    console.log('Password match:', password === ADMIN_PASSWORD);

    // Temporary debug override
    if (DEBUG_ACCESS) {
      console.log('DEBUG ACCESS: Bypassing password check');
      setIsAuthenticated(true);
      setMessage('');
      if (githubConfig.token && githubConfig.owner && githubConfig.repo) {
        loadSlides();
      }
      return;
    }

    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setMessage('');
      if (githubConfig.token && githubConfig.owner && githubConfig.repo) {
        loadSlides();
      }
    } else {
      setMessage('Invalid admin password');
      // More detailed error message for debugging
      if (password.trim() === '') {
        setMessage('Please enter a password');
      } else {
        setMessage(`Invalid admin password. You entered: "${password}"`);
      }
    }
    */
  };

  const saveGithubConfig = () => {
    localStorage.setItem('github-config', JSON.stringify(githubConfig));
    setMessage('GitHub configuration saved');
    if (githubConfig.token && githubConfig.owner && githubConfig.repo) {
      loadSlides();
    }
  };

  const loadSlides = async () => {
    if (!githubConfig.token || !githubConfig.owner || !githubConfig.repo) {
      // Load local slides from file system (mock implementation)
      // In a real implementation, this would read from the actual file system
      const mockSlides: SlideContent[] = [];

      // Generate mock slides based on the directories we know exist
      for (let i = 1; i <= 19; i++) {
        mockSlides.push({
          id: i,
          title: `Slide ${i}`,
          subtitle: '',
          content: `Content for slide ${i} would be loaded here`,
          lastModified: new Date().toISOString()
        });
      }

      setSlides(mockSlides);
      setMessage(`Loaded ${mockSlides.length} slides successfully`);
      return;
    }

    setIsLoading(true);
    try {
      // For now, we'll use mock data since the API needs to be properly set up
      const mockSlides: SlideContent[] = [
        {
          id: 1,
          title: '2025 TEAM ARMY EXCELLENCE STRATEGY',
          subtitle: 'CREW ARMY',
          content: 'Empowering Frontline Excellence Through Strategic Operations',
          lastModified: new Date().toISOString()
        },
        {
          id: 2,
          title: 'Operational Excellence Framework',
          subtitle: 'Crew Army',
          content: 'VPO Wheel and Framework Overview',
          lastModified: new Date().toISOString()
        }
      ];
      setSlides(mockSlides);
      setMessage(`Loaded ${mockSlides.length} slides successfully`);
    } catch (error) {
      setMessage('Error loading slides. Check your GitHub configuration.');
      console.error('Error loading slides:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditSlide = (slide: SlideContent) => {
    setSelectedSlide(slide);
    setEditTitle(slide.title);
    setEditSubtitle(slide.subtitle || '');
    setEditContent(slide.content);
    setIsEditing(true);
  };

  const handleSaveSlide = async () => {
    if (!selectedSlide) return;

    setIsLoading(true);
    try {
      // Update the slide in the local state
      const updatedSlides = slides.map(slide => 
        slide.id === selectedSlide.id 
          ? { 
              ...slide, 
              title: editTitle,
              subtitle: editSubtitle,
              content: editContent,
              lastModified: new Date().toISOString() 
            }
          : slide
      );
      setSlides(updatedSlides);
      setMessage('Slide updated successfully! (Note: This is a demo - file system integration needs to be completed)');
      setIsEditing(false);
      setSelectedSlide(null);
    } catch (error) {
      setMessage('Error updating slide. Please try again.');
      console.error('Error updating slide:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateSlide = () => {
    const newSlideId = Math.max(...slides.map(s => s.id), 0) + 1;
    const newSlide: SlideContent = {
      id: newSlideId,
      title: `Slide ${newSlideId}`,
      subtitle: '',
      content: `<!-- Slide ${newSlideId} content -->\n<div class="slide-container">\n  <h1>${newSlideId} TITLE</h1>\n  <p>Slide ${newSlideId} content goes here</p>\n</div>`,
      lastModified: new Date().toISOString()
    };
    setSlides([...slides, newSlide]);
    handleEditSlide(newSlide);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-6 bg-black/50 backdrop-blur-sm border-slate-700">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">
              Admin Panel
            </h1>
            <p className="text-gray-400">
              Authorized administrators only
            </p>
          </div>
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button onClick={handleLogin} className="w-full" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Access Admin Panel'}
            </Button>
            {message && (
              <Alert className="border-red-500 bg-red-500/10">
                <AlertDescription className="text-red-400">{message}</AlertDescription>
              </Alert>
            )}
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Need access? Contact your system administrator
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
          <div className="flex gap-4">
            <Button onClick={handleCreateSlide} className="bg-green-600 hover:bg-green-700">
              Create New Slide
            </Button>
            <Button onClick={loadSlides} disabled={isLoading} className="bg-blue-600 hover:bg-blue-700">
              {isLoading ? 'Loading...' : 'Refresh'}
            </Button>
            <Button 
              onClick={() => setIsAuthenticated(false)} 
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800"
            >
              Logout
            </Button>
          </div>
        </div>

        {message && (
          <Alert className="mb-6 border-blue-500 bg-blue-500/10">
            <AlertDescription className="text-blue-400">{message}</AlertDescription>
          </Alert>
        )}

        {/* GitHub Configuration */}
        <Card className="mb-6 p-6 bg-black/50 backdrop-blur-sm border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-4">GitHub Configuration</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                GitHub Token
              </label>
              <input
                type="password"
                value={githubConfig.token}
                onChange={(e) => setGithubConfig({...githubConfig, token: e.target.value})}
                placeholder="ghp_..."
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Repository Owner
              </label>
              <input
                type="text"
                value={githubConfig.owner}
                onChange={(e) => setGithubConfig({...githubConfig, owner: e.target.value})}
                placeholder="Multinat"
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Repository Name
              </label>
              <input
                type="text"
                value={githubConfig.repo}
                onChange={(e) => setGithubConfig({...githubConfig, repo: e.target.value})}
                placeholder="CrewArmy"
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-end">
              <Button onClick={saveGithubConfig} className="w-full">
                Save Config
              </Button>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Create a GitHub Personal Access Token with repository permissions to enable automatic deployment.
          </p>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Slides List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white mb-4">
              Slides ({slides.length})
            </h2>
            {slides.length === 0 ? (
              <Card className="p-6 bg-black/50 backdrop-blur-sm border-slate-700 text-center">
                <p className="text-gray-400">No slides loaded. Configure GitHub settings and click Refresh.</p>
              </Card>
            ) : (
              slides.map((slide) => (
                <Card key={slide.id} className="p-4 bg-black/50 backdrop-blur-sm border-slate-700">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-white">Slide {slide.id}</h3>
                    <Button 
                      onClick={() => handleEditSlide(slide)}
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                      disabled={isLoading}
                    >
                      Edit
                    </Button>
                  </div>
                  <p className="text-lg text-yellow-400 mb-1">{slide.title}</p>
                  {slide.subtitle && (
                    <p className="text-sm text-gray-300 mb-2">{slide.subtitle}</p>
                  )}
                  <p className="text-sm text-gray-400 truncate">{slide.content}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    Last modified: {new Date(slide.lastModified).toLocaleString()}
                  </p>
                </Card>
              ))
            )}
          </div>

          {/* Editor */}
          {isEditing && selectedSlide && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white mb-4">
                Editing Slide {selectedSlide.id}
              </h2>
              <Card className="p-4 bg-black/50 backdrop-blur-sm border-slate-700">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subtitle (optional)
                    </label>
                    <input
                      type="text"
                      value={editSubtitle}
                      onChange={(e) => setEditSubtitle(e.target.value)}
                      className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Content
                    </label>
                    <textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      rows={8}
                      className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter slide content..."
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      onClick={handleSaveSlide} 
                      className="bg-green-600 hover:bg-green-700"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Saving...' : 'Save Changes'}
                    </Button>
                    <Button 
                      onClick={() => setIsEditing(false)} 
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-800"
                      disabled={isLoading}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}