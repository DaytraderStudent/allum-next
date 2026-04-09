"use client";

import { Anchor } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Markets", href: "#markets" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "News", href: "#news" },
  ],
  Products: [
    { label: "Cable Handling", href: "#products" },
    { label: "Turntable Systems", href: "#products" },
    { label: "Compact Flotation Units", href: "#products" },
    { label: "Handling Cranes", href: "#products" },
    { label: "Zero Emission Vessels", href: "#products" },
  ],
  Contact: [
    { label: "Get in Touch", href: "#contact" },
    { label: "Sandefjord, Norway", href: "#contact" },
    { label: "+47 33 47 33 50", href: "tel:+4733473350" },
    { label: "post@allum.no", href: "mailto:post@allum.no" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center font-heading font-bold text-navy-dark text-lg">
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
            <p className="mt-6 text-white/30 text-sm leading-relaxed max-w-sm">
              Innovative engineering done with passion. Trusted partner in
              marine, energy and process industries since 1973.
            </p>
            <div className="mt-6 flex items-center gap-2 text-white/20 text-xs">
              <Anchor className="w-3 h-3" />
              ISO 9001 Certified
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-white text-sm mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/30 text-sm hover:text-gold transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} Allum Engineering AS. All rights
            reserved.
          </p>
          <p className="text-white/10 text-xs">
            Hinderveien 5, 3223 Sandefjord, Norway
          </p>
        </div>
      </div>
    </footer>
  );
}
