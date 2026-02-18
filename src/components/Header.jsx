"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    const headerRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        const header = headerRef.current;

        ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onUpdate: (self) => {
                if (self.direction === -1) {
                    // Scrolling up
                    gsap.to(header, { y: 0, duration: 0.3, ease: "power2.out" });
                } else if (self.direction === 1 && self.scrollY > 100) {
                    // Scrolling down
                    gsap.to(header, { y: "-100%", duration: 0.3, ease: "power2.in" });
                }
            }
        });

        // Change style on scroll
        ScrollTrigger.create({
            start: "top+=100",
            end: 99999,
            toggleClass: { targets: header, className: "bg-cream/80 backdrop-blur-md py-4 shadow-sm" },
            onLeaveBack: () => gsap.to(header, { clearProps: "all" })
        });

    }, []);

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-300"
        >
            <Link href="/" className="font-display text-2xl md:text-3xl font-bold tracking-tight text-burgundy hover:opacity-80 transition-opacity">
                LIBRA CREATIONS
            </Link>

            <nav className="hidden md:flex gap-8 items-center">
                {["Services", "About", "Portfolio", "Contact"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-off-black font-sans font-medium text-sm tracking-wide hover:text-burgundy transition-colors hover-trigger"
                    >
                        {item.toUpperCase()}
                    </Link>
                ))}
                <Link
                    href="#contact"
                    className="bg-burgundy text-cream px-6 py-2 rounded-full font-sans font-medium text-sm hover:bg-off-black transition-colors hover-trigger"
                >
                    GET STARTED
                </Link>
            </nav>

            {/* Mobile Menu Button (Simple implementation) */}
            <button className="md:hidden text-off-black">
                <span className="sr-only">Menu</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </header>
    );
}
