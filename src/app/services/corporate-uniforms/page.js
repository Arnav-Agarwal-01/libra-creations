// FILE: src/app/services/corporate-uniforms/page.js
"use client";
import Image from "next/image";

export default function UniformsPage() {
    return (
        <div className="bg-cream min-h-screen text-off-black">

            {/* HERO */}
            <section className="pt-48 pb-24 px-6 md:px-12 bg-cream">
                <div className="container mx-auto">
                    <p className="font-sans text-sm tracking-widest uppercase text-off-black/60 mb-4">
                        Service 01
                    </p>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-burgundy mb-6">
                        CORPORATE<br />UNIFORMS
                    </h1>
                    <p className="font-sans text-xl text-off-black/70 max-w-2xl mb-12">
                        Custom-branded attire designed for comfort, style, and brand consistency. We transform uniforms from a necessity into a brand asset.
                    </p>
                    <div className="w-full h-[1px] bg-off-black/10" />
                </div>
            </section>

            {/* FEATURED IMAGE */}
            <section className="w-full h-[60vh] relative">
                <Image
                    src="https://picsum.photos/1920/1080?random=10"
                    alt="Corporate Uniforms"
                    fill
                    className="object-cover"
                />
            </section>

            {/* DETAILS */}
            <section className="py-24 px-6 md:px-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="font-display text-4xl mb-6">Designed to<br />Empower</h2>
                        <p className="font-sans text-lg text-off-black/70 leading-relaxed mb-6">
                            A uniform is more than just clothing; it&apos;s the first point of contact between your brand and your customers. Our design process focuses on three key pillars: Fabric Quality, Functional Design, and Brand Identity.
                        </p>
                        <p className="font-sans text-lg text-off-black/70 leading-relaxed">
                            Whether it&apos;s front-desk elegance, industrial durability, or corporate casuals, we source the finest materials to ensure your team looks good and feels great all day.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            { title: "Fabric Innovation", desc: "Breathable, wrinkle-free, and durable fabrics suited for Indian climates." },
                            { title: "Custom Fit", desc: "Tailoring options for every body type to ensure inclusivity and comfort." },
                            { title: "Brand Alignment", desc: "Colors and logos matched precisely to your brand guidelines." }
                        ].map((item, i) => (
                            <div key={i} className="border-l-2 border-burgundy pl-6">
                                <h3 className="font-display text-2xl text-off-black mb-2">{item.title}</h3>
                                <p className="font-sans text-off-black/60">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-off-black text-cream text-center">
                <h2 className="font-display text-4xl mb-6">Need a Uniform Solution?</h2>
                <a href="/contact" className="inline-block border-b border-cream/30 pb-1 hover:border-burgundy hover:text-burgundy transition-colors uppercase tracking-wider">
                    Get a Quote
                </a>
            </section>
        </div>
    );
}
