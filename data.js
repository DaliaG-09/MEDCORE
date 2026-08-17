/* ============================================================
   MEDCORE — datos de ejemplo
   Esto es contenido DE MUESTRA para el prototipo visual.
   Cuando tengas tus documentos reales (sílabo, PPT, Excel),
   reemplazamos esto por tu contenido verdadero.
   ============================================================ */

const SEMANAS = [
  {
    id: "semana-03",
    numero: 3,
    titulo: "Síndromes respiratorios obstructivos",
    rango: "18 – 23 ago",
    dias: [
      { dia: "Lunes", tipo: "teoria", tema: "EPOC: definición, epidemiología y fisiopatología" },
      { dia: "Miércoles", tipo: "teoria", tema: "Asma bronquial y diagnóstico diferencial obstructivo" },
      { dia: "Jueves", tipo: "hospital", tema: "Examen físico respiratorio — sala de Neumología" },
      { dia: "Viernes", tipo: "teoria+hospital", tema: "Espirometría (teoría) / Casos clínicos (hospital)" },
      { dia: "Sábado", tipo: "hospital", tema: "Presentación de casos — pase de visita" }
    ],
    lecturas: ["espirometria-interpretacion", "epoc-guia-gold"],
    talleres: ["Taller de espirometría práctica"],
    exposiciones: ["Grupo 2 — Manejo de exacerbación de EPOC"],
    evaluaciones: ["Quiz corto: síndromes obstructivos (viernes)"],
    enfermedades: ["epoc", "asma-bronquial"]
  }
];

