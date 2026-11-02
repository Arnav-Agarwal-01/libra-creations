import Image from "next/image";
import Link from "next/link";
import { clients, milestone } from "@/lib/siteData";

export const metadata = {
  title: "Our Clients",
  description: "Organizations across India that have trusted Libra Creations for uniforms, gifting and corporate solutions.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-line bg-mist">
        <div className="shell grid gap-8 py-12 md:py-16 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold text-muted">Relationships built over time</p>
            <h1 className="display-lg text-ink">Trusted by teams doing meaningful work.</h1>
          </div>
          <p className="lede text-base">
            We have supported organizations across technology, telecom, healthcare, retail and beyond, with a consistent focus on quality and dependable delivery.
          </p>
        </div>
      </section>

      <section className="section-compact">
        <div className="shell">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
            <h2 className="display-md text-ink">Some of our clients</h2>
            <p className="text-sm text-muted">Serving organizations since 2005</p>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((client) => (
              <li key={client.name} className="flex min-h-32 items-center justify-center rounded-xl border border-line bg-surface p-6">
                {client.logo ? (
                  <div className="relative h-14 w-full">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      unoptimized
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <span className="text-center font-display text-lg font-semibold text-ink">{client.name}</span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">And many more organizations across India.</p>
        </div>
      </section>

      <section className="section-compact pt-0">
        <div className="shell">
          <div className="grid overflow-hidden rounded-2xl bg-ink-deep text-white lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex min-h-56 items-center justify-center border-b border-white/15 p-10 lg:border-b-0 lg:border-r">
              <div className="relative h-20 w-full max-w-xs">
                <Image
                  src="/images/clients/logos/tata-teleservices.svg"
                  unoptimized
                  alt="Tata Teleservices"
                  fill
                  sizes="320px"
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
            <div className="p-6 sm:p-9 lg:p-12">
              <p className="text-sm font-semibold text-white/55">A proud milestone</p>
              <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-[-0.035em]">{milestone.title}</h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/65">{milestone.body}</p>
              <p className="mt-6 text-sm font-bold text-white">{milestone.stat} <span className="font-normal text-white/55">— {milestone.statLabel}</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="shell flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink">Planning your next requirement?</h2>
            <p className="mt-2 text-sm text-muted">Let’s discuss how we can support your team.</p>
          </div>
          <Link href="/contact" className="button button-primary shrink-0">Get in touch</Link>
        </div>
      </section>
    </>
  );
}
