

import { Waves, Shield, CheckCircle, TrendingUp, DollarSign, Users, Wrench, Tag, ArrowRightLeft, Coffee, MessageCircle, Heart, Target, Users2 } from 'lucide-react';

export default function Slide13() {
  return (
    <div className="slide-container relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      {/* Header */}
      <div className="flex items-center justify-center py-2 md:py-4">
        <div className="flex items-center gap-2 md:gap-4">
          <Waves className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-blue-400" />
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">
            BOTTLEWASHER - ROLES & RESPONSIBILITIES
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-2 md:px-6 lg:px-12 pb-4 md:pb-6 lg:pb-8 flex-1">
        {/* Primary Roles Section */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-blue-400 mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
            <Target className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
            <span className="text-sm md:text-base lg:text-lg">PRIMARY ROLES: Bottlewasher Operations</span>
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
                  <span>Follow LOTOTO procedures during maintenance</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full mt-1.5"></div>
                  <span>Identify hazards (chemicals, high temperatures)</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full mt-1.5"></div>
                  <span>Raise daily SIO with Root and Near Cause</span>
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
                  <span>Monitor washing quality (temperature, chemicals)</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-green-400 rounded-full mt-1.5"></div>
                  <span>Perform CIP and sanitation for HACCP compliance</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-green-400 rounded-full mt-1.5"></div>
                  <span>Quality checks including titration and verification</span>
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
                  <span>Start-up, shut down, and changeover operations</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-orange-400 rounded-full mt-1.5"></div>
                  <span>Log production, downtime, and waste data in MES/SAP</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-orange-400 rounded-full mt-1.5"></div>
                  <span>Troubleshoot minor issues and report major faults</span>
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
                  <span>Support sustainability through water/energy optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-purple-400 rounded-full mt-1.5"></div>
                  <span>Drive PIs and complete corrective actions promptly</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-purple-400 rounded-full mt-1.5"></div>
                  <span>Maintain 5S standards for safety and organization</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary/Support Roles Section */}
        <div>
          <h2 className="text-3xl font-bold text-amber-400 mb-4 flex items-center gap-3">
            <Users2 className="h-7 w-7" />
            SECONDARY/SUPPORT ROLES: Labeller & Infeed Support
          </h2>
          
          <div className="grid grid-cols-3 gap-4">
            {/* Labeller Support */}
            <div className="bg-gray-700/50 rounded-xl p-5 border-l-4 border-amber-400">
              <div className="flex items-center gap-3 mb-3">
                <Tag className="h-6 w-6 text-amber-400" />
                <h3 className="text-xl font-bold text-amber-400">LABELLER SUPPORT</h3>
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-amber-400 rounded-full mt-1.5"></div>
                  <span>Secondary machine operation on labellers</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-amber-400 rounded-full mt-1.5"></div>
                  <span>Provide lunch relief to labeller operators (skilled)</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-amber-400 rounded-full mt-1.5"></div>
                  <span>Support labeller reject line operations</span>
                </div>
              </div>
            </div>

            {/* Infeed Coordination */}
            <div className="bg-gray-700/50 rounded-xl p-5 border-l-4 border-teal-400">
              <div className="flex items-center gap-3 mb-3">
                <ArrowRightLeft className="h-6 w-6 text-teal-400" />
                <h3 className="text-xl font-bold text-teal-400">INFEED COORDINATION</h3>
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-teal-400 rounded-full mt-1.5"></div>
                  <span>Infeed assistant provides bottlewasher relief</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-teal-400 rounded-full mt-1.5"></div>
                  <span>Infeed assistant supports labellers reject line</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-teal-400 rounded-full mt-1.5"></div>
                  <span>Coordinate bottle pickup support to BGE operator</span>
                </div>
              </div>
            </div>

            {/* Team Leadership */}
            <div className="bg-gray-700/50 rounded-xl p-5 border-l-4 border-cyan-400">
              <div className="flex items-center gap-3 mb-3">
                <Users className="h-6 w-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-cyan-400">TEAM LEADERSHIP</h3>
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5"></div>
                  <span>Coach peers on safe bottlewasher operation</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5"></div>
                  <span>Support maintenance/service providers safely</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5"></div>
                  <span>Ensure safe shift handovers and communication</span>
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
