export default function Slide1() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {/* Mobile-width container */}
    <div className="slide-container min-h-screen w-full max-w-md mx-auto flex flex-col" style={{paddingTop: '200px'}}>
      {/* Top Section - Main Title */}
      <div className="text-center mb-4 md:mb-6 w-full">
        <h1 className="slide-title font-bold text-yellow-400 mb-2 px-2 md:px-4">
          2025 TEAM ARMY EXCELLENCE STRATEGY
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
          CREW ARMY - MOBILE READY v2
        </p>
      </div>

      {/* Middle Section - Mission and Focus Areas */}
      <div className="flex-grow flex flex-col justify-center items-center text-center w-full max-w-4xl px-2 md:px-4">
        <h2 className="text-base md:text-xl lg:text-2xl font-medium text-gray-200 mb-4 md:mb-6">
          Empowering Frontline Excellence Through Strategic Operations
        </h2>

        {/* Focus Areas - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8 w-full">
          <div className="bg-yellow-500 bg-opacity-20 backdrop-blur border border-yellow-500 border-opacity-30 rounded-lg p-3 md:p-4">
            <p className="text-base md:text-lg lg:text-xl font-bold text-yellow-400">Safety First</p>
          </div>
          <div className="bg-green-500 bg-opacity-20 backdrop-blur border border-green-500 border-opacity-30 rounded-lg p-3 md:p-4">
            <p className="text-base md:text-lg lg:text-xl font-bold text-green-400">Quality Always</p>
          </div>
          <div className="bg-orange-500 bg-opacity-20 backdrop-blur border border-orange-500 border-opacity-30 rounded-lg p-3 md:p-4">
            <p className="text-base md:text-lg lg:text-xl font-bold text-orange-400">Volume Optimization</p>
          </div>
          <div className="bg-purple-500 bg-opacity-20 backdrop-blur border border-purple-500 border-opacity-30 rounded-lg p-3 md:p-4">
            <p className="text-base md:text-lg lg:text-xl font-bold text-purple-400">Cost Management</p>
          </div>
        </div>

        {/* Tagline */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-base md:text-lg lg:text-xl px-4 md:px-6 py-3 md:py-4 rounded-lg shadow-lg text-center w-full">
          Make Line 1 Great again through AUTONOMOUS TEAMS
        </div>
      </div>

      {/* Bottom Section - Year Identifier */}
      <div className="text-center mt-4 md:mt-6 w-full">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white opacity-80">2025</p>
        <p className="text-sm md:text-base lg:text-lg text-gray-300">Strategic Implementation Framework</p>
      </div>
    </div>
    </div>
  );
}