import Image from "next/image";
import Link from "next/link";
import { clients } from "@/lib/siteData";

export default function Marquee() {
  return (
    <section className="section-compact border-b border-line bg-surface">
      <div className="shell">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-sm font-bold text-ink">Trusted by teams across India</h2>
          <Link href="/portfolio" className="text-sm font-semibold text-muted underline decoration-line underline-offset-4 hover:text-ink">
            View our clients
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
          {clients.slice(0, 8).map((client) => (
            <li key={client.name} className="flex h-24 items-center justify-center bg-surface p-5">
              {client.logo ? (
                <div className="relative h-12 w-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    unoptimized
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-contain"
                  />
                </div>
              ) : (
                <span className="text-center text-sm font-bold text-ink">{client.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
