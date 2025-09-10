
import { TrendingUp, Users, UserCheck, Truck, Wrench, Target } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="slide-container relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex flex-col">
      {/* Invisible spacer to push content below browser menu */}
      <div className="h-10"></div>
      {/* Header */}
      <div className="flex items-center justify-center py-2 md:py-4">
        <div className="flex items-center gap-2 md:gap-4">
          <TrendingUp className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-orange-400" />
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">
            VOLUME - Optimal Output Supported by Logistics &amp; Maintenance
          </h1>
        </div>
      </div>

      {/* Main Content - Three Column Layout */}
      <div className="flex-1 grid grid-cols-3 gap-4 px-4">
        {/* Volume Primary Pillar */}
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-orange-400 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-3">
            <Target size={28} className="text-orange-400" />
            <h3 className="text-lg font-bold text-white">VOLUME PRIMARY</h3>
          </div>

          <div className="space-y-2 mb-3">
            <h4 className="text-base font-semibold text-orange-300">Frontline:</h4>
            <div className="space-y-2 ml-4">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                <p className="text-lg text-gray-200">Execute daily volume targets</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                <p className="text-lg text-gray-200">Optimize line efficiency</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                <p className="text-lg text-gray-200">Monitor production bottlenecks</p>
              </div>
            </div>

            <h4 className="text-base font-semibold text-orange-300 pt-2">Leaders:</h4>
            <div className="space-y-2 ml-4">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                <p className="text-lg text-gray-200">Plan capacity optimization</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                <p className="text-lg text-gray-200">Analyze production data</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                <p className="text-lg text-gray-200">Balance volume with quality</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-500 bg-opacity-10 border border-orange-500 border-opacity-30 rounded-lg p-3">
            <h4 className="text-base font-bold text-orange-400 mb-1">KPI TARGETS</h4>
            <div className="space-y-1 text-center">
              <p className="text-base text-gray-300">Volume &gt;95%</p>
              <p className="text-base text-gray-300">OEE Improvement</p>
              <p className="text-base text-gray-300">Capacity Utilization</p>
            </div>
          </div>
        </div>

        {/* Logistics Supporting Element */}
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-blue-400 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-3">
            <Truck size={28} className="text-blue-400" />
            <h3 className="text-lg font-bold text-white">LOGISTICS SUPPORT</h3>
          </div>

          <div className="space-y-2 mb-3">
            <h4 className="text-base font-semibold text-blue-300">Frontline:</h4>
            <div className="space-y-2 ml-4">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                <p className="text-lg text-gray-200">Material flow optimization</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                <p className="text-lg text-gray-200">Support changeover activities</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                <p className="text-lg text-gray-200">Inventory level management</p>
              </div>
            </div>

            <h4 className="text-base font-semibold text-blue-300 pt-2">Leaders:</h4>
            <div className="space-y-2 ml-4">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                <p className="text-lg text-gray-200">Supply chain coordination</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                <p className="text-lg text-gray-200">Reduce changeover times</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                <p className="text-lg text-gray-200">Material planning excellence</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-500 bg-opacity-10 border border-blue-500 border-opacity-30 rounded-lg p-3">
            <h4 className="text-base font-bold text-blue-400 mb-1">LOGISTICS KPIs</h4>
            <div className="space-y-1 text-center">
              <p className="text-base text-gray-300">Changeover &lt;15min</p>
              <p className="text-base text-gray-300">Material Availability</p>
              <p className="text-base text-gray-300">Flow Efficiency</p>
            </div>
          </div>
        </div>

        {/* Maintenance Supporting Element */}
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-amber-400 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-3">
            <Wrench size={28} className="text-amber-400" />
            <h3 className="text-lg font-bold text-white">MAINTENANCE SUPPORT</h3>
          </div>

          <div className="space-y-2 mb-3">
            <h4 className="text-base font-semibold text-amber-300">Frontline:</h4>
            <div className="space-y-2 ml-4">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2"></div>
                <p className="text-lg text-gray-200">Equipment uptime focus</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2"></div>
                <p className="text-lg text-gray-200">Preventive maintenance tasks</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2"></div>
                <p className="text-lg text-gray-200">Early issue identification</p>
              </div>
            </div>

            <h4 className="text-base font-semibold text-amber-300 pt-2">Leaders:</h4>
            <div className="space-y-2 ml-4">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2"></div>
                <p className="text-lg text-gray-200">Maintenance scheduling</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2"></div>
                <p className="text-lg text-gray-200">Equipment reliability plans</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2"></div>
                <p className="text-lg text-gray-200">Minimize production impact</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-500 bg-opacity-10 border border-amber-500 border-opacity-30 rounded-lg p-3">
            <h4 className="text-base font-bold text-amber-400 mb-1">MAINTENANCE KPIs</h4>
            <div className="space-y-1 text-center">
              <p className="text-base text-gray-300">Uptime &gt;95%</p>
              <p className="text-base text-gray-300">MTBF Improvement</p>
              <p className="text-base text-gray-300">PM Compliance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Summary */}
      <div className="flex-none px-4 pb-3">
        <div className="bg-gray-800 bg-opacity-40 backdrop-blur border border-gray-600 rounded-lg p-3">
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <p className="text-xl font-bold text-orange-400 mb-1">VOLUME PRIMARY</p>
              <p className="text-base text-gray-300">Capacity &amp; Output Excellence</p>
            </div>
            <div className="text-4xl text-gray-500">+</div>
            <div className="text-center">
              <p className="text-xl font-bold text-blue-400 mb-1">LOGISTICS SUPPORT</p>
              <p className="text-base text-gray-300">Material Flow Optimization</p>
            </div>
            <div className="text-4xl text-gray-500">+</div>
            <div className="text-center">
              <p className="text-xl font-bold text-amber-400 mb-1">MAINTENANCE SUPPORT</p>
              <p className="text-base text-gray-300">Equipment Reliability</p>
            </div>
            <div className="text-4xl text-gray-500">=</div>
            <div className="text-center">
              <p className="text-xl font-bold text-white mb-1">INTEGRATED VOLUME EXCELLENCE</p>
              <p className="text-base text-gray-300">Autonomous Team Success</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-none text-center py-4">
        <p className="text-lg text-gray-400">Crew Army | 2025 Team Army Excellence Strategy</p>
      </div>
    </div>
  );
}
