"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { Youtube, Plus, TrendingUp, Users, Eye } from "lucide-react";

const channels = [
  {
    name: "Tech Reviews Pro",
    subscribers: "124.5K",
    views: "2.4M",
    videos: 156,
    growth: "+12.5%",
  },
];

export default function ChannelsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Channels</h1>
            <p className="text-gray-400">Manage and analyze your YouTube channels</p>
          </div>
          <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-orange-500/50 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add Channel
          </button>
        </div>

        <div className="grid gap-6">
          {channels.map((channel, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Youtube className="w-10 h-10 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">{channel.name}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                        <Users className="w-4 h-4" />
                        Subscribers
                      </div>
                      <p className="text-white font-semibold">{channel.subscribers}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                        <Eye className="w-4 h-4" />
                        Total Views
                      </div>
                      <p className="text-white font-semibold">{channel.views}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                        <Youtube className="w-4 h-4" />
                        Videos
                      </div>
                      <p className="text-white font-semibold">{channel.videos}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                        <TrendingUp className="w-4 h-4" />
                        Growth
                      </div>
                      <p className="text-green-500 font-semibold">{channel.growth}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
