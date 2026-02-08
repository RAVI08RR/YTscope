export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0d0d0d] selection:bg-brand-orange/30 overflow-x-hidden transition-colors duration-300">
      <Hero />
      
      {/* Social Proof Strip */}
      <div className="border-y border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#0a0a0a]/50 backdrop-blur-sm py-8 overflow-hidden">
         <div className="container mx-auto px-4 text-center">
            <p className="text-gray-500 dark:text-gray-500 text-sm font-medium mb-6 uppercase tracking-wider">Trusted by 5,000+ Top Creators</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos (using text for now as specified logos weren't provided) */}
               <span className="text-xl font-bold text-gray-400 dark:text-white/40">TECH<span className="text-gray-600 dark:text-white/60">VISION</span></span>
               <span className="text-xl font-bold text-gray-400 dark:text-white/40">CREATOR<span className="text-gray-600 dark:text-white/60">STUDIO</span></span>
               <span className="text-xl font-bold text-gray-400 dark:text-white/40">VIRAL<span className="text-gray-600 dark:text-white/60">NATION</span></span>
               <span className="text-xl font-bold text-gray-400 dark:text-white/40">TUBE<span className="text-gray-600 dark:text-white/60">MASTER</span></span>
               <span className="text-xl font-bold text-gray-400 dark:text-white/40">INFLUENCE<span className="text-gray-600 dark:text-white/60">NOW</span></span>
            </div>
         </div>
      </div>

      <Features />
      <Pricing />
      
      {/* Final Call to Action Section */}
      <section className="py-24 relative overflow-hidden isolate bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-pink-500/10 dark:from-orange-500/5 dark:via-purple-500/5 dark:to-pink-500/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">Ready to explode <br/> your channel growth?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Join 15,000+ creators who are using YTScope's data-driven insights to dominate their niche.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold text-lg hover:from-orange-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-orange-500/50">
              Get Started for Free
            </button>
            <button className="px-10 py-4 rounded-full bg-transparent border-2 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold text-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-all">
              View Demo
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">No credit card required • Cancel anytime</p>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

