'use client';
import React from 'react';
import { Icons } from './Icons';

const WA_LINK = "https://api.whatsapp.com/send/?phone=5519989769353&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento.";

export function AxionLogo({ size = 44, variant = "default" }: { size?: number; variant?: string }) {
  const src = variant === "light" ? "/assets/logo-axion-light.png" : "/assets/logo-axion.png";
  return <img src={src} alt="Axion Environmental Solutions" style={{height: size, width: 'auto', display:'block'}}/>;
}

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Esconde o header ao chegar no rodapé (aproximadamente 300px do fundo)
      if (documentHeight - (scrollY + windowHeight) < 400) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${!isVisible ? 'is-hidden' : ''}`}>
        <div className="container">
          <a href="#inicio" className="logo" aria-label="Axion Environmental Solutions">
            <AxionLogo size={180}/>
          </a>
          <nav className="nav desktop-only">
            <a href="#servicos">Serviços</a>
            <a href="#como-funciona">Como Funciona</a>
            <a href="#sobre">Diferenciais</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="header-actions desktop-only" style={{display:'flex', alignItems:'center', gap:14, justifyContent:'flex-end'}}>
            <a href="tel:+5519989769353" style={{fontSize:13, color:'var(--ax-navy)', fontWeight:600, display:'flex', alignItems:'center', gap:6}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              (19) 98976-9353
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-primary">WhatsApp</a>
          </div>
          <button className="burger" aria-label="menu" onClick={() => setIsOpen(!isOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'is-open' : ''}`}>
        <div className="drawer-inner">
          <nav className="mobile-nav">
            <a href="#servicos" onClick={() => setIsOpen(false)}>Serviços</a>
            <a href="#como-funciona" onClick={() => setIsOpen(false)}>Como Funciona</a>
            <a href="#sobre" onClick={() => setIsOpen(false)}>Diferenciais</a>
            <a href="#depoimentos" onClick={() => setIsOpen(false)}>Depoimentos</a>
            <a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
          </nav>
          <div className="drawer-footer">
            <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-primary w-full">Solicitar Orçamento</a>
            <a href="tel:+5519989769353" className="tel-drawer">(19) 98976-9353</a>
          </div>
        </div>
        <div className="drawer-overlay" onClick={() => setIsOpen(false)}></div>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo footer-logo">
              <AxionLogo size={180} variant="light"/>
            </div>
            <p style={{marginTop:-40}}>Empresa especializada em controle de pragas e soluções ambientais. Atendemos residências, empresas e indústrias no Brasil, EUA e Portugal.</p>
            <div className="socials">
              <a href="https://www.instagram.com/grupoaxionbrasil" target="_blank" rel="noopener" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href={WA_LINK} target="_blank" rel="noopener" aria-label="WhatsApp"><Icons.Whatsapp width="16" height="16"/></a>
            </div>
          </div>
          <div>
            <h5>Navegação</h5>
            <ul>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#como-funciona">Como Funciona</a></li>
              <li><a href="#sobre">Diferenciais</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5>Atuação</h5>
            <ul>
              <li>🇧🇷 Brasil</li>
              <li>🇺🇸 Estados Unidos</li>
              <li>🇵🇹 Portugal</li>
            </ul>
            <h5 style={{marginTop:24}}>Certificações</h5>
            <ul><li>ANVISA · IBAMA · ISO</li></ul>
          </div>
          <div>
            <h5>Contato</h5>
            <div className="contact-line"><Icons.Phone width="16" height="16"/><div>(19) 98976-9353<br/><small style={{opacity:.6}}>WhatsApp disponível 24h</small></div></div>
            <div className="contact-line"><Icons.Mail width="16" height="16"/><div>comercial@axionenviromental.com.br</div></div>
            <div className="contact-line"><Icons.Pin width="16" height="16"/><div>Brasil · EUA · Portugal</div></div>
            <div className="contact-line"><Icons.Clock width="16" height="16"/><div>Atendimento 24h emergencial</div></div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Axion Enviromental Solutions. Todos os direitos reservados.</div>
          <div>ANVISA · IBAMA · ISO</div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return <a className="wa-float" href={WA_LINK} target="_blank" rel="noopener" aria-label="WhatsApp"><Icons.Whatsapp width="28" height="28" style={{position:'relative', zIndex:1}}/></a>;
}
