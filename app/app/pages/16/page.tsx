
import { Package, Shield, CheckCircle, TrendingUp, DollarSign } from 'lucide-react';

export default function Slide16() {
  return (
    <div className="slide-container relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex flex-col">
      {/* Header */}
      <div className="flex-none text-center py-6">
        <div className="flex items-center justify-center space-x-4 mb-3">
          <Package size={56} className="text-amber-400" />
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">UNPACKER/PACKER</h1>
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
              <p className="text-base text-gray-200">Use proper lifting techniques when handling cases and bottles</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Maintain safe clearance from robotic packing arms and grippers</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Report broken glass immediately and follow cleanup procedures</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Follow lockout procedures when accessing packing machinery</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Wear cut-resistant gloves when handling cardboard and sharp edges</p>
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
              <p className="text-base text-gray-200">Inspect bottle orientation and arrangement in cases</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Verify case count accuracy and proper case configuration</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Check case quality for damage, contamination, and structural integrity</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Monitor divider placement and bottle protection adequacy</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Ensure proper case coding and batch identification</p>
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
              <p className="text-base text-gray-200">Optimize packing speed while maintaining case quality standards</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Minimize changeover time between different case formats</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Prevent bottle jams and case feed interruptions</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Maintain adequate case magazine levels for continuous operation</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Coordinate with downstream operations for smooth case flow</p>
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
              <p className="text-base text-gray-200">Minimize case damage and waste through proper handling</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Optimize divider usage and prevent unnecessary material waste</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Monitor energy consumption of packing machinery</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Reduce rework through first-time-right packing practices</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Track maintenance costs and extend equipment life cycles</p>
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
