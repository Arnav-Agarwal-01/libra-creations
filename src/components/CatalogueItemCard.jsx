import Link from "next/link";
import { enquiryHref } from "@/lib/siteData";

export default function CatalogueItemCard({ item, service }) {
  return (
    <Link
      href={enquiryHref(service.slug, item)}
      aria-label={`Enquire about ${item}`}
      className="group flex min-h-36 flex-col justify-between rounded-xl border border-line bg-surface p-5 transition-colors hover:border-ink/40 hover:bg-mist/45"
    >
      <div>
        <span className="text-xs font-semibold text-muted">{service.title}</span>
        <h3 className="mt-2 font-display text-xl font-semibold leading-tight tracking-[-0.025em] text-ink">
          {item}
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
