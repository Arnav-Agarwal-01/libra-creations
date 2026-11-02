"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Brand from "@/components/Brand";

const navItems = [
  { name: "Catalogue", path: "/services" },
  { name: "Our clients", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;

    const menuButton = buttonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector("a")?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;
      const panelControls = Array.from(panelRef.current?.querySelectorAll("a, button") || []);
      const focusable = [menuButton, ...panelControls].filter(Boolean);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
    };
  }, [menuOpen]);

  const isActive = (path) => pathname === path || (path === "/services" && pathname.startsWith("/services/"));

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/95 backdrop-blur-lg">
      <div className="shell flex h-[4.75rem] items-center justify-between gap-5">
        <Brand onClick={() => setMenuOpen(false)} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              aria-current={isActive(item.path) ? "page" : undefined}
              className={`rounded-lg px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                isActive(item.path) ? "bg-mist text-ink" : "text-muted hover:bg-mist/70 hover:text-ink"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="button button-primary">
            Start an enquiry
          </Link>
        </div>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {menuOpen ? (
              <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-4.75rem)] overflow-y-auto border-t border-line bg-paper lg:hidden"
        >
          <nav className="shell flex min-h-full flex-col py-8" aria-label="Mobile navigation">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(item.path) ? "page" : undefined}
                  className={`border-b border-line py-5 font-display text-3xl font-medium tracking-[-0.035em] ${
                    isActive(item.path) ? "text-ink underline decoration-brass decoration-2 underline-offset-8" : "text-ink"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto pt-8">
              <p className="mb-4 text-sm leading-relaxed text-muted">
                Uniforms, gifts and events for organizations across India.
              </p>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="button button-primary w-full">
                Start an enquiry
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
