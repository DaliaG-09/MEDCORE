/* ============================================================
   MEDCORE — Cuadernos de práctica hospitalaria
   ------------------------------------------------------------
   Cada sesión viene de audios reales de práctica transcritos y
   reorganizados por tema (no en orden cronológico de la
   conversación). Reutiliza el mismo motor de resaltado
   (highlight.js) y de apuntes (notes.js) que el resto de MEDCORE.

   Tipos de caja dentro de una sección (campo "extras"):
   - pregunta : preguntas que el Dr. dijo que sí o sí se deben
                hacer en la anamnesis (color coral).
   - tarea    : encargos puntuales del Dr. para investigar/traer
                resueltos (color miel) — llevan un campo de
                respuesta editable debajo.
   - vocab    : vocabulario o sufijos nuevos (color menta).
   - nota     : un complemento mío aparte de lo dicho en clase,
                siempre diferenciado y nunca mezclado con el
                contenido del Dr. (color lavanda).
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
        tono: 'caso',
        cuerpo: `
          <p>Varón con antecedente de <strong>asma desde la niñez</strong> y <strong>tuberculosis pulmonar tratada de forma completa a los 40 años</strong>. Fumador importante durante ~50 años y con exposición ocupacional a disolventes (toner, thinner, pinturas) sin mascarilla. Tiene perro y gato en casa.</p>
          <p>Ingresa por <strong>disnea progresiva</strong> (llegó a mMRC 4), <strong>tos productiva verdosa</strong> y saturación de 87% en emergencia. Al examen: <strong>crépitos tipo velcro bibasales</strong>. La tomografía muestra <strong>panalización</strong> <em>("panal de abeja", grupos de espacios quísticos en las bases del pulmón — típico de fibrosis avanzada)</em> bibasal con enfisema en lóbulos superiores — patrón compatible con <strong>UIP</strong> <em>(patrón radiológico "Usual Interstitial Pneumonia", el más asociado a Fibrosis Pulmonar Idiopática)</em>, posiblemente combinada con enfisema (síndrome CPFE).</p>
        `
      },
      {
        titulo: '❗ Preguntas que sí o sí debes hacer, según el Dr.',
        tono: 'preguntas',
        cuerpo: `
          <p class="muted" style="margin-top:-4px;">Esto es distinto de la lista de antecedentes de abajo: acá está literalmente lo que el Dr. remarcó como pregunta obligatoria, con su propia justificación, para que la tengas de checklist antes de entrar a ver un paciente.</p>
          <p class="mis-notas">Completé el "por qué" de cada una con lo que tenías anotado en tu cuaderno — donde decía "buscar", ya lo investigué.</p>
        `,
        extras: [
          {
            tipo: 'pregunta',
            items: [
              { q: '¿Qué tipo de compuesto o elemento usaba en su trabajo (pinturas, tóner, thinner, solventes)? ¿Usaba mascarilla?', por: 'Exposición ocupacional a químicos como factor de riesgo respiratorio.' },
              { q: '¿Tiene algún hábito nocivo? Si fuma: ¿desde qué edad, cuántos cigarrillos al día, hasta qué edad? Si toma: ¿con qué frecuencia?', por: 'Para calcular el pack-year y estimar riesgo cardíaco, EPOC y cáncer pulmonar.' },
              { q: '¿Tiene animales en casa? (perro, gato)', por: 'El pelaje puede exacerbar el fenotipo alérgico del asma.' },
              { q: '¿Hay zonas húmedas en la casa? (manchas oscuras o blancas/salitre en las paredes)', por: 'Relacionado con hipersensibilidad tipo PIT — puede no mencionarlo si no se le pregunta directamente.' },
              { q: '¿Hay aves en casa o en casa de los vecinos? (gallinas, palomas)', por: 'Antígenos aviares → Neumonitis por sensibilidad (PIT), aunque no las críe él mismo, sino un vecino.' },
              { q: '¿En qué zona vive? (industrial, comercial — por ejemplo pollerías)', por: 'Contaminación y humo ambiental como factor de riesgo adicional.' },
              { q: '¿Consume drogas?', por: 'Antecedente tóxico estándar de la anamnesis.' },
              { q: 'Conducta sexual: ¿cuántas parejas/relaciones sexuales ha tenido? ¿Es estéril?', por: 'Como no tiene hijos, la esterilidad puede orientar a déficit de alfa-1-antitripsina.' },
              { q: '¿Ha viajado? ¿A dónde?', por: 'Huánuco → histoplasmosis. Selva → fiebre amarilla. Chanchamayo → hongos (paracoccidioidomicosis). Cada zona endémica tiene su propia enfermedad asociada.' },
              { q: 'Sobre COVID: no solo si lo tuvo — ¿fue asintomático o con síntomas?, ¿fue hospitalizado?, ¿estuvo en UCI?', por: 'Porque puede haber tenido neumonía por COVID, y eso sí deja secuela pulmonar — lo que importa es la severidad, no el diagnóstico en sí.' },
              { q: 'Antecedentes familiares: ¿asma, diabetes, hipertensión, TB en la familia?', por: 'Parte estándar de la historia, y en este caso sí salió positivo para diabetes.' }
            ]
          },
          {
            tipo: 'nota',
            texto: 'Sobre las siglas: tiene más sentido que haya sido EPID (Enfermedad Pulmonar Intersticial Difusa) y no "PIT". La Neumonitis por Hipersensibilidad es justo uno de los tipos de EPID que existen, y este mismo caso (patrón UIP + fibrosis) también cae dentro de esa categoría — por eso probablemente el Dr. lo mencionó así, agrupando ambas cosas. Confírmaselo directamente para tu examen.'
          },
          {
            tipo: 'nota',
            texto: 'Chanchamayo es zona endémica confirmada de Paracoccidioidomicosis (blastomicosis sudamericana), causada por el hongo Paracoccidioides brasiliensis — típica en agricultores de zonas de selva/ceja de selva. Se adquiere por inhalación del hongo desde el suelo.'
          }
        ]
      },
      {
        titulo: '🗺️ Mapa de zonas endémicas en Perú (orientado a neumología)',
        tono: 'zonas',
        cuerpo: `
          <p class="muted" style="margin-top:-4px;">Basado en datos del MINSA y estudios epidemiológicos revisados — para cuando preguntes por viajes o procedencia del paciente.</p>
          <ul class="endemic-list">
            <li><strong>Huánuco (Tingo María — "Cueva de las Lechuzas"), Pucallpa, Iquitos</strong><span>Histoplasmosis pulmonar — asociada a cuevas con guano de murciélagos/aves ("fiebre de Tingo María").</span></li>
            <li><strong>Chanchamayo / La Merced (Junín), Tingo María, Pucallpa, Iquitos, Lamas (San Martín)</strong><span>Paracoccidioidomicosis (blastomicosis sudamericana) — típica en agricultores de ceja de selva/selva baja.</span></li>
            <li><strong>Amazonas, Loreto, San Martín, Ucayali, Junín (Chanchamayo, Satipo), Huánuco, Madre de Dios, Cusco (selva), Ayacucho, Pasco, Puno, Huancavelica, Cajamarca (selva)</strong><span>Fiebre amarilla — zonas de selva alta/baja; se pregunta estado de vacunación.</span></li>
            <li><strong>Cajamarca, Lambayeque, La Libertad, Piura (valles interandinos del norte)</strong><span>Peste (bubónica y, más raro, neumónica) — endémica desde inicios del s. XX, con brotes recientes en La Libertad.</span></li>
            <li><strong>Lima, Callao, Loreto, Ucayali, Madre de Dios, Tacna, Ica</strong><span>Tuberculosis — Lima/Callao concentran ~55-60% de los casos del país; Loreto/Ucayali/Madre de Dios tienen las tasas más altas por habitante.</span></li>
          </ul>
        `
      },
      {
        titulo: '📋 Antecedentes del caso (ya aplicando el checklist de arriba)',
        tono: 'antecedentes',
        cuerpo: `
          <ul>
            <li><strong>Ocupacional:</strong> toner, thinner, pinturas — sin mascarilla.</li>
            <li><strong>Tabaquismo:</strong> ~50 años fumando, 5-6 cigarrillos/día → pack-year ≈ 12.5 (ver fórmula abajo).</li>
            <li><strong>Mascotas:</strong> perro y gato.</li>
            <li><strong>Humedad en casa:</strong> sí referida.</li>
            <li><strong>Familiares:</strong> madre/padre con diabetes; no hay asma ni TB familiar confirmada.</li>
            <li class="mis-notas">Zona donde vive: preguntar si es industrial o comercial (tú pusiste como ejemplo específico las pollerías).</li>
          </ul>

          <div class="formula-box">
            <div class="fb-label">🧮 Fórmula del pack-year (paquete-año)</div>
            <p class="fb-formula">Pack-year&nbsp; = &nbsp;(cigarrillos por día ÷ 20) &nbsp;×&nbsp; años fumando</p>
            <p class="fb-example">En este caso: (5 ÷ 20) × 50 años = 0.25 × 50 = <strong>12.5 pack-year</strong></p>
          </div>
        `,
        extras: [
          {
            tipo: 'tarea',
            texto: 'Para la próxima clase: calcular cuántos pack-year se consideran factor de riesgo para (1) problemas cardíacos, (2) EPOC, y (3) cáncer pulmonar. El Dr. lo pidió como un "screening" rápido que debemos saber de memoria.',
            respuestaKey: 'tarea-packyear'
          }
        ]
      },
      {
        titulo: '🕐 Enfermedad actual: tiempo de enfermedad vs. episodio actual',
        tono: 'enfermedad',
        cuerpo: `
          <p>El Dr. insistió en <strong>separar dos cosas que suelen confundirse</strong>: el <em>tiempo de enfermedad</em> (desde cuándo existe la condición de base — en este caso, el asma desde la niñez) y el <em>episodio actual</em> (la exacerbación puntual que lo trajo al hospital, en este caso hace aproximadamente una semana). <span class="mis-notas">Como lo anotaste: los síntomas principales, desde cuándo se originaron, y ver si desde ahí arranca el episodio actual — eso es justo lo que se llama "enfermedad actual".</span></p>
          <p>Como el paciente tiene síntomas basales (disnea y tos con los que ya convive), hay que preguntar específicamente <strong>qué cambió</strong> en los últimos días: ¿empezó a toser más?, ¿la tos se volvió productiva?, ¿hizo fiebre?, ¿la disnea empeoró de escala? Eso es lo que define el episodio actual, no la enfermedad de fondo. <span class="mis-notas">Tú misma marcaste en tu cuaderno que "ha faltado detallar el episodio actual" — o sea que esto quedó pendiente de completar en la historia real, no es que se te haya escapado a ti solamente.</span></p>
          <p><span class="mis-notas">Las tres preguntas base que anotaste para arrancar el motivo de consulta: ¿cuál fue el motivo por el que vino (emergencia o consultorio)?, ¿desde cuándo tiene los síntomas?, ¿qué otros síntomas se fueron asociando/apareciendo?</span></p>
          <p>Un dato que el residente no había registrado como síntoma principal, pero que sí apareció al preguntar directamente: <strong>pérdida de peso</strong> — relevante para pensar en cronicidad/progresión de la enfermedad de base.</p>
          <p><span class="mis-notas">El motivo de ingreso que anotaste, como síndrome: disnea + taquipnea + taquicardia.</span></p>

          <div class="scale-box">
            <div class="sb-label">📏 Escala mMRC de disnea <em>(Modified Medical Research Council, del 0 al 4)</em></div>
            <table class="scale-table">
              <tr><td>0</td><td>Disnea solo con ejercicio intenso.</td></tr>
              <tr><td>1</td><td>Disnea al caminar rápido o subir una pendiente leve.</td></tr>
              <tr><td>2</td><td>Camina más lento que otras personas de su edad, o debe detenerse a descansar caminando en plano.</td></tr>
              <tr><td>3</td><td>Se detiene a descansar después de caminar unos 100 metros o pocos minutos en plano.</td></tr>
              <tr class="scale-highlight"><td>4</td><td>Demasiada disnea para salir de casa, o disnea al vestirse/desvestirse.</td></tr>
            </table>
            <p class="muted" style="font-size:11.5px; margin:6px 0 0;">El paciente progresó de mMRC 3 a mMRC 4 — por eso se calificó como agravamiento real, no solo una molestia leve.</p>
          </div>
        `
      },
      {
        titulo: '🩺 Examen físico',
        tono: 'examen',
        cuerpo: `
          <p><strong>Signos vitales:</strong> SpO2 94% (con cánula binasal a 1 L/min — en emergencia había llegado a estar sobre 87% sin ese soporte), FC 74, FR 21, PA 120/60, T° 37.5°C.</p>
          <p><strong>Auscultación pulmonar:</strong> crépitos tipo velcro, gruesos, predominio en bases y en la parte posterior — signo clásico de fibrosis pulmonar.</p>
          <p class="mis-notas">Tu repaso de semiología de ruidos agregados, tal como lo anotaste en clase:</p>
          <ul class="mis-notas">
            <li>Si se <strong>palpan</strong> crépitos (no solo se auscultan) → orienta a enfisema (subcutáneo).</li>
            <li><strong>Asma:</strong> sibilancias predominan en la <strong>espiración</strong>.</li>
            <li><strong>Roncus:</strong> también en espiración.</li>
            <li><strong>"Piantes"</strong> (sibilancias más agudas): aparecen cuando los bronquios están bien cerrados/obstruidos.</li>
            <li><strong>Crépitos:</strong> se escuchan en la <strong>inspiración</strong>.</li>
            <li><strong>Subcrepitantes:</strong> indican compromiso de la vía aérea — se le pide al paciente que tosa para diferenciarlos (si cambian o desaparecen con la tos, confirman esto).</li>
            <li><strong>Tipo velcro:</strong> compromiso intersticial — es el crepitante más grueso, el que tiene este paciente.</li>
          </ul>
          <p><strong>Orden de examen que pidió el Dr. (para no saltarse nada):</strong> estado general → piel → tórax (buscando tirajes y adenopatías) → cardiovascular → abdomen → genitourinario (puño percusión) → sistema nervioso central (Glasgow y orientación en tiempo/espacio/persona). <span class="mis-notas">Como lo resumiste: primero armar el síndrome o la enfermedad con los hallazgos, y de ahí recién agregar los diagnósticos diferenciales — no al revés.</span></p>

          <div class="formula-box">
            <div class="fb-label">🫁 FiO2 según litros de cánula binasal</div>
            <table class="scale-table">
              <tr><td>Aire ambiental</td><td>21%</td></tr>
              <tr><td>1 L/min</td><td>24%</td></tr>
              <tr><td>2 L/min</td><td>28%</td></tr>
              <tr><td>3 L/min</td><td>32%</td></tr>
              <tr><td>4 L/min</td><td>36%</td></tr>
              <tr><td>5 L/min</td><td>40%</td></tr>
            </table>
            <p class="muted" style="font-size:11.5px; margin:6px 0 0;">Sube ~4% por cada litro. El tope útil de la cánula binasal es 5-6 L/min (~40-44%); dar más litros no aumenta el aporte real.</p>
          </div>
        `,
        extras: [
          {
            tipo: 'sugerencia',
            texto: 'Confirmado sobre el orden de orientación: la enseñanza clásica de semiología es que primero se pierde la orientación en tiempo, luego en espacio, y lo último en perderse es el reconocimiento de las personas (incluyéndose a uno mismo).'
          }
        ]
      },
      {
        titulo: '🧪 Análisis de Gases Arteriales (AGA) — el método paso a paso',
        tono: 'aga',
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

          <div class="aga-diagram">
            <div class="aga-label">🧭 Diagrama de compensación (los 4 trastornos primarios)</div>
            <div class="aga-grid">
              <div class="aga-cell">
                <div class="aga-title">Acidosis respiratoria</div>
                <div class="aga-row">pH <span class="arrow down">↓</span></div>
                <div class="aga-row">PaCO2 <span class="arrow up primary">↑</span> <em>(primario)</em></div>
                <div class="aga-row">HCO3 <span class="arrow up">↑</span> <em>(compensa)</em></div>
              </div>
              <div class="aga-cell">
                <div class="aga-title">Alcalosis respiratoria</div>
                <div class="aga-row">pH <span class="arrow up">↑</span></div>
                <div class="aga-row">PaCO2 <span class="arrow down primary">↓</span> <em>(primario)</em></div>
                <div class="aga-row">HCO3 <span class="arrow down">↓</span> <em>(compensa)</em></div>
              </div>
              <div class="aga-cell aga-current">
                <div class="aga-title">Acidosis metabólica <span class="aga-tag">← este caso</span></div>
                <div class="aga-row">pH <span class="arrow down">↓</span></div>
                <div class="aga-row">HCO3 <span class="arrow down primary">↓</span> <em>(primario)</em></div>
                <div class="aga-row">PaCO2 <span class="arrow down">↓</span> <em>(compensa)</em></div>
              </div>
              <div class="aga-cell">
                <div class="aga-title">Alcalosis metabólica</div>
                <div class="aga-row">pH <span class="arrow up">↑</span></div>
                <div class="aga-row">HCO3 <span class="arrow up primary">↑</span> <em>(primario)</em></div>
                <div class="aga-row">PaCO2 <span class="arrow up">↑</span> <em>(compensa)</em></div>
              </div>
            </div>
          </div>
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
            texto: 'Revisar la fórmula del anión gap — el Dr. lo dejó pendiente ("vamos a quedar hasta ahí, pero quiero que revisen todo") para cuando el trastorno primario es metabólico.',
            respuestaKey: 'tarea-aniongap'
          },
          {
            tipo: 'sugerencia',
            texto: 'Para completar lo que quedó pendiente: el anión gap se calcula como Na⁺ − (Cl⁻ + HCO3⁻), con un valor normal aproximado de 8 a 12 mEq/L. Se usa para subclasificar la acidosis metabólica en "con anión gap elevado" o "con anión gap normal", según la causa. Confírmalo con Harrison/tus guías antes de darlo por definitivo para un examen.'
          }
        ]
      },
      {
        titulo: '🩻 Imágenes: radiografía y tomografía de tórax',
        tono: 'imagenes',
        cuerpo: `
          <p><strong>Radiografía normal (repaso de regiones):</strong> supraclavicular, infraclavicular, hiliar/parahiliar, cardíaca/paracardíaca (o "basales"). Una placa bien tomada tiene ángulos costofrénicos libres, el hemidiafragma derecho ~1-1.5 cm más alto que el izquierdo, y la relación cardiotorácica debe ser menor a la mitad del tórax.</p>
          <p><strong>Hallazgo en este paciente:</strong> opacidades reticulares lineales bilaterales de predominio en bases (patrón intersticial), y el tronco de la arteria pulmonar medía 2.5 (normal hasta 1.5) — sugiere hipertensión pulmonar.</p>
          <p><strong>Tomografía:</strong> se ve "casquete apical" <em>(engrosamiento subpleural bilateral en los vértices del pulmón)</em>, enfisema centrolobulillar en lóbulos superiores, engrosamiento septal interlobulillar, quistes subpleurales, y <strong>panalización bibasal</strong> — el hallazgo más característico del patrón UIP / Fibrosis Pulmonar Idiopática. Como este paciente combina fibrosis en bases con enfisema arriba, el Dr. lo relacionó con el síndrome <strong>CPFE</strong> <em>(Combined Pulmonary Fibrosis and Emphysema — combinación de enfisema arriba y fibrosis en bases)</em>.</p>
          <p><strong>Dato anatómico que remarcó:</strong> el lóbulo medio del pulmón derecho <strong>solo se examina bien por cara anterior</strong> — si solo auscultas espalda, te lo pierdes.</p>

          <div class="schematic-box">
            <div class="sc-label">🖼️ Imagen referencial de panalización en TC <em>(no es la tomografía de este paciente — solo para que veas cómo se ve el patrón)</em></div>
            <img src="assets/referencia-panalizacion-tc.png" alt="Imagen referencial de panalización en TC" onclick="openImageLightbox('assets/referencia-panalizacion-tc.png')" style="max-width:280px; width:100%; border-radius:8px; display:block; margin:8px auto 4px; border:1px solid var(--line); cursor:zoom-in;">
            <p class="muted" style="font-size:11.5px; margin-top:2px;">Imagen de referencia general — no corresponde al paciente de este caso. Si consigues la TC real que vieron en clase, mándamela y la reemplazo.</p>
          </div>
        `,
        extras: [
          {
            tipo: 'vocab',
            items: [
              { term: 'Radiopaco / radiolúcido', def: 'Vocabulario de radiografía: radiopaco = zonas claras/blancas; radiolúcido = zonas oscuras.' },
              { term: 'Hipodenso / hiperdenso', def: 'El equivalente de radiopaco/radiolúcido pero en tomografía — ahí ya no se habla de "regiones" sino de lóbulos y segmentos.' }
            ]
          },
          {
            tipo: 'explicacion',
            texto: 'Qué es exactamente el patrón UIP: es el patrón radiológico/histológico más característico de la Fibrosis Pulmonar Idiopática (aunque también puede verse en otras EPID, como una neumonitis por hipersensibilidad crónica). En TC se define por: panalización (el hallazgo más específico), distribución basal y subpleural, bronquiectasias/bronquioloectasias de tracción, y ausencia de datos que sugieran otra causa (sin vidrio esmerilado extenso ni micronódulos). Si el patrón sale "típico" en la TC, a veces permite el diagnóstico sin necesidad de biopsia.'
          },
          {
            tipo: 'sugerencia',
            texto: 'El síndrome CPFE tiene una particularidad fisiológica: el enfisema puede "compensar" en la espirometría los volúmenes pulmonares que la fibrosis reduce, por lo que a veces la función pulmonar luce menos afectada de lo que en realidad está el pulmón. Vale la pena profundizarlo en Harrison o Farreras para tu exposición.'
          }
        ]
      },
      {
        titulo: '🗂️ Diagnósticos y plan de trabajo (lo que sí se dijo en clase)',
        tono: 'diagnostico',
        cuerpo: `
          <p><strong>Síndromes planteados:</strong> síndrome de dificultad respiratoria (a confirmar/descartar insuficiencia respiratoria real con AGA), síndrome parenquimal/intersticial, asma (por historia clínica, como diagnóstico adicional), y posible secuela post-tuberculosis como diagnóstico diferencial a no olvidar.</p>
          <p><strong>Se descartó:</strong> síndrome constitucional puro (no había pérdida de peso reciente reportada como síntoma principal, aunque sí se encontró al preguntar directamente).</p>
          <p><strong>Plan de trabajo pedido:</strong> placa de tórax + tomografía de tórax sin contraste, análisis de gases arteriales, hemograma, PCR (proteína C reactiva), cultivo de esputo para gérmenes comunes, BK/PCR en esputo para descartar TB, y panel viral. Los cultivos y el panel viral salieron negativos, alejando la posibilidad de infección activa como causa de la exacerbación.</p>
        `
      },
      {
        titulo: '💊 Plan de tratamiento sugerido',
        tono: 'plan',
        cuerpo: `
          <p class="muted" style="margin-top:-4px;">El Dr. no llegó a dar el plan de tratamiento en estos dos audios (dijiste que en los audios anteriores sí lo mencionó). Mientras me pasas esos, arme esto como punto de partida basado en guías generales para fibrosis pulmonar / CPFE — no reemplaza lo que diga tu docente ni el manejo real del equipo tratante.</p>
          <ul>
            <li><strong>Terapia antifibrótica</strong> (pirfenidona o nintedanib) — enlentece la progresión de la fibrosis, según la guía ATS/ERS/JRS/ALAT 2022 para Fibrosis Pulmonar Idiopática.</li>
            <li><strong>Oxígeno suplementario</strong> si hay hipoxemia en reposo o al esfuerzo (ya lo está recibiendo con cánula binasal).</li>
            <li><strong>Rehabilitación pulmonar</strong> para mejorar tolerancia al ejercicio y calidad de vida.</li>
            <li><strong>Vacunación:</strong> influenza anual, antineumocócica y COVID-19 — reduce el riesgo de exacerbaciones infecciosas.</li>
            <li><strong>Evaluar y tratar comorbilidades:</strong> confirmar/manejar la posible hipertensión pulmonar, descartar reflujo (ERGE) como contribuyente de la tos, y continuar el control del asma de base.</li>
            <li><strong>Evitar exposición a irritantes:</strong> dejar la exposición ocupacional a solventes/pinturas, evitar humo de tabaco y contaminación ambiental.</li>
            <li><strong>Vigilancia de secuelas de TB</strong> dado el antecedente.</li>
            <li><strong>Evaluación para trasplante pulmonar</strong> si hay progresión pese al tratamiento — el CPFE suele tener peor pronóstico que la fibrosis sola, así que conviene no esperar demasiado para la referencia.</li>
            <li><strong>Seguimiento</strong> con pruebas de función pulmonar y tomografía seriadas.</li>
          </ul>
          <p class="muted" style="font-size:12px;">Verifica esto contra Harrison, Farreras o la guía ATS/ERS/JRS/ALAT antes de usarlo como respuesta de examen, y reemplázalo apenas tengas el audio donde el Dr. sí da el plan real.</p>
        `
      }
    ]
  }
];

/* ---------- respuesta de una tarea: texto + imágenes, sincronizado entre dispositivos ---------- */
function tareaImagesGet(key){
  try{ return JSON.parse(notesAdapter.get(key + '::img') || '[]'); } catch(e){ return []; }
}
function tareaImagesSet(key, arr){
  notesAdapter.set(key + '::img', JSON.stringify(arr));
}
function tareaImageThumbHTML(key, safeId, url, idx){
  return `<span class="tarea-thumb-wrap">
    <img src="${url}" class="tarea-thumb" onclick="openImageLightbox('${url}')">
    <span class="tarea-thumb-remove" onclick="removeTareaImage('${key}','${safeId}',${idx})">✕</span>
  </span>`;
}

