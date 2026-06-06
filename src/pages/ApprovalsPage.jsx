
import { Link } from "react-router-dom";
import { SiteLayout } from "../components/SiteLayout";
import { ArrowRight, ArrowDown } from "lucide-react";
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

const approvals = [
  { num: "01", title: "Building Permit", desc: "Issued by a Registered Building Surveyor. Required for all new builds in Western Australia.", time: "10–25 business days" },
  { num: "02", title: "Development Approval (DA)", desc: "Required from your local council depending on location and block type.", time: "30–60 days" },
  { num: "03", title: "BAL Assessment", desc: "Bushfire Attack Level assessment for properties near bushland.", time: "Case by case" },
  { num: "04", title: "Structure Plan", desc: "Developer Design Guidelines approval if building in a new estate.", time: "Case by case" },
  { num: "05", title: "Survey Plans", desc: "Lodged with Landgate. We manage all documentation on your behalf.", time: "Case by case" }
];

const councils = [
  "City of Rockingham",
  "City of Cockburn", 
  "City of Kwinana",
  "City of Mandurah",
  "Shire of Murray"
];

export default function ApprovalsPage() {
  const [active, setActive] = useState(0);
  useReveal();

  return (
    <SiteLayout>
      {/* HERO — Full viewport, single image, text bottom-left */}
      <section className="relative h-[100dvh] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
          alt="Building approvals" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-10 pb-16 pt-32">
          <div className="max-w-3xl">
            <p className="reveal text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-4">Building Approvals</p>
            <h1 className="reveal text-[clamp(48px,8vw,100px)] font-semibold text-white leading-[0.9] tracking-tight mb-6">
              We handle the red tape.
            </h1>
            <p className="reveal text-[16px] text-white/40 leading-relaxed max-w-lg mb-8">
              Council approvals, building permits, BAL assessments — managed on your behalf so you can focus on building your dream home.
            </p>
            <div className="reveal flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#D4A017] text-black px-6 py-3 text-[14px] font-semibold hover:bg-white transition-colors">
                Get Started <ArrowRight size={14} />
              </Link>
              <button 
                onClick={() => document.getElementById("approvals").scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-[14px] font-medium hover:bg-white/10 transition-colors"
              >
                Learn More <ArrowDown size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* APPROVALS — Accordion */}
      <section id="approvals" className="py-20 sm:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-2">What You Need</p>
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-white tracking-tight">What approvals are required?</h2>
          </div>

          <div className="space-y-0">
            {approvals.map((a, i) => (
              <div 
                key={a.num}
                className={`reveal group border-t ${i === approvals.length - 1 ? 'border-b' : ''} border-white/10 cursor-pointer transition-all duration-300 ${active === i ? 'bg-white/5' : ''}`}
                onClick={() => setActive(i)}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="py-8 sm:py-10 px-4 sm:px-6">
                  <div className="flex items-start gap-6 sm:gap-10">
                    <span className={`text-[32px] sm:text-[48px] font-semibold leading-none shrink-0 transition-colors duration-300 ${active === i ? 'text-[#D4A017]' : 'text-white/10 group-hover:text-white/20'}`}>
                      {a.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`text-[18px] sm:text-[22px] font-semibold transition-colors duration-300 ${active === i ? 'text-[#D4A017]' : 'text-white group-hover:text-white/80'}`}>
                          {a.title}
                        </h3>
                        <span className={`text-[11px] uppercase tracking-wider shrink-0 ml-4 transition-all duration-300 ${active === i ? 'text-[#D4A017] opacity-100' : 'text-white/20 opacity-0'}`}>
                          {a.time}
                        </span>
                      </div>
                      <div className={`overflow-hidden transition-all duration-500 ${active === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-[14px] text-white/40 leading-relaxed pt-2">{a.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNCILS — Mustard */}
      <section className="py-24 sm:py-32 bg-[#D4A017]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.3em] text-black/40 font-medium mb-3">Local Knowledge</p>
              <h2 className="text-[36px] sm:text-[48px] font-semibold text-black leading-[0.95] tracking-tight">
                We know every council in the south.
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-end">
              <p className="text-[15px] text-black/50 leading-relaxed mb-10">
                Perth's southern suburbs fall under several local government areas, each with their own requirements and processing timelines. We know what each council expects, how to prepare compliant documentation, and how to communicate effectively to keep your approval moving without unnecessary delays.
              </p>
              <div className="flex flex-wrap gap-3">
                {councils.map((c) => (
                  <span key={c} className="px-5 py-3 bg-black text-[12px] font-semibold text-[#D4A017] hover:bg-white hover:text-black transition-all duration-300 cursor-default">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESTATES */}
      <section className="py-24 sm:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-3">New Estates</p>
              <h2 className="text-[28px] sm:text-[36px] font-semibold text-white leading-tight">
                Developer guidelines handled from day one.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="reveal text-[15px] text-white/40 leading-relaxed mb-10">
                Many new estates in Perth's southern suburbs have their own design guidelines set by the developer. These can include minimum brick heights, facade requirements, and material specifications. JK WA Development is familiar with the guidelines of major WA land developers and ensures your home design is fully compliant from the outset, avoiding costly redesigns later.
              </p>
              <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-4">
                {["Baldivis", "Wellard", "Lakelands", "Golden Bay"].map((e, i) => (
                  <div key={e} className="border border-white/10 p-6 text-center hover:border-[#D4A017] transition-all duration-300" style={{ transitionDelay: `${i * 80}ms` }}>
                    <p className="text-[18px] font-semibold text-white">{e}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-2">Timeline</p>
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-black tracking-tight">How long does it take?</h2>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative bg-black p-10 sm:p-16">
              <p className="text-[80px] sm:text-[120px] font-semibold text-[#D4A017] leading-none">10–25</p>
              <p className="text-[14px] text-white/50 mt-4">Business days for a straightforward Building Permit</p>
              <div className="absolute top-4 right-4 w-3 h-3 bg-[#D4A017]" />
            </div>
            <div className="relative bg-[#D4A017] p-10 sm:p-16">
              <p className="text-[80px] sm:text-[120px] font-semibold text-black leading-none">30–60</p>
              <p className="text-[14px] text-black/50 mt-4">Days for Development Approval depending on council</p>
              <div className="absolute top-4 right-4 w-3 h-3 bg-black" />
            </div>
          </div>
          <p className="reveal text-[13px] text-black/30 mt-6">JK WA Development submits your application as early as possible and actively follows up to keep things moving.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-7 bg-black p-12 sm:p-16 lg:p-20 flex items-center">
          <div className="reveal">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-4">Get Started</p>
            <h2 className="text-[36px] sm:text-[52px] font-semibold text-white leading-[0.95] tracking-tight mb-6">
              Let us handle it for you.
            </h2>
            <p className="text-[15px] text-white/40 leading-relaxed mb-8 max-w-md">
              Don't let the approvals process put you off building your dream home. JK WA Development's experienced team will manage every step from start to finish.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-[#D4A017] text-black px-8 py-4 text-[14px] font-semibold hover:bg-white transition-colors duration-300">
              Contact Us Today <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 bg-[#D4A017] p-12 sm:p-16 lg:p-20 flex items-center">
          <div className="reveal">
            <p className="text-[15px] text-black/50 leading-relaxed">
              Contact us today to find out how we can make your new home build in Perth's southern suburbs as smooth and stress-free as possible.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
