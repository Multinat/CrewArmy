
import { Shield, CheckCircle, TrendingUp, DollarSign } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {/* Mobile-width container */}
    <div className="slide-container relative w-full max-w-md mx-auto min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex flex-col" style={{paddingTop: '200px'}}>
      {/* Header */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2 md:gap-4">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">
            KPIs & PERFORMANCE METRICS
          </h1>
        </div>
      </div>
      <div className="text-center mb-2">
        <p className="text-3xl text-gray-200">Success Indicators for Autonomous Team Excellence</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-rows-2 gap-8 px-12">
        {/* KPI Overview */}
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur border border-gray-600 rounded-lg p-8">
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-6">INTEGRATED PERFORMANCE DASHBOARD</h2>
          
          <div className="grid grid-cols-2 gap-12">
            {/* Key Principles */}
            <div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <p className="text-xl text-gray-200">Real-time visibility into all four VPO areas</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <p className="text-xl text-gray-200">Team-based metrics with individual accountability</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <p className="text-xl text-gray-200">Leading and lagging indicators for proactive management</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <p className="text-xl text-gray-200">Monthly reviews with continuous improvement focus</p>
                </div>
              </div>
            </div>

            {/* Target Achievement */}
            <div>
              <div className="bg-blue-500 bg-opacity-20 border border-blue-400 rounded-lg p-6 text-center mb-6">
                <p className="text-2xl font-bold text-blue-400 mb-2">2025 Goal: Top quartile performance across all VPO metrics</p>
              </div>
              
              <div className="bg-gray-700 bg-opacity-50 rounded-lg p-4">
                <h3 className="text-xl font-bold text-white mb-3">Review Frequency</h3>
                <div className="space-y-2">
                  <p className="text-base text-gray-200">• Daily huddles</p>
                  <p className="text-base text-gray-200">• Weekly team reviews</p>
                  <p className="text-base text-gray-200">• Monthly leadership assessments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metric Categories */}
        <div className="grid grid-cols-4 gap-6">
          {/* Safety First */}
          <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-yellow-400 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield size={28} className="text-yellow-400" />
              <h3 className="text-xl font-bold text-yellow-400">SAFETY FIRST</h3>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="bg-yellow-500 bg-opacity-10 border border-yellow-500 border-opacity-30 rounded p-2">
                <p className="text-base font-semibold text-white">Incident Rate</p>
                <p className="text-sm text-yellow-400">Target: Zero incidents</p>
                <p className="text-xs text-gray-300">Daily</p>
              </div>
              <div className="bg-yellow-500 bg-opacity-10 border border-yellow-500 border-opacity-30 rounded p-2">
                <p className="text-base font-semibold text-white">Safety Participation</p>
                <p className="text-sm text-yellow-400">Target: 100% engagement</p>
                <p className="text-xs text-gray-300">Weekly</p>
              </div>
              <div className="bg-yellow-500 bg-opacity-10 border border-yellow-500 border-opacity-30 rounded p-2">
                <p className="text-base font-semibold text-white">Near Miss Reports</p>
                <p className="text-sm text-yellow-400">Target: &gt;5 per month</p>
                <p className="text-xs text-gray-300">Monthly</p>
              </div>
            </div>

            <div className="text-center bg-yellow-500 bg-opacity-10 rounded p-2">
              <p className="text-sm font-bold text-yellow-400">Leading: Safety observations completed</p>
            </div>
          </div>

          {/* Quality Always */}
          <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-green-400 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle size={28} className="text-green-400" />
              <h3 className="text-xl font-bold text-green-400">QUALITY ALWAYS</h3>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="bg-green-500 bg-opacity-10 border border-green-500 border-opacity-30 rounded p-2">
                <p className="text-base font-semibold text-white">First Pass Quality</p>
                <p className="text-sm text-green-400">Target: &gt;98%</p>
                <p className="text-xs text-gray-300">Daily</p>
              </div>
              <div className="bg-green-500 bg-opacity-10 border border-green-500 border-opacity-30 rounded p-2">
                <p className="text-base font-semibold text-white">Customer Complaints</p>
                <p className="text-sm text-green-400">Target: &lt;2 per month</p>
                <p className="text-xs text-gray-300">Monthly</p>
              </div>
              <div className="bg-green-500 bg-opacity-10 border border-green-500 border-opacity-30 rounded p-2">
                <p className="text-base font-semibold text-white">Quality Audits</p>
                <p className="text-sm text-green-400">Target: &gt;95% score</p>
                <p className="text-xs text-gray-300">Quarterly</p>
              </div>
            </div>

            <div className="text-center bg-green-500 bg-opacity-10 rounded p-2">
              <p className="text-sm font-bold text-green-400">Leading: Quality checks completed</p>
            </div>
          </div>

          {/* Volume */}
          <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-orange-400 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp size={28} className="text-orange-400" />
              <h3 className="text-xl font-bold text-orange-400">VOLUME</h3>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="bg-orange-500 bg-opacity-10 border border-orange-500 border-opacity-30 rounded p-2">
                <p className="text-base font-semibold text-white">Production Target</p>
                <p className="text-sm text-orange-400">Target: &gt;95% achievement</p>
                <p className="text-xs text-gray-300">Daily</p>
              </div>
              <div className="bg-orange-500 bg-opacity-10 border border-orange-500 border-opacity-30 rounded p-2">
                <p className="text-base font-semibold text-white">OEE Performance</p>
                <p className="text-sm text-orange-400">Target: &gt;85%</p>
                <p className="text-xs text-gray-300">Weekly</p>
              </div>
              <div className="bg-orange-500 bg-opacity-10 border border-orange-500 border-opacity-30 rounded p-2">
                <p className="text-base font-semibold text-white">Changeover Time</p>
                <p className="text-sm text-orange-400">Target: &lt;30 minutes</p>
                <p className="text-xs text-gray-300">Per changeover</p>
              </div>
            </div>

            <div className="text-center bg-orange-500 bg-opacity-10 rounded p-2">
              <p className="text-sm font-bold text-orange-400">Leading: Equipment availability</p>
            </div>
          </div>

          {/* Cost */}
          <div className="bg-gray-800 bg-opacity-60 backdrop-blur border-l-4 border-purple-400 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <DollarSign size={28} className="text-purple-400" />
              <h3 className="text-xl font-bold text-purple-400">COST</h3>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="bg-purple-500 bg-opacity-10 border border-purple-500 border-opacity-30 rounded p-2">
                <p className="text-base font-semibold text-white">Cost per Unit</p>
                <p className="text-sm text-purple-400">Target: 5% reduction YoY</p>
                <p className="text-xs text-gray-300">Monthly</p>
              </div>
              <div className="bg-purple-500 bg-opacity-10 border border-purple-500 border-opacity-30 rounded p-2">
                <p className="text-base font-semibold text-white">Waste Percentage</p>
                <p className="text-sm text-purple-400">Target: &lt;2%</p>
                <p className="text-xs text-gray-300">Weekly</p>
              </div>
              <div className="bg-purple-500 bg-opacity-10 border border-purple-500 border-opacity-30 rounded p-2">
                <p className="text-base font-semibold text-white">Budget Variance</p>
                <p className="text-sm text-purple-400">Target: Within ±3%</p>
                <p className="text-xs text-gray-300">Monthly</p>
              </div>
            </div>

            <div className="text-center bg-purple-500 bg-opacity-10 rounded p-2">
              <p className="text-sm font-bold text-purple-400">Leading: Cost improvement suggestions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-none text-center py-4">
        <p className="text-lg text-gray-400">Crew Army | 2025 Team Army Excellence Strategy</p>
      </div>
    </div>
    </div>
  );
}
