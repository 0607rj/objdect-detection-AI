
import ObjectDetection from "@/components/object-detection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-40 left-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center p-4 md:p-8">
        {/* Top Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-red-500/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span className="text-red-200 text-xs md:text-sm font-bold uppercase tracking-wider">Live Security Monitoring</span>
        </div>

        {/* Title */}
        <h1 className="gradient-title font-extrabold text-4xl md:text-6xl lg:text-8xl tracking-tighter text-center mb-4 animate-fade-in">
          🚨 Thief Detection Alarm
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-300 text-sm md:text-lg text-center max-w-2xl mb-8 animate-fade-in-delay">
          AI-powered real-time object detection using TensorFlow.js • COCO-SSD Model
        </p>

        <ObjectDetection />
      </div>
    </main>
  );
}
