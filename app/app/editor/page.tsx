'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, Save, Plus, Minus, Edit3, Upload, TrendingUp, DollarSign } from 'lucide-react';
import Link from 'next/link';

// Simple content structure
interface SlideContent {
  slide2: {
    title: string;
    subtitle: string;
    vpoWheel: {
      centerText: string;
      centerSubtext: string;
      safety: { title: string; subtitle: string };
      quality: { title: string; subtitle: string };
      volume: { title: string; subtitle: string };
      cost: { title: string; subtitle: string };
    };
    autonomousTeam: {
      title: string;
      bulletPoints: string[];
      coreEnablers: {
        title: string;
        items: string[];
      };
    };
  };
  slide3: {
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
      sections: Array<{ title: string; content: string }>;
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
  };
  slide13: {
    title: string;
    primaryRoles: {
      sectionTitle: string;
      safety: { title: string; items: string[] };
      quality: { title: string; items: string[] };
      volume: { title: string; items: string[] };
      cost: { title: string; items: string[] };
    };
    secondaryRoles: {
      sectionTitle: string;
      labellerSupport: { title: string; items: string[] };
      infeedCoordination: { title: string; items: string[] };
      teamLeadership: { title: string; items: string[] };
    };
    footer: string;
  };
}

// Move ArrayEditor outside to prevent re-creation and focus loss
const ArrayEditor = ({ 
  slideNum, 
  path, 
  items, 
  label, 
  colorClass = 'text-gray-300',
  placeholder = 'Enter item...',
  bulkEditMode,
  setBulkEditMode,
  addArrayItem,
  removeArrayItem,
  updateArrayFromText,
  updateArrayItem
}: { 
  slideNum: 2 | 3 | 13;
  path: string;
  items: string[];
  label: string;
  colorClass?: string;
  placeholder?: string;
  bulkEditMode: {[key: string]: boolean};
  setBulkEditMode: (value: {[key: string]: boolean} | ((prev: {[key: string]: boolean}) => {[key: string]: boolean})) => void;
  addArrayItem: (slideNum: 2 | 3 | 13, path: string) => void;
  removeArrayItem: (slideNum: 2 | 3 | 13, path: string, index: number) => void;
  updateArrayFromText: (slideNum: 2 | 3 | 13, path: string, text: string) => void;
  updateArrayItem: (slideNum: 2 | 3 | 13, path: string, index: number, value: string) => void;
}) => {
  const bulkKey = `${slideNum}-${path}`;
  const isBulkMode = bulkEditMode[bulkKey] || false;

  const toggleEditMode = () => {
    setBulkEditMode(prev => ({
      ...prev,
      [bulkKey]: !prev[bulkKey]
    }));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <Label className={colorClass}>{label}</Label>
        <div className="flex gap-2">
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={toggleEditMode}
            className="h-6 px-2 text-xs border-slate-600 hover:bg-slate-700"
          >
            <Edit3 className="w-3 h-3 mr-1" />
            {isBulkMode ? 'Individual' : 'Bulk Edit'}
          </Button>
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => addArrayItem(slideNum, path)}
            className="h-6 px-2 text-xs border-slate-600 hover:bg-slate-700"
          >
            <Plus className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {isBulkMode ? (
        <Textarea
          value={items.join('\n')}
          onChange={(e) => updateArrayFromText(slideNum, path, e.target.value)}
          className="bg-slate-800 border-slate-600 text-white"
          rows={Math.max(3, items.length)}
          placeholder="Enter each item on a new line..."
        />
      ) : (
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="flex gap-2">
              <Textarea
                value={item}
                onChange={(e) => updateArrayItem(slideNum, path, index, e.target.value)}
                className="flex-1 bg-slate-800 border-slate-600 text-white"
                rows={2}
                placeholder={`${placeholder} ${index + 1}`}
              />
              {items.length > 1 && (
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={() => removeArrayItem(slideNum, path, index)}
                  className="h-auto px-2 border-slate-600 hover:bg-red-700"
                >
                  <Minus className="w-3 h-3" />
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Editor() {
  const [content, setContent] = useState<SlideContent | null>(null);
  const [editingSlide, setEditingSlide] = useState<2 | 3 | 13 | '13a'>(2);
  const [message, setMessage] = useState('');
  const [bulkEditMode, setBulkEditMode] = useState<{[key: string]: boolean}>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);

  useEffect(() => {
    // Load default content immediately
    loadDefaultContent();
  }, []);

  const loadDefaultContent = () => {
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
            "Continuous improvement driven by those closest to the work",
            "Cross-functional collaboration for optimal outcomes",
            "Data-driven decision making with immediate feedback loops",
            "Ownership and accountability at every level of operation"
          ],
          coreEnablers: {
            title: "CORE ENABLERS",
            items: [
              "Clear authority and decision-making boundaries",
              "Real-time performance visibility and metrics",
              "Structured problem-solving methodologies",
              "Regular coaching and capability development"
            ]
          }
        }
      },
      slide3: {
        title: "SAFETY FIRST - Zero Incidents Through Proactive Prevention",
        frontlineResponsibilities: {
          title: "FRONTLINE RESPONSIBILITIES",
          items: [
            "Complete pre-shift safety checks and risk assessments",
            "Report all hazards and near-misses immediately",
            "Follow lockout/tagout procedures rigorously",
            "Maintain situational awareness at all times",
            "Use proper lifting techniques and ergonomic practices",
            "Mentor colleagues on safety best practices"
          ],
          successMetrics: {
            title: "SUCCESS METRICS",
            items: [
              "Zero personal incidents/injuries",
              "100% PPE compliance rate",
              "Active safety meeting participation"
            ]
          }
        },
        operatorActions: {
          title: "SPECIFIC OPERATOR ACTIONS",
          sections: [
            {
              title: "EQUIPMENT & TOOLS",
              content: "• Inspect all tools before use • Report defective equipment immediately • Use right tool for the job • Maintain clean, organized workspace"
            },
            {
              title: "CHEMICAL HANDLING",
              content: "• Read SDS before handling • Use proper PPE for chemicals • Follow mixing procedures exactly • Store chemicals per requirements"
            },
            {
              title: "MACHINERY OPERATIONS",
              content: "• Follow startup/shutdown procedures • Monitor gauges and indicators • Never bypass safety devices • Maintain proper guarding"
            },
            {
              title: "EMERGENCY RESPONSE",
              content: "• Know evacuation routes • Master fire extinguisher use • Practice first aid procedures • Report all incidents promptly"
            },
            {
              title: "COMMUNICATION",
              content: "• Use clear radio protocols • Confirm understanding • Document safety observations • Share lessons learned"
            },
            {
              title: "LEADERSHIP & SUPERVISION",
              content: "• Conduct daily safety walks • Ensure training and resources • Investigate incidents • Champion safety culture • Review procedures • Recognize achievements"
            }
          ],
          focusAreas: {
            title: "FOCUS AREAS",
            content: "• Safety system effectiveness • Team engagement metrics • Continuous improvement culture"
          },
          stopWork: {
            title: "STOP WORK AUTHORITY",
            subtitle: "Every team member has the right and responsibility to stop unsafe work"
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
            items: [
              "Follow LOTOTO procedures during maintenance",
              "Identify hazards (chemicals, high temperatures)",
              "Raise daily SIO with Root and Near Cause"
            ]
          },
          quality: {
            title: "QUALITY ALWAYS",
            items: [
              "Monitor washing quality (temperature, chemicals)",
              "Perform CIP and sanitation for HACCP compliance",
              "Quality checks including titration and verification"
            ]
          },
          volume: {
            title: "VOLUME",
            items: [
              "Start-up, shut down, and changeover operations",
              "Log production, downtime, and waste data in MES/SAP",
              "Troubleshoot minor issues and report major faults"
            ]
          },
          cost: {
            title: "COST",
            items: [
              "Support sustainability through water/energy optimization",
              "Drive PIs and complete corrective actions promptly",
              "Maintain 5S standards for safety and organization"
            ]
          }
        },
        secondaryRoles: {
          sectionTitle: "SECONDARY/SUPPORT ROLES: Labeller & Infeed Support",
          labellerSupport: {
            title: "LABELLER SUPPORT",
            items: [
              "Secondary machine operation on labellers",
              "Provide lunch relief to labeller operators (skilled)",
              "Support labeller reject line operations"
            ]
          },
          infeedCoordination: {
            title: "INFEED COORDINATION",
            items: [
              "Infeed assistant provides bottlewasher relief",
              "Infeed assistant supports labellers reject line",
              "Coordinate bottle pickup support to BGE operator"
            ]
          },
          teamLeadership: {
            title: "TEAM LEADERSHIP",
            items: [
              "Coach peers on safe bottlewasher operation",
              "Support maintenance/service providers safely",
              "Ensure safe shift handovers and communication"
            ]
          }
        },
        footer: "Crew Army | 2025 Team Army Excellence Strategy"
      }
    });
    setMessage('Content loaded successfully');
  };

  const saveContent = async () => {
    if (!content) return;
    
    setIsLoading(true);
    setMessage('');
    
    try {
      const response = await fetch('/api/slide-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
      });

      if (response.ok) {
        setMessage('✅ Content saved successfully!');
      } else {
        setMessage('❌ Failed to save content');
      }
    } catch (error) {
      console.error('Save error:', error);
      setMessage('❌ Save failed: Network error');
    } finally {
      setIsLoading(false);
    }
  };

  const deployToGitHub = async (pageNumber: number) => {
    setIsDeploying(true);
    setMessage('');
    
    try {
      const response = await fetch('/api/deploy-simple', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pageNumber }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(`🚀 ${result.message} (${result.filesCreated} files ready in github-deploy folder)`);
      } else {
        setMessage(`❌ Deployment failed: ${result.error || 'Unknown error'}${result.suggestion ? ` - ${result.suggestion}` : ''}`);
      }
    } catch (error) {
      console.error('Deployment error:', error);
      setMessage('❌ Deployment failed: Network error');
    } finally {
      setIsDeploying(false);
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

  const addArrayItem = (slideNum: 2 | 3 | 13, path: string) => {
    if (!content) return;
    const newContent = { ...content };
    const slideKey = `slide${slideNum}` as keyof SlideContent;
    const keys = path.split('.');
    let current: any = newContent[slideKey];
    
    for (let i = 0; i < keys.length; i++) {
      if (i === keys.length - 1) {
        current[keys[i]].push('');
      } else {
        current = current[keys[i]];
      }
    }
    
    setContent(newContent);
  };

  const removeArrayItem = (slideNum: 2 | 3 | 13, path: string, index: number) => {
    if (!content) return;
    const newContent = { ...content };
    const slideKey = `slide${slideNum}` as keyof SlideContent;
    const keys = path.split('.');
    let current: any = newContent[slideKey];
    
    for (let i = 0; i < keys.length; i++) {
      if (i === keys.length - 1) {
        if (current[keys[i]].length > 1) { // Prevent removing last item
          current[keys[i]].splice(index, 1);
        }
      } else {
        current = current[keys[i]];
      }
    }
    
    setContent(newContent);
  };

  const updateArrayFromText = (slideNum: 2 | 3 | 13, path: string, text: string) => {
    if (!content) return;
    const newContent = { ...content };
    const slideKey = `slide${slideNum}` as keyof SlideContent;
    const keys = path.split('.');
    let current: any = newContent[slideKey];
    
    for (let i = 0; i < keys.length; i++) {
      if (i === keys.length - 1) {
        // Split by newlines and filter out empty lines
        current[keys[i]] = text.split('\n').filter(line => line.trim() !== '');
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
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 overflow-auto">
      <div className="max-w-7xl mx-auto pb-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-white">Text Editor</h1>
            <span className="text-gray-400">Pages 2, 3, 13, 13a</span>
          </div>
          <div className="flex gap-4">
            <Button 
              onClick={saveContent} 
              disabled={isLoading} 
              className="bg-green-600 hover:bg-green-700"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
            <Button 
              onClick={() => deployToGitHub(editingSlide)} 
              disabled={isLoading || isDeploying} 
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Upload className="w-4 h-4 mr-2" />
              {isDeploying ? 'Pushing...' : 'Push to GitHub'}
            </Button>
          </div>
        </div>

        {message && (
          <Alert className="mb-6 border-blue-500 bg-blue-500/10">
            <AlertDescription className="text-blue-400">{message}</AlertDescription>
          </Alert>
        )}

        {/* Slide Tabs */}
        <Tabs value={editingSlide.toString()} onValueChange={(value) => setEditingSlide(value === '13a' ? '13a' : parseInt(value) as 2 | 3 | 13)} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800 border-slate-700">
            <TabsTrigger value="2" className="data-[state=active]:bg-slate-700 text-white">
              Page 2 - Framework
            </TabsTrigger>
            <TabsTrigger value="3" className="data-[state=active]:bg-slate-700 text-white">
              Page 3 - Safety
            </TabsTrigger>
            <TabsTrigger value="13" className="data-[state=active]:bg-slate-700 text-white">
              Page 13 - Bottlewasher
            </TabsTrigger>
            <TabsTrigger value="13a" className="data-[state=active]:bg-slate-700 text-green-400">
              Page 13a - TEST
            </TabsTrigger>
          </TabsList>

          {/* Page 2 Editor */}
          <TabsContent value="2" className="space-y-6 w-full h-auto overflow-visible">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Page 2 - Operational Excellence Framework</h2>
              <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Link href="/pages/2" target="_blank">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Page
                </Link>
              </Button>
            </div>
            
            <Card className="p-6 bg-gray-800/60 backdrop-blur border border-gray-600">
              <h3 className="text-lg font-semibold text-white mb-4">📄 Page Header</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-300">Title</Label>
                  <Input
                    value={content.slide2.title}
                    onChange={(e) => updateSlide2('title', e.target.value)}
                    className="mt-1 bg-slate-800 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Subtitle</Label>
                  <Input
                    value={content.slide2.subtitle}
                    onChange={(e) => updateSlide2('subtitle', e.target.value)}
                    className="mt-1 bg-slate-800 border-slate-600 text-white"
                  />
                </div>
              </div>
            </Card>

            {/* Two Column Layout matching mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - VPO Wheel */}
              <Card className="p-6 bg-gray-800/60 backdrop-blur border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-4">🎯 VPO Wheel (Left Panel)</h3>
                
                {/* Center Hub */}
                <div className="mb-4 p-3 bg-gray-700/50 rounded border-l-4 border-yellow-400">
                  <Label className="text-yellow-400 font-bold">CENTER HUB</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <Input
                      value={content.slide2.vpoWheel.centerText}
                      onChange={(e) => updateSlide2('vpoWheel.centerText', e.target.value)}
                      className="bg-slate-800 border-slate-600 text-white"
                      placeholder="Center Text"
                    />
                    <Input
                      value={content.slide2.vpoWheel.centerSubtext}
                      onChange={(e) => updateSlide2('vpoWheel.centerSubtext', e.target.value)}
                      className="bg-slate-800 border-slate-600 text-white"
                      placeholder="Center Subtext"
                    />
                  </div>
                </div>

                {/* VPO Segments */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Safety - Yellow */}
                  <div className="p-3 bg-yellow-500/10 rounded border-l-4 border-yellow-400">
                    <Label className="text-yellow-400 font-bold">🛡️ SAFETY</Label>
                    <Input
                      value={content.slide2.vpoWheel.safety.title}
                      onChange={(e) => updateSlide2('vpoWheel.safety.title', e.target.value)}
                      className="mt-2 bg-slate-800 border-slate-600 text-white"
                    />
                    <Input
                      value={content.slide2.vpoWheel.safety.subtitle}
                      onChange={(e) => updateSlide2('vpoWheel.safety.subtitle', e.target.value)}
                      className="mt-1 bg-slate-800 border-slate-600 text-white"
                    />
                  </div>

                  {/* Quality - Green */}
                  <div className="p-3 bg-green-500/10 rounded border-l-4 border-green-400">
                    <Label className="text-green-400 font-bold">✅ QUALITY</Label>
                    <Input
                      value={content.slide2.vpoWheel.quality.title}
                      onChange={(e) => updateSlide2('vpoWheel.quality.title', e.target.value)}
                      className="mt-2 bg-slate-800 border-slate-600 text-white"
                    />
                    <Input
                      value={content.slide2.vpoWheel.quality.subtitle}
                      onChange={(e) => updateSlide2('vpoWheel.quality.subtitle', e.target.value)}
                      className="mt-1 bg-slate-800 border-slate-600 text-white"
                    />
                  </div>

                  {/* Volume - Orange */}
                  <div className="p-3 bg-orange-500/10 rounded border-l-4 border-orange-400">
                    <Label className="text-orange-400 font-bold">📈 VOLUME</Label>
                    <Input
                      value={content.slide2.vpoWheel.volume.title}
                      onChange={(e) => updateSlide2('vpoWheel.volume.title', e.target.value)}
                      className="mt-2 bg-slate-800 border-slate-600 text-white"
                    />
                    <Input
                      value={content.slide2.vpoWheel.volume.subtitle}
                      onChange={(e) => updateSlide2('vpoWheel.volume.subtitle', e.target.value)}
                      className="mt-1 bg-slate-800 border-slate-600 text-white"
                    />
                  </div>

                  {/* Cost - Purple */}
                  <div className="p-3 bg-purple-500/10 rounded border-l-4 border-purple-400">
                    <Label className="text-purple-400 font-bold">💰 COST</Label>
                    <Input
                      value={content.slide2.vpoWheel.cost.title}
                      onChange={(e) => updateSlide2('vpoWheel.cost.title', e.target.value)}
                      className="mt-2 bg-slate-800 border-slate-600 text-white"
                    />
                    <Input
                      value={content.slide2.vpoWheel.cost.subtitle}
                      onChange={(e) => updateSlide2('vpoWheel.cost.subtitle', e.target.value)}
                      className="mt-1 bg-slate-800 border-slate-600 text-white"
                    />
                  </div>
                </div>
              </Card>

              {/* Right Column - Autonomous Team */}
              <Card className="p-6 bg-gray-800/60 backdrop-blur border-l-4 border-blue-400">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">👥 Autonomous Team Approach (Right Panel)</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label className="text-blue-400">Section Title</Label>
                    <Input
                      value={content.slide2.autonomousTeam.title}
                      onChange={(e) => updateSlide2('autonomousTeam.title', e.target.value)}
                      className="mt-1 bg-slate-800 border-slate-600 text-white"
                    />
                  </div>
                  
                  <ArrayEditor
                    slideNum={2}
                    path="autonomousTeam.bulletPoints"
                    items={content.slide2.autonomousTeam.bulletPoints}
                    label="Main Bullet Points"
                    colorClass="text-blue-400"
                    placeholder="Enter bullet point"
                    bulkEditMode={bulkEditMode}
                    setBulkEditMode={setBulkEditMode}
                    addArrayItem={addArrayItem}
                    removeArrayItem={removeArrayItem}
                    updateArrayFromText={updateArrayFromText}
                    updateArrayItem={updateArrayItem}
                  />

                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                    <Label className="text-blue-400">Core Enablers Section</Label>
                    <Input
                      value={content.slide2.autonomousTeam.coreEnablers.title}
                      onChange={(e) => updateSlide2('autonomousTeam.coreEnablers.title', e.target.value)}
                      className="mt-2 bg-slate-800 border-slate-600 text-white"
                      placeholder="Core Enablers Title"
                    />
                    
                    <ArrayEditor
                      slideNum={2}
                      path="autonomousTeam.coreEnablers.items"
                      items={content.slide2.autonomousTeam.coreEnablers.items}
                      label="Core Enablers Items"
                      colorClass="text-blue-300"
                      placeholder="Enter core enabler"
                      bulkEditMode={bulkEditMode}
                      setBulkEditMode={setBulkEditMode}
                      addArrayItem={addArrayItem}
                      removeArrayItem={removeArrayItem}
                      updateArrayFromText={updateArrayFromText}
                      updateArrayItem={updateArrayItem}
                    />
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Page 3 Editor - 2 Column Yellow Safety Theme */}
          <TabsContent value="3" className="space-y-6 w-full h-auto overflow-visible">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
                <span>🛡️</span> Page 3 - Safety First
              </h2>
              <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Link href="/pages/3" target="_blank">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Page
                </Link>
              </Button>
            </div>

            <Card className="p-6 bg-gray-800/60 backdrop-blur border border-gray-600">
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">📄 Page Header</h3>
              <Input
                value={content.slide3.title}
                onChange={(e) => setContent({...content, slide3: {...content.slide3, title: e.target.value}})}
                className="bg-slate-800 border-slate-600 text-white"
                placeholder="Safety page title"
              />
            </Card>

            {/* Two Column Layout matching mobile page 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Frontline Responsibilities */}
              <Card className="p-6 bg-gray-800/60 backdrop-blur border-l-4 border-yellow-400">
                <h3 className="text-lg font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                  <span>👥</span> Frontline Responsibilities (Left Panel)
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <Label className="text-yellow-400">Section Title</Label>
                    <Input
                      value={content.slide3.frontlineResponsibilities.title}
                      onChange={(e) => setContent({...content, slide3: {...content.slide3, frontlineResponsibilities: {...content.slide3.frontlineResponsibilities, title: e.target.value}}})}
                      className="mt-1 bg-slate-800 border-slate-600 text-white"
                    />
                  </div>
                  
                  <ArrayEditor
                    slideNum={3}
                    path="frontlineResponsibilities.items"
                    items={content.slide3.frontlineResponsibilities.items}
                    label="Responsibility Items"
                    colorClass="text-yellow-400"
                    placeholder="Enter responsibility"
                    bulkEditMode={bulkEditMode}
                    setBulkEditMode={setBulkEditMode}
                    addArrayItem={addArrayItem}
                    removeArrayItem={removeArrayItem}
                    updateArrayFromText={updateArrayFromText}
                    updateArrayItem={updateArrayItem}
                  />

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                    <Label className="text-yellow-400">Success Metrics Section</Label>
                    <Input
                      value={content.slide3.frontlineResponsibilities.successMetrics.title}
                      onChange={(e) => setContent({...content, slide3: {...content.slide3, frontlineResponsibilities: {...content.slide3.frontlineResponsibilities, successMetrics: {...content.slide3.frontlineResponsibilities.successMetrics, title: e.target.value}}}})}
                      className="mt-2 bg-slate-800 border-slate-600 text-white"
                      placeholder="Success Metrics Title"
                    />
                    
                    <ArrayEditor
                      slideNum={3}
                      path="frontlineResponsibilities.successMetrics.items"
                      items={content.slide3.frontlineResponsibilities.successMetrics.items}
                      label="Success Metrics Items"
                      colorClass="text-yellow-300"
                      placeholder="Enter success metric"
                      bulkEditMode={bulkEditMode}
                      setBulkEditMode={setBulkEditMode}
                      addArrayItem={addArrayItem}
                      removeArrayItem={removeArrayItem}
                      updateArrayFromText={updateArrayFromText}
                      updateArrayItem={updateArrayItem}
                    />
                  </div>
                </div>
              </Card>

              {/* Right Column - Operator Actions */}
              <Card className="p-6 bg-gray-800/60 backdrop-blur border-l-4 border-yellow-400">
                <h3 className="text-lg font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                  <span>🛡️</span> Operator Actions (Right Panel)
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <Label className="text-yellow-400">Section Title</Label>
                    <Input
                      value={content.slide3.operatorActions.title}
                      onChange={(e) => setContent({...content, slide3: {...content.slide3, operatorActions: {...content.slide3.operatorActions, title: e.target.value}}})}
                      className="mt-1 bg-slate-800 border-slate-600 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-yellow-400">Action Sections</Label>
                    {content.slide3.operatorActions.sections.map((section, index) => (
                      <div key={index} className="mt-3 p-3 bg-yellow-500/5 border border-yellow-500/20 rounded">
                        <Label className="text-yellow-400 text-xs font-bold">{section.title}</Label>
                        <Input
                          value={section.title}
                          onChange={(e) => {
                            const newSections = [...content.slide3.operatorActions.sections];
                            newSections[index] = {...section, title: e.target.value};
                            setContent({...content, slide3: {...content.slide3, operatorActions: {...content.slide3.operatorActions, sections: newSections}}});
                          }}
                          className="mt-1 bg-slate-800 border-slate-600 text-white text-sm"
                        />
                        <Textarea
                          value={section.content}
                          onChange={(e) => {
                            const newSections = [...content.slide3.operatorActions.sections];
                            newSections[index] = {...section, content: e.target.value};
                            setContent({...content, slide3: {...content.slide3, operatorActions: {...content.slide3.operatorActions, sections: newSections}}});
                          }}
                          className="mt-2 bg-slate-800 border-slate-600 text-white"
                          rows={2}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                    <Label className="text-yellow-400">Focus Areas</Label>
                    <Input
                      value={content.slide3.operatorActions.focusAreas.title}
                      onChange={(e) => setContent({...content, slide3: {...content.slide3, operatorActions: {...content.slide3.operatorActions, focusAreas: {...content.slide3.operatorActions.focusAreas, title: e.target.value}}}})}
                      className="mt-2 bg-slate-800 border-slate-600 text-white"
                      placeholder="Focus Areas Title"
                    />
                    <Textarea
                      value={content.slide3.operatorActions.focusAreas.content}
                      onChange={(e) => setContent({...content, slide3: {...content.slide3, operatorActions: {...content.slide3.operatorActions, focusAreas: {...content.slide3.operatorActions.focusAreas, content: e.target.value}}}})}
                      className="mt-2 bg-slate-800 border-slate-600 text-white"
                      rows={2}
                      placeholder="Focus Areas Content"
                    />
                  </div>

                  <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-3">
                    <Label className="text-yellow-300">Stop Work Authority</Label>
                    <Input
                      value={content.slide3.operatorActions.stopWork.title}
                      onChange={(e) => setContent({...content, slide3: {...content.slide3, operatorActions: {...content.slide3.operatorActions, stopWork: {...content.slide3.operatorActions.stopWork, title: e.target.value}}}})}
                      className="mt-2 bg-slate-800 border-slate-600 text-white"
                      placeholder="Stop Work Title"
                    />
                    <Textarea
                      value={content.slide3.operatorActions.stopWork.subtitle}
                      onChange={(e) => setContent({...content, slide3: {...content.slide3, operatorActions: {...content.slide3.operatorActions, stopWork: {...content.slide3.operatorActions.stopWork, subtitle: e.target.value}}}})}
                      className="mt-2 bg-slate-800 border-slate-600 text-white"
                      rows={2}
                      placeholder="Stop Work Description"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Page 13 Editor - Complex Grid Layout */}
          <TabsContent value="13" className="space-y-6 w-full h-auto overflow-visible">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-blue-400 flex items-center gap-2">
                <span>🌊</span> Page 13 - Bottlewasher Roles
              </h2>
              <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Link href="/pages/13" target="_blank">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Page
                </Link>
              </Button>
            </div>

            <Card className="p-6 bg-gray-800/60 backdrop-blur border border-gray-600">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">📄 Page Header</h3>
              <Input
                value={content.slide13.title}
                onChange={(e) => setContent({...content, slide13: {...content.slide13, title: e.target.value}})}
                className="bg-slate-800 border-slate-600 text-white"
                placeholder="Bottlewasher roles title"
              />
            </Card>

            {/* Primary Roles - 2x2 Grid Layout */}
            <Card className="p-6 bg-gray-800/60 backdrop-blur border border-gray-600">
              <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                <span>🎯</span> Primary Roles: Bottlewasher Operations
              </h3>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-blue-400">Section Title</Label>
                  <Input
                    value={content.slide13.primaryRoles.sectionTitle}
                    onChange={(e) => setContent({...content, slide13: {...content.slide13, primaryRoles: {...content.slide13.primaryRoles, sectionTitle: e.target.value}}})}
                    className="mt-1 bg-slate-800 border-slate-600 text-white"
                  />
                </div>

                {/* Top Row - Safety + Quality */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Safety - Yellow */}
                  <div className="bg-gray-800/60 rounded-xl p-4 border-l-4 border-yellow-400">
                    <div className="flex items-center gap-2 mb-3">
                      <span>🛡️</span>
                      <Label className="text-yellow-400 font-bold">SAFETY FIRST</Label>
                    </div>
                    <Input
                      value={content.slide13.primaryRoles.safety.title}
                      onChange={(e) => setContent({...content, slide13: {...content.slide13, primaryRoles: {...content.slide13.primaryRoles, safety: {...content.slide13.primaryRoles.safety, title: e.target.value}}}})}
                      className="mb-2 bg-slate-800 border-slate-600 text-white"
                      placeholder="Safety title"
                    />
                    <ArrayEditor
                      slideNum={13}
                      path="primaryRoles.safety.items"
                      items={content.slide13.primaryRoles.safety.items}
                      label="Safety Items"
                      colorClass="text-yellow-300"
                      placeholder="Enter safety responsibility"
                      bulkEditMode={bulkEditMode}
                      setBulkEditMode={setBulkEditMode}
                      addArrayItem={addArrayItem}
                      removeArrayItem={removeArrayItem}
                      updateArrayFromText={updateArrayFromText}
                      updateArrayItem={updateArrayItem}
                    />
                  </div>

                  {/* Quality - Green */}
                  <div className="bg-gray-800/60 rounded-xl p-4 border-l-4 border-green-400">
                    <div className="flex items-center gap-2 mb-3">
                      <span>✅</span>
                      <Label className="text-green-400 font-bold">QUALITY ALWAYS</Label>
                    </div>
                    <Input
                      value={content.slide13.primaryRoles.quality.title}
                      onChange={(e) => setContent({...content, slide13: {...content.slide13, primaryRoles: {...content.slide13.primaryRoles, quality: {...content.slide13.primaryRoles.quality, title: e.target.value}}}})}
                      className="mb-2 bg-slate-800 border-slate-600 text-white"
                      placeholder="Quality title"
                    />
                    <ArrayEditor
                      slideNum={13}
                      path="primaryRoles.quality.items"
                      items={content.slide13.primaryRoles.quality.items}
                      label="Quality Items"
                      colorClass="text-green-300"
                      placeholder="Enter quality responsibility"
                      bulkEditMode={bulkEditMode}
                      setBulkEditMode={setBulkEditMode}
                      addArrayItem={addArrayItem}
                      removeArrayItem={removeArrayItem}
                      updateArrayFromText={updateArrayFromText}
                      updateArrayItem={updateArrayItem}
                    />
                  </div>
                </div>

                {/* Bottom Row - Volume + Cost */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Volume - Orange */}
                  <div className="bg-gray-800/60 rounded-xl p-4 border-l-4 border-orange-400">
                    <div className="flex items-center gap-2 mb-3">
                      <span>📈</span>
                      <Label className="text-orange-400 font-bold">VOLUME</Label>
                    </div>
                    <Input
                      value={content.slide13.primaryRoles.volume.title}
                      onChange={(e) => setContent({...content, slide13: {...content.slide13, primaryRoles: {...content.slide13.primaryRoles, volume: {...content.slide13.primaryRoles.volume, title: e.target.value}}}})}
                      className="mb-2 bg-slate-800 border-slate-600 text-white"
                      placeholder="Volume title"
                    />
                    <ArrayEditor
                      slideNum={13}
                      path="primaryRoles.volume.items"
                      items={content.slide13.primaryRoles.volume.items}
                      label="Volume Items"
                      colorClass="text-orange-300"
                      placeholder="Enter volume responsibility"
                      bulkEditMode={bulkEditMode}
                      setBulkEditMode={setBulkEditMode}
                      addArrayItem={addArrayItem}
                      removeArrayItem={removeArrayItem}
                      updateArrayFromText={updateArrayFromText}
                      updateArrayItem={updateArrayItem}
                    />
                  </div>

                  {/* Cost - Purple */}
                  <div className="bg-gray-800/60 rounded-xl p-4 border-l-4 border-purple-400">
                    <div className="flex items-center gap-2 mb-3">
                      <span>💰</span>
                      <Label className="text-purple-400 font-bold">COST</Label>
                    </div>
                    <Input
                      value={content.slide13.primaryRoles.cost.title}
                      onChange={(e) => setContent({...content, slide13: {...content.slide13, primaryRoles: {...content.slide13.primaryRoles, cost: {...content.slide13.primaryRoles.cost, title: e.target.value}}}})}
                      className="mb-2 bg-slate-800 border-slate-600 text-white"
                      placeholder="Cost title"
                    />
                    <ArrayEditor
                      slideNum={13}
                      path="primaryRoles.cost.items"
                      items={content.slide13.primaryRoles.cost.items}
                      label="Cost Items"
                      colorClass="text-purple-300"
                      placeholder="Enter cost responsibility"
                      bulkEditMode={bulkEditMode}
                      setBulkEditMode={setBulkEditMode}
                      addArrayItem={addArrayItem}
                      removeArrayItem={removeArrayItem}
                      updateArrayFromText={updateArrayFromText}
                      updateArrayItem={updateArrayItem}
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Secondary/Support Roles - 3 Column Layout */}
            <Card className="p-6 bg-gray-800/60 backdrop-blur border border-gray-600">
              <h3 className="text-lg font-semibold text-amber-400 mb-4 flex items-center gap-2">
                <span>👥</span> Secondary/Support Roles
              </h3>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-amber-400">Section Title</Label>
                  <Input
                    value={content.slide13.secondaryRoles.sectionTitle}
                    onChange={(e) => setContent({...content, slide13: {...content.slide13, secondaryRoles: {...content.slide13.secondaryRoles, sectionTitle: e.target.value}}})}
                    className="mt-1 bg-slate-800 border-slate-600 text-white"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* Labeller Support - Amber */}
                  <div className="bg-gray-700/50 rounded-xl p-4 border-l-4 border-amber-400">
                    <div className="flex items-center gap-2 mb-3">
                      <span>🏷️</span>
                      <Label className="text-amber-400 font-bold">LABELLER SUPPORT</Label>
                    </div>
                    <Input
                      value={content.slide13.secondaryRoles.labellerSupport.title}
                      onChange={(e) => setContent({...content, slide13: {...content.slide13, secondaryRoles: {...content.slide13.secondaryRoles, labellerSupport: {...content.slide13.secondaryRoles.labellerSupport, title: e.target.value}}}})}
                      className="mb-2 bg-slate-800 border-slate-600 text-white"
                      placeholder="Labeller support title"
                    />
                    <ArrayEditor
                      slideNum={13}
                      path="secondaryRoles.labellerSupport.items"
                      items={content.slide13.secondaryRoles.labellerSupport.items}
                      label="Labeller Support Items"
                      colorClass="text-amber-300"
                      placeholder="Enter labeller support task"
                      bulkEditMode={bulkEditMode}
                      setBulkEditMode={setBulkEditMode}
                      addArrayItem={addArrayItem}
                      removeArrayItem={removeArrayItem}
                      updateArrayFromText={updateArrayFromText}
                      updateArrayItem={updateArrayItem}
                    />
                  </div>

                  {/* Infeed Coordination - Teal */}
                  <div className="bg-gray-700/50 rounded-xl p-4 border-l-4 border-teal-400">
                    <div className="flex items-center gap-2 mb-3">
                      <span>↔️</span>
                      <Label className="text-teal-400 font-bold">INFEED COORDINATION</Label>
                    </div>
                    <Input
                      value={content.slide13.secondaryRoles.infeedCoordination.title}
                      onChange={(e) => setContent({...content, slide13: {...content.slide13, secondaryRoles: {...content.slide13.secondaryRoles, infeedCoordination: {...content.slide13.secondaryRoles.infeedCoordination, title: e.target.value}}}})}
                      className="mb-2 bg-slate-800 border-slate-600 text-white"
                      placeholder="Infeed coordination title"
                    />
                    <ArrayEditor
                      slideNum={13}
                      path="secondaryRoles.infeedCoordination.items"
                      items={content.slide13.secondaryRoles.infeedCoordination.items}
                      label="Infeed Coordination Items"
                      colorClass="text-teal-300"
                      placeholder="Enter infeed coordination task"
                      bulkEditMode={bulkEditMode}
                      setBulkEditMode={setBulkEditMode}
                      addArrayItem={addArrayItem}
                      removeArrayItem={removeArrayItem}
                      updateArrayFromText={updateArrayFromText}
                      updateArrayItem={updateArrayItem}
                    />
                  </div>

                  {/* Team Leadership - Cyan */}
                  <div className="bg-gray-700/50 rounded-xl p-4 border-l-4 border-cyan-400">
                    <div className="flex items-center gap-2 mb-3">
                      <span>👨‍💼</span>
                      <Label className="text-cyan-400 font-bold">TEAM LEADERSHIP</Label>
                    </div>
                    <Input
                      value={content.slide13.secondaryRoles.teamLeadership.title}
                      onChange={(e) => setContent({...content, slide13: {...content.slide13, secondaryRoles: {...content.slide13.secondaryRoles, teamLeadership: {...content.slide13.secondaryRoles.teamLeadership, title: e.target.value}}}})}
                      className="mb-2 bg-slate-800 border-slate-600 text-white"
                      placeholder="Team leadership title"
                    />
                    <ArrayEditor
                      slideNum={13}
                      path="secondaryRoles.teamLeadership.items"
                      items={content.slide13.secondaryRoles.teamLeadership.items}
                      label="Team Leadership Items"
                      colorClass="text-cyan-300"
                      placeholder="Enter team leadership responsibility"
                      bulkEditMode={bulkEditMode}
                      setBulkEditMode={setBulkEditMode}
                      addArrayItem={addArrayItem}
                      removeArrayItem={removeArrayItem}
                      updateArrayFromText={updateArrayFromText}
                      updateArrayItem={updateArrayItem}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Page 13a Editor - Static Editor Test */}
          <TabsContent value="13a" className="space-y-6 w-full h-auto overflow-visible">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-green-400 flex items-center gap-2">
                <span>🧪</span> Page 13a - Static Editor Test
              </h2>
              <div className="flex gap-4">
                <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                  <Link href="/pages/13a" target="_blank">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview Page 13a
                  </Link>
                </Button>
                <Button 
                  onClick={() => window.open('/static-editor-13a.html', '_blank')} 
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Open Static Editor
                </Button>
              </div>
            </div>

            {/* Static Editor Demo Interface */}
            <Card className="bg-black/50 border-slate-700 p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                <span>🌐</span> Static Editor Preview
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Volume Section Example */}
                <div className="bg-gray-800/60 rounded-xl p-4 border-l-4 border-orange-400">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="h-6 w-6 text-orange-400" />
                    <h4 className="text-lg font-bold text-orange-400">📊 VOLUME (Example)</h4>
                  </div>
                  
                  <div className="space-y-2">
                    {content?.slide13?.primaryRoles?.volume?.items?.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-orange-400 rounded-full mt-2"></div>
                        <input 
                          type="text" 
                          value={item}
                          className="flex-1 bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white text-sm"
                          placeholder="Edit volume item..."
                        />
                      </div>
                    ))}
                    <button className="text-orange-400 text-sm hover:text-orange-300 flex items-center gap-1 mt-2">
                      <Plus className="w-3 h-3" />
                      Add Volume Item
                    </button>
                  </div>
                </div>

                {/* Cost Section Example */}
                <div className="bg-gray-800/60 rounded-xl p-4 border-l-4 border-purple-400">
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign className="h-6 w-6 text-purple-400" />
                    <h4 className="text-lg font-bold text-purple-400">💰 COST (Example)</h4>
                  </div>
                  
                  <div className="space-y-2">
                    {content?.slide13?.primaryRoles?.cost?.items?.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full mt-2"></div>
                        <input 
                          type="text" 
                          value={item}
                          className="flex-1 bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white text-sm"
                          placeholder="Edit cost item..."
                        />
                      </div>
                    ))}
                    <button className="text-purple-400 text-sm hover:text-purple-300 flex items-center gap-1 mt-2">
                      <Plus className="w-3 h-3" />
                      Add Cost Item
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <h4 className="text-green-400 font-bold mb-2">🚀 Static Editor Features:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>✅ Works without dev server (pure HTML/JavaScript)</li>
                  <li>✅ Direct GitHub API integration for saving</li>
                  <li>✅ Accessible from GitHub Pages URL</li>
                  <li>✅ Edit from any device (mobile, tablet, desktop)</li>
                  <li>✅ Auto-push changes back to repository</li>
                </ul>
              </div>

              <div className="mt-4 flex justify-center">
                <Button 
                  onClick={() => alert('Creating static editor file...')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Generate Static Editor File
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
