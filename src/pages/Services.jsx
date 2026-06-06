
import { Link } from "react-router-dom";
import { SiteLayout } from "../components/SiteLayout";
import { 
  ArrowRight, 
  ArrowUpRight,
  Briefcase, 
  Building2, 
  Compass, 
  Home, 
  KeyRound, 
  LineChart, 
  TreePine, 
  Users,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

// ─── DATA ───
const services = [
  { 
    icon: Home, 
    title: "Residential Sales", 
    body: "From first homes to prestige residences — sell with the confidence of a transparent, marketing-led campaign.",
    tag: "Most Popular",
    price: "From $8,500"
  },
  { 
    icon: Building2, 
    title: "Commercial Property", 
    body: "Office, retail and industrial acquisitions and divestments with rigorous due diligence and WALE analysis.",
    tag: "Enterprise",
    price: "Custom"
  },
  { 
    icon: LineChart, 
    title: "Investment Advisory", 
    body: "Data-driven portfolio strategy across capital growth, yield and tax-effective structuring for Australian investors.",
    tag: "High ROI",
    price: "From $5,000"
  },
  { 
    icon: TreePine, 
    title: "Land Development", 
    body: "Site identification, feasibility studies, DA support and end-to-end project management for boutique developments.",
    tag: "Complex",
    price: "Project-based"
  },
  { 
    icon: KeyRound, 
    title: "Property Management", 
    body: "Considered tenancy management, compliant inspections and proactive maintenance for resilient long-term returns.",
    tag: "Passive Income",
    price: "4% of rent"
  },
  { 
    icon: Users, 
    title: "First Home Buyer", 
    body: "Navigate FHOG, stamp-duty concessions and lender pre-approval with a guided buyer journey built around you.",
    tag: "Beginner",
    price: "From $3,500"
  },
];

const processSteps = [
  { num: "01", title: "Brief", body: "You tell us what you want. We ask the questions you didn't know to ask." },
  { num: "02", title: "Hunt", body: "We inspect 20 properties. You see 3. Every one is worth your Saturday." },
  { num: "03", title: "Fight", body: "We negotiate like we don't care. Because we don't. You already paid us." },
  { num: "04", title: "Close", body: "Paperwork, inspections, finance. We handle the avalanche. You sign." },
];

const faqItems = [
  { q: "Do you work for the seller too?", a: "Never. We are exclusively buyer-side. If a seller pays us, we lose our licence and our reputation." },
  { q: "What if I don't buy anything?", a: "You still pay our retainer. But if we can't find you a property in 90 days, we work for free until you do." },
  { q: "Can you help me sell my current home?", a: "No. We refer you to three vetted selling agents in your area. We don't take referral fees." },
  { q: "How do I know you're any good?", a: "Check our Google reviews. Or ask for three recent client references. We'll provide them within 2 hours." },
];

// ─── HOOK ───
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ─── COMPONENT: Service Card (Asymmetric) ───
function ServiceCard({ service, index }) {
  const Icon = service.icon;
  const isLarge = index === 0 || index === 3;
  
  return (
    <div 
      className={`reveal group relative overflow-hidden ${
        isLarge ? 'md:col-span-2 md:row-span-1' : ''
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={`h-full bg-black border border-white/10 hover:border-[#D4A017] p-6 sm:p-8 transition-all duration-500 ${
        isLarge ? 'min-h-[280px] flex flex-col justify-between' : 'min-h-[240px]'
      }`}>
        
        {/* Top row */}
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 bg-[#D4A017] flex items-center justify-center group-hover:bg-white transition-colors duration-300">
            <Icon size={22} className="text-black" strokeWidth={1.5} />
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase tracking-wider text-[#D4A017] font-bold">{service.tag}</span>
            <p className="text-xs text-white/40 mt-1">{service.price}</p>
          </div>
        </div>
        
        {/* Content */}
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-[#D4A017] transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-sm text-white/50 leading-relaxed mb-4">
            {service.body}
          </p>
          
          {/* CTA */}
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/40 font-bold hover:text-[#D4A017] transition-colors duration-200 group/link"
          >
            Enquire
            <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
        
        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#D4A017]/0 group-hover:border-[#D4A017]/50 transition-colors duration-500" />
      </div>
    </div>
  );
}

// ─── COMPONENT: FAQ Accordion ───
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  
  return (
    <div className="space-y-0">
      {faqItems.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div 
            key={i}
            className="reveal border-b border-white/10"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-start justify-between py-5 sm:py-6 text-left group"
            >
              <div className="flex items-start gap-4">
                <span className="text-[10px] font-bold text-[#D4A017] mt-1">0{i + 1}</span>
                <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#D4A017] transition-colors">
                  {item.q}
                </span>
              </div>
              <div className={`w-8 h-8 border border-white/20 flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${
                isOpen ? 'bg-[#D4A017] border-[#D4A017]' : 'group-hover:border-white/40'
              }`}>
                {isOpen ? (
                  <X size={14} className="text-black" />
                ) : (
                  <ArrowRight size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'text-white/40 group-hover:text-white'}`} />
                )}
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ${
              isOpen ? 'max-h-48 pb-6' : 'max-h-0'
            }`}>
              <p className="text-sm sm:text-base text-white/50 leading-relaxed pl-8 sm:pl-10">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── MAIN PAGE ───
export default function ServicesPage() {
  const [hoveredStep, setHoveredStep] = useState(null);
  useReveal();

  return (
    <SiteLayout>
      
      {/* ═══════════════════════════════════════
          HERO — Full bleed, massive type
          ═══════════════════════════════════════ */}
      <section className="relative bg-black min-h-[85vh] flex items-end overflow-hidden">
        {/* Giant watermark text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="text-[20vw] font-black text-white/[0.02] leading-none whitespace-nowrap">
            SERVICES
          </span>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            
            {/* Left — massive headline */}
            <div className="lg:col-span-8">
              <p className="reveal text-[10px] uppercase tracking-[0.5em] text-[#D4A017] mb-4 sm:mb-6 font-bold">
                What We Do
              </p>
              <h1 className="reveal text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.9] tracking-tighter">
                SIX<br/>
                <span className="text-[#D4A017]">WAYS</span><br/>
                TO WIN.
              </h1>
            </div>
            
            {/* Right — small blurb */}
            <div className="lg:col-span-4 lg:pb-4">
              <p className="reveal text-sm sm:text-base text-white/50 leading-relaxed mb-6">
                We don't do everything. We do six things exceptionally well. Each service is a specialist discipline, staffed by people who've done nothing else for a decade.
              </p>
              <div className="reveal flex items-center gap-4">
                <div className="w-10 h-px bg-[#D4A017]" />
                <span className="text-xs text-white/40">Scroll to explore</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom mustard bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4A017]" />
      </section>

      {/* ═══════════════════════════════════════
          SERVICES — Asymmetric Grid
          ═══════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Section header — left aligned, not centered */}
          <div className="reveal mb-12 sm:mb-16 max-w-xl">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4A017] mb-3 font-bold">
              01 — The Offerings
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
              Pick your weapon. We'll teach you how to use it.
            </h2>
          </div>
          
          {/* Asymmetric grid: 2 large, 4 small */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS — Horizontal scroll on mobile, stacked on desktop
          ═══════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-[#F8F6F0] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4A017] mb-3 font-bold">
                02 — The Method
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight">
                Four steps.<br/>No handoffs.
              </h2>
            </div>
            <p className="text-sm text-black/50 max-w-sm">
              One advisor from first call to settlement. No junior staff. No "I'll transfer you to accounts."
            </p>
          </div>

          {/* Steps — numbered, with hover reveal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {processSteps.map((step, i) => (
              <div 
                key={step.num}
                className="reveal group relative border-t-2 border-black/10 hover:border-[#D4A017] pt-6 sm:pt-8 pb-8 sm:pb-10 transition-colors duration-300 cursor-pointer"
                style={{ transitionDelay: `${i * 150}ms` }}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Number — massive */}
                <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-black/[0.06] leading-none block mb-2 group-hover:text-[#D4A017]/10 transition-colors duration-300">
                  {step.num}
                </span>
                
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-black mb-3 group-hover:text-[#D4A017] transition-colors duration-300">
                  {step.title}
                </h3>
                
                {/* Body — hidden until hover */}
                <p className={`text-sm text-black/50 leading-relaxed transition-all duration-500 overflow-hidden ${
                  hoveredStep === i ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0 sm:max-h-24 sm:opacity-100'
                }`}>
                  {step.body}
                </p>
                
                {/* Arrow */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-8 h-px bg-black/20 group-hover:bg-[#D4A017] group-hover:w-12 transition-all duration-300" />
                  <ArrowRight size={14} className="text-black/20 group-hover:text-[#D4A017] transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ — Raw, honest, no fluff
          ═══════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="reveal mb-12 sm:mb-16">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4A017] mb-3 font-bold">
              03 — The Truth
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
              Questions we get.<br/>Answers we don't sugarcoat.
            </h2>
          </div>
          
          <FAQAccordion />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA — Split, aggressive
          ═══════════════════════════════════════ */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left — black, text-heavy */}
        <div className="bg-black p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center min-h-[400px] lg:min-h-[500px]">
          <div className="reveal max-w-md">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#D4A017] mb-6 font-bold">
              Still Deciding?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-6">
              ONE CALL.<br/>
              <span className="text-[#D4A017]">NO PITCH.</span><br/>
              JUST FACTS.
            </h2>
            <p className="text-sm text-white/50 leading-relaxed mb-8">
              Tell us your situation. We'll tell you honestly whether you need us, which service fits, and what it costs. If you don't need us, we'll tell you that too.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#D4A017] text-black px-6 py-3 text-xs uppercase tracking-wider font-bold hover:bg-white transition-colors duration-200"
              >
                Book Free Call
                <ArrowRight size={14} />
              </Link>
              <a 
                href="tel:1800559592"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-3 text-xs uppercase tracking-wider font-bold hover:border-[#D4A017] hover:text-[#D4A017] transition-all duration-200"
              >
                <Phone size={14} />
                1800 559 592
              </a>
            </div>
          </div>
        </div>
        
        {/* Right — mustard, contact details */}
        <div className="bg-[#D4A017] p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center min-h-[400px] lg:min-h-[500px] relative overflow-hidden">
          {/* Giant watermark */}
          <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-[15rem] font-black text-black/[0.05] leading-none select-none pointer-events-none">
            NOW
          </span>
          
          <div className="reveal relative z-10">
            <p className="text-xs uppercase tracking-[0.3em] text-black/50 font-bold mb-8">
              Or reach out directly
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-black" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-black/50 font-bold mb-1">Phone</p>
                  <p className="text-xl font-black text-black">1800 JKWA NOW</p>
                  <p className="text-xs text-black/50 mt-1">Mon–Sun, 7am–10pm AEST</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-black" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-black/50 font-bold mb-1">Email</p>
                  <p className="text-lg font-bold text-black">hello@jkwa.com.au</p>
                  <p className="text-xs text-black/50 mt-1">Response within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-black" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-black/50 font-bold mb-1">Offices</p>
                  <p className="text-sm font-bold text-black">Sydney · Melbourne · Brisbane · Perth</p>
                  <p className="text-xs text-black/50 mt-1">By appointment only</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t-2 border-black/10">
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-black" />
                <span className="text-xs font-bold text-black">Average response time: 11 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
