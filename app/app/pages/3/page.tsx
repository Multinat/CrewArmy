
import { Shield, Users, UserCheck } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="slide-container relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex flex-col lg:pt-12">
      {/* Header */}
      <div className="flex-none text-center py-2 md:py-4">
        <div className="flex items-center justify-center space-x-4 mb-2">
          <Shield size={48} className="text-yellow-400" />
          <h1 className="text-2xl font-bold text-yellow-400">SAFETY FIRST</h1>
        </div>
        <p className="text-2xl text-gray-200">Zero Incidents Through Proactive Prevention</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-2 gap-4 px-4">
        {/* Column 1: Frontline Responsibilities */}
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-yellow-400 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-2">
            <Users size={24} className="text-yellow-400" />
            <h3 className="text-lg font-bold text-white">FRONTLINE RESPONSIBILITIES</h3>
          </div>

          <div className="space-y-1 mb-3">
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Complete pre-shift safety checks and risk assessments</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Report all hazards and near-misses immediately</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Follow lockout/tagout procedures rigorously</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Maintain situational awareness at all times</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Use proper lifting techniques and ergonomic practices</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
              <p className="text-base text-gray-200">Mentor colleagues on safety best practices</p>
            </div>
          </div>

          <div className="bg-yellow-500 bg-opacity-10 border border-yellow-500 border-opacity-30 rounded-lg p-3">
            <h4 className="text-base font-bold text-yellow-400 mb-2">SUCCESS METRICS</h4>
            <div className="space-y-1">
              <p className="text-base text-gray-300">• Zero personal incidents/injuries</p>
              <p className="text-base text-gray-300">• 100% PPE compliance rate</p>
              <p className="text-base text-gray-300">• Active safety meeting participation</p>
            </div>
          </div>
        </div>

        {/* Column 2: Combined Operator Actions & Leadership Actions */}
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-yellow-400 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-2">
            <Shield size={24} className="text-yellow-400" />
            <h3 className="text-lg font-bold text-white">SPECIFIC OPERATOR ACTIONS</h3>
          </div>

          <div className="space-y-2 mb-3">
            <div>
              <h4 className="text-base font-bold text-yellow-400 mb-1">EQUIPMENT & TOOLS</h4>
              <p className="text-sm text-gray-200">• Inspect all tools before use • Report defective equipment immediately • Use right tool for the job • Maintain clean, organized workspace</p>
            </div>
            
            <div>
              <h4 className="text-base font-bold text-yellow-400 mb-1">CHEMICAL HANDLING</h4>
              <p className="text-sm text-gray-200">• Read SDS before handling • Use proper PPE for chemicals • Follow mixing procedures exactly • Store chemicals per requirements</p>
            </div>
            
            <div>
              <h4 className="text-base font-bold text-yellow-400 mb-1">MACHINERY OPERATIONS</h4>
              <p className="text-sm text-gray-200">• Follow startup/shutdown procedures • Monitor gauges and indicators • Never bypass safety devices • Maintain proper guarding</p>
            </div>
            
            <div>
              <h4 className="text-base font-bold text-yellow-400 mb-1">EMERGENCY RESPONSE</h4>
              <p className="text-sm text-gray-200">• Know evacuation routes • Master fire extinguisher use • Practice first aid procedures • Report all incidents promptly</p>
            </div>
            
            <div>
              <h4 className="text-base font-bold text-yellow-400 mb-1">COMMUNICATION</h4>
              <p className="text-sm text-gray-200">• Use clear radio protocols • Confirm understanding • Document safety observations • Share lessons learned</p>
            </div>

            <div>
              <h4 className="text-base font-bold text-yellow-400 mb-1">LEADERSHIP & SUPERVISION</h4>
              <p className="text-sm text-gray-200">• Conduct daily safety walks • Ensure training and resources • Investigate incidents • Champion safety culture • Review procedures • Recognize achievements</p>
            </div>
          </div>

          <div className="bg-yellow-500 bg-opacity-10 border border-yellow-500 border-opacity-30 rounded-lg p-2 mb-2">
            <h4 className="text-sm font-bold text-yellow-400 mb-1">FOCUS AREAS</h4>
            <div className="space-y-1">
              <p className="text-sm text-gray-300">• Safety system effectiveness • Team engagement metrics • Continuous improvement culture</p>
            </div>
          </div>

          <div className="bg-yellow-500 bg-opacity-20 border border-yellow-500 border-opacity-50 rounded-lg p-2">
            <p className="text-base font-bold text-yellow-300 text-center">STOP WORK AUTHORITY</p>
            <p className="text-sm text-yellow-200 text-center">Every team member has the right and responsibility to stop unsafe work</p>
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
