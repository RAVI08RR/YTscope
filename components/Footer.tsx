import Link from "next/link";
import { Twitter, Youtube, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-20 pb-10 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2 text-white mb-6">
            <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>
            </div>
            <span>YTScope</span>
          </Link>
          <p className="text-gray-400 text-sm mb-6 max-w-xs">
            Unlock the full potential of your channel with advanced analytics, competitor tracking, and AI-driven insights.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Twitter className="w-5 h-5 text-gray-400 hover:text-white" /></a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Youtube className="w-5 h-5 text-gray-400 hover:text-white" /></a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Github className="w-5 h-5 text-gray-400 hover:text-white" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Product</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="#" className="hover:text-brand-orange transition-colors">Features</Link></li>
            <li><Link href="#" className="hover:text-brand-orange transition-colors">Pricing</Link></li>
            <li><Link href="#" className="hover:text-brand-orange transition-colors">Changelog</Link></li>
            <li><Link href="#" className="hover:text-brand-orange transition-colors">Docs</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="#" className="hover:text-brand-orange transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-brand-orange transition-colors">Blog</Link></li>
            <li><Link href="#" className="hover:text-brand-orange transition-colors">Careers</Link></li>
            <li><Link href="#" className="hover:text-brand-orange transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-brand-orange transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-brand-orange transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-20 pt-10 border-t border-white/5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} YTScope. All rights reserved. Not affiliated with YouTube.
      </div>
    </footer>
  );
}
