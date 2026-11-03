import Image from "next/image";
import Link from "next/link";
import CatalogueItemCard from "@/components/CatalogueItemCard";
import { catalogueGroups, enquiryHref, getFeaturedForService, whatsappLink } from "@/lib/siteData";

export default function ServiceDetail({ service }) {
  const isGifting = service.slug === "corporate-gifting";
  const rangeTitle = service.slug === "event-management" ? "Event formats and experiences" : `Explore the ${isGifting ? "gifting" : "uniform"} range`;
  const featured = getFeaturedForService(service.slug);
  const catalogueGroup = catalogueGroups.find((group) => group.slug === service.slug);

  return (
    <>
      <section className="shell py-8 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted">
          <Link href="/services" className="inline-flex min-h-8 items-center hover:text-ink">Catalogue</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-ink">{service.title}</span>
        </nav>

        <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <div>
            <h1 className="display-lg text-ink">{service.title}</h1>
            <p className="lede mt-5">{service.short}</p>
            {service.tagline && <p className="mt-3 text-sm leading-relaxed text-muted">{service.tagline}</p>}

            <ul className="mt-6 flex flex-wrap gap-2">
              {service.features.map((feature) => (
                <li key={feature} className="rounded-lg border border-line bg-surface px-3 py-2 text-xs font-semibold text-ink">
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row">
              <Link href={enquiryHref(service.slug)} className="button button-primary">Request a quote</Link>
              <a href={whatsappLink(service.whatsapp)} target="_blank" rel="noopener noreferrer" className="button button-secondary">
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-line bg-ink">
            <Image
              src={service.image}
              alt={`${service.title} from Libra Creations`}
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-compact">
        <div className="shell">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="mb-2 text-sm font-semibold text-muted">Choose a starting point</p>
              <h2 className="display-md text-ink">{rangeTitle}</h2>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted">{service.products.length} starting points</p>
              {catalogueGroup && (
                <Link
                  href={`/services?category=${service.slug}`}
                  className="text-link mt-1 text-sm"
                >
                  Browse all {catalogueGroup.items.length} options
                </Link>
              )}
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {service.products.map((product) => (
              <li key={product}>
                <CatalogueItemCard
                  name={product}
                  service={service}
                  brand={service.title}
                  family="Starting point"
                  detail="Customised to your requirement"
                  kind="solution"
                />
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted">
            Every starting point can be branded with your logo and delivered nationwide. Browse the featured pieces below, or open the full catalogue to search every available option.
          </p>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="section-compact bg-mist">
          <div className="shell">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="mb-2 text-sm font-semibold text-muted">Straight from our catalogues</p>
                <h2 className="display-md text-ink">Featured picks with searchable specs</h2>
              </div>
              <Link href={`/services?category=${service.slug}`} className="min-h-10 text-sm font-semibold text-muted underline decoration-line underline-offset-4 hover:text-ink">
                Search all {catalogueGroup?.items.length ?? 0} options
              </Link>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {featured.map((entry) => (
                <li key={entry.id}>
                  <CatalogueItemCard name={entry.name} service={service} featured={entry} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {service.supportSteps && (
        <section className="section-compact bg-mist">
          <div className="shell">
            <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
              <h2 className="display-md text-ink">Support built into every order.</h2>
              <ul className="grid gap-x-7 sm:grid-cols-2">
                {service.supportSteps.map((step) => (
                  <li key={step} className="flex items-center gap-3 border-t border-ink/15 py-4 text-sm font-semibold text-ink">
                    <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0 text-brass" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="m4 10 4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <section className="section-compact">
        <div className="shell grid gap-9 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold text-muted">A straightforward process</p>
            <h2 className="display-md text-ink">From your brief to delivery.</h2>
          </div>
          <ol className="grid gap-5 sm:grid-cols-2">
            {service.process.map((step, index) => (
              <li key={step.title} className="border-t-2 border-ink/20 pt-5">
                <span className="text-xs font-bold text-muted">Step {index + 1}</span>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.025em] text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="shell flex flex-col gap-7 py-10 md:flex-row md:items-center md:justify-between md:py-12">
          <div>
            <h2 className="font-display text-3xl font-medium tracking-[-0.035em]">Have a specific requirement?</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">Share your quantity, budget, timeline and branding needs. We will help shape the right solution.</p>
          </div>
          <Link href={enquiryHref(service.slug)} className="button button-light shrink-0">Start your enquiry</Link>
        </div>
      </section>
    </>
  );
}
