// FILE: src/app/about/page.js
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { whyUs, vision, mission, site } from "@/lib/siteData";

gsap.registerPlugin(ScrollTrigger);

const journeyTimeline = [
    {
        year: "2005",
        title: "Began Operations",
        desc: "Started as Libra Creation with a focus on dependable corporate solutions — anchored by a nationwide uniform order for Tata Teleservices, our very first major assignment.",
    },
    {
        year: "2020",
        title: "Re-incorporated",
        desc: "Re-incorporated as Libra Creations with renewed capability and a wider vision — carrying forward over two decades of experience, creativity and customer trust.",
    },
    {
        year: "Today",
        title: "Serving Organizations Across India",
        desc: "Supporting multinational corporations, healthcare organizations, technology companies, manufacturing industries, educational institutions, retail chains, startups and government organizations.",
    },
];

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
                                Experience, Creativity<br />&amp; Customer Trust
                            </h2>
                            <p className="font-sans text-sm text-off-black/60 uppercase tracking-widest">
                                Since {site.established}
                            </p>
                        </div>
                        <div className="md:w-2/3" ref={textRef}>
                            <p className="font-display text-3xl md:text-4xl leading-tight text-off-black mb-12">
                                Originally established in 2005 under the banner of Libra Creation, the company was re-incorporated in 2020 as Libra Creations — carrying forward over two decades of experience, creativity and customer trust.
                            </p>
                            <div className="space-y-8 font-sans text-lg text-off-black/70 max-w-2xl">
                                <p>
                                    With a passion for excellence and an unwavering commitment to quality, Libra Creations has become a preferred partner for organizations seeking reliable, creative and end-to-end corporate branding solutions.
                                </p>
                                <p>
                                    From our home in Hyderabad, we support organizations across India with dependable sourcing, customized branding solutions, professional project management and a customer-first approach.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMAGE BREAK */}
            <section className="w-full h-[60vh] md:h-[80vh] bg-off-black relative overflow-hidden">
                <Image
                    src="/images/partnership-premium.webp"
                    alt="Libra Creations partnership, experience and trust"
                    fill
                    className="object-cover opacity-80 hover:scale-105 transition-transform duration-[2s]"
                />
            </section>

            {/* JOURNEY TIMELINE */}
            <section className="py-32 px-6 md:px-12 bg-cream text-off-black">
                <div className="container mx-auto">
                    <p className="font-sans text-xs uppercase tracking-[0.3em] text-off-black/40 mb-4">
                        Our Journey
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl text-burgundy mb-16">
                        2005 → 2020 → Today
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {journeyTimeline.map((chapter, i) => (
                            <div key={chapter.year} className="border-t-2 border-burgundy/30 pt-8">
                                <div className="font-display text-5xl text-burgundy mb-4">{chapter.year}</div>
                                <h3 className="font-display text-2xl text-off-black mb-4">{chapter.title}</h3>
                                <p className="font-sans text-off-black/70 leading-relaxed">{chapter.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VISION & MISSION */}
            <section className="py-32 px-6 md:px-12 bg-off-black text-cream">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="border-t border-cream/20 pt-8">
                        <p className="font-sans text-xs uppercase tracking-[0.3em] text-cream/40 mb-4">
                            Our Vision
                        </p>
                        <h3 className="font-display text-3xl mb-6">
                            India&apos;s Trusted Corporate Solutions Partner
                        </h3>
                        <p className="font-sans text-lg text-cream/70 leading-relaxed">
                            {vision}
                        </p>
                    </div>
                    <div className="border-t border-cream/20 pt-8">
                        <p className="font-sans text-xs uppercase tracking-[0.3em] text-cream/40 mb-4">
                            Our Mission
                        </p>
                        <h3 className="font-display text-3xl mb-6">
                            Strengthen Brand Identity Through Better Solutions
                        </h3>
                        <p className="font-sans text-lg text-cream/70 leading-relaxed">
                            {mission}
                        </p>
                    </div>
                </div>
            </section>

            {/* WHAT MAKES US DIFFERENT */}
            <section className="py-32 px-6 md:px-12 bg-cream text-off-black">
                <div className="container mx-auto">
                    <p className="font-sans text-xs uppercase tracking-[0.3em] text-off-black/40 mb-4">
                        What Makes Us Different
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl text-burgundy mb-16">
                        Built Around Quality,<br />Reliability &amp; Trust
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6 max-w-4xl">
                        {whyUs.map((point, i) => (
                            <div key={point} className="flex items-start gap-4 border-b border-off-black/10 pb-6">
                                <span className="font-display text-sm text-burgundy/60 mt-1">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <p className="font-sans text-lg text-off-black/80">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR PROMISE / CTA */}
            <section className="py-24 bg-burgundy text-cream text-center px-6">
                <div className="container mx-auto">
                    <p className="font-sans text-xs uppercase tracking-[0.3em] text-cream/60 mb-6">
                        Our Promise
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl mb-8">
                        Deliver Excellence. Build Trust. Create Lasting Impressions.
                    </h2>
                    <Link href="/contact" className="inline-block px-12 py-4 bg-cream text-burgundy font-medium rounded-full hover:bg-off-black hover:text-cream transition-all duration-300">
                        Start a Conversation
                    </Link>
                </div>
            </section>
        </div>
    );
}
