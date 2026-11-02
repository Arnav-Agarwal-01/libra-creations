"use client";

import { useMemo, useState } from "react";
import CatalogueItemCard from "@/components/CatalogueItemCard";
import { catalogueItems, services } from "@/lib/siteData";

const serviceChipCounts = () =>
  services.map((service) => ({
    ...service,
    count: service.products.length + catalogueItems.filter((item) => item.service.slug === service.slug && item.featured).length,
  }));

export default function CatalogueExplorer({ initialQuery = "", initialCategory = "all" }) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);

  const filteredItems = useMemo(() => {
    const tokens = query.toLowerCase().trim().split(/\s+/).filter(Boolean);

    return catalogueItems.filter((item) => {
      const { name, service, featured } = item;
      if (category !== "all" && service.slug !== category) return false;
      const searchable = [
        name,
        service.title,
        ...service.features,
        ...(service.supportSteps || []),
        ...(featured ? [featured.brand, featured.detail, ...featured.tags, featured.note] : []),
      ]
        .join(" ")
        .toLowerCase();
      return tokens.every((token) => searchable.includes(token));
    });
  }, [category, query]);

  const resetFilters = () => {
    setQuery("");
    setCategory("all");
  };

  return (
    <div>
      <div className="rounded-2xl border border-line bg-surface p-4 sm:p-5">
        <label htmlFor="catalogue-filter-search" className="field-label">Search by product, brand, colour, fabric or service</label>
        <div className="relative">
          <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 4 4" strokeLinecap="round" />
          </svg>
          <input
            id="catalogue-filter-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="field field-search"
            placeholder="Try “dry fit polo”, “Puma”, “cork gift set”, “bamboo”…"
          />
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1" aria-label="Filter by collection">
          {[{ slug: "all", title: "All solutions", count: catalogueItems.length }, ...serviceChipCounts()].map((item) => (
            <button
              key={item.slug}
              type="button"
              aria-pressed={category === item.slug}
              onClick={() => setCategory(item.slug)}
              className={`flex min-h-11 shrink-0 items-center gap-2 rounded-lg border px-3.5 text-sm font-semibold transition-colors ${
                category === item.slug
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-surface text-muted hover:border-ink/40 hover:text-ink"
              }`}
            >
              {item.title}
              <span className={`text-xs ${category === item.slug ? "text-white/65" : "text-muted"}`}>
                {item.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5 mt-7 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-ink" role="status" aria-live="polite">
          Showing {filteredItems.length} of {catalogueItems.length} solutions
        </p>
        {(query || category !== "all") && (
          <button type="button" onClick={resetFilters} className="min-h-10 text-sm font-semibold text-muted underline decoration-line underline-offset-4 hover:text-ink">
            Clear filters
          </button>
        )}
      </div>

      {filteredItems.length > 0 ? (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <li key={item.id}>
              <CatalogueItemCard name={item.name} service={item.service} featured={item.featured || null} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded-2xl border border-dashed border-line bg-surface px-6 py-16 text-center">
          <h2 className="font-display text-2xl font-semibold text-ink">No matching solutions</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
            Try a shorter search or browse another collection. You can also send us a custom requirement if you cannot find what you need.
          </p>
          <button type="button" onClick={resetFilters} className="button button-secondary mt-6">
            Show all solutions
          </button>
        </div>
      )}
    </div>
  );
}
