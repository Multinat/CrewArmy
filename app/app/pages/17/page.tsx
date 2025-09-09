
import { Layers, Shield, CheckCircle, TrendingUp, DollarSign } from 'lucide-react';

export default function Slide17() {
  return (
    <div className="slide-container relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex flex-col">
      {/* Header */}
      <div className="flex-none text-center py-6">
        <div className="flex items-center justify-center space-x-4 mb-3">
          <Layers size={56} className="text-emerald-400" />
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">DEPALLETISER/PALLETISER</h1>
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
              <p className="text-base text-gray-200">Maintain safe working distance from robotic palletising arms</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Follow proper manual lifting techniques for heavy case handling</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Ensure pallet stability before releasing from pallet handling equipment</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Follow lockout procedures when accessing pallet handling systems</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Report any damaged pallets or unstable loads immediately</p>
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
              <p className="text-base text-gray-200">Inspect pallet patterns and layer alignment for stability</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Verify correct pallet configurations per customer specifications</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Check pallet quality and condition before use</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Monitor slip sheet and tier sheet placement accuracy</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Ensure proper pallet labeling and product identification</p>
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
              <p className="text-base text-gray-200">Optimize palletising speed while maintaining pallet quality</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Minimize changeover time between different pallet patterns</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Maintain adequate pallet inventory for continuous operation</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Prevent case damage during high-speed palletising operations</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Coordinate pallet removal timing with warehouse operations</p>
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
              <p className="text-base text-gray-200">Minimize pallet damage through proper handling techniques</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Optimize slip sheet and tier sheet usage to reduce costs</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Monitor energy consumption of robotic palletising systems</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Extend equipment life through proper maintenance scheduling</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Reduce product damage through optimized pallet configurations</p>
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
