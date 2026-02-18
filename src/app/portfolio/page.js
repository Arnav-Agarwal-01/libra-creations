// FILE: src/app/portfolio/page.js
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        client: "TechGiant India",
        category: "Corporate Uniforms",
        title: "Redefining Workplace Identity",
        description: "A complete overhaul of the employee attire for one of India's leading tech firms, focusing on sustainable fabrics and modern cuts.",
        stat: "40% Increase in Employee Satisfaction",
        image: "https://picsum.photos/800/600?random=1"
    },
    {
        id: 2,
        client: "RetailLink Ltd",
        category: "Corporate Gifting",
        title: "The Golden Festival Suite",
        description: "A premium Diwali gifting campaign designed to strengthen B2B relationships with a touch of luxury and heritage.",
        stat: "2,000+ Recipients Reached",
        image: "https://picsum.photos/800/600?random=2"
    },
    {
        id: 3,
        client: "GlobalServe Inc",
        category: "Event Management",
        title: "Future Now Summit 2024",
        description: "End-to-end management of a 3-day international conference, from stage design to delegate kits.",
        stat: "1,500 Attendees Managed",
        image: "https://picsum.photos/800/600?random=3"
    }
];

export default function PortfolioPage() {
    return (
        <div className="bg-cream min-h-screen">

            {/* HERO SECTION */}
            <section className="pt-48 pb-24 px-6 md:px-12">
                <div className="container mx-auto">
                    <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-burgundy mb-6">
                        OUR WORK
                    </h1>
                    <p className="font-sans text-xl text-off-black/70 max-w-2xl mb-12">
                        A showcase of our finest collaborations. Where strategy meets style, and execution meets excellence.
                    </p>
                    <div className="w-full h-[1px] bg-off-black/10" />
                </div>
            </section>

            {/* PROJECTS GRID */}
            <section className="pb-32 px-6 md:px-12">
                <div className="container mx-auto space-y-32">
                    {projects.map((project, index) => (
                        <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center group`}>

                            {/* Image Side */}
                            <div className="w-full md:w-1/2 aspect-[4/3] relative overflow-hidden bg-off-black/5">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-burgundy/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="w-12 h-[1px] bg-sage" />
                                    <span className="font-sans text-sm tracking-widest uppercase text-sage">{project.category}</span>
                                </div>

                                <h2 className="font-display text-4xl md:text-5xl text-off-black group-hover:text-burgundy transition-colors duration-300">
                                    {project.title}
                                </h2>

                                <p className="font-sans text-lg text-off-black/70 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="pt-6">
                                    <div className="inline-block px-6 py-3 bg-off-black/5 rounded-full">
                                        <span className="font-display text-burgundy text-xl">{project.stat}</span>
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <button className="text-off-black border-b border-off-black/30 pb-1 hover:border-burgundy hover:text-burgundy transition-all text-sm uppercase tracking-wider">
                                        View Case Study
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-burgundy text-cream text-center px-6">
                <div className="container mx-auto">
                    <h2 className="font-display text-4xl md:text-6xl mb-8">Ready to Write Your Story?</h2>
                    <a href="/contact" className="inline-block px-12 py-4 bg-cream text-burgundy font-medium rounded-full hover:bg-off-black hover:text-cream transition-all duration-300">
                        Start Project
                    </a>
                </div>
            </section>
        </div>
    );
}
