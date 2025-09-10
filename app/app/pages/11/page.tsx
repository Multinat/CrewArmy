import { Search, Shield, CheckCircle, TrendingUp, DollarSign, Target, Users2, Heart, ArrowRightLeft, AlertCircle, Coffee, MessageCircle, FileText, MessageSquare, ClipboardList, Camera, AlertTriangle, Lock, Users, Wrench, Play, RotateCcw, Clock, BarChart, Eye, Zap, RefreshCw, Settings, Timer } from 'lucide-react';

export default function Slide11() {
  return (
    <div className="slide-container relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      {/* Header */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2 md:gap-4">
          <Search className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-cyan-400" />
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">
            EBI - ROLES & RESPONSIBILITIES
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-2 md:px-6 lg:px-12 pb-4 md:pb-6 lg:pb-8 flex-1">
        {/* Primary Roles Section */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-cyan-400 mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
            <Target className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
            <span className="text-sm md:text-base lg:text-lg">PRIMARY ROLES: Empty Bottle Inspector Operations</span>
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
                  <span>Identify EBI hazards (moving parts, safety switches)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="h-3 w-3 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Participate in safety processes (OWD, JHA, incidents)</span>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="h-3 w-3 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Update & maintain EBI safety SOPs</span>
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
                  <Eye className="h-3 w-3 text-green-400 mt-1 flex-shrink-0" />
                  <span>Inspect bottles for defects & foreign bodies</span>
                </div>
                <div className="flex items-start gap-2">
                  <Settings className="h-3 w-3 text-green-400 mt-1 flex-shrink-0" />
                  <span>Perform EBI setup, calibration & changeovers</span>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="h-3 w-3 text-green-400 mt-1 flex-shrink-0" />
                  <span>Ensure HACCP compliance standards</span>
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
                  <RefreshCw className="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" />
                  <span>Execute brand changeovers efficiently</span>
                </div>
                <div className="flex items-start gap-2">
                  <BarChart className="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" />
                  <span>Address autonomous board gaps within 15 min</span>
                </div>
                <div className="flex items-start gap-2">
                  <ClipboardList className="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" />
                  <span>Log inspection data (FILTEC/Innocheck)</span>
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
                  <RotateCcw className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Support circular packaging goals</span>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Maintain 5S standards daily (10 minutes)</span>
                </div>
                <div className="flex items-start gap-2">
                  <BarChart className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Drive performance using PIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary/Support Roles Section */}
        <div>
          <h2 className="text-3xl font-bold text-amber-400 mb-4 flex items-center gap-3">
            <Users2 className="h-7 w-7" />
            SECONDARY/SUPPORT ROLES: Filler & BGE Support
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Filler Support Activities */}
            <div className="bg-gray-700/50 rounded-xl p-5 border-l-4 border-amber-400">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="h-6 w-6 text-amber-400" />
                <h3 className="text-xl font-bold text-amber-400">FILLER SUPPORT</h3>
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex items-start gap-2">
                  <Wrench className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Assist filler with jams & reject lines</span>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRightLeft className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Fetch crowns & connect bottles</span>
                </div>
                <div className="flex items-start gap-2">
                  <Target className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Cover both EBI & filler for SKAP support</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Address GSPs & buildups promptly</span>
                </div>
              </div>
            </div>

            {/* Maintenance & Time Management */}
            <div className="bg-gray-700/50 rounded-xl p-5 border-l-4 border-amber-400">
              <div className="flex items-center gap-3 mb-3">
                <Timer className="h-6 w-6 text-amber-400" />
                <h3 className="text-xl font-bold text-amber-400">MAINTENANCE & SCHEDULE</h3>
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex items-start gap-2">
                  <Clock className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Complete maintenance within 1.5-hour schedule</span>
                </div>
                <div className="flex items-start gap-2">
                  <Coffee className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Manage breaks during designated periods only</span>
                </div>
                <div className="flex items-start gap-2">
                  <RotateCcw className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Remove & push out cullet bins</span>
                </div>
                <div className="flex items-start gap-2">
                  <Play className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Support BGE at pasteuriser discharge</span>
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
