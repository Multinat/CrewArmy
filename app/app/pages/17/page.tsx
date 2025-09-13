import { Layers, Shield, CheckCircle, TrendingUp, DollarSign, Target, Users2, Heart, ArrowRightLeft, AlertCircle, Coffee, MessageCircle, FileText, MessageSquare, ClipboardList, Camera, AlertTriangle, Lock, Users, Wrench, Play, RotateCcw, Search, Clock, BarChart } from 'lucide-react';

export default function Slide17() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {/* Mobile-width container */}
    <div className="slide-container relative w-full max-w-md mx-auto min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white" style={{paddingTop: '200px'}}>
      {/* Header */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2 md:gap-4">
          <Layers className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-emerald-400" />
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">
            DEPALLETISER/PALLETISER - ROLES & RESPONSIBILITIES
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-2 md:px-6 lg:px-12 pb-4 md:pb-6 lg:pb-8 flex-1">
        {/* Primary Roles Section */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-emerald-400 mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
            <Target className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
            <span className="text-sm md:text-base lg:text-lg">PRIMARY ROLES: Depalletiser & Palletiser Operations</span>
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
                  <AlertTriangle className="h-3 w-3 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Maintain safe working distance from robotic palletising arms</span>
                </div>
                <div className="flex items-start gap-2">
                  <Lock className="h-3 w-3 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Follow proper manual lifting techniques for heavy case handling</span>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="h-3 w-3 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Ensure pallet stability before releasing from pallet handling equipment</span>
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
                  <Target className="h-3 w-3 text-green-400 mt-1 flex-shrink-0" />
                  <span>Inspect pallet patterns and layer alignment for stability</span>
                </div>
                <div className="flex items-start gap-2">
                  <Search className="h-3 w-3 text-green-400 mt-1 flex-shrink-0" />
                  <span>Verify correct pallet configurations per customer specifications</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-3 w-3 text-green-400 mt-1 flex-shrink-0" />
                  <span>Check pallet quality and condition before use</span>
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
                  <Play className="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" />
                  <span>Optimize palletising speed while maintaining pallet quality</span>
                </div>
                <div className="flex items-start gap-2">
                  <RotateCcw className="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" />
                  <span>Minimize changeover time between different pallet patterns</span>
                </div>
                <div className="flex items-start gap-2">
                  <Wrench className="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" />
                  <span>Maintain adequate pallet inventory for continuous operation</span>
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
                  <Clock className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Minimize pallet damage through proper handling techniques</span>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Optimize slip sheet and tier sheet usage to reduce costs</span>
                </div>
                <div className="flex items-start gap-2">
                  <BarChart className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Monitor energy consumption of robotic palletising systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary/Support Roles Section */}
        <div>
          <h2 className="text-3xl font-bold text-amber-400 mb-4 flex items-center gap-3">
            <Users2 className="h-7 w-7" />
            SECONDARY/SUPPORT ROLES: Cross-Training & Team Support
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Support Activities */}
            <div className="bg-gray-700/50 rounded-xl p-5 border-l-4 border-amber-400">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="h-6 w-6 text-amber-400" />
                <h3 className="text-xl font-bold text-amber-400">SUPPORT ACTIVITIES</h3>
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex items-start gap-2">
                  <ArrowRightLeft className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Cross-train on both depalletising and palletising operations</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Assist with pallet handling and case arrangement issues</span>
                </div>
                <div className="flex items-start gap-2">
                  <Coffee className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Provide relief coverage for team members during breaks</span>
                </div>
                <div className="flex items-start gap-2">
                  <MessageCircle className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Coordinate pallet removal timing with warehouse operations</span>
                </div>
              </div>
            </div>

            {/* Communication & Documentation */}
            <div className="bg-gray-700/50 rounded-xl p-5 border-l-4 border-amber-400">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="h-6 w-6 text-amber-400" />
                <h3 className="text-xl font-bold text-amber-400">COMMUNICATION & DOCS</h3>
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex items-start gap-2">
                  <MessageSquare className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Send shift communications every 2 hours</span>
                </div>
                <div className="flex items-start gap-2">
                  <ClipboardList className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Complete Manufacturing Data Tracking (MDT)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Camera className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Send daily performance pictures</span>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Update autonomous boards status</span>
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
    </div>
  );
}