
import { Zap, Target, Crown } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="slide-container relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2 md:gap-4">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">
            NEXT STEPS
          </h1>
        </div>
      </div>
      <div className="text-center mb-2">
        <p className="text-3xl text-gray-200">Your Journey to Autonomous Excellence Starts Now</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-rows-[1fr_auto] gap-6 px-12 pb-4">
        {/* Implementation Phases */}
        <div className="grid grid-cols-3 gap-8">
          {/* Phase 1: Foundation */}
          <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-yellow-400 rounded-lg p-6 flex flex-col">
            <div className="flex items-center space-x-3 mb-4">
              <Zap size={36} className="text-yellow-400" />
              <h3 className="text-3xl font-bold text-yellow-400">PHASE 1: FOUNDATION</h3>
            </div>
            <p className="text-2xl text-center text-gray-300 mb-6 font-semibold">January - March 2025</p>
            <div className="space-y-4 flex-1">
              <p className="text-2xl text-gray-200">▪ Form autonomous team structure</p>
              <p className="text-2xl text-gray-200">▪ Launch VPO training program</p>
              <p className="text-2xl text-gray-200">▪ Establish KPI tracking systems</p>
            </div>
            <div className="bg-yellow-500 bg-opacity-10 border border-yellow-500 border-opacity-30 rounded-lg p-3 text-center mt-auto">
              <p className="text-xl font-bold text-yellow-400 mb-1">Success Criteria</p>
              <p className="text-lg text-gray-200">100% team participation in training</p>
            </div>
          </div>

          {/* Phase 2: Development */}
          <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-orange-400 rounded-lg p-6 flex flex-col">
            <div className="flex items-center space-x-3 mb-4">
              <Target size={36} className="text-orange-400" />
              <h3 className="text-3xl font-bold text-orange-400">PHASE 2: DEVELOPMENT</h3>
            </div>
            <p className="text-2xl text-center text-gray-300 mb-6 font-semibold">April - September 2025</p>
            <div className="space-y-4 flex-1">
              <p className="text-2xl text-gray-200">▪ Deploy digital dashboards & tools</p>
              <p className="text-2xl text-gray-200">▪ Execute multi-skill training</p>
              <p className="text-2xl text-gray-200">▪ Implement improvement cycles</p>
            </div>
            <div className="bg-orange-500 bg-opacity-10 border border-orange-500 border-opacity-30 rounded-lg p-3 text-center mt-auto">
              <p className="text-xl font-bold text-orange-400 mb-1">Success Criteria</p>
              <p className="text-lg text-gray-200">Achievement of 80% of KPI targets</p>
            </div>
          </div>

          {/* Phase 3: Optimization */}
          <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-purple-400 rounded-lg p-6 flex flex-col">
            <div className="flex items-center space-x-3 mb-4">
              <Crown size={36} className="text-purple-400" />
              <h3 className="text-3xl font-bold text-purple-400">PHASE 3: OPTIMIZATION</h3>
            </div>
            <p className="text-2xl text-center text-gray-300 mb-6 font-semibold">October - December 2025</p>
            <div className="space-y-4 flex-1">
              <p className="text-2xl text-gray-200">▪ Achieve full autonomous operations</p>
              <p className="text-2xl text-gray-200">▪ Lead continuous improvement</p>
              <p className="text-2xl text-gray-200">▪ Sustain top quartile performance</p>
            </div>
            <div className="bg-purple-500 bg-opacity-10 border border-purple-500 border-opacity-30 rounded-lg p-3 text-center mt-auto">
              <p className="text-xl font-bold text-purple-400 mb-1">Success Criteria</p>
              <p className="text-lg text-gray-200">Recognition as model autonomous team</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur border border-gray-600 rounded-lg p-6 text-center">
          <div className="mb-4">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-purple-400 bg-clip-text text-transparent mb-3">
              Make Newlands Great Again through AUTONOMOUS TEAMS
            </h2>
            <p className="text-2xl text-white">Together, we will transform our operations and achieve excellence.</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-blue-500 bg-opacity-20 border border-blue-400 rounded-lg p-4">
              <p className="text-2xl font-bold text-blue-400 mb-1">Implementation begins</p>
              <p className="text-4xl font-bold text-white">January 2, 2025</p>
            </div>
            <div className="bg-green-500 bg-opacity-20 border border-green-400 rounded-lg p-4">
              <p className="text-2xl font-bold text-green-400 mb-1">Questions?</p>
              <p className="text-xl text-gray-200">Contact your team leader or VPO team.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-none text-center py-3">
        <p className="text-lg text-gray-400">Crew Army | 2025 Team Army Excellence Strategy</p>
      </div>
    </div>
  );
}
