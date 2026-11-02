import Image from "next/image";
import Link from "next/link";
import { enquiryHref } from "@/lib/siteData";

function Tags({ tags }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.slice(0, 3).map((tag) => (
        <li key={tag} className="rounded-full border border-line bg-mist/70 px-2.5 py-1 text-[11px] font-semibold text-muted">
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default function CatalogueItemCard({ name, service, featured = null }) {
  const href = enquiryHref(service.slug, name);
  const label = `Enquire about ${name}`;

  if (!featured) {
    return (
      <Link
        href={href}
        aria-label={label}
        className="group flex min-h-36 flex-col justify-between rounded-xl border border-line bg-surface p-5 transition-colors hover:border-ink/40 hover:bg-mist/45"
      >
        <div>
          <span className="text-xs font-semibold text-muted">{service.title}</span>
          <h3 className="mt-2 font-display text-xl font-semibold leading-tight tracking-[-0.025em] text-ink">
            {name}
          </h3>
        </div>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-ink">
          Enquire about this
          <svg viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
            <path d="M4 10h12m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      aria-label={label}
      className="group flex h-full min-h-36 flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-ink/40"
    >
      <div className="relative aspect-[5/4] w-full overflow-hidden bg-mist">
        <Image
          src={featured.image}
          alt={`${featured.brand} ${name}`}
          fill
          sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-ink/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
          {featured.brand}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.025em] text-ink">
          {name}
        </h3>
        <p className="mt-1 text-sm text-muted">{featured.detail}</p>
        <div className="mt-3">
          <Tags tags={featured.tags} />
        </div>
        <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-bold text-ink">
          Enquire about this
          <svg viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
            <path d="M4 10h12m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
