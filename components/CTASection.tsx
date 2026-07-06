"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-ink" aria-label="Chamada para ação">
      {/* Gold wave top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path d="M0,30 C240,70 600,0 960,60 C1200,90 1350,20 1440,45 L1440,0 L0,0 Z" fill="white" />
        </svg>
        <svg viewBox="0 0 1440 80" className="absolute top-0 w-full" preserveAspectRatio="none">
          <path d="M0,20 C360,80 1080,0 1440,50" fill="none" stroke="rgba(184,137,59,0.22)" strokeWidth="1" />
        </svg>
      </div>

      {/* Gold decorative curves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice">
          <path d="M-100,400 C300,280 700,440 1100,320 C1300,260 1400,340 1600,300" fill="none" stroke="rgba(184,137,59,0.12)" strokeWidth="1" />
          <path d="M-100,440 C300,320 700,480 1100,360 C1300,300 1400,380 1600,340" fill="none" stroke="rgba(184,137,59,0.07)" strokeWidth="1" />
        </svg>
        {/* Corner marks */}
        <div className="absolute top-12 left-12 w-12 h-12 border-t border-l border-gold/25" />
        <div className="absolute bottom-12 right-12 w-12 h-12 border-b border-r border-gold/25" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-mono text-[10px] tracking-[0.35em] text-gold/70 uppercase mb-6"
        >
          Vamos conversar
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-light text-white leading-[1.1] mb-7"
        >
          Pronto para proteger e <em className="text-gold-gradient not-italic">fortalecer</em> seu negócio?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white/60 text-[17px] leading-relaxed mb-10 max-w-xl mx-auto"
        >
          Agende uma conversa com a nossa equipe e descubra como podemos apoiar suas decisões com segurança jurídica e estratégia.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.28 }}
          href="https://wa.me/5511912252450"
          target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-10 py-4 bg-gold text-white text-[11px] tracking-[0.16em] uppercase font-medium hover:bg-gold-light transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light focus-visible:outline-offset-4"
        >
          Agendar Consulta
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>
      </div>
    </section>
  );
}
