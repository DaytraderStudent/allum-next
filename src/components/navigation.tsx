"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const links = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.startsWith("/dashboard")) return null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <nav className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gold flex items-center justify-center">
                <span className="font-heading text-[#0A0F1A] text-[18px] leading-none">
                  A
                </span>
              </div>
              <span className="text-foreground text-[15px] font-semibold tracking-[-0.01em]">
                Allum Engineering
              </span>
            </Link>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[13px] font-medium transition-colors cursor-pointer ${
                    pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              {/* Theme toggle */}
              {mounted && (
                <button
                  onClick={() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                  }
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>
              )}
              <Link
                href="/contact"
                className="h-9 px-5 bg-gold text-[#0A0F1A] text-[13px] font-semibold inline-flex items-center hover:bg-[#d4911c] transition-colors cursor-pointer"
              >
                Request a Quote
              </Link>
            </div>

            {/* Mobile */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-foreground cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-background">
          <div className="flex items-center justify-between h-[72px] px-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gold flex items-center justify-center">
                <span className="font-heading text-[#0A0F1A] text-[18px] leading-none">
                  A
                </span>
              </div>
              <span className="text-foreground text-[15px] font-semibold">
                Allum Engineering
              </span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-foreground cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="px-6 pt-8 flex flex-col gap-1">
            {[{ label: "Home", href: "/" }, ...links].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-[20px] font-heading text-foreground/80 hover:text-gold transition-colors cursor-pointer tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 h-12 bg-gold text-[#0A0F1A] text-[14px] font-semibold flex items-center justify-center cursor-pointer"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
