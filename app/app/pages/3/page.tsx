
import { Shield, Users, UserCheck } from 'lucide-react';
import { getSlideContent, type Slide3Content } from '@/lib/content-manager';

export default function Slide3() {
  const content = getSlideContent(3) as Slide3Content;
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {/* Mobile-width container */}
    <div className="slide-container relative w-full max-w-md mx-auto min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex flex-col" style={{paddingTop: '200px'}}>
      {/* Header */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2 md:gap-4">
          <Shield className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-yellow-400" />
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">
            {content.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-2 gap-4 px-4">
        {/* Column 1: Frontline Responsibilities */}
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-yellow-400 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-2">
            <Users size={24} className="text-yellow-400" />
            <h3 className="text-lg font-bold text-white">{content.frontlineResponsibilities.title}</h3>
          </div>

          <div className="space-y-1 mb-3">
            {content.frontlineResponsibilities.items.map((item, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
                <p className="text-base text-gray-200">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-500 bg-opacity-10 border border-yellow-500 border-opacity-30 rounded-lg p-3">
            <h4 className="text-base font-bold text-yellow-400 mb-2">{content.frontlineResponsibilities.successMetrics.title}</h4>
            <div className="space-y-1">
              {content.frontlineResponsibilities.successMetrics.items.map((item, index) => (
                <p key={index} className="text-base text-gray-300">• {item}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: Combined Operator Actions & Leadership Actions */}
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-yellow-400 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-2">
            <Shield size={24} className="text-yellow-400" />
            <h3 className="text-lg font-bold text-white">{content.operatorActions.title}</h3>
          </div>

          <div className="space-y-2 mb-3">
            {content.operatorActions.sections.map((section, index) => (
              <div key={index}>
                <h4 className="text-base font-bold text-yellow-400 mb-1">{section.title}</h4>
                <p className="text-sm text-gray-200">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-500 bg-opacity-10 border border-yellow-500 border-opacity-30 rounded-lg p-2 mb-2">
            <h4 className="text-sm font-bold text-yellow-400 mb-1">{content.operatorActions.focusAreas.title}</h4>
            <div className="space-y-1">
              <p className="text-sm text-gray-300">{content.operatorActions.focusAreas.content}</p>
            </div>
          </div>

          <div className="bg-yellow-500 bg-opacity-20 border border-yellow-500 border-opacity-50 rounded-lg p-2">
            <p className="text-base font-bold text-yellow-300 text-center">{content.operatorActions.stopWork.title}</p>
            <p className="text-sm text-yellow-200 text-center">{content.operatorActions.stopWork.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-none text-center py-4">
        <p className="text-lg text-gray-400">{content.footer}</p>
      </div>
    </div>
    </div>
  );
}
