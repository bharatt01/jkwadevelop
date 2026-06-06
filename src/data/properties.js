import p1 from "../assets/property-1.jpg";
import p2 from "../assets/property-2.jpg";
import p3 from "../assets/property-3.jpg";
import p4 from "../assets/property-4.jpg";
import p5 from "../assets/property-5.jpg";
import p6 from "../assets/property-6.jpg";
import p7 from "../assets/property-7.jpg";
import p8 from "../assets/property-8.jpg";
import p9 from "../assets/property-9.jpg";

export const properties = [
  { id: "1", image: p1, suburb: "Mosman", state: "NSW", type: "Residential", priceMin: 3200000, priceMax: 3500000, beds: 4, baths: 3, parking: 2, blurb: "Architect-designed beachside home with harbour glimpses." },
  { id: "2", image: p2, suburb: "Fitzroy North", state: "VIC", type: "Residential", priceMin: 1850000, priceMax: 2000000, beds: 3, baths: 2, parking: 1, blurb: "Restored Victorian terrace on a leafy boulevard." },
  { id: "3", image: p3, suburb: "New Farm", state: "QLD", type: "Residential", priceMin: 1450000, priceMax: 1600000, beds: 4, baths: 2, parking: 2, blurb: "Classic Queenslander with wraparound veranda." },
  { id: "4", image: p4, suburb: "Cottesloe", state: "WA", type: "Investment", priceMin: 2100000, priceMax: 2400000, beds: 3, baths: 3, parking: 2, blurb: "Penthouse residence with uninterrupted Indian Ocean views." },
  { id: "5", image: p5, suburb: "Adelaide CBD", state: "SA", type: "Commercial", priceMin: 4800000, priceMax: 5200000, beds: 0, baths: 0, parking: 12, blurb: "Boutique A-grade commercial building, long WALE." },
  { id: "6", image: p6, suburb: "Mudgee", state: "NSW", type: "Land", priceMin: 850000, priceMax: 980000, beds: 0, baths: 0, parking: 0, blurb: "120 acres of cleared grazing land with creek frontage." },
  { id: "7", image: p7, suburb: "Surfers Paradise", state: "QLD", type: "Investment", priceMin: 1250000, priceMax: 1400000, beds: 2, baths: 2, parking: 1, blurb: "Sub-penthouse with skyline and ocean aspect." },
  { id: "8", image: p8, suburb: "Battery Point", state: "TAS", type: "Residential", priceMin: 1100000, priceMax: 1250000, beds: 3, baths: 1, parking: 1, blurb: "Heritage sandstone cottage moments from the waterfront." },
  { id: "9", image: p9, suburb: "Braddon", state: "ACT", type: "Residential", priceMin: 980000, priceMax: 1100000, beds: 3, baths: 2, parking: 2, blurb: "Contemporary townhouse in the heart of the capital." },
];

export const formatPriceRange = (min, max) =>
  `$${(min / 1_000_000).toFixed(2)}M – $${(max / 1_000_000).toFixed(2)}M AUD`;