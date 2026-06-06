import { Link } from "react-router-dom";
import { SiteLayout } from "../components/SiteLayout";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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

export default function HomeDesignsPage() {
  const [active, setActive] = useState("3");
  useReveal();

  const categories = {
    "1-2": {
      title: "Smart, Affordable Living",
      subtitle: "1 and 2 Bedroom Homes",
      desc: "Smaller doesn't mean compromising on quality or style. Our 1 and 2-bedroom home designs are perfect for first home buyers, couples, downsizers, or those looking to build a granny flat or secondary dwelling. These designs are cleverly laid out to make the most of every square metre, with open-plan living areas, quality kitchen inclusions, and outdoor entertaining spaces. In Perth's southern suburbs, 1 and 2-bedroom homes also make excellent investment properties near transport corridors and shopping hubs.",
      from: "$250,000",
      storey: "Single or double storey",
      points: ["Open-plan living areas", "Quality kitchen inclusions", "Outdoor entertaining spaces", "Excellent investment potential"]
    },
    "3": {
      title: "The Sweet Spot for Families",
      subtitle: "3 Bedroom Homes",
      desc: "The 3-bedroom home remains the most popular choice for Australian families. Our 3x2 designs offer a master suite with ensuite and walk-in wardrobe, two additional bedrooms served by a family bathroom, an open-plan kitchen, dining and living area, and a covered alfresco perfect for Perth's outdoor lifestyle. Available as single or double storey, our 3-bedroom homes are designed to work beautifully on standard Perth lots.",
      from: "$320,000",
      storey: "Single or double storey",
      points: ["Master suite with ensuite", "Walk-in wardrobe", "Open-plan kitchen & dining", "Covered alfresco area"]
    },
    "4": {
      title: "Space for the Whole Family",
      subtitle: "4 Bedroom Homes",
      desc: "Growing families love our 4-bedroom home designs, which offer room for everyone without sacrificing style or functionality. JK WA Development's 4-bedroom homes typically include a luxurious master suite, three additional bedrooms for kids or guests, multiple living areas including a separate theatre or activity room, and a large kitchen with island bench. These homes are designed for how Australian families actually live — with smart storage, great traffic flow, and indoor-outdoor connectivity.",
      from: "$420,000",
      storey: "Single or double storey",
      points: ["Luxurious master suite", "Theatre or activity room", "Kitchen with island bench", "Smart storage solutions"]
    }
  };

  const current = categories[active];

  return (
    <SiteLayout>
      {/* HERO — Asymmetric, image bleeds right */}
      <section className="relative min-h-[90vh] bg-black overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop" alt="Home designs" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-black/50 lg:to-black" />
        </div>

        <div className="relative z-10 h-full flex items-end max-w-7xl mx-auto px-6 lg:px-10 pb-16 pt-32">
          <div className="max-w-xl">
            <p className="reveal text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-4">Home Designs</p>
            <h1 className="reveal text-[clamp(48px,9vw,110px)] font-semibold text-white leading-[0.85] tracking-tight">
              Find your<br />perfect fit.
            </h1>
            <p className="reveal text-[15px] text-white/40 max-w-sm mt-6 leading-relaxed">
              1, 2, 3 and 4 bedroom homes. Single or double storey. All across Perth's southern suburbs.
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SELECTOR — Three tabs, one big display */}
      <section className="py-20 sm:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Tabs */}
          <div className="reveal flex border-b border-white/10 mb-12">
            {Object.keys(categories).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`px-6 py-4 text-[13px] font-medium transition-all duration-300 ${
                  active === key 
                    ? "text-[#D4A017] border-b-2 border-[#D4A017]" 
                    : "text-white/30 hover:text-white/60"
                }`}
              >
                {key === "1-2" ? "1–2 Bed" : key + " Bed"}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="reveal grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left — Big number + title */}
            <div className="lg:col-span-4">
              <p className="text-[120px] sm:text-[160px] font-semibold text-white/5 leading-none">{active === "1-2" ? "01" : active === "3" ? "02" : "03"}</p>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mt-4 mb-2">{current.subtitle}</p>
              <h2 className="text-[28px] sm:text-[36px] font-semibold text-white leading-tight mb-4">{current.title}</h2>
              <p className="text-[13px] text-white/30 mb-1">{current.storey}</p>
              <p className="text-[24px] font-semibold text-[#D4A017]">{current.from}</p>
            </div>

            {/* Right — Description + points */}
            <div className="lg:col-span-5">
              <p className="text-[15px] text-white/50 leading-relaxed mb-8">{current.desc}</p>
              <div className="space-y-3">
                {current.points.map((p) => (
                  <div key={p} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#D4A017]" />
                    <span className="text-[13px] text-white/40">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Far right — CTA */}
            <div className="lg:col-span-3 flex flex-col justify-end">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#D4A017] text-black px-6 py-4 text-[13px] font-semibold hover:bg-white transition-colors">
                Get Quote for {active === "1-2" ? "1–2 Bed" : active + " Bed"} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM DESIGN — Full bleed mustard, asymmetric text placement */}
      <section className="relative py-24 sm:py-32 bg-[#D4A017] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/5" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 reveal">
              <p className="text-[11px] uppercase tracking-[0.3em] text-black/40 font-medium mb-3">Custom Designs Available</p>
              <h2 className="text-[32px] sm:text-[44px] font-semibold text-black leading-[1.05] tracking-tight mb-6">
                Not finding exactly<br />what you want?
              </h2>
              <p className="text-[15px] text-black/50 leading-relaxed max-w-lg">
                JK WA Development can work with you to create a fully custom home design that suits your block, your lifestyle, and your budget. Whether you need a home office, a teenage retreat, a butler's pantry, or a specific facade style, our design team will bring your vision to life.
              </p>
            </div>
            <div className="lg:col-span-5 reveal flex items-end justify-start lg:justify-end">
              <Link to="/contact" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-[14px] font-semibold hover:bg-white hover:text-black transition-colors">
                Start Custom Design <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Dark, minimal */}
      <section className="py-24 sm:py-32 bg-black">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center reveal">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-4">Get Started</p>
          <h2 className="text-[36px] sm:text-[52px] font-semibold text-white leading-[1.05] tracking-tight mb-6">
            Start planning your<br />new home today.
          </h2>
          <p className="text-[15px] text-white/30 mb-8">
            From compact starter homes to large family residences, JK WA Development has a design to suit your needs across Perth's southern suburbs.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#D4A017] text-black px-8 py-4 text-[14px] font-semibold hover:bg-white transition-colors">
            Contact Us for a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}