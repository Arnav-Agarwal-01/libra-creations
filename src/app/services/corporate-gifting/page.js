// FILE: src/app/services/corporate-gifting/page.js
"use client";
import Image from "next/image";
import Link from "next/link";
import { services, whatsappLink } from "@/lib/siteData";

const service = services[1];

export default function GiftingPage() {
    return (
        <div className="bg-cream min-h-screen text-off-black">

            {/* HERO */}
            <section className="pt-48 pb-24 px-6 md:px-12 bg-cream">
                <div className="container mx-auto">
                    <p className="font-sans text-sm tracking-widest uppercase text-off-black/60 mb-4">
                        Service {service.id}
                    </p>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-burgundy mb-6">
                        CORPORATE<br />GIFTING
                    </h1>
                    <p className="font-sans text-xl text-off-black/70 max-w-2xl mb-8">
                        Thoughtful Gifts. Lasting Impressions. {service.tagline}
                    </p>
                    <p className="font-display text-2xl md:text-3xl text-burgundy/70 italic mb-12 max-w-2xl">
                        &quot;{service.quote}&quot;
                    </p>
                    <div className="flex flex-wrap gap-4 mb-12">
                        <Link href="/contact" className="inline-block px-8 py-4 bg-burgundy text-cream rounded-full font-sans font-medium hover:bg-off-black transition-colors">
                            Discuss Your Gifting Requirement
                        </Link>
                        <a href={whatsappLink(service.whatsapp)} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 border border-off-black/20 rounded-full font-sans font-medium hover:border-burgundy hover:text-burgundy transition-colors">
                            WhatsApp Us
                        </a>
                    </div>
                    <div className="w-full h-[1px] bg-off-black/10" />
                </div>
            </section>

            {/* FEATURED IMAGE */}
            <section className="w-full h-[60vh] relative">
                <Image
                    src={service.image}
                    alt="Premium corporate gifting, welcome kits and customized branded gifts"
                    fill
                    className="object-cover"
                />
            </section>

            {/* PRODUCT RANGE */}
            <section className="py-24 px-6 md:px-12">
                <div className="container mx-auto">
                    <p className="font-sans text-xs uppercase tracking-[0.3em] text-off-black/40 mb-4">
                        Product Range
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl text-burgundy mb-16">
                        Corporate Gifting<br />for Every Occasion
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-0">
                        {service.products.map((product, i) => (
                            <div key={product} className="border-t border-off-black/10 py-6 flex gap-4 items-start hover-trigger">
                                <span className="font-display text-xs text-off-black/30">{String(i + 1).padStart(2, "0")}</span>
                                <h3 className="font-display text-lg text-off-black leading-snug">{product}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PHILOSOPHY */}
            <section className="py-24 px-6 md:px-12 bg-off-black text-cream">
                <div className="container mx-auto">
                    <p className="font-sans text-xs uppercase tracking-[0.3em] text-cream/40 mb-4">
                        Our Gifting Philosophy
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl mb-16">
                        Flexible Sourcing for<br />Requirements Big and Small
                    </h2>
                    <p className="font-sans text-lg text-cream/70 leading-relaxed max-w-3xl mb-16">
                        Whether it is a regular employee appreciation gift or an exclusive executive hamper, Libra Creations sources and delivers products that fit the client&apos;s vision, budget and branding requirement.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {service.process.map((step, i) => (
                            <div key={step.title} className="border border-cream/15 rounded-2xl p-8 hover:border-burgundy/60 transition-colors">
                                <div className="font-display text-3xl text-burgundy mb-4">{String(i + 1).padStart(2, "0")}</div>
                                <h3 className="font-display text-xl mb-3">{step.title}</h3>
                                <p className="font-sans text-cream/60 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-burgundy text-cream text-center px-6">
                <h2 className="font-display text-4xl mb-6">Tell Us the Occasion, Audience and Budget.</h2>
                <p className="font-sans text-cream/70 mb-10 max-w-xl mx-auto">
                    We will help structure the right gifting requirement around your brand.
                </p>
                <Link href="/contact" className="inline-block px-8 py-4 bg-cream text-burgundy rounded-full font-sans font-medium hover:bg-off-black hover:text-cream transition-all">
                    Discuss Your Requirement
                </Link>
            </section>
        </div>
    );
}
