import { Link } from "react-router-dom";
import { SiteLayout } from "../components/SiteLayout";
import { ArrowRight, Phone, Mail, MapPin, Clock, CheckCircle2, Send, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";

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

const suburbs = [
  "Rockingham", "Cockburn", "Kwinana", "Mandurah",
  "Baldivis", "Wellard", "Lakelands", "Secret Harbour",
  "Golden Bay", "Byford", "Serpentine Jarrahdale"
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    suburb: "",
    homeType: "",
    bedrooms: "",
    message: "",
  });

  useReveal();

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) errs.name = "Please enter your full name.";
    if (!formData.email.trim() || !formData.email.includes("@")) errs.email = "Please enter a valid email.";
    if (!formData.phone.trim()) errs.phone = "Please enter your phone number.";
    if (!formData.suburb) errs.suburb = "Please select your suburb.";
    if (!formData.homeType) errs.homeType = "Please select a home type.";
    if (!formData.bedrooms) errs.bedrooms = "Please select bedroom count.";
    if (!formData.message.trim() || formData.message.trim().length < 10) errs.message = "Please tell us more about your project (min 10 characters).";
    return errs;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setDone(true);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const next = { ...prev }; delete next[field]; return next; });
  };

  return (
    <SiteLayout>
      {/* HERO — Split, black left / mustard right */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        <div className="bg-black flex items-end p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="relative z-10 max-w-lg">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#D4A017] mb-4 font-bold">Contact</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-[0.95] tracking-tight mb-6">
              Let's build<br />your dream<br /><span className="text-[#D4A017]">home.</span>
            </h1>
            <p className="text-sm text-white/50 leading-relaxed mb-8">
              Free, no-obligation consultation and quote. Contact the JK WA Development team today and let's turn your vision into the home you've always wanted.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-[#D4A017]" />
              <span className="text-xs text-white/40">Response within 24 hours</span>
            </div>
          </div>
        </div>

        <div className="bg-[#D4A017] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="space-y-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-black/50 font-bold mb-1">Phone</p>
              <a href="tel:08XXXXXXXX" className="text-2xl sm:text-3xl font-semibold text-black hover:text-white transition-colors duration-200">
                08 XX XX XX
              </a>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-black/50 font-bold mb-1">Email</p>
              <a href="mailto:info@jkwadevelopment.com.au" className="text-xl font-semibold text-black hover:text-white transition-colors duration-200">
                info@jkwadevelopment.com.au
              </a>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-black/50 font-bold mb-1">Hours</p>
              <p className="text-lg font-semibold text-black">Mon – Fri, 8am – 6pm AWST</p>
              <p className="text-sm text-black/50 mt-1">Weekend appointments available</p>
            </div>
            <div className="pt-6 border-t-2 border-black/10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-black/50 font-bold mb-3">Service Area</p>
              <div className="flex flex-wrap gap-2">
                {suburbs.slice(0, 6).map((s) => (
                  <span key={s} className="px-3 py-1 bg-black/10 text-xs font-medium text-black">{s}</span>
                ))}
                <span className="px-3 py-1 bg-black/10 text-xs font-medium text-black">+5 more</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-black">
        <div className="max-w-6xl mx-auto">
          {done ? (
            <div className="reveal text-center py-20 sm:py-32">
              <div className="w-20 h-20 bg-[#D4A017] flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={40} className="text-black" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                Message received.
              </h2>
              <p className="text-base text-white/50 max-w-md mx-auto mb-8">
                Thank you for contacting JK WA Development. We'll be in touch within 24 hours to discuss your new home build.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/" className="inline-flex items-center justify-center gap-2 bg-[#D4A017] text-black px-6 py-3 text-sm font-semibold hover:bg-white transition-colors">
                  Back to Home <ArrowRight size={14} />
                </Link>
                <button onClick={() => { setDone(false); setFormData({ name: "", email: "", phone: "", suburb: "", homeType: "", bedrooms: "", message: "" }); }} className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors">
                  Send Another
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-4">
                <div className="reveal lg:sticky lg:top-8">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4A017] mb-3 font-bold">The Form</p>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight mb-4">
                    Tell us about your project.
                  </h2>
                  <p className="text-sm text-white/50 leading-relaxed mb-6">
                    The more detail you provide, the better we can tailor your quote and consultation. All fields are required.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8">
                <form onSubmit={onSubmit} className="reveal space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <FormField label="Full Name *" error={errors.name}>
                      <input type="text" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="John Smith" className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#D4A017] py-3 text-white placeholder:text-white/20 text-base outline-none transition-colors" />
                    </FormField>
                    <FormField label="Email *" error={errors.email}>
                      <input type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="john@email.com" className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#D4A017] py-3 text-white placeholder:text-white/20 text-base outline-none transition-colors" />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <FormField label="Phone *" error={errors.phone}>
                      <input type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="04XX XXX XXX" className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#D4A017] py-3 text-white placeholder:text-white/20 text-base outline-none transition-colors" />
                    </FormField>
                    <FormField label="Suburb *" error={errors.suburb}>
                      <div className="relative">
                        <select value={formData.suburb} onChange={(e) => handleChange("suburb", e.target.value)} className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#D4A017] py-3 text-white text-base outline-none transition-colors appearance-none cursor-pointer">
                          <option value="" disabled className="bg-black text-white/50">Select suburb</option>
                          {suburbs.map((s) => (<option key={s} value={s} className="bg-black text-white">{s}</option>))}
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ArrowRight size={16} className="text-white/30 rotate-90" />
                        </div>
                      </div>
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <FormField label="Home Type *" error={errors.homeType}>
                      <div className="relative">
                        <select value={formData.homeType} onChange={(e) => handleChange("homeType", e.target.value)} className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#D4A017] py-3 text-white text-base outline-none transition-colors appearance-none cursor-pointer">
                          <option value="" disabled className="bg-black text-white/50">Select type</option>
                          <option value="single" className="bg-black text-white">Single Storey</option>
                          <option value="double" className="bg-black text-white">Double Storey</option>
                          <option value="custom" className="bg-black text-white">Custom Design</option>
                          <option value="unsure" className="bg-black text-white">Not Sure Yet</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ArrowRight size={16} className="text-white/30 rotate-90" />
                        </div>
                      </div>
                    </FormField>
                    <FormField label="Bedrooms *" error={errors.bedrooms}>
                      <div className="relative">
                        <select value={formData.bedrooms} onChange={(e) => handleChange("bedrooms", e.target.value)} className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#D4A017] py-3 text-white text-base outline-none transition-colors appearance-none cursor-pointer">
                          <option value="" disabled className="bg-black text-white/50">Select count</option>
                          <option value="1-2" className="bg-black text-white">1–2 Bedrooms</option>
                          <option value="3" className="bg-black text-white">3 Bedrooms</option>
                          <option value="4" className="bg-black text-white">4 Bedrooms</option>
                          <option value="4+" className="bg-black text-white">4+ Bedrooms</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ArrowRight size={16} className="text-white/30 rotate-90" />
                        </div>
                      </div>
                    </FormField>
                  </div>

                  <FormField label="Tell us about your project *" error={errors.message}>
                    <textarea value={formData.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Block size, budget, timeline, specific requirements — anything that helps us understand your vision." rows={5} className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#D4A017] py-3 text-white placeholder:text-white/20 text-base outline-none transition-colors resize-none" />
                  </FormField>

                  <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-white/30 max-w-sm">
                      By submitting, you agree to our privacy policy. We never share your details.
                    </p>
                    <button type="submit" disabled={loading} className="inline-flex items-center gap-3 bg-[#D4A017] text-black px-8 py-4 text-sm font-semibold hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0">
                      {loading ? (
                        <><span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" /> Sending...</>
                      ) : (
                        <>Send Message <Send size={16} /></>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-16 sm:py-20 bg-[#D4A017]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.3em] text-black/40 font-medium mb-3">Where We Build</p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-black leading-tight">
                Across Perth's southern suburbs.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2">
                {suburbs.map((s) => (
                  <span key={s} className="px-4 py-2 bg-black/10 text-sm font-medium text-black hover:bg-black hover:text-white transition-all duration-300 cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function FormField({ label, error, children }) {
  return (
    <label className="block">
      <span className={`block text-[10px] uppercase tracking-[0.25em] mb-2 font-bold ${error ? 'text-red-400' : 'text-white/40'}`}>
        {label}
      </span>
      {children}
      {error && (
        <span className="flex items-start gap-1.5 mt-2 text-xs text-red-400">
          <AlertCircle size={12} className="mt-0.5 shrink-0" />
          {error}
        </span>
      )}
    </label>
  );
}
