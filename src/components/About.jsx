import Link from "next/link";
import { stats } from "@/lib/siteData";

export default function About() {
  return (
    <section id="about" className="bg-ink-deep text-white">
      <div className="shell section">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold text-white/60">One partner, fewer moving parts</p>
            <h2 className="display-lg">From first idea to final delivery.</h2>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-relaxed text-white/75">
              Since 2005, Libra Creations has helped organizations turn everyday requirements into consistent brand experiences. We bring sourcing, customization and coordination together, so your team spends less time managing vendors.
            </p>
            <Link href="/about" className="mt-6 inline-flex min-h-11 items-center text-sm font-bold text-white underline decoration-white/35 underline-offset-8 hover:decoration-brass">
              How we work
            </Link>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 border-y border-white/15 py-7 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col border-white/15 px-3 py-3 first:pl-0 sm:border-l sm:first:border-l-0 sm:px-6">
              <dt className="order-2 mt-1 text-xs leading-relaxed text-white/55">{stat.label}</dt>
              <dd className="font-display text-2xl font-medium tracking-[-0.035em] text-white md:text-3xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
