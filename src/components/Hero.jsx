import Link from "next/link";
import { catalogueItems } from "@/lib/siteData";

export default function Hero() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="shell grid gap-10 py-14 md:py-20 lg:grid-cols-[1.45fr_0.75fr] lg:items-end lg:gap-16 lg:py-24">
        <div>
          <p className="mb-5 flex items-center gap-3 text-sm font-semibold text-muted">
            <span className="h-px w-8 bg-brass" aria-hidden="true" />
            Corporate solutions, since 2005
          </p>
          <h1 className="display-xl text-ink">
            Everything your team wears, shares and celebrates.
          </h1>
        </div>

        <div className="lg:pb-1">
          <p className="lede">
            Browse uniforms, branded gifts and event services from one reliable partner. Find what you need, then tell us how to make it yours.
          </p>

          <form action="/services" className="mt-7" role="search">
            <label htmlFor="catalogue-search" className="field-label">
              What are you looking for?
            </label>
            <div className="flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
              <input
                id="catalogue-search"
                name="q"
                type="search"
                className="field min-w-0 flex-1"
                placeholder="Try “polo shirts” or “welcome kits”"
              />
              <button type="submit" className="button button-primary shrink-0">
                Search catalogue
              </button>
            </div>
          </form>

          <Link href="/services" className="text-link mt-4">
            Browse all {catalogueItems.length} options
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              <path d="M4 10h12m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
