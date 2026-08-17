export type Scale = "domestic" | "commercial" | "industrial" | "components";

export type Spec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  category: string;
  scale: Scale;
  image: string;
  gallery: string[];
  summary: string;
  specs: Spec[];
  models: string[];
  applications: string[];
};

export type Category = {
  id: string;
  name: string;
  scale: Scale;
};

export const CATEGORIES: Category[] = [
  { id: "domestic-ro", name: "Domestic RO Systems", scale: "domestic" },
  { id: "commercial-ro", name: "Commercial RO Systems", scale: "commercial" },
  { id: "industrial-ro", name: "Industrial RO Systems", scale: "industrial" },
  { id: "ro-membranes", name: "RO Membranes", scale: "components" },
  { id: "pumps", name: "Pumps", scale: "components" },
  { id: "filters", name: "Filters & Cartridges", scale: "components" },
  { id: "filter-housings", name: "Filter Housings", scale: "components" },
  { id: "membrane-housings", name: "Membrane Housings", scale: "components" },
  { id: "tanks", name: "Tanks & Vessels", scale: "components" },
  { id: "valves-connectors", name: "Valves & Connectors", scale: "components" },
  { id: "multiport-valves", name: "Multiport Valves", scale: "components" },
  { id: "control-panels", name: "Control Panels", scale: "components" },
  { id: "uv-systems", name: "UV Systems", scale: "components" },
  { id: "uf-systems", name: "UF Systems", scale: "components" },
  { id: "water-softeners", name: "Water Softeners", scale: "industrial" },
  { id: "dm-plants", name: "DM Plants", scale: "components" },
  { id: "filter-media", name: "Filter Media & Resins", scale: "components" },
  { id: "chemicals", name: "Chemicals / Antiscalant", scale: "components" },
  { id: "water-vending", name: "Water Vending Systems", scale: "components" },
  { id: "instrumentation", name: "Instrumentation", scale: "components" },
  { id: "water-coolers", name: "Water Coolers", scale: "components" },
  { id: "ro-accessories", name: "Other RO Accessories", scale: "components" },
];

