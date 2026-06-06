import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/single-storey-homes", label: "Single Storey" },
  { to: "/double-storey-homes", label: "Double Storey" },
  { to: "/home-designs", label: "Home Designs" },
  { to: "/building-approvals", label: "Approvals" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/contact", label: "Contact" },
];

const serviceLinks = [
  { to: "/single-storey-homes", label: "Single Storey Homes" },
  { to: "/double-storey-homes", label: "Double Storey Homes" },
  { to: "/home-designs", label: "1–4 Bedroom Designs" },
  { to: "/contact", label: "Custom Design" },
  { to: "/building-approvals", label: "Building Approvals" },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#D4A017]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand — 4 columns */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-semibold text-white tracking-tight">JKWA</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold ml-2">Development</span>
            </Link>
            <p className="mt-4 text-sm text-white/40 leading-relaxed max-w-xs">
              A locally operated Western Australian home builder delivering quality residential homes across Perth's southern suburbs.
            </p>
            <div className="mt-6 space-y-3">
              <a href="tel:08XXXXXXXX" className="flex items-center gap-3 text-sm text-white/40 hover:text-[#D4A017] transition-colors">
                <Phone size={14} className="text-[#D4A017]" />
                +61 444 535 933
              </a>
              <a href="mailto:jkwadevelop@gmail.com" className="flex items-center gap-3 text-sm text-white/40 hover:text-[#D4A017] transition-colors">
                <Mail size={14} className="text-[#D4A017]" />
                jkwadevelop@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/40">
                <MapPin size={14} className="text-[#D4A017] mt-0.5 shrink-0" />
                <span>Perth, Western Australia</span>
              </div>
            </div>
          </div>

          {/* Navigation — 3 columns */}
          <div className="lg:col-span-3 lg:pl-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-6">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — 3 columns */}
          <div className="lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-6">Services</p>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA — 2 columns */}
          <div className="lg:col-span-2 lg:text-right">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-6">Get Started</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-[#D4A017] text-black px-5 py-3 text-[12px] font-semibold hover:bg-white transition-colors duration-200"
            >
              Free Quote
              <ArrowRight size={14} />
            </Link>
            <p className="mt-4 text-[11px] text-white/20">
              Free consultation.<br />No obligation.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/20">
            © 2025 JK WA Development. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-[11px] text-white/20 hover:text-[#D4A017] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-[11px] text-white/20 hover:text-[#D4A017] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
