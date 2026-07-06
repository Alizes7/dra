"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const contatos = [
  { icon: Phone,   label: "Telefone",  valor: "+55 11 91225-2450",              href: "tel:+5511912252450" },
  { icon: Mail,    label: "E-mail",    valor: "contato@drcadvogados.com.br",     href: "mailto:contato@drcadvogados.com.br" },
  { icon: MapPin,  label: "Endereço",  valor: "R. Dr. Geraldo Campos Moreira, 164, Cj 134 — Cidade Monções, São Paulo/SP", href: "https://maps.app.goo.gl/r4WT8YNWsZGKSBeL8" },
  { icon: Clock,   label: "Horário",   valor: "Segunda a Sexta: 9h às 18h",     href: "#" },
];

const vUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function ContactSection() {
  return (
    <section id="contato" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
          <path d="M-100,550 C300,440 700,600 1100,480 C1300,420 1400,490 1600,460" fill="none" stroke="rgba(184,137,59,0.07)" strokeWidth="1" />
          <path d="M200,80 C450,30 700,130 1000,60 C1200,10 1350,90 1600,50" fill="none" stroke="rgba(184,137,59,0.06)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-14">
          <motion.p {...vUp(0)} className="font-mono text-[10px] tracking-[0.32em] text-gold uppercase mb-5">Contato</motion.p>
          <motion.h2 {...vUp(0.1)} className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-light text-ink leading-[1.08] max-w-2xl">
            Entre em <em className="text-gold-gradient not-italic">contato.</em>
          </motion.h2>
          <motion.p {...vUp(0.18)} className="mt-4 text-muted max-w-lg leading-relaxed">
            Estamos prontos para atender suas necessidades jurídicas. Agende uma consulta com nossos especialistas.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Left */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contatos.map((c, i) => (
                <motion.a
                  key={c.label}
                  {...vUp(i * 0.09)}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group p-5 bg-ivory border hover:border-gold/40 hover:shadow-card transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                  style={{ borderColor: "rgba(184,137,59,0.18)" }}
                  aria-label={`${c.label}: ${c.valor}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 flex items-center justify-center border border-gold/20 group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-300 flex-shrink-0 mt-0.5">
                      <c.icon className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[9px] tracking-wider text-faint uppercase mb-1">{c.label}</p>
                      <p className="text-sm text-ink/80 group-hover:text-gold transition-colors duration-300 leading-snug break-words">{c.valor}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map */}
            <motion.div {...vUp(0.38)} className="relative border overflow-hidden" style={{ borderColor: "rgba(184,137,59,0.2)" }}>
              <div className="absolute top-0 left-0 right-0 h-px bg-gold" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.447706913285!2d-46.69576648447594!3d-23.601448084658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5763a80e948d%3A0xad297ab3eccff75f!2sDRC%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%" height="280" style={{ border: 0, filter: "grayscale(100%) contrast(90%)" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Localização DRC Advogados"
              />
              <a
                href="https://maps.app.goo.gl/r4WT8YNWsZGKSBeL8"
                target="_blank" rel="noopener noreferrer"
                className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white border border-gold/30 text-gold text-[10px] tracking-wider uppercase hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
              >
                <ExternalLink className="w-3 h-3" />
                Ver no mapa
              </a>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div {...vUp(0.2)}>
            <form
              className="relative"
              aria-label="Formulário de contato"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold" />
              <div className="pt-8 space-y-5 sm:space-y-6">
                <div>
                  <label htmlFor="nome" className="block font-mono text-[10px] tracking-[0.22em] text-muted uppercase mb-2">
                    Nome <span className="text-gold">*</span>
                  </label>
                  <input id="nome" name="nome" type="text" required autoComplete="name"
                    className="w-full bg-ivory border px-4 py-3.5 text-ink text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-faint"
                    style={{ borderColor: "rgba(184,137,59,0.2)" }}
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-[10px] tracking-[0.22em] text-muted uppercase mb-2">
                    E-mail <span className="text-gold">*</span>
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email"
                    className="w-full bg-ivory border px-4 py-3.5 text-ink text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-faint"
                    style={{ borderColor: "rgba(184,137,59,0.2)" }}
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="block font-mono text-[10px] tracking-[0.22em] text-muted uppercase mb-2">Telefone</label>
                  <input id="telefone" name="telefone" type="tel" autoComplete="tel"
                    className="w-full bg-ivory border px-4 py-3.5 text-ink text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-faint"
                    style={{ borderColor: "rgba(184,137,59,0.2)" }}
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block font-mono text-[10px] tracking-[0.22em] text-muted uppercase mb-2">
                    Mensagem <span className="text-gold">*</span>
                  </label>
                  <textarea id="mensagem" name="mensagem" rows={4} required
                    className="w-full bg-ivory border px-4 py-3.5 text-ink text-sm focus:border-gold focus:outline-none transition-colors resize-none placeholder:text-faint"
                    style={{ borderColor: "rgba(184,137,59,0.2)" }}
                    placeholder="Descreva sua necessidade…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-white text-[11px] tracking-[0.18em] uppercase font-medium hover:bg-gold-deep transition-colors duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
