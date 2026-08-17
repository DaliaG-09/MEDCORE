/* ============================================================
   MEDCORE — datos del curso
   Semanas y lecturas extraídas del sílabo real (calendarización
   del ciclo). EPOC y Asma Bronquial tienen contenido completo
   de estudio (3 modos); el resto de los temas del sílabo están
   listados como parte del cronograma pero aún no tienen su
   ficha de estudio profunda — se va completando enfermedad por
   enfermedad a medida que se agreguen los PPT de cada clase.
   ============================================================ */

const CURSO = {
  "nombre": "Medicina Interna I",
  "codigo": "MH-701",
  "ciclo": "VII",
  "silabo": "2026-2",
  "universidad": "Universidad Científica del Sur",
  "docenteResponsable": "Dra. Dauma Gastiaburú Rodríguez",
  "creditos": 10,
  "horasTotales": "208 horas (112 teóricas, 96 prácticas)",
  "formulaEvaluacion": "ED (0%) + EC1 (10%) + EC2 (10%) + EP1 (18%) + EC3 (10%) + EC4 (10%) + EC5 (10%) + EP2 (12%) + EIF (20%)"
};

const SEMANAS = [
  {
    "id": "semana-01",
    "numero": 1,
    "titulo": "Neumología",
    "rango": "17 – 21 ago",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Anatomía y fisiología del aparato respiratorio / Exámenes de ayuda diagnóstica en Neumología: radiografía de tórax, tomografía, espirometría (capacidades pulmonares), toracocentesis, broncoscopía"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Bronquitis Aguda y Crónica. Bronquiectasias / Neumonía Adquirida en la Comunidad. / Asma Bronquial: etiología, fisiopatología, cuadro clínico, diagnóstico, tratamiento, complicaciones y prevención"
      },
      {
        "dia": "Viernes",
        "tipo": "teoria",
        "tema": "Control de lectura: Womack, J., & Kropa, J. (2022). Community-Acquired Pneumonia in Adults / Neumonía Intrahospitalaria y Atípicas / EXPOSICIÓN: VOLÚMENES Y CAPACIDADES PULMONARES"
      }
    ],
    "talleres": [],
    "exposiciones": [
      "EXPOSICIÓN: VOLÚMENES Y CAPACIDADES PULMONARES"
    ],
    "evaluaciones": [
      "Evaluación Diagnóstica — 0% de la nota final"
    ],
    "lecturas": [
      "lectura-s1-3"
    ],
    "enfermedades": [
      "asma-bronquial"
    ],
    "temas": [
      "anatofisio-respiratorio"
    ]
  },
  {
    "id": "semana-02",
    "numero": 2,
    "titulo": "Neumología",
    "rango": "24 – 28 ago",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "TALLER APLICATIVO: IMÁGENES / Análisis de Gases Arteriales: Bases Fisiopatológicas e interpretación clínica"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Control de lectura: Raymond, T., & Peterson, T. (2023). Chronic Asthma Treatment: Common Q / Enfermedad Pulmonar Obstructiva Crónica / Enfermedades Pleurales: Neumotórax, Hemotórax, Derrame Pleural y Empiema. Etiología, fisiopatología, cuadro clínico, tratamiento, complicaciones y prevención."
      },
      {
        "dia": "Viernes",
        "tipo": "teoria",
        "tema": "TALLER APLICATIVO: ANÁLISIS DE GASES ARTERIALES / Tuberculosis Pulmonar. Epidemiología, etiología, cuadro clínico, diagnóstico, tratamiento, complicaciones y prevención / EXPOSICIÓN: NEUMONÍA ADQUIRIDA EN LA COMUNIDAD"
      }
    ],
    "talleres": [
      "TALLER APLICATIVO: IMÁGENES",
      "TALLER APLICATIVO: ANÁLISIS DE GASES ARTERIALES"
    ],
    "exposiciones": [
      "EXPOSICIÓN: NEUMONÍA ADQUIRIDA EN LA COMUNIDAD"
    ],
    "evaluaciones": [],
    "lecturas": [
      "lectura-s2-5"
    ],
    "enfermedades": [
      "epoc"
    ]
  },
  {
    "id": "semana-03",
    "numero": 3,
    "titulo": "Neumología",
    "rango": "31 ago – 4 set",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Control de lectura: Hartman-Adams, H., Gerbo, R. M., & George, S. (2022). Tuberculosis: Co / Insuficiencia Respiratoria Aguda. Síndrome de Distrés Respiratorio del Adulto"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "TALLER APLICATIVO:  ANÁLISIS DE GASES ARTERIALES 2 / Enfermedad Pulmonar Intersticial Difusa / Síndrome de apnea-hipopnea obstructiva del sueño (SAHOS)."
      },
      {
        "dia": "Viernes",
        "tipo": "teoria",
        "tema": "Enfermedades respiratorias ocupacionales / TALLER APLICATIVO: CASOS CLÍNICOS / REPASO"
      }
    ],
    "talleres": [
      "TALLER APLICATIVO:  ANÁLISIS DE GASES ARTERIALES 2",
      "TALLER APLICATIVO: CASOS CLÍNICOS"
    ],
    "exposiciones": [],
    "evaluaciones": [
      "Evaluación continua 1 — Actividades Módulo 1 (Neumología) — 10% de la nota final"
    ],
    "lecturas": [
      "lectura-s3-7"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-04",
    "numero": 4,
    "titulo": "Cardiología",
    "rango": "7 – 11 set",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Anatomía, semiología y fisiología Cardiaca: estructura del corazón y de los grandes vasos. Ciclo cardiaco y hemodinamia. Examen físico. / Exámenes de ayuda diagnóstica en Cardiología: Radiografía, Ecocardiograma, Doppler, Holter, MAPA, prueba de esfuerzo y cateterismo."
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "EKG normal I / EKG normal II / Cardiopatía Coronaria Isquémica: Infarto Agudo de Miocardio (IMA). Fisiopatología de la angina e IMA. Diagnóstico, tipos y manejo inicial."
      },
      {
        "dia": "Viernes",
        "tipo": "teoria",
        "tema": "Control de lectura: Achar, S. A., Kundu, S., & Norcross, W. A. (2005). Diagnosis of acute  / Hipertensión Arterial. Diagnóstico, clasificación y tratamiento / EXPOSICIÓN: ELECTROCARDIOGRAMA NORMAL: ORIGEN DE LAS ONDAS, MEDIDAS, EJE, RITMO, FRECUENCIA"
      }
    ],
    "talleres": [],
    "exposiciones": [
      "EXPOSICIÓN: ELECTROCARDIOGRAMA NORMAL: ORIGEN DE LAS ONDAS, MEDIDAS, EJE, RITMO, FRECUENCIA"
    ],
    "evaluaciones": [],
    "lecturas": [
      "lectura-s4-12"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-05",
    "numero": 5,
    "titulo": "Cardiología",
    "rango": "14 – 18 set",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "TALLER APLICATIVO: EKG / Enfermedades del Pericardio: Pericarditis, Taponamiento Pericárdico y Pericarditis constrictiva crónica."
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Taquiarritmias y Bradiarritmias / EKG: Trastornos de la conducción / Control de lectura: Diagnóstico y guía terapéutica del paciente con taponamiento cardiaco "
      },
      {
        "dia": "Viernes",
        "tipo": "teoria",
        "tema": "ENDOCARDITIS INFECCIOSA / Tromboembolismo pulmonar / EXPOSICIÓN: ELECTROCARDIOGRAMA: ARRITMIAS"
      }
    ],
    "talleres": [
      "TALLER APLICATIVO: EKG"
    ],
    "exposiciones": [
      "EXPOSICIÓN: ELECTROCARDIOGRAMA: ARRITMIAS"
    ],
    "evaluaciones": [],
    "lecturas": [
      "lectura-s5-14"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-06",
    "numero": 6,
    "titulo": "Cardiología",
    "rango": "21 – 25 set",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Control de lectura: Hebbar K., &  Hueston, W. (2002). Management of Common Arrythmias: Sup / Insuficiencia Cardiaca. Fisiopatología. Clasificación. Manejo Farmacológico"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Valvulopatía aórtica y mitral:  manifestaciones clínicas y enfoque diagnóstico / Valvulopatía tricuspídea y pulmonar:  manifestaciones clínicas y enfoque diagnóstico / TALLER APLICATIVO: EKG ARRITMIAS"
      },
      {
        "dia": "Viernes",
        "tipo": "teoria",
        "tema": "Shock cardiogénico. Soporte hemodinámico y tratamiento específico / Enfermedad Vascular Periférica. / TALLER APLICATIVO: EKG PATOLÓGICO"
      }
    ],
    "talleres": [
      "TALLER APLICATIVO: EKG ARRITMIAS",
      "TALLER APLICATIVO: EKG PATOLÓGICO"
    ],
    "exposiciones": [],
    "evaluaciones": [],
    "lecturas": [
      "lectura-s6-16"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-07",
    "numero": 7,
    "titulo": "Cardiología",
    "rango": "28 set – 2 oct",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Cardiopatías congénitas cianótica / Cardiopatías congénitas acianótica"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Control de lectura: Ford, B., Lara, S., & Park, J. (2022). Heart murmurs in children: Eval / Miocardiopatía Dilatada, No dilatada, Restrictiva. EKG Hipertróficas"
      },
      {
        "dia": "Viernes",
        "tipo": "teoria",
        "tema": "Miocardiopatías- Miocardiopatía Hipertrófica / REPASO"
      }
    ],
    "talleres": [],
    "exposiciones": [],
    "evaluaciones": [
      "Evaluación continua 2 — Actividades Módulo 2 (Cardiología) — 10% de la nota final"
    ],
    "lecturas": [
      "lectura-s7-20"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-08",
    "numero": 8,
    "titulo": "Examen Parcial",
    "rango": "Semana de evaluación",
    "dias": [],
    "talleres": [],
    "exposiciones": [],
    "evaluaciones": [
      "EXAMEN PARCIAL: NEUMOLOGÍA Y CARDIOLOGÍA (SEMANA DEL 5 AL 11 DE OCTUBRE)",
      "Evaluación Parcial 1 — Examen teórico Módulos 1-2 — 18% de la nota final"
    ],
    "lecturas": [],
    "enfermedades": []
  },
  {
    "id": "semana-09",
    "numero": 9,
    "titulo": "Nefrología",
    "rango": "12 – 16 oct",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Glomerulopatías I: Glomerulopatías Primarias / Glomerulopatías II: Glomerulopatías Secundarias"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Insuficiencia Renal Aguda. Etiología, fisiopatología, cuadro clínico, diagnóstico, tratamiento y prevención / Gasometría metabólica: Bases fisiopatológicas e interpretación clínica / Control de lectura: Glomerulonephritis: an Approach to the KDIGO 2021 Guidelines."
      },
      {
        "dia": "Viernes",
        "tipo": "teoria",
        "tema": "Alteraciones del equilibrio hidroelectrolítico: sodio: etiología, diagnóstico y tratamiento. / Alteraciones del equilibrio hidroelectrolítico: potasio: etiología, diagnóstico y tratamiento. / Alteraciones del equilibrio hidroelectrolítico: calcio y magnesio: etiología, diagnóstico y tratamiento."
      }
    ],
    "talleres": [],
    "exposiciones": [],
    "evaluaciones": [],
    "lecturas": [
      "lectura-s9-24"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-10",
    "numero": 10,
    "titulo": "Nefrología",
    "rango": "19 – 23 oct",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "TALLER APLICATIVO: GASES ARTERIALES / Síndrome nefrótico: etiología, fisiopatología, cuadro clínico, diagnóstico, tratamiento, pronóstico y prevención"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Control de lectura: Braun, M., Barstow, C. & Pyzocha, N. (2015). Diagnosis and management  / Síndrome nefrítico: etiología, fisiopatología, cuadro clínico, diagnóstico, tratamiento, pronóstico y prevención / Infección del Tracto Urinario. Etiología, fisiopatología, cuadro clínico, diagnóstico, tratamiento y prevención."
      },
      {
        "dia": "Viernes",
        "tipo": "teoria",
        "tema": "EXPOSICIÓN: ANÁLISIS DE GASES ARTERIALES / Nefropatía Diabética / Litiasis Renal y Uropatía obstructiva"
      }
    ],
    "talleres": [
      "TALLER APLICATIVO: GASES ARTERIALES"
    ],
    "exposiciones": [
      "EXPOSICIÓN: ANÁLISIS DE GASES ARTERIALES"
    ],
    "evaluaciones": [],
    "lecturas": [
      "lectura-s10-27"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-11",
    "numero": 11,
    "titulo": "Nefrología",
    "rango": "26 – 30 oct",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Control de lectura: Gross, J. L., De Azevedo, M. J., Silveiro, S. P., Canani, L. H., Caram / Enfermedad Renal Crónica. Etiología, fisiopatología, cuadro clínico, diagnóstico, tratamiento y prevención"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Tuberculosis renal y vías urinarias / EXPOSICIÓN: CORRECCIÓN DE TRASTORNOS HIDROELECTROLÍTICOS / TALLER APLICATIVO CASOS CLÍNICOS"
      },
      {
        "dia": "Viernes",
        "tipo": "teoria",
        "tema": "Enfermedades sistémicas y su compromiso renal / TALLER APLICATIVO:  TRASTORNOS DE ELECTROLITOS / REPASO"
      }
    ],
    "talleres": [
      "TALLER APLICATIVO CASOS CLÍNICOS",
      "TALLER APLICATIVO:  TRASTORNOS DE ELECTROLITOS"
    ],
    "exposiciones": [
      "EXPOSICIÓN: CORRECCIÓN DE TRASTORNOS HIDROELECTROLÍTICOS"
    ],
    "evaluaciones": [
      "Evaluación continua 3 — Actividades Módulo 3 (Nefrología) — 10% de la nota final"
    ],
    "lecturas": [
      "lectura-s11-29"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-12",
    "numero": 12,
    "titulo": "Gastroenterología",
    "rango": "2 – 6 nov",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Enfermedad por Reflujo gastroesofágico: anatomía, fisiopatología, manifestaciones digestivas y extradigestivas, plan de trabajo diagnóstico, tratamiento y complicaciones / Trastornos motores del esófago. Anatomía, fisiología, fisiopatología, cuadro clínico, clasificación, procedimientos diagnósticos, tratamiento. Acalasia"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Gastritis Aguda y Crónica: definición, fisiopatología, cuadro clínico, clasificación, procedimientos diagnósticos, tratamiento y complicaciones / Enfermedad Úlcero Péptica: Duodenal y Gástrica. Fisiopatología, cuadro clínico, procedimientos diagnósticos, tratamiento y complicaciones / Enfermedad Inflamatoria Intestinal. Fisiopatología, cuadro clínico, procedimientos diagnósticos, tratamiento y complicaciones"
      },
      {
        "dia": "Viernes",
        "tipo": "teoria",
        "tema": "TALLER CASOS CLÍNICOS: Trastornos funcionales del aparato digestivo: dispepsia funcional, síndrome de intestino irritable / Hepatitis viral aguda y crónica. Patogenia, factores de riesgo, procedimientos diagnósticos, evolución, tratamiento y complicaciones / Control de lectura: PANCREATITIS AGUDA"
      }
    ],
    "talleres": [
      "TALLER CASOS CLÍNICOS: Trastornos funcionales del aparato digestivo: dispepsia funcional, síndrome de intestino irritable"
    ],
    "exposiciones": [],
    "evaluaciones": [],
    "lecturas": [
      "lectura-s12-34"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-13",
    "numero": 13,
    "titulo": "Gastroenterología",
    "rango": "9 – 13 nov",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Pancreatitis: Aguda y Crónica / Colecistitis, Colangitis y Colédocolitiasis"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Cirrosis hepática. Fisiopatología, cuadro clínico, procedimientos diagnósticos, tratamiento y complicaciones. Hipertensión portal / TALLER (CLASE INVERTIDA) Tuberculosis Enteroperitoneal / Hemorragia digestiva alta y baja."
      },
      {
        "dia": "Viernes",
        "tipo": "teoria",
        "tema": "Absceso hepático / Diarrea Aguda y Crónica / Control de lectura: HEMORRAGIA DIGESTIVA ALTA"
      }
    ],
    "talleres": [
      "TALLER (CLASE INVERTIDA) Tuberculosis Enteroperitoneal"
    ],
    "exposiciones": [],
    "evaluaciones": [
      "Evaluación continua 4 — Actividades Módulo 4 (Gastroenterología) — 10% de la nota final"
    ],
    "lecturas": [
      "lectura-s13-37"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-14",
    "numero": 14,
    "titulo": "Gastroenterología",
    "rango": "16 – 20 nov",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Anatomofisiología y semiología de la piel. Estructura y función de la piel y anexos. Lesiones elementales / Métodos diagnósticos en Dermatología"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Enfermedades bacterianas de la piel: impétigo, ectima, foliculitis, erisipela y celulitis / Acné. Rosácea. Erupciones acneiformes / Discromías de la piel: hipocromías e hipercromías"
      },
      {
        "dia": "Viernes",
        "tipo": "teoria",
        "tema": "Urticaria: Aguda – Crónica / Dermatitis: Seborreica, de contacto, atópica y dishidrótica / Control de lectura: INFECCIONES DE LA PIEL"
      }
    ],
    "talleres": [],
    "exposiciones": [],
    "evaluaciones": [
      "Evaluación continua 5 — Actividades Módulo 5 (Dermatología) — 10% de la nota final"
    ],
    "lecturas": [
      "lectura-s14-40"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-15",
    "numero": 15,
    "titulo": "Dermatología",
    "rango": "23 – 27 nov",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Micosis: Tiñas, Candidiasis y Esporotricosis / Enfermedades virales de la piel: molusco contagioso, verrugas, herpes simple y herpes zoster"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Enfermedades ampollares: pénfigo vulgar, pénfigo foliáceo, penfigoide ampular, dermatitis herpetiforme / Enfermedades parasitarias de la piel: acarosis y pediculosis"
      },
      {
        "dia": "Viernes",
        "tipo": "teoria",
        "tema": "EVALUACIÓN CONTINUA 6: NEFROLOGÍA, GASTROENTEROLOGÍA Y DERMATOLOGÍA"
      }
    ],
    "talleres": [],
    "exposiciones": [],
    "evaluaciones": [
      "EVALUACIÓN CONTINUA 6: NEFROLOGÍA, GASTROENTEROLOGÍA Y DERMATOLOGÍA",
      "Evaluación Parcial 2 — Examen teórico Módulos 3-4-5 — 12% de la nota final"
    ],
    "lecturas": [],
    "enfermedades": []
  },
  {
    "id": "semana-16",
    "numero": 16,
    "titulo": "Dermatología",
    "rango": "Semana de evaluación",
    "dias": [],
    "talleres": [],
    "exposiciones": [],
    "evaluaciones": [
      "EXAMEN INTEGRADO FINAL: TODOS LOS MÓDULOS (SEMANA DEL 30 NOVIEMBRE AL 6 DE DICIEMBRE)",
      "Evaluación Final — Examen integrado (todos los módulos) — 20% de la nota final"
    ],
    "lecturas": [],
    "enfermedades": []
  }
];

