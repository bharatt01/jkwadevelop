import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Phone, Shield, FileCheck, HardHat, CheckCircle } from "lucide-react";

const painPoints = [
  { num: "01", text: "Council approvals dragging on for months with no updates." },
  { num: "02", text: "Hidden costs appearing halfway through the build." },
  { num: "03", text: "Builder goes quiet. You have no idea what's happening on site." },
  { num: "04", text: "Handover day — and the defects list is longer than your arm." },
  { num: "05", text: "Promised quality. Delivered shortcuts. No one takes responsibility." },
];

const solutions = [
  { title: "WE MANAGE", desc: "Every council approval, permit, and BAL assessment handled on your behalf. You focus on paint colours, not paperwork.", stat: "100%", statUnit: "approvals managed" },
  { title: "WE QUOTE", desc: "Clear, all-inclusive pricing from day one. Site costs calculated accurately upfront. No surprises, no blowouts, no excuses.", stat: "$0", statUnit: "hidden costs" },
  { title: "WE STAY", desc: "One dedicated contact from first consultation through to handover. Regular updates, site visits, and honest answers — always.", stat: "∞", statUnit: "communication" },
];

// ─── Scroll Reveal Hook ───
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (els.length === 0) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function BuildingProcess() {
  const [activePain, setActivePain] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const heroRef = useRef(null);
  const painContainerRef = useRef(null);
  
  useReveal();

  // Auto-rotate pain points
  useEffect(() => {
    const container = painContainerRef.current;
    if (!container) return;
    
    let timer;
    const startTimer = () => {
      timer = setInterval(() => {
        setActivePain((p) => (p + 1) % painPoints.length);
      }, 4000);
    };
    
    startTimer();
    
    const stopTimer = () => clearInterval(timer);
    container.addEventListener("mouseenter", stopTimer);
    container.addEventListener("mouseleave", startTimer);
    
    return () => {
      clearInterval(timer);
      container.removeEventListener("mouseenter", stopTimer);
      container.removeEventListener("mouseleave", startTimer);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div className="w-full">
      
      {/* HERO */}
      <section 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black py-20"
      >
        <div 
          className="absolute w-[600px] h-[600px] pointer-events-none transition-all duration-700 ease-out"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 70%)'
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="reveal text-xs uppercase tracking-[0.4em] text-[#D4A017] mb-6 font-bold">
            The Truth About Building
          </p>

          <h1 className="reveal text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.9] tracking-tight mb-8 text-white">
            BUILDING<br/>
            <span className="text-[#D4A017]">SHOULDN'T</span><br/>
            BE THIS HARD.
          </h1>

          <p className="reveal text-base sm:text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-12 leading-relaxed">
            Most builders leave you in the dark. Approvals stall, costs blow out, and communication dies. 
            We do things differently.
          </p>

          <div className="reveal flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Keep scrolling</span>
            <div className="w-px h-10 bg-gradient-to-b from-[#D4A017] to-transparent" />
          </div>
        </div>

        <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-[#D4A017]/30" />
        <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-[#D4A017]/30" />
      </section>

      {/* PAIN POINTS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-black">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-xs uppercase tracking-[0.4em] text-[#D4A017] mb-12 font-bold text-center">
            Sound Familiar?
          </p>

          <div ref={painContainerRef} className="space-y-3">
            {painPoints.map((pain, i) => {
              const isActive = activePain === i;
              return (
                <div
                  key={pain.num}
                  onClick={() => setActivePain(i)}
                  className={`group relative overflow-hidden cursor-pointer border ${
                    isActive 
                      ? 'border-[#D4A017] bg-[#D4A017]/10' 
                      : 'border-white/10 hover:border-white/30 bg-transparent'
                  }`}
                  style={{
                    transition: 'border-color 0.3s ease, background-color 0.3s ease',
                  }}
                >
                  <div className="flex items-center gap-4 sm:gap-8 p-5 sm:p-7">
                    <span 
                      className="text-3xl sm:text-4xl font-semibold shrink-0"
                      style={{
                        color: isActive ? '#D4A017' : 'rgba(255,255,255,0.1)',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {pain.num}
                    </span>
                    
                    <p 
                      className="text-base sm:text-lg md:text-xl font-semibold flex-1"
                      style={{
                        color: isActive ? '#ffffff' : 'rgba(255,255,255,0.4)',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {pain.text}
                    </p>

                    <ArrowUpRight 
                      size={20} 
                      className="shrink-0"
                      style={{
                        color: isActive ? '#D4A017' : 'rgba(255,255,255,0.1)',
                        transition: 'color 0.3s ease, transform 0.3s ease',
                        transform: isActive ? 'rotate(0deg)' : 'rotate(-45deg)',
                      }}
                    />
                  </div>

                  <div 
                    className="absolute bottom-0 left-0 h-0.5 bg-[#D4A017]"
                    style={{
                      width: isActive ? '100%' : '0%',
                      transition: 'width 0.5s ease',
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <section className="py-12 sm:py-16 px-6 bg-[#D4A017]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="reveal text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black tracking-tight">
            THERE IS A BETTER WAY.
          </p>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
            
            <div className="reveal group bg-white/5 border border-white/10 p-6 sm:p-10 hover:border-[#D4A017] hover:bg-[#D4A017]/5 transition-all duration-500">
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs uppercase tracking-[0.3em] text-[#D4A017] font-bold">{solutions[0].title}</span>
                <FileCheck size={18} className="text-white/20 group-hover:text-[#D4A017] transition-colors" />
              </div>
              <p className="text-lg sm:text-xl font-semibold text-white mb-6 leading-snug">{solutions[0].desc}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-semibold text-[#D4A017]">{solutions[0].stat}</span>
                <span className="text-xs uppercase tracking-wider text-white/40">{solutions[0].statUnit}</span>
              </div>
            </div>

            <div className="reveal group bg-[#D4A017] p-6 sm:p-10 hover:bg-[#E8C547] transition-colors duration-500">
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs uppercase tracking-[0.3em] text-black font-bold">{solutions[1].title}</span>
                <CheckCircle size={18} className="text-black/30 group-hover:text-black transition-colors" />
              </div>
              <p className="text-lg sm:text-xl font-semibold text-black mb-6 leading-snug">{solutions[1].desc}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-semibold text-black">{solutions[1].stat}</span>
                <span className="text-xs uppercase tracking-wider text-black/50">{solutions[1].statUnit}</span>
              </div>
            </div>
          </div>

          <div className="reveal group relative border border-white/10 p-6 sm:p-10 hover:border-[#D4A017] transition-all duration-500 overflow-hidden bg-black">
            <span className="absolute -right-2 -bottom-6 text-[10rem] sm:text-[14rem] font-semibold text-white/[0.03] leading-none select-none pointer-events-none">
              STAY
            </span>
            
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="lg:max-w-lg">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#D4A017] font-bold">{solutions[2].title}</span>
                  <HardHat size={18} className="text-white/20 group-hover:text-[#D4A017] transition-colors" />
                </div>
                <p className="text-lg sm:text-xl font-semibold text-white leading-snug">{solutions[2].desc}</p>
              </div>
              <div className="flex items-baseline gap-2 shrink-0">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#D4A017]">{solutions[2].stat}</span>
                <span className="text-xs uppercase tracking-wider text-white/40">{solutions[2].statUnit}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SPLIT */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-black flex items-center justify-center p-8 sm:p-12 lg:p-16 min-h-[400px]">
          <div className="reveal max-w-sm">
            <p className="text-xs uppercase tracking-[0.4em] text-[#D4A017] mb-4 font-bold">
              Ready To Build?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.05] mb-6">
              STOP<br/>WORRYING.<br/>START<br/><span className="text-[#D4A017]">BUILDING.</span>
            </h2>
            <p className="text-sm text-white/50 leading-relaxed mb-8">
              Every day you wait is a day your dream home gets further away. Let's fix that.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#D4A017] text-black px-6 py-3 text-xs uppercase tracking-wider font-bold hover:bg-white transition-colors duration-200"
            >
              Get Free Quote
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="bg-[#D4A017] flex items-center justify-center p-8 sm:p-12 lg:p-16 min-h-[400px] relative overflow-hidden">
          <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-[12rem] sm:text-[16rem] font-semibold text-black/[0.05] leading-none select-none pointer-events-none">
            NOW
          </span>
          
          <div className="reveal relative z-10 max-w-sm text-center lg:text-left">
            <div className="w-14 h-14 border-2 border-black flex items-center justify-center mb-6 mx-auto lg:mx-0">
              <Phone size={24} className="text-black" />
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/60 font-bold mb-2">
              Or call direct
            </p>
            <p className="text-2xl sm:text-3xl font-semibold text-black mb-3">
              08 XX XX XX
            </p>
            <p className="text-sm text-black/60 mb-4">
              Free consultation. No obligation. We call back within 30 minutes.
            </p>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
              <span className="text-xs uppercase tracking-wider text-black font-bold">Taking enquiries now</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}