"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Don't show navbar on dashboard routes
  const isDashboardRoute = pathname?.startsWith("/dashboard") || 
                          pathname?.startsWith("/channels") || 
                          pathname?.startsWith("/videos") || 
                          pathname?.startsWith("/rankings") || 
                          pathname?.startsWith("/subscription") || 
                          pathname?.startsWith("/settings") ||
                          pathname?.startsWith("/onboarding");
  
  // Don't show navbar on auth routes
  const isAuthRoute = pathname?.startsWith("/login") || 
                     pathname?.startsWith("/register");
  
  if (isDashboardRoute || isAuthRoute) {
    return null;
  }
  
  return <Navbar />;
}
