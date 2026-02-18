"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const clients = [
    "Computershare", "Oasis Fertility", "Inovalon", "Reliance", "Deloitte",
    "Amazon", "Inspire Retail Brands", "Northern Tool", "Ansr",
    "Computershare", "Oasis Fertility", "Inovalon", "Reliance", "Deloitte",
    "Amazon", "Inspire Retail Brands", "Northern Tool", "Ansr"
];

export default function Marquee() {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;

        gsap.to(marquee, {
            xPercent: -50,
            ease: "none",
            duration: 20,
            repeat: -1
        });
    }, []);

    return (
        <section className="py-24 bg-cream overflow-hidden border-y border-off-black/5">
            <div className="mb-12 text-center">
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-off-black/40">Trusted by Industry Leaders</p>
            </div>

            <div className="relative w-full overflow-hidden whitespace-nowrap">
                <div ref={marqueeRef} className="inline-block">
                    {clients.map((client, index) => (
                        <span key={index} className="inline-block mx-12 md:mx-24 font-display text-4xl md:text-6xl text-off-black/20 hover:text-burgundy transition-colors duration-300 cursor-default">
                            {client}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
