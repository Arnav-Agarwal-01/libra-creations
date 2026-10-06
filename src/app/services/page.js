// FILE: src/app/services/page.js
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/siteData";

export default function ServicesHubPage() {
    return (
        <div className="bg-cream min-h-screen text-off-black">

            <section className="pt-48 pb-24 px-6 md:px-12">
                <div className="container mx-auto">
                    <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-burgundy mb-6">
                        SERVICES
                    </h1>
                    <p className="font-sans text-xl text-off-black/70 max-w-2xl mb-12">
                        One partner. Three core capabilities — from what your team wears, to what your brand gifts, to the experiences your organization creates.
                    </p>
                    <div className="w-full h-[1px] bg-off-black/10" />
                </div>
            </section>

            <section className="pb-32 px-6 md:px-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {services.map((service) => (
                        <Link key={service.id} href={`/services/${service.slug}`} className="group block">
                            <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-off-black/5">
                                <Image
                                    src={service.reference}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/10 transition-colors duration-500" />
                            </div>
                            <div className="font-display text-sm text-off-black/30 mb-2">SERVICE {service.id}</div>
                            <h2 className="font-display text-3xl group-hover:text-burgundy transition-colors">{service.title}</h2>
                            <p className="font-sans text-off-black/60 mt-2 leading-relaxed">{service.short}</p>
                            <div className="mt-4 flex items-center gap-2 text-sm uppercase tracking-wider text-off-black/40 group-hover:text-burgundy transition-colors">
                                <span>Explore</span>
                                <span className="text-xl">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
