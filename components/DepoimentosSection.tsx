"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const depoimentos = [
  { texto: "A DRC Advogados combina excelência técnica, visão estratégica e atendimento próximo. Uma parceria de confiança para decisões relevantes.", autor: "Marcelo Andrade", cargo: "CEO, Grupo Andrade" },
  { texto: "Profissionalismo impecável e resultados consistentes. A equipe entende perfeitamente as necessidades do negócio e entrega soluções práticas.", autor: "Patrícia Lima", cargo: "Diretora Jurídica, TechCorp Brasil" },
  { texto: "O DRC Advogados se tornou um parceiro estratégico fundamental para nossa empresa. A qualidade técnica e o comprometimento superaram todas as expectativas.", autor: "Roberto Santos", cargo: "Presidente, Santos Holding" },
];

export default function DepoimentosSection() {
  const [cur, setCur] = useState(0);
  const next = useCallback(() => setCur((p) => (p + 1) % depoimentos.length), []);
  const prev = useCallback(() => setCur((p) => (p - 1 + depoimentos.length) % depoimentos.length), []);
  useEffect(() => { const t = setInterval(next, 6000); return () => clearInterval(t); }, [next]);

  return (
    <section id="depoimentos" className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#F8F4EC" }}>
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,0 1080,80 1440,30 L1440,0 L0,0 Z" fill="white" />
        </svg>
        <svg viewBox="0 0 1440 80" className="absolute top-0 w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,0 1080,80 1440,30" fill="none" stroke="rgba(184,137,59,0.14)" strokeWidth="1" />
        </svg>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path d="M0,30 C360,80 1080,0 1440,50 L1440,80 L0,80 Z" fill="white" />
        </svg>
        <svg viewBox="0 0 1440 80" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,30 C360,80 1080,0 1440,50" fill="none" stroke="rgba(184,137,59,0.14)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-mono text-[10px] tracking-[0.32em] text-gold uppercase mb-5"
        >
          Depoimentos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl sm:text-5xl font-light text-ink mb-14 leading-[1.1]"
        >
          O que dizem nossos <em className="text-gold-gradient not-italic">clientes.</em>
        </motion.h2>

        {/* Carousel */}
        <div className="relative">
          {/* Big gold quote */}
          <div className="font-serif text-[100px] leading-none text-gold/15 select-none mb-2">&ldquo;</div>

          <AnimatePresence mode="wait">
            <motion.div
              key={cur}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-serif text-xl sm:text-2xl font-light text-ink/80 leading-[1.6] mb-10 italic">
                &ldquo;{depoimentos[cur].texto}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="h-px w-10" style={{ background: "rgba(184,137,59,0.35)" }} />
                <div>
                  <p className="font-serif text-lg font-medium text-ink">{depoimentos[cur].autor}</p>
                  <p className="font-mono text-[10px] tracking-wider text-muted mt-0.5">{depoimentos[cur].cargo}</p>
                </div>
                <div className="h-px w-10" style={{ background: "rgba(184,137,59,0.35)" }} />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5">
            <button onClick={prev} className="w-10 h-10 flex items-center justify-center border border-gold/30 text-muted hover:border-gold hover:text-gold transition-all duration-250 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2" aria-label="Anterior">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {depoimentos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCur(i)}
                  className={`h-1 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${i === cur ? "bg-gold w-7" : "bg-gold/25 w-4"}`}
                  aria-label={`Depoimento ${i + 1}`}
                  aria-current={i === cur ? "true" : undefined}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 flex items-center justify-center border border-gold/30 text-muted hover:border-gold hover:text-gold transition-all duration-250 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2" aria-label="Próximo">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
