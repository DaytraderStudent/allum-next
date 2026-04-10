"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Markets", href: "/markets" },
  { label: "Products", href: "/products" },
  { label: "News", href: "/news" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg =
    !isHome || scrolled
      ? "bg-white/95 backdrop-blur-sm border-b border-gray-200"
      : "bg-transparent";

  const textColor = !isHome || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between h-20">
            <Link href="/" className="relative z-10">
              <span
                className={`text-[22px] font-light tracking-[0.04em] transition-colors duration-500 ${textColor ? "text-[#0f1a2e]" : "text-white"}`}
              >
                allum
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[13px] font-medium tracking-[0.02em] transition-colors duration-300 cursor-pointer ${
                    textColor
                      ? "text-gray-500 hover:text-[#0f1a2e]"
                      : "text-white/60 hover:text-white"
                  } ${pathname === link.href ? (textColor ? "text-[#0f1a2e]" : "text-white") : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 cursor-pointer transition-colors ${textColor ? "text-[#0f1a2e]" : "text-white"}`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0f1a2e]">
          <div className="flex items-center justify-between h-20 px-6">
            <span className="text-[22px] font-light tracking-[0.04em] text-white">
              allum
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-white cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="px-6 pt-12 flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-light text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="absolute bottom-12 left-6 right-6">
            <p className="text-white/30 text-sm">post@allum.no</p>
            <p className="text-white/30 text-sm mt-1">+47 33 47 33 50</p>
          </div>
        </div>
      )}
    </>
  );
}
