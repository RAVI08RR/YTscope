'use client';

import { motion } from 'framer-motion';
import { Search, TrendingUp, BarChart3, Users, Video, Eye, ThumbsUp, MessageSquare, Clock, Target } from 'lucide-react';

const tools = [
  {
    icon: Search,
    title: 'Channel Analyzer',
    description: 'Get comprehensive insights into any YouTube channel\'s performance and growth metrics.',
    gradient: 'from-blue-500 to-cyan-500',
    features: ['Subscriber growth', 'View analytics', 'Engagement rates']
  },
  {
    icon: TrendingUp,
    title: 'Trend Tracker',
    description: 'Discover trending topics and viral content in your niche to stay ahead of the curve.',
    gradient: 'from-purple-500 to-pink-500',
    features: ['Trending videos', 'Topic analysis', 'Viral predictions']
  },
  {
    icon: BarChart3,
    title: 'Performance Dashboard',
    description: 'Monitor your channel\'s performance with real-time analytics and detailed reports.',
    gradient: 'from-orange-500 to-red-500',
    features: ['Real-time stats', 'Custom reports', 'Data visualization']
  },
  {
    icon: Users,
    title: 'Competitor Analysis',
    description: 'Compare your channel with competitors and identify opportunities for growth.',
    gradient: 'from-green-500 to-emerald-500',
    features: ['Channel comparison', 'Gap analysis', 'Strategy insights']
  },
  {
    icon: Video,
    title: 'Content Optimizer',
    description: 'Optimize your video titles, descriptions, and tags for maximum reach and engagement.',
    gradient: 'from-yellow-500 to-orange-500',
    features: ['SEO optimization', 'Tag suggestions', 'Title analyzer']
  },
  {
    icon: Eye,
    title: 'Audience Insights',
    description: 'Understand your audience demographics, interests, and viewing patterns.',
    gradient: 'from-indigo-500 to-purple-500',
    features: ['Demographics', 'Watch time', 'Retention analysis']
  },
  {
    icon: ThumbsUp,
    title: 'Engagement Tracker',
    description: 'Track likes, comments, and shares to measure content effectiveness.',
    gradient: 'from-pink-500 to-rose-500',
    features: ['Engagement metrics', 'Comment analysis', 'Share tracking']
  },
  {
    icon: MessageSquare,
    title: 'Comment Analyzer',
    description: 'Analyze comments to understand audience sentiment and feedback.',
    gradient: 'from-teal-500 to-cyan-500',
    features: ['Sentiment analysis', 'Keyword extraction', 'Response rate']
  },
  {
    icon: Clock,
    title: 'Upload Scheduler',
    description: 'Find the best times to upload videos based on your audience activity.',
    gradient: 'from-violet-500 to-purple-500',
    features: ['Optimal timing', 'Audience activity', 'Schedule planner']
  },
  {
    icon: Target,
    title: 'Growth Predictor',
    description: 'Predict future growth and set realistic goals based on historical data.',
    gradient: 'from-red-500 to-orange-500',
    features: ['Growth forecasts', 'Goal setting', 'Milestone tracking']
  }
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-950">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-pink-500/10 dark:from-orange-500/5 dark:via-purple-500/5 dark:to-pink-500/5 border-b border-gray-200 dark:border-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Powerful Tools
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                for YouTube Success
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Everything you need to analyze, optimize, and grow your YouTube channel with data-driven insights.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-transparent dark:hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 dark:hover:shadow-purple-500/10">
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}></div>
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {tool.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {tool.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {tool.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tool.gradient} mr-2`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`mt-6 w-full py-3 px-4 rounded-lg font-medium bg-gradient-to-r ${tool.gradient} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:shadow-lg`}>
                  Try Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-purple-600 to-pink-600 rounded-3xl p-12 text-center"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Supercharge Your Channel?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start using our powerful tools today and watch your YouTube channel grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-xl">
                Get Started Free
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200 border border-white/20">
                View Pricing
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
