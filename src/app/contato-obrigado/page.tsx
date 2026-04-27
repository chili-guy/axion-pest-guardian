'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ContatoObrigado() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(12);

  useEffect(() => {
    if (seconds <= 0) { router.push('/'); return; }
    const t = setTimeout(() => setSeconds(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds, router]);

  return (
    <div className="obrigado-page">
      <div className="obrigado-bg-1" />
      <div className="obrigado-bg-2" />

      <nav className="obrigado-nav">
        <img src="/assets/logo-white.png" alt="Axion Environmental" height={36} />
      </nav>

      <main className="obrigado-main">
        <div className="obrigado-card">

          <div className="obrigado-icon">
            <div className="obrigado-icon-ring" />
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="24" fill="rgba(74,107,177,0.15)" />
              <path d="M14 25l7 7 13-14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <span className="obrigado-eyebrow">Mensagem enviada com sucesso</span>

          <h1 className="obrigado-title">
            Obrigado pelo<br />
            <span>seu contato!</span>
          </h1>

          <p className="obrigado-desc">
            Recebemos sua solicitação. Nossa equipe entrará em contato com você
            em até <strong>30 minutos</strong> pelo WhatsApp.
          </p>

          <div className="obrigado-steps">
            <p className="obrigado-steps-label">O que acontece agora?</p>
            {[
              { n: '01', t: 'Nossa equipe analisa sua solicitação' },
              { n: '02', t: 'Um especialista entra em contato pelo WhatsApp' },
              { n: '03', t: 'Agendamos a visita técnica no melhor horário para você' },
            ].map(({ n, t }) => (
              <div className="obrigado-step" key={n}>
                <span className="obrigado-step-num">{n}</span>
                <span className="obrigado-step-text">{t}</span>
              </div>
            ))}
          </div>

          <div className="obrigado-actions">
            <a href="https://wa.me/5519989769353" target="_blank" rel="noopener noreferrer" className="obrigado-btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Falar no WhatsApp agora
            </a>
            <a href="tel:+5519989769353" className="obrigado-btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.61a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.1 6.1l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              Ligar agora
            </a>
          </div>

          <div className="obrigado-footer">
            <a href="/" className="obrigado-back">
              ← Voltar ao início
            </a>
            <span className="obrigado-sep">·</span>
            <div className="obrigado-countdown">
              <svg width="28" height="28" viewBox="0 0 28 28">
                <circle cx="14" cy="14" r="11" stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="none"/>
                <circle
                  cx="14" cy="14" r="11"
                  stroke="#4a6bb1" strokeWidth="2" fill="none"
                  strokeDasharray={`${2 * Math.PI * 11}`}
                  strokeDashoffset={`${2 * Math.PI * 11 * (seconds / 12)}`}
                  strokeLinecap="round"
                  transform="rotate(-90 14 14)"
                  style={{ transition: 'stroke-dashoffset 1s linear' }}
                />
                <text x="14" y="18" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.5)">{seconds}</text>
              </svg>
              <span>Redirecionando em {seconds}s</span>
            </div>
          </div>

        </div>
      </main>

      <style>{`
        .obrigado-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #26326b 0%, #1e2a5a 50%, #111a3e 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
          font-family: var(--font-sans, "Archivo", system-ui, sans-serif);
        }
        .obrigado-bg-1 {
          position: absolute;
          top: -160px; right: -160px;
          width: 560px; height: 560px;
          border-radius: 50%;
          background: #4a6bb1;
          opacity: 0.06;
          filter: blur(80px);
          pointer-events: none;
        }
        .obrigado-bg-2 {
          position: absolute;
          bottom: -160px; left: -160px;
          width: 480px; height: 480px;
          border-radius: 50%;
          background: #4a6bb1;
          opacity: 0.08;
          filter: blur(80px);
          pointer-events: none;
        }
        .obrigado-nav {
          position: absolute;
          top: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }
        .obrigado-nav img {
          height: 36px;
          width: auto;
          object-fit: contain;
        }
        .obrigado-main {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 520px;
          padding: 120px 24px 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }
        .obrigado-card {
          width: 100%;
          text-align: center;
        }
        .obrigado-icon {
          position: relative;
          width: 96px; height: 96px;
          margin: 0 auto 32px;
        }
        .obrigado-icon-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(74,107,177,0.2);
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 0; }
        }
        .obrigado-icon svg {
          position: relative;
          width: 96px; height: 96px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4a6bb1, #26326b);
          border: 2px solid rgba(74,107,177,0.4);
          box-shadow: 0 0 40px rgba(74,107,177,0.35);
        }
        .obrigado-eyebrow {
          display: block;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 700;
          color: #6b85c4;
          margin-bottom: 12px;
        }
        .obrigado-title {
          font-size: clamp(2rem, 6vw, 3rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }
        .obrigado-title span {
          color: #4a6bb1;
        }
        .obrigado-desc {
          color: rgba(255,255,255,0.55);
          font-size: 1rem;
          line-height: 1.65;
          margin: 0 auto 32px;
          max-width: 380px;
        }
        .obrigado-desc strong { color: #fff; font-weight: 600; }
        .obrigado-steps {
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 32px;
          text-align: left;
        }
        .obrigado-steps-label {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin: 0 0 16px;
        }
        .obrigado-step {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }
        .obrigado-step:last-child { margin-bottom: 0; }
        .obrigado-step-num {
          flex-shrink: 0;
          width: 32px; height: 32px;
          border-radius: 8px;
          background: rgba(74,107,177,0.18);
          border: 1px solid rgba(74,107,177,0.3);
          color: #6b85c4;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .obrigado-step-text {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.65);
        }
        .obrigado-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }
        @media (min-width: 480px) {
          .obrigado-actions { flex-direction: row; }
        }
        .obrigado-btn-primary, .obrigado-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 24px;
          border-radius: 999px;
          font-size: 0.875rem;
          font-weight: 600;
          font-family: inherit;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          flex: 1;
        }
        .obrigado-btn-primary {
          background: #4a6bb1;
          color: #fff;
          box-shadow: 0 8px 24px rgba(74,107,177,0.35);
        }
        .obrigado-btn-primary:hover {
          transform: scale(1.03);
          box-shadow: 0 12px 32px rgba(74,107,177,0.45);
        }
        .obrigado-btn-secondary {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.18);
          color: #fff;
        }
        .obrigado-btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          transform: scale(1.03);
        }
        .obrigado-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: rgba(255,255,255,0.35);
          font-size: 0.875rem;
        }
        .obrigado-back {
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          transition: color 0.2s;
        }
        .obrigado-back:hover { color: rgba(255,255,255,0.65); }
        .obrigado-sep { color: rgba(255,255,255,0.15); }
        .obrigado-countdown {
          display: flex;
          align-items: center;
          gap: 8px;
        }
      `}</style>
    </div>
  );
}
