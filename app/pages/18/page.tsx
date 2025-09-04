
import { Waves, Shield, CheckCircle, TrendingUp, DollarSign } from 'lucide-react';

export default function Slide18() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex flex-col">
      {/* Header */}
      <div className="flex-none text-center py-6">
        <div className="flex items-center justify-center space-x-4 mb-3">
          <Waves size={56} className="text-teal-400" />
          <h1 className="text-6xl font-bold text-white">CRATEWASHER</h1>
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
              <p className="text-base text-gray-200">Handle caustic cleaning chemicals with full PPE protection</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Monitor hot water systems and maintain safe working distances</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Ensure proper ventilation when working with cleaning vapors</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Follow lockout procedures for conveyor and spray system maintenance</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Report any damaged crates or safety hazards immediately</p>
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
              <p className="text-base text-gray-200">Monitor caustic concentration and water temperature parameters</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Inspect crates for cleanliness and contamination after washing</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Verify spray nozzle patterns and replace blocked nozzles</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Monitor water quality parameters and filtration systems</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Document cleaning cycles and chemical usage records</p>
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
              <p className="text-base text-gray-200">Optimize conveyor speed for maximum crate throughput</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Minimize heat-up time during startup and changeover procedures</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Prevent crate jams and blockages in the washing system</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Coordinate with crate supply and downstream operations</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Maintain consistent washing cycle times for quality assurance</p>
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
              <p className="text-base text-gray-200">Optimize caustic consumption through precise concentration control</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Monitor water usage and implement recycling opportunities</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Minimize energy consumption through efficient heating systems</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Extend crate life through proper washing and handling procedures</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Track maintenance costs and extend equipment operational life</p>
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
