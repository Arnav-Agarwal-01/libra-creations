"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Header() {
    const headerRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useIsomorphicLayoutEffect(() => {
        const header = headerRef.current;
        if (!header) return;

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: "top top",
                end: 99999,
                onUpdate: (self) => {
                    if (self.direction === -1) {
                        gsap.to(header, { y: 0, duration: 0.3, ease: "power2.out" });
                    } else if (self.direction === 1 && window.scrollY > 100) {
                        gsap.to(header, { y: "-100%", duration: 0.3, ease: "power2.in" });
                    }
                }
            });

            ScrollTrigger.create({
                start: "top+=100",
                end: 99999,
                onEnter: () => setIsScrolled(true),
                onLeaveBack: () => setIsScrolled(false),
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 transition-all duration-300 ${isScrolled ? "bg-cream/80 backdrop-blur-md py-4 shadow-sm" : "py-6"
                }`}
        >
            <Link href="/" className="font-display text-2xl md:text-3xl font-bold tracking-tight text-burgundy hover:opacity-80 transition-opacity">
                LIBRA CREATIONS
            </Link>

            <nav className="hidden md:flex gap-8 items-center">
                {[
                    { name: "Services", path: "/services" },
                    { name: "About", path: "/about" },
                    { name: "Portfolio", path: "/portfolio" },
                    { name: "Contact", path: "/contact" }
                ].map((item) => (
                    <Link
                        key={item.name}
                        href={item.path}
                        className="text-off-black font-sans font-medium text-sm tracking-wide hover:text-burgundy transition-colors hover-trigger"
                    >
                        {item.name.toUpperCase()}
                    </Link>
                ))}
                <Link
                    href="/contact"
                    className="bg-burgundy text-cream px-6 py-2 rounded-full font-sans font-medium text-sm hover:bg-off-black transition-colors hover-trigger"
                >
                    GET STARTED
                </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-off-black">
                <span className="sr-only">Menu</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </header>
    );
}
