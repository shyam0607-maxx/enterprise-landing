"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const links = [
  { href: "#domain-expertise", label: "Domain Expertise" },
  { href: "#programs", label: "Programs" },
  { href: "#who-can-join", label: "Who Can Join" },
  { href: "#strategic-training", label: "Approach" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Talk to Us" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

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
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Accredited <span className="text-accent">Enterprise</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                activeId === link.href
                  ? "text-accent font-semibold"
                  : "text-text-muted hover:text-text"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href="#contact" variant="primary" className="hidden sm:inline-flex">
          Enquire Now
        </Button>
      </div>
    </header>
  );
}
