// FILE: src/app/services/page.js
"use client";
import Link from "next/link";
import Image from "next/image";

const services = [
    {
        title: "Corporate Uniforms",
        desc: "Custom-branded attire for your team.",
        link: "/services/corporate-uniforms",
        image: "https://picsum.photos/800/600?random=20"
    },
    {
        title: "Corporate Gifting",
        desc: "Curated hampers and premium gifts.",
        link: "/services/corporate-gifting",
        image: "https://picsum.photos/800/600?random=21"
    },
    {
        title: "Event Management",
        desc: "End-to-end planning and execution.",
        link: "/services/event-management",
        image: "https://picsum.photos/800/600?random=22"
    }
];

export default function ServicesHubPage() {
    return (
        <div className="bg-cream min-h-screen text-off-black">

            <section className="pt-48 pb-24 px-6 md:px-12">
                <div className="container mx-auto">
                    <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-burgundy mb-6">
                        SERVICES
                    </h1>
                    <div className="w-full h-[1px] bg-off-black/10" />
                </div>
            </section>

            <section className="pb-32 px-6 md:px-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {services.map((service, i) => (
                        <Link key={i} href={service.link} className="group block">
                            <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-off-black/5">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/10 transition-colors duration-500" />
                            </div>
                            <h2 className="font-display text-3xl group-hover:text-burgundy transition-colors">{service.title}</h2>
                            <p className="font-sans text-off-black/60 mt-2">{service.desc}</p>
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
