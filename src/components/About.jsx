"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function About() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const text = textRef.current;
            if (!text) return;

            // Split text into words/chars for more granular control if needed, 
            // but for this effect, we'll just reveal lines or opacity change on scroll

            gsap.fromTo(text,
                { opacity: 0.2 },
                {
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: true
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-32 px-6 md:px-12 bg-cream text-off-black">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
                <div className="md:w-1/3 sticky top-32">
                    <h2 className="font-display text-4xl md:text-5xl text-burgundy mb-6">
                        Two Decades<br />of Excellence
                    </h2>
                    <div className="w-16 h-1 bg-sage mb-6" />
                    <p className="font-sans text-sm text-off-black/60 uppercase tracking-widest">
                        Since 2005
                    </p>
                </div>

                <div className="md:w-2/3">
                    <div ref={textRef} className="font-display text-3xl md:text-5xl leading-tight space-y-12">
                        <p>
                            We don&apos;t just supply products; we craft identities.
                        </p>
                        <p className="text-off-black/80">
                            Established in 2005 and re-incorporated in 2020, we carry forward over two decades of experience, creativity and customer trust — from Hyderabad to organizations across India.
                        </p>
                        <p className="text-off-black/60">
                            Creativity that builds brands. Quality that builds trust. That&apos;s the perfect balance we bring to every uniform, every gift and every event.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-off-black/10 pt-12">
                        {[
                            { label: "Years Exp", value: "20+" },
                            { label: "Core Services", value: "03" },
                            { label: "Coverage", value: "Pan-India" },
                            { label: "Since", value: "2005" }
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="font-display text-4xl text-burgundy mb-2">{stat.value}</div>
                                <div className="font-sans text-sm text-off-black/60 tracking-wider uppercase">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
