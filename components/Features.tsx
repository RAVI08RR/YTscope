import { BarChart2, TrendingUp, Users, Search, Award, Zap } from "lucide-react";

const features = [
  {
    icon: <BarChart2 className="w-6 h-6 text-blue-400" />,
    title: "Deep Analytics",
    desc: "Get insights that YouTube Studio doesn't show you. Analyze retention, click-through rates, and audience demographics in detail."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-green-400" />,
    title: "Competitor Tracking",
    desc: "Spy on your competitors. See what's working for them and adapt your strategy to outpace them effortlessly."
  },
  {
    icon: <Users className="w-6 h-6 text-purple-400" />,
    title: "Audience Growth",
    desc: "Understand your audience better. Find out where they come from, what they like, and what else they watch."
  },
  {
    icon: <Search className="w-6 h-6 text-yellow-400" />,
    title: "SEO Optimization",
    desc: "Optimize your titles, descriptions, and tags with our AI-powered keyword tools to rank higher in search."
  },
  {
    icon: <Award className="w-6 h-6 text-brand-orange" />,
    title: "Achievement Tracking",
    desc: "Gamify your growth. Track Custom milestones and get certificates for your achievements to share socially."
  },
  {
    icon: <Zap className="w-6 h-6 text-red-400" />,
    title: "Real-time Alerts",
    desc: "Get notified instantly when a video takes off or when you hit a new subscriber milestone so you never miss a beat."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] -z-10 translate-x-1/2"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Everything You Need to Grow</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Powerful tools designed to help you understand your channel and accelerate your growth on YouTube.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-2xl bg-[#0f0f0f] border border-white/5 hover:border-brand-orange/30 hover:bg-[#151515] transition-all group hover:-translate-y-1 shadow-lg hover:shadow-brand-orange/5">
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
