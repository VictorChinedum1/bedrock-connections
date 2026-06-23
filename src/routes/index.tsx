import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight, Check, Quote, Menu, X } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/quarry-hero.jpg";
import excavatorAsset from "@/assets/quarry-excavator.jpg.asset.json";
import galleryImg from "@/gallery/ezgif-frame-003.jpg";
import galleryVideo from "@/gallery/crop1.mp4";
import cropVideo from "@/assets/crop1.mp4.asset.json";
import productDust from "@/assets/product-dust.jpg";
import product6mm from "@/assets/product-6mm.jpg";
import product13mm from "@/assets/product-13mm.jpg";
import product19mm from "@/assets/product-19mm.jpg";
import product25mm from "@/assets/product-25mm.jpg";
import productRiprap from "@/assets/product-riprap.jpg";
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
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#quote" },
];

const products = [
  { code: "0–5", title: "Granite Dust", desc: "Quarry fines for asphalt filler, block-work and base stabilisation.", img: productDust },
  { code: "3/8″", title: "Chippings — 6mm", desc: "Fine concrete mixes, precast units, decorative finishes.", img: product6mm },
  { code: "1/2″", title: "Aggregate — 13mm", desc: "Standard concrete, ready-mix plants, mid-grade structural pours.", img: product13mm },
  { code: "3/4″", title: "Aggregate — 19mm", desc: "Heavy structural concrete, foundations, columns and slabs.", img: product19mm },
  { code: "1″", title: "Aggregate — 25mm", desc: "Mass concrete, drainage works and large-volume infrastructure.", img: product25mm },
  { code: "RIP-RAP", title: "Armour Stone", desc: "Slope protection, erosion control, marine and roadworks.", img: productRiprap },
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

const reviews = [
  {
    quote: "Merciful Quarry has been our go-to aggregate partner for three years. The gradation is consistent, dispatch is on schedule, and their team understands ready-mix deadlines.",
    author: "Engr. Dare Adeyemi",
    role: "Operations Manager, Western Concrete Ltd.",
  },
  {
    quote: "On a 14-kilometer road rehabilitation project, they kept us loaded through the rainy season. That kind of reliability is rare in this business.",
    author: "Mr. Paul Ojo",
    role: "Project Supervisor, Ondo State Roadworks",
  },
  {
    quote: "As a small builder, I appreciate that they still take my orders seriously. Clean aggregate, fair price, and the trucks arrive when promised.",
    author: "Mrs. Amina Bello",
    role: "Independent Contractor, Akure",
  },
];


function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-rule bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="text-sm font-semibold tracking-tight">MERCIFUL QUARRY</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-ink-soft transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <a
              href="#quote"
              className="hidden items-center gap-1.5 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Request quote <ArrowRight className="h-3.5 w-3.5" />
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 p-2 text-foreground transition-colors hover:bg-surface md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU OVERLAY — NOW OPENS AFTER THE NAV SECTION */}
        <div
          className={`absolute top-[calc(100%-8px)] right-6 z-40 bg-background border border-rule rounded-sm shadow-2xl transition-all duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "opacity-100 translate-y-4" : "opacity-0 translate-y-2 pointer-events-none"
          } w-[240px]`}
        >
          <div className="flex flex-col py-5 px-6 gap-4">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between group border-b border-rule/30 pb-3 text-lg font-bold tracking-tight display transition-colors hover:text-primary"
              >
                <span>{l.label}</span>
                <ArrowRight 
                  className={`h-4 w-4 transition-all duration-500 delay-[${i * 70}ms] ${
                    isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`} 
                />
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get a quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* 01 HERO — full-bleed video */}
      <section className="relative isolate -mt-[1px] h-[88vh] min-h-[600px] w-full overflow-hidden bg-foreground text-background">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroImg}
        >
          <source
            src="https://videos.pexels.com/video-files/2491284/2491284-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/55 to-foreground/85" />
        <div className="relative mx-auto flex h-full max-w-[1200px] flex-col justify-end px-6 pb-16 pt-28">
          <h1 className="display reveal-words mt-6 max-w-[18ch] text-[40px] leading-[1.02] text-gradient-hero sm:text-[56px] md:text-[88px]">
            Granite, graded<br />to specification.
          </h1>
          <p className="reveal mt-6 max-w-[52ch] text-sm text-background/80 sm:text-base md:text-lg">
            Merciful Natural Resources Limited produces half-a-million metric tons of granite
            aggregates a year — consistent, dispatched on time, and built for the projects that
            don't tolerate variance.
          </p>
          <div className="reveal mt-10 flex flex-wrap gap-3">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-background px-5 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
            >
              Request a quote <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 border border-background/70 px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-background hover:text-foreground"
            >
              View product range
            </a>
          </div>

        </div>
      </section>

      <main className="mx-auto max-w-[1200px] px-6 font-serif">

        {/* WHY MERCIFUL */}
        <section className="full-bleed bg-section-sand">
          <div className="mx-auto max-w-[1200px] px-6 py-14">
            <h2 className="display reveal-words max-w-2xl text-3xl md:text-5xl">
              Four pillars behind every tonne we dispatch.
            </h2>
            <div className="mt-10 grid gap-px bg-rule md:grid-cols-2">
              {pillars.map((p, i) => (
                <div
                  key={p.n}
                  className={`reveal bg-background p-6 md:p-8`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="mono text-xs text-accent">{p.n}</span>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                  </div>
                  <p className="mt-3 max-w-md text-sm text-ink-soft md:ml-10">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        

        {/* OPERATIONS */}
        <section id="operations" className="py-14">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div className="reveal-left">
              <h2 className="display reveal-words text-3xl md:text-5xl">
                From bedrock to truck bed.
              </h2>
              <p className="reveal mt-4 max-w-md text-sm text-ink-soft">
                A single, controlled chain — engineered so a 30-tonne haul leaves the plant the same way the last
                thousand did.
              </p>
              <div className="reveal mt-8 flex flex-wrap items-center gap-2">
                {process.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="border border-rule bg-background px-3 py-2 text-xs sm:px-4 sm:text-sm">{step}</div>
                    {i < process.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-ink-soft" />}
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right img-zoom">
              <img
                src={galleryImg}
                alt="Excavator loading granite into a haul truck at the Ilara-Mokin quarry pit"
                width={1280}
                height={720}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </section>


        {/* PRODUCTS */}
        <section id="products" className="full-bleed bg-section-sand">
          <div className="mx-auto max-w-[1200px] px-6 py-14">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <h2 className="display reveal-words max-w-xl text-3xl md:text-5xl">
                Granite by gradation — six standards.
              </h2>
              <p className="reveal max-w-sm text-sm text-ink-soft">
                Each grade is crushed, screened and stockpiled separately. Specify the size; we deliver it clean.
              </p>
            </div>
            <div className="grid gap-px bg-rule sm:grid-cols-2 md:grid-cols-3">
              {products.map((p, i) => (
                <article
                  key={p.title}
                  className="reveal-zoom group flex flex-col bg-background transition-colors hover:bg-accent-soft/20"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="img-zoom aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={p.img}
                      alt={`${p.title} — ${p.code} granite aggregate`}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between">
                      <span className="mono text-xs text-accent">{p.code}</span>
                      <ArrowUpRight className="h-4 w-4 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                    <h3 className="display mt-6 text-2xl">{p.title}</h3>
                    <p className="mt-3 text-sm text-ink-soft">{p.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        

        {/* BUYERS */}
        <section className="full-bleed bg-section-sage">
          <div className="mx-auto max-w-[1200px] px-6 py-14">
            <h2 className="display reveal-words max-w-xl text-3xl md:text-5xl">Who we supply.</h2>
            <div className="mt-10 grid gap-px bg-rule sm:grid-cols-2 md:grid-cols-4">
              {buyers.map((b, i) => (
                <div
                  key={b.title}
                  className="reveal-zoom bg-background p-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <h3 className="text-sm font-semibold text-accent-green">{b.title}</h3>
                  <p className="mt-3 text-sm text-ink-soft">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        

        {/* QUARRY IN MOTION */}
        <section className="full-bleed relative isolate overflow-hidden bg-foreground text-background">
          <div className="relative h-[60vh] min-h-[420px] w-full">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src={galleryVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-foreground/60" />
            <div className="relative mx-auto flex h-full max-w-[1200px] items-end px-6 pb-12">
              <div className="max-w-xl">
                <p className="mono reveal text-xs uppercase tracking-widest text-background/70">Quarry in motion</p>
                <h2 className="display reveal-words mt-4 text-3xl leading-tight md:text-5xl">
                  Bedrock to baseline. Every blast, every load.
                </h2>
              </div>
            </div>
          </div>
        </section>
        

        {/* QUALITY */}
        <section id="quality" className="full-bleed bg-section-sand">
          <div className="mx-auto max-w-[1200px] px-6 py-14">
            <h2 className="display reveal-words max-w-2xl text-3xl md:text-5xl">Quality & certification.</h2>
            <p className="reveal mt-4 max-w-xl text-sm text-ink-soft">
              We operate under licensed mineral title and document compliance at every stage. Test certificates available
              on request for any active contract.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {certs.map((c, i) => (
                <div
                  key={c}
                  className="reveal flex items-start gap-3 border border-rule bg-background p-5"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-accent text-accent-foreground">
                    <Check className="h-3 w-3" />
                  </span>
                  <p className="text-sm">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        

        {/* QUOTE */}
        <section id="quote" className="reveal py-16">
          <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
            <div>
              <h2 className="display text-3xl md:text-5xl">
                Request a quote.
                <br />
                <span className="text-gradient-warm">We respond inside 24 hours.</span>
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
        

        {/* CLIENT REVIEWS */}
        <section id="reviews" className="full-bleed bg-section-sage">
          <div className="mx-auto max-w-[1200px] px-6 py-16">
            <h2 className="display reveal-words max-w-xl text-3xl md:text-5xl">What our clients say.</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {reviews.map((r, i) => (
                <div
                  key={r.author}
                  className="reveal flex flex-col justify-between border border-rule bg-background p-6 md:p-8"
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div>
                    <Quote className="h-6 w-6 text-accent" />
                    <p className="mt-4 text-base leading-relaxed text-ink">{r.quote}</p>
                  </div>
                  <div className="mt-8">
                    <p className="text-sm font-semibold text-accent-green">{r.author}</p>
                    <p className="text-xs text-ink-soft">{r.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        


        

        {/* CALL TO ACTION — BRAND STATEMENT */}
        <section className="full-bleed bg-section-sand py-32 flex flex-col items-center justify-center overflow-hidden">
          <h2 
            className="display reveal text-8xl font-bold tracking-tighter md:text-[200px] bg-clip-text text-transparent bg-cover bg-center"
            style={{ backgroundImage: `url(${galleryImg})` }}
          >
            Built on Rock
          </h2>
        </section>

        {/* FOOTER */}
        <footer className="full-bleed bg-foreground text-background">
          <div className="reveal mx-auto grid max-w-[1200px] gap-10 px-6 py-14 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold tracking-tight">MERCIFUL QUARRY</span>
              </div>
              <p className="mt-4 max-w-xs text-xs text-background/70">
                Merciful Natural Resources Limited. Granite aggregates produced at Ilara-Mokin, Ondo State.
              </p>
              <p className="mt-3 mono text-[10px] text-background/50">RC 1686282</p>
            </div>
            <div>
              <p className="mono text-[11px] uppercase text-background/60">Explore</p>
              <ul className="mt-3 space-y-2 text-sm">
                {navLinks.map((l) => (
                  <li key={l.href}><a href={l.href} className="transition-colors hover:text-accent-soft">{l.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mono text-[11px] uppercase text-background/60">Contact</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>Mr. Biodun Ogunsan</li>
                <li className="text-background/70">MD / CEO</li>
                <li>+234 704 700 0542</li>
                <li>+234 704 700 0541</li>
              </ul>
            </div>
            <div className="flex items-end justify-start md:justify-end">
              <div className="mono text-[10px] text-background/60">
                © {new Date().getFullYear()} MNRL<br />All rights reserved.
              </div>
            </div>
          </div>
        </footer>
        
      </main>
    </div>
  );
}
