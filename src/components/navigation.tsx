"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  {
    label: "Markets",
    href: "#markets",
    children: [
      { label: "Cable Equipment", href: "#markets" },
      { label: "Maritime", href: "#markets" },
      { label: "Process Industry", href: "#markets" },
      { label: "Energy", href: "#markets" },
      { label: "Water Treatment", href: "#markets" },
    ],
  },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-dark/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center font-heading font-bold text-navy-dark text-lg transition-transform duration-300 group-hover:scale-105">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-white text-lg leading-tight tracking-tight">
                Allum
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-steel-light/60">
                Engineering
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-1 cursor-pointer"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3 h-3" />}
                </a>
                {link.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-navy-dark/95 backdrop-blur-md border border-white/10 rounded-lg p-2 min-w-[200px] shadow-xl">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-white/60 hover:text-gold hover:bg-white/5 rounded-md transition-colors duration-150 cursor-pointer"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-gold text-navy-dark font-heading font-semibold text-sm rounded-lg hover:bg-gold-light transition-colors duration-200 cursor-pointer"
            >
              Get in Touch
            </a>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="lg:hidden p-2 text-white cursor-pointer">
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-navy-dark border-white/10 w-80"
              >
                <div className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="px-4 py-3 text-white/80 hover:text-gold hover:bg-white/5 rounded-lg transition-colors duration-150 font-heading font-medium cursor-pointer"
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="mt-4 mx-4 px-5 py-3 bg-gold text-navy-dark font-heading font-semibold text-center rounded-lg cursor-pointer"
                  >
                    Get in Touch
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>

      {/* Gradient line at bottom */}
      <div
        className={`animated-gradient-line transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </header>
  );
}
