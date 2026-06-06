import { Link } from "react-router-dom";
import { SiteLayout } from "../components/SiteLayout";
import { ArrowRight, Phone, Mail, MapPin, CheckCircle2, Send, AlertCircle, X } from "lucide-react";
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

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbylaOaXJPWKLY_1P5nNZYCE-0pSD7MmfGDsvy2y0gj4s9i9x1Ld_1h7wcD7arG_xvhE/exec";

const suburbs = [
  "Rockingham", "Cockburn", "Kwinana", "Mandurah",
  "Baldivis", "Wellard", "Lakelands", "Secret Harbour",
  "Golden Bay", "Byford", "Serpentine Jarrahdale"
];

// Toast component
function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-24 right-6 z-50 flex items-center gap-3 px-5 py-4 shadow-lg max-w-sm animate-in slide-in-from-right duration-300 ${
      type === 'success' ? 'bg-[#D4A017] text-black' : 'bg-black border border-red-500 text-white'
    }`}>
      {type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} className="text-red-500" />}
      <p className="text-sm font-medium">{message}</p>
      <button onClick={onClose} className="ml-2 hover:opacity-70">
        <X size={14} />
      </button>
    </div>
  );
}

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
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

  const showToast = (message, type = 'error') => {
    setToast({ message, type });
  };

  const closeToast = () => setToast(null);

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
    if (Object.keys(errs).length > 0) { 
      setErrors(errs); 
      showToast("Please fix the errors in the form.", "error");
      return; 
    }

    setErrors({});
    setLoading(true);

    try {
      const formDataObj = new FormData();
      formDataObj.append("name", formData.name);
      formDataObj.append("email", formData.email);
      formDataObj.append("phone", formData.phone);
      formDataObj.append("suburb", formData.suburb);
      formDataObj.append("homeType", formData.homeType);
      formDataObj.append("bedrooms", formData.bedrooms);
      formDataObj.append("message", formData.message);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formDataObj,
      });

      setLoading(false);
      setDone(true);
      showToast("Message sent successfully! We'll be in touch soon.", "success");

    } catch (error) {
      console.error("Submit error:", error);
      setLoading(false);
      showToast("Something went wrong. Please try again or call us at +61 444 535 933 .", "error");
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const next = { ...prev }; delete next[field]; return next; });
  };

  return (
    <SiteLayout>
      {/* Toast */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={closeToast} />}

      {/* HERO */}
      <section className="relative min-h-[70vh] bg-black flex items-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="text-[30vw] font-semibold text-white/[0.02] leading-none">0{'1'}</span>
        </div>
        <div className="absolute left-6 lg:left-10 top-0 w-1 h-full bg-[#D4A017]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pl-12 lg:pl-16">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="reveal text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-6">Contact</p>
              <h1 className="reveal text-[clamp(48px,10vw,140px)] font-semibold text-white leading-[0.85] tracking-tighter">
                Let&apos;s<br />talk.
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="reveal text-[15px] text-white/40 leading-relaxed mb-8">
                Free, no-obligation consultation and quote. Contact the JK WA Development team today and let&apos;s turn your vision into the home you&apos;ve always wanted.
              </p>
              <div className="reveal flex flex-wrap gap-4">
                <a href="tel:+61444535933" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-[#D4A017] transition-colors">
                  <Phone size={16} /> +61 444 535 933
                </a>
                <a href="mailto:info@jkwadevelopment.com.au" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-[#D4A017] transition-colors">
                  <Mail size={16} /> info@jkwadevelopment.com.au
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="py-10 bg-[#D4A017]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-black flex items-center justify-center">
                <Phone size={18} className="text-[#D4A017]" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-black/50 font-medium">Phone</p>
                <a href="tel:+61444535933" className="text-sm font-semibold text-black hover:text-white transition-colors">+61 444 535 933</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-black flex items-center justify-center">
                <Mail size={18} className="text-[#D4A017]" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-black/50 font-medium">Email</p>
                <a href="mailto:info@jkwadevelopment.com.au" className="text-sm font-semibold text-black hover:text-white transition-colors">info@jkwadevelopment.com.au</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-black flex items-center justify-center">
                <MapPin size={18} className="text-[#D4A017]" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-black/50 font-medium">Location</p>
                <p className="text-sm font-semibold text-black">Perth, Western Australia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          {done ? (
            <div className="reveal text-center py-20 sm:py-32">
              <div className="w-20 h-20 bg-[#D4A017] flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={40} className="text-black" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-4">Message received.</h2>
              <p className="text-base text-black/50 max-w-md mx-auto mb-8">Thank you for contacting JK WA Development. We&apos;ll be in touch within 24 hours.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/" className="inline-flex items-center justify-center gap-2 bg-[#D4A017] text-black px-6 py-3 text-sm font-semibold hover:bg-black hover:text-white transition-colors">Back to Home <ArrowRight size={14} /></Link>
                <button onClick={() => { setDone(false); setFormData({ name: "", email: "", phone: "", suburb: "", homeType: "", bedrooms: "", message: "" }); }} className="inline-flex items-center justify-center gap-2 border border-black/20 text-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors">Send Another</button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-4">
                <div className="reveal lg:sticky lg:top-8">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-3">Get Started</p>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-black leading-tight mb-4">Tell us about your project.</h2>
                  <p className="text-sm text-black/50 leading-relaxed mb-6">The more detail you provide, the better we can tailor your quote and consultation.</p>
                  <div className="space-y-4 pt-6 border-t border-black/10">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-black/30 font-medium">What happens next?</p>
                    <div className="space-y-3">
                      {["We review your enquiry within 24 hours", "We call to discuss your vision and budget", "We provide a free, no-obligation quote", "We start planning your dream home"].map((step, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-black flex items-center justify-center text-[10px] font-bold text-[#D4A017]">{i + 1}</div>
                          <span className="text-sm text-black/60">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <form onSubmit={onSubmit} className="reveal space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <FormField label="Full Name *" error={errors.name}>
                      <input type="text" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="John Smith" className="w-full bg-transparent border-b-2 border-black/10 focus:border-[#D4A017] py-3 text-black placeholder:text-black/20 text-base outline-none transition-colors" />
                    </FormField>
                    <FormField label="Email *" error={errors.email}>
                      <input type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="john@email.com" className="w-full bg-transparent border-b-2 border-black/10 focus:border-[#D4A017] py-3 text-black placeholder:text-black/20 text-base outline-none transition-colors" />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <FormField label="Phone *" error={errors.phone}>
                      <input type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="04XX XXX XXX" className="w-full bg-transparent border-b-2 border-black/10 focus:border-[#D4A017] py-3 text-black placeholder:text-black/20 text-base outline-none transition-colors" />
                    </FormField>
                    <FormField label="Suburb *" error={errors.suburb}>
                      <div className="relative">
                        <select value={formData.suburb} onChange={(e) => handleChange("suburb", e.target.value)} className="w-full bg-transparent border-b-2 border-black/10 focus:border-[#D4A017] py-3 text-black text-base outline-none transition-colors appearance-none cursor-pointer">
                          <option value="" disabled className="bg-white text-black/50">Select suburb</option>
                          {suburbs.map((s) => (<option key={s} value={s} className="bg-white text-black">{s}</option>))}
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"><ArrowRight size={16} className="text-black/30 rotate-90" /></div>
                      </div>
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <FormField label="Home Type *" error={errors.homeType}>
                      <div className="relative">
                        <select value={formData.homeType} onChange={(e) => handleChange("homeType", e.target.value)} className="w-full bg-transparent border-b-2 border-black/10 focus:border-[#D4A017] py-3 text-black text-base outline-none transition-colors appearance-none cursor-pointer">
                          <option value="" disabled className="bg-white text-black/50">Select type</option>
                          <option value="single" className="bg-white text-black">Single Storey</option>
                          <option value="double" className="bg-white text-black">Double Storey</option>
                          <option value="custom" className="bg-white text-black">Custom Design</option>
                          <option value="unsure" className="bg-white text-black">Not Sure Yet</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"><ArrowRight size={16} className="text-black/30 rotate-90" /></div>
                      </div>
                    </FormField>
                    <FormField label="Bedrooms *" error={errors.bedrooms}>
                      <div className="relative">
                        <select value={formData.bedrooms} onChange={(e) => handleChange("bedrooms", e.target.value)} className="w-full bg-transparent border-b-2 border-black/10 focus:border-[#D4A017] py-3 text-black text-base outline-none transition-colors appearance-none cursor-pointer">
                          <option value="" disabled className="bg-white text-black/50">Select count</option>
                          <option value="1-2" className="bg-white text-black">1-2 Bedrooms</option>
                          <option value="3" className="bg-white text-black">3 Bedrooms</option>
                          <option value="4" className="bg-white text-black">4 Bedrooms</option>
                          <option value="4+" className="bg-white text-black">4+ Bedrooms</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"><ArrowRight size={16} className="text-black/30 rotate-90" /></div>
                      </div>
                    </FormField>
                  </div>

                  <FormField label="Tell us about your project *" error={errors.message}>
                    <textarea value={formData.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Block size, budget, timeline, specific requirements - anything that helps us understand your vision." rows={5} className="w-full bg-transparent border-b-2 border-black/10 focus:border-[#D4A017] py-3 text-black placeholder:text-black/20 text-base outline-none transition-colors resize-none" />
                  </FormField>

                  <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-black/30 max-w-sm">By submitting, you agree to our privacy policy. We never share your details.</p>
                    <button type="submit" disabled={loading} className="inline-flex items-center gap-3 bg-[#D4A017] text-black px-8 py-4 text-sm font-semibold hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0">
                      {loading ? (<><span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" /> Sending...</>) : (<>Send Message <Send size={16} /></>)}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4A017] font-medium mb-3">Where We Build</p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">Across Perth&apos;s<br />southern suburbs.</h2>
            </div>
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2">
                {suburbs.map((s) => (
                  <span key={s} className="px-4 py-2 border border-white/10 text-sm text-white/40 hover:border-[#D4A017] hover:text-[#D4A017] transition-all duration-300 cursor-default">{s}</span>
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
      <span className={`block text-[10px] uppercase tracking-[0.25em] mb-2 font-bold ${error ? 'text-red-500' : 'text-black/30'}`}>{label}</span>
      {children}
      {error && (<span className="flex items-start gap-1.5 mt-2 text-xs text-red-500"><AlertCircle size={12} className="mt-0.5 shrink-0" />{error}</span>)}
    </label>
  );
}