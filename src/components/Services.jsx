"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

import { services } from "@/lib/siteData";
import Link from "next/link";

export default function Services() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Horizontal Scroll
            const container = containerRef.current;
            const totalWidth = container.scrollWidth;
            const viewportWidth = window.innerWidth;

            if (viewportWidth > 768) { // Only on desktop
                gsap.to(container, {
                    x: () => -(totalWidth - viewportWidth),
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        pin: true,
                        scrub: 1,
                        end: () => "+=" + (totalWidth - viewportWidth),
                        invalidateOnRefresh: true,
                    }
                });
            }
        }, sectionRef);

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach(t => {
                if (t.trigger === sectionRef.current) t.kill();
            });
        };
    }, []);

    return (
        <section id="services" ref={sectionRef} className="py-24 bg-off-black text-cream overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 mb-16">
                <h2 className="font-display text-5xl md:text-7xl mb-4">Core Services</h2>
                <div className="w-full h-[1px] bg-cream/20" />
            </div>

            <div ref={containerRef} className="flex flex-col md:flex-row gap-12 md:gap-24 px-6 md:px-12 md:w-[300vw]">
                {services.map((service) => (
                    <div key={service.id} className="flex-shrink-0 w-full md:w-[80vw] lg:w-[60vw] flex flex-col md:flex-row gap-8 items-start border-l border-cream/20 pl-8">
                        <div className="font-display text-9xl opacity-10">{service.id}</div>

                        <div className="space-y-8 max-w-xl">
                            <h3 className="font-display text-4xl md:text-5xl text-burgundy">{service.title}</h3>
                            <p className="font-sans text-xl text-cream/80 leading-relaxed">
                                {service.short}
                            </p>

                            <ul className="space-y-4 mt-8">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-4 font-sans text-sm tracking-wide uppercase">
                                        <span className="w-2 h-2 bg-sage rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-8">
                                <Link href={`/services/${service.slug}`} className="inline-block px-8 py-3 border border-cream/30 rounded-full hover:bg-cream hover:text-off-black transition-colors hover-trigger">
                                    Learn More
                                </Link>
                            </div>
                        </div>

                        {/* Service Image */}
                        <div className="w-full md:w-1/2 aspect-video bg-off-black/50 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-burgundy/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
