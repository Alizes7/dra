"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Áreas de Atuação", href: "#areas" },
  { name: "Quem Somos", href: "#sobre" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "Equipe", href: "#equipe" },
  { name: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  const onScroll = useCallback(() => setScrolled(window.scrollY > 40), []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -50% 0px" }
    );
    navLinks.forEach((l) => { const el = document.querySelector(l.href); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-gold focus:text-white focus:rounded-sm">
        Pular para o conteúdo
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-white/96 backdrop-blur-md shadow-[0_1px_0_rgba(184,137,59,0.15),0_4px_24px_rgba(26,23,20,0.06)]"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Navegação principal"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-[72px] sm:h-20">

            {/* Logo */}
            <a href="#inicio" aria-label="DRC Advogados — Início" className="flex items-center gap-3 flex-shrink-0 group">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <Image src="/logo.png" alt="DRC Advogados" fill className="object-contain transition-opacity duration-300 group-hover:opacity-80" priority sizes="48px" />
              </div>
              <div className="hidden sm:flex flex-col leading-none select-none">
                <span className="font-serif text-[15px] tracking-[0.22em] text-ink">DRC</span>
                <span className="font-mono text-[8px] tracking-[0.30em] text-muted mt-0.5 uppercase">Advogados</span>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((l) => {
                const isActive = active === l.href.replace("#", "");
                return (
                  <a
                    key={l.name}
                    href={l.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative px-4 py-2 text-[11px] tracking-[0.14em] uppercase transition-colors duration-250 ${
                      isActive ? "text-gold" : "text-muted hover:text-ink"
                    }`}
                  >
                    {l.name}
                    <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-px bg-gold transition-all duration-300 ${isActive ? "w-4" : "w-0"}`} />
                  </a>
                );
              })}
            </div>

            {/* CTA button */}
            <div className="hidden lg:block">
              <a
                href="https://wa.me/5511912252450"
                target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-2.5 border border-gold text-gold text-[11px] tracking-[0.16em] uppercase transition-all duration-300 hover:bg-gold hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
              >
                Agendar Consulta
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-gold"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Gold hairline separator */}
        <div className={`h-px w-full transition-opacity duration-400 ${scrolled ? "opacity-100" : "opacity-0"}`}
          style={{ background: "linear-gradient(90deg, transparent, rgba(184,137,59,0.25), transparent)" }} />
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-ivory flex flex-col" role="dialog" aria-modal="true" aria-label="Menu mobile">
          <div className="h-[72px] sm:h-20 border-b border-gold/20 flex items-center px-5">
            <div className="relative w-10 h-10">
              <Image src="/logo.png" alt="DRC Advogados" fill className="object-contain" sizes="40px" />
            </div>
          </div>
          <div className="flex flex-col flex-1 items-center justify-center gap-1 py-8">
            {navLinks.map((l, i) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="py-4 px-8 text-2xl font-serif font-light text-ink hover:text-gold transition-colors duration-200"
              >
                {l.name}
              </a>
            ))}
            <a
              href="https://wa.me/5511912252450"
              target="_blank" rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-8 px-10 py-4 border border-gold text-gold text-[11px] tracking-[0.16em] uppercase hover:bg-gold hover:text-white transition-all duration-300"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </>
  );
}
