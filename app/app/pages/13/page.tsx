import { Waves, Shield, CheckCircle, TrendingUp, DollarSign, Users, Wrench, Tag, ArrowRightLeft, Coffee, MessageCircle, Heart, Target, Users2 } from 'lucide-react';
import { getSlideContent, type Slide13Content } from '@/lib/content-manager';

export default function Slide13() {
  const content = getSlideContent(13) as Slide13Content;
  return (
    <div className="slide-container relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      {/* Header */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2 md:gap-4">
          <Waves className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-blue-400" />
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">
            {content.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-2 md:px-6 lg:px-12 pb-4 md:pb-6 lg:pb-8 flex-1">
        {/* Primary Roles Section */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-blue-400 mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
            <Target className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
            <span className="text-sm md:text-base lg:text-lg">{content.primaryRoles.sectionTitle}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
            {/* Safety First - Primary */}
            <div className="bg-gray-800/60 rounded-xl p-3 md:p-4 lg:p-5 border-l-4 border-yellow-400">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <Shield className="h-5 w-5 md:h-6 md:w-6 text-yellow-400" />
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-yellow-400">{content.primaryRoles.safety.title}</h3>
              </div>
              <div className="space-y-1 md:space-y-1.5 text-xs md:text-sm">
                {content.primaryRoles.safety.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-yellow-400 rounded-full mt-1.5"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Always - Primary */}
            <div className="bg-gray-800/60 rounded-xl p-3 md:p-4 lg:p-5 border-l-4 border-green-400">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-400" />
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-green-400">{content.primaryRoles.quality.title}</h3>
              </div>
              <div className="space-y-1 md:space-y-1.5 text-xs md:text-sm">
                {content.primaryRoles.quality.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-green-400 rounded-full mt-1.5"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Volume - Primary */}
            <div className="bg-gray-800/60 rounded-xl p-3 md:p-4 lg:p-5 border-l-4 border-orange-400">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-orange-400" />
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-orange-400">{content.primaryRoles.volume.title}</h3>
              </div>
              <div className="space-y-1 md:space-y-1.5 text-xs md:text-sm">
                {content.primaryRoles.volume.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-orange-400 rounded-full mt-1.5"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost - Primary */}
            <div className="bg-gray-800/60 rounded-xl p-3 md:p-4 lg:p-5 border-l-4 border-purple-400">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <DollarSign className="h-5 w-5 md:h-6 md:w-6 text-purple-400" />
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-purple-400">{content.primaryRoles.cost.title}</h3>
              </div>
              <div className="space-y-1 md:space-y-1.5 text-xs md:text-sm">
                {content.primaryRoles.cost.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-purple-400 rounded-full mt-1.5"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Secondary/Support Roles Section */}
        <div>
          <h2 className="text-3xl font-bold text-amber-400 mb-4 flex items-center gap-3">
            <Users2 className="h-7 w-7" />
            {content.secondaryRoles.sectionTitle}
          </h2>
          
          <div className="grid grid-cols-3 gap-4">
            {/* Labeller Support */}
            <div className="bg-gray-700/50 rounded-xl p-5 border-l-4 border-amber-400">
              <div className="flex items-center gap-3 mb-3">
                <Tag className="h-6 w-6 text-amber-400" />
                <h3 className="text-xl font-bold text-amber-400">{content.secondaryRoles.labellerSupport.title}</h3>
              </div>
              <div className="space-y-1.5 text-sm">
                {content.secondaryRoles.labellerSupport.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-amber-400 rounded-full mt-1.5"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Infeed Coordination */}
            <div className="bg-gray-700/50 rounded-xl p-5 border-l-4 border-teal-400">
              <div className="flex items-center gap-3 mb-3">
                <ArrowRightLeft className="h-6 w-6 text-teal-400" />
                <h3 className="text-xl font-bold text-teal-400">{content.secondaryRoles.infeedCoordination.title}</h3>
              </div>
              <div className="space-y-1.5 text-sm">
                {content.secondaryRoles.infeedCoordination.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-teal-400 rounded-full mt-1.5"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Leadership */}
            <div className="bg-gray-700/50 rounded-xl p-5 border-l-4 border-cyan-400">
              <div className="flex items-center gap-3 mb-3">
                <Users className="h-6 w-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-cyan-400">{content.secondaryRoles.teamLeadership.title}</h3>
              </div>
              <div className="space-y-1.5 text-sm">
                {content.secondaryRoles.teamLeadership.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-16 right-16 flex justify-center">
        <p className="text-xl text-gray-400">
          {content.footer}
        </p>
      </div>
    </div>
  );
}