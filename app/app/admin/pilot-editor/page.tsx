'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, Save, ArrowLeft } from 'lucide-react';
import { type SlideContent, type Slide2Content, type Slide3Content, type Slide13Content } from '@/lib/content-manager';
import Link from 'next/link';

export default function PilotEditor() {
  const [content, setContent] = useState<SlideContent | null>(null);
  const [editingSlide, setEditingSlide] = useState<2 | 3 | 13>(2);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadContent();
  }, []);


  const loadContent = async () => {
    try {
      // Load content from our JSON file via API route
      const response = await fetch('/api/slide-content');
      if (response.ok) {
        const slideContent = await response.json();
        setContent(slideContent);
        setMessage('Content loaded successfully');
      } else {
        throw new Error('Failed to load content');
      }
    } catch (error) {
      setMessage('Error loading content');
      console.error(error);
      // Fallback to default content
      setContent({
        slide2: {
          title: "OPERATIONAL EXCELLENCE FRAMEWORK",
          subtitle: "Four Pillars of Crew Army Success",
          vpoWheel: {
            centerText: "VPO",
            centerSubtext: "Excellence",
            safety: { title: "SAFETY", subtitle: "Zero Harm" },
            quality: { title: "QUALITY", subtitle: "Right First Time" },
            volume: { title: "VOLUME", subtitle: "Optimal Output" },
            cost: { title: "COST", subtitle: "Efficiency" }
          },
          autonomousTeam: {
            title: "AUTONOMOUS TEAM APPROACH",
            bulletPoints: [
              "Frontline teams empowered to make real-time operational decisions",
              "Root cause problem-solving at the point of impact",
              "Continuous improvement driven by those closest to the work"
            ],
            coreEnablers: {
              title: "CORE ENABLERS",
              items: ["Clear authority boundaries", "Real-time metrics"]
            }
          }
        },
        slide3: {
          title: "SAFETY FIRST - Zero Incidents Through Proactive Prevention",
          frontlineResponsibilities: {
            title: "FRONTLINE RESPONSIBILITIES",
            items: ["Complete pre-shift safety checks", "Report hazards immediately"],
            successMetrics: {
              title: "SUCCESS METRICS",
              items: ["Zero incidents", "100% PPE compliance"]
            }
          },
          operatorActions: {
            title: "SPECIFIC OPERATOR ACTIONS",
            sections: [
              { title: "EQUIPMENT & TOOLS", content: "Inspect all tools before use" }
            ],
            focusAreas: {
              title: "FOCUS AREAS", 
              content: "Safety system effectiveness"
            },
            stopWork: {
              title: "STOP WORK AUTHORITY",
              subtitle: "Every team member has the right to stop unsafe work"
            }
          },
          footer: "Crew Army | 2025 Team Army Excellence Strategy"
        },
        slide13: {
          title: "BOTTLEWASHER - ROLES & RESPONSIBILITIES",
          primaryRoles: {
            sectionTitle: "PRIMARY ROLES: Bottlewasher Operations",
            safety: {
              title: "SAFETY FIRST",
              items: ["Follow LOTOTO procedures", "Identify hazards"]
            },
            quality: {
              title: "QUALITY ALWAYS",
              items: ["Monitor washing quality", "Perform CIP"]
            },
            volume: {
              title: "VOLUME",
              items: ["Start-up operations", "Log production data"]
            },
            cost: {
              title: "COST",
              items: ["Support sustainability", "Drive PIs"]
            }
          },
          secondaryRoles: {
            sectionTitle: "SECONDARY/SUPPORT ROLES",
            labellerSupport: {
              title: "LABELLER SUPPORT",
              items: ["Secondary machine operation"]
            },
            infeedCoordination: {
              title: "INFEED COORDINATION", 
              items: ["Provide bottlewasher relief"]
            },
            teamLeadership: {
              title: "TEAM LEADERSHIP",
              items: ["Coach peers on safety"]
            }
          },
          footer: "Crew Army | 2025 Team Army Excellence Strategy"
        }
      });
    }
  };

  const saveContent = async () => {
    if (!content) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('/api/slide-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
      });
      
      if (response.ok) {
        setMessage('Content saved successfully! Changes are now live.');
      } else {
        throw new Error('Failed to save content');
      }
    } catch (error) {
      setMessage('Error saving content');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateSlide2 = (field: string, value: any) => {
    if (!content) return;
    
    const newContent = { ...content };
    const keys = field.split('.');
    let current: any = newContent.slide2;
    
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    
    setContent(newContent);
  };

  const updateSlide3 = (field: string, value: any) => {
    if (!content) return;
    
    const newContent = { ...content };
    const keys = field.split('.');
    let current: any = newContent.slide3;
    
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    
    setContent(newContent);
  };

  const updateSlide13 = (field: string, value: any) => {
    if (!content) return;
    
    const newContent = { ...content };
    const keys = field.split('.');
    let current: any = newContent.slide13;
    
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    
    setContent(newContent);
  };

  const updateArrayItem = (slideNum: 2 | 3 | 13, path: string, index: number, value: string) => {
    if (!content) return;
    
    const newContent = { ...content };
    const slideKey = `slide${slideNum}` as keyof SlideContent;
    const keys = path.split('.');
    let current: any = newContent[slideKey];
    
    for (let i = 0; i < keys.length; i++) {
      if (i === keys.length - 1) {
        current[keys[i]][index] = value;
      } else {
        current = current[keys[i]];
      }
    }
    
    setContent(newContent);
  };


  if (!content) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading content...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin">
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Admin
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-white">Pilot Editor</h1>
            <span className="text-gray-400">Pages 2, 3, 13</span>
          </div>
          <div className="flex gap-4">
            <Button 
              onClick={saveContent} 
              disabled={isLoading} 
              className="bg-green-600 hover:bg-green-700"
            >
              <Save className="w-4 h-4 mr-2" />
              {isLoading ? 'Saving...' : 'Save All Changes'}
            </Button>
          </div>
        </div>

        {message && (
          <Alert className="mb-6 border-blue-500 bg-blue-500/10">
            <AlertDescription className="text-blue-400">{message}</AlertDescription>
          </Alert>
        )}

        {/* Slide Tabs */}
        <Tabs value={editingSlide.toString()} onValueChange={(value) => setEditingSlide(parseInt(value) as 2 | 3 | 13)}>
          <TabsList className="grid w-full grid-cols-3 bg-slate-800 border-slate-700">
            <TabsTrigger value="2" className="data-[state=active]:bg-slate-700 text-white">
              Page 2 - Framework
            </TabsTrigger>
            <TabsTrigger value="3" className="data-[state=active]:bg-slate-700 text-white">
              Page 3 - Safety
            </TabsTrigger>
            <TabsTrigger value="13" className="data-[state=active]:bg-slate-700 text-white">
              Page 13 - Bottlewasher
            </TabsTrigger>
          </TabsList>

          {/* Page 2 Editor */}
          <TabsContent value="2" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Page 2 - Operational Excellence Framework</h2>
              <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Link href="/pages/2" target="_blank">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Page
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Basic Fields */}
              <Card className="p-6 bg-black/50 backdrop-blur-sm border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Basic Information</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="slide2-title" className="text-gray-300">Main Title</Label>
                    <Input
                      id="slide2-title"
                      value={content.slide2.title}
                      onChange={(e) => updateSlide2('title', e.target.value)}
                      className="mt-1 bg-slate-800 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="slide2-subtitle" className="text-gray-300">Subtitle</Label>
                    <Input
                      id="slide2-subtitle"
                      value={content.slide2.subtitle}
                      onChange={(e) => updateSlide2('subtitle', e.target.value)}
                      className="mt-1 bg-slate-800 border-slate-600 text-white"
                    />
                  </div>
                </div>
              </Card>

              {/* VPO Wheel */}
              <Card className="p-6 bg-black/50 backdrop-blur-sm border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">VPO Wheel</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-gray-300">Center Text</Label>
                      <Input
                        value={content.slide2.vpoWheel.centerText}
                        onChange={(e) => updateSlide2('vpoWheel.centerText', e.target.value)}
                        className="mt-1 bg-slate-800 border-slate-600 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Center Subtext</Label>
                      <Input
                        value={content.slide2.vpoWheel.centerSubtext}
                        onChange={(e) => updateSlide2('vpoWheel.centerSubtext', e.target.value)}
                        className="mt-1 bg-slate-800 border-slate-600 text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-gray-300">Safety Title</Label>
                      <Input
                        value={content.slide2.vpoWheel.safety.title}
                        onChange={(e) => updateSlide2('vpoWheel.safety.title', e.target.value)}
                        className="mt-1 bg-slate-800 border-slate-600 text-white"
                      />
                      <Label className="text-gray-300 mt-2">Safety Subtitle</Label>
                      <Input
                        value={content.slide2.vpoWheel.safety.subtitle}
                        onChange={(e) => updateSlide2('vpoWheel.safety.subtitle', e.target.value)}
                        className="mt-1 bg-slate-800 border-slate-600 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Quality Title</Label>
                      <Input
                        value={content.slide2.vpoWheel.quality.title}
                        onChange={(e) => updateSlide2('vpoWheel.quality.title', e.target.value)}
                        className="mt-1 bg-slate-800 border-slate-600 text-white"
                      />
                      <Label className="text-gray-300 mt-2">Quality Subtitle</Label>
                      <Input
                        value={content.slide2.vpoWheel.quality.subtitle}
                        onChange={(e) => updateSlide2('vpoWheel.quality.subtitle', e.target.value)}
                        className="mt-1 bg-slate-800 border-slate-600 text-white"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Autonomous Team Section */}
            <Card className="p-6 bg-black/50 backdrop-blur-sm border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Autonomous Team Approach</h3>
              <div className="space-y-4">
                <div>
                  <Label className="text-gray-300">Section Title</Label>
                  <Input
                    value={content.slide2.autonomousTeam.title}
                    onChange={(e) => updateSlide2('autonomousTeam.title', e.target.value)}
                    className="mt-1 bg-slate-800 border-slate-600 text-white"
                  />
                </div>
                
                <div>
                  <Label className="text-gray-300">Bullet Points</Label>
                  {content.slide2.autonomousTeam.bulletPoints.map((point, index) => (
                    <Textarea
                      key={index}
                      value={point}
                      onChange={(e) => updateArrayItem(2, 'autonomousTeam.bulletPoints', index, e.target.value)}
                      className="mt-2 bg-slate-800 border-slate-600 text-white"
                      rows={2}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Page 3 Editor */}
          <TabsContent value="3" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Page 3 - Safety First</h2>
              <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Link href="/pages/3" target="_blank">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Page
                </Link>
              </Button>
            </div>
            
            <Card className="p-6 bg-black/50 backdrop-blur-sm border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Page Title</h3>
              <Input
                value={content.slide3.title}
                onChange={(e) => updateSlide3('title', e.target.value)}
                className="bg-slate-800 border-slate-600 text-white"
              />
            </Card>

            <Card className="p-6 bg-black/50 backdrop-blur-sm border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Frontline Responsibilities</h3>
              <div className="space-y-4">
                <div>
                  <Label className="text-gray-300">Section Title</Label>
                  <Input
                    value={content.slide3.frontlineResponsibilities.title}
                    onChange={(e) => updateSlide3('frontlineResponsibilities.title', e.target.value)}
                    className="mt-1 bg-slate-800 border-slate-600 text-white"
                  />
                </div>
                
                <div>
                  <Label className="text-gray-300">Responsibility Items</Label>
                  {content.slide3.frontlineResponsibilities.items.map((item, index) => (
                    <Textarea
                      key={index}
                      value={item}
                      onChange={(e) => updateArrayItem(3, 'frontlineResponsibilities.items', index, e.target.value)}
                      className="mt-2 bg-slate-800 border-slate-600 text-white"
                      rows={2}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Page 13 Editor */}
          <TabsContent value="13" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Page 13 - Bottlewasher Roles</h2>
              <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Link href="/pages/13" target="_blank">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Page
                </Link>
              </Button>
            </div>
            
            <Card className="p-6 bg-black/50 backdrop-blur-sm border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Page Title</h3>
              <Input
                value={content.slide13.title}
                onChange={(e) => updateSlide13('title', e.target.value)}
                className="bg-slate-800 border-slate-600 text-white"
              />
            </Card>

            <Card className="p-6 bg-black/50 backdrop-blur-sm border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Primary Roles - Safety</h3>
              <div className="space-y-4">
                <div>
                  <Label className="text-gray-300">Safety Title</Label>
                  <Input
                    value={content.slide13.primaryRoles.safety.title}
                    onChange={(e) => updateSlide13('primaryRoles.safety.title', e.target.value)}
                    className="mt-1 bg-slate-800 border-slate-600 text-white"
                  />
                </div>
                
                <div>
                  <Label className="text-gray-300">Safety Items</Label>
                  {content.slide13.primaryRoles.safety.items.map((item, index) => (
                    <Textarea
                      key={index}
                      value={item}
                      onChange={(e) => updateArrayItem(13, 'primaryRoles.safety.items', index, e.target.value)}
                      className="mt-2 bg-slate-800 border-slate-600 text-white"
                      rows={2}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
