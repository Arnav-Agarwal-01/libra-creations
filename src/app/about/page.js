import Image from "next/image";
import Link from "next/link";
import { journey, milestone, mission, site, vision, whyUs } from "@/lib/siteData";

export const metadata = {
  title: "About Us",
  description: "Learn about Libra Creations, a Hyderabad-based corporate solutions partner serving organizations across India since 2005.",
};

export default function AboutPage() {
  return (
    <>
      <section className="shell grid gap-8 py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
          <p className="mb-4 text-sm font-semibold text-muted">About Libra Creations</p>
          <h1 className="display-lg text-ink">A reliable partner should make things feel simple.</h1>
        </div>
        <div>
          <p className="lede text-base">
            We bring uniforms, gifting and events together under one roof, with the sourcing, branding and coordination needed to deliver them well.
          </p>
          <p className="mt-4 text-sm font-semibold text-ink">Established in {site.established} · Hyderabad, India</p>
        </div>
      </section>

      <div className="shell">
        <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-line bg-ink md:aspect-[2/1]">
          <Image
            src="/images/partnership-premium.webp"
            alt="Libra Creations partnership, experience and trust"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <section className="section-compact">
        <div className="shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <h2 className="display-md text-ink">Built on experience. Focused on what clients need next.</h2>
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              Originally established in 2005 as Libra Creation and re-incorporated in 2020 as Libra Creations, our company carries forward long-standing relationships, practical knowledge and a customer-first way of working.
            </p>
            <p>
              From our home in Hyderabad, we support organizations across India with dependable sourcing, customized branding, professional project management and responsive service.
            </p>
          </div>
        </div>
      </section>

      <section className="section-compact bg-mist">
        <div className="shell">
          <h2 className="display-md text-ink">Our journey</h2>
          <ol className="mt-10 ml-1 space-y-10 border-l-2 border-ink/15 pl-6 sm:pl-10">
            {journey.map((chapter) => (
              <li key={chapter.id} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-8 h-4 w-4 rounded-full bg-brass ring-4 ring-mist sm:-left-12"
                />
                <div className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-8">
                  <time className="font-display text-2xl font-medium text-ink">{chapter.year}</time>
                  <div>
                    <h3 className="text-base font-bold text-ink">{chapter.title}</h3>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">{chapter.quote}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-wider text-muted">{chapter.stat}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-compact border-y border-line bg-surface">
        <div className="shell grid gap-8 lg:grid-cols-[0.4fr_1.6fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold text-muted">A proud milestone</p>
            <p className="mt-2 font-display text-4xl text-ink">{milestone.stat}</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-muted">{milestone.statLabel}</p>
          </div>
          <div className="border-l-2 border-brass pl-5 sm:pl-7">
            <h3 className="font-display text-xl text-ink">{milestone.title}</h3>
            <p className="mt-3 max-w-prose text-base leading-relaxed text-muted">{milestone.body}</p>
          </div>
        </div>
      </section>

      <section className="bg-ink-deep text-white">
        <div className="shell grid gap-10 py-12 md:grid-cols-2 md:py-16">
          <div className="border-t border-white/25 pt-6">
            <h2 className="font-display text-2xl font-semibold tracking-[-0.03em]">Our vision</h2>
            <p className="mt-4 leading-relaxed text-white/65">{vision}</p>
          </div>
          <div className="border-t border-white/25 pt-6">
            <h2 className="font-display text-2xl font-semibold tracking-[-0.03em]">Our mission</h2>
            <p className="mt-4 leading-relaxed text-white/65">{mission}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold text-muted">What you can expect</p>
            <h2 className="display-md text-ink">Quality without the runaround.</h2>
          </div>
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {whyUs.map((point) => (
              <li key={point} className="flex items-start gap-3 border-t border-line py-4 text-sm font-semibold leading-relaxed text-ink">
                <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-brass" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="m4 10 4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink">Let’s make your next requirement easier.</h2>
            <p className="mt-2 text-sm text-muted">Tell us what you are planning and where you need support.</p>
          </div>
          <Link href="/contact" className="button button-primary shrink-0">Start a conversation</Link>
        </div>
      </section>
    </>
  );
}
