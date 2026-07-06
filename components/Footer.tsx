"use client";

import Image from "next/image";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const navLinks  = [
  { name: "Áreas de Atuação", href: "#areas" },
  { name: "Quem Somos",       href: "#sobre" },
  { name: "Diferenciais",     href: "#diferenciais" },
  { name: "Equipe",           href: "#equipe" },
  { name: "Contato",          href: "#contato" },
];
const areasLinks = ["Direito Empresarial", "Direito Societário", "Contratos", "Contencioso Estratégico", "Direito Tributário"];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-ivory border-t overflow-hidden" style={{ borderColor: "rgba(184,137,59,0.18)" }}>
      {/* Gold top rule */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(184,137,59,0.4), transparent)" }} />

      {/* BG decorative line */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice">
          <path d="M-100,300 C300,200 700,340 1100,240 C1300,190 1400,250 1600,220" fill="none" stroke="rgba(184,137,59,0.07)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-8">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1.1fr] gap-10 mb-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-11 h-11 flex-shrink-0">
                <Image src="/logo.png" alt="DRC Advogados" fill className="object-contain" sizes="44px" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-[14px] tracking-[0.22em] text-ink">DRC</span>
                <span className="font-mono text-[8px] tracking-[0.28em] text-muted uppercase mt-0.5">Advogados</span>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-6 max-w-xs">
              Advocacia empresarial de alto padrão, combinando excelência técnica com atendimento próximo e estratégico há mais de 20 anos.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: "https://www.instagram.com/drc.advogados/", label: "Instagram", Icon: Instagram },
                { href: "https://www.linkedin.com/",                label: "LinkedIn",  Icon: Linkedin },
                { href: "mailto:contato@drcadvogados.com.br",       label: "E-mail",    Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 flex items-center justify-center border border-gold/25 text-muted hover:border-gold hover:text-gold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                  aria-label={label}
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-mono text-[10px] tracking-[0.22em] text-gold uppercase mb-5">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-sm text-muted hover:text-gold transition-colors duration-250">{l.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-mono text-[10px] tracking-[0.22em] text-gold uppercase mb-5">Áreas</h3>
            <ul className="space-y-3">
              {areasLinks.map((a) => (
                <li key={a}>
                  <a href="#areas" className="text-sm text-muted hover:text-gold transition-colors duration-250">{a}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-[10px] tracking-[0.22em] text-gold uppercase mb-5">Contato</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-muted">
                <MapPin className="w-4 h-4 text-gold/60 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>R. Dr. Geraldo Campos Moreira, 164, Cj 134 — Cidade Monções, São Paulo/SP</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted">
                <Phone className="w-4 h-4 text-gold/60 flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+5511912252450" className="hover:text-gold transition-colors">+55 11 91225-2450</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted">
                <Mail className="w-4 h-4 text-gold/60 flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:contato@drcadvogados.com.br" className="hover:text-gold transition-colors break-all">contato@drcadvogados.com.br</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 border-t flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "rgba(184,137,59,0.15)" }}>
          <p className="text-xs text-faint">© {year} DRC Advogados. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-faint hover:text-gold transition-colors">Política de Privacidade</a>
            <span className="text-faint text-xs">OAB/SP — Sociedade de Advogados</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
