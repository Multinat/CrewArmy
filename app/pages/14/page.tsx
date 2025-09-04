

import { Tag, Shield, CheckCircle, TrendingUp, DollarSign, Users, Wrench, ArrowRightLeft, Coffee, Heart, RotateCcw, Target, Users2 } from 'lucide-react';

export default function Slide14() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      {/* Header */}
      <div className="flex items-center justify-center py-4">
        <div className="flex items-center gap-4">
          <Tag className="h-10 w-10 text-indigo-400" />
          <h1 className="text-5xl font-bold text-center">
            LABELLERS - ROLES & RESPONSIBILITIES
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-12 pb-8 h-[980px]">
        {/* Primary Roles Section */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-indigo-400 mb-4 flex items-center gap-3">
            <Target className="h-7 w-7" />
            PRIMARY ROLES: Labeller Operations
          </h2>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Safety First - Primary */}
            <div className="bg-gray-800/60 rounded-xl p-5 border-l-4 border-yellow-400">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-6 w-6 text-yellow-400" />
                <h3 className="text-xl font-bold text-yellow-400">SAFETY FIRST</h3>
              </div>
              <div className="space-y-1.5 text-sm">
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
            <div className="bg-gray-800/60 rounded-xl p-5 border-l-4 border-green-400">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <h3 className="text-xl font-bold text-green-400">QUALITY ALWAYS</h3>
              </div>
              <div className="space-y-1.5 text-sm">
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
            <div className="bg-gray-800/60 rounded-xl p-5 border-l-4 border-orange-400">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="h-6 w-6 text-orange-400" />
                <h3 className="text-xl font-bold text-orange-400">VOLUME</h3>
              </div>
              <div className="space-y-1.5 text-sm">
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
            <div className="bg-gray-800/60 rounded-xl p-5 border-l-4 border-purple-400">
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="h-6 w-6 text-purple-400" />
                <h3 className="text-xl font-bold text-purple-400">COST</h3>
              </div>
              <div className="space-y-1.5 text-sm">
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
