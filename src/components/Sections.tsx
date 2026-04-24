'use client';
import React from 'react';
import { Icons } from './Icons';
import { QuoteForm } from './QuoteForm';

const WA_LINK = "https://api.whatsapp.com/send/?phone=5519989769353&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento.";

export function Segments() {
  const items = [
    { icon: <Icons.Home width="26" height="26"/>, title: "Residências",
      desc: "Proteção completa para sua família. Produtos sem odor forte, seguros para crianças e pets." },
    { icon: <Icons.Store width="26" height="26"/>, title: "Comércios",
      desc: "Restaurantes, hotéis, escritórios. Laudos técnicos e certificados para vigilância sanitária." },
    { icon: <Icons.Factory width="26" height="26"/>, title: "Indústrias",
      desc: "Controle contínuo com relatórios mensais, protocolos rigorosos e atendimento especializado." },
  ];
  return (
    <section className="segments" id="segmentos">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Atendimento completo</span>
          <h2>Soluções para cada tipo de espaço</h2>
          <p>Independente do porte ou segmento, a Axion entrega um plano de controle adequado à realidade do seu ambiente.</p>
        </div>
        <div className="segments-grid">
          {items.map((it, i) => (
            <div key={i} className="segment-card">
              <div className="icon">{it.icon}</div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
              <div className="arrow"><Icons.Arrow width="20" height="20"/></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  const bullets = [
    { t: "Mais de 10 anos no mercado", d: "Atuação nacional e internacional — Brasil, EUA e Portugal." },
    { t: "Certificações ANVISA, IBAMA e ISO", d: "Insumos homologados e normas da União Europeia atendidas." },
    { t: "Resposta em até 30 minutos", d: "Equipe comercial ágil com agendamento para o mesmo dia." },
    { t: "Garantia documentada", d: "Laudo técnico completo e retorno gratuito se a praga reaparecer." },
  ];
  return (
    <section className="about" id="sobre">
      <div className="container">
        <div className="about-grid">
          <div className="about-media">
            <img src="/assets/photo-bait-station.jpg" alt="Técnico Axion instalando isca monitorada" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
          </div>
          <div>
            <span className="eyebrow">Por que escolher a Axion</span>
            <h2 style={{marginTop:14}}>Padrão premium em cada detalhe.</h2>
            <p className="lead">
              A Axion une tecnologia de ponta, rigor técnico e atendimento humanizado para
              entregar resultados que duram — com a tranquilidade que você merece.
            </p>
            <div className="about-bullets">
              {bullets.map((b, i) => (
                <div key={i} className="about-bullet">
                  <div className="check"><Icons.Check width="16" height="16"/></div>
                  <div><b>{b.t}</b><span>{b.d}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Quote() {
  return (
    <section className="quote-section" id="orcamento">
      <div className="container">
        <div className="quote-grid">
          <div>
            <span className="eyebrow">Orçamento gratuito</span>
            <h2 style={{marginTop:14}}>Peça sua avaliação sem compromisso.</h2>
            <p className="lead" style={{color:'var(--ax-gray-dark)', margin:'18px 0 28px', fontSize:'1.05rem', lineHeight:1.65}}>
              Preencha o formulário ao lado e um especialista Axion retorna em até <b style={{color:'var(--ax-navy)'}}>30 minutos</b>.
              Avaliação técnica no mesmo dia, orçamento transparente, sem pegadinhas.
            </p>
            <div className="quote-features">
              <div className="quote-feat"><Icons.Check width="18" height="18"/> <span>Atendimento em até 30 minutos</span></div>
              <div className="quote-feat"><Icons.Check width="18" height="18"/> <span>Vistoria técnica gratuita</span></div>
              <div className="quote-feat"><Icons.Check width="18" height="18"/> <span>Produtos certificados ANVISA</span></div>
              <div className="quote-feat"><Icons.Check width="18" height="18"/> <span>Garantia documentada</span></div>
            </div>
            <div style={{marginTop:28, paddingTop:24, borderTop:'1px solid var(--ax-line)', display:'flex', gap:20, alignItems:'center', flexWrap:'wrap'}}>
              <div style={{fontSize:13, color:'var(--ax-gray)'}}>Prefere falar direto?</div>
              <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-blue"><Icons.Whatsapp width="16" height="16"/> WhatsApp</a>
              <a href="tel:+5519989769353" className="btn btn-ghost"><Icons.Phone width="16" height="16"/> (19) 98976-9353</a>
            </div>
          </div>
          <div>
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Partners() {
  const logos = [
    { name: "IBAMA", src: "https://images.seeklogo.com/logo-png/34/2/ibama-logo-png_seeklogo-342675.png", height: 180 },
    { name: "ANVISA", src: "https://images.seeklogo.com/logo-png/33/2/anvisa-logo-png_seeklogo-335317.png", height: 250 },
    { name: "ISO 9001", src: "https://images.seeklogo.com/logo-png/17/2/iso-9001-logo-png_seeklogo-171579.png", height: 180 },
  ];
  
  return (
    <section className="partners" id="parceiros">
      <div className="container">
        <div className="partners-head"><p>Certificações, registros e reconhecimento</p></div>
        <div className="partner-static-grid">
          {logos.map((l, i) => (
            <div key={i} className="partner-logo-static">
              <img src={l.src} alt={l.name} style={{ height: `${l.height}px`, width: 'auto' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pests() {
  const [selectedPest, setSelectedPest] = React.useState<any>(null);
  
  const pests = [
    { 
      n: "Dedetização Residencial", 
      s: "Proteção completa para sua família.", 
      d: "Eliminamos pragas em casas e apartamentos com produtos sem odor forte, seguros para crianças e pets.",
      tags: ["Casas", "Apartamentos", "Condomínios"],
      I: Icons.Home
    },
    { 
      n: "Dedetização Comercial", 
      s: "Soluções corporativas e industriais.", 
      d: "Para restaurantes, hotéis e escritórios. Inclui laudos técnicos e certificados para vigilância sanitária.",
      tags: ["Laudos", "Certificados", "Empresas"],
      I: Icons.Store
    },
    { 
      n: "Controle de Ratos", 
      s: "Desratização inteligente.", 
      d: "Uso de iscas atrativas e barreiras físicas de última geração para proteger seu patrimônio.",
      tags: ["Iscas", "Monitoramento", "Vedação"],
      I: Icons.Mouse
    },
    { 
      n: "Controle de Baratas", 
      s: "Eliminação definitiva de focos.", 
      d: "Tratamento com gel inodoro e líquido residual em frestas e ralos para controle total.",
      tags: ["Gel inodoro", "Ação Residual"],
      I: Icons.Bug
    },
    { 
      n: "Controle de Cupins", 
      s: "Proteção estrutural permanente.", 
      d: "Descupinização com barreira química e injeção no solo para evitar danos em móveis e estruturas.",
      tags: ["Cupim de Solo", "Estruturas"],
      I: Icons.Termite
    },
    { 
      n: "Controle de Formigas", 
      s: "Fim das trilhas e invasões.", 
      d: "Combate a cortadeiras e espécies urbanas em jardins, cozinhas e áreas industriais.",
      tags: ["Saúvas", "Urbanas", "Indústrias"],
      I: Icons.Ant
    },
  ];

  const openWhatsApp = (pestName: string) => {
    const msg = encodeURIComponent(`Olá, gostaria de saber mais sobre o serviço de ${pestName}.`);
    window.open(`https://api.whatsapp.com/send/?phone=5519989769353&text=${msg}`, '_blank');
  };

  return (
    <section className="pests" id="servicos">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Soluções Corporativas & Residenciais</span>
          <h2>Controle de Pragas em Nível Premium</h2>
          <p>Tratamentos de alta performance, seguros para pessoas e pets, com laudos técnicos certificados.</p>
        </div>

        <div className="pests-grid">
          {pests.map((p, i) => (
            <div key={i} className="pest-card-premium" onClick={() => setSelectedPest(p)}>
              <div className="pest-icon-wrap"><p.I width={48} height={48} /></div>
              <h3>{p.n}</h3>
              <p>{p.d}</p>
              
              <div className="pest-tags">
                {p.tags.map((t, idx) => <span key={idx} className="pest-tag">{t}</span>)}
              </div>

              <div className="pest-footer">
                <button 
                  className="pest-cta-link" 
                  onClick={(e) => { e.stopPropagation(); openWhatsApp(p.n); }}
                >
                  Solicitar serviço <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{textAlign:'center', marginTop:72}}>
          <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-outline" style={{padding:'20px 40px'}}>Nossos Diferenciais</a>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedPest && (
        <div className="pest-modal-overlay" onClick={() => setSelectedPest(null)}>
          <div className="pest-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedPest(null)}>×</button>
            <div className="modal-icon"><selectedPest.I width={80} height={80} stroke="var(--ax-blue)" /></div>
            <h2>{selectedPest.n}</h2>
            <p className="subtitle">{selectedPest.s}</p>
            <div className="details-text">
              <p>{selectedPest.d}</p>
              <p>Utilizamos tecnologia de ponta para identificação de focos e aplicação geolocalizada. Todos os nossos produtos possuem registro na ANVISA e são aplicados seguindo os mais rígidos protocolos de segurança ambiental.</p>
            </div>
            <div className="modal-footer">
              <button 
                className="btn btn-primary w-full" 
                onClick={() => openWhatsApp(selectedPest.n)}
              >
                Solicitar Orçamento Grátis
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { n: 1, tag: "Gratuito e sem compromisso", title: "Solicite o Orçamento",
      items: ["Contato via WhatsApp, telefone ou site", "Resposta em até 30 minutos", "Proposta personalizada"] },
    { n: 2, tag: "Diagnóstico preciso", title: "Vistoria Técnica",
      items: ["Inspeção detalhada", "Identificação de pragas e focos", "Mapeamento de pontos vulneráveis"] },
    { n: 3, tag: "Produtos certificados", title: "Aplicação Profissional",
      items: ["Produtos ANVISA homologados", "Técnicas de aplicação precisas", "Seguros para crianças e pets"] },
    { n: 4, tag: "Garantia documentada", title: "Garantia & Laudo",
      items: ["Laudo técnico completo", "Retorno gratuito se reaparecer", "Acompanhamento pós-serviço"] },
  ];
  return (
    <section className="how" id="como-funciona">
      <div className="container" style={{position:'relative'}}>
        <div className="section-head">
          <span className="eyebrow">Como funciona</span>
          <h2>Do orçamento à garantia em 4 etapas</h2>
          <p>Processo transparente e eficiente para resolver seu problema com pragas de uma vez por todas.</p>
        </div>
        <div className="steps-grid">
          {steps.map(s => (
            <div key={s.n} className="step-card">
              <div className="num">{s.n}</div>
              <div style={{fontSize:11, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--ax-blue-light)', fontWeight:600, marginBottom:8}}>{s.tag}</div>
              <h4>{s.title}</h4>
              <ul>{s.items.map((i, k) => <li key={k}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const items = [
    { name: "Juliana Martins", role: "Proprietária de restaurante", text: "Atendimento impecável! Tinham baratas na cozinha e em menos de 24h a Axion resolveu completamente. Laudos entregues no mesmo dia — essencial para nossa vigilância sanitária.", init: "JM", color: "#6366f1" },
    { name: "Carlos Andrade", role: "Síndico de condomínio", text: "Profissionalismo do início ao fim. Contratamos para dedetização completa do condomínio e os moradores elogiaram muito. Preço justo e resultado excelente.", init: "CA", color: "#8b5cf6" },
    { name: "Rafael Santos", role: "Proprietário residencial", text: "Problema sério de cupins resolvido em 2 dias. A Axion fez vistoria gratuita, apresentou orçamento detalhado e entregou com garantia de 6 meses. Recomendo demais!", init: "RS", color: "#ec4899" },
    { name: "Patrícia Lima", role: "Gestora de hotel", text: "Atenderam em emergência no mesmo dia. Produtos sem odor, hotel operando normalmente. Fechamos parceria mensal. Equipe muito educada e pontual.", init: "PL", color: "#3b82f6" },
    { name: "Marcos Ferreira", role: "Gerente industrial", text: "Nossa indústria exige rigoroso controle de pragas. A Axion entrega relatórios mensais, segue todos os protocolos e nunca nos deixou na mão. Parceiros de longa data.", init: "MF", color: "#10b981" },
    { name: "Ana Costa", role: "Mãe de família", text: "Ficava preocupada por causa das crianças e do cachorro. A Axion usou produtos seguros, explicou cada etapa e o resultado foi perfeito. Ótimo atendimento!", init: "AC", color: "#f59e0b" },
  ];

  const row1 = [...items.slice(0, 3)];
  const row2 = [...items.slice(3, 6)];

  return (
    <section className="testimonials" id="depoimentos" style={{overflow:'hidden'}}>
      <div className="container" style={{marginBottom: 48}}>
        <div className="section-head">
          <span className="eyebrow">Depoimentos</span>
          <h2>Clientes que confiam na Axion</h2>
          <p>5 / 5 — baseado em +300 avaliações verificadas</p>
        </div>
      </div>

      <div className="testimonial-rows">
        {/* Linha 1: Esquerda */}
        <div className="testimonial-track-wrap">
          <div className="testimonial-track track-left">
            {[...row1, ...row1, ...row1, ...row1].map((t, i) => (
              <div key={i} className="testi-card">
                <div className="stars">★★★★★</div>
                <p>"{t.text}"</p>
                <div className="author">
                  <div className="av" style={{backgroundColor: t.color}}>{t.init}</div>
                  <div className="info">
                    <div className="name">{t.name}</div>
                    <div className="role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Linha 2: Direita */}
        <div className="testimonial-track-wrap" style={{marginTop: 32}}>
          <div className="testimonial-track track-right">
            {[...row2, ...row2, ...row2, ...row2].map((t, i) => (
              <div key={i} className="testi-card">
                <div className="stars">★★★★★</div>
                <p>"{t.text}"</p>
                <div className="author">
                  <div className="av" style={{backgroundColor: t.color}}>{t.init}</div>
                  <div className="info">
                    <div className="name">{t.name}</div>
                    <div className="role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const items = [
    { tag: "Atendimento Residencial", subtag: "Condomínio alto padrão", src: "/assets/photo-car-house.jpg", cls: "g-a" },
    { tag: "Controle de Roedores", subtag: "Programa com laudo técnico", src: "/assets/photo-spray-side.jpg", cls: "g-b" },
    { tag: "Dedetização Escolar", subtag: "Maple Bear Canadian School", src: "/assets/photo-school.jpg", cls: "g-c" },
    { tag: "Aplicação Externa", subtag: "Técnico com EPI completo", src: "/assets/photo-rodent-report.jpg", cls: "g-d" },
    { tag: "Isca Monitorada", subtag: "Área residencial externa", src: "/assets/photo-bait-station.jpg", cls: "g-e" },
    { tag: "Dedetização Comercial", subtag: "Restaurante · total discrição", src: "/assets/photo-restaurant.jpg", cls: "g-f" },
    { tag: "Atendimento Hotel", subtag: "Rede hoteleira · plano mensal", src: "/assets/photo-hotel.jpg", cls: "g-g" },
    { tag: "Frota Axion", subtag: "Identificada e pontual", src: "/assets/photo-car-rear.jpg", cls: "g-h" },
  ];
  return (
    <section id="galeria" className="gallery-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Galeria de fotos</span>
          <h2>Nossa equipe em ação</h2>
          <p>Trabalho real em residências, escolas, hotéis, restaurantes e indústrias. Equipe certificada, uniformizada e equipada com os melhores insumos do mercado.</p>
        </div>
        <div className="bento-grid">
          {items.map((it, i) => (
            <figure key={i} className={`bento-item ${it.cls}`}>
              <img src={it.src} alt={it.tag} loading="lazy"/>
              <figcaption>
                <div className="bento-tag">{it.tag}</div>
                <div className="bento-sub">{it.subtag}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="bento-cta">
          <div>
            <h3>Veja mais no nosso Instagram</h3>
            <p>Compartilhamos diariamente bastidores, atendimentos e dicas de prevenção.</p>
          </div>
          <a href="https://www.instagram.com/grupoaxionbrasil" target="_blank" rel="noopener" className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            @grupoaxionbrasil
          </a>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const items = [
    { q: "Os produtos utilizados são seguros para crianças e pets?",
      a: "Sim. Todos os insumos possuem registro na ANVISA, com baixa toxicidade e sem odor forte. Orientamos apenas um pequeno intervalo de ventilação após a aplicação." },
    { q: "Quanto tempo dura o efeito de uma dedetização?",
      a: "Em média de 3 a 6 meses, dependendo do tipo de praga e do ambiente. Para estabelecimentos comerciais, recomendamos um plano de manutenção periódica." },
    { q: "Vocês emitem laudo para Vigilância Sanitária?",
      a: "Sim. Emitimos laudo técnico completo e certificado válidos para fiscalização da Vigilância Sanitária, ANVISA, IBAMA e demais órgãos reguladores." },
    { q: "Atendem em emergência fora do horário comercial?",
      a: "Sim. Oferecemos atendimento 24h para emergências. Pragas não esperam — nós também não." },
    { q: "Vocês atendem fora do Brasil?",
      a: "Sim. A Axion opera no Brasil, Estados Unidos e Portugal, atendendo empresas com unidades internacionais e protocolos da União Europeia." },
    { q: "Existe garantia do serviço?",
      a: "Sim. Oferecemos garantia documentada com retorno gratuito caso a praga reapareça dentro do prazo contratado." },
  ];
  return (
    <section id="faq" style={{background:'var(--ax-bg-soft)'}}>
      <div className="container">
        <div className="faq-grid">
          <div className="faq-intro">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2>Tire suas dúvidas antes de contratar.</h2>
            <p>Reunimos as perguntas que mais recebemos no dia a dia. Se a sua não estiver aqui, fale com a gente pelo WhatsApp.</p>
            <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-primary"><Icons.Whatsapp width="16" height="16"/> Falar com especialista</a>
          </div>
          <div className="faq-list">
            {items.map((it, i) => (
              <details key={i} className="faq-item">
                <summary>{it.q}<div className="toggle"><Icons.Plus width="16" height="16"/></div></summary>
                <div className="content">{it.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTAFinal() {
  return (
    <section className="cta-final" id="contato">
      <div className="container">
        <div>
          <span className="eyebrow">Resposta em até 30 minutos</span>
          <h2 style={{marginTop:14}}>Resolva seu problema com pragas hoje mesmo.</h2>
          <p>Orçamento gratuito, atendimento rápido e garantia total no serviço. Fale com nossa equipe agora.</p>
          <div className="cta-actions">
            <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-light"><Icons.Whatsapp width="16" height="16"/> Solicitar Orçamento Grátis</a>
            <a href="tel:+5519989769353" className="btn btn-ghost" style={{color:'#fff', borderColor:'rgba(255,255,255,.3)'}}><Icons.Phone width="16" height="16"/> (19) 98976-9353</a>
          </div>
          <div style={{display:'flex', gap:20, flexWrap:'wrap', marginTop:28, color:'rgba(255,255,255,.8)', fontSize:13}}>
            <span>✓ Orçamento gratuito</span>
            <span>✓ Atendimento rápido</span>
            <span>✓ Garantia documentada</span>
            <span>✓ Laudo técnico incluso</span>
            <span>✓ Seguro para pets</span>
          </div>
        </div>
        <div className="cta-photo">
          <img src="/assets/photo-car-rear.jpg" alt="Carro Axion" />
        </div>
      </div>
    </section>
  );
}
