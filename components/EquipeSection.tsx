"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const equipe = [
  { nome: "Dra. Karla Ronqui",     cargo: "Sócia Fundadora",  area: "Direito Empresarial e Tributário", img: "/karen.png" },
  { nome: "Dr. André Coelho",      cargo: "Sócio",             area: "Contencioso Cível e Arbitragem",  img: "/andre.png" },
  { nome: "Dra. Daniela Alves",    cargo: "Advogada",          area: "Direito Contratual e Regulatório",img: "/daniela.png" },
  { nome: "Dr. Leonardo Landim",   cargo: "Advogado",          area: "Direito do Consumidor e Trabalhista", img: "/leonardo.png" },
];

const vUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function EquipeSection() {
  return (
    <section id="equipe" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Subtle BG line */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
          <path d="M-100,350 C300,250 700,420 1100,300 C1300,240 1400,310 1600,280" fill="none" stroke="rgba(184,137,59,0.07)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-16">
          <motion.p {...vUp(0)} className="font-mono text-[10px] tracking-[0.32em] text-gold uppercase mb-5">
            Nossa Equipe
          </motion.p>
          <motion.h2 {...vUp(0.1)} className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-light text-ink leading-[1.08] max-w-2xl">
            Os especialistas por trás dos seus{" "}
            <em className="text-gold-gradient not-italic">resultados.</em>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipe.map((m, i) => (
            <motion.article
              key={m.nome}
              {...vUp(i * 0.1)}
              className="group cursor-default"
              aria-label={`Perfil de ${m.nome}`}
            >
              {/* Photo */}
              <div className="relative overflow-hidden mb-5" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={m.img}
                  alt={`${m.nome}, ${m.cargo}`}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                {/* Gold bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                {/* Corner gold marks on hover */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-gold/0 group-hover:border-gold/60 transition-all duration-400" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-gold/0 group-hover:border-gold/60 transition-all duration-400" />
              </div>

              {/* Info */}
              <h3 className="font-serif text-xl font-medium text-ink group-hover:text-gold transition-colors duration-300 mb-1">{m.nome}</h3>
              <p className="text-gold text-[12px] tracking-wide mb-1">{m.cargo}</p>
              <p className="text-sm text-muted">{m.area}</p>
            </motion.article>
          ))}
        </div>

        <motion.div {...vUp(0.4)} className="text-center mt-14">
          <a
            href="https://www.instagram.com/drc.advogados/"
            target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-gold text-[11px] tracking-[0.16em] uppercase hover:border-gold hover:bg-gold hover:text-white transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            Siga-nos no Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
