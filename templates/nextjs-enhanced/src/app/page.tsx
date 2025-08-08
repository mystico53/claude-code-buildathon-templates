import { Star, Heart, Code, Zap, Palette, Sparkles } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-purple-600 w-8 h-8" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Enhanced Next.js
            </h1>
            <Sparkles className="text-blue-600 w-8 h-8" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A beautiful showcase of Tailwind CSS and Lucide Icons working together in perfect harmony
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Code className="text-purple-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Modern Stack</h3>
            </div>
            <p className="text-gray-600">Next.js 15, React 19, TypeScript - the latest and greatest web technologies.</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Palette className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Tailwind CSS</h3>
            </div>
            <p className="text-gray-600">Utility-first CSS framework for rapidly building beautiful, responsive designs.</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-cyan-100 rounded-xl">
                <Zap className="text-cyan-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Lightning Fast</h3>
            </div>
            <p className="text-gray-600">Optimized performance with minimal bundle size and instant page loads.</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-white/20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What's Included</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">15</div>
              <p className="text-gray-600">NPM Packages</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">45s</div>
              <p className="text-gray-600">Install Time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">✨</div>
              <p className="text-gray-600">Pre-configured</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">∞</div>
              <p className="text-gray-600">Possibilities</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 hover:scale-105">
            <Star className="w-5 h-5" />
            Get Started
          </button>
          <button className="bg-white/70 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-full font-semibold border border-white/20 hover:bg-white transition-all duration-300 flex items-center gap-2 hover:scale-105">
            <Heart className="w-5 h-5 text-red-500" />
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}