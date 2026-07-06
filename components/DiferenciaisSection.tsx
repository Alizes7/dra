"use client";

import { motion } from "framer-motion";
import { Clock, Target, MessageCircle, Award } from "lucide-react";

const items = [
  { n: "01", icon: Award,         title: "Excelência Técnica",          desc: "Formação rigorosa e atualização contínua para soluções precisas nas áreas mais complexas do direito." },
  { n: "02", icon: Target,        title: "Foco em Resultados",          desc: "Estratégias jurídicas desenhadas com olhar de negócio, sempre alinhadas ao que cada cliente precisa alcançar." },
  { n: "03", icon: MessageCircle, title: "Atendimento Personalizado",   desc: "Comunicação transparente, relatórios claros e acesso direto aos responsáveis pelo seu caso." },
  { n: "04", icon: Clock,         title: "Relacionamento de Longo Prazo", desc: "Parcerias sólidas construídas ao longo do tempo, baseadas em confiança, ética e entrega consistente." },
];

const vUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function DiferenciaisSection() {
  return (
    <section id="diferenciais" className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#F1EBE0" }}>
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path d="M0,60 C480,0 960,80 1440,20 L1440,0 L0,0 Z" fill="white" />
        </svg>
        <svg viewBox="0 0 1440 80" className="absolute top-0 w-full" preserveAspectRatio="none">
          <path d="M0,60 C480,0 960,80 1440,20" fill="none" stroke="rgba(184,137,59,0.15)" strokeWidth="1" />
        </svg>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path d="M0,20 C480,80 960,0 1440,60 L1440,80 L0,80 Z" fill="white" />
        </svg>
        <svg viewBox="0 0 1440 80" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,20 C480,80 960,0 1440,60" fill="none" stroke="rgba(184,137,59,0.15)" strokeWidth="1" />
        </svg>
      </div>

      {/* BG decorative lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
          <path d="M0,300 C360,200 720,400 1080,280 C1260,220 1380,310 1440,290" fill="none" stroke="rgba(184,137,59,0.10)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <motion.p {...vUp(0)} className="font-mono text-[10px] tracking-[0.32em] text-gold uppercase mb-5">
            Por que escolher a DRC
          </motion.p>
          <motion.h2 {...vUp(0.1)} className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-light text-ink leading-[1.08]">
            O que torna a DRC <em className="text-gold-gradient not-italic">referência.</em>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              {...vUp(i * 0.1)}
              className="group"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-3xl font-light text-gold/30 leading-none select-none">{item.n}</span>
                <div className="h-px flex-1 bg-gold/20" />
                <div className="w-9 h-9 flex items-center justify-center border border-gold/25 group-hover:border-gold/60 group-hover:bg-gold/5 transition-all duration-300">
                  <item.icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-serif text-xl font-medium text-ink mb-3 group-hover:text-gold transition-colors duration-300">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
