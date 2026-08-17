/* ============================================================
   MEDCORE — iconos e ilustraciones (sistema visual v2)
   Isotipo "El Núcleo": una forma orgánica que combina célula +
   red neuronal + núcleo de conocimiento. Vector propio, sin
   dependencias externas, funciona offline y escala a cualquier
   tamaño (sidebar, favicon, avatar, portada).
   ============================================================ */

function brandMarkSVG(){
  return `
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="coreGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#5267E8"/>
        <stop offset="100%" stop-color="#9B8AF2"/>
      </linearGradient>
    </defs>
    <!-- órbitas / conexiones -->
    <path d="M24 6c9 0 16 6 16 12s-9 8-16 8-16-2-16-8 7-12 16-12Z" fill="none" stroke="#9B8AF2" stroke-width="1.6" opacity="0.55"/>
    <path d="M9 18c0-7 7-13 15-13s15 7 13 15-11 11-19 9S9 25 9 18Z" fill="none" stroke="#5267E8" stroke-width="1.6" opacity="0.35"/>
    <!-- nodos periféricos -->
    <circle cx="10" cy="16" r="2.6" fill="#F28B7B"/>
    <circle cx="38" cy="14" r="2.2" fill="#78C9A3"/>
    <circle cx="34" cy="34" r="2.4" fill="#9B8AF2"/>
    <circle cx="12" cy="33" r="2" fill="#5267E8"/>
    <!-- núcleo central -->
    <circle cx="24" cy="24" r="10.5" fill="url(#coreGrad)"/>
    <circle cx="21" cy="21" r="3" fill="rgba(255,255,255,0.35)"/>
  </svg>`;
}

/* ---------- iconos pequeños de la cascada (usan currentColor, el color lo da la clase .cascade-icon.<categoria>) ---------- */
const CASCADE_ICONS = {
  trigger: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" stroke-linejoin="round"/></svg>`,
  cell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none"/><circle cx="16.2" cy="9" r="1.1" fill="currentColor" stroke="none"/><circle cx="8.3" cy="15" r="1.1" fill="currentColor" stroke="none"/></svg>`,
  mediator: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="6" cy="7" r="2"/><circle cx="18" cy="7" r="2"/><circle cx="12" cy="17" r="2"/><path d="M7.6 8.3 10.5 15.4M16.4 8.3 13.5 15.4M8 7h8"/></svg>`,
  structural: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 8l9-4 9 4-9 4-9-4Z"/><path d="M3 12l9 4 9-4M3 16l9 4 9-4"/></svg>`,
  physiological: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M2 12h4l2-7 4 14 2-9 2 5h6" stroke-linejoin="round" stroke-linecap="round"/></svg>`,
  clinical: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 21s-7-4.6-9.6-9.1C.8 8.6 2.3 5 6 5c2 0 3.3 1 4 2.2C10.7 6 12 5 14 5c3.7 0 5.2 3.6 3.6 6.9C15 16.4 12 21 12 21Z" stroke-linejoin="round"/></svg>`
};

function cascadeCategoryFor(pasoNombre){
  const key = (pasoNombre||'').toLowerCase();
  if(key.includes('desencaden')) return 'trigger';
  if(key.includes('célula') || key.includes('celula')) return 'cell';
  if(key.includes('mediador')) return 'mediator';
  if(key.includes('estructural')) return 'structural';
  if(key.includes('fisiológ') || key.includes('fisiolog')) return 'physiological';
  return 'clinical';
}
function cascadeIconFor(pasoNombre){
  return CASCADE_ICONS[cascadeCategoryFor(pasoNombre)];
}

/* ---------- ilustración: vía aérea, estilo "medical doodle premium" ----------
   Formas orgánicas, líneas suaves, colores planos de la paleta MEDCORE.
   normal = mint/lavanda ; obstruida = coral/alerta */
function airwayIllustration(modo){
  const estrecho = modo === 'obstructivo';
  return `
  <svg viewBox="0 0 520 190" width="100%" height="auto" role="img" aria-label="Corte transversal de vía aérea, normal comparada con la enfermedad">
    <!-- normal -->
    <g transform="translate(24,14)">
      <circle cx="86" cy="80" r="74" fill="#f1eefd"/>
      <circle cx="86" cy="80" r="56" fill="#e9f6ef" stroke="#78C9A3" stroke-width="9"/>
      <circle cx="86" cy="80" r="56" fill="none" stroke="#5267E8" stroke-width="1.2" stroke-dasharray="2 5" opacity="0.4"/>
      <text x="86" y="170" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#6b6b82" letter-spacing="0.02em">Vía aérea normal</text>
    </g>
    <!-- flecha -->
    <g transform="translate(226,86)">
      <path d="M0 0 C 20 -14, 40 -14, 60 0" fill="none" stroke="#9B8AF2" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M54 -7 L62 0 L53 5 Z" fill="#9B8AF2"/>
    </g>
    <!-- afectada -->
    <g transform="translate(322,14)">
      <circle cx="86" cy="80" r="74" fill="#fdece8"/>
      ${estrecho
        ? `<circle cx="86" cy="80" r="56" fill="#fbebec" stroke="#D95C65" stroke-width="24"/>
           <circle cx="86" cy="80" r="22" fill="#fdece8" stroke="#F28B7B" stroke-width="4"/>`
        : `<circle cx="86" cy="80" r="56" fill="#e9f6ef" stroke="#78C9A3" stroke-width="9"/>`
      }
      <text x="86" y="170" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#a5333c" letter-spacing="0.02em">Vía aérea enferma</text>
    </g>
  </svg>`;
}
