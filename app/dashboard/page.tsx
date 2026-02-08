"use client";

import { useSession } from "next-auth/react";
import DashboardLayout from "@/components/DashboardLayout";
import { TrendingUp, Users, Eye, ThumbsUp, Video, ArrowUpRight, ArrowDownRight } from "lucide-react";

const stats = [
  {
    name: "Total Subscribers",
    value: "124.5K",
    change: "+12.5%",
    trend: "up",
    icon: Users,
  },
  {
    name: "Total Views",
    value: "2.4M",
    change: "+8.2%",
    trend: "up",
    icon: Eye,
  },
  {
    name: "Total Videos",
    value: "156",
    change: "+3",
    trend: "up",
    icon: Video,
  },
  {
    name: "Engagement Rate",
    value: "4.8%",
    change: "-0.3%",
    trend: "down",
    icon: ThumbsUp,
  },
];

const recentVideos = [
  {
    title: "How to Grow Your YouTube Channel in 2024",
    views: "45.2K",
    likes: "2.1K",
    date: "2 days ago",
  },
  {
    title: "Top 10 YouTube SEO Tips",
    views: "32.8K",
    likes: "1.8K",
    date: "5 days ago",
  },
  {
    title: "YouTube Analytics Explained",
    views: "28.5K",
    likes: "1.5K",
    date: "1 week ago",
  },
];

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, {session?.user?.name?.split(" ")[0] || "Creator"}! 👋
          </h1>
          <p className="text-gray-400">Here's what's happening with your channel today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-orange-500" />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trend === "up" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-400">{stat.name}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Channel Growth */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Channel Growth</h2>
              <select className="bg-[#0d0d0d] border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="h-64 flex items-center justify-center border border-white/10 rounded-lg bg-[#0d0d0d]/50">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-orange-500 mx-auto mb-2" />
                <p className="text-gray-400">Chart visualization coming soon</p>
              </div>
            </div>
          </div>

          {/* Top Performing Videos */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Recent Videos</h2>
            <div className="space-y-4">
              {recentVideos.map((video, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-[#0d0d0d]/50 border border-white/10 rounded-lg hover:border-orange-500/50 transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Video className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium mb-2 truncate">{video.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {video.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        {video.likes}
                      </span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-orange-500/10 to-purple-600/10 border border-orange-500/20 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Ready to grow your channel?</h2>
              <p className="text-gray-400">Explore our tools and features to boost your YouTube success.</p>
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-orange-500/50 whitespace-nowrap">
              Explore Tools
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
