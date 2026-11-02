import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ service, priority = false }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface">
      <Link
        href={`/services/${service.slug}`}
        className="relative block aspect-[3/2] overflow-hidden bg-ink"
        aria-label={`Explore ${service.title}`}
      >
        <Image
          src={service.image}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.035em] text-ink">
            {service.title}
          </h3>
          <span className="shrink-0 rounded-md bg-mist px-2.5 py-1 text-xs font-bold text-ink">
            {service.products.length} options
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{service.short}</p>

        <ul className="mt-5 space-y-2 border-t border-line pt-4 text-sm text-ink/80">
          {service.products.slice(0, 3).map((product) => (
            <li key={product} className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
              {product}
            </li>
          ))}
        </ul>

        <Link href={`/services/${service.slug}`} className="text-link mt-auto pt-5">
          Explore {service.title.toLowerCase()}
          <svg viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
            <path d="M4 10h12m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
