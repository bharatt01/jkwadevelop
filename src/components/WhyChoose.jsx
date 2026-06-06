import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const WHY_ITEMS = [
  {
    number: "01",
    title: "Local Knowledge",
    description:
      "Deep roots in Perth's southern suburbs. We understand the soil conditions, wind zones, council requirements, and estate design guidelines across Rockingham, Baldivis, Cockburn, Kwinana, Secret Harbour, and Mandurah.",
  },
  {
    number: "02",
    title: "Transparent Pricing",
    description:
      "Clear, all-inclusive pricing from the moment you receive your quote. We outline exactly what is included, calculate site costs accurately upfront, and communicate any changes before proceeding. No hidden surprises.",
  },
  {
    number: "03",
    title: "Full Approvals Service",
    description:
      "We take full responsibility for managing all council approvals, building permits, development applications, BAL assessments, and title requirements on your behalf. We handle the red tape so you can focus on the exciting parts.",
  },
  {
    number: "04",
    title: "Quality That Lasts",
    description:
      "Quality materials, licensed and experienced tradespeople, and regular inspections throughout your build. Our homes meet or exceed the National Construction Code and WA building standards. We address any defects before handover.",
  },
];

const WhyChoose = () => {
  return (
    <section className="relative bg-black text-white">
      <div className="grid lg:grid-cols-2">
        {/* LEFT STICKY SECTION */}
        <div className="hidden lg:block relative">
          <div className="sticky top-0 h-screen overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
              alt="JK WA Development home"
              className="absolute inset-0 w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 60px,
                  rgba(212,160,23,0.15) 60px,
                  rgba(212,160,23,0.15) 61px
                )`,
              }}
            />
            <div className="absolute bottom-12 left-10 z-10 max-w-xl">
              <p className="text-[#D4A017] uppercase tracking-[0.35em] text-sm font-bold">
                WHY JK WA DEVELOPMENT
              </p>
              <h2 className="text-5xl xl:text-6xl font-semibold leading-[1.05] mt-4">
                The builder families<br />across Perth's south<br />trust.
              </h2>
              <div className="w-24 h-[3px] bg-[#D4A017] mt-7" />
              <p className="mt-7 text-white/75 leading-relaxed max-w-md">
                Local expertise, transparent pricing, and full project management
                from design through to handover.
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE IMAGE */}
        <div className="lg:hidden relative h-[55vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
            alt="JK WA Development home"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute bottom-8 left-5 z-10 pr-6">
            <p className="text-[#D4A017] uppercase tracking-[0.3em] text-xs font-bold">
              WHY JK WA DEVELOPMENT
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mt-3">
              The builder families across Perth's south trust.
            </h2>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-black px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
          <div className="space-y-24">
            {WHY_ITEMS.map((item, index) => (
              <div
                key={index}
                className="group border-b border-white/10 pb-16 hover:border-[#D4A017]/40 transition-all duration-500"
              >
                <p className="text-[#D4A017] text-5xl sm:text-6xl lg:text-7xl font-semibold opacity-90">
                  {item.number}
                </p>
                <h3 className="text-2xl sm:text-4xl font-semibold mt-6 leading-tight group-hover:text-[#D4A017] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mt-5 text-white/70 leading-relaxed text-sm sm:text-base max-w-xl">
                  {item.description}
                </p>
                <Link
                  to="/why-choose-us"
                  className="inline-flex items-center gap-2 mt-7 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#D4A017] hover:text-white transition-all duration-300"
                >
                  Read More
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#D4A017]" />
    </section>
  );
};

export default WhyChoose;