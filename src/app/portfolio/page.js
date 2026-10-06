// FILE: src/app/portfolio/page.js
"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { clients, milestone } from "@/lib/siteData";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function PortfolioPage() {
    const gridRef = useRef(null);
    const sectionRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                gridRef.current?.children || [],
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.045,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 85%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="bg-cream min-h-screen text-off-black">

            {/* HERO SECTION */}
            <section className="pt-48 pb-24 px-6 md:px-12">
                <div className="container mx-auto">
                    <p className="font-sans text-xs uppercase tracking-[0.3em] text-off-black/40 mb-6">
                        Our Valued Clients
                    </p>
                    <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-burgundy mb-10 leading-[0.95]">
                        TRUSTED BY<br />RESPECTED<br />ORGANIZATIONS
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                        <p className="font-sans text-xl text-off-black/70 max-w-xl leading-relaxed">
                            Relationships built on trust, quality and reliable delivery. We are proud to have served organizations across technology, telecom, healthcare, retail and other sectors.
                        </p>
                        <div className="flex gap-12 md:gap-16">
                            <div>
                                <div className="font-display text-5xl text-burgundy leading-none">{clients.length}+</div>
                                <div className="font-sans text-xs uppercase tracking-widest text-off-black/50 mt-3">Organizations</div>
                            </div>
                            <div>
                                <div className="font-display text-5xl text-burgundy leading-none">2005</div>
                                <div className="font-sans text-xs uppercase tracking-widest text-off-black/50 mt-3">Serving Since</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-off-black/10 mt-16" />
                </div>
            </section>

            {/* CLIENT LOGO WALL */}
            <section className="pb-32 px-6 md:px-12">
                <div className="container mx-auto">
                    <div className="bg-off-black rounded-[2.5rem] px-6 md:px-16 py-16 md:py-24 text-cream overflow-hidden">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                            <h2 className="font-display text-3xl md:text-5xl leading-tight">
                                Client<br />Showcase
                            </h2>
                            <p className="font-sans text-sm text-cream/50 uppercase tracking-widest">
                                Organizations we have served
                            </p>
                        </div>

                        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {clients.map((client) => (
                                <div
                                    key={client.name}
                                    className="group relative aspect-[3/2] bg-cream/[0.04] border border-cream/10 rounded-2xl flex flex-col items-center justify-center gap-4 p-6 md:p-8 hover:bg-cream hover:border-cream hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] transition-all duration-500 overflow-hidden"
                                >
                                    <div className="relative w-full max-w-[80%] flex-1 min-h-[3rem] max-h-16 flex items-center justify-center">
                                        {client.logo ? (
                                            <>
                                                <Image
                                                    src={client.logo}
                                                    alt={client.name}
                                                    fill
                                                    unoptimized
                                                    sizes="(min-width: 1024px) 220px, 40vw"
                                                    className="object-contain [filter:brightness(0)_invert(1)] opacity-70 group-hover:[filter:none] group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                                />
                                                <span className="sr-only">{client.name}</span>
                                            </>
                                        ) : (
                                            <span className="font-display text-lg md:text-xl text-cream/70 group-hover:text-off-black transition-colors text-center leading-tight">
                                                {client.name}
                                            </span>
                                        )}
                                    </div>
                                    <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-cream/40 group-hover:text-off-black/60 transition-colors text-center">
                                        {client.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <p className="font-sans text-cream/50 text-center mt-14">
                            …and many more leading organizations across India.
                        </p>
                    </div>
                </div>
            </section>

            {/* MILESTONE FEATURE */}
            <section className="pb-32 px-6 md:px-12">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-5 order-2 lg:order-1 relative bg-off-black rounded-[2rem] overflow-hidden">
                            <div className="absolute -top-10 -left-6 font-display text-[10rem] leading-none text-cream/10 select-none pointer-events-none">
                                &apos;05
                            </div>
                            <div className="relative aspect-[16/10] flex items-center justify-center p-10 md:p-16">
                                <div className="relative w-full max-w-md h-20 md:h-24">
                                    <Image
                                        src="/images/clients/logos/tata-teleservices.svg"
                                        unoptimized
                                        alt="Tata Teleservices"
                                        fill
                                        className="object-contain object-center"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <p className="font-sans text-xs uppercase tracking-[0.3em] text-off-black/40 mb-4">
                                A Proud Milestone
                            </p>
                            <h2 className="font-display text-4xl md:text-5xl leading-tight text-off-black mb-8">
                                {milestone.title}
                            </h2>
                            <p className="font-sans text-lg text-off-black/70 leading-relaxed mb-10 max-w-xl">
                                {milestone.body}
                            </p>
                            <div className="flex flex-wrap items-center gap-6">
                                <span className="font-display text-4xl text-burgundy">{milestone.stat}</span>
                                <span className="w-[1px] h-10 bg-off-black/15" />
                                <span className="font-sans text-sm text-off-black/60 max-w-[16rem] leading-snug">
                                    {milestone.statLabel}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-burgundy text-cream text-center px-6">
                <div className="container mx-auto">
                    <h2 className="font-display text-4xl md:text-6xl mb-8">Looking for a Reliable Corporate Partner?</h2>
                    <p className="font-sans text-cream/70 mb-10 max-w-xl mx-auto">
                        Let&apos;s discuss your next uniform, gifting or event requirement.
                    </p>
                    <Link href="/contact" className="inline-block px-12 py-4 bg-cream text-burgundy font-medium rounded-full hover:bg-off-black hover:text-cream transition-all duration-300">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
