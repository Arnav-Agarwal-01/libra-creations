"use client";

import { useEffect, useMemo, useState } from "react";
import CatalogueItemCard from "@/components/CatalogueItemCard";
import { catalogueGroups, catalogueItems } from "@/lib/siteData";

const PAGE_SIZE = 24;
const MORE_SIZE = 48;

const searchableText = (item) =>
  [
    item.name,
    item.brand,
    item.family,
    item.code,
    item.detail,
    item.service.title,
    item.service.short,
    ...(item.service.features || []),
    ...(item.service.supportSteps || []),
    ...(item.featured ? [item.featured.detail, item.featured.note, ...item.featured.tags] : []),
  ]
    .join(" ")
    .toLowerCase();

export default function CatalogueExplorer({ initialQuery = "", initialCategory = "all" }) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [visible, setVisible] = useState({});
  const [activeSection, setActiveSection] = useState(catalogueGroups[0]?.anchor || "");

  const filteredGroups = useMemo(() => {
    const tokens = query.toLowerCase().trim().split(/\s+/).filter(Boolean);

    return catalogueGroups.map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        if (category !== "all" && group.slug !== category) return false;
        if (!tokens.length) return true;
        const haystack = searchableText(item);
        return tokens.every((token) => haystack.includes(token));
      }),
    }));
  }, [category, query]);

  const matchingCount = filteredGroups.reduce((sum, group) => sum + group.items.length, 0);
  const isFiltering = Boolean(query.trim()) || category !== "all";

  useEffect(() => {
    if (category !== "all" || query.trim()) return;
    const sections = catalogueGroups
      .map((group) => document.getElementById(group.anchor))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (current) setActiveSection(current.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [category, query]);

  const resetFilters = () => {
    setQuery("");
    setCategory("all");
    setVisible({});
  };

  const showMore = (slug, total) => {
    setVisible((current) => ({
      ...current,
      [slug]: Math.min((current[slug] ?? PAGE_SIZE) + MORE_SIZE, total),
    }));
  };

  return (
    <div>
      <div className="rounded-2xl border border-line bg-surface p-4 sm:p-5">
        <label htmlFor="catalogue-filter-search" className="field-label">
          Search by product, brand, colour, fabric or service
        </label>
        <div className="relative">
          <svg
            viewBox="0 0 24 24"
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 4 4" strokeLinecap="round" />
          </svg>
          <input
            id="catalogue-filter-search"
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setVisible({});
            }}
            className="field field-search"
            placeholder="Try “polo”, “cork”, “trolley”…"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2" aria-label="Filter by collection">
          {[
            { slug: "all", label: "All items", count: catalogueItems.length },
            ...catalogueGroups.map((group) => ({
              slug: group.slug,
              label: group.label,
              count: group.items.length,
            })),
          ].map((item) => (
            <button
              key={item.slug}
              type="button"
              aria-pressed={category === item.slug}
              onClick={() => {
                setCategory(item.slug);
                setVisible({});
              }}
              className={`flex min-h-11 shrink-0 items-center gap-2 rounded-lg border px-3.5 text-sm font-semibold transition-colors ${
                category === item.slug
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-surface text-muted hover:border-ink/40 hover:text-ink"
              }`}
            >
              {item.label}
              <span className={`text-xs ${category === item.slug ? "text-white/65" : "text-muted"}`}>
                {item.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5 mt-7 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-ink" role="status" aria-live="polite">
          {isFiltering
            ? `Showing ${matchingCount} of ${catalogueItems.length} options`
            : `${catalogueItems.length} options across ${catalogueGroups.length} collections`}
        </p>
        {isFiltering && (
          <button
            type="button"
            onClick={resetFilters}
            className="min-h-10 text-sm font-semibold text-muted underline decoration-line underline-offset-4 hover:text-ink"
          >
            Clear filters
          </button>
        )}
      </div>

      {category === "all" && !query.trim() && (
        <nav
          aria-label="Jump to a catalogue collection"
          className="sticky top-20 z-20 -mx-4 mb-8 border-y border-line bg-paper/95 px-4 backdrop-blur sm:mx-0 sm:rounded-xl sm:border"
        >
          <div className="flex gap-1 overflow-x-auto py-2">
            {catalogueGroups.map((group) => (
              <a
                key={group.anchor}
                href={`#${group.anchor}`}
                aria-current={activeSection === group.anchor ? "true" : undefined}
                className={`flex min-h-10 shrink-0 items-center gap-2 rounded-lg px-3 text-sm font-semibold transition-colors ${
                  activeSection === group.anchor
                    ? "bg-mist text-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                <span className="hidden text-[11px] font-bold tracking-[0.12em] text-brass sm:inline">{group.index}</span>
                <span className="sm:hidden">{group.label}</span>
                <span className="hidden sm:inline">{group.title}</span>
                <span className="hidden text-xs font-medium text-muted sm:inline">{group.items.length}</span>
              </a>
            ))}
          </div>
        </nav>
      )}

      {matchingCount > 0 ? (
        <div className="space-y-14">
          {filteredGroups.map((group) => {
            if (!group.items.length) return null;
            if (category !== "all" && group.slug !== category) return null;

            const limit = query.trim()
              ? group.items.length
              : visible[group.slug] ?? PAGE_SIZE;
            const shown = group.items.slice(0, limit);
            const remaining = group.items.length - shown.length;

            return (
              <section
                key={group.slug}
                id={group.anchor}
                className="scroll-mt-14"
                aria-labelledby={`${group.anchor}-heading`}
              >
                <div className="flex flex-col gap-4 border-t border-line pt-7 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-2xl">
                    <p className="eyebrow text-brass">
                      {group.index} · {group.kicker}
                    </p>
                    <h2
                      id={`${group.anchor}-heading`}
                      className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl"
                    >
                      {group.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{group.blurb}</p>
                  </div>
                  <p className="shrink-0 text-sm font-semibold text-muted">
                    {group.items.length} {group.items.length === 1 ? "option" : "options"}
                  </p>
                </div>

                <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {shown.map((item) => (
                    <li key={item.id}>
                      <CatalogueItemCard
                        name={item.name}
                        service={item.service}
                        featured={item.featured}
                        brand={item.brand}
                        family={item.family}
                        code={item.code}
                        detail={item.detail}
                        kind={item.kind}
                      />
                    </li>
                  ))}
                </ul>

                {remaining > 0 && (
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => showMore(group.slug, group.items.length)}
                      className="button button-secondary"
                    >
                      Show {Math.min(MORE_SIZE, remaining)} more
                    </button>
                    <p className="text-sm text-muted">
                      Showing {shown.length} of {group.items.length}
                    </p>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-line bg-surface px-6 py-16 text-center">
          <h2 className="font-display text-2xl font-semibold text-ink">No matching options</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
            Try a shorter search or browse another collection. You can also send us a custom
            requirement if you cannot find what you need.
          </p>
          <button type="button" onClick={resetFilters} className="button button-secondary mt-6">
            Show all options
          </button>
        </div>
      )}
    </div>
  );
}
