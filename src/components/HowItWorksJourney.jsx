import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  MessageCircle,
  BarChart3,
  Search,
  Handshake,
  FileCheck,
  CheckCircle2,
  ChevronRight,
  Play,
  Pause
} from "lucide-react";

// ─── DATA: Process Steps with images ───
const processSteps = [
  { 
    step: "01", 
    title: "Tell Us Your Story", 
    subtitle: "Free Consultation",
    desc: "We start with a 30-minute call. No forms, no pressure. Just a conversation about what you're looking for, your timeline, and your budget. We listen more than we talk.",
    icon: MessageCircle,
    image: "/assets/process-consultation.jpg",
    video: "/assets/process-consultation.mp4",
    stat: "30 min",
    statLabel: "First call"
  },
  { 
    step: "02", 
    title: "We Do the Homework", 
    subtitle: "Market Analysis",
    desc: "While you live your life, we analyse 100+ data points: comparable sales, suburb growth curves, infrastructure plans, school zones, and off-market whispers from our agent network.",
    icon: BarChart3,
    image: "/assets/process-analysis.jpg",
    video: "/assets/process-analysis.mp4",
    stat: "100+",
    statLabel: "Data points per suburb"
  },
  { 
    step: "03", 
    title: "See Only the Best", 
    subtitle: "Curated Shortlist",
    desc: "You don't waste weekends on duds. We inspect 15-20 properties and send you a video walkthrough of the top 3-5. Each comes with a scorecard: price, potential, risks, and our gut feeling.",
    icon: Search,
    image: "/assets/process-shortlist.jpg",
    video: "/assets/process-shortlist.mp4",
    stat: "3-5",
    statLabel: "Properties you see"
  },
  { 
    step: "04", 
    title: "We Fight for You", 
    subtitle: "Negotiation",
    desc: "When you find 'the one', we handle the chess game. Emotional detachment is our superpower. We've saved clients $50K-$200K below asking by reading the room and timing the offer perfectly.",
    icon: Handshake,
    image: "/assets/process-negotiate.jpg",
    video: "/assets/process-negotiate.mp4",
    stat: "$50K-$200K",
    statLabel: "Average savings"
  },
  { 
    step: "05", 
    title: "Dot Every I", 
    subtitle: "Due Diligence",
    desc: "Building inspection, contract review, finance coordination, strata report — we manage the paperwork avalanche. You just sign where we put the sticky note.",
    icon: FileCheck,
    image: "/assets/process-diligence.jpg",
    video: "/assets/process-diligence.mp4",
    stat: "0",
    statLabel: "Missed details"
  },
  { 
    step: "06", 
    title: "Welcome Home", 
    subtitle: "Settlement",
    desc: "Keys in hand, champagne in fridge. But we don't disappear. We check in at 30, 90, and 180 days. Need a tradie recommendation? A landscaper? We're still on speed dial.",
    icon: CheckCircle2,
    image: "/assets/process-settlement.jpg",
    video: "/assets/process-settlement.mp4",
    stat: "∞",
    statLabel: "Support timeline"
  },
];

// ─── HOOK: Scroll Reveal ───
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── COMPONENT: Single Step Block ───
function StepBlock({ step, index, isReversed }) {
  const [showVideo, setShowVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const StepIcon = step.icon;

  return (
    <div 
      className={`scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px] lg:min-h-[600px] ${
        index !== processSteps.length - 1 ? 'border-b border-black/10' : ''
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Content Side */}
      <div className={`flex items-center ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="p-8 sm:p-12 lg:p-16 xl:p-20 w-full">
          {/* Step Number */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-black/5 leading-none select-none">
              {step.step}
            </span>
            <div className="w-12 h-px bg-[#D4A017]" />
          </div>

          {/* Subtitle */}
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4A017] font-bold mb-2">
            {step.subtitle}
          </p>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 leading-tight">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-black/60 leading-relaxed mb-6 max-w-md">
            {step.desc}
          </p>

          {/* Stat */}
          <div className="inline-flex items-center gap-3 bg-black px-4 py-3 rounded-lg">
            <span className="text-xl sm:text-2xl font-bold text-[#D4A017]">{step.stat}</span>
            <span className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-medium">{step.statLabel}</span>
          </div>
        </div>
      </div>

      {/* Image/Video Side */}
      <div 
        className={`relative overflow-hidden bg-black ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <img 
          src={step.image} 
          alt={step.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110 opacity-60' : 'scale-100 opacity-100'
          }`}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Play button for video */}
        <button 
          onClick={() => setShowVideo(!showVideo)}
          className="absolute bottom-6 right-6 w-14 h-14 bg-[#D4A017] rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group z-10"
        >
          {showVideo ? (
            <Pause size={20} className="text-black" />
          ) : (
            <Play size={20} className="text-black ml-1" />
          )}
        </button>

        {/* Video overlay */}
        {showVideo && (
          <div className="absolute inset-0 z-20 bg-black">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
              poster={step.image}
            >
              <source src={step.video} type="video/mp4" />
            </video>
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <Pause size={16} className="text-white" />
            </button>
          </div>
        )}

        {/* Step badge on image */}
        <div className="absolute top-6 left-6 flex items-center gap-2">
          <div className="w-10 h-10 bg-[#D4A017] rounded-full flex items-center justify-center">
            <StepIcon size={18} className="text-black" />
          </div>
          <span className="text-xs font-bold text-white uppercase tracking-wider bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
            Step {step.step}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───
export default function HowItWorksJourney() {
  useScrollReveal();

  return (
    <section className="bg-[#F8F6F0]">
      {/* Header */}
      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          <div className="scroll-reveal">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4A017] mb-3 font-bold">
              The JKWA Journey
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.05]">
              Six steps.<br/>
              <span className="text-[#D4A017]">Zero stress.</span>
            </h2>
          </div>
          <div className="scroll-reveal">
            <p className="text-sm sm:text-base text-black/60 leading-relaxed max-w-md lg:ml-auto">
              Buying property shouldn't feel like a second job. We've broken the process into six clear phases, each with a single point of contact and zero handoffs.
            </p>
          </div>
        </div>
      </div>

      {/* Steps — Full Width */}
      <div className="max-w-[1600px] mx-auto">
        {processSteps.map((step, i) => (
          <StepBlock 
            key={step.step} 
            step={step} 
            index={i} 
            isReversed={i % 2 === 1}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="scroll-reveal bg-black rounded-2xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A017]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D4A017]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4A017] mb-4 font-bold">
              Ready to Begin?
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Book your free consultation today.
            </h3>
            <p className="text-sm sm:text-base text-white/60 mb-8 max-w-lg mx-auto">
              No obligation. No sales pitch. Just a conversation about what you want — and how we can get you there.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#D4A017] text-black px-8 py-4 text-xs sm:text-sm uppercase tracking-wider font-bold rounded-lg hover:bg-[#E8C547] transition-colors duration-200"
              >
                Book Free Call
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 text-xs sm:text-sm uppercase tracking-wider font-bold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
