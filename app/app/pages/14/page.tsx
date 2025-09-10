

import { Tag, Shield, CheckCircle, TrendingUp, DollarSign, Users, Wrench, ArrowRightLeft, Coffee, Heart, RotateCcw, Target, Users2 } from 'lucide-react';

export default function Slide14() {
  return (
    <div className="slide-container relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      {/* Header */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2 md:gap-4">
          <Tag className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-indigo-400" />
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">
            LABELLERS - ROLES & RESPONSIBILITIES
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-2 md:px-6 lg:px-12 pb-4 md:pb-6 lg:pb-8 flex-1">
        {/* Primary Roles Section */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-indigo-400 mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
            <Target className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
            <span className="text-sm md:text-base lg:text-lg">PRIMARY ROLES: Labeller Operations</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
            {/* Safety First - Primary */}
            <div className="bg-gray-800/60 rounded-xl p-3 md:p-4 lg:p-5 border-l-4 border-yellow-400">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <Shield className="h-5 w-5 md:h-6 md:w-6 text-yellow-400" />
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-yellow-400">SAFETY FIRST</h3>
              </div>
              <div className="space-y-1 md:space-y-1.5 text-xs md:text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full mt-1.5"></div>
                  <span>Apply machine safety protocols including guards/emergency stops</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full mt-1.5"></div>
                  <span>Identify and address hazards (moving parts, adhesives)</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full mt-1.5"></div>
                  <span>Train peers on safe labeller handling and risk mitigation</span>
                </div>
              </div>
            </div>

            {/* Quality Always - Primary */}
            <div className="bg-gray-800/60 rounded-xl p-3 md:p-4 lg:p-5 border-l-4 border-green-400">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-400" />
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-green-400">QUALITY ALWAYS</h3>
              </div>
              <div className="space-y-1 md:space-y-1.5 text-xs md:text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-green-400 rounded-full mt-1.5"></div>
                  <span>Monitor label application for alignment, adhesion & quality</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-green-400 rounded-full mt-1.5"></div>
                  <span>Inspect labeled products for defects and branding compliance</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-green-400 rounded-full mt-1.5"></div>
                  <span>Date coding checks after 2 hours</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Volume - Primary */}
            <div className="bg-gray-800/60 rounded-xl p-3 md:p-4 lg:p-5 border-l-4 border-orange-400">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-orange-400" />
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-orange-400">VOLUME</h3>
              </div>
              <div className="space-y-1 md:space-y-1.5 text-xs md:text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-orange-400 rounded-full mt-1.5"></div>
                  <span>Start-up, shut down, and brand changeovers on labeller lines</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-orange-400 rounded-full mt-1.5"></div>
                  <span>Troubleshoot label jams or misfeeds and perform minor repairs</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-orange-400 rounded-full mt-1.5"></div>
                  <span>Record production metrics and material usage</span>
                </div>
              </div>
            </div>

            {/* Cost - Primary */}
            <div className="bg-gray-800/60 rounded-xl p-3 md:p-4 lg:p-5 border-l-4 border-purple-400">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <DollarSign className="h-5 w-5 md:h-6 md:w-6 text-purple-400" />
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-purple-400">COST</h3>
              </div>
              <div className="space-y-1 md:space-y-1.5 text-xs md:text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-purple-400 rounded-full mt-1.5"></div>
                  <span>Perform glue or adhesive checks and adjustments</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-purple-400 rounded-full mt-1.5"></div>
                  <span>Clean and maintain labeller components (rollers, applicators)</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-purple-400 rounded-full mt-1.5"></div>
                  <span>Operate labeling machines to apply labels accurately</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary/Support Roles Section */}
        <div>
          <h2 className="text-3xl font-bold text-amber-400 mb-4 flex items-center gap-3">
            <Users2 className="h-7 w-7" />
            SECONDARY/SUPPORT ROLES: Cross-Labeller & Decrowner Support
          </h2>
          
          <div className="grid grid-cols-3 gap-4">
            {/* Cross-Labeller Support */}
            <div className="bg-gray-700/50 rounded-xl p-5 border-l-4 border-amber-400">
              <div className="flex items-center gap-3 mb-3">
                <ArrowRightLeft className="h-6 w-6 text-amber-400" />
                <h3 className="text-xl font-bold text-amber-400">CROSS-LABELLER SUPPORT</h3>
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-amber-400 rounded-full mt-1.5"></div>
                  <span>Labeller 1 operator supports Labeller 2 operations</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-amber-400 rounded-full mt-1.5"></div>
                  <span>Labeller 2 operator supports Labeller 1 operations</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-amber-400 rounded-full mt-1.5"></div>
                  <span>Mutual relief and cross-training support</span>
                </div>
              </div>
            </div>

            {/* Bottlewasher Relief */}
            <div className="bg-gray-700/50 rounded-xl p-5 border-l-4 border-teal-400">
              <div className="flex items-center gap-3 mb-3">
                <Coffee className="h-6 w-6 text-teal-400" />
                <h3 className="text-xl font-bold text-teal-400">BOTTLEWASHER RELIEF</h3>
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-teal-400 rounded-full mt-1.5"></div>
                  <span>Receive lunch relief from bottlewasher operator (skilled)</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-teal-400 rounded-full mt-1.5"></div>
                  <span>Coordinate break schedules with bottlewasher team</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-teal-400 rounded-full mt-1.5"></div>
                  <span>Support infeed assistant with reject line operations</span>
                </div>
              </div>
            </div>

            {/* Decrowner Support */}
            <div className="bg-gray-700/50 rounded-xl p-5 border-l-4 border-cyan-400">
              <div className="flex items-center gap-3 mb-3">
                <RotateCcw className="h-6 w-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-cyan-400">DECROWNER SUPPORT</h3>
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5"></div>
                  <span>Both labeller operators provide decrowner support</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5"></div>
                  <span>Assist with bottle handling and processing</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5"></div>
                  <span>Coordinate with unpacker/decrowner operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-16 right-16 flex justify-center">
        <p className="text-xl text-gray-400">
          Crew Army | 2025 Team Army Excellence Strategy
        </p>
      </div>
    </div>
  );
}
