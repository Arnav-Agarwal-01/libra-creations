import Link from "next/link";
import { industries } from "@/lib/siteData";

export default function Industries() {
  return (
    <section id="industries" className="section">
      <div className="shell grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-semibold text-muted">Made for your working world</p>
          <h2 className="display-lg text-ink">Solutions that fit your industry.</h2>
          <p className="lede mt-5 text-base">
            Different teams need different materials, formats and levels of support. We shape every requirement around the way your organization works.
          </p>
          <Link href="/contact" className="text-link mt-6">Discuss your requirement</Link>
        </div>

        <ul className="grid gap-x-8 sm:grid-cols-2">
          {industries.map((industry) => (
            <li key={industry.id} className="border-t border-line py-5">
              <h3 className="font-display text-xl font-semibold tracking-[-0.025em] text-ink">{industry.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{industry.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
