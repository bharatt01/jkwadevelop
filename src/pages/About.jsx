import { Link } from "react-router-dom";
import { SiteLayout } from "../components/SiteLayout";
import { ArrowRight, ArrowUpRight, Phone, MapPin, Shield, CheckCircle, Users, HardHat } from "lucide-react";
import { useEffect } from "react";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const serviceAreas = [
  "Rockingham", "Cockburn", "Kwinana", "Mandurah",
  "Baldivis", "Wellard", "Lakelands", "Secret Harbour",
  "Golden Bay", "Byford", "Serpentine Jarrahdale"
];

const commitments = [
  {
    icon: HardHat,
    title: "Quality",
    body: "Quality materials, licensed tradespeople, and regular inspections throughout your build."
  },
  {
    icon: CheckCircle,
    title: "Transparency",
    body: "Clear, all-inclusive pricing with no hidden surprises. What we quote is what you pay."
  },
  {
    icon: Users,
    title: "Communication",
    body: "Kept informed and involved at every stage. It's your home — you deserve to know exactly what's happening."
  }
];

const approvals = [
  "Council approvals",
  "Building permits",
  "Development applications",
  "BAL assessments",
  "Title requirements"
];

export default function AboutPage() {
  useReveal();

  return (
    <SiteLayout>
      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-end bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
          alt="JK WA Development home build"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24 pt-32 sm:pt-40">
          <div className="max-w-3xl">
            <p className="reveal text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4A017] mb-4 sm:mb-6 font-bold">
              About Us
            </p>
            <h1 className="reveal text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 sm:mb-6">
              A Local Builder With{" "}
              <span className="text-[#D4A017]">Real Pride</span>{" "}
              In Every Home.
            </h1>
            <p className="reveal text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-xl mb-6 sm:mb-8">
              JK WA Development is a proud Western Australian home builder delivering quality residential homes across Perth's southern suburbs. Not a franchise — just genuine personal attention.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHO WE ARE
          ═══════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4A017] mb-3 font-bold">
                Who We Are
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight mb-6">
                Locally Based. <br/>
                <span className="text-[#D4A017]">Genuinely Personal.</span>
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-black/70 leading-relaxed">
                <p>
                  From the moment you first speak with our team to the day we hand over your keys, we are committed to making your home building journey as smooth, transparent, and exciting as possible.
                </p>
                <p>
                  We are a locally based builder — not a large franchise — which means every client receives genuine personal attention and a home built with real pride and care.
                </p>
              </div>
            </div>
            <div className="reveal relative">
              <div className="aspect-[4/3] bg-black overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
                  alt="Modern home interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-[#D4A017] p-4 sm:p-6">
                <p className="text-3xl sm:text-4xl font-black text-black">15+</p>
                <p className="text-[10px] uppercase tracking-wider text-black/60 font-bold mt-1">Years Building</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHAT WE BUILD
          ═══════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 reveal">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4A017] mb-2 font-bold">
              What We Build
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              From Starter Homes To Prestige Residences.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { title: "Single Storey", desc: "For families, couples, and first home buyers. Practical designs that maximise every block." },
              { title: "Double Storey", desc: "Maximise your block with spacious modern homes. Extra bedrooms, better views, more value." },
              { title: "1–4 Bedrooms", desc: "Compact 1-bedroom designs through to spacious 4-bedroom family residences. Every lifestyle covered." },
              { title: "Custom Design", desc: "Tailored to your unique vision and requirements. Your block, your lifestyle, your dream." },
            ].map((item, i) => (
              <div
                key={item.title}
                className="reveal group border border-white/10 p-6 sm:p-8 hover:border-[#D4A017] transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="text-[#D4A017] text-xs uppercase tracking-[0.2em] font-bold mb-4">0{i + 1}</p>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#D4A017] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICE AREA
          ═══════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="reveal">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4A017] mb-3 font-bold">
                Service Area
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight mb-6">
                Building Across <br/>
                <span className="text-[#D4A017]">Perth's Southern Corridor.</span>
              </h2>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-8">
                We have extensive experience working with local councils, land developers, and estate guidelines throughout Perth's southern suburbs and surrounding areas.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 text-xs uppercase tracking-wider font-bold hover:bg-[#D4A017] hover:text-black transition-colors duration-200"
              >
                Check Your Area
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="reveal">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {serviceAreas.map((suburb) => (
                  <div
                    key={suburb}
                    className="flex items-center gap-2 p-3 border border-black/10 hover:border-[#D4A017] hover:bg-[#D4A017]/5 transition-all duration-200"
                  >
                    <MapPin size={14} className="text-[#D4A017] shrink-0" />
                    <span className="text-sm font-bold text-black">{suburb}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FULL APPROVALS
          ═══════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#D4A017]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal">
              <div className="w-14 h-14 border-2 border-black flex items-center justify-center mb-6">
                <Shield size={24} className="text-black" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight mb-6">
                We Handle All The Red Tape.
              </h2>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-8">
                The approvals process is one of the most stressful parts of building a new home. That's why we take full responsibility for managing everything on your behalf.
              </p>
              <div className="space-y-3">
                {approvals.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-black shrink-0" />
                    <span className="text-sm font-bold text-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal bg-black p-8 sm:p-12">
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                "We understand that the approvals process can be one of the most stressful and confusing parts of building a new home. That's why JK WA Development takes full responsibility for managing all council approvals, building permits, development applications, BAL assessments, and title requirements on your behalf."
              </p>
              <p className="text-[#D4A017] text-xs uppercase tracking-wider font-bold">
                — JK WA Development Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          OUR COMMITMENT
          ═══════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 reveal">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4A017] mb-2 font-bold">
              Our Commitment
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Three Things Above All Else.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {commitments.map((item, i) => (
              <div
                key={item.title}
                className="reveal group border border-white/10 p-6 sm:p-10 hover:border-[#D4A017] transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 bg-[#D4A017] flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
                  <item.icon size={22} className="text-black group-hover:text-black transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
          ═══════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center reveal">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4A017] mb-4 sm:mb-6 font-bold">
            Let's Build Your Dream Home
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6">
            Ready To Start Planning?
          </h2>
          <p className="text-sm sm:text-base text-black/60 max-w-xl mx-auto mb-8 sm:mb-10">
            Contact the JK WA Development team today for a free, no-obligation consultation and quote. Let's turn your vision into the home you've always wanted.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#D4A017] text-black px-6 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-wider font-bold hover:bg-black hover:text-white transition-colors duration-200"
            >
              Get Free Quote
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:08XXXXXXXX"
              className="inline-flex items-center justify-center gap-2 border-2 border-black text-black px-6 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-wider font-bold hover:bg-black hover:text-white transition-all duration-200"
            >
              <Phone size={16} />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
