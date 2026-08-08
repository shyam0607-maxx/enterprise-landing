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
          className="shrink-0 font-display text-lg font-semibold tracking-tight whitespace-nowrap"
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
          className="hidden shrink-0 sm:inline-flex"
        >
          Enquire Now
        </Button>
      </div>
    </header>
  );
}
