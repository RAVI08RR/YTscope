import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-20 overflow-hidden bg-[#0d0d0d]">
      {/* Background Glows */ }
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6 hover:bg-white/10 transition-colors cursor-pointer">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          New: AI-Powered Tag Generator
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-section">
          Grow Your YouTube Channel <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500">
            With Data-Driven Insights
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop guessing what works. Get distinct analytics on your competitors, track your ranking, and optimize your content strategy with real-time data.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full max-w-lg">
          <input 
            type="text" 
            placeholder="Enter YouTube Channel URL..." 
            className="w-full h-12 px-6 rounded-full bg-white/5 border border-white/10 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none text-white placeholder:text-gray-500 transition-all font-medium"
          />
          <button className="h-12 px-8 rounded-full bg-brand-orange text-white font-bold text-base hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(255,155,41,0.3)] hover:shadow-[0_0_30px_rgba(255,155,41,0.5)] whitespace-nowrap">
             Analyze Now
          </button>
        </div>

        {/* Dashboard Preview */ }
        <div className="relative w-full max-w-5xl rounded-xl border border-white/10 bg-brand-card/50 backdrop-blur-xl p-2 shadow-2xl isolate overflow-hidden group">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          {/* Mockup Container */}
          <div className="relative rounded-lg overflow-hidden border border-white/5 bg-[#0a0a0a] aspect-video">
             <Image
              src="/dashboard.png"
              alt="YTScope Dashboard"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay Gradient for Fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
