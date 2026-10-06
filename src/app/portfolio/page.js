// FILE: src/app/portfolio/page.js
"use client";
import Image from "next/image";
import Link from "next/link";
import { clients, milestone } from "@/lib/siteData";

export default function PortfolioPage() {
    return (
        <div className="bg-cream min-h-screen">

            {/* HERO SECTION */}
            <section className="pt-48 pb-24 px-6 md:px-12">
                <div className="container mx-auto">
                    <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-burgundy mb-6">
                        OUR CLIENTS
                    </h1>
                    <p className="font-sans text-xl text-off-black/70 max-w-2xl mb-12">
                        Relationships built on trust, quality and reliable delivery. We are proud to have served several respected organizations across diverse industries.
                    </p>
                    <div className="w-full h-[1px] bg-off-black/10" />
                </div>
            </section>

            {/* CLIENT LOGO GRID */}
            <section className="pb-32 px-6 md:px-12">
                <div className="container mx-auto">
                    <p className="font-sans text-xs uppercase tracking-[0.3em] text-off-black/40 mb-4">
                        Client Showcase
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl text-burgundy mb-16">
                        Organizations We Have Served
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {clients.map((client) => (
                            <div
                                key={client.name}
                                className="group relative aspect-[3/2] bg-soft-white border border-off-black/10 rounded-2xl flex items-center justify-center p-8 hover:border-burgundy/40 transition-colors overflow-hidden"
                            >
                                {client.logo ? (
                                    <>
                                        <Image
                                            src={client.logo}
                                            alt={client.name}
                                            fill
                                            className="object-contain p-8 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                        />
                                        <span className="sr-only">{client.name}</span>
                                    </>
                                ) : (
                                    <span className="font-display text-xl text-off-black/60 group-hover:text-burgundy transition-colors">
                                        {client.name}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    <p className="font-sans text-off-black/50 text-center mt-12">
                        …and many more leading organizations across India.
                    </p>
                </div>
            </section>

            {/* MILESTONE FEATURE */}
            <section className="pb-32 px-6 md:px-12">
                <div className="container mx-auto">
                    <div className="bg-off-black text-cream rounded-[2.5rem] overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
                            <div className="p-12 md:p-20">
                                <p className="font-sans text-xs uppercase tracking-[0.3em] text-cream/40 mb-4">
                                    A Proud Milestone
                                </p>
                                <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8">
                                    {milestone.title}
                                </h2>
                                <p className="font-sans text-lg text-cream/70 leading-relaxed mb-10">
                                    {milestone.body}
                                </p>
                                <div className="inline-flex items-center gap-6 border border-cream/15 rounded-2xl px-8 py-5">
                                    <span className="font-display text-4xl text-burgundy">{milestone.stat}</span>
                                    <span className="font-sans text-sm text-cream/60 max-w-[16rem] leading-snug">
                                        {milestone.statLabel}
                                    </span>
                                </div>
                            </div>

                            <div className="relative h-64 lg:h-full min-h-[24rem]">
                                <Image
                                    src="/images/clients/client-tata-teleservices.png"
                                    alt="Tata Teleservices"
                                    fill
                                    className="object-contain p-16 opacity-70"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-off-black via-off-black/40 to-transparent lg:from-off-black lg:to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-burgundy text-cream text-center px-6">
                <div className="container mx-auto">
                    <h2 className="font-display text-4xl md:text-6xl mb-8">Looking for a Reliable Corporate Partner?</h2>
                    <Link href="/contact" className="inline-block px-12 py-4 bg-cream text-burgundy font-medium rounded-full hover:bg-off-black hover:text-cream transition-all duration-300">
                        Let&apos;s Discuss Your Requirement
                    </Link>
                </div>
            </section>
        </div>
    );
}
