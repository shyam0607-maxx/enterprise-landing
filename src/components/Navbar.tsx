"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const links = [
  { href: "#domain-expertise", label: "Domain Expertise" },
  { href: "#programs", label: "Programs" },
  { href: "#course-segmentation", label: "Segmentation" },
  { href: "#who-can-join", label: "Who Can Join" },
  { href: "#strategic-training", label: "Approach" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "bg-bg/90 backdrop-blur border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className="shrink-0 font-display text-base font-semibold tracking-tight whitespace-nowrap sm:text-lg"
        >
          Accredited <span className="text-accent">Enterprise</span>
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-sm transition-colors ${
                activeId === link.href
                  ? "text-accent font-semibold"
                  : "text-text-muted hover:text-text"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          href="#contact"
          variant="primary"
          className="hidden shrink-0 lg:inline-flex"
        >
          Enquire Now
        </Button>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex shrink-0 items-center justify-center rounded-full border border-border p-2 lg:hidden"
        >
          <span className="relative block h-4 w-4">
            <span
              className={`absolute left-0 top-0.5 block h-0.5 w-4 bg-text transition-transform ${
                menuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 block h-0.5 w-4 bg-text transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3.5 block h-0.5 w-4 bg-text transition-transform ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-bg lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  activeId === link.href
                    ? "text-accent font-semibold"
                    : "text-text-muted hover:bg-surface-2 hover:text-text"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#contact"
              variant="primary"
              className="mt-3"
              onClick={() => setMenuOpen(false)}
            >
              Enquire Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
