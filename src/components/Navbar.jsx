import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const serviceLinks = [
  { to: "/single-storey-homes", label: "Single Storey" },
  { to: "/double-storey-homes", label: "Double Storey" },
  { to: "/home-designs", label: "Home Designs" },
  { to: "/building-approvals", label: "Building Approvals" },
  { to: "/why-choose-us", label: "Why Choose Us" },
];

const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isServicePage = serviceLinks.some((l) => l.to === location.pathname);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap');

        .nb, .nb * { font-family: 'Barlow', sans-serif; box-sizing: border-box; }

        /* ── Header ── */
        .nb-header {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 50;
          height: 72px;
          background: #1a1a18;
          display: flex;
          align-items: center;
        }

        .nb-inner {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ── Left section (Logo) ── */
        .nb-left {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          width: 200px;
        }

        .nb-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .nb-logo-name {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #D4A017;
        }
        .nb-logo-sep {
          width: 1px;
          height: 20px;
          background: rgba(255,255,255,0.2);
        }
        .nb-logo-sub {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }

        /* ── Center section (Nav) ── */
        .nb-center {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
        }

        .nb-nav {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nb-item {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0 24px;
          height: 72px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.18s;
          white-space: nowrap;
        }
        .nb-item:hover { color: #fff; }
        .nb-item.active {
          color: #D4A017;
        }
        /* gold underline on active */
        .nb-item.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 24px;
          right: 24px;
          height: 2px;
          background: #D4A017;
        }

        /* chevron */
        .nb-chevron {
          width: 14px;
          height: 14px;
          opacity: 0.6;
          transition: transform 0.2s;
          flex-shrink: 0;
        }
        .nb-item.active .nb-chevron,
        .nb-item:hover .nb-chevron { opacity: 1; }
        .nb-chevron.open { transform: rotate(180deg); }

        /* ── Dropdown ── */
        .nb-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          min-width: 220px;
          background: #1e1e1c;
          border: 1px solid rgba(255,255,255,0.07);
          border-top: 2px solid #D4A017;
          box-shadow: 0 12px 32px rgba(0,0,0,0.5);
          padding: 6px 0;
        }
        .nb-dd-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.15s, background 0.15s;
        }
        .nb-dd-item:hover {
          color: #D4A017;
          background: rgba(212,160,23,0.06);
        }
        .nb-dd-item.active { color: #D4A017; }

        /* ── Right section (CTA + Hamburger) ── */
        .nb-right {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
          width: 200px;
          justify-content: flex-end;
        }

        /* ── Enquire button ── */
        .nb-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #000;
          background: #D4A017;
          text-decoration: none;
          transition: background 0.18s;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .nb-cta:hover { background: #e0b828; }

        /* ── Hamburger ── */
        .nb-hb {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          flex-shrink: 0;
        }
        .nb-hb-line {
          display: block;
          width: 100%;
          height: 1.5px;
          background: rgba(255,255,255,0.7);
          border-radius: 1px;
          transition: transform 0.25s ease, opacity 0.2s, background 0.2s;
          transform-origin: center;
        }
        .nb-hb:hover .nb-hb-line { background: #D4A017; }
        .nb-hb.open .nb-hb-line:nth-child(1) { transform: translateY(6.5px) rotate(45deg); background: #D4A017; }
        .nb-hb.open .nb-hb-line:nth-child(2) { opacity: 0; }
        .nb-hb.open .nb-hb-line:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); background: #D4A017; }

        @media (max-width: 767px) {
          .nb-inner { padding: 0 20px; }
          .nb-center { display: none; }
          .nb-cta { display: none; }
          .nb-hb { display: flex; }
          .nb-left { width: auto; }
          .nb-right { width: auto; }
        }

        /* ── Mobile overlay ── */
        .nb-overlay {
          position: fixed;
          inset: 0;
          z-index: 40;
          background: #1a1a18;
          display: flex;
          flex-direction: column;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .nb-overlay.closed {
          opacity: 0;
          transform: translateY(-6px);
          pointer-events: none;
        }

        .nb-overlay-top {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
        }

        .nb-overlay-body {
          flex: 1;
          overflow-y: auto;
          padding: 28px 20px 40px;
          display: flex;
          flex-direction: column;
        }

        /* mobile main links */
        .nb-m-link {
          display: block;
          padding: 16px 0;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: color 0.18s;
        }
        .nb-m-link:hover { color: #fff; }
        .nb-m-link.active { color: #D4A017; }

        /* mobile services toggle */
        .nb-m-svc-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 16px 0;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          background: none;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          cursor: pointer;
          transition: color 0.18s;
        }
        .nb-m-svc-btn:hover,
        .nb-m-svc-btn.active { color: #D4A017; }

        .nb-m-svc-links {
          overflow: hidden;
          transition: max-height 0.3s ease, opacity 0.25s ease;
        }

        .nb-m-svc-link {
          display: block;
          padding: 12px 0 12px 16px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: color 0.18s;
        }
        .nb-m-svc-link:hover { color: rgba(255,255,255,0.8); }
        .nb-m-svc-link.active { color: #D4A017; }

        .nb-m-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 32px;
          padding: 14px 28px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #000;
          background: #D4A017;
          text-decoration: none;
          align-self: flex-start;
          transition: background 0.18s;
        }
        .nb-m-cta:hover { background: #e0b828; }
      `}</style>

      <div className="nb">
        {/* ── Header ── */}
        <header className="nb-header">
          <div className="nb-inner">

            {/* Left: Logo */}
            <div className="nb-left">
              <Link to="/" className="nb-logo">
                <span className="nb-logo-name">JKWA</span>
                <span className="nb-logo-sep" />
                <span className="nb-logo-sub">Development</span>
              </Link>
            </div>

            {/* Center: Desktop nav */}
            <div className="nb-center">
              <nav className="nb-nav">
                <Link to="/" className={`nb-item ${location.pathname === "/" ? "active" : ""}`}>
                  Home
                </Link>

                <div style={{ position: "relative" }} ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    className={`nb-item ${isServicePage || servicesOpen ? "active" : ""}`}
                  >
                    Services
                    <ChevronDown size={14} className={`nb-chevron ${servicesOpen ? "open" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="nb-dropdown">
                      {serviceLinks.map((l) => (
                        <Link
                          key={l.to}
                          to={l.to}
                          className={`nb-dd-item ${location.pathname === l.to ? "active" : ""}`}
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link to="/about" className={`nb-item ${location.pathname === "/about" ? "active" : ""}`}>
                  About
                </Link>
                <Link to="/contact" className={`nb-item ${location.pathname === "/contact" ? "active" : ""}`}>
                  Contact
                </Link>
              </nav>
            </div>

            {/* Right: CTA + Hamburger */}
            <div className="nb-right">
              <Link to="/contact" className="nb-cta">
                Enquire
              </Link>

              <button
                aria-label="Toggle menu"
                className={`nb-hb ${open ? "open" : ""}`}
                onClick={() => setOpen((v) => !v)}
              >
                <span className="nb-hb-line" />
                <span className="nb-hb-line" />
                <span className="nb-hb-line" />
              </button>
            </div>
          </div>
        </header>

        {/* ── Mobile overlay ── */}
        <div className={`nb nb-overlay ${open ? "" : "closed"}`}>
          {/* Top bar */}
          <div className="nb-overlay-top">
            <Link to="/" className="nb-logo" onClick={() => setOpen(false)}>
              <span className="nb-logo-name">JKWA</span>
              <span className="nb-logo-sep" />
              <span className="nb-logo-sub">Development</span>
            </Link>
            <button
              aria-label="Close menu"
              className={`nb-hb open`}
              onClick={() => setOpen(false)}
            >
              <span className="nb-hb-line" />
              <span className="nb-hb-line" />
              <span className="nb-hb-line" />
            </button>
          </div>

          {/* Body */}
          <div className="nb-overlay-body">
            {/* Main links */}
            {mainLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`nb-m-link ${location.pathname === l.to ? "active" : ""}`}
              >
                {l.label}
              </Link>
            ))}

            {/* Services collapsible */}
            <button
              className={`nb-m-svc-btn ${isServicePage ? "active" : ""}`}
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              Services
              {mobileServicesOpen
                ? <ChevronUp size={14} color="currentColor" />
                : <ChevronDown size={14} color="currentColor" />}
            </button>

            <div
              className="nb-m-svc-links"
              style={{
                maxHeight: mobileServicesOpen ? 300 : 0,
                opacity: mobileServicesOpen ? 1 : 0,
              }}
            >
              {serviceLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`nb-m-svc-link ${location.pathname === l.to ? "active" : ""}`}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link to="/contact" className="nb-m-cta">
              Enquire <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}