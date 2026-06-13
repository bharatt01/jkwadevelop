import { Link } from "react-router-dom";
import { SiteLayout } from "../components/SiteLayout";
import { 
  ArrowRight, 
  MapPin,
  ChevronDown,
  Star,
  Home,
  Building2,
  BedDouble,
  PenTool,
  Shield,
  CheckCircle,
  Users,
  HardHat,
  Volume2,
  VolumeX,
  Phone
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import heroVideo from "../assets/hero-video.mp4";
import WhyChooseUs from "../components/WhyChoose";
import PainVsGain from "../components/PainVsGain";

const testimonials = [
  { name: "Sarah & James M.", suburb: "Rockingham, WA", quote: "JK WA Development made building our first home completely stress-free. They handled every approval and kept us updated weekly.", rating: 5 },
  { name: "The Chen Family", suburb: "Baldivis, WA", quote: "We wanted a double storey home on a narrow block. The team designed something perfect for our family of five.", rating: 5 },
  { name: "Mark Davidson", suburb: "Cockburn, WA", quote: "The transparent pricing was what sold us. No hidden costs, no surprises at handover. Exactly what was quoted.", rating: 5 },
];

const stats = [
  { value: "150+", label: "Homes Built" },
  { value: "10+", label: "Suburbs Served" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Approvals Managed" },
];

const homeTypes = [
  { icon: Home, title: "Single Storey", desc: "Practical designs for families, couples and first home buyers. Lower cost, easier maintenance.", link: "/single-storey-homes" },
  { icon: Building2, title: "Double Storey", desc: "Maximise every square metre. Extra bedrooms, better privacy, elevated views.", link: "/double-storey-homes" },
  { icon: BedDouble, title: "1–4 Bedrooms", desc: "From compact starter homes to spacious family residences. Single or double storey.", link: "/home-designs" },
  { icon: PenTool, title: "Custom Design", desc: "Your vision, your block, your budget. Home offices, butler's pantries, teenage retreats.", link: "/contact" },
];

const processSteps = [
  { num: "01", title: "Free Consultation", desc: "We discuss your vision, budget and block. No obligation, no pressure." },
  { num: "02", title: "Design & Quote", desc: "Choose from our range or go custom. Clear, all-inclusive pricing with no hidden surprises." },
  { num: "03", title: "Approvals & Build", desc: "We manage every council approval and permit. You focus on the exciting parts." },
  { num: "04", title: "Handover", desc: "Regular quality checks throughout. At handover, your home is finished to standard." },
];

const serviceAreas = [
  "Rockingham", "Cockburn", "Kwinana", "Mandurah",
  "Baldivis", "Wellard", "Lakelands", "Secret Harbour",
  "Golden Bay", "Byford", "Serpentine Jarrahdale"
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function HomePage() {
  const [tIndex, setTIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  useReveal();

  useEffect(() => {
    const timer = setInterval(() => setTIndex((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const nextT = () => setTIndex((p) => (p + 1) % testimonials.length);
  const prevT = () => setTIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <SiteLayout>
      {/* ═══════════════════════════════════════
          HERO — VIDEO
          ═══════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] flex items-end bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        </div>

        {/* Mute Toggle */}
        <button
          onClick={toggleMute}
          className={`absolute top-24 right-6 sm:top-28 sm:right-10 z-20 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] uppercase tracking-widest font-medium hover:bg-[#D4A017] hover:border-[#D4A017] hover:text-black transition-all duration-300 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
        >
          {isMuted ? <VolumeX size={14} strokeWidth={1.5} /> : <Volume2 size={14} strokeWidth={1.5} />}
          <span className="hidden sm:inline">{isMuted ? "Muted" : "Sound On"}</span>
        </button>

        {/* Hero Content — Asymmetric, bold */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-20 sm:pb-28 pt-32 sm:pt-40">
          <div className="max-w-3xl">
            <div className="reveal flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#D4A017]" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium">
                Perth's Southern Suburbs
              </p>
            </div>
            
            <h1 className="reveal text-[48px] sm:text-[72px] md:text-[90px] lg:text-[110px] font-semibold text-white leading-[0.9] tracking-tight mb-8">
              Build<br />
              <span className="text-[#D4A017]">Better.</span>
            </h1>
            
            <p className="reveal text-[16px] sm:text-[18px] text-white/50 leading-relaxed max-w-md mb-10">
              Single and double storey homes across Rockingham, Cockburn, Kwinana and Mandurah. We handle everything — from design to handover.
            </p>
            
            <div className="reveal flex flex-wrap gap-4">
              <Link
                to="/home-designs"
                className="inline-flex items-center gap-3 bg-[#D4A017] text-black px-7 py-4 text-[14px] font-semibold hover:bg-white transition-colors duration-200"
              >
                View Home Designs
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-white/30 text-white px-7 py-4 text-[14px] font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-200"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
          <ChevronDown size={18} className="text-white/30 animate-bounce" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS — Full width, asymmetric
          ═══════════════════════════════════════ */}
     {/* ═══════════════════════════════════════
    TRUST BAR — Compact, mobile-safe
    ═══════════════════════════════════════ */}
<section className="bg-black border-t-4 border-[#D4A017]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 sm:py-14">
    <div className="flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-12 lg:gap-20">
      
      {/* Left — Bold statement */}
      <div className="reveal shrink-0">
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-white leading-[1] tracking-tight">
          No hidden costs.<br className="hidden sm:block" />
          <span className="text-[#D4A017]"> Ever.</span>
        </h2>
      </div>

      {/* Divider — hidden on mobile */}
      <div className="hidden sm:block w-px h-14 bg-white/10 shrink-0" />

      {/* Right — Three micro points */}
      <div className="reveal flex flex-col sm:flex-row gap-5 sm:gap-8 lg:gap-12">
        {[
          { label: "All-Inclusive", sub: "Quote to handover" },
          { label: "Full Approvals", sub: "We handle everything" },
          { label: "Fixed Price", sub: "No variations" }
        ].map((item) => (
          <div key={item.label} className="group flex items-center gap-3 sm:block">
            <div className="w-1.5 h-1.5 bg-[#D4A017] sm:hidden shrink-0" />
            <div>
              <p className="text-[14px] font-semibold text-white tracking-tight group-hover:text-[#D4A017] transition-colors duration-200">
                {item.label}
              </p>
              <p className="text-[12px] text-white/30 mt-0.5 hidden sm:block">
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>
      {/* ═══════════════════════════════════════
          HOME TYPES — Asymmetric layout
          ═══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left — Sticky heading */}
            <div className="lg:col-span-4 reveal">
              <div className="lg:sticky lg:top-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px] bg-[#D4A017]" />
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium">
                    What We Build
                  </p>
                </div>
                <h2 className="text-[36px] sm:text-[48px] font-semibold text-black leading-[1.05] tracking-tight mb-6">
                  A home for<br />every lifestyle.
                </h2>
                <p className="text-[15px] text-black/50 leading-relaxed mb-8">
                  From practical starter homes to prestige family residences. All built across Perth's southern suburbs with quality craftsmanship.
                </p>
                <Link
                  to="/home-designs"
                  className="inline-flex items-center gap-2 text-[14px] text-black font-medium hover:text-[#D4A017] transition-colors"
                >
                  View all designs
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right — Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {homeTypes.map((item, i) => (
                <Link
                  key={item.title}
                  to={item.link}
                  className="reveal group bg-black p-8 sm:p-10 hover:bg-[#D4A017] transition-all duration-500"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-[#D4A017] flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-500">
                    <item.icon size={22} className="text-black group-hover:text-[#D4A017] transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[22px] font-semibold text-white mb-3 group-hover:text-black transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-white/40 leading-relaxed mb-4 group-hover:text-black/60 transition-colors duration-500">
                    {item.desc}
                  </p>
                  <span className="text-[12px] text-[#D4A017] font-medium group-hover:text-black transition-colors duration-500">
                    Explore →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS — Dark, cinematic
          ═══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4A017]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div className="mb-16 sm:mb-20 reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#D4A017]" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium">
                The Process
              </p>
            </div>
            <h2 className="text-[36px] sm:text-[48px] font-semibold text-white leading-[1.05] tracking-tight">
              From vision<br />to keys.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className="reveal bg-black p-8 sm:p-10 group hover:bg-[#D4A017] transition-all duration-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="text-[48px] sm:text-[64px] font-semibold text-white/10 leading-none mb-4 group-hover:text-black/10 transition-colors duration-500">
                  {step.num}
                </p>
                <h3 className="text-[18px] font-semibold text-white mb-3 group-hover:text-black transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-[14px] text-white/40 leading-relaxed group-hover:text-black/60 transition-colors duration-500">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY CHOOSE US — Split screen
          ═══════════════════════════════════════ */}
      <section className="bg-[#D4A017]">
        <div className="grid lg:grid-cols-2">
          <div className="p-10 sm:p-16 lg:p-20 flex flex-col justify-center">
            <div className="reveal max-w-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-black" />
                <p className="text-[11px] uppercase tracking-[0.3em] text-black/50 font-medium">
                  Why JK WA Development
                </p>
              </div>
              <h2 className="text-[36px] sm:text-[48px] font-semibold text-black leading-[1.05] tracking-tight mb-6">
                Local knowledge.<br />Transparent pricing.<br />Full management.
              </h2>
              <p className="text-[15px] text-black/50 leading-relaxed mb-8">
                Choosing the right builder is one of the biggest decisions you'll make. Here's what sets us apart.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Deep roots in Perth's southern suburbs",
                  "All-inclusive pricing — no hidden costs",
                  "Dedicated contact throughout your build",
                  "Regular quality inspections",
                  "Full approvals service included"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-black shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-[14px] text-black/60">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/why-choose-us"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3.5 text-[14px] font-medium hover:bg-white hover:text-black transition-colors duration-200"
              >
                Learn More
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="bg-black p-10 sm:p-16 lg:p-20 flex flex-col justify-center">
            <div className="reveal space-y-6 max-w-lg">
              {[
                { icon: HardHat, title: "Quality", body: "Quality materials, licensed tradespeople, and regular inspections throughout your build." },
                { icon: CheckCircle, title: "Transparency", body: "Clear, all-inclusive pricing with no hidden surprises. What we quote is what you pay." },
                { icon: Users, title: "Communication", body: "Kept informed and involved at every stage. It's your home — you deserve to know what's happening." },
              ].map((item, i) => (
                <div key={item.title} className="border-l-2 border-[#D4A017] pl-6 py-2" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon size={18} className="text-[#D4A017]" strokeWidth={1.5} />
                    <h3 className="text-[16px] font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-[14px] text-white/40 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          APPROVALS — Image + content
          ═══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 reveal">
              <div className="aspect-[16/10] bg-black overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop"
                  alt="Home construction"
                  className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-700"
                />
                <div className="absolute bottom-6 left-6">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-1">Full Service</p>
                  <p className="text-[20px] font-semibold text-white">We handle the red tape</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-[#D4A017]" />
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium">
                  Building Approvals
                </p>
              </div>
              <h2 className="text-[32px] sm:text-[40px] font-semibold text-black leading-[1.05] tracking-tight mb-6">
                Stress-free approvals.
              </h2>
              <p className="text-[15px] text-black/50 leading-relaxed mb-6">
                The approvals process is the most confusing part of building. We take full responsibility — council approvals, building permits, development applications, BAL assessments and title requirements.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {["Council Approvals", "Building Permits", "DA Applications", "BAL Assessments", "Title Requirements", "Survey Plans"].map((item) => (
                  <div key={item} className="flex items-center gap-2 p-3 border border-black/10">
                    <Shield size={13} className="text-[#D4A017]" strokeWidth={1.5} />
                    <span className="text-[12px] font-medium text-black">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/building-approvals"
                className="inline-flex items-center gap-2 text-[14px] text-[#D4A017] font-medium hover:text-black transition-colors"
              >
                How approvals work
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

<PainVsGain />
      {/* ═══════════════════════════════════════
          TESTIMONIALS — Minimal, editorial
          ═══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="mb-16 sm:mb-20 reveal text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#D4A017]" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium">
                Client Voices
              </p>
              <div className="w-8 h-[2px] bg-[#D4A017]" />
            </div>
            <h2 className="text-[36px] sm:text-[48px] font-semibold text-white leading-[1.05] tracking-tight">
              Built for families<br />like yours.
            </h2>
          </div>

          <div className="reveal">
            <div className="text-center mb-10">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[tIndex].rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#D4A017] text-[#D4A017]" strokeWidth={1.5} />
                ))}
              </div>
              <blockquote className="text-[22px] sm:text-[28px] md:text-[32px] text-white leading-snug font-light max-w-2xl mx-auto">
                "{testimonials[tIndex].quote}"
              </blockquote>
            </div>

            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-12 h-px bg-white/20" />
              <p className="text-[13px] tracking-wide text-white/40">
                <span className="text-[#D4A017] font-medium">{testimonials[tIndex].name}</span>
                {" — "}
                {testimonials[tIndex].suburb}
              </p>
              <div className="w-12 h-px bg-white/20" />
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={prevT}
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/30 hover:border-[#D4A017] hover:text-[#D4A017] transition-all duration-200 text-lg"
              >
                ←
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTIndex(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${i === tIndex ? "w-8 bg-[#D4A017]" : "w-1 bg-white/20 hover:bg-[#D4A017]/50"}`}
                  />
                ))}
              </div>
              <button
                onClick={nextT}
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/30 hover:border-[#D4A017] hover:text-[#D4A017] transition-all duration-200 text-lg"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICE AREAS — Grid with hover
          ═══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16 sm:mb-20 reveal text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#D4A017]" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium">
                Service Area
              </p>
              <div className="w-8 h-[2px] bg-[#D4A017]" />
            </div>
            <h2 className="text-[36px] sm:text-[48px] font-semibold text-black leading-[1.05] tracking-tight">
              Building across<br />the southern corridor.
            </h2>
          </div>

          <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {serviceAreas.map((suburb) => (
              <div
                key={suburb}
                className="group flex items-center justify-center gap-2 p-4 border border-black/10 hover:border-[#D4A017] hover:bg-[#D4A017] transition-all duration-300 cursor-default"
              >
                <MapPin size={13} className="text-[#D4A017] group-hover:text-black transition-colors duration-300" strokeWidth={1.5} />
                <span className="text-[13px] font-medium text-black group-hover:text-black transition-colors duration-300">{suburb}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA — Bold, mustard
          ═══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-[#D4A017]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center reveal">
          <p className="text-[11px] uppercase tracking-[0.3em] text-black/40 mb-4 font-medium">
            Let's Build Your Dream Home
          </p>
          <h2 className="text-[40px] sm:text-[56px] md:text-[64px] font-semibold text-black leading-[1.05] tracking-tight mb-6">
            Ready to start<br />planning?
          </h2>
          <p className="text-[16px] text-black/50 max-w-md mx-auto mb-10">
            Contact the JK WA Development team today for a free, no-obligation consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 text-[14px] font-semibold hover:bg-white hover:text-black transition-colors duration-200"
            >
              Get a Free Quote
              <ArrowRight size={15} />
            </Link>
            <a
              href="tel:+61812345678"
              className="inline-flex items-center justify-center gap-2 border-2 border-black text-black px-8 py-4 text-[14px] font-medium hover:bg-black hover:text-white transition-all duration-200"
            >
              <Phone size={15} strokeWidth={1.5} />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}