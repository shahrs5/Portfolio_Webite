import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteConfig, navLinks } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);

    // If it's a hash link like /#about
    if (href.startsWith("/#")) {
      const hash = href.slice(1); // "#about"
      if (location.pathname === "/") {
        // Already on homepage, just scroll
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate home then scroll
        navigate("/" + hash);
      }
    } else {
      // Regular route like /projects
      navigate(href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b-4 border-black bg-neo-bg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="border-4 border-black bg-neo-accent px-4 py-2 font-black text-lg uppercase tracking-tight shadow-neo-sm transition-all duration-100 hover:-translate-y-0.5 hover:shadow-neo-md"
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="border-2 border-transparent px-3 py-2 text-sm font-bold uppercase tracking-wide transition-all duration-100 hover:border-black hover:bg-neo-secondary hover:shadow-neo-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/#contact"
          onClick={(e) => handleNavClick(e, "/#contact")}
          className="neo-btn-primary hidden md:inline-flex"
        >
          Get In Touch
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="border-4 border-black p-2 shadow-neo-sm transition-all duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none md:hidden"
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-6 w-6" strokeWidth={3} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={3} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t-4 border-black bg-neo-bg px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block border-4 border-black bg-white px-4 py-3 text-sm font-bold uppercase tracking-wide shadow-neo-sm transition-all duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="neo-btn-primary w-full"
              >
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
