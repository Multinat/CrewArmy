
import { DollarSign, Users, Target } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="slide-container relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex flex-col lg:pt-12">
      {/* Header */}
      <div className="flex items-center justify-center py-2 md:py-4">
        <div className="flex items-center gap-2 md:gap-4">
          <DollarSign className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-purple-400" />
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">
            COST - Value Creation Through Smart Resource Management
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-2 gap-4 px-4">
        {/* Column 1: Frontline Responsibilities & Success Metrics */}
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-purple-400 rounded-lg p-4 flex flex-col min-h-0">
          <div className="flex items-center space-x-3 mb-2">
            <Users size={28} className="text-purple-400" />
            <h3 className="text-lg font-bold text-white">FRONTLINE RESPONSIBILITIES</h3>
          </div>

          <div className="space-y-2 mb-3 flex-1">
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg text-gray-200">Minimize material waste through precise operations and careful handling</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg text-gray-200">Report cost-saving opportunities and process inefficiencies proactively</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg text-gray-200">Optimize energy usage during equipment operation and idle periods</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg text-gray-200">Participate in cost reduction initiatives and value improvement projects</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg text-gray-200">Maintain accurate inventory tracking and material accountability</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg text-gray-200">Follow standardized procedures to eliminate rework and waste</p>
            </div>
          </div>

          <div className="bg-purple-500 bg-opacity-10 border border-purple-500 border-opacity-30 rounded-lg p-3">
            <h4 className="text-base font-bold text-purple-400 mb-2">SUCCESS METRICS</h4>
            <div className="space-y-1">
              <p className="text-base text-gray-300">• Waste reduction targets achieved consistently</p>
              <p className="text-base text-gray-300">• Cost per unit improvements delivered monthly</p>
              <p className="text-base text-gray-300">• Cost-saving suggestions implemented quarterly</p>
            </div>
          </div>
        </div>

        {/* Column 2: Specific Operator Actions */}
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-purple-400 rounded-lg p-4 flex flex-col min-h-0">
          <div className="flex items-center space-x-3 mb-2">
            <Target size={28} className="text-purple-400" />
            <h3 className="text-lg font-bold text-white">SPECIFIC OPERATOR ACTIONS</h3>
          </div>

          <div className="space-y-2 flex-1 overflow-hidden">
            {/* Material Handling & Waste Reduction */}
            <div>
              <h4 className="text-lg font-semibold text-purple-300 mb-2">Material Handling &amp; Waste Reduction</h4>
              <div className="space-y-1 text-sm text-gray-200">
                <p>• Use materials efficiently with minimal scrap generation</p>
                <p>• Store materials properly to prevent damage and deterioration</p>
                <p>• Implement first-in-first-out rotation for perishable materials</p>
                <p>• Identify and segregate reusable materials for recycling programs</p>
              </div>
            </div>

            {/* Inventory Management */}
            <div>
              <h4 className="text-lg font-semibold text-purple-300 mb-2">Inventory Management &amp; Control</h4>
              <div className="space-y-1 text-sm text-gray-200">
                <p>• Maintain accurate material counts and consumption tracking</p>
                <p>• Report inventory discrepancies and shortages immediately</p>
                <p>• Optimize material ordering quantities to reduce carrying costs</p>
                <p>• Monitor material usage patterns and identify optimization opportunities</p>
              </div>
            </div>

            {/* Energy Optimization */}
            <div>
              <h4 className="text-lg font-semibold text-purple-300 mb-2">Energy Optimization &amp; Efficiency</h4>
              <div className="space-y-1 text-sm text-gray-200">
                <p>• Turn off equipment during extended idle periods appropriately</p>
                <p>• Operate machinery at optimal speeds for energy efficiency</p>
                <p>• Monitor compressed air usage and eliminate unnecessary leaks</p>
                <p>• Use energy-efficient practices during equipment warm-up cycles</p>
              </div>
            </div>

            {/* Process Optimization */}
            <div>
              <h4 className="text-lg font-semibold text-purple-300 mb-2">Process Optimization &amp; Standards</h4>
              <div className="space-y-1 text-sm text-gray-200">
                <p>• Follow standardized work procedures to eliminate variations</p>
                <p>• Identify bottlenecks and propose process improvement solutions</p>
                <p>• Minimize changeover times through efficient setup procedures</p>
                <p>• Maintain equipment properly to prevent costly breakdowns</p>
              </div>
            </div>

            {/* Cost Reporting & Communication */}
            <div>
              <h4 className="text-lg font-semibold text-purple-300 mb-2">Cost Reporting &amp; Communication</h4>
              <div className="space-y-1 text-sm text-gray-200">
                <p>• Document cost-related observations and improvement opportunities</p>
                <p>• Participate in cost review meetings and share insights</p>
                <p>• Report unusual cost patterns or unexpected consumption increases</p>
                <p>• Support cost analysis activities with accurate data collection</p>
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
