import { Waves, Shield, CheckCircle, TrendingUp, DollarSign, Target, Users2, Heart, ArrowRightLeft, AlertCircle, Coffee, MessageCircle, FileText, MessageSquare, ClipboardList, Camera, AlertTriangle, Lock, Users, Wrench, Play, RotateCcw, Search, Clock, BarChart } from 'lucide-react';

export default function Slide18() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {/* Mobile-width container */}
    <div className="slide-container relative w-full max-w-md mx-auto min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white" style={{paddingTop: '200px'}}>
      {/* Header */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2 md:gap-4">
          <Waves className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-teal-400" />
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">
            CRATEWASHER - ROLES & RESPONSIBILITIES
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-2 md:px-6 lg:px-12 pb-4 md:pb-6 lg:pb-8 flex-1">
        {/* Primary Roles Section */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-teal-400 mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
            <Target className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
            <span className="text-sm md:text-base lg:text-lg">PRIMARY ROLES: Cratewasher Operations</span>
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
                  <span>Handle caustic cleaning chemicals with full PPE protection</span>
                </div>
                <div className="flex items-start gap-2">
                  <Lock className="h-3 w-3 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Monitor hot water systems and maintain safe working distances</span>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="h-3 w-3 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Follow lockout procedures for conveyor and spray system maintenance</span>
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
                  <span>Monitor caustic concentration and water temperature parameters</span>
                </div>
                <div className="flex items-start gap-2">
                  <Search className="h-3 w-3 text-green-400 mt-1 flex-shrink-0" />
                  <span>Inspect crates for cleanliness and contamination after washing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-3 w-3 text-green-400 mt-1 flex-shrink-0" />
                  <span>Verify spray nozzle patterns and replace blocked nozzles</span>
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
                  <span>Optimize conveyor speed for maximum crate throughput</span>
                </div>
                <div className="flex items-start gap-2">
                  <RotateCcw className="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" />
                  <span>Minimize heat-up time during startup and changeover procedures</span>
                </div>
                <div className="flex items-start gap-2">
                  <Wrench className="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" />
                  <span>Prevent crate jams and blockages in the washing system</span>
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
                  <span>Optimize caustic consumption through precise concentration control</span>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Monitor water usage and implement recycling opportunities</span>
                </div>
                <div className="flex items-start gap-2">
                  <BarChart className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Minimize energy consumption through efficient heating systems</span>
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
                  <span>Cross-train on crate handling and washing operations</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Assist with crate quality inspection and sorting</span>
                </div>
                <div className="flex items-start gap-2">
                  <Coffee className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Provide relief coverage for team members during breaks</span>
                </div>
                <div className="flex items-start gap-2">
                  <MessageCircle className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Coordinate with crate supply and downstream operations</span>
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