// FILE: src/app/services/corporate-gifting/page.js
"use client";
import Image from "next/image";

export default function GiftingPage() {
    return (
        <div className="bg-cream min-h-screen text-off-black">

            {/* HERO */}
            <section className="pt-48 pb-24 px-6 md:px-12 bg-cream">
                <div className="container mx-auto">
                    <p className="font-sans text-sm tracking-widest uppercase text-off-black/60 mb-4">
                        Service 02
                    </p>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-burgundy mb-6">
                        CORPORATE<br />GIFTING
                    </h1>
                    <p className="font-sans text-xl text-off-black/70 max-w-2xl mb-12">
                        Thoughtfully curated gifting solutions that leave lasting impressions. From festivals to milestones, we box emotions.
                    </p>
                    <div className="w-full h-[1px] bg-off-black/10" />
                </div>
            </section>

            {/* FEATURED IMAGE */}
            <section className="w-full h-[60vh] relative">
                <Image
                    src="https://picsum.photos/1920/1080?random=11"
                    alt="Corporate Gifting"
                    fill
                    className="object-cover"
                />
            </section>

            {/* DETAILS */}
            <section className="py-24 px-6 md:px-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="font-display text-4xl mb-6">The Art of<br />Giving</h2>
                        <p className="font-sans text-lg text-off-black/70 leading-relaxed mb-6">
                            A gift is a tangible representation of your relationship with employees and clients. We move beyond generic catalogs to create curated hampers that tell a story.
                        </p>
                        <p className="font-sans text-lg text-off-black/70 leading-relaxed">
                            Our team handles everything: product sourcing, custom branding, premium packaging, and logistics.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            { title: "Premium Curation", desc: "Gourmet foods, tech gadgets, sustainable goods—only the best make the cut." },
                            { title: "Custom Packaging", desc: "Boxes, ribbons, and cards designed to match your brand aesthetics." },
                            { title: "End-to-End Logistics", desc: "Doorstep delivery across India, ensuring your gifts arrive on time." }
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
                <h2 className="font-display text-4xl mb-6">Plaaning a Gifting Drive?</h2>
                <a href="/contact" className="inline-block border-b border-cream/30 pb-1 hover:border-burgundy hover:text-burgundy transition-colors uppercase tracking-wider">
                    Download Catalog
                </a>
            </section>
        </div>
    );
}
