import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  MapPin, 
  CheckCircle2,
  ChevronRight,
  Star,
  Zap,
  Shield,
  Users,
  Award,
  Clock,
  Phone,
  Mail,
  Search,
  Building2,
  TrendingUp,
  MessageCircle,
  FileCheck,
  Handshake,
  BarChart3
} from "lucide-react";

// ─── DATA: Process Steps ───
const processSteps = [
  { 
    step: "01", 
    title: "Free Consultation", 
    desc: "Book a no-obligation call. We listen to your goals, timeline, and budget.",
    icon: MessageCircle 
  },
  { 
    step: "02", 
    title: "Market Analysis", 
    desc: "We research comparable sales, suburb trends, and off-market opportunities.",
    icon: BarChart3 
  },
  { 
    step: "03", 
    title: "Property Shortlist", 
    desc: "Receive a curated list of properties matching your exact criteria.",
    icon: Search 
  },
  { 
    step: "04", 
    title: "Inspection & Negotiation", 
    desc: "We attend inspections with you and negotiate fiercely on your behalf.",
    icon: Handshake 
  },
  { 
    step: "05", 
    title: "Due Diligence", 
    desc: "Building reports, contract review, and finance coordination handled.",
    icon: FileCheck 
  },
  { 
    step: "06", 
    title: "Settlement & Beyond", 
    desc: "We stay with you through settlement and check in after you move in.",
    icon: CheckCircle2 
  },
];

// ─── DATA: Why Choose (New Company Angle) ───
const trustPillars = [
  { 
    icon: Shield, 
    title: "Buyer-First Approach", 
    desc: "We don't represent sellers. Our loyalty is 100% to you, the buyer." 
  },
  { 
    icon: Users, 
    title: "Senior-Led Service", 
    desc: "Every client works directly with a senior advisor, never a junior." 
  },
  { 
    icon: Award, 
    title: "Fixed-Fee Transparency", 
    desc: "No hidden commissions. One clear fee, agreed upfront in writing." 
  },
  { 
    icon: Clock, 
    title: "24/7 Availability", 
    desc: "Markets move fast. We answer calls and emails outside business hours." 
  },
];

// ─── DATA: Suburbs We Cover ───
const serviceAreas = [
  { city: "Sydney", suburbs: "Mosman, Bondi, Manly, Paddington, Double Bay", count: "120+" },
  { city: "Melbourne", suburbs: "Toorak, Brighton, Brunswick, South Yarra, Richmond", count: "95+" },
  { city: "Brisbane", suburbs: "New Farm, Teneriffe, Bulimba, Ascot, Hamilton", count: "80+" },
  { city: "Perth", suburbs: "Dalkeith, Cottesloe, South Perth, Subiaco, Floreat", count: "70+" },
];

// ─── COMPONENT: How It Works (Process Steps) ───
function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 scroll-reveal">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4A017] mb-2 font-bold">
            Our Process
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Six steps to your new property.
          </h2>
          <p className="text-sm sm:text-base text-black/60 mt-3">
            We handle the complexity so you don't have to. Every step is documented and transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {processSteps.map((item, i) => (
            <div 
              key={item.step}
              className="scroll-reveal group bg-white rounded-xl p-6 sm:p-8 border border-black/10 hover:border-[#D4A017] transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center group-hover:bg-[#D4A017] transition-colors duration-300">
                  <item.icon size={22} className="text-[#D4A017] group-hover:text-black transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-[#D4A017] uppercase tracking-wider">Step {item.step}</span>
                  </div>
                  <h3 className="font-bold text-lg text-black mb-2">{item.title}</h3>
                  <p className="text-sm text-black/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── COMPONENT: Trust Pillars ───
