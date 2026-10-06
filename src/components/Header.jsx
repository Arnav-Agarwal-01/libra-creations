"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const navItems = [
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" }
];

export default function Header() {
    const headerRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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

    // Lock body scroll when the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <header
                ref={headerRef}
                className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 transition-all duration-300 ${isScrolled || menuOpen ? "bg-cream/90 backdrop-blur-md py-4 shadow-sm" : "py-6"
                    }`}
            >
                <Link href="/" className="font-display text-2xl md:text-3xl font-bold tracking-tight text-burgundy hover:opacity-80 transition-opacity">
                    LIBRA CREATIONS
                </Link>

                <nav className="hidden md:flex gap-8 items-center">
                    {navItems.map((item) => (
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
                <button
                    className="md:hidden text-off-black relative z-[60]"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    <span className="sr-only">Menu</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[55] bg-cream flex flex-col justify-center px-8 md:hidden transition-all duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <nav className="flex flex-col gap-8">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            onClick={() => setMenuOpen(false)}
                            className={`font-display text-4xl text-off-black hover:text-burgundy transition-all duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                }`}
                            style={{ transitionDelay: `${100 + index * 80}ms` }}
                        >
                            {item.name.toUpperCase()}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className={`mt-8 inline-flex items-center justify-center px-8 py-4 bg-burgundy text-cream rounded-full font-sans font-medium transition-all duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                            }`}
                        style={{ transitionDelay: "500ms" }}
                    >
                        GET STARTED
                    </Link>
                </nav>
            </div>
        </>
    );
}
