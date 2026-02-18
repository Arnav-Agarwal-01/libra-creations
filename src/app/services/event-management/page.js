// FILE: src/app/services/event-management/page.js
"use client";
import Image from "next/image";

export default function EventsPage() {
    return (
        <div className="bg-cream min-h-screen text-off-black">

            {/* HERO */}
            <section className="pt-48 pb-24 px-6 md:px-12 bg-cream">
                <div className="container mx-auto">
                    <p className="font-sans text-sm tracking-widest uppercase text-off-black/60 mb-4">
                        Service 03
                    </p>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-burgundy mb-6">
                        EVENT<br />MANAGEMENT
                    </h1>
                    <p className="font-sans text-xl text-off-black/70 max-w-2xl mb-12">
                        Seamless planning and execution to elevate your brand presence. We turn gatherings into experiences.
                    </p>
                    <div className="w-full h-[1px] bg-off-black/10" />
                </div>
            </section>

            {/* FEATURED IMAGE */}
            <section className="w-full h-[60vh] relative">
                <Image
                    src="https://picsum.photos/1920/1080?random=12"
                    alt="Event Management"
                    fill
                    className="object-cover"
                />
            </section>

            {/* DETAILS */}
            <section className="py-24 px-6 md:px-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="font-display text-4xl mb-6">Execution<br />Excellence</h2>
                        <p className="font-sans text-lg text-off-black/70 leading-relaxed mb-6">
                            From product launches to annual general meetings, we handle the chaos so you can focus on your guests. Our approach is detailed, disciplined, and designed to impress.
                        </p>
                        <p className="font-sans text-lg text-off-black/70 leading-relaxed">
                            We coordinate vendors, manage technology, design stages, and ensure the flow of the event is flawless from start to finish.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            { title: "Stage & Set Design", desc: "Immersive environments that reflect your brand's stature." },
                            { title: "Guest Management", desc: "RSVPs, travel, and hospitality for VIPs and attendees." },
                            { title: "Technical Production", desc: "Sound, light, and projection systems that don't fail." }
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
                <h2 className="font-display text-4xl mb-6">Upcoming Event?</h2>
                <a href="/contact" className="inline-block border-b border-cream/30 pb-1 hover:border-burgundy hover:text-burgundy transition-colors uppercase tracking-wider">
                    Discuss Requirements
                </a>
            </section>
        </div>
    );
}
