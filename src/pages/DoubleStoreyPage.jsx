// DoubleStoreyPage.jsx
import { Link } from "react-router-dom";
import { SiteLayout } from "../components/SiteLayout";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { useEffect } from "react";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function DoubleStoreyPage() {
  useReveal();

  return (
    <SiteLayout>
      {/* HERO — Taller, more vertical energy */}
      <section className="relative h-[100dvh] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop" 
          alt="Double storey home" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-10 pb-16 pt-32">
          <p className="reveal text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-4">Home Designs / Double Storey</p>
          <h1 className="reveal text-[clamp(56px,9vw,120px)] font-semibold text-white leading-[0.85] tracking-tight max-w-2xl">
            Go higher.
          </h1>
          <p className="reveal text-[15px] text-white/50 max-w-md mt-6 leading-relaxed">
            Double storey homes across Perth's southern suburbs. From $390,000. Maximise your block, not your budget.
          </p>
          <div className="reveal flex flex-wrap gap-3 mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#D4A017] text-black px-6 py-3 text-[13px] font-semibold hover:bg-white transition-colors">
              Get a Free Quote <ArrowRight size={14} />
            </Link>
            <a href="tel:+61444535933" className="inline-flex items-center gap-2 text-white/60 text-[13px] font-medium hover:text-white transition-colors">
              <Phone size={14} /> +61 444 535 933
            </a>
          </div>
        </div>
      </section>

      {/* FULL WIDTH — The Elevated (left text) */}
      <section className="relative h-[85vh] bg-black overflow-hidden">
        <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1600&auto=format&fit=crop" alt="The Elevated" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal max-w-lg">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-2">The Elevated</p>
            <h2 className="text-[40px] sm:text-[56px] font-semibold text-white leading-tight mb-3">4 beds. 2 baths. 280m².</h2>
            <p className="text-[15px] text-white/40 mb-2">From $450,000. Master suite upstairs, living down. The classic split.</p>
            <p className="text-[12px] text-white/30 uppercase tracking-wider">View floor plan →</p>
          </div>
        </div>
      </section>

      {/* FULL WIDTH — The Grand (right text, different gradient) */}
      <section className="relative h-[85vh] bg-black overflow-hidden">
        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop" alt="The Grand" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent" />
        <div className="relative z-10 h-full flex items-center justify-end max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal max-w-lg text-right">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-2">The Grand</p>
            <h2 className="text-[40px] sm:text-[56px] font-semibold text-white leading-tight mb-3">5 beds. 3 baths. 350m².</h2>
            <p className="text-[15px] text-white/40 mb-2">From $580,000. Home theatre, activity room, walk-in wardrobes. Prestige living.</p>
            <p className="text-[12px] text-white/30 uppercase tracking-wider">View floor plan →</p>
          </div>
        </div>
      </section>

      {/* ENGINEERING — Image + text, stacked vertically */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" alt="Engineering" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="reveal">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-4">Built Right</p>
              <h2 className="text-[28px] sm:text-[36px] font-semibold text-black leading-tight mb-6">
                Engineered for WA soil, wind, and weather.
              </h2>
              <p className="text-[15px] text-black/50 leading-relaxed mb-4">
                Reactive clay, sand, or fill — we test and design for your specific ground conditions. Wind ratings, structural requirements, and sloping block solutions. Licensed engineers on every project.
              </p>
              <p className="text-[15px] text-black/50 leading-relaxed">
                Every double storey home we build meets or exceeds the National Construction Code and WA building standards. Regular quality inspections throughout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUSIONS — Black background, simple list */}
      <section className="py-24 sm:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="reveal">
              <h2 className="text-[28px] sm:text-[36px] font-semibold text-white leading-tight mb-4">
                Quality inclusions as standard.
              </h2>
              <p className="text-[15px] text-white/40">Not upgrades. Not extras. Included.</p>
            </div>
            <div className="reveal space-y-4">
              {[
                "Quality floor tiles and carpet throughout",
                "Stone benchtops in kitchen and bathrooms",
                "Stainless steel appliances",
                "Ducted reverse cycle air conditioning",
                "LED lighting throughout",
                "Full landscaping packages available",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="w-1.5 h-1.5 bg-[#D4A017]" />
                  <span className="text-[14px] text-white/60">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Mustard, with cross-link to single storey */}
      <section className="py-24 sm:py-32 bg-[#D4A017]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center reveal">
          <h2 className="text-[32px] sm:text-[44px] font-semibold text-black leading-tight mb-6">
            Ready to maximise your block?
          </h2>
          <p className="text-[15px] text-black/50 mb-8">Free design consultation. Quote within 48 hours.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 text-[14px] font-semibold hover:bg-white hover:text-black transition-colors">
              Get Your Quote <ArrowRight size={16} />
            </Link>
            <Link to="/single-storey-homes" className="inline-flex items-center justify-center gap-2 border-2 border-black text-black px-8 py-4 text-[14px] font-medium hover:bg-black hover:text-white transition-all">
              Explore Single Storey <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}