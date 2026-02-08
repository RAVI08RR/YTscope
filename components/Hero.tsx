import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-20 overflow-hidden bg-white dark:bg-[#0d0d0d] transition-colors duration-300">
      {/* Background Glows */ }
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/20 via-purple-500/10 to-pink-500/20 dark:from-orange-500/10 dark:via-purple-500/5 dark:to-pink-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm text-gray-600 dark:text-gray-400 mb-6 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-pointer">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          New: AI-Powered Tag Generator
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-section text-gray-900 dark:text-white">
          Grow Your YouTube Channel <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500">
            With Data-Driven Insights
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop guessing what works. Get distinct analytics on your competitors, track your ranking, and optimize your content strategy with real-time data.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full max-w-lg">
          <input 
            type="text" 
            placeholder="Enter YouTube Channel URL..." 
            className="w-full h-12 px-6 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 transition-all font-medium"
          />
          <button className="h-12 px-8 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold text-base hover:from-orange-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-orange-500/50 whitespace-nowrap">
             Analyze Now
          </button>
        </div>

        {/* Dashboard Preview */ }
        <div className="relative w-full max-w-5xl rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-brand-card/50 backdrop-blur-xl p-2 shadow-2xl isolate overflow-hidden group">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
          
          {/* Mockup Container */}
          <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-white/5 bg-gray-100 dark:bg-[#0a0a0a] aspect-video">
             <Image
              src="/dashboard.png"
              alt="YTScope Dashboard"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay Gradient for Fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-[#0d0d0d]/20 via-transparent to-transparent opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