function TrustPillars() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">

          {/* Left: Content */}
          <div className="scroll-reveal">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4A017] mb-3 font-bold">
              Why Choose JKWA
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
              New company.<br/>Old-school values.
            </h2>
            <p className="text-sm sm:text-base text-black/60 mb-6 sm:mb-8 leading-relaxed">
              We may be new, but our advisors bring decades of combined experience from Australia's top agencies. We started JKWA because we were tired of seeing buyers treated like transactions, not people.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "No seller relationships — 100% buyer advocacy",
                "Fixed fees, not percentage commissions",
                "Off-market access through our network",
                "Same-day response guarantee"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#D4A017] shrink-0" />
                  <span className="text-sm sm:text-base text-black font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider text-black font-bold border-b-2 border-[#D4A017] pb-1 hover:text-[#D4A017] transition-colors"
            >
              Meet the team
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right: Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {trustPillars.map((pillar, i) => (
              <div 
                key={pillar.title}
                className="scroll-reveal bg-[#F8F6F0] rounded-xl p-5 sm:p-6 border border-black/5 hover:border-[#D4A017] transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-4">
                  <pillar.icon size={20} className="text-[#D4A017]" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-base text-black mb-2">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-black/60 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── COMPONENT: Service Areas ───
function ServiceAreas() {
  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 scroll-reveal">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4A017] mb-2 font-bold">
            Areas We Serve
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Active across Australia's premium markets.
          </h2>
          <p className="text-sm sm:text-base text-white/50 mt-3">
            We focus on suburbs where we have deep local knowledge and agent relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {serviceAreas.map((area, i) => (
            <div 
              key={area.city}
              className="scroll-reveal bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/10 hover:border-[#D4A017]/50 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#D4A017]" />
                  <h3 className="font-bold text-white text-lg">{area.city}</h3>
                </div>
                <span className="text-[10px] font-bold text-[#D4A017] bg-[#D4A017]/10 px-2 py-1 rounded">
                  {area.count} suburbs
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed mb-4">
                {area.suburbs}
              </p>
              <Link 
                to={`/areas/${area.city.toLowerCase()}`}
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#D4A017] group-hover:text-white transition-colors"
              >
                View suburbs
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── COMPONENT: Free Valuation CTA ───
function FreeValuationCTA() {
  const [suburb, setSuburb] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (suburb.trim() && email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setSuburb("");
        setEmail("");
      }, 4000);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">

          {/* Left: Content */}
          <div className="scroll-reveal">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4A017] mb-3 font-bold">
              Free Property Report
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
              Know what your suburb is worth — before you buy.
            </h2>
            <p className="text-sm sm:text-base text-black/60 mb-6 sm:mb-8 leading-relaxed">
              Enter any Australian suburb and receive a detailed market report: median prices, recent sales, growth trends, and our honest assessment of whether it's a buyer's or seller's market right now.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                "Suburb-level price data",
                "12-month growth trends",
                "Days on market averages",
                "Comparable sales included"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#D4A017] shrink-0" />
                  <span className="text-xs sm:text-sm text-black/70 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 pt-4 border-t border-black/10">
              <div className="flex -space-x-2">
                {[1,2,3].map((n) => (
                  <div key={n} className="w-8 h-8 rounded-full bg-black border-2 border-[#F8F6F0] flex items-center justify-center">
                    <Users size={12} className="text-[#D4A017]" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-black/50">
                <span className="font-bold text-black">340+ reports</span> generated this month
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="scroll-reveal">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-black/10 shadow-sm">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-[#D4A017] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Report on its way!</h3>
                  <p className="text-sm text-black/60">Check your inbox in the next 5 minutes. A JKWA advisor will follow up within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-lg font-bold text-black mb-1">Get Your Free Report</h3>
                  <p className="text-xs text-black/50 mb-6">Takes 30 seconds. No spam, ever.</p>

                  {/* Suburb Input */}
                  <div className="mb-4">
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                      Suburb or Postcode
                    </label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30" />
                      <input
                        type="text"
                        value={suburb}
                        onChange={(e) => setSuburb(e.target.value)}
                        placeholder="e.g. Mosman, NSW 2088"
                        className="w-full pl-10 pr-4 py-3 bg-[#F8F6F0] border border-black/10 rounded-lg text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-[#D4A017] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="mb-5">
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full pl-10 pr-4 py-3 bg-[#F8F6F0] border border-black/10 rounded-lg text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-[#D4A017] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-black text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-[#D4A017] hover:text-black transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Zap size={16} />
                    Get My Free Report
                  </button>

                  <p className="text-[10px] text-black/40 text-center mt-3">
                    By submitting, you agree to our privacy policy. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── COMPONENT: FAQ Preview ───
function FAQPreview() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { 
      q: "How is JKWA different from a regular real estate agent?", 
      a: "Regular agents work for the seller. We work exclusively for buyers. We don't take listings, we don't represent sellers, and we don't earn commission from sales. Our fee is fixed and paid by you, the buyer — so our only incentive is to get you the best property at the best price." 
    },
    { 
      q: "What does your service cost?", 
      a: "We charge a fixed fee starting from $8,500 for our comprehensive buyer advocacy service. This is agreed upfront in writing before we begin. No hidden costs, no percentage commissions, no surprises." 
    },
    { 
      q: "Do you only work with expensive properties?", 
      a: "Not at all. While we specialise in premium markets, we work with buyers at various price points. Our focus is on properties where our local expertise and negotiation skills can save you more than our fee costs." 
    },
    { 
      q: "Can you help with off-market properties?", 
      a: "Yes. Through our network of agents, developers, and past clients, we often hear about properties before they hit the open market. Off-market opportunities are a significant advantage of working with a buyer's advocate." 
    },
    { 
      q: "I'm a first-home buyer. Can you still help?", 
      a: "Absolutely. First-home buyers often benefit most from our service. We guide you through inspections, contracts, finance, and settlement — explaining everything in plain English so you feel confident at every step." 
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-10 sm:mb-14 scroll-reveal">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4A017] mb-2 font-bold">
            Common Questions
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            What buyers ask us.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="scroll-reveal border border-black/10 rounded-lg overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-[#F8F6F0] transition-colors"
              >
                <span className="font-bold text-sm sm:text-base text-black pr-4">{faq.q}</span>
                <span className={`shrink-0 w-8 h-8 rounded-full bg-black flex items-center justify-center transition-all duration-300 ${
                  openIndex === i ? "bg-[#D4A017] rotate-180" : ""
                }`}>
                  <ChevronRight size={16} className={`text-white transition-transform duration-300 ${
                    openIndex === i ? "rotate-90 text-black" : ""
                  }`} />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? "max-h-96" : "max-h-0"
              }`}>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-black/60 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <Link 
            to="/faq" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider text-black font-bold border-b-2 border-[#D4A017] pb-1 hover:text-[#D4A017] transition-colors"
          >
            View all FAQs
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── EXPORT: All Components ───
export function AdditionalHomeSections() {
  return (
    <>
      <HowItWorks />
      <TrustPillars />
      <ServiceAreas />
      <FreeValuationCTA />
      <FAQPreview />
    </>
  );
}

export { HowItWorks, TrustPillars, ServiceAreas, FreeValuationCTA, FAQPreview };