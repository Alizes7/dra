"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, X, Clock, User, Tag, Share2, Bookmark } from "lucide-react";

interface Artigo {
  id: number;
  categoria: string;
  titulo: string;
  data: string;
  resumo: string;
  conteudo: string;
  autor: string;
  tempoLeitura: string;
  tags: string[];
  destaque?: boolean;
}

const artigos: Artigo[] = [
  { 
    id: 1,
    categoria: "Direito Empresarial", 
    titulo: "Reforma Tributária: Impactos para Empresas em 2026", 
    data: "15 Jan 2026", 
    resumo: "Análise das principais mudanças trazidas pela reforma tributária e seus efeitos no planejamento estratégico das empresas.",
    conteudo: `A Reforma Tributária representa a maior mudança no sistema tributário brasileiro das últimas décadas. Com a unificação de impostos como ICMS, ISS, IPI, PIS e COFINS em um único Imposto sobre Bens e Serviços (IBS), as empresas precisam se preparar para uma nova realidade fiscal.

**Principais impactos:**

• **Transição gradual**: O novo sistema será implementado ao longo de 7 anos, com alíquotas convergindo progressivamente.

• **Crédito tributário**: O modelo de non-cumulatividade será ampliado, permitindo maior compensação de créditos ao longo da cadeia produtiva.

• **Setores impactados**: Indústria, serviços e comércio terão regras diferenciadas de transição que exigem análise caso a caso.

• **Compliance**: A complexidade inicial exige investimento em sistemas de gestão tributária e capacitação das equipes.

**Recomendações para empresas:**

1. Realize um diagnóstico tributário completo antes da vigência
2. Avalie o impacto na cadeia de fornecedores e clientes
3. Atualize sistemas ERP para compatibilidade com a nova legislação
4. Capacite a equipe fiscal interna
5. Considere a contratação de assessoria especializada para o período de transição

A DRC Advogados oferece consultoria completa para adequação à Reforma Tributária, com equipe especializada em Direito Tributário e Empresarial.`,
    autor: "Dra. Karla Ronqui",
    tempoLeitura: "8 min",
    tags: ["Reforma Tributária", "IBS", "Planejamento Tributário", "Compliance"],
    destaque: true
  },
  { 
    id: 2,
    categoria: "Compliance", 
    titulo: "LGPD: Novas Diretrizes para Adequação Empresarial", 
    data: "08 Jan 2026", 
    resumo: "Entenda as atualizações na legislação de proteção de dados e como implementar compliance efetivo.",
    conteudo: `A Lei Geral de Proteção de Dados (LGPD) completou mais um ano de vigência e as exigências regulatórias se tornaram cada vez mais rigorosas. Em 2026, a Autoridade Nacional de Proteção de Dados (ANPD) intensificou as fiscalizações e já aplicou multas milionárias a empresas que descumpriram as normas.

**Novidades em 2026:**

• **Relatórios de Impacto à Proteção de Dados (RIPD)**: Obrigatórios para operações de alto risco, exigindo análise detalhada de todos os processamentos de dados pessoais.

• **DPO obrigatório**: Empresas com mais de 5 milhões de reais de faturamento ou que processam dados sensíveis em larga escala devem ter Encarregado de Dados nomeado.

• **Transferência internacional**: Novas regras para envio de dados para fora do Brasil, exigindo certificações e acordos específicos.

• **Direitos do titular**: Prazo de resposta às solicitações reduzido para 10 dias úteis.

**Checklist de adequação:**

✓ Mapeamento completo de dados pessoais processados
✓ Política de Privacidade atualizada e acessível
✓ Termos de Consentimento claros e específicos
✓ Procedimentos para atendimento de direitos dos titulares
✓ Medidas de segurança da informação implementadas
✓ Registro de operações de tratamento
✓ Contratos com terceiros revisados

A não adequação pode resultar em multas de até 2% do faturamento da empresa, limitadas a R$ 50 milhões por infração, além de danos reputacionais irreversíveis.`,
    autor: "Dra. Daniela Alves",
    tempoLeitura: "6 min",
    tags: ["LGPD", "Proteção de Dados", "Compliance", "ANPD"]
  },
  { 
    id: 3,
    categoria: "Contratos", 
    titulo: "Contratos Digitais: Validade e Segurança Jurídica", 
    data: "02 Jan 2026", 
    resumo: "Aspectos legais dos contratos eletrônicos e as melhores práticas para garantir validade e enforceability.",
    conteudo: `A digitalização dos contratos acelerou-se exponencialmente nos últimos anos, impulsionada pelo home office e pela necessidade de agilidade nos negócios. No entanto, a validade jurídica dos contratos digitais exige atenção a requisitos específicos para garantir segurança e enforceability.

**Base legal:**

A Medida Provisória nº 2.200-2/2001 regulamenta a Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil), estabelecendo os certificados digitais como forma de identificação segura do signatário. Além disso, o Marco Civil da Internet (Lei 12.965/2014) e a Lei 14.063/2020 ampliaram as possibilidades de uso de assinaturas eletrônicas.

**Tipos de assinatura eletrônica:**

1. **Simples**: Aceitação por meio de clique, senha ou email. Válida para contratos de baixo risco.

2. **Avançada**: Utiliza credenciais de autenticação vinculadas ao signatário. Recomendada para contratos comerciais.

3. **Qualificada**: Certificado digital ICP-Brasil com chave criptográfica. Exigida para documentos públicos e operações de alto valor.

**Boas práticas:**

• Utilize plataformas certificadas e auditadas
• Garanta o consentimento livre, específico e informado
• Armazene logs de auditoria com carimbo de tempo
• Mantenha versionamento do documento
• Assegure a integridade do conteúdo após assinatura
• Forneça cópia ao contratante imediatamente

**Riscos comuns:**

- Falta de prova da identidade do signatário
- Alteração unilateral do conteúdo
- Nulidade por vício de consentimento
- Insegurança na armazenagem

A DRC Advogados auxilia na elaboração de políticas de contratação digital e na seleção de soluções tecnológicas adequadas ao perfil de risco de cada empresa.`,
    autor: "Dr. André Coelho",
    tempoLeitura: "7 min",
    tags: ["Contratos Digitais", "Assinatura Eletrônica", "ICP-Brasil", "Compliance Digital"]
  },
  { 
    id: 4,
    categoria: "Direito Tributário", 
    titulo: "Créditos de PIS/COFINS: Como Recuperar Valores Pagos a Maior", 
    data: "20 Dez 2025", 
    resumo: "Guia prático para identificação e recuperação de créditos tributários acumulados no sistema não cumulativo.",
    conteudo: `A sistemática não cumulativa do PIS e da COFINS permite que empresas com lucro real apurem créditos sobre diversas operações, reduzindo a carga tributária efetiva. No entanto, muitas companhias deixam de utilizar créditos por desconhecimento da legislação ou falhas no controle interno.

**Operações que geram créditos:**

• Aquisição de bens para revenda
• Aquisição de bens e serviços utilizados como insumo
• Aquisição de serviços de transporte e armazenagem
• Aquisição de serviços de comunicação
• Aquisição de serviços de processamento de dados
• Aquisição de energia elétrica
• Aluguel de prédios, máquinas e equipamentos
• Contraprestação de arrendamento mercantil
• Depreciação e amortização de máquinas, equipamentos e edificações

**Prazos e limitações:**

Os créditos podem ser compensados com débitos do mesmo regime (não cumulativo) ou, quando houver excesso, requerer o ressarcimento ou a restituição. O prazo de prescrição é de 5 anos, contado do primeiro dia do exercício seguinte ao da apuração.

**Cuidados importantes:**

- Documentação comprobatória deve ser mantida por 10 anos
- Créditos de insumo exigem vinculação ao processo produtivo
- Serviços de terceiros precisam estar relacionados na Lei 10.637/2002 e 10.833/2003
- Créditos de energia elétrica são limitados a consumo industrial

**Oportunidades de planejamento:**

A revisão retrospectiva das apurações dos últimos 5 anos pode identificar valores significativos a recuperar. Em alguns setores, como indústria e construção civil, os créditos acumulados podem alcançar milhões de reais.

A DRC Advogados possui equipe especializada em revisão tributária e recuperação de créditos, com metodologia própria de análise e suporte em todo o processo administrativo e judicial.`,
    autor: "Dra. Karla Ronqui",
    tempoLeitura: "10 min",
    tags: ["PIS/COFINS", "Créditos Tributários", "Recuperação Tributária", "Planejamento Fiscal"]
  },
  { 
    id: 5,
    categoria: "Direito Trabalhista", 
    titulo: "Teletrabalho: Direitos e Deveres na Era do Home Office", 
    data: "15 Dez 2025", 
    resumo: "Entenda as regras do trabalho remoto, reembolso de despesas e a nova jurisprudência do TST sobre o tema.",
    conteudo: `A pandemia acelerou a adoção do teletrabalho no Brasil, e mesmo com o retorno gradual às atividades presenciais, muitas empresas mantiveram ou expandiram o modelo remoto. A Lei 14.442/2022 trouxe regulamentação específica, mas questões práticas continuam gerando dúvidas e litígios.

**Tipos de trabalho remoto:**

1. **Teletrabalho**: Trabalho fora das dependências da empresa, em domicílio ou outro local à escolha do empregado. Pode ser total ou híbrido.

2. **Trabalho remoto ocasional**: Realizado em situações excepcionais, por até 45 dias no ano, sem alteração contratual.

**Obrigações do empregador:**

• Fornecer equipamentos necessários OU pagar auxílio-equipamento
• Arcar com despesas de internet, energia e outros custos operacionais
• Respeitar o limite de jornada e intervalos
• Garantir a segurança e saúde do trabalhador (NR 17)
• Manter registro de ponto eletrônico
• Incluir teletrabalho no Programa de Gerenciamento de Riscos (PGR)

**Reembolso de despesas:**

A jurisprudência do TST vem se consolidando no sentido de que o empregador deve reembolsar as despesas efetivamente comprovadas pelo empregado, incluindo:
- Internet banda larga
- Energia elétrica (proporcional)
- Manutenção de equipamentos
- Mobiliário ergonômico (em alguns casos)

**Riscos trabalhistas:**

- Acidente de trabalho em domicílio (reconhecido pela JT)
- Horas extras por dificuldade de desconexão
- Doenças ocupacionais (LER/DORT, transtornos mentais)
- Assédio moral por cobrança excessiva online

**Recomendações:**

- Formalize o teletrabalho em acordo individual escrito
- Estabeleça política clara de desconexão (right to disconnect)
- Forneça treinamento de ergonomia e saúde mental
- Faça visitas periódicas ao local de trabalho remoto
- Mantenha comunicação regular e estruturada

A DRC Advogados oferece consultoria preventiva e defesa em litígios trabalhistas relacionados ao trabalho remoto, com acompanhamento da evolução jurisprudencial.`,
    autor: "Dr. Leonardo Landim",
    tempoLeitura: "9 min",
    tags: ["Teletrabalho", "Home Office", "Direito Trabalhista", "TST"]
  },
  { 
    id: 6,
    categoria: "Contencioso Cível", 
    titulo: "Arbitragem vs. Judiciário: Quando Escolher Cada Via?", 
    data: "10 Dez 2025", 
    resumo: "Análise comparativa entre arbitragem e processo judicial para resolução de conflitos empresariais de alta complexidade.",
    conteudo: `A escolha entre arbitragem e processo judicial é uma decisão estratégica que pode determinar o sucesso na resolução de conflitos empresariais. Cada via possui características distintas que devem ser avaliadas conforme a natureza da disputa, as partes envolvidas e os objetivos de negócio.

**Arbitragem — Vantagens:**

• **Confidencialidade**: O processo é privado, preservando a imagem das empresas e estratégias comerciais.

• **Especialização**: Os árbitros são escolhidos pelas partes, permitindo seleção de especialistas na matéria.

• **Celeridade**: Em média, 12 a 18 meses para decisão final, contra 5 a 10 anos no Judiciário.

• **Flexibilidade**: As partes definem o procedimento, calendário e idioma.

• **Execução**: A sentença arbitral é título executivo judicial, com execução direta.

• **Transnacionalidade**: Facilidade de reconhecimento e execução no exterior (Convenção de Nova York).

**Arbitragem — Desvantagens:**

• Custo elevado (honorários arbitrais, custas da câmara, advogados)
• Poucas possibilidades de recurso (anulação restrita)
• Requer acordo prévio das partes (cláusula compromissória)
• Limitação a direitos patrimoniais disponíveis

**Judiciário — Quando preferir:**

• Litígios envolvendo direitos indisponíveis (consumidor, trabalhista, família)
• Necessidade de medidas cautelares urgentes e complexas
• Casos que exigem produção de prova técnica pública
• Situações onde a publicidade é desejável (precedentes)
• Disputas com parte insolvente ou desaparecida

**Cláusula compromissória ideal:**

Uma boa cláusula deve prever:
- Câmara arbitral ou regras ad hoc
- Número de árbitros e método de nomeação
- Local da sede arbitral
- Idioma do procedimento
- Lei aplicável ao mérito
- Aplicação do Regulamento da câmara escolhida

**Tendências em 2026:**

A arbitragem online (Online Dispute Resolution — ODR) ganhou tração, com câmaras como ICC, CIESP/FIESP e CAM-CCBC oferecendo procedimentos híbridos ou totalmente virtuais. A inteligência artificial também começa a ser utilizada em análise documental e predição de resultados.

A DRC Advogados atua tanto como representante de partes em arbitragens nacionais e internacionais quanto na elaboração de cláusulas compromissórias e políticas de resolução de conflitos.`,
    autor: "Dr. André Coelho",
    tempoLeitura: "8 min",
    tags: ["Arbitragem", "Contencioso", "Resolução de Conflitos", "ODR"]
  },
];

