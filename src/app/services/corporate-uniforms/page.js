// FILE: src/app/services/corporate-uniforms/page.js
"use client";
import Image from "next/image";
import Link from "next/link";
import { services, site, whatsappLink } from "@/lib/siteData";

const service = services[0];

export default function UniformsPage() {
    return (
        <div className="bg-cream min-h-screen text-off-black">

            {/* HERO */}
            <section className="pt-48 pb-24 px-6 md:px-12 bg-cream">
                <div className="container mx-auto">
                    <p className="font-sans text-sm tracking-widest uppercase text-off-black/60 mb-4">
                        Service {service.id}
                    </p>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-burgundy mb-6">
                        CORPORATE<br />UNIFORMS
                    </h1>
                    <p className="font-sans text-xl text-off-black/70 max-w-2xl mb-12">
                        Professional uniforms reflect professionalism, unity and brand identity. Complete uniform solutions tailored to every industry.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-12">
                        <Link href="/contact" className="inline-block px-8 py-4 bg-burgundy text-cream rounded-full font-sans font-medium hover:bg-off-black transition-colors">
                            Request a Uniform Quote
                        </Link>
                        <a href={site.phoneHref} className="inline-block px-8 py-4 border border-off-black/20 rounded-full font-sans font-medium hover:border-burgundy hover:text-burgundy transition-colors">
                            Call +91-9393220094
                        </a>
                    </div>
                    <div className="w-full h-[1px] bg-off-black/10" />
                </div>
            </section>

            {/* FEATURED IMAGE */}
            <section className="w-full h-[60vh] relative">
                <Image
                    src={service.image}
                    alt="Corporate uniform solutions including formal wear, polos and workwear"
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
                        Uniform Solutions for Diverse<br />Corporate Requirements
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-0">
                        {service.products.map((product, i) => (
                            <div key={product} className="border-t border-off-black/10 py-6 flex gap-4 items-start hover-trigger">
                                <span className="font-display text-xs text-off-black/30">{String(i + 1).padStart(2, "0")}</span>
                                <h3 className="font-display text-lg text-off-black leading-snug">{product}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICE SUPPORT */}
            <section className="py-24 px-6 md:px-12 bg-off-black text-cream">
                <div className="container mx-auto">
                    <p className="font-sans text-xs uppercase tracking-[0.3em] text-cream/40 mb-4">
                        Complete Service Support
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl mb-16">
                        From Design Consultation<br />to Nationwide Delivery
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.supportSteps.map((step, i) => (
                            <div key={step} className="border border-cream/15 rounded-2xl p-6 hover:border-burgundy/60 transition-colors">
                                <div className="font-display text-3xl text-burgundy mb-4">{String(i + 1).padStart(2, "0")}</div>
                                <h3 className="font-display text-lg">{step}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-24 px-6 md:px-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <p className="font-sans text-xs uppercase tracking-[0.3em] text-off-black/40 mb-4">
                            How We Support You
                        </p>
                        <h2 className="font-display text-4xl mb-6">A Structured<br />Uniform Program</h2>
                        <p className="font-sans text-lg text-off-black/70 leading-relaxed">
                            Our approach combines design guidance, fabric selection, size management, branding and delivery support so organizations can manage uniform requirements with greater consistency.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {service.process.map((step, i) => (
                            <div key={step.title} className="flex gap-6 border-l-2 border-burgundy pl-6">
                                <div className="font-display text-3xl text-burgundy/40">{String(i + 1).padStart(2, "0")}</div>
                                <div>
                                    <h3 className="font-display text-2xl text-off-black mb-2">{step.title}</h3>
                                    <p className="font-sans text-off-black/60">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-off-black text-cream text-center px-6">
                <h2 className="font-display text-4xl mb-6">Let&apos;s Build a Professional Uniform Program for Your Team.</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/contact" className="inline-block px-8 py-4 bg-burgundy text-cream rounded-full font-sans font-medium hover:bg-cream hover:text-off-black transition-all">
                        Enquire Now
                    </Link>
                    <a href={whatsappLink(service.whatsapp)} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 border border-cream/30 rounded-full font-sans font-medium hover:bg-cream hover:text-off-black transition-all">
                        WhatsApp Us
                    </a>
                </div>
            </section>
        </div>
    );
}