/* visor de imagen en grande, dentro de la misma página (funciona con las fotos guardadas como base64) */
function openImageLightbox(url){
  let overlay = document.getElementById('img-lightbox-overlay');
  if(!overlay){
    overlay = document.createElement('div');
    overlay.id = 'img-lightbox-overlay';
    overlay.className = 'img-lightbox-overlay';
    overlay.onclick = closeImageLightbox;
    overlay.innerHTML = '<img id="img-lightbox-img" src="" onclick="event.stopPropagation()"><span class="img-lightbox-close">✕</span>';
    document.body.appendChild(overlay);
  }
  document.getElementById('img-lightbox-img').src = url;
  overlay.classList.add('active');
}
function closeImageLightbox(){
  const overlay = document.getElementById('img-lightbox-overlay');
  if(overlay) overlay.classList.remove('active');
}
function tareaResponseHTML(key, placeholder){
  const value = notesAdapter.get(key);
  const safeId = 'tresp-' + key.replace(/[^a-z0-9]/gi, '-');
  const htmlValue = /<[a-z][\s\S]*>/i.test(value) ? value : value.replace(/\n/g, '<br>');
  const images = tareaImagesGet(key);
  return `
    <div class="tarea-response">
      <div class="note-head">
        <span class="note-label">✎ Tu respuesta</span>
        <span class="note-status" id="${safeId}-status"></span>
      </div>
      <div class="note-editable hl-zone" id="${safeId}" contenteditable="true" data-hl-key="note::${key}"
        data-placeholder="${placeholder || 'Escribe tu respuesta...'}"
        oninput="handleNoteInput('${key}','${safeId}')">${htmlValue}</div>
      <div class="tarea-images" id="${safeId}-images">${images.map((url, i) => tareaImageThumbHTML(key, safeId, url, i)).join('')}</div>
      <label class="tarea-upload-btn">
        📎 Adjuntar imagen
        <input type="file" accept="image/*" multiple style="display:none" onchange="handleTareaImageUpload(event, '${key}', '${safeId}')">
      </label>
      <div class="tarea-upload-status" id="${safeId}-upload-status"></div>
    </div>
  `;
}
async function handleTareaImageUpload(ev, key, safeId){
  const files = Array.from(ev.target.files || []);
  if(!files.length) return;
  const statusEl = document.getElementById(safeId + '-upload-status');
  statusEl.textContent = 'Procesando…';

  const current = tareaImagesGet(key);

  for(const file of files){
    try{
      const dataUrl = await compressImageToDataURL(file);
      current.push(dataUrl);
    } catch(err){
      statusEl.textContent = 'Esa imagen es muy pesada o no se pudo procesar — intenta con otra foto.';
      console.warn('Error procesando imagen de tarea:', err);
    }
  }
  tareaImagesSet(key, current);
  const imgWrap = document.getElementById(safeId + '-images');
  if(imgWrap) imgWrap.innerHTML = current.map((url, i) => tareaImageThumbHTML(key, safeId, url, i)).join('');
  statusEl.textContent = current.length ? 'Guardado ✓' : '';
  setTimeout(() => { if(statusEl) statusEl.textContent = ''; }, 2500);
  ev.target.value = '';
}

