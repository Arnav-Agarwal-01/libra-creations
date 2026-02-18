"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const text = textRef.current;

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
                        Since 2004
                    </p>
                </div>

                <div className="md:w-2/3">
                    <div ref={textRef} className="font-display text-3xl md:text-5xl leading-tight space-y-12">
                        <p>
                            We don't just supply products; we craft identities.
                        </p>
                        <p className="text-off-black/80">
                            For over 20 years, we've been the silent partner behind the sharpest corporate looks, the most thoughtful gifts, and the most memorable events in India.
                        </p>
                        <p className="text-off-black/60">
                            From Hyderabad to the nation, our obsession with detail creates the perfect balance between corporate professionalism and creative flair.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-off-black/10 pt-12">
                        {[
                            { label: "Years Exp", value: "20+" },
                            { label: "Clients", value: "500+" },
                            { label: "Cities", value: "Pan-India" },
                            { label: "Delivery", value: "100%" }
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
