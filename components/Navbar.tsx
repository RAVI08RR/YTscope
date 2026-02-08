"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#0d0d0d]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/30">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
              <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
            </svg>
          </div>
          <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">YTScope</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <Link href="#features" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">Features</Link>
          <Link href="/tools" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">Tools</Link>
          <Link href="#how-it-works" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">How It Works</Link>
          <Link href="#pricing" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">Pricing</Link>
          <Link href="#blog" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">Blog</Link>
        </div>

        {/* Auth Buttons & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <Link href="/login" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Login</Link>
          <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-orange-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-orange-500/50">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0d0d0d] border-b border-gray-200 dark:border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <Link href="#features" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400" onClick={() => setIsOpen(false)}>Features</Link>
          <Link href="/tools" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400" onClick={() => setIsOpen(false)}>Tools</Link>
          <Link href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400" onClick={() => setIsOpen(false)}>How It Works</Link>
          <Link href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400" onClick={() => setIsOpen(false)}>Pricing</Link>
          <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-800">
            <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          <Link href="/login" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={() => setIsOpen(false)}>Login</Link>
          <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-5 py-2 rounded-full w-full font-semibold">Get Started</button>
        </div>
      )}
    </nav>
  );
}