/* redimensiona y comprime la imagen en el navegador antes de guardarla como texto (base64),
   para que quepa cómodamente dentro del límite de 1MB por nota de Firestore */
function compressImageToDataURL(file, maxWidth = 900, startQuality = 0.65){
  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      const scale = Math.min(1, maxWidth / img.width);
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      let quality = startQuality;
      let dataUrl = canvas.toDataURL('image/jpeg', quality);
      // si sigue muy pesada, bajamos calidad hasta que quepa (máx. ~700KB para dejar margen)
      let attempts = 0;
      while(dataUrl.length > 700000 && attempts < 4){
        quality -= 0.15;
        dataUrl = canvas.toDataURL('image/jpeg', Math.max(quality, 0.2));
        attempts++;
      }
      if(dataUrl.length > 900000){ reject(new Error('too-large')); return; }
      resolve(dataUrl);
    };
    img.onerror = () => { URL.revokeObjectURL(objectUrl); reject(new Error('load-error')); };
    img.src = objectUrl;
  });
}
function removeTareaImage(key, safeId, idx){
  const current = tareaImagesGet(key);
  current.splice(idx, 1);
  tareaImagesSet(key, current);
  const imgWrap = document.getElementById(safeId + '-images');
  if(imgWrap) imgWrap.innerHTML = current.map((url, i) => tareaImageThumbHTML(key, safeId, url, i)).join('');
}

