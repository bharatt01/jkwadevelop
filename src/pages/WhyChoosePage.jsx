import { Link } from "react-router-dom";
import { SiteLayout } from "../components/SiteLayout";
import { ArrowRight, MapPin, CheckCircle, Users, HardHat, Shield } from "lucide-react";
import { useEffect, useState } from "react";

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

const reasons = [
  {
    icon: MapPin,
    title: "Local Knowledge, Local Expertise",
    desc: "JK WA Development is a locally operated WA builder with deep roots in Perth's southern suburbs. We understand the unique soil conditions, wind zones, council requirements, and estate design guidelines that apply across suburbs like Rockingham, Baldivis, Cockburn, Kwinana, Secret Harbour, and Mandurah. That local knowledge means fewer delays, fewer surprises, and a smoother build experience for you.",
    stat: "11",
    statLabel: "Suburbs Served"
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing, No Hidden Costs",
    desc: "One of the most common complaints about home builders is unexpected cost blowouts. At JK WA Development, we are committed to transparent, all-inclusive pricing from the moment you receive your quote. We clearly outline what is included in your build contract, calculate site costs accurately upfront, and communicate any changes before proceeding. You'll never be caught off guard.",
    stat: "$0",
    statLabel: "Hidden Costs"
  },
  {
    icon: Users,
    title: "Full Project Management From Start to Finish",
    desc: "Building a new home involves dozens of trades, suppliers, inspectors, and authorities. JK WA Development manages every aspect of your project — from initial design through council approvals, construction, and final inspection. You'll have a dedicated point of contact throughout your build who keeps you informed at every stage.",
    stat: "1",
    statLabel: "Dedicated Contact"
  },
  {
    icon: HardHat,
    title: "Quality That Lasts",
    desc: "We use quality materials and partner with experienced, licensed tradespeople on every build. Our homes are constructed to meet or exceed the requirements of the National Construction Code (NCC) and Western Australian building standards. We carry out regular quality inspections throughout construction and address any defects before handover.",
    stat: "100%",
    statLabel: "Quality Inspections"
  }
];

const suburbs = [
  "Rockingham", "Baldivis", "Cockburn", "Kwinana", "Secret Harbour", "Mandurah"
];

export default function WhyChoosePage() {
  const [active, setActive] = useState(0);
  useReveal();

  return (
    <SiteLayout>
      {/* HERO — Full bleed, single image, bottom-left text */}
      <section className="relative h-[100dvh] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop" 
          alt="JK WA Development home" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-10 pb-16">
          <p className="reveal text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-4">Why Choose Us</p>
          <h1 className="reveal text-[clamp(48px,8vw,100px)] font-semibold text-white leading-[0.9] tracking-tight max-w-3xl">
            The builder Perth families trust.
          </h1>
          <p className="reveal text-[16px] text-white/40 max-w-lg mt-6 leading-relaxed">
            Choosing the right builder is one of the biggest decisions you'll ever make. Here's why families across Rockingham, Cockburn, Kwinana and Mandurah choose JK WA Development.
          </p>
        </div>
      </section>

      {/* REASONS — Interactive tabs with large display */}
      <section className="py-20 sm:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-2">What Sets Us Apart</p>
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-white tracking-tight">Four reasons to build with us.</h2>
          </div>

          <div className="reveal grid lg:grid-cols-12 gap-8">
            {/* Left — Tab list */}
            <div className="lg:col-span-4 space-y-0">
              {reasons.map((r, i) => (
                <button
                  key={r.title}
                  onClick={() => setActive(i)}
                  className={`w-full text-left py-6 border-t border-white/10 transition-all duration-300 group ${active === i ? 'pl-4' : 'pl-0 hover:pl-2'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 flex items-center justify-center transition-colors duration-300 ${active === i ? 'bg-[#D4A017]' : 'bg-white/5 group-hover:bg-white/10'}`}>
                      <r.icon size={18} className={`transition-colors duration-300 ${active === i ? 'text-black' : 'text-[#D4A017]'}`} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className={`text-[14px] font-semibold transition-colors duration-300 ${active === i ? 'text-[#D4A017]' : 'text-white/60 group-hover:text-white'}`}>
                        {r.title}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right — Active content */}
            <div className="lg:col-span-8">
              <div className="bg-white/5 border border-white/10 p-8 sm:p-12">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-2">{reasons[active].title}</p>
                    <p className="text-[15px] text-white/50 leading-relaxed">{reasons[active].desc}</p>
                  </div>
                  <div className="text-right shrink-0 ml-8">
                    <p className="text-[48px] sm:text-[64px] font-semibold text-[#D4A017] leading-none">{reasons[active].stat}</p>
                    <p className="text-[11px] text-white/30 uppercase tracking-wider mt-1">{reasons[active].statLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBURBS — Full width mustard */}
      <section className="py-16 sm:py-20 bg-[#D4A017]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-black/40 font-medium mb-2">Service Area</p>
              <h2 className="text-[24px] sm:text-[32px] font-semibold text-black tracking-tight">Deep roots in Perth's south.</h2>
            </div>
          </div>
          <div className="reveal flex flex-wrap gap-2">
            {suburbs.map((s) => (
              <span key={s} className="px-4 py-2 bg-black/10 text-[12px] font-medium text-black hover:bg-black hover:text-white transition-all duration-300 cursor-default">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-7 bg-black p-12 sm:p-16 lg:p-20 flex items-center">
          <div className="reveal">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-4">Get Started</p>
            <h2 className="text-[36px] sm:text-[52px] font-semibold text-white leading-[0.95] tracking-tight mb-6">
              Start your build<br />journey with us.
            </h2>
            <p className="text-[15px] text-white/40 leading-relaxed mb-8 max-w-md">
              JK WA Development is proud to serve families across Perth's southern suburbs for residential homes of all sizes and styles. If you're ready to build — or just starting to explore your options — we'd love to hear from you.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-[#D4A017] text-black px-8 py-4 text-[14px] font-semibold hover:bg-white transition-colors duration-300">
              Contact Us for a Free Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 bg-[#D4A017] p-12 sm:p-16 lg:p-20 flex items-center">
          <div className="reveal">
            <p className="text-[15px] text-black/50 leading-relaxed">
              Contact JK WA Development today for a free consultation. No obligation, no pressure — just honest advice about building your new home in Perth's southern suburbs.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}