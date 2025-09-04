import { Droplet, Shield, CheckCircle, TrendingUp, DollarSign, Target, Users2, Heart, ArrowRightLeft, AlertCircle, Coffee, MessageCircle, FileText, MessageSquare, ClipboardList, Camera, AlertTriangle, Lock, Users, Wrench, Play, RotateCcw, Search, Clock, BarChart } from 'lucide-react';

export default function Slide10() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      {/* Header */}
      <div className="flex items-center justify-center py-4">
        <div className="flex items-center gap-4">
          <Droplet className="h-10 w-10 text-blue-400" />
          <h1 className="text-5xl font-bold text-center">
            FILLER - ROLES & RESPONSIBILITIES
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-12 pb-8 h-[980px]">
        {/* Primary Roles Section */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-blue-400 mb-4 flex items-center gap-3">
            <Target className="h-7 w-7" />
            PRIMARY ROLES: Filler & Pasteuriser Operations
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
                  <AlertTriangle className="h-3 w-3 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Identify & mitigate high-pressure filling hazards</span>
                </div>
                <div className="flex items-start gap-2">
                  <Lock className="h-3 w-3 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Execute LOTO procedures during maintenance</span>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="h-3 w-3 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Coach team members on safe operation</span>
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
                  <Target className="h-3 w-3 text-green-400 mt-1 flex-shrink-0" />
                  <span>Perform Critical Control Point (CCP) checks</span>
                </div>
                <div className="flex items-start gap-2">
                  <Droplet className="h-3 w-3 text-green-400 mt-1 flex-shrink-0" />
                  <span>Conduct CIP and sanitation procedures</span>
                </div>
                <div className="flex items-start gap-2">
                  <Search className="h-3 w-3 text-green-400 mt-1 flex-shrink-0" />
                  <span>Monitor fill levels, temperature & pressure</span>
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
                  <Play className="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" />
                  <span>Check production orders & BBT availability</span>
                </div>
                <div className="flex items-start gap-2">
                  <RotateCcw className="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" />
                  <span>Execute changeovers & filling operations</span>
                </div>
                <div className="flex items-start gap-2">
                  <Wrench className="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" />
                  <span>Troubleshoot filler issues efficiently</span>
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
                  <Clock className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Update MES/SAP with downtime details</span>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Maintain production output records</span>
                </div>
                <div className="flex items-start gap-2">
                  <BarChart className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Complete shift performance figures</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary/Support Roles Section */}
        <div>
          <h2 className="text-3xl font-bold text-amber-400 mb-4 flex items-center gap-3">
            <Users2 className="h-7 w-7" />
            SECONDARY/SUPPORT ROLES: EBI & Team Support
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
                  <span>Support EBI operator with BBT duties</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Assist with filler reject line issues</span>
                </div>
                <div className="flex items-start gap-2">
                  <Coffee className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Coordinate with PA for lunch break coverage</span>
                </div>
                <div className="flex items-start gap-2">
                  <MessageCircle className="h-3 w-3 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Provide shift handover communications</span>
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
  );
}