/* ---------- render de las cajas de color dentro de una sección ---------- */
function renderHospitalExtra(ex, sesionId, secIdx, exIdx){
  if(ex.tipo === 'pregunta'){
    return `
      <div class="pregunta-box">
        <div class="pb-label">❗ Preguntas obligatorias del Dr.</div>
        <ul class="pb-list">
          ${ex.items.map(it => `<li><span class="pb-q">${it.q}</span><span class="pb-why">→ ${it.por}</span></li>`).join('')}
        </ul>
        ${noteBlockHTML('hospital::' + sesionId + '::preguntas::notas', 'Anota aquí lo que ya investigaste o preguntaste de esta lista…')}
      </div>`;
  }
  if(ex.tipo === 'tarea'){
    const key = 'hospital::' + sesionId + '::' + (ex.respuestaKey || ('tarea-sec' + secIdx + '-' + exIdx));
    return `
      <div class="tarea-box">
        <div class="tb-label">📌 Tarea del Dr.</div>
        <p>${ex.texto}</p>
        ${tareaResponseHTML(key, 'Escribe tu respuesta cuando la resuelvas, o adjunta una foto…')}
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
        <div class="nc-label">💡 Nota aparte</div>
        <p>${ex.texto}</p>
      </div>`;
  }
  if(ex.tipo === 'explicacion'){
    return `
      <div class="explicacion-box">
        <div class="ex-label">🌊 Qué significa esto</div>
        <p>${ex.texto}</p>
      </div>`;
  }
  if(ex.tipo === 'sugerencia'){
    return `
      <div class="sugerencia-box">
        <div class="sg-label">🍂 Sugerencia (no pedida, iniciativa mía)</div>
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
    <div class="kcard ${sec.tono ? 'tono-' + sec.tono : ''} hl-zone" data-hl-key="${s.id}::sec${i}">
      <h3>${sec.titulo}</h3>
      ${sec.cuerpo}
      ${(sec.extras || []).map((ex, j) => renderHospitalExtra(ex, s.id, i, j)).join('')}
    </div>
  `).join('');

  wrap.innerHTML = `
    <span class="eyebrow">Hospital · Semana ${s.semana} · ${s.dia}</span>
    <h1 class="page-title">📓 ${s.titulo}</h1>
    <p class="page-sub">${s.resumen}</p>
    <p class="muted" style="font-size:11.5px; margin-top:-8px;">🗒️ En <span class="mis-notas" style="font-weight:700;">rosa</span>: lo que tú misma anotaste en tu cuaderno mientras se grababa el audio.</p>

    ${seccionesHTML}

    ${noteBlockHTML('hospital::' + s.id + '::apuntes', 'Escribe aquí tus propias notas, dudas o lo que quieras recordar de este día de hospital…')}
  `;

  restoreZoneHighlights('#view-hospital-sesion-content');
}
