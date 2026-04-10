import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#060a14] text-[#9CA3AF] border-t border-[#1F2937]">
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 bg-[#E8A020] flex items-center justify-center">
                <span className="font-heading text-[#0A0F1A] text-[14px] leading-none">
                  A
                </span>
              </div>
              <span className="text-white text-[14px] font-semibold">
                Allum Engineering
              </span>
            </div>
            <p className="text-[13px] leading-[1.65]">
              Engineering solutions for the world&apos;s most demanding
              industries since 1973.
            </p>
          </div>

          <div>
            <h4 className="text-white text-[12px] font-semibold uppercase tracking-[0.1em] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              {[
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/projects" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="hover:text-[#E8A020] transition-colors cursor-pointer"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[12px] font-semibold uppercase tracking-[0.1em] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              {[
                "Structural Analysis",
                "Mechanical Design",
                "Naval Architecture",
                "Cable Handling",
                "Lifting Systems",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="hover:text-[#E8A020] transition-colors cursor-pointer"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[12px] font-semibold uppercase tracking-[0.1em] mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>Hinderveien 5</li>
              <li>3223 Sandefjord, Norway</li>
              <li className="pt-1">
                <a
                  href="tel:+4733427170"
                  className="hover:text-[#E8A020] transition-colors cursor-pointer"
                >
                  +47 33 42 71 70
                </a>
              </li>
              <li>
                <a
                  href="mailto:post@allum.no"
                  className="hover:text-[#E8A020] transition-colors cursor-pointer"
                >
                  post@allum.no
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#1F2937] flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px]">
          <p>&copy; {new Date().getFullYear()} Allum Engineering AS</p>
          <p className="font-mono text-[11px]">ISO 9001 Certified</p>
        </div>
      </div>
    </footer>
  );
}
