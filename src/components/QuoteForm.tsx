'use client';
import React, { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { submitQuoteAction } from '@/app/actions';

export function QuoteForm({ compact }: { compact?: boolean }) {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", local: "", problem: "" });
  const [errors, setErrors] = useState<any>({});
  const [isPending, startTransition] = useTransition();

  const maskPhone = (v: string) => {
    return v.replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d)(\d{4})$/, "$1-$2")
      .substring(0, 15);
  };

  const update = (k: string, v: string) => { 
    const finalVal = k === 'phone' ? maskPhone(v) : v;
    setForm(s => ({ ...s, [k]: finalVal })); 
    setErrors((e: any) => ({ ...e, [k]: null })); 
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: any = {};
    if (!form.name.trim()) errs.name = "Informe seu nome";
    if (!form.phone.trim() || form.phone.replace(/\D/g,'').length < 10) errs.phone = "Telefone inválido";
    if (!form.local) errs.local = "Selecione o local";
    if (!form.problem) errs.problem = "Selecione o problema";
    
    if (Object.keys(errs).length) { 
      setErrors(errs); 
      return; 
    }

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('phone', form.phone);
    formData.append('local', form.local);
    formData.append('problem', form.problem);

    window.location.href = '/contato-obrigado';
    submitQuoteAction(formData).catch(() => {});
  };

  return (
    <form className="quote-card" onSubmit={submit}>
      {!compact && <>
        <h3>Solicite seu orçamento grátis</h3>
        <p className="sub">Resposta em até 30 minutos. Sem compromisso.</p>
      </>}
      <div className="form-row">
        <label>Nome completo</label>
        <input 
          type="text" 
          placeholder="Como devemos te chamar?" 
          value={form.name} 
          onChange={e => update("name", e.target.value)} 
          disabled={isPending}
        />
        {errors.name && <small className="field-error">{errors.name}</small>}
      </div>
      <div className="form-row two">
        <div>
          <label>Telefone / WhatsApp</label>
          <input 
            type="tel" 
            placeholder="(19) 99999-9999" 
            value={form.phone} 
            onChange={e => update("phone", e.target.value)} 
            disabled={isPending}
          />
          {errors.phone && <small className="field-error">{errors.phone}</small>}
        </div>
        <div>
          <label>Local</label>
          <select 
            value={form.local} 
            onChange={e => update("local", e.target.value)}
            disabled={isPending}
          >
            <option value="">Selecione…</option>
            <option>Residência</option><option>Comércio</option>
            <option>Indústria</option><option>Condomínio</option><option>Outros</option>
          </select>
          {errors.local && <small className="field-error">{errors.local}</small>}
        </div>
      </div>
      <div className="form-row">
        <label>Qual o problema?</label>
        <select 
          value={form.problem} 
          onChange={e => update("problem", e.target.value)}
          disabled={isPending}
        >
          <option value="">Selecione…</option>
          <option>Gostaria de uma avaliação</option>
          <option>Cupim</option><option>Escorpião</option>
          <option>Baratas</option><option>Carrapatos e Pulgas</option><option>Ratos</option>
          <option>Percevejos</option><option>Mosquitos</option><option>Formigas</option>
          <option>Limpeza de Caixa d'água</option>
        </select>
        {errors.problem && <small className="field-error">{errors.problem}</small>}
      </div>
      <button 
        type="submit" 
        className={`form-submit ${isPending ? 'loading' : ''}`}
        disabled={isPending}
      >
        {isPending ? 'Enviando...' : 'Solicitar orçamento grátis →'}
      </button>
    </form>
  );
}
