"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0c1e3f] text-white/40">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 bg-[#b8953f] rounded-sm flex items-center justify-center">
                <span className="font-heading font-bold text-[#0c1e3f] text-xs leading-none">
                  A
                </span>
              </div>
              <span className="font-heading font-semibold text-white text-[14px]">
                Allum Engineering
              </span>
            </div>
            <p className="text-[13px] leading-[1.65]">
              Innovative engineering done with passion. Trusted partner since
              1973.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white text-[13px] font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {["About", "Markets", "Services", "Products", "News"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-[13px] hover:text-white transition-colors cursor-pointer"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-[13px] font-semibold mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {[
                "Turntable Systems",
                "Compact Flotation Units",
                "Handling Cranes",
                "Zero Emission Boats",
                "Cable Handling",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="text-[13px] hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-[13px] font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>Hinderveien 5</li>
              <li>3223 Sandefjord, Norway</li>
              <li className="pt-2">
                <a
                  href="tel:+4733473350"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  +47 33 47 33 50
                </a>
              </li>
              <li>
                <a
                  href="mailto:post@allum.no"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  post@allum.no
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px]">
            &copy; {new Date().getFullYear()} Allum Engineering AS
          </p>
          <p className="text-[12px]">ISO 9001 Certified Quality Management</p>
        </div>
      </div>
    </footer>
  );
}