export const PRODUCTS: Product[] = [
  {
    "slug": "swan",
    "name": "SWAN",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p17_8.webp",
    "gallery": [
      "/catalog/p17_8.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "8 Litres (Detachable SS 304 Tank)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "pyooron",
    "name": "PYOORON",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p17_7.webp",
    "gallery": [
      "/catalog/p17_7.webp"
    ],
    "summary": "RO + UV + UF + Minerals + ORP + pH Correction + Taste Improver + TDS Adjustor. SS Tank (SS 304 detachable and washable tank).",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "8 Litres (Detachable SS 304 Tank)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "m-pure",
    "name": "M PURE",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p17_2.webp",
    "gallery": [
      "/catalog/p17_2.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "hydro-clean",
    "name": "HYDRO CLEAN",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p17_9.webp",
    "gallery": [
      "/catalog/p17_9.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "water-lovely",
    "name": "WATER LOVELY",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p17_10.webp",
    "gallery": [
      "/catalog/p17_10.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "tago",
    "name": "TAGO",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p17_3.webp",
    "gallery": [
      "/catalog/p17_3.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "no-bact",
    "name": "NO BACT",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p17_5.webp",
    "gallery": [
      "/catalog/p17_5.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "tekleen",
    "name": "TEKLEEN",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p17_1.webp",
    "gallery": [
      "/catalog/p17_1.webp"
    ],
    "summary": "RO + UV (SS tank optional).",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "wall-mount",
    "name": "WALL MOUNT",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p17_4.webp",
    "gallery": [
      "/catalog/p17_4.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "aqua-brand",
    "name": "AQUA BRAND",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p17_6.webp",
    "gallery": [
      "/catalog/p17_6.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "prima",
    "name": "PRIMA",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p18_7.webp",
    "gallery": [
      "/catalog/p18_7.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "ultima-plus",
    "name": "ULTIMA PLUS",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p18_1.webp",
    "gallery": [
      "/catalog/p18_1.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "ultima",
    "name": "ULTIMA",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p18_5.webp",
    "gallery": [
      "/catalog/p18_5.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "no-bact-normal-hot",
    "name": "NO BACT NORMAL + HOT",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p18_8.webp",
    "gallery": [
      "/catalog/p18_8.webp"
    ],
    "summary": "Normal + hot water delivery.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Dispenser Mode", value: "Instant Hot & Normal Water Delivery" },
      { label: "Heating Element", value: "Built-in Stainless Steel Heater" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "chrome-1st-choice-copper",
    "name": "CHROME 1st CHOICE COPPER",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p18_9.webp",
    "gallery": [
      "/catalog/p18_9.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Special Feature", value: "Active Copper Cartridge for added minerals" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "chrome-classic",
    "name": "CHROME CLASSIC +",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p18_2.webp",
    "gallery": [
      "/catalog/p18_2.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "aqua-kleen",
    "name": "AQUA KLEEN",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p18_3.webp",
    "gallery": [
      "/catalog/p18_3.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "matrix-copper",
    "name": "MATRIX COPPER",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p18_6.webp",
    "gallery": [
      "/catalog/p18_6.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Special Feature", value: "Active Copper Cartridge for added minerals" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "matrix-white",
    "name": "MATRIX WHITE",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p18_10.webp",
    "gallery": [
      "/catalog/p18_10.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "matrix-zinc",
    "name": "MATRIX ZINC",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p18_4.webp",
    "gallery": [
      "/catalog/p18_4.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Special Feature", value: "Alkaline & Zinc enriched water" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "matrix-black",
    "name": "MATRIX BLACK",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p18_11.webp",
    "gallery": [
      "/catalog/p18_11.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "wave-4g-ace",
    "name": "WAVE 4G ACE",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p19_4.webp",
    "gallery": [
      "/catalog/p19_4.webp"
    ],
    "summary": "Hot & cold delivery.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Dispenser Mode", value: "Instant Hot & Normal Water Delivery" },
      { label: "Heating Element", value: "Built-in Stainless Steel Heater" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "wave-5g-pro",
    "name": "WAVE 5G PRO",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p19_1.webp",
    "gallery": [
      "/catalog/p19_1.webp"
    ],
    "summary": "Hot & cold delivery.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Dispenser Mode", value: "Instant Hot & Normal Water Delivery" },
      { label: "Heating Element", value: "Built-in Stainless Steel Heater" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "kombo",
    "name": "KOMBO",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p19_6.webp",
    "gallery": [
      "/catalog/p19_6.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "krystal-transparent",
    "name": "KRYSTAL TRANSPARENT",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p19_7.webp",
    "gallery": [
      "/catalog/p19_7.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "water-love-blue",
    "name": "WATER LOVE BLUE",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p19_10.webp",
    "gallery": [
      "/catalog/p19_10.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "water-love-green",
    "name": "WATER LOVE GREEN",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p19_13.webp",
    "gallery": [
      "/catalog/p19_13.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "aura-orchid",
    "name": "AURA ORCHID",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p19_2.webp",
    "gallery": [
      "/catalog/p19_2.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "aura-orchid-normal-hot",
    "name": "AURA ORCHID NORMAL + HOT",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p19_3.webp",
    "gallery": [
      "/catalog/p19_3.webp"
    ],
    "summary": "Normal + hot water delivery.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Dispenser Mode", value: "Instant Hot & Normal Water Delivery" },
      { label: "Heating Element", value: "Built-in Stainless Steel Heater" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "storm-white",
    "name": "STORM WHITE",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p19_9.webp",
    "gallery": [
      "/catalog/p19_9.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "storm-black",
    "name": "STORM BLACK",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p19_5.webp",
    "gallery": [
      "/catalog/p19_5.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "cyclone-white",
    "name": "CYCLONE WHITE",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p19_11.webp",
    "gallery": [
      "/catalog/p19_11.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "cyclone-black",
    "name": "CYCLONE BLACK",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p19_8.webp",
    "gallery": [
      "/catalog/p19_8.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "mr-pure-blue",
    "name": "Mr. PURE BLUE",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p20_11.webp",
    "gallery": [
      "/catalog/p20_11.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "mr-pure-gray",
    "name": "Mr. PURE GRAY",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p20_12.webp",
    "gallery": [
      "/catalog/p20_12.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "mr-pure-copper",
    "name": "Mr. PURE COPPER",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p20_6.webp",
    "gallery": [
      "/catalog/p20_6.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Special Feature", value: "Active Copper Cartridge for added minerals" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "urban",
    "name": "URBAN",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p20_2.webp",
    "gallery": [
      "/catalog/p20_2.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "vibe",
    "name": "VIBE",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p20_8.webp",
    "gallery": [
      "/catalog/p20_8.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "misty-pure-white",
    "name": "MISTY PURE WHITE",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p20_7.webp",
    "gallery": [
      "/catalog/p20_7.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "misty-pure-black",
    "name": "MISTY PURE BLACK",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p20_1.webp",
    "gallery": [
      "/catalog/p20_1.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "pure-h2o",
    "name": "PURE H2O",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p20_3.webp",
    "gallery": [
      "/catalog/p20_3.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "itech",
    "name": "ITECH",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p20_5.webp",
    "gallery": [
      "/catalog/p20_5.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "aqua-platinum",
    "name": "AQUA PLATINUM",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p20_4.webp",
    "gallery": [
      "/catalog/p20_4.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "alive",
    "name": "ALIVE",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p20_9.webp",
    "gallery": [
      "/catalog/p20_9.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "aqua-jade",
    "name": "AQUA JADE",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p21_1.webp",
    "gallery": [
      "/catalog/p21_1.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "aqua-nine-black",
    "name": "AQUA NINE BLACK",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p21_3.webp",
    "gallery": [
      "/catalog/p21_3.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "aqua-nine-white",
    "name": "AQUA NINE WHITE",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p21_6.webp",
    "gallery": [
      "/catalog/p21_6.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "aqua-9090",
    "name": "AQUA 9090",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p21_9.webp",
    "gallery": [
      "/catalog/p21_9.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "glory",
    "name": "GLORY",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p21_8.webp",
    "gallery": [
      "/catalog/p21_8.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "aqua-mars-black",
    "name": "AQUA MARS BLACK",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p21_2.webp",
    "gallery": [
      "/catalog/p21_2.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "aqua-mars-green",
    "name": "AQUA MARS GREEN",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p21_7.webp",
    "gallery": [
      "/catalog/p21_7.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "phoenix",
    "name": "PHOENIX",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p21_4.webp",
    "gallery": [
      "/catalog/p21_4.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "aqua-digi",
    "name": "AQUA DIGI",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p21_5.webp",
    "gallery": [
      "/catalog/p21_5.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "wall-mount-with-under-sink",
    "name": "WALL MOUNT WITH UNDER SINK",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p21_10.webp",
    "gallery": [
      "/catalog/p21_10.webp"
    ],
    "summary": "Wall-mounted RO system with under-sink storage tank.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "swift",
    "name": "SWIFT",
    "category": "domestic-ro",
    "scale": "domestic",
    "image": "/catalog/p21_11.webp",
    "gallery": [
      "/catalog/p21_11.webp"
    ],
    "summary": "Point-of-use reverse osmosis system for household drinking water. Supplied, installed and serviced by Branded Purifier. Configuration and tank options on request.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [],
    "applications": [
      "Homes and apartments",
      "Small offices and shops",
      "Point-of-use drinking water"
    ]
  },
  {
    "slug": "misty-open-ms-skid-80-lph",
    "name": "MISTY OPEN MS SKID - 80 LPH",
    "category": "commercial-ro",
    "scale": "commercial",
    "image": "/catalog/p22_1.webp",
    "gallery": [
      "/catalog/p22_1.webp"
    ],
    "summary": "Commercial reverse osmosis system supplied by Branded Purifier. Installation, commissioning and service support available.",
    "specs": [
      {
        "label": "Capacity",
        "value": "80 LPH"
      },
      {
        "label": "System type",
        "value": "Commercial RO"
      }
    ],
    "models": [],
    "applications": [
      "Offices and commercial premises",
      "Hotels, canteens and restaurants",
      "Schools, colleges and institutions",
      "Water shops and small plants"
    ]
  },
  {
    "slug": "misty-open-ss-skid-60-lph",
    "name": "MISTY OPEN SS SKID - 60 LPH",
    "category": "commercial-ro",
    "scale": "commercial",
    "image": "/catalog/p22_3.webp",
    "gallery": [
      "/catalog/p22_3.webp"
    ],
    "summary": "Commercial reverse osmosis system supplied by Branded Purifier. Installation, commissioning and service support available.",
    "specs": [
      {
        "label": "Capacity",
        "value": "60 LPH"
      },
      {
        "label": "System type",
        "value": "Commercial RO"
      }
    ],
    "models": [],
    "applications": [
      "Offices and commercial premises",
      "Hotels, canteens and restaurants",
      "Schools, colleges and institutions",
      "Water shops and small plants"
    ]
  },
  {
    "slug": "misty-ss-auto-60-lph",
    "name": "MISTY SS AUTO - 60 LPH",
    "category": "commercial-ro",
    "scale": "commercial",
    "image": "/catalog/p22_2.webp",
    "gallery": [
      "/catalog/p22_2.webp"
    ],
    "summary": "Commercial reverse osmosis system supplied by Branded Purifier. Installation, commissioning and service support available.",
    "specs": [
      {
        "label": "Capacity",
        "value": "60 LPH"
      },
      {
        "label": "System type",
        "value": "Commercial RO"
      }
    ],
    "models": [],
    "applications": [
      "Offices and commercial premises",
      "Hotels, canteens and restaurants",
      "Schools, colleges and institutions",
      "Water shops and small plants"
    ]
  },
  {
    "slug": "closed-ms-skid-60-lph",
    "name": "CLOSED MS SKID - 60 LPH",
    "category": "commercial-ro",
    "scale": "commercial",
    "image": "/catalog/p22_7.webp",
    "gallery": [
      "/catalog/p22_7.webp"
    ],
    "summary": "Commercial reverse osmosis system supplied by Branded Purifier. Installation, commissioning and service support available.",
    "specs": [
      {
        "label": "Capacity",
        "value": "60 LPH"
      },
      {
        "label": "System type",
        "value": "Commercial RO"
      }
    ],
    "models": [],
    "applications": [
      "Offices and commercial premises",
      "Hotels, canteens and restaurants",
      "Schools, colleges and institutions",
      "Water shops and small plants"
    ]
  },
  {
    "slug": "misty-open-25-lph",
    "name": "MISTY OPEN - 25 LPH",
    "category": "commercial-ro",
    "scale": "commercial",
    "image": "/catalog/p22_5.webp",
    "gallery": [
      "/catalog/p22_5.webp"
    ],
    "summary": "Commercial reverse osmosis system supplied by Branded Purifier. Installation, commissioning and service support available.",
    "specs": [
      {
        "label": "Capacity",
        "value": "25 LPH"
      },
      {
        "label": "System type",
        "value": "Commercial RO"
      }
    ],
    "models": [],
    "applications": [
      "Offices and commercial premises",
      "Hotels, canteens and restaurants",
      "Schools, colleges and institutions",
      "Water shops and small plants"
    ]
  },
  {
    "slug": "misty-skid-25-lph",
    "name": "MISTY SKID - 25 LPH",
    "category": "commercial-ro",
    "scale": "commercial",
    "image": "/catalog/p22_6.webp",
    "gallery": [
      "/catalog/p22_6.webp"
    ],
    "summary": "Commercial reverse osmosis system supplied by Branded Purifier. Installation, commissioning and service support available.",
    "specs": [
      {
        "label": "Capacity",
        "value": "25 LPH"
      },
      {
        "label": "System type",
        "value": "Commercial RO"
      }
    ],
    "models": [],
    "applications": [
      "Offices and commercial premises",
      "Hotels, canteens and restaurants",
      "Schools, colleges and institutions",
      "Water shops and small plants"
    ]
  },
  {
    "slug": "whale-25-lph-40-lph",
    "name": "WHALE - 25 LPH / 40 LPH",
    "category": "commercial-ro",
    "scale": "commercial",
    "image": "/catalog/p22_4.webp",
    "gallery": [
      "/catalog/p22_4.webp"
    ],
    "summary": "Commercial reverse osmosis system supplied by Branded Purifier. Installation, commissioning and service support available.",
    "specs": [
      {
        "label": "Capacity",
        "value": "25 LPH / 40 LPH"
      },
      {
        "label": "System type",
        "value": "Commercial RO"
      }
    ],
    "models": [],
    "applications": [
      "Offices and commercial premises",
      "Hotels, canteens and restaurants",
      "Schools, colleges and institutions",
      "Water shops and small plants"
    ]
  },
  {
    "slug": "commercial-50-lph-ro-system",
    "name": "Commercial 50 LPH RO System",
    "category": "commercial-ro",
    "scale": "commercial",
    "image": "/catalog/p11_1.webp",
    "gallery": [
      "/catalog/p11_1.webp",
      "/catalog/p11_2.webp",
      "/catalog/p11_3.webp",
      "/catalog/p11_4.webp"
    ],
    "summary": "Commercial RO system built on a frame-mounted skid with pre-filtration, membrane housings and pump set.",
    "specs": [
      {
        "label": "Capacity",
        "value": "50 LPH"
      },
      {
        "label": "System type",
        "value": "Commercial RO"
      }
    ],
    "models": [],
    "applications": [
      "Offices and commercial premises",
      "Hotels, canteens and restaurants",
      "Schools, colleges and institutions",
      "Water shops and small plants"
    ]
  },
  {
    "slug": "commercial-100-lph-ro-system",
    "name": "Commercial 100 LPH RO System",
    "category": "commercial-ro",
    "scale": "commercial",
    "image": "/catalog/p12_1.webp",
    "gallery": [
      "/catalog/p12_1.webp",
      "/catalog/p12_2.webp",
      "/catalog/p12_3.webp",
      "/catalog/p12_4.webp"
    ],
    "summary": "Commercial RO system available in open skid and cabinet configurations with pre-filters and pump set.",
    "specs": [
      {
        "label": "Capacity",
        "value": "100 LPH"
      },
      {
        "label": "System type",
        "value": "Commercial RO"
      }
    ],
    "models": [],
    "applications": [
      "Offices and commercial premises",
      "Hotels, canteens and restaurants",
      "Schools, colleges and institutions",
      "Water shops and small plants"
    ]
  },
  {
    "slug": "industrial-250-lph-ro-plant",
    "name": "Industrial 250 LPH RO Plant",
    "category": "industrial-ro",
    "scale": "industrial",
    "image": "/catalog/p7_1.webp",
    "gallery": [
      "/catalog/p7_1.webp",
      "/catalog/p7_2.webp",
      "/catalog/p7_3.webp",
      "/catalog/p7_4.webp"
    ],
    "summary": "Industrial reverse osmosis plant supplied and installed by Branded Purifier, with pressure vessels, multiport valves, high-pressure pump set and control panel.",
    "specs": [
      {
        "label": "Capacity",
        "value": "250 LPH"
      },
      {
        "label": "System type",
        "value": "Industrial RO plant"
      }
    ],
    "models": [],
    "applications": [
      "Process and production water",
      "Packaged and bulk drinking water",
      "Institutional and industrial facilities",
      "Boiler and equipment feed water treatment"
    ]
  },
  {
    "slug": "industrial-500-lph-ro-plant",
    "name": "Industrial 500 LPH RO Plant",
    "category": "industrial-ro",
    "scale": "industrial",
    "image": "/catalog/p8_1.webp",
    "gallery": [
      "/catalog/p8_1.webp",
      "/catalog/p8_2.webp",
      "/catalog/p8_3.webp",
      "/catalog/p8_4.webp"
    ],
    "summary": "Industrial reverse osmosis plant supplied and installed by Branded Purifier, with pressure vessels, multiport valves, high-pressure pump set and control panel.",
    "specs": [
      {
        "label": "Capacity",
        "value": "500 LPH"
      },
      {
        "label": "System type",
        "value": "Industrial RO plant"
      }
    ],
    "models": [],
    "applications": [
      "Process and production water",
      "Packaged and bulk drinking water",
      "Institutional and industrial facilities",
      "Boiler and equipment feed water treatment"
    ]
  },
  {
    "slug": "industrial-1000-lph-ro-plant",
    "name": "Industrial 1000 LPH RO Plant",
    "category": "industrial-ro",
    "scale": "industrial",
    "image": "/catalog/p9_1.webp",
    "gallery": [
      "/catalog/p9_1.webp",
      "/catalog/p9_2.webp",
      "/catalog/p9_3.webp",
      "/catalog/p9_4.webp",
      "/catalog/p9_5.webp",
      "/catalog/p9_6.webp"
    ],
    "summary": "Industrial reverse osmosis plant supplied and installed by Branded Purifier, with pressure vessels, multiport valves, high-pressure pump set and control panel.",
    "specs": [
      {
        "label": "Capacity",
        "value": "1000 LPH"
      },
      {
        "label": "System type",
        "value": "Industrial RO plant"
      }
    ],
    "models": [],
    "applications": [
      "Process and production water",
      "Packaged and bulk drinking water",
      "Institutional and industrial facilities",
      "Boiler and equipment feed water treatment"
    ]
  },
  {
    "slug": "industrial-2000-lph-ro-plant",
    "name": "Industrial 2000 LPH RO Plant",
    "category": "industrial-ro",
    "scale": "industrial",
    "image": "/catalog/p10_1.webp",
    "gallery": [
      "/catalog/p10_1.webp",
      "/catalog/p10_2.webp",
      "/catalog/p10_3.webp",
      "/catalog/p10_4.webp",
      "/catalog/p10_5.webp",
      "/catalog/p10_6.webp"
    ],
    "summary": "Industrial reverse osmosis plant supplied and installed by Branded Purifier, with pressure vessels, multiport valves, high-pressure pump set and control panel.",
    "specs": [
      {
        "label": "Capacity",
        "value": "2000 LPH"
      },
      {
        "label": "System type",
        "value": "Industrial RO plant"
      }
    ],
    "models": [],
    "applications": [
      "Process and production water",
      "Packaged and bulk drinking water",
      "Institutional and industrial facilities",
      "Boiler and equipment feed water treatment"
    ]
  },
  {
    "slug": "softener-treatment-manual-automatic-systems",
    "name": "Softener Treatment - Manual & Automatic Systems",
    "category": "water-softeners",
    "scale": "industrial",
    "image": "/catalog/p6_1.webp",
    "gallery": [
      "/catalog/p6_1.webp",
      "/catalog/p6_2.webp",
      "/catalog/p6_3.webp",
      "/catalog/p6_4.webp"
    ],
    "summary": "Water softening systems in manual and automatic valve configurations, including single and dual vessel arrangements with brine tank.",
    "specs": [
      {
        "label": "Valve options",
        "value": "Manual system / Automatic system"
      },
      {
        "label": "Arrangement",
        "value": "Single and dual vessel"
      }
    ],
    "models": [],
    "applications": [
      "Hard water treatment",
      "Bathroom and domestic softening",
      "Commercial and industrial feed water"
    ]
  },
  {
    "slug": "ro-membranes",
    "name": "RO Membranes",
    "category": "ro-membranes",
    "scale": "components",
    "image": "/catalog/p23_1.webp",
    "gallery": [
      "/catalog/p23_1.webp",
      "/catalog/p23_2.webp",
      "/catalog/p23_3.webp",
      "/catalog/p23_7.webp",
      "/catalog/p28_1.webp",
      "/catalog/p28_3.webp",
      "/catalog/p28_4.webp",
      "/catalog/p28_5.webp"
    ],
    "summary": "Domestic and industrial reverse osmosis membrane elements held in stock for immediate supply.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [
      "HJC 80 / 90 / 100 GPD",
      "FILMTEC 75 GPD",
      "MEMBRELLA 80 GPD",
      "VONTRON 80 GPD",
      "CSM 80 GPD",
      "HEALTHY 80 GPD",
      "PURE STUDIO 80 GPD",
      "HEALTHY 300 GPD",
      "HJC 300 GPD, 4021",
      "TFC 4021",
      "FILMTEC 4040 / 8040",
      "TAPTEC 4040",
      "HJC 4021 / 4040 / 8040",
      "MEMBRELLA 4021 / 4040 / 8040",
      "TFC 4021 / 4040 / 8040",
      "TFC BW-8040"
    ],
    "applications": [
      "Domestic RO systems",
      "Commercial RO systems",
      "Industrial water treatment plants",
      "Service and replacement"
    ]
  },
  {
    "slug": "pumps",
    "name": "Pumps",
    "category": "pumps",
    "scale": "components",
    "image": "/catalog/p25_2.webp",
    "gallery": [
      "/catalog/p25_2.webp",
      "/catalog/p25_4.webp",
      "/catalog/p25_8.webp",
      "/catalog/p29_3.webp",
      "/catalog/p29_4.webp",
      "/catalog/p29_5.webp",
      "/catalog/p29_7.webp",
      "/catalog/p29_8.webp"
    ],
    "summary": "Domestic booster pumps, industrial feed and high-pressure pumps, dosing pumps and cleaning pumps.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [
      "MEMBRELLA 80 GPD",
      "E-CHEN 80 / 150 / 300 / 600 GPD",
      "BRIZO PUMP",
      "BNQS 100 / 150 / 300 GPD",
      "CRI MTC Series",
      "CRI MVC Series",
      "GRUNDFOS",
      "UKL Dosing Pump",
      "E DOS",
      "Cleaning Pump",
      "Feed Pump 1 HP / 2 HP",
      "Feed Pump 250 / 500 LPH",
      "Feed Pump 50 / 100 LPH"
    ],
    "applications": [
      "Domestic RO systems",
      "Commercial RO systems",
      "Industrial water treatment plants",
      "Service and replacement"
    ]
  },
  {
    "slug": "filters-cartridges",
    "name": "Filters & Cartridges",
    "category": "filters",
    "scale": "components",
    "image": "/catalog/p26_4.webp",
    "gallery": [
      "/catalog/p26_4.webp",
      "/catalog/p26_5.webp",
      "/catalog/p26_6.webp",
      "/catalog/p26_8.webp",
      "/catalog/p26_2.webp",
      "/catalog/p33_3.webp",
      "/catalog/p33_8.webp"
    ],
    "summary": "Replacement filter cartridges in standard, slim line and big blue sizes for domestic and industrial systems.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [
      "Inline filters",
      "Spun filters",
      "UF filters",
      "Wound filters",
      "GAC & CTO filters",
      "Pre filter set",
      "Spun filter jumbo & slim 10\" / 20\" / 30\" / 40\"",
      "Wound filter jumbo & slim 10\" / 20\" / 30\" / 40\""
    ],
    "applications": [
      "Domestic RO systems",
      "Commercial RO systems",
      "Industrial water treatment plants",
      "Service and replacement"
    ]
  },
  {
    "slug": "filter-housings",
    "name": "Filter Housings",
    "category": "filter-housings",
    "scale": "components",
    "image": "/catalog/p33_1.webp",
    "gallery": [
      "/catalog/p33_1.webp",
      "/catalog/p33_2.webp",
      "/catalog/p33_4.webp",
      "/catalog/p33_6.webp",
      "/catalog/p27_20.webp"
    ],
    "summary": "Filter housings in standard, slim line and big blue formats, plus PP, SS, UPVC and bag filter assemblies.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [
      "Domestic filter housing",
      "PP filter housing",
      "SS filter housing",
      "UPVC filter housing",
      "Bag filter set"
    ],
    "applications": [
      "Domestic RO systems",
      "Commercial RO systems",
      "Industrial water treatment plants",
      "Service and replacement"
    ]
  },
  {
    "slug": "membrane-housings",
    "name": "Membrane Housings",
    "category": "membrane-housings",
    "scale": "components",
    "image": "/catalog/p33_5.webp",
    "gallery": [
      "/catalog/p33_5.webp",
      "/catalog/p33_7.webp"
    ],
    "summary": "Pressure membrane housings for industrial reverse osmosis plants.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [
      "4\" membrane housing",
      "8\" membrane housing"
    ],
    "applications": [
      "Domestic RO systems",
      "Commercial RO systems",
      "Industrial water treatment plants",
      "Service and replacement"
    ]
  },
  {
    "slug": "tanks-vessels",
    "name": "Tanks & Vessels",
    "category": "tanks",
    "scale": "components",
    "image": "/catalog/p31_1.webp",
    "gallery": [
      "/catalog/p31_1.webp",
      "/catalog/p31_3.webp",
      "/catalog/p31_4.webp",
      "/catalog/p31_5.webp",
      "/catalog/p31_7.webp",
      "/catalog/p31_8.webp",
      "/catalog/p31_10.webp",
      "/catalog/p27_4.webp"
    ],
    "summary": "FRP and metal pressure vessels, storage tanks, brine tanks, dosing tanks and domestic pressure tanks.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [
      "PURE STUDIO FRP 0844 to 3672",
      "PENTAIR FRP 0844 to 3072",
      "TATA FRP 1054 to 3072",
      "MS vessel",
      "SS vessel",
      "Dosing tank",
      "Brine tank",
      "SS tank 250 - 5000 litre",
      "Domestic pressure tank"
    ],
    "applications": [
      "Domestic RO systems",
      "Commercial RO systems",
      "Industrial water treatment plants",
      "Service and replacement"
    ]
  },
  {
    "slug": "valves-connectors",
    "name": "Valves & Connectors",
    "category": "valves-connectors",
    "scale": "components",
    "image": "/catalog/p32_9.webp",
    "gallery": [
      "/catalog/p32_9.webp",
      "/catalog/p32_11.webp",
      "/catalog/p32_13.webp",
      "/catalog/p27_15.webp",
      "/catalog/p27_17.webp",
      "/catalog/p27_5.webp"
    ],
    "summary": "Solenoid valves, shut-off valves, float assemblies, fittings, tubing and clamps.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [
      "SV Brass 1\" / 1.5\"",
      "SV Plastic 0.5\" / 1\"",
      "SV Plastic 12 V DC",
      "Connectors",
      "Inlet connectors",
      "Tube 1/4, 3/8",
      "Clamp",
      "Float",
      "FR"
    ],
    "applications": [
      "Domestic RO systems",
      "Commercial RO systems",
      "Industrial water treatment plants",
      "Service and replacement"
    ]
  },
  {
    "slug": "multiport-valves-distribution",
    "name": "Multiport Valves & Distribution",
    "category": "multiport-valves",
    "scale": "components",
    "image": "/catalog/p30_8.webp",
    "gallery": [
      "/catalog/p30_8.webp",
      "/catalog/p30_9.webp",
      "/catalog/p30_10.webp",
      "/catalog/p30_3.webp",
      "/catalog/p30_13.webp",
      "/catalog/p30_19.webp"
    ],
    "summary": "Manual and automatic multiport valves with distribution systems for softeners, filters and DM plants.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [
      "MPV 20 NB TMF - RUNXIN",
      "MPV 20 - 25 NB TMF / TMS - SOLO",
      "MPV 20 - 25 NB TMF / TMS - UKL",
      "Auto MPV - RUNXIN",
      "Auto MPV - SOLO",
      "Distribution system"
    ],
    "applications": [
      "Domestic RO systems",
      "Commercial RO systems",
      "Industrial water treatment plants",
      "Service and replacement"
    ]
  },
  {
    "slug": "filter-media-resins",
    "name": "Filter Media & Resins",
    "category": "filter-media",
    "scale": "components",
    "image": "/catalog/p30_11.webp",
    "gallery": [
      "/catalog/p30_11.webp",
      "/catalog/p30_12.webp",
      "/catalog/p30_14.webp",
      "/catalog/p30_15.webp",
      "/catalog/p30_16.webp",
      "/catalog/p30_17.webp",
      "/catalog/p30_7.webp"
    ],
    "summary": "Ion exchange resins and filtration media for softeners, DM plants and pressure filters.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [
      "Softener resin",
      "DM plant resin",
      "Iron removal media",
      "Filter media",
      "PUREION ion exchange resins"
    ],
    "applications": [
      "Domestic RO systems",
      "Commercial RO systems",
      "Industrial water treatment plants",
      "Service and replacement"
    ]
  },
  {
    "slug": "control-panels",
    "name": "Control Panels",
    "category": "control-panels",
    "scale": "components",
    "image": "/catalog/p32_1.webp",
    "gallery": [
      "/catalog/p32_1.webp",
      "/catalog/p32_2.webp",
      "/catalog/p32_4.webp",
      "/catalog/p32_12.webp"
    ],
    "summary": "RO and pump control panels for commercial and industrial installations.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [
      "I PANEL SSP (submersible pump control panel)",
      "I PANEL RO PLUS",
      "I PANEL BASIC",
      "RO BASIC"
    ],
    "applications": [
      "Domestic RO systems",
      "Commercial RO systems",
      "Industrial water treatment plants",
      "Service and replacement"
    ]
  },
  {
    "slug": "water-vending-systems",
    "name": "Water Vending Systems",
    "category": "water-vending",
    "scale": "components",
    "image": "/catalog/p32_3.webp",
    "gallery": [
      "/catalog/p32_3.webp",
      "/catalog/p32_5.webp",
      "/catalog/p32_6.webp",
      "/catalog/p32_7.webp",
      "/catalog/p32_8.webp"
    ],
    "summary": "Card, coin and QR based water vending units for public and institutional dispensing points.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [
      "Card vending",
      "Coin vending",
      "Card & coin",
      "QR & coin vending",
      "I-Water"
    ],
    "applications": [
      "Domestic RO systems",
      "Commercial RO systems",
      "Industrial water treatment plants",
      "Service and replacement"
    ]
  },
  {
    "slug": "uv-systems-ozonators",
    "name": "UV Systems & Ozonators",
    "category": "uv-systems",
    "scale": "components",
    "image": "/catalog/p34_13.webp",
    "gallery": [
      "/catalog/p34_13.webp",
      "/catalog/p34_14.webp",
      "/catalog/p34_15.webp",
      "/catalog/p34_6.webp",
      "/catalog/p27_7.webp"
    ],
    "summary": "Ultraviolet disinfection sets and ozonators for domestic, commercial and industrial flow rates.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [
      "UV set 250 to 2000 LPH",
      "UV set 3000 to 6000 LPH",
      "Domestic UV set",
      "Ozonator"
    ],
    "applications": [
      "Domestic RO systems",
      "Commercial RO systems",
      "Industrial water treatment plants",
      "Service and replacement"
    ]
  },
  {
    "slug": "uf-systems",
    "name": "UF Systems",
    "category": "uf-systems",
    "scale": "components",
    "image": "/catalog/p37_6.webp",
    "gallery": [
      "/catalog/p37_6.webp",
      "/catalog/p37_7.webp",
      "/catalog/p37_3.webp",
      "/catalog/p37_4.webp",
      "/catalog/p37_5.webp",
      "/catalog/p37_8.webp",
      "/catalog/p37_1.webp",
      "/catalog/p37_2.webp"
    ],
    "summary": "Ultrafiltration units with manual and automatic multiport valves, plus automatic disk filters.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [
      "Jumbo UF with auto MPV 1000 LPH",
      "Jumbo UF with auto MPV 2000 LPH",
      "Jumbo UF with MPV",
      "25\" slim UF",
      "10\" jumbo UF",
      "20\" jumbo UF",
      "Automatic disk filter 3/4\"",
      "Automatic disk filter 1\""
    ],
    "applications": [
      "Domestic RO systems",
      "Commercial RO systems",
      "Industrial water treatment plants",
      "Service and replacement"
    ]
  },
  {
    "slug": "dm-plants",
    "name": "DM Plants",
    "category": "dm-plants",
    "scale": "components",
    "image": "/catalog/p36_1.webp",
    "gallery": [
      "/catalog/p36_1.webp",
      "/catalog/p36_2.webp",
      "/catalog/p36_3.webp",
      "/catalog/p36_4.webp"
    ],
    "summary": "Demineralisation plants including two bed, three bed and portable configurations.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [
      "TBD 100 DM plant",
      "CAMB 100 / 300 DM plant",
      "CAMB 500 / 1000 DM plant",
      "Portable DM plant"
    ],
    "applications": [
      "Domestic RO systems",
      "Commercial RO systems",
      "Industrial water treatment plants",
      "Service and replacement"
    ]
  },
  {
    "slug": "water-softeners",
    "name": "Water Softeners",
    "category": "water-softeners",
    "scale": "components",
    "image": "/catalog/p36_5.webp",
    "gallery": [
      "/catalog/p36_5.webp",
      "/catalog/p36_6.webp",
      "/catalog/p36_7.webp",
      "/catalog/p36_8.webp",
      "/catalog/p36_9.webp"
    ],
    "summary": "Domestic, bathroom and bungalow softeners through to larger resin capacity units.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [
      "Softener 10 R",
      "Bathroom softener",
      "Water softener mini",
      "ORG 100 R / 150 R / 200 R",
      "Bungalow softener"
    ],
    "applications": [
      "Domestic RO systems",
      "Commercial RO systems",
      "Industrial water treatment plants",
      "Service and replacement"
    ]
  },
  {
    "slug": "antiscalant-chemicals",
    "name": "Antiscalant & Chemicals",
    "category": "chemicals",
    "scale": "components",
    "image": "/catalog/p34_1.webp",
    "gallery": [
      "/catalog/p34_1.webp",
      "/catalog/p34_2.webp",
      "/catalog/p34_9.webp",
      "/catalog/p34_10.webp"
    ],
    "summary": "Antiscalant dosing chemicals for reverse osmosis membrane protection.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [
      "GOOD CHEMISTRY antiscalant",
      "ALLTREAT antiscalant",
      "AQUASTAT-101",
      "AQUASTAT-111"
    ],
    "applications": [
      "Domestic RO systems",
      "Commercial RO systems",
      "Industrial water treatment plants",
      "Service and replacement"
    ]
  },
  {
    "slug": "instrumentation",
    "name": "Instrumentation",
    "category": "instrumentation",
    "scale": "components",
    "image": "/catalog/p34_3.webp",
    "gallery": [
      "/catalog/p34_3.webp",
      "/catalog/p34_7.webp",
      "/catalog/p34_8.webp",
      "/catalog/p34_11.webp",
      "/catalog/p27_10.webp"
    ],
    "summary": "Flow meters, pressure gauges, pressure switches and TDS meters for plant monitoring.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [
      "Flow meter",
      "Pressure gauge",
      "LPS / HPS pressure switch",
      "TDS meter"
    ],
    "applications": [
      "Domestic RO systems",
      "Commercial RO systems",
      "Industrial water treatment plants",
      "Service and replacement"
    ]
  },
  {
    "slug": "smps-ro-accessories",
    "name": "SMPS & RO Accessories",
    "category": "ro-accessories",
    "scale": "components",
    "image": "/catalog/p27_1.webp",
    "gallery": [
      "/catalog/p27_1.webp",
      "/catalog/p27_2.webp",
      "/catalog/p27_3.webp",
      "/catalog/p27_11.webp",
      "/catalog/p27_14.webp",
      "/catalog/p27_16.webp",
      "/catalog/p27_13.webp"
    ],
    "summary": "SMPS units, stands, covers, taps, spanners and the fittings required to complete an RO installation.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [
      "SMPS",
      "Stand",
      "Cover",
      "Tap",
      "Wrench",
      "Inlet connectors",
      "Float",
      "FR"
    ],
    "applications": [
      "Domestic RO systems",
      "Commercial RO systems",
      "Industrial water treatment plants",
      "Service and replacement"
    ]
  },
  {
    "slug": "stainless-steel-water-coolers",
    "name": "Stainless Steel Water Coolers",
    "category": "water-coolers",
    "scale": "components",
    "image": "/catalog/p35_1.webp",
    "gallery": [
      "/catalog/p35_1.webp",
      "/catalog/p35_3.webp",
      "/catalog/p35_5.webp",
      "/catalog/p35_8.webp"
    ],
    "summary": "Stainless steel water coolers in regular and curved cabinet styles.",
    "specs": [
      { label: "Technology", value: "RO + UV + UF + TDS Control" },
      { label: "Purification Capacity", value: "15 Litres/Hour" },
      { label: "Membrane Type", value: "100 GPD Thin Film Composite" },
      { label: "Power Consumption", value: "50W (Operating Voltage 24V DC)" },
      { label: "Input Voltage", value: "230V AC (50Hz)" },
      { label: "Storage Tank", value: "9-12 Litres (Food Grade ABS Material)" }
    ],
    "models": [
      "Regular: M 75 N / M 100 N / M 150 N",
      "Curved: M 75 NC / M 100 NC / M 150 NC",
      "Regular with RO: M 75 NH / M 100 NH / M 150 NH",
      "Curved with RO: M 75 NHC / M 100 NHC / M 150 NHC"
    ],
    "applications": [
      "Domestic RO systems",
      "Commercial RO systems",
      "Industrial water treatment plants",
      "Service and replacement"
    ]
  }
];

export const categoryName = (id: string) =>
  CATEGORIES.find((c) => c.id === id)?.name ?? id;

export const productsByCategory = (id: string) =>
  PRODUCTS.filter((p) => p.category === id);

export const productsByScale = (scale: Scale) =>
  PRODUCTS.filter((p) => p.scale === scale);

export const findProduct = (slug: string) =>
  PRODUCTS.find((p) => p.slug === slug);

export const relatedProducts = (product: Product, limit = 4) =>
  PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, limit);
