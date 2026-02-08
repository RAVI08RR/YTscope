import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] selection:bg-brand-orange/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      
      {/* Social Proof Strip */}
      <div className="border-y border-white/5 bg-[#0a0a0a]/50 backdrop-blur-sm py-8 overflow-hidden">
         <div className="container mx-auto px-4 text-center">
            <p className="text-gray-500 text-sm font-medium mb-6 uppercase tracking-wider">Trusted by 5,000+ Top Creators</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos (using text for now as specified logos weren't provided) */}
               <span className="text-xl font-bold text-white/40">TECH<span className="text-white/60">VISION</span></span>
               <span className="text-xl font-bold text-white/40">CREATOR<span className="text-white/60">STUDIO</span></span>
               <span className="text-xl font-bold text-white/40">VIRAL<span className="text-white/60">NATION</span></span>
               <span className="text-xl font-bold text-white/40">TUBE<span className="text-white/60">MASTER</span></span>
               <span className="text-xl font-bold text-white/40">INFLUENCE<span className="text-white/60">NOW</span></span>
            </div>
         </div>
      </div>

      <Features />
      <Pricing />
      
      {/* Final Call to Action Section */}
      <section className="py-24 relative overflow-hidden isolate">
        <div className="absolute inset-0 bg-brand-orange/10 mix-blend-overlay -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">Ready to explode <br/> your channel growth?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join 15,000+ creators who are using YTScope's data-driven insights to dominate their niche.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Get Started for Free
            </button>
            <button className="px-10 py-4 rounded-full bg-transparent border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all">
              View Demo
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-500">No credit card required • Cancel anytime</p>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
