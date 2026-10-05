"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#specialties", label: "Specialties" },
  { href: "#office", label: "Our Office" },
  { href: "#faqs", label: "FAQs" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="flex h-[117px] items-center justify-between px-[6vw] md:h-[115px] md:px-[5vw]">
        <a href="#top" className="leading-none" onClick={() => setOpen(false)} aria-label="Dr. Maya Reynolds, PsyD, home">
          <span className="block font-serif text-[30px] font-light tracking-tight text-sage-deep md:text-[36px]">
            Maya Reynolds
          </span>
          <span className="mt-1.5 block whitespace-nowrap text-[9.5px] font-normal uppercase tracking-[0.34em] text-clay md:text-[10.5px]">
            Psychologist · Santa Monica
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-[2.4vw] lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap text-[13px] font-normal uppercase tracking-[0.1em] text-sage-deep transition-colors hover:text-clay"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-pill">
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="block w-7 space-y-[7px]" aria-hidden>
            <span className={`block h-px bg-sage-deep transition-transform ${open ? "translate-y-[8px] rotate-45" : ""}`} />
            <span className={`block h-px bg-sage-deep transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-sage-deep transition-transform ${open ? "-translate-y-[8px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="bg-cream px-[6vw] pb-8 pt-2 shadow-[0_20px_30px_-20px_rgba(45,74,62,0.35)] lg:hidden">
          <ul>
            {[...links, { href: "#contact", label: "Contact" }].map((l) => (
              <li key={l.href} className="border-b border-sage-deep/15">
                <a href={l.href} onClick={() => setOpen(false)} className="block py-4 font-serif text-[28px] font-light text-sage-deep">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
