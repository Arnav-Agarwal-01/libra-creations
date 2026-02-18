"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        id: 1,
        client: "Leading Tech Firm",
        impact: "40% Increase in Employee Satisfaction",
        quote: "The result? A 40% increase in scores and enhanced team cohesion across our 500+ workforce.",
        service: "Corporate Uniforms"
    },
    {
        id: 2,
        client: "Major Retail Client",
        impact: "2,000+ Recipients Reached",
        quote: "The campaign generated exceptional feedback, strengthening client relationships and brand loyalty.",
        service: "Diwali Gifting Campaign"
    },
    {
        id: 3,
        client: "Multinational Corporation",
        impact: "Flawless Execution for 1,500 Attendees",
        quote: "The seamless execution contributed to the event's overwhelming success.",
        service: "Product Launch Event"
    }
];

export default function Testimonials() {
    const sectionRef = useRef(null);
    const [activeindex, setActiveIndex] = useState(0);

    useEffect(() => {
        // Auto-advance carousel every 5 seconds
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={sectionRef} className="py-32 bg-cream text-off-black relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-burgundy/5 skew-x-12 transform origin-top-right" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <h2 className="font-display text-4xl md:text-6xl mb-16 text-center">Success Stories</h2>

                <div className="max-w-4xl mx-auto">
                    <div className="relative min-h-[400px]">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col items-center text-center ${index === activeindex ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                            >
                                <div className="font-sans text-sm tracking-widest uppercase text-burgundy mb-6">
                                    {testimonial.service}
                                </div>

                                <blockquote className="font-display text-3xl md:text-5xl leading-tight mb-8">
                                    "{testimonial.quote}"
                                </blockquote>

                                <div className="space-y-2">
                                    <div className="font-bold text-lg">{testimonial.client}</div>
                                    <div className="text-off-black/60 italic">{testimonial.impact}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeindex ? "bg-burgundy w-8" : "bg-off-black/20 hover:bg-off-black/40"}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