export default function ArtigosSection() {
  const [artigoSelecionado, setArtigoSelecionado] = useState<Artigo | null>(null);
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>("Todas");

  useEffect(() => {
    if (!artigoSelecionado) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setArtigoSelecionado(null);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [artigoSelecionado]);

  const categorias = ["Todas", ...Array.from(new Set(artigos.map(a => a.categoria)))];

  const artigosFiltrados = categoriaFiltro === "Todas" 
    ? artigos 
    : artigos.filter(a => a.categoria === categoriaFiltro);

  const abrirArtigo = useCallback((artigo: Artigo) => {
    setArtigoSelecionado(artigo);
    document.body.style.overflow = "hidden";
  }, []);

  const fecharArtigo = useCallback(() => {
    setArtigoSelecionado(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <section id="artigos" className="relative py-24 md:py-32 bg-ivory overflow-hidden">
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path d="M0,50 C480,0 960,80 1440,30 L1440,0 L0,0 Z" fill="white" />
        </svg>
        <svg viewBox="0 0 1440 80" className="absolute top-0 w-full" preserveAspectRatio="none">
          <path d="M0,50 C480,0 960,80 1440,30" fill="none" stroke="rgba(184,137,59,0.14)" strokeWidth="1" />
        </svg>
      </div>

      {/* BG lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
          <path d="M-100,500 C300,380 700,540 1100,420 C1300,360 1400,430 1600,400" fill="none" stroke="rgba(184,137,59,0.08)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6"
        >
          <div>
            <p className="font-mono text-[10px] tracking-[0.32em] text-gold uppercase mb-5">Publicações</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-light text-ink leading-[1.08]">
              Artigos e <em className="text-gold-gradient not-italic">Insights.</em>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaFiltro(cat)}
                className={`px-4 py-2 text-[10px] tracking-[0.15em] uppercase transition-all duration-250 border cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${
                  categoriaFiltro === cat
                    ? "border-gold/50 text-gold bg-gold/8"
                    : "border-gold/20 text-muted hover:border-gold/40 hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {artigosFiltrados.map((artigo, index) => (
              <motion.article
                key={artigo.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group cursor-pointer"
                onClick={() => abrirArtigo(artigo)}
                tabIndex={0}
                role="button"
                aria-label={`Ler artigo: ${artigo.titulo}`}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") abrirArtigo(artigo); }}
              >
                <div className="relative h-full p-7 bg-white border hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-350 overflow-hidden" style={{ borderColor: "rgba(184,137,59,0.18)" }}>
                  {/* Top gold bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                  {artigo.destaque && (
                    <div className="absolute top-4 right-4 px-2.5 py-1 border border-gold/35 text-gold font-mono text-[9px] tracking-wider uppercase">
                      Destaque
                    </div>
                  )}

                  <p className="font-mono text-[9px] tracking-[0.22em] text-gold uppercase mb-4">{artigo.categoria}</p>
                  <h3 className="font-serif text-xl font-medium text-ink mb-3 group-hover:text-gold transition-colors duration-300 leading-snug">
                    {artigo.titulo}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6 line-clamp-2">{artigo.resumo}</p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-faint text-[11px]">
                      <Calendar className="w-3 h-3" aria-hidden="true" />
                      {artigo.data}
                      <span className="mx-0.5">·</span>
                      <Clock className="w-3 h-3" aria-hidden="true" />
                      {artigo.tempoLeitura}
                    </div>
                    <div className="flex items-center gap-1.5 text-gold font-mono text-[9px] tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      LER <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-8 text-center">
          <p className="font-mono text-[10px] tracking-wider text-faint">
            Exibindo {artigosFiltrados.length} de {artigos.length} artigos
          </p>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {artigoSelecionado && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 overflow-y-auto"
            style={{ backgroundColor: "rgba(26,23,20,0.7)", backdropFilter: "blur(6px)" }}
            onClick={fecharArtigo}
          >
            <button
              onClick={fecharArtigo}
              className="fixed top-5 right-5 z-[60] p-2.5 bg-white border border-gold/25 text-muted hover:text-gold hover:border-gold transition-all duration-250 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              aria-label="Fechar artigo"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.article
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22,1,0.36,1] }}
              className="relative min-h-screen bg-white max-w-4xl mx-auto my-8 shadow-gold-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gold top bar */}
              <div className="h-[3px] w-full bg-gold" />

              <div className="pt-14 pb-10 px-7 sm:px-12">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 border border-gold/35 font-mono text-[9px] tracking-wider text-gold uppercase">{artigoSelecionado.categoria}</span>
                  <span className="flex items-center gap-1.5 text-faint text-xs"><Calendar className="w-3 h-3" />{artigoSelecionado.data}</span>
                  <span className="flex items-center gap-1.5 text-faint text-xs"><Clock className="w-3 h-3" />{artigoSelecionado.tempoLeitura} de leitura</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-light text-ink leading-[1.1] mb-6">
                  {artigoSelecionado.titulo}
                </h1>

                <div className="flex items-center gap-3 pb-8 mb-8 border-b" style={{ borderColor: "rgba(184,137,59,0.15)" }}>
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/25 bg-gold/5">
                    <User className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm text-ink font-medium">{artigoSelecionado.autor}</p>
                    <p className="font-mono text-[10px] text-muted">DRC Advogados</p>
                  </div>
                </div>

                {/* Highlight resumo */}
                <div className="p-5 mb-8 bg-ivory border-l-2 border-gold">
                  <p className="font-serif text-lg text-ink/80 italic leading-relaxed">{artigoSelecionado.resumo}</p>
                </div>

                <div className="text-muted text-[17px] leading-[1.85] whitespace-pre-line mb-10">
                  {artigoSelecionado.conteudo}
                </div>

                {/* Tags */}
                <div className="pt-8 border-t mb-8" style={{ borderColor: "rgba(184,137,59,0.15)" }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
                    <span className="font-mono text-[9px] tracking-wider text-muted uppercase">Tags</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {artigoSelecionado.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-ivory border border-gold/20 font-mono text-[10px] text-muted hover:border-gold/50 hover:text-gold transition-all duration-250 cursor-pointer">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 mb-10">
                  <button className="flex items-center gap-2 px-4 py-2.5 border border-gold/25 text-muted font-mono text-[10px] tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-250 cursor-pointer">
                    <Share2 className="w-3.5 h-3.5" /> Compartilhar
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2.5 border border-gold/25 text-muted font-mono text-[10px] tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-250 cursor-pointer">
                    <Bookmark className="w-3.5 h-3.5" /> Salvar
                  </button>
                </div>

                {/* CTA inline */}
                <div className="p-7 sm:p-8 bg-ivory border border-gold/20">
                  <h3 className="font-serif text-2xl font-light text-ink mb-2">Precisa de orientação sobre este tema?</h3>
                  <p className="text-muted text-sm mb-6">Nossa equipe está pronta para ajudar com soluções jurídicas personalizadas.</p>
                  <a
                    href="https://wa.me/5511912252450" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-white font-mono text-[10px] tracking-wider uppercase hover:bg-gold-deep transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                  >
                    Falar com Especialista <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
