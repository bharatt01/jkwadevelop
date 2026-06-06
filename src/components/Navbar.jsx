import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const mainLinks = [
  { to: "/", label: "Homee" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const serviceLinks = [
  { to: "/single-storey-homes", label: "Single Storey Homes" },
  { to: "/double-storey-homes", label: "Double Storey Homes" },
  { to: "/home-designs", label: "Home Designs" },
  { to: "/building-approvals", label: "Building Approvals" },
  { to: "/why-choose-us", label: "Why Choose Us" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isServicePage = serviceLinks.some((l) => l.to === location.pathname);

  return (
    <header 
      className="fixed inset-x-0 top-0 z-50 bg-neutral-900 border-b border-neutral-700"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <span className="font-display text-2xl tracking-tight text-amber-400">JKWA</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-neutral-400 border-l border-neutral-600 pl-3">
            Development
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {/* Home */}
          <NavLink to="/" label="Home" active={location.pathname === "/"} />
          
          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`relative flex items-center gap-1.5 text-sm uppercase tracking-[0.18em] transition-colors group ${
                isServicePage || servicesOpen ? "text-amber-400" : "text-neutral-200 hover:text-amber-400"
              }`}
            >
              Services
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
              <span
                className={`pointer-events-none absolute left-0 -bottom-2 h-px bg-amber-400 transition-all duration-300 ${
                  isServicePage ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-neutral-900 border border-neutral-700 shadow-2xl">
                <div className="py-2">
                  {serviceLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className={`block px-5 py-3 text-xs uppercase tracking-[0.15em] transition-colors ${
                        location.pathname === l.to
                          ? "text-amber-400 bg-white/5"
                          : "text-neutral-300 hover:text-amber-400 hover:bg-white/5"
                      }`}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* About */}
          <NavLink to="/about" label="About" active={location.pathname === "/about"} />
          
          {/* Contact */}
          <NavLink to="/contact" label="Contact" active={location.pathname === "/contact"} />
        </nav>

        {/* Enquire Button */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center bg-amber-400 text-neutral-900 px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-amber-300 transition-colors"
        >
          Enquire
        </Link>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-neutral-200"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-neutral-900 border-t border-neutral-700">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {/* Main links */}
            {mainLinks.map((l) => (
              <MobileNavLink 
                key={l.to} 
                to={l.to} 
                label={l.label} 
                active={location.pathname === l.to} 
              />
            ))}
            
            {/* Services section */}
            <div className="pt-2 border-t border-neutral-700">
              <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold mb-3">
                Services
              </p>
              {serviceLinks.map((l) => (
                <MobileNavLink 
                  key={l.to} 
                  to={l.to} 
                  label={l.label} 
                  active={location.pathname === l.to}
                  className="text-xs text-neutral-400 py-2"
                />
              ))}
            </div>
            
            <Link
              to="/contact"
              className="mt-2 inline-flex w-fit bg-amber-400 text-neutral-900 px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium"
            >
              Enquire
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

// Desktop nav link with underline
function NavLink({ to, label, active }) {
  return (
    <Link
      to={to}
      className={`relative text-sm uppercase tracking-[0.18em] transition-colors group ${
        active ? "text-amber-400" : "text-neutral-200 hover:text-amber-400"
      }`}
    >
      {label}
      <span
        className={`pointer-events-none absolute left-0 -bottom-2 h-px bg-amber-400 transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

// Mobile nav link
function MobileNavLink({ to, label, active, className = "" }) {
  return (
    <Link
      to={to}
      className={`text-sm uppercase tracking-[0.18em] transition-colors ${
        active ? "text-amber-400" : "text-neutral-200"
      } ${className}`}
    >
      {label}
    </Link>
  );
}
