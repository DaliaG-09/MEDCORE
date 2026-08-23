/* ============================================================
   MEDCORE — Cuadernos de práctica hospitalaria
   ------------------------------------------------------------
   Cada sesión viene de audios reales de práctica transcritos y
   reorganizados por tema (no en orden cronológico de la
   conversación). Se reutiliza el mismo motor de resaltado
   (highlight.js) y de apuntes (notes.js) que el resto de MEDCORE,
   así que esto funciona exactamente como un cuaderno: puedes
   subrayar, resaltar en 3 colores y escribir encima igual que en
   cualquier enfermedad.

   Cómo agregar un día nuevo: copia un objeto de HOSPITAL_SESIONES,
   cambia id/semana/dia/titulo/resumen, y arma "secciones" con el
   contenido ya organizado por tema. "extras" dentro de una sección
   son las cajas de color: tarea (naranja, algo que el Dr. dejó
   pendiente/para investigar), vocab (verde, palabras o sufijos
   nuevos) y nota (morado, un complemento mío aclarando o
   contextualizando algo — siempre diferenciado del contenido del
   Dr., nunca inventando datos clínicos que no se dijeron en clase).
   ============================================================ */

const HOSPITAL_SESIONES = [
  {
    id: 'sem1-jueves',
    semana: 1,
    dia: 'Jueves',
    titulo: 'Fibrosis pulmonar (patrón UIP) + AGA paso a paso',
    resumen: 'Caso clínico de un varón con asma y TB antigua, disnea progresiva y crépitos tipo velcro. Interpretación de gases arteriales y hallazgo de panalización en la tomografía.',
    secciones: [
      {
        titulo: '🧍 El caso, en corto',
        cuerpo: `
          <p>Varón con antecedente de <strong>asma desde la niñez</strong> y <strong>tuberculosis pulmonar tratada de forma completa a los 40 años</strong>. Fumador importante durante ~50 años y con exposición ocupacional a disolventes (toner, thinner, pinturas) sin mascarilla. Tiene perro y gato en casa.</p>
          <p>Ingresa por <strong>disnea progresiva</strong> (llegó a mMRC 4), <strong>tos productiva verdosa</strong> y saturación de 87% en emergencia. Al examen: <strong>crépitos tipo velcro bibasales</strong>. La tomografía muestra <strong>panalización bibasal</strong> con enfisema en lóbulos superiores — patrón compatible con <strong>UIP / Fibrosis Pulmonar Idiopática</strong>, posiblemente combinada con enfisema (síndrome CPFE).</p>
        `
      },
      {
        titulo: '📋 Antecedentes que el Dr. resaltó como clave',
        cuerpo: `
          <ul>
            <li><strong>Ocupacional:</strong> toner, thinner, pinturas — sin mascarilla.</li>
            <li><strong>Tabaquismo:</strong> ~50 años fumando, 5-6 cigarrillos/día → pack-year ≈ 12.5.</li>
            <li><strong>Mascotas:</strong> perro y gato → alergenos por pelaje, relevante si el asma tiene fenotipo alérgico.</li>
            <li><strong>Humedad en casa:</strong> manchas oscuras/salitre en paredes → posible neumonitis por hipersensibilidad.</li>
            <li><strong>Aves (propias o del vecino):</strong> palomas, gallinas → antígenos aviares, otra causa de hipersensibilidad.</li>
            <li><strong>Vida en pareja / hijos:</strong> relevante para descartar enfermedades congénitas asociadas a infertilidad (ej. déficit de alfa-1-antitripsina en bronquiectasias sin causa clara).</li>
            <li><strong>Viajes:</strong> importan por endemias — selva (fiebre amarilla), cuevas (histoplasmosis), sierra (alimentos con parásitos).</li>
            <li><strong>COVID:</strong> no importa tanto si lo tuvo, sino si estuvo <strong>hospitalizado o en UCI</strong> — eso sí sugiere secuela.</li>
            <li><strong>Familiares:</strong> madre/padre con diabetes; no hay asma ni TB familiar confirmada.</li>
          </ul>
        `,
        extras: [
          {
            tipo: 'tarea',
            texto: 'Para la próxima clase: calcular cuántos pack-year se consideran factor de riesgo para (1) problemas cardíacos, (2) EPOC, y (3) cáncer pulmonar. El Dr. lo pidió como un "screening" rápido que debemos saber de memoria.'
          },
          {
            tipo: 'tarea',
            texto: 'Agregar de forma permanente a la anamnesis: preguntar siempre si hay zonas húmedas en la casa (manchas oscuras o blancas/salitre en las paredes), no solo cuando el paciente lo menciona espontáneamente.'
          },
          {
            tipo: 'vocab',
            items: [
              { term: 'Pack-year (paquete-año)', def: 'Cigarrillos por día ÷ 20, multiplicado por los años fumando. Cuantifica el consumo acumulado de tabaco y se usa para estimar riesgo de EPOC, cáncer pulmonar y enfermedad cardiovascular.' },
              { term: 'Fenotipo alérgico del asma', def: 'Uno de los subtipos de asma; en este fenotipo sí tiene sentido buscar alergenos (mascotas, ácaros, pólenes) como desencadenantes.' }
            ]
          }
        ]
      },
      {
        titulo: '🕐 Enfermedad actual: tiempo de enfermedad vs. episodio actual',
        cuerpo: `
          <p>El Dr. insistió en <strong>separar dos cosas que suelen confundirse</strong>: el <em>tiempo de enfermedad</em> (desde cuándo existe la condición de base — en este caso, el asma desde la niñez) y el <em>episodio actual</em> (la exacerbación puntual que lo trajo al hospital, en este caso hace aproximadamente una semana).</p>
          <p>Como el paciente tiene síntomas basales (disnea y tos con los que ya convive), hay que preguntar específicamente <strong>qué cambió</strong> en los últimos días: ¿empezó a toser más?, ¿la tos se volvió productiva?, ¿hizo fiebre?, ¿la disnea empeoró de escala? Eso es lo que define el episodio actual, no la enfermedad de fondo.</p>
          <p>Un dato que el residente no había registrado como síntoma principal, pero que sí apareció al preguntar directamente: <strong>pérdida de peso</strong> — relevante para pensar en cronicidad/progresión de la enfermedad de base.</p>
        `,
        extras: [
          {
            tipo: 'vocab',
            items: [
              { term: 'mMRC', def: 'Escala de disnea del 0 al 4 (Modified Medical Research Council). El paciente progresó de mMRC 3 a mMRC 4.' }
            ]
          }
        ]
      },
      {
        titulo: '🩺 Examen físico',
        cuerpo: `
          <p><strong>Signos vitales:</strong> SpO2 94% (con cánula binasal a 1 L/min — en emergencia había llegado a estar sobre 87% sin ese soporte), FC 74, FR 21, PA 120/60, T° 37.5°C.</p>
          <p><strong>Auscultación pulmonar:</strong> crépitos tipo velcro, gruesos, predominio en bases y en la parte posterior — signo clásico de fibrosis pulmonar.</p>
          <p><strong>Orden de examen que pidió el Dr. (para no saltarse nada):</strong> estado general → piel → tórax (buscando tirajes y adenopatías) → cardiovascular → abdomen → genitourinario (puño percusión) → sistema nervioso central (Glasgow y orientación en tiempo/espacio/persona).</p>
        `,
        extras: [
          {
            tipo: 'vocab',
            items: [
              { term: 'FiO2', def: 'Fracción inspirada de oxígeno. Al aire ambiental es 21%. Con cánula binasal sube aproximadamente 4% por cada litro: 1L=24%, 2L=28%, 3L=32%, 4L=36%, 5L=40%. El tope útil de la cánula binasal es 5-6 L/min (~40-44%); más que eso no aumenta el aporte real.' }
            ]
          },
          {
            tipo: 'nota',
            texto: 'Sobre el orden de orientación (pregunta que quedó abierta en clase): la enseñanza clásica de semiología es que primero se pierde la orientación en tiempo, luego en espacio, y lo último en perderse es el reconocimiento de las personas. Vale la pena confirmarlo con tu docente o con Harrison antes de usarlo como dato de examen, porque en el audio no llegó a confirmarse la respuesta.'
          }
        ]
      },
      {
        titulo: '🧪 Análisis de Gases Arteriales (AGA) — el método paso a paso',
        cuerpo: `
          <p>Así lo enseñó el Dr., en orden:</p>
          <ol>
            <li><strong>pH</strong> (normal 7.35–7.45). En este paciente: 7.43 — dentro de rango.</li>
            <li><strong>PaO2:</strong> define insuficiencia respiratoria si es menor a 60 mmHg.</li>
            <li><strong>PaCO2</strong> (normal ~36–44) y <strong>bicarbonato</strong> (normal 22–26): para saber si el trastorno es respiratorio o metabólico. Acá: PaCO2 28 (bajo) y bicarbonato ~18 (bajo).</li>
            <li><strong>Exceso de bases</strong> (normal −2 a +2): dentro de ese rango, el problema es respiratorio; fuera de rango, es metabólico. Acá: −3.8 → problema metabólico.</li>
            <li><strong>Compensación esperada:</strong> si el bicarbonato baja, el cuerpo intenta compensar bajando también el CO2 (para no acidificar más la sangre). El descenso del CO2 debería ser aproximadamente proporcional al descenso del bicarbonato.</li>
          </ol>
          <p><strong>Lectura final del caso:</strong> acidosis metabólica ya compensada (por eso el pH terminó normal a pesar del bicarbonato y CO2 bajos).</p>
        `,
        extras: [
          {
            tipo: 'vocab',
            items: [
              { term: 'Sufijo -emia', def: 'Indica una condición de la sangre. pH bajo = acidemia. pH alto = alcalemia.' },
              { term: '"Eutremia" (tal como se escuchó en clase)', def: 'Usado por el Dr. para referirse a un pH normal. El audio no permite confirmar la ortografía exacta del término — vale la pena preguntarlo directamente o verificarlo en tu bibliografía antes de anotarlo como definitivo.' }
            ]
          },
          {
            tipo: 'tarea',
            texto: 'Revisar la fórmula del anión gap — el Dr. lo dejó pendiente ("vamos a quedar hasta ahí, pero quiero que revisen todo") para cuando el trastorno primario es metabólico.'
          },
          {
            tipo: 'nota',
            texto: 'Para completar lo que quedó pendiente: el anión gap se calcula como Na⁺ − (Cl⁻ + HCO3⁻), con un valor normal aproximado de 8 a 12 mEq/L. Se usa para subclasificar la acidosis metabólica en "con anión gap elevado" o "con anión gap normal", según la causa. Esto no se dijo así en el audio — es un complemento mío para que tengas de dónde partir, pero confírmalo con Harrison/tus guías antes de darlo por definitivo para un examen.'
          }
        ]
      },
      {
        titulo: '🩻 Imágenes: radiografía y tomografía de tórax',
        cuerpo: `
          <p><strong>Radiografía normal (repaso de regiones):</strong> supraclavicular, infraclavicular, hiliar/parahiliar, cardíaca/paracardíaca (o "basales"). Una placa bien tomada tiene ángulos costofrénicos libres, el hemidiafragma derecho ~1-1.5 cm más alto que el izquierdo, y la relación cardiotorácica debe ser menor a la mitad del tórax.</p>
          <p><strong>Hallazgo en este paciente:</strong> opacidades reticulares lineales bilaterales de predominio en bases (patrón intersticial), y el tronco de la arteria pulmonar medía 2.5 (normal hasta 1.5) — sugiere hipertensión pulmonar.</p>
          <p><strong>Tomografía:</strong> se ve "casquete apical" (engrosamiento subpleural bilateral), enfisema centrolobulillar en lóbulos superiores, engrosamiento septal interlobulillar, quistes subpleurales, y <strong>panalización ("panal de abeja") bibasal</strong> — el hallazgo más característico del patrón UIP / Fibrosis Pulmonar Idiopática. Como este paciente combina fibrosis en bases con enfisema arriba, el Dr. lo relacionó con el síndrome <strong>CPFE</strong> (combinación de enfisema y fibrosis pulmonar).</p>
          <p><strong>Dato anatómico que remarcó:</strong> el lóbulo medio del pulmón derecho <strong>solo se examina bien por cara anterior</strong> — si solo auscultas espalda, te lo pierdes.</p>
        `,
        extras: [
          {
            tipo: 'vocab',
            items: [
              { term: 'Radiopaco / radiolúcido', def: 'Vocabulario de radiografía: radiopaco = zonas claras/blancas; radiolúcido = zonas oscuras.' },
              { term: 'Hipodenso / hiperdenso', def: 'El equivalente de radiopaco/radiolúcido pero en tomografía — ahí ya no se habla de "regiones" sino de lóbulos y segmentos.' },
              { term: 'Casquete apical', def: 'Engrosamiento subpleural bilateral en los vértices pulmonares, visible en TC.' },
              { term: 'Panalización / panal de abeja (honeycombing)', def: 'Imágenes quísticas confluentes en las bases pulmonares — el signo tomográfico más típico del patrón UIP.' },
              { term: 'CPFE', def: 'Combined Pulmonary Fibrosis and Emphysema — síndrome que combina enfisema (usualmente en lóbulos superiores) con fibrosis pulmonar (usualmente en bases).' }
            ]
          },
          {
            tipo: 'nota',
            texto: 'Dato para tu repaso: el síndrome CPFE tiene una particularidad fisiológica — el enfisema puede "compensar" en la espirometría los volúmenes pulmonares que la fibrosis reduce, por lo que a veces la función pulmonar luce menos afectada de lo que en realidad está el pulmón. Vale la pena profundizarlo en Harrison o Farreras para tu exposición.'
          }
        ]
      },
      {
        titulo: '🗂️ Diagnósticos y plan de trabajo',
        cuerpo: `
          <p><strong>Síndromes planteados:</strong> síndrome de dificultad respiratoria (a confirmar/descartar insuficiencia respiratoria real con AGA), síndrome parenquimal/intersticial, asma (por historia clínica, como diagnóstico adicional), y posible secuela post-tuberculosis como diagnóstico diferencial a no olvidar.</p>
          <p><strong>Se descartó:</strong> síndrome constitucional puro (no había pérdida de peso reciente reportada como síntoma principal, aunque sí se encontró al preguntar directamente).</p>
          <p><strong>Plan de trabajo pedido:</strong> placa de tórax + tomografía de tórax sin contraste, análisis de gases arteriales, hemograma, PCR (proteína C reactiva), cultivo de esputo para gérmenes comunes, BK/PCR en esputo para descartar TB, y panel viral. Los cultivos y el panel viral salieron negativos, alejando la posibilidad de infección activa como causa de la exacerbación.</p>
        `
      }
    ]
  }
];

