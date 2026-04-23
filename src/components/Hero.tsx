'use client';
import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { submitQuoteAction } from '@/app/actions';

const WA_LINK_HERO = "https://api.whatsapp.com/send/?phone=5519989769353&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento.";

const HERO_PHOTOS = [
  { src: "/assets/photo-hero.jpg", alt: "Carro Axion e programa de controle de roedores" },
  { src: "/assets/photo-car-house.jpg", alt: "Atendimento residencial em condomínio de alto padrão" },
  { src: "/assets/photo-spray-side.jpg", alt: "Técnico Axion com EPI completo em aplicação" },
  { src: "/assets/photo-bait-station.jpg", alt: "Instalação de isca monitorada em área externa" },
  { src: "/assets/photo-school.jpg", alt: "Dedetização em escola — Maple Bear Canadian School" },
  { src: "/assets/photo-restaurant.jpg", alt: "Controle de pragas em restaurante" },
  { src: "/assets/photo-hotel.jpg", alt: "Atendimento em rede hoteleira" },
  { src: "/assets/photo-car-rear.jpg", alt: "Frota Axion identificada" },
];

function HeroSlideshow() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % HERO_PHOTOS.length), 4500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="hero-visual">
      {HERO_PHOTOS.map((p, i) => (
        <img key={i}
             src={p.src}
             alt={p.alt}
             className={`hero-slide ${i === idx ? 'active' : ''}`}
             loading={i === 0 ? 'eager' : 'lazy'}/>
      ))}
      <div className="hero-slide-dots" role="tablist" aria-label="Galeria do hero">
        {HERO_PHOTOS.map((_, i) => (
          <button key={i}
                  aria-label={`Foto ${i+1}`}
                  aria-selected={i === idx}
                  className={`hero-dot ${i === idx ? 'active' : ''}`}
                  onClick={() => setIdx(i)}/>
        ))}
      </div>
    </div>
  );
}

function HeroMiniForm() {
  const [form, setForm] = useState({ name: "", phone: "", local: "Residência", problem: "Gostaria de uma avaliação" });
  const [sent, setSent] = useState(false);
  const [isPending, startTransition] = React.useTransition();

  const maskPhone = (v: string) => {
    return v.replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d)(\d{4})$/, "$1-$2")
      .substring(0, 15);
  };

  const update = (k: string, v: string) => {
    const finalVal = k === 'phone' ? maskPhone(v) : v;
    setForm(s => ({ ...s, [k]: finalVal }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || form.phone.replace(/\D/g,'').length < 10) return;
    
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('phone', form.phone);
    formData.append('local', form.local);
    formData.append('problem', form.problem);

    startTransition(async () => {
      const result = await submitQuoteAction(formData);
      if (result.success) {
        setSent(true);
      } else {
        alert(result.message || "Erro ao enviar. Tente novamente.");
      }
    });
  };

  return (
    <form className="hero-mini-form" onSubmit={submit}>
      {sent ? (
        <div className="hero-mini-success">✓ Recebemos sua solicitação! Retornaremos em até 30 minutos.</div>
      ) : (
        <>
          <div className="hero-mini-fields">
            <div className="hero-mini-field">
              <label>Nome</label>
              <input 
                type="text" 
                placeholder="Digite seu nome" 
                value={form.name} 
                onChange={e => update("name", e.target.value)} 
                required 
                disabled={isPending}
              />
            </div>
            <div className="hero-mini-field">
              <label>Telefone</label>
              <input 
                type="tel" 
                placeholder="Digite seu telefone" 
                value={form.phone} 
                onChange={e => update("phone", e.target.value)} 
                required 
                disabled={isPending}
              />
            </div>
            <div className="hero-mini-field">
              <label>Local</label>
              <select 
                value={form.local} 
                onChange={e => update("local", e.target.value)}
                disabled={isPending}
              >
                <option>Residência</option><option>Comércio</option>
                <option>Indústria</option><option>Condomínio</option><option>Outros</option>
              </select>
            </div>
            <div className="hero-mini-field">
              <label>Problema</label>
              <select 
                value={form.problem} 
                onChange={e => update("problem", e.target.value)}
                disabled={isPending}
              >
                <option>Gostaria de uma avaliação</option>
                <option>Cupim</option><option>Escorpião</option>
                <option>Baratas</option><option>Carrapatos e Pulgas</option><option>Ratos</option>
                <option>Percevejos</option><option>Mosquitos</option><option>Formigas</option>
                <option>Limpeza de Caixa d'água</option>
              </select>
            </div>
          </div>
          <button 
            type="submit" 
            className={`hero-mini-submit ${isPending ? 'loading' : ''}`}
            disabled={isPending}
          >
            {isPending ? 'Enviando...' : 'Solicitar Orçamento Grátis'}
          </button>
        </>
      )}
    </form>
  );
}

export function Hero() {
  return (
    <section className="hero hero-a" id="inicio">
      <div className="container">
        <div>
          <span className="eyebrow">Controle de Pragas · Saúde Ambiental</span>
          <h1>Dedetização profissional<br/>com <span className="accent">garantia</span></h1>
          <p className="lead">
            Eliminamos pragas com produtos certificados pela ANVISA, equipe técnica
            especializada e garantia total no serviço — para residências, empresas e
            indústrias no Brasil, EUA e Portugal.
          </p>
          <div className="hero-ctas">
            <a href={WA_LINK_HERO} target="_blank" rel="noopener" className="btn btn-primary"><Icons.Whatsapp width="16" height="16"/> Solicitar orçamento</a>
            <a href="#servicos" className="btn btn-ghost">Ver serviços <Icons.Arrow width="16" height="16"/></a>
          </div>
          <div className="trust">
            <span className="stars">★★★★★</span>
            <span>5/5 · +5.000 clientes atendidos</span>
          </div>
        </div>
        <HeroSlideshow/>
      </div>
      <div className="container hero-mini-wrap">
        <HeroMiniForm/>
      </div>
    </section>
  );
}
