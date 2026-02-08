import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Simple, transparent pricing</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Start for free, upgrade when you need more power. No hidden fees. Cancel anytime.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {/* Free Plan */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#0f0f0f] text-left hover:border-white/20 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
            <div className="text-4xl font-bold text-white mb-6">$0<span className="text-lg font-medium text-gray-500">/mo</span></div>
            <p className="text-gray-400 mb-8 min-h-[48px]">Perfect for new creators just starting out on their journey.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300"><Check className="text-brand-orange w-5 h-5 shrink-0"/> Basic Analytics Dashboard</li>
              <li className="flex items-center gap-3 text-gray-300"><Check className="text-brand-orange w-5 h-5 shrink-0"/> Track 3 Competitors</li>
              <li className="flex items-center gap-3 text-gray-300"><Check className="text-brand-orange w-5 h-5 shrink-0"/> 1 Channel monitoring</li>
              <li className="flex items-center gap-3 text-gray-300"><Check className="text-brand-orange w-5 h-5 shrink-0"/> Weekly Reports</li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors">Get Started Free</button>
          </div>

          {/* Pro Plan */}
          <div className="p-8 rounded-2xl border-2 border-brand-orange bg-[#0d0d0d] text-left relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(255,155,41,0.1)] z-10">
            <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>
            <h3 className="text-xl font-bold text-white mb-2">Pro Creator</h3>
            <div className="text-4xl font-bold text-white mb-6">$29<span className="text-lg font-medium text-gray-500">/mo</span></div>
            <p className="text-gray-400 mb-8 min-h-[48px]">Advanced AI tools for serious growth hacking.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-white"><Check className="text-brand-orange w-5 h-5 shrink-0"/> Advanced Analytics & Forecasting</li>
              <li className="flex items-center gap-3 text-white"><Check className="text-brand-orange w-5 h-5 shrink-0"/> Unlimited Competitors</li>
              <li className="flex items-center gap-3 text-white"><Check className="text-brand-orange w-5 h-5 shrink-0"/> AI Keyword Research Tool</li>
              <li className="flex items-center gap-3 text-white"><Check className="text-brand-orange w-5 h-5 shrink-0"/> Priority Email Support</li>
              <li className="flex items-center gap-3 text-white"><Check className="text-brand-orange w-5 h-5 shrink-0"/> 3 Channels</li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-brand-orange text-white font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-brand-orange/25">Start 14-Day Free Trial</button>
          </div>

          {/* Agency Plan */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#0f0f0f] text-left hover:border-white/20 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2">Agency</h3>
            <div className="text-4xl font-bold text-white mb-6">$99<span className="text-lg font-medium text-gray-500">/mo</span></div>
            <p className="text-gray-400 mb-8 min-h-[48px]">For managing multiple channels and clients efficiently.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300"><Check className="text-brand-orange w-5 h-5 shrink-0"/> All Pro Features included</li>
              <li className="flex items-center gap-3 text-gray-300"><Check className="text-brand-orange w-5 h-5 shrink-0"/> Manage up to 10 Channels</li>
              <li className="flex items-center gap-3 text-gray-300"><Check className="text-brand-orange w-5 h-5 shrink-0"/> White-label Reports (PDF)</li>
              <li className="flex items-center gap-3 text-gray-300"><Check className="text-brand-orange w-5 h-5 shrink-0"/> Full API Access</li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}
