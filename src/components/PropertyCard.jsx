import { Bath, BedDouble, Car, MapPin } from "lucide-react";
import { formatPriceRange } from "../data/properties";
import { Link } from "react-router-dom";

export function PropertyCard({ property }) {
  return (
    <article className="group bg-card border border-border hover:border-[var(--gold)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={`${property.suburb} ${property.type.toLowerCase()} property`}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-[var(--ink)] text-cream text-[10px] uppercase tracking-[0.2em] px-3 py-1.5">
          {property.type}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground uppercase tracking-[0.18em]">
          <MapPin size={12} className="text-[var(--gold)]" />
          {property.suburb}, {property.state}
        </div>
        <h3 className="mt-3 font-display text-2xl text-foreground leading-tight">
          {property.blurb}
        </h3>
        <p className="mt-4 text-sm text-[var(--gold)] font-medium">
          {formatPriceRange(property.priceMin, property.priceMax)}
        </p>
        {property.beds > 0 && (
          <div className="mt-5 flex items-center gap-5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><BedDouble size={14} /> {property.beds}</span>
            <span className="flex items-center gap-1.5"><Bath size={14} /> {property.baths}</span>
            <span className="flex items-center gap-1.5"><Car size={14} /> {property.parking}</span>
          </div>
        )}
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground border-b border-foreground pb-1 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
        >
          Enquire Now <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}