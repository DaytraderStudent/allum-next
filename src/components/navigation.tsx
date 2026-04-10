"use client";

import { useState, useEffect } from "react";
import {
  Cable,
  Ship,
  Factory,
  Zap,
  Droplets,
  Ruler,
  Wrench,
  Anchor,
  Menu,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const marketItems = [
  {
    title: "Cable Equipment",
    description: "Turntables, carousels & cable laying systems",
    icon: <Cable className="size-5 shrink-0 text-[#b8953f]" />,
    url: "#markets",
  },
  {
    title: "Maritime",
    description: "Ship modifications & naval architecture",
    icon: <Ship className="size-5 shrink-0 text-[#b8953f]" />,
    url: "#markets",
  },
  {
    title: "Process Industry",
    description: "Purpose-built equipment & plant layout",
    icon: <Factory className="size-5 shrink-0 text-[#b8953f]" />,
    url: "#markets",
  },
  {
    title: "Energy",
    description: "Offshore modifications & structural work",
    icon: <Zap className="size-5 shrink-0 text-[#b8953f]" />,
    url: "#markets",
  },
  {
    title: "Water Treatment",
    description: "Patented CFU flotation technology",
    icon: <Droplets className="size-5 shrink-0 text-[#b8953f]" />,
    url: "#markets",
  },
];

const serviceItems = [
  {
    title: "Structural Analysis",
    description: "FEA and load-bearing design",
    icon: <Ruler className="size-5 shrink-0 text-[#b8953f]" />,
    url: "#services",
  },
  {
    title: "Mechanical Design",
    description: "Bespoke equipment engineering",
    icon: <Wrench className="size-5 shrink-0 text-[#b8953f]" />,
    url: "#services",
  },
  {
    title: "Naval Architecture",
    description: "Marine engineering & classification",
    icon: <Anchor className="size-5 shrink-0 text-[#b8953f]" />,
    url: "#services",
  },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f8f7f4]/90 backdrop-blur-lg shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#0c1e3f] rounded-sm flex items-center justify-center">
              <span className="font-heading font-bold text-white text-sm leading-none">
                A
              </span>
            </div>
            <span className="font-heading font-semibold text-[#0c1e3f] text-[15px] tracking-[-0.01em]">
              Allum Engineering
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <a
                  href="#about"
                  className="inline-flex h-9 items-center px-3.5 text-[13px] font-medium text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors cursor-pointer"
                >
                  About
                </a>

                <NavigationMenuItem className="text-[#6b6b6b]">
                  <NavigationMenuTrigger className="text-[13px] font-medium">
                    Markets
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[340px] p-2">
                      <NavigationMenuLink>
                        {marketItems.map((item) => (
                          <li key={item.title}>
                            <a
                              href={item.url}
                              className="flex gap-3 rounded-md p-3 text-sm leading-none no-underline transition-colors hover:bg-[#eceae4] cursor-pointer"
                            >
                              {item.icon}
                              <div>
                                <div className="text-[13px] font-semibold text-[#1a1a1a]">
                                  {item.title}
                                </div>
                                <p className="text-[12px] text-[#6b6b6b] mt-0.5 leading-snug">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          </li>
                        ))}
                      </NavigationMenuLink>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="text-[#6b6b6b]">
                  <NavigationMenuTrigger className="text-[13px] font-medium">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[300px] p-2">
                      <NavigationMenuLink>
                        {serviceItems.map((item) => (
                          <li key={item.title}>
                            <a
                              href={item.url}
                              className="flex gap-3 rounded-md p-3 text-sm leading-none no-underline transition-colors hover:bg-[#eceae4] cursor-pointer"
                            >
                              {item.icon}
                              <div>
                                <div className="text-[13px] font-semibold text-[#1a1a1a]">
                                  {item.title}
                                </div>
                                <p className="text-[12px] text-[#6b6b6b] mt-0.5 leading-snug">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          </li>
                        ))}
                      </NavigationMenuLink>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <a
                  href="#products"
                  className="inline-flex h-9 items-center px-3.5 text-[13px] font-medium text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors cursor-pointer"
                >
                  Products
                </a>

                <a
                  href="#news"
                  className="inline-flex h-9 items-center px-3.5 text-[13px] font-medium text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors cursor-pointer"
                >
                  News
                </a>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center h-9 px-5 bg-[#0c1e3f] text-white text-[13px] font-medium rounded-sm hover:bg-[#162d54] transition-colors cursor-pointer"
          >
            Contact Us
          </a>

          {/* Mobile */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="lg:hidden p-2 cursor-pointer">
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent className="overflow-y-auto bg-[#f8f7f4]">
              <div className="my-6 flex flex-col gap-4">
                <a
                  href="#about"
                  onClick={() => setMobileOpen(false)}
                  className="font-semibold text-[15px] text-[#1a1a1a] py-2 cursor-pointer"
                >
                  About
                </a>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="markets" className="border-b-0">
                    <AccordionTrigger className="py-0 font-semibold text-[15px] hover:no-underline">
                      Markets
                    </AccordionTrigger>
                    <AccordionContent className="mt-2">
                      {marketItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.url}
                          onClick={() => setMobileOpen(false)}
                          className="flex gap-3 p-3 rounded-md hover:bg-[#eceae4] cursor-pointer"
                        >
                          {item.icon}
                          <div>
                            <div className="text-sm font-semibold">
                              {item.title}
                            </div>
                            <p className="text-xs text-[#6b6b6b]">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <a
                  href="#services"
                  onClick={() => setMobileOpen(false)}
                  className="font-semibold text-[15px] text-[#1a1a1a] py-2 cursor-pointer"
                >
                  Services
                </a>
                <a
                  href="#products"
                  onClick={() => setMobileOpen(false)}
                  className="font-semibold text-[15px] text-[#1a1a1a] py-2 cursor-pointer"
                >
                  Products
                </a>
                <a
                  href="#news"
                  onClick={() => setMobileOpen(false)}
                  className="font-semibold text-[15px] text-[#1a1a1a] py-2 cursor-pointer"
                >
                  News
                </a>
                <div className="mt-4 pt-4 border-t border-[#d6d3cc]">
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center h-11 bg-[#0c1e3f] text-white text-sm font-medium rounded-sm cursor-pointer"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