const ENFERMEDADES = [
  {
    id: "epoc",
    nombre: "EPOC (Enfermedad Pulmonar Obstructiva Crónica)",
    area: "Neumología",
    semanas: ["semana-02"],
    favorito: false,
    estudiado: false,
    ilustracion: "assets/epoc-airway.svg",
    relacionadas: [
      { id: "asma-bronquial", relacion: "Principal diagnóstico diferencial — ambas cursan con obstrucción de la vía aérea, pero se distinguen por reversibilidad y edad de inicio" }
    ],

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
    semanas: ["semana-01"],
    favorito: false,
    estudiado: false,
    relacionadas: [
      { id: "epoc", relacion: "Principal diagnóstico diferencial — a diferencia del EPOC, el asma es reversible con broncodilatador y suele iniciar en la infancia" }
    ],
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

/* ============================================================
   TEMAS — contenido que NO es una enfermedad: anatomía,
   fisiología, métodos diagnósticos. Se estudian antes de las
   enfermedades del sistema porque son la base para entenderlas.
   Estructura más simple que ENFERMEDADES (sin los 3 modos),
   pensada para "cómo funciona normalmente" + "por qué importa
   para lo que viene después".
   ============================================================ */
const TEMAS = [
  {
    id: "anatofisio-respiratorio",
    nombre: "Anatomía y fisiología del aparato respiratorio",
    area: "Neumología",
    tipo: "anatomia-fisiologia",
    semanas: ["semana-01"],
    favorito: false,
    estudiado: false,
    contenido: {
      resumen: "La función del aparato respiratorio es el intercambio gaseoso: llevar oxígeno de la atmósfera a la sangre y eliminar CO2. Para lograrlo, el sistema combina una vía de conducción (que no participa en el intercambio) con una zona respiratoria (donde sí ocurre el intercambio), todo impulsado por una bomba mecánica (caja torácica + músculos respiratorios) y regulado por el sistema nervioso.",
      estructuras: [
        { nombre: "Vía aérea de conducción", detalle: "Nariz → faringe → laringe → tráquea → bronquios → bronquiolos terminales. Ventila pero NO participa en el intercambio gaseoso (espacio muerto anatómico, ~150 mL)." },
        { nombre: "Zona respiratoria", detalle: "Bronquiolos respiratorios → conductos alveolares → alvéolos (~300 millones, superficie total ~70 m²). Aquí ocurre el intercambio de O2/CO2 por difusión simple a través de la membrana alveolo-capilar." },
        { nombre: "Caja torácica y músculos", detalle: "Diafragma (principal músculo inspiratorio) + intercostales. La espiración en reposo es pasiva (retracción elástica del pulmón); en esfuerzo se vuelve activa (músculos abdominales, intercostales internos)." },
        { nombre: "Circulación pulmonar", detalle: "Sistema de baja presión y baja resistencia — recibe todo el gasto cardíaco derecho. Su función es exponer toda la sangre venosa a la superficie alveolar." }
      ],
      fisiologiaNormal: "El ciclo respiratorio depende de la diferencia de presión entre el alvéolo y la atmósfera. Al contraerse el diafragma, aumenta el volumen torácico, la presión intrapleural se vuelve más negativa, el pulmón se expande y entra aire (inspiración). La espiración en reposo es pasiva: el pulmón, por su elasticidad natural, tiende a colapsar y expulsa el aire solo. El intercambio gaseoso depende de tres factores que se estudian juntos porque cualquier enfermedad pulmonar altera uno o varios: ventilación (V, aire que llega al alvéolo), perfusión (Q, sangre que llega al capilar) y difusión (paso del gas a través de la membrana). La relación V/Q ideal es cercana a 1; casi todas las enfermedades pulmonares alteran esta relación de alguna forma.",
      correlacionClinica: "Entender esta anatomía es la base para comprender por qué cada enfermedad respiratoria se manifiesta como lo hace: el EPOC y el asma alteran principalmente la vía de conducción (obstrucción al flujo de aire); la neumonía y las enfermedades intersticiales alteran la zona respiratoria (afectan el intercambio gaseoso, no tanto el flujo); el neumotórax y las enfermedades neuromusculares afectan la bomba mecánica. Cuando entiendas dónde actúa cada enfermedad — vía aérea, zona respiratoria o bomba — vas a poder predecir su clínica en vez de memorizarla.",
      puntosClave: [
        "La vía de conducción no intercambia gases — solo transporta aire (espacio muerto)",
        "El intercambio gaseoso real ocurre solo en la zona respiratoria (alvéolos)",
        "La espiración en reposo es pasiva; en esfuerzo o en obstrucción se vuelve activa",
        "Casi toda enfermedad respiratoria puede entenderse como: ¿afecta la vía aérea, la zona respiratoria, o la bomba mecánica?",
        "La relación ventilación/perfusión (V/Q) es el concepto que conecta anatomía con clínica — su alteración explica la mayoría de los síntomas respiratorios"
      ]
    }
  }
];

const LECTURAS = [
  {
    "id": "lectura-s1-3",
    "titulo": "Womack, J., & Kropa, J. (2022). Community-Acquired Pneumonia in Adults: Rapid Evidence Review. American family physician, 105(6), 625–630",
    "tipo": "obligatoria",
    "semana": "semana-01",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s2-5",
    "titulo": "Raymond, T., & Peterson, T. (2023). Chronic Asthma Treatment: Common Questions and Answers. American Family Physician, 107(4), 358–368",
    "tipo": "obligatoria",
    "semana": "semana-02",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s3-7",
    "titulo": "Hartman-Adams, H., Gerbo, R. M., & George, S. (2022). Tuberculosis: Common Questions and Answers. American family physician, 106(3), 308–315. https://www.aafp.org/pubs/afp/issues/2022/0900/tuberculosis.html",
    "tipo": "obligatoria",
    "semana": "semana-03",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s4-12",
    "titulo": "Achar, S. A., Kundu, S., & Norcross, W. A. (2005). Diagnosis of acute coronary syndrome. American Family Physician, 72(01), 119-126.",
    "tipo": "obligatoria",
    "semana": "semana-04",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s5-14",
    "titulo": "Diagnóstico y guía terapéutica del paciente con taponamiento cardiaco o constricción pericárdica.Sagristá, Jaume.Revista Española de Cardiología 2003; 56(2):195-205",
    "tipo": "obligatoria",
    "semana": "semana-05",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s6-16",
    "titulo": "Hebbar K., &  Hueston, W. (2002). Management of Common Arrythmias: Supraventricular  Arrythmias. American Family Physician, 65(12): 2479-2486 https://www.aafp.org/pubs/afp/issues/2002/0615/p2479.pdf",
    "tipo": "obligatoria",
    "semana": "semana-06",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s7-20",
    "titulo": "Ford, B., Lara, S., & Park, J. (2022). Heart murmurs in children: Evaluation and management. American family Physician, 105(3): 250-261.",
    "tipo": "obligatoria",
    "semana": "semana-07",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s9-24",
    "titulo": "Glomerulonephritis: an Approach to the KDIGO 2021 Guidelines.",
    "tipo": "obligatoria",
    "semana": "semana-09",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s10-27",
    "titulo": "Braun, M., Barstow, C. & Pyzocha, N. (2015). Diagnosis and management of Sodium Disorders: Hyponatremia and Hypernatremia. American Family Physician 91(5): 299-310",
    "tipo": "obligatoria",
    "semana": "semana-10",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s11-29",
    "titulo": "Gross, J. L., De Azevedo, M. J., Silveiro, S. P., Canani, L. H., Caramori, M. L., & Zelmanovitz, T. (2005). Diabetic nephropathy: diagnosis, prevention, and treatment. Diabetes care, 28(1), 164-176.",
    "tipo": "obligatoria",
    "semana": "semana-11",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s12-34",
    "titulo": "PANCREATITIS AGUDA",
    "tipo": "obligatoria",
    "semana": "semana-12",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s13-37",
    "titulo": "HEMORRAGIA DIGESTIVA ALTA",
    "tipo": "obligatoria",
    "semana": "semana-13",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s14-40",
    "titulo": "INFECCIONES DE LA PIEL",
    "tipo": "obligatoria",
    "semana": "semana-14",
    "estado": "pendiente"
  }
];
