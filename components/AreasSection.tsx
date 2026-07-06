"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Building2, FileText, Gavel, Landmark, Shield, TrendingUp, Users, Scale, Globe, X, ArrowUpRight } from "lucide-react";

interface Area {
  icon: React.ElementType;
  title: string;
  description: string;
  detalhes: string[];
}

const areas: Area[] = [
  { icon: Briefcase, title: "Direito Empresarial", description: "Assessoria completa para empresas de todos os portes, com foco em prevenção e solução de conflitos societários.", detalhes: ["Planejamento societário e holding", "Fusões e aquisições", "Contratos comerciais", "Governança corporativa", "Due diligence"] },
  { icon: Building2, title: "Direito Societário", description: "Estruturação e reorganização societária com visão estratégica para crescimento sustentável.", detalhes: ["Constituição de sociedades", "Acordos de sócios", "Reorganizações societárias", "Dissolução e liquidação", "Planejamento sucessório"] },
  { icon: FileText, title: "Contratos", description: "Elaboração, revisão e negociação de contratos comerciais e corporativos complexos.", detalhes: ["Contratos comerciais", "Joint ventures", "Contratos internacionais", "Revisão contratual", "Resolução de conflitos"] },
  { icon: Gavel, title: "Contencioso Estratégico", description: "Representação judicial em demandas cíveis e comerciais com estratégia e excelência.", detalhes: ["Ações cíveis e comerciais", "Execuções", "Tutelas de urgência", "Arbitragem", "Mediação"] },
  { icon: Landmark, title: "Direito Tributário", description: "Planejamento tributário estratégico e defesa em processos administrativos e judiciais.", detalhes: ["Planejamento tributário", "Recuperação de créditos", "Defesa em autuações", "Compliance tributário", "Consultoria em operações"] },
  { icon: Shield, title: "Proteção de Dados e LGPD", description: "Adequação à legislação de proteção de dados e consultoria em privacidade corporativa.", detalhes: ["Diagnóstico de adequação", "Mapeamento de dados", "Políticas de privacidade", "Treinamentos", "DPO as a Service"] },
  { icon: TrendingUp, title: "Recuperação Judicial", description: "Assessoria especializada em processos de recuperação judicial e extrajudicial.", detalhes: ["Planejamento de recuperação", "Negociação com credores", "Elaboração de plano", "Assessoria em assembleias", "Recuperação extrajudicial"] },
  { icon: Users, title: "Direito Trabalhista", description: "Consultoria preventiva e contencioso trabalhista para empresas de todos os portes.", detalhes: ["Consultoria preventiva", "Defesa em reclamações", "Auditoria trabalhista", "Negociação coletiva", "Compliance trabalhista"] },
  { icon: Scale, title: "Arbitragem e Mediação", description: "Representação em procedimentos arbitrais e mediações de alta complexidade.", detalhes: ["Representação em arbitragens", "Mediação comercial", "Elaboração de cláusulas", "Execução de laudos", "Consultoria prévia"] },
  { icon: Globe, title: "Direito Internacional", description: "Assessoria em operações transnacionais e resolução de conflitos de jurisdição.", detalhes: ["Contratos internacionais", "Due diligence cross-border", "Resolução de conflitos", "Planejamento estrutural", "Compliance internacional"] },
];

const vUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function AreasSection() {
  const [selected, setSelected] = useState<Area | null>(null);

  useEffect(() => {
    if (!selected) return;
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    document.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <section id="areas" className="relative py-24 md:py-28 bg-white overflow-hidden">
      {/* Subtle background lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
          <path d="M-100,600 C300,500 700,650 1100,550 C1300,500 1400,520 1600,490" fill="none" stroke="rgba(184,137,59,0.07)" strokeWidth="1" />
          <path d="M200,0 C400,60 700,20 1000,80 C1200,120 1350,60 1600,100" fill="none" stroke="rgba(184,137,59,0.06)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.p {...vUp(0)} className="font-mono text-[10px] tracking-[0.32em] text-gold uppercase mb-5">
            Áreas de Atuação
          </motion.p>
          <motion.h2 {...vUp(0.1)} className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-light text-ink leading-[1.08] mb-6">
            Expertise em cada <em className="text-gold-gradient not-italic">especialidade.</em>
          </motion.h2>
          <motion.p {...vUp(0.18)} className="text-muted text-[17px] leading-relaxed">
            Atuação multidisciplinar com foco nas áreas preventiva, consultiva e contenciosa.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area, i) => (
            <motion.button
              key={area.title}
              {...vUp(Math.min(i, 5) * 0.07)}
              onClick={() => setSelected(area)}
              className="group relative text-left p-7 bg-white border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
              style={{ borderColor: "rgba(184,137,59,0.2)" }}
              aria-label={`Ver detalhes: ${area.title}`}
            >
              {/* Top gold bar on hover */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />

              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 flex items-center justify-center border transition-all duration-300 group-hover:border-gold/60 group-hover:bg-gold/5" style={{ borderColor: "rgba(184,137,59,0.22)" }}>
                  <area.icon className="w-[18px] h-[18px] text-gold" strokeWidth={1.5} />
                </div>
                <ArrowUpRight className="w-4 h-4 text-faint group-hover:text-gold transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <h3 className="font-serif text-xl font-medium text-ink mb-3 group-hover:text-gold transition-colors duration-300">
                {area.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">{area.description}</p>
              <span className="font-mono text-[9px] tracking-[0.2em] text-gold/70 uppercase">Saiba mais</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(26,23,20,0.5)", backdropFilter: "blur(4px)" }}
            onClick={() => setSelected(null)}
            role="dialog" aria-modal="true" aria-labelledby="modal-area-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg bg-white p-8 sm:p-10 shadow-gold-lg"
              style={{ borderTop: "2px solid #B8893B" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelected(null)} className="absolute top-5 right-5 text-faint hover:text-gold transition-colors cursor-pointer" aria-label="Fechar">
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-11 h-11 flex items-center justify-center border" style={{ borderColor: "rgba(184,137,59,0.3)" }}>
                  <selected.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <h3 id="modal-area-title" className="font-serif text-2xl font-medium text-ink">{selected.title}</h3>
              </div>
              <p className="text-muted leading-relaxed mb-7">{selected.description}</p>
              <p className="font-mono text-[10px] tracking-[0.22em] text-gold uppercase mb-4">Serviços</p>
              <ul className="space-y-3 mb-8">
                {selected.detalhes.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-sm text-muted">
                    <span className="w-1 h-1 rounded-full flex-shrink-0 bg-gold" />
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5511912252450" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-white text-[11px] tracking-[0.16em] uppercase hover:bg-gold-deep transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
              >
                Falar com Especialista
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
