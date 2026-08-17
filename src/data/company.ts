export const COMPANY = {
  name: "Branded Purifier",
  tagline: "Complete Water Treatment Solutions",
  primaryPhone: "7530048763",
  proprietor: { name: "Suriya", phone: "9629866415" },
  gstin: "33LUVPS1915C1Z9",
} as const;

export type Branch = {
  name: string;
  locality: string;
  phone: string;
  since?: string;
  lat?: number;
  lng?: number;
};

/* Branch names and phone numbers exactly as listed in the company profile. */
export const BRANCHES: Branch[] = [
  { name: "Kanchipuram", locality: "Keeraimandabam", phone: "9629866415", since: "2021", lat: 12.8342, lng: 79.7036 },
  { name: "Vanthavasi", locality: "Vanthavasi", phone: "9500389676", since: "2022", lat: 12.4990, lng: 79.6015 },
  { name: "Dusi", locality: "Dusi", phone: "8608480809", since: "2023", lat: 12.7710, lng: 79.6640 },
  { name: "Uthiramerur", locality: "Uthiramerur", phone: "9500389676", since: "2023", lat: 12.6167, lng: 79.7667 },
  { name: "Kanchipuram", locality: "Sangusapettai", phone: "9730048763", since: "2024", lat: 12.8250, lng: 79.7100 },
];

export type Milestone = { year: string; title: string; note?: string };

/* Company-stated history and company-provided customer figures. */
export const HISTORY: Milestone[] = [
  { year: "2021", title: "Kanchipuram branch opened", note: "Company-stated figure: 700 customers by year end." },
  { year: "2022", title: "Vanthavasi branch opened", note: "Company-stated figure: 1,600 customers overall by year end." },
  { year: "2023", title: "Dusi branch opened", note: "Company-stated figure: 2,185 customers overall by year end." },
  { year: "2023", title: "Uthiramerur branch opened", note: "Company-stated figure: 3,000 customers overall by year end." },
  { year: "2024", title: "Sangusapettai (Kanchipuram) branch opened" },
];

export const INDUSTRIES = [
  {
    title: "Residential",
    body: "Domestic RO systems, wall-mounted and under-sink units, bathroom and bungalow softeners for homes and apartments.",
  },
  {
    title: "Commercial Buildings",
    body: "25–100 LPH commercial RO systems and skid units for offices, retail premises and shared facilities.",
  },
  {
    title: "Hospitality",
    body: "Commercial RO systems, stainless steel water coolers and storage tanks for hotels, restaurants and canteens.",
  },
  {
    title: "Healthcare",
    body: "DM plants, UV disinfection and demineralised water systems for clinical and laboratory water requirements.",
  },
  {
    title: "Educational Facilities",
    body: "Institutional RO systems, water coolers and card / coin water vending units for schools and colleges.",
  },
  {
    title: "Industrial Facilities",
    body: "250–2000 LPH industrial RO plants, softening, dosing, filtration and control panels for process water.",
  },
  {
    title: "Water Treatment Operators",
    body: "Membranes, pumps, vessels, media, instrumentation and spares supplied to plant operators and service partners.",
  },
] as const;
