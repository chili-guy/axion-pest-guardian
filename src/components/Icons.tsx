import React from 'react';

export const Icons = {
  Leaf: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96A1 1 0 0 1 21 3.8c0 7.76-3.7 11.78-8 13.2"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6"/>
    </svg>
  ),
  Shield: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  Home: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  Store: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m2 7 2-4h16l2 4"/>
      <path d="M4 7v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7"/>
      <path d="M12 7v14"/><path d="M4 11h16"/>
    </svg>
  ),
  Factory: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M2 20V9l6 4V9l6 4V9l6 4v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z"/>
      <path d="M17 13v-3"/><path d="M8 20v-5"/><path d="M13 20v-5"/>
    </svg>
  ),
  Check: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Arrow: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  Plus: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  Whatsapp: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  ),
  Phone: (p: React.SVGProps<SVGSVGElement>) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>),
  Pin: (p: React.SVGProps<SVGSVGElement>) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>),
  Clock: (p: React.SVGProps<SVGSVGElement>) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
  Mail: (p: React.SVGProps<SVGSVGElement>) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>),
  Spray: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="8" y="10" width="8" height="12" rx="1"/>
      <rect x="9.5" y="5" width="5" height="5"/>
      <line x1="3" y1="5" x2="7" y2="5"/>
      <line x1="3" y1="8" x2="6" y2="8"/>
      <line x1="3" y1="2" x2="6" y2="2"/>
    </svg>
  ),
  Bug: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M8 2l1.88 1.88"/><path d="M14.12 3.88 16 2"/>
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/>
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/>
      <path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/>
      <path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/>
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/>
      <path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/>
    </svg>
  ),
  Scorpion: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="14" r="3"/>
      <path d="M9 14c-2 0-4-1-4-3"/><path d="M15 14c2 0 4-1 4-3"/>
      <path d="M5 11V9"/><path d="M19 11V9"/>
      <path d="M12 11V5"/><path d="M12 5l-2-2"/><path d="M12 5l2-2"/>
      <path d="M10 17c-1 1-2 2-4 2"/><path d="M14 17c1 1 2 2 4 2"/>
    </svg>
  ),
  Spider: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="13" r="4"/>
      <path d="M4 8l4 3"/><path d="M2 13h6"/><path d="M4 18l4-2"/>
      <path d="M20 8l-4 3"/><path d="M22 13h-6"/><path d="M20 18l-4-2"/>
      <path d="M10 9l-1-3"/><path d="M14 9l1-3"/>
    </svg>
  ),
  Mouse: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 17c0-4 4-7 8-7s8 3 8 7"/>
      <circle cx="17" cy="10" r="2"/><circle cx="20" cy="7" r="2"/>
      <circle cx="13" cy="15" r="0.8" fill="currentColor"/>
      <path d="M4 17c-1 0-2 1-2 2"/>
    </svg>
  ),
  Mosquito: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 10c2 0 3 1 3 3s-1 3-3 3-3-1-3-3 1-3 3-3Z"/>
      <path d="M9 11 4 7"/><path d="M15 11l5-4"/>
      <path d="M9 13 4 15"/><path d="M15 13l5 2"/>
      <path d="M12 16v5"/><path d="M12 10V6"/>
    </svg>
  ),
  Termite: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <ellipse cx="12" cy="14" rx="3" ry="5"/>
      <circle cx="12" cy="7" r="2"/>
      <path d="M12 5V3"/><path d="M11 4l-1-1"/><path d="M13 4l1-1"/>
      <path d="M9 13H6"/><path d="M15 13h3"/>
      <path d="M9 16H6"/><path d="M15 16h3"/>
    </svg>
  ),
  Fly: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <ellipse cx="12" cy="13" rx="2.5" ry="4"/>
      <path d="M9 10c-3-1-5-3-5-5"/><path d="M15 10c3-1 5-3 5-5"/>
      <path d="M10 11c-2 0-4-1-5-2"/><path d="M14 11c2 0 4-1 5-2"/>
    </svg>
  ),
  Tick: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <ellipse cx="12" cy="13" rx="5" ry="4"/>
      <path d="M7 13 4 11"/><path d="M7 13l-3 2"/>
      <path d="M17 13l3-2"/><path d="M17 13l3 2"/>
      <path d="M10 9l-1-3"/><path d="M14 9l1-3"/>
    </svg>
  ),
  Ant: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="6" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="18" r="2"/>
      <path d="M10 7l-3-2"/><path d="M14 7l3-2"/>
      <path d="M10 12H6"/><path d="M14 12h4"/>
      <path d="M10 17l-3 2"/><path d="M14 17l3 2"/>
    </svg>
  ),
  Bedbug: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <ellipse cx="12" cy="13" rx="5" ry="6"/>
      <path d="M12 7V5"/><path d="M11 6l-1-1"/><path d="M13 6l1-1"/>
      <path d="M7 11H5"/><path d="M17 11h2"/>
      <path d="M7 15H5"/><path d="M17 15h2"/>
    </svg>
  ),
  Tank: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 8v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"/>
      <ellipse cx="12" cy="8" rx="7" ry="2.5"/>
      <path d="M9 14c1 1 2 1 3 0s2-1 3 0"/>
    </svg>
  ),
};
