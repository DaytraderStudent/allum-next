"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] text-white/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="text-white text-[20px] font-light tracking-[0.04em]">
              allum
            </span>
            <p className="mt-4 text-[14px] leading-[1.65]">
              Allum Engineering AS
              <br />
              Hinderveien 5
              <br />
              3223 Sandefjord, Norway
            </p>
          </div>

          <div>
            <h4 className="text-white/50 text-[12px] font-semibold uppercase tracking-[0.1em] mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {["About", "Services", "Projects", "Products", "Dashboard"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-[14px] hover:text-white transition-colors cursor-pointer"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white/50 text-[12px] font-semibold uppercase tracking-[0.1em] mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-[14px]">
              <li>
                <a
                  href="mailto:post@allum.no"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  post@allum.no
                </a>
              </li>
              <li>
                <a
                  href="tel:+4733473350"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  +47 33 47 33 50
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/50 text-[12px] font-semibold uppercase tracking-[0.1em] mb-4">
              Certifications
            </h4>
            <p className="text-[14px]">ISO 9001 Quality Management</p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.06] text-[12px]">
          &copy; {new Date().getFullYear()} Allum Engineering AS. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
