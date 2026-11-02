import CatalogueExplorer from "@/components/CatalogueExplorer";
import { getServiceBySlug } from "@/lib/siteData";

export const metadata = {
  title: "Corporate Catalogue",
  description: "Search and browse corporate uniforms, branded gifts and event services from Libra Creations.",
};

export default async function ServicesHubPage({ searchParams }) {
  const params = await searchParams;
  const initialQuery = typeof params.q === "string" ? params.q : "";
  const requestedCategory = typeof params.category === "string" ? params.category : "";
  const initialCategory = getServiceBySlug(requestedCategory)?.slug || "all";

  return (
    <>
      <section className="border-b border-line bg-mist">
        <div className="shell grid gap-6 py-12 md:grid-cols-[1fr_0.75fr] md:items-end md:py-16">
          <h1 className="display-lg text-ink">The corporate catalogue</h1>
          <p className="lede text-base md:justify-self-end">
            Start with a product, an event or simply an idea. Every option can be tailored to your organization.
          </p>
        </div>
      </section>
      <section className="section-compact">
        <div className="shell">
          <CatalogueExplorer initialQuery={initialQuery} initialCategory={initialCategory} />
        </div>
      </section>
    </>
  );
}
