"use client";
import { useEffect, useState } from "react";
import { journey } from "@/lib/siteData";

export default function Journey() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        // Auto-advance carousel every 6 seconds
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % journey.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-32 bg-cream text-off-black relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-burgundy/5 skew-x-12 transform origin-top-right" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-off-black/40 text-center mb-4">
                    2005 → 2020 → Today
                </p>
                <h2 className="font-display text-4xl md:text-6xl mb-16 text-center">Our Journey</h2>

                <div className="max-w-4xl mx-auto">
                    <div className="relative min-h-[400px]">
                        {journey.map((chapter, index) => (
                            <div
                                key={chapter.id}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col items-center text-center ${index === activeIndex ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                            >
                                <div className="font-display text-6xl md:text-8xl text-burgundy mb-4 leading-none">
                                    {chapter.year}
                                </div>

                                <div className="font-sans text-sm tracking-widest uppercase text-burgundy mb-6">
                                    {chapter.title}
                                </div>

                                <blockquote className="font-display text-2xl md:text-4xl leading-tight mb-8 max-w-3xl">
                                    &quot;{chapter.quote}&quot;
                                </blockquote>

                                <div className="space-y-2">
                                    <div className="font-bold text-lg">{chapter.stat}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                        {journey.map((chapter, index) => (
                            <button
                                key={chapter.id}
                                onClick={() => setActiveIndex(index)}
                                className={`h-3 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-burgundy w-8" : "bg-off-black/20 hover:bg-off-black/40 w-3"}`}
                                aria-label={`Go to ${chapter.year}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
