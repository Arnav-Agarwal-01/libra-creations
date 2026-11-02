import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";
import { services } from "@/lib/siteData";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="shell">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between md:mb-10">
          <div>
            <p className="mb-3 text-sm font-semibold text-muted">Three ways to build your brand</p>
            <h2 className="display-lg text-ink">Start with a collection</h2>
          </div>
          <Link href="/services" className="text-link shrink-0">
            Search the full catalogue
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={service.id} className={`h-full ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}>
              <CategoryCard service={service} priority={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
