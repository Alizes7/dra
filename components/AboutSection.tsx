"use client";

import { motion } from "framer-motion";
import { Scale, Eye, Shield } from "lucide-react";

const pillars = [
  {
    icon: Scale,
    title: "Atuação Nacional",
    desc: "Presença e expertise para atender clientes em todo o território nacional com a mesma excelência.",
  },
  {
    icon: Eye,
    title: "Visão de Negócio",
    desc: "Combinamos rigor jurídico com perspectiva estratégica, alinhando o direito aos objetivos do cliente.",
  },
  {
    icon: Shield,
    title: "Ética e Transparência",
    desc: "Compromisso inabalável com a ética, construindo relações de longo prazo baseadas em confiança.",
  },
];

const vUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-ivory overflow-hidden">
      {/* Wave divider top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C360,80 1080,0 1440,60 L1440,0 Z" fill="white" />
        </svg>
        {/* Gold line following wave */}
        <svg viewBox="0 0 1440 80" className="absolute top-0 w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C360,80 1080,0 1440,60" fill="none" stroke="rgba(184,137,59,0.18)" strokeWidth="1" />
        </svg>
      </div>

      {/* Wave divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden rotate-180" aria-hidden="true">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C360,80 1080,0 1440,60 L1440,0 Z" fill="white" />
        </svg>
      </div>

      {/* Background gold lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
          <path d="M-100,500 C200,400 500,550 800,450 C1100,350 1300,480 1600,420" fill="none" stroke="rgba(184,137,59,0.08)" strokeWidth="1" />
          <path d="M-100,530 C200,430 500,580 800,480 C1100,380 1300,510 1600,450" fill="none" stroke="rgba(184,137,59,0.05)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <motion.p {...vUp(0)} className="font-mono text-[10px] tracking-[0.32em] text-gold uppercase mb-5">
              Sobre o Escritório
            </motion.p>
            <motion.h2 {...vUp(0.1)} className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-light text-ink leading-[1.08] mb-8">
              Estratégia, técnica e compromisso com o{" "}
              <em className="text-gold-gradient not-italic">resultado.</em>
            </motion.h2>
            <motion.p {...vUp(0.2)} className="text-muted text-[17px] leading-relaxed mb-6">
              O DRC Advogados atua com rigor técnico, visão de negócio e atendimento personalizado para empresas e pessoas que buscam segurança jurídica em decisões relevantes.
            </motion.p>
            <motion.p {...vUp(0.28)} className="text-muted leading-relaxed mb-10">
              Nossa equipe multidisciplinar combina experiência consolidada com uma abordagem estratégica e inovadora, construindo soluções jurídicas sob medida para cada cliente.
            </motion.p>
            <motion.a
              {...vUp(0.36)}
              href="#contato"
              className="inline-flex items-center gap-3 text-gold text-[11px] tracking-[0.18em] uppercase group focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
            >
              Fale com nossa equipe
              <span className="h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" />
            </motion.a>
          </div>

          {/* Right — pillars */}
          <div className="space-y-0 divide-y" style={{ borderColor: "rgba(184,137,59,0.15)" }}>
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                {...vUp(i * 0.12)}
                className="group flex gap-6 py-8 first:pt-0 last:pb-0 cursor-default"
              >
                <div className="flex-shrink-0 mt-1 w-10 h-10 flex items-center justify-center border transition-all duration-300 group-hover:border-gold/50 group-hover:bg-gold/5" style={{ borderColor: "rgba(184,137,59,0.2)" }}>
                  <p.icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-ink mb-2 group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
