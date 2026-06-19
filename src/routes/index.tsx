import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import heroImg from "@/assets/quarry-hero.jpg";
import plantImg from "@/assets/quarry-plant.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Merciful Quarry — Granite Aggregates, Ondo State" },
      { name: "description", content: "500,000 MT/year of certified granite aggregates from Ilara-Mokin, Ondo State. Reliable supply for concrete, roadworks and infrastructure." },
      { property: "og:title", content: "Merciful Quarry — Granite Aggregates, Ondo State" },
      { property: "og:description", content: "Reliable supply of high-spec granite for concrete, roadworks and infrastructure." },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Operations", href: "#operations" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#quote" },
];

const capacityFigures = [
  { value: "500,000", unit: "MT / yr", label: "Production capacity" },
  { value: "50+", unit: "team", label: "On-site workforce" },
  { value: "6", unit: "grades", label: "Granite gradations" },
  { value: "24 / 7", unit: "ops", label: "Loading & dispatch" },
];

const products = [
  { code: "0–5", title: "Granite Dust", desc: "Quarry fines for asphalt filler, block-work and base stabilisation." },
  { code: "3/8″", title: "Chippings — 6mm", desc: "Fine concrete mixes, precast units, decorative finishes." },
  { code: "1/2″", title: "Aggregate — 13mm", desc: "Standard concrete, ready-mix plants, mid-grade structural pours." },
  { code: "3/4″", title: "Aggregate — 19mm", desc: "Heavy structural concrete, foundations, columns and slabs." },
  { code: "1″", title: "Aggregate — 25mm", desc: "Mass concrete, drainage works and large-volume infrastructure." },
  { code: "RIP-RAP", title: "Armour Stone", desc: "Slope protection, erosion control, marine and roadworks." },
];

const pillars = [
  { n: "01", title: "Consistent specification", desc: "Every batch crushed and screened to documented size, shape and cleanliness tolerances." },
  { n: "02", title: "Reliable supply capacity", desc: "Half-a-million metric tons a year — enough headroom for sustained, large-scale contracts." },
  { n: "03", title: "Disciplined logistics", desc: "Loading bays sized for fleet turnover; dispatch windows planned around your pour schedule." },
  { n: "04", title: "Transparent pricing", desc: "Tonnage-based quotes with no hidden surcharges. Bulk and framework rates on request." },
];

const process = ["Drilling", "Blasting", "Crushing", "Screening", "Dispatch"];

const buyers = [
  { title: "Concrete manufacturers", desc: "Ready-mix plants and block-makers requiring graded, washed aggregate at volume." },
  { title: "Construction firms", desc: "Tier-1 contractors running multi-month frameworks with strict spec control." },
  { title: "Government & infrastructure", desc: "Federal and state roadworks, bridges and public-works supply contracts." },
  { title: "Independent contractors", desc: "Site contractors and developers needing flexible tonnage on short lead times." },
];

const certs = [
  "Mineral title — Federal Ministry of Mines & Steel Development",
  "Environmental compliance — NESREA registered operations",
  "Material conformance — tested to Nigerian Industrial Standards (NIS)",
];

