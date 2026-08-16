/* ============================================================
   MEDCORE — iconos e ilustraciones
   Todo SVG hecho a mano: iconos pequeños para la cascada
   fisiopatológica y una ilustración grande por enfermedad.
   Ilustraciones propias -> funcionan offline, sin depender de
   imágenes externas ni de derechos de autor de terceros.
   ============================================================ */

const CASCADE_ICONS = {
  trigger: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" stroke-linejoin="round"/></svg>`,
  cell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none"/><circle cx="16.2" cy="9" r="1.1" fill="currentColor" stroke="none"/><circle cx="8.3" cy="15" r="1.1" fill="currentColor" stroke="none"/></svg>`,
  mediator: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="7" r="2"/><circle cx="18" cy="7" r="2"/><circle cx="12" cy="17" r="2"/><path d="M7.6 8.3 10.5 15.4M16.4 8.3 13.5 15.4M8 7h8"/></svg>`,
  structural: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 8l9-4 9 4-9 4-9-4Z"/><path d="M3 12l9 4 9-4M3 16l9 4 9-4"/></svg>`,
  physiological: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 12h4l2-7 4 14 2-9 2 5h6" stroke-linejoin="round" stroke-linecap="round"/></svg>`,
  clinical: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7-4.6-9.6-9.1C.8 8.6 2.3 5 6 5c2 0 3.3 1 4 2.2C10.7 6 12 5 14 5c3.7 0 5.2 3.6 3.6 6.9C15 16.4 12 21 12 21Z" stroke-linejoin="round"/></svg>`
};

function cascadeIconFor(pasoNombre){
  const key = (pasoNombre||'').toLowerCase();
  if(key.includes('desencaden')) return CASCADE_ICONS.trigger;
  if(key.includes('célula') || key.includes('celula')) return CASCADE_ICONS.cell;
  if(key.includes('mediador')) return CASCADE_ICONS.mediator;
  if(key.includes('estructural')) return CASCADE_ICONS.structural;
  if(key.includes('fisiológ') || key.includes('fisiolog')) return CASCADE_ICONS.physiological;
  return CASCADE_ICONS.clinical;
}

/* Ilustración grande: corte transversal de vía aérea, normal vs. enfermedad.
   Se reutiliza para cualquier enfermedad respiratoria pasando un "modo":
   'obstructivo' (EPOC/asma) engrosa la pared y estrecha la luz. */
function airwayIllustration(modo){
  const estrecho = modo === 'obstructivo';
  return `
  <svg viewBox="0 0 520 200" width="100%" height="auto" role="img" aria-label="Corte transversal de vía aérea, normal comparada con la enfermedad">
    <!-- normal -->
    <g transform="translate(20,20)">
      <circle cx="90" cy="80" r="78" fill="none" stroke="#dfe3e8" stroke-width="2"/>
      <circle cx="90" cy="80" r="60" fill="#fbeee0" stroke="#eecfa4" stroke-width="10"/>
      <circle cx="90" cy="80" r="60" fill="none" stroke="#d98a3d" stroke-width="1.5" stroke-dasharray="3 4" opacity="0.5"/>
      <text x="90" y="175" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#4b5a6b" letter-spacing="0.06em">VÍA AÉREA NORMAL</text>
    </g>
    <!-- flecha -->
    <g transform="translate(230,90)">
      <line x1="0" y1="0" x2="55" y2="0" stroke="#2f5a8a" stroke-width="2"/>
      <path d="M50 -6 L60 0 L50 6 Z" fill="#2f5a8a"/>
    </g>
    <!-- afectada -->
    <g transform="translate(320,20)">
      <circle cx="90" cy="80" r="78" fill="none" stroke="#dfe3e8" stroke-width="2"/>
      ${estrecho
        ? `<circle cx="90" cy="80" r="60" fill="#fbeae8" stroke="#ecb8b3" stroke-width="26"/>
           <circle cx="90" cy="80" r="24" fill="#fbeee0" stroke="#d98a3d" stroke-width="4"/>`
        : `<circle cx="90" cy="80" r="60" fill="#fbeee0" stroke="#eecfa4" stroke-width="10"/>`
      }
      <text x="90" y="175" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#7a2b26" letter-spacing="0.06em">VÍA AÉREA ENFERMA</text>
    </g>
  </svg>`;
}
