"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0d0d0d]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2 text-white">
          <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,155,41,0.5)]">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
              <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
            </svg>
          </div>
          <span>YTScope</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#features" className="hover:text-brand-orange transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-brand-orange transition-colors">How It Works</Link>
          <Link href="#pricing" className="hover:text-brand-orange transition-colors">Pricing</Link>
          <Link href="#blog" className="hover:text-brand-orange transition-colors">Blog</Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Login</Link>
          <button className="bg-brand-orange text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(255,155,41,0.3)] hover:shadow-[0_0_30px_rgba(255,155,41,0.5)]">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d0d0d] border-b border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <Link href="#features" className="text-gray-300 hover:text-brand-orange" onClick={() => setIsOpen(false)}>Features</Link>
          <Link href="#how-it-works" className="text-gray-300 hover:text-brand-orange" onClick={() => setIsOpen(false)}>How It Works</Link>
          <Link href="#pricing" className="text-gray-300 hover:text-brand-orange" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="/login" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Login</Link>
          <button className="bg-brand-orange text-white px-5 py-2 rounded-full w-full font-semibold">Get Started</button>
        </div>
      )}
    </nav>
  );
}