function SectionTag({ n, label }: { n: string; label: string }) {
  return (
    <div className="border-t border-rule">
      <p className="section-label py-3">
        {n} · {label}
      </p>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-rule bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="block h-3 w-3 bg-primary" />
            <span className="text-sm font-semibold tracking-tight">MERCIFUL QUARRY</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-ink-soft transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#quote"
            className="inline-flex items-center gap-1.5 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request quote <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-[1200px] px-6">
        {/* 00 spacer label like wireframe (we use 01 for hero) */}

        {/* 01 HERO */}
        <section className="pt-12 pb-10 md:pt-16 md:pb-14">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-12">
            <div className="flex flex-col">
              <p className="mono text-xs text-ink-soft">Ilara-Mokin · Ondo State · Est. operations</p>
              <h1 className="display mt-6 text-[44px] md:text-[68px]">
                Granite, graded
                <br />
                <span className="text-primary">to specification.</span>
              </h1>
              <p className="mt-6 max-w-[44ch] text-base text-ink-soft md:text-lg">
                Merciful Natural Resources Limited produces half-a-million metric tons of granite aggregates a year —
                consistent, dispatched on time, and built for the projects that don't tolerate variance.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#quote" className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                  Request a quote <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#products" className="inline-flex items-center gap-2 border border-foreground px-5 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background">
                  View product range
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImg}
                alt="Aerial view of Merciful Quarry's granite operation at Ilara-Mokin"
                width={1600}
                height={1200}
                className="aspect-[5/4] w-full object-cover"
              />
              <div className="mono absolute bottom-3 left-3 bg-background/90 px-2 py-1 text-[10px] text-ink-soft">
                MQ–01 · Ilara-Mokin pit
              </div>
            </div>
          </div>
          <div className="tick-rule mt-12" />
        </section>
        <SectionTag n="01" label="hero — the thesis | gradation rule" />

        {/* 02 CAPACITY BAR */}
        <section className="grid grid-cols-2 gap-6 border-y border-rule py-10 md:grid-cols-4 md:py-12">
          {capacityFigures.map((f) => (
            <div key={f.label}>
              <div className="flex items-baseline gap-2">
                <span className="display text-4xl md:text-5xl">{f.value}</span>
                <span className="mono text-xs text-ink-soft">{f.unit}</span>
              </div>
              <p className="mono mt-2 text-[11px] uppercase tracking-wider text-ink-soft">{f.label}</p>
            </div>
          ))}
        </section>
        <SectionTag n="02" label="capacity bar — the proof (mono figures)" />

        {/* 03 PRODUCTS */}
        <section id="products" className="py-14">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="display max-w-xl text-3xl md:text-5xl">
              Granite by gradation — <span className="text-primary">six standards.</span>
            </h2>
            <p className="max-w-sm text-sm text-ink-soft">
              Each grade is crushed, screened and stockpiled separately. Specify the size; we deliver it clean.
            </p>
          </div>
          <div className="grid gap-px bg-rule md:grid-cols-3">
            {products.map((p) => (
              <article key={p.title} className="group bg-background p-6 transition-colors hover:bg-surface">
                <div className="flex items-start justify-between">
                  <span className="mono text-xs text-primary">{p.code}</span>
                  <ArrowUpRight className="h-4 w-4 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h3 className="display mt-8 text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm text-ink-soft">{p.desc}</p>
              </article>
            ))}
          </div>
        </section>
        <SectionTag n="03" label="products — granite by gradation (6 cards)" />

        {/* 04 WHY MERCIFUL */}
        <section className="py-14">
          <h2 className="display max-w-2xl text-3xl md:text-5xl">
            Four pillars behind every tonne we dispatch.
          </h2>
          <div className="mt-10 grid gap-px bg-rule md:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.n} className="bg-background p-6 md:p-8">
                <div className="flex items-baseline gap-4">
                  <span className="mono text-xs text-primary">{p.n}</span>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                </div>
                <p className="mt-3 max-w-md text-sm text-ink-soft md:ml-10">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <SectionTag n="04" label="why merciful — 4 pillars" />

        {/* 05 OPERATIONS */}
        <section id="operations" className="py-14">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <h2 className="display text-3xl md:text-5xl">
                From bedrock to <span className="text-primary">truck bed.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm text-ink-soft">
                A single, controlled chain — engineered so a 30-tonne haul leaves the plant the same way the last
                thousand did.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-2">
                {process.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="border border-rule px-4 py-2 text-sm">{step}</div>
                    {i < process.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-ink-soft" />}
                  </div>
                ))}
              </div>
            </div>
            <img
              src={plantImg}
              alt="Crushing plant and haul trucks in operation"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </section>
        <SectionTag n="05" label="operations & logistics — process + image" />

        {/* 06 BUYERS */}
        <section className="py-14">
          <h2 className="display max-w-xl text-3xl md:text-5xl">Who we supply.</h2>
          <div className="mt-10 grid gap-px bg-rule md:grid-cols-4">
            {buyers.map((b) => (
              <div key={b.title} className="bg-surface p-6">
                <h3 className="text-sm font-semibold">{b.title}</h3>
                <p className="mt-3 text-sm text-ink-soft">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <SectionTag n="06" label="who we supply — buyer segments" />

        {/* 07 QUALITY */}
        <section id="quality" className="py-14">
          <h2 className="display max-w-2xl text-3xl md:text-5xl">Quality & certification.</h2>
          <p className="mt-4 max-w-xl text-sm text-ink-soft">
            We operate under licensed mineral title and document compliance at every stage. Test certificates available
            on request for any active contract.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {certs.map((c) => (
              <div key={c} className="flex items-start gap-3 border border-rule p-5">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" />
                </span>
                <p className="text-sm">{c}</p>
              </div>
            ))}
          </div>
        </section>
        <SectionTag n="07" label="quality & certification" />

        {/* 08 QUOTE */}
        <section id="quote" className="py-16">
          <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
            <div>
              <h2 className="display text-3xl md:text-5xl">
                Request a quote.
                <br />
                <span className="text-primary">We respond inside 24 hours.</span>
              </h2>
              <p className="mt-6 max-w-sm text-sm text-ink-soft">
                Tell us the grade, tonnage and delivery window. We'll come back with pricing, lead time and a dispatch
                plan tailored to your site.
              </p>
              <div className="mono mt-10 space-y-2 text-sm">
                <p className="text-ink-soft">DIRECT LINE</p>
                <p>+234 704 700 0542</p>
                <p>+234 704 700 0541</p>
                <p className="pt-4 text-ink-soft">SITE</p>
                <p>KM 2, Ilara/Ipogun Road,<br />Ilara-Mokin, Ondo State</p>
              </div>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <input className="w-full border border-rule bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none" placeholder="Full name" />
                <input className="w-full border border-rule bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none" placeholder="Company" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input className="w-full border border-rule bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none" placeholder="Email" type="email" />
                <input className="w-full border border-rule bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none" placeholder="Phone" type="tel" />
              </div>
              <input className="w-full border border-rule bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none" placeholder="Project location / site" />
              <textarea
                rows={5}
                className="w-full border border-rule bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none"
                placeholder="Grade(s), tonnage required, delivery window"
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:w-auto"
              >
                Send inquiry <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>
        <SectionTag n="08" label="request a quote — the conversion" />

        {/* 09 FOOTER */}
        <footer className="grid gap-10 py-14 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="block h-3 w-3 bg-primary" />
              <span className="text-sm font-semibold tracking-tight">MERCIFUL QUARRY</span>
            </div>
            <p className="mt-4 max-w-xs text-xs text-ink-soft">
              Merciful Natural Resources Limited. Granite aggregates produced at Ilara-Mokin, Ondo State.
            </p>
          </div>
          <div>
            <p className="mono text-[11px] uppercase text-ink-soft">Explore</p>
            <ul className="mt-3 space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}><a href={l.href} className="hover:text-primary">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mono text-[11px] uppercase text-ink-soft">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Mr. Biodun Ogunsan</li>
              <li className="text-ink-soft">MD / CEO</li>
              <li>+234 704 700 0542</li>
              <li>+234 704 700 0541</li>
            </ul>
          </div>
          <div className="flex items-end justify-start md:justify-end">
            <div className="mono text-[10px] text-ink-soft">
              © {new Date().getFullYear()} MNRL<br />All rights reserved.
            </div>
          </div>
        </footer>
        <SectionTag n="09" label="footer — contact & trust" />
      </main>
    </div>
  );
}
