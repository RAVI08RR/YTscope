"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Youtube, TrendingUp, BarChart3, ArrowRight, Sparkles } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Welcome to YTScope",
    description: "Let's get you started with powerful YouTube analytics",
  },
  {
    id: 2,
    title: "Connect Your Channel",
    description: "Link your YouTube channel to unlock insights",
  },
  {
    id: 3,
    title: "You're All Set!",
    description: "Start exploring your channel analytics",
  },
];

const features = [
  {
    icon: TrendingUp,
    title: "Growth Analytics",
    description: "Track your channel's growth with detailed metrics and insights",
  },
  {
    icon: BarChart3,
    title: "Performance Reports",
    description: "Get comprehensive reports on your video performance",
  },
  {
    icon: Youtube,
    title: "Competitor Analysis",
    description: "Compare your channel with competitors in your niche",
  },
];

export default function OnboardingPage() {
  const { data: session, update } = useSession();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [channelUrl, setChannelUrl] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleConnectChannel = async () => {
    setIsConnecting(true);
    // Simulate API call to connect YouTube channel
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsConnecting(false);
    handleNext();
  };

  const handleComplete = async () => {
    // Update session to mark onboarding as completed
    await update({ onboardingCompleted: true });
    router.push("/dashboard");
    router.refresh();
  };

  const handleSkip = async () => {
    await update({ onboardingCompleted: true });
    router.push("/dashboard");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-4xl">
        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                    currentStep >= step.id
                      ? "border-orange-500 bg-orange-500/20 text-orange-500"
                      : "border-white/20 bg-white/5 text-gray-500"
                  }`}
                >
                  {currentStep > step.id ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <span className="font-semibold">{step.id}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-0.5 mx-2 transition-all ${
                      currentStep > step.id ? "bg-orange-500" : "bg-white/20"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold text-white">{steps[currentStep - 1].title}</h2>
            <p className="text-gray-400 mt-1">{steps[currentStep - 1].description}</p>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          {/* Step 1: Welcome */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-purple-600 rounded-2xl mb-6 shadow-lg shadow-orange-500/30">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Welcome, {session?.user?.name || "Creator"}! 👋
                </h3>
                <p className="text-gray-400">
                  Discover what makes YTScope the ultimate YouTube analytics platform
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-[#0d0d0d]/50 border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-6">
                <button
                  onClick={handleSkip}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Skip for now
                </button>
                <button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-orange-500/50 flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Connect Channel */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-6 shadow-lg shadow-red-500/30">
                  <Youtube className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Connect Your YouTube Channel</h3>
                <p className="text-gray-400">
                  Enter your YouTube channel URL to start tracking your analytics
                </p>
              </div>

              <div className="max-w-md mx-auto space-y-4">
                <div>
                  <label htmlFor="channelUrl" className="block text-sm font-medium text-gray-300 mb-2">
                    YouTube Channel URL
                  </label>
                  <input
                    id="channelUrl"
                    type="url"
                    value={channelUrl}
                    onChange={(e) => setChannelUrl(e.target.value)}
                    className="w-full bg-[#0d0d0d]/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all"
                    placeholder="https://youtube.com/@yourchannel"
                  />
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <p className="text-sm text-blue-400">
                    💡 <strong>Tip:</strong> You can find your channel URL by going to your YouTube channel
                    and copying the URL from your browser's address bar.
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-6">
                <button
                  onClick={handleSkip}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Skip for now
                </button>
                <button
                  onClick={handleConnectChannel}
                  disabled={!channelUrl || isConnecting}
                  className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isConnecting ? "Connecting..." : "Connect Channel"}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Completion */}
          {currentStep === 3 && (
            <div className="space-y-8 text-center">
              <div>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 shadow-lg shadow-green-500/30">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">You're All Set! 🎉</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  Your account is ready. Start exploring your YouTube analytics and grow your channel
                  with data-driven insights.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="bg-[#0d0d0d]/50 border border-white/10 rounded-xl p-6 text-left">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-3">
                    <BarChart3 className="w-5 h-5 text-orange-500" />
                  </div>
                  <h4 className="text-white font-semibold mb-1">View Dashboard</h4>
                  <p className="text-gray-400 text-sm">Access your analytics dashboard</p>
                </div>
                <div className="bg-[#0d0d0d]/50 border border-white/10 rounded-xl p-6 text-left">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3">
                    <TrendingUp className="w-5 h-5 text-purple-500" />
                  </div>
                  <h4 className="text-white font-semibold mb-1">Track Growth</h4>
                  <p className="text-gray-400 text-sm">Monitor your channel's performance</p>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={handleComplete}
                  className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-12 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-orange-500/50 flex items-center gap-2 mx-auto"
                >
                  Go to Dashboard
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
