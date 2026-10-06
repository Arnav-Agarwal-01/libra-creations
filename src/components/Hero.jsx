"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Text Reveal Animation
            const lines = textRef.current.querySelectorAll(".text-reveal-line");
            tl.to(lines, {
                y: 0,
                duration: 1.5,
                stagger: 0.1,
                ease: "power4.out",
                delay: 0.2
            });

            // Image Parallax
            gsap.to(imageRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-cream">
            <div className="absolute inset-0 z-0">
                <div ref={imageRef} className="relative w-full h-[120%] -top-[10%]">
                    <div className="absolute inset-0 bg-burgundy/5 z-10" />
                    <div className="w-full h-full bg-gradient-to-b from-cream/0 via-cream/0 to-cream absolute z-20" />
                    <div className="w-full h-full bg-[url('/images/hero-reference.webp')] bg-cover bg-center grayscale contrast-125 opacity-20 hover:grayscale-0 transition-all duration-1000" />
                </div>
            </div>

            <div className="relative z-30 text-center px-6">
                <div className="text-reveal-mask mb-2">
                    <h1 ref={textRef} className="font-display text-6xl md:text-8xl lg:text-9xl text-burgundy tracking-tight leading-[0.9]">
                        <div className="text-reveal-line">PERFECT</div>
                        <div className="text-reveal-line">BALANCE</div>
                    </h1>
                </div>

                <div className="mt-8 overflow-hidden">
                    <p className="font-sans text-lg md:text-xl text-off-black/80 max-w-xl mx-auto tracking-wide animate-fade-in-up opacity-0" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
                        Corporate uniforms, gifting and events — one end-to-end partner, since 2005.
                    </p>
                </div>

                <div className="mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>
                    <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 bg-off-black text-cream rounded-full overflow-hidden hover-trigger">
                        <span className="relative z-10 font-medium">Start Your Journey</span>
                        <div className="absolute inset-0 bg-burgundy transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                    </a>
                </div>
            </div>
        </section>
    );
}
