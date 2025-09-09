
import { CheckCircle, Users, Cog } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="slide-container relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex flex-col">
      {/* Header */}
      <div className="flex-none text-center py-6">
        <div className="flex items-center justify-center space-x-4 mb-3">
          <CheckCircle size={56} className="text-green-400" />
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-green-400">QUALITY ALWAYS</h1>
        </div>
        <p className="text-3xl text-gray-200">Right First Time Through Continuous Excellence</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-2 gap-8 px-8">
        {/* Column 1: Frontline Responsibilities & Success Metrics */}
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-green-400 rounded-lg p-6 flex flex-col min-h-0">
          <div className="flex items-center space-x-3 mb-4">
            <Users size={32} className="text-green-400" />
            <h3 className="text-2xl font-bold text-white">FRONTLINE RESPONSIBILITIES</h3>
          </div>

          <div className="space-y-3 mb-6 flex-1">
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg text-gray-200">Execute standardized packaging procedures and quality checks consistently</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg text-gray-200">Monitor product quality throughout the packaging process continuously</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg text-gray-200">Document quality issues and non-conformances immediately for action</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg text-gray-200">Participate in quality improvement initiatives and kaizen events actively</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg text-gray-200">Maintain clean and organized work areas for optimal quality outcomes</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg text-gray-200">Cross-train on quality standards and customer requirements regularly</p>
            </div>
          </div>

          <div className="bg-green-500 bg-opacity-10 border border-green-500 border-opacity-30 rounded-lg p-4">
            <h4 className="text-lg font-bold text-green-400 mb-3">SUCCESS METRICS</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p className="text-gray-300">• First-pass quality rate &gt;98%</p>
              <p className="text-gray-300">• Customer complaint reduction</p>
              <p className="text-gray-300">• Quality audit scores improvement</p>
              <p className="text-gray-300">• Overall quality performance</p>
              <p className="text-gray-300">• Customer satisfaction scores</p>
              <p className="text-gray-300">• Quality system compliance</p>
            </div>
          </div>
        </div>

        {/* Column 2: Specific Operator Actions */}
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-green-400 rounded-lg p-6 flex flex-col min-h-0">
          <div className="flex items-center space-x-3 mb-4">
            <Cog size={32} className="text-green-400" />
            <h3 className="text-2xl font-bold text-white">SPECIFIC OPERATOR ACTIONS</h3>
          </div>

          <div className="space-y-4 flex-1 overflow-hidden">
            {/* Quality Control Procedures */}
            <div>
              <h4 className="text-lg font-semibold text-green-300 mb-2">Quality Control Procedures</h4>
              <div className="space-y-1 text-sm text-gray-200">
                <p>• Conduct pre-shift quality checks on equipment and materials</p>
                <p>• Perform in-process quality inspections at defined control points</p>
                <p>• Execute post-production quality verification and final checks</p>
                <p>• Document all quality measurements and maintain accurate records</p>
              </div>
            </div>

            {/* Product Assessment */}
            <div>
              <h4 className="text-lg font-semibold text-green-300 mb-2">Product Assessment &amp; Standards</h4>
              <div className="space-y-1 text-sm text-gray-200">
                <p>• Verify product specifications against customer requirements</p>
                <p>• Check packaging integrity, labeling accuracy, and presentation</p>
                <p>• Assess dimensional compliance and weight specifications</p>
                <p>• Monitor appearance standards and cosmetic requirements</p>
              </div>
            </div>

            {/* Process Control */}
            <div>
              <h4 className="text-lg font-semibold text-green-300 mb-2">Process Control &amp; Monitoring</h4>
              <div className="space-y-1 text-sm text-gray-200">
                <p>• Monitor critical process parameters and control limits</p>
                <p>• Adjust processes within authorized limits to maintain quality</p>
                <p>• Identify and escalate out-of-spec conditions immediately</p>
                <p>• Implement corrective actions for quality deviations promptly</p>
              </div>
            </div>

            {/* Documentation & Communication */}
            <div>
              <h4 className="text-lg font-semibold text-green-300 mb-2">Documentation &amp; Communication</h4>
              <div className="space-y-1 text-sm text-gray-200">
                <p>• Complete quality checklists and inspection forms accurately</p>
                <p>• Communicate quality issues to supervisors and quality team</p>
                <p>• Report non-conformances through established protocols</p>
                <p>• Participate in quality review meetings and improvement sessions</p>
              </div>
            </div>

            {/* Continuous Improvement */}
            <div>
              <h4 className="text-lg font-semibold text-green-300 mb-2">Continuous Improvement Actions</h4>
              <div className="space-y-1 text-sm text-gray-200">
                <p>• Suggest process improvements based on observations</p>
                <p>• Implement approved quality enhancement initiatives</p>
                <p>• Share best practices with team members consistently</p>
                <p>• Support root cause analysis and corrective action plans</p>
              </div>
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
