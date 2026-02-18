// FILE: src/app/about/page.js
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
    const textRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Text Reveal
            if (!textRef.current) return;
            gsap.fromTo(textRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 80%",
                    }
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-cream min-h-screen">

            {/* HERO SECTION */}
            <section className="pt-48 pb-24 px-6 md:px-12">
                <div className="container mx-auto">
                    <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-burgundy mb-12">
                        OUR STORY
                    </h1>
                    <div className="w-full h-[1px] bg-off-black/10 mb-12" />

                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="md:w-1/3">
                            <h2 className="font-display text-4xl text-off-black mb-6">
                                20 Years of<br />Excellence
                            </h2>
                            <p className="font-sans text-sm text-off-black/60 uppercase tracking-widest">
                                Established 2004
                            </p>
                        </div>
                        <div className="md:w-2/3" ref={textRef}>
                            <p className="font-display text-3xl md:text-4xl leading-tight text-off-black mb-12">
                                Libra Creations wasn&apos;t built in a day. It was crafted over two decades of obsession with detail, quality, and the perfect stitch.
                            </p>
                            <div className="space-y-8 font-sans text-lg text-off-black/70 max-w-2xl">
                                <p>
                                    We started with a simple belief: that corporate identity shouldn&apos;t be boring. It should be a statement. Whether it&apos;s the uniform your team wears with pride, the gift that sits on a client&apos;s desk for years, or the event that becomes industry legend.
                                </p>
                                <p>
                                    From our humble beginnings in Hyderabad to serving over 500+ clients across India, our mission has remained unchanged. We bridge the gap between corporate professionalism and creative flair.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMAGE BREAK */}
            <section className="w-full h-[60vh] md:h-[80vh] bg-off-black relative overflow-hidden">
                {/* SWAP: Large team photo or workshop/studio shot */}
                <Image
                    src="https://picsum.photos/1920/1080"
                    alt="Libra Creations Studio"
                    fill
                    className="object-cover opacity-80 hover:scale-105 transition-transform duration-[2s]"
                />
            </section>

            {/* VALUES SECTION */}
            <section className="py-32 px-6 md:px-12 bg-cream text-off-black">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Precision", desc: "Every stitch, every fold, every pixel matters. We don&apos;t do &apos;good enough&apos;." },
                            { title: "Creativity", desc: "Corporate doesn&apos;t mean boring. We bring fresh ideas to traditional spaces." },
                            { title: "Reliability", desc: "20 years. 100% delivery rate. When we say it&apos;s done, it&apos;s done." }
                        ].map((value, i) => (
                            <div key={i} className="border-t border-burgundy/20 pt-8">
                                <h3 className="font-display text-3xl text-burgundy mb-4">{value.title}</h3>
                                <p className="font-sans text-off-black/70">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STATS REUSE */}
            <section className="py-24 bg-off-black text-cream px-6 md:px-12">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Years Exp", value: "20+" },
                            { label: "Clients", value: "500+" },
                            { label: "Cities", value: "Pan-India" },
                            { label: "Delivery", value: "100%" }
                        ].map((stat) => (
                            <div key={stat.label} className="text-center md:text-left">
                                <div className="font-display text-5xl md:text-6xl text-burgundy mb-2">{stat.value}</div>
                                <div className="font-sans text-sm text-cream/60 tracking-wider uppercase">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
