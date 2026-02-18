"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        // Initial hide
        gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 });

        const onMouseMove = (e) => {
            gsap.to(cursor, {
                duration: 0.2,
                x: e.clientX,
                y: e.clientY,
                opacity: 1,
                ease: "power2.out"
            });
        };

        const onMouseEnter = () => {
            gsap.to(cursor, { scale: 2.5, duration: 0.3, ease: "back.out(1.7)" });
            cursor.classList.add("mix-blend-difference");
        };

        const onMouseLeave = () => {
            gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
            cursor.classList.remove("mix-blend-difference");
        };

        window.addEventListener("mousemove", onMouseMove);

        // Add hover effect to interactive elements
        const links = document.querySelectorAll("a, button, .hover-trigger");
        links.forEach((link) => {
            link.addEventListener("mouseenter", onMouseEnter);
            link.addEventListener("mouseleave", onMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            links.forEach((link) => {
                link.removeEventListener("mouseenter", onMouseEnter);
                link.removeEventListener("mouseleave", onMouseLeave);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-4 h-4 bg-burgundy rounded-full pointer-events-none z-[9999] mix-blend-multiply transition-transform duration-100 ease-out hidden md:block" // Hidden on mobile
        />
    );
}
