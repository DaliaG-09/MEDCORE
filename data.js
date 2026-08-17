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
        "tema": "Anatomía y fisiología del aparato respiratorio / Exámenes de ayuda diagnóstica en Neumología: radiografía de tórax, tomografía, espirometría (capacidades pulmonares), toracocentesis, broncoscopía",
        "vinculos": [
          { "tipo": "tema", "id": "anatofisio-respiratorio" },
          { "tipo": "tema", "id": "examenes-diagnostico-neumo" }
        ]
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Bronquitis Aguda y Crónica. Bronquiectasias / Neumonía Adquirida en la Comunidad. / Asma Bronquial: etiología, fisiopatología, cuadro clínico, diagnóstico, tratamiento, complicaciones y prevención",
        "vinculos": [
          { "tipo": "enfermedad", "id": "bronquitis-bronquiectasias" },
          { "tipo": "enfermedad", "id": "neumonia-nac" },
          { "tipo": "enfermedad", "id": "asma-bronquial" }
        ]
      },
      {
        "dia": "Viernes",
        "tipo": "teoria",
        "tema": "Control de lectura: Womack, J., & Kropa, J. (2022). Community-Acquired Pneumonia in Adults / Neumonía Intrahospitalaria y Atípicas / EXPOSICIÓN: VOLÚMENES Y CAPACIDADES PULMONARES",
        "vinculos": [
          { "tipo": "lectura", "id": "lectura-s1-3" },
          { "tipo": "enfermedad", "id": "neumonia-intrahospitalaria" }
        ]
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
      "asma-bronquial",
      "bronquitis-bronquiectasias",
      "neumonia-nac",
      "neumonia-intrahospitalaria"
    ],
    "temas": [
      "anatofisio-respiratorio",
      "examenes-diagnostico-neumo"
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
      semiologia: {
            "inspeccion": "Observa el patrón respiratorio antes de tocar al paciente: tórax en tonel (aumento del diámetro anteroposterior por hiperinsuflación), uso de músculos accesorios (esternocleidomastoideos, escalenos), respiración con labios fruncidos (mecanismo que el paciente adopta espontáneamente para evitar el colapso de la vía aérea al espirar), y el signo de Hoover — depresión paradójica de la parrilla costal inferior durante la inspiración (indica diafragma aplanado por hiperinsuflación crónica).",
            "palpacion": "Coloca ambas manos simétricamente sobre la parrilla costal posterior y pide al paciente que respire profundo: en EPOC vas a sentir expansión torácica DISMINUIDA y simétrica (a diferencia de un derrame o neumotórax, que es asimétrica). El frémito vocal (vibraciones al decir '33') suele estar disminuido de forma difusa por la hiperinsuflación.",
            "percusion": "Percute de forma comparativa y simétrica, de arriba hacia abajo, en ambos hemitórax. Vas a encontrar hipersonoridad difusa (sonido más 'hueco' de lo normal) por el atrapamiento de aire, y los límites pulmonares inferiores descendidos (el diafragma está aplanado y bajo).",
            "auscultacion": "Ausculta sistemáticamente ápices → bases, comparando lado a lado. Vas a encontrar murmullo vesicular disminuido de forma difusa (menos aire se mueve, más silencio de lo normal — dato clave), espiración prolongada, y roncantes/sibilantes si hay broncoespasmo asociado. Un dato práctico: en EPOC muy avanzado el tórax puede sonar casi 'silencioso' — eso NO es buena señal, es que hay tan poco flujo de aire que ni siquiera genera ruido."
      },




      diagnostico: "Espirometría post-broncodilatador: relación VEF1/CVF < 0.70 confirma limitación al flujo aéreo no completamente reversible.",
      algoritmo: [
        { tipo: "paso", texto: "Sospecha clínica: disnea progresiva + tos crónica + antecedente de tabaquismo significativo" },
        { tipo: "paso", texto: "Solicitar espirometría post-broncodilatador" },
        { tipo: "decision", texto: "¿FEV1/FVC < 0.70 tras broncodilatador?", salidas: [
          { etiqueta: "NO", texto: "EPOC descartado — buscar otra causa de disnea (asma, insuf. cardiaca, etc.)", color: "mint" },
          { etiqueta: "SÍ", texto: "Confirma EPOC → clasificar gravedad (GOLD ABE) según síntomas y exacerbaciones", color: "coral" }
        ]}
      ],
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
      semiologia: {
            "inspeccion": "En crisis: taquipnea, uso de músculos accesorios, posición en trípode (el paciente se inclina hacia adelante apoyando los brazos). Busca signos de gravedad: dificultad para hablar en frases completas, cianosis, alteración del sensorio. Entre crisis, la inspección suele ser completamente normal — por eso el asma se puede pasar por alto si solo examinas cuando el paciente está asintomático.",
            "palpacion": "Expansión torácica generalmente simétrica (a menos que la crisis sea muy severa). El frémito vocal no suele estar alterado de forma característica, a diferencia del EPOC.",
            "percusion": "Normalmente normal entre crisis. Durante una crisis puede haber hipersonoridad leve por atrapamiento aéreo agudo, pero es menos marcada que en EPOC crónico.",
            "auscultacion": "El hallazgo clásico: sibilancias espiratorias difusas y bilaterales, que empeoran con espiración forzada. Dato clínico crítico que debes recordar: el 'silencio auscultatorio' (ausencia de sibilancias en un paciente que sigue con dificultad respiratoria) NO significa mejoría — significa que el flujo de aire es tan bajo que ya no genera sonido. Es un signo de gravedad extrema que requiere manejo inmediato."
      },
      diagnostico: "Espirometría con prueba de broncodilatador: reversibilidad ≥ 12% y 200mL en VEF1.",
      diagnosticoDiferencial: ["EPOC", "Reflujo gastroesofágico", "Disfunción de cuerdas vocales"],
      tratamiento: {
        noFarmacologico: ["Evitar alérgenos identificados", "Plan de acción escrito para crisis"],
        farmacologico: ["Corticoide inhalado (base del tratamiento controlador)", "SABA de rescate", "LABA como terapia add-on"]
      },
      complicaciones: ["Estado asmático", "Remodelación de la vía aérea en asma no controlada"],
      prevencion: "Control ambiental de alérgenos y adherencia al tratamiento controlador.",
      perlasProfundo: "La reversibilidad significativa post-broncodilatador es la clave que distingue asma de EPOC en la espirometría.",
      mecanismoEpitelial: "Las células epiteliales de la vía aérea no son solo una barrera física, sino actores inmunológicamente activos. En el asma, esta barrera está alterada por pérdida de proteínas de unión estrecha. Al exponerse a alérgenos, las células epiteliales liberan 'alarminas' (IL-33, TSLP, IL-25) que activan células dendríticas y linfoides innatas tipo 2 (ILC2), iniciando y manteniendo la inflamación alérgica — este es el mecanismo molecular moderno detrás de la cascada Th2 clásica."
    },
    clasificacionGravedad: {
      titulo: "Clasificación de gravedad del asma (según control de síntomas)",
      categorias: [
        { nombre: "Intermitente", criterio: "Síntomas <1 vez/semana, síntomas nocturnos ≤2 veces/mes" },
        { nombre: "Persistente leve", criterio: "Síntomas >1 vez/semana pero <1 vez/día" },
        { nombre: "Persistente moderada", criterio: "Síntomas diarios, síntomas nocturnos >1 vez/semana" },
        { nombre: "Persistente grave", criterio: "Síntomas continuos, síntomas nocturnos frecuentes, limitación de la actividad física" }
      ]
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
  },
  {
    "id": "bronquitis-bronquiectasias",
    "nombre": "Bronquitis aguda, bronquitis crónica y bronquiectasias",
    "area": "Neumología",
    "semanas": [
      "semana-01"
    ],
    "favorito": false,
    "estudiado": false,
    "relacionadas": [
      {
        "id": "epoc",
        "relacion": "La bronquitis crónica es uno de los dos fenotipos clásicos del EPOC (junto al enfisema) — cuando la obstrucción se vuelve fija e irreversible, el cuadro pasa a clasificarse como EPOC"
      },
      {
        "id": "neumonia-nac",
        "relacion": "Principal diagnóstico diferencial de bronquitis aguda — la ausencia de infiltrado radiológico y de criterios de respuesta inflamatoria sistémica distingue bronquitis de neumonía"
      }
    ],
    "profundo": {
      "definicion": "Son tres entidades relacionadas pero distintas que comparten el síntoma de tos: la bronquitis aguda es una inflamación autolimitada de la vía aérea (generalmente viral); la bronquitis crónica es un diagnóstico clínico definido por tos productiva ≥3 meses al año durante 2 años consecutivos (una vez excluidas otras causas); y las bronquiectasias son una dilatación permanente e irreversible de los bronquios, con un ciclo de inflamación-infección-daño estructural que se autoperpetúa.",
      "epidemiologia": "Bronquitis aguda: 44 casos por 1.000 adultos/año, afecta al 5% de adultos anualmente, novena enfermedad ambulatoria más frecuente en EE.UU. Bronquiectasias: prevalencia ~600 por 100.000 personas, en aumento, con retraso diagnóstico de 3.5 a 17 años desde el inicio de síntomas; más frecuente en mujeres y mayores de 65 años.",
      "etiologiaFactoresRiesgo": [
        "Bronquitis aguda: principalmente viral (solo se aíslan virus en 8-37% de los casos); bacterias típicas (S. pneumoniae, H. influenzae, M. catarrhalis) y atípicas (B. pertussis, C. pneumoniae, M. pneumoniae, ~25%)",
        "Bronquitis crónica: tabaquismo como principal factor de riesgo; también biomasa y contaminantes ambientales",
        "Bronquiectasias — causas hereditarias: fibrosis quística, discinesia ciliar primaria, déficit de alfa-1 antitripsina",
        "Bronquiectasias — postinfecciosas: infecciones respiratorias bajas en la infancia, tos ferina, infecciones granulomatosas",
        "Bronquiectasias — otras: aspiración/reflujo, EPOC/asma mal controlados, enfermedades inflamatorias sistémicas (artritis reumatoide, sarcoidosis)"
      ],
      "fisiopatologia": {
        "resumen": "Bronquitis aguda: inflamación transitoria de la mucosa bronquial que se resuelve. Bronquiectasias: existe un 'círculo vicioso' que se autoalimenta — cada componente empeora a los demás, por eso la enfermedad progresa si no se rompe el ciclo.",
        "cascada": [
          {
            "paso": "Factor desencadenante",
            "detalle": "Infección repetida, obstrucción o defecto genético del aclaramiento mucociliar"
          },
          {
            "paso": "Células activadas",
            "detalle": "Neutrófilos con actividad aumentada"
          },
          {
            "paso": "Mediadores liberados",
            "detalle": "Proteasas y citocinas proinflamatorias liberadas por los neutrófilos"
          },
          {
            "paso": "Cambio estructural",
            "detalle": "Deterioro del aclaramiento mucociliar → acumulación de secreciones → colonización bacteriana crónica → dilatación bronquial permanente y destrucción de la pared de la vía aérea"
          },
          {
            "paso": "Cambio fisiológico",
            "detalle": "Vía aérea dilatada y dañada que ya no puede limpiarse a sí misma eficazmente — perpetúa el ciclo"
          },
          {
            "paso": "Manifestación clínica",
            "detalle": "Tos productiva crónica, esputo purulento abundante, exacerbaciones recurrentes"
          }
        ]
      },
      "clinica": [
        {
          "signo": "Tos de reciente aparición >1 semana (bronquitis aguda)",
          "mecanismo": "Inflamación transitoria de la mucosa bronquial tras infección viral"
        },
        {
          "signo": "Esputo purulento abundante, especialmente matutino (bronquiectasias)",
          "mecanismo": "Acumulación de secreciones por aclaramiento mucociliar deteriorado + colonización bacteriana crónica"
        },
        {
          "signo": "Acropaquia / dedos en palillo de tambor (bronquiectasias)",
          "mecanismo": "Hipoxemia crónica e inflamación sistémica de bajo grado sostenida"
        }
      ],
      "examenFisico": [
        "Bronquitis aguda: roncantes, sin signos focales de consolidación",
        "Bronquiectasias: crépitos basales bilaterales persistentes, acropaquia en casos evolucionados"
      ],
      semiologia: {
            "inspeccion": "Bronquitis aguda: paciente con tos, generalmente sin signos de dificultad respiratoria significativa. Bronquiectasias: buscar acropaquia (dedos en palillo de tambor) en casos evolucionados — signo que NO aparece en bronquitis simple ni en EPOC típico, así que si lo ves, orienta fuerte a bronquiectasias.",
            "palpacion": "Generalmente sin hallazgos relevantes en bronquitis aguda. En bronquiectasias con secreciones abundantes, puede palparse frémito aumentado sobre zonas con acumulación de secreciones espesas.",
            "percusion": "Normal en bronquitis aguda. En bronquiectasias localizadas puede haber matidez leve sobre la zona afectada si hay colapso parcial por tapón mucoso.",
            "auscultacion": "Bronquitis aguda: roncantes difusos que pueden cambiar o desaparecer con la tos (dato clave para diferenciarlo de neumonía, donde los crépitos NO cambian con la tos). Bronquiectasias: crépitos gruesos persistentes y localizados en las mismas zonas en exámenes repetidos — la persistencia y localización fija es lo que las distingue de una infección aguda transitoria."
      },

      "diagnostico": "Bronquitis aguda: clínico (ausencia de indicios de neumonía clínica/radiológica). Bronquitis crónica: clínico, por definición temporal (tos productiva ≥3 meses/año × 2 años). Bronquiectasias: TC de alta resolución — estándar de oro; signo característico: relación broncoarterial >1.5 (normal 0.7), 'anillo de sello', falta de estrechamiento bronquial hacia la periferia.",
      "diagnosticoDiferencial": [
        "Neumonía (bronquitis aguda)",
        "EPOC",
        "Asma bronquial",
        "Fibrosis quística (en bronquiectasias de inicio temprano)",
        "Tuberculosis"
      ],
      "tratamiento": {
        "noFarmacologico": [
          "Cese de tabaquismo (bronquitis crónica)",
          "Técnicas de aclaramiento de la vía aérea — ciclo de respiración activa, presión espiratoria positiva (bronquiectasias)",
          "Ejercicio aeróbico regular"
        ],
        "farmacologico": [
          "Bronquitis aguda: antibióticos NO recomendados de rutina (causa predominantemente viral); si se usan, azitromicina 500mg/día x3 días",
          "Bronquitis crónica estable: sin evidencia suficiente para recomendar antibióticos, broncodilatadores o mucolíticos de rutina para la tos (guía CHEST)",
          "Bronquiectasias — exacerbación: antibióticos guiados por cultivo de esputo, 14 días",
          "Bronquiectasias — terapia crónica: macrólidos 3x/semana si ≥3 exacerbaciones/año; erradicación de Pseudomonas si se aísla"
        ]
      },
      "complicaciones": [
        "Progresión a EPOC (bronquitis crónica no controlada)",
        "Exacerbaciones recurrentes con deterioro funcional progresivo (bronquiectasias)",
        "Hemoptisis (bronquiectasias avanzadas)"
      ],
      "prevencion": "Cese de tabaquismo es la intervención más importante. En bronquiectasias, tratar oportunamente las infecciones respiratorias de la infancia y controlar bien el asma/EPOC de base reduce el riesgo de desarrollarlas.",
      "perlasProfundo": "Antitos, antihistamínicos y expectorantes de venta libre NO tienen utilidad demostrada en bronquitis aguda — y los corticoides orales tampoco deben usarse. El manejo es sintomático y expectante; la tos puede durar 10-14 días y hasta 20% de pacientes tiene síntomas persistentes por 1 mes."
    },
    "repaso": {
      "conceptosClave": [
        "Bronquitis aguda = autolimitada, generalmente viral, tos >1 semana",
        "Bronquitis crónica = definición TEMPORAL (tos productiva ≥3 meses/año × 2 años)",
        "Bronquiectasias = dilatación PERMANENTE, ciclo inflamación-infección-daño que se autoperpetúa"
      ],
      "clinica": "Tos productiva es el hilo común; la diferencia está en duración, cronicidad y hallazgos en imagen (TC en bronquiectasias).",
      "diagnostico": "Bronquitis: clínico. Bronquiectasias: TC de alta resolución (signo del anillo de sello).",
      "tratamientoResumen": "Bronquitis aguda: sintomático, NO antibióticos de rutina. Bronquiectasias: aclaramiento de vía aérea + antibióticos guiados por cultivo en exacerbaciones.",
      "diferenciales": [
        {
          "entidad": "Neumonía",
          "clave": "Presencia de infiltrado radiológico y síndrome de respuesta inflamatoria sistémica — ausente en bronquitis"
        },
        {
          "entidad": "EPOC",
          "clave": "Obstrucción FIJA en espirometría (FEV1/FVC <70% sin reversibilidad); la bronquitis crónica pura no necesariamente tiene obstrucción demostrada"
        }
      ],
      "tablaComparativa": {
        "titulo": "Bronquitis aguda vs. crónica vs. bronquiectasias",
        "filas": [
          [
            "Duración",
            "Días-semanas, autolimitada",
            "≥3 meses/año × 2 años"
          ],
          [
            "Reversibilidad estructural",
            "Sí, se resuelve",
            "No — daño permanente (bronquiectasias)"
          ],
          [
            "Estudio clave",
            "Ninguno (clínico)",
            "TC de alta resolución (bronquiectasias)"
          ]
        ]
      }
    },
    "imprescindible": {
      "loQueSiOSiDebesSaber": [
        "NO uses antibióticos de rutina en bronquitis aguda — es predominantemente viral",
        "La bronquitis crónica es un diagnóstico CLÍNICO por definición temporal, no por imagen",
        "El signo radiológico clave de bronquiectasias es la relación broncoarterial >1.5 ('anillo de sello') en TC de alta resolución",
        "La acropaquia en un paciente con tos crónica productiva sugiere bronquiectasias, no EPOC (que rara vez la presenta)"
      ],
      "redFlags": [
        "Esputo purulento abundante + acropaquia + infecciones recurrentes desde la infancia → sospechar bronquiectasias, pedir TC",
        "Fiebre alta + infiltrado radiológico en paciente con tos → esto ya NO es bronquitis, es neumonía"
      ],
      "erroresFrecuentes": [
        "Dar antibióticos por rutina en toda bronquitis aguda con tos",
        "Confundir bronquitis crónica con EPOC sin espirometría que confirme obstrucción fija",
        "Pedir espirometría para 'confirmar' bronquiectasias — el estudio correcto es la TC, no la espirometría"
      ],
      "asociacionesClinicas": [
        "Bronquiectasias + infecciones respiratorias recurrentes desde la infancia + acropaquia → pensar en causa hereditaria (fibrosis quística, discinesia ciliar)",
        "Bronquitis crónica + tabaquismo + obstrucción fija en espirometría → esto ya es EPOC fenotipo bronquitis crónica"
      ]
    }
  },
  {
    "id": "neumonia-nac",
    "nombre": "Neumonía Adquirida en la Comunidad (NAC)",
    "area": "Neumología",
    "semanas": [
      "semana-01"
    ],
    "favorito": false,
    "estudiado": false,
    "tipoIlustracion": "alveolar",
    "relacionadas": [
      {
        "id": "bronquitis-bronquiectasias",
        "relacion": "Diagnóstico diferencial de tos + fiebre — la NAC SÍ tiene infiltrado radiológico nuevo y criterios de respuesta inflamatoria sistémica, la bronquitis NO"
      },
      {
        "id": "neumonia-intrahospitalaria",
        "relacion": "Se distinguen por el lugar y momento de adquisición — NAC es fuera del hospital, la intrahospitalaria se desarrolla >48h después del ingreso"
      }
    ],
    "profundo": {
      "definicion": "Enfermedad aguda causada por una infección del parénquima pulmonar, adquirida fuera del entorno hospitalario. El diagnóstico requiere la combinación de síntomas/signos compatibles MÁS evidencia de un nuevo infiltrado en un estudio de imagen (Rx, TC o ecografía pulmonar).",
      "epidemiologia": "Una de las principales causas de morbimortalidad a nivel mundial: 336.5 millones de infecciones del tracto respiratorio inferior en 2016, con 32.2 muertes por cada 100,000 personas. La mortalidad en pacientes hospitalizados es de 6% a 30 días, incluso tras mejoría clínica inicial (34% en quienes no mejoran o tienen neumonía no resuelta). Hasta 30% de los hospitalizados desarrolla complicaciones cardiovasculares.",
      "etiologiaFactoresRiesgo": [
        "Historia previa de neumonía (OR hasta 6.25) — el factor de riesgo individual más fuerte",
        "Enfermedades cardiovasculares crónicas, EPOC, enfermedad cerebrovascular/demencia",
        "Abuso de alcohol, bajo peso, tabaquismo actual",
        "Bacterias comunes: S. pneumoniae, H. influenzae, M. catarrhalis, S. aureus",
        "Organismos atípicos: Legionella, M. pneumoniae, C. pneumoniae — a pesar de pruebas extensas, la causa solo se identifica en ~1/3 de los pacientes"
      ],
      "fisiopatologia": {
        "resumen": "La neumonía se desarrolla por el balance entre tres factores: susceptibilidad del huésped, virulencia del patógeno, y tamaño del inóculo microbiano. Los patógenos deben vencer varias barreras de defensa (atrapamiento de moco, aclaramiento mucociliar, tos, deglución) antes de alcanzar y colonizar el alvéolo.",
        "cascada": [
          {
            "paso": "Factor desencadenante",
            "detalle": "Microorganismo que vence las defensas de la vía aérea superior (moco, cilios, tos)"
          },
          {
            "paso": "Células activadas",
            "detalle": "Macrófagos alveolares reconocen al patógeno y reclutan neutrófilos"
          },
          {
            "paso": "Mediadores liberados",
            "detalle": "Citocinas proinflamatorias generan la respuesta inflamatoria local y sistémica"
          },
          {
            "paso": "Cambio estructural",
            "detalle": "Exudado inflamatorio llena los alvéolos (consolidación) — visible como infiltrado en la radiografía"
          },
          {
            "paso": "Cambio fisiológico",
            "detalle": "El alvéolo lleno de exudado ya no intercambia gases eficazmente — alteración V/Q"
          },
          {
            "paso": "Manifestación clínica",
            "detalle": "Fiebre, tos productiva, disnea, dolor pleurítico, crépitos a la auscultación"
          }
        ]
      },
      "clinica": [
        {
          "signo": "Fiebre + tos + esputo",
          "mecanismo": "Respuesta inflamatoria sistémica ante la infección del parénquima"
        },
        {
          "signo": "Disnea y dolor torácico pleurítico",
          "mecanismo": "Consolidación alveolar que altera el intercambio gaseoso e irrita la pleura adyacente"
        },
        {
          "signo": "En ancianos: letargo y cambios del estado mental (puede ser la ÚNICA manifestación)",
          "mecanismo": "Presentación atípica por reserva fisiológica reducida"
        }
      ],
      "examenFisico": [
        "Crépitos/estertores en la auscultación",
        "Egofonía y frémito aumentado sobre la zona de consolidación",
        "Taquipnea (FR≥30), taquicardia (FC≥100), SatO2 <95% son predictores de gravedad"
      ],
      semiologia: {
            "inspeccion": "Taquipnea, uso de músculos accesorios si hay compromiso respiratorio significativo, posible cianosis en casos graves. Fíjate en el patrón respiratorio: respiración superficial y rápida por dolor pleurítico si existe compromiso de la pleura adyacente a la consolidación.",
            "palpacion": "Frémito vocal AUMENTADO sobre la zona de consolidación (el tejido consolidado transmite mejor las vibraciones que el aire) — esto es un hallazgo clave que la distingue del derrame pleural, donde el frémito está DISMINUIDO o abolido.",
            "percusion": "Matidez localizada sobre la zona de consolidación (el tejido lleno de exudado inflamatorio ya no contiene aire, por lo que percute 'sólido' en vez de resonante).",
            "auscultacion": "Sobre la zona afectada: crépitos (estertores) que NO cambian con la tos, soplo tubárico si la consolidación es extensa, y egofonía (la voz del paciente suena como 'e' cambiada a 'a' al auscultar mientras dice 'eee' — signo clásico de consolidación). Este set de hallazgos (frémito aumentado + matidez + crépitos fijos + egofonía) todos apuntando al MISMO lado es lo que confirma clínicamente una consolidación antes incluso de ver la radiografía."
      },
      "diagnostico": "Nuevo infiltrado en imagen (Rx/TC/ecografía) + síntomas compatibles + signos de enfermedad del espacio aéreo. Pruebas de laboratorio (hemograma, PCR, procalcitonina) apoyan pero no reemplazan la imagen. Se recomienda NO usar la procalcitonina para decidir si iniciar antibióticos (su sensibilidad varía 38-91%).",
      "algoritmo": [
        { "tipo": "paso", "texto": "Diagnóstico confirmado de NAC (infiltrado nuevo + clínica compatible)" },
        { "tipo": "paso", "texto": "Calcular CURB-65 o PSI (Pneumonia Severity Index)" },
        { "tipo": "decision", "texto": "¿Cuál es el resultado y la estabilidad hemodinámica/respiratoria?", "salidas": [
          { "etiqueta": "CURB-65 0-1", "texto": "Manejo ambulatorio — amoxicilina, doxiciclina o macrólido", "color": "mint" },
          { "etiqueta": "CURB-65 2-5", "texto": "Hospitalización — β-lactámico + macrólido o fluoroquinolona respiratoria", "color": "coral" },
          { "etiqueta": "Shock / requiere VM", "texto": "UCI directo, sin esperar el score — recomendación fuerte", "color": "alert" }
        ]}
      ],
      "diagnosticoDiferencial": [
        "Bronquitis aguda",
        "Tromboembolismo pulmonar",
        "Insuficiencia cardiaca descompensada (edema pulmonar)",
        "Neumonía intrahospitalaria/atípica"
      ],
      "tratamiento": {
        "noFarmacologico": [
          "Determinar el lugar de atención con escalas validadas: CURB-65 o PSI (Pneumonia Severity Index)",
          "Vacunación contra influenza y neumococo (prevención, no tratamiento agudo)"
        ],
        "farmacologico": [
          "Ambulatorio sin comorbilidades: amoxicilina 1g c/8h, doxiciclina, o macrólido (solo si resistencia neumocócica local <25%)",
          "Ambulatorio con comorbilidades: amoxi/clavulánico o cefalosporina + macrólido/doxiciclina, o fluoroquinolona respiratoria en monoterapia",
          "Hospitalizado no grave: β-lactámico + macrólido, o fluoroquinolona respiratoria sola",
          "Hospitalizado grave: β-lactámico + macrólido O β-lactámico + fluoroquinolona (recomendación fuerte)",
          "Cobertura SARM/Pseudomonas SOLO si hay factores de riesgo validados localmente (aislamiento previo, hospitalización reciente + antibióticos parenterales en 90 días)",
          "Duración mínima: 5 días, guiada por estabilidad clínica; NO usar corticoides de rutina (sin beneficio demostrado en mortalidad)"
        ]
      },
      "complicaciones": [
        "Derrame paraneumónico (~40% de neumonías bacterianas hospitalizadas)",
        "Complicaciones cardiovasculares (hasta 30% de hospitalizados)",
        "Sepsis / shock séptico",
        "Neumonía no resuelta / progresión a absceso"
      ],
      "prevencion": "Vacuna antineumocócica (PPSV: eficacia 48-64% contra neumonía neumocócica) y vacuna antiinfluenza — esta última reduce significativamente tanto la influenza como la neumonía bacteriana secundaria.",
      "perlasProfundo": "El CURB-65 (Confusión, Urea, frecuencia Respiratoria, presión arterial Baja, edad ≥65) y el PSI son las herramientas de decisión de lugar de tratamiento — pero ninguna reemplaza el juicio clínico. Un paciente con hipotensión que requiere vasopresores o insuficiencia respiratoria que requiere ventilación mecánica va DIRECTO a UCI, sin necesidad de calcular ningún score."
    },
    "repaso": {
      "conceptosClave": [
        "Definición = infección del parénquima + infiltrado NUEVO en imagen + síntomas compatibles",
        "Causa identificable solo en ~1/3 de los casos a pesar de estudios extensos",
        "CURB-65 y PSI determinan el lugar de tratamiento"
      ],
      "clinica": "Fiebre + tos + esputo + disnea + dolor pleurítico; en ancianos puede presentarse solo como confusión.",
      "diagnostico": "Imagen con infiltrado nuevo + clínica compatible. Procalcitonina NO decide el inicio de antibióticos.",
      "tratamientoResumen": "Ambulatorio leve: amoxicilina/doxiciclina/macrólido. Hospitalizado: β-lactámico + macrólido o fluoroquinolona respiratoria. Grave: mismo esquema pero recomendación fuerte, considerar UCI.",
      "diferenciales": [
        {
          "entidad": "Bronquitis aguda",
          "clave": "Sin infiltrado radiológico, sin criterios de respuesta inflamatoria sistémica"
        },
        {
          "entidad": "TEP (tromboembolismo pulmonar)",
          "clave": "Disnea súbita sin fiebre franca, factores de riesgo trombótico, dímero-D"
        }
      ],
      "tablaComparativa": {
        "titulo": "NAC vs. Neumonía intrahospitalaria",
        "filas": [
          [
            "Momento",
            "Fuera del hospital",
            ">48h tras ingreso hospitalario"
          ],
          [
            "Patógenos típicos",
            "S. pneumoniae, atípicos",
            "Multirresistentes (Pseudomonas, Acinetobacter)"
          ],
          [
            "Mortalidad",
            "6% a 30 días",
            "Hasta 70% en NAV grave"
          ]
        ]
      }
    },
    "imprescindible": {
      "loQueSiOSiDebesSaber": [
        "El diagnóstico SIEMPRE requiere un infiltrado NUEVO en imagen — sin eso, no es NAC",
        "CURB-65 o PSI + juicio clínico determinan si el manejo es ambulatorio, hospitalario o UCI",
        "Hipotensión que requiere vasopresores o necesidad de ventilación mecánica = UCI directo, sin calcular score",
        "NO cubrir empíricamente SARM/Pseudomonas a menos que existan factores de riesgo validados — sobretratar también tiene costo"
      ],
      "redFlags": [
        "SatO2 <90% al aire ambiente + FR≥30 + confusión → NAC grave, alto riesgo de UCI",
        "Hipotensión (PAS<90) en paciente con neumonía → shock séptico hasta demostrar lo contrario"
      ],
      "erroresFrecuentes": [
        "Usar procalcitonina para decidir si dar o no antibióticos (no está validado para esto)",
        "Pedir Rx de control rutinaria en paciente que ya resolvió síntomas a los 5-7 días (rendimiento positivo solo 0.2-5%)",
        "Dar corticoides de rutina en NAC — no hay beneficio demostrado en mortalidad"
      ],
      "asociacionesClinicas": [
        "NAC + alcoholismo + confusión + cianosis → cuadro grave, considerar Legionella y evaluar UCI de inmediato",
        "NAC en paciente joven + pocas comorbilidades + síntomas extrapulmonares → sospechar patógeno atípico (Mycoplasma)"
      ]
    }
  },
  {
    "id": "neumonia-intrahospitalaria",
    "nombre": "Neumonía Intrahospitalaria y Neumonía Atípica",
    "area": "Neumología",
    "semanas": [
      "semana-01"
    ],
    "favorito": false,
    "estudiado": false,
    "tipoIlustracion": "alveolar",
    "relacionadas": [
      {
        "id": "neumonia-nac",
        "relacion": "Se distinguen por el lugar y momento de adquisición — la intrahospitalaria se desarrolla >48h después del ingreso, con patógenos más resistentes"
      }
    ],
    "profundo": {
      "definicion": "Son dos entidades distintas agrupadas por su dificultad diagnóstica. La neumonía intrahospitalaria (nosocomial) es una infección del parénquima pulmonar por patógenos hospitalarios, que se desarrolla >48h después del ingreso (o hasta 30 días post-alta si hay factores de riesgo). La neumonía atípica es causada por patógenos que NO se detectan con tinción de Gram ni se cultivan con métodos estándar (Mycoplasma pneumoniae, Chlamydia pneumoniae, Legionella spp.) — representan >15% de todas las NAC.",
      "epidemiologia": "La mortalidad bruta de la neumonía nosocomial puede llegar a 70% en casos de neumonía asociada a ventilación mecánica (NAV) — aunque la mortalidad ATRIBUIBLE directamente a la infección es menor (~10% según estudios recientes). Mayor mortalidad con Pseudomonas aeruginosa y Acinetobacter spp. La neumonía por Legionella tiene mortalidad ~10%, que sube a 27% sin tratamiento antibiótico adecuado.",
      "etiologiaFactoresRiesgo": [
        "NAAS (neumonía asociada a la atención sanitaria): hospitalización ≥2 días en los últimos 90 días, residencia en centro de cuidados prolongados, diálisis crónica, terapia de infusión domiciliaria",
        "Neumonía nosocomial de inicio tardío: mayor riesgo de patógenos multirresistentes (MDR)",
        "Neumonía atípica — factores según patógeno: M. pneumoniae/C. pneumoniae en pacientes jóvenes con pocas comorbilidades; Legionella en edad avanzada, alcoholismo, inmunosupresión, trasplante"
      ],
      "fisiopatologia": {
        "resumen": "En la neumonía nosocomial, el mecanismo central es la colonización de la vía aérea por flora hospitalaria (frecuentemente resistente) en un huésped con defensas alteradas (intubación, inmovilidad, comorbilidad grave). En la neumonía atípica, los patógenos carecen de pared celular bacteriana clásica (Mycoplasma) o son intracelulares obligados (Chlamydia, Legionella), lo que explica por qué NO responden a beta-lactámicos.",
        "cascada": [
          {
            "paso": "Factor desencadenante",
            "detalle": "Intubación/ventilación mecánica o colonización por flora multirresistente del ambiente hospitalario"
          },
          {
            "paso": "Célula afectada",
            "detalle": "Defensas mucociliares alteradas por el tubo endotraqueal; barrera epitelial comprometida"
          },
          {
            "paso": "Mediadores/patógeno",
            "detalle": "Patógenos MDR (Pseudomonas, Acinetobacter) o atípicos intracelulares evaden mecanismos de defensa estándar"
          },
          {
            "paso": "Cambio estructural",
            "detalle": "Consolidación pulmonar con patógenos difíciles de erradicar por resistencia antibiótica o localización intracelular"
          },
          {
            "paso": "Manifestación clínica",
            "detalle": "Fiebre, secreciones traqueales purulentas (nosocomial) o cuadro más insidioso con síntomas extrapulmonares (atípica)"
          }
        ]
      },
      "clinica": [
        {
          "signo": "Fiebre + secreciones traqueales abundantes en paciente hospitalizado/intubado",
          "mecanismo": "Colonización e infección por flora hospitalaria en vía aérea con defensas alteradas por el tubo endotraqueal"
        },
        {
          "signo": "Tos persistente + síntomas extrapulmonares (atípica)",
          "mecanismo": "Patógeno intracelular que genera respuesta inflamatoria sistémica más que consolidación focal clásica"
        }
      ],
      "examenFisico": [
        "Nosocomial: nuevo infiltrado + secreciones purulentas + hipoxemia en paciente ya hospitalizado",
        "Atípica: auscultación pulmonar frecuentemente pobre en hallazgos pese a síntomas — 'disociación clínico-radiológica'"
      ],
      semiologia: {
            "inspeccion": "En paciente ventilado: secreciones traqueales purulentas visibles al aspirar, desaturación progresiva en el monitor, fiebre nueva. En paciente no intubado con neumonía atípica: examen a veces sorprendentemente 'pobre' en hallazgos pese a síntomas — la llamada disociación clínico-radiológica (te ves con poco al examinar pero la Rx muestra bastante, o al revés).",
            "palpacion": "En nosocomial: similar a NAC si hay consolidación franca (frémito aumentado). En atípica: con frecuencia poco llamativa, otro reflejo de la disociación clínico-radiológica típica de estos patógenos.",
            "percusion": "Matidez localizada si hay consolidación establecida; puede ser sutil en fases tempranas de neumonía atípica.",
            "auscultacion": "Nosocomial: similar a NAC — crépitos localizados, posible soplo tubárico. Atípica: auscultación con frecuencia normal o con hallazgos mínimos (roncantes leves) a pesar de tos persistente — este contraste entre 'poco que auscultar' y 'mucha tos/síntomas sistémicos' es justamente lo que debe hacerte sospechar un patógeno atípico en vez de bacteriano típico."
      },
      "diagnostico": "Nosocomial: cultivo de muestra respiratoria (distal o proximal) ANTES de iniciar/cambiar antibiótico. Atípica: diagnóstico presuntivo por criterios clínicos (edad <60, sin comorbilidades, tos persistente, sin ruidos adventicios, leucocitos <10,000) — el cultivo estándar no sirve porque estos patógenos no crecen en medios convencionales.",
      "diagnosticoDiferencial": [
        "Neumonía adquirida en la comunidad",
        "Tromboembolismo pulmonar (en paciente hospitalizado con fiebre nueva)",
        "Atelectasia"
      ],
      "tratamiento": {
        "noFarmacologico": [
          "Obtener cultivo respiratorio ANTES de iniciar tratamiento cuando sea posible, sin retrasar el inicio de antibióticos en pacientes graves",
          "Reevaluar y desescalar terapia al día 3 según resultados de cultivo"
        ],
        "farmacologico": [
          "Nosocomial de bajo riesgo (inicio temprano, sin factores MDR): antibiótico de espectro reducido",
          "Nosocomial de alto riesgo (shock séptico, hospital con alta tasa de resistencia): antibiótico empírico de amplio espectro, recomendación fuerte",
          "Atípica: macrólidos o tetraciclinas (interfieren la síntesis proteica bacteriana) — los beta-lactámicos NO sirven porque estos patógenos carecen de pared celular",
          "M. pneumoniae grave/refractaria: considerar corticoides si LDH sérica 302-364 UI/L (criterio para iniciar terapia antiinflamatoria)"
        ]
      },
      "complicaciones": [
        "Shock séptico",
        "Falla respiratoria que requiere ventilación mecánica prolongada",
        "Resistencia antimicrobiana progresiva (M. pneumoniae resistente a macrólidos, documentado desde 2000)"
      ],
      "prevencion": "Medidas de control de infecciones hospitalarias (higiene de manos, protocolos de manejo de vía aérea en ventilación mecánica) para reducir NAV. No existe vacuna específica para la mayoría de patógenos atípicos.",
      "perlasProfundo": "La duración estándar de tratamiento en neumonía nosocomial es 7-8 días — MÁS CORTO de lo que muchos asumen, salvo en casos de Pseudomonas/no fermentadores, inmunocompromiso severo, o terapia inicial inapropiada, donde sí se individualiza a plazos más largos."
    },
    "repaso": {
      "conceptosClave": [
        "Nosocomial = >48h post-ingreso hospitalario, patógenos frecuentemente MDR",
        "Atípica = no crece en cultivo estándar, no tiene pared celular clásica → no responde a beta-lactámicos",
        "El cultivo respiratorio se toma ANTES de iniciar antibiótico, sin retrasar el tratamiento en pacientes graves"
      ],
      "clinica": "Nosocomial: fiebre + secreciones purulentas en paciente ya hospitalizado. Atípica: tos persistente con auscultación relativamente pobre (disociación clínico-radiológica).",
      "diagnostico": "Nosocomial: cultivo de vía respiratoria baja. Atípica: criterios clínicos presuntivos (edad, comorbilidad, leucocitos).",
      "tratamientoResumen": "Nosocomial: espectro reducido si bajo riesgo, amplio espectro si shock séptico/hospital de alta resistencia. Atípica: macrólidos o tetraciclinas, NUNCA beta-lactámicos solos.",
      "diferenciales": [
        {
          "entidad": "NAC",
          "clave": "Se adquiere fuera del hospital, sin el mismo riesgo de patógenos MDR"
        },
        {
          "entidad": "TEP",
          "clave": "Fiebre nueva en hospitalizado con disnea súbita — considerar siempre en el diferencial de 'neumonía nueva' intrahospitalaria"
        }
      ],
      "tablaComparativa": null
    },
    "imprescindible": {
      "loQueSiOSiDebesSaber": [
        "Neumonía atípica NO responde a beta-lactámicos — usa macrólidos o tetraciclinas",
        "En sospecha de NAV, toma cultivo respiratorio ANTES de iniciar antibiótico, pero NO retrases el tratamiento en pacientes graves esperando el resultado",
        "La duración estándar de tratamiento en nosocomial es 7-8 días, no más — salvo excepciones específicas",
        "Legionella se presenta como neumonía grave de progresión rápida, con mortalidad hasta 27% sin tratamiento adecuado"
      ],
      "redFlags": [
        "Fiebre nueva + secreciones purulentas en paciente intubado >48h → sospechar NAV, tomar cultivo de inmediato",
        "Hiponatremia + tos seca + cuadro respiratorio → pensar en Legionella"
      ],
      "erroresFrecuentes": [
        "Tratar neumonía atípica con beta-lactámicos solos (no tienen pared celular que atacar)",
        "Prolongar tratamiento más allá de 7-8 días sin causa que lo justifique (aumenta resistencia sin beneficio)",
        "No tomar cultivo antes de iniciar antibiótico cuando el paciente lo permite"
      ],
      "asociacionesClinicas": [
        "Neumonía intrahospitalaria + Pseudomonas o Acinetobacter → mayor mortalidad asociada, requiere cobertura de amplio espectro",
        "Neumonía atípica + paciente joven + síntomas extrapulmonares → Mycoplasma como primera sospecha"
      ]
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
  },
  {
    "id": "examenes-diagnostico-neumo",
    "nombre": "Exámenes de ayuda diagnóstica en Neumología",
    "area": "Neumología",
    "tipo": "metodo-diagnostico",
    "semanas": [
      "semana-01"
    ],
    "favorito": false,
    "estudiado": false,
    "contenido": {
      "resumen": "Antes de estudiar cada enfermedad respiratoria, necesitas conocer las herramientas que se usan para diagnosticarlas. Cinco estudios cubren la mayoría de los escenarios clínicos en Neumología: radiografía de tórax (primera línea), tomografía (mayor detalle), espirometría (función pulmonar), toracocentesis (líquido pleural) y fibrobroncoscopía (visualización directa de la vía aérea).",
      "estructuras": [
        {
          "nombre": "Radiografía de tórax",
          "detalle": "Proyecciones básicas: PA (posteroanterior, de pie, inspiración máxima), lateral, y AP (cuando el paciente no puede pararse). Lectura sistemática en 7 pasos: partes blandas → huesos → parénquima → pleura → mediastino → hilios/vasos → corazón/aorta. Las 4 densidades radiológicas son aire, agua, grasa y calcio."
        },
        {
          "nombre": "Tomografía de tórax (TC)",
          "detalle": "Mayor resolución que la radiografía. Los patrones básicos que debes reconocer son: lineal, micronodular, en vidrio esmerilado (opacidad) y quístico — cada uno orienta a familias distintas de enfermedades intersticiales/infecciosas."
        },
        {
          "nombre": "Espirometría",
          "detalle": "Mide FVC (capacidad vital forzada), FEV1 (volumen espirado en el primer segundo) y su cociente FEV1/FVC. Es la prueba clave para diferenciar patrón obstructivo (FEV1/FVC bajo — EPOC, asma) de restrictivo (FVC bajo con cociente normal — enfermedades intersticiales)."
        },
        {
          "nombre": "Toracocentesis",
          "detalle": "Punción del espacio pleural (6º-8º espacio intercostal, guiada por ecografía) para extraer líquido o aire con fines diagnósticos o terapéuticos. Indicada en derrame pleural inexplicado, sospecha de infección/malignidad, o alivio de disnea."
        },
        {
          "nombre": "Fibrobroncoscopía",
          "detalle": "Visualización endoscópica directa del árbol bronquial hasta nivel subsegmentario, bajo anestesia local y sedación. Permite biopsia de lesiones sospechosas, estudio de un pulmón/lóbulo colapsado, y muestreo microbiológico en infecciones no resueltas."
        }
      ],
      "fisiologiaNormal": "Estos estudios no evalúan 'lo normal' en sí, sino que sirven para detectar desviaciones de la anatomía y función normales. Por eso su interpretación siempre depende de conocer primero cómo se ve/funciona un pulmón sano: en la Rx, un parénquima con densidad aire uniforme sin opacidades ni pérdida de volumen; en la espirometría, un FEV1/FVC normal (>70% aproximadamente) con volúmenes dentro de lo predicho para edad/talla/sexo.",
      "correlacionClinica": "Cada síntoma respiratorio 'apunta' a un estudio distinto: disnea aguda o hemoptisis → Rx de tórax urgente; sospecha de EPOC/asma → espirometría con prueba post-broncodilatador (respuesta significativa = aumento ≥10% del FEV1 o FVC según ERS/ATS); derrame pleural → toracocentesis; lesión endobronquial o infección no resuelta → fibrobroncoscopía. Vas a usar esta lógica de selección de estudio en cada enfermedad que veas de aquí en adelante — por ejemplo, el diagnóstico de EPOC exige espirometría con FEV1/FVC <70% sin reversibilidad significativa, dato que ya vas a reconocer.",
      "puntosClave": [
        "La Rx de tórax siempre se interpreta junto con la historia clínica, nunca aislada",
        "Espirometría: FEV1/FVC bajo = obstructivo; FVC bajo con cociente normal = restrictivo",
        "Reversibilidad post-broncodilatador ≥10% en FEV1 o FVC distingue asma de EPOC",
        "La toracocentesis tiene complicación más frecuente el neumotórax (12-30% de los procedimientos)",
        "La TC de alta resolución es el estándar de oro para bronquiectasias (signo del anillo de sello — diámetro bronquial > diámetro del vaso adyacente)"
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
