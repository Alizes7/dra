"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      aria-label="Apresentação principal"
    >
      {/* ── Organic wave SVG background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Ivory fill wave — right side */}
        <svg className="absolute right-0 top-0 h-full w-[60%] opacity-60" viewBox="0 0 700 900" preserveAspectRatio="xMaxYMid slice" xmlns="http://www.w3.org/2000/svg">
          <path d="M220,0 C160,120 80,200 60,380 C40,560 120,680 80,900 L700,900 L700,0 Z" fill="#F8F4EC" />
          <path d="M280,0 C210,130 130,210 100,400 C70,590 160,700 120,900 L700,900 L700,0 Z" fill="#F1EBE0" opacity="0.6" />
        </svg>

        {/* Gold decorative lines — flowing curves */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M800,80 C900,160 950,300 880,440 C810,580 700,640 720,800"
            fill="none" stroke="rgba(184,137,59,0.18)" strokeWidth="1.2"
            strokeDasharray="600" strokeDashoffset="600"
            style={{ animation: "draw-line 2.5s 0.8s ease forwards" }}
          />
          <path
            d="M860,60 C960,145 1005,290 935,435 C865,580 755,638 775,800"
            fill="none" stroke="rgba(184,137,59,0.10)" strokeWidth="1"
            strokeDasharray="600" strokeDashoffset="600"
            style={{ animation: "draw-line 2.5s 1.1s ease forwards" }}
          />
          <path
            d="M750,100 C840,175 895,305 825,445 C755,585 645,642 665,800"
            fill="none" stroke="rgba(184,137,59,0.07)" strokeWidth="0.8"
            strokeDasharray="600" strokeDashoffset="600"
            style={{ animation: "draw-line 2.5s 1.4s ease forwards" }}
          />
          {/* Horizontal accent lines */}
          <line x1="0" y1="0" x2="340" y2="0" stroke="rgba(184,137,59,0.12)" strokeWidth="1" />
          <line x1="0" y1="1" x2="200" y2="1" stroke="rgba(184,137,59,0.07)" strokeWidth="1" />
        </svg>

        {/* Abstract marble texture — very subtle, right block */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[48%] opacity-[0.04]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='m'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.02' numOctaves='4' seed='2'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23m)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Gold corner accent */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t border-l" style={{ borderColor: "rgba(184,137,59,0.2)" }} />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r" style={{ borderColor: "rgba(184,137,59,0.2)" }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-12 items-center">

          {/* Left — copy */}
          <div className="max-w-2xl">
            <motion.p
              {...fadeUp(0.1)}
              className="font-mono text-[10px] tracking-[0.35em] text-gold uppercase mb-7"
            >
              Excelência Jurídica. Visão Estratégica.
            </motion.p>

            <motion.h1
              {...fadeUp(0.22)}
              className="font-serif text-[42px] sm:text-5xl md:text-6xl lg:text-[64px] font-light text-ink leading-[1.06] mb-8"
            >
              Excelência jurídica que impulsiona{" "}
              <em className="text-gold-gradient not-italic">resultados</em>{" "}
              e fortalece{" "}
              <em className="text-gold-gradient not-italic">negócios.</em>
            </motion.h1>

            <motion.p
              {...fadeUp(0.36)}
              className="text-muted text-base sm:text-[17px] leading-relaxed mb-10 max-w-lg"
            >
              Soluções jurídicas sofisticadas em Direito Empresarial para decisões seguras e sustentáveis.
            </motion.p>

            <motion.div {...fadeUp(0.48)} className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5511912252450"
                target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-white text-[11px] tracking-[0.16em] uppercase font-medium transition-all duration-300 hover:bg-gold-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
              >
                Falar com Especialista
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold/40 text-gold text-[11px] tracking-[0.16em] uppercase hover:border-gold hover:bg-gold/5 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
              >
                Conheça Nossas Áreas
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              {...fadeUp(0.58)}
              className="mt-14 pt-10 border-t flex gap-10"
              style={{ borderColor: "rgba(184,137,59,0.15)" }}
            >
              {[
                { n: "20+", l: "Anos de experiência" },
                { n: "11",  l: "Áreas especializadas" },
                { n: "500+", l: "Casos resolvidos" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-3xl font-light text-gold">{s.n}</div>
                  <div className="text-[10px] tracking-[0.12em] text-muted uppercase mt-1">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — quote card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative bg-ivory border shadow-card p-8 sm:p-10" style={{ borderColor: "rgba(184,137,59,0.22)" }}>
              {/* Gold top bar */}
              <div className="absolute top-0 left-8 right-8 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(184,137,59,0.6), transparent)" }} />

              {/* Large decorative quote mark */}
              <div className="font-serif text-[80px] leading-none text-gold/15 select-none mb-2">&ldquo;</div>

              <p className="font-serif text-[19px] sm:text-xl font-light text-ink/80 leading-[1.55] mb-8">
                Mais do que interpretar a lei, antecipamos cenários, reduzimos riscos e criamos valor para o que realmente importa: o futuro do seu negócio.
              </p>

              <div className="flex items-center gap-4">
                <div className="h-px flex-1" style={{ background: "rgba(184,137,59,0.25)" }} />
                <div className="font-mono text-[9px] tracking-[0.28em] text-gold uppercase">DRC Advogados</div>
              </div>

              {/* Floating accent element */}
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r" style={{ borderColor: "rgba(184,137,59,0.4)" }} />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l" style={{ borderColor: "rgba(184,137,59,0.4)" }} />
            </div>

            {/* Floating orb behind card */}
            <div className="absolute -z-10 -top-8 -right-8 w-48 h-48 rounded-full animate-float-slow"
              style={{ background: "radial-gradient(circle, rgba(184,137,59,0.08) 0%, transparent 70%)" }} />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Rolar para próxima seção"
      >
        <span className="font-mono text-[9px] tracking-[0.25em] text-gold/60 uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-gold/50 animate-bounce" />
      </motion.div>
    </section>
  );
}
