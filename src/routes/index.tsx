import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Factory, Droplets, Wrench, ShieldCheck } from "lucide-react";
import { Container } from "@/components/site/Container";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { BtnLink, CallLink } from "@/components/site/Btn";
import { CtaBand } from "@/components/site/CtaBand";
import { ProductCard } from "@/components/site/ProductCard";
import { SOLUTIONS } from "@/data/solutions";
import { PRODUCTS, CATEGORIES } from "@/data/catalog";
import { ScrollFrameAnimation } from "@/components/site/ScrollFrameAnimation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Branded Purifier — RO Plants, Purifiers & Water Treatment Components" },
      {
        name: "description",
        content:
          "Domestic, commercial and industrial reverse osmosis systems, softeners, DM plants and water treatment spares. Call 7530048763.",
      },
      { property: "og:title", content: "Branded Purifier — Complete Water Treatment Solutions" },
      {
        property: "og:description",
        content:
          "RO systems from household purifiers to 2000 LPH industrial plants, plus membranes, pumps, vessels and spares.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const STATS = [
  { value: "5", label: "Branches" },
  { value: "3000+", label: "Customers served" },
  { value: "2000 LPH", label: "Largest RO plant range" },
  { value: "ISO 9001", label: "2015 certified" },
];

const CAPABILITIES = [
  {
    icon: Droplets,
    title: "System supply",
    body: "Purifiers, skid-mounted commercial units and industrial RO plants sourced and configured for the site.",
  },
  {
    icon: Wrench,
    title: "Installation & commissioning",
    body: "Plumbing, electrical, panel wiring, trial runs and operator handover carried out by our own technicians.",
  },
  {
    icon: Factory,
    title: "Plant fabrication",
    body: "MS and SS skids, vessel assemblies, dosing arrangements and control panels built to the required capacity.",
  },
  {
    icon: ShieldCheck,
    title: "Service & spares",
    body: "Annual maintenance, membrane and media replacement, and component supply from branch stock.",
  },
];

