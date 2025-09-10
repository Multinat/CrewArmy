import { Shield, CheckCircle, TrendingUp, DollarSign, Users, Heart } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="slide-container w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex flex-col text-white p-4 lg:pt-12">
      {/* Header */}
      <div className="flex-none text-center mb-4 lg:pt-4">
        <h1 className="text-2xl font-bold">
          OPERATIONAL EXCELLENCE FRAMEWORK
        </h1>
        <p className="text-lg text-gray-300 mt-2">Four Pillars of Crew Army Success</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-2 px-2">
        {/* Left Panel - VPO Wheel */}
        <div className="flex items-center justify-center">
          <div className="relative w-[300px] h-[300px]">
            {/* Outer Ring - Segmented Circle */}
            <div className="absolute inset-0 rounded-full border-8 border-gray-600 bg-gray-800 bg-opacity-30">
              {/* Safety Segment - Top */}
              <div className="absolute inset-0 rounded-full" style={{
                background: `conic-gradient(from 315deg, transparent 0deg, rgba(234, 179, 8, 0.3) 0deg, rgba(234, 179, 8, 0.3) 90deg, transparent 90deg)`
              }}>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-center">
                  <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-1" />
                  <div className="text-sm font-bold text-yellow-400">SAFETY</div>
                  <div className="text-xs text-yellow-300">Zero Harm</div>
                </div>
              </div>

              {/* Quality Segment - Right */}
              <div className="absolute inset-0 rounded-full" style={{
                background: `conic-gradient(from 45deg, transparent 0deg, rgba(34, 197, 94, 0.3) 0deg, rgba(34, 197, 94, 0.3) 90deg, transparent 90deg)`
              }}>
                <div className="absolute top-1/2 right-2 transform -translate-y-1/2 text-center">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-1" />
                  <div className="text-sm font-bold text-green-400">QUALITY</div>
                  <div className="text-xs text-green-300">Right First Time</div>
                </div>
              </div>

              {/* Volume Segment - Bottom */}
              <div className="absolute inset-0 rounded-full" style={{
                background: `conic-gradient(from 135deg, transparent 0deg, rgba(249, 115, 22, 0.3) 0deg, rgba(249, 115, 22, 0.3) 90deg, transparent 90deg)`
              }}>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center">
                  <TrendingUp className="w-8 h-8 text-orange-400 mx-auto mb-1" />
                  <div className="text-sm font-bold text-orange-400">VOLUME</div>
                  <div className="text-xs text-orange-300">Optimal Output</div>
                </div>
              </div>

              {/* Cost Segment - Left */}
              <div className="absolute inset-0 rounded-full" style={{
                background: `conic-gradient(from 225deg, transparent 0deg, rgba(168, 85, 247, 0.3) 0deg, rgba(168, 85, 247, 0.3) 90deg, transparent 90deg)`
              }}>
                <div className="absolute top-1/2 left-2 transform -translate-y-1/2 text-center">
                  <DollarSign className="w-8 h-8 text-purple-400 mx-auto mb-1" />
                  <div className="text-sm font-bold text-purple-400">COST</div>
                  <div className="text-xs text-purple-300">Efficiency</div>
                </div>
              </div>
            </div>

            {/* Center Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gray-800 border-2 border-white rounded-full flex flex-col items-center justify-center z-10 shadow-2xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">VPO</div>
                <div className="text-xs text-gray-300">Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Autonomous Team Approach */}
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-blue-400 rounded-lg p-3 flex flex-col">
          <div className="flex items-center space-x-2 mb-2">
            <Users size={24} className="text-blue-400" />
            <h3 className="text-lg font-bold text-white">AUTONOMOUS TEAM APPROACH</h3>
          </div>

          <div className="space-y-1 flex-1">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-1 flex-shrink-0"></div>
              <p className="text-sm text-gray-200">Frontline teams empowered to make real-time operational decisions</p>
            </div>

            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-1 flex-shrink-0"></div>
              <p className="text-sm text-gray-200">Root cause problem-solving at the point of impact</p>
            </div>

            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-1 flex-shrink-0"></div>
              <p className="text-sm text-gray-200">Continuous improvement driven by those closest to the work</p>
            </div>

            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-1 flex-shrink-0"></div>
              <p className="text-sm text-gray-200">Cross-functional collaboration for optimal outcomes</p>
            </div>

            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-1 flex-shrink-0"></div>
              <p className="text-sm text-gray-200">Data-driven decision making with immediate feedback loops</p>
            </div>

            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-1 flex-shrink-0"></div>
              <p className="text-sm text-gray-200">Ownership and accountability at every level of operation</p>
            </div>
          </div>

          <div className="mt-2 bg-blue-500 bg-opacity-10 border border-blue-500 border-opacity-30 rounded-lg p-2">
            <h4 className="text-base font-bold text-blue-400 mb-1">CORE ENABLERS</h4>
            <div className="space-y-1">
              <p className="text-sm text-gray-300">• Clear authority and decision-making boundaries</p>
              <p className="text-sm text-gray-300">• Real-time performance visibility and metrics</p>
              <p className="text-sm text-gray-300">• Structured problem-solving methodologies</p>
              <p className="text-sm text-gray-300">• Regular coaching and capability development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}