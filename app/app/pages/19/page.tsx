
import { Archive, Shield, CheckCircle, TrendingUp, DollarSign } from 'lucide-react';

export default function Slide19() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex flex-col">
      {/* Header */}
      <div className="flex-none text-center py-6">
        <div className="flex items-center justify-center space-x-4 mb-3">
          <Archive size={56} className="text-violet-400" />
          <h1 className="text-6xl font-bold text-white">CRATE ACCUMULATOR</h1>
        </div>
        <p className="text-3xl text-gray-300">Crew Army Roles & Responsibilities</p>
      </div>

      {/* Main Content - 2x2 Grid */}
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-6 px-8 pb-8">
        
        {/* Safety First */}
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-yellow-400 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Shield size={28} className="text-yellow-400" />
            <h3 className="text-2xl font-bold text-yellow-400">SAFETY FIRST</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Maintain safe working distance from automated stacking systems</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Follow proper lifting techniques when handling crate stacks manually</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Ensure crate stack stability before releasing from accumulator</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Report damaged or unstable crate stacks immediately</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Follow lockout procedures when accessing accumulator mechanisms</p>
            </div>
          </div>
        </div>

        {/* Quality Always */}
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-green-400 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <CheckCircle size={28} className="text-green-400" />
            <h3 className="text-2xl font-bold text-green-400">QUALITY ALWAYS</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Verify correct crate count and stacking configuration</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Inspect crate alignment and stack integrity before release</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Monitor accumulator timing and release mechanisms</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Check crate quality and condition throughout the process</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Ensure proper separation between different crate types</p>
            </div>
          </div>
        </div>

        {/* Volume */}
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-orange-400 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp size={28} className="text-orange-400" />
            <h3 className="text-2xl font-bold text-orange-400">VOLUME</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Optimize accumulation cycles for maximum throughput efficiency</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Minimize wait times and bottlenecks in crate flow</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Coordinate release timing with downstream collection systems</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Prevent accumulator overflow and ensure continuous operation</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Monitor crate supply levels and adjust accumulation parameters</p>
            </div>
          </div>
        </div>

        {/* Cost */}
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-purple-400 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <DollarSign size={28} className="text-purple-400" />
            <h3 className="text-2xl font-bold text-purple-400">COST</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Minimize crate damage through proper stacking and handling</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Optimize energy usage of accumulator drive systems</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Reduce equipment wear through proper maintenance scheduling</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Monitor operational efficiency and report improvement opportunities</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Track maintenance costs and extend equipment service life</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-none text-center py-4">
        <p className="text-2xl text-gray-400">Crew Army | 2025 Team Army Excellence Strategy</p>
      </div>
    </div>
  );
}
