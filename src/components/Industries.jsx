"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { industries } from "@/lib/siteData";
import Link from "next/link";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Industries() {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                gridRef.current.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.05,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="industries" ref={sectionRef} className="py-32 bg-cream text-off-black px-6 md:px-12">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <p className="font-sans text-xs uppercase tracking-[0.3em] text-off-black/40 mb-4">
                            Different Industries. One Consistent Standard.
                        </p>
                        <h2 className="font-display text-4xl md:text-6xl text-burgundy">
                            Industries We Serve
                        </h2>
                    </div>
                    <p className="font-sans text-off-black/60 max-w-sm">
                        Uniforms, gifting and event solutions tailored to different operating environments — from technology teams to government organizations.
                    </p>
                </div>

                <div className="w-full h-[1px] bg-off-black/10 mb-16" />

                <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0">
                    {industries.map((industry) => (
                        <div key={industry.id} className="group border-t border-off-black/10 py-8 flex gap-6 items-start hover-trigger">
                            <span className="font-display text-sm text-off-black/30 group-hover:text-burgundy transition-colors">
                                {industry.id}
                            </span>
                            <div>
                                <h3 className="font-display text-xl md:text-2xl text-off-black group-hover:text-burgundy transition-colors mb-2">
                                    {industry.name}
                                </h3>
                                <p className="font-sans text-sm text-off-black/60 leading-relaxed">
                                    {industry.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/contact" className="inline-block text-off-black border-b border-off-black/30 pb-1 hover:border-burgundy hover:text-burgundy transition-all text-sm uppercase tracking-wider">
                        Discuss Your Industry Requirement
                    </Link>
                </div>
            </div>
        </section>
    );
}
