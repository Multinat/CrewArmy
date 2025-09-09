
import { 
  Target,
  Users,
  GitBranch,
  Package,
  Layers3,
  Truck,
  Recycle,
  Factory,
  CheckCircle2,
  AlertCircle,
  User
} from 'lucide-react';

export default function Slide15() {
  // RACI data structure based on crew army RACI document
  const machines = [
    { name: 'Unpacker & Decrowner', color: 'amber' },
    { name: 'Crate Sorters', color: 'emerald' },
    { name: 'Depalletiser', color: 'red' },
    { name: 'Packer Front', color: 'orange' },
    { name: 'Packer Back', color: 'blue' },
    { name: 'Palletiser', color: 'green' },
    { name: 'Cratewasher & Buffer', color: 'teal' }
  ];

  const processes = [
    'Unpacking Bottles',
    'Decrowning Bottles', 
    'Crate Sorting',
    'Depalletising Crates',
    'Packing Bottles',
    'Palletising Crates',
    'Crate Washing',
    'Crate Buffer Management'
  ];

  // RACI Matrix: R=Responsible, S=Support, Relief=Relief Coverage
  // Primary roles marked with 'r', Secondary/Support with 'S'
  const raciMatrix = [
    // Unpacking Bottles
    ['R', '', '', '', '', '', ''],
    // Decrowning Bottles  
    ['R', '', '', '', '', '', ''],
    // Crate Sorting
    ['S', 'R', '', '', '', '', ''],
    // Depalletising Crates
    ['', '', 'R', '', '', '', ''],
    // Packing Bottles
    ['', '', '', 'R', 'R', '', ''],
    // Palletising Crates
    ['', '', '', 'S', '', 'R', ''],
    // Crate Washing
    ['', '', '', '', 'S', '', 'R'],
    // Crate Buffer Management
    ['', '', '', '', '', 'R', 'S']
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'amber': 'border-amber-400 text-amber-400',
      'emerald': 'border-emerald-400 text-emerald-400', 
      'red': 'border-red-400 text-red-400',
      'orange': 'border-orange-400 text-orange-400',
      'blue': 'border-blue-400 text-blue-400',
      'green': 'border-green-400 text-green-400',
      'teal': 'border-teal-400 text-teal-400'
    };
    return colorMap[color] || 'border-gray-400 text-gray-400';
  };

  const getRoleDisplay = (role: string) => {
    switch(role) {
      case 'R': return { symbol: 'R', color: 'text-green-400', bg: 'bg-green-400/20', tooltip: 'Responsible - Primary' };
      case 'S': return { symbol: 'S', color: 'text-blue-400', bg: 'bg-blue-400/20', tooltip: 'Support - Secondary' };
      case 'Relief': return { symbol: 'RL', color: 'text-orange-400', bg: 'bg-orange-400/20', tooltip: 'Relief Coverage' };
      default: return { symbol: '', color: '', bg: '', tooltip: '' };
    }
  };

  return (
    <div className="slide-container relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex flex-col">
      {/* Header */}
      <div className="flex-none text-center py-6">
        <div className="flex items-center justify-center space-x-4 mb-3">
          <Target size={56} className="text-cyan-400" />
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">BACKEND RACI MATRIX</h1>
        </div>
        <p className="text-3xl text-gray-300">Role Assignments & Responsibilities for Backend Operations</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-8 pb-8">
        
        {/* Legend */}
        <div className="mb-6 flex justify-center">
          <div className="bg-gray-800 bg-opacity-70 backdrop-blur rounded-lg p-4 border border-gray-600">
            <div className="flex items-center space-x-6 text-lg">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-400/20 border border-green-400 rounded text-green-400 flex items-center justify-center text-sm font-bold">R</div>
                <span className="text-white">Responsible (Primary Role)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-400/20 border border-blue-400 rounded text-blue-400 flex items-center justify-center text-sm font-bold">S</div>
                <span className="text-white">Support (Secondary Role)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-400/20 border border-orange-400 rounded text-orange-400 flex items-center justify-center text-xs font-bold">RL</div>
                <span className="text-white">Relief Coverage</span>
              </div>
            </div>
          </div>
        </div>

        {/* RACI Matrix */}
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur rounded-lg border border-gray-600 overflow-hidden">
          
          {/* Header Row - Machine Names */}
          <div className="grid grid-cols-8 bg-gray-700 bg-opacity-80">
            <div className="p-3 border-r border-gray-600">
              <h3 className="text-lg font-bold text-cyan-400 text-center">PROCESSES</h3>
            </div>
            {machines.map((machine, index) => (
              <div key={index} className={`p-3 border-r border-gray-600 ${index === machines.length - 1 ? 'border-r-0' : ''}`}>
                <div className={`text-center ${getColorClasses(machine.color)}`}>
                  <div className="text-sm font-bold leading-tight">{machine.name.replace('&', '\n&')}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Data Rows */}
          {processes.map((process, processIndex) => (
            <div key={processIndex} className={`grid grid-cols-8 ${processIndex % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-800/50'} hover:bg-gray-700/40 transition-colors`}>
              <div className="p-3 border-r border-gray-600 border-b border-gray-600">
                <div className="text-white font-semibold text-base">{process}</div>
              </div>
              {machines.map((machine, machineIndex) => {
                const role = raciMatrix[processIndex][machineIndex];
                const roleDisplay = getRoleDisplay(role);
                return (
                  <div key={machineIndex} className={`p-3 border-r border-gray-600 border-b border-gray-600 ${machineIndex === machines.length - 1 ? 'border-r-0' : ''}`}>
                    <div className="flex items-center justify-center">
                      {role && (
                        <div className={`w-8 h-8 ${roleDisplay.bg} border ${roleDisplay.color.replace('text-', 'border-')} rounded ${roleDisplay.color} flex items-center justify-center text-sm font-bold`}>
                          {roleDisplay.symbol}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Key Support Relationships */}
        <div className="mt-6 grid grid-cols-3 gap-6">
          
          <div className="bg-gray-800 bg-opacity-60 backdrop-blur rounded-lg p-5 border-l-4 border-amber-400">
            <h4 className="text-xl font-bold text-amber-400 mb-3 flex items-center">
              <Users size={24} className="mr-2" />
              Cross-Machine Relief
            </h4>
            <div className="space-y-2 text-gray-200 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                <span>Packer Front ↔ Depalletiser (lunch coverage)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                <span>Packer Back ↔ Cratewasher (lunch coverage)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                <span>Unpacker team ↔ Crate sorter operations</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 bg-opacity-60 backdrop-blur rounded-lg p-5 border-l-4 border-green-400">
            <h4 className="text-xl font-bold text-green-400 mb-3 flex items-center">
              <GitBranch size={24} className="mr-2" />
              Primary Support Flow
            </h4>
            <div className="space-y-2 text-gray-200 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <span>Packer → Palletiser coordination</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <span>Palletiser → Cratebuffer primary</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <span>Cratewasher ← Multi-machine support</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 bg-opacity-60 backdrop-blur rounded-lg p-5 border-l-4 border-cyan-400">
            <h4 className="text-xl font-bold text-cyan-400 mb-3 flex items-center">
              <CheckCircle2 size={24} className="mr-2" />
              Autonomous Operations
            </h4>
            <div className="space-y-2 text-gray-200 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                <span>Clear primary/secondary role definition</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                <span>Cross-functional team competency</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                <span>Integrated VPO excellence delivery</span>
              </div>
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
