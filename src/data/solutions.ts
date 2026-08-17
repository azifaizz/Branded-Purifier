import type { Scale } from "./catalog";

export type Solution = {
  slug: "domestic" | "commercial" | "industrial" | "components";
  scale: Scale;
  name: string;
  short: string;
  intro: string;
  capacity: string;
  highlights: string[];
  process: { step: string; title: string; body: string }[];
  categories: string[];
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "domestic",
    scale: "domestic",
    name: "Domestic RO Solutions",
    short: "Wall-mounted, under-sink and cabinet RO purifiers for homes and apartments.",
    intro:
      "A complete range of household purifiers covering RO, UV, UF, mineral and alkaline stages, in wall-mounted, under-sink, hot-and-cold and copper cabinet formats — supplied, installed and serviced by Branded Purifier.",
    capacity: "Household Models (8-15L Storage)",
    highlights: [
      "RO, UV, UF and mineral cartridge configurations",
      "Wall-mounted, under-sink and counter-top cabinets",
      "Normal, hot and cold delivery models",
      "Copper, zinc, transparent and steel tank options",
      "Installation, cartridge replacement and annual service",
    ],
    process: [
      { step: "01", title: "Water test", body: "TDS and hardness are checked at the tap before a model is recommended." },
      { step: "02", title: "Model selection", body: "Stage configuration, tank material and delivery type are matched to the household." },
      { step: "03", title: "Installation", body: "Mounting, plumbing, drain routing and commissioning at site." },
      { step: "04", title: "Service", body: "Scheduled cartridge and membrane replacement through the nearest branch." },
    ],
    categories: ["domestic-ro"],
  },
  {
    slug: "commercial",
    scale: "commercial",
    name: "Commercial RO Solutions",
    short: "25–100 LPH skid and cabinet RO systems for offices, hotels and institutions.",
    intro:
      "Frame-mounted and cabinet commercial RO systems from 25 to 100 LPH, built with pre-filtration, membrane housings, pump sets and controls for continuous daily duty in shared premises.",
    capacity: "25 to 100 Liters/Hour (LPH)",
    highlights: [
      "MS and SS skid, open frame and closed cabinet builds",
      "Manual and automatic operation options",
      "Sediment, carbon and micron pre-filtration stages",
      "Stainless steel storage tanks and water coolers",
      "Card, coin and QR water vending integration",
    ],
    process: [
      { step: "01", title: "Requirement study", body: "Daily consumption, peak demand and available space are recorded." },
      { step: "02", title: "System sizing", body: "Capacity, pre-treatment and storage are sized around the feed water." },
      { step: "03", title: "Fabrication", body: "Skid assembly, plumbing and panel wiring completed before dispatch." },
      { step: "04", title: "Commissioning", body: "Installation, trial run and operator handover at site." },
    ],
    categories: ["commercial-ro", "water-coolers", "water-vending"],
  },
  {
    slug: "industrial",
    scale: "industrial",
    name: "Industrial RO Solutions",
    short: "250–2000 LPH RO plants, softeners, DM plants and dosing systems.",
    intro:
      "Industrial reverse osmosis plants from 250 to 2000 LPH with FRP pressure vessels, multiport valves, high-pressure pump sets and control panels — supported by softening, demineralisation, filtration and dosing systems.",
    capacity: "250 to 2000 Liters/Hour (LPH)",
    highlights: [
      "FRP and MS/SS pressure vessels with distribution systems",
      "Manual and automatic multiport valve configurations",
      "Antiscalant and chemical dosing arrangements",
      "Softening, iron removal and DM plant integration",
      "RO control panels with pressure and flow instrumentation",
    ],
    process: [
      { step: "01", title: "Feed water analysis", body: "Source water parameters determine pre-treatment and recovery." },
      { step: "02", title: "Plant design", body: "Vessel count, membrane array, pump duty and panel scope are fixed." },
      { step: "03", title: "Erection", body: "Plant assembly, piping, electrical work and pressure testing on site." },
      { step: "04", title: "Operation support", body: "Chemicals, media, membranes and spares supplied from stock." },
    ],
    categories: ["industrial-ro", "water-softeners", "dm-plants", "uf-systems"],
  },
  {
    slug: "components",
    scale: "components",
    name: "Components & Spares",
    short: "Membranes, pumps, housings, media, valves, panels and instrumentation.",
    intro:
      "A stocked component division covering everything required to build, service or upgrade a water treatment plant — from domestic cartridges to 8-inch membranes, FRP vessels and control panels.",
    capacity: "All Sizes (Domestic to Industrial)",
    highlights: [
      "RO membranes from 80 GPD to 8040 industrial elements",
      "Booster, feed, high-pressure, dosing and cleaning pumps",
      "FRP, MS and SS vessels, brine and dosing tanks",
      "Resins, media, antiscalant chemicals and instrumentation",
      "Control panels, UV sets, ozonators and accessories",
    ],
    process: [
      { step: "01", title: "Identify", body: "Existing plant details and part specifications are confirmed." },
      { step: "02", title: "Supply", body: "Components issued from branch stock across the network." },
      { step: "03", title: "Replace", body: "Technicians fit membranes, media and spares at site." },
      { step: "04", title: "Maintain", body: "Replacement intervals are tracked under annual service." },
    ],
    categories: [
      "ro-membranes",
      "pumps",
      "filters",
      "filter-housings",
      "membrane-housings",
      "tanks",
      "valves-connectors",
      "multiport-valves",
      "filter-media",
      "control-panels",
      "uv-systems",
      "chemicals",
      "instrumentation",
      "ro-accessories",
    ],
  },
];

export const findSolution = (slug: string) => SOLUTIONS.find((s) => s.slug === slug);
