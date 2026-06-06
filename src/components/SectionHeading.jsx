export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}) {
  return (
    <div className={`reveal max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`text-[11px] uppercase tracking-[0.35em] mb-5 ${light ? "text-[var(--gold)]" : "text-[var(--gold)]"}`}>
          — {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-4xl md:text-5xl leading-[1.05] ${light ? "text-cream" : "text-foreground"}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed ${light ? "text-cream/70" : "text-muted-foreground"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}