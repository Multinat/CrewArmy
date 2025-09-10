
import { Target, UserCheck, Users, MessageSquare, CheckCircle, FileCheck, AlertTriangle, BarChart, Zap, TrendingUp, BookOpen, Settings } from 'lucide-react';

export default function Slide7() {
  const methodPrinciples = [
    { 
      icon: Target, 
      title: "Role Clarity", 
      description: "Clearly define each team member's role, including primary responsibilities, deliverables, and decision-making authority. Avoid overlapping responsibilities to minimize confusion and conflict." 
    },
    { 
      icon: UserCheck, 
      title: "Accountability", 
      description: "Specify who is accountable for tasks and outcomes. Use frameworks like RACI (Responsible, Accountable, Consulted, Informed) to map out responsibilities for key activities." 
    },
    { 
      icon: Users, 
      title: "Collaboration and Dependencies", 
      description: "Highlight how roles interact and depend on one another. Define how team members collaborate across functions or departments." 
    },
    { 
      icon: MessageSquare, 
      title: "Communication Protocols", 
      description: "Establish clear communication channels and expectations, including reporting lines, meeting cadences, and escalation processes. Ensure updates, feedback, and progress are shared effectively." 
    },
    { 
      icon: CheckCircle, 
      title: "Decision-Making Authority", 
      description: "Define who has the authority to make decisions in specific areas. Clarify escalation paths for decisions requiring higher-level approval." 
    },
    { 
      icon: Settings, 
      title: "Skill Alignment", 
      description: "Match roles to the skills and expertise of team members. Provide opportunities for growth and cross-training to address skill gaps." 
    },
    { 
      icon: FileCheck, 
      title: "Team Goals and Alignment", 
      description: "Link individual roles to the team's overall objectives and mission. Ensure everyone understands how their work contributes to the bigger picture." 
    },
    { 
      icon: AlertTriangle, 
      title: "Conflict Resolution", 
      description: "Outline how conflicts or disagreements should be addressed. Provide guidelines for resolving role-related disputes or overlapping responsibilities." 
    },
    { 
      icon: BarChart, 
      title: "Performance Metrics", 
      description: "Define how success is measured for each role. Include both individual and team-level KPIs (Key Performance Indicators)." 
    },
    { 
      icon: Zap, 
      title: "Flexibility and Adaptability", 
      description: "Acknowledge that roles may evolve as the team or organization grows. Include a process for updating roles and responsibilities as needed." 
    },
    { 
      icon: TrendingUp, 
      title: "Cultural and Behavioral Expectations", 
      description: "Define the team's core values and expected behaviors, such as collaboration, respect, and innovation. Ensure these values guide day-to-day interactions." 
    },
    { 
      icon: BookOpen, 
      title: "Onboarding and Handover Processes", 
      description: "Provide clear guidelines for onboarding new team members. Define how responsibilities are handed over during transitions, such as promotions or departures." 
    }
  ];

  return (
    <div className="slide-container w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex flex-col p-4 md:p-6 lg:p-8 text-white">
      {/* Header */}
      <div className="flex items-center justify-center py-2 md:py-16 lg:py-24 md:mt-16 lg:mt-24">
        <div className="flex items-center gap-2 md:gap-4">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">CREW ARMY METHOD AND PRINCIPLES</h1>
        </div>
      </div>
      <div className="text-center mb-6">
        <p className="text-2xl text-gray-300">Our Method and Principle</p>
      </div>

      {/* Main Body - Method and Principle Sections */}
      <main className="flex-1 flex flex-col gap-6">
        {/* Method Section - 12 Principles Grid */}
        <section className="bg-black bg-opacity-20 rounded-xl p-6 border border-gray-700 flex-1">
          <h2 className="text-4xl font-bold text-center text-cyan-300 mb-6">METHOD</h2>
          <p className="text-xl text-center text-gray-300 mb-6">Our approach to team management and operational excellence is built on the following key principles:</p>
          <div className="grid grid-cols-4 gap-4">
            {methodPrinciples.map((principle, i) => {
              const IconComponent = principle.icon;
              return (
                <div key={i} className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </div>
                    <IconComponent size={20} className="text-cyan-400 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-cyan-300 leading-tight">{principle.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Principle Section */}
        <section className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl p-6 border-l-4 border-cyan-400 flex-none">
          <h2 className="text-4xl font-bold text-center text-cyan-300 mb-4">PRINCIPLE</h2>
          <p className="text-xl text-center text-gray-200 leading-relaxed">
            We are committed to <span className="text-cyan-300 font-semibold">challenging boundaries</span>, 
            <span className="text-cyan-300 font-semibold"> exceeding targets</span>, and fostering a 
            <span className="text-cyan-300 font-semibold"> cohesive, high-performing team environment</span>. 
            By addressing these dynamics, we ensure <span className="text-cyan-300 font-semibold">clarity, accountability, and collaboration</span>, 
            enabling us to achieve <span className="text-cyan-300 font-semibold">operational excellence and continuous improvement</span>.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex-none text-center pt-4 mt-4">
        <p className="text-base text-gray-400">Crew Army | 2025 Team Army Excellence Strategy</p>
      </footer>
    </div>
  );
}
