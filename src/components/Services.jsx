"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const services = [
    {
        id: "01",
        title: "Corporate Uniforms",
        description: "Custom-branded attire designed for comfort, style, and brand consistency.",
        features: ["Professional Design", "Quality Fabrics", "Brand Alignment"]
    },
    {
        id: "02",
        title: "Corporate Gifting",
        description: "Thoughtfully curated gifting solutions that leave lasting impressions.",
        features: ["Custom Packages", "Premium Products", "Memorable Unboxing"]
    },
    {
        id: "03",
        title: "Event Management",
        description: "Seamless planning and execution to elevate your brand presence.",
        features: ["Complete Coordination", "Branded Merchandise", "Flawless Execution"]
    }
];

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
                                {service.description}
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
                                <button className="px-8 py-3 border border-cream/30 rounded-full hover:bg-cream hover:text-off-black transition-colors hover-trigger">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Placeholder for Service Image */}
                        <div className="w-full md:w-1/2 aspect-video bg-off-black/50 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-burgundy/20 group-hover:bg-transparent transition-colors duration-500" />
                            {/* Replace with Next/Image and real assets */}
                            <div className="w-full h-full bg-gradient-to-br from-off-black to-gray-800" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
