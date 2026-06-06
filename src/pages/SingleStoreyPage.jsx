// SingleStoreyPage.jsx
import { Link } from "react-router-dom";
import { SiteLayout } from "../components/SiteLayout";
import { ArrowRight, Phone } from "lucide-react";
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

const designs = [
  { name: "The Coastal", beds: 3, baths: 2, sqft: "180m²", price: "From $320,000", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
  { name: "The Family", beds: 4, baths: 2, sqft: "220m²", price: "From $380,000", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop" },
  { name: "The Entertainer", beds: 4, baths: 2, sqft: "250m²", price: "From $420,000", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop" },
  { name: "The Compact", beds: 3, baths: 1, sqft: "150m²", price: "From $280,000", image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=800&auto=format&fit=crop" },
];

export default function SingleStoreyPage() {
  useReveal();

  return (
    <SiteLayout>
      {/* HERO — Full screen image, minimal text overlay */}
      <section className="relative h-[100dvh] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
          alt="Single storey home" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 h-full flex flex-col justify-between max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <div className="reveal">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium">Home Designs</p>
          </div>
          
          <div className="max-w-2xl">
            <h1 className="reveal text-[56px] sm:text-[80px] md:text-[100px] font-semibold text-white leading-[0.9] tracking-tight mb-6">
              Single<br />Storey
            </h1>
            <p className="reveal text-[16px] text-white/60 leading-relaxed max-w-md mb-8">
              Smart, practical homes for families across Perth's southern suburbs. Built for the WA lifestyle.
            </p>
            <div className="reveal flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#D4A017] text-black px-6 py-3 text-[14px] font-semibold hover:bg-white transition-colors">
                Get a Free Quote <ArrowRight size={15} />
              </Link>
              <a href="tel:08XXXXXXXX" className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 text-[14px] font-medium hover:bg-white/10 transition-colors">
                <Phone size={15} /> 08 XX XX XX
              </a>
            </div>
          </div>
          
          <div className="reveal">
            <p className="text-[11px] text-white/30 uppercase tracking-wider">Scroll to explore</p>
          </div>
        </div>
      </section>

      {/* INTRO — Why single storey */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="reveal">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-4">Why Single Storey</p>
              <h2 className="text-[36px] sm:text-[48px] font-semibold text-black leading-[1.05] tracking-tight">
                The most popular choice for WA families.
              </h2>
            </div>
            <div className="reveal space-y-6">
              <p className="text-[16px] text-black/50 leading-relaxed">
                Single storey homes offer ease of accessibility for all ages, lower construction costs compared to double storey builds, easier maintenance, and better suitability for standard-sized blocks. Whether you're a first home buyer or a family looking for a forever home, a single storey design delivers outstanding value.
              </p>
              <p className="text-[16px] text-black/50 leading-relaxed">
                Every home is designed with open-plan living in mind, maximising natural light and indoor-outdoor flow — perfect for Perth's sunny lifestyle. We work closely with you to customise floor plans to suit your specific block dimensions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN CARDS — Large, image-forward */}
      <section className="py-24 sm:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-2">Our Range</p>
            <h2 className="text-[32px] sm:text-[40px] font-semibold text-white leading-tight">Floor plans for every block & budget.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {designs.map((d, i) => (
              <div key={d.name} className="reveal group relative bg-white/5 border border-white/10 hover:border-[#D4A017] transition-all duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={d.image} alt={d.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-[20px] font-semibold text-white group-hover:text-[#D4A017] transition-colors">{d.name}</h3>
                    <span className="text-[13px] text-[#D4A017] font-medium">{d.price}</span>
                  </div>
                  <p className="text-[13px] text-white/40 mb-4">{d.beds} Bed · {d.baths} Bath · {d.sqft}</p>
                  <p className="text-[11px] text-white/20 uppercase tracking-wider group-hover:text-white/40 transition-colors">View floor plan →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROVALS + CTA — Combined, clean */}
      <section className="py-24 sm:py-32 bg-[#D4A017]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-[32px] sm:text-[40px] font-semibold text-black leading-[1.05] tracking-tight mb-6">
                We handle all approvals.
              </h2>
              <p className="text-[16px] text-black/50 leading-relaxed mb-6">
                Council approvals, building permits, BAL assessments, title requirements — managed on your behalf. We liaise with City of Rockingham, Cockburn, Kwinana and Shire of Murray so you don't have to.
              </p>
              <div className="space-y-2 mb-8">
                {["Building Permit", "Development Approval", "BAL Assessment", "Occupancy Permit"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-black" />
                    <span className="text-[13px] text-black/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal bg-black p-8 sm:p-12">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-4">Get Started</p>
              <h3 className="text-[24px] font-semibold text-white mb-4">Ready to build your single storey home?</h3>
              <p className="text-[14px] text-white/40 mb-6">Free consultation. No obligation. Quote within 48 hours.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#D4A017] text-black px-6 py-3 text-[14px] font-semibold hover:bg-white transition-colors w-full justify-center">
                Get Your Free Quote <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}