function Home() {
  const featured = [
    ...PRODUCTS.filter((p) => p.scale === "industrial").slice(0, 2),
    ...PRODUCTS.filter((p) => p.scale === "commercial").slice(0, 1),
    ...PRODUCTS.filter((p) => p.category === "domestic-ro").slice(0, 1),
  ];
  const componentCategories = CATEGORIES.filter((c) => c.scale === "components").slice(0, 12);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-background min-h-[calc(100vh-5rem)] flex flex-col justify-center py-12 lg:py-16">
        <div className="grid-lines absolute inset-0 opacity-30" aria-hidden="true" />
        
        <Container className="relative w-full flex-1 flex flex-col justify-center">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <h1 className="mt-4 text-[34px] leading-[1.08] font-bold text-ink sm:text-[44px] lg:text-[54px]">
                Reliable Water Purification at Any Scale
              </h1>
              <p className="mt-6 max-w-xl text-[16px] leading-8 text-muted-foreground">
                From compact home purifiers to heavy-duty 2000 LPH industrial reverse osmosis plants. We handle the supply, installation, and ongoing maintenance with a fully stocked spares division and a five-branch service network.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <BtnLink to="/products">Browse Catalogue</BtnLink>
                <CallLink variant="outline">Call 7530048763</CallLink>
              </div>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div className="relative flex aspect-square items-center justify-center p-8 -mt-12 lg:-mt-24">
                <img
                  src="/logo/logo.png"
                  alt="Branded Purifier Logo"
                  className="h-full w-full object-contain drop-shadow-lg scale-110"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="mt-16 sm:mt-24 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-10 border-t border-border/60 pt-10">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col sm:text-center">
                  <span className="font-display text-[32px] sm:text-[42px] font-extrabold tracking-tight text-ink">
                    {s.value}
                  </span>
                  <span className="mt-1 text-[11px] font-bold tracking-[0.15em] text-brand uppercase">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Solutions */}
      <section className="border-b border-border py-18 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Solutions"
            title="Four divisions covering every scale of water treatment"
            intro="Each division carries its own product range, engineering approach and service scope."
            action={
              <BtnLink to="/solutions" variant="outline" size="sm">
                All solutions
              </BtnLink>
            }
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SOLUTIONS.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 90}>
                <Link
                  to="/solutions/$scale"
                  params={{ scale: s.slug }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-sm"
                >
                  {/* Realistic Water filling animation */}
                  <div className="absolute inset-0 z-0 translate-y-[120%] transition-transform duration-[1800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:translate-y-[25%]" aria-hidden="true">
                    {/* Squircles positioned at the top of the rising wrapper */}
                    <div className="absolute left-1/2 top-[-15%] w-[250%] aspect-square -translate-x-1/2">
                      {/* Back water layer (gentle waves) */}
                      <div className="absolute inset-0 rounded-[43%] bg-brand/20 animate-[spin_7s_linear_infinite_reverse]" />
                      {/* Middle water layer */}
                      <div className="absolute inset-0 rounded-[38%] bg-brand/15 animate-[spin_5s_linear_infinite] scale-105" />
                      {/* Main water body */}
                      <div className="absolute inset-2 rounded-[40%] bg-brand-tint animate-[spin_10s_linear_infinite]" />
                    </div>
                    {/* Solid fill to ensure the bottom never shows a gap */}
                    <div className="absolute inset-x-0 top-[20%] h-[200%] bg-brand-tint" />
                  </div>
                  
                  <div className="relative z-10 flex h-full flex-col">
                    <span className="font-display text-[13px] font-extrabold tracking-[0.14em] text-brand/50 transition-colors duration-300 group-hover:text-brand">
                      0{i + 1}
                    </span>
                    <h3 className="mt-5 text-[18px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-deep">{s.name}</h3>
                    <p className="mt-3 flex-1 text-[14px] leading-7 text-muted-foreground transition-colors duration-300 group-hover:text-ink-soft">{s.short}</p>
                    <div className="mt-6 border-t border-border pt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between transition-colors duration-300 group-hover:border-transparent">
                      <span className="text-[11px] font-semibold tracking-[0.12em] text-ink uppercase transition-colors duration-300 group-hover:text-brand-deep">
                        {s.capacity}
                      </span>
                      <span className="flex items-center gap-1 text-[13px] font-semibold text-brand transition-all duration-300 opacity-100 translate-x-0 lg:opacity-0 lg:-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                        View details
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="border-b border-border bg-brand-wash py-18 lg:py-24">
        <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Supply, fabrication, installation and lifetime service"
              intro="Branded Purifier handles the full lifecycle of a water treatment installation, from source water assessment through to annual maintenance."
            />
            <ul className="mt-8 space-y-3">
              {[
                "Source water testing and system sizing",
                "Skid fabrication in MS and SS",
                "Control panel wiring and instrumentation",
                "Membrane, media and cartridge replacement",
                "Annual maintenance contracts",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] leading-7 text-ink-soft">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <ul className="grid gap-5 sm:grid-cols-2">
            {CAPABILITIES.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 80}>
                <div className="group relative overflow-hidden h-full rounded-[8px] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-sm">
                  {/* Pastel blue fill from bottom to top on hover */}
                  <div className="absolute inset-0 z-0 bg-brand/10 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" aria-hidden="true" />

                  <div className="relative z-10">
                    <c.icon size={22} className="text-brand transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                    <h3 className="mt-5 text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-deep">{c.title}</h3>
                    <p className="mt-2 text-[13px] leading-6 text-muted-foreground transition-colors duration-300 group-hover:text-ink-soft">{c.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Featured products */}
      <section className="border-b border-border py-18 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Catalogue"
            title="Featured systems from the product range"
            intro={`${PRODUCTS.length} products and component groups across ${CATEGORIES.length} categories.`}
            action={
              <BtnLink to="/products" variant="outline" size="sm">
                Full catalogue
              </BtnLink>
            }
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 80} className="h-full">
                <ProductCard product={p} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Components strip */}
      <section className="border-b border-border bg-ink py-18 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow">Components Division</p>
            <h2 className="mt-3 text-[26px] leading-tight font-bold text-primary-foreground sm:text-[34px]">
              Membranes, pumps, vessels, media and panels held in stock
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-white/70">
              Every part required to build, service or upgrade a plant — from 80 GPD domestic membranes to 8040
              industrial elements and FRP pressure vessels.
            </p>
          </div>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-[8px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {componentCategories.map((c) => (
              <li key={c.id}>
                <Link
                  to="/products"
                  search={{ category: c.id }}
                  className="group flex h-full items-center justify-between gap-4 bg-ink p-5 transition-colors hover:bg-brand-deep"
                >
                  <span className="text-[14px] font-medium text-white/85">{c.name}</span>
                  <ArrowRight
                    size={15}
                    className="shrink-0 text-brand transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>


      <ScrollFrameAnimation />
      <CtaBand />
    </>
  );
}