const ENFERMEDADES = [
  {
    id: "epoc",
    nombre: "EPOC (Enfermedad Pulmonar Obstructiva Crónica)",
    area: "Neumología",
    semanas: ["semana-03"],
    favorito: false,
    estudiado: false,

    profundo: {
      definicion: "Enfermedad respiratoria caracterizada por limitación crónica y progresiva del flujo aéreo, poco reversible, asociada a una respuesta inflamatoria anormal de la vía aérea y el parénquima pulmonar frente a partículas o gases nocivos, principalmente el humo de tabaco.",
      epidemiologia: "Una de las principales causas de morbimortalidad a nivel mundial. Más frecuente en mayores de 40 años con historia de tabaquismo significativo (> 10 paquetes-año).",
      etiologiaFactoresRiesgo: [
        "Tabaquismo (principal factor de riesgo)",
        "Exposición a biomasa (humo de leña en espacios cerrados)",
        "Exposición ocupacional a polvos y químicos",
        "Déficit de alfa-1 antitripsina (causa genética)",
        "Antecedente de infecciones respiratorias recurrentes en la infancia"
      ],
      fisiopatologia: {
        resumen: "La exposición crónica a partículas nocivas desencadena inflamación sostenida de la vía aérea, con dos componentes que coexisten en proporción variable: enfermedad de la pequeña vía aérea (bronquiolitis) y destrucción del parénquima (enfisema).",
        cascada: [
          { paso: "Factor desencadenante", detalle: "Humo de tabaco / partículas inhaladas" },
          { paso: "Células activadas", detalle: "Macrófagos alveolares, neutrófilos, linfocitos T CD8+" },
          { paso: "Mediadores liberados", detalle: "IL-8, TNF-α, leucotrieno B4, proteasas (elastasa neutrofílica)" },
          { paso: "Efecto tisular", detalle: "Desequilibrio proteasa/antiproteasa → destrucción de la matriz elástica alveolar" },
          { paso: "Cambio estructural", detalle: "Pérdida de tabiques alveolares (enfisema) + engrosamiento e hipersecreción en vía aérea pequeña" },
          { paso: "Cambio fisiológico", detalle: "Atrapamiento aéreo, hiperinsuflación, ↓ retracción elástica, limitación al flujo espiratorio" },
          { paso: "Manifestación clínica", detalle: "Disnea progresiva, tos crónica, uso de musculatura accesoria" }
        ]
      },
      clinica: [
        { signo: "Disnea progresiva", mecanismo: "Hiperinsuflación dinámica → ↑ trabajo respiratorio para un mismo volumen corriente" },
        { signo: "Tos crónica productiva", mecanismo: "Hipersecreción mucosa por hiperplasia de células caliciformes" },
        { signo: "Sibilancias espiratorias", mecanismo: "Turbulencia del flujo aéreo a través de la vía estrechada" }
      ],
      examenFisico: [
        "Tórax en tonel (hiperinsuflación)",
        "Espiración prolongada con labios fruncidos",
        "↓ murmullo vesicular, roncantes/sibilantes",
        "Signo de Hoover (movimiento paradójico de la parrilla costal inferior)"
      ],
      diagnostico: "Espirometría post-broncodilatador: relación VEF1/CVF < 0.70 confirma limitación al flujo aéreo no completamente reversible.",
      diagnosticoDiferencial: ["Asma bronquial", "Bronquiectasias", "Insuficiencia cardiaca", "Bronquiolitis obliterante"],
      tratamiento: {
        noFarmacologico: ["Cese absoluto de tabaquismo (medida con mayor impacto en sobrevida)", "Rehabilitación pulmonar", "Vacunación antigripal y antineumocócica"],
        farmacologico: ["Broncodilatadores de acción prolongada (LABA/LAMA)", "Corticoide inhalado en fenotipo con exacerbaciones frecuentes/eosinofilia", "Oxigenoterapia domiciliaria si hipoxemia crónica"]
      },
      complicaciones: ["Cor pulmonale", "Insuficiencia respiratoria aguda sobre crónica", "Neumotórax espontáneo (bulas)"],
      prevencion: "Cese de tabaquismo y reducción de exposición a biomasa son las intervenciones de mayor impacto.",
      perlasProfundo: "El VEF1/CVF post-broncodilatador < 0.70 confirma EPOC, pero la severidad y el pronóstico dependen más de la disnea, exacerbaciones y capacidad de ejercicio que del VEF1 aislado (clasificación GOLD ABE)."
    },

    repaso: {
      conceptosClave: ["Limitación crónica y poco reversible del flujo aéreo", "Principal causa: tabaquismo", "Espirometría: VEF1/CVF < 0.70 post-BD"],
      clinica: "Disnea progresiva + tos crónica productiva + antecedente tabáquico.",
      diagnostico: "Espirometría post-broncodilatador.",
      tratamientoResumen: "Cese de tabaco > broncodilatadores LABA/LAMA > corticoide inhalado si eosinofilia/exacerbador.",
      diferenciales: [
        { entidad: "Asma", clave: "Reversibilidad significativa post-BD, inicio en edad temprana" },
        { entidad: "Insuficiencia cardiaca", clave: "Ortopnea, edema, crépitos bibasales, BNP elevado" }
      ],
      tablaComparativa: {
        titulo: "EPOC vs Asma",
        filas: [
          ["Edad de inicio", "> 40 años", "Infancia/adolescencia"],
          ["Reversibilidad", "Parcial/ausente", "Significativa (>12% y 200mL)"],
          ["Antecedente", "Tabaquismo", "Atopia/alergias"]
        ]
      }
    },

    imprescindible: {
      loQueSiOSiDebesSaber: [
        "El diagnóstico se confirma con espirometría, NO con clínica aislada",
        "VEF1/CVF < 0.70 post-broncodilatador es el criterio diagnóstico clave",
        "El cese de tabaquismo es la única intervención que modifica la sobrevida",
        "Sospechar déficit de alfa-1 antitripsina en EPOC de inicio temprano sin tabaquismo"
      ],
      redFlags: ["Disnea en reposo con uso de músculos accesorios → posible exacerbación grave", "Cianosis o alteración del sensorio → evaluar insuficiencia respiratoria"],
      erroresFrecuentes: ["Diagnosticar EPOC solo por clínica sin espirometría", "Confundir con asma sin evaluar reversibilidad"],
      asociacionesClinicas: ["EPOC + cor pulmonale → edema de miembros inferiores, ingurgitación yugular"]
    }
  },

  {
    id: "asma-bronquial",
    nombre: "Asma bronquial",
    area: "Neumología",
    semanas: ["semana-03"],
    favorito: false,
    estudiado: false,
    profundo: {
      definicion: "Enfermedad inflamatoria crónica de la vía aérea caracterizada por hiperreactividad bronquial y obstrucción reversible del flujo aéreo.",
      epidemiologia: "Frecuentemente inicia en la infancia; fuerte asociación con atopia.",
      etiologiaFactoresRiesgo: ["Atopia / historia familiar de alergias", "Exposición a alérgenos (ácaros, pólenes)", "Infecciones virales respiratorias en la infancia"],
      fisiopatologia: {
        resumen: "Inflamación mediada predominantemente por linfocitos Th2 y eosinófilos frente a alérgenos, con hiperreactividad bronquial resultante.",
        cascada: [
          { paso: "Factor desencadenante", detalle: "Alérgeno inhalado / irritante / ejercicio" },
          { paso: "Células activadas", detalle: "Linfocitos Th2, eosinófilos, mastocitos" },
          { paso: "Mediadores liberados", detalle: "IL-4, IL-5, IL-13, histamina, leucotrienos" },
          { paso: "Efecto tisular", detalle: "Broncoconstricción, edema de la mucosa, hipersecreción" },
          { paso: "Cambio fisiológico", detalle: "Estrechamiento reversible de la vía aérea" },
          { paso: "Manifestación clínica", detalle: "Disnea episódica, sibilancias, tos nocturna" }
        ]
      },
      clinica: [{ signo: "Sibilancias episódicas", mecanismo: "Broncoconstricción reversible mediada por mediadores Th2" }],
      examenFisico: ["Sibilancias espiratorias difusas en crisis", "Examen normal en periodos intercrisis"],
      diagnostico: "Espirometría con prueba de broncodilatador: reversibilidad ≥ 12% y 200mL en VEF1.",
      diagnosticoDiferencial: ["EPOC", "Reflujo gastroesofágico", "Disfunción de cuerdas vocales"],
      tratamiento: {
        noFarmacologico: ["Evitar alérgenos identificados", "Plan de acción escrito para crisis"],
        farmacologico: ["Corticoide inhalado (base del tratamiento controlador)", "SABA de rescate", "LABA como terapia add-on"]
      },
      complicaciones: ["Estado asmático", "Remodelación de la vía aérea en asma no controlada"],
      prevencion: "Control ambiental de alérgenos y adherencia al tratamiento controlador.",
      perlasProfundo: "La reversibilidad significativa post-broncodilatador es la clave que distingue asma de EPOC en la espirometría."
    },
    repaso: {
      conceptosClave: ["Inflamación Th2/eosinofílica", "Obstrucción reversible", "Inicio frecuente en infancia"],
      clinica: "Disnea + sibilancias + tos, episódicas, con desencadenantes claros.",
      diagnostico: "Espirometría con reversibilidad ≥12% y 200mL.",
      tratamientoResumen: "Corticoide inhalado como base + SABA de rescate.",
      diferenciales: [{ entidad: "EPOC", clave: "Poco reversible, tabaquismo, inicio tardío" }],
      tablaComparativa: null
    },
    imprescindible: {
      loQueSiOSiDebesSaber: ["La reversibilidad post-BD es el dato que distingue asma de EPOC", "El corticoide inhalado es el pilar del tratamiento controlador, no el SABA"],
      redFlags: ["Uso de SABA > 2 veces por semana → mal control, requiere escalar tratamiento", "Silencio auscultatorio en crisis → signo de gravedad extrema"],
      erroresFrecuentes: ["Tratar solo con SABA sin controlador de base"],
      asociacionesClinicas: ["Asma + rinitis alérgica + eccema → tríada atópica"]
    }
  }
];

const LECTURAS = [
  { id: "espirometria-interpretacion", titulo: "Interpretación de espirometría", tipo: "obligatoria", semana: "semana-03", tema: "epoc", estado: "pendiente" },
  { id: "epoc-guia-gold", titulo: "Guía GOLD — resumen ejecutivo", tipo: "recomendada", semana: "semana-03", tema: "epoc", estado: "pendiente" }
];