/* ---------- render de las cajas de color dentro de una sección ---------- */
function renderHospitalExtra(ex){
  if(ex.tipo === 'tarea'){
    return `
      <div class="tarea-box">
        <div class="tb-label">📌 Tarea del Dr.</div>
        <p>${ex.texto}</p>
      </div>`;
  }
  if(ex.tipo === 'vocab'){
    return `
      <div class="vocab-box">
        <div class="vb-label">🆕 Vocabulario / sufijos nuevos</div>
        <ul>${ex.items.map(it => `<li><strong>${it.term}</strong> — ${it.def}</li>`).join('')}</ul>
      </div>`;
  }
  if(ex.tipo === 'nota'){
    return `
      <div class="nota-claude-box">
        <div class="nc-label">💡 Complemento (Claude)</div>
        <p>${ex.texto}</p>
      </div>`;
  }
  return '';
}

function getHospitalSesion(id){ return HOSPITAL_SESIONES.find(s => s.id === id); }

function openHospitalSesion(id){
  const s = getHospitalSesion(id);
  if(!s) return;
  navPush('hospital-sesion', id, `${s.dia} · Sem ${s.semana}`);
}

function renderHospitalSesion(id){
  const wrap = document.getElementById('view-hospital-sesion-content');
  const s = getHospitalSesion(id);
  if(!s){ wrap.innerHTML = '<p class="muted">Esta sesión todavía no existe.</p>'; return; }

  const seccionesHTML = s.secciones.map((sec, i) => `
    <div class="kcard hl-zone" data-hl-key="${s.id}::sec${i}">
      <h3>${sec.titulo}</h3>
      ${sec.cuerpo}
      ${(sec.extras || []).map(renderHospitalExtra).join('')}
    </div>
  `).join('');

  wrap.innerHTML = `
    <span class="eyebrow">Hospital · Semana ${s.semana} · ${s.dia}</span>
    <h1 class="page-title">📓 ${s.titulo}</h1>
    <p class="page-sub">${s.resumen}</p>

    <div class="kcard" style="background: var(--cream); border-style:dashed;">
      <p class="muted" style="margin:0; font-size:12.5px;">
        Reorganizado por tema a partir de tus audios transcritos (no en el orden exacto de la conversación).
        <span style="color:#9a6b1a; font-weight:700;">Naranja</span> = algo que el Dr. dejó como tarea o pendiente ·
        <span style="color:#2f7a57; font-weight:700;">Verde</span> = vocabulario o sufijos nuevos ·
        <span style="color:#5c4fb8; font-weight:700;">Morado</span> = un complemento mío, siempre marcado aparte de lo que dijo el Dr.
        Puedes seleccionar cualquier texto para resaltarlo (3 colores) igual que en el resto de MEDCORE.
      </p>
    </div>

    ${seccionesHTML}

    ${noteBlockHTML('hospital::' + s.id + '::apuntes', 'Escribe aquí tus propias notas, dudas o lo que quieras recordar de este día de hospital…')}
  `;

  restoreZoneHighlights('#view-hospital-sesion-content');
}
